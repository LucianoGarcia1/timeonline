const calcular = () =>{
    const resultado = document.getElementById("day")
    const quanto = document.getElementById("oneinput").value;
    const de = document.getElementById("twoinput").value;

    if(quanto === "" || de === ""){
        alert("Erro")
    }else{
        let calc = (quanto * de / 100);
        resultado.innerHTML = `Resultado ${calc}`
    }
}