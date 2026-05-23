import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#04040a] border-t border-slate-900/60 px-5 lg:px-28 py-8 flex flex-col sm:flex-row items-center justify-between gap-y-4 mt-20 text-slate-400">
      
      {/* Typographic brand logo */}
      <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent select-none">
        ABDULLAH TANVEER
      </div>

      <div className="text-xs lg:text-sm font-medium text-center sm:text-right space-y-1">
        <p>© {new Date().getFullYear()} Abdullah Tanveer. All rights reserved.</p>
      
      </div>

    </footer>
  )
}
