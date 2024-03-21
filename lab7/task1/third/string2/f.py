def xyz_there(str):
  a = 0
  b = 0
  
  for i in range(0, len(str) - 2):
    if('.' != str[i - 1] and 'xyz' == str[i:i + 3] ):
      return True
      
  return False

print(xyz_there('abcxyz'))
print(xyz_there('abc.xyz'))
print(xyz_there('xyz.abc'))