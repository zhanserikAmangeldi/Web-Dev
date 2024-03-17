b = input()
arr = list(map(int, input().split()))
counter = 0
i = 0

while i < len(arr):
    if(arr[i] > 0):
        counter += 1
    i += 1

print(counter)