import csv
from datetime import datetime
import os

fieldnames = ['transaction-type', 'amount', 'date']

def write(data):
    file_exists = os.path.isfile('transactions.csv')
    fieldnames = ['transaction-type', 'amount', 'date']
    
    #open a file in append mode to just append data and not overwrite it!
    with open('transactions.csv', 'a+', newline='') as csvfile:
        #here we use newline because of not by default a \n is added and hence will have 
        #rows that are empty because of the new line!
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        date = datetime.now()

        #if the csv file does not exist then do not add new headers each time!
        if not file_exists:
            writer.writeheader()
        
        writer.writerow({'transaction-type': data[0], 'amount': data[1], 'date': date.strftime("%Y-%m-%d %H:%M:%S")})

        csvfile.close()
    
    print('Storing data was completed\n')

def read():
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

if __name__ == '__main__':
    read()