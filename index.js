var key = 7;
var abecedario = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789 '];


function cifrar(){
    var Message = document.getElementById("Mensaje").value;
    var Longitud = Message.length;
    var MessageCifrado = [];
    
    if(Longitud == 0){
        alert("Escriba un mensaje por favor!");
        return;
    }

    document.getElementById("EncabezadoMessage").innerHTML = "El mensaje cifrado es:"

    
    for(i=0; i<=Longitud; i++){
        for(j=0; j<62; j++){
            if(Message[i] == abecedario[j]){
                MessageCifrado[i] = abecedario[j+key];
            }
        }
    }

    MessageCifrado = MessageCifrado.join("");

    /* MessageCifrado = MessageCifrado.replace(/,/g, ''); */
    console.log(MessageCifrado);

    document.getElementById("MessageEncrypt").innerHTML = MessageCifrado;
}

function descifrar(){
    var Message = document.getElementById("Mensaje").value;
    var Longitud = Message.length;
    var MessageDescifrado = [];
    
    if(Longitud == 0){
        alert("Escriba un mensaje por favor!");
        return;
    }

    for(i=0; i<Longitud; i++){
        for(j=62; j<abecedario.length; j++){
            if(Message[i] == abecedario[j]){
                MessageDescifrado[i] = abecedario[j-key];
            }
        }
    }

    MessageDescifrado = MessageDescifrado.join("");
    
    document.getElementById("EncabezadoMessage").innerHTML = "El mensaje descifrado es:"

    document.getElementById("MessageEncrypt").innerHTML = MessageDescifrado;
}