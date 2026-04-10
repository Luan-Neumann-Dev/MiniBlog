# MiniBlog - React & Firebase

> A full-stack blog application built with React and Firebase, featuring authentication and real-time post management

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

![Project Demo](https://github.com/user-attachments/assets/8a73f16e-9a0c-4cfb-af26-282628446eda)
![Project Demo](https://github.com/user-attachments/assets/3bf0c547-ff84-4518-9f95-a82925b6aad8)
![Project Demo](https://github.com/user-attachments/assets/f71ded65-f438-4e53-8e2e-3cc32393669f)

## 🎯 About

MiniBlog is a full-stack web application that allows users to create, edit, and manage blog posts with authentication.

The project was built using React for the frontend and Firebase for backend services such as authentication and database. It focuses on modern frontend architecture, reusable hooks, and real-time data handling.

## ✨ Key Features

- 🔐 **Authentication System** - User registration and login using Firebase Auth
- 📝 **Post Management** - Create, edit, and delete blog posts
- 📊 **User Dashboard** - Manage your own posts
- 🔎 **Search Functionality** - Filter posts by keywords
- ⚡ **Real-time Database** - Data stored and fetched from Firestore
- 🧩 **Custom Hooks** - Reusable logic for CRUD operations

## 🛠️ Tech Stack

**Frontend:**
- React - UI library
- Vite - Build tool
- CSS Modules - Scoped styling

**Backend (BaaS):**
- Firebase Authentication - User management
- Firestore - NoSQL database

**Architecture:**
- Context API - Global state management (Auth)
- Custom Hooks - Data handling abstraction

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/miniblog.git

# Navigate to project
cd miniblog

# Install dependencies
npm install

# Run the project
npm run dev
```

Access:
```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/        # Reusable components (Navbar, Footer, etc.)
├── pages/             # Application pages
├── hooks/             # Custom hooks (CRUD operations)
├── context/           # Auth context
├── firebase/          # Firebase configuration
├── assets/            # Static assets
├── App.jsx            # Main component
└── main.jsx           # Entry point
```

## 💡 Technical Highlights

### Custom Hooks for CRUD

The project abstracts Firestore operations into reusable hooks:
```javascript
const { insertDocument } = useInsertDocument("posts");
```

### Authentication with Context API

Global authentication state managed via context:
- User session control
- Protected routes behavior
- Centralized auth logic

## 📚 What I Learned

**Technical Skills:**

- Building SPAs with React and Vite
- Integrating Firebase (Auth + Firestore)
- Creating reusable custom hooks
- Managing global state with Context API

**Best Practices:**

- Separation of concerns
- Component-based architecture
- Hook-based logic reuse

## 🗺️ Roadmap

- [ ] Add likes/reactions to posts
- [ ] Add comments system
- [ ] Improve UI/UX
- [ ]Add pagination
- [ ] Deploy (Firebase Hosting / Vercel)

## 📝 Notes
- This is a learning project focused on modern React development
- Uses Firebase as a backend service (BaaS)
- Easily extendable into a full production blog

## 📄 License
MIT License

## 👤 Author

**Luan Henrique Neumann**

- LinkedIn: [LuanNeumannDev](https://www.linkedin.com/in/luan-henrique-neumann-dev/)
- GitHub: [@Luan-Neumann-Dev](https://github.com/Luan-Neumann-Dev)
- Email: luan.neumann.dev@gmail.com

---

⭐ Found this helpful? Give it a star!