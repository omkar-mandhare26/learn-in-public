from bsedata.bse import BSE
from pprint import pprint
b = BSE()

tickerName  = b.getQuote('534976')
print("securityID:", tickerName["securityID"])
print("scripCode:", tickerName["scripCode"])
print("currentValue:", tickerName["currentValue"])
print("updatedOn:", tickerName["updatedOn"])