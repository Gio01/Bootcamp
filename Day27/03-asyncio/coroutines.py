from random import randint
import time 
import asyncio

def randn_s():
    time.sleep(3)
    return randint(1,10)

def odds(start, stop):
    for odd in range(start, stop+1, 2):
        yield odd

async def square_odds(start, stop):
    for odd in odds(start, stop):
        await asyncio.sleep(2)
        yield odd ** 2

async def randn():
    await asyncio.sleep(3)
    return randint(1, 10)

async def main():
    '''
    value = await randn()
    print(f'result = {value}')

    value2 = await randn()
    print(f'result = {value2}')

    value3 = await randn()
    print(f'result = {value3}')

    However here we are effectively waiting for the first value
    to be done before the next one to be done! Instead we can 
    use multiple threads to get each of these values and we 
    can yse asyncio to do this for us!
    ''' 

    #this will run all three randn() calls in diff threads and assemble 
    #the results into a list!
    #values = await asyncio.gather(randn(), randn(), randn())
    #print(f'result = {values}')

    """ 
    start = time.perf_counter()
    value1 = await randn()
    elapsed = time.perf_counter() - start
    print(f'result-1 = {value1}, time taken = {elapsed}')
    """

    """ 
    start = time.perf_counter()
    #values = await asyncio.gather(randn(), randn(), randn())
    values = await asyncio.gather(*(randn() for _ in range(10)))
    elapsed = time.perf_counter() - start
    print(f'result_all = {values} , time taken = {elapsed}')  
    """

    async for sq_odd in square_odds(11,20):
        print(sq_odd)



if __name__ == '__main__':
    asyncio.run(main()) #the entry point or the last thing that we will run 
    #that has the awaits and async will need to be ran with the asyncio.run()
    #basically we would need to do await main() but you cannot do that because 
    #then where would we write the async part of the async await pair? Instead
    #we use the asyncio.run() to let asyncio know that this is where we are 
    #starting the execution and we will wait until everything is ran properly
    #for main to end with no issues! 


