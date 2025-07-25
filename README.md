# 🧩 Assignment React + Vite - Frontend API Integration

Repositori ini berisi source code aplikasi **Frontend** menggunakan **React.js + Vite**, dengan integrasi ke API publik dari [Reqres.in](https://reqres.in). Aplikasi ini dikembangkan sebagai bagian dari tugas Milestone pada Bootcamp Front End Web Development.

---

## ✅ Fitur yang Diimplementasikan

### 🔐 Autentikasi

- ✅ **Register (Successful)** – Mendaftarkan user baru dan menyimpan token ke `localStorage`.
- ✅ **Register (Unsuccessful)** – Validasi error saat input kosong.
- ✅ **Login (Successful)** – Login dan menyimpan token.
- ✅ **Login (Unsuccessful)** – Menampilkan error ketika kredensial salah.

### 👤 Manajemen User

- ✅ **List Users** – Menampilkan daftar pengguna dari API Reqres.
- ✅ **User Detail** – Menampilkan data lengkap user berdasarkan ID.
- ✅ **Pagination** – Navigasi halaman menggunakan tombol Prev dan Next.

### 🔒 Protected Route

- ✅ Halaman tertentu hanya bisa diakses setelah login.
- ✅ Redirect otomatis ke login jika token tidak ditemukan.

### 📱 Responsive Design

- ✅ Desain menyesuaikan perangkat mobile dan desktop.

---

## 🧪 Teknologi dan Tools

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- ESLint (linter)

---

## 📁 Struktur Folder

```bash
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                     # Gambar dan aset statis
│   ├── components/                # Komponen umum
├   ├── EmailInfoModal.jsx
│   ├── HomeCard.jsx
│   ├── Navbar.jsx
│   └── UserCard.jsx
├── pages/
│   │   ├── HomePage.jsx           # Halaman utama
│   │   ├── LoginPage.jsx          # Halaman login
│   │   ├── RegisterPage.jsx       # Halaman registrasi
│   │   ├── UserDetailPage.jsx     # Detail user
│   │   └── routes/
│   │       └── ProtectedRoute.jsx # Proteksi akses halaman
│   ├── services/
│   │   └── Api.jsx                # Konfigurasi endpoint API
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point aplikasi
│   └── index.css                  # Styling utama
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
