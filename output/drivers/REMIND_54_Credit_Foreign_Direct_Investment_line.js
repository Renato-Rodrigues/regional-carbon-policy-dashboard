(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Credit_Foreign_Direct_Investment_line') 

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
      "y": [1.29, 2.5099999999999998, 2.6499999999999999, 2.3799999999999994, 2.2499999999999996, 2.6899999999999999, 1.2099999999999997, 2.6800000000000002, 2.04, 2.8100000000000001, 1.7799999999999998, 0.95999999999999996, 1.98, 0.57999999999999996, 1.7900000000000003, 2.23, 1.49, 1.27, 1.4099999999999999],
      "text": ["Foreign Direct Investment: 1.29 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 2.51 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 2.65 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 2.38 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 2.25 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 2.69 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 1.21 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 2.68 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 2.04 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 2.81 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 1.78 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 0.96 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 1.98 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 0.58 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 1.79 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 2.23 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 1.49 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 1.27 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Foreign Direct Investment: 1.41 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [7.8369045223677967, 2.130722675542946, 1.2813235817718553, 17.49860178251825, 13.990677248322189, 2.185681367133959, 11.175856063023398, 5.4839887824533458, 5.0771326546459461, 8.2085135692871418, -3.1879482027063841, 3.5419386298804798, 22.190735321572056, 27.213035038157575, 21.198815552955772, -26.829709873765005, -4.5241162568308146, -36.94724520765174, -21.348042756186537],
      "text": ["Foreign Direct Investment: 7.84 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 2.13 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 1.28 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 17.5 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 13.99 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 2.19 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 11.18 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 5.48 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 5.08 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 8.21 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: -3.19 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 3.54 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 22.19 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 27.21 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: 21.2 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: -26.83 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: -4.52 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: -36.95 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Foreign Direct Investment: -21.35 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [2.3613420869387634, 2.6124266826989389, 2.6047071288625747, 3.1609347834005694, 3.9348045598880401, 3.9982194795346069, 2.5112403843766047, 2.9518980367308534, 3.3557098127066585, 3.9688254848604938, 3.1307994644896553, 2.7947124886688295, 2.8108499005005538, 2.4301303258233018, 2.5828818260900626, 2.306868071182048, 1.933425818361149, 0.92278389063497224, 2.5659837588831809],
      "text": ["Foreign Direct Investment: 2.36 % (GDP)<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.61 % (GDP)<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.6 % (GDP)<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 3.16 % (GDP)<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 3.93 % (GDP)<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 4 % (GDP)<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.51 % (GDP)<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.95 % (GDP)<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 3.36 % (GDP)<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 3.97 % (GDP)<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 3.13 % (GDP)<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.79 % (GDP)<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.81 % (GDP)<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.43 % (GDP)<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.58 % (GDP)<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.31 % (GDP)<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 1.93 % (GDP)<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 0.92 % (GDP)<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Foreign Direct Investment: 2.57 % (GDP)<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [0.29999999999999999, 1.5900000000000001, 6, 9.3499999999999996, 8.8800000000000008, 5.8300000000000001, 3.5500000000000003, 2.9199999999999999, -0.20000000000000001, 1, 1.45, 1.5100000000000002, 2.1000000000000001, 2.4399999999999999, 2.98, 3.0999999999999996, 2.8299999999999996, 1.5200000000000002, 1.2100000000000002],
      "text": ["Foreign Direct Investment: 0.3 % (GDP)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 1.59 % (GDP)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 6 % (GDP)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 9.35 % (GDP)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 8.88 % (GDP)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 5.83 % (GDP)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 3.55 % (GDP)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 2.92 % (GDP)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: -0.2 % (GDP)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 1 % (GDP)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 1.45 % (GDP)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 1.51 % (GDP)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 2.1 % (GDP)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 2.44 % (GDP)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 2.98 % (GDP)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 3.1 % (GDP)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 2.83 % (GDP)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 1.52 % (GDP)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Foreign Direct Investment: 1.21 % (GDP)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [0.78000000000000003, 0.14000000000000001, 2.1800000000000002, 4.870000000000001, 8.1999999999999993, 4.5199999999999996, 1.52, 1.8400000000000001, 2.1400000000000001, 2.7000000000000002, 3.6299999999999999, 3.5499999999999998, 3.8499999999999996, 2.2400000000000002, 1.54, 2.4700000000000002, 2.8100000000000001, 1.8399999999999999, 3.2299999999999995],
      "text": ["Foreign Direct Investment: 0.78 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 0.14 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 2.18 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 4.87 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 8.2 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 4.52 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 1.52 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 1.84 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 2.14 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 2.7 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 3.63 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 3.55 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 3.85 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 2.24 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 1.54 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 2.47 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 2.81 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 1.84 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Foreign Direct Investment: 3.23 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [0.94840300245724274, 6.1717806181152763, -2.7139589145498144, 3.8303307446050621, 4.8560792919863873, 3.8909460580534869, 2.5719675111600866, 2.5884043210482477, 4.0551955806506124, 3.4699089393906402, 2.8877429783467132, 3.867623504936482, 2.900874995457797, 3.1523109927610005, 3.225710810349832, 3.7395419921756634, 2.5567781242341208, 1.2824628946064864, 1.6215316108012832],
      "text": ["Foreign Direct Investment: 0.95 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 6.17 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: -2.71 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 3.83 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 4.86 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 3.89 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 2.57 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 2.59 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 4.06 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 3.47 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 2.89 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 3.87 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 2.9 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 3.15 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 3.23 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 3.74 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 2.56 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 1.28 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Foreign Direct Investment: 1.62 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(33,113,181,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [2.3700000000000001, 3.0699999999999994, 2.7400000000000002, 2.1699999999999999, 2.8100000000000005, 2.5600000000000001, 2.0800000000000001, 2.7599999999999998, 1.9399999999999999, 1.45, 3.8400000000000003, 2.0800000000000001, 2.9900000000000002, 3.5, 2.7799999999999994, 3.0099999999999998, 2.29, 2.8100000000000005, 2.5499999999999998],
      "text": ["Foreign Direct Investment: 2.37 % (GDP)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 3.07 % (GDP)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.74 % (GDP)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.17 % (GDP)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.81 % (GDP)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.56 % (GDP)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.08 % (GDP)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.76 % (GDP)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 1.94 % (GDP)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 1.45 % (GDP)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 3.84 % (GDP)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.08 % (GDP)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.99 % (GDP)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 3.5 % (GDP)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.78 % (GDP)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 3.01 % (GDP)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.29 % (GDP)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.81 % (GDP)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Foreign Direct Investment: 2.55 % (GDP)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [1.8199999999999998, 1.8500000000000005, 3.2400000000000007, 3.4199999999999999, 6.1600000000000001, 4.4300000000000006, 2.23, 5.0199999999999996, 2.0499999999999998, 5.4400000000000004, -0.26000000000000001, 0.65000000000000002, 1.8700000000000001, -5.0300000000000002, 1.4700000000000002, -1.29, 4, -1.1200000000000001, 2.8900000000000001],
      "text": ["Foreign Direct Investment: 1.82 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 1.85 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 3.24 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 3.42 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 6.16 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 4.43 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 2.23 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 5.02 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 2.05 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 5.44 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: -0.26 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 0.65 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 1.87 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: -5.03 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 1.47 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: -1.29 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 4 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: -1.12 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Foreign Direct Investment: 2.89 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [1.8100000000000001, 2.71, 1.73, 1.75, 3.1899999999999999, 2.9900000000000002, 1.8900000000000001, 3.7299999999999995, 3.9199999999999999, 3.75, 3.04, 3.5699999999999994, 3.5899999999999994, 4.1399999999999988, 3.3399999999999999, 4.0800000000000001, 3.6899999999999999, 2.5600000000000005, 2.8199999999999994],
      "text": ["Foreign Direct Investment: 1.81 % (GDP)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 2.71 % (GDP)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 1.73 % (GDP)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 1.75 % (GDP)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 3.19 % (GDP)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 2.99 % (GDP)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 1.89 % (GDP)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 3.73 % (GDP)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 3.92 % (GDP)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 3.75 % (GDP)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 3.04 % (GDP)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 3.57 % (GDP)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 3.59 % (GDP)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 4.14 % (GDP)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 3.34 % (GDP)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 4.08 % (GDP)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 3.69 % (GDP)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 2.56 % (GDP)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Foreign Direct Investment: 2.82 % (GDP)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [4.3192720425804954, 4.7365092645679177, 8.316924800472016, 6.5572177097718605, 8.5720668128061046, 6.8602531428716613, 4.7853263844054954, 4.8094923574105399, 5.3373376112230586, 4.364852574826279, 3.1899949441378115, 2.2695340542259133, 2.053383435012567, 4.8886324408971458, 4.332109421976468, 4.700375582688558, 4.73333489067232, 1.7016483926869237, 4.6698061357847216],
      "text": ["Foreign Direct Investment: 4.32 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 4.74 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 8.32 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 6.56 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 8.57 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 6.86 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 4.79 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Foreign Direct Investment: 4.81 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Foreign Direct Investment: 5.34 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 4.36 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 3.19 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 2.27 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 2.05 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 4.89 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 4.33 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 4.7 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 4.73 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 1.7 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Foreign Direct Investment: 4.67 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [1, 1.6799999999999999, 1.46, 0.87, 0.75, 1.0700000000000001, 0.95999999999999996, 0.82999999999999985, 0.78000000000000014, 0.73999999999999999, 0.93000000000000016, 0.62, 0.28000000000000003, 0.81000000000000005, 1.1000000000000001, 0.70999999999999996, 0.57999999999999996, 0.53000000000000003, 1.21],
      "text": ["Foreign Direct Investment: 1 % (GDP)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 1.68 % (GDP)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 1.46 % (GDP)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.87 % (GDP)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.75 % (GDP)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 1.07 % (GDP)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.96 % (GDP)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.83 % (GDP)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.78 % (GDP)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.74 % (GDP)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.93 % (GDP)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.62 % (GDP)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.28 % (GDP)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.81 % (GDP)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 1.1 % (GDP)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.71 % (GDP)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.58 % (GDP)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 0.53 % (GDP)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Foreign Direct Investment: 1.21 % (GDP)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [0.56999999999999995, 0.62000000000000011, 1.55, 2.1200000000000001, 1.8700000000000001, 0.73999999999999999, 1.1699999999999999, 0.51000000000000001, 0.8600000000000001, 1.23, 1.3200000000000001, 1.9300000000000002, 1.8400000000000001, 2.6000000000000001, 3.1200000000000001, 2.8699999999999997, 2.3000000000000003, 1.8899999999999999, 3.04],
      "text": ["Foreign Direct Investment: 0.57 % (GDP)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 0.62 % (GDP)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 1.55 % (GDP)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 2.12 % (GDP)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 1.87 % (GDP)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 0.74 % (GDP)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 1.17 % (GDP)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 0.51 % (GDP)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 0.86 % (GDP)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 1.23 % (GDP)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 1.32 % (GDP)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 1.93 % (GDP)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 1.84 % (GDP)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 2.6 % (GDP)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 3.12 % (GDP)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 2.87 % (GDP)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 2.3 % (GDP)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 1.89 % (GDP)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Foreign Direct Investment: 3.04 % (GDP)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [8.4516859676287073, 10.696439596880085, 6.002073337757035, 6.6442307867894046, 6.877797663099809, 6.3405923815203655, 6.3686098619655702, 5.6766093671146249, 6.8007810305272809, 4.8789848729826746, 3.6653431725195391, 3.172870411440722, 4.4093719645318252, 4.3055586763167017, 3.4386012396235759, 2.2280573196639919, 3.5938365108900636, 2.4415686144575321, 2.3436452315878951],
      "text": ["Foreign Direct Investment: 8.45 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Foreign Direct Investment: 10.7 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Foreign Direct Investment: 6 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Foreign Direct Investment: 6.64 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Foreign Direct Investment: 6.88 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Foreign Direct Investment: 6.34 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Foreign Direct Investment: 6.37 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Foreign Direct Investment: 5.68 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Foreign Direct Investment: 6.8 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Foreign Direct Investment: 4.88 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Foreign Direct Investment: 3.67 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Foreign Direct Investment: 3.17 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Foreign Direct Investment: 4.41 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Foreign Direct Investment: 4.31 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Foreign Direct Investment: 3.44 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Foreign Direct Investment: 2.23 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Foreign Direct Investment: 3.59 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Foreign Direct Investment: 2.44 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Foreign Direct Investment: 2.34 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(105,105,105,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [1.8200000000000001, 2.6600000000000001, 7.0300000000000002, 4.1699999999999999, 4.3099999999999996, 4.3600000000000003, 3.46, 2.2400000000000002, 4.3700000000000001, 4.0599999999999996, 4.2400000000000002, 4.2400000000000011, 3.9599999999999995, 4.8999999999999995, 4.3899999999999997, 3.3799999999999999, 4.3300000000000001, 2.7599999999999998, 3],
      "text": ["Foreign Direct Investment: 1.82 % (GDP)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 2.66 % (GDP)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 7.03 % (GDP)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.17 % (GDP)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.31 % (GDP)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.36 % (GDP)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 3.46 % (GDP)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 2.24 % (GDP)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.37 % (GDP)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.06 % (GDP)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.24 % (GDP)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.24 % (GDP)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 3.96 % (GDP)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.9 % (GDP)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.39 % (GDP)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 3.38 % (GDP)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 4.33 % (GDP)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 2.76 % (GDP)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Foreign Direct Investment: 3 % (GDP)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [3.3413190574920981, 2.5364699454075232, 2.1407774100098731, 2.5719203140815723, 3.6106461555899925, 3.8977040279164692, 3.6789398567413656, 4.4284230225369026, 6.0189223115114379, 6.0170182692909799, 5.5551212390666054, 4.5802687270036584, 4.8125747349386296, 3.9399159121841292, 3.0906406651082414, 2.4707487401158224, 2.9161064091033753, 2.3829461000005567, 3.195835033379538],
      "text": ["Foreign Direct Investment: 3.34 % (GDP)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 2.54 % (GDP)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 2.14 % (GDP)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 2.57 % (GDP)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 3.61 % (GDP)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 3.9 % (GDP)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 3.68 % (GDP)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 4.43 % (GDP)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 6.02 % (GDP)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 6.02 % (GDP)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 5.56 % (GDP)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 4.58 % (GDP)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 4.81 % (GDP)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 3.94 % (GDP)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 3.09 % (GDP)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 2.47 % (GDP)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 2.92 % (GDP)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 2.38 % (GDP)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Foreign Direct Investment: 3.2 % (GDP)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [1.8399999999999999, 2.6099999999999994, 2.0299999999999998, 3.7999999999999994, 4.2999999999999998, 4.5, 2.9900000000000002, 2.8300000000000001, 2.6899999999999999, 2.29, 3.0200000000000005, 1.0700000000000001, 0.5, 2.5499999999999998, 1.8100000000000001, 0.53000000000000003, 1.8899999999999999, 0.63, 2.2000000000000002],
      "text": ["Foreign Direct Investment: 1.84 % (GDP)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 2.61 % (GDP)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 2.03 % (GDP)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 3.8 % (GDP)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 4.3 % (GDP)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 4.5 % (GDP)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 2.99 % (GDP)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 2.83 % (GDP)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 2.69 % (GDP)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 2.29 % (GDP)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 3.02 % (GDP)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 1.07 % (GDP)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 0.5 % (GDP)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 2.55 % (GDP)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 1.81 % (GDP)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 0.53 % (GDP)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 1.89 % (GDP)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 0.63 % (GDP)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Foreign Direct Investment: 2.2 % (GDP)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [0.72083551534494772, 1.6909478545509831, 2.1012481969655421, 1.6199321107403872, 1.0521657137434792, 0.23320880034550115, 0.38925613869189818, 0.93007413815940876, 0.37962487834348213, 0.36403562861111127, 0.29256018250733967, 0.18604518034174691, 0.57458660570464992, 0.48067191407978743, 0.43753161127795409, 0.46084126590075791, 0.30213234699498587, 0.19281488869235117, 0.30484569527856631],
      "text": ["Foreign Direct Investment: 0.72 % (GDP)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Foreign Direct Investment: 1.69 % (GDP)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Foreign Direct Investment: 2.1 % (GDP)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Foreign Direct Investment: 1.62 % (GDP)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Foreign Direct Investment: 1.05 % (GDP)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Foreign Direct Investment: 0.23 % (GDP)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Foreign Direct Investment: 0.39 % (GDP)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.93 % (GDP)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.38 % (GDP)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.36 % (GDP)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.29 % (GDP)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.19 % (GDP)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.57 % (GDP)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.48 % (GDP)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.44 % (GDP)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.46 % (GDP)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.3 % (GDP)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.19 % (GDP)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Foreign Direct Investment: 0.3 % (GDP)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [3.6699999999999999, 3.54, 3.3900000000000001, 3.6200000000000006, 8.6500000000000021, 9.6600000000000001, 7.169999999999999, 5.4299999999999997, 4.3000000000000007, 4.2800000000000002, 4.1599999999999993, 3.9399999999999999, 4.9299999999999997, 4.9000000000000012, 5.0099999999999998, 5.0000000000000009, 4.8200000000000003, 4.5599999999999996, 4.2800000000000002],
      "text": ["Foreign Direct Investment: 3.67 % (GDP)<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 3.54 % (GDP)<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 3.39 % (GDP)<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 3.62 % (GDP)<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 8.65 % (GDP)<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 9.66 % (GDP)<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 7.17 % (GDP)<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 5.43 % (GDP)<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 4.3 % (GDP)<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 4.28 % (GDP)<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 4.16 % (GDP)<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 3.94 % (GDP)<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 4.93 % (GDP)<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 4.9 % (GDP)<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 5.01 % (GDP)<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 5 % (GDP)<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 4.82 % (GDP)<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 4.56 % (GDP)<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Foreign Direct Investment: 4.28 % (GDP)<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [0.47999999999999993, 0.84999999999999998, 1.52, 2.6400000000000001, 3.04, 2.6899999999999999, 1.25, 1.0300000000000002, 0.57999999999999996, 0.34000000000000008, 0.52000000000000002, 0.69999999999999984, 0.56000000000000005, 0.81999999999999995, 0.7400000000000001, 0.48999999999999999, 0.69999999999999996, 0.68000000000000005, 0.62],
      "text": ["Foreign Direct Investment: 0.48 % (GDP)<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.85 % (GDP)<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 1.52 % (GDP)<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 2.64 % (GDP)<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 3.04 % (GDP)<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 2.69 % (GDP)<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 1.25 % (GDP)<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 1.03 % (GDP)<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.58 % (GDP)<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.34 % (GDP)<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.52 % (GDP)<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.7 % (GDP)<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.56 % (GDP)<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.82 % (GDP)<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.74 % (GDP)<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.49 % (GDP)<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.7 % (GDP)<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.68 % (GDP)<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Foreign Direct Investment: 0.62 % (GDP)<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [0.45000000000000001, 0.68999999999999984, 1.1699999999999999, 0.64000000000000001, 0.81999999999999984, 1.45, 0.88, 1.0700000000000001, 0.97999999999999987, 1.1899999999999999, 1.74, 1.47, 1.4500000000000002, 0.88, 0.62, 0.75, 0.54000000000000004, 0.40999999999999992, 0.40999999999999992],
      "text": ["Foreign Direct Investment: 0.45 % (GDP)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.69 % (GDP)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 1.17 % (GDP)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.64 % (GDP)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.82 % (GDP)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 1.45 % (GDP)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.88 % (GDP)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 1.07 % (GDP)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.98 % (GDP)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 1.19 % (GDP)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 1.74 % (GDP)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 1.47 % (GDP)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 1.45 % (GDP)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.88 % (GDP)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.62 % (GDP)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.75 % (GDP)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.54 % (GDP)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.41 % (GDP)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Foreign Direct Investment: 0.41 % (GDP)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [-0.24999999999999997, 0.7400000000000001, 2.9199999999999999, 1.3500000000000001, 1.6000000000000001, 1.8300000000000001, 0.90000000000000002, 2.0299999999999998, 2.3000000000000003, 2.3100000000000001, 2.5499999999999998, 2.8199999999999998, 2.2999999999999998, 0.48999999999999999, 2.02, 1.8100000000000001, 2.2300000000000004, 1.8100000000000001, 1.79],
      "text": ["Foreign Direct Investment: -0.25 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 0.74 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 2.92 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 1.35 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 1.6 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 1.83 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 0.9 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 2.03 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 2.3 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 2.31 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 2.55 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 2.82 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 2.3 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 0.49 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 2.02 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 1.81 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 2.23 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 1.81 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Foreign Direct Investment: 1.79 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [2.7657938451877793, 2.7717785890627762, 2.7706824948085469, 4.1026443959902901, 5.1707389185365766, 3.5367466901437083, 3.2442383363966143, 4.2671461674138049, 5.1167542879018724, 4.2963405970417874, 4.9838981431735903, 4.5256981297495491, 5.7016302442353242, 5.4929045058968811, 6.4656555118485244, 4.4785683102296794, 4.4284947374081476, 3.9430085805043649, 5.384087005466303],
      "text": ["Foreign Direct Investment: 2.77 % (GDP)<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 2.77 % (GDP)<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 2.77 % (GDP)<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 4.1 % (GDP)<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 5.17 % (GDP)<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 3.54 % (GDP)<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 3.24 % (GDP)<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 4.27 % (GDP)<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 5.12 % (GDP)<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 4.3 % (GDP)<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 4.98 % (GDP)<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 4.53 % (GDP)<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 5.7 % (GDP)<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 5.49 % (GDP)<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 6.47 % (GDP)<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 4.48 % (GDP)<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 4.43 % (GDP)<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 3.94 % (GDP)<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Foreign Direct Investment: 5.38 % (GDP)<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [3.4399999999999999, 3.3899999999999997, 4.3399999999999999, 4.0199999999999996, 3.2799999999999998, 2.9400000000000004, 2.2799999999999998, 4.3200000000000003, 0.67000000000000004, 3.2400000000000002, 3.79, 1.22, 2.2200000000000002, 0.84000000000000008, 1.8199999999999998, 2.71, 1.01, -0.9900000000000001, 2.8999999999999999],
      "text": ["Foreign Direct Investment: 3.44 % (GDP)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 3.39 % (GDP)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 4.34 % (GDP)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 4.02 % (GDP)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 3.28 % (GDP)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 2.94 % (GDP)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 2.28 % (GDP)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 4.32 % (GDP)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 0.67 % (GDP)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 3.24 % (GDP)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 3.79 % (GDP)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 1.22 % (GDP)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 2.22 % (GDP)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 0.84 % (GDP)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 1.82 % (GDP)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 2.71 % (GDP)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 1.01 % (GDP)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: -0.99 % (GDP)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Foreign Direct Investment: 2.9 % (GDP)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [0.19, 0.15000000000000002, 0.11, -0.050000000000000003, 0.46999999999999997, 0.47999999999999998, 0.23000000000000001, 0.13, -0.01, 0.010000000000000002, 0.20000000000000004, 0.40000000000000002, 0.12000000000000001, 0.81999999999999995, 0.38, 0.5, 0.78000000000000003, 1.2399999999999998, 0.69000000000000006],
      "text": ["Foreign Direct Investment: 0.19 % (GDP)<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.15 % (GDP)<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.11 % (GDP)<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: -0.05 % (GDP)<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.47 % (GDP)<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.48 % (GDP)<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.23 % (GDP)<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.13 % (GDP)<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: -0.01 % (GDP)<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.01 % (GDP)<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.2 % (GDP)<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.4 % (GDP)<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.12 % (GDP)<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.82 % (GDP)<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.38 % (GDP)<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.5 % (GDP)<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.78 % (GDP)<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 1.24 % (GDP)<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Foreign Direct Investment: 0.69 % (GDP)<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [4.4591296743825737, 3.0763663545561983, 2.6518467538331691, 2.680179987343152, 2.1537570372864452, 2.961614186240658, 3.4442438420003194, 2.9732138488052593, 3.1904118249516147, 3.6584509213143659, 2.9871318065639678, 1.8312308550627312, 2.3715336248104966, 1.700544352394957, 1.9963719993069875, 2.7679487363768396, 2.3332429534906836, 2.2828318503642957, 2.3061702098504369],
      "text": ["Foreign Direct Investment: 4.46 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 3.08 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.65 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.68 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.15 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.96 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 3.44 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.97 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 3.19 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 3.66 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.99 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 1.83 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.37 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 1.7 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.77 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.33 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.28 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Foreign Direct Investment: 2.31 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [5.2599999999999998, 6.8600000000000003, 6.0999999999999988, 4.9299999999999997, 7.8099999999999987, 10.270000000000001, 8.0700000000000003, 7.3799999999999999, 10.17, 11.91, 7.6100000000000012, 9.8399999999999999, 7.330000000000001, 4.5599999999999987, 1.8999999999999999, 2.6800000000000002, 4.8700000000000001, 4.5, 5.0300000000000002],
      "text": ["Foreign Direct Investment: 5.26 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 6.86 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 6.1 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 4.93 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 7.81 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 10.27 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 8.07 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 7.38 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 10.17 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 11.91 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 7.61 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 9.84 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 7.33 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 4.56 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 1.9 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 2.68 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 4.87 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 4.5 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Foreign Direct Investment: 5.03 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [0.53999999999999992, 0.68000000000000005, 1.98, 3.6200000000000006, 3.2400000000000002, 2.5800000000000001, 1.3200000000000001, 1.1699999999999999, 1.9299999999999997, 1.5600000000000001, 1.4199999999999999, 1.4199999999999999, 2.23, 1.5900000000000001, 1.3, 1.6000000000000001, 1.25, 1.0700000000000001, 1.6300000000000001],
      "text": ["Foreign Direct Investment: 0.54 % (GDP)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 0.68 % (GDP)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.98 % (GDP)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 3.62 % (GDP)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 3.24 % (GDP)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 2.58 % (GDP)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.32 % (GDP)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.17 % (GDP)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.93 % (GDP)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.56 % (GDP)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.42 % (GDP)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.42 % (GDP)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 2.23 % (GDP)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.59 % (GDP)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.3 % (GDP)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.6 % (GDP)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.25 % (GDP)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.07 % (GDP)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Foreign Direct Investment: 1.63 % (GDP)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [5.3899999999999997, 5.3799999999999999, 2.1399999999999997, 3.5699999999999994, 1.1299999999999999, 0.40000000000000002, 0.68000000000000016, 0.95999999999999996, 1.97, 0.64000000000000001, 2.8200000000000003, 3.3399999999999994, 4.0700000000000003, 5.580000000000001, 4.9100000000000001, 3.9900000000000002, 2.6600000000000001, 2.23, 3.8300000000000001],
      "text": ["Foreign Direct Investment: 5.39 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 5.38 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 2.14 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 3.57 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 1.13 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 0.4 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 0.68 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 0.96 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 1.97 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 0.64 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 2.82 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 3.34 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 4.07 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 5.58 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 4.91 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 3.99 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 2.66 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 2.23 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Foreign Direct Investment: 3.83 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [4.8373611629885103, 7.3931562328547011, 11.315061955083598, 12.402468860837329, 20.191349220469792, 17.698032888776474, 2.4547254575262736, -1.8037058544981406, 3.1739792534187767, 3.4969650194813009, 1.095975021505895, 3.9412843498490853, 1.0834831791709219, 14.662498474110897, 0.11061137197814029, -7.0738381361184608, 16.59219059536143, 26.513854807216859, 7.0008999993356804],
      "text": ["Foreign Direct Investment: 4.84 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 7.39 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 11.32 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 12.4 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 20.19 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 17.7 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 2.45 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: -1.8 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 3.17 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 3.5 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 1.1 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 3.94 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 1.08 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 14.66 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 0.11 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: -7.07 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 16.59 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 26.51 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Foreign Direct Investment: 7 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [1.8700000000000003, 1.6000000000000001, 1.28, 0.87, 0.57999999999999996, 0.48000000000000004, 0.71999999999999997, 0.75, 0.68000000000000016, 0.71999999999999997, 0.62, 0.46000000000000008, 0.5, 0.73999999999999999, 1.03, 0.71999999999999997, 0.53000000000000014, 0.56000000000000005, 0.40000000000000002],
      "text": ["Foreign Direct Investment: 1.87 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 1.6 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 1.28 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.87 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.58 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.48 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.72 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.75 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.68 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.72 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.62 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.46 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.5 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.74 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 1.03 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.72 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.53 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.56 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Foreign Direct Investment: 0.4 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [0.60999999999999999, 0.76999999999999991, 0.89000000000000001, 2.1299999999999999, 2.0699999999999998, 3.6199999999999997, 2.6499999999999999, 1.6399999999999999, 2, 1.3100000000000001, 1.52, 1.7, 2.0899999999999999, 1.9399999999999999, 1.51, 1.5600000000000001, 1.78, 2.4100000000000006, 1.4199999999999999],
      "text": ["Foreign Direct Investment: 0.61 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 0.77 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 0.89 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 2.13 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 2.07 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 3.62 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 2.65 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 1.64 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 2 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 1.31 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 1.52 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 1.7 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 2.09 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 1.94 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 1.51 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 1.56 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 1.78 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 2.41 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Foreign Direct Investment: 1.42 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [1.02, 1.7499999999999998, 1.0900000000000003, 2.1600000000000001, 2.3900000000000001, 2.3100000000000001, 1.1100000000000001, 1.75, 1.6899999999999999, 1.54, 1.71, 1.4399999999999999, 2.8100000000000001, 2.54, 1.96, 1.05, 1.48, 0.66000000000000003, 2.1099999999999999],
      "text": ["Foreign Direct Investment: 1.02 % (GDP)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.75 % (GDP)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.09 % (GDP)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 2.16 % (GDP)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 2.39 % (GDP)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 2.31 % (GDP)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.11 % (GDP)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.75 % (GDP)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.69 % (GDP)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.54 % (GDP)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.71 % (GDP)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.44 % (GDP)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 2.81 % (GDP)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 2.54 % (GDP)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.96 % (GDP)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.05 % (GDP)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 1.48 % (GDP)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 0.66 % (GDP)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Foreign Direct Investment: 2.11 % (GDP)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [4.3799999999999999, 3.9699999999999998, 1.5, 1.7700000000000002, 10.800000000000001, 8.7300000000000004, -1.3, 12.720000000000001, 6.1799999999999997, 9.8699999999999992, 5.1900000000000004, 4.1799999999999997, 3.0699999999999998, 2.5099999999999998, 2.7599999999999998, 2.96, 2.6100000000000003, 3.0799999999999996, 3.0299999999999998],
      "text": ["Foreign Direct Investment: 4.38 % (GDP)<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 3.97 % (GDP)<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 1.5 % (GDP)<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 1.77 % (GDP)<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 10.8 % (GDP)<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 8.73 % (GDP)<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: -1.3 % (GDP)<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 12.72 % (GDP)<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 6.18 % (GDP)<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 9.87 % (GDP)<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 5.19 % (GDP)<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 4.18 % (GDP)<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 3.07 % (GDP)<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 2.51 % (GDP)<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 2.76 % (GDP)<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 2.96 % (GDP)<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 2.61 % (GDP)<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 3.08 % (GDP)<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Foreign Direct Investment: 3.03 % (GDP)<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [3.3900000000000001, 2.3599999999999999, 2.3399999999999994, 2.6099999999999999, 4.6299999999999999, 4.5400000000000009, 0.64000000000000001, 2.5699999999999998, 1.8099999999999998, 1.5700000000000003, 3.4900000000000002, 2.3999999999999999, 1.9299999999999999, 3.5899999999999999, 2.3999999999999999, 4.1199999999999992, 1.8600000000000001, 2.8699999999999997, 3.04],
      "text": ["Foreign Direct Investment: 3.39 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 2.36 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 2.34 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 2.61 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 4.63 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 4.54 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 0.64 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 2.57 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 1.81 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 1.57 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 3.49 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 2.4 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 1.93 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 3.59 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 2.4 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 4.12 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 1.86 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 2.87 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Foreign Direct Investment: 3.04 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [2.4700000000000002, 5.4400000000000004, 3.6099999999999994, 6.2300000000000004, 5.8300000000000001, 2.73, 3.1899999999999999, 3.8999999999999995, 3.4900000000000007, 1.45, 0.20000000000000001, 3.7900000000000005, 3.27, 3.7800000000000002, 2.29, 3.2599999999999993, 2.96, 3.1900000000000004, 5.4500000000000002],
      "text": ["Foreign Direct Investment: 2.47 % (GDP)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 5.44 % (GDP)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 3.61 % (GDP)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 6.23 % (GDP)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 5.83 % (GDP)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 2.73 % (GDP)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 3.19 % (GDP)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 3.9 % (GDP)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 3.49 % (GDP)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 1.45 % (GDP)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 0.2 % (GDP)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 3.79 % (GDP)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 3.27 % (GDP)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 3.78 % (GDP)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 2.29 % (GDP)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 3.26 % (GDP)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 2.96 % (GDP)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 3.19 % (GDP)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Foreign Direct Investment: 5.45 % (GDP)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [1.9099999999999999, 1.3799999999999999, 2.8399999999999999, 2.04, 2.1699999999999999, 2.4100000000000001, 2.8999999999999999, 1.6399999999999997, 2.1299999999999999, 1.52, 1.0700000000000001, 0.81999999999999995, 0.62, 0.85000000000000009, 0.64000000000000001, 0.17999999999999999, 0.48999999999999999, 0.55000000000000004, 0.75000000000000011],
      "text": ["Foreign Direct Investment: 1.91 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 1.38 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 2.84 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 2.04 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 2.17 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 2.41 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 2.9 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 1.64 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 2.13 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 1.52 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 1.07 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 0.82 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 0.62 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 0.85 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 0.64 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 0.18 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 0.49 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 0.55 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Foreign Direct Investment: 0.75 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [0.39999999999999997, 0.27000000000000002, 2.2599999999999998, 0.20999999999999999, 1.98, 3.1299999999999999, 2.3100000000000001, 0.88, 0.89999999999999991, 1.0600000000000001, 2.0499999999999998, 1.52, 0.44000000000000006, 0.68000000000000005, 0.54000000000000004, 1.3700000000000001, 1.3099999999999998, 0.93000000000000016, 9.6799999999999997],
      "text": ["Foreign Direct Investment: 0.4 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 0.27 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 2.26 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 0.21 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 1.98 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 3.13 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 2.31 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 0.88 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 0.9 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 1.06 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 2.05 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 1.52 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 0.44 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 0.68 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 0.54 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 1.37 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 1.31 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 0.93 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Foreign Direct Investment: 9.68 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [2.6099999999999999, -0.72999999999999998, 2.1000000000000001, 2.9199999999999999, 1.48, 0.82999999999999996, 1.6600000000000001, 2.5299999999999994, 2.5999999999999996, 1.8600000000000001, 1.8, 0.5, 1.8600000000000003, 1.8700000000000001, 2.9700000000000006, 4.2000000000000002, 1.8999999999999999, 4.1399999999999997, 2.2400000000000002],
      "text": ["Foreign Direct Investment: 2.61 % (GDP)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: -0.73 % (GDP)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 2.1 % (GDP)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 2.92 % (GDP)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 1.48 % (GDP)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 0.83 % (GDP)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 1.66 % (GDP)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 2.53 % (GDP)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 2.6 % (GDP)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 1.86 % (GDP)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 1.8 % (GDP)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 0.5 % (GDP)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 1.86 % (GDP)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 1.87 % (GDP)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 2.97 % (GDP)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 4.2 % (GDP)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 1.9 % (GDP)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 4.14 % (GDP)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Foreign Direct Investment: 2.24 % (GDP)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [2.4838402708153162, 5.6374359302764887, 8.5446408408842167, 6.5018650178074724, 7.3361635987286506, 4.2038287077793637, 1.9634922220142361, 4.2178986832439049, 3.556294714840853, 3.61456383085378, 2.6691805333255787, 2.5369152090923963, 1.2542676661507208, 4.6208462397374461, 4.6457124105036192, 2.7800663033372257, 4.2431341286449262, 3.3270365918220022, 4.963828541945845],
      "text": ["Foreign Direct Investment: 2.48 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 5.64 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 8.54 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 6.5 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 7.34 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 4.2 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 1.96 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 4.22 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 3.56 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 3.61 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 2.67 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 2.54 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 1.25 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 4.62 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 4.65 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 2.78 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 4.24 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 3.33 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Foreign Direct Investment: 4.96 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [13.829999999999998, -5.46, 22.18, 9.5099999999999998, 22.190000000000005, 8.4499999999999993, 22.829999999999998, 17.010000000000002, 9.9100000000000001, 25.800000000000001, 29.739999999999998, 37.5, 81.080000000000013, 34.469999999999999, 17.289999999999996, 17.420000000000002, -11.69, 8.1199999999999992, 15.780000000000001],
      "text": ["Foreign Direct Investment: 13.83 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: -5.46 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 22.18 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 9.51 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 22.19 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 8.45 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 22.83 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 17.01 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 9.91 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 25.8 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 29.74 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 37.5 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 81.08 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 34.47 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 17.29 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 17.42 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: -11.69 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 8.12 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Foreign Direct Investment: 15.78 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [6.2699999999999996, 1.3100000000000001, 1.71, 6.4199999999999999, 2.5, 2.9700000000000002, 2.2799999999999998, 3.7700000000000005, 4.0099999999999989, 9.9000000000000004, 6.9499999999999993, 5.2400000000000002, 0.64000000000000001, 3.5600000000000001, 4.8300000000000001, 3.2400000000000002, 4.2999999999999998, 1.74, 3.0699999999999998],
      "text": ["Foreign Direct Investment: 6.27 % (GDP)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 1.31 % (GDP)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 1.71 % (GDP)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 6.42 % (GDP)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 2.5 % (GDP)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 2.97 % (GDP)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 2.28 % (GDP)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 3.77 % (GDP)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 4.01 % (GDP)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 9.9 % (GDP)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 6.95 % (GDP)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 5.24 % (GDP)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 0.64 % (GDP)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 3.56 % (GDP)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 4.83 % (GDP)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 3.24 % (GDP)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 4.3 % (GDP)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 1.74 % (GDP)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Foreign Direct Investment: 3.07 % (GDP)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [-0.27000000000000002, -0.13, 3.6799999999999997, 4.8499999999999996, 5.8499999999999996, 7.5899999999999999, 8.5, 5.5299999999999994, 2.4100000000000001, 1.6399999999999999, 1.1799999999999999, 1.05, 1.22, 1.1199999999999999, 0.20000000000000001, 0.5, 0.54000000000000015, 0.73999999999999999, 2.21],
      "text": ["Foreign Direct Investment: -0.27 % (GDP)<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: -0.13 % (GDP)<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 3.68 % (GDP)<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 4.85 % (GDP)<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 5.85 % (GDP)<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 7.59 % (GDP)<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 8.5 % (GDP)<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 5.53 % (GDP)<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 2.41 % (GDP)<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 1.64 % (GDP)<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 1.18 % (GDP)<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 1.05 % (GDP)<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 1.22 % (GDP)<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 1.12 % (GDP)<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 0.2 % (GDP)<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 0.5 % (GDP)<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 0.54 % (GDP)<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 0.74 % (GDP)<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Foreign Direct Investment: 2.21 % (GDP)<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [2.2999999999999998, 1.6800000000000002, 3.8799999999999994, 3.3999999999999999, 3.1500000000000004, 2.3199999999999998, 0.67999999999999994, 1.47, 1.5399999999999998, 1.2299999999999998, 1.1199999999999999, 0.19999999999999998, 1.76, 1.3299999999999996, 1.3800000000000001, 2.7799999999999994, 1.9599999999999997, 0.72999999999999998, 3.2399999999999998],
      "text": ["Foreign Direct Investment: 2.3 % (GDP)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 1.68 % (GDP)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 3.88 % (GDP)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 3.4 % (GDP)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 3.15 % (GDP)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 2.32 % (GDP)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 0.68 % (GDP)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 1.47 % (GDP)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 1.54 % (GDP)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 1.23 % (GDP)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 1.12 % (GDP)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 0.2 % (GDP)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 1.76 % (GDP)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 1.33 % (GDP)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 1.38 % (GDP)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 2.78 % (GDP)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 1.96 % (GDP)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 0.73 % (GDP)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Foreign Direct Investment: 3.24 % (GDP)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [1.7499429690526314, 3.5998592277152874, 9.9295534028835331, 7.5197356717733923, 6.7797708108028507, 8.649757158224018, 0.60009822534982737, 2.6799505577219698, 1.0100466991867014, 1.7299803252713581, 1.9599795256736068, 1.919989837753342, 1.5500247475263471, 12.079538791724682, 4.6798567892565446, -0.86989088269946324, 0.69004867028755745, 4.9098887793159189, 0.19005476397454193],
      "text": ["Foreign Direct Investment: 1.75 % (GDP)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 3.6 % (GDP)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 9.93 % (GDP)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 7.52 % (GDP)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 6.78 % (GDP)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 8.65 % (GDP)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 0.6 % (GDP)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 2.68 % (GDP)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 1.01 % (GDP)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 1.73 % (GDP)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 1.96 % (GDP)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 1.92 % (GDP)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 1.55 % (GDP)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 12.08 % (GDP)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 4.68 % (GDP)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: -0.87 % (GDP)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 0.69 % (GDP)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 4.91 % (GDP)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Foreign Direct Investment: 0.19 % (GDP)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [2.3599999999999999, 1.0600000000000001, 25.66, 3.1200000000000001, 17.689999999999998, 1.46, 3.5600000000000001, -5.6100000000000003, 5.3200000000000003, 1.2699999999999998, 0.10000000000000001, 0.38999999999999996, -2.0899999999999999, -7.3099999999999996, 3.2400000000000007, -6.29, -2.79, -2.6800000000000002, 2.5700000000000003],
      "text": ["Foreign Direct Investment: 2.36 % (GDP)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 1.06 % (GDP)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 25.66 % (GDP)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 3.12 % (GDP)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 17.69 % (GDP)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 1.46 % (GDP)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 3.56 % (GDP)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: -5.61 % (GDP)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 5.32 % (GDP)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 1.27 % (GDP)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 0.1 % (GDP)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 0.39 % (GDP)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: -2.09 % (GDP)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: -7.31 % (GDP)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 3.24 % (GDP)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: -6.29 % (GDP)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: -2.79 % (GDP)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: -2.68 % (GDP)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Foreign Direct Investment: 2.57 % (GDP)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [3.532521099521571, 3.5314896641881632, 4.6472263581871847, 4.612924043671911, 4.5398537095356888, 3.8763580578364278, 2.6869084825613521, 4.1715058060627701, 3.8932475480465767, 2.9670858126980675, 3.1719152321776023, 2.7808600372309797, 2.4854366793001441, 1.7712947722171795, 1.5377868475035121, 1.8234686964759015, 1.393199500905733, 1.8764559479460656, 2.1206173315096932],
      "text": ["Foreign Direct Investment: 3.53 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 3.53 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 4.65 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 4.61 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 4.54 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 3.88 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 2.69 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 4.17 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 3.89 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 2.97 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 3.17 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 2.78 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 2.49 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 1.77 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 1.54 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 1.82 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 1.39 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 1.88 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Foreign Direct Investment: 2.12 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [2.509300127342919, 1.965803345787398, 2.1903146841191257, 4.7370185827183215, 3.8710317568020103, 3.8420565314780162, 2.3920036470538979, 1.9012217885666225, 1.3183678069746154, 1.7174819258201022, 1.0622850605269161, -0.072626725075650531, -0.26011730173824349, -0.20071308120231396, 0.3803450430188986, 0.36308900072918188, 0.38790069403630717, 0.44276754135176505, 0.39459999745244456],
      "text": ["Foreign Direct Investment: 2.51 % (GDP)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Foreign Direct Investment: 1.97 % (GDP)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Foreign Direct Investment: 2.19 % (GDP)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Foreign Direct Investment: 4.74 % (GDP)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: 3.87 % (GDP)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: 3.84 % (GDP)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Foreign Direct Investment: 2.39 % (GDP)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Foreign Direct Investment: 1.9 % (GDP)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Foreign Direct Investment: 1.32 % (GDP)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Foreign Direct Investment: 1.72 % (GDP)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: 1.06 % (GDP)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: -0.07 % (GDP)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: -0.26 % (GDP)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: -0.2 % (GDP)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: 0.38 % (GDP)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: 0.36 % (GDP)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: 0.39 % (GDP)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: 0.44 % (GDP)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Foreign Direct Investment: 0.39 % (GDP)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [1.8000000000000003, 4.3799999999999999, 5.2999999999999998, 5.21, 9.3900000000000006, 8, 2.0499999999999998, 0.13, 1.22, 0.77000000000000002, 0.22, -1.48, 2.0299999999999998, 3.0299999999999994, 4.54, -0.24999999999999997, 3.0899999999999999, 3.4600000000000004, 8.1999999999999993],
      "text": ["Foreign Direct Investment: 1.8 % (GDP)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 4.38 % (GDP)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 5.3 % (GDP)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 5.21 % (GDP)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 9.39 % (GDP)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 8 % (GDP)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 2.05 % (GDP)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 0.13 % (GDP)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 1.22 % (GDP)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 0.77 % (GDP)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 0.22 % (GDP)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: -1.48 % (GDP)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 2.03 % (GDP)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 3.03 % (GDP)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 4.54 % (GDP)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: -0.25 % (GDP)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 3.09 % (GDP)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 3.46 % (GDP)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Foreign Direct Investment: 8.2 % (GDP)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [0.53999999999999992, -3.4999999999999996, 4.8600000000000012, 0.84000000000000008, 3.7000000000000002, 0.62, 1.1699999999999999, -3.6499999999999995, 3.9399999999999999, -5, 0.20000000000000004, 1.8599999999999999, 0.6100000000000001, 2.4899999999999998, 1.0900000000000001, 2.4600000000000004, -1.0999999999999999, -0.069999999999999993, 4.4400000000000004],
      "text": ["Foreign Direct Investment: 0.54 % (GDP)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: -3.5 % (GDP)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 4.86 % (GDP)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 0.84 % (GDP)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 3.7 % (GDP)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 0.62 % (GDP)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 1.17 % (GDP)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: -3.65 % (GDP)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 3.94 % (GDP)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: -5 % (GDP)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 0.2 % (GDP)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 1.86 % (GDP)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 0.61 % (GDP)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 2.49 % (GDP)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 1.09 % (GDP)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 2.46 % (GDP)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: -1.1 % (GDP)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: -0.07 % (GDP)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Foreign Direct Investment: 4.44 % (GDP)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [1.3469804924592093, 1.948436082541936, 4.3170123236784317, 5.4565459593043375, 6.0633455954838951, 0.74070385935200667, 0.8599331617503454, 1.1672588092945571, 2.0534394043640285, 0.24609150088947174, 0.93752708506103255, 0.79390382985359687, 0.95352763400003926, 1.5371349789909947, 0.78695066092276034, 2.3348380490125913, 1.7653219077410591, -0.89311188979090916, 1.1011429657447032],
      "text": ["Foreign Direct Investment: 1.35 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 1.95 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 4.32 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 5.46 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 6.06 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 0.74 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 0.86 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 1.17 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 2.05 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 0.25 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 0.94 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 0.79 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 0.95 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 1.54 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 0.79 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 2.33 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 1.77 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: -0.89 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Foreign Direct Investment: 1.1 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [3.5299999999999998, 21.25, 30.629999999999995, 51.159999999999997, 86.480000000000004, 20.539999999999999, 11, 13.66, 36.68, 28.57, 37.469999999999999, 13.18, 43.490000000000002, 30.75, 27.27, -36.140000000000001, -2, -22.290000000000003, -12.77],
      "text": ["Foreign Direct Investment: 3.53 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 21.25 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 30.63 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 51.16 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 86.48 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 20.54 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 11 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 13.66 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 36.68 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 28.57 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 37.47 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 13.18 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 43.49 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 30.75 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: 27.27 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: -36.14 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: -2 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: -22.29 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Foreign Direct Investment: -12.77 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [11.010157331666752, 12.164531834600091, 8.883015645880878, 17.012365222567382, 17.127508630933701, 35.721783374616685, 17.509835446734261, 28.00577356937784, 30.510192632597914, 2.4867560288911772, -3.7573318310105637, -1.3268985062610834, -0.37977309647241553, 12.879962390363282, -9.1250989024427529, -13.202016811959513, 8.2083045674941602, -3.6985420168899346, 5.3271126024730862],
      "text": ["Foreign Direct Investment: 11.01 % (GDP)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 12.16 % (GDP)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 8.88 % (GDP)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 17.01 % (GDP)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 17.13 % (GDP)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 35.72 % (GDP)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 17.51 % (GDP)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 28.01 % (GDP)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 30.51 % (GDP)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 2.49 % (GDP)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: -3.76 % (GDP)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: -1.33 % (GDP)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: -0.38 % (GDP)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 12.88 % (GDP)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: -9.13 % (GDP)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: -13.2 % (GDP)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 8.21 % (GDP)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: -3.7 % (GDP)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Foreign Direct Investment: 5.33 % (GDP)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [3.4800000000000004, 3.4300000000000002, 5.2999999999999998, 2.1400000000000001, 8.5700000000000003, 6.7899999999999991, -3.48, 4.8999999999999995, -2.1800000000000002, 1.9099999999999999, -1.8100000000000001, 6.3799999999999999, 7.4599999999999991, 2.1299999999999999, 6.7100000000000009, -3.8299999999999996, 5.8099999999999987, -0.91000000000000014, 8.0399999999999991],
      "text": ["Foreign Direct Investment: 3.48 % (GDP)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 3.43 % (GDP)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 5.3 % (GDP)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 2.14 % (GDP)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 8.57 % (GDP)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 6.79 % (GDP)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: -3.48 % (GDP)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 4.9 % (GDP)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: -2.18 % (GDP)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 1.91 % (GDP)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: -1.81 % (GDP)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 6.38 % (GDP)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 7.46 % (GDP)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 2.13 % (GDP)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 6.71 % (GDP)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: -3.83 % (GDP)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 5.81 % (GDP)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: -0.91 % (GDP)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Foreign Direct Investment: 8.04 % (GDP)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [1.1642761949954978, 1.3635284534823975, 0.79878797168703031, 2.6218313459955382, 1.4029518321926722, 5.424911963455596, 23.376323175066151, 11.26742444235142, 14.08458961234772, 27.362478562550898, 11.697766179667871, 23.238938089734479, 15.366609194805646, 5.4378611818464915, 8.1193441268906525, 1.2383573528949894, 23.99728551771852, -9.6340918190267573, -9.9955620503097826],
      "text": ["Foreign Direct Investment: 1.16 % (GDP)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 1.36 % (GDP)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 0.8 % (GDP)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 2.62 % (GDP)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 1.4 % (GDP)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 5.42 % (GDP)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 23.38 % (GDP)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 11.27 % (GDP)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 14.08 % (GDP)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 27.36 % (GDP)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 11.7 % (GDP)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 23.24 % (GDP)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 15.37 % (GDP)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 5.44 % (GDP)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 8.12 % (GDP)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 1.24 % (GDP)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: 24 % (GDP)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: -9.63 % (GDP)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Foreign Direct Investment: -10 % (GDP)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Foreign Direct Investment (REMIND_54)",
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
      "ticktext": ["0", "50", "100"],
      "tickvals": [0, 50, 99.999999999999986],
      "categoryorder": "array",
      "categoryarray": ["0", "50", "100"],
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
        "text": "% (GDP)",
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
    "b55c44ec1c14": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c7942703a": {
      "y": {}
    }
  },
  "cur_data": "b55c44ec1c14",
  "visdat": {
    "b55c44ec1c14": ["function (y) ", "x"],
    "b55c7942703a": ["function (y) ", "x"]
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

  
