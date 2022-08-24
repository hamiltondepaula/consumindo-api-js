function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario){
    console.log(usuario)
    //cria o elemento linha
    linha = document.createElement("tr");
    //cria a coluna de id e de nome
    tdId = document.createElement("td");
    tdNome = document.createElement("td");

    tdId.innerHTML = usuario.id;
    tdNome.innerHTML = usuario.name;

    //adiciona à linha. Como um filho
    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;

}

function main(){
    //recebemos primeiro em "data", depois confirmamos (passamos) para JSON
    let data = fazGet("https://rickandmortyapi.com/api/character/");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    console.log(usuarios.results)
    usuarios.results.forEach(element => {
        let linha = criaLinha(element); 
        tabela.appendChild(linha); 
    });
    //para cada usuario
        //criar uma linha
        //adicionar na tabela

}

main()