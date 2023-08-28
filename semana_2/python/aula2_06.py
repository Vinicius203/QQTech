def calcula_fatorial(n):
    if n == 1:
        return 1
    
    return n * calcula_fatorial(n-1)

n = int(input("Entre com o número para que o seu fatorial seja calculado: "))
resultado = calcula_fatorial(n)
print(f'O fatorial de {n} é igual a {resultado}.')