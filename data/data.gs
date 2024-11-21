function fetchFinancialData() {
  var apiKey = 'YOURAPIKEY';  // Replace with your Alpha Vantage API key
  var symbols = ["NVDA","AAPL", "MSFT", "AMZN", "GOOG", "META", "BRK.B", "TSLA","AVGO", "LLY", "WNT","JPM", "V","UNH", "XOM", "ORCL", "MA","COST","HD", "PG", "JNJ", "NFLX", "BAC","CRM", "ABBV", "CVX", "TMUS", "KO", "MRK", "WFC", "ADBE", "CSCO", "PEP", "ACN", "AMD", "BX", "LIN", "NOW", "MCD", "MS", "TMO", "AXP", "ABT", "PM", "DIS", "INTU", "GE", "GS", "IBM", "ISRG", "TXN", "CAT", "QCOM", "DHR", "VZ", "CMCSA", "BKNG", "BLK", "T", "AMGN", "SPGI", "RTX", "NEE", "LOW", "AMAT", "UBER", "HON", "PGR","PFE", "SYK", "SCHW", "UNP", "ETN", "TJX", "PLTR", "KKR", "PANW", "BSX", "COP", "C", "LMT", "VRTX", "ADP", "ANET", "FI", "BMY", "CB", "GILD","UPS", "NKE", "SBUX", "MDT", "MU", "MMC", "INTC", "PLD", "DE", "ADI", "BA", "SHW", "LRCX", "SO", "DELL", "ELV", "MO", "TT", "AMT", "GEV", "ICE", "CI", "PH", "WM", "MDLZ", "HCA", "CTAS", "MCO", "APH", "EQIX", "KLAC", "PYPL", "DUK", "REGN", "CRWD", "SNPS", "WELL", "ABNB", "CDNS", "MSI", "PNC", "CMG", "AON", "CME", "GD", "ITW", "ZTS", "MAR", "USB", "MCK", "EOG", "CL", "EMR", "NOC", "FTNT", "MMM", "FDX", "TGT", "CEG", "TDG", "ORLY", "APD", "ECL", "COF", "CVS", "CSX", "WNB", "CARR", "SPG", "BDX", "ADSK", "RSG", "AJG", "GM", "CHTR", "RCL", "FCX", "TFC", "HLT", "SLB", "AFL", "ROP", "PCAR", "DLR", "NSC", "KMI", "PSA", "TRV", "SRE", "MET", "GWW", "JCI", "FICO", "NXPI", "BK", "CRPT", "URI", "MNST", "AMP", "PSX", "AZO", "DHI", "FANG", "PAYX", "ALL", "MPC", "AEP", "CMI", "O", "COR", "PWR", "VST", "FIS", "MSCI", "ODFL", "ROST", "D", "AIG", "FAST", "LHX", "OXY", "AXON", "NEM", "TEL", "LEN", "HWM", "KDP", "KVUE", "PCG" ,"NDAQ", "CCI", "PRU", "AME", "HES", "STZ", "VLO", "F", "KMB", "DFS", "PEG", "EA", "KR", "BKR", "DAL", "TRGP", "IR", "IT", "LULU", "GRMN", "VRSK", "GLW", "CTSH", "OTIS", "XEL", "CTVA", "EW", "KHC", "EXC", "GEHC", "YUM", "A", "ACGL", "IQV", "SYY", "HSY", "EXR", "GIS", "MLM", "HPQ", "MCHP", "MTB", "LVS", "IDXX", "DD", "NUE", "WAB", "RMD", "HUM", "HIG", "IRM", "ED", "VICI", "EFX", "AVB", "RJF", "ROK", "EIX", "TTWO", "WTW", "ETR", "CCL", "FITB", "DOW", "BRO", "CSGP", "WEC", "UAL", "EBAY", "ANSS", "CAH", "LYZ", "TSCO", "XYL", "GPN", "CNC", "DXCM", "EQR", "PPG", "ON", "NVR", "MPWR", "K", "DOV", "HPE", "STT", "VTR", "DECK", "LYB", "KEYS", "TROW", "BR", "PHM", "FTV", "CHD", "TYL", "HAL", "MTD", "SW", "GDDY", "AWK", "CPAY", "DVN", "VLTO", "EQT", "HBAN", "SVF", "ADM", "DTE", "WST", "PPL", "ROL", "NTAP", "BIIB", "CDW", "WBD", "AEE", "RF", "HUBB", "FE", "SBAC", "CINF", "EXPE", "EL", "PTC", "IFF", "TSN", "WRB", "ES", "ATO", "WAT", "WY", "LDOS", "TDY", "STE", "ZBH", "WDC", "FOXA", "ERIE", "NRTS", "PKG", "CBOE", "BLDR", "STLD", "FSLR", "INVH", "STX", "FOX", "OMC", "CFG", "ZBRA", "CMS", "ESS", "MKC", "COO", "LH", "BBY", "DRI", "PFG", "CNP", "IP", "BF.B", "LUV", "ARE", "MAA", "KEY", "NRG", "FDS", "SNA", "CTRA", "JBHT", "GEN", "BALL", "PODD", "HOLX", "ULTA", "L", "VRSN", "BGX", "PNR", "J", "IEX", "MOH", "TER", "TRMB", "GPC", "MAS", "DG", "EXPD", "NI", "NWS", "HRL", "KIM", "UDR", "ALGN", "NWSA", "BAX", "AVY", "MRO", "TXT", "MRNA", "EG", "LNT", "DOC", "INCY", "DPZ", "CF", "NDSN", "AMCR", "JBL", "EVRG", "DLTR", "RVTY", "BXP", "FFIV", "EPAM", "POOL", "TPR", "REG", "SWKS", "CPB", "UHS", "AKAM", "SWK", "CAG", "CHRW", "RL", "CPT", "TAP", "APTV", "DVA", "JNPR", "PAYC", "JKHY", "BG", "DAY", "ALLE", "HST", "KMX", "ALB", "SJM", "SOLV", "NCLH", "EMN", "TECH", "LW", "BEN", "MGM", "GNRC", "AIZ", "IPG", "CTLT", "AOS", "SMCI", "PNW", "WYNN", "AES", "MKTX", "CRL", "LKQ", "FRT", "GL", "TFX","MHK", "HAS", "ENPH", "HSIC", "CZR", "MOS", "APA", "CE", "IVZ", "MTCH", "HII", "WBA", "BWA", "PARA", "FMC", "AMTM", "QRVO" ];   // Test tickers
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();

  // Define headers for combined data
  var headers = [
    'fiscalDateEnding', 'reportedCurrency', 'Ticker', 'grossProfit', 'totalRevenue', 'costOfRevenue', 'costofGoodsAndServicesSold', 
    'operatingIncome', 'sellingGeneralAndAdministrative', 'researchAndDevelopment', 'operatingExpenses', 'investmentIncomeNet', 
    'netInterestIncome', 'interestIncome', 'interestExpense', 'nonInterestIncome', 'otherNonOperatingIncome', 'depreciation', 
    'depreciationAndAmortization', 'incomeBeforeTax', 'incomeTaxExpense', 'interestAndDebtExpense', 'netIncomeFromContinuingOperations', 
    'comprehensiveIncomeNetOfTax', 'ebit', 'ebitda', 'netIncome', 'totalAssets', 'totalCurrentAssets', 'cashAndCashEquivalentsAtCarryingValue', 
    'cashAndShortTermInvestments', 'inventory', 'currentNetReceivables', 'totalNonCurrentAssets', 'propertyPlantEquipment', 
    'accumulatedDepreciationAmortizationPPE', 'intangibleAssets', 'intangibleAssetsExcludingGoodwill', 'goodwill', 'investments', 
    'longTermInvestments', 'shortTermInvestments', 'otherCurrentAssets', 'otherNonCurrentAssets', 'totalLiabilities', 'totalCurrentLiabilities', 
    'currentAccountsPayable', 'deferredRevenue', 'currentDebt', 'shortTermDebt', 'totalNonCurrentLiabilities', 'capitalLeaseObligations', 
    'longTermDebt', 'currentLongTermDebt', 'longTermDebtNoncurrent', 'shortLongTermDebtTotal', 'otherCurrentLiabilities', 
    'otherNonCurrentLiabilities', 'totalShareholderEquity', 'treasuryStock', 'retainedEarnings', 'commonStock', 'commonStockSharesOutstanding', 
    'operatingCashflow', 'paymentsForOperatingActivities', 'proceedsFromOperatingActivities', 'changeInOperatingLiabilities', 
    'changeInOperatingAssets', 'depreciationDepletionAndAmortization', 'capitalExpenditures', 'changeInReceivables', 'changeInInventory', 
    'profitLoss', 'cashflowFromInvestment', 'cashflowFromFinancing', 'proceedsFromRepaymentsOfShortTermDebt', 'paymentsForRepurchaseOfCommonStock', 
    'paymentsForRepurchaseOfEquity', 'paymentsForRepurchaseOfPreferredStock', 'dividendPayout', 'dividendPayoutCommonStock', 
    'dividendPayoutPreferredStock', 'proceedsFromIssuanceOfCommonStock', 'proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet', 
    'proceedsFromIssuanceOfPreferredStock', 'proceedsFromRepurchaseOfEquity', 'proceedsFromSaleOfTreasuryStock', 'changeInCashAndCashEquivalents', 
    'changeInExchangeRate', 'netIncome', 'dividendPaid'
  ];
  sheet.appendRow(headers);

  symbols.forEach(function(symbol) {
    var incomeData = fetchAlphaVantageData('INCOME_STATEMENT', symbol, apiKey);
    var balanceData = fetchAlphaVantageData('BALANCE_SHEET', symbol, apiKey);
    var cashflowData = fetchAlphaVantageData('CASH_FLOW', symbol, apiKey);
    
    if (incomeData && balanceData && cashflowData) {
      incomeData["annualReports"].forEach(function(report, index) {
        var row = [
          report['fiscalDateEnding'], report['reportedCurrency'], symbol, report['grossProfit'], report['totalRevenue'], 
          report['costOfRevenue'], report['costofGoodsAndServicesSold'], report['operatingIncome'], report['sellingGeneralAndAdministrative'], 
          report['researchAndDevelopment'], report['operatingExpenses'], report['investmentIncomeNet'], report['netInterestIncome'], 
          report['interestIncome'], report['interestExpense'], report['nonInterestIncome'], report['otherNonOperatingIncome'], 
          report['depreciation'], report['depreciationAndAmortization'], report['incomeBeforeTax'], report['incomeTaxExpense'], 
          report['interestAndDebtExpense'], report['netIncomeFromContinuingOperations'], report['comprehensiveIncomeNetOfTax'], 
          report['ebit'], report['ebitda'], report['netIncome'], balanceData["annualReports"][index]['totalAssets'], 
          balanceData["annualReports"][index]['totalCurrentAssets'], balanceData["annualReports"][index]['cashAndCashEquivalentsAtCarryingValue'], 
          balanceData["annualReports"][index]['cashAndShortTermInvestments'], balanceData["annualReports"][index]['inventory'], 
          balanceData["annualReports"][index]['currentNetReceivables'], balanceData["annualReports"][index]['totalNonCurrentAssets'], 
          balanceData["annualReports"][index]['propertyPlantEquipment'], balanceData["annualReports"][index]['accumulatedDepreciationAmortizationPPE'], 
          balanceData["annualReports"][index]['intangibleAssets'], balanceData["annualReports"][index]['intangibleAssetsExcludingGoodwill'], 
          balanceData["annualReports"][index]['goodwill'], balanceData["annualReports"][index]['investments'], balanceData["annualReports"][index]['longTermInvestments'], 
          balanceData["annualReports"][index]['shortTermInvestments'], balanceData["annualReports"][index]['otherCurrentAssets'], 
          balanceData["annualReports"][index]['otherNonCurrentAssets'], balanceData["annualReports"][index]['totalLiabilities'], 
          balanceData["annualReports"][index]['totalCurrentLiabilities'], balanceData["annualReports"][index]['currentAccountsPayable'], 
          balanceData["annualReports"][index]['deferredRevenue'], balanceData["annualReports"][index]['currentDebt'], 
          balanceData["annualReports"][index]['shortTermDebt'], balanceData["annualReports"][index]['totalNonCurrentLiabilities'], 
          balanceData["annualReports"][index]['capitalLeaseObligations'], balanceData["annualReports"][index]['longTermDebt'], 
          balanceData["annualReports"][index]['currentLongTermDebt'], balanceData["annualReports"][index]['longTermDebtNoncurrent'], 
          balanceData["annualReports"][index]['shortLongTermDebtTotal'], balanceData["annualReports"][index]['otherCurrentLiabilities'], 
          balanceData["annualReports"][index]['otherNonCurrentLiabilities'], balanceData["annualReports"][index]['totalShareholderEquity'], 
          balanceData["annualReports"][index]['treasuryStock'], balanceData["annualReports"][index]['retainedEarnings'], 
          balanceData["annualReports"][index]['commonStock'], balanceData["annualReports"][index]['commonStockSharesOutstanding'], 
          cashflowData["annualReports"][index]['operatingCashflow'], cashflowData["annualReports"][index]['paymentsForOperatingActivities'], 
          cashflowData["annualReports"][index]['proceedsFromOperatingActivities'], cashflowData["annualReports"][index]['changeInOperatingLiabilities'], 
          cashflowData["annualReports"][index]['changeInOperatingAssets'], cashflowData["annualReports"][index]['depreciationDepletionAndAmortization'], 
          cashflowData["annualReports"][index]['capitalExpenditures'], cashflowData["annualReports"][index]['changeInReceivables'], 
          cashflowData["annualReports"][index]['changeInInventory'], cashflowData["annualReports"][index]['profitLoss'], 
          cashflowData["annualReports"][index]['cashflowFromInvestment'], cashflowData["annualReports"][index]['cashflowFromFinancing'], 
          cashflowData["annualReports"][index]['proceedsFromRepaymentsOfShortTermDebt'], cashflowData["annualReports"][index]['paymentsForRepurchaseOfCommonStock'], 
          cashflowData["annualReports"][index]['paymentsForRepurchaseOfEquity'], cashflowData["annualReports"][index]['paymentsForRepurchaseOfPreferredStock'], 
          cashflowData["annualReports"][index]['dividendPayout'], cashflowData["annualReports"][index]['dividendPayoutCommonStock'], 
          cashflowData["annualReports"][index]['dividendPayoutPreferredStock'], cashflowData["annualReports"][index]['proceedsFromIssuanceOfCommonStock'], 
          cashflowData["annualReports"][index]['proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet'], cashflowData["annualReports"][index]['proceedsFromIssuanceOfPreferredStock'], 
          cashflowData["annualReports"][index]['proceedsFromRepurchaseOfEquity'], cashflowData["annualReports"][index]['proceedsFromSaleOfTreasuryStock'], 
          cashflowData["annualReports"][index]['changeInCashAndCashEquivalents'], cashflowData["annualReports"][index]['changeInExchangeRate'], 
          cashflowData["annualReports"][index]['netIncome'], cashflowData["annualReports"][index]['dividendPayout'] ? 1 : 0
        ];
        sheet.appendRow(row);
      });
    } else {
      Logger.log("No data found for the symbol: " + symbol);
    }
  });
}

function fetchAlphaVantageData(functionType, symbol, apiKey) {
  var url = `https://www.alphavantage.co/query?function=${functionType}&symbol=${symbol}&apikey=${apiKey}`;
  var response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}