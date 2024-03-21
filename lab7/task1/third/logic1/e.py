def sorta_sum(a, b):
  if( a + b >= 10 and a + b <= 19):
    return 20
  else:
    return a + b

print(sorta_sum(3, 4))
print(sorta_sum(9, 4))
print(sorta_sum(10, 11))