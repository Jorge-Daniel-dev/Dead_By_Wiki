
import React, { useState } from 'react';

const CreateSurvivor = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tieneCapitulo, setTieneCapitulo] = useState(false);
  const [img, setImg] = useState('');

  const [capitulo, setCapitulo] = useState('');
  const [capituloTexto, setCaptext] = useState('');
  const [imgCapitulo, setImgcap] = useState('');

  const [fecha, setFecha] = useState('');

const envioDatos =(envento)=>{
    envento.preventDefault();

    const datos = {nombre,descripcion,img,fecha,

    capitulo: tieneCapitulo ? capitulo : null,
    capituloTexto: tieneCapitulo ? capituloTexto : null,
    imgCapitulo: tieneCapitulo ? imgCapitulo : null,
  };

  fetch('http://localhost:8080/Survivors',{
    method:'POST',
    headers:{
        'Content-type': 'application/json'},
    body: JSON.stringify(datos)
  })
  .then(respuesta => respuesta.json())
  .then(datosGuardados =>{
    alert("Envio con exito" + datosGuardados.id);
    setNombre('');
    setDescripcion('');
    setTieneCapitulo(false);
    setImg('');

    setCapitulo('');
    setCaptext('');
    setImgcap('');

    setFecha('');
  })
  .catch(error=>{
    console.error(error);
  });
}

  return (
    <div>
      <form onSubmit={envioDatos}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <input
          type="text"
          placeholder="URL de la imagen"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        <input
          type="date"
          min="2016-06-14"
          max="2027-12-30"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={tieneCapitulo}
            onChange={(e) => setTieneCapitulo(e.target.checked)}
          />
          ¿Tiene capítulo?
        </label>

        {tieneCapitulo && (
          <>
            <input
              type="text"
              placeholder="Nombre del capítulo"
              value={capitulo}
              onChange={(e) => setCapitulo(e.target.value)}
            />

            <textarea
              placeholder="Texto del capítulo"
              value={capituloTexto}
              onChange={(e) => setCaptext(e.target.value)}
            />

            <input
              type="text"
              placeholder="URL de la imagen del capítulo"
              value={imgCapitulo}
              onChange={(e) => setImgcap(e.target.value)}
            />
          </>
        )}

        <button type='submit'></button>
      </form>
    </div>
  );
};

export default CreateSurvivor;

