const productList = [];

function submitProductForm(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productCategory = document.getElementById("productCategory").value;
    const productValue = document.getElementById("productValue").value;

    const productData = [productName, productCategory, parseFloat(productValue)];
    productList.push(productData);

    console.log(productList);
}

function findProductByCategory() {
    const categorySearch = document.getElementById("consultaCategoria").value;
    const matchingProducts = [];

    for (let i = 0; i < productList.length; i++) {
        if (productList[i][1].toLowerCase() === categorySearch.toLowerCase()) {
            matchingProducts.push(i);
        }
    }

    if (matchingProducts.length === 0) {
        alert("Nenhum produto encontrado na categoria informada!");
        document.getElementById("exibeDadosProduto").classList.add("hidden");
    } else {
        exibeProduto(matchingProducts);
        document.getElementById("exibeDadosProduto").classList.remove("hidden");
    }
}

function exibeProduto(indices) {
    const tableBody = document.getElementById("produtoTableBody");
    tableBody.innerHTML = '';

    for (let i of indices) {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const categoryCell = document.createElement("td");
        const valueCell = document.createElement("td");

        nameCell.textContent = productList[i][0];
        categoryCell.textContent = productList[i][1];

        const formattedPrice = productList[i][2].toFixed(2);
        valueCell.textContent = `R$ ${formattedPrice}`;

        row.appendChild(nameCell);
        row.appendChild(categoryCell);
        row.appendChild(valueCell);

        tableBody.appendChild(row);
    }

    document.getElementById("exibeDadosProduto").classList.remove("hidden");
}

function gerarRelatorio() {
    console.log("Hello");
    const productJsonData = JSON.stringify(productList);
    console.log("Dados: ", productJsonData);

    fetch("http://localhost:5000/gerar-relatorio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: productJsonData
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
    window.location.href = '../../cliente/templates/cliente.html';
}

function switchToVendedores() {
    window.location.href = '../../vendedor/templates/vendedor.html';
}

function switchToProdutos() {
    window.location.href = 'produto.html';
}
