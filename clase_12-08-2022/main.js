//funcion flecha
import Vehiculo from "./vehiculo.js"

 const mostrar =()=>{
    const kilometraje = document.getElementById("inp-km").value;
   // creamos la instancia de la clase que nos va a permitir tener acceso a los metodos de la clase 
  let vehiculo= new Vehiculo(kilometraje)
    //ejecute el metodo de la clase 
    vehiculo.mostrar_kilometraje()
    
   
   
}
document.getElementById("btn-mostrar").addEventListener("click",mostrar)


const mostrar_forma2=()=>{
  const modelo=document.getElementById("inp-modelo").value


  let vehiculo= new Vehiculo()

    vehiculo.modelo=modelo
    vehiculo.mostrar_modelo()
  
}

document.getElementById("btn_modelo").addEventListener("click",mostrar_forma2)