import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/user.model.js";
import Product from "./models/product.model.js";
import Order from "./models/order.model.js";
import connectDB from "./config/db.js";
dotenv.config();

connectDB();

const importData = async () => {
  try {
    // clear out all existing data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // insert users
    const createdUsers = await User.insertMany(users);

    // get admin user
    const adminUser = createdUsers[0]._id;

    // add admin user to each product
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // insert products
    await Product.insertMany(sampleProducts);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    // clear out all existing data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

if(process.argv[2] === '-d'){
  destroyData();
} else if(process.argv[2] === '-i'){
  importData();
}

// run this command to import data:
// node backend/seeder -i
// run this command to destroy data:
// node backend/seeder -d