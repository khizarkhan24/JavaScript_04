$(document).ready(function(){
    $("#nine").click(function(){
        document.form.display.value +="9"
    })
    $("#eight").click(function(){
        document.form.display.value +="8"
    })
    $("#seven").click(function(){
        document.form.display.value +="7"
    })
    $("#six").click(function(){
        document.form.display.value +="6"
    })
    $("#five").click(function(){
        document.form.display.value +="5"
    })
    $("#four").click(function(){
        document.form.display.value +="4"
    })
    $("#three").click(function(){
        document.form.display.value +="3"
    })
    $("#two").click(function(){
        document.form.display.value +="2"
    })
    $("#one").click(function(){
        document.form.display.value +="1"
    })
    $("#zero").click(function(){
        document.form.display.value +="0"
    })
    $("#plus").click(function(){
        document.form.display.value +=" +"
    })
    $("#minus").click(function(){
        document.form.display.value ="-"
    })
    $("#divide").click(function(){
        document.form.display.value ="/"
    })
    $("#multiple").click(function(){
        document.form.display.value ="*"
    })
    $("#c").click(function(){
        document.form.display.value =""
        
    })
    $("#dot").click(function(){
        document.form.display.value +="."
    })
    $("#equal").click(function(){
        if(document.form.display.value ==""){
            alert  ("cell is empty , put something")
        }
        else{
            document.form.display.value = eval(document.form.display.value)
        }
    })































})