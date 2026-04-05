
const express = require("express");
const router = express.Router();

const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

// CREATE → Admin only
router.post("/", auth, checkRole("admin"), createTransaction);

// READ → Admin + Analyst
router.get("/", auth, checkRole("admin", "analyst"), getTransactions);

// UPDATE → Admin only
router.put("/:id", auth, checkRole("admin"), updateTransaction);

// DELETE → Admin only
router.delete("/:id", auth, checkRole("admin"), deleteTransaction);

module.exports = router;