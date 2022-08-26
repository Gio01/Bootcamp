from flask import Flask, render_template, jsonify, request
from ormstorage import ORMStorage

storage = ORMStorage('bugs.db')
app = Flask(__name__)

"""bugs = [
    {
        'id': 1,
        'name': 'Bug - 1',
        'isClosed': False
    },
    {
        'id': 2,
        'name': 'Bug - 2',
        'isClosed': False
    },
    {
        'id': 3,
        'name': 'Bug - 3',
        'isClosed': False
    }
]"""

@app.route('/') #request for a root page/home page!
def home():
    return render_template('index.html') #it will look into the templates dir and get the
    #wanted index.html file!


@app.route('/bugs')
def get_bugs(): #this needs to have get_ for flask to know that this is a get request api
    bugs = storage.get_all()
    return jsonify(bugs)


@app.route('/bugs', methods=['POST'])
def save_new_bug():
    request_data = request.get_json() #request from flask is needed to access the data
    #being sent from the client to the server! 
    
    new_bug = {
        #'id': max(bug['id'] for bug in bugs) + 1, #max takes in an iterable
        'name': request_data['name'],
        'isClosed': request_data['isClosed']
    }
    print(new_bug)
    storage.post(new_bug)
    return new_bug, 201 #this will cause the post request to return a 201 


@app.route('/bugs/<int:id>')
def get_a_bug(id):
    bug = storage.get(id)
    
    if not bug:
        return 'Bug Not Found', 404

    return bug
    


@app.route('/bugs/<int:id>', methods=['PUT'])
def update(id):
    updated_data = request.get_json()
    # for bug in bugs:
    #     if bug['id'] == id:
    #         bug['name'] = updated_data['name']
    #         bug['isClosed'] = updated_data['isClosed']
    #         return bug, 'Bug Was Updated'

    storage.update_bug(id, updated_data)
    #need to have a guard for if that bug does not exist, or does
    #the insert in alchemy handle this for us?
    return 'Bug Not Found', 404


@app.route('/bugs/<int:id>', methods=['DELETE'])
def delete(id):
    # for bug in bugs:
    #     if bug['id'] == id:
    #         bugs.remove(bug)
    #         return '{}'
    
    storage.delete_bug(id)
    #how do you check if this was done?
    return '{}', 404


app.run(port=8080, debug=True)
