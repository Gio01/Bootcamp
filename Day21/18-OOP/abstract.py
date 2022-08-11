from abc import ABC, abstractmethod

'''
We can create an abstract class to force the child classes to create certain methods
if they are going to be instances of the base/parent class!

The base/parent class needs to inherit from the Abstract Base Class so that it can 
be used as an Abstract Class and then within here we can decorate certain methods
to be that of the abstractclassmethod! In this manner we need to create child classes
that declare these enforced abstract methods!

Now this means that we cannot create an instance of the Employee abstract class since
we are only creating a template of what other child classes need to follow/contain
within their respective classes! 

'''

'''
Abstract Base Class:
    - instance of the Abstract Base Class cannot be done! 
    - contains abstract methods that will force the child classes to implement/create within
    their respective class

When do we use these Abstract Classes?
- they are used to represent a Concept of something! 
Ex: Within an org we have a person as an abstract idea! But the real entity within 
the org is that they are an Employee so we would create an abstract class of a person
and then we would want Employees to have the person attributes which means that the 
child Employee class will inherit from the person class!

Again here the person is an identity but no one in a org has a title of just a person 
As in like if I ask what is your role in the company and their answer for the job title
will not be Oh I am just a Person in the company! I work as a Person in this company!
That does not make sense for every person within some job title is in fact a person so that
is where we can create this person idea/concept as an abstract class! 
'''
class Employee(ABC): #Abstract Base Class (ABC)
    def __init__(self, name) -> None:
        self.name = name

    @abstractmethod
    def calculate_salary():
        '''NOTE: this is an abstract method and these methods do not have their
        functinality but just the name of the function! This is only to enforce that 
        the child class creates this method but the logic of the method will be within 
        the child class!'''
        pass

class FullTimeEmployee(Employee):
    def __init__(self, name, salary) -> None:
        super().__init__(name)
        self.salary = salary

    def calculate_salary():
        pass
    

if __name__ == '__main__':
    #e = Employee('Gio') # we cannot create an instance of an Abstract Class! Only those child classes
    #that inherit from this parent class! 
    #print(e.name)

    e = FullTimeEmployee('Gio', 100)
    print(f"{e.name} has a salary of: {e.salary}")
