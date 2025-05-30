import { Metadata } from "next";
import ContactForm from "../components/ContactForm";
export const metadata: Metadata = {
  title: "Contact 📞",
  description: "Portfolio designed and developed by Nima",
};

export default async function Contact() {
  return (
    <>
      <div className={`flex flex-col`}>
        <ContactForm />
      </div>
    </>
  );
}
