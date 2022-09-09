import Cliente from "./Cliente.js";


 const mostrar =()=>{
    const nombre = document.getElementById("in.nombre").value;
    const apellido = document.getElementById("in.apellido").value;
    const DNI = document.getElementById("in.dni").value;
   // creamos la instancia de la clase que nos va a permitir tener acceso a los metodos de la clase 
  //let vehiculo= new Vehiculo(kilometraje)
    //ejecute el metodo de la clase 
    //vehiculo.mostrar_kilometraje()
    
    let persona=new Cliente(nombre,apellido,DNI)
    persona.mostrar_datosCliente()
   
    
   
   
}
document.getElementById("enviar").addEventListener("click",mostrar)
