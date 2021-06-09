let numberforConv = document.querySelector("#number");
const btn = document.querySelector("#buttonSb");
let numberConv = document.querySelector("#numberConv");

function bin2dec(bin){
    let decimal = 0;
    for(let index = bin.length -1; index >= 0; index--){
        decimal += parseInt(bin[index])*Math.pow(2, bin.length-1-index);
    }
    return decimal;
}

btn.addEventListener("click" , e => {
    numberConv.value = `${bin2dec(numberforConv.value)}`
})