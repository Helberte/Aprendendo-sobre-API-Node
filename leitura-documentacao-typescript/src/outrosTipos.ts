
// ##################### Outros tipos para conhecer #####################

// void não é o mesmo que undefined.
// object é todo o tipo que for diferente dos tipos primitivos
//
// string, number, bigint, boolean, symbol, null, undefined
//
// tudo diferente disso é object
//
// ----------------------------  I M P O R T A N T E  ----------------------------
// //                                                                           //
// //                 objectnão é Object. Utilize sempre object !               //
// //                                                                           //
// -------------------------------------------------------------------------------

// unknown - qualquer coisa, parecido com any, porém mais seguro do que o any

function myF(p: unknown){
// p.t(); // não deixa
}

function myF2(p: any){
    p.t();
}

// o tipo Function
// melhor evitar devido ao anytipo de retorno inseguro.
function recebeFuncao (func: Function) {
    return func('minha função retornando valor');
}

function passadaParametro(p: string){
    return p;
}

console.log(recebeFuncao(passadaParametro));