import { DEFAULT_MESSAGE, waLink } from "../whatsapp";
import WaIcon from "./WaIcon";

export default function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="wrap flex items-center justify-between gap-4 py-5">
        <a href="#" className="flex items-baseline gap-2.5 no-underline">
          <span className="font-serif text-[22px] font-semibold tracking-[-0.01em]">Jorge C.</span>
          <span className="hidden text-[14px] text-muted sm:inline">Consultoria Digital</span>
        </a>
        <nav aria-label="Principal" className="flex items-center gap-7">
          <a href="#como-funciona" className="hidden text-[15px] text-muted hover:text-ink md:inline">Como funciona</a>
          <a href="#duvidas" className="hidden text-[15px] text-muted hover:text-ink md:inline">Dúvidas</a>
          <a
            href={waLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost px-4 py-3 text-[15px]"
          >
            <WaIcon size={18} />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
