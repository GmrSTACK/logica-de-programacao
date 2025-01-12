// nome do personagem
let nome = "Euclides"

// o métódo random torna o programa mais dinamico
// gera um numero entre 0 e 999
let vitorias = Math.floor(Math.random() * 1000)
let derrotas = Math.floor(Math.random() * 1000)

// chamada da função(retorna um array/matriz/lista)
// resultado[0] retorna o saldo obtido por vitorias - derrotas
// resultado[1] retorna a patente/nivel
let resultado = ranking(vitorias, derrotas)

menu()
console.log(`O Herói ${nome} tem de saldo de ${resultado[1]} está no nível de ${resultado[0]}`)

// funcção central
function ranking(vitoria = 0, derrota = 0){
    let calculo = vitoria - derrota
    let saldo

    if(calculo >= 0 && calculo <= 10){
        saldo = "Ferro"
    } else if(calculo >= 11 && calculo <= 20){
        saldo = "Bronze"
    } else if(calculo >= 21 && calculo <= 50){
        saldo = "Prata"
    } else if(calculo >= 51 && calculo <= 80){
        saldo = "Ouro"
    } else if(calculo >= 81 && calculo <= 90){
        saldo = "Diamante"
    } else if(calculo >= 91 && calculo <= 100){
        saldo = "Lendário"
    } else if(calculo >= 101){
        saldo = "Imortal"
    } else if(calculo < 0){
        saldo = "Morto"
    }

    return [saldo, calculo]
}

// menu de informação
function menu(){
    console.log("================================================")
    console.log(`Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal`)
    console.log("================================================")
}