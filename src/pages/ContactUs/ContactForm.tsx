import { FieldError, useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-4xl w-[50%] p-8">
      <div className="border-2 rounded-lg p-5">
        <h2 className="text-center text-2xl font-bold text-gray-700">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8 text-gray-700">
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            {errors.name && (
              <p className="text-red-500">
                {(errors.name as FieldError).message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500">
                {(errors.email as FieldError).message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Subject</label>
            <input
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            {errors.subject && (
              <p className="text-red-500">
                {(errors.subject as FieldError).message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows={5}
            ></textarea>
            {errors.message && (
              <p className="text-red-500">
                {(errors.message as FieldError).message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-primary hover:bg-red-600 text-white rounded-md"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
