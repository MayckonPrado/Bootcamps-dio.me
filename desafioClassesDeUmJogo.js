// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para o herói atacar
    atacar() {
        let ataque;
        switch (this.tipo) {
            case "Mago":
                ataque = "magia";
                break;
            case "Guerreiro":
                ataque = "espada";
                break;
            case "Monge":
                ataque = "artes marciais";
                break;
            case "Ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
        }
        console.log(`O ${this.tipo} ${this.nome}, de ${this.idade} anos, atacou usando ${ataque}.`);
    }
}

// Criação de objeto herói
let meuHeroi1 = new Heroi("Gandalf", 1000, "Mago");
let meuHeroi2 = new Heroi("Aragorn", 35, "Guerreiro");
let meuHeroi3 = new Heroi("Bruce Lee", 33, "Monge");
let meuHeroi4 = new Heroi("Naruto", 17, "Ninja");
let meuHeroi5 = new Heroi("Felipão da DIO",28,"Dev");

// Chamada do método atacar para cada objeto herói
meuHeroi1.atacar();
meuHeroi2.atacar();
meuHeroi3.atacar();
meuHeroi4.atacar();
meuHeroi5.atacar();
