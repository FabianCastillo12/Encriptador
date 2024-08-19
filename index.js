const encriptarTexto = () => {
    let textoRecibido = document.getElementById("campoTexto").value;

    let textoResultado = textoRecibido
                            .replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById("resultadoRespuesta").textContent = textoResultado;
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

    document.getElementById("resultadoRespuesta").textContent = textoResultado;
    ocultarElementos();
    
}

const ocultarElementos = () => {
    document.getElementById("imagenRespuesta").style.display = "none"
}

