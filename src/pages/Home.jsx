import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaReact, FaArrowRight } from "react-icons/fa";
import { TbDownload, TbDeviceMobile } from "react-icons/tb";
import { SiFlutter, SiDart, SiFirebase, SiSupabase, SiTypescript } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [copied, setCopied] = useState(false);
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      
      {/* 1. Tech Grid Background Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)"
        }}
      />

      {/* 2. Ambient Colorful Blur Orbs */}
      <div className="absolute top-1/4 left-[10%] w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] rounded-full bg-violet-600/10 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-5 lg:px-28 z-10 py-20 lg:py-24 flex justify-between items-center lg:flex-row flex-col-reverse gap-y-12">
        
        {/* Left Column: Typography & Content */}
        <motion.div
          className="lg:w-[52%] w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Mobile Developer Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold w-fit mb-5 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.15)]"
          >
            <TbDeviceMobile className="text-base text-cyan-400 animate-bounce" />
            <span>Mobile App Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-slate-400">Flutter & React Native</span>
          </motion.div>

          {/* Heading */}
          <div className="text-slate-100 font-bold space-y-3">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base lg:text-lg font-bold tracking-widest text-slate-400 uppercase"
            >
              Hi there, I am
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]"
            >
              Abdullah{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Tanveer
              </span>
            </motion.h1>

            {/* Typewriter Titles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-300 flex flex-wrap items-center gap-x-2"
            >
              <span>Specialized in</span>
              <span className="text-cyan-400 font-black">
                <TypeAnimation
                  sequence={[
                    "Flutter Mobile Apps",
                    2000,
                    "React Native Apps",
                    2000,
                    "Cross-Platform Architecture",
                    2000,
                    "Firebase & Supabase",
                    2000,
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </motion.div>
          </div>

          <motion.p
            className="text-slate-400 text-base lg:text-lg mt-6 leading-relaxed max-w-xl font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Building modern, scalable and user-friendly cross-platform mobile applications with Flutter and React Native.
          </motion.p>

          {/* CTA Buttons with Micro-interactions */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-x-2 px-7 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base"
            >
              View Projects
              <FaArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <a
              href="/resume.pdf"
              download="Abdullah_Tanveer_CV.pdf"
              className="flex items-center gap-x-2 px-7 py-3.5 rounded-full font-bold text-slate-200 border border-cyan-500/30 hover:border-cyan-400 bg-slate-950/60 backdrop-blur-sm hover:text-white hover:bg-slate-900/60 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            >
              <span>Download CV</span>
              <TbDownload size={17} className="text-cyan-400" />
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3.5 rounded-full font-bold text-slate-300 border border-slate-900 hover:border-slate-800 bg-slate-950/40 backdrop-blur-sm hover:text-white hover:bg-slate-900/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base"
            >
              Let's Connect
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-x-4 mt-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { Icon: BiLogoGmail, url: "mailto:iamabdullahtanveer@gmail.com", isEmail: true, title: "Email Abdullah Tanveer" },
              { Icon: IoLogoLinkedin, url: "https://www.linkedin.com/in/abdullah-tanveer-570216338/", title: "LinkedIn Profile" },
              { Icon: BsGithub, url: "https://github.com/AbdullahTanveer003", title: "GitHub Profile" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                title={social.title}
                onClick={(e) => {
                  if (social.isEmail) {
                    e.preventDefault();
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=iamabdullahtanveer@gmail.com", "_blank");
                    navigator.clipboard.writeText("iamabdullahtanveer@gmail.com");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000);
                  }
                }}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="bg-slate-950/50 p-3 rounded-full border border-slate-900 hover:border-cyan-500 hover:bg-slate-900/60 text-slate-400 hover:text-cyan-400 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 active:scale-95 cursor-pointer"
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Orbiting Mobile Tech-Avatar Showcase */}
        <motion.div
          className="lg:w-[44%] w-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Square wrapper — all orbit math is relative to this */}
          <div className="relative w-[340px] sm:w-[420px] lg:w-[460px] aspect-square flex items-center justify-center">
            
            {/* Outer Rotating Dotted Border Loop */}
            <motion.div 
              className="absolute inset-[10%] rounded-full border border-dashed border-slate-800/60 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            />

            {/* Orbiting Tech Icons — Mobile Focus: Flutter, React Native, Firebase, Supabase, Dart, TypeScript */}
            {[
              { Icon: SiFlutter, name: "Flutter", color: "text-sky-400", glow: "shadow-[0_0_20px_rgba(56,189,248,0.35)]", angle: -90, delay: 0 },
              { Icon: FaReact, name: "React Native", color: "text-cyan-400", glow: "shadow-[0_0_20px_rgba(34,211,238,0.35)]", angle: -30, delay: 0.4 },
              { Icon: SiFirebase, name: "Firebase", color: "text-amber-400", glow: "shadow-[0_0_20px_rgba(251,191,36,0.35)]", angle: 30, delay: 0.8 },
              { Icon: SiSupabase, name: "Supabase", color: "text-emerald-400", glow: "shadow-[0_0_20px_rgba(52,211,153,0.35)]", angle: 90, delay: 1.2 },
              { Icon: SiTypescript, name: "TypeScript", color: "text-blue-400", glow: "shadow-[0_0_20px_rgba(96,165,250,0.35)]", angle: 150, delay: 1.6 },
              { Icon: SiDart, name: "Dart", color: "text-cyan-500", glow: "shadow-[0_0_20px_rgba(6,182,212,0.35)]", angle: 210, delay: 2.0 },
            ].map((item, idx) => {
              const rad = (item.angle * Math.PI) / 180;
              const radius = 42; // percentage from center
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              return (
                <div
                  key={idx}
                  className="absolute z-20 group"
                  style={{
                    top: `${y}%`,
                    left: `${x}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    className={`p-3 bg-slate-950/85 backdrop-blur-md rounded-2xl border border-slate-850 hover:border-cyan-500/50 ${item.color} ${item.glow} cursor-pointer transition-colors duration-300`}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: item.delay }}
                    title={item.name}
                  >
                    <item.Icon className="w-6 h-6" />
                  </motion.div>
                </div>
              );
            })}

            {/* Core Circular Avatar with Mobile Phone Outline Aesthetic */}
            <motion.div 
              className="relative z-10 group"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Ambient glow behind photo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-violet-600 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />
              
              {/* Offset decorative ring */}
              <div className="absolute -inset-2 border border-cyan-400/25 rounded-full translate-x-1.5 translate-y-1.5 pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 transition duration-500" />
              
              {/* Photo */}
              <div className="relative aspect-square w-[220px] sm:w-[270px] lg:w-[290px] rounded-full overflow-hidden bg-slate-950 border-2 border-slate-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/assets/me2.jpeg"
                  alt="Abdullah Tanveer - Mobile App Developer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
              </div>

              {/* Floating Mobile Badge on the Avatar */}
              <motion.div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950/90 border border-cyan-500/40 shadow-[0_4px_20px_rgba(6,182,212,0.3)] backdrop-blur-md flex items-center gap-1.5 text-xs font-bold text-white whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Mobile App Dev</span>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-x-3 px-5 py-3.5 bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-[0_10px_30px_rgba(6,182,212,0.25)] text-white"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide">
              Email copied to clipboard!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
