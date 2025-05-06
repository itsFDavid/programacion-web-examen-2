import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Libro from './Libro';

function ListLibros() {
  const { libros } = useContext(AppContext);

  return (
    <>
    <h1>Lista de Libros</h1>
    <div className='listLibros'>
      <ul>
        {libros.map((libro, index) => (
          <Libro libro={libro} key={index}/>
        ))}
      </ul>
    </div>
    </>
  );
}

export default ListLibros;