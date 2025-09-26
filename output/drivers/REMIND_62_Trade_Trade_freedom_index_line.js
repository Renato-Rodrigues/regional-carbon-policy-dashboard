(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_62_Trade_Trade_freedom_index_line') 

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
      "y": [54, 61.999999999999993, 56, 67, 61, 70, 70, 70, 70, 68, 68, 69, 69, 67, 67, 70, 70, 69, 63],
      "text": ["Trade freedom index: 54 index (0-100)<br>Period: 2003<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 62 index (0-100)<br>Period: 2004<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 56 index (0-100)<br>Period: 2005<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 67 index (0-100)<br>Period: 2006<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 61 index (0-100)<br>Period: 2007<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 70 index (0-100)<br>Period: 2008<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 70 index (0-100)<br>Period: 2009<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 70 index (0-100)<br>Period: 2010<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 70 index (0-100)<br>Period: 2011<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 68 index (0-100)<br>Period: 2012<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 68 index (0-100)<br>Period: 2013<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 69 index (0-100)<br>Period: 2014<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 69 index (0-100)<br>Period: 2015<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 67 index (0-100)<br>Period: 2016<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 67 index (0-100)<br>Period: 2017<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 70 index (0-100)<br>Period: 2018<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 70 index (0-100)<br>Period: 2019<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 69 index (0-100)<br>Period: 2020<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Trade freedom index: 63 index (0-100)<br>Period: 2021<br>REMIND_62 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [83.032354592653263, 85.023199532547636, 83.032558257185499, 82.037278505263558, 87.013944201838598, 87.013850963172914, 85.022971697803968, 89.999999999999986, 90, 90, 90, 89.999999999999986, 90, 90, 89.999999999999986, 90, 87.013430590736348, 87.01344958919303, 86.017924619796034],
      "text": ["Trade freedom index: 83.03 index (0-100)<br>Period: 2003<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 85.02 index (0-100)<br>Period: 2004<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 83.03 index (0-100)<br>Period: 2005<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 82.04 index (0-100)<br>Period: 2006<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 87.01 index (0-100)<br>Period: 2007<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 87.01 index (0-100)<br>Period: 2008<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 85.02 index (0-100)<br>Period: 2009<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 90 index (0-100)<br>Period: 2010<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 90 index (0-100)<br>Period: 2011<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 90 index (0-100)<br>Period: 2012<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 90 index (0-100)<br>Period: 2013<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 90 index (0-100)<br>Period: 2014<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 90 index (0-100)<br>Period: 2015<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 90 index (0-100)<br>Period: 2016<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 90 index (0-100)<br>Period: 2017<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 90 index (0-100)<br>Period: 2018<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 87.01 index (0-100)<br>Period: 2019<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 87.01 index (0-100)<br>Period: 2020<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Trade freedom index: 86.02 index (0-100)<br>Period: 2021<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein"],
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
      "y": [69.762562025923813, 69.488622528001628, 69.842237091039991, 72.940353101209581, 76.482127955166632, 77.037261082303203, 79.262630038931363, 80.00850476689449, 80.97272448433651, 82.058113911057291, 82.239385716417033, 82.079236844538997, 82.557225190890648, 81.774462191480779, 82.562175643882824, 86.389906080603581, 80.899226488806065, 80.669282602785827, 77.419695145805136],
      "text": ["Trade freedom index: 69.76 index (0-100)<br>Period: 2003<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 69.49 index (0-100)<br>Period: 2004<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 69.84 index (0-100)<br>Period: 2005<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 72.94 index (0-100)<br>Period: 2006<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 76.48 index (0-100)<br>Period: 2007<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 77.04 index (0-100)<br>Period: 2008<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 79.26 index (0-100)<br>Period: 2009<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Trade freedom index: 80.01 index (0-100)<br>Period: 2010<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Trade freedom index: 80.97 index (0-100)<br>Period: 2011<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 82.06 index (0-100)<br>Period: 2012<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 82.24 index (0-100)<br>Period: 2013<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 82.08 index (0-100)<br>Period: 2014<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 82.56 index (0-100)<br>Period: 2015<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 81.77 index (0-100)<br>Period: 2016<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 82.56 index (0-100)<br>Period: 2017<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 86.39 index (0-100)<br>Period: 2018<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 80.9 index (0-100)<br>Period: 2019<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 80.67 index (0-100)<br>Period: 2020<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 77.42 index (0-100)<br>Period: 2021<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [56, 61, 60, 62, 73, 76, 76, 86, 79.999999999999986, 80, 80, 87.999999999999986, 88, 88, 87.999999999999986, 88, 88, 88, 83.000000000000014],
      "text": ["Trade freedom index: 56 index (0-100)<br>Period: 2003<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 61 index (0-100)<br>Period: 2004<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 60 index (0-100)<br>Period: 2005<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 62 index (0-100)<br>Period: 2006<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 73 index (0-100)<br>Period: 2007<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 76 index (0-100)<br>Period: 2008<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 76 index (0-100)<br>Period: 2009<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 86 index (0-100)<br>Period: 2010<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 80 index (0-100)<br>Period: 2011<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 80 index (0-100)<br>Period: 2012<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 80 index (0-100)<br>Period: 2013<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 88 index (0-100)<br>Period: 2017<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 88 index (0-100)<br>Period: 2018<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 88 index (0-100)<br>Period: 2019<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 88 index (0-100)<br>Period: 2020<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Trade freedom index: 83 index (0-100)<br>Period: 2021<br>REMIND_62 region code: ALB<br>Countries in region: Albania"],
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
      "y": [65.58795565524332, 64.46713964871806, 66.147147068334434, 70.083608043324588, 74.120406527980478, 73.062356024560785, 76.7687688174979, 79.132382662100269, 79.408981235522148, 77.763957169887675, 77.69985933523192, 78.081744848974623, 79.406987897174332, 78.877850773684145, 78.688198651725301, 78.5302674799686, 76.251461684182033, 76.276680497828167, 71.896958928647123],
      "text": ["Trade freedom index: 65.59 index (0-100)<br>Period: 2003<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 64.47 index (0-100)<br>Period: 2004<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 66.15 index (0-100)<br>Period: 2005<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 70.08 index (0-100)<br>Period: 2006<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 74.12 index (0-100)<br>Period: 2007<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 73.06 index (0-100)<br>Period: 2008<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 76.77 index (0-100)<br>Period: 2009<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 79.13 index (0-100)<br>Period: 2010<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 79.41 index (0-100)<br>Period: 2011<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 77.76 index (0-100)<br>Period: 2012<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 77.7 index (0-100)<br>Period: 2013<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 78.08 index (0-100)<br>Period: 2014<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 79.41 index (0-100)<br>Period: 2015<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 78.88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 78.69 index (0-100)<br>Period: 2017<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 78.53 index (0-100)<br>Period: 2018<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 76.25 index (0-100)<br>Period: 2019<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 76.28 index (0-100)<br>Period: 2020<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 71.9 index (0-100)<br>Period: 2021<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [57.999999999999993, 56.999999999999993, 58, 58, 57, 66, 63, 74, 74, 74, 74, 71, 70, 71, 70, 71, 71.999999999999986, 70, 67],
      "text": ["Trade freedom index: 58 index (0-100)<br>Period: 2003<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 57 index (0-100)<br>Period: 2004<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 58 index (0-100)<br>Period: 2005<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 58 index (0-100)<br>Period: 2006<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 57 index (0-100)<br>Period: 2007<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 66 index (0-100)<br>Period: 2008<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 63 index (0-100)<br>Period: 2009<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 74 index (0-100)<br>Period: 2010<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 74 index (0-100)<br>Period: 2011<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 74 index (0-100)<br>Period: 2012<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 74 index (0-100)<br>Period: 2013<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 71 index (0-100)<br>Period: 2014<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 70 index (0-100)<br>Period: 2015<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 71 index (0-100)<br>Period: 2016<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 70 index (0-100)<br>Period: 2017<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 71 index (0-100)<br>Period: 2018<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 72 index (0-100)<br>Period: 2019<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 70 index (0-100)<br>Period: 2020<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Trade freedom index: 67 index (0-100)<br>Period: 2021<br>REMIND_62 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [83, 83.000000000000014, 83, 83, 88, 87, 88, 88, 88.000000000000014, 88, 88, 87.999999999999986, 88, 86.999999999999986, 88, 88, 87, 87, 89],
      "text": ["Trade freedom index: 83 index (0-100)<br>Period: 2003<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 83 index (0-100)<br>Period: 2004<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 83 index (0-100)<br>Period: 2005<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 83 index (0-100)<br>Period: 2006<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2007<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 87 index (0-100)<br>Period: 2008<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2009<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2012<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2013<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 87 index (0-100)<br>Period: 2016<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2017<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2018<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 87 index (0-100)<br>Period: 2019<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 87 index (0-100)<br>Period: 2020<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 89 index (0-100)<br>Period: 2021<br>REMIND_62 region code: CAN<br>Countries in region: Canada"],
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
      "y": [80, 79.999999999999986, 78.999999999999986, 79, 84, 81, 85, 86, 86.999999999999986, 87, 86.999999999999986, 87, 87, 87, 87, 87, 92, 92, 90],
      "text": ["Trade freedom index: 80 index (0-100)<br>Period: 2003<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 79 index (0-100)<br>Period: 2005<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 79 index (0-100)<br>Period: 2006<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 84 index (0-100)<br>Period: 2007<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 81 index (0-100)<br>Period: 2008<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 85 index (0-100)<br>Period: 2009<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 86 index (0-100)<br>Period: 2010<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 87 index (0-100)<br>Period: 2011<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 87 index (0-100)<br>Period: 2014<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 87 index (0-100)<br>Period: 2015<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 87 index (0-100)<br>Period: 2016<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 92 index (0-100)<br>Period: 2019<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 92 index (0-100)<br>Period: 2020<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Trade freedom index: 90 index (0-100)<br>Period: 2021<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand"],
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
      "y": [81, 81.999999999999986, 75, 57, 78, 79, 80, 82.000000000000014, 81, 73, 81.000000000000014, 86, 86.000000000000014, 79, 80, 88, 81, 88.000000000000014, 81.999999999999986],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 82 index (0-100)<br>Period: 2004<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 75 index (0-100)<br>Period: 2005<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 57 index (0-100)<br>Period: 2006<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 78 index (0-100)<br>Period: 2007<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 79 index (0-100)<br>Period: 2008<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 80 index (0-100)<br>Period: 2009<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 82 index (0-100)<br>Period: 2010<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 81 index (0-100)<br>Period: 2011<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 73 index (0-100)<br>Period: 2012<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 81 index (0-100)<br>Period: 2013<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 86 index (0-100)<br>Period: 2014<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 86 index (0-100)<br>Period: 2015<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 79 index (0-100)<br>Period: 2016<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 80 index (0-100)<br>Period: 2017<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 88 index (0-100)<br>Period: 2018<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 81 index (0-100)<br>Period: 2019<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 88 index (0-100)<br>Period: 2020<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 82 index (0-100)<br>Period: 2021<br>REMIND_62 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [82.999999999999986, 82.000000000000014, 84.000000000000014, 84, 89, 86.000000000000014, 88.999999999999986, 89, 89, 89, 89, 89, 89, 88, 88.000000000000014, 88, 83, 84, 84],
      "text": ["Trade freedom index: 83 index (0-100)<br>Period: 2003<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 82 index (0-100)<br>Period: 2004<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 84 index (0-100)<br>Period: 2005<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 84 index (0-100)<br>Period: 2006<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2007<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2009<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2010<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2011<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2012<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2013<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2014<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2015<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 88 index (0-100)<br>Period: 2017<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 88 index (0-100)<br>Period: 2018<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 83 index (0-100)<br>Period: 2019<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 84 index (0-100)<br>Period: 2020<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [75, 74, 76, 77, 77, 82.000000000000014, 84, 82.999999999999986, 85.000000000000014, 84, 84, 86, 86, 86, 85.999999999999986, 80.999999999999986, 75, 81, 79],
      "text": ["Trade freedom index: 75 index (0-100)<br>Period: 2003<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 74 index (0-100)<br>Period: 2004<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 76 index (0-100)<br>Period: 2005<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 77 index (0-100)<br>Period: 2006<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 77 index (0-100)<br>Period: 2007<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 82 index (0-100)<br>Period: 2008<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 84 index (0-100)<br>Period: 2009<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 85 index (0-100)<br>Period: 2011<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 84 index (0-100)<br>Period: 2012<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 84 index (0-100)<br>Period: 2013<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 86 index (0-100)<br>Period: 2014<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 86 index (0-100)<br>Period: 2015<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 86 index (0-100)<br>Period: 2016<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 86 index (0-100)<br>Period: 2017<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 81 index (0-100)<br>Period: 2018<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 75 index (0-100)<br>Period: 2019<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 81 index (0-100)<br>Period: 2020<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Trade freedom index: 79 index (0-100)<br>Period: 2021<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine"],
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
      "y": [59, 72, 72, 76, 82, 83, 83, 83, 82.999999999999986, 82.999999999999986, 82.999999999999986, 83, 82, 81, 81, 80, 79, 77, 71],
      "text": ["Trade freedom index: 59 index (0-100)<br>Period: 2003<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 72 index (0-100)<br>Period: 2004<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 72 index (0-100)<br>Period: 2005<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 76 index (0-100)<br>Period: 2006<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 82 index (0-100)<br>Period: 2007<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 83 index (0-100)<br>Period: 2008<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 83 index (0-100)<br>Period: 2009<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 83 index (0-100)<br>Period: 2011<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 83 index (0-100)<br>Period: 2012<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 83 index (0-100)<br>Period: 2013<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 83 index (0-100)<br>Period: 2014<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 82 index (0-100)<br>Period: 2015<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 81 index (0-100)<br>Period: 2016<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 81 index (0-100)<br>Period: 2017<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 80 index (0-100)<br>Period: 2018<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 79 index (0-100)<br>Period: 2019<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 77 index (0-100)<br>Period: 2020<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Trade freedom index: 71 index (0-100)<br>Period: 2021<br>REMIND_62 region code: URY<br>Countries in region: Uruguay"],
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
      "y": [59.000000000000007, 63, 65, 69, 70, 71, 72, 69, 70, 70, 70, 69, 70, 69, 69, 69, 69, 68.000000000000014, 65],
      "text": ["Trade freedom index: 59 index (0-100)<br>Period: 2003<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 63 index (0-100)<br>Period: 2004<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 65 index (0-100)<br>Period: 2005<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2006<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2007<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 71 index (0-100)<br>Period: 2008<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 72 index (0-100)<br>Period: 2009<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2010<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2011<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2012<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2013<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2014<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2015<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2016<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2017<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2018<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2019<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 68 index (0-100)<br>Period: 2020<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 65 index (0-100)<br>Period: 2021<br>REMIND_62 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [58.000000000000007, 58.000000000000007, 62, 62.999999999999993, 61, 55, 60, 57, 61, 59.000000000000007, 59, 63, 63.000000000000007, 62.999999999999993, 61, 59, 60, 58, 55.000000000000007],
      "text": ["Trade freedom index: 58 index (0-100)<br>Period: 2003<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 58 index (0-100)<br>Period: 2004<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 62 index (0-100)<br>Period: 2005<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 63 index (0-100)<br>Period: 2006<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 61 index (0-100)<br>Period: 2007<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2008<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 60 index (0-100)<br>Period: 2009<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 57 index (0-100)<br>Period: 2010<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 61 index (0-100)<br>Period: 2011<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 59 index (0-100)<br>Period: 2012<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 59 index (0-100)<br>Period: 2013<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 63 index (0-100)<br>Period: 2014<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 63 index (0-100)<br>Period: 2015<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 63 index (0-100)<br>Period: 2016<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 61 index (0-100)<br>Period: 2017<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 59 index (0-100)<br>Period: 2018<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 60 index (0-100)<br>Period: 2019<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 58 index (0-100)<br>Period: 2020<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2021<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of"],
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
      "y": [73, 67, 74, 65, 69, 66, 70, 71, 71, 72.999999999999986, 73, 73, 73.000000000000014, 75, 80, 80, 80, 80, 79],
      "text": ["Trade freedom index: 73 index (0-100)<br>Period: 2003<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 67 index (0-100)<br>Period: 2004<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 74 index (0-100)<br>Period: 2005<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 65 index (0-100)<br>Period: 2006<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 69 index (0-100)<br>Period: 2007<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 66 index (0-100)<br>Period: 2008<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 70 index (0-100)<br>Period: 2009<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 71 index (0-100)<br>Period: 2010<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 71 index (0-100)<br>Period: 2011<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 73 index (0-100)<br>Period: 2012<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 73 index (0-100)<br>Period: 2013<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 73 index (0-100)<br>Period: 2014<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 73 index (0-100)<br>Period: 2015<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 75 index (0-100)<br>Period: 2016<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 80 index (0-100)<br>Period: 2017<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 80 index (0-100)<br>Period: 2018<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 80 index (0-100)<br>Period: 2019<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 79 index (0-100)<br>Period: 2021<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [77, 77, 79, 80, 80, 79, 79, 78, 78.000000000000014, 76.000000000000014, 76, 76.000000000000014, 75, 76, 76, 80.999999999999986, 78, 82, 73.999999999999986],
      "text": ["Trade freedom index: 77 index (0-100)<br>Period: 2003<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 77 index (0-100)<br>Period: 2004<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 79 index (0-100)<br>Period: 2005<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 80 index (0-100)<br>Period: 2006<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 80 index (0-100)<br>Period: 2007<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 79 index (0-100)<br>Period: 2008<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 79 index (0-100)<br>Period: 2009<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 78 index (0-100)<br>Period: 2010<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 78 index (0-100)<br>Period: 2011<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 76 index (0-100)<br>Period: 2012<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 76 index (0-100)<br>Period: 2013<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 76 index (0-100)<br>Period: 2014<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 75 index (0-100)<br>Period: 2015<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 76 index (0-100)<br>Period: 2016<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 76 index (0-100)<br>Period: 2017<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 81 index (0-100)<br>Period: 2018<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 78 index (0-100)<br>Period: 2019<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 82 index (0-100)<br>Period: 2020<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Trade freedom index: 74 index (0-100)<br>Period: 2021<br>REMIND_62 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [76.999999999999986, 77, 77, 77, 83.999999999999972, 83.999999999999986, 84.999999999999986, 84.999999999999986, 84, 86.000000000000014, 86, 86, 85.999999999999972, 85.999999999999972, 85.999999999999972, 85.999999999999986, 87.999999999999986, 87.999999999999972, 90],
      "text": ["Trade freedom index: 77 index (0-100)<br>Period: 2003<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 77 index (0-100)<br>Period: 2004<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 77 index (0-100)<br>Period: 2005<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 77 index (0-100)<br>Period: 2006<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 84 index (0-100)<br>Period: 2007<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 84 index (0-100)<br>Period: 2008<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 85 index (0-100)<br>Period: 2009<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 85 index (0-100)<br>Period: 2010<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 84 index (0-100)<br>Period: 2011<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2012<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2013<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2014<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2015<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2016<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2017<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2018<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2019<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2020<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Trade freedom index: 90 index (0-100)<br>Period: 2021<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands"],
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
      "y": [63, 63.000000000000007, 65, 66, 71, 71, 72, 73, 73, 71.999999999999986, 72, 79.000000000000014, 81, 81, 81.999999999999986, 81.999999999999986, 76, 81, 77],
      "text": ["Trade freedom index: 63 index (0-100)<br>Period: 2003<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 63 index (0-100)<br>Period: 2004<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 65 index (0-100)<br>Period: 2005<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 66 index (0-100)<br>Period: 2006<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 71 index (0-100)<br>Period: 2007<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 71 index (0-100)<br>Period: 2008<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 72 index (0-100)<br>Period: 2009<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 73 index (0-100)<br>Period: 2010<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 73 index (0-100)<br>Period: 2011<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 72 index (0-100)<br>Period: 2012<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 72 index (0-100)<br>Period: 2013<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 79 index (0-100)<br>Period: 2014<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 81 index (0-100)<br>Period: 2015<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 81 index (0-100)<br>Period: 2016<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 82 index (0-100)<br>Period: 2017<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 82 index (0-100)<br>Period: 2018<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 76 index (0-100)<br>Period: 2019<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 81 index (0-100)<br>Period: 2020<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Trade freedom index: 77 index (0-100)<br>Period: 2021<br>REMIND_62 region code: COL<br>Countries in region: Colombia"],
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
      "y": [65, 65, 64.999999999999986, 69, 69, 86, 86, 86, 81, 80, 77.999999999999986, 78, 79, 77, 79, 76, 80, 80, 75],
      "text": ["Trade freedom index: 65 index (0-100)<br>Period: 2003<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 65 index (0-100)<br>Period: 2004<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 65 index (0-100)<br>Period: 2005<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 69 index (0-100)<br>Period: 2006<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 69 index (0-100)<br>Period: 2007<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 86 index (0-100)<br>Period: 2010<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 81 index (0-100)<br>Period: 2011<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 80 index (0-100)<br>Period: 2012<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 78 index (0-100)<br>Period: 2013<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 78 index (0-100)<br>Period: 2014<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 79 index (0-100)<br>Period: 2015<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 77 index (0-100)<br>Period: 2016<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 79 index (0-100)<br>Period: 2017<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 76 index (0-100)<br>Period: 2018<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 80 index (0-100)<br>Period: 2019<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Trade freedom index: 75 index (0-100)<br>Period: 2021<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan"],
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
      "y": [58.263313501397469, 60.547261167654526, 62.108348317400591, 63.781739434366713, 67.958676523348558, 67.689612781582099, 68.421237537736559, 67.528255242074664, 70.208695220083357, 69.444772438399653, 69.57055003212929, 70.98697719850702, 68.712519402181982, 69.147776152986395, 69.419976200204886, 70.042200036921102, 67.289452031543775, 67.130529919875656, 64.218947015049508],
      "text": ["Trade freedom index: 58.26 index (0-100)<br>Period: 2003<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 60.55 index (0-100)<br>Period: 2004<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 62.11 index (0-100)<br>Period: 2005<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 63.78 index (0-100)<br>Period: 2006<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.96 index (0-100)<br>Period: 2007<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.69 index (0-100)<br>Period: 2008<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 68.42 index (0-100)<br>Period: 2009<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.53 index (0-100)<br>Period: 2010<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 70.21 index (0-100)<br>Period: 2011<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 69.44 index (0-100)<br>Period: 2012<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 69.57 index (0-100)<br>Period: 2013<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 70.99 index (0-100)<br>Period: 2014<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 68.71 index (0-100)<br>Period: 2015<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 69.15 index (0-100)<br>Period: 2016<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 69.42 index (0-100)<br>Period: 2017<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 70.04 index (0-100)<br>Period: 2018<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.29 index (0-100)<br>Period: 2019<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.13 index (0-100)<br>Period: 2020<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 64.22 index (0-100)<br>Period: 2021<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [56.999999999999993, 62.999999999999993, 63.000000000000007, 63, 62.999999999999993, 44, 61, 68, 68.000000000000014, 68, 77, 75, 75, 72, 75, 79.000000000000014, 78, 78, 74],
      "text": ["Trade freedom index: 57 index (0-100)<br>Period: 2003<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 63 index (0-100)<br>Period: 2004<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 63 index (0-100)<br>Period: 2005<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 63 index (0-100)<br>Period: 2006<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 63 index (0-100)<br>Period: 2007<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 44 index (0-100)<br>Period: 2008<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 61 index (0-100)<br>Period: 2009<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 68 index (0-100)<br>Period: 2010<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 68 index (0-100)<br>Period: 2011<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 68 index (0-100)<br>Period: 2012<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 77 index (0-100)<br>Period: 2013<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 75 index (0-100)<br>Period: 2014<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 75 index (0-100)<br>Period: 2015<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 72 index (0-100)<br>Period: 2016<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 75 index (0-100)<br>Period: 2017<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 79 index (0-100)<br>Period: 2018<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 78 index (0-100)<br>Period: 2019<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 78 index (0-100)<br>Period: 2020<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 74 index (0-100)<br>Period: 2021<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [57.310056142065946, 57.919565267510741, 60.569839276750251, 59.640671216607537, 63.185494010199335, 63.204110470261554, 64.225749607052734, 62.427750317326257, 63.440025977033763, 63.932128604275974, 63.504848086871398, 63.535456483306525, 64.014536185654563, 61.520123575916564, 66.798958701551584, 66.520836622130531, 63.605107026986452, 63.619532950818694, 64.075683538924167],
      "text": ["Trade freedom index: 57.31 index (0-100)<br>Period: 2003<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Trade freedom index: 57.92 index (0-100)<br>Period: 2004<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Trade freedom index: 60.57 index (0-100)<br>Period: 2005<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Trade freedom index: 59.64 index (0-100)<br>Period: 2006<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Trade freedom index: 63.19 index (0-100)<br>Period: 2007<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Trade freedom index: 63.2 index (0-100)<br>Period: 2008<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Trade freedom index: 64.23 index (0-100)<br>Period: 2009<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 62.43 index (0-100)<br>Period: 2010<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 63.44 index (0-100)<br>Period: 2011<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 63.93 index (0-100)<br>Period: 2012<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 63.5 index (0-100)<br>Period: 2013<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 63.54 index (0-100)<br>Period: 2014<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 64.01 index (0-100)<br>Period: 2015<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 61.52 index (0-100)<br>Period: 2016<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 66.8 index (0-100)<br>Period: 2017<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 66.52 index (0-100)<br>Period: 2018<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 63.61 index (0-100)<br>Period: 2019<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 63.62 index (0-100)<br>Period: 2020<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Trade freedom index: 64.08 index (0-100)<br>Period: 2021<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [69.881871548923428, 68.941724688165635, 71.169187408998667, 70.761618832036362, 71.06454170468264, 69.97589785723099, 72.602090455915928, 72.2064686068491, 73.748967280460846, 74.290567268923269, 74.29037005058548, 73.910924364641616, 74.69681370228858, 75.001354162938497, 77.170430851180569, 76.598545349765146, 74.695211748776131, 73.286339794790393, 69.42392489783218],
      "text": ["Trade freedom index: 69.88 index (0-100)<br>Period: 2003<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 68.94 index (0-100)<br>Period: 2004<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 71.17 index (0-100)<br>Period: 2005<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 70.76 index (0-100)<br>Period: 2006<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 71.06 index (0-100)<br>Period: 2007<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 69.98 index (0-100)<br>Period: 2008<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 72.6 index (0-100)<br>Period: 2009<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 72.21 index (0-100)<br>Period: 2010<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 73.75 index (0-100)<br>Period: 2011<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 74.29 index (0-100)<br>Period: 2012<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 74.29 index (0-100)<br>Period: 2013<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 73.91 index (0-100)<br>Period: 2014<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 74.7 index (0-100)<br>Period: 2015<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 75 index (0-100)<br>Period: 2016<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 77.17 index (0-100)<br>Period: 2017<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 76.6 index (0-100)<br>Period: 2018<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 74.7 index (0-100)<br>Period: 2019<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 73.29 index (0-100)<br>Period: 2020<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 69.42 index (0-100)<br>Period: 2021<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [48, 54.999999999999993, 49.999999999999993, 58.000000000000007, 56, 63, 63, 69, 69, 80, 79, 79, 79, 83.000000000000014, 83, 79.000000000000014, 79, 80, 79],
      "text": ["Trade freedom index: 48 index (0-100)<br>Period: 2003<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 55 index (0-100)<br>Period: 2004<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 50 index (0-100)<br>Period: 2005<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 58 index (0-100)<br>Period: 2006<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 56 index (0-100)<br>Period: 2007<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 63 index (0-100)<br>Period: 2008<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 63 index (0-100)<br>Period: 2009<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 69 index (0-100)<br>Period: 2010<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 69 index (0-100)<br>Period: 2011<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 80 index (0-100)<br>Period: 2012<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 79 index (0-100)<br>Period: 2013<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 79 index (0-100)<br>Period: 2014<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 79 index (0-100)<br>Period: 2015<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 83 index (0-100)<br>Period: 2016<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 83 index (0-100)<br>Period: 2017<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 79 index (0-100)<br>Period: 2018<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 79 index (0-100)<br>Period: 2019<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Trade freedom index: 79 index (0-100)<br>Period: 2021<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [44, 56, 55.000000000000007, 59, 64, 65, 66, 67, 67, 66, 66, 65, 66, 65, 67, 66, 65, 65, 65],
      "text": ["Trade freedom index: 44 index (0-100)<br>Period: 2003<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 56 index (0-100)<br>Period: 2004<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 55 index (0-100)<br>Period: 2005<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 59 index (0-100)<br>Period: 2006<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 64 index (0-100)<br>Period: 2007<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 65 index (0-100)<br>Period: 2008<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 66 index (0-100)<br>Period: 2009<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 67 index (0-100)<br>Period: 2010<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 67 index (0-100)<br>Period: 2011<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 66 index (0-100)<br>Period: 2012<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 66 index (0-100)<br>Period: 2013<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 65 index (0-100)<br>Period: 2014<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 66 index (0-100)<br>Period: 2015<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 65 index (0-100)<br>Period: 2016<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 67 index (0-100)<br>Period: 2017<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 66 index (0-100)<br>Period: 2018<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 65 index (0-100)<br>Period: 2019<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 65 index (0-100)<br>Period: 2020<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Trade freedom index: 65 index (0-100)<br>Period: 2021<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [85, 84.999999999999986, 85, 85.000000000000014, 90, 90, 89.999999999999986, 90, 90, 90, 90, 90, 90, 90, 90, 90, 95.000000000000014, 95, 95],
      "text": ["Trade freedom index: 85 index (0-100)<br>Period: 2003<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 85 index (0-100)<br>Period: 2004<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 85 index (0-100)<br>Period: 2005<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 85 index (0-100)<br>Period: 2006<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2007<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2008<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2009<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2010<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2011<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2012<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2013<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2014<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2015<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2016<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2017<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 90 index (0-100)<br>Period: 2018<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 95 index (0-100)<br>Period: 2019<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 95 index (0-100)<br>Period: 2020<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Trade freedom index: 95 index (0-100)<br>Period: 2021<br>REMIND_62 region code: SGP<br>Countries in region: Singapore"],
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
      "y": [38, 38, 34, 47.999999999999993, 45.333333333333336, 42.666666666666664, 40.000000000000007, 58, 58, 54, 54, 59, 59, 64, 64, 61, 63.999999999999993, 64, 63],
      "text": ["Trade freedom index: 38 index (0-100)<br>Period: 2003<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 38 index (0-100)<br>Period: 2004<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 34 index (0-100)<br>Period: 2005<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 48 index (0-100)<br>Period: 2006<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 45.33 index (0-100)<br>Period: 2007<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 42.67 index (0-100)<br>Period: 2008<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 40 index (0-100)<br>Period: 2009<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 58 index (0-100)<br>Period: 2010<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 58 index (0-100)<br>Period: 2011<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 54 index (0-100)<br>Period: 2012<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 54 index (0-100)<br>Period: 2013<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 59 index (0-100)<br>Period: 2014<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 59 index (0-100)<br>Period: 2015<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 64 index (0-100)<br>Period: 2016<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 64 index (0-100)<br>Period: 2017<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 61 index (0-100)<br>Period: 2018<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 64 index (0-100)<br>Period: 2019<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 64 index (0-100)<br>Period: 2020<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Trade freedom index: 63 index (0-100)<br>Period: 2021<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [75, 74.000000000000014, 77, 75, 74, 73, 76.000000000000014, 77.999999999999986, 74, 74, 75, 75, 75, 80, 81, 81, 80, 81, 78.999999999999986],
      "text": ["Trade freedom index: 75 index (0-100)<br>Period: 2003<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 74 index (0-100)<br>Period: 2004<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 77 index (0-100)<br>Period: 2005<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 75 index (0-100)<br>Period: 2006<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 74 index (0-100)<br>Period: 2007<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 73 index (0-100)<br>Period: 2008<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 76 index (0-100)<br>Period: 2009<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 78 index (0-100)<br>Period: 2010<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 74 index (0-100)<br>Period: 2011<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 74 index (0-100)<br>Period: 2012<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 75 index (0-100)<br>Period: 2013<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 75 index (0-100)<br>Period: 2014<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 75 index (0-100)<br>Period: 2015<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 80 index (0-100)<br>Period: 2016<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 81 index (0-100)<br>Period: 2017<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 81 index (0-100)<br>Period: 2018<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 80 index (0-100)<br>Period: 2019<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 81 index (0-100)<br>Period: 2020<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 79 index (0-100)<br>Period: 2021<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [65, 65.999999999999986, 68, 68, 74, 75, 76.000000000000014, 76, 76, 75, 75, 75, 75, 78.000000000000014, 83, 83, 83, 83, 80],
      "text": ["Trade freedom index: 65 index (0-100)<br>Period: 2003<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 66 index (0-100)<br>Period: 2004<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 68 index (0-100)<br>Period: 2005<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 68 index (0-100)<br>Period: 2006<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 74 index (0-100)<br>Period: 2007<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 75 index (0-100)<br>Period: 2008<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 76 index (0-100)<br>Period: 2009<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 76 index (0-100)<br>Period: 2010<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 76 index (0-100)<br>Period: 2011<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 75 index (0-100)<br>Period: 2012<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 75 index (0-100)<br>Period: 2013<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 75 index (0-100)<br>Period: 2014<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 75 index (0-100)<br>Period: 2015<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 78 index (0-100)<br>Period: 2016<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 83 index (0-100)<br>Period: 2017<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 83 index (0-100)<br>Period: 2018<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 83 index (0-100)<br>Period: 2019<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 83 index (0-100)<br>Period: 2020<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Trade freedom index: 80 index (0-100)<br>Period: 2021<br>REMIND_62 region code: THA<br>Countries in region: Thailand"],
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
      "y": [81, 81, 81, 80, 80, 80, 82, 82, 83, 82, 82, 82, 83.000000000000014, 83, 83, 82, 79.999999999999986, 79.999999999999986, 80],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 81 index (0-100)<br>Period: 2004<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 81 index (0-100)<br>Period: 2005<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2006<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2007<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2008<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2009<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2010<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 83 index (0-100)<br>Period: 2011<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2013<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2014<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 83 index (0-100)<br>Period: 2015<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 83 index (0-100)<br>Period: 2016<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 83 index (0-100)<br>Period: 2017<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2018<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2019<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2021<br>REMIND_62 region code: JPN<br>Countries in region: Japan"],
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
      "y": [47.956087447065293, 49.975079040003187, 49.180847684092925, 52.074210978132214, 61.841287452322078, 63.110411953516845, 65.690346964348009, 66.753442264848204, 67.852988518956721, 68.066681197075937, 65.951649319788075, 61.782432832544956, 65.105623755680583, 63.995934301115462, 65.16643863676417, 65.763929779257964, 63.109019282413961, 63.369147533395669, 58.940690965187784],
      "text": ["Trade freedom index: 47.96 index (0-100)<br>Period: 2003<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Trade freedom index: 49.98 index (0-100)<br>Period: 2004<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Trade freedom index: 49.18 index (0-100)<br>Period: 2005<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 52.07 index (0-100)<br>Period: 2006<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 61.84 index (0-100)<br>Period: 2007<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 63.11 index (0-100)<br>Period: 2008<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 65.69 index (0-100)<br>Period: 2009<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 66.75 index (0-100)<br>Period: 2010<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 67.85 index (0-100)<br>Period: 2011<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 68.07 index (0-100)<br>Period: 2012<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 65.95 index (0-100)<br>Period: 2013<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 61.78 index (0-100)<br>Period: 2014<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 65.11 index (0-100)<br>Period: 2015<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 64 index (0-100)<br>Period: 2016<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 65.17 index (0-100)<br>Period: 2017<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 65.76 index (0-100)<br>Period: 2018<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 63.11 index (0-100)<br>Period: 2019<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 63.37 index (0-100)<br>Period: 2020<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 58.94 index (0-100)<br>Period: 2021<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [69, 73, 78.999999999999986, 78, 82, 82, 86, 88, 88.000000000000014, 82, 82, 82, 82, 86, 86, 89, 89, 89, 83],
      "text": ["Trade freedom index: 69 index (0-100)<br>Period: 2003<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 73 index (0-100)<br>Period: 2004<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 79 index (0-100)<br>Period: 2005<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 78 index (0-100)<br>Period: 2006<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 82 index (0-100)<br>Period: 2007<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 82 index (0-100)<br>Period: 2008<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 82 index (0-100)<br>Period: 2013<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 82 index (0-100)<br>Period: 2014<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 82 index (0-100)<br>Period: 2015<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 86 index (0-100)<br>Period: 2016<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 86 index (0-100)<br>Period: 2017<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 89 index (0-100)<br>Period: 2018<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 89 index (0-100)<br>Period: 2019<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 89 index (0-100)<br>Period: 2020<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Trade freedom index: 83 index (0-100)<br>Period: 2021<br>REMIND_62 region code: CHL<br>Countries in region: Chile"],
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
      "y": [78, 78, 78, 78, 84, 85, 88, 88, 88, 88, 88, 88, 88, 88, 87.999999999999986, 88.999999999999986, 87, 87, 87],
      "text": ["Trade freedom index: 78 index (0-100)<br>Period: 2003<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 78 index (0-100)<br>Period: 2004<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 78 index (0-100)<br>Period: 2005<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 78 index (0-100)<br>Period: 2006<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 84 index (0-100)<br>Period: 2007<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 85 index (0-100)<br>Period: 2008<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 88 index (0-100)<br>Period: 2009<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 88 index (0-100)<br>Period: 2012<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 88 index (0-100)<br>Period: 2013<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 88 index (0-100)<br>Period: 2017<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 89 index (0-100)<br>Period: 2018<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 87 index (0-100)<br>Period: 2019<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 87 index (0-100)<br>Period: 2020<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Trade freedom index: 87 index (0-100)<br>Period: 2021<br>REMIND_62 region code: ISL<br>Countries in region: Iceland"],
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
      "y": [74, 74, 76, 81, 81, 87, 87, 86, 85, 85, 85, 85, 85, 84, 78.999999999999986, 79, 80, 77.999999999999986, 76],
      "text": ["Trade freedom index: 74 index (0-100)<br>Period: 2003<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 74 index (0-100)<br>Period: 2004<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 76 index (0-100)<br>Period: 2005<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 81 index (0-100)<br>Period: 2006<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 81 index (0-100)<br>Period: 2007<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 87 index (0-100)<br>Period: 2008<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 87 index (0-100)<br>Period: 2009<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 86 index (0-100)<br>Period: 2010<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2011<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2012<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2013<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2014<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2015<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 84 index (0-100)<br>Period: 2016<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 79 index (0-100)<br>Period: 2017<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 79 index (0-100)<br>Period: 2018<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 80 index (0-100)<br>Period: 2019<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 78 index (0-100)<br>Period: 2020<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 76 index (0-100)<br>Period: 2021<br>REMIND_62 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [52.595406083879929, 52.130633022238221, 71.866464391062266, 71.182532017980378, 72.533649287055596, 71.212828099682838, 73.199170870877566, 73.635343812240279, 73.233811442271104, 73.178833043639841, 73.671367803750186, 72.940951287676128, 75.052012620380097, 71.950424709042565, 72.861209012943689, 71.044774215370396, 70.813309855214314, 73.428782943487434, 65.229634230168514],
      "text": ["Trade freedom index: 52.6 index (0-100)<br>Period: 2003<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 52.13 index (0-100)<br>Period: 2004<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 71.87 index (0-100)<br>Period: 2005<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 71.18 index (0-100)<br>Period: 2006<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 72.53 index (0-100)<br>Period: 2007<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 71.21 index (0-100)<br>Period: 2008<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 73.2 index (0-100)<br>Period: 2009<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 73.64 index (0-100)<br>Period: 2010<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 73.23 index (0-100)<br>Period: 2011<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 73.18 index (0-100)<br>Period: 2012<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 73.67 index (0-100)<br>Period: 2013<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 72.94 index (0-100)<br>Period: 2014<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 75.05 index (0-100)<br>Period: 2015<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 71.95 index (0-100)<br>Period: 2016<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 72.86 index (0-100)<br>Period: 2017<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 71.04 index (0-100)<br>Period: 2018<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 70.81 index (0-100)<br>Period: 2019<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 73.43 index (0-100)<br>Period: 2020<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 65.23 index (0-100)<br>Period: 2021<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [49, 63, 52, 58, 63.000000000000007, 62.999999999999993, 69.000000000000014, 62, 66, 66.000000000000014, 64, 64, 64, 65, 65, 61, 61, 61.000000000000007, 61],
      "text": ["Trade freedom index: 49 index (0-100)<br>Period: 2003<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 63 index (0-100)<br>Period: 2004<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 52 index (0-100)<br>Period: 2005<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 58 index (0-100)<br>Period: 2006<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 63 index (0-100)<br>Period: 2007<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 63 index (0-100)<br>Period: 2008<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 69 index (0-100)<br>Period: 2009<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 62 index (0-100)<br>Period: 2010<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 66 index (0-100)<br>Period: 2011<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 66 index (0-100)<br>Period: 2012<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 64 index (0-100)<br>Period: 2013<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 64 index (0-100)<br>Period: 2014<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 64 index (0-100)<br>Period: 2015<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 65 index (0-100)<br>Period: 2016<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 65 index (0-100)<br>Period: 2017<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 61 index (0-100)<br>Period: 2018<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 61 index (0-100)<br>Period: 2019<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 61 index (0-100)<br>Period: 2020<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Trade freedom index: 61 index (0-100)<br>Period: 2021<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [65.189335274455246, 63.80604443003574, 72.079555665363159, 72.360041110849892, 83.004142131161387, 86.194132408040659, 86.194895271396632, 87.831866629634092, 88.000000000000014, 87.097710801560268, 87.097475479020574, 87.902882333787446, 87.903564630877653, 87.904081068159044, 87.000000000000014, 87, 86, 86.000000000000028, 84],
      "text": ["Trade freedom index: 65.19 index (0-100)<br>Period: 2003<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 63.81 index (0-100)<br>Period: 2004<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 72.08 index (0-100)<br>Period: 2005<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 72.36 index (0-100)<br>Period: 2006<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 83 index (0-100)<br>Period: 2007<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 86.19 index (0-100)<br>Period: 2008<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 86.19 index (0-100)<br>Period: 2009<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.83 index (0-100)<br>Period: 2010<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.1 index (0-100)<br>Period: 2012<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.1 index (0-100)<br>Period: 2013<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.9 index (0-100)<br>Period: 2014<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.9 index (0-100)<br>Period: 2015<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.9 index (0-100)<br>Period: 2016<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [73, 78.999999999999986, 79, 54.999999999999993, 55, 56.999999999999993, 57, 50, 45, 46.000000000000007, 46.000000000000007, 41, 41.000000000000007, 55, 54.999999999999993, 55, 55.000000000000007, 55.000000000000007, 54],
      "text": ["Trade freedom index: 73 index (0-100)<br>Period: 2003<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 79 index (0-100)<br>Period: 2004<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 79 index (0-100)<br>Period: 2005<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2006<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2007<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 57 index (0-100)<br>Period: 2008<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 57 index (0-100)<br>Period: 2009<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 50 index (0-100)<br>Period: 2010<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 45 index (0-100)<br>Period: 2011<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 46 index (0-100)<br>Period: 2012<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 46 index (0-100)<br>Period: 2013<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 41 index (0-100)<br>Period: 2014<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 41 index (0-100)<br>Period: 2015<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2016<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2017<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2018<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2019<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2020<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 54 index (0-100)<br>Period: 2021<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [22.999999999999996, 24, 38, 24, 51, 51, 50.999999999999993, 68, 64, 64, 64, 66, 65, 71, 72.999999999999986, 72, 72, 73, 69],
      "text": ["Trade freedom index: 23 index (0-100)<br>Period: 2003<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 24 index (0-100)<br>Period: 2004<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 38 index (0-100)<br>Period: 2005<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 24 index (0-100)<br>Period: 2006<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 51 index (0-100)<br>Period: 2007<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 51 index (0-100)<br>Period: 2008<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 51 index (0-100)<br>Period: 2009<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 68 index (0-100)<br>Period: 2010<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 64 index (0-100)<br>Period: 2011<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 64 index (0-100)<br>Period: 2012<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 64 index (0-100)<br>Period: 2013<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 66 index (0-100)<br>Period: 2014<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 65 index (0-100)<br>Period: 2015<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 71 index (0-100)<br>Period: 2016<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 73 index (0-100)<br>Period: 2017<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 72 index (0-100)<br>Period: 2018<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 72 index (0-100)<br>Period: 2019<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 73 index (0-100)<br>Period: 2020<br>REMIND_62 region code: IND<br>Countries in region: India", "Trade freedom index: 69 index (0-100)<br>Period: 2021<br>REMIND_62 region code: IND<br>Countries in region: India"],
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
      "y": [81, 81, 80, 81, 86.999999999999986, 87, 87, 87.000000000000014, 86, 86, 86, 87, 87, 87.000000000000014, 87, 87, 87, 80, 80],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 81 index (0-100)<br>Period: 2004<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 81 index (0-100)<br>Period: 2006<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2008<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2009<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2010<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 86 index (0-100)<br>Period: 2011<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 86 index (0-100)<br>Period: 2012<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 86 index (0-100)<br>Period: 2013<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2014<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2015<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2016<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2019<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_62 region code: USA<br>Countries in region: United States", "Trade freedom index: 80 index (0-100)<br>Period: 2021<br>REMIND_62 region code: USA<br>Countries in region: United States"],
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
      "y": [62, 62, 61.999999999999993, 62.000000000000007, 62.000000000000007, 62, 61.999999999999993, 61.999999999999993, 63, 63.000000000000007, 63, 62.999999999999993, 62.999999999999993, 61.000000000000007, 65, 65, 63.000000000000007, 65, 63],
      "text": ["Trade freedom index: 62 index (0-100)<br>Period: 2003<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 62 index (0-100)<br>Period: 2004<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 62 index (0-100)<br>Period: 2005<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 62 index (0-100)<br>Period: 2006<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 62 index (0-100)<br>Period: 2007<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 62 index (0-100)<br>Period: 2008<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 62 index (0-100)<br>Period: 2009<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 62 index (0-100)<br>Period: 2010<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 63 index (0-100)<br>Period: 2011<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 63 index (0-100)<br>Period: 2012<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 63 index (0-100)<br>Period: 2013<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 63 index (0-100)<br>Period: 2014<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 63 index (0-100)<br>Period: 2015<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 61 index (0-100)<br>Period: 2016<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 65 index (0-100)<br>Period: 2017<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 65 index (0-100)<br>Period: 2018<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 63 index (0-100)<br>Period: 2019<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 65 index (0-100)<br>Period: 2020<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Trade freedom index: 63 index (0-100)<br>Period: 2021<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [81, 80, 80, 82, 87, 86, 86, 88, 88, 87, 87, 88, 88, 88, 87, 86.999999999999986, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: ESP<br>Countries in region: Spain"],
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
      "y": [70.000000000000014, 70, 79, 82, 87, 85.999999999999986, 86, 88, 88, 87, 87, 88, 88.000000000000014, 88, 87, 86.999999999999986, 86, 86, 84],
      "text": ["Trade freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 79 index (0-100)<br>Period: 2005<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: POL<br>Countries in region: Poland"],
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
      "y": [44.999999999999993, 45, 53, 51, 62, 63, 62.000000000000007, 67, 65, 64, 64, 64, 64, 65, 62, 66, 62, 61.999999999999993, 68],
      "text": ["Trade freedom index: 45 index (0-100)<br>Period: 2003<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 45 index (0-100)<br>Period: 2004<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 53 index (0-100)<br>Period: 2005<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 51 index (0-100)<br>Period: 2006<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 62 index (0-100)<br>Period: 2007<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 63 index (0-100)<br>Period: 2008<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 62 index (0-100)<br>Period: 2009<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 67 index (0-100)<br>Period: 2010<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 65 index (0-100)<br>Period: 2011<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 64 index (0-100)<br>Period: 2012<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 64 index (0-100)<br>Period: 2013<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 64 index (0-100)<br>Period: 2014<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 64 index (0-100)<br>Period: 2015<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 65 index (0-100)<br>Period: 2016<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 62 index (0-100)<br>Period: 2017<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 66 index (0-100)<br>Period: 2018<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 62 index (0-100)<br>Period: 2019<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 62 index (0-100)<br>Period: 2020<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Trade freedom index: 68 index (0-100)<br>Period: 2021<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [68, 62, 78.000000000000014, 78, 74, 74, 75, 76, 77, 76, 76, 76, 77.000000000000014, 77.000000000000014, 76.999999999999986, 72, 76, 76.000000000000014, 72.999999999999986],
      "text": ["Trade freedom index: 68 index (0-100)<br>Period: 2003<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 62 index (0-100)<br>Period: 2004<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 78 index (0-100)<br>Period: 2005<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 78 index (0-100)<br>Period: 2006<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 74 index (0-100)<br>Period: 2007<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 74 index (0-100)<br>Period: 2008<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 75 index (0-100)<br>Period: 2009<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2010<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 77 index (0-100)<br>Period: 2011<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2012<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2013<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2014<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 77 index (0-100)<br>Period: 2015<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 77 index (0-100)<br>Period: 2016<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 77 index (0-100)<br>Period: 2017<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 72 index (0-100)<br>Period: 2018<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2019<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2020<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 73 index (0-100)<br>Period: 2021<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [81, 80, 80, 82, 87, 86, 86.000000000000014, 88, 88, 87, 87.000000000000014, 88, 88.000000000000014, 88, 87, 87.000000000000014, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: DEU<br>Countries in region: Germany"],
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
      "y": [75.778385081042302, 75.413127774217813, 77.85870922939317, 81.999999999999986, 87.000000000000014, 86, 86, 88, 88.000000000000014, 87.000000000000014, 87, 87.999999999999986, 88, 87.999999999999986, 87, 87, 86, 86.000000000000014, 83.999999999999986],
      "text": ["Trade freedom index: 75.78 index (0-100)<br>Period: 2003<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 75.41 index (0-100)<br>Period: 2004<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 77.86 index (0-100)<br>Period: 2005<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [81, 80, 80, 82, 87, 86, 86, 88, 88, 87, 87, 87.999999999999986, 88, 88, 87, 87, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [81, 80, 80, 82, 87, 86, 86, 88.000000000000014, 88, 87, 87, 88, 88, 87.999999999999986, 86.999999999999986, 87, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [64, 64, 62, 70, 70, 77, 82, 83, 82, 82, 77, 74, 76, 77.999999999999986, 78, 78, 76, 75, 76],
      "text": ["Trade freedom index: 64 index (0-100)<br>Period: 2003<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 64 index (0-100)<br>Period: 2004<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 62 index (0-100)<br>Period: 2005<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 70 index (0-100)<br>Period: 2006<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 70 index (0-100)<br>Period: 2007<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 77 index (0-100)<br>Period: 2008<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 82 index (0-100)<br>Period: 2009<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 82 index (0-100)<br>Period: 2011<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 77 index (0-100)<br>Period: 2013<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 74 index (0-100)<br>Period: 2014<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 76 index (0-100)<br>Period: 2015<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 78 index (0-100)<br>Period: 2016<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 78 index (0-100)<br>Period: 2017<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 78 index (0-100)<br>Period: 2018<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 76 index (0-100)<br>Period: 2019<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 75 index (0-100)<br>Period: 2020<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 76 index (0-100)<br>Period: 2021<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [81, 79.999999999999986, 80, 81.999999999999986, 82.000000000000014, 81, 81, 83, 83, 82, 82, 82.999999999999986, 82.999999999999986, 82.999999999999986, 82, 82, 80.999999999999972, 80.999999999999986, 83.999999999999986],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2007<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 81 index (0-100)<br>Period: 2008<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 81 index (0-100)<br>Period: 2009<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2011<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2013<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2014<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2015<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2016<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2017<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2018<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 81 index (0-100)<br>Period: 2019<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 81 index (0-100)<br>Period: 2020<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [80.997098425484751, 79.997214400019828, 79.99792510189252, 81.997155651735937, 86.998248235435781, 85.998310246091577, 85.998322981832217, 87.99904918696096, 87.998867898504216, 86.998922574383897, 86.998929751120357, 87.998983775334224, 87.998945938692614, 87.99922677113608, 86.999367523530481, 86.999326436416425, 85.999374877040552, 85.999421652442777, 83.999332146651938],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [81, 80, 80, 82, 87, 86, 86, 88, 88, 86.999999999999986, 87, 87.999999999999986, 88.000000000000014, 88, 87, 87, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: AUT<br>Countries in region: Austria"],
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
      "y": [51.657911019467321, 51.675160232702375, 54.606860638609184, 68.359426872498418, 68.385230209447428, 70.424845718236625, 71.367252889044764, 72.335634154870831, 72.33521211770406, 72.318354899263937, 72.317833796086603, 72.33442056934399, 72.334431643313494, 73.311787419493953, 74.28898356959121, 73.311122704303287, 73.353882886458194, 72.358883693599239, 71.37995893240813],
      "text": ["Trade freedom index: 51.66 index (0-100)<br>Period: 2003<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 51.68 index (0-100)<br>Period: 2004<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 54.61 index (0-100)<br>Period: 2005<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 68.36 index (0-100)<br>Period: 2006<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 68.39 index (0-100)<br>Period: 2007<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 70.42 index (0-100)<br>Period: 2008<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 71.37 index (0-100)<br>Period: 2009<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.34 index (0-100)<br>Period: 2010<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.34 index (0-100)<br>Period: 2011<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.32 index (0-100)<br>Period: 2012<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.32 index (0-100)<br>Period: 2013<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.33 index (0-100)<br>Period: 2014<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.33 index (0-100)<br>Period: 2015<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 73.31 index (0-100)<br>Period: 2016<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 74.29 index (0-100)<br>Period: 2017<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 73.31 index (0-100)<br>Period: 2018<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 73.35 index (0-100)<br>Period: 2019<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.36 index (0-100)<br>Period: 2020<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 71.38 index (0-100)<br>Period: 2021<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [53.357373195276317, 55.260008631461574, 52.849981542605789, 63.847440174634265, 67.880717240523822, 68.621099123536879, 72.61942491030058, 73.048540012576993, 77.911792193289983, 79.787085868303848, 79.443459420023004, 78.039017473660408, 76.18235306864068, 74.426983127811638, 75.55482749857191, 74.865378329113568, 71.62786867780612, 71.415798918902439, 67.712253439284439],
      "text": ["Trade freedom index: 53.36 index (0-100)<br>Period: 2003<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Trade freedom index: 55.26 index (0-100)<br>Period: 2004<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Trade freedom index: 52.85 index (0-100)<br>Period: 2005<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Trade freedom index: 63.85 index (0-100)<br>Period: 2006<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 67.88 index (0-100)<br>Period: 2007<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 68.62 index (0-100)<br>Period: 2008<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Trade freedom index: 72.62 index (0-100)<br>Period: 2009<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Trade freedom index: 73.05 index (0-100)<br>Period: 2010<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Trade freedom index: 77.91 index (0-100)<br>Period: 2011<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Trade freedom index: 79.79 index (0-100)<br>Period: 2012<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 79.44 index (0-100)<br>Period: 2013<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 78.04 index (0-100)<br>Period: 2014<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 76.18 index (0-100)<br>Period: 2015<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 74.43 index (0-100)<br>Period: 2016<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Trade freedom index: 75.55 index (0-100)<br>Period: 2017<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Trade freedom index: 74.87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Trade freedom index: 71.63 index (0-100)<br>Period: 2019<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 71.42 index (0-100)<br>Period: 2020<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 67.71 index (0-100)<br>Period: 2021<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [81, 80.000000000000014, 80.000000000000014, 82, 81, 86, 86, 88, 88, 87, 87, 88, 88, 88, 87, 87, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 81 index (0-100)<br>Period: 2007<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [80.999999999999986, 79.999999999999986, 80, 82, 87, 86, 86, 87.999999999999972, 88, 87.000000000000014, 87, 87.999999999999986, 88.000000000000014, 87.999999999999986, 86.999999999999986, 87.000000000000014, 85.999999999999986, 85.999999999999986, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [80.889497231804569, 79.89637850178687, 79.972327493873138, 82, 82.034558906024259, 81.034554851761882, 81.034657364990665, 88, 88, 86.999999999999986, 87.000000000000014, 87.999999999999986, 87.999999999999986, 87.999999999999986, 87.000000000000014, 87, 86.000000000000014, 86, 83.999999999999986],
      "text": ["Trade freedom index: 80.89 index (0-100)<br>Period: 2003<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 79.9 index (0-100)<br>Period: 2004<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 79.97 index (0-100)<br>Period: 2005<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 82.03 index (0-100)<br>Period: 2007<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 81.03 index (0-100)<br>Period: 2008<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 81.03 index (0-100)<br>Period: 2009<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [81, 80, 80, 82, 87, 86, 86, 88, 87.999999999999986, 87, 87, 88, 88, 88, 87, 87, 86, 86, 83.999999999999986],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [81, 80, 79.999999999999986, 81.999999999999986, 87, 86.000000000000014, 86, 88, 88, 87, 87, 88.000000000000014, 88, 88, 87.000000000000014, 86.999999999999986, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [81, 80, 80, 82, 87, 86, 86, 87.999999999999986, 88, 87, 87, 87.999999999999986, 87.999999999999986, 88, 87, 87, 86, 86, 83.999999999999986],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [80.832391265344583, 79.914985914994176, 79.482935576391654, 82, 82, 81.000000000000014, 81.000000000000014, 83, 83, 82, 82, 83, 83.506421513929993, 83.51490196146986, 82.522224916508137, 82.529314117684009, 81.53574445841538, 81.542564665857725, 84],
      "text": ["Trade freedom index: 80.83 index (0-100)<br>Period: 2003<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 79.91 index (0-100)<br>Period: 2004<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 79.48 index (0-100)<br>Period: 2005<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82 index (0-100)<br>Period: 2007<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 81 index (0-100)<br>Period: 2008<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 81 index (0-100)<br>Period: 2009<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83 index (0-100)<br>Period: 2011<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82 index (0-100)<br>Period: 2013<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83 index (0-100)<br>Period: 2014<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83.51 index (0-100)<br>Period: 2015<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83.51 index (0-100)<br>Period: 2016<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82.52 index (0-100)<br>Period: 2017<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82.53 index (0-100)<br>Period: 2018<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 81.54 index (0-100)<br>Period: 2019<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 81.54 index (0-100)<br>Period: 2020<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "l": 35.799086757990878
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Trade freedom index (REMIND_62)",
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
      "range": [0, 100],
      "tickmode": "array",
      "ticktext": ["20", "40", "60", "80", "100"],
      "tickvals": [20, 40, 60, 80, 100],
      "categoryorder": "array",
      "categoryarray": ["20", "40", "60", "80", "100"],
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
        "text": "index (0-100)",
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
    "b55c2a317d00": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c287b4313": {
      "y": {}
    }
  },
  "cur_data": "b55c2a317d00",
  "visdat": {
    "b55c2a317d00": ["function (y) ", "x"],
    "b55c287b4313": ["function (y) ", "x"]
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

  
