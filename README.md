# Assigment React + Vite - Frontend API Integration

Repositori ini berisi source code aplikasi frontend menggunakan **React.js + Vite** yang mengintegrasikan API dari [Reqres.in](https://reqres.in). Aplikasi ini dibuat untuk memenuhi tugas Milestone Front End Web Development Bootcamp.

---

## ✅ Fitur yang Diimplementasikan

### 🔐 Autentikasi

- ✅ **Register (Successful)** – Mendaftarkan user baru dan menyimpan token.
- ✅ **Register (Unsuccessful)** – Validasi input kosong ditampilkan saat form tidak lengkap.
- ✅ **Login (Successful)** – Login dan menyimpan token ke `localStorage`.
- ✅ **Login (Unsuccessful)** – Menampilkan pesan error jika email/password salah.

### 👥 Manajemen Pengguna

- ✅ **List Users** – Menampilkan daftar pengguna dari API Reqres.
- ✅ **User Detail** – Menampilkan informasi detail berdasarkan ID user.
- ✅ **Pagination** – Navigasi halaman menggunakan tombol Prev & Next.

### 🔐 Protected Routes

- ✅ Hanya halaman tertentu yang dapat diakses jika user sudah login (token valid).
- ✅ Jika belum login, akan diarahkan ke halaman login.

### 📱 Responsive Design

- ✅ Tampilan disesuaikan untuk perangkat mobile maupun desktop.

---

## 📦 Teknologi dan Library yang Digunakan

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- ESLint (linting standar)

---

## 🧪 Struktur Folder

```bash
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── UserDetailPage.jsx
│   │   └── routes/
│   │       └── ProtectedRoute.jsx
│   ├── services/
│   │   └── Api.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
