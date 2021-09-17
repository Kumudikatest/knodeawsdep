from scipy.special import cbrt
import numpy as np
def handler(event, context):
    cb = cbrt([27, 64])
    print(cb)
    print("I like sub ", np.pi)
    
    return {"message": "Successfully executed"}
