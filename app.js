let listaDeAmigos = [];

let nomeInput = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
    let nome = nomeInput.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome."); 
    } else {
        listaDeAmigos.push(nome); 
        atualizarListaHTML(); 
        nomeInput.value = ""; 
    }
}

function atualizarListaHTML() {
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let novoAmigo = document.createElement("li");
        novoAmigo.textContent = listaDeAmigos[i];
        listaAmigos.appendChild(novoAmigo);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear."); 
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[indiceAleatorio];
        resultado.innerHTML = "<li>" + "Amigo Secreto: " + amigoSorteado + "</li>";
    }
}