for no in range(10):  
    if no % 2 == 0:
        continue #this will cause the loop to go back to the top and not print the
    # numbers and hence why we only see the odds being printed out as we do not hit the
    # continue and instead are able to move into the print(no)!
    print(no) # 0 to 9



