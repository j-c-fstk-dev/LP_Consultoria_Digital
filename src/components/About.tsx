const commitments = [
  { title: "Você fala comigo", text: "Sem atendente, sem agência no meio. Quem orça é quem desenvolve e quem dá suporte." },
  { title: "Tudo fica no seu nome", text: "Domínio, hospedagem e acessos são seus. Se um dia quiser trocar de fornecedor, leva tudo." },
  { title: "Prazo combinado é prazo cumprido", text: "A data de entrega está na proposta, junto com o que será entregue em cada etapa." },
];

export default function About() {
  return (
    <section className="wrap grid gap-10 py-16 md:grid-cols-[4fr_8fr] md:gap-16 md:py-24">
      <div>
        <h2 className="font-serif text-[30px] font-semibold leading-tight tracking-[-0.015em] md:text-[40px]">
          Quem cuida do seu projeto
        </h2>
        <p className="mt-4 text-muted">
          Sou Jorge C., desenvolvedor em Pindamonhangaba. Atendo empresas do Vale do Paraíba presencialmente e de
          qualquer lugar do Brasil e do exterior online.
        </p>
      </div>
      <ul className="border-t border-ink">
        {commitments.map((c) => (
          <li key={c.title} className="border-b border-line py-6">
            <h3 className="font-serif text-[21px] font-semibold">{c.title}</h3>
            <p className="mt-1 text-[16px] text-muted">{c.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
