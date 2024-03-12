import json
import csv
from datetime import datetime
from bsedata.bse import BSE

bse = BSE()

with open("Req.json", "r") as json_file:
    Req = json.load(json_file)
    stock_name = Req["Name"]
    Quantity = Req["Quantity"]

def getSecurityCode(id):
    path = "names_codes.csv"
    with open(path, 'r', newline='') as csv_file:
        csv_reader = csv.reader(csv_file)
        for row in csv_reader:
            if len(row) >= 2 and row[1] == id:
                return row[0]
    return None

def get_current_date():
    return datetime.now().date().isoformat()

jsonFile = "User_Position.json"
code = getSecurityCode(stock_name)
quote = bse.getQuote(code)
current_date = get_current_date()

position = {
    "Name": stock_name,
    "PnL": 0,
    "Quantity": int(Quantity),
    "Entry": float(quote['currentValue']),
    "LTP":  float(quote['currentValue']),
    "Updated_On": quote['updatedOn'],
    "Entry_Date": current_date,
    "status": "OPEN",
    "Code": code
}

try:
    with open(jsonFile, 'r') as json_file:
        positions = json.load(json_file)
except (FileNotFoundError, json.decoder.JSONDecodeError):
    positions = []

positions.append(position)

with open(jsonFile, 'w') as json_file:
    json.dump(positions, json_file, indent=4)