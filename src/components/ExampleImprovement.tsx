import { motion } from "motion/react";
import { ArrowRight, XCircle, CheckCircle } from "lucide-react";

export default function ExampleImprovement() {
  return (
    <section className="section-spacing bg-bg-main">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-text-main mb-4">Exemplo de Melhoria Digital</h2>
          <p className="text-gray-600">Veja como transformamos a presença de um negócio local típico.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card border-red-100"
          >
            <div className="flex items-center gap-2 text-red-600 font-bold mb-4 uppercase text-sm">
              <XCircle size={18} />
              Antes
            </div>
            <h3 className="text-lg font-bold mb-4">Negócio Invisível</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Sem site ou presença no Google
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Baixa visibilidade nas buscas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                Clientes não acham o telefone
              </li>
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="hidden md:flex justify-center text-primary">
            <ArrowRight size={48} />
          </div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card border-green-100 ring-2 ring-green-500/20"
          >
            <div className="flex items-center gap-2 text-green-600 font-bold mb-4 uppercase text-sm">
              <CheckCircle size={18} />
              Depois
            </div>
            <h3 className="text-lg font-bold mb-4">Negócio Digitalizado</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Site profissional + Perfil da Empresa no Google
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Catálogo simples de produtos ou serviços
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                Melhora a visibilidade do negócio nas buscas locais
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-2xl border border-border-light text-center max-w-2xl mx-auto">
          <p className="text-primary font-bold text-xl">Resultado: Mais visibilidade e mais facilidade para novos clientes encontrarem o negócio.</p>
        </div>
      </div>
    </section>
  );
}
