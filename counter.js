import { participantes } from "./participantes.js";

const $texto = document.querySelector(".numero");
const $nome = document.querySelector(".nome");
document.addEventListener("click",(event)=>{
    let arreglo=[1,4,5,34,23,45,21,33,52,31,9,45,23,16,43,26,28,42,7];
    let index=0;
    if(event.target.matches("#boton_traducir")){
       const intervalo=setInterval(() => {
            $texto.innerHTML=arreglo[index];
            index++;   
            if(index===arreglo.length){
               clearInterval(intervalo);
               //O numero aleatorio e gerado
let numero_rifa=1+Math.round(Math.random()*49);
$texto.innerHTML=numero_rifa;

//Imprimo na tela o numero e o ganhador

    $nome.innerHTML="Parabéns ao comprador do numero: "+numero_rifa;

     }          
   }, 100); 
    }
})
