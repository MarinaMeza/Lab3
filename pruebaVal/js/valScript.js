$(document).ready(function(){
    $("#formulario").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese nombre'
                    },
                    stringLength: {
                        min: 3,
                        max: 10
                    }
                }
            },
            email: {
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
        alert("todo bien");
    })
})