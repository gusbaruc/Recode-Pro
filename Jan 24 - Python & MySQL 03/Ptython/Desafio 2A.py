#Lendo nome do arquivo
nome = input("Digite o nome do arquivo: ")

lista = []

#Lendo o arquivo
arquivo=open(nome, "r")
for linha in arquivo.readlines():
    lista.append(linha)
arquivo.close()

#Mostrando arquivo armazenado na variável lista
for i in lista:
    print(i)
