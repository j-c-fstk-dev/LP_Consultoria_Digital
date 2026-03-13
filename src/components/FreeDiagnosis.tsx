import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

export default function FreeDiagnosis() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing bg-white" id="free-diagnosis">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 md:p-12 rounded-3xl border border-primary/10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-text-main mb-4">Diagnóstico Digital Inicial Gratuito</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Uma análise rápida e gratuita da presença digital do seu negócio.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Seu negócio aparece no Google?",
                    "Como os clientes encontram sua empresa online",
                    "Principais problemas digitais",
                    "Oportunidades simples de melhoria"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <Check size={20} className="text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-8 italic">
                  Este é um diagnóstico consultivo rápido para ajudar você a entender a situação digital atual do seu negócio. Sem custo e sem compromisso.
                </p>

                <button onClick={scrollToContact} className="btn btn-primary">
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight size={20} />
                </button>
              </div>
              
              <div className="hidden lg:block w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop" 
                  alt="Análise Digital" 
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
