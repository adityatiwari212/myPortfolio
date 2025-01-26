import React from "react";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-16 text-white"
      style={{
        background: `linear-gradient(to right,#04131D, #081822)`,
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8 text-gray-200">
          Feel free to reach out to me through the following ways:
        </p>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex justify-center items-center space-x-4">
            <span className="text-xl font-semibold">📧</span>
            <a
              href="mailto:m.b.t.aditya5234@gmail.com"
              className="text-lg font-medium text-white hover:text-yellow-400 transition"
            >
              m.b.t.aditya5234@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex justify-center items-center space-x-4">
            <span className="text-xl font-semibold">📞</span>
            <a
              href="tel:+91 9152752492"
              className="text-lg font-medium text-white hover:text-yellow-400 transition"
            >
              +91 9152752492
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
