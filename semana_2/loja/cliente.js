function maskCPF() {
    const cpfInputs = document.querySelectorAll('.clienteCPF');

    cpfInputs.forEach(cpfInput => {
        cpfInput.addEventListener('input', () => {
            let inputCPF = cpfInput.value.replace(/[^\d]/g, '');
            let formattedCPF = '';

            for (let i = 0; i < inputCPF.length; i++) {
                if (i === 3 || i === 6) {
                    formattedCPF += '.';
                } else if (i === 9) {
                    formattedCPF += '-';
                }
                formattedCPF += inputCPF[i];
            }

            cpfInput.value = formattedCPF;
        });
    });
}


function limitScoreValue() {
    let scoreInput = document.getElementById("creditScore");
    let scoreLimit = parseInt(scoreInput.value);

    if (scoreLimit > 1000) {
        alert("O valor do score deve ser entre 0 e 1000!");
        scoreInput.value = 1000;
    }
    else if (scoreLimit < 0) {
        alert("O valor do score deve ser entre 0 e 1000!");
        scoreInput.value = 0;
    }
}

const clientList = []

function submitForm(event) {
    event.preventDefault();

    const clientName = document.getElementById("clientName").value;
    const clientBirthdate = document.getElementById("clientBirthdate").value;
    const clientCPF = document.getElementById("clientCPF").value;
    const registerType = document.querySelector('input[name="registerType"]:checked').value;
    const creditScore = document.getElementById("creditScore").value;

    const clientData = [clientName, clientBirthdate, clientCPF, registerType, creditScore]
    clientList.push(clientData)

    console.log(clientList)
}


function findClient() {
    if (clientList.length === 0) {
        alert("Não há nenhum cliente cadastrado!");
    } else {
        const cpfSearch = document.getElementById("consultaCPF").value;
        let clientFound = false;

        for (let i = 0; i < clientList.length; i++) {
            if (cpfSearch === clientList[i][2]) {
                exibeCliente(i);
                clientFound = true;
            }
        }

        if (!clientFound) {
            alert("O cliente não foi encontrado!");
            document.getElementById("exibeDados").classList.add("hidden");
        } else {
            document.getElementById("exibeDados").classList.remove("hidden");
        }
    }
}

function exibeCliente(i) {
    const clientName = document.getElementById("nomeCliente");
    const clientBirthdate = document.getElementById("dataNascimentoCliente");
    const clientCpf = document.getElementById("cpfCliente");
    const clientTipocadastro = document.getElementById("tipoCadastroCliente");
    const clientScore = document.getElementById("Score");

    clientName.textContent = ''
    clientBirthdate.textContent = ''
    clientCpf.textContent = ''
    clientTipocadastro.textContent = ''
    clientScore.textContent = ''

    clientName.textContent = `Nome: ${clientList[i][0]}`;
    clientBirthdate.textContent = `Data de Nascimento: ${clientList[i][1]}`;
    clientCpf.textContent = `CPF: ${clientList[i][2]}`;
    clientTipocadastro.textContent = `Cadastro: ${clientList[i][3]}`;
    clientScore.textContent = `Score: ${clientList[i][4]}`
}

function switchToClientes() {
    window.location.href = 'cliente.html';
}

function switchToProdutos() {
    window.location.href = 'produto.html';
}

function switchToVendedores() {
    window.location.href = 'vendedor.html';
}
