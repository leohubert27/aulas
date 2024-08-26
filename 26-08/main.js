const averageTemp = []                        //criação do array
averageTemp [0] = 31.9                        //alimentano a array com a temperatura dos dias
averageTemp [1] = 35.3
averageTemp [2] = 42.4
averageTemp [3] = 52
averageTemp [4] = 60.8

// ---------------------------------------------------------------------------

let daysOfWeek = []
let diasDaSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];
console.log (diasDaSemana.length);

for (let i = 0; i < diasDaSemana.length; i++) {
    console.log (i, diasDaSemana [i])
}

console.log(diasDaSemana)

// ----------------------------------------------------------------------------

let numbers = [0,1,2,3,4,5,6,7,8,9];
numbers[numbers.length] = 10;
numbers.push(11,12,13);                     //pode colocar quantos pushes quiser
numbers.unshift(-1);                        //desloca os elementos pra direita do array para criar um novo
numbers.unshift(-2);
numbers.unshift(-4, -3);
numbers.pop();                              //remove o último valor de um array
numbers.shift();                            //move a estrutura pra esquerda e cria um novo elemento no final do array
//numbers.splice()                          // o splice pode criar e apagar posiçõs no array, tudo será informado dentro do parenteses

console.log(numbers.length)

// ----------------------------------------------------------------------------

