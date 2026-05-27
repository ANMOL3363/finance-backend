Live Link : https://finance-frontend-lrm834j99-anmol3363s-projects.vercel.app/
# Finance Backend API

This project is a backend system for managing financial records with role-based access. It allows users to add, view, update, and delete transactions, along with a dashboard that shows income, expenses, and balance.

## Features

* User registration and login using JWT
* Role-based access (Admin, Analyst, Viewer)
* Add, update, delete, and view transactions
* Filter transactions by type or category
* Dashboard summary (total income, total expense, net balance)

## Tech Stack

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose

## How to Run

1. Install dependencies
   npm install

2. Create a `.env` file and add:
   PORT=5000
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret

3. Start the server
   npm run dev

## API Routes

Auth:

* POST /api/auth/register
* POST /api/auth/login

Transactions:

* POST /api/transactions
* GET /api/transactions
* PUT /api/transactions/:id
* DELETE /api/transactions/:id

Dashboard:

* GET /api/dashboard/summary

## Example Response

{
"totalIncome": 50000,
"totalExpense": 2000,
"netBalance": 3000
}

---

This project focuses on clean backend structure, proper API design, and basic financial data handling.
