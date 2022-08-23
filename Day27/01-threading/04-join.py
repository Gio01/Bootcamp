import time
import threading

def myfunc(name):
    print(f'myfunc started - {name}')
    time.sleep(5)
    print('myfunc completed')

if __name__ == '__main__':
    print('main started')
    
    t1 = threading.Thread(target=myfunc, args=['Thread-1'])
    t1.start()
    t2 = threading.Thread(target=myfunc, args=['Thread-2'])
    t2.start()
    t3 = threading.Thread(target=myfunc, args=['Thread-3'])
    t3.start() 
   
    
    t1.join()#this will block the main func from finishing until t1 thread is done!
    t2.join()
    t3.join()

    print('main completed')

    