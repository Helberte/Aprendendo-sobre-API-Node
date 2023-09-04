// Mais sobre FUNÇÕES
// Expressões de tipo de função

function funcaoComoTipo(funcao: (param: string) => string){
    return funcao("Uma função do tipo de uma função");
}
function callba(param: string){
    // processamento
    return param.toUpperCase();
}

console.log(funcaoComoTipo(callba))

type tipoFuncao = (p: number) => number;

function passaPorParametro(p: number){
    return p * 2;
}

function recebeCallBack(n: number, func: tipoFuncao){
    return n * func(15);
}

console.log(recebeCallBack(2, passaPorParametro));
  