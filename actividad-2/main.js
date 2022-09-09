import Pitagoras from "./pitagoras.js"

const mostrar_forma2=()=>{
    const b=document.getElementById("in.b").value
    const c=document.getElementById("in.c").value
  
  
    let pitagoras= new Pitagoras ()
      
    pitagoras.b=b
    pitagoras.c=c
    pitagoras.mostrar_Pitagoras()

    
  }
  
  document.getElementById("enviar").addEventListener("click",mostrar_forma2)