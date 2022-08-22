import sqlite3
from datetime import datetime

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
        print(f"INSERT INTO transactions VALUES ({data[0]}, {data[1]}, {format_date})")
        self.curr.execute(f"INSERT INTO transactions VALUES ({data[0]}, {data[1]}, {format_date})")
        self.conn.commit()
        self.conn.close()

    
    def read(self):
        
        _transactions = ()

        for row in self.curr.execute('SELECT * FROM transactions ORDER BY date'):
            _transactions += (row ,)

        print(_transactions)
        return _transactions
        
        
        


     
# if __name__ == '__main__':
#     storage = DBStorage()
#     storage.save()
#     storage.read()



    
