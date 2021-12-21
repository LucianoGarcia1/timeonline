const calcular = () =>{
    const resultado = document.getElementById("day")
    const oneinp = document.getElementById("oneinput").value;
    const twoinp = document.getElementById("twoinput").value;

    if (oneinp !== '' && twoinp !== '') {

        const valorIMC = (twoinp / (oneinp * oneinp)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `seu Imc é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}