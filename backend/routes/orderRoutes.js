const router = require("express").Router();
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const { auth, admin } = require("../middlewares/auth");

// Place order (Customer)
router.post("/create", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let total = 0;
    cart.items.forEach(item => {
      total += item.product.price * item.quantity;
    });

    const order = new Order({
      user: req.user.id,
      items: cart.items,
      totalAmount: total
    });

    await order.save();

    // Clear cart
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get my orders (Customer)
router.get("/my-orders", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate("items.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




// ================= ADMIN ROUTES =================

// Get all orders (Admin)
router.get("/all", auth, admin, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("items.product");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update order status (Admin)
router.put("/update-status/:id", auth, admin, async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
