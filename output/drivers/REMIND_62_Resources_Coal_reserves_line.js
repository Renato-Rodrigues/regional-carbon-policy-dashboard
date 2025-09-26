(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_62_Resources_Coal_reserves_line') 

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
      "y": [467.38, 467.37999999999994, 467.37999999999994, 467.38, 467.38, 467.38, 551.15999999999997, 551.15999999999997, 551.15999999999997, 551.15999999999997, 551.15999999999997, 551.15999999999997, 551.16000000000008, 551.15999999999997, 551.16000000000008, 551.15999999999997, 551.15999999999997, 551.15999999999997, 551.16000000000008],
      "text": ["Coal reserves: 467.38 million short tons<br>Period: 2003<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 467.38 million short tons<br>Period: 2004<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 467.38 million short tons<br>Period: 2005<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 467.38 million short tons<br>Period: 2006<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 467.38 million short tons<br>Period: 2007<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 467.38 million short tons<br>Period: 2008<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2009<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2010<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2011<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2012<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2013<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2014<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2015<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2016<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2017<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2018<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2019<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2020<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Coal reserves: 551.16 million short tons<br>Period: 2021<br>REMIND_62 region code: ARG<br>Countries in region: Argentina"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein"],
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
      "y": [3979.0793742458068, 3981.4602540586193, 3984.3314382872677, 3985.3190388675753, 3985.9954714107289, 3985.4956880572981, 3988.9857333212972, 3992.1980911348446, 3937.1678110708904, 3888.4100874903111, 3890.6791329604212, 3886.5100912584899, 3880.9368723046991, 3880.4748256039425, 3887.7784805997821, 3894.0266087029563, 3898.2526975407241, 3900.2684638703454, 3902.7349029641869],
      "text": ["Coal reserves: 3979.08 million short tons<br>Period: 2003<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3981.46 million short tons<br>Period: 2004<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3984.33 million short tons<br>Period: 2005<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3985.32 million short tons<br>Period: 2006<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3986 million short tons<br>Period: 2007<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3985.5 million short tons<br>Period: 2008<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3988.99 million short tons<br>Period: 2009<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Coal reserves: 3992.2 million short tons<br>Period: 2010<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Coal reserves: 3937.17 million short tons<br>Period: 2011<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3888.41 million short tons<br>Period: 2012<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3890.68 million short tons<br>Period: 2013<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3886.51 million short tons<br>Period: 2014<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3880.94 million short tons<br>Period: 2015<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3880.47 million short tons<br>Period: 2016<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3887.78 million short tons<br>Period: 2017<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3894.03 million short tons<br>Period: 2018<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3898.25 million short tons<br>Period: 2019<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3900.27 million short tons<br>Period: 2020<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 3902.73 million short tons<br>Period: 2021<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [875.23000000000002, 875.23000000000002, 875.23000000000002, 875.23000000000002, 875.23000000000002, 875.23000000000002, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997, 575.40999999999997],
      "text": ["Coal reserves: 875.23 million short tons<br>Period: 2003<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 875.23 million short tons<br>Period: 2004<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 875.23 million short tons<br>Period: 2005<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 875.23 million short tons<br>Period: 2006<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 875.23 million short tons<br>Period: 2007<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 875.23 million short tons<br>Period: 2008<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2009<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2010<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2011<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2012<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2013<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2014<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2015<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2016<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2017<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2018<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2019<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2020<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Coal reserves: 575.41 million short tons<br>Period: 2021<br>REMIND_62 region code: ALB<br>Countries in region: Albania"],
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
      "y": [25.74121332190516, 25.685961476161228, 25.631677867204061, 25.554562064919391, 25.467056404785243, 25.368861448397585, 25.266412807501197, 25.177674695911325, 25.10862655147708, 25.048524800867611, 25.002397226385693, 24.979804931368566, 24.984635705099794, 25.028587624798242, 25.104701067917738, 25.252194271155254, 25.371494404321613, 25.395939191500002, 25.41175796375385],
      "text": ["Coal reserves: 25.74 million short tons<br>Period: 2003<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.69 million short tons<br>Period: 2004<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.63 million short tons<br>Period: 2005<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.55 million short tons<br>Period: 2006<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.47 million short tons<br>Period: 2007<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.37 million short tons<br>Period: 2008<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.27 million short tons<br>Period: 2009<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.18 million short tons<br>Period: 2010<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.11 million short tons<br>Period: 2011<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.05 million short tons<br>Period: 2012<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25 million short tons<br>Period: 2013<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 24.98 million short tons<br>Period: 2014<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 24.98 million short tons<br>Period: 2015<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.03 million short tons<br>Period: 2016<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.1 million short tons<br>Period: 2017<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.25 million short tons<br>Period: 2018<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.37 million short tons<br>Period: 2019<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.4 million short tons<br>Period: 2020<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 25.41 million short tons<br>Period: 2021<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000004, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001, 17.640000000000001],
      "text": ["Coal reserves: 17.64 million short tons<br>Period: 2003<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2004<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2005<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2006<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2007<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2008<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2009<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2010<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2011<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2012<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2013<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2014<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2015<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2016<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2017<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2018<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2019<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2020<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Coal reserves: 17.64 million short tons<br>Period: 2021<br>REMIND_62 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999987, 7255.3999999999987, 7255.3999999999996, 7255.4000000000005, 7255.3999999999996, 7255.3999999999987],
      "text": ["Coal reserves: 7255.4 million short tons<br>Period: 2003<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2004<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2005<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2006<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2007<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2008<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2009<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2010<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2011<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2012<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2013<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2014<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2015<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2016<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2017<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2018<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2019<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2020<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2021<br>REMIND_62 region code: CAN<br>Countries in region: Canada"],
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
      "y": [8350, 8349.9999999999982, 8350, 8350, 8350, 8350, 8350, 8350.0000000000018, 8350, 8350, 8349.9999999999982, 8349.9999999999982, 8350, 8350, 8349.9999999999982, 8350, 8350.0000000000018, 8350.0000000000018, 8350],
      "text": ["Coal reserves: 8350 million short tons<br>Period: 2003<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2004<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2005<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2006<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2007<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2008<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2009<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2010<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2011<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2012<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2013<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2014<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2015<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2016<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2017<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2018<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2019<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2020<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Coal reserves: 8350 million short tons<br>Period: 2021<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand"],
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
      "y": [1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.8999999999999, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000003, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.8999999999999, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001],
      "text": ["Coal reserves: 1334.9 million short tons<br>Period: 2003<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2004<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2005<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2006<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2007<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2008<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2009<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2010<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2011<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2012<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2013<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2014<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2015<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2016<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2017<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2018<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2019<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2020<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2021<br>REMIND_62 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [26.446072644446044, 26.446074072203817, 26.446088505515789, 26.446041242193829, 26.446027696082957, 26.446045450505672, 26.446066967898712, 19.829568618985473, 16.521420888438676, 14.322659690170269, 13.223304554429733, 8.8855513712196039, 5.8670916741649641, 2.8486003298395999, 1.0994641199801498, 2.1989352878395811, 2.1989424476513086, 2.1989486528081232, 2.1989542574496039],
      "text": ["Coal reserves: 26.45 million short tons<br>Period: 2003<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2004<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2005<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2006<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2007<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2008<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2009<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 19.83 million short tons<br>Period: 2010<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 16.52 million short tons<br>Period: 2011<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 14.32 million short tons<br>Period: 2012<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 13.22 million short tons<br>Period: 2013<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 8.89 million short tons<br>Period: 2014<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 5.87 million short tons<br>Period: 2015<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.85 million short tons<br>Period: 2016<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 1.1 million short tons<br>Period: 2017<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.2 million short tons<br>Period: 2018<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.2 million short tons<br>Period: 2019<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.2 million short tons<br>Period: 2020<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.2 million short tons<br>Period: 2021<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000011, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003, 37891.910000000003],
      "text": ["Coal reserves: 37891.91 million short tons<br>Period: 2003<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2004<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2005<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2006<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2007<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2008<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2009<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2010<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2011<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2012<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2013<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2014<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2015<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2016<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2017<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2018<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2019<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2020<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Coal reserves: 37891.91 million short tons<br>Period: 2021<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: URY<br>Countries in region: Uruguay"],
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
      "y": [7270.8400000000011, 7270.8400000000001, 7270.8400000000001, 7270.8400000000001, 7270.8400000000001, 7270.8400000000001, 7270.8400000000001, 7270.8400000000001, 7270.8400000000011, 7270.8399999999992, 7270.8399999999992, 7270.8399999999992, 7270.8399999999992, 7270.8399999999992, 7270.8399999999992, 7270.8400000000011, 7270.8399999999992, 7270.8400000000011, 7270.8399999999992],
      "text": ["Coal reserves: 7270.84 million short tons<br>Period: 2003<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2004<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2005<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2006<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2007<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2008<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2009<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2010<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2011<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2012<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2013<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2014<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2015<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2016<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2017<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2018<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2019<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2020<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2021<br>REMIND_62 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [936.96000000000015, 936.96000000000004, 936.96000000000004, 936.96000000000004, 936.96000000000004, 936.95999999999992, 936.95999999999992, 936.96000000000004, 805.78999999999996, 805.78999999999996, 805.78999999999996, 805.78999999999996, 805.78999999999996, 805.78999999999985, 805.78999999999996, 805.78999999999996, 805.78999999999996, 805.78999999999996, 805.78999999999996],
      "text": ["Coal reserves: 936.96 million short tons<br>Period: 2003<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 936.96 million short tons<br>Period: 2004<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 936.96 million short tons<br>Period: 2005<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 936.96 million short tons<br>Period: 2006<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 936.96 million short tons<br>Period: 2007<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 936.96 million short tons<br>Period: 2008<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 936.96 million short tons<br>Period: 2009<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 936.96 million short tons<br>Period: 2010<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2011<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2012<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2013<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2014<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2015<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2016<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2017<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2018<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2019<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2020<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Coal reserves: 805.79 million short tons<br>Period: 2021<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of"],
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
      "y": [364.86000000000001, 364.86000000000001, 364.86000000000001, 364.86000000000001, 364.86000000000007, 364.85999999999996, 364.86000000000001, 359.34999999999997, 359.35000000000008, 359.35000000000002, 359.35000000000008, 359.35000000000002, 359.35000000000002, 359.35000000000002, 359.35000000000002, 359.35000000000002, 359.35000000000008, 359.35000000000002, 359.35000000000002],
      "text": ["Coal reserves: 364.86 million short tons<br>Period: 2003<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2004<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2005<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2006<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2007<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2008<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2009<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2010<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2011<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2012<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2013<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2014<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2015<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2016<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2017<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2018<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2019<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2020<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2021<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [348.32999999999998, 348.32999999999998, 348.32999999999998, 348.32999999999998, 348.32999999999998, 348.32999999999998, 348.32999999999998, 348.33000000000004, 348.32999999999998, 348.33000000000004, 348.32999999999998, 348.33000000000004, 348.32999999999998, 348.32999999999998, 348.32999999999993, 397.92999999999995, 397.93000000000001, 397.93000000000001, 397.93000000000001],
      "text": ["Coal reserves: 348.33 million short tons<br>Period: 2003<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2004<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2005<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2006<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2007<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2008<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2009<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2010<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2011<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2012<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2013<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2014<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2015<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2016<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 348.33 million short tons<br>Period: 2017<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 397.93 million short tons<br>Period: 2018<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 397.93 million short tons<br>Period: 2019<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 397.93 million short tons<br>Period: 2020<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Coal reserves: 397.93 million short tons<br>Period: 2021<br>REMIND_62 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [84756.883326575975, 84757.033423328176, 84757.197019334126, 84757.371787518452, 84757.591639929044, 84757.824474508103, 89166.799041302715, 89166.988633212546, 112155.49018247402, 116001.24908750295, 117084.9173805772, 117118.16709537599, 159617.94998859285, 159618.20382126104, 159618.46719069281, 164315.18290483719, 164315.41882014202, 165580.94254626791, 165580.96475815808],
      "text": ["Coal reserves: 84756.88 million short tons<br>Period: 2003<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 84757.03 million short tons<br>Period: 2004<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 84757.2 million short tons<br>Period: 2005<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 84757.37 million short tons<br>Period: 2006<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 84757.59 million short tons<br>Period: 2007<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 84757.82 million short tons<br>Period: 2008<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 89166.8 million short tons<br>Period: 2009<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 89166.99 million short tons<br>Period: 2010<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 112155.49 million short tons<br>Period: 2011<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 116001.25 million short tons<br>Period: 2012<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 117084.92 million short tons<br>Period: 2013<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 117118.17 million short tons<br>Period: 2014<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 159617.95 million short tons<br>Period: 2015<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 159618.2 million short tons<br>Period: 2016<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 159618.47 million short tons<br>Period: 2017<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 164315.18 million short tons<br>Period: 2018<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 164315.42 million short tons<br>Period: 2019<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 165580.94 million short tons<br>Period: 2020<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Coal reserves: 165580.96 million short tons<br>Period: 2021<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands"],
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
      "y": [5840.04, 5840.04, 5840.04, 5840.04, 5840.04, 5840.04, 5840.04, 5450.9199999999992, 5380.3800000000001, 5380.3799999999992, 5380.3800000000001, 5380.3800000000001, 5380.3800000000001, 5380.3799999999992, 5380.3799999999992, 5019.9200000000001, 5019.9200000000001, 5019.9200000000001, 5019.9200000000001],
      "text": ["Coal reserves: 5840.04 million short tons<br>Period: 2003<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5840.04 million short tons<br>Period: 2004<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5840.04 million short tons<br>Period: 2005<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5840.04 million short tons<br>Period: 2006<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5840.04 million short tons<br>Period: 2007<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5840.04 million short tons<br>Period: 2008<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5840.04 million short tons<br>Period: 2009<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5450.92 million short tons<br>Period: 2010<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5380.38 million short tons<br>Period: 2011<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5380.38 million short tons<br>Period: 2012<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5380.38 million short tons<br>Period: 2013<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5380.38 million short tons<br>Period: 2014<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5380.38 million short tons<br>Period: 2015<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5380.38 million short tons<br>Period: 2016<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5380.38 million short tons<br>Period: 2017<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5019.92 million short tons<br>Period: 2018<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5019.92 million short tons<br>Period: 2019<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5019.92 million short tons<br>Period: 2020<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Coal reserves: 5019.92 million short tons<br>Period: 2021<br>REMIND_62 region code: COL<br>Countries in region: Colombia"],
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
      "y": [20885.469999999998, 20885.469999999998, 20885.470000000001, 20885.470000000001, 20885.470000000001, 20885.470000000001, 20668.310000000001, 20668.310000000001, 19006.029999999999, 28224.650000000001, 28224.650000000001, 28224.650000000001, 28224.650000000001, 28224.650000000001, 28224.650000000001, 28224.650000000005, 28224.649999999998, 28224.650000000001, 28224.650000000001],
      "text": ["Coal reserves: 20885.47 million short tons<br>Period: 2003<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 20885.47 million short tons<br>Period: 2004<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 20885.47 million short tons<br>Period: 2005<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 20885.47 million short tons<br>Period: 2006<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 20885.47 million short tons<br>Period: 2007<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 20885.47 million short tons<br>Period: 2008<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 20668.31 million short tons<br>Period: 2009<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 20668.31 million short tons<br>Period: 2010<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 19006.03 million short tons<br>Period: 2011<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2012<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2013<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2014<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2015<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2016<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2017<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2018<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2019<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2020<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Coal reserves: 28224.65 million short tons<br>Period: 2021<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan"],
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
      "y": [64.688068214323934, 64.281056747691466, 63.871981961631427, 63.524633087146867, 63.191224352681566, 62.822144204002306, 99.627968200297275, 99.293655391387475, 99.149874828754974, 99.092329495323085, 154.17996359867712, 154.32349280862704, 154.5812426084446, 155.18632065479773, 155.7462134551397, 163.38715013767205, 163.52785294134128, 163.77350203712643, 164.14010384458999],
      "text": ["Coal reserves: 64.69 million short tons<br>Period: 2003<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 64.28 million short tons<br>Period: 2004<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 63.87 million short tons<br>Period: 2005<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 63.52 million short tons<br>Period: 2006<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 63.19 million short tons<br>Period: 2007<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 62.82 million short tons<br>Period: 2008<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 99.63 million short tons<br>Period: 2009<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 99.29 million short tons<br>Period: 2010<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 99.15 million short tons<br>Period: 2011<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 99.09 million short tons<br>Period: 2012<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 154.18 million short tons<br>Period: 2013<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 154.32 million short tons<br>Period: 2014<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 154.58 million short tons<br>Period: 2015<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 155.19 million short tons<br>Period: 2016<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 155.75 million short tons<br>Period: 2017<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 163.39 million short tons<br>Period: 2018<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 163.53 million short tons<br>Period: 2019<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 163.77 million short tons<br>Period: 2020<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 164.14 million short tons<br>Period: 2021<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [178081.48999999999, 178081.48999999999, 178081.48999999999, 178081.48999999999, 178081.48999999999, 178081.48999999999, 176375.10999999999, 176375.10999999999, 176510.70000000001, 176770.84, 176770.84, 176770.84, 176770.84, 176770.83999999997, 176770.84000000003, 178757.20000000001, 178757.20000000001, 178757.20000000001, 178757.19999999998],
      "text": ["Coal reserves: 178081.49 million short tons<br>Period: 2003<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2004<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2005<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2006<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2007<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2008<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176375.11 million short tons<br>Period: 2009<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176375.11 million short tons<br>Period: 2010<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176510.7 million short tons<br>Period: 2011<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2012<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2013<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2014<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2015<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2016<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2017<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178757.2 million short tons<br>Period: 2018<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178757.2 million short tons<br>Period: 2019<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178757.2 million short tons<br>Period: 2020<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178757.2 million short tons<br>Period: 2021<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [34.286692223743955, 34.695010065530568, 35.121000396294839, 35.678189524035915, 35.865815092403587, 36.121409737733394, 36.651629975744726, 37.064261858465201, 37.642511524240312, 38.317386649592656, 38.888547525622862, 39.479956728837294, 39.936316167711425, 40.300658463811544, 40.760245813141324, 41.229661588618917, 41.549756085659659, 41.771791341016502, 41.884929472184147],
      "text": ["Coal reserves: 34.29 million short tons<br>Period: 2003<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal reserves: 34.7 million short tons<br>Period: 2004<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal reserves: 35.12 million short tons<br>Period: 2005<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal reserves: 35.68 million short tons<br>Period: 2006<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal reserves: 35.87 million short tons<br>Period: 2007<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal reserves: 36.12 million short tons<br>Period: 2008<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal reserves: 36.65 million short tons<br>Period: 2009<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 37.06 million short tons<br>Period: 2010<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 37.64 million short tons<br>Period: 2011<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 38.32 million short tons<br>Period: 2012<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 38.89 million short tons<br>Period: 2013<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 39.48 million short tons<br>Period: 2014<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 39.94 million short tons<br>Period: 2015<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 40.3 million short tons<br>Period: 2016<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 40.76 million short tons<br>Period: 2017<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 41.23 million short tons<br>Period: 2018<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 41.55 million short tons<br>Period: 2019<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 41.77 million short tons<br>Period: 2020<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal reserves: 41.88 million short tons<br>Period: 2021<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [69.327674076122435, 69.729041498497466, 70.153280349346943, 70.588001477870989, 71.003340365195285, 71.431053769490873, 71.82771580268853, 72.141405649466193, 72.40298245013696, 72.628677117208582, 73.252834084741679, 73.462625893833959, 73.710821434224826, 73.975751472166607, 74.260229797196146, 86.044797971293221, 86.418639622364282, 86.680622078897073, 86.803092565562636],
      "text": ["Coal reserves: 69.33 million short tons<br>Period: 2003<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 69.73 million short tons<br>Period: 2004<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 70.15 million short tons<br>Period: 2005<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 70.59 million short tons<br>Period: 2006<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 71 million short tons<br>Period: 2007<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 71.43 million short tons<br>Period: 2008<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 71.83 million short tons<br>Period: 2009<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 72.14 million short tons<br>Period: 2010<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 72.4 million short tons<br>Period: 2011<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 72.63 million short tons<br>Period: 2012<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 73.25 million short tons<br>Period: 2013<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 73.46 million short tons<br>Period: 2014<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 73.71 million short tons<br>Period: 2015<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 73.98 million short tons<br>Period: 2016<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 74.26 million short tons<br>Period: 2017<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 86.04 million short tons<br>Period: 2018<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 86.42 million short tons<br>Period: 2019<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 86.68 million short tons<br>Period: 2020<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 86.8 million short tons<br>Period: 2021<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [3703.7600000000002, 3703.7600000000002, 3703.7600000000002, 3703.7600000000007, 3703.7600000000002, 3703.7599999999998, 3703.7600000000002, 3703.7599999999998, 3703.7600000000002, 3703.7599999999998, 3703.7599999999998, 3703.7600000000002, 3703.7600000000002, 3703.7600000000002, 3703.7600000000002, 3703.7600000000007, 3703.7599999999998, 3703.7599999999998, 3703.7600000000002],
      "text": ["Coal reserves: 3703.76 million short tons<br>Period: 2003<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2004<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2005<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2006<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2007<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2008<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2009<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2010<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2011<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2012<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2013<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2014<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2015<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2016<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2017<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2018<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2019<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2020<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Coal reserves: 3703.76 million short tons<br>Period: 2021<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [3261.7399999999993, 3261.7400000000002, 3261.7399999999998, 3261.7399999999998, 3261.7399999999998, 3261.7399999999998, 3261.7399999999998, 3261.7400000000002, 3377.4800000000005, 3377.4800000000005, 3377.48, 3377.48, 3377.48, 3377.4799999999996, 3377.48, 3377.48, 3377.48, 3377.48, 3377.48],
      "text": ["Coal reserves: 3261.74 million short tons<br>Period: 2003<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3261.74 million short tons<br>Period: 2004<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3261.74 million short tons<br>Period: 2005<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3261.74 million short tons<br>Period: 2006<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3261.74 million short tons<br>Period: 2007<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3261.74 million short tons<br>Period: 2008<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3261.74 million short tons<br>Period: 2009<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3261.74 million short tons<br>Period: 2010<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2011<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2012<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2013<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2014<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2015<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2016<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2017<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2018<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2019<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2020<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Coal reserves: 3377.48 million short tons<br>Period: 2021<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: SGP<br>Countries in region: Singapore"],
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
      "y": [322.98000000000002, 322.98000000000002, 322.98000000000002, 322.98000000000002, 322.98000000000002, 322.98000000000002, 322.98000000000008, 322.97999999999996, 322.98000000000002, 322.98000000000002, 322.98000000000002, 322.98000000000002, 322.98000000000002, 322.98000000000002, 322.98000000000008, 322.98000000000002, 322.97999999999996, 322.98000000000002, 322.98000000000002],
      "text": ["Coal reserves: 322.98 million short tons<br>Period: 2003<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2004<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2005<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2006<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2007<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2008<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2009<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2010<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2011<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2012<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2013<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2014<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2015<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2016<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2017<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2018<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2019<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2020<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Coal reserves: 322.98 million short tons<br>Period: 2021<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [4907.4799999999996, 4907.4799999999996, 4907.4799999999996, 4907.4799999999996, 4907.4799999999996, 4907.4799999999996, 17388.939999999999, 18910.129999999997, 24816.310000000001, 24816.310000000001, 24817.41, 24829.41, 24829.959999999999, 24910, 24937.049999999999, 43972.25, 43972.25, 38436.449999999997, 38436.449999999997],
      "text": ["Coal reserves: 4907.48 million short tons<br>Period: 2003<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2004<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2005<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2006<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2007<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2008<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 17388.94 million short tons<br>Period: 2009<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 18910.13 million short tons<br>Period: 2010<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24816.31 million short tons<br>Period: 2011<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24816.31 million short tons<br>Period: 2012<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24817.41 million short tons<br>Period: 2013<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24829.41 million short tons<br>Period: 2014<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24829.96 million short tons<br>Period: 2015<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24910 million short tons<br>Period: 2016<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24937.05 million short tons<br>Period: 2017<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 43972.25 million short tons<br>Period: 2018<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 43972.25 million short tons<br>Period: 2019<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 38436.45 million short tons<br>Period: 2020<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 38436.45 million short tons<br>Period: 2021<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [2064.6300000000001, 2064.6300000000001, 2064.6300000000001, 2064.6300000000001, 2064.6300000000001, 2064.6300000000001, 1171.76, 1171.76, 1171.76, 1171.76, 1171.7599999999998, 1171.7600000000002, 1171.76, 1171.7600000000002, 1171.76, 1171.76, 1171.76, 1171.76, 1171.76],
      "text": ["Coal reserves: 2064.63 million short tons<br>Period: 2003<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 2064.63 million short tons<br>Period: 2004<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 2064.63 million short tons<br>Period: 2005<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 2064.63 million short tons<br>Period: 2006<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 2064.63 million short tons<br>Period: 2007<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 2064.63 million short tons<br>Period: 2008<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2009<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2010<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2011<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2012<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2013<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2014<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2015<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2016<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2017<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2018<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2019<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2020<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Coal reserves: 1171.76 million short tons<br>Period: 2021<br>REMIND_62 region code: THA<br>Countries in region: Thailand"],
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
      "y": [391.31999999999999, 391.31999999999999, 391.31999999999999, 391.31999999999999, 391.31999999999999, 391.31999999999999, 385.81, 385.81, 385.81000000000006, 385.81, 385.81000000000006, 385.80999999999995, 385.81000000000006, 385.81000000000006, 385.81, 385.81, 385.81, 385.81, 385.81],
      "text": ["Coal reserves: 391.32 million short tons<br>Period: 2003<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2004<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2005<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2006<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2007<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2008<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2009<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2010<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2011<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2012<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2013<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2014<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2015<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2016<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2017<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2018<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2019<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2020<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2021<br>REMIND_62 region code: JPN<br>Countries in region: Japan"],
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
      "y": [18.110570688376512, 17.99053664967623, 17.877195807538889, 17.775265641076459, 17.683938515434196, 17.597029830976524, 17.510948864685567, 17.441220663133649, 17.413550345142866, 17.389214032629585, 17.331466308928366, 17.258658898525955, 17.183283843957401, 17.108468054249105, 17.01410710034768, 16.911208417633031, 16.824437318970588, 16.736572489669687, 16.637739661336884],
      "text": ["Coal reserves: 18.11 million short tons<br>Period: 2003<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Coal reserves: 17.99 million short tons<br>Period: 2004<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Coal reserves: 17.88 million short tons<br>Period: 2005<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.78 million short tons<br>Period: 2006<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.68 million short tons<br>Period: 2007<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.6 million short tons<br>Period: 2008<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.51 million short tons<br>Period: 2009<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.44 million short tons<br>Period: 2010<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.41 million short tons<br>Period: 2011<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.39 million short tons<br>Period: 2012<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.33 million short tons<br>Period: 2013<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.26 million short tons<br>Period: 2014<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.18 million short tons<br>Period: 2015<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.11 million short tons<br>Period: 2016<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.01 million short tons<br>Period: 2017<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 16.91 million short tons<br>Period: 2018<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 16.82 million short tons<br>Period: 2019<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 16.74 million short tons<br>Period: 2020<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 16.64 million short tons<br>Period: 2021<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [1301.8299999999997, 1301.8300000000002, 1301.8299999999999, 1301.8299999999999, 1301.8299999999999, 1301.8299999999999, 1301.8299999999999, 1301.8299999999999, 1301.8299999999999, 1301.8299999999997, 1301.8299999999999, 1301.8299999999999, 1301.8300000000002, 1301.8299999999999, 1301.8299999999999, 1301.8299999999999, 1301.8299999999999, 1301.8299999999999, 1301.8299999999999],
      "text": ["Coal reserves: 1301.83 million short tons<br>Period: 2003<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2004<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2005<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2006<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2007<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2008<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2009<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2010<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2011<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2012<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2013<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2014<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2015<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2016<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2017<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2018<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2019<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2020<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Coal reserves: 1301.83 million short tons<br>Period: 2021<br>REMIND_62 region code: CHL<br>Countries in region: Chile"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: ISL<br>Countries in region: Iceland"],
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
      "y": [2454.8400000000001, 2454.8400000000006, 2454.8400000000001, 2454.8400000000006, 2454.8400000000001, 2454.8400000000001, 2454.8400000000001, 2582.71, 2688.5300000000002, 2713.8899999999999, 9592.2999999999993, 9592.2999999999993, 12514.530000000001, 12514.530000000001, 12514.529999999999, 12704.120000000001, 12704.120000000001, 12704.120000000001, 12704.120000000001],
      "text": ["Coal reserves: 2454.84 million short tons<br>Period: 2003<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2004<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2005<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2006<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2007<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2008<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2009<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2582.71 million short tons<br>Period: 2010<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2688.53 million short tons<br>Period: 2011<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2713.89 million short tons<br>Period: 2012<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 9592.3 million short tons<br>Period: 2013<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 9592.3 million short tons<br>Period: 2014<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12514.53 million short tons<br>Period: 2015<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12514.53 million short tons<br>Period: 2016<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12514.53 million short tons<br>Period: 2017<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12704.12 million short tons<br>Period: 2018<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12704.12 million short tons<br>Period: 2019<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12704.12 million short tons<br>Period: 2020<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12704.12 million short tons<br>Period: 2021<br>REMIND_62 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [680.69883293377143, 682.20291541042116, 683.61996409928315, 685.03877753100448, 686.51004691495916, 687.56332974124928, 809.92011565775658, 812.25311507201184, 797.96344595994333, 799.76298335518288, 801.66986682881543, 803.81121528145604, 806.00214689108009, 808.22287605301801, 810.56938972633668, 813.12320083180794, 815.86338609143218, 818.99340973671281, 822.68296522604783],
      "text": ["Coal reserves: 680.7 million short tons<br>Period: 2003<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 682.2 million short tons<br>Period: 2004<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 683.62 million short tons<br>Period: 2005<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 685.04 million short tons<br>Period: 2006<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 686.51 million short tons<br>Period: 2007<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 687.56 million short tons<br>Period: 2008<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 809.92 million short tons<br>Period: 2009<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 812.25 million short tons<br>Period: 2010<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 797.96 million short tons<br>Period: 2011<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 799.76 million short tons<br>Period: 2012<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 801.67 million short tons<br>Period: 2013<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 803.81 million short tons<br>Period: 2014<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 806 million short tons<br>Period: 2015<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 808.22 million short tons<br>Period: 2016<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 810.57 million short tons<br>Period: 2017<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 813.12 million short tons<br>Period: 2018<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 815.86 million short tons<br>Period: 2019<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 818.99 million short tons<br>Period: 2020<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 822.68 million short tons<br>Period: 2021<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [1320.2943664382128, 1320.4777277344197, 1320.7791010057424, 1321.2219958782475, 1325.2093083940376, 1330.0579936501745, 1333.6948945977797, 1334.2022426865806, 1334.277350385315, 1333.4402282223962, 1333.5529065363532, 1333.8896860219677, 1335.2191710884429, 1336.5117911753173, 1338.5533027770894, 1340.7371932938943, 1342.4680306751122, 1343.6802745231689, 1344.6962816912867],
      "text": ["Coal reserves: 1320.29 million short tons<br>Period: 2003<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1320.48 million short tons<br>Period: 2004<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1320.78 million short tons<br>Period: 2005<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1321.22 million short tons<br>Period: 2006<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1325.21 million short tons<br>Period: 2007<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1330.06 million short tons<br>Period: 2008<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1333.69 million short tons<br>Period: 2009<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1334.2 million short tons<br>Period: 2010<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1334.28 million short tons<br>Period: 2011<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1333.44 million short tons<br>Period: 2012<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1333.55 million short tons<br>Period: 2013<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1333.89 million short tons<br>Period: 2014<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1335.22 million short tons<br>Period: 2015<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1336.51 million short tons<br>Period: 2016<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1338.55 million short tons<br>Period: 2017<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1340.74 million short tons<br>Period: 2018<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1342.47 million short tons<br>Period: 2019<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1343.68 million short tons<br>Period: 2020<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1344.7 million short tons<br>Period: 2021<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [461.87000000000006, 461.86999999999995, 461.87, 461.87, 461.87000000000006, 461.87, 1326.0800000000002, 1326.0799999999999, 1326.0799999999999, 1326.0799999999999, 1326.0799999999999, 1326.0799999999999, 1326.0799999999999, 1326.0799999999999, 1326.0799999999999, 1326.0800000000002, 1326.0799999999999, 1326.0799999999999, 1326.0799999999999],
      "text": ["Coal reserves: 461.87 million short tons<br>Period: 2003<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2004<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2005<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2006<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2007<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2008<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2009<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2010<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2011<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2012<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2013<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2014<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2015<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2016<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2017<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2018<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2019<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2020<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2021<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [88971.850000000006, 88971.850000000006, 88971.850000000006, 88971.85000000002, 88971.850000000006, 88971.850000000006, 84772.050000000003, 87619.309999999998, 90437.919999999998, 93934.449999999997, 95517.369999999995, 99512.139999999985, 104464.82000000001, 107726.54999999999, 111190.55999999998, 116768.8, 116768.79999999999, 122413.73, 122413.73],
      "text": ["Coal reserves: 88971.85 million short tons<br>Period: 2003<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2004<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2005<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2006<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2007<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2008<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 84772.05 million short tons<br>Period: 2009<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 87619.31 million short tons<br>Period: 2010<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 90437.92 million short tons<br>Period: 2011<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 93934.45 million short tons<br>Period: 2012<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 95517.37 million short tons<br>Period: 2013<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 99512.14 million short tons<br>Period: 2014<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 104464.82 million short tons<br>Period: 2015<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 107726.55 million short tons<br>Period: 2016<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 111190.56 million short tons<br>Period: 2017<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 116768.8 million short tons<br>Period: 2018<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 116768.8 million short tons<br>Period: 2019<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 122413.73 million short tons<br>Period: 2020<br>REMIND_62 region code: IND<br>Countries in region: India", "Coal reserves: 122413.73 million short tons<br>Period: 2021<br>REMIND_62 region code: IND<br>Countries in region: India"],
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
      "y": [261573, 261573, 261573.00000000003, 261572.99999999997, 261572.99999999997, 261573, 260550.99999999997, 259518, 258619.00000000003, 257648, 256708.99999999997, 255755, 254895.99999999997, 254197.00000000003, 253455, 252733.00000000003, 252057, 251539, 251538.99999999997],
      "text": ["Coal reserves: 261573 million short tons<br>Period: 2003<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2004<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2005<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2006<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2007<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2008<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 260551 million short tons<br>Period: 2009<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 259518 million short tons<br>Period: 2010<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 258619 million short tons<br>Period: 2011<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 257648 million short tons<br>Period: 2012<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 256709 million short tons<br>Period: 2013<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 255755 million short tons<br>Period: 2014<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 254896 million short tons<br>Period: 2015<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 254197 million short tons<br>Period: 2016<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 253455 million short tons<br>Period: 2017<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 252733 million short tons<br>Period: 2018<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 252057 million short tons<br>Period: 2019<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 251539 million short tons<br>Period: 2020<br>REMIND_62 region code: USA<br>Countries in region: United States", "Coal reserves: 251539 million short tons<br>Period: 2021<br>REMIND_62 region code: USA<br>Countries in region: United States"],
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
      "y": [97.000000000000014, 97, 97, 97.000000000000014, 97, 97, 97, 97.000000000000014, 97, 97, 97, 97, 97, 97, 96.999999999999986, 97.000000000000014, 97, 97, 97],
      "text": ["Coal reserves: 97 million short tons<br>Period: 2003<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2004<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2005<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2006<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2007<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2008<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2009<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2010<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2011<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2012<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2013<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2014<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2015<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2016<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2017<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2018<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2019<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2020<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal reserves: 97 million short tons<br>Period: 2021<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [1308.4400000000001, 1308.4399999999998, 1308.4400000000001, 1308.4400000000001, 1308.4400000000001, 1308.4400000000001, 1308.4400000000001, 1308.4400000000001, 1308.4400000000001, 1308.4400000000003, 1308.4400000000001, 1308.4400000000001, 1308.4400000000001, 1308.4400000000001, 1308.4399999999998, 1308.4399999999998, 1308.4400000000001, 1308.4400000000001, 1308.4400000000001],
      "text": ["Coal reserves: 1308.44 million short tons<br>Period: 2003<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2004<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2005<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2006<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2007<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2008<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2009<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2010<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2011<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2012<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2013<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2014<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2015<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2016<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2017<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2018<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2019<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2020<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Coal reserves: 1308.44 million short tons<br>Period: 2021<br>REMIND_62 region code: ESP<br>Countries in region: Spain"],
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
      "y": [18123.080000000002, 18123.080000000002, 18123.080000000002, 18123.079999999998, 18123.080000000002, 18123.080000000002, 18142.919999999998, 19454.669999999998, 21191.91, 21608.580000000002, 22995.290000000001, 23845.169999999998, 26632.91, 28451.720000000005, 29903.91, 29687.41, 29687.410000000003, 31300.090000000004, 31450.179999999997],
      "text": ["Coal reserves: 18123.08 million short tons<br>Period: 2003<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2004<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2005<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2006<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2007<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2008<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 18142.92 million short tons<br>Period: 2009<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 19454.67 million short tons<br>Period: 2010<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 21191.91 million short tons<br>Period: 2011<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 21608.58 million short tons<br>Period: 2012<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 22995.29 million short tons<br>Period: 2013<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 23845.17 million short tons<br>Period: 2014<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 26632.91 million short tons<br>Period: 2015<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 28451.72 million short tons<br>Period: 2016<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 29903.91 million short tons<br>Period: 2017<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 29687.41 million short tons<br>Period: 2018<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 29687.41 million short tons<br>Period: 2019<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 31300.09 million short tons<br>Period: 2020<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Coal reserves: 31450.18 million short tons<br>Period: 2021<br>REMIND_62 region code: POL<br>Countries in region: Poland"],
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
      "y": [391.31999999999994, 391.31999999999999, 391.31999999999999, 391.31999999999999, 391.31999999999999, 391.31999999999999, 391.31999999999999, 391.31999999999999, 391.32000000000005, 379.19, 379.19, 379.19000000000005, 379.19, 379.19, 379.19, 379.19, 379.19, 379.19, 379.19],
      "text": ["Coal reserves: 391.32 million short tons<br>Period: 2003<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 391.32 million short tons<br>Period: 2004<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 391.32 million short tons<br>Period: 2005<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 391.32 million short tons<br>Period: 2006<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 391.32 million short tons<br>Period: 2007<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 391.32 million short tons<br>Period: 2008<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 391.32 million short tons<br>Period: 2009<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 391.32 million short tons<br>Period: 2010<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 391.32 million short tons<br>Period: 2011<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2012<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2013<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2014<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2015<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2016<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2017<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2018<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2019<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2020<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Coal reserves: 379.19 million short tons<br>Period: 2021<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [35053.459999999992, 35053.459999999999, 35053.459999999999, 35053.459999999999, 35053.459999999999, 35053.459999999999, 36486.460000000006, 36155.769999999997, 35825.080000000002, 35384.150000000001, 35053.459999999999, 33510.220000000001, 35384.150000000001, 35053.459999999999, 34722.769999999997, 10905.15, 10905.15, 10905.150000000001, 10905.149999999998],
      "text": ["Coal reserves: 35053.46 million short tons<br>Period: 2003<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2004<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2005<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2006<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2007<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2008<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 36486.46 million short tons<br>Period: 2009<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 36155.77 million short tons<br>Period: 2010<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35825.08 million short tons<br>Period: 2011<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35384.15 million short tons<br>Period: 2012<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2013<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 33510.22 million short tons<br>Period: 2014<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35384.15 million short tons<br>Period: 2015<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2016<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 34722.77 million short tons<br>Period: 2017<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 10905.15 million short tons<br>Period: 2018<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 10905.15 million short tons<br>Period: 2019<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 10905.15 million short tons<br>Period: 2020<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 10905.15 million short tons<br>Period: 2021<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [44862.909999999996, 44862.910000000003, 44862.910000000003, 44862.910000000003, 44862.910000000003, 44862.910000000003, 44834.25, 44708.589999999997, 44696.470000000001, 44573.010000000002, 44457.260000000002, 40037, 39916.849999999999, 39802.209999999999, 37532.660000000003, 39572.93, 39572.93, 39572.929999999993, 39572.93],
      "text": ["Coal reserves: 44862.91 million short tons<br>Period: 2003<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2004<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2005<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2006<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2007<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2008<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44834.25 million short tons<br>Period: 2009<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44708.59 million short tons<br>Period: 2010<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44696.47 million short tons<br>Period: 2011<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44573.01 million short tons<br>Period: 2012<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44457.26 million short tons<br>Period: 2013<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 40037 million short tons<br>Period: 2014<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39916.85 million short tons<br>Period: 2015<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39802.21 million short tons<br>Period: 2016<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 37532.66 million short tons<br>Period: 2017<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39572.93 million short tons<br>Period: 2018<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39572.93 million short tons<br>Period: 2019<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39572.93 million short tons<br>Period: 2020<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39572.93 million short tons<br>Period: 2021<br>REMIND_62 region code: DEU<br>Countries in region: Germany"],
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
      "y": [1658.588899676078, 1664.1511024924187, 1671.7265647253071, 1680.097623168494, 1689.7630671553889, 1701.1525012196084, 1814.9273708790811, 1851.1497528419557, 2018.9184587230641, 2010.0893423846726, 1992.617779667157, 1977.1324445002385, 1964.1500103086903, 1951.3672398301262, 1955.5574823965874, 1586.6112870770635, 1590.370185547285, 1947.8267866182066, 1931.919394157205],
      "text": ["Coal reserves: 1658.59 million short tons<br>Period: 2003<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1664.15 million short tons<br>Period: 2004<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1671.73 million short tons<br>Period: 2005<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1680.1 million short tons<br>Period: 2006<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1689.76 million short tons<br>Period: 2007<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1701.15 million short tons<br>Period: 2008<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1814.93 million short tons<br>Period: 2009<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1851.15 million short tons<br>Period: 2010<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 2018.92 million short tons<br>Period: 2011<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 2010.09 million short tons<br>Period: 2012<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1992.62 million short tons<br>Period: 2013<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1977.13 million short tons<br>Period: 2014<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1964.15 million short tons<br>Period: 2015<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1951.37 million short tons<br>Period: 2016<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1955.56 million short tons<br>Period: 2017<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1586.61 million short tons<br>Period: 2018<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1590.37 million short tons<br>Period: 2019<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1947.83 million short tons<br>Period: 2020<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1931.92 million short tons<br>Period: 2021<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [15.429999999999998, 15.43, 15.430000000000001, 15.430000000000001, 15.43, 15.43, 15.43, 15.430000000000001, 15.43, 15.430000000000001, 15.430000000000001, 15.429999999999998, 15.43, 15.430000000000001, 15.43, 15.430000000000001, 15.430000000000001, 15.43, 15.43],
      "text": ["Coal reserves: 15.43 million short tons<br>Period: 2003<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2004<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2005<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2006<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2007<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2008<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2009<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2010<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2011<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2012<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2013<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2014<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2015<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2016<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2017<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2018<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2019<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2020<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2021<br>REMIND_62 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [39.680000000000007, 39.68, 39.68, 39.68, 39.68, 39.679999999999993, 39.68, 39.680000000000007, 39.68, 39.68, 39.68, 39.68, 39.68, 39.679999999999993, 39.68, 39.68, 39.68, 39.679999999999993, 39.68],
      "text": ["Coal reserves: 39.68 million short tons<br>Period: 2003<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2004<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2005<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2006<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2007<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2008<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2009<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2010<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2011<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2012<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2013<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2014<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2015<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2016<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2017<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2018<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2019<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2020<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Coal reserves: 39.68 million short tons<br>Period: 2021<br>REMIND_62 region code: PRT<br>Countries in region: Portugal"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [473.65996375549878, 473.6554677588606, 473.65402322619536, 473.65355290524963, 473.65373070339081, 473.6539688955894, 402.38637494770597, 406.77259738756032, 411.16187749001404, 289.45897318075276, 289.46305971590886, 76.751342745426555, 76.594340488199634, 76.596546447569793, 76.597902188492824, 28.510501459331632, 28.510505709590323, 28.510282966774675, 28.509524504741478],
      "text": ["Coal reserves: 473.66 million short tons<br>Period: 2003<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.66 million short tons<br>Period: 2004<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.65 million short tons<br>Period: 2005<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.65 million short tons<br>Period: 2006<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.65 million short tons<br>Period: 2007<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.65 million short tons<br>Period: 2008<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 402.39 million short tons<br>Period: 2009<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 406.77 million short tons<br>Period: 2010<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 411.16 million short tons<br>Period: 2011<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 289.46 million short tons<br>Period: 2012<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 289.46 million short tons<br>Period: 2013<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 76.75 million short tons<br>Period: 2014<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 76.59 million short tons<br>Period: 2015<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 76.6 million short tons<br>Period: 2016<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 76.6 million short tons<br>Period: 2017<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 28.51 million short tons<br>Period: 2018<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 28.51 million short tons<br>Period: 2019<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 28.51 million short tons<br>Period: 2020<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 28.51 million short tons<br>Period: 2021<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: AUT<br>Countries in region: Austria"],
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
      "y": [123364.22721576209, 123364.60960870051, 123367.83788590186, 123369.72132613495, 123370.61497976779, 123374.14248830473, 123382.93037341132, 123387.93557549933, 123392.23395806966, 123394.15893381764, 137999.17775356001, 141845.84892479642, 144069.1433279186, 146484.55716477343, 149623.78452577899, 152617.71678050293, 152616.99483592925, 154348.61925041911, 154355.12903520156],
      "text": ["Coal reserves: 123364.23 million short tons<br>Period: 2003<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123364.61 million short tons<br>Period: 2004<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123367.84 million short tons<br>Period: 2005<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123369.72 million short tons<br>Period: 2006<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123370.61 million short tons<br>Period: 2007<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123374.14 million short tons<br>Period: 2008<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123382.93 million short tons<br>Period: 2009<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123387.94 million short tons<br>Period: 2010<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123392.23 million short tons<br>Period: 2011<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123394.16 million short tons<br>Period: 2012<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 137999.18 million short tons<br>Period: 2013<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 141845.85 million short tons<br>Period: 2014<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 144069.14 million short tons<br>Period: 2015<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 146484.56 million short tons<br>Period: 2016<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 149623.78 million short tons<br>Period: 2017<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 152617.72 million short tons<br>Period: 2018<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 152616.99 million short tons<br>Period: 2019<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 154348.62 million short tons<br>Period: 2020<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 154355.13 million short tons<br>Period: 2021<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [1.1000000000000001, 1.1000000000000001, 1.1000000000000003, 1.1000000000000003, 1.1000000000000001, 1.1000000000000001, 1.1000000000000003, 1.1000000000000001, 1.1000000000000001, 1.1000000000000001, 1.1000000000000001, 1.1000000000000001, 1.1000000000000001, 1.0999999999999999, 1.1000000000000001, 1.1000000000000001, 1.1000000000000001, 1.1000000000000001, 1.1000000000000001],
      "text": ["Coal reserves: 1.1 million short tons<br>Period: 2003<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2004<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2005<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2006<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2007<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2008<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2009<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2010<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2011<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2012<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2013<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2014<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2015<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2016<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2017<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2018<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2019<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2020<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Coal reserves: 1.1 million short tons<br>Period: 2021<br>REMIND_62 region code: SWE<br>Countries in region: Sweden"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [18.610573632751091, 18.610542208232378, 18.610354308795671, 18.610272170521903, 18.610473220221099, 18.6104884155965, 18.610104196015037, 18.609867156738538, 18.609541453612806, 18.608723178859414, 18.608403680090881, 18.606985870079257, 18.603666421770694, 18.600298416311716, 18.596235665286684, 18.590886480055701, 18.583174016670522, 18.57892163654369, 18.577098302749381],
      "text": ["Coal reserves: 18.61 million short tons<br>Period: 2003<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2004<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2005<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2006<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2007<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2008<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2009<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2010<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2011<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2012<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2013<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2014<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.6 million short tons<br>Period: 2015<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.6 million short tons<br>Period: 2016<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.6 million short tons<br>Period: 2017<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.59 million short tons<br>Period: 2018<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.58 million short tons<br>Period: 2019<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.58 million short tons<br>Period: 2020<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.58 million short tons<br>Period: 2021<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.84999999999991, 547.85000000000002, 547.85000000000002, 547.85000000000002, 547.85000000000002],
      "text": ["Coal reserves: 547.85 million short tons<br>Period: 2003<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2004<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2005<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2006<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2007<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2008<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2009<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2010<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2011<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2012<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2013<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2014<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2015<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2016<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2017<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2018<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2019<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2020<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2021<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [2904.5600425230091, 2900.7249471511604, 2897.0369469499842, 2893.4019855334841, 2889.6766499452574, 2886.0052995763695, 2882.350296509901, 2878.3466561690734, 2873.5669388229517, 2867.6630357183803, 2861.3093441311653, 2855.2135251716236, 2849.1444519357146, 2843.7674411339708, 2839.1243361378515, 2834.6294423106897, 2830.5522976306374, 2826.2279587422422, 2818.9019221174644],
      "text": ["Coal reserves: 2904.56 million short tons<br>Period: 2003<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2900.72 million short tons<br>Period: 2004<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2897.04 million short tons<br>Period: 2005<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2893.4 million short tons<br>Period: 2006<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2889.68 million short tons<br>Period: 2007<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2886.01 million short tons<br>Period: 2008<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2882.35 million short tons<br>Period: 2009<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2878.35 million short tons<br>Period: 2010<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2873.57 million short tons<br>Period: 2011<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2867.66 million short tons<br>Period: 2012<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2861.31 million short tons<br>Period: 2013<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2855.21 million short tons<br>Period: 2014<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2849.14 million short tons<br>Period: 2015<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2843.77 million short tons<br>Period: 2016<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2839.12 million short tons<br>Period: 2017<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2834.63 million short tons<br>Period: 2018<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2830.55 million short tons<br>Period: 2019<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2826.23 million short tons<br>Period: 2020<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2818.9 million short tons<br>Period: 2021<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Coal reserves (REMIND_62)",
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
      "range": [0, 261573.00000000003],
      "tickmode": "array",
      "ticktext": ["0e+00", "1e+05", "2e+05"],
      "tickvals": [-1.8189894035458565e-12, 100000, 200000],
      "categoryorder": "array",
      "categoryarray": ["0e+00", "1e+05", "2e+05"],
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
        "text": "million short tons",
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
    "b55c588a5e1a": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c50d16595": {
      "y": {}
    }
  },
  "cur_data": "b55c588a5e1a",
  "visdat": {
    "b55c588a5e1a": ["function (y) ", "x"],
    "b55c50d16595": ["function (y) ", "x"]
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

  
