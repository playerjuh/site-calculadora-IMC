document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede que a página recarregue

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    let imc = peso / (altura * altura);
    let mensagem = `Olá ${nome}, você tem ${idade} anos. Seu IMC é ${imc.toFixed(2)}. `;

    if (imc < 18.5) {
        mensagem += "Você está abaixo do peso.";
    } else if (imc < 25) {
        mensagem += "Você está no peso ideal!";
    } else if (imc < 30) {
        mensagem += "Você está com sobrepeso.";
    } else {
        mensagem += "Você está na faixa da obesidade.";
    }

    document.getElementById("resultado").innerText = mensagem;
});
