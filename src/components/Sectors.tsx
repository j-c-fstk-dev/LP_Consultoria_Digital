import { sectorMessage, waLink } from "../whatsapp";

const sectors = [
  { name: "Advocacia", line: "Áreas de atuação explicadas com clareza, dentro das regras da OAB.", msg: "escritório de advocacia" },
  { name: "Transportes e logística", line: "Cotação de frete pelo site, rotas e frota à vista.", msg: "transportadora" },
  { name: "Saúde e clínicas", line: "Especialidades, convênios e agendamento pelo WhatsApp.", msg: "clínica ou consultório" },
  { name: "Contabilidade", line: "Serviços por tipo de empresa e captação de novos clientes.", msg: "escritório de contabilidade" },
  { name: "Construção e reformas", line: "Obras entregues, orçamento rápido e área atendida.", msg: "empresa de construção ou reformas" },
  { name: "Outro setor", line: "Me conte o que você faz e eu mostro como ficaria.", msg: "o meu setor" },
];

export default function Sectors() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="wrap py-14 md:py-20">
        <h2 className="font-serif text-[30px] font-semibold leading-tight tracking-[-0.015em] md:text-[40px]">
          Veja um modelo de site do seu setor
        </h2>
        <p className="mt-3 max-w-[36em] text-muted">
          Escolha sua área. Abre uma conversa no WhatsApp e eu te mando um exemplo pronto, sem custo.
        </p>
        <ul className="mt-10 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <li key={s.name} className="border-b border-line">
              <a
                href={waLink(sectorMessage(s.msg))}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start justify-between gap-6 py-6 pr-2 sm:pr-8"
              >
                <span>
                  <span className="block font-serif text-[22px] font-semibold group-hover:text-navy">{s.name}</span>
                  <span className="mt-1 block text-[16px] text-muted">{s.line}</span>
                </span>
                <span aria-hidden="true" className="mt-1 text-[22px] text-navy transition-transform group-hover:translate-x-1">
                  ›
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
