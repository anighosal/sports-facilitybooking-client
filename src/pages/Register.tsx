import { Button, Input, message, Select } from "antd";
import React from "react";
import { useForm } from "react-hook-form";

import { createUser, TUser } from "../redux/features/user/createUser";
import { useAppDispatch } from "../redux/hooks";

const { Option } = Select;

const Register: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TUser>();

  const onSubmit = async (data: TUser) => {
    console.log("Errors:", errors); // Log errors here
    console.log("Submitted data:", data);
    try {
      await dispatch(createUser(data)).unwrap();
      message.success("Registration successful!");
    } catch (error) {
      message.error("Registration failed. Please try again.");
      console.error("Registration error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4 text-center">Sign Up</h2>

      {/* Name Field */}

      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name:
        </label>
        <Input
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email:
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">
          Password:
        </label>
        <Input.Password
          id="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1">
          Phone:
        </label>
        <Input
          id="phone"
          placeholder="Enter your phone number"
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      {/* Address Field */}
      <div className="mb-4">
        <label htmlFor="address" className="block mb-1">
          Address:
        </label>
        <Input
          id="address"
          placeholder="Enter your address"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/* Role Field */}
      <div className="mb-4">
        <label htmlFor="role" className="block mb-1">
          Role:
        </label>
        <Select
          id="role"
          {...register("role", { required: "Role is required" })}
          onChange={(value) => setValue("role", value)}
          className="w-full"
        >
          <Option value="user">User</Option>
          <Option value="admin">Admin</Option>
        </Select>
        {errors.role && <p className="text-red-500">{errors.role.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="primary" htmlType="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
};

export default Register;
