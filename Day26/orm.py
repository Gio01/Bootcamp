from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session
from models import Author

engine = create_engine("sqlite:///./books.db", echo=True, future=True)
session = Session(engine)
stmt = select(Author)
for author in session.scalars(stmt):
    print(author)

#Adding an author
david = Author(first_name="David", last_name="Walliams")
session.add(david)
session.commit()

#Adding multiple authors
author_1 = Author(first_name="f1", last_name="l1")
author_2 = Author(first_name="f2", last_name="l2")
session.add_all([author_1, author_2])
session.commit()

#Updating an author
author_1.first_name = "Tom"
author_1.last_name = "Kruger"
session.commit()

#Querying an author
stmt = select(Author).filter_by(author_id=4) #here we overwrite the stmt var from before and hence filter for that single author!
result = session.execute(stmt).scalars().all()
#print(result)

#Deleting an author
#print(author_2)
session.delete(author_2)
session.commit()

#Accessing related objects
#print(stmt)
for author in session.scalars(stmt):
    print(author.first_name)
    print(author.books)
    print("-" * 40)