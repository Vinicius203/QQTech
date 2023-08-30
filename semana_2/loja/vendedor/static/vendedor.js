const vendedorList = [];

function submitVendedorForm(event) {
    event.preventDefault();

    const vendedorNome = document.getElementById("vendedorNome").value;
    const vendedorMatricula = document.getElementById("vendedorMatricula").value;

    const vendedorData = [vendedorNome, vendedorMatricula];
    vendedorList.push(vendedorData);

    console.log(vendedorList);
}

function findVendedorByMatricula() {
    const matriculaSearch = document.getElementById("consultaMatricula").value;
    const matchingVendedores = [];

    for (let i = 0; i < vendedorList.length; i++) {
        if (vendedorList[i][1].toLowerCase() === matriculaSearch.toLowerCase()) {
            matchingVendedores.push(i);
        }
    }

    if (matchingVendedores.length === 0) {
        alert("Nenhum vendedor encontrado com a matrícula informada!");
        document.getElementById("exibeDadosVendedor").classList.add("hidden");
    } else {
        exibeVendedor(matchingVendedores);
        document.getElementById("exibeDadosVendedor").classList.remove("hidden");
    }
}

function exibeVendedor(indices) {
    const tableBody = document.getElementById("vendedorTableBody");
    tableBody.innerHTML = '';

    for (let i of indices) {
        const row = document.createElement("tr");
        const nomeCell = document.createElement("td");
        const matriculaCell = document.createElement("td");
        const acoesCell = document.createElement("td");

        nomeCell.textContent = vendedorList[i][0];
        matriculaCell.textContent = vendedorList[i][1];

        const excluirButton = document.createElement("button");
        excluirButton.textContent = "Excluir";
        excluirButton.onclick = () => excluirVendedor(i);

        const editarButton = document.createElement("button");
        editarButton.textContent = "Editar";
        editarButton.onclick = () => editarVendedor(i);

        acoesCell.appendChild(excluirButton);
        acoesCell.appendChild(editarButton);

        row.appendChild(nomeCell);
        row.appendChild(matriculaCell);
        row.appendChild(acoesCell);

        tableBody.appendChild(row);
    }

    document.getElementById("exibeDadosVendedor").classList.remove("hidden");
}


function excluirVendedor(index) {
    vendedorList.splice(index, 1);
    exibeVendedor();
}

function editarVendedor(index) {
    const vendedor = vendedorList[index];
    document.getElementById("vendedorNome").value = vendedor[0];
    document.getElementById("vendedorMatricula").value = vendedor[1];

    const submitButton = document.querySelector("#vendedorForm button[type='submit']");
    submitButton.textContent = "Salvar";
    submitButton.onclick = () => salvarEdicaoVendedor(index);

    document.getElementById("cadastroVendedor").classList.remove("hidden");
    document.getElementById("exibeDadosVendedor").classList.add("hidden");
}


function salvarEdicaoVendedor(index) {
    const vendedorNome = document.getElementById("vendedorNome").value;
    const vendedorMatricula = document.getElementById("vendedorMatricula").value;

    vendedorList[index] = [vendedorNome, vendedorMatricula];

    const submitButton = document.querySelector("#vendedorForm button[type='submit']");
    submitButton.textContent = "Submit";
    submitButton.onclick = submitVendedorForm;

    document.getElementById("vendedorForm").reset();
    exibeVendedor();
}

function gerarRelatorio() {
    console.log("Hello");
    const sellerJsonData = JSON.stringify(vendedorList);
    console.log("Dados: ", sellerJsonData);

    fetch("http://localhost:5000/gerar-relatorio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: sellerJsonData
    })
        .then(response => response.json())
        .then(data => {
            console.log("Reponse JSON:", data)
            if (data.success) {
                console.log("Relatório gerado com sucesso! Caminho do arquivo:", data.output_path);
            } else {
                console.error("Erro ao gerar relatório:", data.error);
            }
        })
}

function switchToClientes() {
    window.location.href = '../../cliente/static/cliente.html';
}

function switchToProdutos() {
    window.location.href = '../../produto/static/produto.html';
}

function switchToVendedores() {
    window.location.href = 'vendedor.html';
}
