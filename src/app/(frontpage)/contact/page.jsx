import ContactInfo from "@/components/Contact/ConatactInfor";
// import ContactBanner from "@/components/Contact/ContactBanner";
import ContactBanner2 from "@/components/Contact/ContactBanner2";
import ContactForm from "@/components/Contact/ContactForm";

import React from "react";

const ContactPage = () => {
  return (
    <div>
      {/* <ContactBanner /> */}
      <ContactBanner2 />
      <ContactInfo />
      <ContactForm />
    </div>

  );
};

export default ContactPage;
