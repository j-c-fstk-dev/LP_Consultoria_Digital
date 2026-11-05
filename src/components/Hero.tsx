import { DEFAULT_MESSAGE, waLink } from "../whatsapp";
import WaIcon from "./WaIcon";

export default function Hero() {
  return (
    <section className="wrap grid items-center gap-10 py-12 md:grid-cols-[7fr_5fr] md:gap-16 md:py-20">
      <div>
        <h1 className="font-serif text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] md:text-[64px]">
          Antes de ligar, o cliente pesquisa sua empresa. Dê a ele um motivo para escolher você.
        </h1>
        <p className="mt-6 max-w-[34em] text-[18px] text-muted md:text-[20px]">
          Desenvolvo sites para empresas e profissionais que vendem confiança: escritórios, transportadoras,
          clínicas, contabilidades e prestadores de serviço. Você fala direto comigo, do orçamento à entrega.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={waLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <WaIcon />
            Ver um modelo do meu setor
          </a>
          <span className="text-[15px] text-muted">Sem compromisso. Resposta em até 1 dia útil.</span>
        </div>
        <div className="mt-8 flex items-center gap-3 md:hidden">
          <img src="/jorge.jpg" alt="" className="h-12 w-12 rounded-full object-cover object-top" />
          <p className="text-[15px] leading-snug text-muted">
            <span className="font-semibold text-ink">Jorge C.</span>
            <br />
            Desenvolvedor · Pindamonhangaba, SP
          </p>
        </div>
      </div>
      <figure className="hidden md:block">
        <img
          src="/jorge.jpg"
          alt="Jorge C., desenvolvedor de sites"
          className="aspect-[4/5] w-full rounded-[3px] object-cover"
          width={800}
          height={1000}
        />
        <figcaption className="mt-3 text-[14px] text-muted">
          <span className="font-semibold text-ink">Jorge C.</span> · desenvolvedor em Pindamonhangaba, SP
        </figcaption>
      </figure>
    </section>
  );
}
