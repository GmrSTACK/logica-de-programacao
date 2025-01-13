/*
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/

class startGame{
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }
  atacar(){
    if(this.idade > 12){
      let ref = this.tipo // fica mais economico digitar ref ou inves de this.tipo toda hora
      let ataque = ''

      // testes
      if(ref === "guerreiro"){
        ataque = "esapada"
      } else if(ref === "mago"){
        ataque = "magia "
      } else if(ref === "ninja"){
        ataque = "shuriken"
      } else if(ref === "monge"){
        ataque = "artes marciais"
      } else{
        ataque = null
      }

      // verifica se o personagem é valido
      if(ataque !== null){
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
      } else{
        console.log("Personagem invalido.")
      }
    }
  }
  mudarNome(novoNome){
    this.nome = novoNome
    console.log("Nome atualizado para: " + this.nome)
  }
  mudarTipo(novoTipo){
    this.tipo = novoTipo
    console.log("Tipo atualizado para: " + this.tipo)
  }
  dadosUsuario(){
    console.log("===========================================")
    console.log("          Start game!!!                    ")
    console.log("===========================================")
    console.log("Nome do jogador: " + this.nome)
    console.log("Idade do jogador: " + this.idade)
    console.log("Tipo: " + this.tipo)
  }
}

let call = new startGame("LukeDev", 18, "monge")
call.dadosUsuario()
call.atacar()