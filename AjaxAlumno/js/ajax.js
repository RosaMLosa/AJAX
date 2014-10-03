
var url = "https://alumnos-mcsd2014.azure-mobile.net/Tables/alumnos";

function pintarTabla(datos) {       //funcion que cuando cargue crea la tabla  a partir de un array de json

    var tabla = document.getElementById("datos");

    while (tabla.childNodes.length > 0) {

        tabla.removeChild(tabla.childNodes[0]); //borro la tabla al principio y para volverla a genarar
    }

    for (var i = 0; i < datos.length; i++) {
        var fila = document.createElement("tr");

        var c1 = document.createElement("td");  //creo una columna
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");

        var t1 = document.createTextNode(datos[i].nombre);  //creo el textnode
        var t2 = document.createTextNode(datos[i].edad);
        var t3 = document.createTextNode(datos[i].nota);

        c1.appendChild(t1); //agrego los textnode a las columnas
        c2.appendChild(t2);
        c3.appendChild(t3);

        fila.appendChild(c1);   //agrego las columnas a la fila
        fila.appendChild(c2);
        fila.appendChild(c3);

        tabla.appendChild(fila);    //agrego las filas a la tabla
    }
}

    function cargar() {
        var ajax = new XMLHttpRequest;      //creo mi objeto ajax de la clase XMLHttpRequest

        ajax.open("get", url);     //open pasa 4 parámetros: método, url, si queremos peticiones asíncronas(por defecto es sí), password del usuario
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {     //si la petición está terminada(de los 5 estados que existen) pg2 de ajax)
                var datos = ajax.responseText;  //con esto en datos está el texto devuelto
                var res = eval(datos);      //se convierte en json
                pintarTabla(res);
            }

        };

        ajax.send(null);        //se pone un objeto cuando vaya x todos los metodos menos por get, q van los datos en la url, por eso se pone null.

    }


    (function(){        //función autoejecutable para cargar la tabla
        cargar();
    })();