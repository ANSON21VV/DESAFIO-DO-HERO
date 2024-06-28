let xp = 1000; // experiência inicial
let metaXP = 10000; // experiência desejada


for (let i = 1; xp <= metaXP; i++) {
    xp += i * 1000;
    console.log("Experiência atual: " + xp);}
    console.log("Meta de experiência alcançada!");