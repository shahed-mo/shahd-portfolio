import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-xs font-semibold text-gray-500 dark:text-gray-400"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required
          className="w-full px-4 py-3 rounded-xl
          bg-white dark:bg-neutral-950
          border border-neutral-300 dark:border-neutral-800
          text-gray-900 dark:text-white
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-red-500
          focus:border-transparent transition-all"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-xs font-semibold text-gray-500 dark:text-gray-400"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-3 rounded-xl
          bg-white dark:bg-neutral-950
          border border-neutral-300 dark:border-neutral-800
          text-gray-900 dark:text-white
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-red-500
          focus:border-transparent transition-all"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-gray-500 dark:text-gray-400"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          rows="4"
          className="w-full px-4 py-3 rounded-xl
          bg-white dark:bg-neutral-950
          border border-neutral-300 dark:border-neutral-800
          text-gray-900 dark:text-white
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-red-500
          focus:border-transparent transition-all resize-none"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="inline-flex items-center gap-2
        px-8 py-3.5 rounded-2xl
        bg-gradient-to-r from-red-600 to-rose-600
        hover:from-red-500 hover:to-rose-500
        text-white font-bold text-sm
        shadow-xl shadow-red-600/30
        transition-all hover:scale-105"
      >
        <span className="material-symbols-outlined text-[18px]">
          send
        </span>

        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;