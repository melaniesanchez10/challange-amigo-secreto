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
    //const amigos = ["Carlos", "Ana", "Luis", "Marta", "José", "Laura"];

  // Validar que el array amigos no esté vacío
  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "No hay amigos disponibles para sortear.";
    return;
  }

  // Generar un índice aleatorio entre 0 y el tamaño del array
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre del amigo seleccionado
  let amigoSeleccionado = amigos[indiceAleatorio];

  // Mostrar el resultado
  document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSeleccionado}`;
}

