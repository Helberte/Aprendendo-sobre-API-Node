// ################### Restrições ###################
// nas funções genericas eu consigo passar qualquer tipo por parametro
// mas as vezes pode ser interessante passar apenas um grupo de tipos que eu queira
// pra isso, usamos as restricoes

type grupoValores = {
    tamanho: number,
    descricao: string
}

function maiorDeDois<Type extends grupoValores>(valor: Type, valor2: Type) {
if(valor.tamanho > valor2.tamanho ){
    return valor.tamanho;
}
return valor2.tamanho;
}

function maiorDeDois2<Type extends { tamanho: number}>(valor: Type, valor2: Type) {
if(valor.tamanho > valor2.tamanho ){
    return valor.tamanho;
}
return valor2.tamanho;
}

console.log('Maior: ' + maiorDeDois ({tamanho: 15, descricao: ''}, {tamanho: 17, descricao: ''})) 
console.log('Maior: ' + maiorDeDois2({tamanho: 150 },{tamanho: 17 }));

function minimumLength<Type extends { length: number }>(obj: Type, minimum: number ): Type {
if (obj.length >= minimum) {
    return obj;
} else {
    return { length: minimum } as Type;
}
}
  
console.log (minimumLength({ length: 15}, 100));
  