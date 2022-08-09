n = int(input('Enter a number: '))

for i in range(2, n // 2): # this should not work for 4! Use (n+1)/2 as that is the math logic
    print(n)
    if(n % i == 0):
        print('this is not a prime number as it is divisible by another factor')
        break

else:
    print(n, 'is a prime number!')

