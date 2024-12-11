# [PT-BR] Projeto: Orientação a Objetos com JavaScript - Classes de Comidas e Bebidas 🥐🥤

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
```
# [ENG] Project: Object-Oriented Programming with JavaScript - Food and Drink Classes 🥐🥤

This project is a practical implementation of **Object-Oriented Programming (OOP)** concepts using JavaScript. It demonstrates the creation and manipulation of classes and prototypes, showcasing inheritance, polymorphism, and encapsulation in a simple and functional manner.

---

### Project Structure

1. **Class: Comida (Food)**:
   - Base class containing properties:
     - `tipo` (type): General type of the item (e.g., Snack or Drink).
     - `nome` (name): Name of the item.
     - `categoria` (category): Category of the item (e.g., sweet, savory, flavor).
     - `ingrediente` (ingredient): Main ingredient or packaging.
   - Includes the method:
     - `displayInfo()`: Logs all object information to the console.

2. **Class: Lanche (Snack)**:
   - Inherits from `Comida`.
   - Sets `tipo` as "Snack" and `categoria` as "savory".
   - Overrides the `displayInfo()` method to reuse the parent class (`Comida`) method.

3. **Class: Bebida (Drink)**:
   - Inherits from `Comida`.
   - Sets `tipo` as "Drink".
   - Allows customization of `sabor` (flavor) and `embalagem` (packaging).
   - Overrides the `displayInfo()` method to reuse the parent class (`Comida`) method.

---

### Features

- **Instance Creation**:
  - Snacks: `Lanche('Croissant', 'Cheese')` and `Lanche('Pastry', 'Meat')`.
  - Drinks: `Bebida('Soda', 'CocaCola', 'Can')` and `Bebida('Juice', 'Orange', 'Cup')`.

- **Information Display**:
  - All instances can call the `displayInfo()` method to print their properties to the console.

---

### Output Examples

#### Snacks:
```plaintext
Type: Snack | Name: Croissant | Category: savory | Ingredient: Cheese
Type: Snack | Name: Pastry | Category: savory | Ingredient: Meat

