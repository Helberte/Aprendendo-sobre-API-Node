// ######################################## Sobrecargas de função ########################################


function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

console.log('Resultado: ' + d1 + ' || ' + d2);

function minhaSobrecarga(primeiroNome: string) : string;                        // primeira sobrecarga
function minhaSobrecarga(primeiroNome: string, segundoNome: string) : string;   // sobrecarga
function minhaSobrecarga(primeiroNome: string, segundoNome?: string) : string{  // linha de implementação, não é vista
  
  if(segundoNome)
    return primeiroNome + ' ' + segundoNome;
  return primeiroNome;  
}

console.log(minhaSobrecarga('helberte'));
console.log(minhaSobrecarga('helberte', 'costa'));

function fnc(x: boolean): void;
function fnc(x: boolean, y: string): void;
function fnc(x: boolean, y?: string) : void{}

function fn2(x: string): string;
function fn2(x: number): boolean;
function fn2(x: string | number) : string | boolean {
  return "oops";
}

// funcao que retorna o tamnho de um array ou string

function tamanho(s: string): number;
function tamanho(arr: any[]): number;
function tamanho(x: any) {
  return x.length;
}

// ##################### Sempre prefira parâmetros com tipos de união em vez de sobrecargas quando possível #####################

console.log(tamanho('my name is fulano of tal'));
console.log(tamanho([1,2,3,4,5,6,7,8,9,10]));