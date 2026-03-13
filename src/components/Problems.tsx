import { motion } from "motion/react";
import { Search, ShoppingBag, Megaphone, LayoutGrid } from "lucide-react";

const problems = [
  {
    icon: <Search className="text-primary" size={32} />,
    title: "Sua empresa não aparece no Google",
    description: "Clientes buscam por serviços como o seu, mas não conseguem encontrar sua empresa."
  },
  {
    icon: <ShoppingBag className="text-primary" size={32} />,
    title: "Clientes não veem seus produtos online",
    description: "Sem um catálogo online, muitas oportunidades de venda são perdidas diariamente."
  },
  {
    icon: <Megaphone className="text-primary" size={32} />,
    title: "Suas promoções não chegam aos clientes",
    description: "Você cria promoções, mas pouquíssimas pessoas ficam sabendo delas."
  },
  {
    icon: <LayoutGrid className="text-primary" size={32} />,
    title: "Falta de organização digital",
    description: "Informações do negócio, produtos e comunicação com clientes estão desorganizados."
  }
];

export default function Problems() {
  return (
    <section className="section-spacing bg-bg-main">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-text-main mb-4">Seu negócio está perdendo clientes na internet?</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card flex gap-6 items-start"
            >
              <div className="shrink-0 p-3 bg-blue-50 rounded-lg">
                {problem.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-text-main">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
