function add(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;

    var c=parseInt(a)+parseInt(b);
    document.getElementById("answer").value=c;
}
function sub(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;

    var c=parseInt(a)-parseInt(b);
    document.getElementById("answer").value=c;
}
function mul(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;

    var c=parseInt(a)*parseInt(b);
    document.getElementById("answer").value=c;
}
function div(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;

    var c=parseInt(a)/parseInt(b);
    document.getElementById("answer").value=c;
}