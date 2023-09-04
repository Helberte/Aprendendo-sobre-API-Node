// ################################## Tipos de interseção ##################################

interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

// Aqui, cruzamos Colorfule Circleproduzimos um novo tipo que possui todos os membros de Colorful e Circle.

type ColorfulCircle = Colorful & Circle;

const myIntersecao: ColorfulCircle = { color: 'red', radius: 1.55 };