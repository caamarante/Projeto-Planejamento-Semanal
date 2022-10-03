var dia_segunda = document.querySelector("#dia-segunda");
var dia_terca = document.querySelector("#dia-terca");
var dia_quarta = document.querySelector("#dia-quarta");
var dia_quinta = document.querySelector("#dia-quinta");
var dia_sexta = document.querySelector("#dia-sexta");
var dia_sabado = document.querySelector("#dia-sabado");
var dia_domingo = document.querySelector("#dia-domingo");


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
}

dia_terca.onclick = function aumentarWidth() {
    if(dia_terca.className == "atividades__dia_semana-item semana-verde-claro") {
        dia_segunda.className = "atividades__dia_semana-item semana-laranja";
        dia_terca.className = "atividades__dia_semana-item semana-verde-claro atividades__dia_semana-item_selecionado";
        dia_quarta.className = "atividades__dia_semana-item semana-azul";
        dia_quinta.className = "atividades__dia_semana-item semana-roxo";
        dia_sexta.className = "atividades__dia_semana-item semana-azul-claro";
        dia_sabado.className = "atividades__dia_semana-item semana-rosa";
        dia_domingo.className = "atividades__dia_semana-item semana-vermelho-claro";
    } 
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
}