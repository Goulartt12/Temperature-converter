const textbox = document.getElementById("textbox");
const ToF = document.getElementById("ToF");
const ToC = document.getElementById("ToC");
let result = document.getElementById("result");
let num;

function Convert() {
    if (ToF.checked) {
        num = Number(textbox.value);
        num = num * 9 / 5 + 32;
        result.textContent = num.toFixed(1) + "°F";
    }
    else if (ToC.checked) {
        num = Number(textbox.value)
        num = (num - 32) * (5/9);
        result.textContent = num.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }
}
