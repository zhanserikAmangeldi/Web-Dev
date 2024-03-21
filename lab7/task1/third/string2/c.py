def cat_dog(str):
  countDog = 0
  countCat = 0
  for i in range(0, len(str) - 2):
    temp = str[i] + str[i + 1] + str[i + 2]
    if(temp == 'cat'):
      countCat += 1
    elif(temp == 'dog'):
      countDog += 1
  return countDog == countCat

print(cat_dog('catdog'))
print(cat_dog('catcat'))
print(cat_dog('1cat1cadodog'))