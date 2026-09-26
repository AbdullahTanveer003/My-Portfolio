import React from 'react';
import { motion } from 'framer-motion';
import { TbSchool, TbCertificate, TbCalendar, TbAward, TbCheck } from 'react-icons/tb';

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor’s in Computer Science",
      institution: "University of Gujrat",
      period: "2023–2027",
      details: [
        "Expected Graduation: 2027",
        "Current CGPA: 3.36"
      ],
      isCurrent: true
    },
    {
      degree: "Intermediate in Computer Science (ICS)",
      institution: "Punjab Group of Colleges",
      location: "Jalal Pur Jattan, Gujrat",
      period: "2020–2022",
      details: [
        "Percentage: 78%"
      ],
      isCurrent: false
    },
    {
      degree: "Matriculation (Science)",
      institution: "Army Public School",
      location: "Jalal Pur Jattan Cantt, Gujrat",
      period: "2018–2020",
      details: [
        "Percentage: 84%"
      ],
      isCurrent: false
    }
  ];

  const certifications = [
    { title: "Mobile App Development", issuer: "Coursera", tag: "Mobile" },
    { title: "Web Development and JavaScript", issuer: "FreeCodeCamp", tag: "Programming" },
    { title: "Cyber Security", issuer: "Deloitte", tag: "Security" },
    { title: "Google AI Essentials", issuer: "Coursera", tag: "AI" },
    { title: "Google AI Professional", issuer: "Coursera", tag: "AI" }
  ];

  return (
    <div className="py-20 lg:py-28 relative overflow-hidden" id="education">
      {/* Decorative gradient blur */}
      <div className="absolute left-1/4 top-1/3 w-[30%] h-[35%] bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-[25%] h-[30%] bg-violet-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-28">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <TbSchool size={14} />
            <span>Academic & Credentials</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-extrabold">Certifications</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm lg:text-base max-w-md mx-auto">
            Academic foundation in Computer Science alongside recognized technical certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Education Timeline (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                <TbSchool size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Education History</h3>
                <p className="text-xs text-slate-400">Formal academic background</p>
              </div>
            </div>

            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-6 rounded-3xl bg-slate-950/50 backdrop-blur-md border border-slate-900/80 hover:border-slate-800 transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit">
                      <TbCalendar size={13} />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-300">
                    {edu.institution}
                    {edu.location && <span className="text-slate-500 font-normal"> — {edu.location}</span>}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 pt-3 border-t border-slate-900 text-xs font-medium text-slate-400">
                    {edu.details.map((detail, dIdx) => (
                      <span key={dIdx} className="flex items-center gap-1.5 text-cyan-300">
                        <TbCheck size={14} className="text-cyan-400" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-violet-400">
                <TbCertificate size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
                <p className="text-xs text-slate-400">Professional credentials & training</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-slate-900/80 hover:border-violet-500/40 transition-all duration-300 shadow-lg flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors">
                      <TbAward size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-slate-100 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                    {cert.tag}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Note badge */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-950/30 border border-slate-900/60 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300">Continuous Growth:</span> Actively pursuing specialized courses in native architectures, cloud databases, and AI tooling.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
