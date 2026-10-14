import { useState } from 'react';


function CreatePerk() {
  // 1. Creamos un "estado" para cada caja de texto (reemplaza al getElementById)
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  // 2. La función del "Cartero" (reemplaza al addEventListener)
  const guardarPerk = (evento) => {
    evento.preventDefault(); 

    // Armamos el objeto con los datos de los estados
    const perkParaGuardar = { nombre, descripcion, imagen };

    // El fetch es IDENTICO al que usaste en HTML
    fetch('http://localhost:8080/Perks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(perkParaGuardar)
    })
    .then(respuesta => respuesta.json())
    .then(datosGuardados => {
      alert("¡Perk guardada en PostgreSQL con ID: " + datosGuardados.id);
      // Limpiamos las cajas de texto volviendo los estados a vacío
      setNombre('');
      setDescripcion('');
      setImagen('');
    })
    .catch(error => {
      alert("Hubo un error al guardar.");
      console.error(error);
    });
  };

  // 3. Lo que se dibuja en pantalla (El HTML)
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Agregar Perk a PostgreSQL (Desde React)</h2>

      {/* Enlazamos el formulario con nuestra función */}
      <form onSubmit={guardarPerk}>
        
        <label>Nombre de la Perk:</label> <br />
        <input 
          type="text" 
          value={nombre} // Se amarra a la variable
          onChange={(e) => setNombre(e.target.value)} // Se actualiza en cada teclazo
          required 
        />
        <br /><br />

        <label>Descripción:</label> <br />
        <input 
          type="text" 
          value={descripcion} 
          onChange={(e) => setDescripcion(e.target.value)} 
          required 
        />
        <br /><br />

        <label>URL de la imagen:</label> <br />
        <input 
          type="text" 
          value={imagen} 
          onChange={(e) => setImagen(e.target.value)} 
        />
        <br /><br />

        <button type="submit">Enviar al Ente</button>
      </form>

    </div>
  );
}

export default CreatePerk;