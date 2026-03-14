export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-border-light">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-primary font-bold text-xl mb-2">Jorge C. Consultoria Digital</h3>
            <p className="text-gray-500 text-sm mb-4">Ajudando o comércio local a crescer na internet.</p>
            <div className="text-xs text-gray-400">
              <p className="font-semibold uppercase mb-1">Áreas de Atendimento:</p>
              <p>Pindamonhangaba • Taubaté • Tremembé • Campos do Jordão • Vale do Paraíba</p>
            </div>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-primary transition-colors">Apresentação</a>
            <a href="#contact" className="hover:text-primary transition-colors">Diagnóstico</a>
            <a href="https://wa.me/5512992185685" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Jorge C. Consultoria Digital. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
