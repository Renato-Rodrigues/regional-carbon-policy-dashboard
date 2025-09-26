(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_12_Economy_Gini_index_line') 

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
      "text": ["Gini index: 53.36 index (0-100)<br>Period: 2003<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 52.59 index (0-100)<br>Period: 2004<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 52.52 index (0-100)<br>Period: 2005<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 51.65 index (0-100)<br>Period: 2006<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 51.37 index (0-100)<br>Period: 2007<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 50.71 index (0-100)<br>Period: 2008<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 49.98 index (0-100)<br>Period: 2009<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 49.42 index (0-100)<br>Period: 2010<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 49.08 index (0-100)<br>Period: 2011<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 49.11 index (0-100)<br>Period: 2012<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.85 index (0-100)<br>Period: 2013<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.47 index (0-100)<br>Period: 2014<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.19 index (0-100)<br>Period: 2015<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.49 index (0-100)<br>Period: 2016<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.12 index (0-100)<br>Period: 2017<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.21 index (0-100)<br>Period: 2018<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.05 index (0-100)<br>Period: 2019<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 46.74 index (0-100)<br>Period: 2020<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 47.51 index (0-100)<br>Period: 2021<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [36.256494434246022, 36.073431127138207, 36.744863165974543, 35.512674547253759, 34.169625540038673, 34.342240076856022, 33.868868675152932, 33.612318107792035, 34.055548406057888, 34.161574570398166, 34.208220939157357, 34.615252221318457, 35.868829484723499, 35.264144658730366, 35.145273159082421, 35.345475711580441, 35.51809724824691, 35.276292831801811, 35.321429410066649],
      "text": ["Gini index: 36.26 index (0-100)<br>Period: 2003<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 36.07 index (0-100)<br>Period: 2004<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 36.74 index (0-100)<br>Period: 2005<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.51 index (0-100)<br>Period: 2006<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.17 index (0-100)<br>Period: 2007<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.34 index (0-100)<br>Period: 2008<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 33.87 index (0-100)<br>Period: 2009<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Gini index: 33.61 index (0-100)<br>Period: 2010<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Gini index: 34.06 index (0-100)<br>Period: 2011<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.16 index (0-100)<br>Period: 2012<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.21 index (0-100)<br>Period: 2013<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 34.62 index (0-100)<br>Period: 2014<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.87 index (0-100)<br>Period: 2015<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.26 index (0-100)<br>Period: 2016<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.15 index (0-100)<br>Period: 2017<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.35 index (0-100)<br>Period: 2018<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.52 index (0-100)<br>Period: 2019<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.28 index (0-100)<br>Period: 2020<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Gini index: 35.32 index (0-100)<br>Period: 2021<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "y": [36.79372687441024, 36.98870011895599, 38.000705072708421, 37.249189965359626, 37.933465316900474, 37.157119865646465, 35.984570723544465, 35.886493672428806, 35.859549153853685, 36.386197641508041, 36.481511355275579, 35.898713390952906, 34.698642559208331, 34.141561477233267, 34.412625661806871, 34.604113970553669, 34.705497738938426, 33.647033845935049, 33.686885666808969],
      "text": ["Gini index: 36.79 index (0-100)<br>Period: 2003<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 36.99 index (0-100)<br>Period: 2004<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 38 index (0-100)<br>Period: 2005<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 37.25 index (0-100)<br>Period: 2006<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 37.93 index (0-100)<br>Period: 2007<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 37.16 index (0-100)<br>Period: 2008<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 35.98 index (0-100)<br>Period: 2009<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 35.89 index (0-100)<br>Period: 2010<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 35.86 index (0-100)<br>Period: 2011<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 36.39 index (0-100)<br>Period: 2012<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 36.48 index (0-100)<br>Period: 2013<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 35.9 index (0-100)<br>Period: 2014<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 34.7 index (0-100)<br>Period: 2015<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 34.14 index (0-100)<br>Period: 2016<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 34.41 index (0-100)<br>Period: 2017<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 34.6 index (0-100)<br>Period: 2018<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 34.71 index (0-100)<br>Period: 2019<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 33.65 index (0-100)<br>Period: 2020<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 33.69 index (0-100)<br>Period: 2021<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "text": ["Gini index: 34.8 index (0-100)<br>Period: 2003<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2004<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2005<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2006<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2007<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2008<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 33.45 index (0-100)<br>Period: 2009<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.1 index (0-100)<br>Period: 2010<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.37 index (0-100)<br>Period: 2011<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.63 index (0-100)<br>Period: 2012<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2013<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2014<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2015<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2016<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2017<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2018<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2019<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2020<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2021<br>REMIND_12 region code: JPN<br>Countries in region: Japan"],
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
      "y": [34.399999999999999, 34.399999999999999, 34.600000000000001, 34.799999999999997, 35, 35.200000000000003, 35.400000000000006, 35.550000000000004, 35.700000000000003, 35.45000000000001, 35.20000000000001, 34.95000000000001, 34.70000000000001, 34.799999999999997, 35.900000000000006, 34.600000000000001, 35.000000000000007, 34.799999999999997, 34.200000000000003],
      "text": ["Gini index: 34.4 index (0-100)<br>Period: 2003<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 34.4 index (0-100)<br>Period: 2004<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 34.6 index (0-100)<br>Period: 2005<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 34.8 index (0-100)<br>Period: 2006<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 35 index (0-100)<br>Period: 2007<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 35.2 index (0-100)<br>Period: 2008<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 35.4 index (0-100)<br>Period: 2009<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 35.55 index (0-100)<br>Period: 2010<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 35.7 index (0-100)<br>Period: 2011<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 35.45 index (0-100)<br>Period: 2012<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 35.2 index (0-100)<br>Period: 2013<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 34.95 index (0-100)<br>Period: 2014<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 34.7 index (0-100)<br>Period: 2015<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 34.8 index (0-100)<br>Period: 2016<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 35.9 index (0-100)<br>Period: 2017<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 34.6 index (0-100)<br>Period: 2018<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 35 index (0-100)<br>Period: 2019<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 34.8 index (0-100)<br>Period: 2020<br>REMIND_12 region code: IND<br>Countries in region: India", "Gini index: 34.2 index (0-100)<br>Period: 2021<br>REMIND_12 region code: IND<br>Countries in region: India"],
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
      "text": ["Gini index: 40.8 index (0-100)<br>Period: 2003<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 40.3 index (0-100)<br>Period: 2004<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 41 index (0-100)<br>Period: 2005<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 41.4 index (0-100)<br>Period: 2006<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 40.8 index (0-100)<br>Period: 2007<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 40.8 index (0-100)<br>Period: 2008<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 40.6 index (0-100)<br>Period: 2009<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 40 index (0-100)<br>Period: 2010<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 40.9 index (0-100)<br>Period: 2011<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 40.9 index (0-100)<br>Period: 2012<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 40.7 index (0-100)<br>Period: 2013<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 41.5 index (0-100)<br>Period: 2014<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 41.2 index (0-100)<br>Period: 2015<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 41.1 index (0-100)<br>Period: 2016<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 41.2 index (0-100)<br>Period: 2017<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 41.4 index (0-100)<br>Period: 2018<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 41.5 index (0-100)<br>Period: 2019<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 39.7 index (0-100)<br>Period: 2020<br>REMIND_12 region code: USA<br>Countries in region: United States", "Gini index: 39.8 index (0-100)<br>Period: 2021<br>REMIND_12 region code: USA<br>Countries in region: United States"],
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
      "y": [42.661960692914128, 42.487501438872606, 42.394283395985916, 42.24748795648329, 42.105340271032944, 41.925530524116837, 41.853461121557359, 41.714664980945727, 41.63559068775988, 41.616264840521701, 41.728485064820092, 41.836944730626776, 41.951021525595493, 41.821017228300448, 41.621352686941755, 41.484649614911476, 41.413214255736975, 41.358581449601289, 41.481123872540252],
      "text": ["Gini index: 42.66 index (0-100)<br>Period: 2003<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.49 index (0-100)<br>Period: 2004<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.39 index (0-100)<br>Period: 2005<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.25 index (0-100)<br>Period: 2006<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.11 index (0-100)<br>Period: 2007<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.93 index (0-100)<br>Period: 2008<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.85 index (0-100)<br>Period: 2009<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.71 index (0-100)<br>Period: 2010<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.64 index (0-100)<br>Period: 2011<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.62 index (0-100)<br>Period: 2012<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.73 index (0-100)<br>Period: 2013<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.84 index (0-100)<br>Period: 2014<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.95 index (0-100)<br>Period: 2015<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.82 index (0-100)<br>Period: 2016<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.62 index (0-100)<br>Period: 2017<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.48 index (0-100)<br>Period: 2018<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.41 index (0-100)<br>Period: 2019<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.36 index (0-100)<br>Period: 2020<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 41.48 index (0-100)<br>Period: 2021<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [32.684080482999626, 32.757006853007617, 32.731118125479732, 32.495311747326632, 32.452692567684274, 32.580303040265726, 32.431400402892884, 32.536389694851458, 32.595121010622265, 32.68543889338256, 32.801073726276108, 32.581221834081546, 32.731414714433392, 32.420432146508624, 32.212597591752157, 32.362424998019371, 31.789509239851942, 31.712537956127772, 31.713382875209813],
      "text": ["Gini index: 32.68 index (0-100)<br>Period: 2003<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.76 index (0-100)<br>Period: 2004<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.73 index (0-100)<br>Period: 2005<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.5 index (0-100)<br>Period: 2006<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.45 index (0-100)<br>Period: 2007<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.58 index (0-100)<br>Period: 2008<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.43 index (0-100)<br>Period: 2009<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.54 index (0-100)<br>Period: 2010<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.6 index (0-100)<br>Period: 2011<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.69 index (0-100)<br>Period: 2012<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.8 index (0-100)<br>Period: 2013<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.58 index (0-100)<br>Period: 2014<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.73 index (0-100)<br>Period: 2015<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.42 index (0-100)<br>Period: 2016<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.21 index (0-100)<br>Period: 2017<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.36 index (0-100)<br>Period: 2018<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 31.79 index (0-100)<br>Period: 2019<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 31.71 index (0-100)<br>Period: 2020<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 31.71 index (0-100)<br>Period: 2021<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [40.899999999999999, 40.899999999999991, 40.899999999999999, 41.600000000000001, 42.299999999999997, 43.000000000000007, 43.350000000000001, 43.700000000000003, 42.400000000000006, 42.200000000000003, 39.700000000000003, 39.200000000000003, 38.600000000000001, 38.499999999999993, 39.100000000000001, 38.5, 38.200000000000003, 37.100000000000001, 37.100000000000009],
      "text": ["Gini index: 40.9 index (0-100)<br>Period: 2003<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 40.9 index (0-100)<br>Period: 2004<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 40.9 index (0-100)<br>Period: 2005<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 41.6 index (0-100)<br>Period: 2006<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 42.3 index (0-100)<br>Period: 2007<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 43 index (0-100)<br>Period: 2008<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 43.35 index (0-100)<br>Period: 2009<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 43.7 index (0-100)<br>Period: 2010<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 42.4 index (0-100)<br>Period: 2011<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 42.2 index (0-100)<br>Period: 2012<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 39.7 index (0-100)<br>Period: 2013<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 39.2 index (0-100)<br>Period: 2014<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.6 index (0-100)<br>Period: 2015<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.5 index (0-100)<br>Period: 2016<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 39.1 index (0-100)<br>Period: 2017<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.5 index (0-100)<br>Period: 2018<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.2 index (0-100)<br>Period: 2019<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 37.1 index (0-100)<br>Period: 2020<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 37.1 index (0-100)<br>Period: 2021<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "text": "Gini index (REMIND_12)",
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
    "b55c5ff3331e": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c24845539": {
      "y": {}
    }
  },
  "cur_data": "b55c5ff3331e",
  "visdat": {
    "b55c5ff3331e": ["function (y) ", "x"],
    "b55c24845539": ["function (y) ", "x"]
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

  
