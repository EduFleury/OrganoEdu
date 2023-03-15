import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props)=>{

    const cssFundo = {background: props.corSecundaria}
    const cssBorda = {borderColor: props.corPrimaria}

    return(
       (props.colaboradores.length) > 0 ? <section className='time' style={cssFundo}>
            <h3 style={cssBorda}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Colaborador>)}
            </div>
        </section>
        : ''
    )
}

export default Time