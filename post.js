function fazPost(url, body){
    console.log(body)   //para ver se está recebendo o objeto a ser enviado ao servidor
    let request = new XMLHttpRequest();
    request.open("POST", url, true)
    request.setRequestHeader("content-type", "application/json") //cabeçalho dizendo o que estamos enviando.
    request.send(JSON.stringify(body)) //envio propriamente dito, enquanto transforma em JSON

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastraUsuario(){
    event.preventDefault() //para não recarregar quando submit.
    let url = "https://rickandmortyapi.com/api/character/";

    //pegar as informações do formulário
    let nome = document.getElementById('nome').value;
    let email =  document.getElementById('email').value;
    //console.log(nome, email) //para ver se está pegando os elementos do form

    let body = {
        "name": nome,
        "email": email
    }

    //o body é o objeto (em forma JSON) passado para o servidor.
    fazPost(url, body)
}