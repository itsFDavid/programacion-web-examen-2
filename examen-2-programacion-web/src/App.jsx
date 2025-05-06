// filepath: /Users/david/Desktop/Semestre-6/programacion-web/examen-2/examen-2-programacion-web/src/App.jsx
import './App.css';
import FormularioLibro from './components/FormularioLibro';
import ListLibros from './components/ListLibros';

function App() {
  return (
    <>
      <h1>Examen 2</h1>
      <main className='main'>
        <FormularioLibro />
        <ListLibros />
      </main>
    </>
  );
}

export default App;