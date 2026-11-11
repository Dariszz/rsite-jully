// Dados do site em um só lugar. Altere aqui e o site inteiro acompanha.

export const site = {
  nome: "Jully Gonçalves",
  titulo: "Nutricionista",
  slogan: "Saúde real, escolhas possíveis",

  // WhatsApp: código do país + DDD + número, só dígitos.
  whatsapp: "5532999137082",
  whatsappExibicao: "(32) 99913-7082",

  cidades: ["Juiz de Fora", "Santos Dumont"],
  uf: "MG",

  // Preencha quando tiver. Enquanto estiver vazio, não aparece no site.
  crn: "", // ex.: "CRN-9 00000"
  instagram: "jullyg.almeida", // sem @

  // Enquanto o CRN não sai, o site convida para a lista de espera.
  // Quando os atendimentos começarem, deixe vazio ("") e o site passa a
  // mostrar o pedido de agendamento e o formulário de feedback.
  listaDeEspera: "https://forms.gle/9iBj3CoF9G4JrnH17",
  url: "", // ex.: "https://www.jullygoncalves.com.br"

  // Mude para false se preferir o site sem a foto.
  mostrarFoto: true,
};

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const mensagemPadrao =
  "Olá, Jully! Vim pelo seu site e gostaria de saber mais sobre a consulta.";

// Depoimentos aprovados pela Jully. A seção de depoimentos só mostra a lista
// quando houver pelo menos um item aqui.
// Pelo Código de Ética do CFN: sem fotos de antes e depois, sem peso,
// medidas ou resultados de exames. Só a experiência do atendimento.
export type Depoimento = { nome: string; texto: string };

export const depoimentos: Depoimento[] = [
  // { nome: "Maria S.", texto: "..." },
];
