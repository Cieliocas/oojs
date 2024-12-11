function Comida(tipo, nome, categoria, ingrediente) {
    this.tipo = tipo;
    this.nome = nome;
    this.categoria = categoria;
    this.ingrediente = ingrediente;
}

Comida.prototype.displayInfo = function() {
    console.log(`Tipo: ${this.tipo} Nome: ${this.nome} Categoria: ${this.categoria} Ingrediente: ${this.ingrediente}`);
}

