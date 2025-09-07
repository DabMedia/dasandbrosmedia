import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButton";

const Contact = () => {
  const items = [
    {
      icon: <Phone size={40} className="text-teal-500" />,
      title: "CALL US",
      detail: "+91 82491 30282",
    },
    {
      icon: <MapPin size={40} className="text-teal-500" />,
      title: "ADDRESS",
      detail: "3rd Floor, D-124, Koelnagar, Rourkela, Odisha - 769014",
    },
    {
      icon: <Mail size={40} className="text-teal-500" />,
      title: "EMAIL US",
      detail: "info@dasandbrosmedia.com",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="py-8 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Get in touch with us — we’d love to hear from you.
          </p>
        </motion.div>

        <motion.form
          className="max-w-6xl mx-auto bg-white rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CustomInput type="text" placeholder="Enter your name" />
            <CustomInput type="email" placeholder="Enter your email" />
          </div>

          <textarea
            placeholder="Enter your message"
            rows="5"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-teal-100 resize-none"
          />

          <CustomButton
            text="Submit"
            className="bg-black text-white border border-black hover:bg-white hover:text-black text-lg px-6 py-2 rounded-md transition duration-300"
          />
        </motion.form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p
              className={`text-gray-600 ${item.title === "ADDRESS" ? "text-left max-w-[250px]" : ""
                }`}
            >
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.308152002998!2d84.85301387531138!3d22.253315779725497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f5b37dfeb0b%3A0x7ffdbd70f7e6ffdd!2sKoelnagar%2C%20Rourkela%2C%20Odisha%20769014!5e0!3m2!1sen!2sin!4v1694165412345!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md shadow-md mt-12"
      />

    </section>
  );
};

export default Contact;
