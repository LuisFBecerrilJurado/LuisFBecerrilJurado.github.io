
//* Asignación de variables de acuerdo a los ID´s de los elementos del HTML y llamadas a las funciones */
var textArea                = document.getElementById("textArea");
var buttonEncriptar         = document.getElementById("botonEncriptar");
var buttonDesencriptar      = document.getElementById("botonDesencriptar");
var buttonCopiar            = document.getElementById("CopiarTexto");
var textoAreaResultado      = document.getElementById("textoAreaResultado");
buttonEncriptar.onclick     = encriptar;
buttonDesencriptar.onclick  = desencriptar;
buttonCopiar.onclick        = copiarTexto;
var textoencaja             = false;

//* Función para descomponer el texto caracter por caracter para encriptar */
function encriptar(){
    var text_transform = textArea.value;                // Guarda el texto en una variable
    text_transform = text_transform.toLowerCase();      // En caso de haber mayusculas transforma todo a minúsculas
    var lengthText = text_transform.length;             // Obtiene el largo de caracteres del texto introducido
    var newText = "";
    if(lengthText>0){
        textoencaja =true;
        for(i=0;i<lengthText;i++){                          // Se abre un bucle que recorre caracter por caracter del texto
            var letter = text_transform.charAt(i);          // Cada caracter se va introduciendo en la variable letter
            switch (letter){                                // En caso de que el carater sea una vocal*/
                case "a":                                   // Si es a
                    newText = newText+"ai";                 // Al texto ya encriptado le suma la transformación por el valor "ai"
                break;
                case "e":                                   // Si es e
                    newText = newText+"enter";              // Al texto ya encriptado le suma la transformación por el valor "enter"
                break;
                case "i":                                   // Si es i
                    newText = newText+"imes";               // Al texto ya encriptado le suma la transformación por el valor "imes"
                break;
                case "o":                                   // Si es o
                    newText = newText+"ober";               // Al texto ya encriptado le suma la transformación por el valor "ober"
                break;
                case "u":                                   // Si es u
                    newText = newText+"ufat";               // Al texto ya encriptado le suma la transformación por el valor "ufat"
                break;
                default:                                    // En caso de no ser variable
                    newText = newText+letter;               // Al texto ya encriptado le suma la letra correspondiente
            }
        }
        //* Se reemplazan todos los campos del resultado
        document.getElementById("areaMuneco").style.display                 = "none";          //Desaparece la imagen del muñeco
        document.getElementById("textoTituloAreaResultado").style.display   = "none";          //Desaparece el titulo
        document.getElementById("resultado").style.justifyContent           = "space-between"; //Ajusta el texto encriptado
        document.getElementById("CopiarTexto").style.display                = "center";        //Centra el boton de copiar
        textoAreaResultado.innerText                                        = newText;         //Inserta el texto encriptado
    }else{
        swal("No hay texto a procesar", "", "error");
    }
}


function desencriptar(){
    var text_transform = textArea.value;
    text_transform = text_transform.toLowerCase();
    var lengthText = text_transform.length;
    var newText = "";
    if(lengthText>0){
        textoencaja =true;
        for(i=0;i<lengthText;i++){
            var letter = text_transform.charAt(i);
            switch (letter){
                case "a":
                    newText = newText+"a";
                    text_transform = text_transform.replace("ai","a");
                break;
                case "e":
                    newText = newText+"e";
                    text_transform = text_transform.replace("enter","e");
                break;
                case "i":
                    newText = newText+"i";
                    text_transform = text_transform.replace("imes","i");
                break;
                case "o":
                    newText = newText+"o";
                    text_transform = text_transform.replace("ober","o");
                break;
                case "u":
                    newText = newText+"u";
                    text_transform = text_transform.replace("ufat","u");
                break;
                default:
                    newText = newText+letter;
            }
              //* Se reemplazan todos los campos del resultado
        document.getElementById("areaMuneco").style.display                 = "none";          //Desaparece la imagen del muñeco
        document.getElementById("textoTituloAreaResultado").style.display   = "none";          //Desaparece el titulo
        document.getElementById("resultado").style.justifyContent           = "space-between"; //Ajusta el texto encriptado
        document.getElementById("CopiarTexto").style.display                = "center";        //Centra el boton de copiar
        textoAreaResultado.innerText                                        = newText;         //Inserta el texto encriptado
        }
    }else{
        swal("No hay texto a procesar", "", "error");
    }
}

//* Función para copiar el texto procesado ya sea Encriptado o Desenciptado */
function copiarTexto(){
    if(textoencaja){
        navigator.clipboard.writeText(textoAreaResultado.textContent);                // Copia el contenido en el Area de resultado
        textArea.value                                                    = "";       // Borra el contenido del area del texto a procesar
        document.getElementById("areaMuneco").style.display               ="revert";  // Regresa al estilo previo la imagen del muñeco
        document.getElementById("textoTituloAreaResultado").style.display ="revert";  // Regresa al estilo previo el titulo
        textoAreaResultado.innerText= "Ingresa el texto que deseas encriptar o desencriptar";//Regresa el texto original a la descripcion
        swal("Texto copiado", "", "success");
        textoencaja = false;
    }else{
        swal("No ha ingresado un texto", " o No ha seleccionado una opcion", "warning");
    }
}

