import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userData = useSelector((state: any) => state.auth);
  console.log(userData);
  return (
    <div className=" mb-10">
      <h1 className="text-3xl font-bold text-primary bg-white shadow-lg text-center">
        Welcome, {userData?.user.name}!
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="bg-gray-100 p-6 rounded shadow-md hover:bg-primary">
          <Link to="/admin/facilities">
            {" "}
            <h2>Facility Management</h2>
            <p>Manage all facilities</p>
          </Link>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md hover:bg-primary">
          <Link to="/admin/bookings">
            <h2>Booking Management</h2>
            <p>View all bookings</p>
          </Link>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md hover:bg-primary">
          <Link to="/admin/create-admin">
            <h2>Add Admin</h2>
            <p>Create a new admin account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
