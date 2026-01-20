import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-mauve text-white py-12 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-serif text-2xl mb-4">Nurture Her</p>
        <p className="text-white/60 text-sm font-sans">
          © {new Date().getFullYear()} Girl Support Initiative. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;