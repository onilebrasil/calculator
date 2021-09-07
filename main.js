function insert(num) {
    let numero = document.querySelector("#resultado").innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;  
}

function clean() {
    document.getElementById('resultado').innerHTML = ''
}

function back() {
 let resultado = document.querySelector('#resultado').innerHTML;

 document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    let resultado = document.querySelector('#resultado').innerHTML;   
    
     if(resultado) {
      document.getElementById('resultado').innerHTML = eval(resultado);
     } else {
      document.getElementById('resultado').innerHTML = "Conta incorreta";    
     }
}