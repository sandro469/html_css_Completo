//  1 - setTimeout
console.log("Ainda nao executou");

setTimeout(function() {

 console.log("Requisição assíncrona");
}, 2000);

console.log("Ainda nao executou 2");

// 2 - setInterval
console.log("Ainda não começou");

//setInterval(function() {
 //   console.log("Intervalo assíncrono");

//}, 3000);

console.log("Ainda nao começou");

// 3 - promise
const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa
.then(value => {
    console.log(`A soma é ${value}`);
    return value;
})
.then((value ) => value -1) 
.then((value ) => console.log(`Agora é ${value}`));


console.log("Outro código");

// 4 - falha na promise
Promise.resolve(4 * "abc")
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Valores inválidos");
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 5 - rejeiçao de promise
//function checkNumber(n) {
   // return new  Promise((resolve, reject) => {

       // if(n > 10) {
            resolve(`O número é maior que 10`)
        //}else{
           // reject(new Error("Número muito baixo"));
      //  }

    //});
//}

//const a = checkNumber(20);

//const b = checkNumber(10);

//console.log(a, b);

//a.then((v) => console.log(`O resultado é${v}`)).catch((err) => 
    //console.log(`Um erro ocorreu: ${err}`)
//);

// 6 - async functions
async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`o valor da soma é ${value}`)
});

console.log("teste async");





