let key = 7;
let abecedario = [...'aábcdeéfghiíjklmnñoópqrstuúüvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ0123456789 aábcdeéfghiíjklmnñoópqrstuúüvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ0123456789 '];


function cifrar(){
    let Message = document.getElementById("Mensaje").value;
    let Longitud = Message.length;
    let MessageCifrado = [];
    
    if(Longitud == 0){
        alert("Escriba un mensaje por favor!");
        return;
    }

    document.getElementById("EncabezadoMessage").innerHTML = "El mensaje cifrado es:"

    
    for(i=0; i<Longitud; i++){
        for(j=0; j<65; j++){
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
    let Message = document.getElementById("Mensaje").value;
    let Longitud = Message.length;
    let MessageDescifrado = [];
    
    if(Longitud == 0){
        alert("Escriba un mensaje por favor!");
        return;
    }

    for(i=0; i<Longitud; i++){
        for(j=65; j<abecedario.length; j++){
            if(Message[i] == abecedario[j]){
                MessageDescifrado[i] = abecedario[j-key];
            }
        }
    }

    MessageDescifrado = MessageDescifrado.join("");
    console.log(MessageDescifrado);
    
    document.getElementById("EncabezadoMessage").innerHTML = "El mensaje descifrado es:"

    document.getElementById("MessageEncrypt").innerHTML = MessageDescifrado;
}
