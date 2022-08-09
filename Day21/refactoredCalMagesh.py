#refactored assignment-01

add = lambda x, y: x + y
subtract = lambda x, y: x - y
multiply = lambda x, y: x * y
divide = lambda x, y: x / y
power = lambda x, y : x ** y

operations = { }

def get_operands():
    n1 = int(input("Enter value 1 : "))
    n2 = int(input("Enter value 2 : "))
    return n1, n2

def do_operation(op):
    n1, n2 = get_operands()
    result = op(n1, n2)
    print(result)

def op_exit():
    exit()

def load_operations():
    operations['1'] = {'menu': 'Add', 'operation' :  lambda: do_operation(add)} 
    operations['2'] = {'menu': 'Subtract', 'operation': lambda : do_operation(subtract)}
    operations['3'] = {'menu': 'Multiply', 'operation': lambda : do_operation(multiply)}
    operations['4'] = {'menu': 'Divide', 'operation': lambda : do_operation(divide)}
    operations['5'] = {'menu': 'Power', 'operation': lambda : do_operation(power)}
    operations['6'] = {'menu' : 'Modulus', 'operation': lambda: do_operation(lambda x,y : x % y)}
    operations['7'] = {'menu' :'Exit', 'operation' : op_exit}

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