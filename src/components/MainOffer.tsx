import { motion } from "motion/react";
import { Check, ArrowRight, ShieldCheck, Zap, Globe, Star } from "lucide-react";

export default function MainOffer() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing bg-white" id="pricing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-text-main mb-4">Soluções para Melhorar a Presença Digital do seu Negócio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Depois do diagnóstico, você pode escolher a melhor solução para o seu momento.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1 - Entry Level */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card flex flex-col h-full"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main">Otimização de Presença no Google</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-gray-500 text-sm">R$</span>
                <span className="text-4xl font-bold text-text-main">300</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">Ideal para quem quer ser encontrado rapidamente no Google.</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Auditoria digital rápida",
                "Otimização do Perfil da Empresa no Google",
                "Melhoria da descrição do negócio",
                "Categorias de negócio corretas",
                "Otimização de fotos",
                "Link de avaliação para clientes"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-border-light">
              <p className="text-xs font-bold text-primary uppercase mb-4">Benefícios:</p>
              <ul className="text-xs text-gray-500 space-y-1 mb-6">
                <li>• Melhor visibilidade no Google</li>
                <li>• Mais confiança dos clientes</li>
                <li>• Mais avaliações positivas</li>
              </ul>
              <button onClick={scrollToContact} className="btn border border-primary text-primary hover:bg-blue-50 w-full text-sm">
                Melhorar Minha Presença no Google
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-2">Execução em 1 a 2 horas</p>
            </div>
          </motion.div>

          {/* Plan 2 - Essential (Highlighted) */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card flex flex-col h-full ring-2 ring-primary relative bg-white shadow-2xl z-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Recomendado
            </div>
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main">Mini Presença Digital</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-gray-500 text-sm">R$</span>
                <span className="text-4xl font-bold text-text-main">600</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">Uma página profissional simples para ser encontrado online.</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Página de negócio simples e profissional",
                "Informações completas da empresa",
                "Integração com Google Maps",
                "Botão de contato via WhatsApp",
                "Catálogo simples de produtos/serviços",
                "Estrutura: Início, Produtos, Contato, Mapa"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-border-light">
              <p className="text-xs font-bold text-primary uppercase mb-4">Benefícios:</p>
              <ul className="text-xs text-gray-500 space-y-1 mb-6">
                <li>• Clientes encontram suas informações facilmente.</li>
                <li>• Presença digital profissional</li>
                <li>• Ajuda seu negócio a aparecer melhor nas buscas do Google.</li>
              </ul>
              <button onClick={scrollToContact} className="btn btn-primary w-full text-sm">
                Criar Minha Página de Negócio
              </button>
            </div>
          </motion.div>

          {/* Plan 3 - Complete */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card flex flex-col h-full"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main">Presença Digital Profissional</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-gray-500 text-sm">R$</span>
                <span className="text-4xl font-bold text-text-main">1200</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">Estrutura digital completa para quem quer uma presença forte.</p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Site profissional completo",
                "Catálogo de produtos detalhado",
                "Página de promoções exclusiva",
                "Página 'Sobre Nós' (sua história)",
                "Página de contato estruturada",
                "Otimização avançada para buscas locais no Google",
                "Painel administrativo para atualizações"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-border-light">
              <p className="text-xs font-bold text-primary uppercase mb-4">Benefícios:</p>
              <ul className="text-xs text-gray-500 space-y-1 mb-6">
                <li>• Presença digital completa e mais autoridade para seu negócio.</li>
                <li>• Melhor visibilidade no Google (SEO)</li>
                <li>• Atualização fácil de produtos, serviços e promoções.</li>
              </ul>
              <button onClick={scrollToContact} className="btn border border-primary text-primary hover:bg-blue-50 w-full text-sm">
                Construir Meu Site Profissional
              </button>
            </div>
          </motion.div>
        </div>

        {/* Value Ladder Explanation */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h4 className="text-xl font-bold text-text-main mb-4">Você pode começar com algo simples e evoluir conforme o seu negócio cresce.</h4>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="p-4 bg-white rounded-xl border border-border-light shadow-sm text-sm">
              Muitas empresas começam melhorando sua <strong>presença no Google</strong>.
            </div>
            <div className="hidden md:block text-primary">
              <ArrowRight size={24} className="mx-auto" />
            </div>
            <div className="p-4 bg-white rounded-xl border border-border-light shadow-sm text-sm">
              Depois criam uma <strong>página simples</strong> para que clientes encontrem mais informações.
            </div>
            <div className="hidden md:block text-primary">
              <ArrowRight size={24} className="mx-auto" />
            </div>
            <div className="p-4 bg-white rounded-xl border border-border-light shadow-sm text-sm">
              E, quando o negócio cresce, evoluem para um <strong>site completo</strong> com catálogo e promoções.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
