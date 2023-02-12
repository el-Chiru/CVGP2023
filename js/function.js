

function versioningles(){
    document.getElementById("datospersonalesarg").style.display ="none";
    document.getElementById("datospersonalesing").style.display ="block";
    document.getElementById("estudios").style.display= "none";
    document.getElementById("studies").style.display= "block";
    document.getElementById("cursos").style.display= "none";
    document.getElementById("courses").style.display= "block";
    document.getElementById("idiomas").style.display= "none";
    document.getElementById("languages").style.display= "block";
    document.getElementById("trabajos").style.display= "none";
    document.getElementById("jobs").style.display= "block";
    document.getElementById("capacitacion").style.display= "none";
    document.getElementById("training").style.display= "block";
    document.getElementById("mencion").style.display= "none";
    document.getElementById("mention").style.display= "block";
    document.getElementById("complementary").style.display= "block";
}

document.getElementById("botoningles").onclick = function() {
        versioningles()
}
function versioncastellano(){
    document.getElementById("datospersonalesarg").style.display = "block";
    document.getElementById("datospersonalesing").style.display ="none";
    document.getElementById("estudios").style.display= "block";
    document.getElementById("studies").style.display= "none";
    document.getElementById("cursos").style.display= "block";
    document.getElementById("courses").style.display= "none";
    document.getElementById("idiomas").style.display= "block";
    document.getElementById("languages").style.display= "none";
    document.getElementById("trabajos").style.display= "block";
    document.getElementById("jobs").style.display= "none";
    document.getElementById("capacitacion").style.display= "block";
    document.getElementById("training").style.display= "none";
    document.getElementById("mencion").style.display= "block";
    document.getElementById("mention").style.display= "none";
}

document.getElementById("botoncastellano").onclick = function(){
    versioncastellano()
}



/* INFORMACION ADICIONAL CASTELLANO*/

function cambiartexto(){
    document.getElementById("Complementario").style.color = "red";
    }
    function mostrartexto(){
        document.getElementById("Complementario").style.display = "block";
    }
    function ocultarboton(){
        document.getElementById("boton").style.display = "none";
    }
    document.getElementById("boton").onclick = function(){
        cambiartexto()
        mostrartexto()
        ocultarboton()
    }
    
    /* INFORMACION ADICIONAL INGLES*/
    
    function cambiartexto1(){
        document.getElementById("Complementary").style.color = "red";
    }
    function mostrartexto1(){
        document.getElementById("Complementary").style.display = "block";
    }
    function ocultarboton1(){
        document.getElementById("boton1").style.display = "none";
    }
    document.getElementById("boton1").onclick = function(){
        cambiartexto1()
        mostrartexto1()
        ocultarboton1()
    }



