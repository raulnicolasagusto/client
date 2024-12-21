import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState('');
  const [cargo, setCargo] = useState('');
  const [anios, setAnios] = useState(0);

  const [empleadosList, setEmpleadosList] = useState([]);

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

  const getEmpleados = () => {
    Axios.get('http://localhost:3001/empleados')
      .then((response) => {
        setEmpleadosList(response.data);
        
      })
      .catch((error) => {
        console.error('Error al MOSTRAR empleados:', error);
      });
  };
getEmpleados();

  return (
   <div className="container"> 

    
    <div className="card text-center">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
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
        
      </div>
    </div>
      </div>
      <div className="card-footer text-body-secondary">
      <button onClick={add} className="btn btn-success">
          Registrar
        </button>
            {empleadosList.map((val, key) => {
              return <div>{val.nombre}</div>
            })
           }
      </div>
    </div>

  </div> 
  );
}

export default App;
