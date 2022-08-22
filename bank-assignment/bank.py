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
    def __init__(self, name, storage):
        '''This storage is the class instance of the CSV storage that we are going
        to be passing from the app.py as a param into the Bank Account instance!'''
        self.name = name
            
        #self.__balance += self.balance
        self._storage = storage
        self._transactions = storage.read()
        # print("Current Balance: ", self.__balance)
        # print('Current balance in excel: ', self.balance)
        #print(self.balance)
        #self._transactions = () #immutable tuples so users cannot modify it
        #self.deposit(initial_balance) #create deposit method!
        
        #csvstorage = storage.CSVStorage()
        #print(type(csvstorage))
        



    def deposit(self, amount):
        if amount < 0:
            raise InvalidAmount()
        else:
            #self.__balance += amount #this way we also update the current instance and not just the storage!
            #self._transactions += (('Deposit', amount),) #to create a single valued tuple (x,) 
            #inside of another tuple! Tuple of tuples!
            #storage.CSVStorage.write(self, ('Deposit',amount))
            
            self._storage.save(('Deposit',amount))
            transaction = ('Deposit', amount)
            self._transactions += (transaction, ) #writing the data as a transaction tuple of tuples!

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientBalance()
        else:
            # self.__balance -= amount
            #self._transactions += (('Withdraw', amount), )
            #storage.CSVStorage.write(self, ('Withdraw',amount))
            self._storage.save(('Withdraw',amount))
            transaction = ('Withdraw', amount)
            self._transactions += (transaction, )
            



    def history(self):
        #__transactions = storage.CSVStorage.read()
        __transaction = self._storage.read()
        '''If we do not re read from storage upon each request for the 
        history we will not get the most updated version of the data since 
        at the moment when we get the data it is only when we instantiate the
        bank and not during the running of the app menu which means that '''

        # print('Previous Transactions: \n')
        print(__transaction)
        for row in __transaction:
             print(f"{row[0]} with amount {row[1]} was done at {row[2]}")

        #return self._transactions

    @property
    def balance(self):#using the history to calc the balance!
        #csvstorage = storage.CSVStorage()
        #print(csvstorage.read())
        #__transactions = storage.CSVStorage.read(self)
        #__transactions = storage.read()
        
        #print(__transactions)
        result = reduce(lambda result, txn: (result + int(txn[1]))  if txn[0] =='Deposit' else (result - int(txn[1])), self._transactions, 0)
    
        return result

