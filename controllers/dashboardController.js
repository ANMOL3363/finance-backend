
const Transaction = require("../models/Transaction");
const mongoose = require("mongoose");

exports.getSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const summary = await Transaction.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $group: {
          _id: null,
          totalIncome: {
            $sum: {
              $cond: [{ $eq: ["$type", "income"] }, "$amount", 0],
            },
          },
          totalExpense: {
            $sum: {
              $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0],
            },
          },
        },
      },
    ]);

    const result = summary[0] || {
      totalIncome: 0,
      totalExpense: 0,
    };

    const netBalance = result.totalIncome - result.totalExpense;

    res.json({
      totalIncome: result.totalIncome,
      totalExpense: result.totalExpense,
      netBalance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};