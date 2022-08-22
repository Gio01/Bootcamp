from csvstorage import CSVStorage
from sqlitedb import DBStorage
from bank import BankAccount
from menu import Menu
from sqlalchemydb import DBAlchStorage

if __name__ == '__main__':
    #storage = CSVStorage('transactions.csv')
    #storage = DBStorage('bank.db')
    storage = DBAlchStorage('test.db')
    account = BankAccount('Gio', storage)
    menu = Menu(account)
    menu.run()