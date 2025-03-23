import ContactForm from "../components/ContactForm";

export default async function Contact() {
  return (
    <>
      <div className={`flex flex-col`}>
        <ContactForm />
      </div>
    </>
  );
}
