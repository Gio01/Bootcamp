import functools
from locale import currency

def log(fn):
    @functools.wraps(fn)#in this manner we can retain the fn() name
    def log_fn(*args):
        print('invocation started')
        #print(fn()) add function
        result = fn(*args)
        print('invocation completed')
        return result
    return log_fn

# def fn():
#     print('fn invoked')

# logged_fn = log(fn)
# logged_fn()

@log
def fn(): #this is replaced with log(fn) so what we are doing is calling the log_fn
    #and then we run this fn! so it looses its own name since we are doing log(fn) instead!
    print('fn invoked')

fn()

print('name of fn -> ', fn.__name__)
'''
Decorators are called before the definition of a function you want to decorate!!
So in this manner @log will run which needs fn() which is defined after the decorater
and hence the decorated will have access to that fn() and will be able to run its code!
In this manner we can simply run fn() instead of needing to feed in fn into log(fn)
as a param arg! 

notice here that we can pass these arguments from the add into the log_fn through the
use of *args!!! 
'''

@log
def add(x,y):
    print('add func')
    return x + y

print(add(100,200))

""" Decorators use cases """

import time

def record_time(fn):
    @functools.wraps(fn)
    def time_wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = fn(*args, **kwargs)
        end = time.perf_counter()
        time_taken = end - start
        print(f"finished executing {fn.__name__} in {time_taken:.4f} seconds")
    return time_wrapper

@log #this would run first! and have the fn(*args) be that of the record_time! 
@record_time
def do_something(no_times):
    for _ in range(no_times):
        sum([i ** 2 for i in range(10000)])

do_something(100)

"""
So basically when we run a function that has a decorator what happens is that 
we are not calling the decorated function but rather the inner function 
within the decorater function!! So think about that when implementing decorators
so that you can better see where data is going an where the args are moving to!
"""


