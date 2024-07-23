//tomamos los elementos
const inputTarea = document.getElementById("tarea");
const btn = document.getElementById("agregar");
const listado = document.getElementById("listado");
const cantidad = document.getElementById("cantidad");

//variable que lleva la cantidad de tareas
let total = 0;

//funcion que agrega la tarea al listado
btn.onclick = function() {
    
    //controlamos si el campo esta vacio
    if(inputTarea.value == "") {
        return;
    }

    //tomamos el valor del campo
    let elemento = inputTarea.value;

    //creo un elemento li
    let li = document.createElement("li");
    li.textContent = elemento;

    //agrego el li al listado
    listado.appendChild(li);

    //incremento la cantidad de tareas
    total++;
    cantidad.innerHTML = total;

    //agregamos el boton eliminar a cada elemente li
    let btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);

    //agregamos la funcionalidad que elimina la tarea del listado
    btnEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    //Limpiamos el campo input
    inputTarea.value = ""
}