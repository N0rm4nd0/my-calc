

function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 15  ) return;
    if(display.value === '') display.value = btn.value;
    else display.value += btn.value;
}

function limparDisplay(){
    document.getElementById('display').value = '';
}

var operador = ''
var valor1 = 0
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    operador = btn.value;
    valor1 = parseFloat(display.value);
    display.value += operador;
}

function calcularOperacao(){
    const display = document.getElementById('display');
    const valor2 = parseFloat(display.value);
        if(operador != "√"){
            display.value = display.value.replace("^", "**")
            valor1 = eval(display.value);
            display.value = valor1;
            operador = '';
        }else{
            display.value = display.value.replace("√", "")
            valor1 = Math.sqrt(display.value);
            display.value = valor1;
            operador = '';
        }
}       

function OperacaoRaiz(btn){
    const display = document.getElementById('display');
    operador = btn.value;
    display.value = ""; 
    display.value = operador;
}

function manipularTeclado(){
    if(/[0-9 / * - + . ( )]/.test(event.key))
    atualizarDisplay({value: event.key});
}