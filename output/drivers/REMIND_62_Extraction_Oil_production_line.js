(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_62_Extraction_Oil_production_line') 

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
      "y": [740.25, 694.84999999999991, 664.69000000000005, 660.79999999999995, 653.17999999999995, 661.22000000000003, 628.80999999999983, 613.34000000000003, 576.02999999999997, 551.12, 539.94000000000005, 532.15999999999997, 532.24000000000001, 510.50999999999999, 479.63000000000005, 489.51000000000005, 507.39999999999998, 480.33999999999997, 507.69000000000005],
      "text": ["Oil production: 740.25 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 694.85 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 664.69 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 660.8 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 653.18 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 661.22 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 628.81 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 613.34 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 576.03 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 551.12 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 539.94 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 532.16 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 532.24 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 510.51 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 479.63 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 489.51 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 507.4 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 480.34 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Oil production: 507.69 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: ARG<br>Countries in region: Argentina"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein"],
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
      "y": [5.7135305296372181, 5.5774885976505457, 5.4812628621579345, 5.4738270064753074, 5.4606438332091463, 5.4457085786143509, 5.8669147582137242, 7.5144774750696097, 6.9465269409310721, 6.3220798049929785, 6.9514342014487731, 7.0901769146082119, 8.4834571152283296, 8.2844514560561731, 7.488340267851461, 7.0870439117854049, 7.0928654520553316, 6.8095038936269825, 6.3598418117857749],
      "text": ["Oil production: 5.71 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 5.58 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 5.48 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 5.47 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 5.46 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 5.45 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 5.87 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Oil production: 7.51 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Oil production: 6.95 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 6.32 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 6.95 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 7.09 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 8.48 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 8.28 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 7.49 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 7.09 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 7.09 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 6.81 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil production: 6.36 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [5.9999999999999991, 7, 7.0000000000000009, 9.0000000000000018, 10, 6, 5.3300000000000001, 10.839999999999998, 15.519999999999998, 16.84, 17.010000000000002, 20.510000000000002, 20.16, 22.75, 17, 16, 18, 17.260000000000002, 16.09],
      "text": ["Oil production: 6 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 7 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 7 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 9 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 10 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 6 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 5.33 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 10.84 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 15.52 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 16.84 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 17.01 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 20.51 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 20.16 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 22.75 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 17 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 16 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 18 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 17.26 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Oil production: 16.09 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: ALB<br>Countries in region: Albania"],
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
      "y": [72.60853918993854, 80.219614106684375, 79.645141823705799, 80.286795607219219, 76.366791187675389, 76.300101506309446, 72.480546045792835, 73.239476560603336, 73.892048226278575, 74.20828248277715, 76.203494618231076, 81.011582997828398, 77.670125064375981, 74.954449668819933, 72.698138502011702, 72.12677759932167, 74.036711636046562, 65.685567986387852, 64.587623247674671],
      "text": ["Oil production: 72.61 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 80.22 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 79.65 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 80.29 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 76.37 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 76.3 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 72.48 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 73.24 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 73.89 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 74.21 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 76.2 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 81.01 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 77.67 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 74.95 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 72.7 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 72.13 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 74.04 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 65.69 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil production: 64.59 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [685.51999999999998, 638.61000000000001, 617.60000000000002, 613.25, 628.46000000000004, 633.39999999999998, 648.71000000000004, 636.33000000000004, 637.44000000000005, 641.62, 644.91999999999996, 645.11000000000001, 682.3599999999999, 651.37999999999988, 626.86000000000001, 638.85000000000002, 622.63999999999999, 586.73000000000002, 560.94000000000005],
      "text": ["Oil production: 685.52 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 638.61 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 617.6 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 613.25 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 628.46 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 633.4 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 648.71 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 636.33 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 637.44 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 641.62 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 644.92 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 645.11 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 682.36 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 651.38 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 626.86 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 638.85 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 622.64 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 586.73 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Oil production: 560.94 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [1834.2000000000003, 1818.3499999999999, 1831.0599999999999, 1871.4200000000001, 1920.01, 2579.3099999999999, 2579.48, 2740.7600000000007, 2900.6500000000005, 3137.8400000000001, 3325.1300000000001, 3613.2199999999998, 3677.1300000000001, 3679.0500000000002, 3990.1099999999997, 4343.3599999999997, 4407.7600000000002, 4180.4399999999996, 4439.369999999999],
      "text": ["Oil production: 1834.2 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 1818.35 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 1831.06 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 1871.42 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 1920.01 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 2579.31 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 2579.48 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 2740.76 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 2900.65 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 3137.84 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 3325.13 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 3613.22 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 3677.13 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 3679.05 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 3990.11 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 4343.36 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 4407.76 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 4180.44 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Oil production: 4439.37 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: CAN<br>Countries in region: Canada"],
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
      "y": [23.390000000000001, 20.23, 18.510000000000002, 18.129999999999999, 41.669999999999995, 59.990000000000002, 55.890000000000001, 53.039999999999999, 46.32, 41.079999999999998, 35.270000000000003, 39.270000000000003, 41.280000000000001, 34.729999999999997, 20.859999999999999, 15.15, 15.699999999999999, 13.16, 11.369999999999999],
      "text": ["Oil production: 23.39 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 20.23 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 18.51 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 18.13 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 41.67 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 59.99 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 55.89 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 53.04 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 46.32 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 41.08 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 35.27 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 39.27 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 41.28 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 34.73 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 20.86 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 15.15 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 15.7 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 13.16 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Oil production: 11.37 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand"],
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
      "y": [3370.9000000000001, 3382.8999999999996, 3333.3499999999999, 3255.5799999999995, 3075.71, 2838.9899999999993, 2645.8400000000001, 2621.1400000000003, 2599.8499999999999, 2592.5100000000002, 2561.8600000000001, 2468.5500000000002, 2302.4900000000002, 2186.8699999999999, 1980.6799999999998, 1846.8900000000001, 1705.8499999999999, 1722.8, 1779.8499999999999],
      "text": ["Oil production: 3370.9 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 3382.9 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 3333.35 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 3255.58 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 3075.71 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 2838.99 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 2645.84 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 2621.14 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 2599.85 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 2592.51 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 2561.86 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 2468.55 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 2302.49 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 2186.87 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 1980.68 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 1846.89 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 1705.85 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 1722.8 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Oil production: 1779.85 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [3028.0853125255212, 2944.8992800470492, 2688.3558382268029, 2483.6290901125144, 2263.1642960658505, 2180.8092717757122, 2066.3313594396504, 1869.6264795544566, 1758.6068046960445, 1610.7444994338939, 1531.8943455357382, 1561.3982723387899, 1609.4721823096447, 1647.1706566908997, 1616.7419981740834, 1516.0659293613985, 1436.4491587352734, 1712.2313589513433, 1774.9658908734457],
      "text": ["Oil production: 3028.09 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 2944.9 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 2688.36 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 2483.63 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 2263.16 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 2180.81 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 2066.33 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1869.63 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1758.61 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1610.74 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1531.89 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1561.4 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1609.47 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1647.17 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1616.74 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1516.07 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1436.45 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1712.23 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil production: 1774.97 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [56.279999999999994, 59.899999999999999, 62.979999999999997, 66.819999999999993, 66.200000000000003, 61.460000000000008, 57.740000000000009, 51.099999999999994, 48.290000000000006, 45.63000000000001, 43.210000000000001, 40.490000000000002, 35.909999999999997, 32.07, 30.429999999999996, 32.590000000000003, 34.509999999999998, 33.589999999999996, 33.299999999999997],
      "text": ["Oil production: 56.28 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 59.9 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 62.98 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 66.82 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 66.2 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 61.46 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 57.74 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 51.1 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 48.29 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 45.63 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 43.21 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 40.49 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 35.91 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 32.07 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 30.43 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 32.59 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 34.51 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 33.59 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Oil production: 33.3 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: URY<br>Countries in region: Uruguay"],
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
      "y": [1499.7300000000002, 1484.2000000000003, 1638.8399999999999, 1727.3399999999999, 1751.5, 1812.2299999999998, 1950.3600000000001, 2054.6700000000001, 2105.4000000000001, 2061.23, 2023.8799999999999, 2254.5999999999999, 2437.4400000000001, 2509.9799999999996, 2621.7199999999993, 2586.5999999999999, 2787.7600000000002, 2939.9500000000003, 2905.1199999999994],
      "text": ["Oil production: 1499.73 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 1484.2 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 1638.84 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 1727.34 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 1751.5 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 1812.23 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 1950.36 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2054.67 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2105.4 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2061.23 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2023.88 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2254.6 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2437.44 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2509.98 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2621.72 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2586.6 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2787.76 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2939.95 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Oil production: 2905.12 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [2303.5, 2563.9099999999999, 2839.5500000000002, 2785.04, 2819.7299999999996, 2510, 2520, 2410, 2500, 2500, 2499.9999999999995, 2500.0000000000005, 2489.4699999999998, 2254.4499999999994, 1997.4100000000001, 1485.6199999999999, 877.66999999999996, 527.05999999999995, 594.81000000000006],
      "text": ["Oil production: 2303.5 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2563.91 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2839.55 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2785.04 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2819.73 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2510 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2520 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2410 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2500 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2500 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2500 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2500 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2489.47 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 2254.45 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 1997.41 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 1485.62 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 877.67 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 527.06 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Oil production: 594.81 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [14.999999999999998, 14.000000000000002, 17, 16, 18, 24.550000000000001, 35, 33, 34.000000000000007, 30, 35, 38.000000000000007, 24.120000000000005, 20, 3, 1.9999999999999998, 1, 0.97999999999999998, 0.94999999999999996],
      "text": ["Oil production: 15 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 14 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 17 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 16 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 18 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 24.55 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 35 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 33 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 34 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 30 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 35 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 38 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 24.12 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 20 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 3 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 2 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 1 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 0.98 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Oil production: 0.95 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [527.35307251803522, 448.40388630644605, 418.83839469199415, 436.32713970375141, 448.6268134514936, 459.24681613339203, 463.62758351123335, 478.5269166187789, 411.28500539510674, 405.33642361517195, 334.5446479350079, 353.32321632770584, 322.29692585437692, 289.72072960252586, 263.13384987992697, 283.60223423879688, 360.66520734870016, 351.15653989296294, 334.41817967992347],
      "text": ["Oil production: 527.35 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 448.4 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 418.84 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 436.33 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 448.63 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 459.25 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 463.63 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 478.53 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 411.29 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 405.34 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 334.54 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 353.32 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 322.3 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 289.72 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 263.13 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 283.6 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 360.67 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 351.16 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Oil production: 334.42 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands"],
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
      "y": [541.33000000000004, 527.60000000000002, 526.20000000000005, 527.35000000000002, 531.12, 588.36000000000001, 670.64999999999998, 785.39999999999986, 914.41999999999996, 944.32000000000005, 1005.79, 988.00999999999999, 1003.0199999999999, 885.96999999999991, 854.03999999999985, 865.47000000000003, 885.83000000000004, 781.08000000000004, 736.36000000000001],
      "text": ["Oil production: 541.33 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 527.6 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 526.2 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 527.35 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 531.12 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 588.36 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 670.65 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 785.4 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 914.42 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 944.32 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 1005.79 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 988.01 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 1003.02 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 885.97 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 854.04 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 865.47 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 885.83 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 781.08 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Oil production: 736.36 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: COL<br>Countries in region: Colombia"],
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
      "y": [1060.2999999999997, 1226.3900000000001, 1269.1199999999999, 1339.0999999999999, 1388.0699999999999, 1345.4200000000001, 1455.1500000000001, 1525.2, 1552.9400000000001, 1514.48, 1572.9000000000001, 1632.0799999999999, 1653.05, 1595.2000000000003, 1776.8099999999997, 1863.03, 1862.99, 1756.8, 1760.5899999999999],
      "text": ["Oil production: 1060.3 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1226.39 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1269.12 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1339.1 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1388.07 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1345.42 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1455.15 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1525.2 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1552.94 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1514.48 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1572.9 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1632.08 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1653.05 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1595.2 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1776.81 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1863.03 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1862.99 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1756.8 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Oil production: 1760.59 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan"],
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
      "y": [54.017576240554874, 60.096190888840489, 73.442642756290269, 82.830709054087322, 96.165986523845348, 113.62691031762378, 110.80548893786187, 113.10317252214355, 109.07367892971413, 111.68768951748059, 114.40678037010787, 112.87477769829087, 117.80816076392929, 116.47920806701951, 113.90391580887984, 112.21645948621314, 105.85921333135006, 94.199130215046864, 85.273734773716086],
      "text": ["Oil production: 54.02 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 60.1 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 73.44 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 82.83 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 96.17 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 113.63 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 110.81 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 113.1 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 109.07 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 111.69 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 114.41 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 112.87 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 117.81 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 116.48 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 113.9 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 112.22 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 105.86 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 94.2 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil production: 85.27 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [8494.1900000000005, 9239.1700000000001, 9490.9500000000007, 9572.1800000000003, 9862.3600000000006, 9356.7800000000007, 9495.3600000000006, 9694.1100000000006, 9773.5200000000004, 9921.6100000000006, 10053.84, 10107.090000000002, 10252.85, 10551.5, 10605.049999999999, 10758.549999999999, 10847.370000000001, 9865.4200000000019, 10111.83],
      "text": ["Oil production: 8494.19 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9239.17 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9490.95 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9572.18 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9862.36 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9356.78 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9495.36 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9694.11 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9773.52 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9921.61 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 10053.84 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 10107.09 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 10252.85 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 10551.5 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 10605.05 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 10758.55 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 10847.37 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 9865.42 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Oil production: 10111.83 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [162.89457994188294, 167.69245380263024, 163.22415897222677, 156.70618761619062, 155.41728317387197, 157.98105728951742, 151.48807105992543, 148.28163074371008, 133.93182698079923, 137.76255581648468, 137.04778754485443, 144.6354501446533, 155.54661047566856, 158.98926673034418, 156.3225322967929, 153.88984837222756, 144.18905290715716, 132.62300985579733, 121.71134476582348],
      "text": ["Oil production: 162.89 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 167.69 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 163.22 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 156.71 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 155.42 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 157.98 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 151.49 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 148.28 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 133.93 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 137.76 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 137.05 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 144.64 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 155.55 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 158.99 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 156.32 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 153.89 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 144.19 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil production: 132.62 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Oil production: 121.71 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [345.98000000000002, 365.89999999999998, 358.06, 352.74000000000001, 319.16000000000003, 301.75, 331.07999999999998, 299.08999999999992, 302.13, 331.04999999999995, 332.07999999999998, 306.82999999999998, 333.44, 301.85000000000002, 272.30000000000001, 240.75000000000003, 221.77999999999997, 193.31999999999996, 184.15000000000001],
      "text": ["Oil production: 345.98 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 365.9 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 358.06 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 352.74 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 319.16 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 301.75 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 331.08 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 299.09 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 302.13 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 331.05 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 332.08 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 306.83 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 333.44 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 301.85 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 272.3 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 240.75 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 221.78 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 193.32 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Oil production: 184.15 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [60.999999999999993, 65, 77.990000000000009, 80.290000000000006, 83.25, 63.659999999999997, 62.409999999999997, 65, 66, 71, 81, 94, 90.209999999999994, 85.499999999999986, 89.640000000000015, 89.569999999999993, 84.980000000000004, 74.090000000000003, 82.510000000000005],
      "text": ["Oil production: 61 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 65 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 77.99 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 80.29 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 83.25 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 63.66 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 62.41 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 65 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 66 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 71 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 81 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 94 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 90.21 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 85.5 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 89.64 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 89.57 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 84.98 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 74.09 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Oil production: 82.51 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: SGP<br>Countries in region: Singapore"],
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
      "y": [6, 5.9999999999999991, 6, 5.9999999999999991, 6, 5.6699999999999999, 5.0000000000000009, 4.9999999999999991, 4.9999999999999991, 4.6699999999999999, 4, 4, 4, 4, 3.6700000000000004, 3, 3, 3, 2.9999999999999996],
      "text": ["Oil production: 6 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 6 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 6 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 6 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 6 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 5.67 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 5 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 5 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 5 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 4.67 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 4 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 4 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 4 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 4 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 3.67 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 3 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 3 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 3 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Oil production: 3 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [1146.8900000000001, 1076.5600000000002, 1061.46, 1005.96, 954.29999999999995, 976.72000000000003, 948.79999999999995, 944.88999999999987, 902.04999999999995, 859.74000000000001, 828.24000000000001, 789, 785.75999999999999, 831.62, 801.76999999999998, 769.90999999999997, 742.13999999999999, 708.25999999999999, 658.63],
      "text": ["Oil production: 1146.89 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 1076.56 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 1061.46 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 1005.96 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 954.3 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 976.72 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 948.8 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 944.89 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 902.05 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 859.74 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 828.24 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 789 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 785.76 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 831.62 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 801.77 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 769.91 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 742.14 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 708.26 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Oil production: 658.63 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [158.97999999999999, 153.71999999999997, 183.38000000000002, 204.19999999999999, 213.40999999999997, 228.83000000000001, 237.94, 241.80000000000001, 224.13, 238.58000000000001, 240.75999999999996, 232.97999999999999, 248.16999999999999, 257.51999999999998, 239.66999999999996, 228.09999999999999, 228.31999999999999, 202.12000000000003, 176.97999999999999],
      "text": ["Oil production: 158.98 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 153.72 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 183.38 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 204.2 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 213.41 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 228.83 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 237.94 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 241.8 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 224.13 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 238.58 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 240.76 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 232.98 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 248.17 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 257.52 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 239.67 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 228.1 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 228.32 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 202.12 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Oil production: 176.98 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: THA<br>Countries in region: Thailand"],
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
      "y": [5.7599999999999998, 5.7000000000000011, 6.5599999999999996, 5.8200000000000003, 5.6600000000000001, 6, 5.3300000000000001, 4.9900000000000002, 5, 5, 4.6699999999999999, 4.75, 4.25, 3.9199999999999999, 3.6600000000000001, 3.3700000000000001, 4.1199999999999992, 4.339999999999999, 4.04],
      "text": ["Oil production: 5.76 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 5.7 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 6.56 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 5.82 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 5.66 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 6 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 5.33 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 4.99 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 5 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 5 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 4.67 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 4.75 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 4.25 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 3.92 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 3.66 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 3.37 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 4.12 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 4.34 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Oil production: 4.04 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: JPN<br>Countries in region: Japan"],
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
      "y": [449.50944753854765, 486.11820854480521, 504.10126950864998, 514.58554313829632, 543.31435810015694, 549.11223271685435, 518.55883876787152, 508.45648518555106, 453.01774890987537, 408.56683195857892, 385.09095312486431, 356.40635714694469, 352.6039302757851, 332.58179685346232, 336.63442521413498, 323.77621782052546, 327.32571338937476, 270.71265768258741, 297.23924394937825],
      "text": ["Oil production: 449.51 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil production: 486.12 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil production: 504.1 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 514.59 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 543.31 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 549.11 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 518.56 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 508.46 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 453.02 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 408.57 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 385.09 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 356.41 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 352.6 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 332.58 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 336.63 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 323.78 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 327.33 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 270.71 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil production: 297.24 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [3.6200000000000001, 3.5699999999999998, 3.3399999999999999, 2.8599999999999999, 2.5499999999999998, 3.0899999999999999, 3.6800000000000002, 4.1600000000000001, 4.5899999999999999, 6.0800000000000001, 6.6699999999999999, 6.5800000000000001, 6.2600000000000007, 4.4199999999999999, 3.3399999999999999, 3.1099999999999999, 3.2400000000000002, 1.5900000000000001, 1.8200000000000001],
      "text": ["Oil production: 3.62 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 3.57 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 3.34 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 2.86 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 2.55 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 3.09 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 3.68 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 4.16 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 4.59 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 6.08 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 6.67 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 6.58 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 6.26 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 4.42 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 3.34 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 3.11 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 3.24 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 1.59 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Oil production: 1.82 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: CHL<br>Countries in region: Chile"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: ISL<br>Countries in region: Iceland"],
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
      "y": [45.280000000000001, 43.240000000000009, 43.5, 41.600000000000001, 41.100000000000001, 41.579999999999998, 46.210000000000008, 48.340000000000003, 45.740000000000002, 44.759999999999998, 46.240000000000002, 47.670000000000002, 48.510000000000005, 49.5, 49.170000000000002, 54.910000000000004, 57.510000000000005, 61.520000000000003, 66.290000000000006],
      "text": ["Oil production: 45.28 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 43.24 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 43.5 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 41.6 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 41.1 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 41.58 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 46.21 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 48.34 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 45.74 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 44.76 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 46.24 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 47.67 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 48.51 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 49.5 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 49.17 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 54.91 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 57.51 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 61.52 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Oil production: 66.29 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [87.236910657774487, 88.257930104397275, 86.473540375289659, 103.86811297797294, 121.75413419153564, 112.28153083911343, 120.69155241120349, 127.27561947213839, 125.01874871152548, 123.0446709165611, 120.22174902504071, 117.02327160768895, 115.97092237578657, 112.31380331966079, 106.556977129483, 105.49807028421509, 100.84647532931672, 91.600139270601531, 92.731821622892497],
      "text": ["Oil production: 87.24 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil production: 88.26 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil production: 86.47 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil production: 103.87 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil production: 121.75 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil production: 112.28 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil production: 120.69 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil production: 127.28 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil production: 125.02 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil production: 123.04 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil production: 120.22 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil production: 117.02 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil production: 115.97 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil production: 112.31 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil production: 106.56 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil production: 105.5 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil production: 100.85 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil production: 91.6 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil production: 92.73 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [62.819194665808851, 59.517533138268675, 55.836652106656196, 51.741676441880244, 52.098281590296828, 49.224440183474442, 47.555706492591682, 45.439005502665218, 44.397601240500002, 43.064580405511585, 43.172344969635041, 42.263418630157162, 42.150066049595821, 40.490714593492932, 37.975876904935838, 37.856298985479448, 37.636952383539125, 36.414877942137942, 35.515254532888925],
      "text": ["Oil production: 62.82 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 59.52 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 55.84 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 51.74 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 52.1 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 49.22 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 47.56 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 45.44 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 44.4 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 43.06 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 43.17 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 42.26 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 42.15 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 40.49 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 37.98 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 37.86 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 37.64 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 36.41 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil production: 35.52 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [3861.96, 4063.1300000000001, 4068.2199999999998, 4116.3100000000004, 4211.9300000000003, 4050.2700000000004, 4037.04, 4080.4200000000001, 4054.0000000000005, 3386.8500000000004, 3113.3000000000002, 3239.0700000000002, 3293.1900000000005, 4151.1700000000001, 4452.5600000000004, 4212.4200000000001, 2933.3000000000002, 2643.8400000000001, 3110.2800000000002],
      "text": ["Oil production: 3861.96 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4063.13 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4068.22 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4116.31 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4211.93 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4050.27 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4037.04 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4080.42 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4054 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 3386.85 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 3113.3 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 3239.07 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 3293.19 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4151.17 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4452.56 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 4212.42 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 2933.3 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 2643.84 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil production: 3110.28 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [673.90999999999997, 694.20999999999992, 662.67999999999995, 686.51999999999998, 697.13999999999999, 693.71000000000004, 680.42999999999995, 751.29999999999995, 782.34000000000003, 779.14999999999998, 772.08000000000015, 767.5, 761.03999999999996, 734.5, 733.90999999999985, 709.35000000000002, 667.51999999999998, 627.41999999999996, 610.73000000000002],
      "text": ["Oil production: 673.91 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 694.21 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 662.68 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 686.52 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 697.14 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 693.71 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 680.43 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 751.3 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 782.34 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 779.15 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 772.08 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 767.5 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 761.04 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 734.5 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 733.91 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 709.35 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 667.52 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 627.42 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: IND<br>Countries in region: India", "Oil production: 610.73 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: IND<br>Countries in region: India"],
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
      "y": [5649.2399999999998, 5440.9200000000001, 5183.71, 5085.8699999999999, 5073.8999999999987, 4999.6700000000001, 5356.6999999999998, 5484.4000000000005, 5667.2299999999996, 6520.5900000000001, 7494.119999999999, 8789.3899999999994, 9446.4899999999998, 8851.5200000000023, 9371.3600000000006, 10964.09, 12248.02, 11307.559999999999, 11267.73],
      "text": ["Oil production: 5649.24 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 5440.92 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 5183.71 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 5085.87 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 5073.9 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 4999.67 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 5356.7 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 5484.4 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 5667.23 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 6520.59 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 7494.12 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 8789.39 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 9446.49 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 8851.52 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 9371.36 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 10964.09 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 12248.02 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 11307.56 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: USA<br>Countries in region: United States", "Oil production: 11267.73 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: USA<br>Countries in region: United States"],
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
      "y": [25, 26.999999999999996, 25, 24.000000000000004, 24, 19.960000000000001, 22, 21, 20.16, 20, 20, 20, 19.999999999999996, 20, 19, 25, 24, 22.999999999999996, 22],
      "text": ["Oil production: 25 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 27 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 25 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 24 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 24 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 19.96 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 22 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 21 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 20.16 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 20 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 20 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 20 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 20 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 20 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 19 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 25 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 24 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 23 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil production: 22 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [6.5600000000000005, 5.1799999999999997, 3.3899999999999997, 2.8399999999999994, 2.8999999999999999, 2.6699999999999999, 2.3399999999999999, 2.5699999999999998, 2.1699999999999999, 3, 7.3399999999999999, 6.25, 4.6500000000000004, 2.6699999999999999, 2.3999999999999999, 1.8, 0.81999999999999995, 0.55000000000000004, 0.12],
      "text": ["Oil production: 6.56 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 5.18 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 3.39 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 2.84 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 2.9 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 2.67 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 2.34 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 2.57 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 2.17 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 3 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 7.34 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 6.25 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 4.65 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 2.67 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 2.4 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 1.8 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 0.82 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 0.55 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Oil production: 0.12 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: ESP<br>Countries in region: Spain"],
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
      "y": [14.52, 16.800000000000001, 15.98, 14.92, 13.41, 14.169999999999998, 12.409999999999998, 12.909999999999998, 12.49, 13.4, 19.219999999999999, 19.260000000000002, 18.420000000000002, 20.100000000000001, 20, 20.309999999999995, 19.5, 18.77, 17.829999999999998],
      "text": ["Oil production: 14.52 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 16.8 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 15.98 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 14.92 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 13.41 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 14.17 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 12.41 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 12.91 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 12.49 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 13.4 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 19.22 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 19.26 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 18.42 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 20.1 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 20 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 20.31 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 19.5 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 18.77 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Oil production: 17.83 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: POL<br>Countries in region: Poland"],
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
      "y": [2210.7600000000002, 2392.9899999999998, 2469.0999999999999, 2325.5100000000002, 2207.0599999999999, 2165.4400000000001, 2208.3099999999999, 2408.0300000000002, 2473.75, 2457.1100000000001, 2307.3200000000006, 2347.1799999999998, 2171.1599999999999, 1871.2, 1945.9000000000001, 1909.6400000000001, 1945.6400000000003, 1774.6300000000001, 1522.5599999999999],
      "text": ["Oil production: 2210.76 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2392.99 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2469.1 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2325.51 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2207.06 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2165.44 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2208.31 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2408.03 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2473.75 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2457.11 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2307.32 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2347.18 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 2171.16 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 1871.2 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 1945.9 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 1909.64 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 1945.64 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 1774.63 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Oil production: 1522.56 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [12.929999999999998, 35.159999999999997, 15.480000000000002, 15.919999999999998, 16.059999999999995, 14.58, 4, 3.4900000000000002, 4, 3.9100000000000001, 3.5800000000000001, 2.9999999999999996, 3.0000000000000004, 2, 1.8500000000000001, 1.52, 1.24, 1.0200000000000002, 0.94999999999999996],
      "text": ["Oil production: 12.93 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 35.16 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 15.48 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 15.92 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 16.06 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 14.58 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 4 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 3.49 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 4 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 3.91 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 3.58 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 3 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 3 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 2 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 1.85 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 1.52 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 1.24 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 1.02 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Oil production: 0.95 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [72.810000000000002, 68.140000000000001, 68.449999999999989, 66.709999999999994, 66.299999999999997, 60, 55.000000000000007, 49, 51, 51, 51.560000000000002, 48.090000000000003, 48.060000000000002, 46.589999999999996, 43.460000000000001, 40.660000000000004, 37.710000000000001, 37.429999999999993, 35.979999999999997],
      "text": ["Oil production: 72.81 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 68.14 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 68.45 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 66.71 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 66.3 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 60 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 55 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 49 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 51 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 51 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 51.56 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 48.09 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 48.06 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 46.59 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 43.46 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 40.66 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 37.71 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 37.43 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Oil production: 35.98 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: DEU<br>Countries in region: Germany"],
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
      "y": [3.9890161965367645, 3.8642829856360899, 3.6485067896289456, 3.0974740931263303, 2.8240082841521574, 2.8005372914503206, 2.3049010829908458, 2.0040943589606179, 1.7689075123483091, 1.7333312371940868, 1.7348251741830369, 1.736535637865573, 1.6621201618354338, 1.4201083164172674, 1.3490536782766065, 1.2399791421429538, 0.92489199072202666, 0.99529533948971349, 0.9197203645271943],
      "text": ["Oil production: 3.99 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 3.86 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 3.65 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 3.1 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 2.82 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 2.8 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 2.3 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 2 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 1.77 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 1.73 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 1.73 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 1.74 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 1.66 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 1.42 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 1.35 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 1.24 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 0.92 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 1 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil production: 0.92 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: IRL<br>Countries in region: Ireland"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [9067.9099999999999, 9291.4500000000007, 9779.9099999999999, 9642.1200000000008, 9190.0900000000001, 9261.25, 8250.1100000000006, 8417.0100000000002, 9620.2900000000009, 9996.5799999999981, 9872.8700000000008, 9905.3199999999997, 10335.620000000001, 10634.709999999999, 10305.42, 10598.139999999999, 9980.8999999999996, 9405.6700000000001, 9313.1399999999994],
      "text": ["Oil production: 9067.91 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9291.45 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9779.91 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9642.12 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9190.09 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9261.25 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 8250.11 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 8417.01 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9620.29 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9996.58 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9872.87 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9905.32 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 10335.62 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 10634.71 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 10305.42 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 10598.14 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9980.9 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9405.67 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Oil production: 9313.14 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [24.557498482560675, 22.907698000137593, 21.647855801670438, 21.397907407430889, 19.558102661891869, 19.49812039972457, 18.148260352344831, 18.078275749663479, 17.828309551748454, 16.24847136177058, 15.998507971180631, 15.338579993855683, 16.668465108843289, 16.4184953098985, 15.198612960614337, 15.558588085950387, 14.558687424741944, 12.938840978327955, 13.028841491307068],
      "text": ["Oil production: 24.56 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 22.91 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 21.65 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 21.4 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 19.56 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 19.5 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 18.15 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 18.08 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 17.83 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 16.25 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 16 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 15.34 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 16.67 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 16.42 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 15.2 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 15.56 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 14.56 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 12.94 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil production: 13.03 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [2064.9266794548839, 1843.9839040812142, 1643.2770859139637, 1484.8372466358983, 1492.496631656976, 1383.9309590555567, 1320.68867826428, 1226.5940418925215, 1020.9470593223386, 883.35665266518242, 797.03053200838679, 783.0507003117508, 888.55403356479496, 928.13129566898147, 908.61028442760494, 997.64869865786829, 1023.6624455805907, 945.81321839323175, 804.67287377444086],
      "text": ["Oil production: 2064.93 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 1843.98 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 1643.28 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 1484.84 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 1492.5 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 1383.93 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 1320.69 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 1226.59 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 1020.95 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 883.36 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 797.03 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 783.05 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 888.55 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 928.13 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 908.61 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 997.65 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 1023.66 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 945.81 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil production: 804.67 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [17.68, 17.239999999999998, 16.5, 16.530000000000001, 16.460000000000001, 16.079999999999998, 16.32, 16.75, 17.66, 16.920000000000002, 16.16, 17.170000000000002, 16.5, 15.16, 14.18, 13.27, 12.539999999999999, 10.82, 10.84],
      "text": ["Oil production: 17.68 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 17.24 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 16.5 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 16.53 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 16.46 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 16.08 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 16.32 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 16.75 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 17.66 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 16.92 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 16.16 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 17.17 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 16.5 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 15.16 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 14.18 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 13.27 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 12.54 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 10.82 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Oil production: 10.84 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: AUT<br>Countries in region: Austria"],
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
      "y": [3280.9192358284622, 3395.5608796300548, 3512.5975017718324, 3540.7699218710236, 3599.0217748994719, 3704.8891876758835, 3710.8034000418274, 3987.0290461241389, 3961.4551828722606, 3983.0351452083214, 4070.9482826619196, 4114.4578582010945, 4182.3790323565081, 3894.8438529818163, 3736.6283565748422, 3702.9690947714139, 3740.1178515570368, 3802.7889280285049, 3899.4557975656498],
      "text": ["Oil production: 3280.92 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3395.56 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3512.6 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3540.77 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3599.02 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3704.89 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3710.8 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3987.03 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3961.46 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3983.04 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 4070.95 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 4114.46 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 4182.38 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3894.84 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3736.63 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3702.97 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3740.12 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3802.79 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil production: 3899.46 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [759.65553335937773, 926.11472180371891, 881.89243597610039, 899.22926691794612, 922.6221770885079, 1001.5604824080508, 992.14847225805511, 1002.3441676257237, 1069.9707384348599, 1147.3975075373505, 1163.2297200351434, 1260.7437270954395, 1456.9775558022866, 1578.2451077686105, 1579.3818100640899, 1633.8443110301957, 1677.4757124230955, 1469.6521017331356, 1468.3468670080065],
      "text": ["Oil production: 759.66 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil production: 926.11 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil production: 881.89 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil production: 899.23 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil production: 922.62 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil production: 1001.56 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil production: 992.15 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil production: 1002.34 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil production: 1069.97 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil production: 1147.4 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil production: 1163.23 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil production: 1260.74 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil production: 1456.98 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil production: 1578.25 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil production: 1579.38 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil production: 1633.84 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil production: 1677.48 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil production: 1469.65 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil production: 1468.35 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [367.18169886619114, 406.72585953837307, 380.73275347229895, 342.02818429119179, 311.25963237448599, 281.14289136046534, 255.12454105737723, 240.77843802630167, 217.04209171767818, 198.51858040649344, 172.18836445027074, 162.23940855029696, 153.4840406889663, 138.09295132044031, 134.60673642480566, 113.16951406597607, 100.2083352677831, 70.100435234200319, 62.938250125152919],
      "text": ["Oil production: 367.18 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 406.73 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 380.73 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 342.03 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 311.26 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 281.14 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 255.12 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 240.78 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 217.04 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 198.52 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 172.19 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 162.24 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 153.48 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 138.09 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 134.61 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 113.17 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 100.21 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 70.1 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil production: 62.94 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [89.775659359695766, 101.53371586817921, 113.72773614958807, 109.45700099439298, 107.0151864573653, 98.762703998456345, 82.206212665214792, 95.343294862244775, 98.489558237423608, 100.26268833348107, 101.06527889859392, 105.53556713611124, 99.480971831677749, 70.1431744440101, 76.915380278354931, 88.787851652347157, 77.01010107442012, 99.755127805177509, 95.918891770225741],
      "text": ["Oil production: 89.78 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 101.53 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 113.73 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 109.46 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 107.02 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 98.76 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 82.21 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 95.34 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 98.49 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 100.26 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 101.07 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 105.54 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 99.48 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 70.14 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 76.92 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 88.79 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 77.01 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 99.76 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Oil production: 95.92 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [44.759999999999998, 40.799999999999997, 28.969999999999999, 26.219999999999995, 40.189999999999998, 33.510000000000005, 25.48, 20, 22.25, 20.829999999999998, 21.989999999999998, 29.469999999999999, 27.300000000000001, 18.09, 13.94, 13.52, 18.16, 32.729999999999997, 32.719999999999999],
      "text": ["Oil production: 44.76 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 40.8 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 28.97 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 26.22 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 40.19 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 33.51 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 25.48 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 20 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 22.25 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 20.83 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 21.99 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 29.47 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 27.3 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 18.09 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 13.94 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 13.52 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 18.16 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 32.73 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Oil production: 32.72 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "text": ["Oil production: 0 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil production: 0 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [2.1805456057600567, 2.1410670410863895, 1.6083277690748883, 1.5059154121234506, 1.3307913309150334, 0.91034284457213643, 1.0637522228337868, 2.1154700303049427, 1.5862338948912906, 1.5106103227672654, 1.1281911401546747, 1.0447309002470107, 0.97061295299112116, 2.8435521564281214, 2.5165095969224298, 3.6480796799698494, 2.9910512128616875, 1.6135915909595042, 1.36933133140106],
      "text": ["Oil production: 2.18 thousand barrels per day<br>Period: 2003<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 2.14 thousand barrels per day<br>Period: 2004<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.61 thousand barrels per day<br>Period: 2005<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.51 thousand barrels per day<br>Period: 2006<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.33 thousand barrels per day<br>Period: 2007<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 0.91 thousand barrels per day<br>Period: 2008<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.06 thousand barrels per day<br>Period: 2009<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 2.12 thousand barrels per day<br>Period: 2010<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.59 thousand barrels per day<br>Period: 2011<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.51 thousand barrels per day<br>Period: 2012<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.13 thousand barrels per day<br>Period: 2013<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.04 thousand barrels per day<br>Period: 2014<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 0.97 thousand barrels per day<br>Period: 2015<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 2.84 thousand barrels per day<br>Period: 2016<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 2.52 thousand barrels per day<br>Period: 2017<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 3.65 thousand barrels per day<br>Period: 2018<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 2.99 thousand barrels per day<br>Period: 2019<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.61 thousand barrels per day<br>Period: 2020<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil production: 1.37 thousand barrels per day<br>Period: 2021<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Oil production (REMIND_62)",
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
      "range": [0, 12248.02],
      "tickmode": "array",
      "ticktext": ["0", "2500", "5000", "7500", "10000", "12500"],
      "tickvals": [0, 2500, 5000, 7499.9999999999991, 10000, 12500],
      "categoryorder": "array",
      "categoryarray": ["0", "2500", "5000", "7500", "10000", "12500"],
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
        "text": "thousand barrels per day",
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
    "b55c6d694e66": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c408149a9": {
      "y": {}
    }
  },
  "cur_data": "b55c6d694e66",
  "visdat": {
    "b55c6d694e66": ["function (y) ", "x"],
    "b55c408149a9": ["function (y) ", "x"]
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

  
