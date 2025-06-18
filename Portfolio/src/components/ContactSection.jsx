import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    acceptTerms: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const dropdownRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const topics = [
    "Web Development",
    "UI/UX Design",
    "Branding",
    "Consultation",
    "Other",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTopicSelect = (topic) => {
    setFormData((prev) => ({ ...prev, topic }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_name: "Max",
        topic: formData.topic,
        message: formData.message,
        phone: formData.phone || "Not provided",
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", result);
      console.log(templateParams);
      setSubmitStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        acceptTerms: false,
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-32 fade-in-section">
      <div className="flex flex-col items-center gap-5 mb-16">
        <h3 className="text-xl font-semibold text-gray-800 font-['Roboto'] leading-loose text-center stagger-child">
          Get In Touch
        </h3>
        <div className="flex flex-col items-center gap-8 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 font-['Roboto'] leading-tight text-center stagger-child delay-100">
            Contact me
          </h2>
          <p className="text-xl sm:text-2xl font-normal text-gray-700 font-['Roboto'] leading-9 text-center stagger-child delay-200">
            Ready to start your project? Let's discuss your ideas and bring them
            to life.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {submitStatus === "success" && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            ❌ Failed to send message. Please try again or contact me directly.
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-2.5 stagger-child delay-300">
              <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
                First name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="h-16 px-4 bg-white rounded-lg border-[1.33px] border-indigo-600 text-xl font-['Roboto'] outline-none focus:border-2 focus:border-indigo-700 transition-colors"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2.5 stagger-child delay-400">
              <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
                Last name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="h-16 px-4 bg-white rounded-lg border-[1.33px] border-indigo-600 text-xl font-['Roboto'] outline-none focus:border-2 focus:border-indigo-700 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-2.5 stagger-child delay-500">
              <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-16 px-4 bg-white rounded-lg border-[1.33px] border-indigo-600 text-xl font-['Roboto'] outline-none focus:border-2 focus:border-indigo-700 transition-colors"
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-2.5 stagger-child delay-700"
            style={{ zIndex: 100 }}
          >
            <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
              Choose a topic *
            </label>
            <div ref={dropdownRef} className="relative" style={{ zIndex: 100 }}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full h-16 px-4 bg-white rounded-lg border-[1.33px] border-indigo-600 flex justify-between items-center text-xl font-['Roboto'] text-left outline-none focus:border-2 focus:border-indigo-700 transition-colors"
              >
                <span
                  className={formData.topic ? "text-gray-800" : "text-gray-600"}
                >
                  {formData.topic || "Select one..."}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-800 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute w-full bg-white border-[1.33px] border-indigo-600 rounded-lg shadow-2xl mt-1"
                  style={{
                    zIndex: 9999,
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                  }}
                >
                  {topics.map((topic, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleTopicSelect(topic)}
                      className="w-full px-4 py-4 text-left text-xl font-['Roboto'] text-gray-800 hover:bg-indigo-50 transition-colors first:rounded-t-lg last:rounded-b-lg border-none bg-white"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 stagger-child delay-800">
            <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project..."
              rows={8}
              required
              className="p-4 bg-white rounded-lg border-[1.33px] border-indigo-600 text-xl font-['Roboto'] outline-none focus:border-2 focus:border-indigo-700 transition-colors resize-none placeholder-neutral-600"
            />
          </div>

          <div className="flex items-center gap-2.5 stagger-child delay-900">
            <div className="relative">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                required
                className="w-5 h-5 bg-white rounded border-[1.33px] border-gray-800 appearance-none checked:bg-indigo-600 checked:border-indigo-600 transition-colors cursor-pointer"
              />
              {formData.acceptTerms && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <label className="text-lg font-normal text-gray-800 font-['Roboto'] leading-7 cursor-pointer">
              I accept the terms and privacy policy *
            </label>
          </div>

          <div className="flex justify-center stagger-child delay-1000">
            <button
              type="submit"
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!formData.acceptTerms || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
