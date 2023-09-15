import './Main.css'


const Main = ({listadoPersonajes, numeroPagina}) => {
    console.log(listadoPersonajes)
    return (
        <div className="main">
            <div className="titulo">Personajes de la página: {numeroPagina}</div>
            <div className="cardsContainer">
                {
                    listadoPersonajes.map((personaje)=>{
                        return(
                            <div key={personaje.id} className='card'>
                                <img src={personaje.image} alt="" />
                                <h4>{personaje.name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main