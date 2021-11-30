var map;

var latitud = 41.67097948393865;
var longitud = -3.6769259916763985;
var arrayMarcadores= new Array();
function inicio(){

    map = new google.maps.Map(
        document.getElementById('map_canvas'), {
            // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
            center: new google.maps.LatLng(latitud,longitud),//latitud,longitud),//
            // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
            zoom: 18, // zoom del mapa
            draggableCursor: 'auto', // forma del cursor
            draggingCursor: 'crosshair',
            mapTypeId: google.maps.MapTypeId.SATELLITE // tipo de mama
        });
    
        google.maps.event.addListener(map, 'click', function (event) {
            // Obtiene la latidu y longitud
                datolatitud_longitud = event.latLng.toString();
            // Guarda el dato en el array murallas
                arrayMarcadores.push(datolatitud_longitud);
            // Visualiza la latitud
                datolatitud_longitud = datolatitud_longitud.substring(1,datolatitud_longitud.length - 1)
                cLatitud.value = (datolatitud_longitud.split(",")[0]).trim();
                cLongitud.value = (datolatitud_longitud.split(",")[1]).trim();
                /*console.log(datolatitud_longitud);*/
               
            // Crea un objeto de propiedades en formato json, con los datos del marcador
            // a crear
                var icono = {
                    url: "./imagenes/curso.png", // url
                    scaledSize: new google.maps.Size(25, 25), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(0, 0) // anchor
                };
            // Crea el marcador y lo añade la mapa (map)
                marker = new google.maps.Marker({
                    position: event.latLng,
                    icon: icono,
                    map: map,
                    nombre: 'Pepino' // No hace nada especial, Simplemente es una propiedad  
                });
            // Evento para el marcador creado
                google.maps.event.addListener(marker, 'click', function () {
                    alert("Click en marcador " + this.nombre + latitud_longitud.value);
                });
                 //Al hacer click en el marcador creado obtener la dirección postal correspondiente a la latitud y longitud
                    leeDireccion(event.latLng);
            });
        
        }
        
/*let icono2 = {
    url: "imagenes/lupa.jpg",
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0)
};

let marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(latitud,longitud),
    icon: icono2,
    map: map,
    nombre: 'pepino'
});*/
var aimagenes = new Array();
aimagenes[0] = "./imagenes/bandera.png"
aimagenes[3] = "./imagenes/banderay.png"
aimagenes[1] = "./imagenes/Catalina.png"
aimagenes[2] = "./imagenes/curso.png"
 
let dibujaVarios = document.getElementById("varios");

let intervalo;
i = 0;
dibujaVarios.addEventListener("click", function () {
     intervalo = setInterval(visualizarMarcador ,  3000)
 
}, false)
 
/*function mostrar(){   
console.log(i)
        icono2 = {
            url: aimagenes[i], // url
            scaledSize: new google.maps.Size(25, 25), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };
 
        miMarcador = new google.maps.Marker({
            position: new google.maps.LatLng(latitud, longitud),
            icon: icono2,
            map: map,
            nombre: 'Pepino'
        });
        i++;
        if(i==4){
            window.clearInterval(intervalo)
        }
}*/

function leeDireccion(latlng) {
    geocoder = new google.maps.Geocoder();
    if (latlng != null) {
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                MuestraDireccion(latlng, results[0].formatted_address)
            } else {
                alert('No results found');
            }
        } else {
            alert('Geocoder failed due to: ' + status);
        }
    });
    }
}

function MuestraDireccion(latlng, direccion) {
//Muestra la dirección obtenida en un elemento html de la página
     direccionMapa.innerHTML = direccion;

}

