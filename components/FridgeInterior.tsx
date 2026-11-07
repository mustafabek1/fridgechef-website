/** Original drawing of a lit fridge interior. viewBox coordinates match HERO_ITEMS. */

export type HeroItem =
  | 'yogurt' | 'eggs' | 'mince' | 'cheese' | 'tomatoes'
  | 'peppers' | 'garlic' | 'lemon' | 'spinach' | 'carrot';

export const VIEW_W = 520;
export const VIEW_H = 760;

/** Detection box of each item, in viewBox units. */
export const HERO_ITEMS: Record<HeroItem, { x: number; y: number; w: number; h: number }> = {
  yogurt: { x: 50, y: 118, w: 116, h: 118 },
  eggs: { x: 186, y: 150, w: 166, h: 86 },
  mince: { x: 46, y: 326, w: 164, h: 100 },
  cheese: { x: 226, y: 340, w: 100, h: 86 },
  tomatoes: { x: 340, y: 322, w: 136, h: 104 },
  peppers: { x: 46, y: 500, w: 170, h: 96 },
  garlic: { x: 228, y: 526, w: 72, h: 70 },
  lemon: { x: 312, y: 524, w: 104, h: 72 },
  spinach: { x: 56, y: 618, w: 226, h: 104 },
  carrot: { x: 300, y: 640, w: 172, h: 76 },
};

function Shelf({ y }: { y: number }) {
  return (
    <g>
      <rect x="26" y={y} width="468" height="9" fill="url(#fi-glass)" />
      <rect x="26" y={y} width="468" height="1.6" fill="#fff" opacity=".95" />
      <rect x="26" y={y + 9} width="468" height="24" fill="url(#fi-shelfshade)" />
    </g>
  );
}

function Shadow({ cx, y, rx }: { cx: number; y: number; rx: number }) {
  return <ellipse cx={cx} cy={y} rx={rx} ry="6" fill="#5c4a30" opacity=".28" filter="url(#fi-blur)" />;
}

