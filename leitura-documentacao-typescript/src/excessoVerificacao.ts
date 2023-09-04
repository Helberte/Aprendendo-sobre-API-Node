// ################################## Excesso de verificações de propriedade ##################################

interface SquareConfig {
    color?: string;
    width?: number;
    [index: string]: any
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}

let mySquare = createSquare({ color: "", width: undefined, opacity: 1.5 });

console.log(mySquare);