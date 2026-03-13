import { motion } from "motion/react";
import { ShoppingBag, Users, BarChart3, Plus, Check } from "lucide-react";

export default function Upgrades() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const modules = [
    {
      title: "Canal de Pedidos",
      price: "+R$ 1300",
      icon: <ShoppingBag size={24} />,
      includes: [
        "Sistema de pedidos online pelo celular",
        "Integração com WhatsApp",
        "Pagamento via PIX"
      ],
      benefit: "Clientes podem fazer pedidos diretamente pelo celular de forma simples."
    },
    {
      title: "Fidelização de Clientes",
      price: "+R$ 1300",
      icon: <Users size={24} />,
      includes: [
        "Cadastro de clientes",
        "Envio automático de promoções para clientes",
        "Envio de novidades e promoções por mensagem",
        "Sistema simples de fidelidade para clientes"
      ],
      benefit: "Permite manter clientes voltando com promoções e comunicação direta."
    },
    {
      title: "Gestão Digital",
      price: "+R$ 1600",
      icon: <BarChart3 size={24} />,
      includes: [
        "Controle simples de estoque",
        "Painel simples de acompanhamento de vendas",
        "Relatórios de desempenho"
      ],
      benefit: "Ajuda o negócio a ter controle completo das operações e resultados."
    }
  ];

  return (
    <section className="section-spacing bg-white" id="upgrades">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-text-main mb-4">Expansão da Estrutura Digital</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            À medida que o seu negócio cresce, novas ferramentas podem ser adicionadas ao seu sistema digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card flex flex-col h-full border-dashed border-2 border-border-light hover:border-primary/30 transition-colors"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-text-main">{module.title}</h3>
                <div className="mt-2 text-2xl font-bold text-primary">{module.price}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {module.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border-light">
                <p className="text-sm text-gray-600 mb-6 italic">
                  "{module.benefit}"
                </p>
                <button onClick={scrollToContact} className="btn border border-primary text-primary hover:bg-blue-50 w-full text-sm flex items-center justify-center gap-2">
                  <Plus size={16} />
                  Adicionar {module.title}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
