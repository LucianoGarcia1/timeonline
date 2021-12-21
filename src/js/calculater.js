const dia = document.getElementById("day");

const somar = () =>{
    const inputone = document.getElementById("oneinput").value;
    const inputtwo = document.getElementById("twoinput").value;

    if(inputone === "" || inputtwo === ""){
        alert("Erro")

    }else{
        let converteIpn = Number(inputone);
        let contwo = Number(inputtwo);

        let some = converteIpn + contwo;
        dia.innerHTML = `Resultado ${some}`
    }
}

const diminuir = () =>{
    const inputone = document.getElementById("oneinput").value;
    const inputtwo = document.getElementById("twoinput").value;

    if(inputone === "" || inputtwo === ""){
        alert("Erro")

    }else{
        let converteIpn = Number(inputone);
        let contwo = Number(inputtwo);

        let diminua = converteIpn - contwo;
        dia.innerHTML = `Resultado ${diminua}`
    }
}

const multiplique = () =>{
    const inputone = document.getElementById("oneinput").value;
    const inputtwo = document.getElementById("twoinput").value;

    if(inputone === "" || inputtwo === ""){
        alert("Erro")

    }else{
        let converteIpn = Number(inputone);
        let contwo = Number(inputtwo);

        let multiplica = converteIpn * contwo;
        dia.innerHTML = `Resultado ${multiplica}`
    }
}

const divisao = () =>{
    const inputone = document.getElementById("oneinput").value;
    const inputtwo = document.getElementById("twoinput").value;

    if(inputone === "" || inputtwo === ""){
        alert("Erro")

    }else{
        let converteIpn = Number(inputone);
        let contwo = Number(inputtwo);

        let dividir = converteIpn / contwo;
        dia.innerHTML = `Resultado ${dividir}`
    }
}