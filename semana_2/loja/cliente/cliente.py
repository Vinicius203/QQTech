from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import openpyxl
import os

app = Flask(__name__)
app.static_folder = "static"

CORS(app)


@app.route("/")
def index():
    return render_template("cliente.html")


@app.route("/gerar-relatorio", methods=["POST"])
def gerar_relatorio():
    try:
        data = request.json
        print("Dados recebidos: ", data)
        client_list = []
        client_list.extend(data)

        workbook = openpyxl.Workbook()
        sheet = workbook.active
        sheet.append(["Nome", "Data de Nascimento", "CPF", "Cadastro", "Score"])

        for client_data in client_list:
            sheet.append(client_data)

        report_path = "static/report.xlsx"
        workbook.save(report_path)

        return jsonify({"success": True, "output_path": report_path})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)
