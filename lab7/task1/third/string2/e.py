def end_other(a, b):
  return a.lower()[-1 * (len(b)):] == b.lower() if(len(a) > len(b)) else b.lower()[-1 * (len(a)):] == a.lower()
  
print(end_other('Hiabc', 'abc'))
print(end_other('aBc', 'Hiabc'))
print(end_other('abc', 'abXabc'))