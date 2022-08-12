//escreva uma função que receba uma string, se o texto conter mais de 10 caracteres imprima "texto muito longo", se conter menos "texto dentro do limite."
function stringLength(mystring) {
    if (mystring.length > 10) {
        console.log(`o texto ${mystring} é muito longo`);
    } else {
        console.log(`o texto ${mystring} é curto`);
    }
}
console.log(stringLength("jkasdhajkdjadjhisoidfisdf34"));
console.log(stringLength("lucasdosoi"));
