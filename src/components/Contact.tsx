import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const hasWebsite = data.get("hasWebsite");
    const lines = [
      "Olá! Quero solicitar o diagnóstico digital gratuito.",
      `Nome: ${data.get("Nome") ?? ""}`,
      `Empresa: ${data.get("Empresa") ?? ""}`,
      `Cidade: ${data.get("Cidade") ?? ""}`,
      `WhatsApp: ${data.get("WhatsApp") ?? ""}`,
      data.get("Site") ? `Site atual: ${data.get("Site")}` : "",
      hasWebsite ? `Já tem site: ${hasWebsite === "yes" ? "Sim" : "Não"}` : "",
      data.get("Mensagem") ? `Mensagem: ${data.get("Mensagem")}` : "",
    ].filter(Boolean);
    const url = `https://wa.me/5512992185685?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-spacing bg-bg-main">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-text-main mb-2">Solicite seu diagnóstico digital gratuito</h2>
            <p className="text-primary font-semibold mb-6">Leva menos de 2 minutos para preencher. Sem compromisso.</p>
            <p className="text-gray-600 mb-8 text-lg">
              Preencha o formulário abaixo e entraremos em contato em até 24 horas para entender seu negócio e realizar um diagnóstico inicial da sua presença digital.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-text-main">WhatsApp Direto</p>
                  <a href="https://wa.me/5512992185685" className="text-primary hover:underline font-medium">
                    (12) 99218-5685
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-2xl border border-border-light shadow-sm">
                <p className="text-text-main font-medium mb-2">Como funciona depois do envio</p>
                <p className="text-sm text-gray-600">Seus dados abrem uma conversa no WhatsApp. Eu analiso sua presença no Google, site e redes sociais e te devolvo um resumo com os pontos de melhoria, sem custo.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-border-light">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4">Solicitação Enviada!</h3>
                <p className="text-gray-600">Abrimos o WhatsApp com seus dados. É só tocar em enviar na conversa e respondemos em até 24 horas úteis.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Enviar outra solicitação
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      name="Nome"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1">Nome da Empresa</label>
                    <input 
                      required
                      type="text" 
                      name="Empresa"
                      placeholder="Nome do seu negócio"
                      className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1">Cidade</label>
                    <input 
                      required
                      type="text" 
                      name="Cidade"
                      placeholder="Ex: Pinda"
                      className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1">WhatsApp</label>
                    <input 
                      required
                      type="tel"
                      name="WhatsApp" 
                      placeholder="(12) 99999-9999"
                      className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-main mb-1">Site Atual (Opcional)</label>
                  <input 
                    type="url" 
                    name="Site"
                    placeholder="https://www.seusite.com.br"
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-main mb-2">Seu negócio já possui um site?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="hasWebsite" value="yes" className="w-4 h-4 text-primary" />
                      <span className="text-sm text-text-main">Sim</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="hasWebsite" value="no" className="w-4 h-4 text-primary" />
                      <span className="text-sm text-text-main">Não</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-main mb-1">Mensagem Curta (Opcional)</label>
                  <textarea 
                    rows={2}
                    name="Mensagem"
                    placeholder="Como podemos te ajudar?"
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full text-lg py-4 mt-4">
                  Enviar Solicitação
                  <Send size={20} />
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Respondemos em até 24 horas úteis.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
