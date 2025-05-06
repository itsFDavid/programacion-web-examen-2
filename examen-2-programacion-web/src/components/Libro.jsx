import React from 'react'

const Libro = ({libro}) => {
  console.log(libro);
  const { titulo, autor, genero, fecha_publicacion, leido } = libro;
  const fecha = new Date(fecha_publicacion);
  const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
  const leidoTexto = leido ? 'Sí' : 'No';
  return (
    <div className='libro'>
      <h2>{titulo}</h2>
      <p>Autor: {autor}</p>
      <p>Género: {genero}</p>
      <p>Fecha de publicación: {fechaFormateada}</p>
      <p>Leído: {leidoTexto}</p>
      <hr />
    </div>
  )
}

export default Libro
