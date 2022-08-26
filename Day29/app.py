from flask import Flask, jsonify
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from resources.bug_resource import Bug
from resources.bugs_resource import Bugs
from resources.user_resource import Register, Login
from db import db
from flask_jwt_extended import JWTManager

app = Flask(__name__)
#this will point the database to that be of the file we want using sqlite as the flavor we want!
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./bug-tracker.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['BUNDLE_ERRORS'] = True #global setting for all parsers to have 
#errors for all errors showing

#db = SQLAlchemy(app) #instead we can so the db.init_app(app) in the main!
#to initialize the app with the db already and hence it will have access to the data
#at the start of the app!
api = Api(app)

app.config['JWT_SECRET_KEY'] = 'lincoln'
#this key is needed as a secure way by which we can then encrypt our jwt tokens so that they
#are not in plain text and an attacker can simply take that JWT token to impersonate someone else
#and be able to login as that other user! 
jwt = JWTManager(app) #needed so that we can initialize this flask app with JWTManager
#in order to then be able to use the JWT methods!

'''
We can create the db tables and create all the db stuff through the python 
interactive shell and running
from app import db
db.create_all()
'''

'''
Here this claims is what we can add into the JWT token to basically have user info 
such as is_admin and then based on this we can then use that data in the JWT to
be able to see what that user is and only give that specific user certain 
rights or priviledges to do certain things such as to be able to delete certain 
bugs because otherwise we would not want the other users to be able to do so!

(in this hypothetical scenario)

So here below we are checking to see if the user_id is 1 and if it is then we 
will pass data into the JWT with 'is_admin' : True and hence based on that 
check to see if this is True and if it is then we can allow them to use 
the delete functionality!

Note that for the user to get this JWT that would mean that they need to 
login first so that they can recieve that and then be able to to do their 
wanted actions by sending that JWT back to the server in order to then be 
able to verify the user and give them access to the api functionality! 

'''

@jwt.additional_claims_loader
def add_claims_to_jwt(identity):
    if identity == 1:
        return { 'is_admin' : True }
    return { 'is_admin' : False }

#We can use this to help the client know better what that error is! In this case it means that the user 
#is trying to supply a token that is not valid such as trying to forge the token by giving some 
#random values such as 'abc' instead of an actual token 
@jwt.invalid_token_loader # we have to keep the argument here, since it's passed in by the caller internally
def invalid_token_callback(error):
    return jsonify({
        'message': 'Signature verification failed.',
        'error': 'invalid_token'
    }), 401

#this error is when you have not even supplied the token to the server! 
#customizing the standard error when no token in the request
@jwt.unauthorized_loader
def missing_token_callback(error):
    return jsonify({
        'description' : 'Request does not contain an access token',
        'error' : 'authorizatin_required'
    }), 401

api.add_resource(Bugs, '/bugs')
api.add_resource(Bug, '/bugs/<int:id>')
api.add_resource(Register, '/register')
api.add_resource(Login, '/login')



if __name__ == '__main__':
    db.init_app(app) # we can do this instead of the SQLAlchemy(app)!
    app.run(port = 8080, debug = True)


'''
Header
    Authorization
    Bearer <access_token/jwt_token>

'''

