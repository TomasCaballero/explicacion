import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";



function App() {
  // Creo un estado NUMÉRICO para el numero de pagina que lo voy a modificar con el numero ingresado en el form del header.
  const [numeroPagina, setNumeroPagina] = useState(1); // Por defecto es 1 porque es la primer pagina que existe.
  // Creo un estado de ARRAY para obtener el listado de personajes.
  const [listadoPersonajes, setListadoPersonajes] = useState([]);


  // Creo una funcion para obtener el listado de personajes correspondiente a la pagina/page de la URL.
  const obtenerListadoPorNumeroPagina = async() =>{
    // Hago una petición fetch e ingreso el valor del estado numero para traer los personajes de x pagina.
    const peticion =  await fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`);
    const data =  await peticion.json();
    // Creo un array con los resultados obtenidos del fetch.
    const arrayPersonajes = [...data.results]
    // Seteo el estado de listado de personajes con el array anterior.
    setListadoPersonajes(arrayPersonajes);
  }

  // Creo un useEffect para que se ejecute la funcion ni bien se carga el sitio.
  useEffect(()=>{
    obtenerListadoPorNumeroPagina();
  }, [numeroPagina])  // Agrego el numeroPagina en las dependencias del useEffect.
                      // Esto hace que cuando el numeroPagina se modifique se dispare el useEffect ejecutando la funcion con el nuevo numeroPagina.
  return (
    <div className="layout">
      {/* Le envío el setNumeroPagina al header para que el form del header tenga acceso a modificar el estado */}
      <Header setNumeroPagina={setNumeroPagina} numeroPagina={numeroPagina}/>
      {/* Le envío listadoPersonajes y numeroPagina al Main para poder mostrar la info */}
      <Main listadoPersonajes={listadoPersonajes} numeroPagina={numeroPagina}/>
      <Footer/>
    </div>
  );
}

export default App;
