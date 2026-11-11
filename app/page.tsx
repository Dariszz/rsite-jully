import Image from "next/image";
import Agendamento from "../components/Agendamento";
import Feedback from "../components/Feedback";
import MesaPosta from "../components/MesaPosta";
import { depoimentos, linkWhatsApp, mensagemPadrao, site } from "../lib/site";

const cidades = site.cidades.join(" e ");

const etapas = [
  {
    nome: "Anamnese nutricional",
    texto:
      "Conversamos sobre sua rotina, histórico de saúde, alimentação, preferências, dificuldades e objetivos.",
  },
  {
    nome: "Avaliação individual",
    texto:
      "Análise dos dados disponíveis, como peso, altura, exames e composição corporal.",
  },
  {
    nome: "Definição de objetivos",
    texto:
      "Estabelecemos metas realistas e alinhadas à sua rotina e às suas necessidades.",
  },
  {
    nome: "Estratégia nutricional",
    texto:
      "Construção do seu plano alimentar personalizado, com orientações práticas e flexíveis.",
  },
  {
    nome: "Orientações e próximos passos",
    texto:
      "Tiramos suas dúvidas e alinhamos os próximos passos do seu acompanhamento.",
  },
];

const voceRecebe = [
  "Refeições com quantidades individualizadas",
  "Opções de substituição para cada refeição",
  "Organização das refeições no seu dia",
  "Orientações personalizadas",
  "Estratégias práticas para a sua rotina",
];

const suporte = [
  "Esclareça suas dúvidas",
  "Troque opções de alimentos",
  "Adapte refeições à sua rotina",
  "Receba orientações práticas",
  "Tenha mais segurança para aplicar o seu plano",
];

const duvidas = [
  {
    p: "O atendimento é presencial ou online?",
    r: `Os dois. O presencial acontece em ${cidades} (${site.uf}); o online atende você de onde estiver, por chamada de vídeo.`,
  },
  site.listaDeEspera
    ? {
        p: "Quando começam os atendimentos?",
        r: "Em breve. Entre na lista de espera e a Jully avisa você assim que a agenda abrir.",
      }
    : {
        p: "Como faço para agendar?",
        r: "Preencha o pedido de agendamento com o dia e o período que prefere. Ele chega no WhatsApp da Jully, que confirma o horário com você.",
      },
  {
    p: "O que eu recebo depois da consulta?",
    r: "Um plano alimentar individualizado, com quantidades, opções de substituição para cada refeição e orientações práticas para a sua rotina.",
  },
  {
    p: "Posso tirar dúvidas depois da consulta?",
    r: "Sim. Você conta com suporte pelo WhatsApp para esclarecer dúvidas, trocar opções de alimentos e adaptar refeições.",
  },
];

function Marca() {
  return (
    <span className="marca">
      <Image
        className="marca-monograma"
        src="/images/monograma.png"
        alt=""
        width={426}
        height={478}
      />
      <span className="marca-nome">{site.nome}</span>
      <span className="marca-titulo">{site.titulo}</span>
    </span>
  );
}

