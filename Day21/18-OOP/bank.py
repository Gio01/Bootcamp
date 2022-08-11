from functools import reduce

class BankAccount:
    '''
    Classes are composed of states(fields of the instance object/class)
    and also the behavior of the instance of the classes which are just
    functions within classes!
    
    In python we always need to pass the self into every method within the class!!

    self refers to that of the object/class instance that we create!! Python needs 
    self to get refernce of the instance object/class that we create and be able to 
    run the functions in the class on that instance!
    '''

    '''
    Now we can have some static fields that are for the entire class which are called 
    class level attributes

    Ex: this can be such as the number of accounts that have been created which would be 
    the number of instances of the Bank account class which would not make sense to have in 
    the init since that is for each instance and this refers to all the number of 
    instances of accounts that have been made!! So we can write this before the init!



    Any state that you want to keep accross all instances can be created as a class member 
    and any behavior (functionality) that you want to keep accross all instances 
    should be kept as a @classmethod!
    '''

    __account_count = 0 #private class member
    #this is how we create constructors in python!!
    def __init__(self, name, initial_balance):
        self.__balance = initial_balance #here is how we can initialize fields/states of the object! 
        self.name = name #this is how we can pass a value into the class of that instance
        #and then set the value for that instance! Now since this is a part of the constructor
        #then this means that it is required for when creating an instance!
        print('A new bank account is created!')
        #self.history = []
        self._transactions = ()
        self.deposit(initial_balance)
        '''
        Here I tried to use a list in order to store the transactions but remember that lists
        are mutable and hence instead we should use a tuple of tuples so that the user is not 
        able to somehow modify the transactions since tuples are not mutable!!
        '''
        self.__class__.__account_count += 1

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
            # self.history = (f"Deposit {amount}")
            self._transactions += (('Deposit', amount),) # needed so that we can add a tuple
            #with a single value! recal that a tuple of single value is in the form of (x,)
            #and here x would be ('Deposit', amount)
            
            print('Updated Balance (Deposit): ', self.__balance)
    
    def withdraw(self, amount):
        if amount > self.__balance:
            print('Cannot withdaw more than the balance amount')
        else:
            self.__balance -= amount
            # self.history.append(f"Withdrawn {amount}")
            self._transactions += (('Withdrawal', amount),)
            
            print('Updated Balance (Withdrawal): ', self.__balance)

    def history(self):
        print(self._transactions)
    
    # def get_balance(self):
    #     print('get balance was called')
    #     return self.__balance

    # def set_balance(self, amount):
    #     print('set balance was called')
    #     self.__balance = amount
    
    # balance = property(get_balance, set_balance)
    '''
    NOTE: we should not be using methods in order to change the state of a property! Instead we should
    be able to simply treat that field as a property and not a property with methods where we need to 
    make function calls such as. account.get_balance() vs the better way of account.balance which is
    being treated as a simple property!

    While we can use the property() function to create the get and set methods, it is better to use the 
    decorator @property like we have done so below! the get and setter get treated as a single access/
    property for that field through the use of the name of the function that is wrapped with the 
    @property!
    '''
    
    @property
    def balance(self):#using the history to calc the balance!
        _balance = 0
        result = reduce(lambda result, txn: (result + txn[1])  if txn[0] =='Deposit' else (result - txn[1]), self._transactions, 0)
        print(result)
        #this lambda with the reduce is doing this below for loop for us
        # for t in self._transactions:
        #     if t[0] == 'Deposit':
        #         _balance += t[1]
        #     else:
        #         _balance -= t[1]
        
        return result
        
    
    #here this balance is created when we used property on the balance
    #method and created that property which we can use to reference as the setter
    #for the balance getter method! Their come in pairs for that given attribute
    #so here we make that connection via the use of the created @balance property
    #to reference to the balance attribute! 

    # @balance.setter 
    # def balance(self, amount):
    #     self.__balance = amount

    
    def __str__(self): #this is a dunder method (built in methods) because Double UNDER = dunder 
        #where double under means the method has double underscores lol!
        #this method is then called when we use str() instead of the built in version and we can 
        #then use it to make a more readable string representation of the object and not 
        #'<object at address 0xCOFFEE>'
        print('__str__ overwritten method was called')
        return f"{self.name} balance = {self.balance}"

    def __repr__(self): #this is called when we use repr() to get the representation of the object
        #or when we simply print the obj instead of getting <object at address 0xCOFFEE>! Readability!
        #this !r is another way of doing repr() !!! No here we do not need to do repr(self.name)
        return f"{self.__class__.__name__}({self.name!r}, {self.balance!r})"

    def __eq__(self, other): #we can use this so that we can see if two bank accounts are 
        #the same or not because by default python looks at the location in memory to determine
        #whether or not they are at the same address which would mean that they are the same 
        #but by recreating another obj with the same name and balance amount python will tell 
        #us that they are not the same given that they are located in different location in mem!
        #however for the purpose of this application we would expect the result to say that they
        #are in fact the same so we can overwrite the dunder __eq__ to do this for this app!
        #now by comparing two diff objects we can see if they are the same if they have the 
        #same account name and balance amount. in the interactive python shell we can use this by
        #doing obj == otherObj and it will return true if name and balance amount is the same! 
        #we changed how == works for this app!! Instead of python looking at mem!
        return (self.name == other.name) and (self.balance == other.balance)
    
    def __add__(self, other): #here we are modifying how + will work with bank accounts!
        return BankAccount(f"{self.name} {other.name}", self.balance + other.balance)

    def __len__(self): #allows us to be able to now get the len of transactions! Otherwise we would not be 
        #able to get access to the self._transaction length! ex: len(account) will gives us the number of 
        #transactions. So we basically created a convention by writing how we want the len() to function
        #when working with instances of the BankAccount class! 
        return len(self._transactions)
    
    def __getitem__(self, key): #this overwrites the functinality of indexing so we can use it on the private
        #transactions. ex: account[1:3] will automaticallu index into the transactions of that index!! 
        return self._transactions[key]

    @classmethod #this created a class method which is for the whole class and not just the instance
    def get_account_count(cls): #cls is like self but for classes! it points to the entire class and not
        #a single instance of a class!
        return cls.__account_count

    
        

