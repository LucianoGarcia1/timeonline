const day = document.getElementById("day");
const setFull = new Date().getDate();
const setMonth = new Date().getUTCMonth() +1;
const setAno = new Date().getUTCFullYear()
day.innerHTML = ` ${setFull} / ${setMonth} / ${setAno}`;

const HoraActual = () =>{
    const hora = document.getElementById("horass");
    const Hdate = new Date().getHours();
    const Mdate = new Date().getMinutes();
    const Sdate = new Date().getSeconds();
    hora.innerHTML = `${Hdate}h ${Mdate}m ${Sdate}s`
}

setInterval(() => {
    HoraActual()
}, 1);
