let nome = "Gabriel"
let level = 10001
let patentes = [
  ["Ferro", 1000, 0],
  ["Bronze", 1001, 2000],
  ["Prata", 2001, 500],
  ["Ouro", 5001, 7000],
  ["Platina", 7001, 8000],
  ["Ascendente", 8001, 9000],
  ["Imortal", 9001, 10000],
  ["Radiante", 10001, 0]
]

const mensagemA = "Sua patente é: "
const mensagemB = `O Herói de nome ${nome} está no nível de ${level}`

for(let i in patentes){
  valor = patentes[i]
  let minimo = valor[1]
  let maximo = valor[2]

  if(maximo >= 10001){
    console.log(`${mensagemB}`)
    console.log(`${mensagemA} ${valor[0]}`)
  }
  else if(level >= minimo && level <= maximo){
    console.log(mensagemB)
    console.log(mensagemA + `${valor[0]}`)
  }
}