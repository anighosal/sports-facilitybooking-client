import SignupForm from "./SignupForm";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className=" p-6 rounded-lg shadow-lg w-96 border border-gray-300">
        <SignupForm></SignupForm>
      </div>
    </div>
  );
};

export default RegisterPage;
