import { motion } from "motion/react";
import { Utensils, Store, Sparkles, Stethoscope, Wrench, Briefcase } from "lucide-react";

const clients = [
  { icon: <Utensils size={24} />, name: "Restaurantes" },
  { icon: <Store size={24} />, name: "Lojas Locais" },
  { icon: <Sparkles size={24} />, name: "Salões de Beleza" },
  { icon: <Stethoscope size={24} />, name: "Clínicas" },
  { icon: <Wrench size={24} />, name: "Oficinas Mecânicas" },
  { icon: <Briefcase size={24} />, name: "Pequenos Prestadores de Serviço" }
];

export default function WhoThisIsFor() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-text-main mb-4">Para quem é este serviço</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa consultoria é focada em empreendedores que desejam crescer mas não têm tempo ou conhecimento técnico para lidar com a internet.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-xl border border-border-light hover:border-primary/30 hover:shadow-md transition-all text-center"
            >
              <div className="text-primary mb-3">
                {client.icon}
              </div>
              <span className="font-semibold text-text-main text-sm">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
