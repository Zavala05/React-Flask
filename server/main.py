from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/')
def home():
    return "Hello, Flask!"


@app.route('/users')
def users():
    return {
        "users": ['David', 'Eva', 'Frank']
    }



if __name__ == '__main__':
    app.run(debug=True)