function calcular(){
const totalDisponivel = 1000;
const valor1 = parseFloat(document.getElementById('produto1').value);
const valor2 = parseFloat(document.getElementById('produto2').value);

var soma = valor1 + valor2;

var sobra = totalDisponivel - soma;

const mensagem = document.getElementById('mensagem');
if (sobra>=0){
    mensagem.innerHTML = "Você comprou 2 produtos. O total foi R$ ${soma.toFixed(2)} e sobrou R$ ${sobra.toFixed(2)}.";
} 
else{
    mensagem.innerHTML = "Favor inserir o valor pagar maior que a soma dos valores dos produtos.";
}
}
