def max_end3(nums):
  return nums[:1] * 3 if (nums[0] > nums[-1:][0]) else nums[-1:]*3