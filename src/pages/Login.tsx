import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className=" p-6 rounded-lg shadow-lg w-96 border border-gray-300">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
