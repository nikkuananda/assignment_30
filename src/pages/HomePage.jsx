import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `https://reqres.in/api/users?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "x-api-key": "reqres-free-v1",
            },
          }
        );
        setUsers(res.data.data);
        setTotalPages(res.data.total_pages);
      } catch (err) {
        console.error("Gagal ambil data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 flex flex-col">
      <div className="max-w-5xl mx-auto w-full p-4 flex flex-col flex-grow">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          User List
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="bg-white shadow-md rounded-lg p-4 text-center"
                >
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">
                    {user.first_name} {user.last_name}
                  </h3>
                  <p className="text-gray-500">{user.email}</p>
                  <Link
                    to={`/users/${user.id}`}
                    className="inline-block mt-3 text-blue-500 hover:underline"
                  >
                    Detail
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => setPage((p) => p - 1)}
                disabled={page === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                Prev
              </button>
              <span className="text-gray-700 font-medium">
                Page {page} from {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>

      {/* Tombol logout  */}
      <div className="w-full p-4 flex justify-center bg-white shadow-inner">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
