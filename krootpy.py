import numpy as np
def handler(event, context):
    print("I like root ", np.pi)
    return {"message": "Successfully executed"}
