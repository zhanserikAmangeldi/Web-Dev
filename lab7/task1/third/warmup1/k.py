def front_back(str):
  return str[len(str) - 1] + str[1:len(str) -1] + str[0] if len(str) > 1 else str 

print(front_back('code'))
print(front_back('a'))
print(front_back('ab'))
