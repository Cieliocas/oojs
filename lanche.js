function Comida(tipo, nome, categoria, ingrediente) {
    this.tipo = tipo;
    this.nome = nome;
    this.categoria = categoria;
    this.ingrediente = ingrediente;
}

Comida.prototype.displayInfo = function() {
    console.log(`Tipo: ${this.tipo} | Nome: ${this.nome} | Categoria: ${this.categoria} | Ingrediente: ${this.ingrediente}`);
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

// test lanches
const lanche1 = new Lanche('Croissant', 'Queijo');
const lanche2 = new Lanche('Pastel', 'Carne');

lanche1.displayInfo();
lanche2.displayInfo();


// test bebidas
const bebida1 = new Bebida('Refrigerante', 'CocaCola', 'Lata');
const bebida2 = new Bebida('Suco', 'Laranja', 'Copo');


bebida1.displayInfo();
bebida2.displayInfo();
