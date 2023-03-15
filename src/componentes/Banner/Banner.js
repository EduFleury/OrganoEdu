import './Banner.css'

function Banner(){
    //JSX é como o react le isso e transforma elementos no dom
    return(
        <header className='banner'>
            <img src="/imagens/banner.png" alt="O banner principal da página principal"></img>
        </header>
    );
}

export default Banner;