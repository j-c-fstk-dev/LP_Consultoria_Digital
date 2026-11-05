import { ExternalLink } from "lucide-react";

const projects = [
  {
    href: "/demos/advocacia/index.html",
    image: "/portfolio/advocacia.jpg",
    title: "Site para escritório de advocacia",
    text: "Áreas de atuação, dúvidas comuns em linguagem clara e agendamento por WhatsApp. Segue as regras de publicidade da OAB.",
  },
  {
    href: "/demos/transportes/index.html",
    image: "/portfolio/transportes.jpg",
    title: "Site para transportadora",
    text: "Cotação de frete que chega pronta no WhatsApp, rotas atendidas, frota e cadastro de motoristas e agregados.",
  },
];

export default function Portfolio() {
  return (
    <section className="section-spacing bg-white" id="portfolio">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-text-main mb-4">Modelos de site</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projetos demonstrativos com empresas fictícias. Abra no celular e navegue como se fosse o seu cliente.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border-light overflow-hidden bg-bg-main hover:border-primary/40 transition-colors"
            >
              <img src={p.image} alt={`Prévia do ${p.title.toLowerCase()}`} className="w-full aspect-[16/10] object-cover object-top border-b border-border-light" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-main mb-2 flex items-center gap-2">
                  {p.title}
                  <ExternalLink size={18} className="text-primary" />
                </h3>
                <p className="text-gray-600 text-base">{p.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
