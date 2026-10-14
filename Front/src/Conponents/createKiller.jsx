import React, { useState } from 'react'; // Faltaba importar useState

const CreateKiller = () => { // <--- Mayúscula inicial
  const [img, setImg] = useState('');
  const [nombre, setNombre] = useState('');
  const [velocidad, setVelocidad] = useState('');
  const [radio, setRadio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imgPoder, setImgPoder] = useState('');
  const [poder, setPoder] = useState('');
  const [fecha, setFecha] = useState('');

  const [tieneCapitulo, setTieneCapitulo] = useState(false);
  const [capituloTexto, setCapituloTexto] = useState('');
  const [capitulo, setCapitulo] = useState('');
  const [capImg, setCapImg] = useState('');

  const enviarDatos = (evento) => {
    evento.preventDefault();

    const datos = {
      img,
      nombre,
      velocidad: Number(velocidad),
      radio: Number(radio),
      descripcion,
      imgPoder,
      poder,
      fecha,
      capituloTexto: tieneCapitulo ? capituloTexto : null,
      capitulo: tieneCapitulo ? capitulo : null,
      capImg: tieneCapitulo ? capImg : null,
    };

    // <--- Ajustado a la ruta de Killers
    fetch('http://localhost:8080/Killer', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
    .then(res => res.json())
    .then(guardarDatos => { // <--- Corregido el .the por .then
      alert("Se guardó el Killer con ID: " + guardarDatos.id);
      setImg('');
      setNombre('');
      setVelocidad('');
      setRadio('');
      setDescripcion('');
      setImgPoder('');
      setPoder('');
      setFecha('');
      setTieneCapitulo(false);
      setCapituloTexto('');
      setCapitulo('');
      setCapImg('');
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div>
      {/* <--- Cambiado action por onSubmit */}
      <form onSubmit={enviarDatos}> 
        <input type="text" placeholder="URL de la imagen" value={img} onChange={(e) => setImg(e.target.value)} />
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="number" placeholder="Velocidad" value={velocidad} onChange={(e) => setVelocidad(e.target.value)} />
        <input type="number" placeholder="Radio" value={radio} onChange={(e) => setRadio(e.target.value)} />
        <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <input type="text" placeholder="URL de la imagen del poder" value={imgPoder} onChange={(e) => setImgPoder(e.target.value)} />
        <textarea placeholder="Poder" value={poder} onChange={(e) => setPoder(e.target.value)} />
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />

        <label>
          <input type="checkbox" checked={tieneCapitulo} onChange={(e) => setTieneCapitulo(e.target.checked)} />
          ¿Tiene capítulo?
        </label>

        {tieneCapitulo && (
          <>
            <input type="text" placeholder="Nombre del capítulo" value={capitulo} onChange={(e) => setCapitulo(e.target.value)} />
            <textarea placeholder="Texto del capítulo" value={capituloTexto} onChange={(e) => setCapituloTexto(e.target.value)} />
            <input type="text" placeholder="URL de la imagen del capítulo" value={capImg} onChange={(e) => setCapImg(e.target.value)} />
          </>
        )}

        {/* <--- Botón liberado, ahora siempre se muestra */}
        <button type='submit'>Guardar Killer</button> 
      </form>
    </div>
  )
}

export default CreateKiller;