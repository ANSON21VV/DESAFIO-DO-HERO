//Desafio do heroi: onde devo criar um código para montrar em que categoria o heroi se encontra.
//Atravez da  quantidade de xp que o heroi possui
 
//declarando uma variavel com o nome do heori
let name = "naruto"
// criandp uma estrutara de repetição para armazenar o ultimo valor
let ultimo//a variavel tem que está fora do escopo do for para o loop
// usando o for para fazer o xp e aumentado graduamente
//para mostra a frase"Parabens por chegar no nivel ferro: quando chegar no nivel necessario  

for(let i= 0; i<=1000; i+=100){
   // 
    let vai=`xp:${i}`

    ultimo= vai

    console.log(vai)
  
} 
console.log( `Parabens por chegar no nivel ferro: ${ultimo}` );

let resui // variavel fora do escopa para guarda o ultimo número do escopo

for(let i =1000; i<=2000; i+=100){
    let resu=`xp: ${i}`
    resui=resu //armazenar o ultimo loop
    console.log(resu)
}

console.log(`Parabens por chegar no nivel bronze:${resui}`)

let resul
 for (i=2000;i<=5000;i+=100){
    let re=`xp:${i}`
    resul=re
    console.log(re)

 }
console.log(`Parabens por chegar no nivel Prata:${resul}`)

 let res

 for(i=5000;i<=7000;i+=100){
    let up=`up:${i}`
    res=up
    console.log(up)
 }
console.log(`Parabens por chegar no nivel ouro:${res}`)

let result

for(i=7000;i<=8000;i+=200){
let xp=`up:${i}`
result=xp
console.log(xp)
}
console.log(`Parabens por chegar no nivel Platina:${result}`)

let resulta
for(i=8000;i<=9000;i+=200){
let metaXP=`up:${i}`
resulta=metaXP

console.log(metaXP)
}
console.log(`Parabens por chegar no nivel ascendente:${resulta}`)

let resultad
for(i=9000;i<=10000;i+=100){
    let xpup=`up:${i}`
    resultad=xpup
    console.log(xpup)
}
console.log(`Parabens por chegar no nivel imortal:${resultad}`)

let resultado
for(i=10000;i<=10200;i+=50){
    let upxp=`up:${i}`
    resultado=upxp
    console.log(upxp)
}
console.log(`O heroi ${name} finalmete chegou no radiante:${resultado}`)