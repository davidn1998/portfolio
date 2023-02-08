import { ContactForm } from "@/components/ContactForm";
import { Meta } from "@/components/Meta";

const contact = () => {
  return (
    <>
      <Meta title="Contact" />
      <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col">
        <ContactForm />
      </section>
    </>
  );
};

export default contact;
