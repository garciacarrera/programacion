export default class Pitagoras{
c=''
b=''

constructor(){

}


mostrar_Pitagoras()
{
    
    const p=Math.pow(this.c,2)
    const pi=Math.pow(this.b,2)
    const pit=Math.sqrt(p+pi)
    
    console.log(pit)
}
}
