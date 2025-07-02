import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setalertMessage] = useState({
    text: "",
    type: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  //   Submitting the form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setalertMessage({
        text: "Please fill all the fields",
        type: "danger",
      });
      setTimeout(() => {
        setalertMessage({ text: "", type: "" });
      }, 3000);
      return;
    }
    try {
      await emailjs
        .send(
          import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            to_name: "Pratyush Mishra",
            from_email: formData.email,
            to_email: "mishrapratyush521@gmail.com",
            message: formData.message,
          },
          import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setformData({ name: "", email: "", message: "" });
          setalertMessage({
            text: "Message Sent Successfully",
            type: "success",
          });
          setTimeout(() => {
            setalertMessage({ text: "", type: "" });
          }, 5000);
        });
    } catch (error) {
      setalertMessage({
        text: "Message Failed to Send",
        type: "danger",
      });
      setTimeout(() => {
        setalertMessage({ text: "", type: "" });
      }, 5000);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#33c2cc"}
        refresh
      />{" "}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>{" "}
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={formData.name}
              type="text"
              id="name"
              className="field-input field-input-focus"
              name="name"
              placeholder="John Doe"
              autoComplete="name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              onChange={(e) => handleChange(e)}
              value={formData.email}
              type="email"
              id="email"
              className="field-input field-input-focus"
              name="email"
              placeholder="johnDoe@me.com"
              autoComplete="email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              onChange={(e) => handleChange(e)}
              value={formData.message}
              id="message"
              className="field-input field-input-focus"
              rows={4}
              name="message"
              placeholder="Share your thoughts..."
              autoComplete="message"
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation "
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      {alertMessage && alertMessage.text && (
        <Alert text={alertMessage.text} type={alertMessage.type} />
      )}
    </section>
  );
}

export default Contact;
