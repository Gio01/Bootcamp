''''
This version that I made was not the manner in which he wanted it done! I was trying to get 
the user to be able to create their own functinality through the command line and that 
can be kinda hard and then on the security perspective that can be rather dangerous if the 
user is able to hijack that eval() call to execute their own commands
'''

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y
        
def divide(x, y):
    return x / y

functionality = {
    'add': lambda x, y : x + y,
    'subtract': lambda x, y: x - y,
    'multiply': lambda x, y: x * y,
    'divide': lambda x, y: x / y 
}

operations = {'1': functionality['add'], '2':  functionality['subtract'], '3':  functionality['multiply'], 
'4':  functionality['divide']}

def userInput():
    str = "\nEnter your choice: \n"
    ct = 0
    for key, val in functionality.items():
        ct += 1
        str += f"{ct} {key}\n"

    str += f"{len(functionality) + 1} Add new functionlity! Pass a <name, lambda function>! \n"
    str += f"{len(functionality) + 2}. Exit \n"
    return input(str)
    

def addOperations(name, operation):
    #check to see if the operation exists or not
    if operation in operations:
        return
    else:
        functionality[name] =  operation
        


while True:

    #addOperations('power', lambda x ,y : x ** y)
    print(functionality)
    user_input = userInput()

    if int(user_input) == len(operations)+1:
        print(len(operations)+1)
        name = input("enter a name of the function\n")
        lambda_function = input("enter a lambda function\n")
        addOperations(name, eval(lambda_function))
        print(functionality)

        ''''
        Need a way to create te lambda programatically
        This is over the top but just thought it would be cool if the user could create their own 
        functionality! '''
        no1 = int(input('Enter the first number: '))
        no2 = int(input('Enter the second number: '))
        
        print(operations[user_input](no1, no2))
        break

    if int(user_input) == len(operations)+2:
        print(len(operations))
        break # we break from the while loop 

    elif int(user_input) < 1 or int(user_input) > len(operations)+1:
        print('Invalid Choice!')
        continue
    
    else:
        no1 = int(input('Enter the first number: '))
        no2 = int(input('Enter the second number: '))
        
        print(operations[user_input](no1, no2))
        
print('Finished Operation!')
print(len(operations))
