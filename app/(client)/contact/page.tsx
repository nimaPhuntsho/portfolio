import ContactForm from "@/app/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact 📞",
  description: "Portfolio designed and developed by Nima",
};

export default async function Contact() {
  return (
    <>
      <ContactForm />
    </>
  );
}
