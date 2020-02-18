#Lendo nome do arquivo
nome = input("Digite o nome do arquivo: ")
inicio = int(input("Digite a linha de inicio: "))
fim = int(input("Digite a linha de fim: "))

lista = []

#Lendo o arquivo
arquivo=open(nome, "r")
for linha in arquivo.readlines():
    lista.append(linha)
arquivo.close()

#Mostrando arquivo armazenado na variável lista
for i in range(inicio-1, fim):
    print(lista[i])
