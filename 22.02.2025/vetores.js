let numeros = [1,2,3,4,5];
let nomes = ["Ana","João","Maria"];
let misto = [1,"dois",true,{chave:"valor"}];

console.log(numeros[0]);
console.log(nomes[1]);

for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}

numeros.forEach(function(numero){
    console.log(numero);
});

let dobro = numeros.map(function(numero){
    return numero*2
})
console.log(dobro);

numeros.push(6);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

numeros.unshift(0);
console.log(numeros);

numeros.splice(2,1);
console.log(numeros);

let parte = numeros.slice(1,3);
console.log(parte);

console.log(numeros.indexOf(2));
console.log(numeros.lastIndexOf(2));
console.log(numeros.includes(3));