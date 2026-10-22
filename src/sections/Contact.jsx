import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { personalInfo } from "../constants";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const serviceId = import.meta.env?.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env?.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env?.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatusMessage({
          type: "success",
          text: "Message sent successfully! I will get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("EmailJS Error:", error);
        // Fallback to mailto
        triggerMailto();
      } finally {
        setLoading(false);
      }
    } else {
      // Direct mailto fallback ensures 100% reliable delivery on static deployments
      triggerMailto();
      setLoading(false);
    }
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] From ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatusMessage({
      type: "success",
      text: "Opening your mail client with your pre-filled inquiry. You can also email shaadanakthar@gmail.com directly!",
    });
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="Have an idea? Let's build something."
          sub="💬 Open for AI/ML Internships & Collaborations"
        />

        <div className="grid-12-cols mt-16 items-center">
          {/* Form Column */}
          <div className="xl:col-span-5">
            <div className="card-border rounded-2xl p-8 md:p-10 bg-black-100/90 border border-white/10">
              
              {/* Direct email quick card */}
              <div className="mb-6 p-4 rounded-xl bg-black-200/60 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-white-50/70 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-mono text-white hover:text-blue-400 transition-colors font-semibold"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-white-50 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black-200 border border-white/10 text-white placeholder-white-50/40 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-white-50 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black-200 border border-white/10 text-white placeholder-white-50/40 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-white-50 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project, or collaboration idea..."
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black-200 border border-white/10 text-white placeholder-white-50/40 text-sm focus:outline-none focus:border-blue-500 resize-y"
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`p-3 rounded-xl text-xs font-mono ${
                      statusMessage.type === "success"
                        ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                        : "bg-red-500/10 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-blue-500/20"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              <div className="mt-4 text-[10px] font-mono text-white-50/50 text-center">
                Transparent delivery • Pre-fills mailto if EmailJS is unconfigured
              </div>
            </div>
          </div>

          {/* 3D Computer Model Experience */}
          <div className="xl:col-span-7 h-[420px] md:h-[520px] w-full rounded-2xl overflow-hidden card-border bg-black-100/50 relative">
            <div className="absolute top-4 left-4 z-10 text-xs font-mono text-white-50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>interactive_terminal_3d</span>
            </div>
            <ContactExperience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
