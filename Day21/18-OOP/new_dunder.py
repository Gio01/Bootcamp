from random import choice


class Pet(object):
    def __new__(cls): #this is a class method and not an instance method so instead of self use cls
        animals = [Dog, Cat, Python]
        animal = choice(animals)
        instance = super().__new__(animal)
        print(f"I am a {type(instance).__name__}!")
        
        return instance

'''
What is happening here is that we are randomly choosing one of the classes and when someone 
creates an instance of the Pet class we will overwrite the __new__ which is the method
of the object class. This __new__ method is always called when we an obj is created! 
Then the __init__ will be called to initialize that object with certain attributes!

All!!!! classes inherit from the object base (root) class which in turn means that all of
the dunder methods are a part of the object class and we are overwriting them when we use them
in the classes!
Ex: when creating the constructor __init__ we are in fact overwritting the object class's
__init__ method!! 
'''

class Dog:
    def communicate(self):
        print('woof')

class Cat:
    def communicate(self):
        print('meow') 

class Python:
    def communicate(self):
        print('hiss')
    
if __name__ == '__main__':
    p = Pet()
    p.communicate()

    '''
    So here depending on what pet gets choseen in the Pet clas, will then determine what
    instance of a class was created and then what communicate() method will be called based 
    on that animal type istance that was selected! 
    '''
