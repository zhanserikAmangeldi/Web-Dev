def count_code(str):
  count = 0
  
  for i in range(2, len(str) - 1):
    temp = str[i - 2] + str[i - 1] + str[i + 1]
    
    if(temp == 'coe'):
      count += 1
  
  return count

print(count_code('aaacodebbb'))
print(count_code('codexxcode'))
print(count_code('cozexxcope'))