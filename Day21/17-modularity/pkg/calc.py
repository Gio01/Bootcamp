def add(x,y):
    return x + y 

def subtract(x,y):
    return x - y 

def multiply(x,y):
    return x * y 

def divide(x,y):
    return x / y 


# print(__name__)
# print(add(10,20))
# print(subtract(10, 20))

'''
When we run the app.py these above lines will also run because when we import
a file into app those other files are ran in order to be able to have the functionality
within the app.py module!! 


NOTE: when we run 
        calc.py -> __name__ == __main__
        app.py -> __name__ == calc
        
        This means that when calc.py is main that is because we are running calc.py
        as a standalone script and hence it is the main file that we want to run

        When app.py is ran the __name__ of this file is just calc and the __main__
        would correspond to that of the app.py since that would be the file that is
        being ran!!
'''

if (__name__ == '__main__'):
    print(__name__)
    print(add(10,20))
    print(subtract(10, 20))


'''
So here now what we do is run these print statement only when the calc.py is being 
ran as a standalone script/when this file is the __main__ file!!

'''

