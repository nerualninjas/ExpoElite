import ContactInfo from "@/components/Contact/ConatactInfor";
import ContactBanner from "@/components/Contact/ContactBanner";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
    </div>

  );
};

export default ContactPage;
