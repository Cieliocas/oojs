# Projeto: Orientação a Objetos com JavaScript - Classes de Comidas e Bebidas

Este projeto é uma implementação prática dos conceitos de **programação orientada a objetos (POO)** com JavaScript. Ele explora a criação e manipulação de classes e protótipos, implementando herança, polimorfismo e encapsulamento de maneira simples e funcional.

---

## Estrutura do Projeto

1. **Classe Comida**
   - Classe base que contém as propriedades:
     - `tipo`: Define o tipo geral do item (e.g., Lanche ou Bebida).
     - `nome`: Nome do item.
     - `categoria`: Categoria do item (e.g., doce, salgado, sabor).
     - `ingrediente`: Ingrediente principal ou embalagem.
   - Inclui o método:
     - `displayInfo()`: Exibe todas as informações do objeto no console.

2. **Classe Lanche**
   - Herda de `Comida`.
   - Define o `tipo` como "Lanche" e a `categoria` como "salgado".
   - Sobrescreve o método `displayInfo()` para reutilizar o método da classe pai (`Comida`).

3. **Classe Bebida**
   - Herda de `Comida`.
   - Define o `tipo` como "Bebida".
   - Permite a configuração do `sabor` e da `embalagem`.
   - Sobrescreve o método `displayInfo()` para reutilizar o método da classe pai (`Comida`).

---

## Funcionalidades

- **Criação de Instâncias**:
  - Lanches: `Lanche('Croissant', 'Queijo')` e `Lanche('Pastel', 'Carne')`.
  - Bebidas: `Bebida('Refrigerante', 'CocaCola', 'Lata')` e `Bebida('Suco', 'Laranja', 'Copo')`.

- **Exibição de Informações**:
  - Todas as instâncias podem chamar o método `displayInfo()` para imprimir suas propriedades no console.

---

## Exemplos de Saída

### Lanches:
```plaintext
Tipo: Lanche | Nome: Croissant | Categoria: salgado | Ingrediente: Queijo
Tipo: Lanche | Nome: Pastel | Categoria: salgado | Ingrediente: Carne
