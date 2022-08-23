from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base, relationship, backref

Base = declarative_base()

class Author(Base): #author inherits from base
    __tablename__ = 'author' #this field is required by sqlalchemy to let it know
    #of what table it is that we are pointing to!

    author_id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)

    #1-to-many relationship from 1 author to many books
    books = relationship("Book", backref=backref("author"), cascade="all, delete-orphan")


    def __repr__(self) -> str:
        return (f"Author(author_id={self.author_id!r}), "
                f"first_name={self.first_name!r}, last_name={self.last_name!r}")
    #!r will treat the value as the type it and give it to us in its respective representaion
    #so the strings will have '' and the integers will just be numbers! Basically !r is repr()

class Book(Base):
    __tablename__ = "book"

    book_id = Column(Integer, primary_key=True)
    title = Column(String)
    author_id = Column(Integer, ForeignKey("author.author_id"), nullable=False)

    #here we create a relationship with that of the authors by having the author_id within the Book table!

    def __repr__(self):
        return (
            f"Book(book_id={self.book_id!r}, "
            f"title={self.title!r}, author_id={self.author_id!r})"
        )