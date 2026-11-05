// Conteúdo das 9 primeiras publicações. Edite os textos aqui e rode:
//   node marketing/instagram/gerar.mjs
// Tipos de slide: cover, point, list, shot, cta

export const posts = [
  {
    id: "01-apresentacao",
    slides: [
      { type: "cover", query: "quem faz site em pindamonhangaba", title: "Oi, eu sou o Jorge.", sub: "Faço sites e sistemas para escritórios de advocacia e transportadoras do Vale do Paraíba." },
      { type: "list", title: "O que eu faço", items: [
        ["ok", "Sites profissionais que abrem bem no celular"],
        ["ok", "Perfil da empresa no Google Maps em ordem"],
        ["ok", "Cotação, agendamento e contato direto pelo WhatsApp"],
        ["ok", "Sistemas simples para tirar o negócio da planilha"],
      ] },
      { type: "point", n: null, title: "Por que dois nichos?", body: "Advogado e transportadora têm necessidades muito específicas. Conhecer as regras da OAB e a rotina de uma cotação de frete faz o site trabalhar de verdade." },
      { type: "cta", title: "Quer saber como sua empresa aparece no Google?", body: "Faço um diagnóstico gratuito e te mando por WhatsApp." },
    ],
  },
  {
    id: "02-erros-site-advocacia",
    slides: [
      { type: "cover", query: "advogado trabalhista em taubaté", title: "5 erros no site do escritório que afastam clientes", sub: "Arraste para o lado →" },
      { type: "point", n: 1, title: "Não abre bem no celular", body: "A maioria das pessoas procura advogado pelo telefone. Texto pequeno e botões apertados fazem a pessoa voltar para o Google e ligar para o próximo." },
      { type: "point", n: 2, title: "Não diz onde você atende", body: "\"Advocacia em geral\" não aparece para quem pesquisa \"advogado de família em Pindamonhangaba\". Cidade e áreas de atuação precisam estar escritas." },
      { type: "point", n: 3, title: "Contato escondido", body: "Se o WhatsApp está só no rodapé, muita gente desiste. Um botão visível no topo e no fim de cada página resolve." },
      { type: "point", n: 4, title: "Só fala do escritório", body: "O cliente chega com uma dúvida. Responder perguntas comuns em linguagem simples gera confiança e é permitido pela OAB." },
      { type: "point", n: 5, title: "Google Maps abandonado", body: "Horário errado, sem fotos, sem avaliações. Para busca local, o perfil no Maps muitas vezes aparece antes do próprio site." },
      { type: "cta", title: "Quer que eu olhe o site do seu escritório?", body: "Diagnóstico gratuito, dentro das regras da OAB." },
    ],
  },
  {
    id: "03-oab-pode-nao-pode",
    slides: [
      { type: "cover", query: "o que a oab permite no site do advogado", title: "Site de advogado: o que a OAB permite e o que proíbe", sub: "Provimento 205/2021, em linguagem simples" },
      { type: "list", title: "Pode", items: [
        ["ok", "Site com áreas de atuação, equipe e contatos"],
        ["ok", "Conteúdo informativo e educativo sobre direitos"],
        ["ok", "Perfil no Google Maps e nas redes sociais"],
        ["ok", "Anúncios pagos com conteúdo informativo"],
        ["ok", "Botão de WhatsApp e agendamento"],
      ] },
      { type: "list", title: "Não pode", items: [
        ["no", "Divulgar honorários ou descontos para atrair clientes"],
        ["no", "Prometer resultado ou garantir ganho de causa"],
        ["no", "Expor casos concretos ou nomes de clientes"],
        ["no", "Ostentação de bens ligada à profissão"],
        ["no", "Usar símbolos oficiais da OAB"],
      ] },
      { type: "point", n: null, title: "A regra de ouro", body: "Informar, sim. Vender como mercadoria, não. Publicidade na advocacia deve ser discreta, sóbria e informativa." },
      { type: "cta", title: "Seu site está dentro das regras?", body: "Eu reviso de graça e te mando os pontos de atenção.", note: "Fonte: Provimento 205/2021 e cartilha do CFOAB. Conteúdo informativo; em caso de dúvida, consulte a OAB." },
    ],
  },
  {
    id: "04-modelo-advocacia",
    slides: [
      { type: "shot", image: "advocacia", title: "Modelo: site para escritório de advocacia", body: "Áreas de atuação, dúvidas comuns e agendamento pelo WhatsApp. Link na bio." },
    ],
  },
  {
    id: "05-cotacao-transportadora",
    slides: [
      { type: "cover", query: "transportadora taubaté são paulo frete", title: "Sua transportadora perde frete por demorar na cotação?", sub: "Arraste para o lado →" },
      { type: "point", n: null, title: "Como é hoje", body: "O cliente manda mensagem, você pede origem, destino, peso, volumes, data... e a conversa leva horas. Enquanto isso, ele cotou com mais duas." },
      { type: "point", n: null, title: "Como pode ser", body: "Um formulário no site pede tudo de uma vez e manda a cotação pronta no seu WhatsApp. Você só calcula e responde." },
      { type: "list", title: "O que o site de uma transportadora precisa ter", items: [
        ["ok", "Rotas e cidades atendidas"],
        ["ok", "Tipos de veículo e capacidade"],
        ["ok", "Formulário de cotação"],
        ["ok", "Cadastro de motoristas e agregados"],
      ] },
      { type: "cta", title: "Quer ver um modelo funcionando?", body: "Me chama que eu mando o link." },
    ],
  },
  {
    id: "06-modelo-transportadora",
    slides: [
      { type: "shot", image: "transportes", title: "Modelo: site para transportadora", body: "Cotação de frete direto no WhatsApp, rotas pela Dutra e frota. Link na bio." },
    ],
  },
  {
    id: "07-reels-capa",
    slides: [
      { type: "cover", query: "advogado previdenciário em pindamonhangaba", title: "Pesquisei isso no Google. Olha o que aparece.", sub: "Reels · roteiro na legenda" },
    ],
  },
  {
    id: "08-google-maps-passos",
    slides: [
      { type: "cover", query: "como aparecer no google maps", title: "Perfil da Empresa no Google: 6 passos para aparecer no Maps", sub: "Salve para fazer depois" },
      { type: "point", n: 1, title: "Reivindique o perfil", body: "Pesquise sua empresa no Google Maps. Se ela já existe, clique em \"Reivindicar\". Se não, crie em business.google.com." },
      { type: "point", n: 2, title: "Escolha a categoria certa", body: "\"Escritório de advocacia\" ou \"Transportadora\" como categoria principal. Adicione as secundárias que descrevem o que você faz." },
      { type: "point", n: 3, title: "Preencha tudo", body: "Endereço, horário, telefone, WhatsApp, site e uma descrição com sua cidade e seus serviços." },
      { type: "point", n: 4, title: "Coloque fotos reais", body: "Fachada, recepção, equipe, frota. Fotos reais passam mais confiança que banco de imagens." },
      { type: "point", n: 5, title: "Peça avaliações", body: "Gere o link de avaliação no painel e mande para clientes satisfeitos logo depois do atendimento." },
      { type: "point", n: 6, title: "Responda e atualize", body: "Responda todas as avaliações e publique novidades de vez em quando. Perfil ativo tende a aparecer mais." },
      { type: "cta", title: "Prefere que eu faça isso por você?", body: "Configuro e otimizo seu perfil no Google." },
    ],
  },
  {
    id: "09-diagnostico-gratis",
    slides: [
      { type: "cover", query: "sua empresa", title: "Diagnóstico digital gratuito", sub: "Para escritórios de advocacia e transportadoras do Vale" },
      { type: "list", title: "O que você recebe", items: [
        ["ok", "Como sua empresa aparece no Google e no Maps"],
        ["ok", "Como o seu site funciona no celular"],
        ["ok", "3 melhorias práticas, em ordem de prioridade"],
        ["ok", "Um vídeo curto explicando tudo, pelo WhatsApp"],
      ] },
      { type: "cta", title: "Como pedir", body: "Mande \"diagnóstico\" no WhatsApp ou na DM. Sem custo e sem compromisso." },
    ],
  },
];
