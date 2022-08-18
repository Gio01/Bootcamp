from csvstorage import CSVStorage
from bank import BankAccount
from menu import Menu

if __name__ == '__main__':
    storage = CSVStorage('transactions.csv')
    account = BankAccount('Gio', storage)
    menu = Menu(account)
    menu.run()