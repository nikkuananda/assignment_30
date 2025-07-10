import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../services/Api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Email dan password tidak boleh kosong.");
      return;
    }

    try {
      const res = await Api.post("/register", form);

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        alert("Registrasi berhasil! Silakan login.");
        navigate("/login");
      } else {
        setError("Registrasi berhasil tapi tidak menerima token.");
      }
    } catch (err) {
      console.error("REGISTER ERROR:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Registrasi gagal.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
