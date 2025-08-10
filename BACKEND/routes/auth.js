// ===================== Imports =====================
const express = require("express");
const {
  register,
  login,
  getMe,
  logout,
  googleAuth,
  updateMe,
  deleteMe,
} = require("../controllers/authController");
const { protect } = require("../middleware/auth");

// ===================== Router Setup =====================
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleAuth);
router.get("/logout", logout);
router.get("/me", protect, getMe);
router.put("/me", protect, updateMe);
router.delete("/me", protect, deleteMe);

module.exports = router;
