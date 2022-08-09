
'''
Functions in python are first class functions which means that we can 
treat functions as data and hence can pass functions into function params as 
they are just data! 

Similar to that of JS! 

Basically any function is treated as any other variable and are just of type function!
So you can pass functions as params into a function, assign a functin to a variable,
and even return a function from within a function
'''

print('First class functions')

def fn():
    print('fn')

fn() #fn

x = fn
x() #fn


def exec(f):
    f()
    print('passing a function as a param')

exec(fn)

#functions can be returned as return values

def outer():
    def inner():
        print('inner function invoked')
    return inner

inner_fn = outer()
inner_fn()

def adder(x):
    def add(y):
        return x + y
    return add

adder_with_10 = adder(10)
print(adder_with_10)# location of the add function but it contains the value of 
#x that we passed!!
print(adder_with_10(20))