def validar_formula(i):
    while(i == 1):
        print("Que tipo de operação você deseja?\n")
        print("[a] - Adição\n[s] - Subtração\n[m] - Multiplicação\n[d] - Divisão\n")
        formula = input("[p] - Potência\n[r] - Raíz Quadrada\n\nDigite: ")

        if(formula=="p" or formula=="r"):
            v1 = int(input("Digite o valor: "))
            calculadora(formula, v1)
            i = 2
        elif(formula == "a" or formula == "s" or formula == "m" or formula == "d"):
            v1 = int(input("Digite o 1° valor: "))
            v2 = int(input("Digite o 2° valor: "))
            calculadora(formula, v1, v2)
            i = 2
        else:
            print("Formula inválida!\n")


def calculadora(f=0, x=0, y=0):
    if (f == "a"):
        print("%d + %d =" %(x, y), x+y)
    if (f == "s"):
        print("%d - %d =" %(x, y), x-y)
    if (f == "m"):
        print("%d * %d =" %(x, y), x*y)
    if (f == "d"):
        print("%d / %d =" %(x, y), x/y)
    if (f == "p"):
        print("%d ^ 2 =" %(x), x**2)
    if (f == "r"):
        print("rQ %d =" %(x), x**0.5)


continuar = 1

print("CALCULADORA\n")
print("Bem vindo usuário!")
validar_formula(continuar)
