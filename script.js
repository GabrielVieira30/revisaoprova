
/*questão 1


let n1 = 0
let n3 = 0
let soma = 0
let n = parseFloat(prompt('quantos números você quer somar?'));

do {
    let n3 = parseFloat(prompt('Digite um número'));
    soma = soma + n3
    console.log(soma + n3)
    n1 = n1 + 1
}
while (n > n1);


*/

/* questão 2
var counter = 10;  
var intervalId = setInterval(function() {  
  console.log(counter);  
  counter--;  
  if (counter === 0) {  
    console.log("Lançamento");  
    clearInterval(intervalId); 
  }  
}, 1000);  

*/
const num = parseFloat(prompt('Qual foi o ganho bruto anual da empresa?'));  
const mes1 = parseFloat(prompt('Digite os gastos do mês 1'));  
const mes2 = parseFloat(prompt('Digite os gastos do mês 2'));  
const mes3 = parseFloat(prompt('Digite os gastos do mês 3'));  
const mes4 = parseFloat(prompt('Digite os gastos do mês 4'));  
const mes5 = parseFloat(prompt('Digite os gastos do mês 5'));  
const mes6 = parseFloat(prompt('Digite os gastos do mês 6'));  
const mes7 = parseFloat(prompt('Digite os gastos do mês 7'));  
const mes8 = parseFloat(prompt('Digite os gastos do mês 8'));  
const mes9 = parseFloat(prompt('Digite os gastos do mês 9'));  
const mes10 = parseFloat(prompt('Digite os gastos do mês 10'));  
const mes11 = parseFloat(prompt('Digite os gastos do mês 11'));  
const mes12 = parseFloat(prompt('Digite os gastos do mês 12'));  

const gastoAnual = (mes1 + mes2 + mes3 + mes4 + mes5 + mes6 + mes7 + mes8 + mes9 + mes10 + mes11 + mes12);  

const lucro = (num - gastoAnual)

if (num < gastoAnual) {  
    console.log('Você perdeu dinheiro');  
} else {  
    console.log('Você ficou no lucro com' + lucro);  
}  




