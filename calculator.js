function appendDisplay(value) {
    var expression = document.getElementById("display").value;
    var lastCharacter = expression.slice(-1);

    if(expression==='Invalid Expression'){
        document.getElementById("display").value = ''; 
    }

    if(isNaN(value))
        {if(isNaN(lastCharacter)===false)
        {
        document.getElementById("display").value += value;
        }} else{
            document.getElementById("display").value += value;  
        }
}

function resetDisplay() {
    document.getElementById("display").value = '';
}

function delDisplay() {
    var expression = document.getElementById("display").value;
    expression = expression.substring(0, expression.length - 1);   
    document.getElementById("display").value = expression;
}

function calculateResult() {
    var expression = document.getElementById("display").value;
    try {
        var result = eval(expression);
        if (Number.isInteger(result)) {
            document.getElementById("display").value = result.toString();
        } else {
            document.getElementById("display").value = result.toFixed(3);
        }
    } catch (error) {
        document.getElementById("display").value = "Invalid Expression";
    }
}


