'''
A singleton is a class that can only have one instance and no more!

Now how can we do that with python?
'''

from tokenize import Single


class Singleton(object):
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls) #if there is an instace created then instance
            #will not be None anymore! 
        return cls._instance
    
if __name__ == '__main__':
    first = Singleton()
    second = Singleton()


    print(repr(first))
    print(repr(second))
    print(first == second) #these are referring to the same memory location!
    #we are using repr to see what the representatino of the object is in python which 
    #will be in the form of <singleton.object at 0XBEEF) repr() == __repr__ from the object class!

    '''
    Now because we have the same memeory location on each instance of an object we try to make this
    means that we have effectively created a singleton object by returning the same 
    class into each instance that is clreated!  
    
    This means that we always refer to the same memory location on each instance we make and hence
    can never create more then one instance and hence we have a singelton!'''

