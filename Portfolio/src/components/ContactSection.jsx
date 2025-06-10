import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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

  const topics = [
    "Web Development",
    "UI/UX Design",
    "Branding",
    "Consultation",
    "Other",
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full py-32">
      <div className="flex flex-col items-center gap-5 mb-16">
        <h3 className="text-xl font-semibold text-gray-800 font-['Roboto'] leading-loose text-center">
          Get In Touch
        </h3>
        <div className="flex flex-col items-center gap-8 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 font-['Roboto'] leading-tight text-center">
            Contact me
          </h2>
          <p className="text-xl sm:text-2xl font-normal text-gray-700 font-['Roboto'] leading-9 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-2.5">
              <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="h-16 px-4 bg-white rounded-lg border-[1.33px] border-indigo-600 text-xl font-['Roboto'] outline-none focus:border-2 focus:border-indigo-700 transition-colors"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2.5">
              <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="h-16 px-4 bg-white rounded-lg border-[1.33px] border-indigo-600 text-xl font-['Roboto'] outline-none focus:border-2 focus:border-indigo-700 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-2.5">
              <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-16 px-4 bg-white rounded-lg border-[1.33px] border-indigo-600 text-xl font-['Roboto'] outline-none focus:border-2 focus:border-indigo-700 transition-colors"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2.5">
              <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="h-16 px-4 bg-white rounded-lg border-[1.33px] border-indigo-600 text-xl font-['Roboto'] outline-none focus:border-2 focus:border-indigo-700 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
              Choose a topic
            </label>
            <div className="relative">
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
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-[1.33px] border-indigo-600 rounded-lg shadow-lg z-10">
                  {topics.map((topic, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleTopicSelect(topic)}
                      className="w-full px-4 py-3 text-left text-xl font-['Roboto'] text-gray-800 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="text-xl font-normal text-gray-800 font-['Roboto'] leading-loose">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your message..."
              rows={8}
              className="p-4 bg-white rounded-lg border-[1.33px] border-indigo-600 text-xl font-['Roboto'] outline-none focus:border-2 focus:border-indigo-700 transition-colors resize-none placeholder-neutral-600"
            />
          </div>

          <div className="flex items-center gap-2.5">
            <div className="relative">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
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
              I accept the terms
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn-primary"
              disabled={!formData.acceptTerms}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
