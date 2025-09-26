(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_62_Extraction_Coal_production_line') 

        var resizeDebounce = null; 


        function resizePlot() { 

          var bb = gd.getBoundingClientRect(); 

          Plotly.relayout(gd, { 

            width: bb.width, 

              height: bb.height 

            }); 

          } 


          Plotly.plot(gd,  

              {
  "data": [
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [99.209999999999994, 102.50999999999999, 105.81999999999998, 92.590000000000003, 115.73999999999998, 100.31, 83.780000000000001, 88.739999999999995, 93.700000000000003, 104.72, 87.079999999999998, 62.829999999999998, 37.479999999999997, 25.350000000000005, 21.719999999999999, 26.140000000000001, 24.25, 21.849999999999998, 29.700000000000003],
      "text": ["Coal production: 99.21 thousand short tons<br>Period: 2003<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 102.51 thousand short tons<br>Period: 2004<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 105.82 thousand short tons<br>Period: 2005<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 92.59 thousand short tons<br>Period: 2006<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 115.74 thousand short tons<br>Period: 2007<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 100.31 thousand short tons<br>Period: 2008<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 83.78 thousand short tons<br>Period: 2009<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 88.74 thousand short tons<br>Period: 2010<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 93.7 thousand short tons<br>Period: 2011<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 104.72 thousand short tons<br>Period: 2012<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 87.08 thousand short tons<br>Period: 2013<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 62.83 thousand short tons<br>Period: 2014<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 37.48 thousand short tons<br>Period: 2015<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 25.35 thousand short tons<br>Period: 2016<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 21.72 thousand short tons<br>Period: 2017<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 26.14 thousand short tons<br>Period: 2018<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 24.25 thousand short tons<br>Period: 2019<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 21.85 thousand short tons<br>Period: 2020<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal production: 29.7 thousand short tons<br>Period: 2021<br>REMIND_62 region code: ARG<br>Countries in region: Argentina"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,68,27,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,68,27,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [18518.311386622296, 18220.668611147525, 18233.9632696443, 18247.269882373403, 18451.566382083725, 19408.362893931448, 19321.363110528073, 19014.553971749541, 20726.057428445823, 19381.299552369976, 20168.748298713741, 15443.764514227514, 18893.057090797116, 19166.561862829425, 19933.060356684804, 18939.396188776693, 19467.803120194898, 19753.452686265635, 18293.578127484725],
      "text": ["Coal production: 18518.31 thousand short tons<br>Period: 2003<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 18220.67 thousand short tons<br>Period: 2004<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 18233.96 thousand short tons<br>Period: 2005<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 18247.27 thousand short tons<br>Period: 2006<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 18451.57 thousand short tons<br>Period: 2007<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 19408.36 thousand short tons<br>Period: 2008<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 19321.36 thousand short tons<br>Period: 2009<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Coal production: 19014.55 thousand short tons<br>Period: 2010<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Coal production: 20726.06 thousand short tons<br>Period: 2011<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 19381.3 thousand short tons<br>Period: 2012<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 20168.75 thousand short tons<br>Period: 2013<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 15443.76 thousand short tons<br>Period: 2014<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 18893.06 thousand short tons<br>Period: 2015<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 19166.56 thousand short tons<br>Period: 2016<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 19933.06 thousand short tons<br>Period: 2017<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 18939.4 thousand short tons<br>Period: 2018<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 19467.8 thousand short tons<br>Period: 2019<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 19753.45 thousand short tons<br>Period: 2020<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal production: 18293.58 thousand short tons<br>Period: 2021<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,68,27,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [63.929999999999993, 63.93, 49.600000000000001, 49.600000000000009, 49.600000000000001, 67.239999999999995, 11.02, 11.02, 5.5099999999999989, 7.7199999999999998, 9.9199999999999999, 18.350000000000001, 26.789999999999999, 15.43, 50.710000000000001, 108.02999999999999, 134.16999999999999, 139.99000000000001, 265.38],
      "text": ["Coal production: 63.93 thousand short tons<br>Period: 2003<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 63.93 thousand short tons<br>Period: 2004<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 49.6 thousand short tons<br>Period: 2005<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 49.6 thousand short tons<br>Period: 2006<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 49.6 thousand short tons<br>Period: 2007<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 67.24 thousand short tons<br>Period: 2008<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 11.02 thousand short tons<br>Period: 2009<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 11.02 thousand short tons<br>Period: 2010<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 5.51 thousand short tons<br>Period: 2011<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 7.72 thousand short tons<br>Period: 2012<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 9.92 thousand short tons<br>Period: 2013<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 18.35 thousand short tons<br>Period: 2014<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 26.79 thousand short tons<br>Period: 2015<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 15.43 thousand short tons<br>Period: 2016<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 50.71 thousand short tons<br>Period: 2017<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 108.03 thousand short tons<br>Period: 2018<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 134.17 thousand short tons<br>Period: 2019<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 139.99 thousand short tons<br>Period: 2020<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal production: 265.38 thousand short tons<br>Period: 2021<br>REMIND_62 region code: ALB<br>Countries in region: Albania"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,109,44,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [3.6143831933712787, 4.9540660355067834, 9.654351328549529, 23.927857878750725, 24.933436797041622, 31.454359792363064, 30.972081272903313, 41.890967741743509, 39.985972677103121, 49.439058292810927, 45.839955150162943, 50.113179860606024, 54.660810776464324, 58.442671693601724, 86.179600769443326, 124.87289638429768, 138.95909628982665, 74.901523306628206, 95.023233036413941],
      "text": ["Coal production: 3.61 thousand short tons<br>Period: 2003<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 4.95 thousand short tons<br>Period: 2004<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 9.65 thousand short tons<br>Period: 2005<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 23.93 thousand short tons<br>Period: 2006<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 24.93 thousand short tons<br>Period: 2007<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 31.45 thousand short tons<br>Period: 2008<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 30.97 thousand short tons<br>Period: 2009<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 41.89 thousand short tons<br>Period: 2010<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 39.99 thousand short tons<br>Period: 2011<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 49.44 thousand short tons<br>Period: 2012<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 45.84 thousand short tons<br>Period: 2013<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 50.11 thousand short tons<br>Period: 2014<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 54.66 thousand short tons<br>Period: 2015<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 58.44 thousand short tons<br>Period: 2016<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 86.18 thousand short tons<br>Period: 2017<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 124.87 thousand short tons<br>Period: 2018<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 138.96 thousand short tons<br>Period: 2019<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 74.9 thousand short tons<br>Period: 2020<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal production: 95.02 thousand short tons<br>Period: 2021<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,109,44,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [41.700000000000003, 36.380000000000003, 37.100000000000001, 34.009999999999998, 30.920000000000005, 27.82, 36.060000000000009, 41.890000000000001, 39.920000000000002, 23.149999999999999, 3.4900000000000002, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 41.7 thousand short tons<br>Period: 2003<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 36.38 thousand short tons<br>Period: 2004<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 37.1 thousand short tons<br>Period: 2005<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 34.01 thousand short tons<br>Period: 2006<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 30.92 thousand short tons<br>Period: 2007<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 27.82 thousand short tons<br>Period: 2008<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 36.06 thousand short tons<br>Period: 2009<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 41.89 thousand short tons<br>Period: 2010<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 39.92 thousand short tons<br>Period: 2011<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 23.15 thousand short tons<br>Period: 2012<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 3.49 thousand short tons<br>Period: 2013<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: EGY<br>Countries in region: Egypt"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(8,48,107,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [68512.979999999996, 72749.160000000018, 77192.559999999998, 77054.770000000004, 81627.160000000003, 74681.5, 69374.979999999996, 74840.23000000001, 74413.639999999999, 73395.110000000001, 77323.740000000005, 74345.300000000003, 68722.410000000003, 65322.889999999992, 68517.37999999999, 63377.309999999998, 58604.860000000001, 49918, 52317.559999999998],
      "text": ["Coal production: 68512.98 thousand short tons<br>Period: 2003<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 72749.16 thousand short tons<br>Period: 2004<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 77192.56 thousand short tons<br>Period: 2005<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 77054.77 thousand short tons<br>Period: 2006<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 81627.16 thousand short tons<br>Period: 2007<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 74681.5 thousand short tons<br>Period: 2008<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 69374.98 thousand short tons<br>Period: 2009<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 74840.23 thousand short tons<br>Period: 2010<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 74413.64 thousand short tons<br>Period: 2011<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 73395.11 thousand short tons<br>Period: 2012<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 77323.74 thousand short tons<br>Period: 2013<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 74345.3 thousand short tons<br>Period: 2014<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 68722.41 thousand short tons<br>Period: 2015<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 65322.89 thousand short tons<br>Period: 2016<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 68517.38 thousand short tons<br>Period: 2017<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 63377.31 thousand short tons<br>Period: 2018<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 58604.86 thousand short tons<br>Period: 2019<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 49918 thousand short tons<br>Period: 2020<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal production: 52317.56 thousand short tons<br>Period: 2021<br>REMIND_62 region code: CAN<br>Countries in region: Canada"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(8,81,156,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [5709.8500000000004, 5682.8400000000001, 5806.04, 6253.9900000000007, 5329.4300000000003, 5325.9300000000003, 4974.9699999999993, 5888.4399999999996, 5466.3399999999992, 5425.7600000000002, 5098.6899999999996, 4392.1000000000004, 3737.5500000000006, 3159.9099999999999, 3217.1599999999994, 3561.3400000000001, 3344.3900000000003, 3107.0599999999999, 3160.9999999999995],
      "text": ["Coal production: 5709.85 thousand short tons<br>Period: 2003<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 5682.84 thousand short tons<br>Period: 2004<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 5806.04 thousand short tons<br>Period: 2005<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 6253.99 thousand short tons<br>Period: 2006<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 5329.43 thousand short tons<br>Period: 2007<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 5325.93 thousand short tons<br>Period: 2008<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 4974.97 thousand short tons<br>Period: 2009<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 5888.44 thousand short tons<br>Period: 2010<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 5466.34 thousand short tons<br>Period: 2011<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 5425.76 thousand short tons<br>Period: 2012<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 5098.69 thousand short tons<br>Period: 2013<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 4392.1 thousand short tons<br>Period: 2014<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 3737.55 thousand short tons<br>Period: 2015<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 3159.91 thousand short tons<br>Period: 2016<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 3217.16 thousand short tons<br>Period: 2017<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 3561.34 thousand short tons<br>Period: 2018<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 3344.39 thousand short tons<br>Period: 2019<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 3107.06 thousand short tons<br>Period: 2020<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal production: 3161 thousand short tons<br>Period: 2021<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(8,81,156,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [15209.02, 17072.540000000001, 16721.91, 18905.169999999998, 20219.110000000001, 18244.849999999995, 15687.809999999999, 19018.320000000003, 24928.07, 17283.639999999999, 16740.779999999999, 16961.240000000002, 11769.360000000001, 13852.73, 12980.799999999997, 12016.280000000001, 9842.5300000000007, 9703.0699999999997, 9785.5300000000007],
      "text": ["Coal production: 15209.02 thousand short tons<br>Period: 2003<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 17072.54 thousand short tons<br>Period: 2004<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 16721.91 thousand short tons<br>Period: 2005<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 18905.17 thousand short tons<br>Period: 2006<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 20219.11 thousand short tons<br>Period: 2007<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 18244.85 thousand short tons<br>Period: 2008<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 15687.81 thousand short tons<br>Period: 2009<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 19018.32 thousand short tons<br>Period: 2010<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 24928.07 thousand short tons<br>Period: 2011<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 17283.64 thousand short tons<br>Period: 2012<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 16740.78 thousand short tons<br>Period: 2013<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 16961.24 thousand short tons<br>Period: 2014<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 11769.36 thousand short tons<br>Period: 2015<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 13852.73 thousand short tons<br>Period: 2016<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 12980.8 thousand short tons<br>Period: 2017<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 12016.28 thousand short tons<br>Period: 2018<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 9842.53 thousand short tons<br>Period: 2019<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 9703.07 thousand short tons<br>Period: 2020<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal production: 9785.53 thousand short tons<br>Period: 2021<br>REMIND_62 region code: MEX<br>Countries in region: Mexico"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(35,139,69,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [3243.4918724775625, 3199.4252522022807, 1620.6474872144313, 2638.63727364433, 4487.3391915109833, 3778.9260077371841, 2909.6670505270868, 2131.8485371591455, 1527.0070679586574, 1354.0460564313519, 2043.755171568584, 1845.4460613361912, 1218.5459650013995, 901.24716891686626, 144.32965356830331, 165.65978845751462, 133.33587387122023, 75.653828877748566, 133.60646163331296],
      "text": ["Coal production: 3243.49 thousand short tons<br>Period: 2003<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 3199.43 thousand short tons<br>Period: 2004<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 1620.65 thousand short tons<br>Period: 2005<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 2638.64 thousand short tons<br>Period: 2006<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 4487.34 thousand short tons<br>Period: 2007<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 3778.93 thousand short tons<br>Period: 2008<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 2909.67 thousand short tons<br>Period: 2009<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 2131.85 thousand short tons<br>Period: 2010<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 1527.01 thousand short tons<br>Period: 2011<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 1354.05 thousand short tons<br>Period: 2012<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 2043.76 thousand short tons<br>Period: 2013<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 1845.45 thousand short tons<br>Period: 2014<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 1218.55 thousand short tons<br>Period: 2015<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 901.25 thousand short tons<br>Period: 2016<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 144.33 thousand short tons<br>Period: 2017<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 165.66 thousand short tons<br>Period: 2018<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 133.34 thousand short tons<br>Period: 2019<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 75.65 thousand short tons<br>Period: 2020<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal production: 133.61 thousand short tons<br>Period: 2021<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(35,139,69,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [70803.580000000002, 65685.550000000003, 66536.529999999999, 67980.559999999998, 70782.630000000005, 71032.860000000015, 65735.160000000003, 63558.089999999997, 69097.199999999997, 72226.660000000003, 71018.520000000004, 50630.199999999997, 37990.010000000002, 35461.309999999998, 27210.52, 29535.289999999997, 28737.219999999998, 26940.459999999995, 27472.849999999999],
      "text": ["Coal production: 70803.58 thousand short tons<br>Period: 2003<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 65685.55 thousand short tons<br>Period: 2004<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 66536.53 thousand short tons<br>Period: 2005<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 67980.56 thousand short tons<br>Period: 2006<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 70782.63 thousand short tons<br>Period: 2007<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 71032.86 thousand short tons<br>Period: 2008<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 65735.16 thousand short tons<br>Period: 2009<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 63558.09 thousand short tons<br>Period: 2010<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 69097.2 thousand short tons<br>Period: 2011<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 72226.66 thousand short tons<br>Period: 2012<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 71018.52 thousand short tons<br>Period: 2013<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 50630.2 thousand short tons<br>Period: 2014<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 37990.01 thousand short tons<br>Period: 2015<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 35461.31 thousand short tons<br>Period: 2016<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 27210.52 thousand short tons<br>Period: 2017<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 29535.29 thousand short tons<br>Period: 2018<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 28737.22 thousand short tons<br>Period: 2019<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 26940.46 thousand short tons<br>Period: 2020<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal production: 27472.85 thousand short tons<br>Period: 2021<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(35,139,69,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: URY<br>Countries in region: Uruguay"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(35,139,69,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [5121.3299999999999, 5959.0900000000001, 6894.9499999999998, 6483.79, 6575.2799999999997, 7288.4700000000003, 6293.0900000000001, 5969.0099999999993, 6068.2200000000012, 7292.8799999999992, 9473.25, 8749.0300000000007, 8850.4500000000007, 7721.6799999999994, 5312.0299999999997, 5332.4700000000003, 5963.1300000000001, 6149.4200000000001, 7346.8999999999996],
      "text": ["Coal production: 5121.33 thousand short tons<br>Period: 2003<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 5959.09 thousand short tons<br>Period: 2004<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 6894.95 thousand short tons<br>Period: 2005<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 6483.79 thousand short tons<br>Period: 2006<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 6575.28 thousand short tons<br>Period: 2007<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 7288.47 thousand short tons<br>Period: 2008<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 6293.09 thousand short tons<br>Period: 2009<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 5969.01 thousand short tons<br>Period: 2010<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 6068.22 thousand short tons<br>Period: 2011<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 7292.88 thousand short tons<br>Period: 2012<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 9473.25 thousand short tons<br>Period: 2013<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 8749.03 thousand short tons<br>Period: 2014<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 8850.45 thousand short tons<br>Period: 2015<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 7721.68 thousand short tons<br>Period: 2016<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 5312.03 thousand short tons<br>Period: 2017<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 5332.47 thousand short tons<br>Period: 2018<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 5963.13 thousand short tons<br>Period: 2019<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 6149.42 thousand short tons<br>Period: 2020<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal production: 7346.9 thousand short tons<br>Period: 2021<br>REMIND_62 region code: BRA<br>Countries in region: Brazil"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(65,171,93,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [8146.0700000000006, 8038.6000000000004, 7931.1199999999999, 7697.4300000000003, 6720.7799999999988, 5425.5699999999988, 4109.4099999999999, 3493.77, 2878.1299999999997, 2106.5100000000002, 1714.7599999999998, 1322.7700000000002, 914.91999999999996, 825.63, 793.72000000000003, 762.80999999999995, 434.26999999999998, 313.87, 173.84999999999999],
      "text": ["Coal production: 8146.07 thousand short tons<br>Period: 2003<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 8038.6 thousand short tons<br>Period: 2004<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 7931.12 thousand short tons<br>Period: 2005<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 7697.43 thousand short tons<br>Period: 2006<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 6720.78 thousand short tons<br>Period: 2007<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 5425.57 thousand short tons<br>Period: 2008<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 4109.41 thousand short tons<br>Period: 2009<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 3493.77 thousand short tons<br>Period: 2010<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 2878.13 thousand short tons<br>Period: 2011<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 2106.51 thousand short tons<br>Period: 2012<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 1714.76 thousand short tons<br>Period: 2013<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 1322.77 thousand short tons<br>Period: 2014<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 914.92 thousand short tons<br>Period: 2015<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 825.63 thousand short tons<br>Period: 2016<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 793.72 thousand short tons<br>Period: 2017<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 762.81 thousand short tons<br>Period: 2018<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 434.27 thousand short tons<br>Period: 2019<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 313.87 thousand short tons<br>Period: 2020<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal production: 173.85 thousand short tons<br>Period: 2021<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(65,171,93,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [3635.4200000000001, 3517.4699999999993, 3121.7400000000002, 3112.9200000000001, 3181.27, 3056.71, 2776.7199999999998, 2297.21, 2297.2100000000005, 2308.2399999999998, 2000.6900000000003, 1926.8399999999999, 1944.47, 1902.5899999999999, 1638.03, 1256.6300000000001, 1197.1099999999999, 1123.25, 989.86999999999989],
      "text": ["Coal production: 3635.42 thousand short tons<br>Period: 2003<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 3517.47 thousand short tons<br>Period: 2004<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 3121.74 thousand short tons<br>Period: 2005<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 3112.92 thousand short tons<br>Period: 2006<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 3181.27 thousand short tons<br>Period: 2007<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 3056.71 thousand short tons<br>Period: 2008<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 2776.72 thousand short tons<br>Period: 2009<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 2297.21 thousand short tons<br>Period: 2010<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 2297.21 thousand short tons<br>Period: 2011<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 2308.24 thousand short tons<br>Period: 2012<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 2000.69 thousand short tons<br>Period: 2013<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 1926.84 thousand short tons<br>Period: 2014<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 1944.47 thousand short tons<br>Period: 2015<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 1902.59 thousand short tons<br>Period: 2016<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 1638.03 thousand short tons<br>Period: 2017<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 1256.63 thousand short tons<br>Period: 2018<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 1197.11 thousand short tons<br>Period: 2019<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 1123.25 thousand short tons<br>Period: 2020<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal production: 989.87 thousand short tons<br>Period: 2021<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(77,0,75,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [2237.6900000000001, 3004.9000000000001, 3486.6100000000001, 2852.7799999999997, 3748.96, 3978.2399999999998, 5166.5299999999997, 7330.3599999999997, 7618.0600000000013, 8090.9600000000009, 7826.4000000000005, 8378.6599999999999, 8132.8400000000011, 12358, 13152.76, 14391.759999999998, 16835.580000000002, 14624.35, 15849.01],
      "text": ["Coal production: 2237.69 thousand short tons<br>Period: 2003<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 3004.9 thousand short tons<br>Period: 2004<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 3486.61 thousand short tons<br>Period: 2005<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 2852.78 thousand short tons<br>Period: 2006<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 3748.96 thousand short tons<br>Period: 2007<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 3978.24 thousand short tons<br>Period: 2008<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 5166.53 thousand short tons<br>Period: 2009<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 7330.36 thousand short tons<br>Period: 2010<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 7618.06 thousand short tons<br>Period: 2011<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 8090.96 thousand short tons<br>Period: 2012<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 7826.4 thousand short tons<br>Period: 2013<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 8378.66 thousand short tons<br>Period: 2014<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 8132.84 thousand short tons<br>Period: 2015<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 12358 thousand short tons<br>Period: 2016<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 13152.76 thousand short tons<br>Period: 2017<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 14391.76 thousand short tons<br>Period: 2018<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 16835.58 thousand short tons<br>Period: 2019<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 14624.35 thousand short tons<br>Period: 2020<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal production: 15849.01 thousand short tons<br>Period: 2021<br>REMIND_62 region code: PHL<br>Countries in region: Philippines"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(77,0,75,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [379331.26827495999, 389193.20598792291, 411654.49982361548, 416333.78186529526, 434572.47965040104, 436296.22396615107, 454060.10518462397, 486287.43573806237, 464386.28611172957, 486066.21462104504, 516013.88168398984, 548501.70674128062, 574121.89354877337, 560366.44634781766, 557367.10911496263, 541690.90635450662, 563972.72467907483, 550836.26332173322, 514888.16772835841],
      "text": ["Coal production: 379331.27 thousand short tons<br>Period: 2003<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 389193.21 thousand short tons<br>Period: 2004<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 411654.5 thousand short tons<br>Period: 2005<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 416333.78 thousand short tons<br>Period: 2006<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 434572.48 thousand short tons<br>Period: 2007<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 436296.22 thousand short tons<br>Period: 2008<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 454060.11 thousand short tons<br>Period: 2009<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 486287.44 thousand short tons<br>Period: 2010<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 464386.29 thousand short tons<br>Period: 2011<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 486066.21 thousand short tons<br>Period: 2012<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 516013.88 thousand short tons<br>Period: 2013<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 548501.71 thousand short tons<br>Period: 2014<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 574121.89 thousand short tons<br>Period: 2015<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 560366.45 thousand short tons<br>Period: 2016<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 557367.11 thousand short tons<br>Period: 2017<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 541690.91 thousand short tons<br>Period: 2018<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 563972.72 thousand short tons<br>Period: 2019<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 550836.26 thousand short tons<br>Period: 2020<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal production: 514888.17 thousand short tons<br>Period: 2021<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(107,174,214,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [55143.599999999991, 59186.330000000002, 65106.650000000001, 72307.130000000005, 72485.699999999997, 81064.529999999999, 80309.199999999997, 82021.419999999998, 94624.539999999994, 98206.589999999982, 94246.940000000002, 97640.490000000005, 94300.410000000003, 99772.279999999999, 99813.119999999981, 92906.979999999996, 92971.899999999994, 54377.720000000001, 61947.589999999997],
      "text": ["Coal production: 55143.6 thousand short tons<br>Period: 2003<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 59186.33 thousand short tons<br>Period: 2004<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 65106.65 thousand short tons<br>Period: 2005<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 72307.13 thousand short tons<br>Period: 2006<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 72485.7 thousand short tons<br>Period: 2007<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 81064.53 thousand short tons<br>Period: 2008<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 80309.2 thousand short tons<br>Period: 2009<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 82021.42 thousand short tons<br>Period: 2010<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 94624.54 thousand short tons<br>Period: 2011<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 98206.59 thousand short tons<br>Period: 2012<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 94246.94 thousand short tons<br>Period: 2013<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 97640.49 thousand short tons<br>Period: 2014<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 94300.41 thousand short tons<br>Period: 2015<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 99772.28 thousand short tons<br>Period: 2016<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 99813.12 thousand short tons<br>Period: 2017<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 92906.98 thousand short tons<br>Period: 2018<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 92971.9 thousand short tons<br>Period: 2019<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 54377.72 thousand short tons<br>Period: 2020<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal production: 61947.59 thousand short tons<br>Period: 2021<br>REMIND_62 region code: COL<br>Countries in region: Colombia"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(116,196,118,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [89074.369999999981, 91563.380000000005, 91258.039999999994, 106554.8, 107836.78, 109118.77, 111172.38, 122278.14999999999, 128364.00000000001, 132858.13, 131807.60999999999, 125646.8, 118298.8, 113619.5, 111782.17, 118659.81, 115215.53999999999, 113919.54999999999, 98214.380000000005],
      "text": ["Coal production: 89074.37 thousand short tons<br>Period: 2003<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 91563.38 thousand short tons<br>Period: 2004<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 91258.04 thousand short tons<br>Period: 2005<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 106554.8 thousand short tons<br>Period: 2006<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 107836.78 thousand short tons<br>Period: 2007<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 109118.77 thousand short tons<br>Period: 2008<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 111172.38 thousand short tons<br>Period: 2009<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 122278.15 thousand short tons<br>Period: 2010<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 128364 thousand short tons<br>Period: 2011<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 132858.13 thousand short tons<br>Period: 2012<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 131807.61 thousand short tons<br>Period: 2013<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 125646.8 thousand short tons<br>Period: 2014<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 118298.8 thousand short tons<br>Period: 2015<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 113619.5 thousand short tons<br>Period: 2016<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 111782.17 thousand short tons<br>Period: 2017<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 118659.81 thousand short tons<br>Period: 2018<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 115215.54 thousand short tons<br>Period: 2019<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 113919.55 thousand short tons<br>Period: 2020<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal production: 98214.38 thousand short tons<br>Period: 2021<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(119,136,153,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [157.98476538753326, 145.20810753796098, 151.03555684967708, 139.94900486131345, 131.9109780563839, 100.58127413382473, 73.365674069809586, 104.87625049005335, 138.30190149997173, 340.00083609873354, 477.62353908191562, 602.96001025025089, 574.37411606602313, 559.0299941859314, 1091.993044190142, 1188.1310118764711, 860.36371215626104, 660.28383175125225, 875.12026774900301],
      "text": ["Coal production: 157.98 thousand short tons<br>Period: 2003<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 145.21 thousand short tons<br>Period: 2004<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 151.04 thousand short tons<br>Period: 2005<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 139.95 thousand short tons<br>Period: 2006<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 131.91 thousand short tons<br>Period: 2007<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 100.58 thousand short tons<br>Period: 2008<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 73.37 thousand short tons<br>Period: 2009<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 104.88 thousand short tons<br>Period: 2010<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 138.3 thousand short tons<br>Period: 2011<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 340 thousand short tons<br>Period: 2012<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 477.62 thousand short tons<br>Period: 2013<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 602.96 thousand short tons<br>Period: 2014<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 574.37 thousand short tons<br>Period: 2015<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 559.03 thousand short tons<br>Period: 2016<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 1091.99 thousand short tons<br>Period: 2017<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 1188.13 thousand short tons<br>Period: 2018<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 860.36 thousand short tons<br>Period: 2019<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 660.28 thousand short tons<br>Period: 2020<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal production: 875.12 thousand short tons<br>Period: 2021<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(122,1,119,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [283270.52999999997, 285436.56, 311822.56, 313679.94, 318590.75, 336162.65999999997, 304227.62999999995, 329257.78000000003, 325886.94000000006, 363057.94, 385818.40999999997, 393765.09000000003, 409700.96999999997, 423095.34000000003, 449578.56, 476919.06000000006, 481700.65999999997, 442475.06, 479799.71999999997],
      "text": ["Coal production: 283270.53 thousand short tons<br>Period: 2003<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 285436.56 thousand short tons<br>Period: 2004<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 311822.56 thousand short tons<br>Period: 2005<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 313679.94 thousand short tons<br>Period: 2006<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 318590.75 thousand short tons<br>Period: 2007<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 336162.66 thousand short tons<br>Period: 2008<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 304227.63 thousand short tons<br>Period: 2009<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 329257.78 thousand short tons<br>Period: 2010<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 325886.94 thousand short tons<br>Period: 2011<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 363057.94 thousand short tons<br>Period: 2012<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 385818.41 thousand short tons<br>Period: 2013<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 393765.09 thousand short tons<br>Period: 2014<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 409700.97 thousand short tons<br>Period: 2015<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 423095.34 thousand short tons<br>Period: 2016<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 449578.56 thousand short tons<br>Period: 2017<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 476919.06 thousand short tons<br>Period: 2018<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 481700.66 thousand short tons<br>Period: 2019<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 442475.06 thousand short tons<br>Period: 2020<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal production: 479799.72 thousand short tons<br>Period: 2021<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(128,128,128,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [25.178935012750848, 23.789837934943431, 23.720718485655436, 26.564267034240082, 138.9710160028709, 195.80861035661471, 282.69340260094475, 420.80304337390248, 690.92469440868445, 993.43071119597778, 1080.4499912764818, 1402.4685520199409, 1242.771341190064, 1390.7503135981769, 1276.384109187798, 1767.3214080574589, 1889.5628695024118, 1123.5386099201664, 1703.5430203904682],
      "text": ["Coal production: 25.18 thousand short tons<br>Period: 2003<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal production: 23.79 thousand short tons<br>Period: 2004<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal production: 23.72 thousand short tons<br>Period: 2005<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal production: 26.56 thousand short tons<br>Period: 2006<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal production: 138.97 thousand short tons<br>Period: 2007<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal production: 195.81 thousand short tons<br>Period: 2008<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal production: 282.69 thousand short tons<br>Period: 2009<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 420.8 thousand short tons<br>Period: 2010<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 690.92 thousand short tons<br>Period: 2011<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 993.43 thousand short tons<br>Period: 2012<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 1080.45 thousand short tons<br>Period: 2013<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 1402.47 thousand short tons<br>Period: 2014<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 1242.77 thousand short tons<br>Period: 2015<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 1390.75 thousand short tons<br>Period: 2016<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 1276.38 thousand short tons<br>Period: 2017<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 1767.32 thousand short tons<br>Period: 2018<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 1889.56 thousand short tons<br>Period: 2019<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 1123.54 thousand short tons<br>Period: 2020<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal production: 1703.54 thousand short tons<br>Period: 2021<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(129,15,124,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [327.0233260661546, 308.19089430585734, 315.19323257138512, 424.27508673598732, 441.80336801592966, 455.76563848466884, 664.75789174325269, 856.35534266238585, 989.95097012419603, 1035.006654569786, 1009.3039622042523, 947.47562018442989, 1077.9937056341323, 1490.7641592893915, 1768.6180224739105, 2048.6130806687702, 2540.1595057154168, 2427.2972628065449, 2188.8437634026504],
      "text": ["Coal production: 327.02 thousand short tons<br>Period: 2003<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 308.19 thousand short tons<br>Period: 2004<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 315.19 thousand short tons<br>Period: 2005<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 424.28 thousand short tons<br>Period: 2006<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 441.8 thousand short tons<br>Period: 2007<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 455.77 thousand short tons<br>Period: 2008<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 664.76 thousand short tons<br>Period: 2009<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 856.36 thousand short tons<br>Period: 2010<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 989.95 thousand short tons<br>Period: 2011<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 1035.01 thousand short tons<br>Period: 2012<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 1009.3 thousand short tons<br>Period: 2013<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 947.48 thousand short tons<br>Period: 2014<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 1077.99 thousand short tons<br>Period: 2015<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 1490.76 thousand short tons<br>Period: 2016<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 1768.62 thousand short tons<br>Period: 2017<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 2048.61 thousand short tons<br>Period: 2018<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 2540.16 thousand short tons<br>Period: 2019<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal production: 2427.3 thousand short tons<br>Period: 2020<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Coal production: 2188.84 thousand short tons<br>Period: 2021<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(129,15,124,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [21290.02, 30147.080000000002, 37581.049999999996, 42745.379999999997, 46829.44000000001, 43846.589999999997, 48587.620000000003, 49422.07, 51379.770000000004, 46388.509999999995, 43712.099999999991, 45289.510000000002, 45926.639999999999, 42468.699999999997, 42149.030000000006, 46719.839999999997, 50361.239999999991, 48385.5, 52740.199999999997],
      "text": ["Coal production: 21290.02 thousand short tons<br>Period: 2003<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 30147.08 thousand short tons<br>Period: 2004<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 37581.05 thousand short tons<br>Period: 2005<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 42745.38 thousand short tons<br>Period: 2006<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 46829.44 thousand short tons<br>Period: 2007<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 43846.59 thousand short tons<br>Period: 2008<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 48587.62 thousand short tons<br>Period: 2009<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 49422.07 thousand short tons<br>Period: 2010<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 51379.77 thousand short tons<br>Period: 2011<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 46388.51 thousand short tons<br>Period: 2012<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 43712.1 thousand short tons<br>Period: 2013<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 45289.51 thousand short tons<br>Period: 2014<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 45926.64 thousand short tons<br>Period: 2015<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 42468.7 thousand short tons<br>Period: 2016<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 42149.03 thousand short tons<br>Period: 2017<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 46719.84 thousand short tons<br>Period: 2018<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 50361.24 thousand short tons<br>Period: 2019<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 48385.5 thousand short tons<br>Period: 2020<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal production: 52740.2 thousand short tons<br>Period: 2021<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(129,15,124,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [3610.0699999999997, 5056.3000000000002, 5369.3500000000004, 4015.7200000000003, 4545.9300000000003, 4120.4300000000003, 3837.1399999999999, 3802.9699999999998, 3982.6500000000005, 3504.2399999999998, 3789.7400000000002, 4091.77, 4565.7700000000004, 4591.1199999999999, 4737.7299999999996, 6438.8100000000004, 9628.7800000000007, 9583.8399999999983, 9305.8200000000015],
      "text": ["Coal production: 3610.07 thousand short tons<br>Period: 2003<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 5056.3 thousand short tons<br>Period: 2004<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 5369.35 thousand short tons<br>Period: 2005<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 4015.72 thousand short tons<br>Period: 2006<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 4545.93 thousand short tons<br>Period: 2007<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 4120.43 thousand short tons<br>Period: 2008<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 3837.14 thousand short tons<br>Period: 2009<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 3802.97 thousand short tons<br>Period: 2010<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 3982.65 thousand short tons<br>Period: 2011<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 3504.24 thousand short tons<br>Period: 2012<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 3789.74 thousand short tons<br>Period: 2013<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 4091.77 thousand short tons<br>Period: 2014<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 4565.77 thousand short tons<br>Period: 2015<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 4591.12 thousand short tons<br>Period: 2016<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 4737.73 thousand short tons<br>Period: 2017<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 6438.81 thousand short tons<br>Period: 2018<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 9628.78 thousand short tons<br>Period: 2019<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 9583.84 thousand short tons<br>Period: 2020<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal production: 9305.82 thousand short tons<br>Period: 2021<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(136,65,157,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: SGP<br>Countries in region: Singapore"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(136,65,157,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [24.609999999999999, 71.209999999999994, 196.21000000000001, 334, 427.69999999999993, 746.25999999999999, 912.71000000000004, 777.13, 735.24000000000001, 920.42999999999995, 942.48000000000002, 1043.8900000000001, 745.15999999999997, 1126.5599999999999, 1279.78, 1017.4300000000001, 1032.1300000000001, 1119.95, 1159.02],
      "text": ["Coal production: 24.61 thousand short tons<br>Period: 2003<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 71.21 thousand short tons<br>Period: 2004<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 196.21 thousand short tons<br>Period: 2005<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 334 thousand short tons<br>Period: 2006<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 427.7 thousand short tons<br>Period: 2007<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 746.26 thousand short tons<br>Period: 2008<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 912.71 thousand short tons<br>Period: 2009<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 777.13 thousand short tons<br>Period: 2010<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 735.24 thousand short tons<br>Period: 2011<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 920.43 thousand short tons<br>Period: 2012<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 942.48 thousand short tons<br>Period: 2013<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 1043.89 thousand short tons<br>Period: 2014<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 745.16 thousand short tons<br>Period: 2015<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 1126.56 thousand short tons<br>Period: 2016<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 1279.78 thousand short tons<br>Period: 2017<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 1017.43 thousand short tons<br>Period: 2018<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 1032.13 thousand short tons<br>Period: 2019<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 1119.95 thousand short tons<br>Period: 2020<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal production: 1159.02 thousand short tons<br>Period: 2021<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(140,107,177,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [141574.67000000001, 168955.20000000001, 199051.48000000001, 249699.67000000001, 287226.71999999997, 304775.5, 327098.38000000006, 397343.06, 389414.09000000003, 425576.94, 522904.31, 504964.59000000003, 508788.90999999997, 502871.38000000006, 508438.5, 614838.68999999994, 679198.88, 621403.31000000006, 676807.63],
      "text": ["Coal production: 141574.67 thousand short tons<br>Period: 2003<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 168955.2 thousand short tons<br>Period: 2004<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 199051.48 thousand short tons<br>Period: 2005<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 249699.67 thousand short tons<br>Period: 2006<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 287226.72 thousand short tons<br>Period: 2007<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 304775.5 thousand short tons<br>Period: 2008<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 327098.38 thousand short tons<br>Period: 2009<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 397343.06 thousand short tons<br>Period: 2010<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 389414.09 thousand short tons<br>Period: 2011<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 425576.94 thousand short tons<br>Period: 2012<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 522904.31 thousand short tons<br>Period: 2013<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 504964.59 thousand short tons<br>Period: 2014<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 508788.91 thousand short tons<br>Period: 2015<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 502871.38 thousand short tons<br>Period: 2016<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 508438.5 thousand short tons<br>Period: 2017<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 614838.69 thousand short tons<br>Period: 2018<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 679198.88 thousand short tons<br>Period: 2019<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 621403.31 thousand short tons<br>Period: 2020<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal production: 676807.63 thousand short tons<br>Period: 2021<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(140,107,177,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [20771.259999999998, 22112.169999999998, 23014.220000000005, 21021.719999999998, 20105.220000000001, 19946.720000000001, 19363.290000000001, 20126.040000000001, 23509.080000000002, 19914.799999999999, 19963.68, 19821.43, 16700.599999999999, 18715.68, 17922.060000000001, 16371.51, 15518.319999999998, 14606.709999999999, 15676.580000000002],
      "text": ["Coal production: 20771.26 thousand short tons<br>Period: 2003<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 22112.17 thousand short tons<br>Period: 2004<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 23014.22 thousand short tons<br>Period: 2005<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 21021.72 thousand short tons<br>Period: 2006<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 20105.22 thousand short tons<br>Period: 2007<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 19946.72 thousand short tons<br>Period: 2008<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 19363.29 thousand short tons<br>Period: 2009<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 20126.04 thousand short tons<br>Period: 2010<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 23509.08 thousand short tons<br>Period: 2011<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 19914.8 thousand short tons<br>Period: 2012<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 19963.68 thousand short tons<br>Period: 2013<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 19821.43 thousand short tons<br>Period: 2014<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 16700.6 thousand short tons<br>Period: 2015<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 18715.68 thousand short tons<br>Period: 2016<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 17922.06 thousand short tons<br>Period: 2017<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 16371.51 thousand short tons<br>Period: 2018<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 15518.32 thousand short tons<br>Period: 2019<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 14606.71 thousand short tons<br>Period: 2020<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal production: 15676.58 thousand short tons<br>Period: 2021<br>REMIND_62 region code: THA<br>Countries in region: Thailand"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(140,150,198,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [1493.6300000000001, 1402.1400000000001, 1376.79, 1489.2200000000003, 1410.96, 1421.98, 1329.3900000000001, 1262.1400000000001, 1317.26, 1374.5799999999999, 1378.9900000000002, 1452.8399999999999, 1394.4200000000001, 1419.7800000000002, 1463.75, 1062.27, 854.41999999999985, 870.67999999999984, 743.74000000000001],
      "text": ["Coal production: 1493.63 thousand short tons<br>Period: 2003<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1402.14 thousand short tons<br>Period: 2004<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1376.79 thousand short tons<br>Period: 2005<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1489.22 thousand short tons<br>Period: 2006<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1410.96 thousand short tons<br>Period: 2007<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1421.98 thousand short tons<br>Period: 2008<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1329.39 thousand short tons<br>Period: 2009<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1262.14 thousand short tons<br>Period: 2010<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1317.26 thousand short tons<br>Period: 2011<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1374.58 thousand short tons<br>Period: 2012<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1378.99 thousand short tons<br>Period: 2013<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1452.84 thousand short tons<br>Period: 2014<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1394.42 thousand short tons<br>Period: 2015<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1419.78 thousand short tons<br>Period: 2016<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1463.75 thousand short tons<br>Period: 2017<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 1062.27 thousand short tons<br>Period: 2018<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 854.42 thousand short tons<br>Period: 2019<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 870.68 thousand short tons<br>Period: 2020<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal production: 743.74 thousand short tons<br>Period: 2021<br>REMIND_62 region code: JPN<br>Countries in region: Japan"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(152,0,67,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [24.095845930980904, 28.629627872808172, 20.839978315372154, 19.380986665510196, 17.637418393996359, 19.097826554276942, 20.203338643566205, 25.50426444094656, 28.795676189153323, 27.841867980179167, 27.238261866766933, 29.967480314702804, 26.113105471173395, 27.730857911780948, 27.549447645023932, 26.745313791385279, 27.275367385991402, 30.14084519382936, 30.587148734237328],
      "text": ["Coal production: 24.1 thousand short tons<br>Period: 2003<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Coal production: 28.63 thousand short tons<br>Period: 2004<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Coal production: 20.84 thousand short tons<br>Period: 2005<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 19.38 thousand short tons<br>Period: 2006<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 17.64 thousand short tons<br>Period: 2007<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 19.1 thousand short tons<br>Period: 2008<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 20.2 thousand short tons<br>Period: 2009<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 25.5 thousand short tons<br>Period: 2010<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 28.8 thousand short tons<br>Period: 2011<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 27.84 thousand short tons<br>Period: 2012<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 27.24 thousand short tons<br>Period: 2013<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 29.97 thousand short tons<br>Period: 2014<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 26.11 thousand short tons<br>Period: 2015<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 27.73 thousand short tons<br>Period: 2016<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 27.55 thousand short tons<br>Period: 2017<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 26.75 thousand short tons<br>Period: 2018<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 27.28 thousand short tons<br>Period: 2019<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 30.14 thousand short tons<br>Period: 2020<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal production: 30.59 thousand short tons<br>Period: 2021<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(158,202,225,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [634.92999999999995, 256.83999999999997, 599.65999999999997, 742.96000000000004, 267.86000000000001, 735.24000000000001, 701.07000000000005, 682.33000000000004, 720.90999999999997, 784.84000000000003, 3337.79, 3487.71, 3464.5599999999999, 2783.3299999999999, 2673.0999999999999, 2487.5300000000002, 1572.8099999999999, 528.25999999999999, 47.359999999999999],
      "text": ["Coal production: 634.93 thousand short tons<br>Period: 2003<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 256.84 thousand short tons<br>Period: 2004<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 599.66 thousand short tons<br>Period: 2005<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 742.96 thousand short tons<br>Period: 2006<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 267.86 thousand short tons<br>Period: 2007<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 735.24 thousand short tons<br>Period: 2008<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 701.07 thousand short tons<br>Period: 2009<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 682.33 thousand short tons<br>Period: 2010<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 720.91 thousand short tons<br>Period: 2011<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 784.84 thousand short tons<br>Period: 2012<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 3337.79 thousand short tons<br>Period: 2013<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 3487.71 thousand short tons<br>Period: 2014<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 3464.56 thousand short tons<br>Period: 2015<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 2783.33 thousand short tons<br>Period: 2016<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 2673.1 thousand short tons<br>Period: 2017<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 2487.53 thousand short tons<br>Period: 2018<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 1572.81 thousand short tons<br>Period: 2019<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 528.26 thousand short tons<br>Period: 2020<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal production: 47.36 thousand short tons<br>Period: 2021<br>REMIND_62 region code: CHL<br>Countries in region: Chile"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(161,217,155,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: ISL<br>Countries in region: Iceland"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(161,217,155,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [53531.480000000003, 51121.830000000002, 64308.769999999997, 70828.930000000008, 83074.490000000005, 87525.619999999995, 87632.539999999994, 80908.449999999997, 82884.889999999999, 77458.220000000016, 72877.240000000005, 71911.399999999994, 64390.339999999997, 80473.039999999994, 81679.160000000003, 92524.210000000021, 95999.190000000002, 82355.779999999999, 94393.979999999996],
      "text": ["Coal production: 53531.48 thousand short tons<br>Period: 2003<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 51121.83 thousand short tons<br>Period: 2004<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 64308.77 thousand short tons<br>Period: 2005<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 70828.93 thousand short tons<br>Period: 2006<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 83074.49 thousand short tons<br>Period: 2007<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 87525.62 thousand short tons<br>Period: 2008<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 87632.54 thousand short tons<br>Period: 2009<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 80908.45 thousand short tons<br>Period: 2010<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 82884.89 thousand short tons<br>Period: 2011<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 77458.22 thousand short tons<br>Period: 2012<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 72877.24 thousand short tons<br>Period: 2013<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 71911.4 thousand short tons<br>Period: 2014<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 64390.34 thousand short tons<br>Period: 2015<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 80473.04 thousand short tons<br>Period: 2016<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 81679.16 thousand short tons<br>Period: 2017<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 92524.21 thousand short tons<br>Period: 2018<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 95999.19 thousand short tons<br>Period: 2019<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 82355.78 thousand short tons<br>Period: 2020<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal production: 94393.98 thousand short tons<br>Period: 2021<br>REMIND_62 region code: TUR<br>Countries in region: Turkey"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(161,217,155,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [9715.2678448945389, 10456.982921567544, 11391.214344241562, 11573.705830071309, 10261.222142419358, 10777.600352854233, 9018.1507207137565, 9307.7032710399071, 9577.6180868872307, 9597.3045592768012, 10959.506025932991, 11063.503894873513, 10491.049163799316, 11732.511506546287, 11133.340129548758, 9997.8150267491219, 10860.815419901388, 10031.104878513737, 8766.8533552056724],
      "text": ["Coal production: 9715.27 thousand short tons<br>Period: 2003<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal production: 10456.98 thousand short tons<br>Period: 2004<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal production: 11391.21 thousand short tons<br>Period: 2005<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal production: 11573.71 thousand short tons<br>Period: 2006<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal production: 10261.22 thousand short tons<br>Period: 2007<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal production: 10777.6 thousand short tons<br>Period: 2008<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal production: 9018.15 thousand short tons<br>Period: 2009<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal production: 9307.7 thousand short tons<br>Period: 2010<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal production: 9577.62 thousand short tons<br>Period: 2011<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal production: 9597.3 thousand short tons<br>Period: 2012<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal production: 10959.51 thousand short tons<br>Period: 2013<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal production: 11063.5 thousand short tons<br>Period: 2014<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal production: 10491.05 thousand short tons<br>Period: 2015<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal production: 11732.51 thousand short tons<br>Period: 2016<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal production: 11133.34 thousand short tons<br>Period: 2017<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal production: 9997.82 thousand short tons<br>Period: 2018<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal production: 10860.82 thousand short tons<br>Period: 2019<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal production: 10031.1 thousand short tons<br>Period: 2020<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal production: 8766.85 thousand short tons<br>Period: 2021<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(169,169,169,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,1,126,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [25763.478081172758, 24417.727350993915, 23270.472076748989, 25484.817728265905, 26314.292352183729, 26211.043835091477, 24780.640328316138, 23754.484472300741, 27502.414347695296, 25939.729130327207, 20416.402165519357, 20273.280582023013, 22025.992566898163, 19896.672060570738, 21547.757831614832, 19709.085122028268, 17996.030896009554, 13396.795342545673, 15533.919566888817],
      "text": ["Coal production: 25763.48 thousand short tons<br>Period: 2003<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 24417.73 thousand short tons<br>Period: 2004<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 23270.47 thousand short tons<br>Period: 2005<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 25484.82 thousand short tons<br>Period: 2006<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 26314.29 thousand short tons<br>Period: 2007<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 26211.04 thousand short tons<br>Period: 2008<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 24780.64 thousand short tons<br>Period: 2009<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 23754.48 thousand short tons<br>Period: 2010<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 27502.41 thousand short tons<br>Period: 2011<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 25939.73 thousand short tons<br>Period: 2012<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 20416.4 thousand short tons<br>Period: 2013<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 20273.28 thousand short tons<br>Period: 2014<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 22025.99 thousand short tons<br>Period: 2015<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 19896.67 thousand short tons<br>Period: 2016<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 21547.76 thousand short tons<br>Period: 2017<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 19709.09 thousand short tons<br>Period: 2018<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 17996.03 thousand short tons<br>Period: 2019<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 13396.8 thousand short tons<br>Period: 2020<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal production: 15533.92 thousand short tons<br>Period: 2021<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(217,72,1,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [1259.9400000000001, 1349.2299999999998, 1494.73, 1463.8699999999999, 1580.71, 1533.3099999999999, 1269.8599999999999, 1200.4200000000001, 1283.0900000000001, 1147.5, 1218.05, 1184.98, 1329.3900000000001, 1471.5799999999997, 1739.23, 1888.2000000000003, 1670.4200000000001, 1699.8500000000001, 1810.1799999999998],
      "text": ["Coal production: 1259.94 thousand short tons<br>Period: 2003<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1349.23 thousand short tons<br>Period: 2004<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1494.73 thousand short tons<br>Period: 2005<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1463.87 thousand short tons<br>Period: 2006<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1580.71 thousand short tons<br>Period: 2007<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1533.31 thousand short tons<br>Period: 2008<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1269.86 thousand short tons<br>Period: 2009<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1200.42 thousand short tons<br>Period: 2010<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1283.09 thousand short tons<br>Period: 2011<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1147.5 thousand short tons<br>Period: 2012<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1218.05 thousand short tons<br>Period: 2013<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1184.98 thousand short tons<br>Period: 2014<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1329.39 thousand short tons<br>Period: 2015<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1471.58 thousand short tons<br>Period: 2016<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1739.23 thousand short tons<br>Period: 2017<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1888.2 thousand short tons<br>Period: 2018<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1670.42 thousand short tons<br>Period: 2019<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1699.85 thousand short tons<br>Period: 2020<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal production: 1810.18 thousand short tons<br>Period: 2021<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(217,72,1,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [420623.84000000003, 446682.46999999991, 473265.78000000009, 500118.06, 531520.63, 544930.81000000006, 548559.06000000006, 578215.63, 590753, 608792.06000000006, 621071.75, 659542.38, 696348.5, 720039.93999999994, 739669.31000000006, 788581.56000000017, 805052.81000000006, 793417.94000000006, 839963],
      "text": ["Coal production: 420623.84 thousand short tons<br>Period: 2003<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 446682.47 thousand short tons<br>Period: 2004<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 473265.78 thousand short tons<br>Period: 2005<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 500118.06 thousand short tons<br>Period: 2006<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 531520.63 thousand short tons<br>Period: 2007<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 544930.81 thousand short tons<br>Period: 2008<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 548559.06 thousand short tons<br>Period: 2009<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 578215.63 thousand short tons<br>Period: 2010<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 590753 thousand short tons<br>Period: 2011<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 608792.06 thousand short tons<br>Period: 2012<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 621071.75 thousand short tons<br>Period: 2013<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 659542.38 thousand short tons<br>Period: 2014<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 696348.5 thousand short tons<br>Period: 2015<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 720039.94 thousand short tons<br>Period: 2016<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 739669.31 thousand short tons<br>Period: 2017<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 788581.56 thousand short tons<br>Period: 2018<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 805052.81 thousand short tons<br>Period: 2019<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 793417.94 thousand short tons<br>Period: 2020<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal production: 839963 thousand short tons<br>Period: 2021<br>REMIND_62 region code: IND<br>Countries in region: India"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(220,0,5,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [1071752.6299999999, 1112098.8799999997, 1131498.1299999999, 1162749.6299999999, 1146635.3799999999, 1171808.6299999999, 1074923.3799999999, 1084368.1299999999, 1095627.5, 1016458.4399999998, 984841.75, 1000049.0600000001, 896940.56000000006, 728364.5, 774609.38, 756167.13, 706307.31000000006, 535434, 577361.31000000006],
      "text": ["Coal production: 1071752.63 thousand short tons<br>Period: 2003<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1112098.88 thousand short tons<br>Period: 2004<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1131498.13 thousand short tons<br>Period: 2005<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1162749.63 thousand short tons<br>Period: 2006<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1146635.38 thousand short tons<br>Period: 2007<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1171808.63 thousand short tons<br>Period: 2008<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1074923.38 thousand short tons<br>Period: 2009<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1084368.13 thousand short tons<br>Period: 2010<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1095627.5 thousand short tons<br>Period: 2011<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1016458.44 thousand short tons<br>Period: 2012<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 984841.75 thousand short tons<br>Period: 2013<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 1000049.06 thousand short tons<br>Period: 2014<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 896940.56 thousand short tons<br>Period: 2015<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 728364.5 thousand short tons<br>Period: 2016<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 774609.38 thousand short tons<br>Period: 2017<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 756167.13 thousand short tons<br>Period: 2018<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 706307.31 thousand short tons<br>Period: 2019<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 535434 thousand short tons<br>Period: 2020<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal production: 577361.31 thousand short tons<br>Period: 2021<br>REMIND_62 region code: USA<br>Countries in region: United States"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(220,0,5,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(221,52,151,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [22665.700000000001, 22583.029999999999, 21474.099999999999, 20334.310000000001, 18939.889999999999, 11229.23, 10411.32, 9292.4699999999993, 7298.3899999999994, 6813.380000000001, 4851.2700000000004, 4297.9099999999999, 3377.48, 2187.1599999999999, 3281.5799999999995, 2646.6500000000001, 0, 0, 0],
      "text": ["Coal production: 22665.7 thousand short tons<br>Period: 2003<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 22583.03 thousand short tons<br>Period: 2004<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 21474.1 thousand short tons<br>Period: 2005<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 20334.31 thousand short tons<br>Period: 2006<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 18939.89 thousand short tons<br>Period: 2007<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 11229.23 thousand short tons<br>Period: 2008<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 10411.32 thousand short tons<br>Period: 2009<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 9292.47 thousand short tons<br>Period: 2010<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 7298.39 thousand short tons<br>Period: 2011<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 6813.38 thousand short tons<br>Period: 2012<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 4851.27 thousand short tons<br>Period: 2013<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 4297.91 thousand short tons<br>Period: 2014<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 3377.48 thousand short tons<br>Period: 2015<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 2187.16 thousand short tons<br>Period: 2016<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 3281.58 thousand short tons<br>Period: 2017<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 2646.65 thousand short tons<br>Period: 2018<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: ESP<br>Countries in region: Spain"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(241,105,19,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [179212.45000000004, 178260.06, 174987.29999999999, 171134.73000000001, 159773.22, 157992.98000000001, 148355.5, 146256.69999999998, 152679.85999999999, 158196.91999999998, 156875.25, 150373.82999999999, 149146.95000000001, 143996.03, 139597.20000000001, 134432.14000000001, 123405.78, 110638.12, 118346.09],
      "text": ["Coal production: 179212.45 thousand short tons<br>Period: 2003<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 178260.06 thousand short tons<br>Period: 2004<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 174987.3 thousand short tons<br>Period: 2005<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 171134.73 thousand short tons<br>Period: 2006<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 159773.22 thousand short tons<br>Period: 2007<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 157992.98 thousand short tons<br>Period: 2008<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 148355.5 thousand short tons<br>Period: 2009<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 146256.7 thousand short tons<br>Period: 2010<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 152679.86 thousand short tons<br>Period: 2011<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 158196.92 thousand short tons<br>Period: 2012<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 156875.25 thousand short tons<br>Period: 2013<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 150373.83 thousand short tons<br>Period: 2014<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 149146.95 thousand short tons<br>Period: 2015<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 143996.03 thousand short tons<br>Period: 2016<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 139597.2 thousand short tons<br>Period: 2017<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 134432.14 thousand short tons<br>Period: 2018<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 123405.78 thousand short tons<br>Period: 2019<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 110638.12 thousand short tons<br>Period: 2020<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal production: 118346.09 thousand short tons<br>Period: 2021<br>REMIND_62 region code: POL<br>Countries in region: Poland"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(241,105,19,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [306.44, 306.44, 360.45999999999998, 439.81999999999999, 626.11000000000001, 1332.6900000000001, 1332.6900000000001, 1332.6900000000001, 1599.45, 2132.9699999999998, 2666.4899999999998, 2666.4899999999998, 2799.8699999999999, 2932.1400000000003, 2532.75, 2967.0599999999999, 3001.1700000000001, 2591.9200000000001, 2762.4400000000001],
      "text": ["Coal production: 306.44 thousand short tons<br>Period: 2003<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 306.44 thousand short tons<br>Period: 2004<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 360.46 thousand short tons<br>Period: 2005<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 439.82 thousand short tons<br>Period: 2006<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 626.11 thousand short tons<br>Period: 2007<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 1332.69 thousand short tons<br>Period: 2008<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 1332.69 thousand short tons<br>Period: 2009<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 1332.69 thousand short tons<br>Period: 2010<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 1599.45 thousand short tons<br>Period: 2011<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 2132.97 thousand short tons<br>Period: 2012<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 2666.49 thousand short tons<br>Period: 2013<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 2666.49 thousand short tons<br>Period: 2014<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 2799.87 thousand short tons<br>Period: 2015<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 2932.14 thousand short tons<br>Period: 2016<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 2532.75 thousand short tons<br>Period: 2017<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 2967.06 thousand short tons<br>Period: 2018<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 3001.17 thousand short tons<br>Period: 2019<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 2591.92 thousand short tons<br>Period: 2020<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal production: 2762.44 thousand short tons<br>Period: 2021<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(247,104,161,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [263782.78000000003, 267665.13, 270050.53000000009, 269797, 273004.71999999997, 278552.63, 276219.03000000003, 280795.84000000003, 284100.56, 285030.90999999997, 282161.59000000003, 287195.84000000003, 282333.56, 281986.34000000003, 283431.19, 281553.15999999997, 284234.5, 272391.81, 259844.25],
      "text": ["Coal production: 263782.78 thousand short tons<br>Period: 2003<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 267665.13 thousand short tons<br>Period: 2004<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 270050.53 thousand short tons<br>Period: 2005<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 269797 thousand short tons<br>Period: 2006<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 273004.72 thousand short tons<br>Period: 2007<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 278552.63 thousand short tons<br>Period: 2008<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 276219.03 thousand short tons<br>Period: 2009<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 280795.84 thousand short tons<br>Period: 2010<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 284100.56 thousand short tons<br>Period: 2011<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 285030.91 thousand short tons<br>Period: 2012<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 282161.59 thousand short tons<br>Period: 2013<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 287195.84 thousand short tons<br>Period: 2014<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 282333.56 thousand short tons<br>Period: 2015<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 281986.34 thousand short tons<br>Period: 2016<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 283431.19 thousand short tons<br>Period: 2017<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 281553.16 thousand short tons<br>Period: 2018<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 284234.5 thousand short tons<br>Period: 2019<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 272391.81 thousand short tons<br>Period: 2020<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal production: 259844.25 thousand short tons<br>Period: 2021<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(252,197,192,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [229100.79999999996, 232672.27999999997, 226993.19, 220553.48000000001, 225526.01999999999, 214350.79999999999, 203737.75, 202286.01999999999, 208845.85999999999, 217144.04999999999, 210492.70000000001, 205597.33999999997, 203612.09000000003, 193593.19, 193038.73000000004, 186311.33000000002, 144748.73000000001, 118363.02999999998, 139173.91],
      "text": ["Coal production: 229100.8 thousand short tons<br>Period: 2003<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 232672.28 thousand short tons<br>Period: 2004<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 226993.19 thousand short tons<br>Period: 2005<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 220553.48 thousand short tons<br>Period: 2006<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 225526.02 thousand short tons<br>Period: 2007<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 214350.8 thousand short tons<br>Period: 2008<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 203737.75 thousand short tons<br>Period: 2009<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 202286.02 thousand short tons<br>Period: 2010<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 208845.86 thousand short tons<br>Period: 2011<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 217144.05 thousand short tons<br>Period: 2012<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 210492.7 thousand short tons<br>Period: 2013<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 205597.34 thousand short tons<br>Period: 2014<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 203612.09 thousand short tons<br>Period: 2015<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 193593.19 thousand short tons<br>Period: 2016<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 193038.73 thousand short tons<br>Period: 2017<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 186311.33 thousand short tons<br>Period: 2018<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 144748.73 thousand short tons<br>Period: 2019<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 118363.03 thousand short tons<br>Period: 2020<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal production: 139173.91 thousand short tons<br>Period: 2021<br>REMIND_62 region code: DEU<br>Countries in region: Germany"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(253,141,60,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [32526.998610564955, 32682.752352778603, 31690.109610563497, 32208.593998083485, 32231.867687245373, 31298.491501844223, 29585.749612124768, 29098.508614332259, 30745.001519503479, 29680.051411876004, 26184.144408488872, 25094.469878408487, 24865.671324420873, 24336.86685174462, 24106.086865625406, 23480.74881756066, 22110.264016056411, 17054.091716078248, 16876.066081231609],
      "text": ["Coal production: 32527 thousand short tons<br>Period: 2003<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 32682.75 thousand short tons<br>Period: 2004<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 31690.11 thousand short tons<br>Period: 2005<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 32208.59 thousand short tons<br>Period: 2006<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 32231.87 thousand short tons<br>Period: 2007<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 31298.49 thousand short tons<br>Period: 2008<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 29585.75 thousand short tons<br>Period: 2009<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 29098.51 thousand short tons<br>Period: 2010<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 30745 thousand short tons<br>Period: 2011<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 29680.05 thousand short tons<br>Period: 2012<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 26184.14 thousand short tons<br>Period: 2013<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 25094.47 thousand short tons<br>Period: 2014<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 24865.67 thousand short tons<br>Period: 2015<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 24336.87 thousand short tons<br>Period: 2016<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 24106.09 thousand short tons<br>Period: 2017<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 23480.75 thousand short tons<br>Period: 2018<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 22110.26 thousand short tons<br>Period: 2019<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 17054.09 thousand short tons<br>Period: 2020<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal production: 16876.07 thousand short tons<br>Period: 2021<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(253,141,60,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: IRL<br>Countries in region: Ireland"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(253,141,60,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: PRT<br>Countries in region: Portugal"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(253,141,60,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(253,141,60,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [1916.7247553416212, 176.3522783188244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 1916.72 thousand short tons<br>Period: 2003<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 176.35 thousand short tons<br>Period: 2004<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(254,178,76,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [31005.948331328091, 27515.752180239364, 22474.346289162891, 20302.321053168664, 18646.748746239315, 19794.707553397111, 19597.315550162937, 20114.813432894869, 20340.810781538719, 18603.207226255348, 13894.923145329303, 12771.280195496374, 9427.7486877688316, 4581.1001765810634, 3334.6946456657874, 3050.9917261254541, 2841.6299677116554, 1834.8446171164185, 1155.540964608789],
      "text": ["Coal production: 31005.95 thousand short tons<br>Period: 2003<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 27515.75 thousand short tons<br>Period: 2004<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 22474.35 thousand short tons<br>Period: 2005<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 20302.32 thousand short tons<br>Period: 2006<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 18646.75 thousand short tons<br>Period: 2007<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 19794.71 thousand short tons<br>Period: 2008<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 19597.32 thousand short tons<br>Period: 2009<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 20114.81 thousand short tons<br>Period: 2010<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 20340.81 thousand short tons<br>Period: 2011<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 18603.21 thousand short tons<br>Period: 2012<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 13894.92 thousand short tons<br>Period: 2013<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 12771.28 thousand short tons<br>Period: 2014<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 9427.75 thousand short tons<br>Period: 2015<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 4581.1 thousand short tons<br>Period: 2016<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 3334.69 thousand short tons<br>Period: 2017<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 3050.99 thousand short tons<br>Period: 2018<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 2841.63 thousand short tons<br>Period: 2019<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 1834.84 thousand short tons<br>Period: 2020<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal production: 1155.54 thousand short tons<br>Period: 2021<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(254,178,76,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [1269.8599999999999, 259.04000000000002, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 1269.86 thousand short tons<br>Period: 2003<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 259.04 thousand short tons<br>Period: 2004<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: AUT<br>Countries in region: Austria"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(254,196,79,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [1976950.3084273208, 2286943.1434681024, 2548322.1180264759, 2768794.5201265537, 2973706.7124531148, 3128428.8627902851, 3357043.2074993453, 3694576.0257916818, 4056785.7951975125, 4251577.7664258974, 4283217.1309532691, 4175081.9223296223, 4037828.3635998033, 3675882.1225895574, 3797811.0694487952, 3985596.8134210403, 4145734.4505003723, 4205416.0017156741, 4447503.5030711498],
      "text": ["Coal production: 1976950.31 thousand short tons<br>Period: 2003<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 2286943.14 thousand short tons<br>Period: 2004<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 2548322.12 thousand short tons<br>Period: 2005<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 2768794.52 thousand short tons<br>Period: 2006<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 2973706.71 thousand short tons<br>Period: 2007<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 3128428.86 thousand short tons<br>Period: 2008<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 3357043.21 thousand short tons<br>Period: 2009<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 3694576.03 thousand short tons<br>Period: 2010<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 4056785.8 thousand short tons<br>Period: 2011<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 4251577.77 thousand short tons<br>Period: 2012<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 4283217.13 thousand short tons<br>Period: 2013<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 4175081.92 thousand short tons<br>Period: 2014<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 4037828.36 thousand short tons<br>Period: 2015<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 3675882.12 thousand short tons<br>Period: 2016<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 3797811.07 thousand short tons<br>Period: 2017<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 3985596.81 thousand short tons<br>Period: 2018<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 4145734.45 thousand short tons<br>Period: 2019<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 4205416 thousand short tons<br>Period: 2020<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal production: 4447503.5 thousand short tons<br>Period: 2021<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(254,196,79,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(254,196,79,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: SWE<br>Countries in region: Sweden"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(254,196,79,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(254,217,118,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [186.46325001522652, 189.91889497878125, 193.37290240174457, 183.1632123335678, 172.95624418536323, 128.07869215365423, 78.819848988138418, 110.55691091567243, 100.70403408809364, 87.562284413651199, 79.90492231253539, 94.127121690689108, 88.640414877262828, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 186.46 thousand short tons<br>Period: 2003<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 189.92 thousand short tons<br>Period: 2004<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 193.37 thousand short tons<br>Period: 2005<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 183.16 thousand short tons<br>Period: 2006<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 172.96 thousand short tons<br>Period: 2007<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 128.08 thousand short tons<br>Period: 2008<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 78.82 thousand short tons<br>Period: 2009<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 110.56 thousand short tons<br>Period: 2010<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 100.7 thousand short tons<br>Period: 2011<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 87.56 thousand short tons<br>Period: 2012<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 79.9 thousand short tons<br>Period: 2013<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 94.13 thousand short tons<br>Period: 2014<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 88.64 thousand short tons<br>Period: 2015<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(254,217,118,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(254,217,118,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(255,237,160,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Coal production: 0 thousand short tons<br>Period: 2003<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2004<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2005<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2006<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2007<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2008<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2009<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2010<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2011<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2012<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2013<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2014<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2015<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2016<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2017<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2018<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2019<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2020<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal production: 0 thousand short tons<br>Period: 2021<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(255,237,160,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [68977.31825244012, 70643.226040364432, 69905.701474287154, 65179.08562808764, 66623.397284590203, 65948.704067043378, 65036.35620016326, 56566.179609989485, 58616.436493084213, 62773.574782868025, 53648.611547430737, 50477.569422068271, 45814.216544627932, 32272.253830361449, 37247.601854712746, 35963.958687587467, 26942.880400326339, 13810.400576807669, 11855.128269794952],
      "text": ["Coal production: 68977.32 thousand short tons<br>Period: 2003<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 70643.23 thousand short tons<br>Period: 2004<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 69905.7 thousand short tons<br>Period: 2005<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 65179.09 thousand short tons<br>Period: 2006<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 66623.4 thousand short tons<br>Period: 2007<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 65948.7 thousand short tons<br>Period: 2008<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 65036.36 thousand short tons<br>Period: 2009<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 56566.18 thousand short tons<br>Period: 2010<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 58616.44 thousand short tons<br>Period: 2011<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 62773.57 thousand short tons<br>Period: 2012<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 53648.61 thousand short tons<br>Period: 2013<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 50477.57 thousand short tons<br>Period: 2014<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 45814.22 thousand short tons<br>Period: 2015<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 32272.25 thousand short tons<br>Period: 2016<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 37247.6 thousand short tons<br>Period: 2017<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 35963.96 thousand short tons<br>Period: 2018<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 26942.88 thousand short tons<br>Period: 2019<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 13810.4 thousand short tons<br>Period: 2020<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal production: 11855.13 thousand short tons<br>Period: 2021<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(255,237,160,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "visible": false,
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    }
  ],
  "layout": {
    "margin": {
      "t": 33.534246575342465,
      "r": 0,
      "b": 27.031963470319649,
      "l": 47.488584474885855
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Coal production (REMIND_62)",
      "font": {
        "color": "rgba(0,0,0,1)",
        "family": "",
        "size": 17.534246575342468
      },
      "x": 0,
      "xref": "paper"
    },
    "xaxis": {
      "domain": [0, 1],
      "automargin": true,
      "type": "linear",
      "autorange": false,
      "range": [2002.0999999999999, 2021.9000000000001],
      "tickmode": "array",
      "ticktext": ["2005", "2010", "2015", "2020"],
      "tickvals": [2005, 2010, 2015, 2020],
      "categoryorder": "array",
      "categoryarray": ["2005", "2010", "2015", "2020"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 3.6529680365296811,
      "tickwidth": 0,
      "showticklabels": true,
      "tickfont": {
        "color": "rgba(77,77,77,1)",
        "family": "",
        "size": 11.689497716894984
      },
      "tickangle": -90,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": true,
      "gridcolor": "rgba(235,235,235,1)",
      "gridwidth": 0.66417600664176002,
      "zeroline": false,
      "anchor": "y",
      "title": {
        "text": "",
        "font": {
          "color": "rgba(0,0,0,1)",
          "family": "",
          "size": 14.611872146118724
        }
      },
      "hoverformat": ".2f"
    },
    "yaxis": {
      "domain": [0, 1],
      "automargin": true,
      "type": "linear",
      "autorange": false,
      "range": [0, 4447503.5030711498],
      "tickmode": "array",
      "ticktext": ["0e+00", "1e+06", "2e+06", "3e+06", "4e+06"],
      "tickvals": [0, 1000000, 2000000.0000000002, 3000000, 3999999.9999999995],
      "categoryorder": "array",
      "categoryarray": ["0e+00", "1e+06", "2e+06", "3e+06", "4e+06"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 3.6529680365296811,
      "tickwidth": 0,
      "showticklabels": true,
      "tickfont": {
        "color": "rgba(77,77,77,1)",
        "family": "",
        "size": 11.68949771689498
      },
      "tickangle": -0,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": true,
      "gridcolor": "rgba(235,235,235,1)",
      "gridwidth": 0.66417600664176002,
      "zeroline": false,
      "anchor": "x",
      "title": {
        "text": "thousand short tons",
        "font": {
          "color": "rgba(0,0,0,1)",
          "family": "",
          "size": 14.611872146118724
        }
      },
      "hoverformat": ".2f"
    },
    "shapes": [
      {
        "type": "rect",
        "fillcolor": null,
        "line": {
          "color": null,
          "width": 0,
          "linetype": []
        },
        "yref": "paper",
        "xref": "paper",
        "layer": "below",
        "x0": 0,
        "x1": 1,
        "y0": 0,
        "y1": 1
      }
    ],
    "showlegend": false,
    "legend": {
      "bgcolor": null,
      "bordercolor": null,
      "borderwidth": 0,
      "font": {
        "color": "rgba(0,0,0,1)",
        "family": "",
        "size": 11.689497716894984
      },
      "title": {
        "text": "",
        "font": {
          "color": "rgba(0,0,0,1)",
          "family": "",
          "size": 14.611872146118724
        }
      }
    },
    "hovermode": "closest",
    "barmode": "relative"
  },
  "config": {
    "doubleClick": "reset",
    "modeBarButtonsToAdd": ["hoverclosest", "hovercompare"],
    "showSendToCloud": false
  },
  "source": "A",
  "attrs": {
    "b55c3d7637ca": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c23831255": {
      "y": {}
    }
  },
  "cur_data": "b55c3d7637ca",
  "visdat": {
    "b55c3d7637ca": ["function (y) ", "x"],
    "b55c23831255": ["function (y) ", "x"]
  },
  "highlight": {
    "on": "plotly_click",
    "persistent": false,
    "dynamic": false,
    "selectize": false,
    "opacityDim": 0.20000000000000001,
    "selected": {
      "opacity": 1
    },
    "debounce": 0
  },
  "shinyEvents": ["plotly_hover", "plotly_click", "plotly_selected", "plotly_relayout", "plotly_brushed", "plotly_brushing", "plotly_clickannotation", "plotly_doubleclick", "plotly_deselect", "plotly_afterplot", "plotly_sunburstclick"],
  "base_url": "https://plot.ly"
}
           

                  ); 

           }()); 

  
