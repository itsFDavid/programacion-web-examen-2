import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const FormularioLibro = () => {
  const { setLibro } = useContext(AppContext);
  const [nuevoLibro, setNuevoLibro] = useState({
    titulo: '',
    autor: '',
    genero: '',
    fecha_publicacion: '',
    leido: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevoLibro(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLibro(nuevoLibro);
    setNuevoLibro({
      titulo: '',
      autor: '',
      genero: '',
      fecha_publicacion: '',
      leido: false
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form_agregar'>
      <input name="titulo" placeholder="Título" value={nuevoLibro.titulo} onChange={handleChange} required />
      <input name="autor" placeholder="Autor" value={nuevoLibro.autor} onChange={handleChange} required />
      <input name="genero" placeholder="Género" value={nuevoLibro.genero} onChange={handleChange} required />
      <input name="fecha_publicacion" type="date" value={nuevoLibro.fecha_publicacion} onChange={handleChange} required />
      <label>
        Leído:
        <input name="leido" type="checkbox" checked={nuevoLibro.leido} onChange={handleChange} />
      </label>
      <button type="submit">Agregar Libro</button>
    </form>
  );
};

export default FormularioLibro;
