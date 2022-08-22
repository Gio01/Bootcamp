from datetime import datetime
from sqlalchemy import create_engine, text, MetaData, Table, select, insert

class DBAlchStorage:

    def __init__(self, file):
        #self.__database = database
        self.file = file
        self.engine = create_engine(f"sqlite:///./{self.file}", future=True) #removed echo=True so that it does not
        #display any of the creating engine info 
        self.conn = self.engine.connect()
        self.metadata = MetaData()
        self.transaction_table = Table("transactions", self.metadata, autoload_with=self.engine)
        #self.conn.execute(text('''CREATE TABLE IF NOT EXISTS transactions
        #(TransactionType text, amount real, date text)
        #'''))



    def save(self, data):
        date = datetime.now()
        format_date = date.isoformat()
        #print(f"INSERT INTO transactions VALUES ({data[0]}, {data[1]}, {format_date})")
        #Using prepared statement for preventing SQL injection and also performance
        #prepared_statement = text('''INSERT INTO transactions (TransactionType, amount, date) VALUES (:transaction, :amount, :date)''')

        stmt = insert(self.transaction_table).values(TransactionType=data[0], amount=data[1], date= format_date)
        self.conn.execute(stmt)

        #self.conn.execute(prepared_statement, [{"transaction": data[0], "amount": data[1], "date": format_date}])
        self.conn.commit()


    
    def read(self):
        
        _transactions = ()

        #result = self.conn.execute(text('SELECT * FROM transactions ORDER BY date'))
        stmt = select(self.transaction_table)
        result = self.conn.execute(stmt)
        for row in result:
            _transactions += (row ,)

        #print(_transactions)
        return _transactions
        
        
    def close(self):
        self.conn.close()
        