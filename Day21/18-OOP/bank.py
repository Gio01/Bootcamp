class BankAcount:
    '''
    Classes are composed of states(fields of the instance object/class)
    and also the behavior of the instance of the classes which are just
    functions within classes!
    
    In python we always need to pass the self into every method within the class!!

    self refers to that of the object/class instance that we create!! Python needs 
    self to get refernce of the instance object/class that we create and be able to 
    run the functions in the class on that instance!
    '''

    #this is how we create constructors in python!!
    def __init__(self, name) -> None:
        self.__balance = 0 #here is how we can initialize fields/states of the object! 
        self.name = name #this is how we can pass a value into the class of that instance
        #and then set the value for that instance! Now since this is a part of the constructor
        #then this means that it is required for when creating an instance!
        print('A new bank account is created!')

    def who_am_i(self):
        print('I am a bank account')

    
    '''
        implement deposit and withdraw methods
        deposit - negative values should not be allowed!
        withdraw - cannot withdraw more than the balance
    '''

    def deposit(self, amount):
        if amount < 0:
            print('Cannot deposit a negative amount into balance')
        else:
            self.__balance += amount
            print('Updated Balance (Deposit): ', self.__balance)
    
    def withdraw(self, amount):
        if amount > self.__balance:
            print('Cannot withdaw more than the balance amount')
        else:
            self.__balance -= amount
            print('Updated Balance (Withdrawal): ', self.__balance)
            

    # def get_balance(self):
    #     return self.__balance
    
    @property
    def balance(self):
        return self.__balance
    
    #here this balance is created when we used property on the balance
    #method and created that property which we can use to reference as the setter
    #for the balance getter method! Their come in pairs for that given attribute
    #so here we make that connection via the use of the created @balance property
    #to reference to the balance attribute! 
    @balance.setter 
    def balance(self, amount):
        self.__balance = amount
        


if (__name__ == '__main__'):
    account = BankAcount('Gio') #passing a name into the constructor for creating the instance 
    # account.who_am_i()
    # print(f"Account name = {account.name}")
    # print(f"Account balance of {account.name} = {account.balance}")

    account.deposit(100)
    account.withdraw(100)
    # account.__balance = 1000 gives us an error saying that balance is not an attribute
    # for the BankAccount class!! Much easier than using closures in JS lol

    '''
    Issue right now is that we can do account.balance = 1000 which means that the user
    is able to manipulate the balance and that is not something that should be allowed
    and hence we need to make the accounr balance be private so that it cannot be accessed
    via the instance of a class! 

    Any field that we want to make private needs to have __ before the name to make it 
    private!!! Two underscores!

    Now how can the user get their balance amount? We need to define a getter method
    so that they can see their balance but are not able to modify their balance directly!
    '''
    #getting the balance with the getter method!
    # print(f"Account balance of {account.name} = {account.get_balance()}")


    '''
    Now what if we have like 10 private fields? This would mean that we need to have 10
    different getter methods for each field and that really makes our class code messy 
    with so much code that simply returns values
    '''

    print(f"Account balance of {account.name} = {account.balance}")
    account.balance = 1000 #this is using the setter method!!! 
    print(f"Account balance of {account.name} = {account.balance}")

    '''
    Now what we did is create a function as an attribute by wrapping the balance method
    with the @property decorator so that we can treat that method as an attribute
    and in this manner we can just say account.balance without needing to invoke it 
    as a function account.balance()
    
    Now this looks like what we had before where the user could modify their balance
    except this refers to that method and not the __balance so the user is still not 
    able to modify their balance. We simply make it look like a property when trying 
    to get the balance instead of using a getter method!
    '''