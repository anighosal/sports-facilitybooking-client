import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button, message } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSignupMutation } from "../redux/features/signupApi/signupApi";
import { resetSignupState } from "../redux/features/signupApi/signupSlice";
import { useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";

interface SignupFormInputs {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  role: "user";
}

const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const [signup] = useSignupMutation();
  const { success, user }: any = useSelector(
    (state: RootState) => state.signup
  );
  const [, setErrorMessages] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: SignupFormInputs) => {
    try {
      await signup(data).unwrap();
      message.success("User Registerd successfully");
      setErrorMessages([]);
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  useEffect(() => {
    if (success && user) {
      console.log("User created successfully:", user);
      dispatch(resetSignupState());
    }
  }, [success, user, dispatch]);

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mb-8">
      <form className="w-1/2 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Name{" "}
          </label>
          <input
            className="border-2 w-72"
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="John Doe"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-72"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="john@example.com"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="border-2 w-72"
            id="phone"
            {...register("phone", { required: "Phone is required" })}
            placeholder="123-456-7890"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="border-2 w-72"
            id="address"
            {...register("address", { required: "Address is required" })}
            placeholder="123 Main St"
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border-2 w-72"
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            placeholder="********"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <input
            type="hidden"
            className="block text-gray-700 font-medium mb-1 border-2 w-72"
            {...register("role")}
            value="user"
          />
        </div>
        <Button
          htmlType="submit"
          className="w-full object-contain text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </Button>
        Already signup <br />
        <Link to="/login">
          <span className="text-blue-700">Log in</span>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
