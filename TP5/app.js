function calcular() {
    // Obtenemos los valores de los inputs
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operacion").value;
    let resultado;

    // Estructura Condicional Compuesta (if...else) [cite: 62, 63]
    if (op === "suma") {
        resultado = n1 + n2;
    } 
    else if (op === "resta") {
        resultado = n1 - n2;
    } 
    else if (op === "multiplicacion") {
        resultado = n1 * n2;
    } 
    else if (op === "division") {
        if (n2 !== 0) {
            resultado = n1 / n2;
        } else {
            resultado = "Error: Div por 0";
        }
    }

    
    document.getElementById("pantalla-resultado").innerHTML = `
        <div class="card">
            <h3>Resultado Final</h3>
            <p style="font-size: 2.5rem; font-weight: bold; color: #764ba2;">${resultado}</p>
            <button onclick="location.reload()" class="btn-calcular">Nueva Operación</button>
        </div>
    `;
}