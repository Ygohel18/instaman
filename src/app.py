import os.path
from flask import Flask, escape, request, render_template

app = Flask(__name__)


@app.route('/api/context')
def context():
    return {'session': 1}


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
