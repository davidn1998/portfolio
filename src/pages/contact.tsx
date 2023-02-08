import { ContactForm } from "@/components/ContactForm";
import { Meta } from "@/components/Meta";

const contact = () => {
  return (
    <>
      <Meta title="Contact" />
      <section className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center text-center">
        <h1 className="mb-8 text-2xl font-bold">Contact Me</h1>
        <ContactForm />
      </section>
    </>
  );
};

export default contact;
