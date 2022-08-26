from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
'''
Since we need this SQlAlchemy db instance in both the user model and in the app.py we 
will create this file which has the instance and we will share that same instance with 
the other files that need it!'''