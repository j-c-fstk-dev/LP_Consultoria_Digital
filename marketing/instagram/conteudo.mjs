// Conteúdo das 9 primeiras publicações. Edite os textos aqui e rode:
//   node marketing/instagram/gerar.mjs
// Tipos de slide: photo, cover, point, list, shot, cta

export const posts = [
  {
    id: "01-apresentacao",
    slides: [
      { type: "photo", title: "Antes de ligar, o cliente pesquisa sua empresa.", sub: "Eu faço o site que dá a ele um motivo para escolher você." },
      { type: "point", title: "Prazer, Jorge C.", body: "Sou desenvolvedor em Pindamonhangaba. Faço sites para empresas e profissionais que vendem confiança: escritórios, transportadoras, clínicas, contabilidades e prestadores de serviço." },
      { type: "list", title: "Como eu trabalho", items: [
        ["ok", "Você fala comigo, do orçamento ao suporte"],
        ["ok", "Proposta com escopo, prazo e preço por escrito"],
        ["ok", "Domínio, hospedagem e acessos no seu nome"],
        ["ok", "Site no ar em até 15 dias úteis"],
      ] },
      { type: "cta", title: "Quer ver como ficaria o site da sua empresa?", body: "Me chame no WhatsApp e peça um modelo do seu setor. Sem compromisso." },
    ],
  },
  {
    id: "02-onde-perde-clientes",
    slides: [
      { type: "cover", query: "[seu serviço] em [sua cidade]", title: "Três pontos em que empresas boas perdem clientes sem perceber", sub: "Arraste para o lado" },
      { type: "point", n: 1, title: "O cliente não encontra você", body: "Ele pesquisa o seu serviço na sua cidade e aparece o concorrente. Sem site e sem perfil no Google Maps bem configurado, você nem entra na disputa." },
      { type: "point", n: 2, title: "Encontra, mas não confia", body: "Site antigo, lento ou amador passa a mesma impressão do seu trabalho, mesmo quando ele é excelente. O cliente julga em segundos." },
      { type: "point", n: 3, title: "Desiste na hora do contato", body: "Telefone escondido, formulário longo, resposta que demora. Cada etapa a mais é um cliente a menos." },
      { type: "cta", title: "Qual desses está acontecendo com a sua empresa?", body: "Me mande o nome do seu negócio no WhatsApp que eu te digo, sem custo." },
    ],
  },
  {
    id: "03-oab-pode-nao-pode",
    slides: [
      { type: "cover", query: "o que a oab permite no site do advogado", title: "Site de advogado: o que a OAB permite e o que proíbe", sub: "Provimento 205/2021, em linguagem simples" },
      { type: "list", title: "Pode", items: [
        ["ok", "Site com áreas de atuação, equipe e contatos"],
        ["ok", "Conteúdo informativo sobre direitos"],
        ["ok", "Perfil no Google Maps e nas redes sociais"],
        ["ok", "Anúncios pagos com conteúdo informativo"],
        ["ok", "Botão de WhatsApp e agendamento"],
      ] },
      { type: "list", title: "Não pode", items: [
        ["no", "Divulgar honorários ou descontos para atrair clientes"],
        ["no", "Prometer resultado ou garantir ganho de causa"],
        ["no", "Expor casos concretos ou nomes de clientes"],
        ["no", "Ostentação ligada à profissão"],
        ["no", "Usar símbolos oficiais da OAB"],
      ] },
      { type: "point", title: "Em uma frase", body: "Informar, sim. Vender serviço jurídico como mercadoria, não. A publicidade precisa ser discreta, sóbria e informativa." },
      { type: "cta", title: "Seu site está dentro das regras?", body: "Peça no WhatsApp um modelo de site para advocacia, feito dentro do Provimento 205.", note: "Fonte: Provimento 205/2021 e cartilha do CFOAB. Conteúdo informativo; em caso de dúvida, consulte a OAB." },
    ],
  },
  {
    id: "04-modelo-advocacia",
    slides: [
      { type: "shot", image: "advocacia", title: "Modelo de site para escritório de advocacia", body: "Áreas de atuação, dúvidas comuns e agendamento pelo WhatsApp, dentro das regras da OAB." },
    ],
  },
  {
    id: "05-cotacao-de-frete",
    slides: [
      { type: "cover", query: "transportadora vale do paraíba são paulo", title: "No frete, quem responde a cotação primeiro costuma levar", sub: "Arraste para o lado" },
      { type: "point", title: "Como costuma ser", body: "O cliente manda mensagem. Você pergunta origem, destino, peso, volumes, data. A conversa leva horas, e ele cotou com mais duas empresas nesse tempo." },
      { type: "point", title: "Como pode ser", body: "Um formulário no site pede tudo de uma vez e entrega a cotação pronta no seu WhatsApp. Você só calcula e responde." },
      { type: "list", title: "O que o site de uma transportadora precisa ter", items: [
        ["ok", "Rotas e cidades atendidas"],
        ["ok", "Tipos de veículo e capacidade"],
        ["ok", "Formulário de cotação de frete"],
        ["ok", "Cadastro de motoristas e agregados"],
      ] },
      { type: "cta", title: "Quer ver esse formulário funcionando?", body: "Peça no WhatsApp o modelo de site para transportadora." },
    ],
  },
  {
    id: "06-modelo-transportadora",
    slides: [
      { type: "shot", image: "transportes", title: "Modelo de site para transportadora", body: "Cotação de frete direto no WhatsApp, rotas pela Dutra e frota com capacidade de cada veículo." },
    ],
  },
  {
    id: "07-reels-capa",
    slides: [
      { type: "cover", query: "contador em pindamonhangaba", title: "Fiz essa pesquisa no Google. O resultado diz quem recebe mais clientes.", sub: "Reels" },
    ],
  },
  {
    id: "08-google-maps-passos",
    slides: [
      { type: "cover", query: "como aparecer no google maps", title: "Perfil da Empresa no Google: 6 passos para aparecer no Maps", sub: "Salve para fazer com calma" },
      { type: "point", n: 1, title: "Reivindique o perfil", body: "Procure sua empresa no Google Maps. Se ela já aparece, clique em \"Reivindicar\". Se não, crie em business.google.com." },
      { type: "point", n: 2, title: "Escolha a categoria certa", body: "A categoria principal é o que mais pesa. Seja específico: \"Escritório de contabilidade\", não \"Serviços\"." },
      { type: "point", n: 3, title: "Preencha tudo", body: "Endereço, horário, telefone, WhatsApp, site e uma descrição que diga o que você faz e em qual cidade." },
      { type: "point", n: 4, title: "Use fotos reais", body: "Fachada, recepção, equipe, frota, obras. Foto real passa mais confiança que banco de imagens." },
      { type: "point", n: 5, title: "Peça avaliações", body: "Gere o link de avaliação no painel e envie para clientes satisfeitos logo depois do atendimento." },
      { type: "point", n: 6, title: "Responda e atualize", body: "Responda todas as avaliações, inclusive as ruins, e publique novidades de vez em quando." },
      { type: "cta", title: "Prefere que eu cuide disso?", body: "Configuro o seu perfil junto com o site. Me chame no WhatsApp." },
    ],
  },
  {
    id: "09-modelo-do-seu-setor",
    slides: [
      { type: "cover", query: "site para a minha empresa", title: "Veja como ficaria o site da sua empresa antes de decidir qualquer coisa", sub: "Sem compromisso" },
      { type: "list", title: "Peça um modelo do seu setor", items: [
        ["ok", "Advocacia"],
        ["ok", "Transportes e logística"],
        ["ok", "Saúde e clínicas"],
        ["ok", "Contabilidade"],
        ["ok", "Construção e reformas"],
        ["ok", "Outro setor: me conte o que você faz"],
      ] },
      { type: "cta", title: "Como pedir", body: "Mande \"modelo\" e o seu setor no WhatsApp. Respondo em até 1 dia útil." },
    ],
  },
];
