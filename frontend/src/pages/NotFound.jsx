import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Page introuvable</p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Revenir à l’accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
