export default function Dashboard({ setIsAuth }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">
        Dashboard
      </h1>
      <p className="mb-6 text-gray-700">Welcome, {user?.name}!</p>
      <p className="mb-6 text-gray-700">Role: {user?.role}</p>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          setIsAuth(false);
        }}
        className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition-colors duration-200"
      >
        Logout
      </button>
    </div>
  );
}
