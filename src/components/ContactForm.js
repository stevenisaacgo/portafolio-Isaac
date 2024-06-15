import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="name" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="email" type="email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" id="message" rows="4"></textarea>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">I agree to the terms and conditions</span>
          </label>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
