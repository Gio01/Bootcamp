# import calc

# print(calc.add(100,200))
# print(calc.subtract(100,200))

# from calc import add

'''
In this manner we can just use add directly!
'''
# print(add(100, 200))

# from calc import add, subtract


# print(add(100,200))
# print(subtract(100,200))

'''
from calc import *

def add():
    print('add')

NOTE: Here there is a name comflict since add in this file is the same as the 
add in the calc file and the function within this file takes precedence over the
calc add so we will get an error for trying to pass arguments into this add()
above

print(add(100,200))
print(subtract(100,200))
print(multiply(100,200))
print(divide(100,200))


FIX: A fix to this is that when we import the function name is as something else
so the calc add() function can be used through the use of another name (alias)


Ex: from calc import add as add_numbers 
'''

'''
from calc import *
from my_math import *

print(add(100, 200, 300))
'''

'''
You can also give an alias to the entire module in order to access the file functions
by an alias instead of the calc name! 
'''
# import calc as my_calc
# print(my_calc.add(100, 200))

# you can use the pkg.calc to get the functionality of functions within a file that 
# is located in some other directory! 
# import pkg.calc
# print(pkg.calc.add(100,200))

# from pkg import calc
# print(calc.add(100.200))


# from pkg.calc import *
# print(add(100,200))

# from pkg.utils import *
# print(iseven(200))

from pkg import * #this now is able to get calc and utils within the pkg directory!

#so now we have direct acces to calc.add without needeing to do: import pkg.calc
print(calc.add(100, 200))