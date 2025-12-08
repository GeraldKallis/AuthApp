import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Load stored user (for demo)
    let user = null;
    try {
      user = JSON.parse(localStorage.getItem("user"));
    } catch (err) {
      user = null;
    }

    if (!user) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (email !== user.email || password !== "demo") {
      setError("Invalid credentials. Use any email from signup and password: 'demo'");
      return;
    }

    setError("");
    setIsAuth(true);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-80 space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200">
          Login
        </button>
        <p className="text-sm text-gray-600 mt-2 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
             Sign up
            </a>
            </p>
      </form>
    </div>
  );
}
