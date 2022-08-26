from flask import jsonify
from flask_restful import Resource, reqparse, inputs
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.bugs import BugModel

#this parser essentially allows us to ensure that user is sending certain
#data in the form that we want! This way we can validate the data coming in!
new_bug_parser = reqparse.RequestParser()

new_bug_parser.add_argument('name', type=str, 
    help='The field cannot be blank',
    required=True)

new_bug_parser.add_argument('is_closed', type=inputs.boolean, 
    default=False)
'''
We removed _ before the new in the var above so that they are public and 
can be imported into the bug resource file and we can get a copy of the 
parser!
'''


class Bugs(Resource):
    #now that we are using JWT we need to ensure that we are talking to the correct client
    #and hence that would mean that the client needs to send back the JWT token to the server
    #so that it can be matched!! Hence the need for the decorator here! Basically for the user
    #to be able to use the Bugs Api we want them to supply the server with the token so that 
    #they are then verified and hence we can give them the data that they want! 

    @jwt_required()
    def get(self): #will get called when a GET request is made to /bugs
        #return {'bugs': [] }
        #return BugModel.query.all() #this will get all of the data from the sqlite which 
        #is being accessed through the use of sqlalchemy but here we have an even more higher
        #level implementation so we do not even need to create the stmt and then use the 
        #sqlalchemy Session to run a selector() on the data to retrieve the data!!
        #return BugModel.get_all() # Now we made the BugModel.query.all()  be returned from the 
        #class method get_all() to make it a lil bit cleaner but effectively it does the same 
        #thing! We just seperated the code a bit more

        identity = get_jwt_identity()
        print(identity) # => user id
        return jsonify([bug.to_json() for bug in BugModel.get_all()])
        #This is needed because we were getting errors that the bus were not json 
        #TypeError: Object of type BugModel is not JSON serializable! So this will
        #jsonify each bug to make it be JSON serializable! 

    @jwt_required()
    def post(self):
        new_bug = new_bug_parser.parse_args()
        new_bug_model = BugModel(**new_bug)
        new_bug_model.save()
        return jsonify(new_bug_model.to_json())
    