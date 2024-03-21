def no_teen_sum(a, b, c):
  nums = filter(fix_teen, [a, b, c])
  
  return sum(nums)
  
  
def fix_teen(n):
  return not (n >= 13 and n <= 19 and not (n == 15 or n == 16))
