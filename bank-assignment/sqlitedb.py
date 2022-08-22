import sqlite3
from datetime import datetime
from xml.etree.ElementPath import prepare_descendant

class DBStorage:

    def __init__(self, file):
        #self.__database = database
        self.file = file
        print('crated db instance')
        self.conn = sqlite3.connect(f"{self.file}")
        self.curr = self.conn.cursor()
        self.curr.execute('''CREATE TABLE IF NOT EXISTS transactions
        (TransactionType text, amount real, date text)
        ''')



    def save(self, data):
        date = datetime.now()
        format_date = date.isoformat()
        #print(f"INSERT INTO transactions VALUES ({data[0]}, {data[1]}, {format_date})")
        #Using bound params for preventing SQL injection and also performance
        prepared_statement = '''INSERT INTO transactions (TransactionType, amount, date) VALUES (?, ?, ?)'''
        self.curr.execute(prepared_statement, (data[0], data[1], format_date))
        self.conn.commit()


    
    def read(self):
        
        _transactions = ()

        for row in self.curr.execute('SELECT * FROM transactions ORDER BY date'):
            _transactions += (row ,)

        #print(_transactions)
        return _transactions
        
        
    def close(self):
        self.conn.close()
        
        


     
# if __name__ == '__main__':
#     storage = DBStorage()
#     storage.save()
#     storage.read()



    