class CheckingAccount(BankAccount): #Here CheckingAccount is Inheriting from the BankAccount class
    
    def __init__(self, name, initial_balance, check):
        super().__init__(name, initial_balance)
        '''NOTE: we need to add this super().__init__(name, initial_balance) in order
        to have access to the parent's constructor because by adding this def __init__ within
        this child class we are effectively overwritting the parent __init__ method constructor
        with this child constructor which means that we will not have access to things in the
        parent's constructor! Meaning that we will not inherit things from the parent class!
        So we need to pass the super() to get acces to the functinality of the parent class
        '''
        self.check = check
        '''here we are creating a child class because it is of type BankAccount so it makes
        sense to have inheritance here and we still want the same capabilities from the parent
        class such as creating a bankaccount with some initial balance and then also 
        the parent class methods such as deposit and withdrawal as those same functionalities
        also apply within this CheckAccount functionality
        
        If I try to delete the super() then I will not have access to the states in the 
        constructor which are needed in the methods of the parent class to use the methods
        deposit and withdrawal which means that when we try to use then from this child
        class it will tell us that certain states/fields do not exist within the Checking
        Account class
        
        ex: deposit() adds a transactino into the transaction attribute in the BankAccount
        class and the transactions is defined within the constructor of the parent class
        and hence that would mean if we do not add the super() here in the child constructor
        then we will not be able to then pass over these states for the instance of a 
        CheckingAccount class and then will not be able to use the deposit and withdrawal 
        methods since these methods rely on the use of these states defined in the parent class!
        '''

    def withdraw(self, amount):
        '''
        So we are not able to access private attributes within the child class and instead
        what we can access is public attributes and protected attributes which are located
        in the parent class! 

        Here we are able to now access the parent public and the protected attributes 
        through the self.! So now we have access to the transaction tuple of tuples that
        is located within the parent BankAccount class! 

        '''
        self._transactions += (('Withdrawal', amount),)
            


if (__name__ == '__main__'):
    # account = BankAccount('Gio', 0) #passing a name into the constructor for creating the instance 
    # account = BankAccount('Gio2', 0)
    # account.who_am_i()
    # print(f"Account name = {account.name}")
    # print(f"Account balance of {account.name} = {account.balance}")

    # account.deposit(100)
    # account.withdraw(100)
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

    # print(f"Account balance of {account.name} = {account.balance}")
    # #account.balance = 1000 #this is using the setter method!!! 
    # account.deposit(1000)
    # print(f"Account balance of {account.name} = {account.balance}")
    # account.history()

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
    # print(f"# of transactions = ", len(account))

    # print(f"transaction[0] = {account[0]}")
    # print(f"transaction[1:3] = {account[1:3]}")
    # print(f"Number of created accounts = {BankAccount.get_account_count()}")

    '''If you hover over the CheckingAccount() you will the params of name and initial_balance
    which means that through the inheritance we have also inherited the same constructor from the
    parent BankAccount class!'''
    ca = CheckingAccount('Gio"s Checking Account', 100, 50)
    print(ca.balance)#here we will see that a new bank account is created gets printed out
    #and the deposit of 100 gets deposited as the initial balance! Meaning that the constructor
    #of the parent BankAccount class ran!

    ca.deposit(1000)
    ca.withdraw(500)
    ca.history()
    print(f"balance = {ca.balance}") 
    print(f"Checking balance = {ca.check}") 
    '''
    Now given that we basically have access to all of the methods and constructor from the
    BankAccount class why would we want to inherit from the parent if we are basically just 
    doing everything that was in the parent class? 
    
    The reason is if we want to add some other functinality on top of the parent class or 
    if we want to overwrite the functionality of a method that is in the parent class to 
    work for the child class in a manner appropiate for that child class!
    '''