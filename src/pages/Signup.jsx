import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setIsAuth }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user"); // default role
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email.");
      return;
    }

    // Save the user in localStorage
    const user = { name, email, role };
    localStorage.setItem("user", JSON.stringify(user));

    // Update app auth state and redirect
    setIsAuth(true);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-80 space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Signup</h1>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors duration-200">
          Signup
        </button>
      </form>
    </div>
  );
}
