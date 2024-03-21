def last2(str):
  count = 0
  substring = str[-2:]
  
  for i in range(len(str) - 2):
    temp = str[i] + str[i+1]
    if(temp == substring):
      count += 1
  
  return count
