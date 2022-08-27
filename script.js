document.querySelectorAll('form span').forEach(item =>{
    item.addEventListener('click', (e) => {
        addVal(item.innerHTML);
    })
});

function addVal(valor){
    if (valor == 'CE')
        document.calculadora.expressao.value = '';

    else if (valor == '=')
        try{
            document.calculadora.expressao.value = eval(document.calculadora.expressao.value.replaceAll(',', '.')).toString().replaceAll('.', ',');
    }
        catch (e) {
            document.calculadora.expressao.value = '';
        }

    else
    document.calculadora.expressao.value += valor;
}