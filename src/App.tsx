import Header from "./components/Header";
import Hero from "./components/Hero";
import Sectors from "./components/Sectors";
import Problems from "./components/Problems";
import Process from "./components/Process";
import About from "./components/About";
import Faq from "./components/Faq";
import Closing from "./components/Closing";
import WaIcon from "./components/WaIcon";
import { DEFAULT_MESSAGE, waLink } from "./whatsapp";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sectors />
        <Problems />
        <Process />
        <About />
        <Faq />
        <Closing />
      </main>
      <a
        href={waLink(DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lg hover:brightness-95"
        style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <WaIcon size={28} />
      </a>
    </>
  );
}
