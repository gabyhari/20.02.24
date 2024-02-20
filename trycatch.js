const variavel1 = "valor somente leitura";
var variavel2 = "valor editavel";

try {
    variavel1 = "valor nao permitido";
    console.log("a variavel1 foi alterada para: ", variavel1);
} catch (e) {
    console.error("ops! ocorreu o erro: ", e);
}

try {
    variavel2 = "valor permitido";
    console.log("a variavel2 foi alterada para: ", variavel2);
} catch (e) {
    console.error("ops! ocorreu o erro: ", e);
}