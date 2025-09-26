(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_62_Environment_GHG_emissions_line') 

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
      "y": [306434, 322315, 325979, 340579, 352851, 357380, 336631, 342497, 352870.00000000006, 357873, 366979, 365636, 372415.00000000006, 375694, 379420, 378187, 374523.99999999994, 361433, 361433],
      "text": ["GHG emissions: 306434 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 322315 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 325979 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 340579 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 352851 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 357380 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 336631 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 342497 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 352870 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 357873 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 366979 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 365636 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 372415 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 375694 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 379420 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 378187 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 374524 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 361433 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "GHG emissions: 361433 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [53750.516728422852, 54244.25723241907, 54959.301401603982, 54678.154818392046, 52761.609936044581, 54380.840484785658, 52942.647022143763, 54511.992936460061, 50418.488733643579, 51715.850691440537, 52737.832216511015, 48946.152915846142, 48174.703173719841, 48682.458460259564, 47707.482245168969, 46474.946267644533, 46268.667493939698, 43791.501501889812, 43791.590978584878],
      "text": ["GHG emissions: 53750.52 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 54244.26 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 54959.3 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 54678.15 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 52761.61 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 54380.84 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 52942.65 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 54511.99 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 50418.49 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 51715.85 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 52737.83 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 48946.15 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 48174.7 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 48682.46 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 47707.48 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 46474.95 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 46268.67 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 43791.5 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "GHG emissions: 43791.59 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein"],
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
      "y": [36096.943565531736, 38460.382854213662, 35677.08362583632, 36934.656363646463, 36903.855193154857, 36209.467354102242, 35203.774940995492, 35128.09590853894, 37721.207927300959, 35543.914257186349, 35794.824303119021, 32233.833369124397, 34904.954752504535, 35999.982242631784, 36279.396723761711, 35586.517418697331, 35793.81782999757, 35896.724903575705, 35914.354046764151],
      "text": ["GHG emissions: 36096.94 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 38460.38 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 35677.08 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 36934.66 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 36903.86 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 36209.47 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 35203.77 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "GHG emissions: 35128.1 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "GHG emissions: 37721.21 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 35543.91 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 35794.82 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 32233.83 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 34904.95 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 35999.98 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 36279.4 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 35586.52 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 35793.82 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 35896.72 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "GHG emissions: 35914.35 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [9167, 9246, 9017, 8921, 8990.9999999999982, 8733, 8800, 9243, 9624, 9071, 9298, 9739, 9409, 9192, 9924, 9671, 9196, 8304, 8304],
      "text": ["GHG emissions: 9167 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9246 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9017 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 8921 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 8991 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 8733 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 8800 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9243 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9624 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9071 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9298 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9739 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9409 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9192 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9924 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9671 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 9196 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 8304 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "GHG emissions: 8304 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: ALB<br>Countries in region: Albania"],
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
      "y": [36322.824353131546, 37918.262871814899, 38913.381323903392, 39448.708263768, 40850.688505268154, 41993.60454444505, 43476.84844781705, 45550.874166880945, 46863.656596379813, 47104.112162106081, 48144.365745018396, 49515.672670271859, 50375.406170123933, 51315.239917142542, 50374.561687811001, 50859.705854353779, 52175.520743376313, 47951.170921799509, 47823.960323329622],
      "text": ["GHG emissions: 36322.82 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 37918.26 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 38913.38 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 39448.71 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 40850.69 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 41993.6 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 43476.85 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 45550.87 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 46863.66 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 47104.11 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 48144.37 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 49515.67 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 50375.41 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 51315.24 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 50374.56 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 50859.71 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 52175.52 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 47951.17 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "GHG emissions: 47823.96 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [211276, 224220.00000000003, 244647.99999999997, 255609, 270581, 279821, 286972, 289376, 296697, 307219, 304353, 310051, 316218, 327456, 337742, 331357, 307453, 299779, 299779],
      "text": ["GHG emissions: 211276 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 224220 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 244648 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 255609 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 270581 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 279821 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 286972 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 289376 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 296697 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 307219 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 304353 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 310051 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 316218 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 327456 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 337742 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 331357 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 307453 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 299779 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "GHG emissions: 299779 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [682672.00000000012, 679690, 693710, 682556.00000000012, 716336, 691865, 656854, 673673, 690329.00000000012, 690454, 702660.99999999988, 710550, 708800, 709179.99999999988, 725612.99999999988, 742233, 726904, 677709, 677709],
      "text": ["GHG emissions: 682672 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 679690 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 693710 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 682556 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 716336 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 691865 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 656854 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 673673 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 690329 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 690454 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 702661 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 710550 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 708800 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 709180 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 725613 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 742233 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 726904 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 677709 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "GHG emissions: 677709 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: CAN<br>Countries in region: Canada"],
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
      "y": [83585, 82970, 84375, 84525, 83400.999999999985, 83368, 80494, 80643.000000000015, 80101, 82554, 82180.999999999985, 82810.999999999985, 82190, 80797, 82414.999999999985, 81807, 83180, 80158, 80158],
      "text": ["GHG emissions: 83585 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 82970 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 84375 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 84525 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 83401 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 83368 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 80494 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 80643 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 80101 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 82554 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 82181 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 82811 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 82190 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 80797 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 82415 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 81807 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 83180 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 80158 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "GHG emissions: 80158 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand"],
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
      "y": [574857, 585564, 607694, 628006, 639934, 643156, 632549, 650218, 671736, 678449, 663760.00000000012, 659021, 674268, 682791.00000000012, 679728, 651037, 659740, 592321, 592320.99999999988],
      "text": ["GHG emissions: 574857 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 585564 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 607694 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 628006 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 639934 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 643156 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 632549 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 650218 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 671736 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 678449 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 663760 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 659021 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 674268 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 682791 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 679728 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 651037 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 659740 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 592321 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "GHG emissions: 592321 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [49277.062781808832, 49579.906054083498, 48556.471175090934, 48877.215236977216, 49203.018173100885, 47890.743258693023, 47484.995857734983, 50045.687230710413, 48958.590382198287, 48598.106422129291, 49333.033524458559, 49389.285209732247, 50065.19491852451, 49530.674886249843, 49194.034465781013, 48505.525273458778, 47587.124612672342, 46094.971910399261, 46095.089284352071],
      "text": ["GHG emissions: 49277.06 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 49579.91 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 48556.47 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 48877.22 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 49203.02 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 47890.74 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 47485 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 50045.69 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 48958.59 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 48598.11 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 49333.03 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 49389.29 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 50065.19 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 49530.67 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 49194.03 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 48505.53 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 47587.12 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 46094.97 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "GHG emissions: 46095.09 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [397941, 371994, 358853.00000000006, 366287, 375471, 364486, 309537, 329151, 345051.00000000006, 337800, 333186, 298994, 249647.00000000003, 261516.00000000003, 235470, 246995.99999999997, 236094.99999999997, 227342, 227342],
      "text": ["GHG emissions: 397941 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 371994 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 358853 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 366287 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 375471 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 364486 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 309537 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 329151 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 345051 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 337800 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 333186 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 298994 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 249647 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 261516 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 235470 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 246996 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 236095 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 227342 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "GHG emissions: 227342 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine"],
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
      "y": [33092, 35000, 35172, 37305, 36267, 38840, 38395, 35997, 37548, 38415.999999999993, 37423, 36921, 36808, 37086, 36326, 36239, 36561, 35994.000000000007, 35994],
      "text": ["GHG emissions: 33092 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 35000 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 35172 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 37305 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 36267 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 38840 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 38395 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 35997 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 37548 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 38416 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 37423 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 36921 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 36808 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 37086 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 36326 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 36239 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 36561 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 35994 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "GHG emissions: 35994 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: URY<br>Countries in region: Uruguay"],
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
      "y": [841524.99999999988, 886636, 897371, 897366, 921598, 937153, 913688.00000000012, 999925, 1019415, 1058598, 1089193, 1127554, 1105478, 1069581, 1085923, 1054182, 1069919, 1064709, 1064708.9999999998],
      "text": ["GHG emissions: 841525 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 886636 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 897371 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 897366 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 921598 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 937153 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 913688 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 999925 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1019415 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1058598 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1089193 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1127554 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1105478 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1069581 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1085923 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1054182 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1069919 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1064709 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "GHG emissions: 1064709 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [362799.00000000006, 387702, 407819, 406140, 401317, 417682.99999999994, 406253, 409219, 406627, 441973, 444427, 439570.00000000006, 415759.00000000006, 387897, 351794, 310340, 258589, 194260, 194260.00000000003],
      "text": ["GHG emissions: 362799 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 387702 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 407819 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 406140 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 401317 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 417683 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 406253 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 409219 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 406627 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 441973 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 444427 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 439570 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 415759 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 387897 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 351794 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 310340 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 258589 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 194260 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "GHG emissions: 194260 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of"],
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
      "y": [527072, 552731, 548063, 556373, 566266, 579146, 593082, 645047, 669063, 672464.99999999988, 672870, 662401.99999999988, 683376, 693723, 707446.00000000012, 714467, 699176, 659330, 659329.99999999988],
      "text": ["GHG emissions: 527072 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 552731 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 548063 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 556373 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 566266 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 579146 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 593082 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 645047 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 669063 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 672465 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 672870 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 662402 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 683376 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 693723 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 707446 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 714467 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 699176 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 659330 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "GHG emissions: 659330 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [142602, 146082, 147127, 140739, 146901, 150006, 152895, 158250, 160090.00000000003, 165180, 176101.00000000003, 183727.00000000003, 192591.00000000003, 204106, 221322, 227858, 235302, 224972.00000000003, 224972],
      "text": ["GHG emissions: 142602 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 146082 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 147127 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 140739 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 146901 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 150006 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 152895 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 158250 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 160090 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 165180 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 176101 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 183727 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 192591 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 204106 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 221322 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 227858 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 235302 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 224972 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "GHG emissions: 224972 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [550493.14134087192, 608849.81394693919, 570986.65387506539, 613675.65989629528, 617699.77462017071, 590242.65091516462, 605043.60026102199, 589407.62109389959, 689926.52718926326, 690327.79014981363, 604222.15476662922, 621355.31635447545, 622029.17141890479, 600582.32720535249, 647453.66037726053, 642213.12871003163, 613545.81605340273, 571848.51442572579, 571848.59112727584],
      "text": ["GHG emissions: 550493.14 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 608849.81 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 570986.65 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 613675.66 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 617699.77 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 590242.65 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 605043.6 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 589407.62 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 689926.53 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 690327.79 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 604222.15 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 621355.32 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 622029.17 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 600582.33 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 647453.66 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 642213.13 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 613545.82 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 571848.51 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "GHG emissions: 571848.59 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands"],
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
      "y": [143003, 144244, 145702, 146405, 151267, 153090, 156750, 162039, 166015, 164091, 172345, 175836, 175034, 178894, 174466, 182788, 186445.00000000003, 186999.00000000003, 186999],
      "text": ["GHG emissions: 143003 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 144244 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 145702 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 146405 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 151267 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 153090 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 156750 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 162039 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 166015 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 164091 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 172345 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 175836 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 175034 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 178894 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 174466 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 182788 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 186445 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 186999 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "GHG emissions: 186999 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: COL<br>Countries in region: Colombia"],
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
      "y": [201453.99999999997, 219781, 234298.99999999997, 254147, 266716.99999999994, 314334, 286740, 307086, 322212, 320318, 335322, 286216, 267017, 276331, 299615, 299701, 286968, 294805.99999999994, 294806],
      "text": ["GHG emissions: 201454 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 219781 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 234299 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 254147 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 266717 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 314334 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 286740 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 307086 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 322212 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 320318 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 335322 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 286216 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 267017 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 276331 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 299615 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 299701 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 286968 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 294806 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "GHG emissions: 294806 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan"],
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
      "y": [28537.626051457821, 28698.743866542292, 30060.973277550493, 29512.628873974852, 32013.978683046116, 33074.309179339878, 33253.340696987369, 34807.936596528671, 35819.223475991712, 36636.644279326036, 37809.327886553911, 38477.687771301506, 39910.565025224001, 40871.277217867108, 40561.634706036944, 41079.762006342935, 43206.024238090613, 43508.680647144633, 43533.421903186485],
      "text": ["GHG emissions: 28537.63 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 28698.74 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 30060.97 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 29512.63 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 32013.98 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 33074.31 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 33253.34 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 34807.94 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 35819.22 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 36636.64 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 37809.33 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 38477.69 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 39910.57 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 40871.28 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 40561.63 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 41079.76 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 43206.02 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 43508.68 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "GHG emissions: 43533.42 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [2223272, 2218466, 2243991, 2281588, 2291498, 2291991, 2161029, 2249521, 2340370, 2316611, 2280314, 2264924.0000000005, 2249220, 2246728, 2282285, 2371536, 2419134, 2331479, 2331479],
      "text": ["GHG emissions: 2223272 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2218466 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2243991 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2281588 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2291498 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2291991 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2161029 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2249521 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2340370 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2316611 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2280314 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2264924 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2249220 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2246728 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2282285 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2371536 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2419134 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2331479 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "GHG emissions: 2331479 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [21528.495515667008, 21396.177107785654, 22188.307052958109, 22313.502812060495, 22865.555509813825, 24906.607391383262, 27125.084660501001, 29766.654260934942, 32313.48100943126, 32017.655991284668, 32023.844298338216, 33041.187440766073, 33237.497239174474, 34502.942035558044, 36306.088520654434, 37699.742659850635, 37368.637623141069, 36998.627103560044, 36982.133068427458],
      "text": ["GHG emissions: 21528.5 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "GHG emissions: 21396.18 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "GHG emissions: 22188.31 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "GHG emissions: 22313.5 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "GHG emissions: 22865.56 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "GHG emissions: 24906.61 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "GHG emissions: 27125.08 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 29766.65 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 32313.48 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 32017.66 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 32023.84 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 33041.19 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 33237.5 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 34502.94 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 36306.09 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 37699.74 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 37368.64 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 36998.63 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "GHG emissions: 36982.13 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [74010.41208639041, 78645.078559220274, 82744.197232821432, 85666.234491539159, 90946.031709720002, 93898.072173075299, 89736.314976116308, 95519.460718740112, 96675.3776324543, 99478.450582970981, 105099.00717448811, 111190.57969165478, 113704.01343941502, 115751.59237265722, 120450.06380777044, 125199.95953645626, 128065.29768261244, 127964.99549540831, 127862.86071465346],
      "text": ["GHG emissions: 74010.41 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 78645.08 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 82744.2 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 85666.23 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 90946.03 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 93898.07 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 89736.31 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 95519.46 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 96675.38 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 99478.45 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 105099.01 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 111190.58 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 113704.01 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 115751.59 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 120450.06 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 125199.96 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 128065.3 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 127965 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "GHG emissions: 127862.86 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [160510, 179676, 188782.99999999997, 193546.00000000003, 206510, 217120, 239357, 257247.99999999997, 261809.00000000003, 263337, 276064.99999999994, 291458, 313934, 333618.00000000006, 342192, 399801.00000000006, 454889.99999999994, 470578, 470577.99999999994],
      "text": ["GHG emissions: 160510 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 179676 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 188783 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 193546 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 206510 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 217120 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 239357 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 257248 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 261809 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 263337 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 276065 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 291458 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 313934 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 333618 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 342192 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 399801 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 454890 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 470578 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "GHG emissions: 470578 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [252859.99999999997, 270310.00000000006, 279295, 298657, 315898, 317306, 329562, 323172, 332269.00000000006, 336413, 347984, 361322, 375637, 400204, 426734, 422020, 427523, 436609, 436609],
      "text": ["GHG emissions: 252860 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 270310 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 279295 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 298657 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 315898 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 317306 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 329562 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 323172 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 332269 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 336413 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 347984 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 361322 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 375637 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 400204 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 426734 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 422020 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 427523 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 436609 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "GHG emissions: 436609 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [50888, 52348.999999999993, 49627, 50054, 51333, 51630.000000000007, 52195.999999999993, 55950, 58993, 58592.000000000007, 59489.000000000007, 60658, 62380, 62653.000000000007, 65735.999999999985, 64328, 65006.000000000007, 64267, 64266.999999999993],
      "text": ["GHG emissions: 50888 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 52349 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 49627 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 50054 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 51333 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 51630 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 52196 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 55950 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 58993 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 58592 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 59489 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 60658 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 62380 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 62653 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 65736 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 64328 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 65006 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 64267 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "GHG emissions: 64267 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: SGP<br>Countries in region: Singapore"],
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
      "y": [122887, 124836.99999999999, 129652, 135193, 138289, 146771, 150701, 158532, 164268, 169101, 174185.00000000003, 179287, 187771, 195047, 205029.00000000003, 214432.00000000003, 212142.99999999997, 206570, 206570],
      "text": ["GHG emissions: 122887 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 124837 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 129652 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 135193 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 138289 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 146771 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 150701 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 158532 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 164268 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 169101 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 174185 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 179287 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 187771 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 195047 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 205029 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 214432 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 212143 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 206570 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "GHG emissions: 206570 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [705534.99999999988, 713132.00000000012, 711330, 738257.00000000012, 749377, 742749, 762564.00000000012, 788132, 858226, 863278, 829244, 873789, 874599, 870044.00000000012, 914633, 980510, 1020914, 976488, 976488],
      "text": ["GHG emissions: 705535 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 713132 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 711330 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 738257 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 749377 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 742749 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 762564 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 788132 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 858226 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 863278 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 829244 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 873789 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 874599 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 870044 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 914633 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 980510 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 1020914 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 976488 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "GHG emissions: 976488 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [291807, 309996, 320716, 325301, 339244.99999999994, 343122, 338798.00000000006, 361218, 361291, 383663, 394293, 388973, 393387, 406605, 414733, 418544, 432151, 433773, 433773],
      "text": ["GHG emissions: 291807 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 309996 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 320716 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 325301 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 339245 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 343122 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 338798 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 361218 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 361291 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 383663 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 394293 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 388973 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 393387 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 406605 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 414733 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 418544 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 432151 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 433773 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "GHG emissions: 433773 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: THA<br>Countries in region: Thailand"],
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
      "y": [1293014.0000000002, 1282942, 1289536, 1269045, 1304489, 1234744, 1177228.9999999998, 1234821, 1292827.0000000002, 1336335, 1352164, 1305365, 1268752, 1258297.0000000002, 1241561, 1198175, 1157544.9999999998, 1094556, 1094556],
      "text": ["GHG emissions: 1293014 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1282942 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1289536 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1269045 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1304489 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1234744 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1177229 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1234821 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1292827 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1336335 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1352164 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1305365 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1268752 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1258297 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1241561 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1198175 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1157545 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1094556 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "GHG emissions: 1094556 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: JPN<br>Countries in region: Japan"],
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
      "y": [80256.833740190239, 83080.534347064604, 86767.837300574567, 88893.288554222338, 90800.801966116676, 92778.200168276715, 93494.53819441497, 94922.512005975237, 95547.401711600338, 102570.70299714887, 103519.94313803808, 106532.51064226791, 109749.18202160377, 110929.36611530268, 113130.88613777322, 116159.77216403052, 118989.23206880545, 114888.36276476576, 114646.74428122574],
      "text": ["GHG emissions: 80256.83 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "GHG emissions: 83080.53 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "GHG emissions: 86767.84 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 88893.29 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 90800.8 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 92778.2 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 93494.54 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 94922.51 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 95547.4 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 102570.7 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 103519.94 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 106532.51 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 109749.18 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 110929.37 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 113130.89 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 116159.77 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 118989.23 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 114888.36 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "GHG emissions: 114646.74 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [69253, 74640, 75237, 76545, 84293, 89032.000000000015, 86662, 91818, 98241, 100677, 103898, 96490, 102211.00000000001, 106622, 107321, 107365, 113466, 106722, 106722],
      "text": ["GHG emissions: 69253 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 74640 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 75237 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 76545 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 84293 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 89032 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 86662 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 91818 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 98241 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 100677 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 103898 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 96490 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 102211 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 106622 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 107321 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 107365 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 113466 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 106722 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "GHG emissions: 106722 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: CHL<br>Countries in region: Chile"],
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
      "y": [3291, 3350.9999999999995, 3290, 3769, 3797, 3687, 3358.0000000000005, 3237.0000000000005, 3043.9999999999995, 3033, 3199.9999999999995, 3260.9999999999995, 3310.9999999999995, 2843, 2896, 2919, 2848.0000000000005, 2653, 2652.9999999999995],
      "text": ["GHG emissions: 3291 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3351 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3290 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3769 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3797 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3687 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3358 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3237 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3044 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3033 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3200 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3261 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 3311 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 2843 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 2896 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 2919 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 2848 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 2653 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "GHG emissions: 2653 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: ISL<br>Countries in region: Iceland"],
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
      "y": [282947, 288964, 301420, 330635, 360255, 357395, 360936, 371145, 393957, 409510, 400373, 425731, 433861.00000000006, 460806.00000000006, 503114, 503525, 491455.00000000006, 504956, 504956],
      "text": ["GHG emissions: 282947 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 288964 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 301420 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 330635 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 360255 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 357395 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 360936 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 371145 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 393957 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 409510 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 400373 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 425731 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 433861 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 460806 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 503114 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 503525 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 491455 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 504956 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "GHG emissions: 504956 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [97636.253339660165, 100318.59078512729, 100089.09596295748, 104646.86200836702, 100730.471489613, 107037.240928263, 95828.70471966156, 99728.246070889058, 99035.602588562659, 96207.245745385706, 93935.896033211306, 92784.668572966926, 89928.834762418803, 93433.337610711809, 102033.76272944843, 104422.33602384853, 108890.30190174097, 105677.58313659074, 105943.84534805379],
      "text": ["GHG emissions: 97636.25 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "GHG emissions: 100318.59 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "GHG emissions: 100089.1 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "GHG emissions: 104646.86 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "GHG emissions: 100730.47 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "GHG emissions: 107037.24 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "GHG emissions: 95828.7 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "GHG emissions: 99728.25 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "GHG emissions: 99035.6 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "GHG emissions: 96207.25 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "GHG emissions: 93935.9 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "GHG emissions: 92784.67 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "GHG emissions: 89928.83 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "GHG emissions: 93433.34 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "GHG emissions: 102033.76 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "GHG emissions: 104422.34 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "GHG emissions: 108890.3 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "GHG emissions: 105677.58 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "GHG emissions: 105943.85 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [83434, 85583, 88879, 93801, 103681, 107779.99999999999, 112227, 116923, 116512.99999999999, 122116, 126732.00000000001, 133088, 136450, 142550, 145745, 148724, 159695, 167300, 167300],
      "text": ["GHG emissions: 83434 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 85583 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 88879 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 93801 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 103681 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 107780 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 112227 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 116923 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 116513 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 122116 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 126732 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 133088 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 136450 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 142550 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 145745 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 148724 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 159695 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 167300 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "GHG emissions: 167300 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [90773.49145603519, 89461.20238769392, 88960.176394764858, 90481.115668893748, 89509.083352816393, 87581.998379919489, 77255.064442909264, 76108.554403472357, 78976.675838144336, 75848.201861794179, 70059.043774295205, 70113.813178445518, 72365.920472413156, 71412.379390298782, 74391.201648183807, 74208.352469740596, 72626.279990535229, 68241.283735999023, 68216.933692510778],
      "text": ["GHG emissions: 90773.49 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 89461.2 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 88960.18 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 90481.12 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 89509.08 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 87582 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 77255.06 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 76108.55 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 78976.68 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 75848.2 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 70059.04 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 70113.81 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 72365.92 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 71412.38 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 74391.2 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 74208.35 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 72626.28 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 68241.28 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "GHG emissions: 68216.93 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [578105, 613251, 652634, 693677, 725948, 732455, 753556.00000000012, 756068.99999999988, 765898.00000000012, 765330, 786883, 812674, 812279, 849361.99999999988, 878975, 891701, 856658, 844649, 844649],
      "text": ["GHG emissions: 578105 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 613251 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 652634 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 693677 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 725948 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 732455 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 753556 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 756069 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 765898 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 765330 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 786883 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 812674 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 812279 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 849362 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 878975 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 891701 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 856658 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 844649 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "GHG emissions: 844649 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [1803992, 1892154.9999999998, 1966216.0000000002, 2064473, 2209296, 2310911, 2457278, 2569052, 2681723, 2832703, 2900895, 3083574, 3104050, 3147643, 3269577.9999999995, 3436072, 3412419, 3200821.0000000005, 3200820.9999999995],
      "text": ["GHG emissions: 1803992 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 1892155 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 1966216 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 2064473 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 2209296 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 2310911 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 2457278 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 2569052 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 2681723 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 2832703 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 2900895 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 3083574 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 3104050 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 3147643 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 3269578 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 3436072 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 3412419 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 3200821 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: IND<br>Countries in region: India", "GHG emissions: 3200821 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: IND<br>Countries in region: India"],
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
      "y": [6670155.9999999991, 6752991, 6772891, 6683781, 6787854.9999999991, 6601050, 6184149, 6454245, 6254958, 6036577, 6177417, 6224269, 6112057, 6003241.0000000009, 5947835, 6154646, 6039739, 5505181, 5505181],
      "text": ["GHG emissions: 6670156 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6752991 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6772891 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6683781 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6787855 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6601050 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6184149 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6454245 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6254958 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6036577 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6177417 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6224269 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6112057 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6003241 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 5947835 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6154646 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 6039739 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 5505181 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: USA<br>Countries in region: United States", "GHG emissions: 5505181 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: USA<br>Countries in region: United States"],
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
      "y": [45142, 47080, 47184, 48148.000000000007, 45682.000000000007, 47709, 47751, 49865, 49286, 47471, 50963, 52891, 52645.999999999993, 52491, 55524, 53561.000000000007, 55443, 56120, 56120],
      "text": ["GHG emissions: 45142 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 47080 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 47184 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 48148 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 45682 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 47709 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 47751 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 49865 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 49286 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 47471 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 50963 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 52891 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 52646 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 52491 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 55524 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 53561 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 55443 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 56120 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "GHG emissions: 56120 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [393439, 409554, 424169, 418156.99999999994, 434498.00000000006, 401199, 365093.00000000006, 350175, 349835, 343394, 317007, 315739, 326263, 316709, 333288, 326837.99999999994, 309374.99999999994, 270311, 270311],
      "text": ["GHG emissions: 393439 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 409554 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 424169 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 418157 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 434498 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 401199 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 365093 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 350175 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 349835 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 343394 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 317007 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 315739 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 326263 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 316709 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 333288 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 326838 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 309375 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 270311 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "GHG emissions: 270311 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: ESP<br>Countries in region: Spain"],
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
      "y": [359244, 363466, 364881, 379241, 379776, 373576, 358808, 377248, 373328, 366347.99999999994, 360557, 347385, 350542.00000000006, 361341.00000000006, 374716, 372926, 355381, 338384, 338384],
      "text": ["GHG emissions: 359244 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 363466 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 364881 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 379241 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 379776 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 373576 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 358808 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 377248 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 373328 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 366348 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 360557 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 347385 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 350542 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 361341 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 374716 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 372926 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 355381 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 338384 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: POL<br>Countries in region: Poland", "GHG emissions: 338384 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: POL<br>Countries in region: Poland"],
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
      "y": [267051, 269533, 273893, 262406, 252091.99999999997, 256599.00000000003, 244088.00000000003, 271563, 280956, 284112, 296354, 306117.00000000006, 299724, 307195, 311186, 320861, 332247, 322337.00000000006, 322337],
      "text": ["GHG emissions: 267051 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 269533 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 273893 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 262406 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 252092 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 256599 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 244088 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 271563 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 280956 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 284112 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 296354 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 306117 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 299724 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 307195 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 311186 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 320861 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 332247 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 322337 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "GHG emissions: 322337 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [441353.99999999994, 469862.99999999994, 469919.00000000006, 472757.99999999994, 493820, 527036, 505538, 528518, 512737, 532765, 542755, 554961, 530523, 530872, 544359, 548101, 555409, 501521.00000000006, 501520.99999999994],
      "text": ["GHG emissions: 441354 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 469863 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 469919 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 472758 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 493820 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 527036 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 505538 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 528518 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 512737 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 532765 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 542755 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 554961 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 530523 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 530872 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 544359 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 548101 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 555409 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 501521 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "GHG emissions: 501521 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [963015, 946508, 924532, 933322.99999999988, 904887, 907721, 851247.00000000012, 881693, 852006, 865209, 881583.00000000012, 840763, 845438, 848445, 831156, 802490, 751652, 692751, 692751],
      "text": ["GHG emissions: 963015 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 946508 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 924532 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 933323 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 904887 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 907721 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 851247 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 881693 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 852006 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 865209 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 881583 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 840763 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 845438 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 848445 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 831156 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 802490 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 751652 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 692751 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "GHG emissions: 692751 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: DEU<br>Countries in region: Germany"],
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
      "y": [81080.926672455505, 81406.411915748467, 81381.48419557669, 82082.876998587992, 83426.939417080706, 81070.883874293679, 76995.601299934366, 78816.963851171065, 77424.040935941186, 75299.309019046384, 73109.707610209545, 71178.259870252878, 72175.818889949078, 73466.356582550638, 74198.308789037736, 73620.259506847462, 70401.114589253106, 65175.186198650488, 64836.652682154345],
      "text": ["GHG emissions: 81080.93 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 81406.41 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 81381.48 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 82082.88 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 83426.94 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 81070.88 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 76995.6 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 78816.96 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 77424.04 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 75299.31 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 73109.71 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 71178.26 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 72175.82 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 73466.36 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 74198.31 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 73620.26 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 70401.11 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 65175.19 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "GHG emissions: 64836.65 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [73061, 72285, 73546, 74133, 72643.000000000015, 71564, 66194, 64973, 61002.000000000007, 62445, 61589, 61933, 63762, 66671, 65834, 63536.000000000007, 61602.000000000007, 59498, 59497.999999999993],
      "text": ["GHG emissions: 73061 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 72285 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 73546 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 74133 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 72643 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 71564 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 66194 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 64973 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 61002 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 62445 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 61589 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 61933 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 63762 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 66671 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 65834 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 63536 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 61602 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 59498 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "GHG emissions: 59498 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [78021, 79875, 82959, 77908, 76537, 74281.999999999985, 73486, 68074.000000000015, 67196, 65489.999999999993, 63799.999999999993, 63414.000000000007, 67508, 66390.999999999985, 70958, 66613, 61574.999999999993, 55641, 55641],
      "text": ["GHG emissions: 78021 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 79875 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 82959 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 77908 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 76537 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 74282 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 73486 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 68074 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 67196 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 65490 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 63800 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 63414 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 67508 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 66391 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 70958 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 66613 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 61575 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 55641 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "GHG emissions: 55641 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [387518, 404868, 425134, 447640, 467558, 507309, 519925, 564853, 596452, 632987, 649105.00000000012, 692676.99999999988, 726206, 734309.99999999988, 728092, 715864.99999999988, 720674.00000000012, 712585, 712585],
      "text": ["GHG emissions: 387518 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 404868 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 425134 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 447640 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 467558 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 507309 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 519925 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 564853 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 596452 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 632987 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 649105 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 692677 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 726206 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 734310 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 728092 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 715865 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 720674 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 712585 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "GHG emissions: 712585 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [509730.08207516547, 508029.95285898901, 509310.55807584996, 499514.15494278446, 492820.19577299117, 486788.07840640499, 468923.05429561238, 472872.90293592092, 456720.69847717806, 460306.69873587321, 461276.98490025045, 427819.39707667322, 433223.11078373657, 433626.26333755185, 436883.13310836465, 422361.67474475887, 412961.77158315748, 375972.32442416117, 375972.57180626487],
      "text": ["GHG emissions: 509730.08 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 508029.95 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 509310.56 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 499514.15 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 492820.2 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 486788.08 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 468923.05 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 472872.9 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 456720.7 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 460306.7 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 461276.98 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 427819.4 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 433223.11 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 433626.26 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 436883.13 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 422361.67 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 412961.77 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 375972.32 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "GHG emissions: 375972.57 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [685823.66047783068, 680504.65989783395, 674345.62569979241, 670631.88263377582, 655332.23546868621, 634829.57732619415, 578827.10438910674, 591400.33367340988, 548152.3213376014, 567911.23345790675, 550382.78249164612, 511021.82433057053, 495884.23331639176, 477658.3739957934, 461318.46646406315, 453157.85848486883, 437044.26507180219, 396246.71279299143, 396236.20007144025],
      "text": ["GHG emissions: 685823.66 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 680504.66 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 674345.63 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 670631.88 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 655332.24 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 634829.58 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 578827.1 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 591400.33 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 548152.32 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 567911.23 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 550382.78 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 511021.82 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 495884.23 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 477658.37 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 461318.47 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 453157.86 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 437044.27 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 396246.71 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "GHG emissions: 396236.2 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [89432, 90323, 90356.999999999985, 88153, 85204, 84954, 77767, 83551, 81739, 78293, 78909, 75142.999999999985, 76430, 76781.000000000015, 78699, 75582, 76623, 71018, 71018],
      "text": ["GHG emissions: 89432 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 90323 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 90357 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 88153 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 85204 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 84954 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 77767 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 83551 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 81739 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 78293 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 78909 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 75143 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 76430 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 76781 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 78699 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 75582 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 76623 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 71018 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "GHG emissions: 71018 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: AUT<br>Countries in region: Austria"],
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
      "y": [5597111.7843259647, 6345516.8767220909, 7102099.9897731002, 7766022.7459133901, 8361142.6028723912, 8610006.0466676038, 9172999.9099157155, 9986196.028266713, 10845324.264896851, 11124203.020563969, 11600983.01300678, 11678325.997081583, 11545343.853167161, 11515014.968463855, 11751133.621028971, 12250237.236687655, 12453531.181181611, 12659938.445007198, 12660470.504960965],
      "text": ["GHG emissions: 5597111.78 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 6345516.88 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 7102099.99 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 7766022.75 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 8361142.6 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 8610006.05 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 9172999.91 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 9986196.03 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 10845324.26 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 11124203.02 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 11600983.01 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 11678326 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 11545343.85 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 11515014.97 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 11751133.62 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 12250237.24 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 12453531.18 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 12659938.45 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "GHG emissions: 12660470.5 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [78646.428364795036, 82758.020838077573, 84745.316160199392, 86121.094174875427, 86394.83942500627, 92871.088255447045, 95838.925151732328, 101242.06598400851, 103160.58817056155, 106796.94722214698, 109501.31245286029, 108945.28782773027, 108081.48880734618, 113454.10234920202, 118047.92000179627, 121296.95863971724, 127488.25523375323, 119194.55224056065, 119109.72177997086],
      "text": ["GHG emissions: 78646.43 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "GHG emissions: 82758.02 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "GHG emissions: 84745.32 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "GHG emissions: 86121.09 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "GHG emissions: 86394.84 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "GHG emissions: 92871.09 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "GHG emissions: 95838.93 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "GHG emissions: 101242.07 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "GHG emissions: 103160.59 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "GHG emissions: 106796.95 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "GHG emissions: 109501.31 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "GHG emissions: 108945.29 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "GHG emissions: 108081.49 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "GHG emissions: 113454.1 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "GHG emissions: 118047.92 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "GHG emissions: 121296.96 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "GHG emissions: 127488.26 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "GHG emissions: 119194.55 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "GHG emissions: 119109.72 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [69556, 68081, 64256, 62698, 60690.999999999993, 59448, 55495, 61014.000000000007, 57208, 54382, 52593, 51286, 51266, 50782.999999999993, 50356, 47719, 46792, 45459, 45459],
      "text": ["GHG emissions: 69556 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 68081 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 64256 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 62698 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 60691 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 59448 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 55495 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 61014 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 57208 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 54382 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 52593 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 51286 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 51266 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 50783 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 50356 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 47719 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 46792 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 45459 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "GHG emissions: 45459 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [75626.430192643078, 69566.204455810119, 65950.42224836578, 73468.839471844651, 68668.633751238463, 65185.752249775353, 62311.658486959503, 62558.243049046083, 57177.315884882759, 52151.194935628431, 53536.978326540338, 49419.659292328419, 47435.802538534379, 49042.958508664888, 46807.616230587962, 46261.504688758985, 42782.716652338495, 40388.675213733302, 40384.975977451904],
      "text": ["GHG emissions: 75626.43 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 69566.2 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 65950.42 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 73468.84 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 68668.63 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 65185.75 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 62311.66 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 62558.24 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 57177.32 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 52151.19 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 53536.98 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 49419.66 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 47435.8 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 49042.96 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 46807.62 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 46261.5 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 42782.72 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 40388.68 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "GHG emissions: 40384.98 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [540151.85996877414, 551763.21787653409, 553065.95977843856, 541208.67821505677, 534375.70852721413, 519479.44054714259, 470810.04934716009, 479341.14085401001, 468814.44297717843, 450727.62432757171, 419001.8560296697, 399453.74064967455, 410897.63343123446, 406333.2285727514, 400966.86377274361, 395893.04519821319, 386755.18751898769, 349120.19541660679, 349086.13711752999],
      "text": ["GHG emissions: 540151.86 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 551763.22 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 553065.96 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 541208.68 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 534375.71 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 519479.44 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 470810.05 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 479341.14 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 468814.44 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 450727.62 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 419001.86 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 399453.74 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 410897.63 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 406333.23 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 400966.86 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 395893.05 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 386755.19 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 349120.2 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "GHG emissions: 349086.14 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [207092, 208834.00000000003, 203064, 198421, 197907, 195227, 190160, 200804, 187638, 186021.99999999997, 185684, 178496.00000000003, 186744.99999999997, 187630.99999999997, 183624.99999999997, 177771, 172217, 155912, 155911.99999999997],
      "text": ["GHG emissions: 207092 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 208834 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 203064 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 198421 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 197907 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 195227 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 190160 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 200804 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 187638 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 186022 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 185684 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 178496 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 186745 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 187631 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 183625 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 177771 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 172217 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 155912 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "GHG emissions: 155912 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [129607.68379793684, 127589.09341183276, 124939.48145671852, 121139.85061886405, 116500.39006390685, 119052.17536164938, 112751.09019073026, 119889.7048668722, 108610.64840912273, 107355.09725106243, 108147.46081930879, 102205.25781029012, 106532.23606342559, 105425.41061336124, 103303.26028514071, 103969.18586882064, 103089.17016014807, 95335.824833102874, 95285.970498498355],
      "text": ["GHG emissions: 129607.68 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 127589.09 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 124939.48 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 121139.85 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 116500.39 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 119052.18 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 112751.09 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 119889.7 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 108610.65 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 107355.1 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 108147.46 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 102205.26 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 106532.24 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 105425.41 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 103303.26 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 103969.19 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 103089.17 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 95335.82 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "GHG emissions: 95285.97 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [85491.118806200553, 81436.83938765213, 69137.60246466173, 80687.080035963401, 78685.336225065534, 70453.807568028773, 66951.356971040397, 74932.641720364758, 67286.766688426171, 61660.21706760837, 62427.748241583089, 58390.551691371569, 54932.022979972884, 57611.297251590622, 54767.292339029198, 55918.866353110447, 52499.347272203369, 47501.785786747067, 47502.274103695905],
      "text": ["GHG emissions: 85491.12 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 81436.84 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 69137.6 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 80687.08 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 78685.34 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 70453.81 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 66951.36 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 74932.64 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 67286.77 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 61660.22 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 62427.75 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 58390.55 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 54932.02 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 57611.3 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 54767.29 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 55918.87 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 52499.35 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 47501.79 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "GHG emissions: 47502.27 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [112483.78257931564, 112395.3320562672, 114128.30588644787, 112592.00853266065, 115994.67801057767, 111914.10150295834, 105803.93940672155, 99405.197090379355, 96417.779189989189, 92171.612392804556, 85005.749701089138, 82103.047107401944, 80393.452506045272, 79136.930891179218, 78688.906799293269, 76138.887797088537, 71138.005501882741, 62644.829826163921, 62503.464199434049],
      "text": ["GHG emissions: 112483.78 kt CO2eq<br>Period: 2003<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 112395.33 kt CO2eq<br>Period: 2004<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 114128.31 kt CO2eq<br>Period: 2005<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 112592.01 kt CO2eq<br>Period: 2006<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 115994.68 kt CO2eq<br>Period: 2007<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 111914.1 kt CO2eq<br>Period: 2008<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 105803.94 kt CO2eq<br>Period: 2009<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 99405.2 kt CO2eq<br>Period: 2010<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 96417.78 kt CO2eq<br>Period: 2011<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 92171.61 kt CO2eq<br>Period: 2012<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 85005.75 kt CO2eq<br>Period: 2013<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 82103.05 kt CO2eq<br>Period: 2014<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 80393.45 kt CO2eq<br>Period: 2015<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 79136.93 kt CO2eq<br>Period: 2016<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 78688.91 kt CO2eq<br>Period: 2017<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 76138.89 kt CO2eq<br>Period: 2018<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 71138.01 kt CO2eq<br>Period: 2019<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 62644.83 kt CO2eq<br>Period: 2020<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "GHG emissions: 62503.46 kt CO2eq<br>Period: 2021<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "GHG emissions (REMIND_62)",
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
      "range": [0, 12660470.504960965],
      "tickmode": "array",
      "ticktext": ["0e+00", "5e+06", "1e+07"],
      "tickvals": [0, 5000000, 10000000],
      "categoryorder": "array",
      "categoryarray": ["0e+00", "5e+06", "1e+07"],
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
        "text": "kt CO2eq",
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
    "b55c7baf6d7f": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c59a877a5": {
      "y": {}
    }
  },
  "cur_data": "b55c7baf6d7f",
  "visdat": {
    "b55c7baf6d7f": ["function (y) ", "x"],
    "b55c59a877a5": ["function (y) ", "x"]
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

  
