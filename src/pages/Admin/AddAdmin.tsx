import { message } from "antd";
import { useForm } from "react-hook-form";
import { useAddAdminMutation } from "../../redux/api/baseApi";

const AddAdmin = () => {
  const [addAdmin, { isLoading }] = useAddAdminMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const adminData = {
      ...data,
      role: "admin",
    };

    try {
      await addAdmin(adminData).unwrap();
      message.success("Admin added successfully!");
    } catch (error: any) {
      message.error(`Failed to add admin: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name?.message && (
            <p className="text-red-500">{String(errors.name.message)}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email?.message && (
            <p className="text-red-500">{String(errors.email.message)}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password?.message && (
            <p className="text-red-500">{String(errors.password.message)}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border rounded focus:outline-none"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone?.message && (
            <p className="text-red-500">{String(errors.phone.message)}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Address</label>
          <textarea
            className="w-full px-3 py-2 border rounded focus:outline-none"
            {...register("address", { required: "Address is required" })}
          ></textarea>
          {errors.address?.message && (
            <p className="text-red-500">{String(errors.address.message)}</p>
          )}
        </div>

        <input type="hidden" {...register("role")} value="admin" />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {isLoading ? "Creating Admin..." : "Create Admin"}
        </button>
      </form>
    </div>
  );
};

export default AddAdmin;
