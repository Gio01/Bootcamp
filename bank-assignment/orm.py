from datetime import datetime
from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session
from models import Transactions
import time    


class ORMStorage:

    def __init__(self, file):
        self.file = file
        self.engine = create_engine(f"sqlite:///./{self.file}", future=True)
        self.session = Session(self.engine)
        self.stmt = select(Transactions)

    
    def save(self, data):
        date = datetime.now()
        format_date = date.strftime("%m/%d/%Y, %H:%M:%S")

        new_transaction = Transactions(transaction_type=data[0], amount=data[1], date=format_date)
        self.session.add(new_transaction)

        self.session.commit()
        
    
    def read(self):
        
        _transactions = ()

        stmt = select(Transactions)
        for transaction in self.session.scalars(stmt):

            trans = (transaction.transaction_type,
            transaction.amount, transaction.date)
            #print(trans)
            _transactions += (trans ,)

        #print(_transactions)
        return _transactions

    def close(self):
        self.session.close()
    
    
if __name__ == '__main__':
    storage = ORMStorage('test.db')
    storage.read()