// ############################# Atribuição de Funções         #############################
    
type voidFunc = () => void;
  
const myFu: voidFunc = () => true;
const myFu2: voidFunc = () => {
  console.log('teste');
  return 'fala meu povo!';
};

// o retorno continua como void
const v1 = myFu();
const v2 = myFu2();

console.log(v1);
console.log(v2);

const arrTop = [1,2,3,4,5,6,7,8,9,10];
const arrSecond = [1];

arrTop.forEach((a) => arrSecond.push(a));

console.log(arrTop);
console.log(arrSecond);