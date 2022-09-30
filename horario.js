monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro" , "Novembro", "Dezembro");
now = new Date;

function verificaHoras() {
    var hora = now.getHours();
    if(hora < 10){
        hora="0"+hora;
    }
    return hora;
}
function verificaMinutos() {
    var min = now.getMinutes();
    if(min < 10){
        min="0"+min;
    }
    return min;
}

document.getElementById("calendario").innerHTML = (now.getDate () + " de " + monName [now.getMonth() ] +  " de " + now.getFullYear ());
setInterval (verificaHoras, 500);
setInterval (verificaMinutos, 500);
document.getElementById("relogio").innerHTML =(verificaHoras() + ":" + now.getMinutes());