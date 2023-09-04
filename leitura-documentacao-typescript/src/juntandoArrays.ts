// juntando array

function juntaArray<Type>(arr1: Type[], arr2: Type[]) : Type[]{
    return arr1.concat(arr2);
}

console.log(juntaArray<number | string>([1,2,3,4,5,6,7,8,9,10], ['1', '3']));

function funcaoGenerica<Type>(p1: Type, p2: Type, p3: Type) : Type{
    return (p1 + ' - ' + p2 + ' - ' + p3) as Type;
}

// nem sempre o typescript infere o tipo de dado que está sendo passado
// para isso, colocamos o tipo que vamos passar por parametro explicitamente

console.log(funcaoGenerica<string | string | number>('primeiro param', 'segundo param', 15));

function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}
function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

// ############################################################################################ //
// Regra : Se um parâmetro de tipo aparecer apenas em um local, reconsidere fortemente se você realmente precisa dele

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

function procura(n: number) : boolean {
    return n === 8 || n === 9;
}

var arr: number[] = [1,2,3,4,5,6,7,8,9,10];

console.log(filter1(arr, procura));

function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[],func: Func ): Type[] {
    return arr.filter(func);
}

console.log(filter2(arr, procura));