let cajaChequeo=null;

function elementoSeleccionado(caja){
    console.log(caja.id);
    cajaChequeo=caja.id;
}
function eevaluaPatron(){
    if(cajaChequeo=="cId"){
        let patron=/^[0-9]+$/
        let resultado= patron.test(cId.value);
        console.log("RESULTADO CHEQUEO ID"+resultado);
        if(!resultado){
            document.getElementById("cId").style.color="red";
            document.getElementById("cId").focus();
        }else{
            document.getElementById("cId").style.color="green";
        }
    }
    console.log("cajaCheque"+cajaChequeo);
    if (cajaChequeo=="cTipo"){
        let patron = /^Temperatura$|^Luminosidad$|^Caudal$|^Viento$|^Contaminacion$/;
        let resultado = patron.test(cTipo.value);
        console.log("Resultado Chequeo:"+resultado);
        if (!resultado){
            document.getElementById("cTipo").style.color="red";
            document.getElementById("cTipo").focus();
        }else{
            document.getElementById("cTipo").style.color="green";
        }
    }
    if (cajaChequeo=="cCantidad"){
        let patron = /^[0-9]+$/;
        let resultado = patron.test(cCantidad.value);
        console.log("Resultado Chequeo:"+resultado);
        if (!resultado){
            document.getElementById("cCantidad").style.color="red";
            document.getElementById("cCantidad").focus();
        }else{
            document.getElementById("cCantidad").style.color="green";
        }
    }
    if (cajaChequeo=="cHora"){
        let patron = /^[0-9]{2}[:][0-9]{2}$/;
        let resultado = patron.test(cHora.value);
        console.log("Resultado Chequeo:"+resultado);
        if (!resultado){
            document.getElementById("cHora").style.color="red";
            document.getElementById("cHora").focus();
        }else{
            document.getElementById("cHora").style.color="green";
        }
    }
    if (cajaChequeo=="cFecha"){
        let patron = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/;
        let resultado = patron.test(cFecha.value);
        console.log("Resultado Chequeo:"+resultado);
        if (!resultado){
            document.getElementById("cFecha").style.color="red";
            document.getElementById("cFecha").focus();
        }else{
            document.getElementById("cFecha").style.color="green";
        }
    }
    if (cajaChequeo=="cLatitud"){
        let patron = /^[0-9,]+$/;
        let resultado = patron.test(cLatitud.value);
        console.log("Resultado Chequeo:"+resultado);
        if (!resultado){
            document.getElementById("cLatitud").style.color="red";
            document.getElementById("cLatitud").focus();
        }else{
            document.getElementById("cLatitud").style.color="green";
        }
    }
    if (cajaChequeo=="cLongitud"){
        let patron = /^[-]{1}[0-9,]+$/;
        let resultado = patron.test(cLongitud.value);
        console.log("Resultado Chequeo:"+resultado);
        if (!resultado){
            document.getElementById("cLongitud").style.color="red";
            document.getElementById("cLongitud").focus();
        }else{
            document.getElementById("cLongitud").style.color="green";
        }
    }
    if (cajaChequeo=="cDireccion"){
        let patron = /^[a-z A-Záéíóú/º0-9]+$/;
        let resultado = patron.test(cDireccion.value);
        console.log("Resultado Chequeo:"+resultado);
        if (!resultado){
            document.getElementById("cDireccion").style.color="red";
            document.getElementById("cDireccion").focus();
        }else{
            document.getElementById("cDireccion").style.color="green";
        }
    }
    if (cajaChequeo=="cDescripcion"){
        let patron = /^[a-z A-Záéíóú]+$/;
        let resultado = patron.test(cDescripcion.value);
        console.log("Resultado Chequeo:"+resultado);
        if (!resultado){
            document.getElementById("cDescripcion").style.color="red";
            document.getElementById("cDescripcion").focus();
        }else{
            document.getElementById("cDescripcion").style.color="green";
        }
    }
}

let cajas=document.querySelectorAll("form input");

cajas.forEach(caja => {
    caja.addEventListener('keydown',()=>{
        elementoSeleccionado(caja)
    })
});

cajas.forEach(caja => {
    caja.addEventListener('keyup',()=>{
        eevaluaPatron()
    })
});

cajas.forEach(caja => {
    caja.addEventListener('blur', () => {
        
        eevaluaPatron(caja)
    } );
  });