import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  const contactInfo = [
    { icon: <FaEnvelope />, title: "Email", desc: "rohail.codes@gmail.com" },
    { icon: <FaPhone />, title: "Phone", desc: "+92 319 4697 821" },
    { icon: <FaMapMarkerAlt />, title: "Location", desc: "Pakistan" },
  ];

  return (
    <section id="contact" className="relative bg-[#050507] px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">

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

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[20%] w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[20%] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <p className="text-xs tracking-[0.4em] text-cyan-400 mb-3">
          CONTACT ME
        </p>

        <h2 className="text-white text-3xl sm:text-5xl font-bold">
          Let’s Work <br />
          <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Together
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Have an idea or project? Let’s turn it into something powerful and impactful.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6"
        >
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition"
            >
              <div className="text-2xl text-cyan-400">{item.icon}</div>

              <div>
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* EXTRA TEXT */}
          <p className="text-gray-500 text-sm mt-4">
            I usually respond within 24 hours. Let’s build something amazing
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative p-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
        >
          <div className="bg-[#0B0B10] rounded-3xl p-8 flex flex-col gap-6 backdrop-blur-xl border border-white/10">

            {/* INPUT */}
            <Input label="Your Name" type="text" />
            <Input label="Your Email" type="email" />
            <Input label="Your Message" type="textarea" />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-white font-semibold shadow-lg"
            >
              Send Message <FaPaperPlane />
            </motion.button>

          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({ label, type }) {
  return (
    <div className="relative w-full">
      {type === "textarea" ? (
        <textarea
          rows={5}
          placeholder=" "
          className="peer w-full px-4 py-3 rounded-xl bg-[#07070A] border border-[#1a1a1a] text-white focus:outline-none focus:border-cyan-400 transition"
        />
      ) : (
        <input
          type={type}
          placeholder=" "
          className="peer w-full px-4 py-3 rounded-xl bg-[#07070A] border border-[#1a1a1a] text-white focus:outline-none focus:border-cyan-400 transition"
        />
      )}

      {/* LABEL */}
      <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all 
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 bg-[#0B0B10] px-1">
        {label}
      </label>
    </div>
  );
}