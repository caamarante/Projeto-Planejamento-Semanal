var objDiv = document.getElementById("scroll");
objDiv.scrollLeft = objDiv.scrollWidth;

var arrayAtividades = [];
var guardarAtividadeHoraSegunda = [[],[]];
var guardarAtividadeHoraTerca = [[],[]];
var guardarAtividadeHoraQuarta = [[],[]];
var guardarAtividadeHoraQuinta = [[],[]];
var guardarAtividadeHoraSexta = [[],[]];
var guardarAtividadeHoraSabado = [[],[]];
var guardarAtividadeHoraDomingo = [[],[]];


var guardarHoraSegunda = [];
var guardarHoraTerca = [];
var guardarHoraQuarta = [];
var guardarHoraQuinta = [];
var guardarHoraSexta = [];
var guardarHoraSabado = [];
var guardarHoraDomingo = [];


var atividade = '';
var botao_atividade = document.querySelector("#adiciocar-atividade");

var selectHora = document.getElementById("select-hora");
var selectDia = document.getElementById("dia-semana");

var botao_excluir_dia = document.querySelector("#excluir-dia-atividade");

var cliqueNoBotao = 0;

var dia_segunda = document.querySelector("#dia-segunda");
var dia_terca = document.querySelector("#dia-terca");
var dia_quarta = document.querySelector("#dia-quarta");
var dia_quinta = document.querySelector("#dia-quinta");
var dia_sexta = document.querySelector("#dia-sexta");
var dia_sabado = document.querySelector("#dia-sabado");
var dia_domingo = document.querySelector("#dia-domingo");

var excluirLocalStorage = document.querySelector("#excluirLocalStorage");
var salvarLocalStorage = document.querySelector("#salvarLocalStorage");

var maisDeUmHorario = 0;

var botaoApagar = document.querySelector(".cards__atividades-item-apagar")

