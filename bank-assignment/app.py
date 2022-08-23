from csvstorage import CSVStorage
from sqlitedb import DBStorage
from bank import BankAccount
from menu import Menu
from sqlalchemydb import DBAlchStorage
from orm import ORMStorage

if __name__ == '__main__':
    #storage = CSVStorage('transactions.csv')
    #storage = DBStorage('bank.db')
    # storage = DBAlchStorage('bank.db')
    #we used the bank.db with the old table with just the type, amount, date
    storage = ORMStorage('test.db')
    account = BankAccount('Gio', storage)
    menu = Menu(account)
    menu.run()