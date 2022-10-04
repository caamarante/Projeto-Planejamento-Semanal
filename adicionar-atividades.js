var objDiv = document.getElementById("scroll");
objDiv.scrollLeft = objDiv.scrollWidth;

var arrayAtividades = [];
var guardarAtividadeHora = [[],
                            [],
                            []];
var guardarHora = [];

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

var maisDeUmHorario = 0;



botao_atividade.onclick = function adicionarAtividade() {
    atividade = document.querySelector("#texto-atividade");

        
    document.getElementById("cards__horarios-lista").innerHTML = '';
    document.getElementById("cards__atividades").innerHTML = '';


    //verificando se o input de atividade está vazio
    if (atividade.value != '') {
        //colocando o valor de atividade no array
        arrayAtividades.push(atividade.value);
        //colocando o valor de atividade na primeira linha da matriz
        guardarAtividadeHora[0].push(atividade.value);
        
        
        //colocando o valor da hora na segunda linha da matriz
        guardarAtividadeHora[1].push(selectHora.value);
        
        //colocando o valor do dia na terceira linha da matriz
        guardarAtividadeHora[2].push(selectDia.value);

        //variavel para saber se encontrou horario igual
        var naoencontrou = 0;

        //pegando a primeira hora selecionada
        if (guardarHora.length == 0) {

            guardarHora.push(selectHora.value);
            
        } else {
            for (i=0; i < guardarHora.length; i++) {

                if (selectHora.value == guardarHora[i]) {
                    naoencontrou = 1;
                    break;
                }
            }

            if (naoencontrou == 0) {

                guardarHora.push(selectHora.value);

            }

                
        }
        
    }


    //---------------------------------------------------------


    console.log(guardarAtividadeHora);

        guardarHora.sort();
        console.log(guardarHora);

        if(dia_segunda.className == "atividades__dia_semana-item semana-laranja atividades__dia_semana-item_selecionado"){
            for (i=0; i < guardarHora.length; i++) {
                document.getElementById("cards__horarios-lista").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-segunda">' + guardarHora[i] + '</li>');
                document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHora[i] + '"></ul>');
                for (j=0; j < guardarAtividadeHora[0].length; j++) {
                    if (guardarHora[i] == guardarAtividadeHora[1][j] && guardarAtividadeHora[2][j] == 'segunda'){
                        //console.log(guardarAtividadeHora[0][j]);
                        document.getElementById(guardarHora[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-segunda"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][j] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                    }
                }
            }
        }

        if(dia_terca.className == "atividades__dia_semana-item semana-verde-claro atividades__dia_semana-item_selecionado"){
            for (i=0; i < guardarHora.length; i++) {
                document.getElementById("cards__horarios-lista").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-terca">' + guardarHora[i] + '</li>');
                document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHora[i] + '"></ul>');
                for (j=0; j < guardarAtividadeHora[0].length; j++) {
                    if (guardarHora[i] == guardarAtividadeHora[1][j] && guardarAtividadeHora[2][j] == 'segunda'){
                        //console.log(guardarAtividadeHora[0][j]);
                        document.getElementById(guardarHora[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-terca"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][j] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                    }
                }
            }
        }

        if(dia_quarta.className == "atividades__dia_semana-item semana-azul atividades__dia_semana-item_selecionado"){
            for (i=0; i < guardarHora.length; i++) {
                document.getElementById("cards__horarios-lista").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-quarta">' + guardarHora[i] + '</li>');
                document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHora[i] + '"></ul>');
                for (j=0; j < guardarAtividadeHora[0].length; j++) {
                    if (guardarHora[i] == guardarAtividadeHora[1][j] && guardarAtividadeHora[2][j] == 'segunda'){
                        //console.log(guardarAtividadeHora[0][j]);
                        document.getElementById(guardarHora[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-quarta"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][j] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                    }
                }
            }
        }
        
        if(dia_quinta.className == "atividades__dia_semana-item semana-roxo atividades__dia_semana-item_selecionado"){
            for (i=0; i < guardarHora.length; i++) {
                document.getElementById("cards__horarios-lista").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-quinta">' + guardarHora[i] + '</li>');
                document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHora[i] + '"></ul>');
                for (j=0; j < guardarAtividadeHora[0].length; j++) {
                    if (guardarHora[i] == guardarAtividadeHora[1][j] && guardarAtividadeHora[2][j] == 'segunda'){
                        //console.log(guardarAtividadeHora[0][j]);
                        document.getElementById(guardarHora[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-quinta"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][j] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                    }
                }
            }
        }
        
        if(dia_sexta.className == "atividades__dia_semana-item semana-azul-claro atividades__dia_semana-item_selecionado"){
            for (i=0; i < guardarHora.length; i++) {
                document.getElementById("cards__horarios-lista").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-sexta">' + guardarHora[i] + '</li>');
                document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHora[i] + '"></ul>');
                for (j=0; j < guardarAtividadeHora[0].length; j++) {
                    if (guardarHora[i] == guardarAtividadeHora[1][j] && guardarAtividadeHora[2][j] == 'segunda'){
                        //console.log(guardarAtividadeHora[0][j]);
                        document.getElementById(guardarHora[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-sexta"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][j] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                    }
                }
            }
        }
        
        if(dia_sabado.className == "atividades__dia_semana-item semana-rosa atividades__dia_semana-item_selecionado"){
            for (i=0; i < guardarHora.length; i++) {
                document.getElementById("cards__horarios-lista").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-sabado">' + guardarHora[i] + '</li>');
                document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHora[i] + '"></ul>');
                for (j=0; j < guardarAtividadeHora[0].length; j++) {
                    if (guardarHora[i] == guardarAtividadeHora[1][j] && guardarAtividadeHora[2][j] == 'segunda'){
                        //console.log(guardarAtividadeHora[0][j]);
                        document.getElementById(guardarHora[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-sabado"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][j] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                    }
                }
            }
        }
        
        if(dia_domingo.className == "atividades__dia_semana-item semana-vermelho-claro atividades__dia_semana-item_selecionado"){
            for (i=0; i < guardarHora.length; i++) {
                document.getElementById("cards__horarios-lista").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item cards__horarios-item-domingo">' + guardarHora[i] + '</li>');
                document.getElementById("cards__atividades").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="' + guardarHora[i] + '"></ul>');
                for (j=0; j < guardarAtividadeHora[0].length; j++) {
                    if (guardarHora[i] == guardarAtividadeHora[1][j] && guardarAtividadeHora[2][j] == 'segunda'){
                        //console.log(guardarAtividadeHora[0][j]);
                        document.getElementById(guardarHora[i]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag cards__atividades-item-tag-domingo"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][j] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                    }
                }
            }
        }
        
        //------------------------
        console.log(selectDia.value)

    /*
        if(dia_segunda.className == "atividades__dia_semana-item semana-laranja atividades__dia_semana-item_selecionado") {
            
            for(i=0; i < guardarAtividadeHora[2].length; i++) {
                
                if (guardarAtividadeHora[2][i] == 'segunda') {
                    for (j=0; j < guardarHora.length; j++) {
                        
                        if (guardarHora[i] == guardarAtividadeHora[1][j]) {
                            maisDeUmHorario = 0;
                            if(maisDeUmHorario>1) {
                                document.getElementById("cards__horarios-lista-segunda").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item-conflito" id="'+guardarHora[j]+'">' + guardarHora[j] + '</li>');
                                document.getElementById("cards__atividades-segunda").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="segunda' + guardarHora[j] + '"></ul>');
                            } else {
                                document.getElementById("cards__horarios-lista-segunda").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item" id="'+guardarHora[j]+'">' + guardarHora[j] + '</li>');
                                document.getElementById("cards__atividades-segunda").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="segunda' + guardarHora[j] + '"></ul>');
                            }
                            
                            for (k=0; k < guardarAtividadeHora[0].length; k++) {
                                
                                if (guardarHora[j] == guardarAtividadeHora[1][k] && guardarAtividadeHora[2][k] == 'segunda') {
                                    maisDeUmHorario++;
                                    if(maisDeUmHorario>1) {
                                        document.getElementById(guardarHora[j]).insertAdjacentHTML("beforeend", '<span class="cards__horarios-conflito"><div class="conflito-elipse"></div><div class="conflito-linha"></div></span>');
                                        document.getElementById('segunda'+guardarHora[j]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag-conflito"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][k] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                                    } else {
                                        document.getElementById('segunda'+guardarHora[j]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][k] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                                    }
                                    
                                    
                                }
                            }
                        }
                    }
                    
                }
            }
            
        }

            
            if(dia_terca.className == "atividades__dia_semana-item semana-verde-claro atividades__dia_semana-item_selecionado") {
                document.getElementById("cards__horarios-lista-segunda").innerHTML = '';
                document.getElementById("cards__atividades-terca").innerHTML = '';
                for(i=0; i < guardarAtividadeHora[2].length; i++) {
                    
                    if (guardarAtividadeHora[2][i] == 'terca') {
                        for (j=0; j < guardarHora.length; j++) {
                            console.log('console.log(guardarAtividadeHora[2][i])'+ guardarAtividadeHora[2][i])
                            console.log('guardarAtividadeHora[1][i]' + guardarAtividadeHora[1][i])
                            console.log('guardarHora[j]' + guardarHora[j])
                            if (guardarHora[j] == guardarAtividadeHora[1][i]) {
                                document.getElementById("cards__horarios-lista-terca").insertAdjacentHTML("beforeend", '<li class="cards__horarios-item" id="'+guardarHora[j]+'">' + guardarHora[j] + '</li>');
                                document.getElementById("cards__atividades-terca").insertAdjacentHTML("beforeend", '<ul class="cards__atividades__lista" id="terca' + guardarHora[j] + '"></ul>');
                                for (k=0; k < guardarAtividadeHora[0].length; k++) {
                                    if (guardarHora[j] == guardarAtividadeHora[1][k] && guardarAtividadeHora[2][k] == 'terca') {
                                        //console.log(guardarAtividadeHora[0][j]);
                                        document.getElementById('terca'+guardarHora[j]).insertAdjacentHTML("beforeend",'<li class="cards__atividades-item"><div class="cards__atividades-item-tag"></div><p class="cards__atividades-item-texto">' + guardarAtividadeHora[0][k] + '</p><buttton class="cards__atividades-item-apagar">Apagar</buttton></li>');
                                        
                                    }
                                }
                                if(maisDeUmHorario>1) {
                                    document.getElementById(guardarHora[j]).insertAdjacentHTML("beforeend", '<span class="cards__horarios-conflito"><div class="conflito-elipse"></div><div class="conflito-linha"></div></span>');

                                }
                            }
                        }
                        
                    }
                }
                
            }*/
        
        
        
}


botao_excluir_dia.onclick = function apagarAtividadedia() {

    if(dia_segunda.className == "atividades__dia_semana-item semana-laranja atividades__dia_semana-item_selecionado") {
        for (i=0; i<guardarHora.length; i++) {
            document.getElementById(guardarHora[i]).innerHTML = '';
        }
        guardarAtividadeHora[0].length=0;
        guardarAtividadeHora[1].length=0;
        arrayAtividades.length = 0;
        guardarHora.length = 0;
        document.getElementById("cards__horarios-lista").innerHTML = '';
    }

    if(dia_terca.className == "atividades__dia_semana-item semana-verde-claro atividades__dia_semana-item_selecionado") {
        for (i=0; i<guardarHora.length; i++) {
            document.getElementById('terca'+guardarHora[i]).innerHTML = '';
        }
        guardarAtividadeHora[0].length=0;
        guardarAtividadeHora[1].length=0;
        arrayAtividades.length = 0;
        guardarHora.length = 0;
        document.getElementById("cards__horarios-lista-terca").innerHTML = '';
    }

    
}


