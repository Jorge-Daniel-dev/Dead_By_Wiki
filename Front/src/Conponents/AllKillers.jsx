
import { useState, useEffect } from "react";

const AllKillers = () => {
  const [data, setData] = useState([]);
  const [killerSeleccionado, setKillerSeleccionado] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/Killer")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los killers");
        }

        return res.json();
      })
      .then((dat) => setData(dat))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-6">
      {/* GRID DE KILLERS */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((killer) => (
          <article
            key={killer.id ?? killer.nombre}
            onClick={() => setKillerSeleccionado(killer)}
            className="cursor-pointer overflow-hidden rounded-xl border border-line/70 bg-surface transition hover:-translate-y-1 hover:border-red-500"
          >
            <img
              src={killer.img}
              alt={killer.nombre}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">
                {killer.nombre}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm text-muted">
                {killer.descripcion || "Sin descripción disponible."}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-black/5 p-3">
                  <p className="text-xs text-muted">Velocidad</p>
                  <p className="font-semibold">{killer.velocidad}</p>
                </div>

                <div className="rounded-lg bg-black/5 p-3">
                  <p className="text-xs text-muted">Radio de terror</p>
                  <p className="font-semibold">{killer.radio}</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-muted">
                {killer.capitulo || "Sin capítulo"}
              </p>

              <p className="mt-4 text-sm font-semibold text-red-500">
                Ver información completa →
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL CON TODA LA INFORMACIÓN */}
      {killerSeleccionado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setKillerSeleccionado(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="killer-modal-title"
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-surface text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CERRAR */}
            <button
              type="button"
              onClick={() => setKillerSeleccionado(null)}
              aria-label="Cerrar ventana"
              className="absolute right-4 top-4 z-10 rounded-full bg-black/80 px-4 py-2 text-xl text-white hover:bg-red-600"
            >
              ✕
            </button>

            {/* IMAGEN PRINCIPAL */}
            <img
              src={killerSeleccionado.img}
              alt={killerSeleccionado.nombre}
              className="h-64 w-full object-cover sm:h-96"
            />

            <div className="space-y-8 p-6 sm:p-8">
              {/* INFORMACIÓN GENERAL */}
              <header>
                <h2
                  id="killer-modal-title"
                  className="text-3xl font-bold sm:text-4xl"
                >
                  {killerSeleccionado.nombre}
                </h2>

                <p className="mt-2 text-sm text-muted">
                  {killerSeleccionado.capitulo || "Sin capítulo"}
                </p>

                <p className="mt-2 text-sm text-muted">
                  Fecha de lanzamiento:{" "}
                  {killerSeleccionado.fecha || "Desconocida"}
                </p>
              </header>

              {/* DESCRIPCIÓN */}
              <section>
                <h3 className="mb-3 text-xl font-bold">
                  Descripción
                </h3>

                <p className="whitespace-pre-line leading-relaxed text-muted">
                  {killerSeleccionado.descripcion ||
                    "Sin descripción disponible."}
                </p>
              </section>

              {/* ESTADÍSTICAS */}
              <section>
                <h3 className="mb-3 text-xl font-bold">
                  Estadísticas
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-line/70 p-4">
                    <p className="text-sm text-muted">Velocidad</p>
                    <p className="mt-2 text-2xl font-bold">
                      {killerSeleccionado.velocidad}
                    </p>
                  </div>

                  <div className="rounded-xl border border-line/70 p-4">
                    <p className="text-sm text-muted">
                      Radio de terror
                    </p>
                    <p className="mt-2 text-2xl font-bold">
                      {killerSeleccionado.radio}
                    </p>
                  </div>
                </div>
              </section>

              {/* PODER */}
              <section>
                <h3 className="mb-4 text-xl font-bold">
                  Poder del asesino
                </h3>

                {killerSeleccionado.imgPoder && (
                  <img
                    src={killerSeleccionado.imgPoder}
                    alt={`Poder de ${killerSeleccionado.nombre}`}
                    className="mb-4 max-h-80 w-full rounded-xl object-contain"
                  />
                )}

                <p className="whitespace-pre-line leading-relaxed text-muted">
                  {killerSeleccionado.poder ||
                    "Sin información del poder."}
                </p>
              </section>

              {/* CAPÍTULO */}
              <section>
                <h3 className="mb-4 text-xl font-bold">
                  Información del capítulo
                </h3>

                {killerSeleccionado.capImg && (
                  <img
                    src={killerSeleccionado.capImg}
                    alt={killerSeleccionado.capitulo || "Imagen del capítulo"}
                    className="mb-4 max-h-80 w-full rounded-xl object-contain"
                  />
                )}

                <p className="whitespace-pre-line leading-relaxed text-muted">
                  {killerSeleccionado.capituloTexto ||
                    "Sin información del capítulo."}
                </p>
              </section>

              {/* CERRAR AL FINAL */}
              <button
                type="button"
                onClick={() => setKillerSeleccionado(null)}
                className="w-full rounded-lg bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
              >
                Cerrar información
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllKillers;
