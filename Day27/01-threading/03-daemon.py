import time
import threading

def myfunc(name):
    print(f'myfunc started - {name}')
    time.sleep(5)
    print('myfunc completed')

if __name__ == '__main__':
    print('main started')
    t = threading.Thread(target=myfunc, args=['Python'], daemon=True) #args refers to the arg params in myfunc
    #myfunc('Python')
    t.start()
    print('main completed')

    """
    When using deamon it means that it will not stop main() from executing!
    so here myfunc will start but main will finish before main meaning that 
    main will not wait for the thread!!!
    
    The threads which are always going to run in the background that provides 
    supports to main or non-daemon threads, those background executing threads 
    are considered as Daemon Threads. The Daemon Thread does not block the main 
    thread from exiting and continues to run in the background.
    
    So threads are non blocking and will just run in the background!
    
    """

