class Atletas {
  constructor (nome, idade, peso, altura, notas){
      this.nome = nome
      this.idade = idade
      this.peso = peso
      this.altura = altura
      this.notas = notas
  }

//Os metodos retornam os atriutos dos atletas
  obtemNomeAtleta(){
      return this.nome
  }

  obtemIdadeAtleta(){
      return this.idade
  }

  obtemPesoAtleta(){
      return this.peso
  }

  obtemAlturaAtleta(){
      return this.altura
  }
    
  obtemNotasAtleta(){
      return this.notas
  }

  obtemCategoria(){
      return this.calculaCategoria()
  }

  obtemIMC(){ 
      return this.calculaIMC()
  }

  obtemMediaValida(){
      return this.calculaMediaValida().toFixed(8)
  }

//A condicional determina a categoria do atleta com baase em sua idade
  calculaCategoria(){
      if (this.idade >= 9 && this.idade <= 11){
          return "Infantil"
      }else if(this.idade == 12 || this.idade == 13){
          return "Juvenil"
      }else if(this.idade == 14 || this.idade == 15){
          return "Intermediário"
      }else if(this.idade >=16 && this.idade <= 30){
          return "Adulto"
      }else{
          return "Sem categoria"
      }
  }
//Calcula o IMC
  calculaIMC(){
      return this.peso / (this.altura * this.altura)
  }

  calculaMediaValida(){
//Organiza as notas do menor para o maior
      this.notas.sort(function(a,b){
          return a-b  
      })

//Elimina a maior e a menor nota 
      let notasValidas = this.notas.slice(1,4)

//Reduz o vaalor das 3 notas validas em um único valor e o guarda na variável soma para futuro cálculo de média
      let soma = notasValidas.reduce(function(atual, total){
          return total + atual
      },0)

//Calcula a média das notas dos atletas
      let media = soma/notasValidas.length
      return media
  }
}

//Classe instanciada com dados de um determinado atleta
const atleta = new Atletas(
  "Cesar Abascal", 
  30,
  80,
  1.7,
  [10,9.34,8.42,10,7.88])

//Exibe no console os dados dos atletas
console.log(`Nome: ${atleta.obtemNomeAtleta()}`)
console.log(`Idade: ${atleta.obtemNomeAtleta()}`)
console.log(`Peso: ${atleta.obtemPesoAtleta()}`)
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`)
console.log(`Notas: ${atleta.obtemNotasAtleta()}`)
console.log(`Categoria: ${atleta.obtemCategoria()}`)
console.log(`IMC: ${atleta.obtemIMC()}`)
console.log(`Média Válida: ${atleta.obtemMediaValida()}`)
