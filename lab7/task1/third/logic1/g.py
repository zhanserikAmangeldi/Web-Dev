def love6(a, b):
  return True if((a==6 or b==6) or (a+b == 6 or abs(a-b) == 6)) else False


print(love6(6, 4))
print(love6(4, 5))
print(love6(1, 5))