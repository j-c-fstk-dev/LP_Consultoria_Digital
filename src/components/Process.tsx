const steps = [
  {
    title: "Você vê um modelo do seu setor",
    text: "Me chama no WhatsApp. Em até 1 dia útil eu te mostro um site de exemplo do seu ramo, para você saber exatamente o que vai receber.",
  },
  {
    title: "Proposta fechada, por escrito",
    text: "Escopo, prazo e preço definidos antes de qualquer pagamento. Sem surpresa no meio do caminho.",
  },
  {
    title: "Site no ar em até 15 dias úteis",
    text: "Você aprova cada etapa. Depois da entrega, hospedagem e ajustes ficam com o suporte mensal, se você quiser.",
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="bg-navy text-white">
      <div className="wrap py-16 md:py-24">
        <h2 className="font-serif text-[30px] font-semibold leading-tight tracking-[-0.015em] md:text-[40px]">
          Como funciona
        </h2>
        <ol className="mt-10 grid gap-10 border-t border-white/25 pt-8 md:grid-cols-3 md:gap-12">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-serif text-[48px] font-semibold leading-none text-sky">{i + 1}</span>
              <h3 className="mt-4 font-serif text-[22px] font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2 text-[16px] text-white/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
