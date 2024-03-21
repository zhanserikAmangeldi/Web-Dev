def parrot_trouble(talking, hour):
  return talking and ( hour < 7 or hour > 20 ) 

print(parrot_trouble(True, 10))
print(parrot_trouble(True, 4))
print(parrot_trouble(False, 21))