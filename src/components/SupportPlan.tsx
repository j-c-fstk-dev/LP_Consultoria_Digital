import { motion } from "motion/react";
import { Headphones, Shield, RefreshCw, Server, Check } from "lucide-react";

export default function SupportPlan() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing bg-blue-50" id="support">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/10"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-text-main mb-4">Plano de Suporte Digital</h2>
              <p className="text-gray-600 text-lg">
                Para manter seu sistema digital funcionando com segurança e atualização constante.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  { icon: <Server size={20} />, text: "Hospedagem segura do site" },
                  { icon: <RefreshCw size={20} />, text: "Backups regulares dos seus dados" },
                  { icon: <Shield size={20} />, text: "Atualizações constantes de segurança" },
                  { icon: <Headphones size={20} />, text: "Suporte técnico prioritário" },
                  { icon: <Check size={20} />, text: "Pequenas melhorias e ajustes quando necessário" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-700">
                    <div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl text-center border border-border-light">
                <div className="text-gray-500 text-sm mb-2 uppercase tracking-wider font-bold">Investimento Mensal</div>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-gray-500 text-xl">R$</span>
                  <span className="text-5xl font-bold text-text-main">97</span>
                  <span className="text-gray-500 text-lg">/mês</span>
                </div>
                
                <p className="text-sm text-gray-500 mb-8">
                  Este plano é opcional, mas altamente recomendado para empresas que desejam tranquilidade e suporte contínuo.
                </p>

                <button onClick={scrollToContact} className="btn btn-primary w-full">
                  Ativar Suporte Digital
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
