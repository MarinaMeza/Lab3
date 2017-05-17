$(document).ready(function(){
//alert("prueba");    
    $("#formulario").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            inputPassword: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese contraseña válida'
                    },
                    stringLength: {
                        min: 3,
                        max: 10
                    }
                }
            },
            inputEmail: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese su email'
                    },
                    emailAddress: {
                        message: 'Ingrese un email valido'
                    }
                }
            }
        }            
    }).on('success.form.bv',function(e){
        e.preventDefault();
        //alert("todo bien");
        var email = $("#inputEmail").val();
        var password = $("#inputPassword").val();
        localStorage.author = email;
        //alert(email+" "+password);
        var datosLogin = {
            email: email,
            password: password
        }

        var datosJ = JSON.stringify(datosLogin);

        $.ajax({
            url: "http://localhost:1337/loginRecu",
            type: "POST",
            data: datosJ,
            dataType:"JSON",
        })
        .done(function(data){
            //alert(JSON.stringify(data));
            var autenticado = data.autenticado;
            var color = data.preferencias.color;
            var font = data.preferencias.font; 
            var role = data.role;
            //alert(autenticado+" "+color+" "+font);
            localStorage.autenticado = autenticado;
            //localStorage.color = color;
            //localStorage.font = font;
            //alert(JSON.stringify(localStorage));
            if(autenticado=='si' && role=='admin'){
                //alert('si');
                window.location.replace("admin.html");
                //$("#respuesta").html("prueba");
            }
        })
        .fail(function(peticion, textStatus, errorThrown){
            alert("Error " + peticion.status + ' ' + errorThrown);
        })
    })
})