import { useState } from "react";
import { TextInput, Textarea, Button, Spinner, Alert } from "flowbite-react";

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

      setStatus({
        sending: false,
        ok: true,
        msg: "Message sent successfully!",
      });
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
    <div className="max-w-lg mx-auto p-4 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Contact Us</h1>
      <p className="text-gray-700 mb-6 text-center">
        Have a question about our projects, want to collaborate, or just want to
        say hi? Fill out the form below and w’ll get back to you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextInput
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <Button
          type="submit"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-sm transition-all duration-300 hover:brightness-90"
          disabled={status.sending}
        >
          {status.sending ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">Sending...</span>
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      {status.ok && (
        <Alert color="success" className="mt-5">
          {status.msg}
        </Alert>
      )}
      {status.ok === false && (
        <Alert color="failure" className="mt-5">
          {status.msg}
        </Alert>
      )}

      <p className="text-gray-500 mt-4 text-sm text-center">
        Your message is important to us. we usually reply within 24 hours.
      </p>
    </div>
  );
}
