function celtofahren(){
    let celsius = document.getElementById("celsius");
    let fahrenheit = document.getElementById("fahrenheit");
    let ouput =(parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value=parseFloat(ouput.toFixed(2));
    console.log(output) ;
 }
