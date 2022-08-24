from datetime import datetime
from turtle import st
from unicodedata import name
from sqlalchemy import create_engine, select, update
from sqlalchemy.orm import Session
from models import Bugs
import json

class ORMStorage:

    def __init__(self, file) -> None:
        self.file = file
        self.engine = create_engine(f"sqlite:///./{self.file}", future=True)
        self.session = Session(self.engine)
        self.stmt = select(Bugs)

    def post(self, data):
        #print(data['name'])
        date = datetime.now()
        format_date = date.strftime("%m/%d/%Y, %H:%M:%S")

        new_bug = Bugs(name=data['name'], isClosed=data['isClosed'], createdAt=format_date)
        self.session.add(new_bug)

        self.session.commit()
        

    
    def get_all(self):
        _bugs = []

        stmt = select(Bugs)
        for bug in self.session.scalars(stmt):
            
            bug_dict = {
                "bug_id": bug.bug_id,
                "name": bug.name,
                "isClosed": bug.isClosed,
                "createdAt": bug.createdAt
            }

            _bugs.append(bug_dict)
        
        return _bugs

    
    def get(self, id):
        
        stmt = select(Bugs)
        _bug = []

        for bug in self.session.scalars(stmt):
            
            if bug.bug_id == id:
                bug_dict = {
                    "bug_id": bug.bug_id,
                    "name": bug.name,
                    "isClosed": bug.isClosed,
                    "createdAt": bug.createdAt
                }
                _bug.append(bug_dict)

        return _bug
        

    def update_bug(self, id, data):

        stmt = update(Bugs).where(Bugs.bug_id == id).values(name=data['name'],
        isClosed=data['isClosed'])

        result = self.session.execute(stmt)
        print(result)
        self.session.commit()





    def close(self):
        self.session.close()

    
if __name__ == '__main__':
    storage = ORMStorage('bugs.db')
    print(storage.read())