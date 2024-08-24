const MODO = {
    CRIPTOGRAFAR: "CRIPTOGRAFAR",
    DESCRIPTOGRAFAR: "DESCRIPTOGRAFAR",
}

let modoSelecionado = MODO.CRIPTOGRAFAR

function selecionarModo(modo) {
    modoSelecionado = modo
    calcular()
}

function calcular() {
    const botaoCriptografar = document.getElementById("criptografar")
    const botaoDescriptografar = document.getElementById("descriptografar")
    botaoCriptografar.classList.remove("botao-primario")
    botaoDescriptografar.classList.remove("botao-primario")
    switch (modoSelecionado) {
        case MODO.CRIPTOGRAFAR:
            botaoCriptografar.classList.add("botao-primario")
            criptografar()
            break;
        case MODO.DESCRIPTOGRAFAR:
            botaoDescriptografar.classList.add("botao-primario")
            descriptografar()
            break;
        default:
            break;
    }
    const vazio1 = document.getElementById("vazio-1")
    const vazio2 = document.getElementById("vazio-2")
    const vazio3 = document.getElementById("vazio-3")
    const destino = document.getElementById("destino")
    const copiar = document.getElementById("copiar")
    const elementos = [
        vazio1,
        vazio2,
        vazio3,
        destino,
        copiar,
    ]
    const esconder = []
    if (!destino.value) {
        esconder.push(destino, copiar)
    } else {
        esconder.push(vazio1, vazio2, vazio3)
    }
    elementos.forEach(elemento => elemento.classList.remove("esconder"))
    esconder.forEach(elemento => elemento.classList.add("esconder"))
}

function criptografar() {
    document.getElementById("destino").value = ""
    const texto = document.getElementById("origem").value
    const normalizado = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    document.getElementById("origem").value = normalizado
    const resultado = normalizado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
    document.getElementById("destino").value = resultado
}

function descriptografar() {
    document.getElementById("destino").value = ""
    const texto = document.getElementById("origem").value
    const normalizado = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    document.getElementById("origem").value = normalizado
    const resultado = normalizado
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
    document.getElementById("destino").value = resultado
}

function copiar() {
    const resultado = document.getElementById("destino").value
    navigator.clipboard.writeText(resultado)
    alert("Copiado para a área de transferência!")
}

calcular()