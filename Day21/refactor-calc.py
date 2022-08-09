def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y
        
def divide(x, y):
    return x / y
        
operations = {'1': add, '2': subtract, '3': multiply, '4': divide}

do_loop = True
while do_loop:

    user_input = input('''
    Enter your choice:
        1. Add
        2. Subtract
        3. Multiply
        4. Divide
        5. Exit
''')

    if int(user_input) == 5:
        break # we break from the while loop 

    elif int(user_input) < 1 or int(user_input) > 5:
        print('Invalid Choice!')
        continue
    
    else:
        no1 = int(input('Enter the first number: '))
        no2 = int(input('Enter the second number: '))
        
        print(operations[user_input](no1, no2))
        
print('Finished Operation!')

'''
He said this was perfect!! Perfect use of higher order functions!

Since every function can be treated as just another variable/data
'''