import React from 'react'
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const Libro = ({libro}) => {

  const { titulo, autor, genero, fecha_publicacion, leido } = libro;
  const fecha = new Date(fecha_publicacion);
  const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
  const leidoTexto = leido ? 'Sí' : 'No';

  const [editando, setEditando] = useState(false);
  const { deleteLibro } = useContext (AppContext);

  const handleDelete = (libro) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar el libro "${libro.titulo}"?`)) {
      deleteLibro(libro.titulo);
    }
  }

  return (
    <div className='libro'>
      <h2>{titulo}</h2>
      <p>Autor: {autor}</p>
      <p>Género: {genero}</p>
      <p>Fecha de publicación: {fechaFormateada}</p>
      <p>Leído: {leidoTexto}</p>
      <button onClick={() => setEditando(!editando)}>
        {editando ? 'Cancelar' : 'Editar'}
      </button>
      <button onClick={() => handleDelete(libro)}>
        Eliminar libro
      </button>
      <hr />

    </div>
  )
}

export default Libro
