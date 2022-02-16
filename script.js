function xdecimal()
{
    let decimal = document.getElementById("decimal");
    let hexadecimal = document.getElementById("hexadecimal");
    let binaire = document.getElementById("binaire");
 
    hexadecimal.value = (decimal.value-0).toString(16);
    binaire.value = (decimal.value-0).toString(2);
}
 
function xhexadecimal()
{
    let decimal = document.getElementById("decimal");
   let  hexadecimal = document.getElementById("hexadecimal");
    let binaire = document.getElementById("binaire");
 
    decimal.value = parseInt(hexadecimal.value,16);
    binaire.value = (parseInt(hexadecimal.value,16)).toString(2);
}
 
function xbinaire()
{
    let decimal = document.getElementById("decimal");
    let hexadecimal = document.getElementById("hexadecimal");
    let binaire = document.getElementById("binaire");
 
    decimal.value = parseInt(binaire.value,2);
    hexadecimal.value = (parseInt(binaire.value,2)).toString(16);
}