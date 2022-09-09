 async function obtener_usuarios(){
    let  usuarios = await fetch('https://jsonplaceholder.typicode.com/users')

    let usuarios_defenitivos= await usuarios.json()

    let items=[]
    usuarios_defenitivos.forEach(element => {
        let item=`<li class="list-group-item">${element,username}</li>`
        items.push(item)
    });
    document.getElementById("lista-usuarios").innerHTML=items.join("")
}
obtener_usuarios()