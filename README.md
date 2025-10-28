
# 📚 Bookstore Project  
A Full-Stack MERN (MongoDB • Express • React • Node.js) Web Application

---

## 🧭 Overview

The **Bookstore Project** is a modern, full-stack web app where users can browse a curated collection of books with details such as title, author, price, and cover image.  

It is built using the **MERN stack** — MongoDB for data storage, Express and Node.js for the backend API, and React (Vite) for the frontend interface.

This project demonstrates CRUD operations, REST API handling, and seamless frontend-backend integration — ideal for learning and portfolio display.

---

## 🌟 Features

- ✅ Browse all available books  
- ✅ View book title, author, description, and price  
- ✅ Add new books via backend API  
- ✅ Edit or delete existing books  
- ✅ Clean, modern, and responsive UI built with React  
- ✅ Real-time connection to MongoDB for persistent storage  

---

## 🧰 Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | React (Vite), CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Local / MongoDB Atlas) |
| **API Communication** | REST API (Fetch) |
| **Environment** | Node v18+, NPM v9+ |

---

## 🗂️ Project Structure

```

Bookstore-project/
│
├── backend/          # Express + Node backend
│   ├── models/       # MongoDB models (Book schema)
│   ├── routes/       # API routes
│   ├── server.js     # Main server file
│   └── package.json
│
├── frontend/         # React + Vite frontend
│   ├── src/
│   │   ├── api/      # API calls (fetching books)
│   │   ├── pages/    # React pages/components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md

````

---

## ⚙️ Getting Started (Run Locally)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ShreyaRChittaragi/Bookstore-project.git
cd Bookstore-project
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder and add your MongoDB connection details:

```env
MONGO_URI=mongodb://localhost:27017/bookstore
PORT=5000
```

Start the backend server:

```bash
npm start
```

Server will run at 👉 **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Frontend Setup

Open a new terminal window/tab:

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will start at 👉 **[http://localhost:5173](http://localhost:5173)**

---

### 4️⃣ Test the Connection

* Visit the frontend (`http://localhost:5173`)
* The list of books should appear — fetched from the backend API (`http://localhost:5000/api/books`)

---

## 🧪 API Documentation

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/books`     | Fetch all books     |
| GET    | `/api/books/:id` | Fetch book by ID    |
| POST   | `/api/books`     | Add a new book      |
| PUT    | `/api/books/:id` | Update book details |
| DELETE | `/api/books/:id` | Delete a book       |

### 📘 Example JSON for adding a new book

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 499,
  "description": "An easy and proven way to build good habits and break bad ones.",
  "image": "https://covers.openlibrary.org/b/id/12644522-L.jpg"
}
```

---

## 💡 Usage Instructions

1. Start both **backend** and **frontend** servers.
2. Open the app at `http://localhost:5173`.
3. Browse the list of books fetched from MongoDB.
4. Use backend routes (via Postman or frontend forms if built) to add/edit/delete books.
5. All changes reflect dynamically on the frontend.

---

## 🧩 Troubleshooting

| Issue                        | Solution                                                              |
| ---------------------------- | --------------------------------------------------------------------- |
| ❌ Frontend shows blank page  | Make sure backend server is running on port 5000                      |
| ❌ CORS Error                 | Install and use CORS in backend (`npm i cors` then `app.use(cors())`) |
| ❌ MongoDB not connecting     | Check `.env` MONGO_URI and that MongoDB service is running            |
| ❌ “Unexpected token <” error | Ensure correct API endpoint and backend is running                    |

---

## 🚀 Deployment

### 🌐 Frontend (Vercel or Netlify)

* Build your frontend:

  ```bash
  npm run build
  ```
* Deploy the `/dist` folder to Vercel/Netlify.

### ☁️ Backend (Render / Cyclic / Railway)

* Push your backend to a separate repo or subfolder.
* Add environment variables (`MONGO_URI`, `PORT`).
* Deploy from your GitHub repo.

### 🧵 Update API URL

In `frontend/src/api/booksAPI.js`, replace:

```js
fetch("http://localhost:5000/api/books")
```

with your deployed backend URL:

```js
fetch("https://your-backend-service.onrender.com/api/books")
```


## 🧑‍💻 Author

**👩‍💻 Shreya R. Chittaragi**

* 🌐 [Portfolio](https://shreyarchittaragi.github.io/Myportfolio/)
* 💼 [LinkedIn](https://www.linkedin.com/in/shreya-r-chittaragi-b1b28b353/)
* 🐙 [GitHub](https://github.com/ShreyaRChittaragi)

---

## 🏁 Future Enhancements

* Add authentication (login/register)
* Add book search and filters
* Deploy both frontend & backend
* Add shopping cart and checkout feature

---

## 🪪 License

This project is licensed under the **MIT License** — feel free to use and modify it.

---

⭐ **If you like this project, please consider giving it a star on GitHub!** ⭐

```

