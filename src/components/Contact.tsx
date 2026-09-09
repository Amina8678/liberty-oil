"use client";

import { FormEvent } from "react";

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const subject = encodeURIComponent(
      `Website Enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:ghana@libertyhealth.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="w-full bg-[#eef9fd] px-6 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Message Box */}
        <div className="rounded-[2rem] bg-[#dff3fb] px-6 py-10 md:px-12 md:py-14">

         {/* Heading */}
          <div className="mx-auto flex w-full flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#09b1ec]">
              Get in Touch
            </p>

            <h2 className="mt-4 font-display text-center text-3xl font-bold text-[#071c27] md:text-4xl lg:text-5xl">
              Send us a message
            </h2>

            <p className="mx-auto mt-4 w-full max-w-2xl text-center text-base leading-7 text-[#083b52]">
              Have a question about Event Extra Virgin Olive Oil?
              <br />
              Send us a message and our team will be happy to assist you.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-2xl"
          >

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[#071c27]"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="block w-full rounded-xl border border-[#083b52]/20 bg-white px-5 py-4 text-[#071c27] placeholder:text-[#083b52]/50 outline-none transition focus:border-[#09b1ec] focus:ring-2 focus:ring-[#09b1ec]/20"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#071c27]"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="block w-full rounded-xl border border-[#083b52]/20 bg-white px-5 py-4 text-[#071c27] placeholder:text-[#083b52]/50 outline-none transition focus:border-[#09b1ec] focus:ring-2 focus:ring-[#09b1ec]/20"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#071c27]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Write your message here..."
                className="block w-full resize-none rounded-xl border border-[#083b52]/20 bg-white px-5 py-4 text-[#071c27] placeholder:text-[#083b52]/50 outline-none transition focus:border-[#09b1ec] focus:ring-2 focus:ring-[#09b1ec]/20"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#09b1ec] px-6 py-4 text-base font-bold text-white transition hover:bg-[#083b52]"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}