(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_26_Economy_Gini_index_line') 

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
      "y": [53.358717246584895, 52.592947745109278, 52.515492869208217, 51.651921528799761, 51.37161165556055, 50.708603025658284, 49.979583072769067, 49.423214806308913, 49.077440891238545, 49.113134252448376, 48.854761671074087, 48.465012561134529, 48.188691658528036, 48.492000336941395, 48.124728423520352, 48.214956274684631, 48.046545870770665, 46.736569482602853, 47.513159868302999],
      "text": ["Gini index: 53.36 index (0-100)<br>Period: 2003<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 52.59 index (0-100)<br>Period: 2004<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 52.52 index (0-100)<br>Period: 2005<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 51.65 index (0-100)<br>Period: 2006<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 51.37 index (0-100)<br>Period: 2007<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 50.71 index (0-100)<br>Period: 2008<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 49.98 index (0-100)<br>Period: 2009<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 49.42 index (0-100)<br>Period: 2010<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 49.08 index (0-100)<br>Period: 2011<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 49.11 index (0-100)<br>Period: 2012<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.85 index (0-100)<br>Period: 2013<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.47 index (0-100)<br>Period: 2014<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.19 index (0-100)<br>Period: 2015<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.49 index (0-100)<br>Period: 2016<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.12 index (0-100)<br>Period: 2017<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.21 index (0-100)<br>Period: 2018<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.05 index (0-100)<br>Period: 2019<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 46.74 index (0-100)<br>Period: 2020<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 47.51 index (0-100)<br>Period: 2021<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [31.379175493423475, 32.901647621366976, 32.551085678324561, 31.00893489370802, 31.491078914089645, 31.210145850575781, 30.2929682732501, 29.861907537995393, 29.183292279797666, 29.270032953832565, 30.03921055779994, 30.248090185945657, 30.368388544507383, 31.175542428893763, 30.407049558477016, 30.870800808226058, 30.906859020191035, 30.907485093491577, 30.909172569411464],
      "text": ["Gini index: 31.38 index (0-100)<br>Period: 2003<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 32.9 index (0-100)<br>Period: 2004<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 32.55 index (0-100)<br>Period: 2005<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 31.01 index (0-100)<br>Period: 2006<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 31.49 index (0-100)<br>Period: 2007<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 31.21 index (0-100)<br>Period: 2008<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 30.29 index (0-100)<br>Period: 2009<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 29.86 index (0-100)<br>Period: 2010<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 29.18 index (0-100)<br>Period: 2011<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 29.27 index (0-100)<br>Period: 2012<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 30.04 index (0-100)<br>Period: 2013<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 30.25 index (0-100)<br>Period: 2014<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 30.37 index (0-100)<br>Period: 2015<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 31.18 index (0-100)<br>Period: 2016<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 30.41 index (0-100)<br>Period: 2017<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 30.87 index (0-100)<br>Period: 2018<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 30.91 index (0-100)<br>Period: 2019<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 30.91 index (0-100)<br>Period: 2020<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Gini index: 30.91 index (0-100)<br>Period: 2021<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland"],
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
      "y": [36.675693954190265, 36.347216833007472, 37.108776615535511, 35.905590128270589, 34.406028481857334, 34.621244000609025, 34.189954975411069, 33.950940490931693, 34.498269539262594, 34.60893246339306, 34.591925605154906, 35.019818704795661, 36.381448636258042, 35.647132976249253, 35.591030863482942, 35.767578969099716, 35.954097471994622, 35.691250493332561, 35.743025390781199],
      "text": ["Gini index: 36.68 index (0-100)<br>Period: 2003<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 36.35 index (0-100)<br>Period: 2004<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 37.11 index (0-100)<br>Period: 2005<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.91 index (0-100)<br>Period: 2006<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.41 index (0-100)<br>Period: 2007<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.62 index (0-100)<br>Period: 2008<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.19 index (0-100)<br>Period: 2009<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Gini index: 33.95 index (0-100)<br>Period: 2010<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Gini index: 34.5 index (0-100)<br>Period: 2011<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.61 index (0-100)<br>Period: 2012<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.59 index (0-100)<br>Period: 2013<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.02 index (0-100)<br>Period: 2014<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 36.38 index (0-100)<br>Period: 2015<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.65 index (0-100)<br>Period: 2016<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.59 index (0-100)<br>Period: 2017<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.77 index (0-100)<br>Period: 2018<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.95 index (0-100)<br>Period: 2019<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.69 index (0-100)<br>Period: 2020<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.74 index (0-100)<br>Period: 2021<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "y": [36.79372687441024, 36.98870011895599, 38.000705072708421, 37.249189965359626, 37.933465316900474, 37.157119865646465, 35.984570723544465, 35.886493672428806, 35.859549153853685, 36.386197641508041, 36.481511355275579, 35.898713390952906, 34.698642559208331, 34.141561477233267, 34.412625661806871, 34.604113970553669, 34.705497738938426, 33.647033845935049, 33.686885666808969],
      "text": ["Gini index: 36.79 index (0-100)<br>Period: 2003<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 36.99 index (0-100)<br>Period: 2004<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 38 index (0-100)<br>Period: 2005<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 37.25 index (0-100)<br>Period: 2006<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 37.93 index (0-100)<br>Period: 2007<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 37.16 index (0-100)<br>Period: 2008<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 35.98 index (0-100)<br>Period: 2009<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 35.89 index (0-100)<br>Period: 2010<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 35.86 index (0-100)<br>Period: 2011<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 36.39 index (0-100)<br>Period: 2012<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 36.48 index (0-100)<br>Period: 2013<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 35.9 index (0-100)<br>Period: 2014<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 34.7 index (0-100)<br>Period: 2015<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 34.14 index (0-100)<br>Period: 2016<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 34.41 index (0-100)<br>Period: 2017<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 34.6 index (0-100)<br>Period: 2018<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 34.71 index (0-100)<br>Period: 2019<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 33.65 index (0-100)<br>Period: 2020<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 33.69 index (0-100)<br>Period: 2021<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [34.800000000000004, 34.799999999999997, 34.799999999999997, 34.799999999999997, 34.799999999999997, 34.799999999999997, 33.450000000000003, 32.099999999999994, 32.366666666666674, 32.633333333333333, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999],
      "text": ["Gini index: 34.8 index (0-100)<br>Period: 2003<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2004<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2005<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2006<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2007<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2008<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 33.45 index (0-100)<br>Period: 2009<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.1 index (0-100)<br>Period: 2010<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.37 index (0-100)<br>Period: 2011<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.63 index (0-100)<br>Period: 2012<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2013<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2014<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2015<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2016<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2017<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2018<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2019<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2020<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2021<br>REMIND_26 region code: JPN<br>Countries in region: Japan"],
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
      "y": [35.487987999651452, 35.4790280289563, 36.526267494772227, 35.082202445240846, 34.048805953186346, 32.968291566295179, 32.554719524448359, 33.350435530189792, 33.23888997587455, 34.214234617130138, 34.634818479656104, 34.200999321290134, 34.126525431832945, 33.693642078510749, 34.38497593879648, 34.157712179631922, 33.529599975804338, 33.429693371823831, 33.421773419623349],
      "text": ["Gini index: 35.49 index (0-100)<br>Period: 2003<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 35.48 index (0-100)<br>Period: 2004<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 36.53 index (0-100)<br>Period: 2005<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 35.08 index (0-100)<br>Period: 2006<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.05 index (0-100)<br>Period: 2007<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 32.97 index (0-100)<br>Period: 2008<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 32.55 index (0-100)<br>Period: 2009<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.35 index (0-100)<br>Period: 2010<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.24 index (0-100)<br>Period: 2011<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.21 index (0-100)<br>Period: 2012<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.63 index (0-100)<br>Period: 2013<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.2 index (0-100)<br>Period: 2014<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.13 index (0-100)<br>Period: 2015<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.69 index (0-100)<br>Period: 2016<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.38 index (0-100)<br>Period: 2017<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.16 index (0-100)<br>Period: 2018<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.53 index (0-100)<br>Period: 2019<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.43 index (0-100)<br>Period: 2020<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.42 index (0-100)<br>Period: 2021<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [33.190629847785033, 34.399312620909242, 33.583058926368651, 34.381334143560061, 34.610419970017098, 34.648391455004571, 34.899999999999999, 35.311003680367648, 35.810549870657645, 35.510126335755473, 36.200000000000003, 36.008573254809995, 36.072354190035476, 35.690946590389764, 34.537059345370977, 34.483807889256596, 34.03129399297471, 34.864285145956309, 34.864132028618343],
      "text": ["Gini index: 33.19 index (0-100)<br>Period: 2003<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.4 index (0-100)<br>Period: 2004<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 33.58 index (0-100)<br>Period: 2005<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.38 index (0-100)<br>Period: 2006<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.61 index (0-100)<br>Period: 2007<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.65 index (0-100)<br>Period: 2008<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.9 index (0-100)<br>Period: 2009<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 35.31 index (0-100)<br>Period: 2010<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 35.81 index (0-100)<br>Period: 2011<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 35.51 index (0-100)<br>Period: 2012<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 36.2 index (0-100)<br>Period: 2013<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 36.01 index (0-100)<br>Period: 2014<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 36.07 index (0-100)<br>Period: 2015<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 35.69 index (0-100)<br>Period: 2016<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.54 index (0-100)<br>Period: 2017<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.48 index (0-100)<br>Period: 2018<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.03 index (0-100)<br>Period: 2019<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.86 index (0-100)<br>Period: 2020<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Gini index: 34.86 index (0-100)<br>Period: 2021<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [34.399999999999999, 34.399999999999999, 34.600000000000001, 34.799999999999997, 35, 35.199999999999996, 35.399999999999999, 35.549999999999997, 35.700000000000003, 35.450000000000003, 35.200000000000003, 34.950000000000003, 34.700000000000003, 34.799999999999997, 35.899999999999999, 34.600000000000001, 35, 34.799999999999997, 34.200000000000003],
      "text": ["Gini index: 34.4 index (0-100)<br>Period: 2003<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 34.4 index (0-100)<br>Period: 2004<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 34.6 index (0-100)<br>Period: 2005<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 34.8 index (0-100)<br>Period: 2006<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 35 index (0-100)<br>Period: 2007<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 35.2 index (0-100)<br>Period: 2008<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 35.4 index (0-100)<br>Period: 2009<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 35.55 index (0-100)<br>Period: 2010<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 35.7 index (0-100)<br>Period: 2011<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 35.45 index (0-100)<br>Period: 2012<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 35.2 index (0-100)<br>Period: 2013<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 34.95 index (0-100)<br>Period: 2014<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 34.7 index (0-100)<br>Period: 2015<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 34.8 index (0-100)<br>Period: 2016<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 35.9 index (0-100)<br>Period: 2017<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 34.6 index (0-100)<br>Period: 2018<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 35 index (0-100)<br>Period: 2019<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 34.8 index (0-100)<br>Period: 2020<br>REMIND_26 region code: IND<br>Countries in region: India", "Gini index: 34.2 index (0-100)<br>Period: 2021<br>REMIND_26 region code: IND<br>Countries in region: India"],
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
      "y": [40.799999999999997, 40.299999999999997, 41, 41.399999999999999, 40.799999999999997, 40.799999999999997, 40.599999999999994, 40, 40.899999999999999, 40.899999999999999, 40.700000000000003, 41.5, 41.200000000000003, 41.100000000000001, 41.200000000000003, 41.399999999999999, 41.5, 39.700000000000003, 39.799999999999997],
      "text": ["Gini index: 40.8 index (0-100)<br>Period: 2003<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 40.3 index (0-100)<br>Period: 2004<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 41 index (0-100)<br>Period: 2005<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 41.4 index (0-100)<br>Period: 2006<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 40.8 index (0-100)<br>Period: 2007<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 40.8 index (0-100)<br>Period: 2008<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 40.6 index (0-100)<br>Period: 2009<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 40 index (0-100)<br>Period: 2010<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 40.9 index (0-100)<br>Period: 2011<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 40.9 index (0-100)<br>Period: 2012<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 40.7 index (0-100)<br>Period: 2013<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 41.5 index (0-100)<br>Period: 2014<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 41.2 index (0-100)<br>Period: 2015<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 41.1 index (0-100)<br>Period: 2016<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 41.2 index (0-100)<br>Period: 2017<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 41.4 index (0-100)<br>Period: 2018<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 41.5 index (0-100)<br>Period: 2019<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 39.7 index (0-100)<br>Period: 2020<br>REMIND_26 region code: USA<br>Countries in region: United States", "Gini index: 39.8 index (0-100)<br>Period: 2021<br>REMIND_26 region code: USA<br>Countries in region: United States"],
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
      "y": [38, 38, 35.799999999999997, 34.700000000000003, 34, 33.5, 33.399999999999999, 33.200000000000003, 33.200000000000003, 32.999999999999993, 33.100000000000001, 32.799999999999997, 31.800000000000001, 31.200000000000003, 29.700000000000003, 30.199999999999999, 28.800000000000004, 28.800000000000001, 28.800000000000001],
      "text": ["Gini index: 38 index (0-100)<br>Period: 2003<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 38 index (0-100)<br>Period: 2004<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 35.8 index (0-100)<br>Period: 2005<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 34.7 index (0-100)<br>Period: 2006<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 34 index (0-100)<br>Period: 2007<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 33.5 index (0-100)<br>Period: 2008<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 33.4 index (0-100)<br>Period: 2009<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 33.2 index (0-100)<br>Period: 2010<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 33.2 index (0-100)<br>Period: 2011<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 33 index (0-100)<br>Period: 2012<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 33.1 index (0-100)<br>Period: 2013<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 32.8 index (0-100)<br>Period: 2014<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 31.8 index (0-100)<br>Period: 2015<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 31.2 index (0-100)<br>Period: 2016<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 29.7 index (0-100)<br>Period: 2017<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 30.2 index (0-100)<br>Period: 2018<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 28.8 index (0-100)<br>Period: 2019<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 28.8 index (0-100)<br>Period: 2020<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Gini index: 28.8 index (0-100)<br>Period: 2021<br>REMIND_26 region code: POL<br>Countries in region: Poland"],
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
      "y": [42.661960692914128, 42.487501438872606, 42.394283395985916, 42.24748795648329, 42.105340271032944, 41.925530524116837, 41.853461121557359, 41.714664980945727, 41.63559068775988, 41.616264840521701, 41.728485064820092, 41.836944730626776, 41.951021525595493, 41.821017228300448, 41.621352686941755, 41.484649614911476, 41.413214255736975, 41.358581449601289, 41.481123872540252],
      "text": ["Gini index: 42.66 index (0-100)<br>Period: 2003<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.49 index (0-100)<br>Period: 2004<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.39 index (0-100)<br>Period: 2005<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.25 index (0-100)<br>Period: 2006<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.11 index (0-100)<br>Period: 2007<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.93 index (0-100)<br>Period: 2008<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.85 index (0-100)<br>Period: 2009<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.71 index (0-100)<br>Period: 2010<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.64 index (0-100)<br>Period: 2011<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.62 index (0-100)<br>Period: 2012<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.73 index (0-100)<br>Period: 2013<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.84 index (0-100)<br>Period: 2014<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.95 index (0-100)<br>Period: 2015<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.82 index (0-100)<br>Period: 2016<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.62 index (0-100)<br>Period: 2017<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.48 index (0-100)<br>Period: 2018<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.41 index (0-100)<br>Period: 2019<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.36 index (0-100)<br>Period: 2020<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.48 index (0-100)<br>Period: 2021<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [29.899999999999995, 30.199999999999996, 31.600000000000001, 30.999999999999996, 31.100000000000005, 30.899999999999999, 30.500000000000004, 30.300000000000001, 30.699999999999999, 31.100000000000001, 31.500000000000004, 30.899999999999999, 31.400000000000002, 31.399999999999995, 31.900000000000002, 31.800000000000001, 31.699999999999999, 31.699999999999999, 31.699999999999999],
      "text": ["Gini index: 29.9 index (0-100)<br>Period: 2003<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 30.2 index (0-100)<br>Period: 2004<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.6 index (0-100)<br>Period: 2005<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31 index (0-100)<br>Period: 2006<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.1 index (0-100)<br>Period: 2007<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 30.9 index (0-100)<br>Period: 2008<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 30.5 index (0-100)<br>Period: 2009<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 30.3 index (0-100)<br>Period: 2010<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 30.7 index (0-100)<br>Period: 2011<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.1 index (0-100)<br>Period: 2012<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.5 index (0-100)<br>Period: 2013<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 30.9 index (0-100)<br>Period: 2014<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.4 index (0-100)<br>Period: 2015<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.4 index (0-100)<br>Period: 2016<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.9 index (0-100)<br>Period: 2017<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.8 index (0-100)<br>Period: 2018<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.7 index (0-100)<br>Period: 2019<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.7 index (0-100)<br>Period: 2020<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Gini index: 31.7 index (0-100)<br>Period: 2021<br>REMIND_26 region code: DEU<br>Countries in region: Germany"],
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
      "y": [30.324664236884338, 30.086669776992224, 30.308846724184864, 28.905796801225637, 28.39348894527868, 28.954780372851108, 29.231063975687508, 28.844733114060066, 28.482946408821082, 28.543346418332863, 29.387004635128253, 28.850908770868553, 28.697718126333697, 28.167407440093999, 27.334404057010975, 27.551021062445095, 27.167830785915754, 27.780165530429105, 27.793057678722285],
      "text": ["Gini index: 30.32 index (0-100)<br>Period: 2003<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 30.09 index (0-100)<br>Period: 2004<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 30.31 index (0-100)<br>Period: 2005<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.91 index (0-100)<br>Period: 2006<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.39 index (0-100)<br>Period: 2007<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.95 index (0-100)<br>Period: 2008<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 29.23 index (0-100)<br>Period: 2009<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.84 index (0-100)<br>Period: 2010<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.48 index (0-100)<br>Period: 2011<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.54 index (0-100)<br>Period: 2012<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 29.39 index (0-100)<br>Period: 2013<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.85 index (0-100)<br>Period: 2014<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.7 index (0-100)<br>Period: 2015<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.17 index (0-100)<br>Period: 2016<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.33 index (0-100)<br>Period: 2017<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.55 index (0-100)<br>Period: 2018<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.17 index (0-100)<br>Period: 2019<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.78 index (0-100)<br>Period: 2020<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.79 index (0-100)<br>Period: 2021<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [32.899999999999991, 33.600000000000001, 33.799999999999997, 32.700000000000003, 31.900000000000002, 30.899999999999999, 32.700000000000003, 32.299999999999997, 32.899999999999999, 33.20000000000001, 33.5, 31.899999999999999, 31.799999999999997, 32.799999999999997, 31.399999999999995, 30.600000000000005, 30.800000000000001, 29.200000000000003, 29.200000000000003],
      "text": ["Gini index: 32.9 index (0-100)<br>Period: 2003<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 33.6 index (0-100)<br>Period: 2004<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 33.8 index (0-100)<br>Period: 2005<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.7 index (0-100)<br>Period: 2006<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 31.9 index (0-100)<br>Period: 2007<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 30.9 index (0-100)<br>Period: 2008<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.7 index (0-100)<br>Period: 2009<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.3 index (0-100)<br>Period: 2010<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.9 index (0-100)<br>Period: 2011<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 33.2 index (0-100)<br>Period: 2012<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 33.5 index (0-100)<br>Period: 2013<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 31.9 index (0-100)<br>Period: 2014<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 31.8 index (0-100)<br>Period: 2015<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.8 index (0-100)<br>Period: 2016<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 31.4 index (0-100)<br>Period: 2017<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 30.6 index (0-100)<br>Period: 2018<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 30.8 index (0-100)<br>Period: 2019<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 29.2 index (0-100)<br>Period: 2020<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Gini index: 29.2 index (0-100)<br>Period: 2021<br>REMIND_26 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [26.022236438401105, 26.244071751517854, 26.566915992814259, 26.686094252259881, 27.168361100887449, 27.2151372133949, 27.186482984904501, 27.561593365661569, 27.51710376444872, 27.523439108420039, 28.296661086705491, 27.980436493497486, 28.37734195537292, 28.56733352227516, 28.411572003078298, 28.816409834801519, 28.456119989300625, 28.061610086549944, 28.062815137075539],
      "text": ["Gini index: 26.02 index (0-100)<br>Period: 2003<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 26.24 index (0-100)<br>Period: 2004<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 26.57 index (0-100)<br>Period: 2005<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 26.69 index (0-100)<br>Period: 2006<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 27.17 index (0-100)<br>Period: 2007<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 27.22 index (0-100)<br>Period: 2008<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 27.19 index (0-100)<br>Period: 2009<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 27.56 index (0-100)<br>Period: 2010<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 27.52 index (0-100)<br>Period: 2011<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 27.52 index (0-100)<br>Period: 2012<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 28.3 index (0-100)<br>Period: 2013<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 27.98 index (0-100)<br>Period: 2014<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 28.38 index (0-100)<br>Period: 2015<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 28.57 index (0-100)<br>Period: 2016<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 28.41 index (0-100)<br>Period: 2017<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 28.82 index (0-100)<br>Period: 2018<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 28.46 index (0-100)<br>Period: 2019<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 28.06 index (0-100)<br>Period: 2020<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Gini index: 28.06 index (0-100)<br>Period: 2021<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [31.400000000000002, 30.600000000000005, 29.799999999999997, 29.699999999999996, 32.400000000000006, 33.000000000000007, 32.699999999999996, 33.70000000000001, 33.29999999999999, 33.100000000000001, 32.5, 32.29999999999999, 32.699999999999989, 31.899999999999999, 31.600000000000001, 32.399999999999991, 31.199999999999992, 30.699999999999999, 30.699999999999996],
      "text": ["Gini index: 31.4 index (0-100)<br>Period: 2003<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 30.6 index (0-100)<br>Period: 2004<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 29.8 index (0-100)<br>Period: 2005<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 29.7 index (0-100)<br>Period: 2006<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.4 index (0-100)<br>Period: 2007<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 33 index (0-100)<br>Period: 2008<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.7 index (0-100)<br>Period: 2009<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 33.7 index (0-100)<br>Period: 2010<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 33.3 index (0-100)<br>Period: 2011<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 33.1 index (0-100)<br>Period: 2012<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.5 index (0-100)<br>Period: 2013<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.3 index (0-100)<br>Period: 2014<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.7 index (0-100)<br>Period: 2015<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 31.9 index (0-100)<br>Period: 2016<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 31.6 index (0-100)<br>Period: 2017<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.4 index (0-100)<br>Period: 2018<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 31.2 index (0-100)<br>Period: 2019<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 30.7 index (0-100)<br>Period: 2020<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 30.7 index (0-100)<br>Period: 2021<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [34.899974986426592, 34.799980102857283, 35.499955537897691, 35.899946055463957, 34.400029196076069, 35.399990344263379, 35.100014374441443, 33.700087950206111, 33.200117927239148, 33.100110084791211, 32.700116331399961, 33.100085455255993, 33.300064160253491, 33.100077322886399, 32.600149083739254, 33.700040413815017, 32.800098233607912, 32.600097874202, 32.600071237690464],
      "text": ["Gini index: 34.9 index (0-100)<br>Period: 2003<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 34.8 index (0-100)<br>Period: 2004<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 35.5 index (0-100)<br>Period: 2005<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 35.9 index (0-100)<br>Period: 2006<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 34.4 index (0-100)<br>Period: 2007<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 35.4 index (0-100)<br>Period: 2008<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 35.1 index (0-100)<br>Period: 2009<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.7 index (0-100)<br>Period: 2010<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.2 index (0-100)<br>Period: 2011<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.1 index (0-100)<br>Period: 2012<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.7 index (0-100)<br>Period: 2013<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.1 index (0-100)<br>Period: 2014<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.3 index (0-100)<br>Period: 2015<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.1 index (0-100)<br>Period: 2016<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.6 index (0-100)<br>Period: 2017<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.7 index (0-100)<br>Period: 2018<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.8 index (0-100)<br>Period: 2019<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.6 index (0-100)<br>Period: 2020<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.6 index (0-100)<br>Period: 2021<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [29.499999999999996, 29.800000000000001, 28.699999999999999, 29.600000000000001, 30.599999999999998, 30.399999999999999, 31.499999999999996, 30.300000000000001, 30.800000000000004, 30.499999999999996, 30.800000000000004, 30.5, 30.5, 30.800000000000001, 29.700000000000003, 30.799999999999997, 30.199999999999999, 29.800000000000001, 29.800000000000001],
      "text": ["Gini index: 29.5 index (0-100)<br>Period: 2003<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 29.8 index (0-100)<br>Period: 2004<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 28.7 index (0-100)<br>Period: 2005<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 29.6 index (0-100)<br>Period: 2006<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.6 index (0-100)<br>Period: 2007<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.4 index (0-100)<br>Period: 2008<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 31.5 index (0-100)<br>Period: 2009<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.3 index (0-100)<br>Period: 2010<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.8 index (0-100)<br>Period: 2011<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.5 index (0-100)<br>Period: 2012<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.8 index (0-100)<br>Period: 2013<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.5 index (0-100)<br>Period: 2014<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.5 index (0-100)<br>Period: 2015<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.8 index (0-100)<br>Period: 2016<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 29.7 index (0-100)<br>Period: 2017<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.8 index (0-100)<br>Period: 2018<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 30.2 index (0-100)<br>Period: 2019<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 29.8 index (0-100)<br>Period: 2020<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Gini index: 29.8 index (0-100)<br>Period: 2021<br>REMIND_26 region code: AUT<br>Countries in region: Austria"],
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
      "y": [40.899999999999999, 40.899999999999991, 40.899999999999999, 41.600000000000001, 42.299999999999997, 43.000000000000007, 43.350000000000001, 43.700000000000003, 42.400000000000006, 42.200000000000003, 39.700000000000003, 39.200000000000003, 38.600000000000001, 38.499999999999993, 39.100000000000001, 38.5, 38.200000000000003, 37.100000000000001, 37.100000000000009],
      "text": ["Gini index: 40.9 index (0-100)<br>Period: 2003<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 40.9 index (0-100)<br>Period: 2004<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 40.9 index (0-100)<br>Period: 2005<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 41.6 index (0-100)<br>Period: 2006<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 42.3 index (0-100)<br>Period: 2007<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 43 index (0-100)<br>Period: 2008<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 43.35 index (0-100)<br>Period: 2009<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 43.7 index (0-100)<br>Period: 2010<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 42.4 index (0-100)<br>Period: 2011<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 42.2 index (0-100)<br>Period: 2012<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 39.7 index (0-100)<br>Period: 2013<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 39.2 index (0-100)<br>Period: 2014<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.6 index (0-100)<br>Period: 2015<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.5 index (0-100)<br>Period: 2016<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 39.1 index (0-100)<br>Period: 2017<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.5 index (0-100)<br>Period: 2018<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.2 index (0-100)<br>Period: 2019<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 37.1 index (0-100)<br>Period: 2020<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 37.1 index (0-100)<br>Period: 2021<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [34.852345681215716, 34.256478970750479, 33.759874866116057, 33.660541695409549, 32.874426409542053, 33.766827342308602, 33.775046697206733, 34.66041850551813, 35.058230988349891, 35.159370034011985, 34.857164484981553, 34.659542126971807, 35.356349974953261, 35.154526165394955, 35.848600798154791, 35.148279728941411, 34.569873343650691, 35.167337364934156, 35.166967638764554],
      "text": ["Gini index: 34.85 index (0-100)<br>Period: 2003<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.26 index (0-100)<br>Period: 2004<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 33.76 index (0-100)<br>Period: 2005<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 33.66 index (0-100)<br>Period: 2006<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 32.87 index (0-100)<br>Period: 2007<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 33.77 index (0-100)<br>Period: 2008<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 33.78 index (0-100)<br>Period: 2009<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.66 index (0-100)<br>Period: 2010<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.06 index (0-100)<br>Period: 2011<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.16 index (0-100)<br>Period: 2012<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.86 index (0-100)<br>Period: 2013<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.66 index (0-100)<br>Period: 2014<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.36 index (0-100)<br>Period: 2015<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.15 index (0-100)<br>Period: 2016<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.85 index (0-100)<br>Period: 2017<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.15 index (0-100)<br>Period: 2018<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.57 index (0-100)<br>Period: 2019<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.17 index (0-100)<br>Period: 2020<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.17 index (0-100)<br>Period: 2021<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [29.800000000000001, 29.800000000000001, 29, 29.999999999999996, 29.599999999999998, 29.300000000000004, 27.899999999999999, 27.800000000000001, 27.800000000000001, 27.600000000000001, 28.100000000000001, 28.600000000000001, 28.199999999999999, 28.199999999999999, 28.499999999999996, 28.100000000000001, 29.199999999999999, 26.000000000000004, 26],
      "text": ["Gini index: 29.8 index (0-100)<br>Period: 2003<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29.8 index (0-100)<br>Period: 2004<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29 index (0-100)<br>Period: 2005<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 30 index (0-100)<br>Period: 2006<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29.6 index (0-100)<br>Period: 2007<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29.3 index (0-100)<br>Period: 2008<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 27.9 index (0-100)<br>Period: 2009<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 27.8 index (0-100)<br>Period: 2010<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 27.8 index (0-100)<br>Period: 2011<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 27.6 index (0-100)<br>Period: 2012<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.1 index (0-100)<br>Period: 2013<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.6 index (0-100)<br>Period: 2014<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.2 index (0-100)<br>Period: 2015<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.2 index (0-100)<br>Period: 2016<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.5 index (0-100)<br>Period: 2017<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.1 index (0-100)<br>Period: 2018<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29.2 index (0-100)<br>Period: 2019<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 26 index (0-100)<br>Period: 2020<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Gini index: 26 index (0-100)<br>Period: 2021<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [28.187591776805604, 30.487367812360283, 29.363756519117032, 28.220082772300405, 29.282118846613173, 28.58326628193484, 28.714592188113699, 28.493365284696683, 28.279411420874165, 27.810231195068376, 27.899649194075213, 28.246581707205962, 27.950083655583512, 27.800299678447089, 27.753672281838845, 27.614224207985302, 27.558412239642625, 26.383358680479116, 26.387401706441842],
      "text": ["Gini index: 28.19 index (0-100)<br>Period: 2003<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 30.49 index (0-100)<br>Period: 2004<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 29.36 index (0-100)<br>Period: 2005<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.22 index (0-100)<br>Period: 2006<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 29.28 index (0-100)<br>Period: 2007<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.58 index (0-100)<br>Period: 2008<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.71 index (0-100)<br>Period: 2009<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.49 index (0-100)<br>Period: 2010<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.28 index (0-100)<br>Period: 2011<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.81 index (0-100)<br>Period: 2012<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.9 index (0-100)<br>Period: 2013<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.25 index (0-100)<br>Period: 2014<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.95 index (0-100)<br>Period: 2015<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.8 index (0-100)<br>Period: 2016<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.75 index (0-100)<br>Period: 2017<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.61 index (0-100)<br>Period: 2018<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.56 index (0-100)<br>Period: 2019<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 26.38 index (0-100)<br>Period: 2020<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 26.39 index (0-100)<br>Period: 2021<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [32.573728208215186, 33.302450702479646, 34.229437163080689, 34.750704029390185, 33.743352643598357, 33.429651404687064, 33.463784901068955, 33.860610334245862, 34.594122610720476, 36.109114159002708, 36.187702379088634, 35.780126017283969, 35.797431394428003, 34.783741176182673, 34.086665050095121, 32.878827435292642, 32.896417105802151, 33.393825426974068, 33.389434759520796],
      "text": ["Gini index: 32.57 index (0-100)<br>Period: 2003<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.3 index (0-100)<br>Period: 2004<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.23 index (0-100)<br>Period: 2005<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.75 index (0-100)<br>Period: 2006<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.74 index (0-100)<br>Period: 2007<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.43 index (0-100)<br>Period: 2008<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.46 index (0-100)<br>Period: 2009<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.86 index (0-100)<br>Period: 2010<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.59 index (0-100)<br>Period: 2011<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 36.11 index (0-100)<br>Period: 2012<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 36.19 index (0-100)<br>Period: 2013<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 35.78 index (0-100)<br>Period: 2014<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 35.8 index (0-100)<br>Period: 2015<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.78 index (0-100)<br>Period: 2016<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.09 index (0-100)<br>Period: 2017<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 32.88 index (0-100)<br>Period: 2018<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 32.9 index (0-100)<br>Period: 2019<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.39 index (0-100)<br>Period: 2020<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.39 index (0-100)<br>Period: 2021<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Gini index (REMIND_26)",
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
      "ticktext": ["40", "60", "80", "100"],
      "tickvals": [40, 60, 80, 100],
      "categoryorder": "array",
      "categoryarray": ["40", "60", "80", "100"],
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
    "b55c3c4b45be": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c5f1e1007": {
      "y": {}
    }
  },
  "cur_data": "b55c3c4b45be",
  "visdat": {
    "b55c3c4b45be": ["function (y) ", "x"],
    "b55c5f1e1007": ["function (y) ", "x"]
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

  
