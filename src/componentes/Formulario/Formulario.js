import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'

const Formulario = (props) =>{

    const [nome, setNome] = useState('') //retorna variavel e um função para modifica ela
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
       props.aoColaboradorCadastrado({nome, cargo, imagem, time}) //nome: nome, cargo: cargo,,,
       setNome('')
       setCargo('')
       setImagem('')
       setTime('')
    }

    return(
        <section className='formulario'>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <form onSubmit={aoSalvar}>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome"> </CampoTexto>
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"> </CampoTexto>
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem"> </CampoTexto>
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} label="Time" itens = {props.times}></ListaSuspensa>
                <Botao>
                    Textando children
                </Botao>
            </form>
        </section>
    )
}
export default Formulario;