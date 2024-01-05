from package import db
from datetime import datetime


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    studentClass = db.Column(db.String(50), nullable=False)
    permanentAddress = db.Column(db.String(100), nullable=True)
    correspondsAddress = db.Column(db.String(100), nullable=True)
    createdOn = db.Column(db.DateTime, default=datetime.now())


class Subject(db.Model):
    subId = db.Column(db.Integer, primary_key=True)
    subName = db.Column(db.String(50), nullable=False)
    createdOn = db.Column(db.DateTime, default=datetime.now())


class Book(db.Model):
    bookId = db.Column(db.Integer, primary_key=True)
    bookName = db.Column(db.String(50), nullable=False)
    createdOn = db.Column(db.DateTime, default=datetime.now())