export default function FridgeInterior({ title }: { title: string }) {
  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-label={title} className="block size-full">
      <defs>
        <linearGradient id="fi-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset=".55" stopColor="#f4ecdc" />
          <stop offset="1" stopColor="#d9ccb4" />
        </linearGradient>
        <linearGradient id="fi-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a8987c" stopOpacity=".55" />
          <stop offset=".09" stopColor="#a8987c" stopOpacity="0" />
          <stop offset=".91" stopColor="#a8987c" stopOpacity="0" />
          <stop offset="1" stopColor="#a8987c" stopOpacity=".55" />
        </linearGradient>
        <linearGradient id="fi-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a342c" />
          <stop offset=".5" stopColor="#26221c" />
          <stop offset="1" stopColor="#35302a" />
        </linearGradient>
        <linearGradient id="fi-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#b9c9c6" />
        </linearGradient>
        <linearGradient id="fi-shelfshade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6a583c" stopOpacity=".24" />
          <stop offset="1" stopColor="#6a583c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fi-tub" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d9d5cb" />
          <stop offset=".35" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c9c4b8" />
        </linearGradient>
        <linearGradient id="fi-band" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d4501f" />
          <stop offset=".4" stopColor="#ff7a45" />
          <stop offset="1" stopColor="#c44a1c" />
        </linearGradient>
        <radialGradient id="fi-egg" cx=".38" cy=".3" r=".8">
          <stop offset="0" stopColor="#fff7ea" />
          <stop offset="1" stopColor="#dcb78e" />
        </radialGradient>
        <linearGradient id="fi-carton" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c6b89f" />
          <stop offset="1" stopColor="#8f806a" />
        </linearGradient>
        <linearGradient id="fi-jar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7d7a2e" />
          <stop offset=".4" stopColor="#b6ae48" />
          <stop offset="1" stopColor="#6d6a27" />
        </linearGradient>
        <radialGradient id="fi-mince" cx=".45" cy=".35" r=".8">
          <stop offset="0" stopColor="#d9695a" />
          <stop offset="1" stopColor="#8e2f28" />
        </radialGradient>
        <radialGradient id="fi-tomato" cx=".35" cy=".3" r=".85">
          <stop offset="0" stopColor="#ff7b5c" />
          <stop offset=".55" stopColor="#d9321f" />
          <stop offset="1" stopColor="#8f1a10" />
        </radialGradient>
        <linearGradient id="fi-pepper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9ad45f" />
          <stop offset="1" stopColor="#3f8a2f" />
        </linearGradient>
        <radialGradient id="fi-lemon" cx=".35" cy=".3" r=".85">
          <stop offset="0" stopColor="#fff08a" />
          <stop offset="1" stopColor="#dca61d" />
        </radialGradient>
        <radialGradient id="fi-leaf" cx=".4" cy=".3" r=".9">
          <stop offset="0" stopColor="#6fbb55" />
          <stop offset="1" stopColor="#1f5e27" />
        </radialGradient>
        <linearGradient id="fi-carrot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffa24d" />
          <stop offset="1" stopColor="#d9630f" />
        </linearGradient>
        <radialGradient id="fi-garlic" cx=".4" cy=".3" r=".85">
          <stop offset="0" stopColor="#fffdf7" />
          <stop offset="1" stopColor="#d6c7ae" />
        </radialGradient>
        <linearGradient id="fi-drawer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".12" />
          <stop offset="1" stopColor="#d7e3df" stopOpacity=".26" />
        </linearGradient>
        <linearGradient id="fi-led" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".95" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id="fi-blur" x="-30%" y="-100%" width="160%" height="300%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Cabinet and interior */}
      <rect width={VIEW_W} height={VIEW_H} rx="22" fill="url(#fi-body)" />
      <rect x="26" y="26" width="468" height="708" rx="10" fill="url(#fi-wall)" />
      <rect x="26" y="26" width="468" height="708" rx="10" fill="url(#fi-side)" />
      <rect x="26" y="26" width="468" height="90" rx="10" fill="url(#fi-led)" />
      <rect x="150" y="34" width="220" height="7" rx="3.5" fill="#fff" />

      {/* Top shelf: yogurt, eggs, pickle jar */}
      <Shadow cx={108} y={232} rx={52} />
      <rect x="62" y="150" width="92" height="82" rx="8" fill="url(#fi-tub)" />
      <rect x="62" y="176" width="92" height="30" fill="url(#fi-band)" />
      <rect x="55" y="136" width="106" height="17" rx="6" fill="#f4f1ea" />
      <rect x="55" y="136" width="106" height="4" rx="2" fill="#fff" />

      <Shadow cx={268} y={232} rx={84} />
      {[208, 240, 272, 304, 332].map((cx) => (
        <ellipse key={cx} cx={cx} cy="186" rx="15" ry="20" fill="url(#fi-egg)" />
      ))}
      <path d="M190 196h156l-8 36H198z" fill="url(#fi-carton)" />
      <path d="M198 200h140" stroke="#786a55" strokeWidth="2" opacity=".6" />

      <Shadow cx={420} y={232} rx={44} />
      <rect x="378" y="124" width="84" height="108" rx="14" fill="url(#fi-jar)" />
      <rect x="386" y="108" width="68" height="20" rx="4" fill="#2f2b26" />
      <rect x="392" y="140" width="11" height="78" rx="5.5" fill="#fff" opacity=".28" />
      <circle cx="430" cy="166" r="15" fill="#65651f" opacity=".6" />
      <circle cx="418" cy="198" r="13" fill="#5a5a1c" opacity=".6" />
      <circle cx="446" cy="200" r="11" fill="#65651f" opacity=".5" />

      <Shelf y={236} />

      {/* Middle shelf: mince, cheese, tomatoes */}
      <Shadow cx={128} y={424} rx={78} />
      <path d="M54 386h148l-10 38H64z" fill="#2a2622" />
      <ellipse cx="128" cy="376" rx="70" ry="32" fill="url(#fi-mince)" />
      {[[92, 368], [116, 358], [146, 364], [168, 378], [104, 386], [134, 388], [156, 354]].map(([cx, cy]) => (
        <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="6.5" fill="#e88a7a" opacity=".55" />
      ))}
      <path d="M54 386c20-44 128-44 148 0" fill="#fff" opacity=".13" />

      <Shadow cx={276} y={424} rx={48} />
      <rect x="234" y="370" width="84" height="54" rx="7" fill="#fbfaf3" />
      <rect x="234" y="370" width="84" height="14" rx="7" fill="#fff" />
      <path d="M240 398c20-6 52 6 72-2" stroke="#d9d6c8" strokeWidth="3" fill="none" />

      <Shadow cx={408} y={424} rx={62} />
      <circle cx="384" cy="388" r="37" fill="url(#fi-tomato)" />
      <circle cx="442" cy="396" r="29" fill="url(#fi-tomato)" />
      <path d="M372 352l12 7 12-7-6 12h-12zM433 366l9 6 9-6-4 10h-10z" fill="#3e7a2c" />

      <Shelf y={426} />

      {/* Lower shelf: peppers, garlic, lemons */}
      <Shadow cx={130} y={594} rx={80} />
      <path d="M58 570c30 18 96 18 142-36 6 10 2 24-8 36-34 34-104 36-134 0z" fill="url(#fi-pepper)" />
      <path d="M66 548c34 12 86 8 128-34 6 10 2 22-6 32-34 30-96 34-122 2z" fill="#58a53f" />
      <path d="M197 532l13-12M192 512l13-11" stroke="#2f6b28" strokeWidth="6" strokeLinecap="round" />

      <Shadow cx={264} y={594} rx={32} />
      <path d="M264 534c-4 14-30 22-30 42 0 16 16 20 30 20s30-4 30-20c0-20-26-28-30-42z" fill="url(#fi-garlic)" />
      <path d="M264 546c-6 16-10 30-6 48M264 546c6 16 10 30 6 48" stroke="#c7b698" strokeWidth="2" fill="none" />

      <Shadow cx={364} y={594} rx={48} />
      <ellipse cx="344" cy="566" rx="28" ry="26" fill="url(#fi-lemon)" />
      <ellipse cx="388" cy="572" rx="24" ry="23" fill="url(#fi-lemon)" />

      <Shelf y={604} />

      {/* Crisper drawer: spinach, carrots */}
      <rect x="34" y="616" width="452" height="112" rx="10" fill="#efe7d6" />
      <ellipse cx="96" cy="684" rx="42" ry="34" fill="url(#fi-leaf)" />
      <ellipse cx="160" cy="664" rx="50" ry="38" fill="url(#fi-leaf)" />
      <ellipse cx="226" cy="682" rx="46" ry="34" fill="url(#fi-leaf)" />
      <path d="M96 684l-20-20M160 664l-18-24M226 682l20-20" stroke="#a6d68a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M306 690c40-14 104-22 146-22-30 22-92 42-146 22z" fill="url(#fi-carrot)" />
      <path d="M306 712c40-12 104-16 150-14-30 20-98 32-150 14z" fill="url(#fi-carrot)" />
      <path d="M452 668l18-14M456 698l18-6" stroke="#4c9a3f" strokeWidth="5" strokeLinecap="round" />
      <rect x="34" y="650" width="452" height="78" rx="8" fill="url(#fi-drawer)" />
      <rect x="34" y="650" width="452" height="2.5" fill="#fff" opacity=".9" />
    </svg>
  );
}

