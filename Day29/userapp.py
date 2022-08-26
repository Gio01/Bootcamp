from flask import Flask
from flask_restful import Api
from db import db
from resources.user_resource import Register, Login


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./users.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['BUNDLE_ERRORS'] = True #global setting for all parsers to have 
#errors for all errors showing

#db = SQLAlchemy()
api = Api(app)


api.add_resource(Register, '/register')
api.add_resource(Login, '/login')

if __name__ == '__main__':
    db.init_app(app)
    app.run(port = 8080, debug = True)


'''
This was the test app before I ended up placing all of the logic in
seperate files and have the same app entry point for both the 
bugs and the users from app.py
'''