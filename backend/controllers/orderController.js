import asycHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asycHandler(async (req, res) => {
  res.response("add order items");
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asycHandler(async (req, res) => {
  res.response("get my orders");
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asycHandler(async (req, res) => {
  res.response("get order by id");
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asycHandler(async (req, res) => {
  res.response("update order to paid");
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asycHandler(async (req, res) => {
  res.response("update order to delivered");
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asycHandler(async (req, res) => {
  res.response("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
