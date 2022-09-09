



let datos_personales = {
    nombre: 'pepito',
    apellido: 'rodriquez',
    dni: 2342342424,
    correos:{
        gmai:'lucas@gmial.com',
        uotlook:'pepito@outlook.com',
        yahoo:'pepe@yahoo.com.ar'
    }
}
// forma1
/*
const gmail= datos_personales.correos.gmai
const autlook= datos_personales.correos.uotloo*/
// forma2
const{gmai,yahoo,uotlook}=datos_personales.correos
console.log(`
gmail:${gmai}
yahoo:${yahoo}
uotlook:${uotlook}

`)



  async function cosumir_api(){
    //realiza una una solicitud por defecto http atraves del metodo GET 
    let publicaciones=  await fetch('https://jsonplaceholder.typicode.com/posts')


    let publicacions_definitivas= await publicaciones.json()
    publicacions_definitivas.forEach(element => {


        console.log(element.title)
    
    });
}     
cosumir_api()