import React from 'react';
import { FaTelegram, FaXTwitter  } from 'react-icons/fa6';

const ContactPage: React.FC = () => {
  return (
    <div className="text-black h-[82vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      <a href="mailto:contact@draive.ai" className="text-2xl text-blue-500 hover:text-blue-700 mt-2">
        info@firmankirjanpito.fi
      </a>
      <a href="tel:+3584578726367" className="text-2xl text-blue-500 hover:text-blue-700 mt-2">
        +3584578726367
      </a>
    </div>
  );
};

export default ContactPage;
