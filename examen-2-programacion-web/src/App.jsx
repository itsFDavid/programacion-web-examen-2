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