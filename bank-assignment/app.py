from csvstorage import CSVStorage
from sqlitedb import DBStorage
from bank import BankAccount
from menu import Menu

if __name__ == '__main__':
    #storage = CSVStorage('transactions.csv')
    storage = DBStorage('test.sqlite')
    account = BankAccount('Gio', storage)
    menu = Menu(account)
    menu.run()