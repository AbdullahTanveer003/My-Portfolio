import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=iamabdullahtanveer@gmail.com", "_blank");
    navigator.clipboard.writeText("iamabdullahtanveer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMsg('');
    setStatusType('');

    emailjs.sendForm(
      'service_vt21szk',
      'template_6355jrq',
      formRef.current,
      'eZyRd9YNn3EEpRI1k'
    )
    .then(() => {
      setSending(false);
      setStatusMsg('Message sent successfully!');
      setStatusType('success');
      formRef.current.reset();
      setTimeout(() => setStatusMsg(''), 5000);
    })
    .catch(() => {
      setSending(false);
      setStatusMsg('Failed to send message. Please try again.');
      setStatusType('error');
      setTimeout(() => setStatusMsg(''), 5000);
    });
  };

  return (
    <>
      <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 lg:py-24 px-5 lg:px-28 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute left-1/4 bottom-0 w-[30%] h-[30%] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">Touch</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm lg:text-base max-w-md mx-auto">
            Let's collaborate on your next big idea or professional project.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between gap-12 items-stretch mt-8 lg:mt-16">
          
          {/* Left Column: Glassmorphic Message Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:w-[48%] flex flex-col justify-between"
          >
            <div className="bg-slate-950/40 backdrop-blur-md border border-slate-900/60 p-6 lg:p-8 rounded-[2rem] shadow-xl w-full flex-1 flex flex-col justify-center">
              <form ref={formRef} onSubmit={handleSubmit} className="w-full space-y-4 lg:space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Your Name</label>
                  <input 
                    name="from_name" 
                    className="w-full px-5 py-3 bg-slate-950/50 border border-slate-900 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none text-white rounded-xl placeholder:text-slate-600 text-sm transition-all duration-300" 
                    type="text" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Your Email</label>
                  <input 
                    name="from_email" 
                    className="w-full px-5 py-3 bg-slate-950/50 border border-slate-900 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none text-white rounded-xl placeholder:text-slate-600 text-sm transition-all duration-300" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">App / Project Idea (Optional)</label>
                  <input 
                    name="project_idea" 
                    className="w-full px-5 py-3 bg-slate-950/50 border border-slate-900 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none text-white rounded-xl placeholder:text-slate-600 text-sm transition-all duration-300" 
                    type="text" 
                    placeholder="e.g. Mobile E-commerce App" 
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                  <textarea 
                    name="message" 
                    className="w-full px-5 py-3 h-32 bg-slate-950/50 border border-slate-900 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none text-white rounded-xl placeholder:text-slate-600 text-sm resize-none transition-all duration-300" 
                    placeholder="Describe your mobile app requirements..." 
                    required
                  ></textarea>
                </div>

                {statusMsg && (
                  <motion.p 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm font-semibold ml-1 ${statusType === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}
                  >
                    {statusMsg}
                  </motion.p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {sending ? 'Sending Message...' : 'Send Message'}
                  </motion.button>

                  {/* Social media icons inside form container */}
                  <div className="flex items-center gap-x-3">
                    {[
                      { Icon: BiLogoGmail, url: "mailto:iamabdullahtanveer@gmail.com", isEmail: true },
                      { Icon: IoLogoLinkedin, url: "https://www.linkedin.com/in/abdullah-tanveer-570216338/" },
                      { Icon: BsGithub, url: "https://github.com/AbdullahTanveer003" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
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
                        className="bg-slate-950/60 p-2.5 rounded-full border border-slate-900 hover:border-cyan-500 hover:bg-slate-900 text-slate-400 hover:text-cyan-400 shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <social.Icon className="w-4.5 h-4.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Contact info & glowing details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[46%] flex flex-col justify-between py-2"
          >
            <div>
              <div className="font-extrabold text-3xl lg:text-5xl tracking-tight text-white space-y-2">
                <h2>Let's Build</h2>
                <h2 className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent font-black">Something Great</h2>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mt-6">
                Have a mobile app idea or looking for a mobile developer? Let's connect.
              </p>

              {/* Direct Info List */}
              <div className="font-semibold text-base lg:text-lg flex flex-col mt-10 gap-y-4 text-slate-300">
                <motion.a
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-x-3 group w-fit cursor-pointer"
                  href="mailto:iamabdullahtanveer@gmail.com"
                  onClick={handleEmailClick}
                >
                  <span className="p-3 bg-slate-950/60 rounded-full border border-slate-900 group-hover:border-cyan-500 text-cyan-400 transition-colors duration-300">
                    <IoMdMail className="w-5 h-5" />
                  </span>
                  <span className="group-hover:text-cyan-400 transition-colors duration-300">
                    iamabdullahtanveer@gmail.com
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-x-3 group w-fit"
                  href="tel:+923267356166"
                >
                  <span className="p-3 bg-slate-950/60 rounded-full border border-slate-900 group-hover:border-violet-500 text-violet-400 transition-colors duration-300">
                    <FaPhone className="w-5 h-5" />
                  </span>
                  <span className="group-hover:text-violet-400 transition-colors duration-300">
                    +92 326 7356166
                  </span>
                </motion.a>

                <div className="flex items-center gap-x-3 group w-fit">
                  <span className="p-3 bg-slate-950/60 rounded-full border border-slate-900 text-emerald-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-slate-300">
                    Gujrat, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* A graphic feature highlighting availability */}
            <div className="mt-10 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 border border-slate-900/60 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">Current Status</p>
                <h4 className="text-lg font-bold text-white mt-1">Available for Mobile App Roles & Projects</h4>
              </div>
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>

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
    </>
  );
}
