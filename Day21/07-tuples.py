products = [
    (6,'Pen', 50, 20, 'stationary'),
   	(9,'Ten', 70, 70, 'stationary'),
   	(3,'Len', 60, 60, 'grocery'),
   	(5,'Zen', 30, 30, 'grocery'),
   	(1,'Ken', 20, 80, 'utencil'),
    (7,'Mouse', 100, 20, 'electronics')
]

#find the sum of the units which is the fourth cell!

total = 0 
for prod in products:
    total += prod[3]
print(total)

# this will get each tuple at prod and then we get the value at each tuple's
# value!

total_units = 0
for id, name, cost, units, category in products:
    total_units += units

print(total_units)


total_units2 = 0 
for _, _, _, units, _ in products:
    total_units2 += units

print(total_units2)

# here on this last one is how we can create place holders for the other 
# locations in the tuple but we ommit all but the one we are intereted in!

