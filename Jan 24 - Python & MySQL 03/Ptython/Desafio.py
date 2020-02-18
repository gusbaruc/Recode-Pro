#O 'w' significa Write
arquivo=open("Desafio.txt", "w")
for i in range(1, 10001):
    arquivo.write("Linha %s\n" %(i))
arquivo.close()

lista = []

#O 'r' significa Read
arquivo=open("Desafio.txt", "r")
for linha in arquivo.readlines():
    print(linha)
    lista.append(linha)
arquivo.close()

print("Lista:", lista)
