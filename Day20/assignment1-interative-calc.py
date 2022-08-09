do_loop = True
while do_loop:

    user_input = int(input('''
    Enter your choice:
        1. Add
        2. Subtract
        3. Multiply
        4. Divide
        5. Exit
'''))

    if user_input == 5:
        break # we break from the while loop 

    elif user_input < 1 or user_input > 5:
        print('Invalid Choice!')
        continue
    
    else:
        no1 = int(input('Enter the first number: '))
        no2 = int(input('Enter the second number: '))
        
        if user_input == 1:
            print('Result: ', no1 + no2)
            continue # begin from the top of the while. Ends the current itteration and 
        # begins again from the top but here since this is always true it will just keep 
        #starting at the loop again! 
        elif user_input == 2:
            print('Result: ', no1 - no2)
            continue
             # begin from the top of the while

        elif user_input == 3:
            print('Result: ', no1 * no2)
            continue
             # begin from the top of the while

        elif user_input == 4:
            print('Result: ', no1 / no2)
            continue
             # begin from the top of the while

print('Finished Operation!')
        