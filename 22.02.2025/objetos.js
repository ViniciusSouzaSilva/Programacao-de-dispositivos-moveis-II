let usuario1 = {}
console.log(usuario1);
console.log(typeof usuario1);

let usuario2 = {
    nome:"João",
    Sobrenome:"da Silva",
    idade: 18,
    email:"joao@email.com"
}

console.log(usuario2.nome+" "+usuario2.Sobrenome);
console.log(usuario2.idade);
console.log(usuario2.email)

let usuario3 = {
    nome:"Maria",
    Sobrenome:"da Silva",
    idade: 25,
    email:"maria@email.com"
}

console.log(usuario3.nome+" "+usuario3.Sobrenome);
usuario3.idade = 30;
console.log(usuario3.idade);