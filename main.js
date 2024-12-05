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