lista01 = ['Tristeza', 'Felicidade', 'Vaidade', 'Luxuria', 'Raiva']

#Exclui um item da lista
#(Se não houver passagem de parâmetros exclui o último)
lista01.pop(3)
print(lista01)

#Adiciona um item á lista ao final da lista
lista01.append('Gratidão')
print(lista01)

#Adiciona um item na casa que você definir
lista01.insert(1, 'Inveja')
print(lista01)

#Mostra o endereço de memória do objeto
print(id(lista01))
