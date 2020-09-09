function laskelämpötila() {

    var valitseMuunnos = document.getElementById("temperature").value;
    var lämpötila = document.getElementById("lmp").value;
    var vastaus;

    if (valitseMuunnos == "CF") {
            f = pyöristys(cToF(lämpötila))          
        document.getElementById("vastaus").innerHTML = `${lämpötila} fahrenheit on ${f}`; 
    }

    if (valitseMuunnos == "FC") {
        c = pyöristys(fToC(lämpötila))
          document.getElementById("vastaus").innerHTML = `${lämpötila} celsius on ${c}`; 
    }

    if (valitseMuunnos == "FK") {
        k = pyöristys(fToK(lämpötila))
          document.getElementById("vastaus").innerHTML = `${lämpötila} kelvin on ${k}`; 
    }

    if (valitseMuunnos == "KF") {
        f = pyöristys(kToF(lämpötila))
          document.getElementById("vastaus").innerHTML = `${lämpötila} fahrenheit on ${f}`; 
    }
   
    if (valitseMuunnos == "KC") {
        c = pyöristys(kToC(lämpötila))
          document.getElementById("vastaus").innerHTML = `${lämpötila} celsius on ${c}`; 
    }

    if (valitseMuunnos == "CK") {
        k = pyöristys(cToK(lämpötila))
          document.getElementById("vastaus").innerHTML = `${lämpötila} kelvin on ${k}`; 
    }
}
   
  



















function cToF (c){
    var fahrenheit = (c * 9/5) + 32 ;
         return fahrenheit;    
}

function fToC (f){
    var celsius = (f - 32) * 5/9 ;
         return celsius;
}

function fToK (f){
    var kelvin = (+f + 459.67) * 5/9 ;
         return kelvin;
}

function kToF (k){
    var fahrenheit = k * 9/5 - 459.67;
         return fahrenheit;
}

function kToC (k){
    var celsius = k - 273.15;
         return celsius; 
}

function cToK (c){
    var kelvin = +c + 273.15;
         return kelvin;
}




function pyöristys(value) {
        let desimaali = document.querySelector('input[name="desimaali"]:checked').value;
        return value.toFixed(desimaali);
  }