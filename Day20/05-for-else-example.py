for n in range(3):
    password = input('Password: ')
    if password == 'admin_pwd':
        print('Login Successful!')
        break
    print('Password is incorrect!')

else:
        print('3 attempts made! Suspicious Activity! Contact admin!')

'''
So what is happening is that if we do not break from the for loop, it will enter the
else condition after the 3 iterations within the for loop! 
'''
