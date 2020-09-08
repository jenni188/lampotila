function cToF (c){
    var fahrenheit = Math.round((celsius * 9/5) + 32 );
         return fahrenheit;    
}

function fToC (f){
    var celsius = Math.round((fahrenheit - 32) * 5/9) ;
         return celsius;
}

function fToK (f){
    var kelvin = Math.round((+fahrenheit + 459.67) * 5/9) ;
         return kelvin;
}

function kToF (k){
    var fahrenheit = Math.round(kelvin * 9/5 - 459.67);
         return fahrenheit;
}

function kToC (k){
    var celsius = Math.round(kelvin - 273.15);
         return celsius; 
}

function cToK (c){
    var kelvin = Math.round (+celsius + 273.15);
         return kelvin;
}
console.log (cToF);

var pyöristys = document.getElementById("1 desimaali");

function pyöristys(value) {
    document.getElementById("1 desimaali").innerHTML = Math.round(value);
  }