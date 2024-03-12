import json
from bsedata.bse import BSE
bse = BSE()

file_path = "User_Position.json"

with open(file_path, 'r') as json_file:
    loaded_data = json.load(json_file)

for items in loaded_data:
    quote = bse.getQuote(items['Code'])
    items['LTP'] = quote["currentValue"]
    items["PnL"] =round( (float(items['LTP']) - float(items["Entry"]))*int(items["Quantity"]),4) 
    items["Updated_On"] = quote['updatedOn']

with open(file_path, 'w') as json_file:
    json.dump(loaded_data, json_file, indent=4)