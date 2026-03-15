"use client";

export default function SubscribeForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Your Name"
        className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue"
      />
      <button
        type="submit"
        className="px-7 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all text-sm flex-shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
