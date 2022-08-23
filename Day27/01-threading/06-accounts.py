import time
import concurrent.futures
import threading

class Account:
    def __init__(self):
        self.balance = 100
        self.lock = threading.Lock()

    def update(self, transaction, amount):
        print(f'{transaction} thread updating..')
        self.lock.acquire() #we are giving a thread the lock
        local_copy = self.balance
        local_copy += amount
        time.sleep(5)
        self.balance = local_copy
        self.lock.release() #we release the lock to give to the next thread!
        print(f'{transaction} thread completed..')

if __name__ == '__main__':
    account = Account()
    print(f'starting with the balance of {account.balance}')
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as ex:
        for transaction, amount in [('deposit', 50), ('withdraw', -150)]:
            ex.submit(account.update, transaction, amount)
    print(f'ending with the balance of {account.balance}')

    '''
    The reason for using the locks is so that only a single thread has access to the 
    balance! Otherwise what can happen is that while one tries to withdraw the 150 
    there is not enough money in the balance yet which then causes for the balance to 
    be -50 !! Then on another run it can be that the balance will be 0 but there is no
    way of ensuring this unless of we synchronize the usage of the account balance through
    the use of the lock! 
    
    We can only allow a single thread to manipulate the account balance at a time in 
    order to ensure that there are no issues with us trying to withdraw money that 
    does not exist! 
    
    '''