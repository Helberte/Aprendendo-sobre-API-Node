// funcao que só recebe valores conhecidos
type myType = "salada";

function tiposConhecidos (s: string, valor: myType | "sopa" | "macarrao") {
  console.log(s + ' e ' + valor);
}

tiposConhecidos('comida', "salada");


function requisicao ( url: string, method: "POST" | "GET"){
  console.log(url + ' | ' + method);
}

const req = {
  url: 'https://google.com.br',
  method: "POST" as "POST"
}
const req2 = {
  url: 'https://google.com.br',
  method: "POST" 
} as const

requisicao(req.url, req2.method);
