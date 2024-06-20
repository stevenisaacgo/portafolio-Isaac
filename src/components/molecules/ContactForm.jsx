import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <form action="https://getform.io/f/pbqgxkob" method="POST">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email" required>
            Email
          </label>
          <input
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            id="message"
            name="message"
            rows="4"
            maxLength={150}
            minLength={20}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              name="terms"
              required
            />
            <span className="ml-2">I agree to the terms and conditions</span>
          </label>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
