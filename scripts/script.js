$(document).ready(function(){
    
    $("#login").submit(function(e){
        e.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val();

        var datosLogin = {
            email: email,
            password: password
        }

        var datosJ = JSON.stringify(datosLogin);

        $.ajax({
            url: "http://localhost:1337/login",
            type: "POST",
            data: {datosJ},
            dataType:"JSON",
            success: function(data){
                $("#respuesta").text("prueba");
            }
        })
    })
})