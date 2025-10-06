let chave = "85de8733f10cdbfa4486add0ea80d570"

function colocarNaTela(dados) {

    if (!dados || (dados.cod && Number(dados.cod) !== 200)) {
        document.querySelector(".cidade").innerHTML = "Cidade não encontrada";
        document.querySelector(".primeirop").innerHTML = "-";
        document.querySelector(".segundop").innerHTML = "";
        document.querySelector(".terceirop").innerHTML = "";
        return;
    }

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".primeirop").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".segundop").innerHTML = dados.weather[0].description
    document.querySelector(".terceirop").innerHTML = `Umidade ${dados.main.humidity}%`;
    document.querySelector(".vento").innerHTML = `Vento ${Math.round(dados.wind.speed * 3.6)} km/h`;

}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&units=metric&lang=pt_br")
        .then(resposta => resposta.json())
    console.log(dados);
    colocarNaTela(dados)

}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade)
}