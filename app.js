// Desafío: Amigo secreto
let amigo = [];

// función para agregar amigos
function agregarAmigoSecreto(){ 
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value;
   
    if(!nombre){
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if(amigo.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    amigo.push(nombre); 
    inputAmigo.value = "";
    inputAmigo.focus();
    mostrarAmigos();

};

// función para mostrar amigos
function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i=0; i<amigo.length; i++){
        let elemento = document.createElement("li");
        elemento.textContent = amigo[i];
        listaAmigos.appendChild(elemento);
    };
};

// función para sortear amigos
function sortearAmigo() {
    if(amigo.length < 2){
        alert("Por favor, agrega al menos dos amigos.");
        return;
    }
    let amigoSorteado = amigo [Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

};