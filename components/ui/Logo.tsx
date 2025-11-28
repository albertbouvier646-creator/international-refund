
import React from "react";

export const Logo = ({ className = "", classNameText = "text-slate-900", showText = true }: { className?: string, classNameText?: string, showText?: boolean }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {/* Custom SVG Logo to ensure visibility without external assets */}
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      {/* Outer abstract shape/swirl */}
      <path d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="white" fillOpacity="0.01"/>
      
      {/* The 'i' part in Light Blue */}
      <path d="M14 14V28" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="14" cy="9" r="3" fill="#3B82F6"/>
      
      {/* The 'R' part abstract swirl in Dark Blue */}
      <path d="M21 14H24C27.3137 14 30 16.6863 30 20C30 23.3137 27.3137 26 24 26H21V14Z" stroke="#0F172A" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M21 26V32" stroke="#0F172A" strokeWidth="4" strokeLinecap="round"/>
      <path d="M24 26L30 32" stroke="#0F172A" strokeWidth="4" strokeLinecap="round"/>
      
      {/* Decorative swirl/circle segment */}
      <path d="M36 21C36 29.2843 29.2843 36 21 36" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
    </svg>
    
    {showText && (
      <div className="flex flex-col justify-center">
        <span className={`font-header font-extrabold text-base leading-none tracking-wide ${classNameText}`}>INTERNATIONAL</span>
        <span className={`font-header font-medium text-sm leading-none tracking-[0.2em] mt-0.5 ${classNameText}`}>REFUND</span>
      </div>
    )}
  </div>
);
