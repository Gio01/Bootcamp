def add(x, y):
    return x + y

def is_even(x):
    return x % 2 == 0

'''
Lambda functions returns a function when you create them so you can also 
invoke them!
You can also assign the returned value into a variable and then invoke that 
function

fn = lambda x:x
fn(100)
//100

double = lambda x: x * 2
double(10)
//20
'''

is_even = lambda x: x % 2 == 0
print(is_even(4)) # true






