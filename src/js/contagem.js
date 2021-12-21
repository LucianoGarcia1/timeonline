const calcular = () =>{
    const resultado = document.getElementById("day");
    const dateone = document.getElementById("oneinput").value;
    const datetwo = document.getElementById("twoinput").value;

    const date = new Date(dateone);
    const twod = new Date(datetwo);

    if(dateone === "" || datetwo === ""){
        alert("Digite as datas corretamente")
    }else{
        let calcday = Math.abs(twod - date);
        let mili = 1000 * 60 * 60 * 24; //milisegundos - segundos - minutes - horas
        
        let calc = Math.ceil(calcday / mili);
        resultado.innerHTML = `Faltam ${calc}dias`
    }
}