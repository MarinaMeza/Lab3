if(localStorage.autenticado!="si"){
        window.location.replace("login.html");
    }
$(document).ready(function(){
    //alert(JSON.stringify(localStorage));
    $("#logOut").click(function(){
        localStorage.removeItem("autenticado");
        window.location.replace("login.html");
    })
    $("#postBlog").click(function(e){
        e.preventDefault();
        //alert(JSON.stringify(localStorage));
        var nombre = $("#contNombre").val();
        var email = $("#contEmail").val();
        var webSite = $("#contWebsite").val();
        var ubicacion = $("#contUbicacion").val();
        var fechaNacimiento = $("#contFnac").val();
//        var author = localStorage.author;
        var dataPost = {
            nombre: nombre,
            email: email,
            webSite: webSite,
            ubicacion: ubicacion,
            fechaNacimiento: fechaNacimiento
        }
        
        $("#finPost").after("<img id=loader src='img/loading.gif'>");
        $.ajax({
            url: "http://localhost:1337/crearNuevoContacto",
            type: "POST",
            data: JSON.stringify(dataPost),
            dataType:"JSON"
        })
        
        .done(function(data){
            //alert("DONE"+JSON.stringify(data));
            $('#loader').hide();
            $("#finPost").before("<hr>\
                                    <div class='col-md-4'>\
                                    <div class='panel panel-default'>\
                                        <div class='panel-heading'>\
                                            <h4><i class='fa fa-fw fa-check'></i> Contacto</h4>\
                                            </div>\
                                                <div class='panel-body'>\
                                                <div class='form-group'>\
                                                <p>Nombre: "+data.nombre+"</p>\
                                                </div>\
                                                <hr>\
                                                <div class='form-group'>\
                                                <p>E-Mail: "+data.email+"</p>\
                                                </div>\
                                                <hr>\
                                                <div class='form-group'>\
                                                <p>WebSite: "+data.webSite+"</p>\
                                                </div>\
                                                <hr>\
                                                <div class='form-group'>\
                                                <p>Ubicacion: "+data.ubicacion+"</p>\
                                                </div>\
                                                <hr>\
                                                <div class='form-group'>\
                                                <p>Fecha de Nacimiento: "+data.fechaNacimiento+"</p>\
                                                </div>\
                                                <hr>\
                                                <p class='post-meta'>Agregado el: "+data.fechaIngreso+"</p>\
                                            </div>\
                                        </div>\
                                        </div>\
                                    </div>");
                                    
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


//<img type="+hidden+"id="+data.date+"src='img/loading.gif'>\