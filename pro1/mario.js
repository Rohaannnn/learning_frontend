function fun1()
{
    var a=parseInt(document.getElementById("value1").value);
    var b=parseInt(document.getElementById("value2").value);
    document.getElementById('result').innerHTML=(a+b);
}
function fun2()
{
    var a=document.getElementById('value1').value;
    var b=document.getElementById('value2').value;
    document.getElementById('result').innerHTML=(a*b);
}
function fun3()
{
    var a=document.getElementById('value1').value;
    var b=document.getElementById('value2').value;
    document.getElementById('result').innerHTML=(a-b);
}