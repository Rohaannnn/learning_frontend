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
    let result ;
    if (operation =="Add")
       result=(a+b);
    if (operation =="Multiply")
       result=(a*b);
    if (operation =="Substract")
       result=(a-b);
    document.getElementById('result').innerHTML="The result is <strong>"+result+"</strong>"
    

}
function clear1(){
    console.log("clear button clicked")
    const value1=document.getElementById("value1");
    const value2=document.getElementById("value2");
    value1.value=''
    value2.value=''
    /*const radioButtons=document.querySelectorAll('input[name="operation"]');
    for (const i of radioButtons)
    {
        if (i.checked){
            i.checked=false;
            break;
        }
    }*/
    const radioButton=document.querySelector('input[name="operation"]:checked')
    radioButton.checked=false;

   const result=document.getElementById("result")
   result.innerHTML=''
   document.getElementById("submitButton").disabled=true ;

}
 function enabled(){

     document.getElementById("submitButton").disabled=false ;  








 }