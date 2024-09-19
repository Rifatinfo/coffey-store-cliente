import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeyCart from './Components/CoffeyCart';
import { useState } from 'react';

function App() {

  const loadedCoffey = useLoaderData();
  const [coffeys, setCoffeys] = useState(loadedCoffey);

  return (
    <>
      <h1>Vite + React</h1>
      {/* Use coffeys.length instead of coffees.length */}
      <p>{coffeys.length}</p>
      <div>
        {
          // Use coffeys.map instead of coffees.map
          coffeys.map(coffey => (
            <CoffeyCart
              key={coffey._id}
              coffey={coffey}
              coffeys={coffeys}
              setCoffeys={setCoffeys}
            />
          ))
        }
      </div>
    </>
  );
}

export default App;
