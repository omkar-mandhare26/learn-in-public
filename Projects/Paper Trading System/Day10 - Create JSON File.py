from bsedata.bse import BSE
import json

b = BSE()
q  = b.getQuote('534976')


position = {
"securityID":  q['securityID'],
"currentValue": q['currentValue'],
"updatedOn": q['updatedOn'],
"scripCode": q['scripCode']
}

file_path = "User_position.json"
with open(file_path,'w') as json_file:
    json.dump(position,json_file,indent=4)