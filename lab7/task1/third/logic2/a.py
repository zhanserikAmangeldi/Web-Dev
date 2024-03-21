def make_bricks(small, big, goal):
  if(goal > big * 5):
    return small >= goal - big*5
  else:
    return small >= goal%5