b = input()
arr = list(map(int, input().split()))

i = 0

while i < len(arr):
    if(arr[i]%2 == 0):
        print(arr[i], end=" ")
    i += 1

