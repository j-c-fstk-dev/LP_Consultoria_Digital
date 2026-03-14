import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: "#", label: "Apresentação" },
  { href: "#solution", label: "Solução" },
  { href: "#contact", label: "Diagnóstico Gratuito" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="container-custom flex justify-between items-center py-4">
        <a href="#" className="flex items-center gap-3">
          <img src="https://res.cloudinary.com/dr0weongo/image/upload/v1773507511/logo_jc_imosdd.jpg" alt="Consultoria Digital Logo" className="h-10 w-10 rounded-full object-cover"/>
          <span className="font-bold text-lg text-text-main hidden sm:block">Consultoria Digital</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-primary font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary hidden md:inline-flex">
          Solicitar Diagnóstico
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border-light"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={toggleMenu}
                  className="py-3 px-4 rounded-md text-gray-700 hover:bg-gray-50 hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={toggleMenu} className="btn btn-primary mt-4">
                Solicitar Diagnóstico
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
