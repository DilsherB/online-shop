import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
import { UserDataError, getUserData } from "../utils/getUserData.js";

// @desc    Register a new user
// @route   POST /api/users/
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    generateToken(res, user._id);
    getUserData(res, 201);
  } else {
    UserDataError(res, 400, "Invalid user data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    getUserData(res, 200, user);
  } else {
    UserDataError(res, 401, "Invalid email or password");
  }
});

// @desc    Logout user & clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("JWT", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    getUserData(res, 200, user);
  } else {
    UserDataError(res, 404, "User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const { name, email, password } = req.body;
  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      user.password = password;
    }
    const updatedUser = await user.save();
    // generateToken(res, updatedUser._id);
    getUserData(res, 200, updatedUser);
  } else {
    UserDataError(res, 404, "User not found");
  }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  // res.send("Get all users");
  const users = await User.find({});
  if (users) {
    res.json(users);
  } else {
    UserDataError(res, 404, "Users not found");
  }
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.body.id);
  if (user) {
    res.json({ message: "User removed" });
  } else {
    UserDataError(res, 404, "User not found");
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    UserDataError(res, 404, "User not found");
  }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userToUpdate = await User.findById(req.params.id);

  if (userToUpdate) {
    userToUpdate.name = name || userToUpdate.name;
    userToUpdate.email = email || userToUpdate.email;
    if (password) {
      userToUpdate.password = password;
    }

    const updatedUser = await userToUpdate.save();
    getUserData(res, 200, updatedUser);
  } else {
    UserDataError(res, 404, "User not found");
  }
});

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  logoutUser,
};
