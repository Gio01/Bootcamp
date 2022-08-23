import random
import threading
import time
import concurrent.futures;

FINISH = 'THE END'

class Pipeline:
    def __init__(self, capacity):
        self.capacity = capacity
        self.message = None
        self.producer_lock = threading.Lock()
        self.consumer_lock = threading.Lock()
        self.consumer_lock.acquire() #if we do not have this we will have a deadlock!
        
    def set_message(self, message):
        print(f'producing message of {message}')
        producer_pipeline.append(message)
        self.producer_lock.acquire()
        self.message = message
        self.consumer_lock.release()

    def get_message(self):
        print(f'consuming message of {self.message}')
        self.consumer_lock.acquire()
        message = self.message
        self.producer_lock.release()
        consumer_pipeline.append(message)
        return message

#---------- producer and conusmer are not Pipeline class methods! 
def producer(pipeline): #produces some random int
    for _ in range(pipeline.capacity):
        message = random.randint(1,100)    
        pipeline.set_message(message) #gives the input into the producer_pipeline
    pipeline.set_message(FINISH)

def consumer(pipeline): #will take in some message/int input from the producer!
    message = None
    while message is not FINISH:
        message = pipeline.get_message() #gets the input from the producer and appends into the consumer 
        #pipeline
        if message is not FINISH:
            time.sleep(random.random())


producer_pipeline = []
consumer_pipeline = []

if __name__ == '__main__':
    pipeline = Pipeline(10) #only have 10 ints produced and consumed into the array pipelines
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as ex:
        ex.submit(producer, pipeline)
        ex.submit(consumer, pipeline)
    print(f'producer pipeline - {producer_pipeline}')
    print(f'consumer pipeline - {consumer_pipeline}')