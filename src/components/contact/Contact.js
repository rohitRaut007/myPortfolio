import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const formRef = useRef(null);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSending, setIsSending] = useState(false);

  const emailValidation = () =>
    String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const handleSend = (e) => {
    e.preventDefault();
    if (!username) return setErrMsg("Your name is required.");
    if (!phoneNumber) return setErrMsg("Phone number is required.");
    if (!email) return setErrMsg("Email address is required.");
    if (!emailValidation()) return setErrMsg("Please enter a valid email.");
    if (!subject) return setErrMsg("Subject is required.");
    if (!message) return setErrMsg("Message is required.");

    setErrMsg("");
    setIsSending(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: username,
          from_email: email,
          phone_number: phoneNumber,
          subject: subject,
          message: message,
          to_name: "Rohit Raut",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccessMsg(
          `Message sent! Thanks ${username} — I'll get back to you soon.`
        );
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
        setIsSending(false);
        setTimeout(() => setSuccessMsg(""), 6000);
      })
      .catch(() => {
        setErrMsg(
          "Failed to send. Please email me directly at rohit.raut2612@gmail.com"
        );
        setIsSending(false);
      });
  };

  const inputBase =
    "contactInput";

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Get In Touch" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg" style={{ background: "var(--c-bg-card)", border: "1px solid var(--c-border)" }}>
            <form ref={formRef} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {/* Status messages */}
              {errMsg && (
                <div className="flex items-center gap-3 py-3 px-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  <span className="text-lg">⚠</span>
                  {errMsg}
                </div>
              )}
              {successMsg && (
                <div className="flex items-center gap-3 py-3 px-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  <span className="text-lg">✓</span>
                  {successMsg}
                </div>
              )}

              <div className="w-full flex flex-col lgl:flex-row gap-6">
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-titleFont font-semibold" style={{ color: "var(--c-text-4)" }}>
                    Your Name *
                  </label>
                  <input
                    onChange={(e) => { setUsername(e.target.value); setErrMsg(""); }}
                    value={username}
                    className={`${inputBase} ${errMsg === "Your name is required." ? "border-b-red-500" : ""}`}
                    type="text"
                    placeholder="Rohit Raut"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-titleFont font-semibold" style={{ color: "var(--c-text-4)" }}>
                    Phone Number *
                  </label>
                  <input
                    onChange={(e) => { setPhoneNumber(e.target.value); setErrMsg(""); }}
                    value={phoneNumber}
                    className={`${inputBase} ${errMsg === "Phone number is required." ? "border-b-red-500" : ""}`}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-titleFont font-semibold" style={{ color: "var(--c-text-4)" }}>
                  Email Address *
                </label>
                <input
                  onChange={(e) => { setEmail(e.target.value); setErrMsg(""); }}
                  value={email}
                  className={`${inputBase} ${errMsg.includes("email") ? "border-b-red-500" : ""}`}
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-titleFont font-semibold" style={{ color: "var(--c-text-4)" }}>
                  Subject *
                </label>
                <input
                  onChange={(e) => { setSubject(e.target.value); setErrMsg(""); }}
                  value={subject}
                  className={`${inputBase} ${errMsg === "Subject is required." ? "border-b-red-500" : ""}`}
                  type="text"
                  placeholder="Opportunity / Collaboration / Query"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-titleFont font-semibold" style={{ color: "var(--c-text-4)" }}>
                  Message *
                </label>
                <textarea
                  onChange={(e) => { setMessage(e.target.value); setErrMsg(""); }}
                  value={message}
                  className={`contactTextArea ${errMsg === "Message is required." ? "border-b-red-500" : ""}`}
                  cols="30"
                  rows="8"
                  placeholder="Tell me about your project, opportunity, or question..."
                />
              </div>

              <button
                onClick={handleSend}
                disabled={isSending}
                className="w-full h-12 rounded-lg text-sm font-medium font-bodyFont tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "var(--c-border)",
                  color: "var(--c-accent)",
                  border: "1px solid var(--c-border-s)",
                }}
                onMouseEnter={(e) => {
                  if (!isSending) {
                    e.currentTarget.style.background = "var(--c-border-s)";
                    e.currentTarget.style.borderColor = "var(--c-accent)";
                    e.currentTarget.style.color = "var(--c-accent)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--c-border)";
                  e.currentTarget.style.borderColor = "var(--c-border-s)";
                }}
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
