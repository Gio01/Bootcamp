from sqlalchemy import Column, Integer, String, ForeignKey, Float, DateTime, Text, Boolean
from sqlalchemy.orm import declarative_base, relationship, backref

Base = declarative_base()

class Bugs(Base):
    __tablename__ = 'bugs'

    bug_id = Column(Integer, primary_key=True)
    name = Column(String)
    isClosed = Column(Boolean)
    createdAt = Column(Text)

    def __repr__(self) -> str:
        return (f"Bug(bug_id={self.bug_id!r}, "
                f"name={self.name!r}, isClosed={self.isClosed!r}, "
                f"createdAt={self.createdAt!r})")

