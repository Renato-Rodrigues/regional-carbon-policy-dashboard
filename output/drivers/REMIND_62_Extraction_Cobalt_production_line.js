(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_62_Extraction_Cobalt_production_line') 

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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: ARG<br>Countries in region: Argentina"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: ALB<br>Countries in region: Albania"],
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
      "y": [272.64279109695673, 292.97216819184843, 307.58700331748662, 282.72556109250257, 303.60998341180419, 316.03489538757208, 359.41002231725633, 370.95529998804278, 389.88768615107153, 370.32398174675848, 298.70589658615251, 272.88566582351592, 291.37914354743697, 280.54863759382181, 276.83121646315539, 244.98664534595443, 262.14036771031653, 258.67223459945649, 255.16613356420345],
      "text": ["Cobalt production: 272.64 metric tons<br>Period: 2003<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 292.97 metric tons<br>Period: 2004<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 307.59 metric tons<br>Period: 2005<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 282.73 metric tons<br>Period: 2006<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 303.61 metric tons<br>Period: 2007<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 316.03 metric tons<br>Period: 2008<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 359.41 metric tons<br>Period: 2009<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 370.96 metric tons<br>Period: 2010<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 389.89 metric tons<br>Period: 2011<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 370.32 metric tons<br>Period: 2012<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 298.71 metric tons<br>Period: 2013<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 272.89 metric tons<br>Period: 2014<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 291.38 metric tons<br>Period: 2015<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 280.55 metric tons<br>Period: 2016<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 276.83 metric tons<br>Period: 2017<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 244.99 metric tons<br>Period: 2018<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 262.14 metric tons<br>Period: 2019<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 258.67 metric tons<br>Period: 2020<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 255.17 metric tons<br>Period: 2021<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [4327, 5060, 5767, 7115, 8261, 8953, 3919.0000000000005, 4636, 6836, 6625, 4005, 3906.9999999999995, 4339, 4216, 3703.9999999999995, 3279, 3336, 3336, 3335.9999999999995],
      "text": ["Cobalt production: 4327 metric tons<br>Period: 2003<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 5060 metric tons<br>Period: 2004<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 5767 metric tons<br>Period: 2005<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 7115 metric tons<br>Period: 2006<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 8261 metric tons<br>Period: 2007<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 8953 metric tons<br>Period: 2008<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3919 metric tons<br>Period: 2009<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 4636 metric tons<br>Period: 2010<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 6836 metric tons<br>Period: 2011<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 6625 metric tons<br>Period: 2012<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 4005 metric tons<br>Period: 2013<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3907 metric tons<br>Period: 2014<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 4339 metric tons<br>Period: 2015<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 4216 metric tons<br>Period: 2016<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3704 metric tons<br>Period: 2017<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3279 metric tons<br>Period: 2018<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3336 metric tons<br>Period: 2019<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3336 metric tons<br>Period: 2020<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3336 metric tons<br>Period: 2021<br>REMIND_62 region code: CAN<br>Countries in region: Canada"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand"],
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
      "y": [980, 980, 979.99999999999989, 980, 980, 979.99999999999989, 979.99999999999989, 980.00000000000011, 980.00000000000011, 980, 980, 979.99999999999989, 980.00000000000011, 980.00000000000011, 999.99999999999989, 1399.9999999999998, 1099.9999999999998, 1100, 1100],
      "text": ["Cobalt production: 980 metric tons<br>Period: 2003<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2004<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2005<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2006<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2007<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2008<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2009<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2010<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2011<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2012<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2013<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2014<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2015<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2016<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1000 metric tons<br>Period: 2017<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1400 metric tons<br>Period: 2018<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1100 metric tons<br>Period: 2019<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1100 metric tons<br>Period: 2020<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1100 metric tons<br>Period: 2021<br>REMIND_62 region code: MEX<br>Countries in region: Mexico"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: URY<br>Countries in region: Uruguay"],
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
      "y": [1300, 1400, 1400, 1099.9999999999998, 1400, 2631, 2075.0000000000005, 3139, 3623, 3900, 3499.9999999999995, 3827.9999999999995, 2771, 851.99999999999989, 184.99999999999997, 107.5, 30, 30, 29.999999999999996],
      "text": ["Cobalt production: 1300 metric tons<br>Period: 2003<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 1400 metric tons<br>Period: 2004<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 1400 metric tons<br>Period: 2005<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 1100 metric tons<br>Period: 2006<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 1400 metric tons<br>Period: 2007<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 2631 metric tons<br>Period: 2008<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 2075 metric tons<br>Period: 2009<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3139 metric tons<br>Period: 2010<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3623 metric tons<br>Period: 2011<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3900 metric tons<br>Period: 2012<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3500 metric tons<br>Period: 2013<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3828 metric tons<br>Period: 2014<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 2771 metric tons<br>Period: 2015<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 852 metric tons<br>Period: 2016<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 185 metric tons<br>Period: 2017<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 107.5 metric tons<br>Period: 2018<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 30 metric tons<br>Period: 2019<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 30 metric tons<br>Period: 2020<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 30 metric tons<br>Period: 2021<br>REMIND_62 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [100, 100, 100, 700, 800, 1200, 1500, 2200, 2200.0000000000005, 2600, 2800, 4600, 4300, 4000, 4600, 4749.9999999999991, 5100, 5100, 5100],
      "text": ["Cobalt production: 100 metric tons<br>Period: 2003<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 100 metric tons<br>Period: 2004<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 100 metric tons<br>Period: 2005<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 700 metric tons<br>Period: 2006<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 800 metric tons<br>Period: 2007<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 1200 metric tons<br>Period: 2008<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 1500 metric tons<br>Period: 2009<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 2200 metric tons<br>Period: 2010<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 2200 metric tons<br>Period: 2011<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 2600 metric tons<br>Period: 2012<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 2800 metric tons<br>Period: 2013<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4600 metric tons<br>Period: 2014<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4300 metric tons<br>Period: 2015<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4000 metric tons<br>Period: 2016<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4600 metric tons<br>Period: 2017<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4750 metric tons<br>Period: 2018<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 5100 metric tons<br>Period: 2019<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 5100 metric tons<br>Period: 2020<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 5100 metric tons<br>Period: 2021<br>REMIND_62 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [5999.2386240722981, 5599.2992983010708, 5599.310105935132, 5999.2731981816496, 5899.3006137198272, 4784.4459290186833, 4344.5088215068772, 3851.5727418938036, 3847.5790746125272, 5881.3677135143353, 6399.3237694543914, 6200.3544952685761, 5720.412970598115, 5139.4807598170255, 5033.4997731249141, 4877.5224715892227, 5741.4461341730976, 5741.452923105423, 5741.4536932938272],
      "text": ["Cobalt production: 5999.24 metric tons<br>Period: 2003<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5599.3 metric tons<br>Period: 2004<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5599.31 metric tons<br>Period: 2005<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5999.27 metric tons<br>Period: 2006<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5899.3 metric tons<br>Period: 2007<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 4784.45 metric tons<br>Period: 2008<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 4344.51 metric tons<br>Period: 2009<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 3851.57 metric tons<br>Period: 2010<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 3847.58 metric tons<br>Period: 2011<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5881.37 metric tons<br>Period: 2012<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 6399.32 metric tons<br>Period: 2013<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 6200.35 metric tons<br>Period: 2014<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5720.41 metric tons<br>Period: 2015<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5139.48 metric tons<br>Period: 2016<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5033.5 metric tons<br>Period: 2017<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 4877.52 metric tons<br>Period: 2018<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5741.45 metric tons<br>Period: 2019<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5741.45 metric tons<br>Period: 2020<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Cobalt production: 5741.45 metric tons<br>Period: 2021<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: COL<br>Countries in region: Colombia"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan"],
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
      "y": [361.34037330536142, 322.54670425158264, 301.52835286532974, 262.98831543300679, 251.52318897059297, 234.2256997829063, 168.57360287236895, 211.15937809850828, 203.17056452443202, 172.03130783889094, 214.65078908459543, 260.34162267049328, 271.88450864612076, 226.57065107836993, 230.30782824519994, 208.60297461146652, 199.59070532411911, 199.41709938546239, 199.28172087135161],
      "text": ["Cobalt production: 361.34 metric tons<br>Period: 2003<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 322.55 metric tons<br>Period: 2004<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 301.53 metric tons<br>Period: 2005<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 262.99 metric tons<br>Period: 2006<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 251.52 metric tons<br>Period: 2007<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 234.23 metric tons<br>Period: 2008<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 168.57 metric tons<br>Period: 2009<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 211.16 metric tons<br>Period: 2010<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 203.17 metric tons<br>Period: 2011<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 172.03 metric tons<br>Period: 2012<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 214.65 metric tons<br>Period: 2013<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 260.34 metric tons<br>Period: 2014<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 271.88 metric tons<br>Period: 2015<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 226.57 metric tons<br>Period: 2016<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 230.31 metric tons<br>Period: 2017<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 208.6 metric tons<br>Period: 2018<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 199.59 metric tons<br>Period: 2019<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 199.42 metric tons<br>Period: 2020<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 199.28 metric tons<br>Period: 2021<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [6099.9999999999991, 6000, 6300, 6300, 6300, 6199.9999999999991, 6100, 6200, 6100, 6300, 6300, 6300.0000000000009, 6200, 5499.9999999999991, 5900, 6100, 6300, 6300.0000000000009, 6299.9999999999991],
      "text": ["Cobalt production: 6100 metric tons<br>Period: 2003<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6000 metric tons<br>Period: 2004<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2005<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2006<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2007<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6200 metric tons<br>Period: 2008<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6100 metric tons<br>Period: 2009<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6200 metric tons<br>Period: 2010<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6100 metric tons<br>Period: 2011<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2012<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2013<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2014<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6200 metric tons<br>Period: 2015<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 5500 metric tons<br>Period: 2016<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 5900 metric tons<br>Period: 2017<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6100 metric tons<br>Period: 2018<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2019<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2020<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2021<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [28.907173115737901, 29.632232857238815, 28.220126933589125, 28.411133497418113, 28.861420644857795, 30.313949994485998, 30.593090187674612, 32.770284869168385, 33.761450597823988, 33.261000468144566, 68.175956719890863, 139.96634473504352, 164.00651849123824, 145.39029692718694, 217.11185672315867, 215.9355838998984, 193.73606422511762, 195.74554573616018, 197.45864918628811],
      "text": ["Cobalt production: 28.91 metric tons<br>Period: 2003<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 29.63 metric tons<br>Period: 2004<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 28.22 metric tons<br>Period: 2005<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 28.41 metric tons<br>Period: 2006<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 28.86 metric tons<br>Period: 2007<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 30.31 metric tons<br>Period: 2008<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 30.59 metric tons<br>Period: 2009<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 32.77 metric tons<br>Period: 2010<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 33.76 metric tons<br>Period: 2011<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 33.26 metric tons<br>Period: 2012<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 68.18 metric tons<br>Period: 2013<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 139.97 metric tons<br>Period: 2014<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 164.01 metric tons<br>Period: 2015<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 145.39 metric tons<br>Period: 2016<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 217.11 metric tons<br>Period: 2017<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 215.94 metric tons<br>Period: 2018<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 193.74 metric tons<br>Period: 2019<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 195.75 metric tons<br>Period: 2020<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 197.46 metric tons<br>Period: 2021<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [25, 25, 24.999999999999996, 25, 25, 24.999999999999996, 24.999999999999996, 24.999999999999996, 25.000000000000004, 24.999999999999996, 25, 223.00000000000003, 277, 134, 134, 134.00000000000003, 133.99999999999997, 134, 134],
      "text": ["Cobalt production: 25 metric tons<br>Period: 2003<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2004<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2005<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2006<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2007<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2008<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2009<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2010<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2011<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2012<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2013<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 223 metric tons<br>Period: 2014<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 277 metric tons<br>Period: 2015<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2016<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2017<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2018<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2019<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2020<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2021<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: SGP<br>Countries in region: Singapore"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [1299.9999999999998, 1300.0000000000002, 1299.9999999999998, 1300, 1300, 1300, 1200.0000000000002, 1599.9999999999998, 1600, 1700, 1700, 1300, 1300, 1200, 1200, 1200, 1100, 1100, 1100],
      "text": ["Cobalt production: 1300 metric tons<br>Period: 2003<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2004<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2005<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2006<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2007<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2008<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1200 metric tons<br>Period: 2009<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1600 metric tons<br>Period: 2010<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1600 metric tons<br>Period: 2011<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1700 metric tons<br>Period: 2012<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1700 metric tons<br>Period: 2013<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2014<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2015<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1200 metric tons<br>Period: 2016<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1200 metric tons<br>Period: 2017<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1200 metric tons<br>Period: 2018<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1100 metric tons<br>Period: 2019<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1100 metric tons<br>Period: 2020<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1100 metric tons<br>Period: 2021<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: THA<br>Countries in region: Thailand"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: JPN<br>Countries in region: Japan"],
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
      "y": [282.86757957504295, 322.67644616230643, 320.09581635530697, 297.69685683755091, 295.15751141816662, 331.32599714163018, 424.34317693538344, 594.14994378203448, 409.51427825505368, 338.85484544832337, 372.72298827092169, 396.04632972797538, 272.89670901402485, 287.55085648042882, 407.95999940742581, 402.40637322586264, 397.36435114829936, 392.74091738465978, 388.1312492647923],
      "text": ["Cobalt production: 282.87 metric tons<br>Period: 2003<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Cobalt production: 322.68 metric tons<br>Period: 2004<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Cobalt production: 320.1 metric tons<br>Period: 2005<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 297.7 metric tons<br>Period: 2006<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 295.16 metric tons<br>Period: 2007<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 331.33 metric tons<br>Period: 2008<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 424.34 metric tons<br>Period: 2009<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 594.15 metric tons<br>Period: 2010<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 409.51 metric tons<br>Period: 2011<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 338.85 metric tons<br>Period: 2012<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 372.72 metric tons<br>Period: 2013<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 396.05 metric tons<br>Period: 2014<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 272.9 metric tons<br>Period: 2015<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 287.55 metric tons<br>Period: 2016<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 407.96 metric tons<br>Period: 2017<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 402.41 metric tons<br>Period: 2018<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 397.36 metric tons<br>Period: 2019<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 392.74 metric tons<br>Period: 2020<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 388.13 metric tons<br>Period: 2021<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: CHL<br>Countries in region: Chile"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: ISL<br>Countries in region: Iceland"],
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
      "y": [99.999999999999986, 100, 100, 100.00000000000001, 100, 100, 100.00000000000001, 100, 100, 100, 100, 100, 100.00000000000001, 100, 219.99999999999997, 259.00000000000006, 120.00000000000001, 119.99999999999999, 120],
      "text": ["Cobalt production: 100 metric tons<br>Period: 2003<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2004<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2005<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2006<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2007<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2008<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2009<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2010<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2011<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2012<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2013<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2014<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2015<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2016<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 220 metric tons<br>Period: 2017<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 259 metric tons<br>Period: 2018<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 120 metric tons<br>Period: 2019<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 120 metric tons<br>Period: 2020<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 120 metric tons<br>Period: 2021<br>REMIND_62 region code: TUR<br>Countries in region: Turkey"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: IND<br>Countries in region: India"],
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
      "y": [119.99999999999999, 119.99999999999999, 120.00000000000001, 119.99999999999999, 120, 119.99999999999999, 120, 119.99999999999999, 120.00000000000001, 120, 120, 120, 760, 690, 640, 480, 500, 499.99999999999994, 499.99999999999994],
      "text": ["Cobalt production: 120 metric tons<br>Period: 2003<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2004<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2005<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2006<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2007<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2008<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2009<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2010<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2011<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2012<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2013<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2014<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 760 metric tons<br>Period: 2015<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 690 metric tons<br>Period: 2016<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 640 metric tons<br>Period: 2017<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 480 metric tons<br>Period: 2018<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 500 metric tons<br>Period: 2019<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 500 metric tons<br>Period: 2020<br>REMIND_62 region code: USA<br>Countries in region: United States", "Cobalt production: 500 metric tons<br>Period: 2021<br>REMIND_62 region code: USA<br>Countries in region: United States"],
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
      "y": [14800.000000000002, 20199.999999999996, 24500, 27100.000000000004, 25300.000000000004, 32300, 40000, 60000, 60000, 51000, 56000, 62000, 72000, 68000, 80000, 104000, 100000, 100000, 100000.00000000001],
      "text": ["Cobalt production: 14800 metric tons<br>Period: 2003<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 20200 metric tons<br>Period: 2004<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 24500 metric tons<br>Period: 2005<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 27100 metric tons<br>Period: 2006<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 25300 metric tons<br>Period: 2007<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 32300 metric tons<br>Period: 2008<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 40000 metric tons<br>Period: 2009<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 60000 metric tons<br>Period: 2010<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 60000 metric tons<br>Period: 2011<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 51000 metric tons<br>Period: 2012<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 56000 metric tons<br>Period: 2013<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 62000 metric tons<br>Period: 2014<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 72000 metric tons<br>Period: 2015<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 68000 metric tons<br>Period: 2016<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 80000 metric tons<br>Period: 2017<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 104000 metric tons<br>Period: 2018<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 1e+05 metric tons<br>Period: 2019<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 1e+05 metric tons<br>Period: 2020<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 1e+05 metric tons<br>Period: 2021<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: ESP<br>Countries in region: Spain"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: POL<br>Countries in region: Poland"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [479.99999999999994, 610, 620.00000000000011, 600, 600, 590, 610, 1800, 1599.9999999999998, 2500, 3000, 2999.9999999999995, 3000.0000000000005, 2300.0000000000005, 2300, 2300, 2100, 2100, 2100],
      "text": ["Cobalt production: 480 metric tons<br>Period: 2003<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 610 metric tons<br>Period: 2004<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 620 metric tons<br>Period: 2005<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 600 metric tons<br>Period: 2006<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 600 metric tons<br>Period: 2007<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 590 metric tons<br>Period: 2008<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 610 metric tons<br>Period: 2009<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 1800 metric tons<br>Period: 2010<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 1600 metric tons<br>Period: 2011<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2500 metric tons<br>Period: 2012<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 3000 metric tons<br>Period: 2013<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 3000 metric tons<br>Period: 2014<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 3000 metric tons<br>Period: 2015<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2300 metric tons<br>Period: 2016<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2300 metric tons<br>Period: 2017<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2300 metric tons<br>Period: 2018<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2100 metric tons<br>Period: 2019<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2100 metric tons<br>Period: 2020<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2100 metric tons<br>Period: 2021<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: DEU<br>Countries in region: Germany"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: IRL<br>Countries in region: Ireland"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: PRT<br>Countries in region: Portugal"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: AUT<br>Countries in region: Austria"],
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
      "y": [684.19195776293418, 1231.5493416118256, 2052.6359497498388, 1798.5275283019002, 1954.9353879621165, 6480.7961123939622, 5865.3916194865451, 6237.1194322601623, 6647.9450862595868, 6843.5796471773938, 2542.0063389387201, 2737.5922663535889, 2542.0675226608159, 2248.8209342598784, 2444.4881577057763, 1955.6144753030135, 2444.5065309536876, 2444.5843436028699, 2444.68744582728],
      "text": ["Cobalt production: 684.19 metric tons<br>Period: 2003<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 1231.55 metric tons<br>Period: 2004<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2052.64 metric tons<br>Period: 2005<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 1798.53 metric tons<br>Period: 2006<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 1954.94 metric tons<br>Period: 2007<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 6480.8 metric tons<br>Period: 2008<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 5865.39 metric tons<br>Period: 2009<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 6237.12 metric tons<br>Period: 2010<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 6647.95 metric tons<br>Period: 2011<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 6843.58 metric tons<br>Period: 2012<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2542.01 metric tons<br>Period: 2013<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2737.59 metric tons<br>Period: 2014<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2542.07 metric tons<br>Period: 2015<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2248.82 metric tons<br>Period: 2016<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2444.49 metric tons<br>Period: 2017<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 1955.61 metric tons<br>Period: 2018<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2444.51 metric tons<br>Period: 2019<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2444.58 metric tons<br>Period: 2020<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2444.69 metric tons<br>Period: 2021<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: SWE<br>Countries in region: Sweden"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [99.498306949143128, 99.496319309190923, 99.494608499862693, 99.49193682126328, 114.41293043011012, 104.46167253297496, 26.861005653333585, 139.27624214394396, 497.4270435621807, 631.74777676382371, 746.17635809186402, 766.09051326897747, 437.77331671085562, 686.5181270769308, 994.96557585369442, 1370.0767408642644, 1446.6976120452432, 1446.7080411860625, 1446.7230653588292],
      "text": ["Cobalt production: 99.5 metric tons<br>Period: 2003<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 99.5 metric tons<br>Period: 2004<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 99.49 metric tons<br>Period: 2005<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 99.49 metric tons<br>Period: 2006<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 114.41 metric tons<br>Period: 2007<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 104.46 metric tons<br>Period: 2008<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 26.86 metric tons<br>Period: 2009<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 139.28 metric tons<br>Period: 2010<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 497.43 metric tons<br>Period: 2011<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 631.75 metric tons<br>Period: 2012<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 746.18 metric tons<br>Period: 2013<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 766.09 metric tons<br>Period: 2014<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 437.77 metric tons<br>Period: 2015<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 686.52 metric tons<br>Period: 2016<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 994.97 metric tons<br>Period: 2017<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 1370.08 metric tons<br>Period: 2018<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 1446.7 metric tons<br>Period: 2019<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 1446.71 metric tons<br>Period: 2020<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 1446.72 metric tons<br>Period: 2021<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "l": 53.333333333333343
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Cobalt production (REMIND_62)",
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
      "range": [0, 104000],
      "tickmode": "array",
      "ticktext": ["0", "25000", "50000", "75000", "100000"],
      "tickvals": [0, 25000.000000000004, 50000, 75000, 100000],
      "categoryorder": "array",
      "categoryarray": ["0", "25000", "50000", "75000", "100000"],
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
        "text": "metric tons",
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
    "b55c214a1798": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c6c34aa2": {
      "y": {}
    }
  },
  "cur_data": "b55c214a1798",
  "visdat": {
    "b55c214a1798": ["function (y) ", "x"],
    "b55c6c34aa2": ["function (y) ", "x"]
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

  
