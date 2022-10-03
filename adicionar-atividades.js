var objDiv = document.getElementById("scroll");
objDiv.scrollLeft = objDiv.scrollWidth;

var arrayAtividades = [];
var guardarAtividadeHora = [[],
                            []];
var guardarHora = [];

var atividade = '';
var botao_atividade = document.querySelector("#adiciocar-atividade");

var botao_excluir_dia = document.querySelector("#excluir-dia-atividade");


botao_atividade.onclick = function adicionarAtividade() {
    atividade = document.querySelector("#texto-atividade");
    if (atividade.value != '') {
        arrayAtividades.push(atividade.value);
        guardarAtividadeHora[0].push(atividade.value);
        console.log(atividade.value);
        var selectDia = document.getElementById("dia-semana");
        console.log(selectDia.value);

        var selectHora = document.getElementById("select-hora");
        console.log(selectHora.value);
        guardarAtividadeHora[1].push(selectHora.value);
        console.log(guardarAtividadeHora);
    
        var naoencontrou = 0;

        if (guardarHora.length == 0) {
            guardarHora.push(selectHora.value);
            document.getElementById("cards__horarios-lista").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item">' + selectHora.value + '</li>');
            document.getElementById("cards-lista").insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag"></div><p class="cards__atividades-item-texto">' + atividade.value + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
        } else {
            for (i=0; i < guardarHora.length; i++) {

                if (selectHora.value == guardarHora[i]) {
                    naoencontrou = 1;
                    break;
                }
            }

            if (naoencontrou == 0) {
                console.log("entrou");
                guardarHora.push(selectHora.value);
                document.getElementById("cards__horarios-lista").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item">' + selectHora.value + '</li>');
            }

            if (naoencontrou != 0) {
                console.log("entrouaqui");
                document.getElementById("cards-lista").insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag"></div><p class="cards__atividades-item-texto">' + atividade.value + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
            }       
        }
    }

        console.log(guardarHora);

        //document.getElementById("cards-lista").innerHTML = ('<li class="cards__atividades-item"><div class="cards__atividades-item-tag"></div><p class="cards__atividades-item-texto">' + atividade.value + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
}


botao_excluir_dia.onclick = function apagarAtividadedia() {
    arrayAtividades.length = 0;
    guardarHora.length = 0;
    document.getElementById("cards-lista").innerHTML = '';
    document.getElementById("cards__horarios-lista").innerHTML = '';
}
