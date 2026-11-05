const rows = [
  {
    problem: "O cliente não encontra você",
    answer: "Site e perfil no Google Maps preparados para aparecer quando ele pesquisa o seu serviço na sua cidade.",
  },
  {
    problem: "O cliente encontra, mas não confia",
    answer: "Visual profissional e texto escrito para o seu cliente, mostrando por que escolher você e não o concorrente.",
  },
  {
    problem: "O cliente desiste na hora do contato",
    answer: "WhatsApp a um toque em todas as páginas, com a mensagem já pronta. Sem formulário, sem espera.",
  },
];

export default function Problems() {
  return (
    <section className="wrap py-16 md:py-24">
      <h2 className="max-w-[18em] font-serif text-[30px] font-semibold leading-tight tracking-[-0.015em] md:text-[40px]">
        Três pontos em que empresas boas perdem clientes sem perceber
      </h2>
      <dl className="mt-10 border-t border-ink">
        {rows.map((r) => (
          <div key={r.problem} className="grid gap-2 border-b border-line py-7 md:grid-cols-[5fr_7fr] md:gap-12">
            <dt className="font-serif text-[22px] font-semibold leading-snug">{r.problem}</dt>
            <dd className="text-[17px] text-muted md:text-[18px]">{r.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
