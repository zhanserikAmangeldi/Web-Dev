b = input()
arr = list(map(int, input().split()))
counter = 0
i = 0

while i < len(arr) - 1:
    if((arr[i] > 0 and arr[i+1] > 0) or (arr[i] < 0 and arr[i+1] < 0)):
        counter +=1
    i += 1

if(counter > 0):
    print("YES")
else:
    print("NO")

