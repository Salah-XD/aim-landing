"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    setIsSubmitting(true);
    setIsSuccess(false);

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Subject", subject);
    formData.append("Message", message);
    formData.append("_captcha", "false");
    formData.append("_subject", subject);
    formData.append("_replyto", email);
    const response = await fetch(
      "https://formsubmit.co/3bf01ecbb421cc57a5fde59ab6ce8908",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSuccess(true); 
    }

    setIsSubmitting(false); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h2 className="block antialiasexd tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          Contact us
        </h2>
      </div>
      <div className="w-full max-w-4xl bg-white p-8 rounded shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-4 mt-6 ">
            <div className="mb-6">
              <div className="flex items-center ">
                <FaPhoneAlt className="mr-2" />
                <span className="font-bold text-xl">Call us:</span>
              </div>
              <span className="block">+91 9345253890</span>
            </div>
            <div className="mb-6">
              <div className="flex items-center ">
                <FaEnvelope className="mr-2" />
                <span className="font-bold text-xl">Email us:</span>
              </div>
              <span className="block ">aimuniversse@gmail.com</span>
            </div>
            <div>
              <div className="flex items-center ">
                <FaMapMarkerAlt className="mr-2" />
                <span className="font-bold text-xl">Address:</span>
              </div>
              <span className="block ">2, Kelimel street, Lekshmipuram, Ganapathy, Coimbatore, Tamil Nadu 641006</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block   font-bold text-sm mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block   font-bold text-sm mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block   font-bold text-sm mb-2">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block  font-bold text-sm mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New submission!" />
              <input type="hidden" name="_replyto" value={email} />
              <button
                type="submit"
                className="align-middle select-none font-sans font-bold text-xl text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 w-full lg:w-fit"
                style={{ position: "relative", overflow: "hidden" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
            {isSuccess && (
              <div className="mt-4 text-green-600 font-bold text-xl">
                Your message has been sent successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
