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
```

🤓✨

### Módulo 24: Orientação a Objetos com JavaScript 📚

Chegamos ao final do Módulo 24, onde desenvolvi uma base sólida em programação orientada a objetos (POO) utilizando JavaScript. Abaixo está o resumo do que aprendi e pratiquei:

1. Compreendi os conceitos fundamentais da programação orientada a objetos.
2. Identifiquei e expliquei os três pilares da POO: polimorfismo, herança e encapsulamento.
3. Conceituei a ideia de abstração e sua importância na programação.
4. Compreendi a criação de objetos por meio da notação literal.
5. Aprendi a criar objetos por meio de funções construtoras.
6. Pratiquei a criação de objetos com ambas as abordagens.
7. Entendi a verificação de tipos de dados em JavaScript.
8. Aprendi a verificar instâncias de objetos personalizados.
9. Explorei a distinção entre tipos primitivos e instâncias de objetos.
10. Compreendi as técnicas de acesso a atributos em objetos JavaScript.
11. Explorei a mutabilidade de atributos em objetos.
12. Utilizei métodos para acessar e manipular atributos em objetos.
13. Compreendi o conceito de herança na programação orientada a objetos.
14. Pratiquei a criação de classes e subclasses em JavaScript.
15. Entendi a dinâmica de herança de atributos e métodos.
16. Compreendi o conceito de encapsulamento na POO.
17. Aprendi como implementar encapsulamento em JavaScript.
18. Explorei os benefícios do encapsulamento.
19. Compreendi o conceito de polimorfismo na POO.
20. Aprendi como aplicar o polimorfismo em JavaScript.
21. Explorei os benefícios do polimorfismo na organização do código.

---

## Module 24: Object-Oriented Programming with JavaScript 📚

We’ve reached the end of Module 24, where I built a solid foundation in object-oriented programming (OOP) using JavaScript. Below is a summary of what I learned and practiced:

1. I understood the fundamental concepts of object-oriented programming.
2. I identified and explained the three pillars of OOP: polymorphism, inheritance, and encapsulation.
3. I conceptualized the idea of abstraction and its importance in programming.
4. I learned how to create objects using literal notation.
5. I learned how to create objects using constructor functions.
6. I practiced creating objects with both approaches.
7. I understood data type verification in JavaScript.
8. I learned how to verify instances of custom objects.
9. I explored the distinction between primitive types and object instances.
10. I understood techniques for accessing attributes in JavaScript objects.
11. I explored the mutability of attributes in objects.
12. I used methods to access and manipulate object attributes.
13. I understood the concept of inheritance in object-oriented programming.
14. I practiced creating classes and subclasses in JavaScript.
15. I understood the dynamics of inheriting attributes and methods.
16. I understood the concept of encapsulation in OOP.
17. I learned how to implement encapsulation in JavaScript.
18. I explored the benefits of encapsulation.
19. I understood the concept of polymorphism in OOP.
20. I learned how to apply polymorphism in JavaScript.
21. I explored the benefits of polymorphism in code organization.

