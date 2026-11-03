/** Original, self-contained illustrations. No remote assets are required. */
const ink = '#253b3a';

function Spark({ x, y, color = '#e4eeae', scale = 1 }: { x: number; y: number; color?: string; scale?: number }) {
  return <path d="M0-11 3-3 11 0 3 3 0 11-3 3-11 0-3-3Z" fill={color} transform={`translate(${x} ${y}) scale(${scale})`} />;
}

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 440 285" fill="none" aria-hidden="true" focusable="false">
      <ellipse cx="246" cy="159" rx="143" ry="116" fill="#dce9ba" />
      <ellipse cx="250" cy="263" rx="151" ry="10" fill="#153e35" fillOpacity=".23" />
      <circle cx="379" cy="63" r="11" fill="#b6d5a7" />
      <circle cx="95" cy="193" r="5" fill="#b6d5a7" />
      <Spark x={110} y={48} scale={.9} />
      <Spark x={400} y={206} scale={.8} />
      <path d="M104 262c2-28-18-35-14-56 19 1 30 16 27 35 1-29 12-45 31-46 1 24-10 43-28 50v17" fill="#9ebc82" />
      <path d="M112 261v-40m6 24 13-22" stroke="#496b53" strokeWidth="2" strokeLinecap="round" />
      <path d="M87 257h54l-7 19H94Z" fill="#e6bb9b" />
      {/* A student leaning into the conversation. */}
      <path d="m150 213-8 49h35l21-57Z" fill={ink} />
      <path d="m171 258 5 14h-40c-4-7 2-10 8-12l9-7Z" fill="#f6f4e8" />
      <path d="m193 211 21 50h27l-8-65Z" fill="#35564a" />
      <path d="m236 256 9 13c1 3-2 5-6 5h-28l-2-12 12-5Z" fill="#f6f4e8" />
      <path d="M148 134c-8 13-15 43-12 64 17 16 45 22 75 12l-8-74c-19-18-40-20-55-2Z" fill="#f0c87c" />
      <path d="m148 142-14 37c-5 13 1 20 13 17l38-13-6-13-29 6 12-26" fill="#f0c87c" />
      <path d="m178 168 26-9 5 8-25 16Z" fill="#b77958" />
      <path d="m201 159 8-7c4-3 8-2 7 1l-4 6 13-2c5 0 4 5 1 6l-17 5Z" fill="#b77958" />
      <path d="m186 132 20 32 23-10 7 13-32 18c-7 4-13-1-17-8l-16-29" fill="#f0c87c" />
      <path d="m227 154 12-10c6-4 11-1 7 4l-4 4 13-3c7-2 10 3 4 6l-22 11Z" fill="#b77958" />
      <path d="m165 123 2-20 22 1-1 25c-5 8-16 7-23-6Z" fill="#b77958" />
      <path d="M155 83c0-18 30-24 41-10 8 10 3 39-9 43-17 2-32-14-32-33Z" fill="#c88c65" />
      <path d="M153 91c-9-16-5-32 8-38 13-7 32-2 40 10 6 9 3 19-2 24l-4-13c-9 4-18 2-26-4l-4 23Z" fill={ink} />
      <ellipse cx="160" cy="93" rx="6" ry="8" fill="#c88c65" />
      <path d="M190 96c-3 4-7 4-10 1" stroke={ink} strokeWidth="2" strokeLinecap="round" />
      <circle cx="189" cy="84" r="1.8" fill={ink} />
      <path d="M153 115c-2 8-5 13-10 17" stroke="#e5b96b" strokeWidth="3" strokeLinecap="round" />
      {/* A second student, sharing an idea. */}
      <path d="M286 209c-12 18-30 32-44 50h29l39-36 20 37h27l-27-57Z" fill="#f3eee0" />
      <path d="m244 255-12 13c-2 3-1 6 4 6h34l3-16Z" fill={ink} />
      <path d="m330 257-3 15h39c3-7-4-11-11-13l-6-6Z" fill={ink} />
      <path d="M288 131c-11 18-22 47-15 75 17 17 40 16 66 3l-3-69c-18-19-34-22-48-9Z" fill="#b5a8d6" />
      <path d="m293 140-23 24-26-11-7 13 32 20c6 4 13 0 18-5l24-26" fill="#b5a8d6" />
      <path d="m246 154-13-11c-4-3-10-3-7 2l7 7-13-3c-6-1-8 4-2 6l19 10Z" fill="#dfac85" />
      <path d="m326 141 18 41c6 13-2 20-15 16l-27-10 5-13 19 5-14-33" fill="#b5a8d6" />
      <path d="m308 175-18-7c-8-3-12 1-6 6l17 13Z" fill="#dfac85" />
      <path d="M284 80c-1-21 24-32 42-19 19 15 12 36 20 50 5 8 4 20-7 25l-53-7c-13-8-7-20-5-29Z" fill={ink} />
      <path d="m300 110-3 21c5 9 16 10 23 2l-2-25Z" fill="#dfac85" />
      <path d="M294 74c10-5 21 1 25 8l7 4c-1 16-9 31-22 29-11-2-19-16-17-30Z" fill="#e9b993" />
      <path d="M289 87c7-2 13-8 16-17l-14-3-6 17Z" fill={ink} />
      <circle cx="296" cy="87" r="1.8" fill={ink} />
      <path d="M294 99c4 4 8 4 11 1" stroke={ink} strokeWidth="2" strokeLinecap="round" />
      <circle cx="322" cy="102" r="3" stroke="#f0d584" strokeWidth="2" />
      {/* Conversational bubbles. */}
      <path d="M46 66c0-11 9-20 20-20h69c11 0 20 9 20 20v17c0 11-9 20-20 20h-10l-10 15-1-15H66c-11 0-20-9-20-20Z" fill="#f6f5e9" />
      <text x="100" y="82" textAnchor="middle" fill={ink} fontSize="21" fontFamily="Arial, sans-serif" fontWeight="700">Hello!</text>
      <path d="M276 22c0-10 8-18 18-18h91c10 0 18 8 18 18v19c0 10-8 18-18 18h-58l-14 14 1-14h-20c-10 0-18-8-18-18Z" fill="#eac5a5" />
      <text x="339" y="39" textAnchor="middle" fill={ink} fontSize="18" fontFamily="Arial, sans-serif" fontWeight="700">Let’s talk.</text>
      <path d="m241 86 9-5m-6 17 12-1m-14 13 9 6" stroke="#5c7b60" strokeWidth="3" strokeLinecap="round" />
      <rect x="253" y="222" width="98" height="7" rx="3.5" fill="#ba8e69" />
      <path d="M262 228v36m78-36v36" stroke="#ba8e69" strokeWidth="5" />
      <path d="m288 221 10-19h27l-7 19Z" fill="#6c8c73" />
    </svg>
  );
}