function Bin({ y }: { y: number }) {
  return (
    <g>
      <rect x="44" y={y} width="432" height="66" rx="8" fill="#f7f1e4" fillOpacity=".55" />
      <rect x="44" y={y} width="432" height="66" rx="8" fill="none" stroke="#fffaf0" strokeWidth="3" />
      <rect x="44" y={y} width="432" height="5" rx="2.5" fill="#fff" />
      <rect x="44" y={y + 66} width="432" height="16" fill="#58452c" opacity=".2" />
    </g>
  );
}

/** The inside of the open door: bins of bottles, shaded away from the fridge light. */
export function DoorInterior() {
  return (
    <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="block size-full" aria-hidden="true">
      <defs>
        <linearGradient id="di-panel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a4977f" />
          <stop offset="1" stopColor="#f1e9d9" />
        </linearGradient>
        <linearGradient id="di-milk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#cfc9bb" />
          <stop offset=".4" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c8c2b4" />
        </linearGradient>
        <linearGradient id="di-juice" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c44a1c" />
          <stop offset=".4" stopColor="#ff8f4f" />
          <stop offset="1" stopColor="#b84318" />
        </linearGradient>
        <linearGradient id="di-oil" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a8861f" />
          <stop offset=".4" stopColor="#ecd159" />
          <stop offset="1" stopColor="#957619" />
        </linearGradient>
        <linearGradient id="di-sauce" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6d2317" />
          <stop offset=".4" stopColor="#bb4a30" />
          <stop offset="1" stopColor="#5f1e13" />
        </linearGradient>
        <linearGradient id="di-water" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8fb3b6" stopOpacity=".8" />
          <stop offset=".4" stopColor="#e9f6f6" stopOpacity=".95" />
          <stop offset="1" stopColor="#7fa4a7" stopOpacity=".8" />
        </linearGradient>
        <linearGradient id="di-shade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#120d08" stopOpacity=".62" />
          <stop offset="1" stopColor="#120d08" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width={VIEW_W} height={VIEW_H} fill="#39332b" />
      <rect x="20" y="20" width="480" height="720" rx="14" fill="url(#di-panel)" />

      {/* top bin: ayran and a juice carton */}
      <path d="M110 70h44v34c0 8 16 16 16 30v76h-76v-76c0-14 16-22 16-30z" fill="url(#di-milk)" />
      <rect x="110" y="58" width="44" height="16" rx="3" fill="#ff6b35" />
      <path d="M222 76h82l14 30v104H208V106z" fill="url(#di-juice)" />
      <path d="M222 76h82l-14-16h-54z" fill="#d9632d" />
      <Bin y={186} />

      {/* middle bin: olive oil and sauce */}
      <path d="M152 298h26v44c0 8 18 18 18 34v60h-62v-60c0-16 18-26 18-34z" fill="url(#di-oil)" />
      <rect x="150" y="286" width="30" height="16" rx="3" fill="#2f2b26" />
      <path d="M284 316h34v26c0 8 18 16 18 30v64h-70v-64c0-14 18-22 18-30z" fill="url(#di-sauce)" />
      <rect x="280" y="302" width="42" height="16" rx="3" fill="#f2ecdd" />
      <Bin y={412} />

      {/* bottom bin: water */}
      <path d="M116 520h40v34c0 10 20 20 20 40v70H96v-70c0-20 20-30 20-40z" fill="url(#di-water)" />
      <rect x="114" y="506" width="44" height="16" rx="3" fill="#3f7fb0" />
      <path d="M244 560h28v22c0 8 14 16 14 28v54h-56v-54c0-12 14-20 14-28z" fill="url(#di-milk)" />
      <rect x="242" y="548" width="32" height="14" rx="3" fill="#4c9a3f" />
      <Bin y={640} />

      <rect width={VIEW_W} height={VIEW_H} fill="url(#di-shade)" />
    </svg>
  );
}
