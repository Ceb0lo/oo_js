function Carro(nome, marca, classe, preco) {
    this.nome = nome;
    this.marca = marca;
    this.classe = classe;
    let _preco = preco;

    this.getPreco = function(){
        return _preco;
    }

    this.setPreco = function(valor){
        if(typeof valor === "number"){
            _preco = valor;
        }
    }

    this.desconto = function() {
        const novoPreco = getPreco() * 0.99
        this.setPreco(novoPreco)
    }
}

function SUV(nome, marca) {
    Carro.call(this, nome, marca, "SUV", 180000)
    
    this.desconto = function() {
        const novoPreco = this.getPreco() * 0.95
        this.setPreco(novoPreco)
    }
}

function Sedan(nome, marca) {
    Carro.call(this, nome, marca, "Sedan", 35000)
    
    this.desconto = function() {
        const novoPreco = this.getPreco() * 0.97
        this.setPreco(novoPreco)
    }
}

function Hatch(nome, marca) {
    Carro.call(this, nome, marca, "Hatch", 80000)
    
    this.desconto = function() {
        const novoPreco = this.getPreco() * 0.90
        this.setPreco(novoPreco)
    }
}

const carroJoao = new Hatch("Polo", "Volkswagen", "Hatch", 80000)
const carroGuilherme = new Sedan("Astra", "Chevrolet", "Sedan", 35000)
const carroMaria = new SUV("Bronco", "Ford", "SUV", 180000)

console.log(carroJoao)
carroJoao.desconto();
console.log(carroJoao.getPreco())


