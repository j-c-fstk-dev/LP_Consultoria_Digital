import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-text-main">
            Apareça no Google, atraia mais clientes e organize a presença digital da sua empresa.
          </h1>
          <p className="text-gray-600 mb-8 text-xl">
            Existem diferentes formas de melhorar sua presença digital. Você pode começar com algo simples ou construir uma solução completa para atrair mais clientes em Pindamonhangaba e no Vale do Paraíba.
          </p>
          <div className="mb-8 p-4 bg-blue-50/50 rounded-xl border-l-4 border-primary">
            <p className="text-text-main font-medium">
              Mais de 80% dos clientes procuram empresas no Google antes de entrar em contato.
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Se o seu negócio não aparece nas buscas, você pode estar perdendo clientes todos os dias.
            </p>
            <p className="text-gray-600 text-sm mt-1">
              É exatamente isso que ajudamos empresas locais a resolver.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button onClick={scrollToContact} className="btn btn-primary text-lg">
              Solicitar Diagnóstico Digital Gratuito
              <ArrowRight size={20} />
            </button>
            <a 
              href="https://wa.me/5512999999999?text=Olá! Gostaria de solicitar um diagnóstico digital para o meu negócio." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-cta text-lg"
            >
              <MessageCircle size={20} />
              Conversar no WhatsApp
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Análise gratuita • Sem compromisso • Resposta em até 24 horas
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="https://res.cloudinary.com/dr0weongo/image/upload/v1773372936/photo_2026-03-13_00-34-21_xoenvi.jpg" 
            alt="Dono de negócio local trabalhando" 
            className="rounded-2xl shadow-2xl w-full h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-border-light hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ArrowRight size={20} />
              </div>
              <div>
                <p className="font-bold text-sm text-text-main">+45% Visibilidade</p>
                <p className="text-xs text-gray-500">Média em Pinda e região</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
