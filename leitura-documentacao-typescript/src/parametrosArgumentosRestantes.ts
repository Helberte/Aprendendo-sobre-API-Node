// ##################### Parâmetros e argumentos restantes #####################
// Parâmetros de descanso ...m

function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}

const ab = multiply(10, 1, 2, 3, 4,5,2,2,4,5,7,8,7,5,15,4,5,4,5,6,6,3,3,3,2,1,1,2,2);
console.log(ab);


function paramDescanso(sep: string, ...p: string[] ){
    return p.join(sep);
}

console.log(paramDescanso(' - ', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano'));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6,7,8,9,10];
arr1.push(...[1,2,3,4,5,6,7,8]);

console.log(arr1);

const args  = [8, 5] as const;
const angle = Math.atan2(...args);