def sleep_in(weekday, vacation):
  if(not weekday):
    return True
  elif(vacation):
    return True
  else:
    return False
  
print(sleep_in(False, False))
print(sleep_in(True, False) )
print(sleep_in(False, True))