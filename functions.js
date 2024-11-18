const notas = [6, 8, 9, 2, 5, 10];

const sumarNotas = notas => {
    let resultado = 0;
    notas.forEach(nota=> resultado += nota);
    return resultado;
}

const promedioNotas = notas => sumarNotas(notas) / notas.length;

const resultado = promedioNotas(notas).toFixed(1);

if(isNaN(resultado)){
    console.error(`Ocurrió un error: ${resultado}`);
}else{
    console.log(`El promedio de notas es: ${resultado}`);
}