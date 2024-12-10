function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz: Oi!');
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    // getters e setters
    this.getSalario = function() {
        return `O salário de ${this.nome} é R$ ${_salario}`;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }  
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;

        console.log(novoSalario);
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.nome + ' é ' + this.cargo);
    }

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario('Maria', 'Dev Front-end', 5000);
const funcionario2 = new Funcionario('João', 'Dev Back-end', 6000);

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());