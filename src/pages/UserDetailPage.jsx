import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`https://reqres.in/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "x-api-key": "reqres-free-v1",
          },
        });
        setUser(res.data.data);
      } catch (err) {
        console.error("Gagal ambil detail user:", err);
        setError("Gagal memuat detail user.");
      }
    };

    fetchUser();
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;
  if (!user) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">User Details</h2>
        <img
          src={user.avatar}
          alt={user.first_name}
          className="mx-auto rounded-full w-32 h-32 mb-4 border-4 border-blue-200 shadow"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {user.first_name} {user.last_name}
        </h3>
        <p className="text-gray-600 mb-6 text-sm">Email: {user.email}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow hover:bg-green-600 transition duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default UserDetailPage;
