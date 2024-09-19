import { useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // Fetch user data, adjust the URL for your API
  //   const fetchUserData = async () => {
  //     const response = await axios.get("/api/admin/user");
  //     setUser(response.data);
  //   };

  //   fetchUserData();
  // }, []);

  return (
    <div>
      <h1>Welcome Back, {user?.name || "Admin"}!</h1>
      <p>Here's your personalized dashboard.</p>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2>Facility Management</h2>
          <p>Manage all facilities</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2>Booking Management</h2>
          <p>View all bookings</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2>Add Admin</h2>
          <p>Create a new admin account</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
