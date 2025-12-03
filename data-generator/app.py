import random
import time
from confluent_kafka import Producer

trade_type = ['Bid', 'Ask']
p = Producer({'bootstrap.servers': 'localhost:9092'})
i = 0
while(i < 60):
    d = {'type': random.choice(trade_type), 'price': random.uniform(1.0, 100.0), 'volume': random.randint(1, 1000)}
    print(d)
    p.poll(0)
    p.produce('trade-data', str(d).encode('utf-8'))
    time.sleep(0.01)
    i+=1

p.flush()