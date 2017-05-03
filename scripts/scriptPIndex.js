$(document).ready(function(){
    
    $("#login").submit(function(e){
        e.preventDefault();
//alert("preueba");
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
            data: datosJ,
            dataType:"JSON",
        })
        .done(function(data){
                $("#respuesta").html("prueba");
        })
        .fail(function(peticion, textStatus, errorThrown){
            alert("Error " + peticion.status + ' ' + errorThrown);
        })
    })
})


function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }   
