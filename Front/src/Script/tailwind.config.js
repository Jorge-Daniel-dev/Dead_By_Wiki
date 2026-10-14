/* Configuración de Tailwind.
   - En HTML con CDN se asigna a window.tailwind.config
   - En React (Vite/CRA) se exporta como tailwind.config.js */
const config = {theme:{extend:{
  colors:{bg:'rgb(var(--bg) / <alpha-value>)',surface:'rgb(var(--surface) / <alpha-value>)',ink:'rgb(var(--ink) / <alpha-value>)',muted:'rgb(var(--muted) / <alpha-value>)',accent:'rgb(var(--accent) / <alpha-value>)',accent2:'rgb(var(--accent2) / <alpha-value>)',line:'rgb(var(--line) / <alpha-value>)'},
  fontFamily:{display:['Cinzel','Georgia','serif'],sans:['Inter','system-ui','sans-serif']},
  keyframes:{float:{'0%,100%':{transform:'translate(0,0) scale(1)'},'50%':{transform:'translate(30px,-40px) scale(1.15)'}},fadeUp:{from:{opacity:0,transform:'translateY(24px)'},to:{opacity:1,transform:'none'}}},
  animation:{float:'float 14s ease-in-out infinite','float-slow':'float 20s ease-in-out infinite reverse',fadeUp:'fadeUp .9s ease both'}
}}};
config.content = ['./index.html', './script.js', './src/**/*.{js,jsx}'];

if (typeof tailwind !== 'undefined') tailwind.config = config;
if (typeof module !== 'undefined') module.exports = config;
