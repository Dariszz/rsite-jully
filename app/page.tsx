import Image from "next/image";
import Agendamento from "../components/Agendamento";
import Feedback from "../components/Feedback";
import MesaPosta from "../components/MesaPosta";
import { depoimentos, linkWhatsApp, mensagemPadrao, site } from "../lib/site";

const cidades = site.cidades.join(" e ");
const cidadesLista = site.cidades.join(", ");

const etapas = [
  {
    nome: "Anamnese nutricional",
    texto:
      "Conversamos sobre sua rotina, histórico de saúde, alimentação, preferências, dificuldades e objetivos.",
  },
  {
    nome: "Avaliação individual",
    texto:
      "Analiso os dados disponíveis, como peso, altura, exames e composição corporal.",
  },
  {
    nome: "Definição de objetivos",
    texto:
      "Definimos juntos metas realistas para a sua rotina e as suas necessidades.",
  },
  {
    nome: "Estratégia nutricional",
    texto:
      "Monto o seu plano alimentar, com orientações práticas e flexíveis.",
  },
  {
    nome: "Próximos passos",
    texto:
      "Tiro suas dúvidas e combinamos como vai ser o seu acompanhamento.",
  },
];

const duvidas = [
  {
    p: "O atendimento é presencial ou online?",
    r: `Os dois. Atendo presencialmente em ${cidades} (${site.uf}) e online, por chamada de vídeo, de onde você estiver.`,
  },
  site.listaDeEspera
    ? {
        p: "Quando começam os atendimentos?",
        r: "Em breve. Entre na lista de espera e eu aviso você assim que a agenda abrir.",
      }
    : {
        p: "Como faço para agendar?",
        r: "Preencha o pedido de agendamento com o dia e o período que prefere. Ele chega no meu WhatsApp e eu confirmo o horário com você.",
      },
  {
    p: "O que eu recebo depois da consulta?",
    r: "Um plano alimentar individualizado, com quantidades, opções de substituição para cada refeição e orientações práticas para a sua rotina.",
  },
  {
    p: "Posso tirar dúvidas depois da consulta?",
    r: "Sim. Você pode me chamar no WhatsApp para tirar dúvidas, trocar alimentos e adaptar refeições.",
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
            <li><a href="#consulta">Consulta</a></li>
            <li><a href="#atendimento">Onde atendo</a></li>
            <li><a href="#agendar">{espera ? "Lista de espera" : "Agendar"}</a></li>
          </ul>
        </nav>

        <div className="hero-texto miolo" id="inicio">
          <p className="hero-local">
            Nutricionista em {cidadesLista} e online
          </p>
          <h1>
            Mais que alimentação, uma vida com <em>propósito</em>.
          </h1>
          <p className="hero-apoio">
            Acompanhamento nutricional feito a partir da sua rotina, do que
            você gosta de comer e do que você quer mudar.
          </p>
          <div className="hero-acoes">
            {espera ? (
              <a href={espera} className="botao botao-claro" target="_blank" rel="noopener">
                Entrar na lista de espera
              </a>
            ) : (
              <a href="#agendar" className="botao botao-claro">
                Pedir horário
              </a>
            )}
            <a href={whats} className="botao botao-contorno" target="_blank" rel="noopener">
              <Balao /> Conversar no WhatsApp
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
            <div className="sobre-texto">
              <h2>Prazer, sou a Jully.</h2>
              <p>
                Sou nutricionista formada pela Universidade Federal de Juiz de
                Fora (UFJF). Acredito em uma nutrição baseada em ciência, mas
                que faça sentido na vida real.
              </p>
              <p>
                Meu trabalho é ajudar você a ter uma relação mais leve e
                consciente com a comida, respeitando a sua rotina, as suas
                preferências e os seus objetivos.
              </p>
              <p className="assinatura" aria-hidden="true">
                Jully
              </p>
            </div>
          </div>
        </section>

        <section className="secao consulta" id="consulta">
          <div className="miolo">
            <div className="consulta-intro">
              <h2>Como é a consulta</h2>
              <p>
                A primeira consulta é quando eu conheço você. Tudo o que
                conversamos vira um plano pensado para a sua realidade.
              </p>
            </div>
            <ol className="etapas">
              {etapas.map((e, i) => (
                <li key={e.nome}>
                  <span className="etapa-numero" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{e.nome}</h3>
                  <p>{e.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="secao leva">
          <div className="miolo">
            <h2>O que você leva da consulta</h2>
            <div className="leva-grade">
              <div>
                <h3>Um plano alimentar só seu</h3>
                <p>
                  Refeições com quantidades pensadas para você, opções de
                  substituição para cada uma e a organização delas ao longo
                  do dia. Mais do que uma lista de alimentos, é um guia
                  prático e flexível, adaptado à sua realidade.
                </p>
              </div>
              <div>
                <h3>Suporte depois da consulta</h3>
                <p>
                  Surgiu uma dúvida, quer trocar um alimento ou adaptar uma
                  refeição? É só me chamar no WhatsApp. Quero que você se
                  sinta confiante para colocar o plano em prática.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="secao atendimento" id="atendimento">
          <div className="miolo atendimento-grade">
            <h2>Onde eu atendo</h2>
            <ul className="locais">
              {site.cidades.map((c) => (
                <li key={c}>
                  <span className="local-nome">{c}</span>
                  <span className="local-tipo">presencial</span>
                </li>
              ))}
              <li>
                <span className="local-nome">Online</span>
                <span className="local-tipo">de onde você estiver</span>
              </li>
            </ul>
            <p className="atendimento-nota">
              No presencial, o endereço vai junto com a confirmação do
              horário. O online é por chamada de vídeo, com o mesmo cuidado e
              os mesmos materiais.
            </p>
          </div>
        </section>

        {espera ? (
          <section className="secao agendar" id="agendar">
            <div className="miolo espera-miolo">
              <h2>A agenda abre em breve</h2>
              <p>
                Deixe seu contato na lista de espera e eu aviso você assim que
                os atendimentos começarem. O cadastro é rápido e não tem
                compromisso.
              </p>
              <a href={espera} className="botao botao-cheio" target="_blank" rel="noopener">
                Entrar na lista de espera
              </a>
              <p className="aviso">
                Prefere conversar antes?{" "}
                <a href={whats} target="_blank" rel="noopener">
                  Me chame no {site.whatsappExibicao}
                </a>
                .
              </p>
            </div>
          </section>
        ) : (
          <>
            <section className="secao agendar" id="agendar">
              <div className="miolo agendar-grade">
                <div>
                  <h2>Peça seu horário</h2>
                  <p>
                    Escolha como prefere ser atendido e o melhor dia. O pedido
                    chega no meu WhatsApp e eu confirmo o horário com você.
                  </p>
                  <p>
                    Prefere conversar antes?{" "}
                    <a href={whats} target="_blank" rel="noopener">
                      Me chame no {site.whatsappExibicao}
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
                  <h2>Como foi a sua consulta?</h2>
                  <p>
                    Seu retorno me ajuda a cuidar cada vez melhor de quem
                    chega. Conte o que funcionou e o que pode melhorar.
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
            <h2>Dúvidas frequentes</h2>
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
          <p className="rodape-chamada">Ficou com alguma dúvida?</p>
          <a href={whats} className="botao botao-claro" target="_blank" rel="noopener">
            <Balao /> Conversar no WhatsApp
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
        aria-label="Conversar com a Jully no WhatsApp"
      >
        <Balao />
      </a>
    </>
  );
}
