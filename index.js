let key = 7;
let abecedario = [...'aábcdeéfghiíjklmnñoópqrstuúüvwxyzAÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ0123456789 '];

function cifrar() {
    let Message = document.getElementById("Mensaje").value;
    let MessageCifrado = "";

    if (Message.length === 0) {
        alert("Escriba un mensaje por favor!");
        return;
    }

    document.getElementById("EncabezadoMessage").innerHTML = "El mensaje cifrado es:";

    for (let i = 0; i < Message.length; i++) {
        let index = abecedario.indexOf(Message[i]);
        if (index !== -1) {
            let newIndex = (index + key) % abecedario.length;
            MessageCifrado += abecedario[newIndex];
        } else {
            MessageCifrado += Message[i];
        }
    }

    console.log(MessageCifrado);
    document.getElementById("MessageEncrypt").innerHTML = MessageCifrado;
}

function descifrar() {
    let Message = document.getElementById("Mensaje").value;
    let MessageDescifrado = "";

    if (Message.length === 0) {
        alert("Escriba un mensaje por favor!");
        return;
    }

    document.getElementById("EncabezadoMessage").innerHTML = "El mensaje descifrado es:";

    for (let i = 0; i < Message.length; i++) {
        let index = abecedario.indexOf(Message[i]);
        if (index !== -1) {
            let newIndex = (index - key + abecedario.length) % abecedario.length;
            MessageDescifrado += abecedario[newIndex];
        } else {
            MessageDescifrado += Message[i];
        }
    }

    console.log(MessageDescifrado);
    document.getElementById("MessageEncrypt").innerHTML = MessageDescifrado;
}