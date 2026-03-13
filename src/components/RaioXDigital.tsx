import { motion } from "motion/react";
import { Check, Search, FileText, Target } from "lucide-react";

export default function RaioXDigital() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing bg-gray-50" id="raio-x">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-text-main mb-4">Raio-X Digital do Negócio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Uma análise completa e documentada da presença digital da sua empresa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-border-light relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-2xl font-bold">
                R$ 150
              </div>
              
              <h3 className="text-2xl font-bold text-text-main mb-4">O que é o Raio-X Digital?</h3>
              <p className="text-gray-600 mb-6">
                Diferente do diagnóstico inicial gratuito, aqui realizamos uma avaliação detalhada para identificar exatamente o que está impedindo seu negócio de atrair mais clientes online.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-text-main flex items-center gap-2">
                  <Search size={20} className="text-primary" />
                  O que está incluso:
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "Análise detalhada de presença no Google",
                    "Avaliação técnica da presença digital",
                    "Identificação dos principais problemas digitais",
                    "Análise de concorrentes locais",
                    "Mapeamento de oportunidades de crescimento"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-text-main flex items-center gap-2">
                  <FileText size={20} className="text-primary" />
                  O que você recebe:
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "Relatório documentado completo",
                    "Recomendações práticas passo a passo",
                    "Lista de prioridades de melhoria"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={scrollToContact} className="btn btn-primary w-full">
                Solicitar Raio-X Digital
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center">
                <Target size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-main mb-1">Foco Total em Resultados</h4>
                <p className="text-gray-600 text-sm">Não apenas apontamos problemas, mostramos o caminho exato para resolvê-los e começar a atrair clientes.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-main mb-1">Documentação Profissional</h4>
                <p className="text-gray-600 text-sm">Você terá um documento em mãos para guiar suas decisões digitais nos próximos meses.</p>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-primary/10">
              <p className="text-primary font-medium italic text-sm">
                "O Raio-X Digital é o investimento mais inteligente para quem quer parar de perder tempo e dinheiro com ações digitais que não funcionam."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
