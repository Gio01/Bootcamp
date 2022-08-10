#refactored assignment-01

from ast import arguments


add = lambda x, y: x + y
subtract = lambda x, y: x - y
multiply = lambda x, y: x * y
divide = lambda x, y: x / y
power = lambda x, y: x ** y
is_even = lambda x: x % 2 == 0
is_odd = lambda x: x % 2 != 0 

operations = { }

def get_operands(num_inputs):
    '''
    Any time you think of a for loop in python think about using 
    a list comprehension instead!!

    So here what we are doing is that we have specified the number of inputs
    that are going to be needed for each of the operatio functions in the 
    load_operations() by adding another param arg such as 2. Then from that we 
    pass that value into the do_operation function and then we get that value
    here in num_inputs and here below we are simply returning a tuple! Remember
    that by default returning multiple return values are in the form of a tuple
    so that is what we are creating here so that python is able to return the 
    multiple return values! 

    Here we are just using a list comprehension to iterate through the number
    of inputs and then we are simply going to print out Enter value and take 
    in the user inputs required based on the number of inputs needed for each
    of the operation functions!!
    '''
    return ([(int(input(f"Enter value {i+1}: "))) for i in range(num_inputs)])

def do_operation(op, **kwargs):
    no_operands = kwargs.setdefault('operands', 1)
    '''
    Here what we do is that if there is no value given into the operands then we are
    creating a default value to be that of operands = 1 meaning 1 input and in this
    manner we are then not required to pass in an operands = 1 as it is defaulted for us
    '''
    args = get_operands(no_operands) # n1, n2 = get_operands()
    result = op(*args) # op(n1, n2)
    print(result)

def op_exit():
    exit()

def load_operations():
    operations['1'] = {'menu': 'Add', 'operation' :  lambda: do_operation(add, operands=2)} 
    operations['2'] = {'menu': 'Subtract', 'operation': lambda : do_operation(subtract, operands=2)}
    operations['3'] = {'menu': 'Multiply', 'operation': lambda : do_operation(multiply, operands=2)}
    operations['4'] = {'menu': 'Divide', 'operation': lambda : do_operation(divide, operands=2)}
    operations['5'] = {'menu': 'Power', 'operation': lambda : do_operation(power, operands=2)}
    operations['6'] = {'menu' : 'Modulus', 'operation': lambda: do_operation(lambda x,y : x % y, operands=2)}
    operations['7'] = {'menu' : 'IsEven', 'operation': lambda: do_operation(is_even)}
    operations['8'] = {'menu' : 'IsOdd', 'operation': lambda: do_operation(is_odd)}
    operations['9'] = {'menu' :'Exit', 'operation' : op_exit}

'''
Now here '''

'''
Here we need to use the lambda within the dictionary because we are just naming the operations here 
and not wanting to run them! Without the lambda  these functions would run! 
A lamdba is like creating an anonymous function in JS so just a function without a name! 

Since we are running the load_operations() here we are just wanting to declare the function and not run it
so we are declaring an anonymous function with a function inside like we did before with the nested functions!

excpt here we are just not giving the outer function a name and simply using the lambda to create that outer
anonymous function! In this manner we only declare the functions within the dictionary and not run them!!

'''

def get_user_choice():
    for op in operations:
        print(f"{op}. {operations[op]['menu']}")
    user_choice = input("Enter you choice : ")
    return user_choice


def run():
    load_operations()
    while True:
        user_choice = get_user_choice()
        if user_choice not in operations:
            print("invalid choice")
            continue
        operations[user_choice]['operation']()
    


run()

'''
In this manner we can just add a new function easily by creating a new method and then updating that 
as a new entry in the operations array of dictionaries!
'''