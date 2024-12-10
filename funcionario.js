function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz: Oi!');
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function() {
        console.log(this.nome + ' é ' + this.cargo);
    }

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario('Maria', 'Dev Front-end', 5000);

funcionario1.dizOi();
funcionario1.dizCargo();
