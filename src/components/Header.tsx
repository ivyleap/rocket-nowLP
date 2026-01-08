import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <Rocket className={`h-8 w-8 ${isScrolled ? 'text-orange-600' : 'text-orange-600 md:text-white'}`} />
            <span className={`ml-2 text-xl font-black tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
              Rocket Now
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>特徴</a>
            <a href="#why-rocket" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>選ばれる理由</a>
            <a href="#flow" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>導入の流れ</a>
            <a href="#faq" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>FAQ</a>
            <Button variant={isScrolled ? 'primary' : 'secondary'} onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
              加盟店に登録する
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 p-2">
              {isMobileMenuOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          <a href="#features" className="text-gray-800 font-medium py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>特徴</a>
          <a href="#why-rocket" className="text-gray-800 font-medium py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>選ばれる理由</a>
          <a href="#flow" className="text-gray-800 font-medium py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>導入の流れ</a>
          <a href="#faq" className="text-gray-800 font-medium py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <Button fullWidth onClick={() => {
            setIsMobileMenuOpen(false);
            document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            加盟店に登録する
          </Button>
        </div>
      )}
    </header>
  );
};