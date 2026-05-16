
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
router.post("/", createTransaction);

// READ → Admin + Analyst
router.get("/", getTransactions);

// UPDATE → Admin only
router.put("/:id", updateTransaction);

// DELETE → Admin only
router.delete("/:id", deleteTransaction);

module.exports = router;