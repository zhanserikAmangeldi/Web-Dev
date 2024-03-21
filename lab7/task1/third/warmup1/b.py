def monkey_trouble(a_smile, b_smile):
  return not ((a_smile or b_smile) and not (a_smile and b_smile))


print(monkey_trouble(True, True))
print(monkey_trouble(True, False))
print(monkey_trouble(False, True))
print(monkey_trouble(False, False))
