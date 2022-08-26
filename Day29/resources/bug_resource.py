from flask import jsonify
from flask_restful import Resource, inputs
from models.bugs import BugModel
from resources.bugs_resource import new_bug_parser
from flask_jwt_extended import jwt_required

#We an also create parsers to add in data that we want to have as default 
#values for any incoming data such as isClosed being false or adding an id!

#_bug_parser = reqparse.RequestParser().copy() 
# Now since we want to inherit from the parent parser we imported the 
#new bug parser from the bugs resource file and then get a copy() from it!

_bug_parser = new_bug_parser.copy()
# by using copy we can 
#copy the same parser handlers that we have created before on the Request
#parser which would be the ones above!!
#NOTE: this is inheritance here! this copy() is inheriting from the _new_bug_parser!
"""_new_bug_parser.add_argument('name', type=str, 
    help='The field cannot be blank',
    required=True)

_bug_parser.add_argument('isClosed', type=bool, 
    default=False)"""

_bug_parser.add_argument('id', type=int, 
    required=True, 
    help='Invalid Data')
#in this manner we can replace the inherited handler for the isClosed 
#attribute and in this manner on a update to an existing bug we are not 
#overriding the isClosed data!
_bug_parser.replace_argument('is_closed', 
    type=inputs.boolean,
    required=True,
    help='Invalid Data'
)
_bug_parser.add_argument('name', type=str, 
    help='The field cannot be blank',
    required=True)

class Bug(Resource):

    @jwt_required()
    def get(self, id):
        bug = BugModel.get(id)

        if bug:
            return jsonify({
                'id' : bug.id,
                'name' : bug.name,
                'is_closed' : bug.is_closed,
                'created_at' : bug.created_at
            })
        else:
            return "Bug Not Found", 404
        #return f'Bug-{id} will be returned: {bug}'
    
    @jwt_required()
    def put(self, id):
        bug_to_update = _bug_parser.parse_args()
        
        bug = BugModel.get(id)
        
        if bug:
            bug.name = bug_to_update['name']
            BugModel.update(bug)
            return f'Bug-{bug_to_update} will be updated'
        else:
            return "Bug Not Found", 404

    @jwt_required()
    def delete(self, id):

        bug = BugModel.get(id)

        if bug:
            # db.session.delete(bug)
            # db.session.commit()
            BugModel.delete(bug)
            return f'Bug-{id} will be removed'
        else:
            return "Bug Not Found", 404
    