function Comida(tipo, nome, categoria, ingrediente) {
    this.tipo = tipo;
    this.nome = nome;
    this.categoria = categoria;
    this.ingrediente = ingrediente;
}

Comida.prototype.displayInfo = function() {
    console.log(`Tipo: ${this.tipo} | Nome: ${this.nome} Categoria: ${this.categoria} Ingrediente: ${this.ingrediente}`);
}
function Lanche(nome, ingrediente) {
    Comida.call(this, 'Lanche', nome, 'salgado', ingrediente);
}

Lanche.prototype = Object.create(Comida.prototype);
Lanche.prototype.constructor = Lanche;

Lanche.prototype.displayInfo = function() {
    Comida.prototype.displayInfo.call(this);
};
function Bebida(nome, sabor, embalagem) {
    Comida.call(this, 'Bebida', nome, sabor, embalagem);
}

Bebida.prototype = Object.create(Comida.prototype);
Bebida.prototype.constructor = Bebida;

Bebida.prototype.displayInfo = function() {
    Comida.prototype.displayInfo.call(this);
};

