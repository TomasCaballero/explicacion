import './Header.css'

const Header = ({setNumeroPagina}) => {
    // Creo una función para obtener el numero ingresado en el form.
    const obtenerNumeroPagina = (e)=>{
        e.preventDefault();// Prevengo el evento por default del submit (recarga la pagina)
        const numero = e.target.numeroPagina.value; // Obtengo el numero del form (es clave que los input tengan 'name', con el name seleccionas de que input queres la data.)
        setNumeroPagina(numero); // Actualizo el numeroPagina con el ingresado por el usuario
    }
    return (
        <header>
            <h1>Logo</h1>
            
            <form onSubmit={obtenerNumeroPagina}>{/* Le asigno la función al FORM, no al SUBMIT */}
                <input type="number" name="numeroPagina" placeholder='Numero de página'/>
                <input type="submit" value="Buscar" />
            </form>
        </header>
    )
}

export default Header