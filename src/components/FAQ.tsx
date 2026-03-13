import { motion } from "motion/react";

const faqs = [
  {
    question: "Preciso ter conhecimento técnico?",
    answer: "Não. Todo o sistema é configurado para ser simples e fácil de usar. Nós cuidamos da parte técnica para você."
  },
  {
    question: "Quanto tempo demora para criar o site?",
    answer: "Normalmente entre 5 e 10 dias, dependendo da complexidade do projeto e da entrega das informações do negócio."
  },
  {
    question: "O diagnóstico digital é realmente gratuito?",
    answer: "Sim. O diagnóstico é totalmente gratuito e sem compromisso. É uma forma de você conhecer nosso trabalho e as oportunidades do seu negócio."
  }
];

export default function FAQ() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-text-main mb-4">Dúvidas Frequentes</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border-light bg-bg-main/30"
            >
              <h3 className="text-lg font-bold text-text-main mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
