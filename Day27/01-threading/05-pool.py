import time
import concurrent.futures

def myfunc(name):
    print(f'myfunc started - {name}')
    time.sleep(5)
    print('myfunc completed')

if __name__ == '__main__':
    print('main started')
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        #pool.map(myfunc, ['Thread-1', 'Thread-2', 'Thread-3'])
        pool.submit(myfunc, 'Thread-1')
        pool.submit(myfunc, 'Thread-2')
        pool.submit(myfunc, 'Thread-3')
        pool.submit(myfunc, 'Thread-11')
        pool.submit(myfunc, 'Thread-12')
        pool.submit(myfunc, 'Thread-13')



    '''
    This is another way in which we can create threads but note here that 
    these are blocking main from finishing executing! So the treads need to finish
    before main can finish!


    Now when we use the submit here we run into an issue where the first three threads
    run and then main finishes and then the 11,12,13 will run and this is the case
    because we only have 3 workers available there to work on three threads at a time
    '''
    print('main completed')

    