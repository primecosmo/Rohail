import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const form = useRef();

  const contactInfo = [
    { icon: <FaEnvelope />, title: "Email", desc: "rohail.codes@gmail.com" },
    { icon: <FaPhone />, title: "Phone", desc: "+92 319 4697 821" },
    { icon: <FaMapMarkerAlt />, title: "Location", desc: "Pakistan" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending Message...", { id: "send" });

    emailjs
      .sendForm(
        "service_nn0irhb",
        "template_6rhyyac",
        form.current,
        "B-FvNt7eVPtmSW2gb"
      )
      .then(
        (result) => {
          toast.success("✅ Message Sent Successfully!", { id: "send" });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("❌ Failed to send message", { id: "send" });
        }
      );
  };

  return (
    <section className="relative bg-[#050507] px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">

      {/* TOASTER */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <p className="text-xs tracking-[0.4em] text-cyan-400 mb-3">CONTACT ME</p>
        <h2 className="text-white text-3xl sm:text-5xl font-bold">
          Let’s Work <br />
          <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Together
          </span>
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <motion.div className="flex flex-col gap-6">
          {contactInfo.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl text-cyan-400">{item.icon}</div>
              <div>
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="p-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
        >
          <div className="bg-[#0B0B10] rounded-3xl p-8 flex flex-col gap-6">
            <Input label="Your Name" type="text" name="name" />
            <Input label="Your Email" type="email" name="email" />
            <Input label="Your Message" type="textarea" name="message" />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-white font-semibold"
            >
              Send Message <FaPaperPlane />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({ label, type, name }) {
  return (
    <div className="relative w-full">
      {type === "textarea" ? (
        <textarea
          name={name}
          rows={5}
          placeholder=" "
          className="peer w-full px-4 py-3 rounded-xl bg-[#07070A] border border-[#1a1a1a] text-white focus:outline-none focus:border-cyan-400"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder=" "
          className="peer w-full px-4 py-3 rounded-xl bg-[#07070A] border border-[#1a1a1a] text-white focus:outline-none focus:border-cyan-400"
        />
      )}

      <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 bg-[#0B0B10] px-1">
        {label}
      </label>
    </div>
  );
}
