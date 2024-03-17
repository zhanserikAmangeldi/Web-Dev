import math
x = int(input())
counter = 0
for i in range(1, int(math.sqrt(x)) + 1):
    if(x % i == 0):
        if(x/i == i):
            counter+=1
        else:
            counter += 2


print(counter)
