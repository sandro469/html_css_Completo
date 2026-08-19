// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -128);

// 2 - OPERAÇÕES ARITMÉTICAS
console.log(2+4);
console.log(10-5);
console.log(10 / 5);
console.log(10 * 12);

console.log(5 + (4 * 2));

// SPECIAL NUMBERS 
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - STRINGS
console.log("Um texto");
console.log('Mais um texto');
console.log('13');

console.log(typeof "Um texto");
console.log(typeof 'Mais um texto');

// SÍMBOLOS ESPECIAIS EM STRING
console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - CONCATENAÇÃO
console.log("Oi, " + " tudo" + " bem?");

console.log('Testando ' + 'Com ' + 'Crase!')

//  7 - TEMPLATE STRINGS 

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - BOOLEAN
console.log(true);

console.log(5> 20);

console.log(30 > 10);

console.log(typeof false);

// 9 - COMPARAÇÕES
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

// 10 - IDêNTICO
console.log(9 == "9");

console.log(9 + "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - OPERADORES LÓGICOS
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "sandro" === 1);

console.log(5 > 2 || "sandro" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true);

console.log(5 > 2 );

console.log(!5 > 2 );

// 12 - empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - mudança de tipos 
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1 );



