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
    document.getElementById('amigo').value = ''; 
    }
    
}
function sortearAmigo() {

}