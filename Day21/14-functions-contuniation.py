# def add(x, y):
#     return x + y

''' 
Using this *args is how we can get many params into a functiion in the
form of a tuple! In a similar manner of how we made variadic functions
in JS using the arguments keyword to access the values passed into 
the param *args! 

Recal variadic function are functions that can take many inputs 
'''

def fn(*args):
    print(args)

def add(x,y, *args):
    print(x, y, args)

#if the input is add(10, 20, 30, 40, 50)
#x = 10, y = 20, args = (30, 40, 50)

'''
You can also pass in arguments to this add() function in the form 
of an array! You just need to use * on that data!

ex: 
data = [10,20,30,40,50,60]
add(*data)
10 20 (30, 40, 50, 60)

So here what we are doing is passing the entire array as an arg to
the add function and then within the functino we are assigning the
values to that of x, y and *args!! 
'''

def fn(**kwargs):
    print(type(kwargs))
    print(kwargs)

def add(x,y,*args, **kwargs):
    print(kwargs)

'''
kvargs is used to pass in any other optional data such as like with 
print where we can specify a delimeter and what to end with instead of \n

ex: print(1,2,3,4, del=',', end='.')

So whenever we want to create optional arguments recall to use kwargs and 
we can set deafult values to these optional arguments through the use of 
setdefault(key, value)
'''