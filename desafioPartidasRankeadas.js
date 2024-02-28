// Definição da função para calcular o saldo de partidas ranqueadas e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de partidas ranqueadas
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível do jogador com base no saldo de vitórias
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorno do resultado
    return "O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel;
}

// Chamada da função com os valores de vitórias e derrotas
let resultado = calcularNivel(150, 20);

// Exibindo o resultado
console.log(resultado);
