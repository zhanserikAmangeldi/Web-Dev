def xor(a, b):
    if((a or b) and not (a and b)):
        return 1
    else: 
        return 0


a, b = map(int, input().split())

print(xor(a, b))