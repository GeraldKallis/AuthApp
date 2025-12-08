export default function Admin() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <p className="text-gray-700 mb-4">Welcome, {user?.name}. Only admins can see this page.</p>
    </div>
  );
}
