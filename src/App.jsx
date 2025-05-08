import './App.scss';

import TheHeader from './components/Header/';
import CalculadoraForm from './components/CalculadoraForm';
import Resultado from './components/Resultado';
import ImcTable from './components/ImcTable';

import { useEffect, useState } from 'react';

function App() {
  
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imc, setImc] = useState(0)

  useEffect(() => {

    console.log(height);
    console.log(weight);

  }, [weight, height])

  return (
    <>
      <TheHeader />
      <CalculadoraForm 
        setHeight={setHeight} 
        height={height} 
        setWeight={setWeight} 
        weight={weight}  
        setImc={setImc}
      />

      {
      height !==0 && weight !==0 ? (
        <Resultado imc={imc}/>
      ) : null
      
      }

      <ImcTable />
    </>
  )
}

export default App
