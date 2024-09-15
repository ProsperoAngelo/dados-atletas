class Atletas {
    constructor (nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    obtemNomeAtleta(){
        return this.nome
    }

    obtemIdadeAtleta(){
        return this.idade
    }

    obtemPesoAtleta(){
        return this.peso
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

    calculaIMC(){
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida(){
        this.notas.sort(function(a,b){
            return a-b  
        })
        let notasValidas = this.notas.slice(1,4)
        let soma = notasValidas.reduce(function(atual, total){
            return total + atual
        },0)
        console.log(soma)
        let media = soma/notasValidas.length
        return media
    }
}

const atleta = new Atletas(
    "Cesar Abascal", 
    30,
    80,
    1.7,
    [10,9.34,8.42,10,7.88])

console.log(`Nome: ${atleta.nome}`)
console.log(`Idade: ${atleta.idade}`)
console.log(`Peso: ${atleta.peso}`)
console.log(`Altura: ${atleta.altura}`)
console.log(`Notas: ${atleta.notas}`)
console.log(`Categoria: ${atleta.obtemCategoria()}`)
console.log(`IMC: ${atleta.obtemIMC()}`)
console.log(`Média Válida: ${atleta.obtemMediaValida()}`)