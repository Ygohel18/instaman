import os.path
from flask import Flask, escape, request, render_template

app = Flask(__name__)
work_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


@app.route('/')
def index():
    return open(os.path.join(work_dir, 'src', 'app.html')).read()


@app.route('/assets/app.js')
def app_js():
    return open(os.path.join(work_dir, 'assets', 'app.js')).read()


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
