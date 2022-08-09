from audioop import maxpp
from enum import unique
from itertools import count


str = 'Qui labore Lorem ullamco esse adipisicing ad eu cupidatat commodo ea ullamco. Id et ad eu veniam consectetur. Ullamco ipsum sint proident amet do cupidatat cupidatat laboris mollit laborum ex irure non occaecat. Aliquip eu tempor nisi et qui non esse ad quis reprehenderit. Adipisicing adipisicing quis eu excepteur fugiat culpa et commodo exercitation exercitation. Deserunt duis labore officia nisi do nostrud anim laborum occaecat. Laborum Lorem reprehenderit sit aute ullamco fugiat nostrud adipisicing exercitation. Aute ex magna enim officia aliqua nostrud cupidatat.'

#find the word size that occurs the most! 

list_str = str.split()

arr = []

for x in list_str:
    arr.append(len(x))

print(max(arr, key=arr.count)) 
#returns the element in the list with the highest reoccurance


words = str.split()
words_count = {}

for word in words:
    word_size = len(word)
    # if word_size not in words_count:
    #     words_count[word_size] = 0
    words_count.setdefault(word_size, 0)
    # so here what we say is that if the key does not exist then what 
    # we can do is simply create a new key and give it the value of 0
    # in this manner the next time that we do see that word count then 
    # we will just increment our frequency of it into 
    words_count[word_size] += 1

#print(words_count)
max_val = max(words_count.values())

for key, val in words_count.items(): # the reason we need to do this is because
    # the keys and vals here are numbers!! and not a string as a key
    if val == max_val:
        print(key)