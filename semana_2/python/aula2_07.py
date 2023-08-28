def decomposicao(n):
    fatores = []
    divisor = 2

    while n > 1:
        while n % divisor == 0:
            fatores.append(divisor)
            n /= divisor
        divisor += 1

    return fatores

n = int(input("Digite um número inteiro: "))
resultado = decomposicao(n)
print(f"Os fatores primos de {n} são: {resultado}")