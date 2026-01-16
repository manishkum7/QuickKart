# 🛒 QuickKart – MERN E-Commerce Project

QuickKart is a full-stack MERN e-commerce project that I built to practice real-world application development.  
It includes authentication, product management, cart system, and order placement with a clean UI using Material UI.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)  
- Material UI (MUI)  
- Axios  
- React Router DOM  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  
- bcryptjs  

---

## ✨ Features

- User Register & Login  
- JWT based authentication  
- Product listing with image, price, description & stock  
- Add to cart  
- View cart with product images  
- Place order  
- Clean and responsive UI with Material UI  
- Separate frontend and backend  

---

## 📁 Project Structure

QuickKart/
│
├── frontend/ → React + Material UI
└── backend/ → Node + Express + MongoDB


---

## ⚙️ Backend Setup

1. Go to backend folder:
cd backend

2. Install dependencies:
npm install

3. Start backend server:
npm start

Backend runs on:  
http://localhost:5000


---

## 🎨 Frontend Setup

1. Go to frontend folder:
cd frontend


2. Install dependencies:
npm install

3. Start frontend:
npm run dev

Frontend runs on:  
http://localhost:5173

---

## 🔐 Authentication Flow

Register → Login → Token stored in localStorage  

Token is used for:
- Add to cart  
- View cart  
- Place orders  

---

## 🖼 Product Fields

Each product contains:
- Name  
- Price  
- Description  
- Image (real URL)  
- Category  
- Count In Stock  

---

## 🛍 Cart Features

- Shows product image  
- Shows name, price & quantity  
- Place order button  
- Empty cart message when no items  

---

## 📦 API Endpoints

| Method | Route                | Description           |
|-------|---------------------|----------------------|
| POST  | /api/auth/register  | Register user        |
| POST  | /api/auth/login     | Login user           |
| GET   | /api/products       | Get all products     |
| POST  | /api/cart/add       | Add product to cart  |
| GET   | /api/cart           | Get user cart        |
| POST  | /api/orders/create  | Place order          |

---


---

## 🙌 Author

**Manish Kumar**  
MERN Stack Developer  
QuickKart Project 🚀
