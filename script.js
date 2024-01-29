//EVENTLISTENERS
document.getElementById("ten").addEventListener("click", gradeTen);
document.getElementById("twenty").addEventListener("click", gradeEleven);
document.getElementById("thirty").addEventListener("click", gradeTwelve);

//Grade 10 average calculator
function gradeTen() {
    
    //INPUT
    var a = +document.getElementById("10avg1").value;
    var b = +document.getElementById("10avg2").value;
    var c = +document.getElementById("10avg3").value;
    var d = +document.getElementById("10avg4").value;
    var e = +document.getElementById("10avg5").value;

    //PROCESS
    var g = (a + b + c + d + e)/5;

    //OUTPUT
    document.getElementById("result2").innerHTML = g;

    if (g >= 75, g <= 79) {
        document.getElementById("result1").innerHTML = "<p>You earned $300.</p>"
    }
    if (g >= 80) {
        document.getElementById("result1").innerHTML = "<p>You earned $400.</p>"
    }
    if (g < 75) {
        document.getElementById("result1").innerHTML = "<p>You earned $0.</p>"
    }
}

//Grade 11 average calculator
function gradeEleven() {
 
    //INPUT
    var a = +document.getElementById("20avg1").value;
    var b = +document.getElementById("20avg2").value;
    var c = +document.getElementById("20avg3").value;
    var d = +document.getElementById("20avg4").value;
    var e = +document.getElementById("20avg5").value;

    //PROCESS
    var g = (a + b + c + d + e )/5;

    //OUTPUT
    document.getElementById("result4").innerHTML = g;

    if (g >= 75, g<= 79) {
        document.getElementById("result3").innerHTML = "<p>You earned $500.</p>"
    }
    if (g >= 80) {
        document.getElementById("result3").innerHTML = "<p>You earned $800.</p>"
    }
    if (g < 75) {
        document.getElementById("result3").innerHTML = "<p>You earned $0.</p>"
    }
}

function gradeTwelve() {
    
    //INPUT
    var a = +document.getElementById("30avg1").value;
    var b = +document.getElementById("30avg2").value;
    var c = +document.getElementById("30avg3").value;
    var d = +document.getElementById("30avg4").value;
    var e = +document.getElementById("30avg5").value;

    //PROCESS
    var g = (a + b + c + d + e)/5;

    //OUTPUT
    document.getElementById("result6").innerHTML = g;

    if (g >= 75, g <= 79) {
        document.getElementById("result5").innerHTML = "<p>You earned $700.</p>"
    }
    if (g >= 80) {
        document.getElementById("result5").innerHTML = "<p>You earned $1300.</p>"
    }
    if (g < 75) {
        document.getElementById("result5").innerHTML = "<p>You earned $0.</p>"
    }
}
