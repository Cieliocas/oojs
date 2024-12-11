function Comida(tipo, nome, categoria, ingrediente) {
    this.tipo = tipo;
    this.nome = nome;
    this.categoria = categoria;
    this.ingrediente = ingrediente;
}

Comida.prototype.displayInfo = function() {
    console.log(`Tipo: ${this.tipo} Nome: ${this.nome} Categoria: ${this.categoria} Ingrediente: ${this.ingrediente}`);
}

// Classe Lanche herdando de Comida
function Lanche(nome, ingrediente) {
    Comida.call(this, 'Lanche', nome, 'salgado', ingrediente);
}

Lanche.prototype = Object.create(Comida.prototype);
Lanche.prototype.constructor = Lanche;

Lanche.prototype.displayInfo = function() {
    Comida.prototype.displayInfo.call(this);
};

