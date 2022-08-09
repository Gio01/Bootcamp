def greeter():
    name = 'Gio'
    print(f'Hello {name}')

greeter()

def greet(name):
    print(f'Hello {name}')

greet('Gio')

#names arguments
greet(name='Gio')

'''
The benefit of using names argument is that it is  bit more readable and 
also the fact that you can pass arguments in any order by using the 
named argument to refer to which param arg it is that you are 
wanting to pass a value to!
Ex:
'''

# def divide(no, divisor):
#     print (no/divisor)

# print(divide(divisor=7, no=100))

# def divide(no, divisor):
#     return (no/divisor)

# print(divide(100,7))   

def divide(no, divisor):
    qoutient = no// divisor
    remainder = no % divisor
    return qoutient, remainder  #creates a tuple! recall we can create a tuple without
        #the use of () such as x = 20, 10 -> x = (20, 10)

q, _ = divide(100,7) # in this manner we would only care for the quotient and can
#ommit the remainder! 
print(q)

#default arguments
def add(x, y=10):
    return x + y

print(add(10, 20))
print(add(10)) #this would be only x
print(add(x=10))
print(add(x=10, y=20))

#functions with no body
def fn():
    pass

fn() #otherwise without the pass we will get an indentation error so basically
# we would just skip it! It is just a placeholder so that python does not think
# you are trying to add something and that there is an indentation error 
#when you write someone else under that fn() that is you do not want in that fn()!


