n = int(input())
arr = []
i = 0

while i <= n:
    if(2**i <= n):
        arr.append(2**i)
    i += 1

if(n in arr):
    print("YES")
else:
    print("NO")