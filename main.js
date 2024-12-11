// const carroDoJoao = { // Objeto literal
//     marca: 'Ford', // atributo
//     modelo: 'Fiesta', // atributo
//     anoModelo: 2020, // atributo
//     anoFabricacao: 2019, // atributo
//     acelerar: function() {  // Método
//         console.log('Acelerando...');
//     }
// }

// const carroDaMaria = {
//     marca: 'Fiat',
//     modelo: 'Uno',
//     anoModelo: 2019,
//     anoFabricacao: 2018,
//     acelerar: function() {
//         console.log('Acelerando...');
//     }
// }

// // Criação do Construtor
// function Carro(marca, modelo, anoModelo, anoFabricacao) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.anoModelo = anoModelo;
//     this.anoFabricacao = anoFabricacao;
//     this.acelerar = function() {
//         console.log('Acelerando...');
//     }

// }

// const carroDoJoao2 = new Carro('Ford', 'Fiesta', 2020, 2019); // Instância
// const carroDaMaria2 = new Carro('Fiat', 'Uno', 2019, 2018);

// console.log(carroDoJoao2);
// console.log(carroDaMaria2);

// const nome  = "cielio"
// const idade = 25
// const ehMaiorDeIdade = true
// const conhecimentos = ['HTML', 'CSS', 'JavaScript']

// const pessoa = {
//     nome: nome,
//     idade: idade,
//     ehMaiorDeIdade: ehMaiorDeIdade,
//     conhecimentos: conhecimentos
// }


// function exibeAtributo(nomeAtributo) {
//     console.log(pessoa[nomeAtributo]);
// }

// exibeAtributo('nome'); // exibe o nome através de uma função

// // pessoa.sobrenome = null; // pegadinha kskskks ele tem mas é vazio
// // pessoa.sobrenome = undefined; // pegadinha kskskks ele tem mas é indefinido
// pessoa['sobrenome'] = 'Silva'; // adiciona o sobrenome

// Object.freeze(pessoa); // congela o objeto

// pessoa.nome = 'Cielio'; // altera o nome

// if (pessoa['sobrenome']) { // se for null ou undefined ele não exibe o resultado esperado
//     console.log("Existe o atributo sobrenome");
// }

// if ('sobrenome' in pessoa) { // para verificar se o atributo existe
//     console.log("Contém sobrenome");
// }

// console.log(pessoa.nome); // exibe o nome
// console.log(pessoa['nome']); // exibe o nome de outra forma

// console.log(Object.keys(pessoa).length); // exibe a quantidade de atributos
// console.log(Object.values(pessoa)); // exibe os valores


