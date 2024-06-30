import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Import your image
import rightBoxImage from "../assets/GoodByeGiphy.webp"; // Replace with actual path

const CustomContact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Me",
          from_email: form.email,
          to_email: "hamdiselimakin@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Your message has been sent successfully.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="md:w-1/2 bg-blue-300 p-8 rounded-lg shadow-md"
      >
        <h2 className={styles.sectionHeadText}>Contact Me</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-800 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="bg-white py-3 px-4 rounded-lg outline-none border border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-800 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="bg-white py-3 px-4 rounded-lg outline-none border border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-800 font-medium mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className="bg-white py-3 px-4 rounded-lg outline-none border border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="md:w-1/2 bg-blue-300 rounded-lg shadow-md"
      >
        <img src={rightBoxImage} alt="Right Box Image" className="w-full h-full object-cover rounded-lg" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(CustomContact, "contact");
