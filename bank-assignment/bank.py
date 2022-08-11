#custom exceptions
import csv
from datetime import date, datetime
from functools import reduce
import os
import re
import csvstorage as storage

class InvalidAmount(Exception):
    pass

class InsufficientBalance(Exception):
    pass


class BankAccount:
    def __init__(self, name, initial_balance):
        self.name = name

        #If the account already exist we do not want to initialze a new balance but just retrive
        #the current balance based on previous transactions! 
        #csvstorage = storage.CSVStorage()

        file_exists = os.path.isfile('transactions.csv')
        if not file_exists:
            self.__balance = initial_balance
            #storage.CSVStorage.write(('Deposit', initial_balance))
            storage.write(('Deposit', initial_balance))
            print('New Bank Account was created!')
        else:
            self.__balance = self.balance

            
        #self.__balance += self.balance
        print("Current Balance: ", self.__balance)
        print('Current balance in excel: ', self.balance)
        #print(self.balance)
        #self._transactions = () #immutable tuples so users cannot modify it
        #self.deposit(initial_balance) #create deposit method!
        
        #csvstorage = storage.CSVStorage()
        #print(type(csvstorage))
        



    def deposit(self, amount):
        if amount < 0:
            raise InvalidAmount()
        else:
            self.__balance += amount #this way we also update the current instance and not just the storage!
            #self._transactions += (('Deposit', amount),) #to create a single valued tuple (x,) 
            #inside of another tuple! Tuple of tuples!
            #storage.CSVStorage.write(self, ('Deposit',amount))
            storage.write(('Deposit',amount))

    def withdraw(self, amount):
        if amount > self.__balance:
            raise InsufficientBalance()
        else:
            self.__balance -= amount
            #self._transactions += (('Withdraw', amount), )
            #storage.CSVStorage.write(self, ('Withdraw',amount))
            storage.write(('Withdraw',amount))



    def history(self):
        #__transactions = storage.CSVStorage.read()
        __transactions = storage.read()

        print('Previous Transactions: \n')
        for row in __transactions:
            print(f"{row[0]} with amount {row[1]} was done at {row[2]}")

    @property
    def balance(self):#using the history to calc the balance!
        #csvstorage = storage.CSVStorage()
        #print(csvstorage.read())
        #__transactions = storage.CSVStorage.read(self)
        __transactions = storage.read()
        
        #print(__transactions)
        result = reduce(lambda result, txn: (result + int(txn[1]))  if txn[0] =='Deposit' else (result - int(txn[1])), __transactions, 0)
    
        return result



if __name__ == '__main__':

    account = BankAccount('Gio', 100)
    while True:
        

        user_action = input(
'''
What operation would you like to do:
1. Deposit an amount into your account
2. Withdraw an amount from your account
3. Retrieve current balance
4. See previous transactions
5. Close Application
''')


        try:
            if int(user_action) < 1 or int(user_action) > 5:
                print('Invalid option was selected')
            else:
                if user_action == '1':
                    amount = int(input(
'''
Enter the amount of money you wish to deposit:
'''))

                    account.deposit(amount)
                elif user_action == '2':
                    amount = int(input(
'''
Enter amount you wish to withdraw:
'''))

                    account.withdraw(amount)

                elif user_action == '3':
                    print(f"Your current account balance = {account.balance}")
                
                elif user_action == '4':
                    account.history()

                elif user_action == '5':
                    print('Thank you!')
                    exit()
        except InvalidAmount:
            print('Attempted to deposit invalid amount')
        except InsufficientBalance:
            print('Not enough funds for doing that withdraw')




