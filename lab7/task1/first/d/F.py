b = input()
arr = list(map(int, input().split()))
counter = 0
i = 0

while i < len(arr) - 2:
    if(arr[i] < arr[i+1]  and arr[i+1] > arr[i+2]):
        counter +=1
    i += 1

print(counter)


