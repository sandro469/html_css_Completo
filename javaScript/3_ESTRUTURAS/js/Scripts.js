// 1 - variaveis salvar valor na memória
let nome = "sandro";

console.log(nome);

nome = "sandro eugênio"

console.log(nome);

const idade = 46;

console.log(idade);

console.log(typeof nome);

console.log(typeof idade);

// 2 - mais sobre variáveis
//let 2teste = "inválido"
//let @teste = "inválido"

let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c);

const nomecompleto = "Sandro eugênio"

const nomeCompleto = "fernando luiz"

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - prompt
//const age = prompt("Dígite a sua idade:")

//console.log(`Você tem ${age} anos.`);

// 4 - Alert
//alert("Testando");

//const z = 10

//alert(`O número é ${z}`);

// 5 -  Math
//console.log(Math.max(5,2,1,10));

//console.log(Math.floor(5,14));

//console.log(Math.ceil(5,14));

// 6 - console
//console.log("teste!");

//console.error("erro!");

//console.warn("Aviso!");

// 7 - if
const m = 10;

if (m > 5) {
    console.log("M é maior que 5!");
}

const user = "joão"

if (user === "joão") {
    console.log("Olá joão!")
}

if (user === "Maria") {
    console.log("Olá maria");
}

console.log(user === "joão", user === "Maria");

// 8 - else
const loggedIn = false

if (loggedIn) {
    console.log("Esta autenticado!");
} else {
    console.log("Não está autenticado!");
}

const q = 10
const w = 15

if (q > 5 && w > 20) {
    console.log("números mais altos");
} else {
    console.log("Os números nãos são mais altos");
}

// 9 - else  if
if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "Sandro"
const userAge = 46

if (userName === "josé") {
    console.log("Bem vindo José!")
} else if (userName === "Sandro" && userAge === 46) {
    console.log("Olá Sandro, Você tem 46 anos!")
} else {
    console.log("Nnehuma condição aceita!");
}

// 10 - while

let p = 0

while (p < 5) {
    console.log(`Repetindo ${p}`)
    p = p + 1;
}

// loop infínito
//let x = 10

//while (x > 5) {
//  console.log(`Imprimindo ${x}`);
//}

// 11 - do while
let o = 10

do {
    console.log(`Valor de o: ${o}`)
    o--
} while (o > 1)

// 12 - for
for (let t = 0; t < 10; t++) {
    console.log("Repetindo Algo....")
}

let r = 10

for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuido: ${r}`)
}

// 13 - identação
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
    } else {
        if (u / 2 === 0) {
            console.log("Deu !")
        }
    }
}

// 14 - break
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if (g === 12) {
        console.log("O g 12!")
        break;
    }
}

// 15 - continue
for (let s = 1; s < 10; s = s + 1) {
    // operador de resto = %
    if (s % 2 === 0) {
        console.log("Número par!")
        continue
    }
    console.log(s);
}

// 16 - switch
const job = "Advogado"


switch (job) {
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um advogado!");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro");
        break;
    default:
        console.log("Profissão não encontrada");
}

// switch errado não crie dessa maneira 
const l = 100

switch (l) {
    case 200:
        console.log("L é 200");
    case 100:
        console.log("L é 100");
    case 10:
        console.log("L é 10");
      default:
        console.log("L não foi encontrado!");
}








