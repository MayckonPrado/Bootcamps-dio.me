// Definindo o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = prompt("Héroi qual o seu nome:");
let experienciaHeroi = prompt("Agora me diga qual seu nível de experiência (de 0 a 9999):");

// Utilizando uma estrutura de decisão para determinar o nível do herói com base na experiência (XP)
let nivel;

if (experienciaHeroi < 1000) {
    nivel = "Ferro";
} else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
    nivel = "Bronze";
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
    nivel = "Prata";
} else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000) {
    nivel = "Ouro";
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
    nivel = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
    nivel = "Ascendente";
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibindo a mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel);
