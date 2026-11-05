import { motion } from "motion/react";
import { Scale, Truck, Check, MessageCircle } from "lucide-react";

const WHATSAPP = "5512992185685";

const segments = [
  {
    id: "advocacia",
    icon: <Scale size={28} />,
    tag: "Advocacia",
    title: "Site para escritórios de advocacia",
    intro:
      "Um site sóbrio e profissional, que transmite confiança e segue as regras de publicidade da OAB (Provimento 205/2021).",
    items: [
      "Páginas por área de atuação (trabalhista, família, previdenciário...)",
      "Conteúdo informativo que ajuda o cliente a entender o próprio caso",
      "Perfil no Google Maps otimizado para \"advogado em [sua cidade]\"",
      "Contato direto por WhatsApp e agendamento de consulta",
      "Sem promessas de resultado, preços ou sensacionalismo, como pede a OAB",
    ],
    message:
      "Olá! Sou advogado(a) e gostaria de saber mais sobre o site para escritórios de advocacia.",
  },
  {
    id: "transportes",
    icon: <Truck size={28} />,
    tag: "Transportes e Logística",
    title: "Site e sistemas para transportadoras",
    intro:
      "Sua transportadora encontrada por quem contrata frete, com processos que hoje dependem de planilha e telefone organizados.",
    items: [
      "Site com rotas atendidas, tipos de carga e frota",
      "Formulário de cotação de frete direto para o WhatsApp ou e-mail",
      "Página \"Trabalhe Conosco\" para motoristas e agregados",
      "Área do cliente para consulta de status de entregas (opcional)",
      "Painéis simples de controle: coletas, entregas e manutenção da frota",
    ],
    message:
      "Olá! Tenho uma transportadora e gostaria de saber mais sobre site e sistemas para o meu negócio.",
  },
];

export default function Segments() {
  return (
    <section className="section-spacing bg-bg-main" id="segmentos">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-text-main mb-4">Soluções por segmento</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada setor tem necessidades diferentes. Estes são os segmentos em que mais atuamos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              id={segment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card flex flex-col h-full scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                  {segment.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">{segment.tag}</p>
                  <h3 className="text-xl font-bold text-text-main">{segment.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{segment.intro}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {segment.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(segment.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta w-full"
              >
                <MessageCircle size={20} />
                Falar sobre {segment.tag}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
