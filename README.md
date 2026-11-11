# Site Jully Gonçalves | Nutricionista

Site de uma página em Next.js (React), pronto para publicar na Vercel.

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) 20 ou mais novo.

```
npm install
npm run dev
```

Depois abra http://localhost:3000.

Para ver o visual sem instalar nada, abra o arquivo `previa.html` no navegador.
Ele é só uma cópia para conferência; o site de verdade são os arquivos abaixo.

## Onde mexer

| O que | Arquivo |
|---|---|
| WhatsApp, cidades, CRN, Instagram, mostrar ou não a foto, depoimentos | `lib/site.ts` |
| Textos e ordem das seções | `app/page.tsx` |
| Cores, fontes e a animação | `app/globals.css` |
| Desenho da mesa posta | `components/MesaPosta.tsx` |
| Pedido de agendamento | `components/Agendamento.tsx` |
| Formulário de feedback | `components/Feedback.tsx` |
| Foto | `public/images/jully.jpg` |

## Como funcionam o agendamento e o feedback

Os dois formulários abrem o WhatsApp do visitante com a mensagem já
preenchida, endereçada ao número da Jully. Nada fica guardado no site.

- Agendamento: a Jully recebe o pedido e confirma o horário na conversa.
- Feedback: a Jully recebe o texto. Para publicar um depoimento, copie-o
  para a lista `depoimentos` em `lib/site.ts`.

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com, "Add New Project" e escolha o repositório.
3. A Vercel reconhece o Next.js sozinha; é só confirmar.
4. Depois de ter um domínio, preencha `url` em `lib/site.ts`.

## Lista de espera (situação atual)

Enquanto o CRN não sai, o campo `listaDeEspera` em `lib/site.ts` aponta para
o formulário de lista de espera. Com ele preenchido, os botões levam para a
lista e o site esconde o pedido de agendamento e o feedback.

Quando os atendimentos começarem: deixe `listaDeEspera: ""` e preencha `crn`.

## Pendências

- CRN em `lib/site.ts`, quando sair.
- Logo original exportado do Canva (PNG com fundo transparente ou SVG). O
  monograma atual (`public/images/monograma.png`) foi recortado de um print
  e só funciona bem sobre o fundo verde.
- Fotos profissionais, quando houver.
