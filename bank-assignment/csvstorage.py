import csv
from datetime import datetime
import os


class CSVStorage: 

    def __init__(self, file):
        self.__file = file
        self.__fieldnames = ['transaction-type', 'amount', 'date']
        file_exists = os.path.isfile('transactions.csv')
        if not file_exists:
            with open(self.__file, 'a+', newline='') as csvfile:
                writer = csv.DictWriter(self.__file, fieldnames= self.__fieldnames)
                writer.writeheader()
                csvfile.close()
        
        '''Here we are just checking to see if a file exists so that if it does not we are to create
        it and then add the headers into the file when the class is instantiated within the bank class!
        '''

    def write_transactions(self, data):
        
        #open a file in append mode to just append data and not overwrite it!
        with open('transactions.csv', 'a+', newline='') as csvfile:
            #here we use newline because of not by default a \n is added and hence will have 
            #rows that are empty because of the new line!
            writer = csv.DictWriter(csvfile, fieldnames=self.__fieldnames)
            date = datetime.now()
            
            writer.writerow({'transaction-type': data[0], 'amount': data[1], 'date': date.strftime("%Y-%m-%d %H:%M:%S")})

            csvfile.close()
        
        print('Storing data was completed\n')

    def read_transactions(self):
        transactions = ()

        with open('transactions.csv', 'r', newline='') as csvfile:
            rows = csv.DictReader(csvfile)

            for row in rows:
                transactions += ((row['transaction-type'], row['amount'], row['date']), ) #returning data as a tuple of tuples
                #so that they are back in a non mutable form!! Do not want users to be able to change the data somehow! 
                #print(f"{row['transaction-type']} with amount {row['amount']} was done at {row['date']}")

        print('Reading data was completed\n')
        csvfile.close()

        return transactions

#TODO: Need to implement this app by using SQLite now instead of just a csv file

if __name__ == '__main__':
    read()