function MuestraDireccion(latlng) {
    cLatitud.value=latlng.lat();
    cLongitud.value=latlng.lng();
    direccionMapa.innerHTML = direccion;
}
function visualizarMarcador(){

    /*cfc= cFecha.value.split("-");
    let fecha= cfc[2]+"-"+cfc[1]+"-"+cfc[0];*/
    var ajaxrequest = new XMLHttpRequest();

            ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/AdrianG/latitudLongitud.php", true);
            ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajaxrequest.onreadystatechange = function ()
            {
                //alert(ajaxrequest.readyState + "--" + ajaxrequest.status);
                if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
                    var datosLeidos = ajaxrequest.responseText;
                    var lista= new Array();
                    lista= JSON.parse(datosLeidos);
                    console.log(lista);
                    for (i=0;i<lista.length;i++){
                        var icono = {
                            // En la url ponemos la imagen que hemos guardado en el registro anteriormente
                            url: "./imagenes/curso.png", // url
                            scaledSize: new google.maps.Size(25, 25), // scaled size TAMAÑO DE LA IMAGEN
                            origin: new google.maps.Point(0,0), // origin
                            anchor: new google.maps.Point(0, 0) // anchor
                        };
                    
                        // Pasamos la latitud y la longitud del registro a la variable latlog
                        var latlog = new google.maps.LatLng(lista[i].Latitud,lista[i].Longitud);
                        let latitud=lista[i].Latitud;
                        let longitud=lista[i].Longitud;
                        marker = new google.maps.Marker({
                            // En la posicion ponemos la latitud y la longitud que tenemos en latlog
                            position: latlog,
                            icon: icono,
                            map: map,
                            // En nombre ponemos el registro para que nos quede dentro todos sus campos
                            nombre: 'pepino'
                        });
                        //console.log(LatitudLongitud);
                        marker.addListener("click", function(){
                                document.getElementById("cLatitud").value = latitud;
                                document.getElementById("cLongitud").value = longitud;
                        });
                    }
                }
            };
            ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajaxrequest.send();
}
/*function visualizaMarcador(latlng){
    var icono = {
        // En la url ponemos la imagen que hemos guardado en el registro anteriormente
        url: "./imagenes/logo.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size TAMAÑO DE LA IMAGEN
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    // Pasamos la latitud y la longitud del registro a la variable latlog
    var latlog = new google.maps.LatLng(latlng);

    marker = new google.maps.Marker({
        // En la posicion ponemos la latitud y la longitud que tenemos en latlog
        position: latlog,
        icon: icono,
        map: map,
        // En nombre ponemos el registro para que nos quede dentro todos sus campos
        nombre: 'pepino'
    });
    
}*/
inicio();
visualizarMarcador();

//-------------MEDIR DISTANCIAS----------

var medir=document.getElementById("medir");
medir.addEventListener("click",Mideme,false);
function Mideme(inicial,final){    

    console.log("medir");
    api=(inicial +"").split(","); 

    apf=final.split(","); 

      var posicionInicial = new google.maps.LatLng(api[0],api[1]);//  
    var posicionFinal = new google.maps.LatLng(apf[0],apf[1]);// eval(pf));//

    var angulo = google.maps.geometry.spherical.computeHeading( posicionInicial,posicionFinal);

    var distancia = google.maps.geometry.spherical.computeDistanceBetween( posicionInicial,posicionFinal);

  return distancia;    

}

var trazarRecinto=document.getElementById("trazarRecinto");
trazarRecinto.addEventListener("click",Trazar,false);

function Trazar() {

    var arrayMarcadores= new Array();

    console.log(arrayMarcadores.push(marker2));

    var tipo_trazo;
    var colortrazado ="blue";

    cRecinto = ""
    var posiciones = "[";

    //Genera un string de objetos  google.maps.LatLng con todos los marcadores
    // que se han guardado en murallas
    for (i = 0; i < arrayMarcadores.length; i++) {
        posiciones = posiciones + "new google.maps.LatLng" + arrayMarcadores[i] + ",";
        cRecinto = cRecinto+ arrayMarcadores[i] + ",";
    }
    posiciones = posiciones.substr(0, posiciones.length - 1);
    posiciones = posiciones.substr(0, posiciones.length - 1);

    if (tipo_trazo == "recinto") {
        posiciones = posiciones + ",new google.maps.LatLng" + arrayMarcadores[0] + "]";
    } else { posiciones = posiciones + "]"; }
    //alert("POSICIONES " + posiciones);
    if (arrayMarcadores.length> 0) {
        var polygon = "new google.maps.Polyline({" +
            "path:" + posiciones + "," +
            "strokeColor:'" + colortrazado + "'," +
            "strokeOpacity: 2," +
            "strokeWeight: 1.3," +
            "geodesic: true})";

        eval(polygon).setMap(map);
    }
}