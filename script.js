function converterBases(event) {
    let origem = event.target.id;
    let valor = event.target.value;

    if (valor == "") {
        document.getElementById("decimal").value = "";
        document.getElementById("octal").value = "";
        document.getElementById("hex").value = "";
        document.getElementById("binary").value = "";
        return;
    }

    let decimal;

        let bases = { decimal: 10, octal: 8, hex: 16, binary: 2 };
        decimal = parseInt(valor, bases[origem]);

        if (isNaN(decimal)) return;

        document.getElementById("decimal").value = decimal;
        document.getElementById("octal").value = decimal.toString(8);
        document.getElementById("hex").value = decimal.toString(16).toUpperCase();
        document.getElementById("binary").value = decimal.toString(2);
    
}

// Adiciona o evento a todos os inputs
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", converterBases);
});