import { createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

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
    setLibros(libros.filter(libro => libro.titulo !== libroLeido.titulo));
    setLibrosLeidos([...librosLeidos, libroLeido]);
  }


  const dataContext = {
    libros,
    setLibros,
    librosLeidos,
    setLibrosLeidos,
    setLibro,
    setLibroLeido
  }
  return (
    <AppContext.Provider value={dataContext}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
