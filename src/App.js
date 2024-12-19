import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState('');
  const [cargo, setCargo] = useState('');
  const [anios, setAnios] = useState(0);

  const add = () => {
    Axios.post('http://localhost:3001/create', {
      nombre: nombre,
      edad: parseInt(edad), // Convertir a número
      pais: pais,
      cargo: cargo,
      anios: parseInt(anios), // Convertir a número
    })
      .then(() => {
        console.log('Empleado registrado');
      })
      .catch((error) => {
        console.error('Error al registrar empleado:', error);
      });
  };

  return (
    <div className="App">
      <div className="datos">
        <label>
          Nombre:
          <input
            onChange={(event) => setNombre(event.target.value)}
            type="text"
          />
        </label>
        <label>
          Edad:
          <input
            onChange={(event) => setEdad(event.target.value)}
            type="number"
          />
        </label>
        <label>
          País:
          <input
            onChange={(event) => setPais(event.target.value)}
            type="text"
          />
        </label>
        <label>
          Cargo:
          <input
            onChange={(event) => setCargo(event.target.value)}
            type="text"
          />
        </label>
        <label>
          Años:
          <input
            onChange={(event) => setAnios(event.target.value)}
            type="number"
          />
        </label>
        <button onClick={add} className="">
          Registrar
        </button>
      </div>
    </div>
  );
}

export default App;
