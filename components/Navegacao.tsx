"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

type Item = { id: string; nome: string };

// Menu do site: a navegação da abertura, a barra fixa que aparece depois
// dela e o menu do celular. Os links rolam até a seção sem mudar o endereço.
export default function Navegacao({
  marca,
  itens,
  acao,
}: {
  marca: ReactNode;
  itens: Item[];
  acao: { nome: string; href: string; externo: boolean };
}) {
  const [barra, setBarra] = useState(false);
  const [ativa, setAtiva] = useState("");
  const [aberto, setAberto] = useState(false);
  const painel = useRef<HTMLDivElement>(null);

  // Barra fixa: aparece quando a abertura sai da tela.
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const obs = new IntersectionObserver(([e]) => setBarra(!e.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  // Seção atual: a que ocupa a faixa do meio da tela.
  useEffect(() => {
    const secoes = itens
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) if (e.isIntersecting) setAtiva(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    secoes.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [itens]);

  // Menu do celular: fecha com Esc e devolve o foco ao botão.
  useEffect(() => {
    if (!aberto) return;
    const origem = document.activeElement as HTMLElement | null;
    painel.current?.querySelector("a")?.focus();
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", tecla);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", tecla);
      document.body.style.overflow = "";
      origem?.focus();
    };
  }, [aberto]);

  function irPara(e: MouseEvent<HTMLAnchorElement>, id: string) {
    const alvo = document.getElementById(id);
    if (!alvo) return;
    e.preventDefault();
    setAberto(false);
    const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    alvo.scrollIntoView({ behavior: suave ? "smooth" : "auto" });
    alvo.setAttribute("tabindex", "-1");
    alvo.focus({ preventScroll: true });
  }

  const links = (classe: string, destacar: boolean) => (
    <ul className={classe}>
      {itens.map((i) => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            onClick={(e) => irPara(e, i.id)}
            aria-current={destacar && ativa === i.id ? "true" : undefined}
          >
            {i.nome}
          </a>
        </li>
      ))}
    </ul>
  );

  const botaoMenu = (
    <button
      type="button"
      className="menu-botao"
      aria-expanded={aberto}
      aria-controls="menu-celular"
      onClick={() => setAberto((a) => !a)}
    >
      Menu
    </button>
  );

  return (
    <>
      <nav className="topo miolo" aria-label="Principal">
        <div className="topo-marca">{marca}</div>
        {links("topo-links", false)}
        {botaoMenu}
      </nav>

      <div className={`barra${barra ? " visivel" : ""}`} aria-hidden={!barra} inert={!barra}>
        <div className="miolo barra-miolo">
          <span className="barra-nome">Jully Gonçalves</span>
          <nav aria-label="Seções">{links("barra-links", true)}</nav>
          <a
            href={acao.href}
            className="botao botao-cheio barra-acao"
            {...(acao.externo ? { target: "_blank", rel: "noopener" } : {})}
            onClick={acao.externo ? undefined : (e) => irPara(e, acao.href.slice(1))}
          >
            {acao.nome}
          </a>
          {botaoMenu}
        </div>
      </div>

      <div
        id="menu-celular"
        ref={painel}
        className={`menu-painel${aberto ? " aberto" : ""}`}
        inert={!aberto}
      >
        <button type="button" className="menu-fechar" onClick={() => setAberto(false)}>
          Fechar
        </button>
        {links("menu-links", true)}
        <a
          href={acao.href}
          className="botao botao-claro"
          {...(acao.externo ? { target: "_blank", rel: "noopener" } : {})}
          onClick={acao.externo ? () => setAberto(false) : (e) => irPara(e, acao.href.slice(1))}
        >
          {acao.nome}
        </a>
      </div>
    </>
  );
}
