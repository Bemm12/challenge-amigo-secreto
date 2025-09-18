

let nombresDeAmigos = [];  
let juegoFinalizado = false;

function agregarAmigo() {
  if (juegoFinalizado) return; 
  const input = document.getElementById("amigo");
  const amigo = input.value.trim();

  if (amigo === "") {
    alert("Por favor ingresa un nombre válido, no se permite el campo vacío.");
    return;
  }

  // Validar duplicados
  if (nombresDeAmigos.includes(amigo)) {
    alert("Ese nombre ya fue agregado.");
    input.value = "";
    return;
  }

  nombresDeAmigos.push(amigo);
  mostrarLista();
  input.value = ""; 
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nombresDeAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.classList.add("eliminar");
    btnEliminar.onclick = () => eliminarNombre(index);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

function eliminarNombre(index) {
  nombresDeAmigos.splice(index, 1); 
  mostrarLista();
}

function sortearAmigo() {
  const btnSortear = document.getElementById("btnSortear");

  if (!juegoFinalizado) {
    if (nombresDeAmigos.length === 0) {
      alert("La lista está vacía. Agrega al menos un nombre.");
      return;
    }

    const indice = Math.floor(Math.random() * nombresDeAmigos.length);
    const seleccionado = nombresDeAmigos[indice];
    document.getElementById("resultado").textContent =
      "🎉 El amigo secreto es: " + seleccionado;

    // Cambiar estado del juego
    juegoFinalizado = true;
    btnSortear.textContent = "Iniciar un nuevo sorteo";

  } else {
    // Reiniciar el juego
    nombresDeAmigos = [];
    juegoFinalizado = false;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
    btnSortear.textContent = "Sortear Amigo";
  }
}
