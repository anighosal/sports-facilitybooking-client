import { useSelector } from "react-redux";

const UserDashboard = () => {
  const userData = useSelector((state: any) => state.auth);
  console.log(userData);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-green-600">
        Welcome, {userData?.user.name}!
      </h1>
    </div>
  );
};

export default UserDashboard;
