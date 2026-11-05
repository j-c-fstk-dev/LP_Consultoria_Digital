const faqs = [
  {
    q: "Quanto custa um site?",
    a: "Depende do tamanho do projeto. Você recebe o valor fechado, por escrito, antes de começar. Ver o modelo do seu setor e receber a proposta não custa nada.",
  },
  {
    q: "Já tenho um site. Vale a pena refazer?",
    a: "Nem sempre. Eu avalio o que você tem e digo com sinceridade se compensa ajustar ou fazer um novo.",
  },
  {
    q: "Preciso entender de tecnologia?",
    a: "Não. Eu cuido do domínio, da hospedagem, do Google e do texto. Você só aprova.",
  },
  {
    q: "Atende fora do Vale do Paraíba?",
    a: "Sim. O atendimento é online para todo o Brasil e para empresas no exterior.",
  },
];

export default function Faq() {
  return (
    <section id="duvidas" className="border-t border-line bg-surface">
      <div className="wrap grid gap-10 py-16 md:grid-cols-[4fr_8fr] md:gap-16 md:py-24">
        <h2 className="font-serif text-[30px] font-semibold leading-tight tracking-[-0.015em] md:text-[40px]">
          Dúvidas
        </h2>
        <div className="border-t border-ink">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-[20px] font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="font-sans text-[22px] font-normal text-muted group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pb-6 text-[16px] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
