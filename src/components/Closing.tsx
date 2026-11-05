import { DEFAULT_MESSAGE, WHATSAPP_DISPLAY, waLink } from "../whatsapp";
import WaIcon from "./WaIcon";

export default function Closing() {
  return (
    <>
      <section className="bg-navy-deep text-white">
        <div className="wrap flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="max-w-[16em] font-serif text-[30px] font-semibold leading-tight tracking-[-0.015em] md:text-[42px]">
            Veja como ficaria o site da sua empresa antes de decidir qualquer coisa.
          </h2>
          <a
            href={waLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn shrink-0 bg-white text-navy hover:bg-sky"
          >
            <WaIcon />
            Ver um modelo do meu setor
          </a>
        </div>
      </section>
      <footer className="wrap flex flex-col gap-2 py-8 text-[14px] text-muted md:flex-row md:justify-between">
        <span>Jorge C. · Consultoria Digital · Pindamonhangaba, SP</span>
        <span>
          WhatsApp{" "}
          <a href={waLink(DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer" className="text-ink underline">
            {WHATSAPP_DISPLAY}
          </a>
        </span>
      </footer>
    </>
  );
}
