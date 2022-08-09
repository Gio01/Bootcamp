
# def operation(fn, x, y):
#     print('invocation started')
#     result = fn(x,y)
#     print('invocation completed')
#     return result

"""
Instead what we can do not is create a wrapper function around the operation
function so that we can pass in the refernce to the operation function as the 
paramater and then return the operation() func above as the return value so that
we just need to pass in the x and y values and the inner function within the 
wrapper function can handle that operation the user wants!"""

def log(operation):
    def logOperation(x,y):
        print('invocation started')
        result = operation(x, y)
        print('invocation completed')
        print(result)
    return logOperation

def add(x,y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y): 
    return  x * y

def divide(x, y):
    return x / y

log_add = log(add)
'''
So here what we do is pass the add function into the log parameter and then 
then in the process() we can simply invoke this variable since it has the 
returned function of logOperation as refence and simply pass in the x and y
values so that it does tha calcultaions for us in a generalized manner

log_add = log(add) #where add is refenrence to the operation function add
log_add(100,200)


'''
log_subtract = log(subtract)
log_multiply = log(multiply)
log_divide = log(divide)

def process(x,y):

    log_add(100,200)
    log_subtract(100, 200)
    log_multiply(100, 200)
    log_divide(100, 200)
    # print(operation(add, x, y))
    # print(operation(subtract, x, y))
    # print(operation(multiply, x, y))
    # print(operation(divide, x, y))

process(100,200)

'''
So here what we can do is that instead of writing all of that logic into 
each of the function we can create a general function and then pass in
the operation function as a param value with the values we want and then
invoke that function with the values based on the operation function 
we pass into the operation function!
'''

