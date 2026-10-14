
import React, { useEffect, useState } from 'react';
import Hero from './Img/Hero.jpg'
import { Link } from 'react-router-dom'; // 1. Importas el Link

const Index = () => {
  const [surv, setSurv] = useState([]);
  const [kill, setKill] = useState([]);
  const [perk, setPerk] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/Survivors')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al obtener los supervivientes');
        }

        return res.json();
      })
      .then(datos => setSurv(datos))
      .catch(error => console.error(error));
  }, []);

  useEffect(()=>{
    fetch('http://localhost:8080/Killer')
    .then(respuesta =>{
      if (!respuesta.ok) {
        throw new Error("No hay killers");
      }
      return respuesta.json()
    })
    .then(datos=>setKill(datos))
    .catch(error => console.error(error));
  },[])

  useEffect(()=>{
    fetch('http://localhost:8080/Perks')
    .then(res=>{
      if(!res.ok){
        throw new Error("No hay perks");
      }
      return res.json()
    })
    .then(dat=>setPerk(dat))
    .catch(error=>console.error(error))
  },[])

  return (
    <div>
      <header className="safe-top sticky z-50 border-b border-line/70 bg-surface/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" className="font-display text-lg font-extrabold uppercase tracking-[.18em] sm:text-xl">
            Dead by <span className="text-accent2">Data</span>
          </a>

          <nav className="flex gap-5 text-[11px] font-semibold uppercase tracking-widest text-muted sm:gap-8 sm:text-xs">
            <a href="#supervivientes">Supervivientes</a>
            <a href="#killers">Killers</a>
            <a href="#perks">Perks</a>
          </nav>
        </div>
      </header>

      <main id="inicio">

          <section
            className="relative overflow-hidden border-b border-line/70 bg-cover bg-center"
            style={{ backgroundImage: `url(${Hero})` }}
          >
            {/* Capa oscura para que el texto se lea */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 mx-auto max-w-4xl px-5 py-28 text-center sm:py-36">
              <p className="text-[11px] font-semibold uppercase tracking-[.4em] text-white">
                La base de datos de la Entidad
              </p>

              <h1 className="mt-5 font-display text-6xl font-extrabold text-white sm:text-8xl">
                Dead by <span className="text-accent2">Data</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
                Consulta killers, supervivientes y perks.
                Estadísticas, poderes y capítulos en un solo lugar.
              </p>
            </div>
          </section>


        <section
          id="supervivientes"
          className="border-b border-line/70 bg-surface/40 py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-12">
              <h2 className="font-display text-4xl font-extrabold">
                Supervivientes
              </h2>
              <div className="mt-3 h-1 w-14 rounded bg-gradient-to-r from-accent to-accent2" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {surv.map(superviviente => (
                <article
                  key={superviviente.id}
                  className="overflow-hidden rounded-xl border border-line/70 bg-surface"
                >
                  <img
                    src={superviviente.img}
                    alt={superviviente.nombre}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-bold">
                      {superviviente.nombre}
                    </h3>

                    <p className="mt-3 text-sm text-muted">
                      {superviviente.descripcion}
                    </p>
                  </div>
                </article>
              ))}

              
            </div>

            {surv.length === 0 && (
              <p className="text-muted">
                No hay supervivientes para mostrar.
              </p>
            )}
          </div>
        </section>

        <section id="killers" className="border-b border-line/70 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-4xl font-extrabold">
              Killers
            </h2>
            <div className="mt-3 h-1 w-14 rounded bg-gradient-to-r from-accent to-accent2" />
            {kill.map(m=>(
              <article
                  key={m.id}
                  className="overflow-hidden rounded-xl border border-line/70 bg-surface"
                >
                  <img
                    src={m.img}
                    alt={m.nombre}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-bold">
                      {m.nombre}
                    </h3>

                    <p className="mt-3 text-sm text-muted">
                      {m.descripcion}
                    </p>
                  </div>
                </article>
              ))}
          </div>
          <Link to="/AllKillers">Ver todos los killers</Link>
        </section>

        <section id="perks" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-4xl font-extrabold">
              Perks
            </h2>
            <div className="mt-3 h-1 w-14 rounded bg-gradient-to-r from-accent to-accent2" />
             {perk.map(m=>(
              <article
                  key={m.id}
                  className="overflow-hidden rounded-xl border border-line/70 bg-surface"
                >
                  <img
                    src={m.img}
                    alt={m.nombre}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-bold">
                      {m.nombre}
                    </h3>

                    <p className="mt-3 text-sm text-muted">
                      {m.descripcion}
                    </p>
                  </div>
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
