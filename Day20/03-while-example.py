# user_input = input('Do you wish to run this program? (yes/no) :')
# while user_input == "yes": #this can be any Truthy value! 
#     print('program executed')
#     user_input = input('Do you wish to run this program? (yes/no) :')

# print('Thank you!')


do_loop = True
while do_loop:
    user_choice = input('Do you want to break (yes/no): ')
    if user_choice == 'yes':
        break #you exit the while loop! and program execution continues after the while!
    
    user_choice = input('Do you want to continue (yes/no): ')  
    if user_choice == 'yes':
        continue # you want to start from the while loop again 
    else: #meaning the user does not want to continue
        break

print('Thank you!')