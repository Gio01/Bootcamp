# try:
#     #do something
# except:
#     #handle the error
# else:
#     #do what needs to be done if there is no error
# finally:
#     #any logic that has to be execute regardless if there is an error or not!

# #raising an exception
# raise Exception('new Error')

# #custom exceptions can be created by creating a new class

# class MyExpection:
#     pass

# raise MyException()


class MyExpection(Exception): #you need to inherit from the Exception class in order 
    #to create your own custom Exception class!
    pass

def doSomething():
    raise MyExpection()

try:
    result = 100 / 'abc'
    doSomething()
    
except TypeError: # this is a type error and we can see that it is if we try to run 
    #result = 100/'abc' on its own since we try to divide an int with a string
    # print('error occured')
    print('invalid type for division operation')
except MyExpection:
    print('custom exception raised')
else:
    print('result = ', result)
finally:
    print('divide operation was completed!')