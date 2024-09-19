import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Oops! Page not found</h2>
      <p className="mb-6 text-lg text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-primary hover:bg-red-600 rounded-md "
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
