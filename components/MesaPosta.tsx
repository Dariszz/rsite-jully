import type { ReactNode } from "react";

// Ilustração da mesa vista de cima. Cada item entra na ordem em que
// uma mesa é posta: guardanapo, prato, talheres, salada, legumes,
// arroz, feijão, frango e o suco. A animação é só CSS (globals.css).

function sorteio(semente: number) {
  let s = semente;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const n = (v: number) => Math.round(v * 10) / 10;

function Posto({
  x = 0,
  y = 0,
  r = 0,
  s = 1,
  d,
  modo = "pousa",
  children,
}: {
  x?: number;
  y?: number;
  r?: number;
  s?: number;
  d: number;
  modo?: "pousa" | "desliza" | "enche";
  children: ReactNode;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <g className={modo} style={{ animationDelay: `${d}s` }}>
        {children}
      </g>
    </g>
  );
}

const FOLHA = "M0,-70 C38,-42 38,38 0,70 C-38,38 -38,-42 0,-70 Z";

const folhas = [
  { x: -128, y: -92, r: -28, s: 1.05, cor: "#5E7A45" },
  { x: -66, y: -138, r: 24, s: 0.95, cor: "#7F9A5C" },
  { x: -158, y: -8, r: -72, s: 1, cor: "#6C8A4E" },
  { x: -92, y: 36, r: 42, s: 1.1, cor: "#88A465" },
  { x: -142, y: 88, r: -18, s: 0.95, cor: "#5E7A45" },
  { x: -66, y: 128, r: 74, s: 1, cor: "#7F9A5C" },
  { x: -42, y: -48, r: 104, s: 0.9, cor: "#6C8A4E" },
];

const tomates = [
  { x: -112, y: -44 },
  { x: -58, y: 66 },
  { x: -150, y: 46 },
];

const pepinos = [
  { x: -62, y: -104 },
  { x: -112, y: 124 },
  { x: -28, y: 10 },
];

const cenouras = [
  { x: -96, y: -128 },
  { x: -168, y: -52 },
  { x: -100, y: 6 },
  { x: -34, y: 96 },
  { x: -72, y: 168 },
];

function graosDeArroz() {
  const rnd = sorteio(7);
  const graos = [];
  while (graos.length < 90) {
    const a = rnd() * Math.PI * 2;
    const raio = Math.sqrt(rnd());
    graos.push({
      x: n(98 + Math.cos(a) * raio * 70),
      y: n(-108 + Math.sin(a) * raio * 62),
      r: n(rnd() * 180),
    });
  }
  return graos;
}

function graosDeFeijao() {
  const rnd = sorteio(21);
  const graos = [];
  while (graos.length < 22) {
    const a = rnd() * Math.PI * 2;
    const raio = Math.sqrt(rnd());
    graos.push({
      x: n(146 + Math.cos(a) * raio * 40),
      y: n(18 + Math.sin(a) * raio * 34),
      r: n(rnd() * 180),
    });
  }
  return graos;
}

export default function MesaPosta() {
  return (
    <svg viewBox="0 0 1000 1000" role="img" aria-label="Mesa posta com um prato equilibrado: salada, legumes, arroz, feijão, frango grelhado e um copo de suco natural">
      <defs>
        <filter id="sombra" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="sombra-leve" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <radialGradient id="louca" cx="42%" cy="38%" r="70%">
          <stop offset="0" stopColor="#FCFAF5" />
          <stop offset="1" stopColor="#EFE9DC" />
        </radialGradient>
        <radialGradient id="suco" cx="40%" cy="36%" r="70%">
          <stop offset="0" stopColor="#F3B54E" />
          <stop offset="1" stopColor="#DE8F2B" />
        </radialGradient>
        <linearGradient id="metal" x1="0" x2="1">
          <stop offset="0" stopColor="#A38855" />
          <stop offset="0.5" stopColor="#D2BC8C" />
          <stop offset="1" stopColor="#A38855" />
        </linearGradient>
      </defs>

      {/* Guardanapo */}
      <Posto x={150} y={500} r={-3} d={0.1}>
        <rect x="-70" y="-215" width="140" height="430" rx="6" fill="#1E2618" opacity="0.3" filter="url(#sombra-leve)" transform="translate(6 10)" />
        <rect x="-70" y="-215" width="140" height="430" rx="6" fill="#E5DCCB" />
        <rect x="-58" y="-203" width="116" height="406" rx="3" fill="none" stroke="#CFC3AC" strokeWidth="1.5" />
      </Posto>

      {/* Prato */}
      <Posto x={500} y={500} d={0.25}>
        <circle r="304" cx="10" cy="18" fill="#161C11" opacity="0.5" filter="url(#sombra)" />
        <circle r="300" fill="url(#louca)" />
        <circle r="291" fill="none" stroke="#B49A68" strokeWidth="2.5" />
        <circle r="218" fill="#F4EFE4" stroke="#E2D9C6" strokeWidth="2" />
      </Posto>

      {/* Talheres */}
      <Posto x={150} y={500} d={0.6} modo="desliza">
        <g fill="url(#metal)">
          <rect x="-23" y="-220" width="8" height="106" rx="4" />
          <rect x="-10.4" y="-220" width="8" height="106" rx="4" />
          <rect x="2.4" y="-220" width="8" height="106" rx="4" />
          <rect x="15" y="-220" width="8" height="106" rx="4" />
          <path d="M-23,-126 L23,-126 C23,-86 8,-72 6,-50 L-6,-50 C-8,-72 -23,-86 -23,-126 Z" />
          <path d="M-6,-52 L6,-52 L11,204 C11,222 -11,222 -11,204 Z" />
        </g>
      </Posto>
      <Posto x={868} y={566} d={0.7} modo="desliza">
        <g fill="url(#metal)">
          <path d="M-5,-220 C19,-198 21,-80 14,-30 L-8,-30 L-8,-214 Z" />
          <path d="M-9,-28 L13,-28 L12,204 C12,222 -10,222 -10,204 Z" />
        </g>
      </Posto>

      {/* Comida: coordenadas relativas ao centro do prato */}
      <g transform="translate(500 500)">
        {/* Verduras */}
        {folhas.map((f, i) => (
          <Posto key={`f${i}`} x={f.x} y={f.y} r={f.r} s={f.s} d={0.95 + i * 0.07}>
            <path d={FOLHA} fill={f.cor} />
            <path d="M0,-62 L0,62" stroke="#C9DBA9" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M0,-30 L16,-44 M0,-4 L20,-20 M0,22 L16,8 M0,-30 L-16,-44 M0,-4 L-20,-20 M0,22 L-16,8" stroke="#C9DBA9" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" fill="none" />
          </Posto>
        ))}

        {/* Legumes */}
        {pepinos.map((p, i) => (
          <Posto key={`p${i}`} x={p.x} y={p.y} d={1.45 + i * 0.06}>
            <circle r="29" fill="#5F8046" />
            <circle r="25" fill="#DCE8BF" />
            <circle r="12" fill="#C8DAA4" />
            <g fill="#F4F7E6">
              <ellipse cx="0" cy="-7" rx="2" ry="4" />
              <ellipse cx="6.5" cy="3.5" rx="2" ry="4" transform="rotate(120 6.5 3.5)" />
              <ellipse cx="-6.5" cy="3.5" rx="2" ry="4" transform="rotate(-120 -6.5 3.5)" />
            </g>
          </Posto>
        ))}
        {tomates.map((t, i) => (
          <Posto key={`t${i}`} x={t.x} y={t.y} r={i * 50} d={1.6 + i * 0.06}>
            <circle r="27" fill="#B9452F" />
            <circle r="22" fill="#D4634A" />
            <path d="M0,-17 L0,17 M-15,-8 L15,8 M-15,8 L15,-8" stroke="#E79A84" strokeWidth="3" strokeLinecap="round" />
            <g fill="#F1D6A8">
              <ellipse cx="7" cy="-12" rx="2" ry="3.4" />
              <ellipse cx="-7" cy="-12" rx="2" ry="3.4" />
              <ellipse cx="14" cy="0" rx="2" ry="3.4" transform="rotate(90 14 0)" />
              <ellipse cx="-14" cy="0" rx="2" ry="3.4" transform="rotate(90 -14 0)" />
              <ellipse cx="7" cy="12" rx="2" ry="3.4" />
              <ellipse cx="-7" cy="12" rx="2" ry="3.4" />
            </g>
          </Posto>
        ))}
        {cenouras.map((c, i) => (
          <Posto key={`c${i}`} x={c.x} y={c.y} d={1.75 + i * 0.05}>
            <circle r="15" fill="#D97B2E" />
            <circle r="9" fill="none" stroke="#F0A862" strokeWidth="2" />
            <circle r="2.5" fill="#F0A862" />
          </Posto>
        ))}

        {/* Arroz */}
        <Posto d={1.95}>
          <path d="M26,-176 C84,-200 172,-166 184,-104 C192,-62 150,-40 104,-36 C62,-33 28,-48 16,-86 C6,-118 2,-164 26,-176 Z" fill="#EDE2C6" />
          {graosDeArroz().map((g, i) => (
            <ellipse key={i} cx={g.x} cy={g.y} rx="7.5" ry="2.8" transform={`rotate(${g.r} ${g.x} ${g.y})`} fill="#FBF7EA" stroke="#D8CAA4" strokeWidth="0.8" />
          ))}
        </Posto>

        {/* Feijão */}
        <Posto d={2.15}>
          <ellipse cx="146" cy="18" rx="56" ry="48" fill="#3F2318" />
          {graosDeFeijao().map((g, i) => (
            <g key={i} transform={`rotate(${g.r} ${g.x} ${g.y})`}>
              <ellipse cx={g.x} cy={g.y} rx="11" ry="7" fill="#74432C" />
              <ellipse cx={g.x - 2} cy={g.y - 2} rx="5" ry="2" fill="#93604A" opacity="0.8" />
            </g>
          ))}
        </Posto>

        {/* Frango grelhado */}
        {[
          { x: 92, y: 98 },
          { x: 68, y: 134 },
          { x: 44, y: 170 },
        ].map((f, i) => (
          <Posto key={`g${i}`} x={f.x} y={f.y} r={-22} d={2.3 + i * 0.09}>
            <rect x="-62" y="-17" width="124" height="40" rx="19" fill="#3A2416" opacity="0.25" />
            <rect x="-64" y="-21" width="128" height="40" rx="20" fill="#DDB27A" stroke="#C08F55" strokeWidth="1.5" />
            <rect x="-54" y="-17" width="108" height="9" rx="4.5" fill="#EBCB9B" opacity="0.8" />
            <path d="M-40,10 L-24,-12 M-14,10 L2,-12 M12,10 L28,-12 M38,10 L50,-7" stroke="#8A5A2E" strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
          </Posto>
        ))}
        <Posto x={10} y={84} d={2.6}>
          <g fill="#56733D">
            <circle cx="60" cy="20" r="2.6" />
            <circle cx="84" cy="34" r="2.2" />
            <circle cx="40" cy="52" r="2.6" />
            <circle cx="96" cy="2" r="2.2" />
            <circle cx="22" cy="78" r="2.4" />
            <circle cx="70" cy="66" r="2.2" />
          </g>
        </Posto>
      </g>

      {/* Copo de suco */}
      <Posto x={838} y={232} d={2.55}>
        <circle r="82" cx="8" cy="12" fill="#161C11" opacity="0.45" filter="url(#sombra-leve)" />
        <circle r="80" fill="#FFFFFF" opacity="0.16" />
        <circle r="80" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" />
      </Posto>
      <Posto x={838} y={232} d={2.75} modo="enche">
        <circle r="68" fill="url(#suco)" />
        <path d="M-46,-22 A52,52 0 0 1 -8,-50" stroke="#FBDDA0" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.8" />
      </Posto>
      <Posto x={860} y={206} r={35} s={0.42} d={3}>
        <path d={FOLHA} fill="#6C8A4E" />
        <path d="M0,-60 L0,60" stroke="#C9DBA9" strokeWidth="3" strokeLinecap="round" />
      </Posto>
      <Posto x={878} y={232} r={100} s={0.34} d={3.05}>
        <path d={FOLHA} fill="#7F9A5C" />
        <path d="M0,-60 L0,60" stroke="#C9DBA9" strokeWidth="3" strokeLinecap="round" />
      </Posto>

      {/* Raminho da marca */}
      <Posto x={800} y={872} r={-24} d={3.05}>
        <path d="M-120,10 C-60,-14 40,-16 124,6" stroke="#B49A68" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {[-84, -40, 6, 52, 96].map((x, i) => (
          <g key={i} transform={`translate(${x} ${i % 2 ? 10 : -26}) rotate(${i % 2 ? 118 : 62}) scale(0.4)`}>
            <path d={FOLHA} fill="#8D9A82" />
            <path d="M0,-60 L0,60" stroke="#B49A68" strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
      </Posto>
    </svg>
  );
}
