import { motion } from "motion/react";
import { UserCheck, Target, Zap } from "lucide-react";

const reasons = [
  {
    icon: <UserCheck className="text-primary" size={32} />,
    title: "Análise Personalizada",
    description: "Cada negócio recebe um diagnóstico digital customizado para sua realidade específica."
  },
  {
    icon: <Target className="text-primary" size={32} />,
    title: "Foco em Negócios Locais",
    description: "Soluções pensadas especificamente para pequenas empresas de Pindamonhangaba e região."
  },
  {
    icon: <Zap className="text-primary" size={32} />,
    title: "Tecnologia Simples",
    description: "Sem sistemas complicados. Tudo é fácil de usar para que você foque no seu negócio."
  }
];

export default function Authority() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-text-main mb-4">Por que trabalhar conosco</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-main">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
