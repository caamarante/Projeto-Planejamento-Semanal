monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro" , "Novembro", "Dezembro");
now = new Date;

document.getElementById("calendario").innerHTML = (now.getDate () + " de " + monName [now.getMonth() ] +  " de " + now.getFullYear ());

document.getElementById("relogio").innerHTML =(now.getHours() + ":" + now.getMinutes());