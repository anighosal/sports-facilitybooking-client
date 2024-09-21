// UserDashboard.tsx

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Card Title</h3>
          <p className="text-gray-600">Some details about this card.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
