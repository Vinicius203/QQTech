function createNoteInputs() {

    const numNotes = parseInt(document.getElementById('numNotes').value);
    const noteInputsDiv = document.getElementById('noteInputs');
    noteInputsDiv.innerHTML = '';

    for (let i = 1; i <= numNotes; i++) {

        const inputLabel = document.createElement('label');

        inputLabel.innerText = `Entre com a nota Nº ${i}: `;

        const inputField = document.createElement('input');

        inputField.type = 'number';
        inputField.name = `note${i}`;
        inputField.classList.add('inputs')

        noteInputsDiv.appendChild(inputLabel);
        noteInputsDiv.appendChild(inputField);
        noteInputsDiv.appendChild(document.createElement('br'));
    }

}

function getMeans() {
    const inputFields = document.querySelectorAll('.inputs');
    const numNotes = inputFields.length;
    const name = document.getElementById('getName').value;

    let sum = 0;

    for (let i = 0; i < numNotes; i++) {
        const noteValue = parseFloat(inputFields[i].value);
        if (!isNaN(noteValue)) {
            sum += noteValue;
        }
    }

    if (numNotes > 0) {
        const average = sum / numNotes;
        const resultDiv = document.createElement('div');

        if (average < 4) {
            resultDiv.innerHTML = `A média das notas do aluno(a) ${name} é: ${average.toFixed(2)}. Você foi reprovado!`;
        }
        else if (average >= 6) {
            resultDiv.innerHTML = `A média das notas do aluno(a) ${name} é: ${average.toFixed(2)}. Você foi aprovado!`;
        }
        else {
            resultDiv.innerHTML = `A média das notas do aluno(a) ${name} é: ${average.toFixed(2)}. Você tem direito a realizar a recuperação!`;
        }

        const noteInputsDiv = document.getElementById('noteInputs');
        noteInputsDiv.appendChild(resultDiv);
    }
}
