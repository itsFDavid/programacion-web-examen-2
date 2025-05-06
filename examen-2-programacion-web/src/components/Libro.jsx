import React from 'react'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const Libro = ({libro}) => {

  const { titulo, autor, genero, fecha_publicacion, leido } = libro;
  const fecha = new Date(fecha_publicacion);
  const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
  const leidoTexto = leido ? 'Sí' : 'No';

  const { deleteLibro, setLibroEditando, libroEditando } = useContext (AppContext);
  
  const handleEdit = () => {
    // setLibroEditando(libro);
    if (libroEditando) {
      setLibroEditando(null);
    } else {
      setLibroEditando(libro);
    }
  }

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
      <div className='botones_libro'>
        <button onClick={handleEdit}>
          {libroEditando ? 'Cancelar' : 'Editar libro'}
        </button>
        <button onClick={() => handleDelete(libro)} className='btn_eliminar'>
          Eliminar libro
        </button>
      </div>
      <hr />

    </div>
  )
}

export default Libro
