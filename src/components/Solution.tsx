import { motion } from "motion/react";
import { Globe, List, MapPin, Search, Settings } from "lucide-react";

const features = [
  { icon: <Globe size={24} />, text: "Site profissional e moderno" },
  { icon: <List size={24} />, text: "Catálogo simples de produtos ou serviços" },
  { icon: <Search size={24} />, text: "Integração com Google Maps e Perfil da Empresa no Google" },
  { icon: <MapPin size={24} />, text: "Visibilidade em buscas locais no Google (Pindamonhangaba e região)" },
  { icon: <Settings size={24} />, text: "Painel de gerenciamento simples" }
];

export default function Solution() {
  return (
    <section id="solution" className="section-spacing bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-text-main mb-6">Organizamos a presença digital do seu negócio</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Criamos uma estrutura digital simples e profissional para que sua empresa seja facilmente encontrada online e atraia mais clientes todos os dias. <strong>Você pode começar com algo simples e expandir sua presença digital conforme seu negócio cresce.</strong>
          </p>
          
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-4 text-text-main font-medium"
              >
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                {feature.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bg-main p-8 rounded-3xl border border-border-light relative overflow-hidden"
        >
          <img src="https://res.cloudinary.com/dr0weongo/image/upload/v1773506896/dashboard_faytmb.png" alt="Painel de gerenciamento" className="rounded-xl shadow-xl"/>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-cta/5 rounded-full -ml-12 -mb-12"></div>
        </motion.div>
      </div>
    </section>
  );
}
