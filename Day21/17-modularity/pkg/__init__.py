'''
Within this __init__ file it is basically going to run any time we import the pkg
into another file such as that of the app.py as we have done!
'''
print('pkg installed')

__all__ = ['utils', 'calc'] 
'''
By using the __all__ we are basically importing these modules each time that 
the pkg is imported into another file and hence we do not need to import
pkg.calc or plg.utils if we have this! This makes it a lil easier if we want 
to have access to certain files right off the bat'''