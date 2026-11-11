"use client";

import { useEffect, useState, type FormEvent } from "react";
import { linkWhatsApp, site } from "../lib/site";

const modalidades = [
  ...site.cidades.map((c) => `Presencial em ${c}`),
  "Online",
];

const periodos = ["Manhã", "Tarde", "Noite", "Tanto faz"];

function hoje() {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mes}-${dia}`;
}

function dataPorExtenso(iso: string) {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

export default function Agendamento() {
  const [nome, setNome] = useState("");
  const [modalidade, setModalidade] = useState(modalidades[0]);
  const [data, setData] = useState("");
  const [periodo, setPeriodo] = useState(periodos[0]);
  const [obs, setObs] = useState("");
  const [enviado, setEnviado] = useState(false);

  // Calculado no navegador: a página é gerada uma vez, a data muda todo dia.
  const [minimo, setMinimo] = useState<string | undefined>(undefined);
  useEffect(() => setMinimo(hoje()), []);

  function enviar(e: FormEvent) {
    e.preventDefault();
    const linhas = [
      "Olá, Jully! Gostaria de agendar uma consulta.",
      "",
      `*Nome:* ${nome.trim()}`,
      `*Atendimento:* ${modalidade}`,
      `*Preferência:* ${data ? dataPorExtenso(data) : "qualquer dia"}, ${periodo.toLowerCase()}`,
    ];
    if (obs.trim()) linhas.push(`*Observações:* ${obs.trim()}`);
    window.open(linkWhatsApp(linhas.join("\n")), "_blank", "noopener");
    setEnviado(true);
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <div className="campo">
        <label htmlFor="ag-nome">Seu nome</label>
        <input
          id="ag-nome"
          type="text"
          autoComplete="name"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <fieldset className="campo">
        <legend>Como prefere ser atendido(a)?</legend>
        <div className="opcoes">
          {modalidades.map((m) => (
            <label key={m} className="opcao">
              <input
                type="radio"
                name="modalidade"
                value={m}
                checked={modalidade === m}
                onChange={() => setModalidade(m)}
              />
              <span>{m}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="dupla">
        <div className="campo">
          <label htmlFor="ag-data">Dia de preferência</label>
          <input
            id="ag-data"
            type="date"
            min={minimo}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="ag-periodo">Período</label>
          <select
            id="ag-periodo"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          >
            {periodos.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="campo">
        <label htmlFor="ag-obs">
          Observações <span className="opcional">(opcional)</span>
        </label>
        <textarea
          id="ag-obs"
          rows={3}
          value={obs}
          onChange={(e) => setObs(e.target.value)}
        />
      </div>

      <button type="submit" className="botao botao-cheio">
        Enviar pedido pelo WhatsApp
      </button>

      <p className="aviso" role="status">
        {enviado
          ? "Pedido aberto no WhatsApp. Envie a mensagem e aguarde a Jully confirmar o seu horário."
          : "O pedido abre no seu WhatsApp, já preenchido. O horário só fica reservado depois que a Jully confirmar."}
      </p>
    </form>
  );
}
