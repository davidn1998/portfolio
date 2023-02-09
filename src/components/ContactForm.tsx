import axios, { AxiosRequestConfig } from "axios";
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

interface EncodeData extends ContactData {
  "form-name": string;
}

export const ContactForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactData>();

  // Transform form data to a format netlify can read
  const encode = (data: EncodeData) => {
    return Object.keys(data)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(
            data[key as keyof ContactData]
          )}`
      )
      .join("&");
  };

  const reqConfig: AxiosRequestConfig<string> = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const onSubmit: SubmitHandler<ContactData> = (data: ContactData) => {
    axios
      .post("/contact", encode({ "form-name": "contact", ...data }), reqConfig)
      .then(() => {
        toast.success("Message Sent 🚀", {
          position: "top-center",
        });
      })
      .catch(() => {
        toast.error(
          `Sorry 🤕 An error occurred and the message could not be sent. Please try again`,
          {
            position: "top-center",
          }
        );
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
        name="contact"
        onSubmit={handleSubmit(onSubmit)}
        data-netlify="true"
        data-netfliy-recaptcha="true"
        className="flex flex-col rounded-2xl bg-gray-50 p-12 text-center text-black shadow-lg dark:bg-neutral-800 dark:text-white dark:shadow-neutral-800 md:mt-32"
      >
        <h1 className="mb-8 text-2xl font-bold">Contact Me</h1>
        <input type="hidden" name="form-name" value="contact" />
        <input
          placeholder="Name"
          {...register("name", {
            required: { value: true, message: "Name is required" },
          })}
          className="rounded-md bg-neutral-300 p-2 shadow-md dark:bg-neutral-700"
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
          className="mt-6 rounded-md bg-neutral-300 p-2 shadow-md dark:bg-neutral-700"
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
          className="mt-6 rounded-md bg-neutral-300 p-2 shadow-md dark:bg-neutral-700"
        />
        {errors.message && (
          <p className="mt-2 text-red-400">{errors?.message?.message}</p>
        )}
        <div data-netlify-recaptcha="true"></div>
        <button
          type="submit"
          className="mt-8 w-[50%] self-center rounded-md bg-neutral-600 p-2 text-neutral-50 shadow-lg transition-colors duration-300  hover:bg-neutral-400 hover:text-neutral-700 dark:bg-neutral-200  dark:text-neutral-700 dark:hover:bg-neutral-400 dark:hover:text-white"
        >
          Send
        </button>
      </form>
    </>
  );
};
