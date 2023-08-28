def calcula_tabuada(n):
    for i in range(0, 11):
        print(f'{i} * {n} = {i*n}')


n = int(input("Qual número você deseja calcular a tabuada? "))
calcula_tabuada(n)