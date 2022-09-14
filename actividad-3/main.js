async function generar_tabla()
{
    let datos_btc=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')  
    let a=await datos_btc.json()
    let filas=[]
    a.forEach(element => {
       let fila=`
         <tr>
                <td>${element.symbol}</td>
                <td>${element.name}</td>
               <td> <img src="${element.image}" alt=""style="width:4rem"> </td>
                <td>${element.current_price}</td>
                <td>${element.total_volume}</td>
        </tr>
       
       
       
       ` 
       filas.push(fila)
    });

    document.getElementById("tabla.btc").innerHTML=filas.join('')

}

generar_tabla()