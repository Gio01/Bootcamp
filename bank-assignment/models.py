
from sqlalchemy import Column, Integer, String, ForeignKey, Float, DateTime, Text
from sqlalchemy.orm import declarative_base, relationship, backref

Base = declarative_base()

class Transactions(Base):
    __tablename__ = 'transactions' #refers to the table name

    transaction_id = Column(Integer, primary_key=True)
    transaction_type = Column(String)
    amount = Column(Float)
    date = Column(Text)

    def __repr__(self) -> str:
        return (f"Transaction(transaction_id={self.transaction_id!r}), "
                f"type={self.transaction_type!r}, amount={self.amount!r}, "
                f"date={self.date!r}")