function MiniPerson({ x, y, shirt = '#6f9279', skin = '#dfac85', flip = false }: { x: number; y: number; shirt?: string; skin?: string; flip?: boolean }) {
  return <g transform={`translate(${x} ${y}) ${flip ? 'scale(-1 1)' : ''}`}>
    <path d="m-19 35-11 42h23l12-30 11 30h23L24 29Z" fill={ink} />
    <path d="M-20-21c-14 12-19 35-14 57 18 10 40 10 61 1L21-20c-11-11-28-11-41-1Z" fill={shirt} />
    <path d="m-7-30-2 12c4 6 12 6 17 1l-2-16Z" fill={skin} />
    <path d="M-17-58c6-12 29-9 33 5 3 12-2 27-12 28-12 2-24-17-21-33Z" fill={skin} />
    <path d="M-19-43c-11-20 2-34 19-31 16 3 21 14 17 25l-6-11c-7 4-14 3-21-1l-3 19Z" fill={ink} />
    <circle cx="8" cy="-48" r="1.3" fill={ink} />
    <path d="m-21-13 5 29 33-9 4 10-40 14c-6 2-10-1-13-7l-9-24" fill={shirt} />
    <path d="m17 7 14-4c4 0 5 3 2 5l-12 9Z" fill={skin} />
  </g>;
}

