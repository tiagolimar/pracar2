export function gerarSenhaCaixa() {
    const senha_caixa = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    return senha_caixa.toString(); 
}