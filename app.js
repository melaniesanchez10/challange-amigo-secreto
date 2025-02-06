// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let amigoNombre = document.getElementById('amigo').value;
    if(amigoNombre === ""){
        alert ("Por favor, inserte un nombre.");

    } else if (!isNaN (amigoNombre)){
        alert ("No puedes insertar un número. Por favor, inserte un nombre.");
        document.getElementById('amigo').value = ''; 
    }
     else {
        amigos.push(amigoNombre);
        console.log(amigos);
        listaAmigo()
    document.getElementById('amigo').value = ''; 
    }
    
}
function listaAmigo(){
    let listaAmigo = document.getElementById('listaAmigos');
    listaAmigo.innerHTML=""; //Limpia la lista de la etiqueta <ul>
    for(let i = 0; i<amigos.length; i++){ //Todos los arreglos comienzan en 0
        listaAmigo.innerHTML+="<li>"+amigos[i]+"</li>";//Aqui se va a volver a agregar los li.

    }
    
}
function sortearAmigo() {

}