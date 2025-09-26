(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_62_Trade_Imports___energy_line') 

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
      "y": [-41.420000000000002, -29.819999999999997, -26.539999999999996, -18.16, -12.67, -6.2300000000000013, -7.3499999999999996, -1.0700000000000001, 3.2200000000000006, 6.1399999999999988, 12.690000000000001, 13.029999999999999, 13.030000000000001, 13.030000000000001, 13.030000000000001, 13.030000000000001, 13.029999999999999, 13.029999999999998, 13.029999999999999],
      "text": ["Imports - energy: -41.42 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: -29.82 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: -26.54 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: -18.16 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: -12.67 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: -6.23 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: -7.35 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: -1.07 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 3.22 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 6.14 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 12.69 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 13.03 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 13.03 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 13.03 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 13.03 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 13.03 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 13.03 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 13.03 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: ARG<br>Countries in region: Argentina", "Imports - energy: 13.03 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [52.740000000000002, 53.719999999999999, 57.559999999999995, 54.689999999999998, 50.850000000000001, 52.18, 52.600000000000009, 51.779999999999994, 51.369999999999997, 50.280000000000001, 51.519999999999996, 47.04999999999999, 50.090000000000003, 50.090000000000003, 50.090000000000003, 50.089999999999996, 50.090000000000003, 50.090000000000011, 50.090000000000003],
      "text": ["Imports - energy: 52.74 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 53.72 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 57.56 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 54.69 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 50.85 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 52.18 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 52.6 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 51.78 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 51.37 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 50.28 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 51.52 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 47.05 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 50.09 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 50.09 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 50.09 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 50.09 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 50.09 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 50.09 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein", "Imports - energy: 50.09 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: CHE<br>Countries in region: Switzerland; Liechtenstein"],
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
      "y": [40.462460476332289, 44.251687954786696, 48.23099374431763, 49.458305032458838, 50.113873624484043, 48.464695969107439, 46.250062390824375, 45.53993393821326, 47.474310304137866, 45.455583260718626, 42.264701763345037, 44.752164057615843, 44.803459761752251, 44.817332799206298, 44.777437363678303, 44.737830107636896, 44.711785341269724, 44.728279122794603, 44.73209617475603],
      "text": ["Imports - energy: 40.46 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 44.25 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 48.23 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 49.46 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 50.11 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 48.46 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 46.25 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Imports - energy: 45.54 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Imports - energy: 47.47 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 45.46 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 42.26 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 44.75 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 44.8 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 44.82 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 44.78 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 44.74 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 44.71 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 44.73 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - energy: 44.73 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: NES_other<br>Countries in region: Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [49.009999999999998, 46, 47.770000000000003, 42.380000000000003, 47.999999999999993, 45.219999999999999, 41.670000000000002, 23.709999999999997, 33.259999999999998, 16.300000000000001, 12.32, 13.800000000000001, 13.800000000000001, 13.799999999999999, 13.800000000000001, 13.800000000000001, 13.800000000000001, 13.800000000000001, 13.800000000000002],
      "text": ["Imports - energy: 49.01 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 46 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 47.77 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 42.38 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 48 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 45.22 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 41.67 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 23.71 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 33.26 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 16.3 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 12.32 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 13.8 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 13.8 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 13.8 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 13.8 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 13.8 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 13.8 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 13.8 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: ALB<br>Countries in region: Albania", "Imports - energy: 13.8 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: ALB<br>Countries in region: Albania"],
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
      "y": [-0.084881634482109308, -9.2442860379534384, -10.453746694052519, -10.079065986241007, -9.2052267666177539, -11.028785525845691, -3.9373543382758776, -6.1416549576741826, -10.211093865779191, -9.1704544110529849, -11.928532707723114, -8.615156349632878, -8.6447959748228751, -8.6843269635752272, -8.7386221778421138, -8.8320947319383549, -8.9356199280693343, -8.9500693266924412, -8.8928406686558414],
      "text": ["Imports - energy: -0.08 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -9.24 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -10.45 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -10.08 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -9.21 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -11.03 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -3.94 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -6.14 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -10.21 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -9.17 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -11.93 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -8.62 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -8.64 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -8.68 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -8.74 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -8.83 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -8.94 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -8.95 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - energy: -8.89 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: LAM_other<br>Countries in region: Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [-27.149999999999995, -18.109999999999999, -26.850000000000001, -24.66, -22.660000000000004, -23.329999999999998, -18.98, -16.460000000000001, -9.8699999999999992, -4.9699999999999998, -6.8899999999999997, -7.3899999999999997, -7.3899999999999997, -7.3899999999999997, -7.3899999999999997, -7.3899999999999988, -7.3899999999999997, -7.3899999999999997, -7.3900000000000006],
      "text": ["Imports - energy: -27.15 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -18.11 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -26.85 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -24.66 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -22.66 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -23.33 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -18.98 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -16.46 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -9.87 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -4.97 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -6.89 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -7.39 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -7.39 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -7.39 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -7.39 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -7.39 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -7.39 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -7.39 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: EGY<br>Countries in region: Egypt", "Imports - energy: -7.39 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [-47.050000000000004, -48.240000000000002, -48.950000000000003, -53.810000000000002, -53.289999999999999, -50.43, -50.200000000000003, -51.369999999999997, -52.960000000000008, -59.109999999999999, -64.439999999999998, -67.930000000000007, -72.530000000000001, -72.530000000000001, -72.530000000000001, -72.530000000000001, -72.530000000000001, -72.530000000000001, -72.530000000000001],
      "text": ["Imports - energy: -47.05 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -48.24 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -48.95 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -53.81 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -53.29 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -50.43 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -50.2 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -51.37 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -52.96 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -59.11 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -64.44 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -67.93 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -72.53 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -72.53 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -72.53 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -72.53 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -72.53 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -72.53 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: CAN<br>Countries in region: Canada", "Imports - energy: -72.53 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: CAN<br>Countries in region: Canada"],
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
      "y": [21.199999999999999, 23.579999999999998, 24.030000000000001, 21.719999999999999, 17.579999999999998, 13.91, 12.67, 8.1400000000000006, 11.98, 16.460000000000001, 16.41, 17.079999999999995, 19.48, 19.48, 19.48, 19.48, 19.480000000000004, 19.48, 19.48],
      "text": ["Imports - energy: 21.2 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 23.58 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 24.03 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 21.72 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 17.58 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 13.91 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 12.67 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 8.14 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 11.98 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 16.46 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 16.41 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 17.08 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 19.48 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 19.48 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 19.48 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 19.48 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 19.48 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 19.48 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand", "Imports - energy: 19.48 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: NZL<br>Countries in region: New Zealand"],
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
      "y": [-52.049999999999997, -52.039999999999999, -44.959999999999994, -42.219999999999999, -36.640000000000001, -26.920000000000002, -24.749999999999996, -22.700000000000003, -18.02, -13.98, -12.73, -10.789999999999997, -4.6699999999999999, -4.6700000000000008, -4.669999999999999, -4.669999999999999, -4.6699999999999999, -4.6699999999999999, -4.669999999999999],
      "text": ["Imports - energy: -52.05 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -52.04 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -44.96 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -42.22 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -36.64 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -26.92 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -24.75 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -22.7 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -18.02 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -13.98 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -12.73 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -10.79 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -4.67 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -4.67 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -4.67 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -4.67 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -4.67 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -4.67 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: MEX<br>Countries in region: Mexico", "Imports - energy: -4.67 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [-768.21000000000004, -764.5200000000001, -736.37000000000012, -693.01999999999998, -680.48000000000002, -588.74000000000001, -594.19000000000005, -512.23000000000002, -611.50000000000011, -584.36000000000001, -494.81999999999999, -582.90000000000009, -581.35000000000002, -581.35000000000002, -581.35000000000014, -581.35000000000002, -581.35000000000002, -581.35000000000002, -581.35000000000002],
      "text": ["Imports - energy: -768.21 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -764.52 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -736.37 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -693.02 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -680.48 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -588.74 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -594.19 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -512.23 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -611.5 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -584.36 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -494.82 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -582.9 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -581.35 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -581.35 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -581.35 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -581.35 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -581.35 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -581.35 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - energy: -581.35 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [45.04999999999999, 44.240000000000002, 43.330000000000005, 39.560000000000002, 39, 37.330000000000005, 30.580000000000002, 40.409999999999997, 32.310000000000002, 30.300000000000001, 25.670000000000005, 27.210000000000004, 27.210000000000001, 27.210000000000001, 27.210000000000001, 27.210000000000001, 27.210000000000001, 27.209999999999997, 27.210000000000004],
      "text": ["Imports - energy: 45.05 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 44.24 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 43.33 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 39.56 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 39 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 37.33 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 30.58 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 40.41 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 32.31 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 30.3 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 25.67 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 27.21 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 27.21 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 27.21 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 27.21 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 27.21 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 27.21 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 27.21 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine", "Imports - energy: 27.21 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: UKR<br>Countries in region: Ukraine"],
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
      "y": [53.890000000000008, 70.290000000000006, 65.510000000000005, 75.340000000000003, 61.289999999999999, 66.659999999999982, 63.20000000000001, 49.25, 56.939999999999991, 59.699999999999996, 52.559999999999995, 44.430000000000007, 44.43, 44.43, 44.43, 44.43, 44.43, 44.430000000000007, 44.43],
      "text": ["Imports - energy: 53.89 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 70.29 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 65.51 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 75.34 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 61.29 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 66.66 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 63.2 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 49.25 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 56.94 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 59.7 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 52.56 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 44.43 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 44.43 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 44.43 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 44.43 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 44.43 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 44.43 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 44.43 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: URY<br>Countries in region: Uruguay", "Imports - energy: 44.43 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: URY<br>Countries in region: Uruguay"],
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
      "y": [10.390000000000001, 13.130000000000001, 9.5800000000000001, 7.3999999999999995, 8.0800000000000001, 8.2100000000000009, 4.0999999999999996, 7.2399999999999993, 7.71, 10.59, 13.889999999999999, 11.869999999999997, 11.869999999999999, 11.869999999999997, 11.869999999999997, 11.869999999999999, 11.869999999999999, 11.870000000000001, 11.869999999999999],
      "text": ["Imports - energy: 10.39 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 13.13 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 9.58 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 7.4 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 8.08 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 8.21 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 4.1 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 7.24 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 7.71 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 10.59 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 13.89 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 11.87 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 11.87 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 11.87 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 11.87 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 11.87 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 11.87 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 11.87 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: BRA<br>Countries in region: Brazil", "Imports - energy: 11.87 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [-238.03, -287.03000000000003, -296.27999999999997, -260.94999999999999, -242.74000000000001, -209.08000000000001, -207.28999999999999, -173.38999999999999, -196.00999999999999, -166.05000000000001, -178.77000000000001, -178.77000000000001, -178.77000000000004, -178.77000000000001, -178.77000000000001, -178.77000000000001, -178.77000000000001, -178.77000000000001, -178.77000000000004],
      "text": ["Imports - energy: -238.03 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -287.03 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -296.28 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -260.95 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -242.74 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -209.08 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -207.29 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -173.39 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -196.01 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -166.05 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -178.77 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -178.77 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -178.77 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -178.77 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -178.77 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -178.77 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -178.77 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -178.77 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of", "Imports - energy: -178.77 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: VEN<br>Countries in region: Venezuela, Bolivarian Republic of"],
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
      "y": [81.260000000000005, 81.609999999999999, 79.560000000000002, 79.519999999999996, 80.829999999999998, 80.299999999999997, 80.659999999999997, 82.019999999999996, 81.950000000000003, 82.450000000000003, 83.470000000000013, 81.699999999999989, 81.450000000000003, 81.450000000000003, 81.450000000000017, 81.450000000000017, 81.450000000000017, 81.450000000000003, 81.450000000000003],
      "text": ["Imports - energy: 81.26 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.61 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 79.56 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 79.52 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 80.83 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 80.3 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 80.66 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 82.02 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.95 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 82.45 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 83.47 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.7 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.45 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.45 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.45 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.45 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.45 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.45 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - energy: 81.45 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [47.090000000000003, 46.159999999999997, 44.93, 44.539999999999999, 42.710000000000001, 42.719999999999999, 38.539999999999999, 41.710000000000001, 40.920000000000009, 41.799999999999997, 45.32, 45.77000000000001, 45.770000000000003, 45.770000000000003, 45.770000000000003, 45.770000000000003, 45.77000000000001, 45.770000000000003, 45.770000000000003],
      "text": ["Imports - energy: 47.09 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 46.16 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 44.93 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 44.54 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 42.71 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 42.72 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 38.54 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 41.71 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 40.92 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 41.8 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 45.32 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 45.77 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 45.77 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 45.77 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 45.77 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 45.77 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 45.77 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 45.77 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: PHL<br>Countries in region: Philippines", "Imports - energy: 45.77 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [-127.83, -125.59999999999999, -133.66999999999999, -128.34999999999999, -134.09999999999997, -126.26999999999997, -132.23999999999998, -153.61000000000001, -143.74000000000004, -153.24000000000001, -172.43999999999997, -192.02000000000001, -190.18999999999994, -190.18999999999997, -190.18999999999997, -190.18999999999997, -190.19, -190.18999999999997, -190.19],
      "text": ["Imports - energy: -127.83 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -125.6 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -133.67 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -128.35 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -134.1 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -126.27 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -132.24 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -153.61 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -143.74 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -153.24 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -172.44 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -192.02 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -190.19 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -190.19 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -190.19 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -190.19 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -190.19 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -190.19 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands", "Imports - energy: -190.19 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: AUS<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands"],
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
      "y": [-185.31999999999999, -189.69000000000003, -190.21000000000001, -193.69000000000003, -206.03, -212.72, -219.86000000000001, -239.49000000000001, -285.13999999999999, -294.75999999999999, -268.52999999999997, -274.13, -274.13, -274.13, -274.13, -274.13, -274.13, -274.13000000000005, -274.13],
      "text": ["Imports - energy: -185.32 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -189.69 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -190.21 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -193.69 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -206.03 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -212.72 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -219.86 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -239.49 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -285.14 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -294.76 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -268.53 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -274.13 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -274.13 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -274.13 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -274.13 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -274.13 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -274.13 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -274.13 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: COL<br>Countries in region: Colombia", "Imports - energy: -274.13 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: COL<br>Countries in region: Colombia"],
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
      "y": [-136.59999999999999, -125.81999999999998, -133.18999999999997, -108.15000000000002, -100.04000000000001, -106.78, -133.24000000000001, -126.95999999999999, -107.23, -122.88, -107.34, -116.89, -116.88999999999999, -116.89, -116.88999999999999, -116.89, -116.89, -116.89, -116.89],
      "text": ["Imports - energy: -136.6 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -125.82 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -133.19 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -108.15 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -100.04 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -106.78 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -133.24 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -126.96 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -107.23 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -122.88 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -107.34 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -116.89 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -116.89 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -116.89 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -116.89 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -116.89 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -116.89 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -116.89 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan", "Imports - energy: -116.89 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: KAZ<br>Countries in region: Kazakhstan"],
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
      "y": [-52.926004228364327, -56.955711697042688, -72.913987046754428, -73.853646405371904, -79.240693359717142, -82.42532742087559, -71.904082657963087, -66.859862519721361, -59.266704514819558, -57.267181691391237, -56.562183128029595, -53.358151554526017, -53.777000230425294, -54.174441622559485, -54.579651640462856, -54.998596797391258, -55.4251969816913, -55.806680962666704, -56.166375818955053],
      "text": ["Imports - energy: -52.93 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -56.96 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -72.91 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -73.85 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -79.24 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -82.43 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -71.9 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -66.86 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -59.27 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -57.27 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -56.56 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -53.36 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -53.78 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -54.17 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -54.58 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -55 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -55.43 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -55.81 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - energy: -56.17 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [-73.469999999999999, -81.079999999999998, -84.629999999999995, -82.950000000000003, -84.230000000000004, -82.129999999999981, -84.019999999999982, -85.849999999999994, -80, -77.859999999999999, -83.840000000000003, -83.670000000000002, -83.670000000000002, -83.670000000000002, -83.670000000000016, -83.670000000000002, -83.670000000000002, -83.670000000000002, -83.670000000000002],
      "text": ["Imports - energy: -73.47 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -81.08 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -84.63 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -82.95 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -84.23 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -82.13 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -84.02 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -85.85 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -80 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -77.86 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -83.84 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -83.67 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -83.67 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -83.67 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -83.67 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -83.67 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -83.67 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -83.67 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation", "Imports - energy: -83.67 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [10.489999999999998, 9.7700000000000014, 10.730000000000002, 8.9399999999999995, 8.8599999999999994, 10.070000000000002, 11.439999999999998, 13.07, 13.509999999999998, 15.770000000000001, 14.589999999999998, 16.680000000000003, 16.68, 16.68, 16.68, 16.68, 16.68, 16.68, 16.680000000000003],
      "text": ["Imports - energy: 10.49 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - energy: 9.77 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - energy: 10.73 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - energy: 8.94 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - energy: 8.86 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - energy: 10.07 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - energy: 11.44 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 13.07 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 13.51 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 15.77 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 14.59 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 16.68 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 16.68 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 16.68 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 16.68 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 16.68 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 16.68 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 16.68 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - energy: 16.68 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [-16.685527535552485, -19.512957275075898, -23.71478750586337, -22.343622729032891, -18.383721660346829, -17.566822669360022, -19.647857301943191, -21.450904861122041, -17.176606786613664, -11.510034264067254, -8.0574552494138398, -3.6840122599531013, -3.6517434597595324, -3.5981039187926922, -3.5481305466221222, -3.5030902466938478, -3.4944296393028922, -3.4823427979682045, -3.4147978280842146],
      "text": ["Imports - energy: -16.69 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -19.51 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -23.71 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -22.34 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -18.38 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -17.57 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -19.65 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -21.45 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -17.18 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -11.51 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -8.06 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -3.68 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -3.65 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -3.6 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -3.55 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -3.5 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -3.49 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -3.48 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Imports - energy: -3.41 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: SEA_other2<br>Countries in region: Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [-30.319999999999997, -47.75, -47.289999999999992, -46.520000000000003, -38.840000000000003, -26.449999999999996, -25.239999999999998, -12.689999999999998, -15.970000000000002, -15.729999999999999, -15.109999999999999, -15.109999999999999, -15.110000000000001, -15.110000000000001, -15.109999999999999, -15.110000000000001, -15.109999999999998, -15.109999999999999, -15.109999999999999],
      "text": ["Imports - energy: -30.32 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -47.75 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -47.29 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -46.52 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -38.84 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -26.45 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -25.24 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -12.69 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.97 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.73 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.11 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.11 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.11 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.11 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.11 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.11 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.11 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.11 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam", "Imports - energy: -15.11 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [20.07, 20.780000000000001, 20.289999999999999, 22.989999999999998, 24.199999999999999, 24.100000000000001, 23.359999999999999, 23.560000000000002, 23.120000000000005, 22.810000000000002, 23.440000000000001, 24.119999999999997, 24.120000000000001, 24.119999999999997, 24.120000000000005, 24.120000000000001, 24.120000000000005, 24.120000000000001, 24.120000000000005],
      "text": ["Imports - energy: 20.07 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 20.78 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 20.29 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 22.99 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.2 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.1 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 23.36 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 23.56 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 23.12 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 22.81 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 23.44 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.12 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.12 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.12 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.12 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.12 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.12 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.12 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan", "Imports - energy: 24.12 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [98.400000000000006, 98.70999999999998, 98.170000000000002, 98.299999999999997, 98.129999999999995, 98.25, 97.930000000000007, 97.689999999999998, 97.700000000000003, 97.609999999999999, 97.559999999999988, 97.680000000000007, 97.680000000000007, 97.680000000000021, 97.680000000000007, 97.679999999999993, 97.680000000000007, 97.680000000000021, 97.680000000000007],
      "text": ["Imports - energy: 98.4 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 98.71 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 98.17 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 98.3 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 98.13 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 98.25 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.93 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.69 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.7 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.61 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.56 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.68 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.68 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.68 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.68 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.68 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.68 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.68 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: SGP<br>Countries in region: Singapore", "Imports - energy: 97.68 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: SGP<br>Countries in region: Singapore"],
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
      "y": [18.469999999999999, 16.030000000000001, 15.050000000000001, 13.719999999999999, 13.630000000000001, 12.82, 12.360000000000001, 14.529999999999999, 16.940000000000001, 17.789999999999999, 14.980000000000002, 16.84, 16.84, 16.84, 16.84, 16.84, 16.84, 16.84, 16.84],
      "text": ["Imports - energy: 18.47 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.03 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 15.05 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 13.72 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 13.63 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 12.82 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 12.36 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 14.53 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.94 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 17.79 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 14.98 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.84 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.84 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.84 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.84 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.84 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.84 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.84 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh", "Imports - energy: 16.84 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [-53.990000000000002, -50.170000000000002, -55.909999999999989, -70.829999999999998, -74.090000000000003, -73.629999999999995, -74.40000000000002, -79.049999999999997, -106.70999999999999, -107.20999999999999, -112.28, -103.09, -103.09, -103.09, -103.09, -103.08999999999999, -103.09000000000002, -103.09, -103.09],
      "text": ["Imports - energy: -53.99 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -50.17 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -55.91 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -70.83 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -74.09 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -73.63 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -74.4 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -79.05 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -106.71 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -107.21 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -112.28 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -103.09 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -103.09 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -103.09 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -103.09 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -103.09 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -103.09 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -103.09 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia", "Imports - energy: -103.09 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [44.649999999999999, 46.759999999999991, 44.259999999999998, 43.200000000000003, 42.520000000000003, 39.409999999999997, 40, 40.109999999999999, 41.649999999999999, 40.210000000000001, 42.469999999999999, 41.570000000000007, 41.57, 41.570000000000007, 41.569999999999993, 41.57, 41.57, 41.57, 41.57],
      "text": ["Imports - energy: 44.65 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 46.76 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 44.26 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 43.2 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 42.52 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 39.41 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 40 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 40.11 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 41.65 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 40.21 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 42.47 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 41.57 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 41.57 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 41.57 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 41.57 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 41.57 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 41.57 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 41.57 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: THA<br>Countries in region: Thailand", "Imports - energy: 41.57 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: THA<br>Countries in region: Thailand"],
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
      "y": [83.680000000000007, 82.069999999999993, 80.920000000000002, 80.719999999999999, 82.650000000000006, 82.349999999999994, 80.359999999999999, 80.140000000000001, 88.940000000000012, 93.829999999999998, 93.920000000000002, 93.980000000000004, 93.019999999999996, 93.019999999999996, 93.019999999999996, 93.019999999999996, 93.019999999999996, 93.019999999999982, 93.019999999999996],
      "text": ["Imports - energy: 83.68 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 82.07 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 80.92 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 80.72 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 82.65 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 82.35 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 80.36 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 80.14 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 88.94 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.83 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.92 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.98 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.02 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.02 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.02 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.02 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.02 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.02 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: JPN<br>Countries in region: Japan", "Imports - energy: 93.02 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: JPN<br>Countries in region: Japan"],
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
      "y": [-118.9256164112192, -125.43623666322333, -127.76045489112349, -118.49446788541532, -125.18786707439635, -116.93749240935361, -97.405863768824346, -94.538455051211969, -74.491149385343107, -53.147063390249365, -39.460656430331866, -30.54110959965573, -30.710223746999755, -30.867731773644721, -30.993819932074274, -31.111414662310573, -31.241148013795581, -31.337656758448937, -31.40938289383676],
      "text": ["Imports - energy: -118.93 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Imports - energy: -125.44 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Imports - energy: -127.76 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -118.49 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -125.19 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -116.94 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -97.41 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -94.54 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -74.49 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -53.15 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -39.46 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -30.54 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -30.71 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -30.87 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -30.99 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -31.11 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -31.24 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -31.34 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - energy: -31.41 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [66.849999999999994, 68.909999999999997, 67.079999999999984, 67.409999999999997, 69.409999999999997, 67.930000000000007, 65.459999999999994, 70.150000000000006, 70.609999999999999, 64.989999999999995, 61.289999999999999, 64.200000000000003, 65.239999999999995, 65.239999999999995, 65.239999999999995, 65.239999999999995, 65.239999999999995, 65.239999999999995, 65.239999999999995],
      "text": ["Imports - energy: 66.85 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 68.91 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 67.08 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 67.41 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 69.41 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 67.93 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 65.46 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 70.15 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 70.61 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 64.99 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 61.29 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 64.2 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 65.24 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 65.24 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 65.24 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 65.24 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 65.24 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 65.24 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: CHL<br>Countries in region: Chile", "Imports - energy: 65.24 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: CHL<br>Countries in region: Chile"],
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
      "y": [22.870000000000001, 24.09, 23.66, 19.710000000000001, 16.149999999999999, 13.170000000000002, 12.17, 11.52, 10.25, 10.33, 10.44, 10.960000000000001, 11.559999999999999, 11.56, 11.56, 11.559999999999999, 11.56, 11.56, 11.56],
      "text": ["Imports - energy: 22.87 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 24.09 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 23.66 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 19.71 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 16.15 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 13.17 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 12.17 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 11.52 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 10.25 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 10.33 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 10.44 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 10.96 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 11.56 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 11.56 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 11.56 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 11.56 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 11.56 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 11.56 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: ISL<br>Countries in region: Iceland", "Imports - energy: 11.56 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: ISL<br>Countries in region: Iceland"],
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
      "y": [69.709999999999994, 70.129999999999995, 71.579999999999998, 71.710000000000008, 72.730000000000004, 70.640000000000001, 69.040000000000006, 69.620000000000005, 71.609999999999999, 74.019999999999996, 73.069999999999993, 74.209999999999994, 75.209999999999994, 75.209999999999994, 75.209999999999994, 75.209999999999994, 75.209999999999994, 75.209999999999994, 75.209999999999994],
      "text": ["Imports - energy: 69.71 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 70.13 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 71.58 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 71.71 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 72.73 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 70.64 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 69.04 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 69.62 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 71.61 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 74.02 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 73.07 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 74.21 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 75.21 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 75.21 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 75.21 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 75.21 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 75.21 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 75.21 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: TUR<br>Countries in region: Turkey", "Imports - energy: 75.21 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [-2.7513034907075871, -3.5172006874677741, -12.433389919927892, -19.7723426121701, -34.775322301877949, -34.983824716607373, -44.38123135005695, -53.377567452126726, -56.598446868823729, -47.805607425240403, -62.477777383562241, -56.226548344560257, -56.291493494839067, -56.346278044857364, -56.402581981030423, -56.430116036757958, -56.426799581114125, -56.407397799923906, -56.374207057730516],
      "text": ["Imports - energy: -2.75 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - energy: -3.52 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - energy: -12.43 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - energy: -19.77 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - energy: -34.78 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - energy: -34.98 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - energy: -44.38 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - energy: -53.38 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - energy: -56.6 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - energy: -47.81 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - energy: -62.48 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - energy: -56.23 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - energy: -56.29 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - energy: -56.35 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - energy: -56.4 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - energy: -56.43 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - energy: -56.43 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - energy: -56.41 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - energy: -56.37 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: REF_other<br>Countries in region: Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [4.4000000000000004, 4.4699999999999998, 4.0899999999999999, 4.25, 4.6100000000000003, 4.839999999999999, 4.79, 4.5700000000000003, 4.9400000000000004, 4.9500000000000002, 5.5899999999999999, 5.9299999999999997, 5.9299999999999988, 5.9299999999999997, 5.9300000000000006, 5.9299999999999997, 5.9299999999999997, 5.9300000000000006, 5.9300000000000006],
      "text": ["Imports - energy: 4.4 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 4.47 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 4.09 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 4.25 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 4.61 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 4.84 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 4.79 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 4.57 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 4.94 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 4.95 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 5.59 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 5.93 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 5.93 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 5.93 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 5.93 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 5.93 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 5.93 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 5.93 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia", "Imports - energy: 5.93 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [40.652821756281796, 40.756590745064116, 41.867595627642174, 42.660768031217295, 43.779204624189276, 41.579549777030877, 35.535628310052878, 36.388046620800935, 36.567145656651867, 36.000411823710451, 34.138463699902601, 33.08199859727592, 33.751616985418828, 33.764900761563062, 33.77405103116574, 33.797364473687942, 33.826744925227715, 33.850160161648809, 33.87398759706781],
      "text": ["Imports - energy: 40.65 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 40.76 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 41.87 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 42.66 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 43.78 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 41.58 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 35.54 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 36.39 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 36.57 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 36 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 34.14 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 33.08 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 33.75 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 33.76 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 33.77 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 33.8 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 33.83 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 33.85 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - energy: 33.87 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [-97.060000000000002, -88.109999999999999, -79.909999999999997, -78.829999999999998, -76.689999999999998, -65.060000000000002, -63.619999999999997, -67.530000000000001, -65.930000000000007, -37.200000000000003, -34.829999999999998, -33.399999999999999, -33.400000000000006, -33.399999999999999, -33.399999999999999, -33.400000000000006, -33.399999999999999, -33.399999999999999, -33.399999999999999],
      "text": ["Imports - energy: -97.06 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -88.11 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -79.91 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -78.83 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -76.69 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -65.06 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -63.62 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -67.53 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -65.93 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -37.2 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -34.83 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -33.4 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -33.4 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -33.4 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -33.4 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -33.4 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -33.4 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -33.4 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - energy: -33.4 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [19.66, 21.379999999999999, 22.050000000000001, 23.470000000000002, 24.969999999999999, 25.789999999999999, 27.449999999999999, 28.350000000000001, 29.380000000000003, 31.500000000000004, 32.479999999999997, 34.310000000000002, 34.310000000000002, 34.310000000000002, 34.310000000000002, 34.310000000000002, 34.310000000000002, 34.310000000000002, 34.310000000000002],
      "text": ["Imports - energy: 19.66 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 21.38 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 22.05 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 23.47 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 24.97 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 25.79 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 27.45 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 28.35 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 29.38 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 31.5 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 32.48 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 34.31 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 34.31 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 34.31 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 34.31 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 34.31 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 34.31 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 34.31 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: IND<br>Countries in region: India", "Imports - energy: 34.31 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: IND<br>Countries in region: India"],
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
      "y": [27.73, 28.699999999999996, 29.660000000000004, 27.969999999999999, 28.59, 25.260000000000002, 22.120000000000001, 22.210000000000001, 18.550000000000001, 15.69, 13.939999999999998, 9.2100000000000009, 7.3099999999999996, 7.3100000000000005, 7.3099999999999987, 7.3099999999999996, 7.3099999999999996, 7.3099999999999996, 7.3099999999999987],
      "text": ["Imports - energy: 27.73 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 28.7 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 29.66 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 27.97 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 28.59 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 25.26 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 22.12 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 22.21 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 18.55 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 15.69 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 13.94 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 9.21 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 7.31 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 7.31 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 7.31 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 7.31 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 7.31 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 7.31 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: USA<br>Countries in region: United States", "Imports - energy: 7.31 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: USA<br>Countries in region: United States"],
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
      "y": [-7.120000000000001, -7.4099999999999993, -5.9800000000000004, -5.2199999999999998, -4.6100000000000003, -3.46, -3.4399999999999999, -2.8700000000000006, -2.1200000000000001, -1.55, 0.22, 1.96, 1.96, 1.96, 1.96, 1.9600000000000002, 1.9600000000000002, 1.9599999999999997, 1.96],
      "text": ["Imports - energy: -7.12 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: -7.41 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: -5.98 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: -5.22 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: -4.61 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: -3.46 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: -3.44 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: -2.87 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: -2.12 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: -1.55 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: 0.22 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: 1.96 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: 1.96 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: 1.96 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: 1.96 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: 1.96 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: 1.96 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: 1.96 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - energy: 1.96 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [75.269999999999996, 76.590000000000003, 78.75, 77.900000000000006, 78.939999999999998, 78.180000000000021, 76.239999999999995, 73.049999999999997, 74.560000000000002, 73.310000000000002, 70.340000000000003, 69.359999999999999, 71.430000000000007, 71.430000000000007, 71.430000000000007, 71.430000000000007, 71.429999999999993, 71.429999999999993, 71.430000000000007],
      "text": ["Imports - energy: 75.27 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 76.59 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 78.75 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 77.9 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 78.94 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 78.18 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 76.24 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 73.05 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 74.56 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 73.31 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 70.34 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 69.36 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 71.43 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 71.43 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 71.43 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 71.43 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 71.43 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 71.43 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: ESP<br>Countries in region: Spain", "Imports - energy: 71.43 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: ESP<br>Countries in region: Spain"],
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
      "y": [12.4, 13.75, 14.969999999999999, 20.100000000000001, 25.039999999999999, 27.349999999999998, 28.600000000000005, 33.209999999999994, 32.520000000000003, 26.98, 27.329999999999998, 28.390000000000001, 28.550000000000001, 28.550000000000004, 28.550000000000001, 28.549999999999997, 28.549999999999997, 28.550000000000001, 28.549999999999997],
      "text": ["Imports - energy: 12.4 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 13.75 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 14.97 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 20.1 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 25.04 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 27.35 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 28.6 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 33.21 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 32.52 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 26.98 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 27.33 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 28.39 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 28.55 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 28.55 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 28.55 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 28.55 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 28.55 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 28.55 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: POL<br>Countries in region: Poland", "Imports - energy: 28.55 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: POL<br>Countries in region: Poland"],
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
      "y": [-118.86, -126.55, -121.8, -119.66, -114.74999999999999, -104.98999999999999, -102.35000000000001, -111.90000000000001, -104.39, -99.140000000000001, -90.580000000000013, -93.030000000000015, -93.030000000000015, -93.030000000000001, -93.030000000000001, -93.030000000000001, -93.030000000000015, -93.030000000000001, -93.030000000000015],
      "text": ["Imports - energy: -118.86 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -126.55 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -121.8 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -119.66 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -114.75 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -104.99 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -102.35 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -111.9 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -104.39 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -99.14 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -90.58 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -93.03 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -93.03 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -93.03 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -93.03 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -93.03 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -93.03 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -93.03 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria", "Imports - energy: -93.03 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [-30.379999999999995, -22.690000000000001, -23.140000000000004, -23.719999999999999, -16.559999999999999, -10.289999999999999, -11.49, -15.649999999999999, -15.5, -19.050000000000001, -18.59, -14.479999999999999, -14.480000000000002, -14.48, -14.48, -14.48, -14.479999999999999, -14.480000000000002, -14.479999999999999],
      "text": ["Imports - energy: -30.38 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -22.69 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -23.14 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -23.72 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -16.56 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -10.29 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -11.49 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -15.65 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -15.5 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -19.05 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -18.59 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -14.48 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -14.48 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -14.48 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -14.48 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -14.48 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -14.48 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -14.48 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa", "Imports - energy: -14.48 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [59.97999999999999, 59.740000000000002, 59.469999999999999, 60.009999999999991, 58.459999999999994, 60, 59.32, 60.659999999999997, 60.560000000000002, 60.70000000000001, 62.090000000000003, 60.880000000000003, 61.399999999999999, 61.399999999999999, 61.399999999999999, 61.399999999999999, 61.400000000000006, 61.399999999999991, 61.399999999999999],
      "text": ["Imports - energy: 59.98 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 59.74 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 59.47 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 60.01 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 58.46 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 60 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 59.32 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 60.66 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 60.56 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 60.7 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 62.09 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 60.88 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 61.4 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 61.4 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 61.4 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 61.4 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 61.4 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 61.4 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: DEU<br>Countries in region: Germany", "Imports - energy: 61.4 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: DEU<br>Countries in region: Germany"],
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
      "y": [40.137790080145713, 40.462456393123404, 43.055528508397167, 43.799583013970434, 43.949595457919443, 43.475952454118818, 40.342995850097203, 45.959268720064841, 42.978868562983834, 41.291449414710016, 43.283588786783291, 42.302254302404044, 43.583436921568421, 43.523682317369719, 43.453735619383764, 43.391527931012931, 43.353113842441417, 43.337546752500202, 43.435185059774376],
      "text": ["Imports - energy: 40.14 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 40.46 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.06 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.8 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.95 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.48 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 40.34 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 45.96 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 42.98 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 41.29 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.28 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 42.3 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.58 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.52 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.45 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.39 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.35 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.34 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - energy: 43.44 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [86.939999999999984, 87.049999999999997, 88.700000000000003, 88.769999999999996, 90.680000000000007, 89.530000000000001, 89.859999999999999, 87.25, 87.180000000000007, 90.430000000000007, 82.709999999999994, 84.260000000000005, 85.670000000000002, 85.670000000000016, 85.669999999999987, 85.670000000000002, 85.670000000000002, 85.670000000000002, 85.670000000000002],
      "text": ["Imports - energy: 86.94 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 87.05 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 88.7 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 88.77 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 90.68 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 89.53 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 89.86 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 87.25 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 87.18 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 90.43 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 82.71 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 84.26 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 85.67 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 85.67 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 85.67 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 85.67 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 85.67 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 85.67 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: IRL<br>Countries in region: Ireland", "Imports - energy: 85.67 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [82.730000000000018, 84.909999999999997, 86.340000000000003, 82.640000000000001, 81.680000000000007, 81.879999999999995, 79.769999999999982, 75.310000000000002, 75.789999999999992, 78.040000000000006, 73.170000000000002, 71.670000000000002, 76.859999999999999, 76.859999999999985, 76.859999999999999, 76.859999999999999, 76.859999999999999, 76.859999999999999, 76.859999999999999],
      "text": ["Imports - energy: 82.73 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 84.91 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 86.34 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 82.64 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 81.68 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 81.88 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 79.77 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 75.31 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 75.79 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 78.04 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 73.17 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 71.67 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 76.86 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 76.86 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 76.86 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 76.86 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 76.86 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 76.86 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: PRT<br>Countries in region: Portugal", "Imports - energy: 76.86 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [-349.87, -352.89999999999998, -365.87, -316.27999999999997, -289.44999999999999, -266.00999999999999, -211.60999999999999, -186.50999999999996, -232.74000000000001, -211.95999999999998, -219.74000000000004, -191.52000000000001, -191.52000000000001, -191.51999999999998, -191.52000000000001, -191.51999999999998, -191.52000000000004, -191.52000000000001, -191.52000000000001],
      "text": ["Imports - energy: -349.87 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -352.9 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -365.87 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -316.28 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -289.45 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -266.01 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -211.61 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -186.51 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -232.74 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -211.96 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -219.74 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -191.52 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -191.52 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -191.52 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -191.52 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -191.52 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -191.52 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -191.52 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - energy: -191.52 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [48.950000000000003, 49.240000000000002, 49.379999999999995, 48.899999999999991, 49.040000000000006, 48.52000000000001, 49.25, 48.159999999999997, 46.059999999999995, 46.79999999999999, 46.349999999999987, 43.490000000000002, 44.109999999999992, 44.109999999999985, 44.109999999999992, 44.109999999999992, 44.109999999999992, 44.109999999999999, 44.109999999999992],
      "text": ["Imports - energy: 48.95 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 49.24 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 49.38 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 48.9 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 49.04 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 48.52 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 49.25 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 48.16 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 46.06 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 46.8 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 46.35 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 43.49 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 44.11 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 44.11 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 44.11 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 44.11 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 44.11 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 44.11 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - energy: 44.11 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [-10.666024439539154, -1.6601906269665654, 7.9051645251035492, 14.751889797601736, 16.591221097105564, 19.859720610874035, 19.160408135239397, 26.606621545444508, 30.874525632861221, 39.21020423700012, 42.348674428987934, 39.700378440707496, 34.663289195923269, 34.663500792389485, 34.663854349393404, 34.66424831033229, 34.664681030709232, 34.665215429459543, 34.665911595262479],
      "text": ["Imports - energy: -10.67 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: -1.66 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 7.91 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 14.75 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 16.59 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 19.86 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 19.16 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 26.61 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 30.87 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 39.21 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 42.35 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 39.7 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 34.66 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 34.66 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 34.66 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 34.66 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 34.66 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 34.67 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - energy: 34.67 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [70.189999999999998, 69.650000000000006, 70.640000000000001, 70.200000000000003, 67.489999999999995, 66.739999999999995, 63.850000000000001, 64.829999999999998, 65.390000000000001, 61.950000000000003, 63.420000000000002, 62.419999999999995, 63.540000000000006, 63.540000000000006, 63.539999999999999, 63.539999999999999, 63.539999999999999, 63.539999999999992, 63.540000000000006],
      "text": ["Imports - energy: 70.19 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 69.65 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 70.64 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 70.2 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 67.49 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 66.74 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 63.85 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 64.83 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 65.39 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 61.95 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 63.42 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 62.42 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 63.54 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 63.54 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 63.54 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 63.54 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 63.54 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 63.54 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: AUT<br>Countries in region: Austria", "Imports - energy: 63.54 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: AUT<br>Countries in region: Austria"],
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
      "y": [3.591718770026934, 5.3831197708730443, 6.5462957519885787, 8.3369198781889455, 8.8957561900037376, 8.9159536721185013, 10.824772467092421, 11.908884933858801, 12.316950429795996, 14.806231251103231, 15.202493665987824, 15.458564697940201, 15.459743060472208, 15.45994570528581, 15.460660799787291, 15.462120936942419, 15.463815316682975, 15.461187679801151, 15.456816239158218],
      "text": ["Imports - energy: 3.59 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 5.38 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 6.55 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 8.34 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 8.9 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 8.92 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 10.82 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 11.91 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 12.32 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 14.81 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 15.2 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 15.46 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 15.46 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 15.46 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 15.46 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 15.46 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 15.46 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 15.46 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - energy: 15.46 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [-177.28789993199339, -177.97637875945858, -155.97796065668777, -149.8981354899735, -138.69226464942713, -132.7794288625619, -113.20748681775248, -118.7477160923449, -131.71296175027607, -117.26841282909406, -103.59597224045606, -105.84632524835995, -107.61762619957015, -109.11833954000406, -110.29325013403511, -110.97761027807161, -111.11467876970003, -110.99916014093687, -110.15329652873108],
      "text": ["Imports - energy: -177.29 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Imports - energy: -177.98 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Imports - energy: -155.98 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Imports - energy: -149.9 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - energy: -138.69 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - energy: -132.78 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports - energy: -113.21 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports - energy: -118.75 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports - energy: -131.71 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports - energy: -117.27 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - energy: -103.6 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - energy: -105.85 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - energy: -107.62 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - energy: -109.12 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Imports - energy: -110.29 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Imports - energy: -110.98 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Imports - energy: -111.11 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - energy: -111 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - energy: -110.15 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [38.909999999999997, 34.710000000000001, 32.759999999999998, 34.610000000000007, 32.909999999999997, 33, 33.170000000000002, 35.000000000000007, 33.189999999999998, 27.870000000000001, 29, 28.27, 24.649999999999999, 24.649999999999995, 24.649999999999999, 24.649999999999999, 24.649999999999999, 24.649999999999999, 24.649999999999999],
      "text": ["Imports - energy: 38.91 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 34.71 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 32.76 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 34.61 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 32.91 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 33 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 33.17 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 35 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 33.19 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 27.87 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 29 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 28.27 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 24.65 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 24.65 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 24.65 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 24.65 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 24.65 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 24.65 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: SWE<br>Countries in region: Sweden", "Imports - energy: 24.65 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [-41.719999999999999, -60.07, -65.689999999999998, -45.859999999999999, -36.990000000000002, -38.710000000000001, -30.460000000000004, -19.859999999999996, -14.539999999999999, -8.6500000000000004, 4.9100000000000001, 0.93999999999999984, 1.77, 1.77, 1.7699999999999998, 1.7700000000000005, 1.7699999999999996, 1.7699999999999998, 1.7699999999999998],
      "text": ["Imports - energy: -41.72 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: -60.07 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: -65.69 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: -45.86 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: -36.99 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: -38.71 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: -30.46 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: -19.86 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: -14.54 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: -8.65 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: 4.91 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: 0.94 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: 1.77 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: 1.77 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: 1.77 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: 1.77 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: 1.77 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: 1.77 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - energy: 1.77 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [83.653403465860563, 84.169769707107122, 83.9017277434872, 83.832144655151822, 83.206256159865603, 82.004466576046269, 81.458578824115321, 81.127910724273008, 81.106838565377529, 78.474936895912393, 76.497999850477868, 75.165948258140176, 76.57975909167105, 76.583705804578145, 76.588466637689677, 76.594734946530238, 76.603772603730818, 76.608755648959487, 76.610892277034338],
      "text": ["Imports - energy: 83.65 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 84.17 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 83.9 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 83.83 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 83.21 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 82 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 81.46 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 81.13 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 81.11 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 78.47 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 76.5 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 75.17 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 76.58 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 76.58 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 76.59 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 76.59 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 76.6 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 76.61 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta", "Imports - energy: 76.61 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [27.510000000000002, 17.59, 23.190000000000001, 23.73, 23.719999999999999, 16.41, 19.199999999999999, 16.300000000000001, 16.780000000000001, 16.850000000000001, 10.380000000000001, 19.77, 35.020000000000003, 35.019999999999996, 35.020000000000003, 35.019999999999996, 35.020000000000003, 35.020000000000003, 35.020000000000003],
      "text": ["Imports - energy: 27.51 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 17.59 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 23.19 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 23.73 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 23.72 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 16.41 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 19.2 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 16.3 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 16.78 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 16.85 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 10.38 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 19.77 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 35.02 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 35.02 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 35.02 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 35.02 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 35.02 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 35.02 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands", "Imports - energy: 35.02 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [77.29469792329219, 77.318675364216887, 77.022143266834334, 77.04048473426343, 75.366290568269804, 76.584221689577376, 74.477637042870228, 75.2799045861628, 72.551688950160212, 74.76299806545488, 74.278320257935576, 77.1933944839502, 80.870068633377798, 80.88240506936873, 80.897966818510724, 80.909355689453861, 80.920492361000484, 80.930280783428557, 80.939142659254969],
      "text": ["Imports - energy: 77.29 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 77.32 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 77.02 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 77.04 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 75.37 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 76.58 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 74.48 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 75.28 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 72.55 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 74.76 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 74.28 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 77.19 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 80.87 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 80.88 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 80.9 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 80.91 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 80.92 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 80.93 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - energy: 80.94 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [56.810000000000002, 57.409999999999997, 51.460000000000001, 51.32, 56.170000000000009, 53.350000000000001, 50.279999999999994, 52.239999999999988, 51.149999999999991, 49.009999999999991, 45.310000000000002, 46.199999999999996, 45.329999999999998, 45.329999999999998, 45.329999999999998, 45.329999999999991, 45.329999999999998, 45.329999999999998, 45.329999999999998],
      "text": ["Imports - energy: 56.81 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 57.41 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 51.46 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 51.32 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 56.17 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 53.35 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 50.28 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 52.24 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 51.15 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 49.01 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 45.31 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 46.2 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 45.33 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 45.33 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 45.33 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 45.33 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 45.33 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 45.33 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - energy: 45.33 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [68.685873448773691, 68.064456354188451, 68.631303219163527, 69.404029691638272, 69.052497059900148, 70.214264939373564, 68.578755339958093, 68.630987113643826, 67.008965369812671, 64.03800861117827, 63.456588288883154, 65.155799429380039, 67.203336438162069, 67.253964709974952, 67.297682751553552, 67.340005282573529, 67.37839441673988, 67.419111055170617, 67.488090751739207],
      "text": ["Imports - energy: 68.69 % (total energy use)<br>Period: 2003<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 68.06 % (total energy use)<br>Period: 2004<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 68.63 % (total energy use)<br>Period: 2005<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 69.4 % (total energy use)<br>Period: 2006<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 69.05 % (total energy use)<br>Period: 2007<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 70.21 % (total energy use)<br>Period: 2008<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 68.58 % (total energy use)<br>Period: 2009<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 68.63 % (total energy use)<br>Period: 2010<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 67.01 % (total energy use)<br>Period: 2011<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 64.04 % (total energy use)<br>Period: 2012<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 63.46 % (total energy use)<br>Period: 2013<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 65.16 % (total energy use)<br>Period: 2014<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 67.2 % (total energy use)<br>Period: 2015<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 67.25 % (total energy use)<br>Period: 2016<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 67.3 % (total energy use)<br>Period: 2017<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 67.34 % (total energy use)<br>Period: 2018<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 67.38 % (total energy use)<br>Period: 2019<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 67.42 % (total energy use)<br>Period: 2020<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - energy: 67.49 % (total energy use)<br>Period: 2021<br>REMIND_62 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "l": 41.643835616438366
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Imports - energy (REMIND_62)",
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
      "ticktext": ["-800", "-600", "-400", "-200", "0"],
      "tickvals": [-800, -600, -400, -200, 0],
      "categoryorder": "array",
      "categoryarray": ["-800", "-600", "-400", "-200", "0"],
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
        "text": "% (total energy use)",
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
    "b55c1cfe45b1": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c570d5288": {
      "y": {}
    }
  },
  "cur_data": "b55c1cfe45b1",
  "visdat": {
    "b55c1cfe45b1": ["function (y) ", "x"],
    "b55c570d5288": ["function (y) ", "x"]
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

  
