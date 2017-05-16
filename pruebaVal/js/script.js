$(document).ready(function(){
   $("#btnCargar").click(function(){
       localStorage.nombre=$("#txt1").val();
       localStorage.apellido=$("#txt2").val();
   })

   $("#btnMostrar").click(function(){
       var nombre = localStorage.nombre;
       var apellido = localStorage.apellido;
       if(nombre!=undefined && apellido!=undefined){
        alert(localStorage.nombre+" "+localStorage.apellido);
       }else{
           alert("No hay datos guardados");
       }

   })

   $("#btnBorrar").click(function(){
       localStorage.removeItem("nombre");
       localStorage.removeItem("apellido");
       alert("Borrado exitoso");
   })
})