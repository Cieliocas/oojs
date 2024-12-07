const carroDoJoao = { // Objeto literal
    marca: 'Ford', // atributo
    modelo: 'Fiesta', // atributo
    anoModelo: 2020, // atributo
    anoFabricacao: 2019, // atributo
    acelerar: function() {  // Método
        console.log('Acelerando...');
    }
}

const carroDaMaria = {
    marca: 'Fiat',
    modelo: 'Uno',
    anoModelo: 2019,
    anoFabricacao: 2018,
    acelerar: function() {
        console.log('Acelerando...');
    }
}

// Criação do Construtor
function Carro(marca, modelo, anoModelo, anoFabricacao) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('Acelerando...');
    }

}

const carroDoJoao2 = new Carro('Ford', 'Fiesta', 2020, 2019); // Instância
const carroDaMaria2 = new Carro('Fiat', 'Uno', 2019, 2018);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome  = "cielio"
const idade = 25
const ehMaiorDeIdade = true
const conhecimentos = ['HTML', 'CSS', 'JavaScript']

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(pessoa.nome); // exibe o nome
console.log(pessoa['nome']); // exibe o nome de outra forma

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('nome'); // exibe o nome através de uma função

pessoa.sobrenome = null; //pegadinha kskskks ele tem mas é vazio
pessoa.sobrenome = undefined; //pegadinha kskskks ele tem mas é indefinido


if (pessoa['sobrenome']) { // se for null ou undefined ele não exibe o resultado esperado
    console.log("Existe o atributo sobrenome");
}