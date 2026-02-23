import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              CodeZenith
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building modern, high-performance web applications
              with clean design and smooth user experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5">

              <a
                href="https://github.com/ayush-3945"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 rounded-xl text-primary hover:bg-primary hover:text-white transition duration-300 shadow-lg hover:shadow-primary/40"
              >
                <FaGithub size={26} />
              </a>

              <a
                href="https://linkedin.com/in/ayush-kumar-pandey-a6880532b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 rounded-xl text-primary hover:bg-primary hover:text-white transition duration-300 shadow-lg hover:shadow-primary/40"
              >
                <FaLinkedin size={26} />
              </a>

              <a
                href="https://x.com/PandeyAyush2304"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 rounded-xl text-primary hover:bg-primary hover:text-white transition duration-300 shadow-lg hover:shadow-primary/40"
              >
                <FaTwitter size={26} />
              </a>

            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: ayushpandey23042006@gmail.com</li>
              <li>Phone: +91 9305630905</li>
              <li>Location: Uttar Pradesh, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} CodeZenith. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-primary/20 rounded-full hover:bg-primary transition"
          >
            <FaArrowUp className="text-primary" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;