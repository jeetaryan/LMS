from package import app
from flask import render_template


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/login", methods=["POST", "GET"])
def login():
    return render_template('login.html')


@app.route("/test", methods=["POST", "GET"])
def test():
    return {"data": "hello this is test data call..."}
