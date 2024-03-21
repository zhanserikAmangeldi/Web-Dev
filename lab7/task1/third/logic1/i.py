def near_ten(num):
  return True if( (num%10 >= 0 and num%10 <= 2) or (10 - num%10 >= 0 and 10 - num%10 <= 2) ) else False

print(near_ten(12))
print(near_ten(17))
print(near_ten(19))