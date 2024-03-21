def sum67(nums):
  sum = 0
  i = 0
  count = True
  while(i < len(nums)):
    if(nums[i] == 6):
      count = False
    elif(nums[i] == 7 and not count):
      count = True
      i += 1
      continue
    if(count):
      sum += nums[i]
    i += 1
  return sum