function Bubble({ x, y, color = '#fffdf4', width = 66 }: { x: number; y: number; color?: string; width?: number }) {
  return <g transform={`translate(${x} ${y})`}>
    <path d={`M0 12Q0 0 12 0h${width - 24}q12 0 12 12v14q0 12-12 12H26L15 48l1-10h-4Q0 38 0 26Z`} fill={color} />
    <circle cx={width / 2 - 13} cy="19" r="3" fill={ink} fillOpacity=".6" />
    <circle cx={width / 2} cy="19" r="3" fill={ink} fillOpacity=".6" />
    <circle cx={width / 2 + 13} cy="19" r="3" fill={ink} fillOpacity=".6" />
  </g>;
}

export function ActivityIllustration({ kind }: { kind: string }) {
  const palettes: Record<string, { bg: string; accent: string }> = {
    campus: { bg: '#e9efdf', accent: '#b8cca6' },
    debate: { bg: '#eee8f6', accent: '#c5b7df' },
    everyday: { bg: '#f8ebe0', accent: '#eac3a5' },
    career: { bg: '#e3edf1', accent: '#b4ced7' },
    travel: { bg: '#f5efd9', accent: '#e2d29c' },
    project: { bg: '#e6eeea', accent: '#b2cbbf' },
  };
  const { bg, accent } = palettes[kind] || palettes.campus;
  return (
    <svg viewBox="0 0 400 170" fill="none" aria-hidden="true" focusable="false">
      <path fill={bg} d="M0 0h400v170H0z" />
      <circle cx="208" cy="90" r="91" fill={accent} fillOpacity=".4" />
      <circle cx="66" cy="37" r="6" fill={accent} />
      <Spark x={339} y={44} color={accent} scale={.8} />
      {kind === 'campus' && <>
        <path d="M112 85h177v71H112Z" fill="#d0dabe" />
        <path d="m101 86 99-47 101 47Z" fill="#789575" />
        <path d="M128 97h18v31h-18Zm32 0h18v31h-18Zm63 0h18v31h-18Zm32 0h18v31h-18Z" fill="#f9f8eb" />
        <path d="M189 109q11-14 22 0v47h-22Z" fill="#6f896d" />
        <circle cx="201" cy="73" r="9" fill="#f9f8eb" />
        <path d="M201 67v7h5" stroke="#789575" strokeWidth="2" strokeLinecap="round" />
        <MiniPerson x={107} y={130} shirt="#e9bd7d" />
        <MiniPerson x={285} y={126} shirt="#9b92bc" flip />
        <Bubble x={53} y={36} width={64} />
        <path d="M80 159h244" stroke="#b4c4a4" strokeWidth="3" strokeLinecap="round" />
      </>}
      {kind === 'debate' && <>
        <MiniPerson x={141} y={118} shirt="#8f9e7c" />
        <MiniPerson x={272} y={118} shirt="#b59ac2" skin="#b97e5b" flip />
        <path d="M119 119h54l-6 51h-41Zm127 0h54l-7 51h-40Z" fill="#f8f5ed" />
        <path d="M115 116h63v7h-63Zm127 0h63v7h-63Z" fill={ink} />
        <path d="M155 114v-15l9-6m108 21V99l-9-6" stroke={ink} strokeWidth="3" strokeLinecap="round" />
        <Bubble x={65} y={26} color="#fffdf4" />
        <Bubble x={263} y={18} color="#ddd0ed" width={76} />
        <path d="m200 59-9 13 12 8-9 14" stroke="#9e8ab8" strokeWidth="3" strokeLinecap="round" />
      </>}
      {kind === 'everyday' && <>
        <path d="M104 141q13-62 46-42l1 71h-56Zm187 0q-13-62-46-42l-1 71h56Z" fill="#d2ad8e" />
        <MiniPerson x={139} y={117} shirt="#83a08a" />
        <MiniPerson x={269} y={117} shirt="#d6a56f" skin="#b97e5b" flip />
        <ellipse cx="203" cy="129" rx="55" ry="9" fill="#fffaf0" />
        <path d="M203 134v36" stroke="#b68f73" strokeWidth="7" />
        <path d="M185 111h15v12q-8 6-15 0Z" fill="#a3b7a1" />
        <path d="M200 113h3q6 6-3 7" stroke="#a3b7a1" strokeWidth="3" />
        <path d="M217 112h14v11q-7 5-14 0Z" fill="#d9b89a" />
        <Bubble x={166} y={17} width={77} />
        <path d="M324 159v-35m0 17q-24-20-16-32 18 5 16 27m0 13q22-23 27-10-4 15-27 16" stroke="#a2b092" strokeWidth="5" strokeLinecap="round" />
      </>}
      {kind === 'career' && <>
        <path d="M102 28h92v88h-92Z" fill="#f8f8ef" />
        <path d="M115 43h44m-44 11h64m-64 11h50" stroke="#b4c8cd" strokeWidth="4" strokeLinecap="round" />
        <circle cx="174" cy="88" r="12" fill="#bdcfbb" />
        <path d="m169 88 4 4 7-8" stroke="#638269" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <MiniPerson x={264} y={113} shirt="#829c91" />
        <path d="M118 123h188v8H118Zm15 8v39m159-39v39" stroke="#b2afa0" strokeWidth="5" />
        <path d="m167 124-9-39h57l10 39Z" fill={ink} />
        <circle cx="190" cy="104" r="4" fill="#b4ced7" />
        <path d="M223 125h20" stroke={ink} strokeWidth="3" strokeLinecap="round" />
        <Bubble x={291} y={32} width={64} />
      </>}
      {kind === 'travel' && <>
        <circle cx="204" cy="86" r="57" fill="#b9cbb2" />
        <ellipse cx="204" cy="86" rx="29" ry="57" stroke="#7c9b81" strokeWidth="2" />
        <ellipse cx="204" cy="86" rx="57" ry="23" stroke="#7c9b81" strokeWidth="2" />
        <path d="M147 86h114M204 29v114" stroke="#7c9b81" strokeWidth="2" />
        <path d="m209 69 40-27 9 4-27 28 20 5-6 6-27-3-20 12-5-6 13-15-13-6 6-5Z" fill="#fffdf4" />
        <path d="M120 101h42q10 0 10 10v40h-62v-40q0-10 10-10Z" fill="#c89f75" />
        <path d="M131 101V88h18v13m-27 13v29m37-29v29" stroke="#977e5c" strokeWidth="3" />
        <circle cx="120" cy="154" r="4" fill={ink} />
        <circle cx="161" cy="154" r="4" fill={ink} />
        <path d="M274 102q-16 0-16 16c0 10 16 27 16 27s16-17 16-27q0-16-16-16Z" fill="#d69c78" />
        <circle cx="274" cy="118" r="5" fill="#fcf7e8" />
        <path d="M102 161h199" stroke="#d8c89d" strokeWidth="3" strokeLinecap="round" />
      </>}
      {kind === 'project' && <>
        <path d="M127 24h148v106H127Z" fill="#fffdf4" />
        <path d="M127 24h148v13H127Z" fill="#8ca99b" />
        <rect x="141" y="50" width="36" height="28" rx="3" fill="#e6c792" transform="rotate(-7 141 50)" />
        <rect x="189" y="47" width="31" height="30" rx="3" fill="#c3b5d6" transform="rotate(5 189 47)" />
        <rect x="228" y="54" width="31" height="29" rx="3" fill="#b2cbbf" transform="rotate(-5 228 54)" />
        <path d="m151 91 15 10 31-12 25 14 25-6" stroke="#839e8c" strokeWidth="3" strokeLinecap="round" />
        <MiniPerson x={105} y={129} shirt="#b29ac5" />
        <MiniPerson x={292} y={129} shirt="#d4ac79" skin="#b97e5b" flip />
        <path d="M124 145h151v9H124Z" fill="#ad9c86" />
        <path d="m174 144-7-27h43l7 27Z" fill={ink} />
        <circle cx="191" cy="132" r="3" fill="#b2cbbf" />
        <Bubble x={295} y={28} width={60} />
      </>}
    </svg>
  );
}
