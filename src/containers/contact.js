import React from "react";
import { Contact } from "../components";

export function ContactContainer() {
  return (
    <Contact>
      <Contact.Slogan>
        Contact us! <span>We'll be in touch soon</span>
      </Contact.Slogan>
      <Contact.Inputs>
        <Contact.Input label="Your name" placeholder="Name" />
        <Contact.Input label="Subject" placeholder="Subject" />
        <Contact.MessageInput label="Message" placeholder="Message" />
      </Contact.Inputs>
    </Contact>
  );
}
