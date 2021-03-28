var agregarBoton, cancelarTarea;

function saveLocalStorage () {
    let todo =  $("#lista").html();
    console.log(todo);
    localStorage.setItem("todo" , todo);
}

function rescueLocalStorge(){
    $("#lista").append(localStorage.getItem ("todo"));
}

function agregar(){
    let valor = $('#tarea').val();
    console.log(valor);
    if( valor != '' ){
        $("#lista").append  (`
                            <div class="lista__tarea">
                                <div onclick = "this.parentElement.remove();saveLocalStorage();" class="lista__tarea__cancelar">
                                    <i " class="fas fa-window-close"></i>
                                </div>
                                <div class="lista__tarea__texto">
                                    <p class="lista__tarea__texto__parrafo">${valor}</p>
                                </div>
                            </div>
                            `);
    }
    else{
        alert("Ingresa tarea");
    }
    saveLocalStorage();
}


$(document).ready(function (){
    $(".agregar__boton").click(agregar);

    $(".borrar__todo__boton").click(()=>{
        $(".lista__tarea").remove();
    });

    rescueLocalStorge();

    
})
