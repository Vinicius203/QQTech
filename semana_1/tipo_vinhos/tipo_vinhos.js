function processVinho() {
    let tinto = 0;
    let rose = 0;
    let branco = 0;

    while (true) {
        let tipo_vinho = prompt("Entre com o tipo de vinho: (T)into (R)ose (B)ranco (F)inalizar").toUpperCase();

        if (tipo_vinho === "F") {
            break;
        } else if (tipo_vinho === "T") {
            tinto++;
        } else if (tipo_vinho === "R") {
            rose++;
        } else if (tipo_vinho === "B") {
            branco++;
        } else {
            alert("O tipo de vinho é inválido!");
        }
    }

    let total = branco + tinto + rose;
    let brancoPercentage = (branco * 100 / total).toFixed(2);
    let rosePercentage = (rose * 100 / total).toFixed(2);
    let tintoPercentage = (tinto * 100 / total).toFixed(2);

    document.getElementById("brancoPercentage").textContent = `Branco: ${brancoPercentage}%`;
    document.getElementById("rosePercentage").textContent = `Rose: ${rosePercentage}%`;
    document.getElementById("tintoPercentage").textContent = `Tinto: ${tintoPercentage}%`;

    alert(`Resultados:\n${brancoPercentage}% Branco\n${rosePercentage}% Rose\n${tintoPercentage}% Tinto`);
}