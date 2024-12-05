const carroDoJoao = { // Objeto
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

const carroDoJoao2 = new Carro('Ford', 'Fiesta', 2020, 2019);
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

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof ehMaiorDeIdade); // boolean
console.log(typeof conhecimentos); // object
console.log(typeof pessoa); // object


console.log(carroDaMaria2 instanceof Carro) // true
console.log(conhecimentos instanceof Array)  // true
console.log(conhecimentos instanceof Carro) // false