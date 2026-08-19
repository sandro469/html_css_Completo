// 1 - Arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista);

console.log(typeof lista);

const itens = ["sandro", true, 2, 4.12, []]

console.log(itens);

// 2 - mais sobre arrays 
const arr = ["a", "b", "c", "d", "d"]

console.log(arr[2])

console.log(arr[0])



// 3 - propriedades
const numbers = [5, 3, 4]

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Sandro"

console.log(myName.length);

// 4 métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const texto = "Algum texto"

console.log(texto.toUpperCase());

console.log(typeof texto.toUpperCase);

console.log(texto.indexOf("g"));

// 5 - objetos
const person = {
    name: "Sandro",
    age: 46,
    job: "programador"
}

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "Vw",
    model: "tiguan",
    km: 200000,
};

console.log(car);

car.dors = 4;

console.log(car);

delete car.km

console.log(car);

// 7 - mais sobre objetos

const obj = {
    a: "teste",
    b: true
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação
const a = {
    name: "sandro"
}

const b = a 

console.log(a);
console.log(b);


console.log(a === b);

a.age = 46

console.log(b);
console.log(b);

delete b.age

console.log(a);
console.log(b);

// 10 - loop em array
const users = ["sandro", "paulo", "joão", "pedro"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - push e pop
const array = ["a", "b", "c"]

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// 12 - shift e unshift

const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

// 13 - indexof e lastindexof
const myElements = ["Morango", "Maçã", "Abacate", "pera", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));
console.log(myElements.indexOf("Mamão"));

console.log(myElements.lastIndexOf("Mamão"));

// 14 -  slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4);

console.log(subArray);
console.log(testeSlice );

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

// 15 - foreach
const nums =  [1, 2, 3, 4, 5]

nums.forEach((numero) =>{

    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "javaScript"},
    {title: "Terceiro post", category: "phiton"},
];

posts.forEach((post)=> {
console.log(`Exibindo post: ${post.title},da categoria: ${post.category} `)

});

// 16 - includes
const brands = ["BMW", "VW", "FIAT"]

console.log(brands.includes("FIAT"));

console.log(brands.includes("kia"));

if(brands.includes("BMW")) {

    console.log("Há carros da marca BMW!");
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse();

console.log(reverseTest);

// 18 - trim
const  trimTest = "  testando \n  "

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// 18 - padStart
const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0"); 

console.log(testePadEnd);

// 19 - split
const frase = "O rato roeu a roupa do rei de roma"

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 20 - join 
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos Comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra);

// 21 - repeat
const palavra = "Testando "

console.log(palavra.repeat(5));

// 22 - rest operator
const somaInfinita = (...args) => {
    let total = 0;

    for(let i = 0; i < args.length; i++){

        total += args[i]

    }

    return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 34, 3424, 128812, 12723, 12, 23, 54, 12));

// 23 - for of
const somaInfinita2 = (...args) => {

     let total = 0;

     for(num of args) {
        total += num
     }

     return total;
};

   console.log(somaInfinita2(1, 2, 3, 4));

   console.log(somaInfinita2(5, 6, 1, 23, 5, 6, 5));


   // 24 - destruturing em objetos
   const userDetails = {
    firstName: "SANDRO",
    lastName: "Eugênio",
    job: "Programador"
   }

   const {firstName, lastName, job} = userDetails;

   console.log(firstName, lastName, job);

   // renomear variáveis
   const {firstName: primeiroNome} = userDetails;

   console.log(firstName);

   // 25 destructuring com arrays
   const myList = ["Avião", "Submarino", "Carro"]

   const [veiculoA, veiculoB, veiculoC] = myList;

   console.log(veiculoA, veiculoB, veiculoC);

   // 26 - JSON
   const myJson = '{"name": "Sandro", "age": 46, "skills": ["PHP", "JAVA", "RUBY"]}';

   console.log(myJson);

   console.log(typeof myJson);

   // 27 - conversão de Json para objeto e objeto para Json

   const myObject = JSON.parse(myJson);

   console.log(myObject);

   console.log(myObject.name);

   console.log(typeof myObject);

   // json invalido
   const badJson = '{"name": Sandro, "age": 46}'

   //const myBadObject = JSON.parse(badJson);

   myObject.isOpenToWork = true;

   console.log(myObject);

   const myNewJson = JSON.stringify(myObject);

   console.log(myNewJson)

   console.log(typeof myNewJson);

   

