function segunda() {
    document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    document.getElementById("cards__horarios-lista-quarta").innerHTML = '';
    document.getElementById("cards__horarios-lista-quinta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sexta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sabado").innerHTML = '';
    document.getElementById("cards__horarios-lista-domingo").innerHTML = '';
    document.getElementById("cards__atividades").innerHTML = '';
    for (i=0; i < guardarHoraSegunda.length; i++) {
        document.getElementById("cards__horarios-lista-segunda").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-segunda">' + guardarHoraSegunda[i] + '</li>');
        document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHoraSegunda[i] + '"></ul>');
        for (j=0; j < guardarAtividadeHoraSegunda[0].length; j++) {
            if (guardarHoraSegunda[i] == guardarAtividadeHoraSegunda[1][j]){
                document.getElementById(guardarHoraSegunda[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-segunda"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHoraSegunda[0][j] + '</p><button class="cards__atividades-item-apagar" id="guardarAtividadeHoraSegunda[0]['+j+']">Apagar</button></li>');
            }
        }
    }
}

function terca() {
    document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    document.getElementById("cards__horarios-lista-quarta").innerHTML = '';
    document.getElementById("cards__horarios-lista-quinta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sexta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sabado").innerHTML = '';
    document.getElementById("cards__horarios-lista-domingo").innerHTML = '';
    document.getElementById("cards__atividades").innerHTML = '';
    for (i=0; i < guardarHoraTerca.length; i++) {
        document.getElementById("cards__horarios-lista-terca").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-terca">' + guardarHoraTerca[i] + '</li>');
        document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHoraTerca[i] + '"></ul>');
        for (j=0; j < guardarAtividadeHoraTerca[0].length; j++) {
            if (guardarHoraTerca[i] == guardarAtividadeHoraTerca[1][j]){
                document.getElementById(guardarHoraTerca[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-terca"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHoraTerca[0][j] + '</p><button class="cards__atividades-item-apagar" id="guardarAtividadeHoraTerca[0]['+j+']">Apagar</button></li>');
            }
        }
    }
}

function quarta() {
    document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    document.getElementById("cards__horarios-lista-quarta").innerHTML = '';
    document.getElementById("cards__horarios-lista-quinta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sexta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sabado").innerHTML = '';
    document.getElementById("cards__horarios-lista-domingo").innerHTML = '';
    document.getElementById("cards__atividades").innerHTML = '';
    for (i=0; i < guardarHoraQuarta.length; i++) {
        document.getElementById("cards__horarios-lista-quarta").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-quarta">' + guardarHoraQuarta[i] + '</li>');
        document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHoraQuarta[i] + '"></ul>');
        for (j=0; j < guardarAtividadeHoraQuarta[0].length; j++) {
            if (guardarHoraQuarta[i] == guardarAtividadeHoraQuarta[1][j]){
                document.getElementById(guardarHoraQuarta[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-quarta"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHoraQuarta[0][j] + '</p><button class="cards__atividades-item-apagar" id="guardarAtividadeHoraQuarta[0]['+j+']">Apagar</button></li>');
            }
        }
    }
}

function quinta() {
    document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    document.getElementById("cards__horarios-lista-quarta").innerHTML = '';
    document.getElementById("cards__horarios-lista-quinta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sexta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sabado").innerHTML = '';
    document.getElementById("cards__horarios-lista-domingo").innerHTML = '';
    document.getElementById("cards__atividades").innerHTML = '';
    for (i=0; i < guardarHoraQuinta.length; i++) {
        document.getElementById("cards__horarios-lista-quinta").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-quinta">' + guardarHoraQuinta[i] + '</li>');
        document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHoraQuinta[i] + '"></ul>');
        for (j=0; j < guardarAtividadeHoraQuinta[0].length; j++) {
            if (guardarHoraQuinta[i] == guardarAtividadeHoraQuinta[1][j]){
                document.getElementById(guardarHoraQuinta[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-quinta"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHoraQuinta[0][j] + '</p><button class="cards__atividades-item-apagar" id="guardarAtividadeHoraQuinta[0]['+j+']">Apagar</button></li>');
            }
        }
    }
}

function sexta() {
    document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    document.getElementById("cards__horarios-lista-quarta").innerHTML = '';
    document.getElementById("cards__horarios-lista-quinta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sexta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sabado").innerHTML = '';
    document.getElementById("cards__horarios-lista-domingo").innerHTML = '';
    document.getElementById("cards__atividades").innerHTML = '';
    for (i=0; i < guardarHoraSexta.length; i++) {
        document.getElementById("cards__horarios-lista-sexta").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-sexta">' + guardarHoraSexta[i] + '</li>');
        document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHoraSexta[i] + '"></ul>');
        for (j=0; j < guardarAtividadeHoraSexta[0].length; j++) {
            if (guardarHoraSexta[i] == guardarAtividadeHoraSexta[1][j]){
                document.getElementById(guardarHoraSexta[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-sexta"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHoraSexta[0][j] + '</p><button class="cards__atividades-item-apagar" id="guardarAtividadeHoraSexta[0]['+j+']">Apagar</button></li>');
            }
        }
    }    
}

function sabado() {
    document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    document.getElementById("cards__horarios-lista-quarta").innerHTML = '';
    document.getElementById("cards__horarios-lista-quinta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sexta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sabado").innerHTML = '';
    document.getElementById("cards__horarios-lista-domingo").innerHTML = '';
    document.getElementById("cards__atividades").innerHTML = '';
    for (i=0; i < guardarHoraSabado.length; i++) {
        document.getElementById("cards__horarios-lista-sabado").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-sabado">' + guardarHoraSabado[i] + '</li>');
        document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHoraSabado[i] + '"></ul>');
        for (j=0; j < guardarAtividadeHoraSabado[0].length; j++) {
            if (guardarHoraSabado[i] == guardarAtividadeHoraSabado[1][j]){
                document.getElementById(guardarHoraSabado[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-sabado"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHoraSabado[0][j] + '</p><button class="cards__atividades-item-apagar" id="guardarAtividadeHoraSabado[0]['+j+']">Apagar</button></li>');
            }
        }
    }    
}

function domingo() {
    document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    document.getElementById("cards__horarios-lista-quarta").innerHTML = '';
    document.getElementById("cards__horarios-lista-quinta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sexta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sabado").innerHTML = '';
    document.getElementById("cards__horarios-lista-domingo").innerHTML = '';
    document.getElementById("cards__atividades").innerHTML = '';
    for (i=0; i < guardarHoraDomingo.length; i++) {
        document.getElementById("cards__horarios-lista-domingo").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-domingo">' + guardarHoraDomingo[i] + '</li>');
        document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHoraDomingo[i] + '"></ul>');
        for (j=0; j < guardarAtividadeHoraDomingo[0].length; j++) {
            if (guardarHoraDomingo[i] == guardarAtividadeHoraDomingo[1][j]){
                document.getElementById(guardarHoraDomingo[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-domingo"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHoraDomingo[0][j] + '</p><button class="cards__atividades-item-apagar" id="guardarAtividadeHoraDomingo[0]['+j+']">Apagar</button></li>');
            }
        }
    }
}


botao_atividade.onclick = function adicionarAtividade() {
    atividade = document.querySelector("#texto-atividade");


    //verificando se o input de atividade está vazio
    if (atividade.value != '') {
        //colocando o valor de atividade no array
        arrayAtividades.push(atividade.value);

        //variavel para saber se encontrou horario igual
        var naoencontrou = 0;

        

        if (selectDia.value == 'segunda') {
            //colocando o valor de atividade de segunda na primeira linha da matriz
            guardarAtividadeHoraSegunda[0].push(atividade.value);
            //colocando o valor da hora de segunda na segunda linha da matriz
            guardarAtividadeHoraSegunda[1].push(selectHora.value);

            if (guardarHoraSegunda.length == 0) {

                guardarHoraSegunda.push(selectHora.value);
                
            } else {
                for (i=0; i < guardarHoraSegunda.length; i++) {
    
                    if (selectHora.value == guardarHoraSegunda[i]) {
                        naoencontrou = 1;
                        break;
                    }
                }
    
                if (naoencontrou == 0) {
    
                    guardarHoraSegunda.push(selectHora.value);
    
                }
            }
        }

        if (selectDia.value == 'terca') {
            //colocando o valor de atividade de terça na primeira linha da matriz
            guardarAtividadeHoraTerca[0].push(atividade.value);
            //colocando o valor da hora de terca na segunda linha da matriz
            guardarAtividadeHoraTerca[1].push(selectHora.value);

            if (guardarHoraTerca.length == 0) {

                guardarHoraTerca.push(selectHora.value);
                
            } else {
                for (i=0; i < guardarHoraTerca.length; i++) {
    
                    if (selectHora.value == guardarHoraTerca[i]) {
                        naoencontrou = 1;
                        break;
                    }
                }
    
                if (naoencontrou == 0) {
    
                    guardarHoraTerca.push(selectHora.value);
    
                }
            }
        }

        if (selectDia.value == 'quarta') {
            //colocando o valor de atividade de quarta na primeira linha da matriz
            guardarAtividadeHoraQuarta[0].push(atividade.value);
            //colocando o valor da hora de quarta na segunda linha da matriz
            guardarAtividadeHoraQuarta[1].push(selectHora.value);

            if (guardarHoraQuarta.length == 0) {

                guardarHoraQuarta.push(selectHora.value);
                
            } else {
                for (i=0; i < guardarHoraQuarta.length; i++) {
    
                    if (selectHora.value == guardarHoraQuarta[i]) {
                        naoencontrou = 1;
                        break;
                    }
                }
    
                if (naoencontrou == 0) {
    
                    guardarHoraQuarta.push(selectHora.value);
    
                }
            }
        }

        if (selectDia.value == 'quinta') {
            //colocando o valor de atividade de quinta na primeira linha da matriz
            guardarAtividadeHoraQuinta[0].push(atividade.value);
            //colocando o valor da hora de quinta na segunda linha da matriz
            guardarAtividadeHoraQuinta[1].push(selectHora.value);

            if (guardarHoraQuinta.length == 0) {

                guardarHoraQuinta.push(selectHora.value);
                
            } else {
                for (i=0; i < guardarHoraQuinta.length; i++) {
    
                    if (selectHora.value == guardarHoraQuinta[i]) {
                        naoencontrou = 1;
                        break;
                    }
                }
    
                if (naoencontrou == 0) {
    
                    guardarHoraQuinta.push(selectHora.value);
    
                }
            }
        }

        if (selectDia.value == 'sexta') {
            //colocando o valor de atividade de sexta na primeira linha da matriz
            guardarAtividadeHoraSexta[0].push(atividade.value);
            //colocando o valor da hora de sexta na segunda linha da matriz
            guardarAtividadeHoraSexta[1].push(selectHora.value);

            if (guardarHoraSexta.length == 0) {

                guardarHoraSexta.push(selectHora.value);
                
            } else {
                for (i=0; i < guardarHoraSexta.length; i++) {
    
                    if (selectHora.value == guardarHoraSexta[i]) {
                        naoencontrou = 1;
                        break;
                    }
                }
    
                if (naoencontrou == 0) {
    
                    guardarHoraSexta.push(selectHora.value);
    
                }
            }
        }

        if (selectDia.value == 'sabado') {
            //colocando o valor de atividade de sabado na primeira linha da matriz
            guardarAtividadeHoraSabado[0].push(atividade.value);
            //colocando o valor da hora de sabado na segunda linha da matriz
            guardarAtividadeHoraSabado[1].push(selectHora.value);

            if (guardarHoraSabado.length == 0) {

                guardarHoraSabado.push(selectHora.value);
                
            } else {
                for (i=0; i < guardarHoraSabado.length; i++) {
    
                    if (selectHora.value == guardarHoraSabado[i]) {
                        naoencontrou = 1;
                        break;
                    }
                }
    
                if (naoencontrou == 0) {
    
                    guardarHoraSabado.push(selectHora.value);
    
                }
            }
        }

        if (selectDia.value == 'domingo') {
            //colocando o valor de atividade de domingo na primeira linha da matriz
            guardarAtividadeHoraDomingo[0].push(atividade.value);
            //colocando o valor da hora de domingo na segunda linha da matriz
            guardarAtividadeHoraDomingo[1].push(selectHora.value);

            if (guardarHoraDomingo.length == 0) {

                guardarHoraDomingo.push(selectHora.value);
                
            } else {
                for (i=0; i < guardarHoraDomingo.length; i++) {
    
                    if (selectHora.value == guardarHoraDomingo[i]) {
                        naoencontrou = 1;
                        break;
                    }
                }
    
                if (naoencontrou == 0) {
    
                    guardarHoraDomingo.push(selectHora.value);
    
                }
            }
        }


        if(dia_segunda.className == "atividades__dia_semana-item semana-laranja atividades__dia_semana-item_selecionado"){
            segunda();
        }

        if(dia_terca.className == "atividades__dia_semana-item semana-verde-claro atividades__dia_semana-item_selecionado"){
            terca();
        }

        if(dia_quarta.className == "atividades__dia_semana-item semana-azul atividades__dia_semana-item_selecionado"){
            quarta();
        }

        if(dia_quinta.className == "atividades__dia_semana-item semana-roxo atividades__dia_semana-item_selecionado"){
            quinta();
        }

        if(dia_sexta.className == "atividades__dia_semana-item semana-azul-claro atividades__dia_semana-item_selecionado"){
            sexta();
        }

        if(dia_sabado.className == "atividades__dia_semana-item semana-rosa atividades__dia_semana-item_selecionado"){
            sabado();
        }

        if(dia_domingo.className == "atividades__dia_semana-item semana-vermelho-claro atividades__dia_semana-item_selecionado"){
            domingo();
        }
    }
    guardarHoraSegunda.sort();
    guardarHoraTerca.sort();
    guardarHoraQuarta.sort();
    guardarHoraQuinta.sort();
    guardarHoraSexta.sort();
    guardarHoraSabado.sort();
    guardarHoraDomingo.sort();


    dia_segunda.onclick = function aumentarWidth() {
        
        if(dia_segunda.className == "atividades__dia_semana-item semana-laranja") {
            dia_segunda.className = "atividades__dia_semana-item semana-laranja atividades__dia_semana-item_selecionado";
            dia_terca.className = "atividades__dia_semana-item semana-verde-claro";
            dia_quarta.className = "atividades__dia_semana-item semana-azul";
            dia_quinta.className = "atividades__dia_semana-item semana-roxo";
            dia_sexta.className = "atividades__dia_semana-item semana-azul-claro";
            dia_sabado.className = "atividades__dia_semana-item semana-rosa";
            dia_domingo.className = "atividades__dia_semana-item semana-vermelho-claro";
        } 

        segunda();
    
    }
    
    dia_terca.onclick = function mostrarAtividadeTerca() {
        if(dia_terca.className == "atividades__dia_semana-item semana-verde-claro") {
            dia_segunda.className = "atividades__dia_semana-item semana-laranja";
            dia_terca.className = "atividades__dia_semana-item semana-verde-claro atividades__dia_semana-item_selecionado";
            dia_quarta.className = "atividades__dia_semana-item semana-azul";
            dia_quinta.className = "atividades__dia_semana-item semana-roxo";
            dia_sexta.className = "atividades__dia_semana-item semana-azul-claro";
            dia_sabado.className = "atividades__dia_semana-item semana-rosa";
            dia_domingo.className = "atividades__dia_semana-item semana-vermelho-claro";
        } 
        terca();
        
    }

    dia_quarta.onclick = function aumentarWidth() {
        if(dia_quarta.className == "atividades__dia_semana-item semana-azul") {
            dia_segunda.className = "atividades__dia_semana-item semana-laranja";
            dia_terca.className = "atividades__dia_semana-item semana-verde-claro";
            dia_quarta.className = "atividades__dia_semana-item semana-azul atividades__dia_semana-item_selecionado";
            dia_quinta.className = "atividades__dia_semana-item semana-roxo";
            dia_sexta.className = "atividades__dia_semana-item semana-azul-claro";
            dia_sabado.className = "atividades__dia_semana-item semana-rosa";
            dia_domingo.className = "atividades__dia_semana-item semana-vermelho-claro";
        } 
        quarta();
        
    }

    dia_quinta.onclick = function aumentarWidth() {
        if(dia_quinta.className == "atividades__dia_semana-item semana-roxo") {
            dia_segunda.className = "atividades__dia_semana-item semana-laranja";
            dia_terca.className = "atividades__dia_semana-item semana-verde-claro";
            dia_quarta.className = "atividades__dia_semana-item semana-azul";
            dia_quinta.className = "atividades__dia_semana-item semana-roxo atividades__dia_semana-item_selecionado";
            dia_sexta.className = "atividades__dia_semana-item semana-azul-claro";
            dia_sabado.className = "atividades__dia_semana-item semana-rosa";
            dia_domingo.className = "atividades__dia_semana-item semana-vermelho-claro";
        } 
        quinta();
        
    }

    dia_sexta.onclick = function aumentarWidth() {
        if(dia_sexta.className == "atividades__dia_semana-item semana-azul-claro") {
            dia_segunda.className = "atividades__dia_semana-item semana-laranja";
            dia_terca.className = "atividades__dia_semana-item semana-verde-claro";
            dia_quarta.className = "atividades__dia_semana-item semana-azul";
            dia_quinta.className = "atividades__dia_semana-item semana-roxo";
            dia_sexta.className = "atividades__dia_semana-item semana-azul-claro atividades__dia_semana-item_selecionado";
            dia_sabado.className = "atividades__dia_semana-item semana-rosa";
            dia_domingo.className = "atividades__dia_semana-item semana-vermelho-claro";
        } 
        sexta();
        
    }

    dia_sabado.onclick = function aumentarWidth() {
        if(dia_sabado.className == "atividades__dia_semana-item semana-rosa") {
            dia_segunda.className = "atividades__dia_semana-item semana-laranja";
            dia_terca.className = "atividades__dia_semana-item semana-verde-claro";
            dia_quarta.className = "atividades__dia_semana-item semana-azul";
            dia_quinta.className = "atividades__dia_semana-item semana-roxo";
            dia_sexta.className = "atividades__dia_semana-item semana-azul-claro";
            dia_sabado.className = "atividades__dia_semana-item semana-rosa atividades__dia_semana-item_selecionado";
            dia_domingo.className = "atividades__dia_semana-item semana-vermelho-claro";
        } 
        sabado();
        
    }
    
    dia_domingo.onclick = function aumentarWidth() {
        if(dia_domingo.className == "atividades__dia_semana-item semana-vermelho-claro") {
            dia_segunda.className = "atividades__dia_semana-item semana-laranja";
            dia_terca.className = "atividades__dia_semana-item semana-verde-claro";
            dia_quarta.className = "atividades__dia_semana-item semana-azul";
            dia_quinta.className = "atividades__dia_semana-item semana-roxo";
            dia_sexta.className = "atividades__dia_semana-item semana-azul-claro";
            dia_sabado.className = "atividades__dia_semana-item semana-rosa";
            dia_domingo.className = "atividades__dia_semana-item semana-vermelho-claro atividades__dia_semana-item_selecionado";
        } 
        domingo();
        
    }
    

    //---------------------------------------------------------




   
        
    
        
}

/*document.querySelectorAll(".cards__atividades-item-apagar").forEach( function(button) {
    button.addEventListener("click", function(event) {
    const el = event.target || event.srcElement;
    const id = el.getAttribute("id");
    console.log(id)
    });

});*/

botao_excluir_dia.onclick = function apagarAtividadedia() {

    if(dia_segunda.className == "atividades__dia_semana-item semana-laranja atividades__dia_semana-item_selecionado") {
        for (i=0; i<guardarHoraSegunda.length; i++) {
            document.getElementById(guardarHoraSegunda[i]).innerHTML = '';
        }
        guardarAtividadeHoraSegunda[0].length=0;
        guardarAtividadeHoraSegunda[1].length=0;
        arrayAtividades.length = 0;
        guardarHoraSegunda.length = 0;
        document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
    }

    if(dia_terca.className == "atividades__dia_semana-item semana-verde-claro atividades__dia_semana-item_selecionado") {
        for (i=0; i<guardarHoraTerca.length; i++) {
            document.getElementById(guardarHoraTerca[i]).innerHTML = '';
        }
        guardarAtividadeHoraTerca[0].length=0;
        guardarAtividadeHoraTerca[1].length=0;
        arrayAtividades.length = 0;
        guardarHoraTerca.length = 0;
        document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    }

    if(dia_quarta.className == "atividades__dia_semana-item semana-azul atividades__dia_semana-item_selecionado") {
        for (i=0; i<guardarHoraQuarta.length; i++) {
            document.getElementById(guardarHoraQuarta[i]).innerHTML = '';
        }
        guardarAtividadeHoraQuarta[0].length=0;
        guardarAtividadeHoraQuarta[1].length=0;
        arrayAtividades.length = 0;
        guardarHoraQuarta.length = 0;
        document.getElementById("cards__horarios-lista-quarta").innerHTML = '';
    }

    if(dia_quinta.className == "atividades__dia_semana-item semana-roxo atividades__dia_semana-item_selecionado") {
        for (i=0; i<guardarHoraQuinta.length; i++) {
            document.getElementById(guardarHoraQuinta[i]).innerHTML = '';
        }
        guardarAtividadeHoraQuinta[0].length=0;
        guardarAtividadeHoraQuinta[1].length=0;
        arrayAtividades.length = 0;
        guardarHoraQuinta.length = 0;
        document.getElementById("cards__horarios-lista-quinta").innerHTML = '';
    }

    if(dia_sexta.className == "atividades__dia_semana-item semana-azul-claro atividades__dia_semana-item_selecionado") {
        for (i=0; i<guardarHoraSexta.length; i++) {
            document.getElementById(guardarHoraSexta[i]).innerHTML = '';
        }
        guardarAtividadeHoraSexta[0].length=0;
        guardarAtividadeHoraSexta[1].length=0;
        arrayAtividades.length = 0;
        guardarHoraSexta.length = 0;
        document.getElementById("cards__horarios-lista-sexta").innerHTML = '';
    }

    if(dia_sabado.className == "atividades__dia_semana-item semana-rosa atividades__dia_semana-item_selecionado") {
        for (i=0; i<guardarHoraSabado.length; i++) {
            document.getElementById(guardarHoraSabado[i]).innerHTML = '';
        }
        guardarAtividadeHoraSabado[0].length=0;
        guardarAtividadeHoraSabado[1].length=0;
        arrayAtividades.length = 0;
        guardarHoraSabado.length = 0;
        document.getElementById("cards__horarios-lista-sabado").innerHTML = '';
    }

    if(dia_domingo.className == "atividades__dia_semana-item semana-vermelho-claro atividades__dia_semana-item_selecionado") {
        for (i=0; i<guardarHoraDomingo.length; i++) {
            document.getElementById(guardarHoraDomingo[i]).innerHTML = '';
        }
        guardarAtividadeHoraDomingo[0].length=0;
        guardarAtividadeHoraDomingo[1].length=0;
        arrayAtividades.length = 0;
        guardarHoraDomingo.length = 0;
        document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    }
    
}


excluirLocalStorage.onclick = function apagarDados() {
    localStorage.clear()
    
    document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    document.getElementById("cards__horarios-lista-quarta").innerHTML = '';
    document.getElementById("cards__horarios-lista-quinta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sexta").innerHTML = '';
    document.getElementById("cards__horarios-lista-sabado").innerHTML = '';
    document.getElementById("cards__horarios-lista-domingo").innerHTML = '';
    document.getElementById("cards__atividades").innerHTML = '';

    
    guardarAtividadeHoraSegunda[0].length=0;
    guardarAtividadeHoraSegunda[1].length=0;
    arrayAtividades.length = 0;
    guardarHoraSegunda.length = 0;



    
    guardarAtividadeHoraTerca[0].length=0;
    guardarAtividadeHoraTerca[1].length=0;
    arrayAtividades.length = 0;
    guardarHoraTerca.length = 0;
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';



    
    guardarAtividadeHoraQuarta[0].length=0;
    guardarAtividadeHoraQuarta[1].length=0;
    arrayAtividades.length = 0;
    guardarHoraQuarta.length = 0;
    document.getElementById("cards__horarios-lista-quarta").innerHTML = '';



    
    guardarAtividadeHoraQuinta[0].length=0;
    guardarAtividadeHoraQuinta[1].length=0;
    arrayAtividades.length = 0;
    guardarHoraQuinta.length = 0;
    document.getElementById("cards__horarios-lista-quinta").innerHTML = '';



    
    guardarAtividadeHoraSexta[0].length=0;
    guardarAtividadeHoraSexta[1].length=0;
    arrayAtividades.length = 0;
    guardarHoraSexta.length = 0;
    document.getElementById("cards__horarios-lista-sexta").innerHTML = '';



    
    guardarAtividadeHoraSabado[0].length=0;
    guardarAtividadeHoraSabado[1].length=0;
    arrayAtividades.length = 0;
    guardarHoraSabado.length = 0;
    document.getElementById("cards__horarios-lista-sabado").innerHTML = '';



    
    guardarAtividadeHoraDomingo[0].length=0;
    guardarAtividadeHoraDomingo[1].length=0;
    arrayAtividades.length = 0;
    guardarHoraDomingo.length = 0;
    document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    
}

salvarLocalStorage.onclick = function salvarLocalStorage() {
     
    localStorage.setItem("arraySegunda", JSON.stringify(guardarAtividadeHoraSegunda));
    localStorage.setItem("arrayTerca", JSON.stringify(guardarAtividadeHoraTerca));
    localStorage.setItem("arrayQuarta", JSON.stringify(guardarAtividadeHoraQuarta));
    localStorage.setItem("arrayQuinta", JSON.stringify(guardarAtividadeHoraQuinta));
    localStorage.setItem("arraySexta", JSON.stringify(guardarAtividadeHoraSexta));
    localStorage.setItem("arraySabado", JSON.stringify(guardarAtividadeHoraSabado));
    localStorage.setItem("arrayDomingo", JSON.stringify(guardarAtividadeHoraTerca));
    localStorage.setItem("horaSegunda", JSON.stringify(guardarHoraSegunda));
    localStorage.setItem("horaTerca", JSON.stringify(guardarHoraTerca));
    localStorage.setItem("horaQuarta", JSON.stringify(guardarHoraQuarta));
    localStorage.setItem("horaQuinta", JSON.stringify(guardarHoraQuinta));
    localStorage.setItem("horaSexta", JSON.stringify(guardarHoraSexta));
    localStorage.setItem("horaSabado", JSON.stringify(guardarHoraSabado));
    localStorage.setItem("horaDomingo", JSON.stringify(guardarHoraDomingo));
    
}


//botaoApagar.onclick = function apagarAtividade() {
//    alert(this.id);
//}

