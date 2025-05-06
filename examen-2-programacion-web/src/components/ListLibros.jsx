import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Libro from './Libro';

function ListLibros() {
  const { libros } = useContext(AppContext);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarSoloLeidos, setMostrarSoloLeidos] = useState(false);


  const librosFiltrados = libros
    .filter(libro => (mostrarSoloLeidos ? libro.leido : true))
    .filter(libro =>
      libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
      || libro.autor.toLowerCase().includes(busqueda.toLowerCase())
      || libro.genero.toLowerCase().includes(busqueda.toLowerCase())
    );




  
  // console.log(librosFiltrados);

  return (
    <>
      <h1>Lista de Libros</h1>
      <div className='buscador'>
        <input
          type="text"
          placeholder="Buscar por título, autor, genero..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className='input_busqueda'
        />
        <label htmlFor="soloLeidos" className='label_leidos'>
          {mostrarSoloLeidos ? 'Mostrar todos' : 'Mostrar solo leídos'}
          <input
            type="checkbox" 
            onChange={() => setMostrarSoloLeidos(!mostrarSoloLeidos)}>
          </input>
        </label>
      </div>
      <div className='listLibros'>
        <ul>
          {
            librosFiltrados.length != 0 ? 
            librosFiltrados.map((libro, index) => (
              <Libro libro={libro} key={index} />
            )):
              <p>No hay libros con ese titulo, autor, genero.</p>
          }
        </ul>
      </div>
    </>
  );
}

export default ListLibros;
