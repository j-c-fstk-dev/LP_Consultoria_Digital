import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function StrongCTA() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Descubra como seu negócio pode atrair mais clientes pela internet.
          </h2>
          <button 
            onClick={scrollToContact}
            className="btn bg-white text-primary hover:bg-blue-50 text-xl px-10 py-4 shadow-xl"
          >
            Solicitar Diagnóstico Digital Gratuito
            <ArrowRight size={24} />
          </button>
          <p className="mt-6 text-blue-200 font-medium italic">
            Número limitado de empresas atendidas por mês.
          </p>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48"></div>
    </section>
  );
}
