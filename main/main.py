
from flask import Flask,jsonify
from project import solve
from flask_cors import CORS ,cross_origin
app = Flask(__name__)

@app.route("/")
@cross_origin()
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/querry/<s>',methods=['POST',"GET"])
@cross_origin()
def querry(s):
     a,b,c=solve(s)
     result={    
         "DocIds" :a,
         "fileIndex" :b,
         "arraylist" :c,
         "Status" :200,
     }
     return jsonify(result)

if __name__=="__main__":
    app.run(debug=True)


