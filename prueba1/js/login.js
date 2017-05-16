$(document).ready(function(){
//alert("prueba");    
    $("#login").click(function(e){
        e.preventDefault();

        var email = $("#inputEmail").val();
        var password = $("#inputPassword").val();
        localStorage.author = email;
        alert(email+" "+password);
        var datosLogin = {
            email: email,
            password: password
        }

        var datosJ = JSON.stringify(datosLogin);

        $.ajax({
            url: "http://localhost:1337/login",
            type: "POST",
            data: datosJ,
            dataType:"JSON",
        })
        .done(function(data){
            //alert(JSON.stringify(data));
            var autenticado = data.autenticado;
            var color = data.preferencias.color;
            var font = data.preferencias.font; 
            //alert(autenticado+" "+color+" "+font);
            localStorage.autenticado = autenticado;
            localStorage.color = color;
            localStorage.font = font;
            //alert(JSON.stringify(localStorage));
            window.location.replace("index.html");
                $("#respuesta").html("prueba");
        })
        .fail(function(peticion, textStatus, errorThrown){
            alert("Error " + peticion.status + ' ' + errorThrown);
        })
    })
})