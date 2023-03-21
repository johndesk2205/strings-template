// const nome = prompt(`Insira aqui o seu nome`)
// const nomeMaiusc = nome.toUpperCase()
// const corFavorita = prompt(`Insira aqui sua cor favorita`)

// const citacaoFavorita = prompt(`Insira sua citação favorita`)

// const fraseConcatenada = 'A cor favorita de ' + nomeMaiusc + ' é ' + corFavorita
// const fraseTemplateString = `A cor favorita de ${nomeMaiusc} é ${corFavorita}`

// console.log(fraseConcatenada)
// console.log(fraseTemplateString)

// //Inserindo citação
// const novaFrase = fraseTemplateString + " '" + citacaoFavorita + "'"

// console.log("novaFrase", novaFrase)

// //Imprimindo em forma de lista
// const dadosUsuario = `Nome: ${nomeMaiusc}, \nCor favorita: ${corFavorita}, \nCitação favorita:"${citacaoFavorita}"`

// console.log(dadosUsuario)
// //Contando o número de letras
// console.log(`Número de letras do nome: ${nomeMaiusc.length}`)
// //Identificando se possui a letra a/A
// console.log("O nome possui a letra A?",nomeMaiusc.includes("a"||"A"))


//Exercicio de fixação

const nomeUsuario = prompt('Digite o seu nome')
const email = prompt('Digite o seu email')
const fraseFixacao = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nomeUsuario}!`
console.log(fraseFixacao)


console.log(fraseFixacao + " Tamanho do nome: "+ nomeUsuario.length + " letras")

console.log(fraseFixacao.replaceAll("r", "x").replaceAll("R", "X"))

console.log(email.includes("@"))

