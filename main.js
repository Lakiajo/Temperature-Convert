console.log('Temperature-Converter');

const printToDom = (divId, textToPrint) => {
    document.getElementById(divId).innerHTML = textToPrint;
};

const c = document.getElementById('c');
const f = document.getElementById('f');
const clearButton = document.getElementById('clearButton');
const convertButton = document.getElementById('convertButton');
const tempInput = document.getElementById('tempInput');
let value =0;

const toCelsius = () => {
    value = (document.getElementById('tempInput').value - 32) * (5 / 9);
    
    let color = 'green';
    if(value > 32) {
        color = 'red';
    }
    else if( value < 0) {
        color = 'blue';
    }
    document.getElementById('divOutput').style.color = color;
    domStringBuilder = `<h2>${value} degrees C</h2>`
    
};

const toFahrenheit = () => {
    value = (document.getElementById('tempInput').value * (9/5)) + 32;

    let color = 'green';
    if(value > 90) {
        color = 'red';
    }
    else if(value < 32) {
        color = 'blue';
    }
    document.getElementById('divOutput').style.color = color;
    domStringBuilder = `<h2>${value} degrees C</h2>`

};

const determineConverter = () => {
    if(c.checked) {
        toCelsius();
        printToDom('divOutput', domStringBuilder);
    }
    else{
        toFahrenheit();
        printToDom('divOutput', domStringBuilder);
    }
};

const clearTempInput = () => {
    document.getElementById('tempInput').value = '';
    document.getElementById('divOutput').textContent = '';
    c.checked = false;
    f.checked = false;
};

convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearTempInput);

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById('convertButton').click();
    }
});