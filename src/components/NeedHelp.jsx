import React, { useState } from "react";
import { FiArrowUpRight, FiZap } from "react-icons/fi";
import NdImage from "../images/Nd-1.png";

const NeedHelp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please fill out this field";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please fill out this field";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please fill out this field";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setSubmitted(false);
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      {/* DESKTOP CONTAINER */}
      <div className="max-w-7xl mx-auto">
        {/* GAP BETWEEN IMAGE & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-2xl overflow-hidden shadow-2xl">

          {/* LEFT IMAGE */}
          <div className="hidden lg:block rounded-2xl overflow-hidden">
            <img
              src={NdImage}
              alt="Need Help"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="bg-black text-white p-8 lg:p-16 rounded-2xl flex flex-col justify-center">
            {/* HEADER */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <FiZap className="text-green-500" />
                <span className="text-sm uppercase tracking-wider">
                  Connect With Us!
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Do you need help?
              </h2>
              <p className="text-gray-300 text-4xl lg:text-5xl font-bold">
                contact with us!
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* NAME & EMAIL */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-black border ${
                      errors.name ? "border-red-500" : "border-white"
                    } rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white`}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black border ${
                      errors.email ? "border-red-500" : "border-white"
                    } rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white`}
                  />
                </div>
              </div>

              {/* PHONE & SUBJECT */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone*"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-black border ${
                    errors.phone ? "border-red-500" : "border-white"
                  } rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white`}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-black border ${
                    errors.subject ? "border-red-500" : "border-white"
                  } rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white`}
                />
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows="5"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-black border ${
                  errors.message ? "border-red-500" : "border-white"
                } rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white resize-none`}
              />

              {/* ERROR MESSAGE */}
              {submitted && Object.values(errors).some(Boolean) && (
                <p className="text-red-500 text-center">
                  One or more fields have an error. Please check again.
                </p>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-white text-black font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105"
              >
                Submit Now
                <FiArrowUpRight size={22} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
