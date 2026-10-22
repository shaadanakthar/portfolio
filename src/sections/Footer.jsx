import { socialImgs, personalInfo } from "../constants";

const Footer = () => {
  return (
    <footer className="footer border-t border-white/5 py-12">
      <div className="footer-container max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-mono font-bold text-lg text-white">
            SHAADAN<span className="text-blue-500">.</span>
          </p>
          <p className="text-xs text-white-50/70 mt-1">
            Artificial Intelligence Engineering • AJIET Mangaluru
          </p>
          <p className="text-xs font-mono text-white-50/50 italic mt-1">
            “Designed with curiosity. Built with code.”
          </p>
        </div>

        <div className="socials flex items-center gap-4">
          {socialImgs.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon size-10 rounded-full bg-black-200 border border-white/10 flex items-center justify-center p-2 hover:border-blue-400 hover:scale-110 transition-all"
              aria-label={item.name}
            >
              <img src={item.imgPath} alt={item.name} className="w-5 h-5 object-contain" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right text-xs font-mono text-white-50/70">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-white-50/50 mt-1">
            Built with React 19, Three.js &amp; GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
