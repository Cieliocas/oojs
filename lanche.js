
// Classe Comida: Esta é a classe base que contém quatro propriedades: tipo, nome, categoria e ingrediente.
function Comida(tipo, nome, categoria, ingrediente) {
    this.tipo = tipo;
    this.nome = nome;
    this.categoria = categoria;
    this.ingrediente = ingrediente;
}

Comida.prototype.displayInfo = function() { //Método displayInfo: Um método de exibição que imprime as informações do objeto no console.
    console.log(`Tipo: ${this.tipo} | Nome: ${this.nome} | Categoria: ${this.categoria} | Ingrediente: ${this.ingrediente}`);
}
function Lanche(nome, ingrediente) { // Classe Lanche: Herda de Comida usando Comida.call(this, ...) para chamar o construtor da classe Comida.
    Comida.call(this, 'Lanche', nome, 'salgado', ingrediente);
}

Lanche.prototype = Object.create(Comida.prototype);
Lanche.prototype.constructor = Lanche;

Lanche.prototype.displayInfo = function() { // Método displayInfo: Sobrescreve o método displayInfo para garantir que o método do pai (Comida) seja chamado.
    Comida.prototype.displayInfo.call(this);
};
function Bebida(nome, sabor, embalagem) { // Classe Bebida: Similar à classe Lanche, mas usada para bebidas.
    Comida.call(this, 'Bebida', nome, sabor, embalagem);
}

Bebida.prototype = Object.create(Comida.prototype); // Prototype Chain: Bebida.prototype é configurado para herdar de Comida.prototype.
Bebida.prototype.constructor = Bebida;

Bebida.prototype.displayInfo = function() {
    Comida.prototype.displayInfo.call(this);
};

// lanches - instancias
const lanche1 = new Lanche('Croissant', 'Queijo');
const lanche2 = new Lanche('Pastel', 'Carne');

// bebidas - instancias
const bebida1 = new Bebida('Refrigerante', 'CocaCola', 'Lata');
const bebida2 = new Bebida('Suco', 'Laranja', 'Copo');

// test lanches
lanche1.displayInfo();
lanche2.displayInfo();
// test bebidas
bebida1.displayInfo();
bebida2.displayInfo();

// Teste output: Tipo: Lanche | Nome: Croissant | Categoria: salgado | Ingrediente: Queijo