function Balao() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M12 3.2a8.6 8.6 0 0 0-7.4 13l-1.2 4.4 4.5-1.2A8.6 8.6 0 1 0 12 3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.7c.1 3.1 2.8 5.8 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Pagina() {
  const whats = linkWhatsApp(mensagemPadrao);
  const espera = site.listaDeEspera;

  return (
    <>
      <header className="hero">
        <div className="mesa">
          <MesaPosta />
        </div>
        <div className="hero-veu" aria-hidden="true" />

        <nav className="topo miolo" aria-label="Principal">
          <a href="#inicio" className="topo-marca">
            <Marca />
          </a>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#consulta">A consulta</a></li>
            <li><a href="#atendimento">Onde atendo</a></li>
            <li><a href="#agendar">{espera ? "Lista de espera" : "Agendar"}</a></li>
          </ul>
        </nav>

        <div className="hero-texto miolo" id="inicio">
          <p className="hero-local">
            Nutricionista em {cidades} e online
          </p>
          <h1>
            Mais que alimentação, <em>uma vida com propósito.</em>
          </h1>
          <p className="hero-apoio">
            Um acompanhamento pensado para você, sua rotina e seus objetivos.
          </p>
          <div className="hero-acoes">
            {espera ? (
              <a href={espera} className="botao botao-claro" target="_blank" rel="noopener">
                Entrar na lista de espera
              </a>
            ) : (
              <a href="#agendar" className="botao botao-claro">
                Agendar consulta
              </a>
            )}
            <a href={whats} className="botao botao-contorno" target="_blank" rel="noopener">
              <Balao /> Chamar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="secao sobre" id="sobre">
          <div className={`miolo sobre-grade${site.mostrarFoto ? "" : " sem-foto"}`}>
            {site.mostrarFoto && (
              <div className="retrato">
                <Image
                  src="/images/jully.jpg"
                  alt="Jully Gonçalves no dia da formatura em Nutrição"
                  width={640}
                  height={960}
                  sizes="(max-width: 800px) 80vw, 380px"
                />
              </div>
            )}
            <div>
              <h2>
                Prazer, <em>sou Jully.</em>
              </h2>
              <p>
                Sou nutricionista formada pela Universidade Federal de Juiz de
                Fora (UFJF) e acredito em uma nutrição baseada em ciência, mas
                também em uma alimentação que faça sentido para a vida real.
              </p>
              <p>
                Meu objetivo é te ajudar a construir uma relação mais leve e
                consciente com a comida, respeitando a sua rotina, as suas
                preferências e os seus objetivos.
              </p>
              <ul className="pilares">
                <li>Ciência</li>
                <li>Acolhimento</li>
                <li>Individualização</li>
                <li>Resultados reais</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="secao consulta" id="consulta">
          <div className="miolo consulta-grade">
            <div className="consulta-intro">
              <p className="rotulo">Como funciona</p>
              <h2>
                A sua <em>consulta</em>
              </h2>
              <p>
                Cada etapa da consulta é pensada para que eu possa te conhecer
                melhor e, assim, construir um plano nutricional
                individualizado, realista e alinhado aos seus objetivos.
              </p>
              <p className="manuscrito">
                Da escuta ao plano, cada detalhe importa.
              </p>
            </div>
            <ol className="etapas">
              {etapas.map((e, i) => (
                <li key={e.nome}>
                  <span className="etapa-numero" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{e.nome}</h3>
                    <p>{e.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="secao plano">
          <div className="miolo plano-grade">
            <div>
              <h2>
                Seu plano <em>alimentar</em>
              </h2>
              <p>
                O seu plano alimentar é construído de forma individualizada,
                considerando seus objetivos, rotina, preferências, necessidades
                nutricionais e estilo de vida.
              </p>
              <p>
                Mais do que uma lista de alimentos, você recebe um guia
                prático, flexível e adaptado à sua realidade, para que a
                alimentação se torne uma aliada ao seu bem-estar e aos seus
                resultados.
              </p>
            </div>
            <div className="recebe">
              <h3>O que você recebe</h3>
              <ul>
                {voceRecebe.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="secao suporte">
          <div className="miolo suporte-grade">
            <div>
              <p className="rotulo">Após a consulta</p>
              <h2>
                Seu suporte nutricional <em>sempre com você.</em>
              </h2>
              <p>
                Meu objetivo é que você se sinta seguro(a) e confiante para
                colocar o seu plano em prática. Por isso, além de todos os
                materiais entregues na consulta, você também contará com meu
                suporte para dúvidas.
              </p>
            </div>
            <ul className="confere">
              {suporte.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="secao atendimento" id="atendimento">
          <div className="miolo">
            <h2>
              Onde <em>atendo</em>
            </h2>
            <div className="locais">
              {site.cidades.map((c) => (
                <article key={c}>
                  <p className="rotulo">Presencial</p>
                  <h3>{c}</h3>
                  <p>
                    Atendimento presencial em {c} ({site.uf}). O endereço é
                    enviado na confirmação do horário.
                  </p>
                </article>
              ))}
              <article>
                <p className="rotulo">Online</p>
                <h3>De onde você estiver</h3>
                <p>
                  Consulta por chamada de vídeo, com o mesmo cuidado e os
                  mesmos materiais do atendimento presencial.
                </p>
              </article>
            </div>
          </div>
        </section>

        {espera ? (
          <section className="secao agendar" id="agendar">
            <div className="miolo agendar-grade">
              <div>
                <p className="rotulo">Em breve</p>
                <h2>
                  Entre na <em>lista de espera</em>
                </h2>
                <p>
                  Os atendimentos começam em breve. Deixe o seu contato na
                  lista de espera e a Jully avisa você assim que a agenda
                  abrir.
                </p>
              </div>
              <div className="formulario espera">
                <p>
                  O cadastro é rápido e não tem compromisso: é só para você
                  ser avisado(a) primeiro.
                </p>
                <a href={espera} className="botao botao-cheio" target="_blank" rel="noopener">
                  Entrar na lista de espera
                </a>
                <p className="aviso">
                  Prefere conversar antes?{" "}
                  <a href={whats} target="_blank" rel="noopener">
                    Chame no {site.whatsappExibicao}
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="secao agendar" id="agendar">
              <div className="miolo agendar-grade">
                <div>
                  <p className="rotulo">Vamos começar?</p>
                  <h2>
                    Peça o seu <em>horário</em>
                  </h2>
                  <p>
                    Diga como prefere ser atendido(a) e qual dia fica melhor. A
                    Jully recebe o pedido no WhatsApp e confirma o horário com
                    você.
                  </p>
                  <p>
                    Prefere conversar antes?{" "}
                    <a href={whats} target="_blank" rel="noopener">
                      Chame no {site.whatsappExibicao}
                    </a>
                    .
                  </p>
                </div>
                <Agendamento />
              </div>
            </section>

            <section className="secao feedback" id="feedback">
              <div className="miolo agendar-grade">
                <div>
                  <p className="rotulo">Para quem já é paciente</p>
                  <h2>
                    Conte como foi a <em>sua experiência</em>
                  </h2>
                  <p>
                    O seu retorno ajuda a Jully a cuidar cada vez melhor de quem
                    chega. Conte como foi o atendimento, o que funcionou e o que
                    pode melhorar.
                  </p>
                  {depoimentos.length > 0 && (
                    <ul className="depoimentos">
                      {depoimentos.map((d) => (
                        <li key={d.nome + d.texto.slice(0, 12)}>
                          <blockquote>{d.texto}</blockquote>
                          <cite>{d.nome}</cite>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Feedback />
              </div>
            </section>
          </>
        )}

        <section className="secao duvidas">
          <div className="miolo duvidas-miolo">
            <h2>
              Dúvidas <em>frequentes</em>
            </h2>
            {duvidas.map((d) => (
              <details key={d.p}>
                <summary>{d.p}</summary>
                <p>{d.r}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="miolo">
          <p className="manuscrito">
            Cuidar da sua alimentação é um investimento duradouro na sua saúde
            e qualidade de vida.
          </p>
          <a href={whats} className="botao botao-claro" target="_blank" rel="noopener">
            <Balao /> Chamar no WhatsApp
          </a>
          <div className="rodape-base">
            <Marca />
            <p>
              {site.slogan}
              <br />
              {cidades} ({site.uf}) e online
              <br />
              WhatsApp {site.whatsappExibicao}
              {site.crn && (
                <>
                  <br />
                  {site.crn}
                </>
              )}
            </p>
            {site.instagram && (
              <p>
                <a
                  href={`https://www.instagram.com/${site.instagram}`}
                  target="_blank"
                  rel="noopener"
                >
                  @{site.instagram}
                </a>
              </p>
            )}
          </div>
        </div>
      </footer>

      <a
        href={whats}
        className="flutuante"
        target="_blank"
        rel="noopener"
        aria-label="Chamar a Jully no WhatsApp"
      >
        <Balao />
      </a>
    </>
  );
}
