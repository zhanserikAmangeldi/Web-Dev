def lucky_sum(a, b, c):
  if(a == 13):
    return 0
  elif(b == 13):
    return a if (a!=13) else 0
  elif(c == 13):
    return a + b
  else:
    return a + b + c