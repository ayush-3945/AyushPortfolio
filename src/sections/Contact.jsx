import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! 🚀");
  };

  return (
    <section id="contact" className="pt-16 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Have a project in mind? Let’s build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-card/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full mt-2 px-4 py-3 bg-dark/40 border border-white/10 rounded-lg text-white focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full mt-2 px-4 py-3 bg-dark/40 border border-white/10 rounded-lg text-white focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className="w-full mt-2 px-4 py-3 bg-dark/40 border border-white/10 rounded-lg text-white focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white shadow-lg hover:shadow-primary/40 transition"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* RIGHT SIDE INFO */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* Let's Connect */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Let’s Connect
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing
                people. Whether you have a project idea or just want to say hello,
                feel free to reach out.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-dark/60 p-5 rounded-xl border border-white/10 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition">
              <div className="p-3 rounded-lg bg-primary/20 text-primary">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white text-sm">
                  ayushpandey23042006@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-dark/60 p-5 rounded-xl border border-white/10 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition">
              <div className="p-3 rounded-lg bg-primary/20 text-primary">
                <FaPhone />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white text-sm">
                  +91 9305630905
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 bg-dark/60 p-5 rounded-xl border border-white/10 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition">
              <div className="p-3 rounded-lg bg-primary/20 text-primary">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white text-sm">
                  Uttar Pradesh, India
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;