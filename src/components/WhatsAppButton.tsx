import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5512992185685?text=Olá! Gostaria de solicitar um diagnóstico digital para o meu negócio."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-cta text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-cta-hover transition-colors"
      title="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="absolute right-full mr-4 bg-white text-text-main px-3 py-1 rounded-lg text-sm font-bold shadow-md whitespace-nowrap hidden md:block">
        Solicitar Diagnóstico
      </span>
    </motion.a>
  );
}
