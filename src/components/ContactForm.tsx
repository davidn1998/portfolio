import axios from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

type ContactData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactData>();

  const onSubmit: SubmitHandler<ContactData> = (data: ContactData) => {
    axios
      .post("/contact", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Message Sent 🚀", {
          position: "top-center",
        });
      })
      .catch((err) => {
        toast.error(`Failed to send message. ${err}`, {
          position: "top-center",
        });
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-netlify="true"
        className="flex flex-col text-black dark:text-white"
      >
        <input
          placeholder="Name"
          {...register("name", {
            required: { value: true, message: "Name is required" },
          })}
          className="rounded-md bg-neutral-300 p-2 dark:bg-neutral-700"
        />
        {errors.name && (
          <p className="mt-2 text-red-400">{errors?.name?.message}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
          className="mt-6 rounded-md bg-neutral-300 p-2 dark:bg-neutral-700"
        />
        {errors.email && (
          <p className="mt-2 text-red-400">{errors?.email?.message}</p>
        )}
        <textarea
          placeholder="Message"
          {...register("message", {
            required: { value: true, message: "Message is required" },
          })}
          rows={4}
          className="mt-6 rounded-md bg-neutral-300 p-2 dark:bg-neutral-700"
        />
        {errors.message && (
          <p className="mt-2 text-red-400">{errors?.message?.message}</p>
        )}

        <button
          type="submit"
          className="mt-8 w-[50%] self-center rounded-md bg-neutral-600 p-2 text-neutral-50 transition-colors duration-300  hover:bg-neutral-400 hover:text-neutral-700 dark:bg-neutral-200  dark:text-neutral-700 dark:hover:bg-neutral-400 dark:hover:text-white"
        >
          Send
        </button>
      </form>
    </>
  );
};
