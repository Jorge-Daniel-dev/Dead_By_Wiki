/* ===== Reemplaza estos arrays con los datos de tu base de datos (mismos campos que tu objeto "datos") ===== */
const killers = [
  { nombre:"The Trapper", img:"", velocidad:4.6, radio:32, descripcion:"Un asesino metódico que coloca trampas para cazar a sus presas.", poder:"Trampas para osos", imgPoder:"", fecha:"2016-06-14", capitulo:"Dead by Daylight", capituloTexto:"El capítulo original", capImg:"" },
  { nombre:"The Wraith", img:"", velocidad:4.4, radio:32, descripcion:"Se vuelve invisible con su campana para sorprender a los supervivientes.", poder:"Campana Silenciosa", imgPoder:"", fecha:"2016-06-14", capitulo:"Dead by Daylight", capituloTexto:"El capítulo original", capImg:"" },
  { nombre:"The Nurse", img:"", velocidad:4.6, radio:32, descripcion:"Se teletransporta a corta distancia para alcanzar a sus víctimas.", poder:"Parpadeo Espectral", imgPoder:"", fecha:"2016-06-14", capitulo:"Dead by Daylight", capituloTexto:"El capítulo original", capImg:"" },
  { nombre:"The Hillbilly", img:"", velocidad:4.6, radio:32, descripcion:"Arrasa el mapa con su motosierra a toda velocidad.", poder:"Motosierra Pesada", imgPoder:"", fecha:"2016-06-14", capitulo:null, capituloTexto:null, capImg:null }
];
const survivors = [
  { nombre:"Dwight Fairfield", img:"", descripcion:"Líder nato que mantiene al grupo unido bajo presión.", fecha:"2016-06-14", capitulo:"Dead by Daylight", capituloTexto:"Superviviente original", imgCapitulo:"" },
  { nombre:"Meg Thomas", img:"", descripcion:"Atleta veloz, siempre lista para correr.", fecha:"2016-06-14", capitulo:"Dead by Daylight", capituloTexto:"Superviviente original", imgCapitulo:"" },
  { nombre:"Jake Park", img:"", descripcion:"Solitario y sigiloso, experto en esconderse de la Entidad.", fecha:"2016-06-14", capitulo:"Dead by Daylight", capituloTexto:"Superviviente original", imgCapitulo:"" },
  { nombre:"Claudette Morel", img:"", descripcion:"Botánica tranquila que cuida de los demás.", fecha:"2016-06-14", capitulo:null, capituloTexto:null, imgCapitulo:"" }
];
const perks = [
  { nombre:"Adrenalina", descripcion:"Al abrirse las puertas de salida, recuperas toda la salud y corres más rápido.", imagen:"" },
  { nombre:"Sin escape", descripcion:"Ayuda a localizar a los supervivientes cuando te acercas a un generador.", imagen:"" },
  { nombre:"Iron Will", descripcion:"Reduce los gritos de dolor al ser herido, dificultando que te localicen.", imagen:"" },
  { nombre:"Autocuración", descripcion:"Permite curarte a ti mismo sin necesidad de botiquín, aunque más despacio.", imagen:"" }
];

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const year = f => f ? new Date(f).getFullYear() : "";
const card = "reveal group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-2 hover:border-accent2/60 hover:shadow-2xl hover:shadow-accent/25";
const pic = (src, name, cls="aspect-[4/3]") => `
  <div class="relative ${cls} overflow-hidden bg-gradient-to-br from-accent/30 via-surface to-accent2/20">
    ${src ? `<img src="${esc(src)}" alt="${esc(name)}" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-110">`
          : `<div class="flex h-full w-full items-center justify-center font-display text-7xl font-extrabold text-accent2/70 transition duration-500 group-hover:scale-110">${esc(name.charAt(0))}</div>`}
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-transparent"></div>
  </div>`;
const tags = x => `<div class="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-widest">
  ${x.capitulo ? `<span class="rounded-full bg-accent/15 px-2.5 py-1 text-accent2">${esc(x.capitulo)}</span>`:""}
  ${x.fecha ? `<span class="rounded-full border border-line px-2.5 py-1 text-muted">${year(x.fecha)}</span>`:""}</div>`;
const bar = (label, val, pct, unit) => `<div>
  <div class="mb-1 flex justify-between text-[11px] text-muted"><span>${label}</span><b class="text-ink">${esc(val)} ${unit}</b></div>
  <div class="h-1.5 overflow-hidden rounded-full bg-line"><div class="h-full rounded-full bg-gradient-to-r from-accent to-accent2" style="width:${Math.min(100,pct)}%"></div></div></div>`;

document.getElementById("gridKillers").innerHTML = killers.map(k => `
  <article class="${card}">${pic(k.img,k.nombre)}
    <div class="flex flex-1 flex-col gap-3 p-5">
      ${tags(k)}
      <h3 class="font-display text-xl font-extrabold">${esc(k.nombre)}</h3>
      <p class="text-sm leading-relaxed text-muted">${esc(k.descripcion)}</p>
      <div class="space-y-3">${bar("Velocidad",k.velocidad,k.velocidad/5*100,"m/s")}${bar("Radio de terror",k.radio,k.radio/40*100,"m")}</div>
      <div class="mt-auto border-t border-line pt-3 text-sm"><span class="text-[10px] uppercase tracking-widest text-muted">Poder</span><div class="font-semibold text-accent2">${esc(k.poder)}</div></div>
    </div>
  </article>`).join("");

document.getElementById("gridSurvivors").innerHTML = survivors.map(s => `
  <article class="${card}">${pic(s.img,s.nombre)}
    <div class="flex flex-1 flex-col gap-3 p-5">
      ${tags(s)}
      <h3 class="font-display text-xl font-extrabold">${esc(s.nombre)}</h3>
      <p class="text-sm leading-relaxed text-muted">${esc(s.descripcion)}</p>
      ${s.capituloTexto ? `<p class="mt-auto border-t border-line pt-3 text-xs text-muted">${esc(s.capituloTexto)}</p>`:""}
    </div>
  </article>`).join("");

document.getElementById("gridPerks").innerHTML = perks.map(p => `
  <article class="${card} items-center text-center">
    <div class="mt-7 w-32 transition duration-500 group-hover:rotate-6 group-hover:scale-110 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]">${pic(p.imagen,p.nombre,"aspect-square")}</div>
    <div class="flex flex-col gap-2 p-5"><h3 class="font-display text-lg font-extrabold">${esc(p.nombre)}</h3><p class="text-sm leading-relaxed text-muted">${esc(p.descripcion)}</p></div>
  </article>`).join("");

/* contadores del hero */
document.getElementById("cK").textContent = killers.length;
document.getElementById("cS").textContent = survivors.length;
document.getElementById("cP").textContent = perks.length;

/* aparición al hacer scroll */
const io = new IntersectionObserver((es) => es.forEach((e,i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add("show"), (i%4)*90); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
