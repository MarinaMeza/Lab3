$(document).ready(function(){
    
    $("#login").submit(function(e){
        e.preventDefault();

        $.ajax({
            url: "http://localhost:1337/login",
            type: "POST",
            data: {datosLogin:$("#email")},
            dataType:
        })
    })
})