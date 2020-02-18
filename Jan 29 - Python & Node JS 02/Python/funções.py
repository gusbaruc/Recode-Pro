#função
def soma(a, b):
    print(a+b)

print("Função:")
soma(2,9)
soma(7,8)
soma(10,15)

#função com retorno
def soma(a, b):
    return(a+b)

print("\nFunção com retorno:")
print(soma(2,9))
print(soma(7,8))
print(soma(10,15))

#Função de verificação
def eh_par(x):
    return(x%2==0)

print("\nFunção de verificação:")
print(eh_par(2))
print(eh_par(3))
print(eh_par(10))

#Função encadeada
def eh_par(x):
    return(x%2==0)
def par_ou_impar(x):
    if (eh_par(x)==True):
        return "par"
    else:
        return "ímpar"

print("\nFunção encadeada:")
print(par_ou_impar(4))
print(par_ou_impar(5))
print(par_ou_impar(15))

#Função para retornar a pesquisa de uma lista
def pesquise(lista, valor):
    # 'i' = índice, 'e' = elemento
    for i, e in enumerate(lista):
        if e == valor:
            return i

L = [10, 20, 30, 40, 50]

print("\nFunção para retornar a pesquisa de uma lista:")
print(pesquise(L, 25))
print(pesquise(L, 30))
print(pesquise(L, 27))

#Variáveis locais e globais
EMPRESA = "unidos LTDA"

def imprime_cabecalho():
    print(EMPRESA)
    print("-" * len(EMPRESA))

print("\nFormatação e cabeçalho:")
imprime_cabecalho();

#Validação com funções
def faixa_int(min, max):
    while True:
        v = int(input("digite valor: "))
        if v < min or v > max:
            print("Inválido - o valor deve estar entre %d e %d." %(min, max))
        else:
            return print("O valor %s foi validado." %v)

print("\nValidação com funções:")
faixa_int(2, 12)

#Parâmetros opcionais e nomeação
#Parâmetros padrões. Ou seja, se a pessoa não digitar nada n=40 e caractere="*"
def barra(n = 40, caractere = "*"):
    print(caractere * n)

print("\nParâmetros opicionais (definidos ou padrões):")
barra(10) #Faz com que n seja 10
barra(10, "-") #Faz 10 barras com "-"
barra() #Faz 40 barras com "*"

#Função lambda
#Exemplo de função 1
# Dois "*" é potência em Python
def cubo1(num):
    resultado = num ** 3
    return resultado

#Exemplo de função 2
def cubo2(num):
    return num ** 3

#Exemplo de função 3 (Lambda)
#lambda [parâmetros]: [processamento] e ele retorna automaticamente a saída.
cubo3 = lambda num: num ** 3

print("\nFunção Lambda:")
print(cubo3(2))
