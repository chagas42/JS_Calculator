function action(number) { //mostra botao clicado no visor
    
    document.getElementById("visor").value += number; 
     
};

function Clear() { // limpar o visor

    document.getElementById("visor").value = ''; 

};

function calc() { //efetua o calculo e mostra na tela; 
    
    let value = document.getElementById('visor').value; 
    let result =  eval(value); 
    document.getElementById('visor').value = result; 

};

function backspace() { //apaga caracteres do visor; 
    
    let text = document.getElementById('visor').value; 
    let newText = text.substr(0, text.length -1); 
    // retirando o ultimo caracteres da string com o método substr;
    document.getElementById('visor').value = newText;
    //mostrando a no visor a string sem o seu ultimo caracter; 

};

