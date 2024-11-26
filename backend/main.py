import uuid
from flask import Flask, request, session, redirect, render_template, url_for, jsonify
from redis import Redis
from flask_session import Session

app = Flask(__name__)

# Flask configurations
app.secret_key = 'your_secret_key'
app.config['SESSION_TYPE'] = 'redis'
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True
app.config['SESSION_KEY_PREFIX'] = 'session:'
app.config['SESSION_REDIS'] = Redis(host='localhost', port=6379, db=0)

# Initialize Flask-Session
Session(app)
redis_client = app.config['SESSION_REDIS']

# Mock user database
users = {
    "user1": "password1",
    "user2": "password2",
}

@app.route("/login", methods=["GET", "POST"])
def login():

    try:
        if request.method == "POST":
            username = request.form.get("username")
            password = request.form.get("password")
            print(f"Received username: {username}, password: {password}")

            # Validate user credentials
            if username in users and users[username] == password:
                # Invalidate previous session if exists
                session_id = str(uuid.uuid4())
                print(session_id)
                session["username"] = username

                # Use session.sid now that Flask-Session is enabled
                redis_client.set(f"user_session:{username}", session_id)
                redis_client.set(session_id, session.sid)
                return jsonify({
                    "message": "Login successful",
                    "username": username
                })
                # return redirect(url_for("home"))
            else:
                return jsonify({"error": "Invalid credentials"}), 401
        return "home"
    except:
        return jsonify({"error":"unresponsive"}), 501
    

@app.route("/home")
def home():
    if "username" in session:
        print("in welcome ")
        return f"Welcome, {session['username']}!"
    return redirect(url_for("login"))

if __name__ == "__main__":
    app.run(debug=True)
