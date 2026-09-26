import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { IoLogoLinkedin } from 'react-icons/io5';
import { BsGithub } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full bg-[#04040a] border-t border-slate-900/80 px-5 lg:px-28 pt-14 pb-8 mt-24 text-slate-400">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-900/80">
          
          {/* Column 1: Identity */}
          <div className="space-y-3">
            <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent select-none">
              Abdullah Tanveer
            </div>
            <p className="text-sm font-semibold text-slate-300">
              Mobile App Developer | Flutter & React Native
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Specializing in scalable, high-performance cross-platform mobile solutions with Flutter, React Native, Firebase, and Supabase.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col md:items-center">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                Quick Navigation
              </h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-medium">
                {["home", "about", "skills", "experience", "projects", "education", "contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="capitalize hover:text-cyan-400 transition-colors cursor-pointer text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-3 md:text-right flex flex-col md:items-end">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Contact & Socials
            </h4>
            <a
              href="mailto:iamabdullahtanveer@gmail.com"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400 transition-colors w-fit md:ml-auto"
            >
              <IoMdMail className="text-cyan-400" />
              <span>iamabdullahtanveer@gmail.com</span>
            </a>
            <a
              href="tel:+923267356166"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-violet-400 transition-colors w-fit md:ml-auto"
            >
              <FaPhone className="text-violet-400" />
              <span>+92 326 7356166</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="mailto:iamabdullahtanveer@gmail.com"
                aria-label="Email"
                className="p-2 rounded-xl bg-slate-950 border border-slate-900 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-all"
              >
                <BiLogoGmail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-tanveer-570216338/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl bg-slate-950 border border-slate-900 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-all"
              >
                <IoLogoLinkedin size={16} />
              </a>
              <a
                href="https://github.com/AbdullahTanveer003"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl bg-slate-950 border border-slate-900 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-all"
              >
                <BsGithub size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-y-2 text-xs text-slate-500">
          <p>© 2026 Abdullah Tanveer. All rights reserved.</p>
          <p className="text-slate-400">Gujrat, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
