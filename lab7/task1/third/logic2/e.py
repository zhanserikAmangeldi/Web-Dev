def round_sum(a, b, c):
  nums = map(round10, [a, b, c])
  return sum(nums)
  
def round10(num):
  return (int(num/10) + 1) * 10 if(num%10 >= 5) else int(num/10) * 10 

    