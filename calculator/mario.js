function fun1()
{
    var a=parseInt(document.getElementById("value1").value);
    var b=parseInt(document.getElementById("value2").value);
    let operation ;
    const radioButtons=document.querySelectorAll('input[name="operation"]');
    for (const i of radioButtons)
    {
        if (i.checked){
            operation=i.value;
            break;
        }
    }
    if (operation =="Add")
        document.getElementById('result').innerHTML=(a+b);
    if (operation =="Multiply")
        document.getElementById('result').innerHTML=(a*b);
    if (operation =="Substract")
        document.getElementById('result').innerHTML=(a-b);
}