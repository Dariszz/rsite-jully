"use client";

import { useState, type FormEvent } from "react";
import { linkWhatsApp } from "../lib/site";

export default function Feedback() {
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");
  const [autoriza, setAutoriza] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function enviar(e: FormEvent) {
    e.preventDefault();
    const linhas = [
      "Olá, Jully! Quero deixar meu feedback sobre o atendimento.",
      "",
      `*Nome:* ${nome.trim()}`,
      `*Feedback:* ${texto.trim()}`,
      `*Autorizo publicar no site:* ${autoriza ? "sim" : "não"}`,
    ];
    window.open(linkWhatsApp(linhas.join("\n")), "_blank", "noopener");
    setEnviado(true);
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <div className="campo">
        <label htmlFor="fb-nome">Seu nome</label>
        <input
          id="fb-nome"
          type="text"
          autoComplete="name"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="fb-texto">Como foi a sua experiência?</label>
        <textarea
          id="fb-texto"
          rows={4}
          required
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </div>

      <label className="marcar">
        <input
          type="checkbox"
          checked={autoriza}
          onChange={(e) => setAutoriza(e.target.checked)}
        />
        <span>Autorizo a publicação do meu feedback neste site.</span>
      </label>

      <button type="submit" className="botao botao-cheio">
        Enviar feedback pelo WhatsApp
      </button>

      <p className="aviso" role="status">
        {enviado
          ? "Feedback aberto no WhatsApp. É só enviar a mensagem. Obrigada por compartilhar!"
          : "Seu feedback chega direto para mim. Nada é publicado sem a sua autorização."}
      </p>
    </form>
  );
}
