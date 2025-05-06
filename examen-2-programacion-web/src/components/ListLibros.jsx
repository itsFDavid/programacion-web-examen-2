import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Libro from './Libro';

function ListLibros() {
  const { libros } = useContext(AppContext);
  const [busqueda, setBusqueda] = useState('');


  const librosFiltrados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <h1>Lista de Libros</h1>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className='listLibros'>
        <ul>
          {librosFiltrados.map((libro, index) => (
            <Libro libro={libro} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListLibros;
