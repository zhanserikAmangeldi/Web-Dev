n = int(input())

i = 0

while i <= n:
    if(2**i <= n):
        print(2**i, end=" ")
    i += 1