from flask_restful import Api, Resource, reqparse
from flask import jsonify
from models.users import UserModel
from flask_jwt_extended import create_access_token

_user_parser = reqparse.RequestParser()
_user_parser.add_argument('username', 
    type=str,
    required=True, 
    help='This field cannot be blank')

_user_parser.add_argument('password', 
    type=str, 
    required=True,
    help='This field cannot be blank')


class Register(Resource):

    def post(self):
        data = [user.to_json() for user in UserModel.get_all()]
        
        new_user = _user_parser.parse_args()
        # print("params", new_user)
        print("data", data)
        for user in data:
            # print(user['username'])
            # print(new_user['username'])
            if user['username'] == new_user['username']:

                return 'User already exists!', 404

            

        new_UserModel = UserModel(**new_user) #for adding some arbitratry num of user
        #attributes which would be the username and the password instead of doing
        #user_mode(username=new_user['username'], password=new_user['password'])
        #so with the ** we can unpack those things from the parse args

        new_UserModel.save()
        return jsonify(new_UserModel.to_json())
        

class Login(Resource):

    def post(self):

        data = [user.to_json() for user in UserModel.get_all()]

        user_account = _user_parser.parse_args()

        for user in data:
            
            if user['username'] == user_account['username'] and user['password'] == user_account['password']:

                access_token = create_access_token(identity = user['id'], fresh=True)
                return {'access_token': access_token}
                #return 'Login Successful!', 200

        return 'Invalid Credentials', 404
        
    