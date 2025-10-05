
let chave = "85de8733f10cdbfa4486add0ea80d570"
async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid" + chave)
        .then(resposta => resposta.json())
    console.log(dados)
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value;


    buscarCidade(cidade)
}