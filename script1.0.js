function add() {
    var no1 = document.getElementById("no1").value;
    var no2 = document.getElementById("no2").value;
    var res = document.getElementById("resInt");

    if (no1 === '' || no2 === '') {
        alert('Please input both numbers!');
    } else {
        var sum = parseInt(no1) + parseInt(no2);
        res.value = sum;
    }
}

function sub() {
    var no1 = document.getElementById("no1").value;
    var no2 = document.getElementById("no2").value;
    var res = document.getElementById("resInt");

    if (no1 === '' || no2 === '') {
        alert('Please input both numbers!');
    } else {
        var diff = parseInt(no1) - parseInt(no2);
        res.value = diff;
    }
}

function mul() {
    var no1 = document.getElementById("no1").value;
    var no2 = document.getElementById("no2").value;
    var res = document.getElementById("resInt");

    if (no1 === '' || no2 === '') {
        alert('Please input both numbers!');
    } else {
        var prod = parseInt(no1) * parseInt(no2);
        res.value = prod;
    }
}

function div() {
    var no1 = document.getElementById("no1").value;
    var no2 = document.getElementById("no2").value;
    var res = document.getElementById("resInt");

    if (no1 === '' || no2 === '') {
        alert('Please input both numbers!');
    } else {
        var quot = parseInt(no1) / parseInt(no2);
        res.value = quot;
    }
}

function clearInput(inputId) {
    document.getElementById(inputId).value = '';
}

document.getElementById("addI").addEventListener("click", add);
document.getElementById("subI").addEventListener("click", sub);
document.getElementById("mulI").addEventListener("click", mul);
document.getElementById("divI").addEventListener("click", div);
document.getElementById("clr1").addEventListener("click", function() {
    clearInput("no1");
});
document.getElementById("clr2").addEventListener("click", function() {
    clearInput("no2");
});
document.getElementById("clrRes").addEventListener("click", function() {
    clearInput("resInt");
});
