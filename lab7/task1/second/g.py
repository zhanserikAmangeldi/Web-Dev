if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    arr_set = sorted(list(set(arr)))
    print(arr_set[-2])
    
    
