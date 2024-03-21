def not_string(str):
  return "not " + str if str[0:3] != "not" else str


print(not_string('candy'))
print(not_string('x'))
print(not_string('not bad'))