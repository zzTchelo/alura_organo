import { useState } from 'react';
import './App.css';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formulario/formulario';
import Time from './componentes/time/time';

function App() {
  
  const times = [
    {
      id: 1,
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      id: 2,
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      id: 3,
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      id: 4,
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      id: 5,
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae5f5'
    },
    {
      id: 6,
      nome: 'Mobile',
      corPrimaria: '#feba05',
      corSecundaria: '#fff5d9'
    },
    {
      id: 7,
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const newColaborado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }
  
  return (
    <div className="App">
        <Banner />
        <Formulario onColaboradorCadastrado={colaborador => newColaborado(colaborador)}/>   
        {times.map(time => <Time 
          key={time.id} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
        />)} 
    </div>
  );
}

export default App;
