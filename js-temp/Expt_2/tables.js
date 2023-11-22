function forPrint() {
    var numFor = parseInt(document.getElementById("num").value);
    
    var out1 = "<h3>Table Using For Loop</h3>";
    for (let i = 1; i <= 10; i++) {
        out1 = out1 + numFor + " * " + i + " = " + numFor * i + "<br/>";
        console.log(out1);
    }
    document.getElementById("result1").innerHTML = out1;
};

function WhilePrint() {
    var i = 1;
    var out2 = "<h3>Table Using While Loop</h3>";
    var numWhile = parseInt(document.getElementById("num").value);
    while (i <= 10) {
        out2 = out2 + numWhile + " * " + i + " = " + numWhile * i + "<br/>";
        i++;
    }
    document.getElementById("result2").innerHTML = out2;
};

function DoWhilePrint() {
    var i = 1;
    var out3 = "<h3>Table Using Do-While Loop</h3>";
    var numDoWhile = parseInt(document.getElementById("num").value);
    do {
        out3 = out3 + numDoWhile + " * " + i + " = " + numDoWhile * i + "<br/>";
        i++;
    }
    while (i <= 10)
    document.getElementById("result3").innerHTML = out3;
};