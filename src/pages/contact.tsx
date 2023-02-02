import { ContactForm } from "@/components/ContactForm";
import { Meta } from "@/components/Meta";

type Props = {};

const contact = (props: Props) => {
  return (
    <div>
      <Meta title="Contact" />
      <section className="mx-auto flex max-w-lg flex-col">
        <h1 className="mb-8 text-2xl font-bold">Contact Me</h1>
        <ContactForm />
      </section>
    </div>
  );
};

export default contact;
