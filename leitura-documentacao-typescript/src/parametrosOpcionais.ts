// ######################################## Parâmetros opcionais ########################################

function f(x: number = 10) {
    console.log(x);
}
f();
f(150);

function f2(x?: number) {
    console.log(x);
}
f2();
f2(150);
f2(undefined);

// Regra : Ao escrever um tipo de função para um retorno de chamada, nunca escreva um parâmetro opcional, 
// a menos que pretenda chamar a função sem passar esse argumento

function meyForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i);
    }
}

meyForEach([1,2,3,4,5,6,7,8,9,10], (a: any) => console.log(a));
meyForEach([1,2,3,4,5,6,7,8,9,10], (a, b)   => console.log(a, b));
  