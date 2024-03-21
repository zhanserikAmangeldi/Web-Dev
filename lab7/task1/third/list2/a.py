def count_evens(nums):
  nums = list(filter(lambda x: True if(x%2==0) else False, nums))
  return len(nums)
