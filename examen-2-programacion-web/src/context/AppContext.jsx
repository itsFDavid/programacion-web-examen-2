import { createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  // useLocalStorage('libros', []);
  // useLocalStorage('librosLeidos', []);
  const [libroEditando, setLibroEditando] = useState(null);

  const [libros, setLibros] = useLocalStorage('libros', 
    [
      {
        titulo: 'El principito',
        autor: 'pako',
        genero: 'fantasia',
        fecha_publicacion: '2010-10-01',
        leido: true,
      },
      {
        titulo: 'El hobbit',
        autor: 'pako',
        genero: 'fantasia',
        fecha_publicacion: '2015-05-01',
        leido: true,
      },
      {
        titulo: 'El señor de los anillos',
        autor: 'pako',
        genero: 'fantasia',
        fecha_publicacion: '2016-03-01',
        leido: false,
      },
      {
        titulo: 'El juego de Ender',
        autor: 'pako',
        genero: 'fantasia',
        fecha_publicacion: '2017-01-01',
        leido: false,
      },
    ]
  );
  const [librosLeidos, setLibrosLeidos] = useLocalStorage('librosLeidos', 
    [
      {
        titulo: 'El principito',
        autor: 'pako',
        genero: 'fantasia',
        fecha_publicacion: '2023-10-01',
        leido: true,
      },
      {
        titulo: 'El hobbit',
        autor: 'pako',
        genero: 'fantasia',
        fecha_publicacion: '2023-10-01',
        leido: true,
      },
    ]
  );

  const setLibro = libro => {
    setLibros([...libros, libro]);
  }

  // const setLibroLeido = () => {
  //   const libroLeido = libros.find(libro => libro.titulo === libroLeido.titulo);
  //   if (libroLeido) {
  //     // setLibros(libros.filter(libro => libro.titulo !== libroLeido.titulo));
  //     setLibrosLeidos([...librosLeidos, libroLeido]);
  //   }
  // }

  const setLibroLeido = (libroLeido) => {
    // setLibros(libros.filter(libro => libro.titulo !== libroLeido.titulo));
    setLibrosLeidos([...librosLeidos, libroLeido]);
  }

  const editLibro = (libroEditado) => {
    const { titulo, autor, genero, fecha_publicacion, leido } = libroEditado;
    const libroExistente = libros.find(libro => libro.titulo === titulo);
    if (libroExistente) {
      const librosActualizados = libros.map(libro => {
        if (libro.titulo === titulo) {
          return { ...libro, autor, genero, fecha_publicacion, leido };
        }
        return libro;
      });
      setLibros(librosActualizados);
    } else {
      console.error(`El libro con título "${titulo}" no existe.`);
    }
  }
  const deleteLibro = (titulo) => {
    const librosActualizados = libros.filter(libro => libro.titulo !== titulo);
    setLibros(librosActualizados);
  }


  const dataContext = {
    libros,
    setLibros,
    librosLeidos,
    setLibrosLeidos,
    setLibro,
    setLibroLeido,
    editLibro,
    deleteLibro,
    libroEditando,
    setLibroEditando
  }
  return (
    <AppContext.Provider value={dataContext}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
