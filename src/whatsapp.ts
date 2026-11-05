export const WHATSAPP_NUMBER = "5512992185685";
export const WHATSAPP_DISPLAY = "(12) 99218-5685";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MESSAGE =
  "Olá, Jorge! Vi seu site e quero ver um modelo de site para o meu setor, sem compromisso.";

export const sectorMessage = (sector: string) =>
  `Olá, Jorge! Quero ver um modelo de site para ${sector}, sem compromisso.`;
