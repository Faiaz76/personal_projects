const typebox = document.getElementById("typebox");
const toFarhenheit = document.getElementById("toFarhenheit");
const toCelcius = document.getElementById("toCelcius");
const button = document.getElementById("button");
const ans = document.getElementById("ans");
let temp;


function convert(){

    

    if(toFarhenheit.checked){
        temp = Number(typebox.value);
        temp = temp * 9 / 5 + 32;
        ans.textContent = temp.toFixed(1) + "°F";

    }
    else if(toCelcius.checked){
        temp = Number(typebox.value);
        temp = (temp - 32) * (5 / 9);
        ans.textContent = temp.toFixed(1) + "°C";

    }
    else{
        ans.textContent = `Select an Unit`;
    }
}