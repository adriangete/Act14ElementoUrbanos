let bGrabar = document.getElementById("grabarRegistro");
bGrabar.addEventListener("click", grabar, false);
let bSiguiente = document.getElementById("registroSiguiente");
bSiguiente.addEventListener("click", siguiente, false);
let bAnterior = document.getElementById("registroAnterior");
bAnterior.addEventListener("click", anterior, false);
var bBorrar=document.getElementById("borrar");
bBorrar.addEventListener("click", borrar, false);
var bActualizar=document.getElementById("actualizar");
bActualizar.addEventListener("click", modificar, false);
var bPrimero=document.getElementById("primero");
bPrimero.addEventListener("click", visualizarPrimero, false);
var bUltimo=document.getElementById("ultimo");
bUltimo.addEventListener("click", visualizarUltimo, false);

function grabar() {
    grabarRegistro = true;
    nuevo = true;
    //'"' + "IdVecino" + '":' + '"' + IdVecino.value + '",'
    // split guarda en un array los valores de un string separados por algún caracter
    cfc = cFecha.value.split("-");
    cFecha.value = cfc[2] + "-" + cfc[1] + "-" + cfc[0]
    let datosElementoUrbano = '"' + "Tipo" + '":' + '"' + cTipo.value + '",'
        + '"' + "Cantidad" + '":' + '"' + cCantidad.value + '",'
        + '"' + "Hora" + '":' + '"' + cHora.value + '",'
        + '"' + "Fecha" + '":' + '"' + cFecha.value + '",'
        + '"' + "Latitud" + '":' + '"' + cLatitud.value + '",'
        + '"' + "Longitud" + '":' + '"' + cLongitud.value + '",'
        + '"' + "Direccion" + '":' + '"' + cDireccion.value + '",'
        + '"' + "Descripcion" + '":' + '"' + cDescripcion.value + '"';

    let ajaxrequest = new XMLHttpRequest();
    /*if (grabarRegistro === true) {
        if (nuevo === true) {*/
    let jdatoselemento = "{" + datosElementoUrbano + "}";
    var envio = "Todo=" + jdatoselemento;

    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/grabarElementoUrbano.php", true);
    /*} else{
        datosElementoUrbano = '"' + "Id" + '":' + '"' + cId.value + '",' + datosElementoUrbano;
        let jdatoselemento = "{" + datosElementoUrbano + "}";
        var envio = "Todo=" + jdatoselemento;
        ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/grabarElementoUrbano.php", true);
    }
} else{
    datosElementoUrbano = '"' + "Id" + '":' + '"' + cId.value + '"';
    let jdatoselemento = "{" + datosElementoUrbano + "}";
    var envio = "Todo=" + jdatoselemento;
    //    alert(envio)
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/borraElementoUrbano.php", true);
}*/

    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.onreadystatechange = function () {
        alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            let datosLeidos = ajaxrequest.responseText;
            console.log("Datos Recibidos  :" + datosLeidos);
        }
    };
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //alert(envio)
    ajaxrequest.send(envio);
}
function siguiente() {
    /*nuevo = false;
    grabarRegistro = true;*/
    alert(cId.value);
    if (cId.value == "") {
        cId.value = 0;
    }
    //alert(cId.value);
    var condicion = ">";
    // Conicion id > o <
    var jdatoselemento = cId.value + "," + condicion;
    let envio = "Envio=" + jdatoselemento;
    alert(envio);
    var ajaxrequest = new XMLHttpRequest();

    // alert("Siguiente Anterior")
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/siguienteAnterior.php", true);

    ajaxrequest.onreadystatechange = function () {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText;
            mostrar_consulta(datosLeidos);
            console.log("Datos Recibidos  :" + datosLeidos);
        }
    };

    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.send(envio);
}
function anterior() {
    /*nuevo = false;
    grabarRegistro = true;*/
    alert(cId.value);
    if (cId.value == "") {
        cId.value = 1;
    }
    //alert(cId.value);
    var condicion = "<";
    // Conicion id > o <
    var jdatoselemento = cId.value + "," + condicion;
    let envio = "Envio=" + jdatoselemento;
    //alert(envio);
    var ajaxrequest = new XMLHttpRequest();

    // alert("Siguiente Anterior")
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/siguienteAnterior.php", true);

    ajaxrequest.onreadystatechange = function () {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText;
            mostrar_consulta(datosLeidos);
            console.log("Datos Recibidos  :" + datosLeidos);
        }
    };

    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.send(envio);
}

function borrar(){
    var ajaxrequest = new XMLHttpRequest();
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/borrarElementoUrbano.php", true);
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.onreadystatechange = function ()
    {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText;
            console.log(datosLeidos);
            visualizarPrimero();
        }
    };
    
    let id=cId.value;
    console.log(id);
    let envio='Envio='+id;

    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.send(envio);        
}
function modificar(){

    /*cfc= cFecha.value.split("-");
    let fecha= cfc[2]+"-"+cfc[1]+"-"+cfc[0];*/
    let id=cId.value;
    var datosElementoUrbano = id+','+ cTipo.value +','+ cCantidad.value +','
    + cHora.value + ','+ cFecha.value +','+ cLatitud.value +','+ cLongitud.value +','+ cDireccion.value +','+ cDescripcion.value;

    console.log(datosElementoUrbano)
    var envio = "Envio=" + datosElementoUrbano;
    var ajaxrequest = new XMLHttpRequest();

            ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/modificarElementoUrbano.php", true);
            ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajaxrequest.onreadystatechange = function ()
            {
                //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
                if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
                    var datosLeidos = ajaxrequest.responseText;
                    datos_consulta=datosLeidos;
                    console.log(datos_consulta);
                    
                }
            };
            ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajaxrequest.send(envio);    
            visualizarPrimero();
}
function visualizarPrimero(){
    
    var ajaxrequest = new XMLHttpRequest();
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/primerElementoUrbano.php", true);
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.onreadystatechange = function ()
    {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText;
           mostrar_consulta(datosLeidos);
           console.log("Datos Recibidos  :" + datosLeidos);
        }
    };
    let jdatoselemento="ASC"
    let envio = "Envio=" + jdatoselemento;
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.send(envio);   
}
function visualizarUltimo(){
    var ajaxrequest = new XMLHttpRequest();
    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/ultimoElementoUrbano.php", true);
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.onreadystatechange = function ()
    {
        //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText;
            mostrar_consulta(datosLeidos);
            console.log("Datos Recibidos  :" + datosLeidos);
        }
    };
    let jdatoselemento="DESC"
    let envio = "Envio=" + jdatoselemento;
    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.send(envio);     
}
function mostrar_consulta(datosLeidos){
    var lista= new Array();
    lista= JSON.parse(datosLeidos);
    if (lista!=null){
        visualizarRegistro(lista[0]);
    }else{
        alert("no hay mas registros");
    }
    }
    function visualizarRegistro(registro){
        /*cfc= registro.Fecha.value.split("-");*/
        /*let fecha= cfc[2]+"-"+cfc[1]+"-"+cfc[0];*/
        /*alert(Object.values(registro.cId));*/
        cId.value= registro.Id;
        cTipo.value= registro.Tipo;
        cCantidad.value=registro.Cantidad;
        cHora.value= registro.Hora;
        cFecha.value= registro.Fecha;
        cLatitud.value= registro.Latitud;
        cLongitud.value= registro.Longitud;
        cDireccion.value=registro.Direccion;
        cDescripcion.value=registro.Descripcion;
    
    }