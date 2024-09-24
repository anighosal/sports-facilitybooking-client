import { Button } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "programming-hero",
    },
  });

  const [login] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data: LoginFormInputs) => {
    const toastId = toast.loading("Logging in Successfully");
    try {
      const res = await login(data).unwrap();
      localStorage.setItem("token", res.token);
      const user = verifyToken(res.token) as TUser;

      dispatch(
        setUser({
          user: {
            ...user,
            role: res.data.role,
            id: "",
            name: "",
            email: "",
          },
          token: res.token,
        })
      );
      toast.loading("Logging in Successfully", { id: toastId, duration: 2000 });

      if (res.data.role === "admin") {
        navigate(`/${user.role}`);
      } else if (res.data.role === "user") {
        navigate(`/${user.role}`);
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-group">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email:
          </label>
          <input
            className={`border-2 border-gray-300 rounded-lg w-full p-2 focus:border-blue-500 focus:outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group relative">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password:
          </label>
          <input
            className={`border-2 border-gray-300 rounded-lg w-full p-2 pr-10 focus:border-blue-500 focus:outline-none ${
              errors.password ? "border-red-500" : ""
            }`}
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}

          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-500" />
            ) : (
              <FaEye className="text-gray-500" />
            )}
          </button>
        </div>

        <div className="text-center">
          <Button
            htmlType="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </Button>
        </div>
      </form>

      <p className="text-center mb-3">
        New Here?{" "}
        <Link to="/auth/signup">
          <span className="text-blue-700">Create an account</span>
        </Link>
      </p>
      <Link to="/" className="flex items-center space-x-2">
        <FaHome className="text-xl text-primary" />
      </Link>
    </div>
  );
};

export default LoginForm;
