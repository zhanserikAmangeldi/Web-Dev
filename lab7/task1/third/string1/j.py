def combo_string(a, b):
  return b + a + b if(len(a) > len(b)) else a + b + a

print(combo_string('Hello', 'hi'))
print(combo_string('hi', 'Hello'))
print(combo_string('aaa', 'b'))