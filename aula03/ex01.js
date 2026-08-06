const input = require('readline-sync')

const aluna = { nome: "Emilly",
      idade: 15, 
      cidade: "Cascavel", 
      curso: "Desenvolvimento de sistemas"};

console.log(`Nome: ${aluna.nome}`);
console.log(`idade: ${aluna.idade}`);
console.log(`cidade: ${aluna.cidade}`);
console.log(`curso: ${aluna.curso}`);

aluna.cidade = "São Paulo";

console.log(`Cidade atualizada: ${aluna.cidade}`);