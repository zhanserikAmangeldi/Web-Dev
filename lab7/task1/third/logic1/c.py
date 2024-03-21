def squirrel_play(temp, is_summer):
  return (temp >= 60 and temp <= 90) or (is_summer and temp <= 100 and temp >= 60)


print(squirrel_play(70, False))
print(squirrel_play(95, False))
print(squirrel_play(96, True))

