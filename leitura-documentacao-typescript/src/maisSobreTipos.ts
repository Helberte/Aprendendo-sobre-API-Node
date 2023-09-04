
// 31/08/2023

// @errors: 2345
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number")
        return " ".repeat(padding) + input;

    return padding + input;
}

console.log(padLeft(15, 'minha string top'));
console.log(padLeft('teste do helberte ', 'minha string top'));


// tipos dinamicos
function minhaFunction (url: string, method: "POST" | "GET"){
console.log(`url ${url}, method: ${method}`);
}

const method = {
post: "POST",
get: "GET"
} as const

minhaFunction('www.algumacoisa.com.br', method.post);


function printAll(strs: string | string[] | null) {

if (typeof strs === "object" && strs) {
    for (const s of strs) {
    
    console.log(s);
    }
} else if (typeof strs === "string") {
    console.log(strs);
} else {
    console.log('valor null')
}
}

printAll('teste do helberte');
printAll(['ola', 'teste', 'mais um', 'dois', 'três', 'agua']);
printAll(null);

  