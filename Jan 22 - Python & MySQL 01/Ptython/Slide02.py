nome = 'Baruc'
idade = 20

print("O %s tem %s anos de idade." %(nome, idade))
print("O", nome, "tem", idade, "anos de idade.")
print("")


minha_lista = [1, 2, 3.14, 'quatro', 5, 6.16]

#Mostra o vetor completo
print("1° Exemplo:", minha_lista)
#Exibe apenas o valor armazenado na casa 'x'
print("2° Exemplo:", minha_lista[2])
#Exibe os valores entre a casa 'x' a casa 'y'
#(Ñ exibe o valor da última casa de referência)
print("3° Exemplo:", minha_lista[1:5])
#Do começo ao fim pulando de 2 em 2
print("4° Exemplo:", minha_lista[::2])
#Do fim ao começo
print("8° Exemplo:", minha_lista[::-1])
#Do fim ao começo pulando de 2 em 2
print("9° Exemplo:", minha_lista[::-2])
#Não exibe os 2 ultimos itens do vetor
print("10° Exemplo:", minha_lista[:-2])
