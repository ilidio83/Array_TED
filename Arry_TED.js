// Array_TED
// 1. Criar um array com 5 nomes
let nomes = ["Ana", "Bruno", "Carla", "Diego", "Eduardo"];

// Exibir o terceiro nome (indice 2, pois começa do 0)
console.log("Terceiro nome:", nomes[2]);

// 2. Adicionar um nome no final e no inicio
nomes.push("Fernanda"); // final
nomes.unshift("Gabriel"); // inicio
console.log("Apos adicionar no inicio e no fim:", nomes);

// 3. Remover o ultimo nome
nomes.pop();
console.log("Apos remover o ultimo nome:", nomes);

// 4. Usar map() para dobrar os valores
let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log("Valores dobrados:", dobrados);

// 5. Usar filter() para pegar apenas numeros maiores que 5
let lista = [1, 3, 5, 7, 9];
let maioresQue5 = lista.filter(num => num > 5);
console.log("Numeros maiores que 5:", maioresQue5);