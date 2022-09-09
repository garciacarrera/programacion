export default class Cliente{
    
    constructor(nombre,apellido,DNI)
    {
        this.h=nombre
        this.l=apellido
        this.g=DNI
    }
    mostrar_datosCliente()
    {
        console.log(`los datos de la persona ${this.l} - ${this.g} - ${this.h}`)
    }
  
}




