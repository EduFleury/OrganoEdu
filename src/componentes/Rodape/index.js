import './rodape.css'

const Rodape = (props) =>{
    return(
        <footer>
            <div className='rs'>
                <img src="/imagens/fb.png"></img>
                <img src="/imagens/tw.png"></img>
                <img src="/imagens/ig.png"></img>
            </div>

            <div className='logo'>
                <img src="/imagens/logo.png"></img>
            </div>

            <div className='desc'>
                <h3>Desenvolvimento Eduardo & Alura</h3>
            </div>
                
        </footer>
    )
}

export default Rodape