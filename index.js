const encriptarTexto = () => {
    let textoRecibido = document.getElementById("campoTexto").value;

    let textoResultado = textoRecibido
                            .replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById("respuesta").textContent = textoResultado;
    document.getElementById("resultadoRespuesta").classList.add("resultadoRespuesta")
    ocultarElementos();
}

const desencriptarTexto = () => {
    let textoRecibido = document.getElementById("campoTexto").value;

    let textoResultado = textoRecibido
                            .replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    document.getElementById("respuesta").textContent = textoResultado;
    ocultarElementos();  
}

const ocultarElementos = () => {
    document.getElementById("imagenRespuesta").style.display = "none";
    document.getElementById("ningunMensaje").style.display = "none";
    document.getElementById("ingresaMensaje").style.display = "none";
    document.getElementById("buttonCopiar").style.display = "block"
    document.getElementById("resultadoRespuesta").classList.remove("resultadoRespuesta1")
    document.getElementById("resultadoRespuesta").classList.add("formatoRespuesta")
}


