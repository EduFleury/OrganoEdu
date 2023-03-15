import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome:'Frontend',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome:'Data Sciense',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8ee2'
    },
    {
      nome:'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome:'UX e Designer',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome:'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaborador] = useState([])

  const aoNovoColaborador = (colaborador) =>{
    //console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)}/>
      {times.map(time => <Time key={time.nome} 
                              nome={time.nome} 
                              corPrimaria={time.corPrimaria} 
                              corSecundaria={time.corSecundaria}
                              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}></Time>)}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
