import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Digital",
    description: "Analisamos:",
    bullets: [
      "Presença no Google",
      "Site atual (se houver)",
      "Redes sociais",
      "Oportunidades de visibilidade"
    ]
  },
  {
    number: "02",
    title: "Plano Digital",
    description: "Criamos um plano claro mostrando:",
    bullets: [
      "Melhorias necessárias",
      "Novas oportunidades",
      "Cronograma de ação"
    ]
  },
  {
    number: "03",
    title: "Implementação",
    description: "Construímos e configuramos:",
    bullets: [
      "Toda a estrutura digital",
      "Site e catálogo",
      "Integrações com serviços do Google"
    ]
  }
];

export default function HowItWorks() {
  return (
    <section className="section-spacing bg-bg-main">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-text-main mb-4">Como funciona o processo de consultoria</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border-light -z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-text-main">{step.title}</h3>
              <p className="text-gray-600 font-medium mb-3">{step.description}</p>
              <ul className="text-gray-500 text-sm space-y-1 inline-block text-left">
                {step.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
