def double_char(str):
  res = ''
  for i in str:
    res += i + i
  return res


print(double_char('The'))
print(double_char('AAbb'))
print(double_char('Hi-There'))