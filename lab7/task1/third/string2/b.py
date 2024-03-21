def count_hi(str):
  count = 0
  for i in range(0, len(str) - 1):
    if(str[i] + str[i + 1] == 'hi'):
      count += 1
  return count

print(count_hi('abc hi ho'))
print(count_hi('ABChi hi'))
print(count_hi('hihi'))