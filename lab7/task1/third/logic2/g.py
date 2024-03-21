def make_chocolate(small, big, goal):
  res = 0
  if(goal/5 <= big):
    res = goal%5 - small
  else:
    res = goal - big *  5 - small
    
  if(res > 0):
    return -1
  else:
    return small - abs(res)
