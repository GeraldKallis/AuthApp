import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold mb-4 text-red-700">Access Denied</h1>
      <p className="text-gray-700 mb-4">
        You do not have permission to view this page.
      </p>
      <Link to="/dashboard" className="text-blue-600 hover:underline">
        Go back to Dashboard
      </Link>
    </div>
  );
}
