import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {

    // let valor ='Eduardo Pina'

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;