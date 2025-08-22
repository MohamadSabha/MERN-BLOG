import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);

      setStatus({ sending: false, ok: true, msg: "Message sent!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        sending: false,
        ok: false,
        msg: err.message || "Error sending message",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      {/* Headline */}
      <h1 className="text-3xl font-bold mb-2">Contact Me</h1>

      {/* Subheading */}
      <p className="text-gray-700 mb-6">
        Have a question about my projects, want to collaborate, or just want to
        say hi? Fill out the form below and I’ll get back to you as soon as
        possible.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={status.sending}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {status.sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Status Messages */}
      {status.ok && <p className="text-green-600 mt-3">{status.msg}</p>}
      {status.ok === false && <p className="text-red-600 mt-3">{status.msg}</p>}

      {/* Optional Note */}
      <p className="text-gray-500 mt-4 text-sm">
        Your message is important to me. I usually reply within 24 hours.
      </p>
    </div>
  );
}
