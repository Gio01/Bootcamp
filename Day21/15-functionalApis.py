#Filter


data = [-5, -1, 1, 4]

def is_positive(n):
    return n >= 0

list(filter(is_positive, data)) #returns an iterable so we can wrap it in a list!

# another manner is to simply pass in a lambda directly instead of the is_positive fn

print(list(filter(lambda n: n >= 0, data)))

'''
So when we need to use some predicate/some fn that returns True or False can be 
used into the filter function to filter for something!
'''

#Map
product_names = ['pen', 'pencil', 'marker']

print(list(map(lambda p: len(p), product_names)))

print(list(map(len, product_names)))
'''
So here while the lambda does work, len on its own is a function so there
is no need to create another function just to get the returned value of the 
length! So here just passing len will work aswell! 
'''

list1 = [2,3,4]
list2 = [4,2,3]

list(map(lambda x,y: x * y, list1, list2))
'''
so in this manner we can have transformations happening with multiple lists against
each other!! the number of lists that can be added into map are indefinite! 

The transformations are also based on the len of the smallest list and everything 
else in another list will be ignored!

'''

#reduce is used to reduce a list of things into one element! (aggregation)
from functools import reduce

tens = [10,20,30,40,50]
print(reduce(lambda x, y: x + y, tens))

def count(count, no):
    print('previous result ->', count, 'no -> ', no)
    if no % 2==0:
        count['even'] += 1
    else:
        count['odd'] += 1
  
    return count

print(reduce(count, tens, {'even': 0, 'odd': 0}))

print(reduce(lambda count, i: count + (i % 2 ==0), tens, 0)) #gets even!

