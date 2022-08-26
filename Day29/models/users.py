from db import db

class UserModel(db.Model):
        
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False)
    



    def __repr__(self) -> str:
        return f'<User {self.name}>'

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password
        }

    def save(self):
        db.session.add(self)
        save = db.session.commit()
        print(save)


    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get(cls, id):
        return cls.query.get(id)