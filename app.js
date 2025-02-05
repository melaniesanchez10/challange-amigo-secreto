// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let amigoNombre = document.getElementById('amigo').value;
    amigos.push(amigoNombre);
    console.log(amigos);
    document.getElementById('amigo').value = ''; 
}
function sortearAmigo() {

}