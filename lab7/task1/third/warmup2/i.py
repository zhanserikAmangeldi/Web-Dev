# def string_match(a, b):
#   count = 0
#   min_string = a if(len(a) < len(b)) else b
#   sub_strings = [min_string[i:j] for i in range(len(min_string)) for j in range(i + 1, len(min_string))]
  
#   sub_strings = list(filter( lambda x: True if len(x) == 2 else False , sub_strings ))
  
#   print(sub_strings)

#   for i in sub_strings:
#     if(i in a and i in b):
#       count += 1
  
#   return count

def string_match(a, b):
    count = 0
    min_string = a if(len(a) < len(b)) else b
    sub_strings = [min_string[i:j + 1] for i in range(len(min_string)) for j in range(i + 1, len(min_string))]
  
    sub_strings = list(set(filter( lambda x: True if len(x) == 2 else False  , sub_strings )))

    for j in sub_strings:
        for i in range(len(min_string) - 1):
            if(a[i] + a[i + 1] == j and b[i] + b[i + 1] == j):

                count+=1
    return count
