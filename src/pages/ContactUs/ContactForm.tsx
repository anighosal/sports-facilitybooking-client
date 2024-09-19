import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle the form submission here
    // Send form data to API or email service
  };

  return (
    <div className="max-w-4xl w-[50%] p-8  ">
      {/* Contact Form */}

      <div className="border-2 rounded-lg p-5">
        <h2 className="text-center text-2xl font-bold text-gray-700">
          contact us{" "}
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
              <p className="text-red-500">{errors.name.message}</p>
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
              <p className="text-red-500">{errors.email.message}</p>
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
              <p className="text-red-500">{errors.subject.message}</p>
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
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-primary hover:bg-red-600 text-white rounded-md "
          >
            Contact Us
          </button>
        </form>
      </div>

      {/* Contact Details */}
    </div>
  );
};

export default ContactForm;
