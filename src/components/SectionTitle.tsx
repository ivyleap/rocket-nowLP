import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="block text-orange-600 font-semibold tracking-wide uppercase text-sm mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 rounded ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};