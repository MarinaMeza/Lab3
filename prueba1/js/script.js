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
        var texttitle = $("#blogTitle").val();
        var textheader = $("#blogHeader").val();
        var posttext = $("#blogText").val();
        var author = localStorage.author;
        var dataPost = {
            "title": texttitle,
            "header": textheader,
            "posttext`": posttext,
            "author": author
        }
        
        $("#finPost").after("<img id=loader src='img/loading.gif'>");
        $.ajax({
            url: "http://localhost:1337/postearNuevaEntrada",
            type: "POST",
            data: JSON.stringify(dataPost),
            dataType:"JSON"
        })
        
        .done(function(data){
            //alert("DONE"+JSON.stringify(data));
            $('#loader').hide();
            $("#finPost").before("<hr>\
                                <div class='post-preview'>\
                                    <a href='post.html'>\
                                    <h2 class='post-title'>\
                                        "+data.title+"\
                                    </h2>\
                                    <h3 class='post-subtitle'>\
                                        "+data.header+"\
                                    </h3>\
                                    </a>\
                                    <p class='post-meta'>Posted by <a href='#'>"+data.author+"</a> on "+data.date+"</p>\
                                    </div>");
        })
        .fail(function(peticion, textStatus, errorThrown){
            alert("Error " + peticion.status + ' ' + errorThrown);
        })
    })
})

/*
function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }   
*/

//<img type="+hidden+"id="+data.date+"src='img/loading.gif'>\