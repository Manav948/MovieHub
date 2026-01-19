import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4 py-16 text-white animate-fade-in">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">📩 Contact Us</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-700 text-white px-4 py-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-700 text-white px-4 py-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="bg-gray-700 text-white px-4 py-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-3 rounded-md font-semibold" onClick={() => alert('Message sent!')}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;