import json
from urllib import request
import uuid

def handler(req_body):
    data = json.loads(req_body)
    repo_url = data.get("repoUrl")
    env = data.get("env", {})
    
    # Mock deploy
    app_id = str(uuid.uuid4())
    app = {
        "id": app_id,
        "type": "python",
        "repoUrl": repo_url,
        "env": env,
        "status": "deployed",
        "logs": []
    }
    
    return json.dumps({"message": "Python app deployed", "app": app})
