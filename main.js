let buttons = document.querySelectorAll('.num-calc');
let inputNum = document.querySelector('.number');
let operNum = document.querySelector('.num-math');
let ClearAc = document.querySelector('.clear');
let Delete = document.querySelector('.delet');
let divi = document.querySelector('.divistion');
let add = document.querySelector('.addition');
let sub = document.querySelector('.subtraction');
let mul = document.querySelector('.multi');
let dot = document.querySelector('.dote');
let result = document.querySelector('.result');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        inputNum.innerText += buttons[i].value;
    }
}

ClearAc.onclick = () => {
    inputNum.innerText = '';
    operNum.innerText = '';
}
Delete.onclick = () => {
    inputNum.innerText = inputNum.innerText.slice(0, -1);
}

divi.onclick = () => {
    operNum.innerText = inputNum.innerText;
    inputNum.innerText = '';
    result.onclick = () => {

        inputNum.innerText = operNum.innerText / inputNum.innerText;
        operNum.innerText = '';
    }
}
add.onclick = () => {
    operNum.innerText = inputNum.innerText;
    inputNum.innerText = '';
    result.onclick = () => {
        inputNum.innerText = +operNum.innerText + +inputNum.innerText;
        operNum.innerText = '';

    }
}
sub.onclick = () => {
    operNum.innerText = inputNum.innerText;
    inputNum.innerText = '';
    result.onclick = () => {
        inputNum.innerText = +operNum.innerText - +inputNum.innerText;
        operNum.innerText = '';

    }
}
mul.onclick = () => {
    operNum.innerText = inputNum.innerText;
    inputNum.innerText = '';
    result.onclick = () => {
        inputNum.innerText = +operNum.innerText * +inputNum.innerText;
        operNum.innerText = '';
    }
}

dot.onclick = () => {
    if (inputNum.innerText.includes(dot.value) == false) {
        inputNum.innerText += dot.value;
    }
}

