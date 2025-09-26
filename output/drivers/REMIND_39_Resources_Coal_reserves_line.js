(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Resources_Coal_reserves_line') 

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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [1179.2469103930323, 1180.9669996610958, 1182.6875558707077, 1183.8399562092566, 1184.7085926221553, 1185.194487725347, 1197.7573341756724, 1136.0840046403939, 1111.1603610878949, 1110.2257974072763, 1109.0151744403174, 1107.5343129677274, 1105.8433625137511, 1105.081741836633, 1107.9443670334651, 1056.1934928907508, 1061.3339562606145, 1064.7533332832083, 1067.0475229614844],
      "text": ["Coal reserves: 1179.25 million short tons<br>Period: 2003<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1180.97 million short tons<br>Period: 2004<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1182.69 million short tons<br>Period: 2005<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1183.84 million short tons<br>Period: 2006<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1184.71 million short tons<br>Period: 2007<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1185.19 million short tons<br>Period: 2008<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1197.76 million short tons<br>Period: 2009<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1136.08 million short tons<br>Period: 2010<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1111.16 million short tons<br>Period: 2011<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1110.23 million short tons<br>Period: 2012<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1109.02 million short tons<br>Period: 2013<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1107.53 million short tons<br>Period: 2014<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1105.84 million short tons<br>Period: 2015<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1105.08 million short tons<br>Period: 2016<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1107.94 million short tons<br>Period: 2017<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1056.19 million short tons<br>Period: 2018<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1061.33 million short tons<br>Period: 2019<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1064.75 million short tons<br>Period: 2020<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal reserves: 1067.05 million short tons<br>Period: 2021<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999996, 7255.3999999999987, 7255.3999999999987, 7255.3999999999996, 7255.4000000000005, 7255.3999999999996, 7255.3999999999987],
      "text": ["Coal reserves: 7255.4 million short tons<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Coal reserves: 7255.4 million short tons<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [17.946484786327428, 17.868344897444398, 17.794579853715724, 17.728213347610165, 17.668685312495413, 17.611905195988431, 17.555482615655187, 17.509640466670326, 17.491506110792709, 17.475635192920674, 17.437792820088756, 17.389978651143462, 17.340234967011774, 17.290670774593867, 17.227928942062064, 17.159237993462259, 17.101016888106663, 17.04179424945389, 16.974791475168807],
      "text": ["Coal reserves: 17.95 million short tons<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Coal reserves: 17.87 million short tons<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Coal reserves: 17.79 million short tons<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.73 million short tons<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.67 million short tons<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.61 million short tons<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.56 million short tons<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.51 million short tons<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.49 million short tons<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.48 million short tons<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.44 million short tons<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.39 million short tons<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.34 million short tons<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.29 million short tons<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.23 million short tons<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.16 million short tons<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.1 million short tons<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 17.04 million short tons<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal reserves: 16.97 million short tons<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [71801.089533958002, 71756.265986476021, 71765.927995916616, 71780.112181481803, 71876.144083841136, 71999.556102248607, 75791.167237008412, 75840.784918067133, 95128.052476901925, 98519.031515934126, 99567.160705471309, 99570.107818069388, 135090.77827225451, 134950.05028417445, 134858.86961168543, 138723.69938794765, 138699.5402765896, 139546.8603320368, 139487.56693360818],
      "text": ["Coal reserves: 71801.09 million short tons<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 71756.27 million short tons<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 71765.93 million short tons<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 71780.11 million short tons<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 71876.14 million short tons<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 71999.56 million short tons<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 75791.17 million short tons<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 75840.78 million short tons<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 95128.05 million short tons<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 98519.03 million short tons<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 99567.16 million short tons<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 99570.11 million short tons<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 135090.78 million short tons<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 134950.05 million short tons<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 134858.87 million short tons<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 138723.7 million short tons<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 138699.54 million short tons<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 139546.86 million short tons<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal reserves: 139487.57 million short tons<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.8999999999999, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000003, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.8999999999999, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001, 1334.9000000000001],
      "text": ["Coal reserves: 1334.9 million short tons<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Coal reserves: 1334.9 million short tons<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "text": ["Coal reserves: 26.45 million short tons<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 26.45 million short tons<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 19.83 million short tons<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 16.52 million short tons<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 14.32 million short tons<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 13.22 million short tons<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 8.89 million short tons<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 5.87 million short tons<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.85 million short tons<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 1.1 million short tons<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.2 million short tons<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.2 million short tons<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.2 million short tons<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal reserves: 2.2 million short tons<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "text": ["Coal reserves: 7270.84 million short tons<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Coal reserves: 7270.84 million short tons<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [25857.305326470607, 25834.141419749205, 25808.295255937679, 25795.90698634111, 25803.944603612134, 25809.789231164508, 25818.231555328082, 25841.093910966069, 25852.159714320213, 25861.063416912162, 25881.476816213286, 25884.703779659256, 25894.247034066284, 25907.565717025056, 25917.830215526439, 25924.569434803539, 25933.985074354765, 25936.444346275304, 25943.732237080647],
      "text": ["Coal reserves: 25857.31 million short tons<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25834.14 million short tons<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25808.3 million short tons<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25795.91 million short tons<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25803.94 million short tons<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25809.79 million short tons<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25818.23 million short tons<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Coal reserves: 25841.09 million short tons<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Coal reserves: 25852.16 million short tons<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25861.06 million short tons<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25881.48 million short tons<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25884.7 million short tons<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25894.25 million short tons<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25907.57 million short tons<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25917.83 million short tons<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25924.57 million short tons<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25933.99 million short tons<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25936.44 million short tons<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal reserves: 25943.73 million short tons<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "text": ["Coal reserves: 364.86 million short tons<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 364.86 million short tons<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Coal reserves: 359.35 million short tons<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [3687.7562947767228, 3683.4373190860492, 3681.6344986799627, 3682.2732996897603, 3684.3625553414381, 3684.4211214954807, 3757.3172923949505, 3765.161156718224, 3512.0583203266478, 4896.2108172181142, 4905.2680652608615, 4914.08218101893, 4922.5803941864315, 4933.0911152310546, 4946.5082481803674, 4958.289088067856, 4967.8203930840027, 4977.4967702673648, 4987.0042147588565],
      "text": ["Coal reserves: 3687.76 million short tons<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 3683.44 million short tons<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 3681.63 million short tons<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 3682.27 million short tons<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 3684.36 million short tons<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal reserves: 3684.42 million short tons<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 3757.32 million short tons<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 3765.16 million short tons<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 3512.06 million short tons<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 4896.21 million short tons<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 4905.27 million short tons<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 4914.08 million short tons<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal reserves: 4922.58 million short tons<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 4933.09 million short tons<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 4946.51 million short tons<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 4958.29 million short tons<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 4967.82 million short tons<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 4977.5 million short tons<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal reserves: 4987 million short tons<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [178081.48999999999, 178081.48999999999, 178081.48999999999, 178081.48999999999, 178081.48999999999, 178081.48999999999, 176375.10999999999, 176375.10999999999, 176510.70000000001, 176770.84, 176770.84, 176770.84, 176770.84, 176770.83999999997, 176770.84000000003, 178757.20000000001, 178757.20000000001, 178757.20000000001, 178757.19999999998],
      "text": ["Coal reserves: 178081.49 million short tons<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178081.49 million short tons<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176375.11 million short tons<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176375.11 million short tons<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176510.7 million short tons<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 176770.84 million short tons<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178757.2 million short tons<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178757.2 million short tons<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178757.2 million short tons<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Coal reserves: 178757.2 million short tons<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [1318.0009042232286, 1314.0746272399058, 1310.0703613469259, 1308.4578238028946, 1308.943324944833, 1309.7538445749115, 1150.8561591972275, 1148.6830859736667, 1146.6551134712661, 1144.6484200767406, 1145.0517708263367, 1143.9901213465239, 1143.4724111516646, 1143.1989827773286, 1143.2213291019875, 1159.3031687070679, 1158.3665424283888, 1157.7017577635042, 1157.5874291364112],
      "text": ["Coal reserves: 1318 million short tons<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1314.07 million short tons<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1310.07 million short tons<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1308.46 million short tons<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1308.94 million short tons<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1309.75 million short tons<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1150.86 million short tons<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1148.68 million short tons<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1146.66 million short tons<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1144.65 million short tons<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1145.05 million short tons<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1143.99 million short tons<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1143.47 million short tons<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1143.2 million short tons<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1143.22 million short tons<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1159.3 million short tons<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1158.37 million short tons<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1157.7 million short tons<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Coal reserves: 1157.59 million short tons<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [4907.4799999999996, 4907.4799999999996, 4907.4799999999996, 4907.4799999999996, 4907.4799999999996, 4907.4799999999996, 17388.939999999999, 18910.129999999997, 24816.310000000001, 24816.310000000001, 24817.41, 24829.41, 24829.959999999999, 24910, 24937.049999999999, 43972.25, 43972.25, 38436.449999999997, 38436.449999999997],
      "text": ["Coal reserves: 4907.48 million short tons<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 4907.48 million short tons<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 17388.94 million short tons<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 18910.13 million short tons<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24816.31 million short tons<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24816.31 million short tons<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24817.41 million short tons<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24829.41 million short tons<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24829.96 million short tons<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24910 million short tons<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 24937.05 million short tons<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 43972.25 million short tons<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 43972.25 million short tons<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 38436.45 million short tons<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Coal reserves: 38436.45 million short tons<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [1658.4049862689865, 1664.5444660618882, 1670.9352139551168, 1677.2143955844465, 1688.3890314866267, 1700.0134217243717, 1709.414332213295, 1719.3862767979097, 1783.5478112719436, 1787.9981252353373, 1791.1270560305627, 1792.9410910373529, 1794.3948037906014, 1795.8824604927081, 1798.3709501640756, 1802.4216635974685, 1805.675201765001, 1808.7409605289756, 1813.8815071753058],
      "text": ["Coal reserves: 1658.4 million short tons<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Coal reserves: 1664.54 million short tons<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Coal reserves: 1670.94 million short tons<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Coal reserves: 1677.21 million short tons<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Coal reserves: 1688.39 million short tons<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Coal reserves: 1700.01 million short tons<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Coal reserves: 1709.41 million short tons<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1719.39 million short tons<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1783.55 million short tons<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1788 million short tons<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1791.13 million short tons<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1792.94 million short tons<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1794.39 million short tons<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1795.88 million short tons<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1798.37 million short tons<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1802.42 million short tons<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1805.68 million short tons<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1808.74 million short tons<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Coal reserves: 1813.88 million short tons<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "text": ["Coal reserves: 391.32 million short tons<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 391.32 million short tons<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Coal reserves: 385.81 million short tons<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [2454.8400000000001, 2454.8400000000006, 2454.8400000000001, 2454.8400000000006, 2454.8400000000001, 2454.8400000000001, 2454.8400000000001, 2582.71, 2688.5300000000002, 2713.8899999999999, 9592.2999999999993, 9592.2999999999993, 12514.530000000001, 12514.530000000001, 12514.529999999999, 12704.120000000001, 12704.120000000001, 12704.120000000001, 12704.120000000001],
      "text": ["Coal reserves: 2454.84 million short tons<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2454.84 million short tons<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2582.71 million short tons<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2688.53 million short tons<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 2713.89 million short tons<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 9592.3 million short tons<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 9592.3 million short tons<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12514.53 million short tons<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12514.53 million short tons<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12514.53 million short tons<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12704.12 million short tons<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12704.12 million short tons<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12704.12 million short tons<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Coal reserves: 12704.12 million short tons<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [1320.2943664382128, 1320.4777277344197, 1320.7791010057424, 1321.2219958782475, 1325.2093083940376, 1330.0579936501745, 1333.6948945977797, 1334.2022426865806, 1334.277350385315, 1333.4402282223962, 1333.5529065363532, 1333.8896860219677, 1335.2191710884429, 1336.5117911753173, 1338.5533027770894, 1340.7371932938943, 1342.4680306751122, 1343.6802745231689, 1344.6962816912867],
      "text": ["Coal reserves: 1320.29 million short tons<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1320.48 million short tons<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1320.78 million short tons<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1321.22 million short tons<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1325.21 million short tons<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1330.06 million short tons<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1333.69 million short tons<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1334.2 million short tons<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1334.28 million short tons<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1333.44 million short tons<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1333.55 million short tons<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1333.89 million short tons<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1335.22 million short tons<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1336.51 million short tons<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1338.55 million short tons<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1340.74 million short tons<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1342.47 million short tons<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1343.68 million short tons<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal reserves: 1344.7 million short tons<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [1056.3863534748943, 1059.3750212669959, 1062.3715010787721, 1065.3527156558132, 1068.5879847559702, 1071.3978573118343, 1072.9176377034644, 1073.7116174945731, 1074.6712435073371, 1075.5668504114631, 1075.9870229656815, 1076.4428055454644, 1077.08014592774, 1077.8356600382112, 1078.7371278143091, 1079.8600813109995, 1081.157711017727, 1081.8721089176206, 1080.9007631490565],
      "text": ["Coal reserves: 1056.39 million short tons<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1059.38 million short tons<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1062.37 million short tons<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1065.35 million short tons<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1068.59 million short tons<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1071.4 million short tons<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1072.92 million short tons<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1073.71 million short tons<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1074.67 million short tons<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1075.57 million short tons<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1075.99 million short tons<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1076.44 million short tons<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1077.08 million short tons<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1077.84 million short tons<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1078.74 million short tons<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1079.86 million short tons<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1081.16 million short tons<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1081.87 million short tons<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Coal reserves: 1080.9 million short tons<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "text": ["Coal reserves: 461.87 million short tons<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 461.87 million short tons<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal reserves: 1326.08 million short tons<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "text": ["Coal reserves: 88971.85 million short tons<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 88971.85 million short tons<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 84772.05 million short tons<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 87619.31 million short tons<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 90437.92 million short tons<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 93934.45 million short tons<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 95517.37 million short tons<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 99512.14 million short tons<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 104464.82 million short tons<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 107726.55 million short tons<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 111190.56 million short tons<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 116768.8 million short tons<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 116768.8 million short tons<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 122413.73 million short tons<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Coal reserves: 122413.73 million short tons<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "text": ["Coal reserves: 261573 million short tons<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 261573 million short tons<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 260551 million short tons<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 259518 million short tons<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 258619 million short tons<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 257648 million short tons<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 256709 million short tons<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 255755 million short tons<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 254896 million short tons<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 254197 million short tons<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 253455 million short tons<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 252733 million short tons<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 252057 million short tons<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 251539 million short tons<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Coal reserves: 251539 million short tons<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [18123.080000000002, 18123.080000000002, 18123.080000000002, 18123.079999999998, 18123.080000000002, 18123.080000000002, 18142.919999999998, 19454.669999999998, 21191.91, 21608.580000000002, 22995.290000000001, 23845.169999999998, 26632.91, 28451.720000000005, 29903.91, 29687.41, 29687.410000000003, 31300.090000000004, 31450.179999999997],
      "text": ["Coal reserves: 18123.08 million short tons<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 18123.08 million short tons<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 18142.92 million short tons<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 19454.67 million short tons<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 21191.91 million short tons<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 21608.58 million short tons<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 22995.29 million short tons<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 23845.17 million short tons<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 26632.91 million short tons<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 28451.72 million short tons<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 29903.91 million short tons<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 29687.41 million short tons<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 29687.41 million short tons<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 31300.09 million short tons<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Coal reserves: 31450.18 million short tons<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [131.72261055471344, 131.4460987963439, 131.16395918498165, 130.91203041662192, 130.67002117973783, 130.41758567659986, 151.4549648973429, 151.23851298656245, 151.13826497308401, 148.43405317477237, 179.83222058335869, 179.84360882933703, 179.8853606851317, 180.0719792813828, 180.20953941354605, 184.352853405563, 184.18804134661949, 184.05192228322616, 183.98560875654442],
      "text": ["Coal reserves: 131.72 million short tons<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 131.45 million short tons<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 131.16 million short tons<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 130.91 million short tons<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 130.67 million short tons<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 130.42 million short tons<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 151.45 million short tons<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 151.24 million short tons<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 151.14 million short tons<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 148.43 million short tons<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 179.83 million short tons<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 179.84 million short tons<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 179.89 million short tons<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 180.07 million short tons<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 180.21 million short tons<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 184.35 million short tons<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 184.19 million short tons<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 184.05 million short tons<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal reserves: 183.99 million short tons<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(250,159,181,1)",
        "dash": "solid"
      },
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
      "text": ["Coal reserves: 35053.46 million short tons<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 36486.46 million short tons<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 36155.77 million short tons<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35825.08 million short tons<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35384.15 million short tons<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 33510.22 million short tons<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35384.15 million short tons<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 35053.46 million short tons<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 34722.77 million short tons<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 10905.15 million short tons<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 10905.15 million short tons<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 10905.15 million short tons<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Coal reserves: 10905.15 million short tons<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "text": ["Coal reserves: 44862.91 million short tons<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44862.91 million short tons<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44834.25 million short tons<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44708.59 million short tons<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44696.47 million short tons<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44573.01 million short tons<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 44457.26 million short tons<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 40037 million short tons<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39916.85 million short tons<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39802.21 million short tons<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 37532.66 million short tons<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39572.93 million short tons<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39572.93 million short tons<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39572.93 million short tons<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Coal reserves: 39572.93 million short tons<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "text": ["Coal reserves: 1658.59 million short tons<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1664.15 million short tons<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1671.73 million short tons<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1680.1 million short tons<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1689.76 million short tons<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1701.15 million short tons<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1814.93 million short tons<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1851.15 million short tons<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 2018.92 million short tons<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 2010.09 million short tons<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1992.62 million short tons<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1977.13 million short tons<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1964.15 million short tons<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1951.37 million short tons<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1955.56 million short tons<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1586.61 million short tons<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1590.37 million short tons<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1947.83 million short tons<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal reserves: 1931.92 million short tons<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Coal reserves: 15.43 million short tons<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Coal reserves: 15.43 million short tons<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [0.50038604270111731, 0.50070302200209915, 0.50095870074820048, 0.50153304521791997, 0.50238344167858096, 0.50308269585437693, 0.50402872458682202, 0.50512381531944461, 0.50601001072908469, 0.50689164802850861, 0.50803272910132813, 0.50950025965320689, 0.5109770398660618, 0.51294337633522014, 0.5154161423858068, 0.51772039264790992, 0.51983249264418063, 0.52119733664030687, 0.5219435707973068],
      "text": ["Coal reserves: 0.5 million short tons<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.5 million short tons<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.5 million short tons<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.5 million short tons<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.5 million short tons<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.5 million short tons<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.5 million short tons<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.51 million short tons<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.51 million short tons<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.51 million short tons<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.51 million short tons<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.51 million short tons<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.51 million short tons<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.51 million short tons<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.52 million short tons<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.52 million short tons<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.52 million short tons<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.52 million short tons<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Coal reserves: 0.52 million short tons<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "text": ["Coal reserves: 473.66 million short tons<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.66 million short tons<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.65 million short tons<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.65 million short tons<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.65 million short tons<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 473.65 million short tons<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 402.39 million short tons<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 406.77 million short tons<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 411.16 million short tons<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 289.46 million short tons<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 289.46 million short tons<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 76.75 million short tons<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 76.59 million short tons<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 76.6 million short tons<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 76.6 million short tons<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 28.51 million short tons<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 28.51 million short tons<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 28.51 million short tons<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal reserves: 28.51 million short tons<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "text": ["Coal reserves: 123364.23 million short tons<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123364.61 million short tons<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123367.84 million short tons<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123369.72 million short tons<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123370.61 million short tons<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123374.14 million short tons<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123382.93 million short tons<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123387.94 million short tons<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123392.23 million short tons<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 123394.16 million short tons<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 137999.18 million short tons<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 141845.85 million short tons<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 144069.14 million short tons<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 146484.56 million short tons<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 149623.78 million short tons<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 152617.72 million short tons<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 152616.99 million short tons<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 154348.62 million short tons<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal reserves: 154355.13 million short tons<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [18.610573632751091, 18.610542208232378, 18.610354308795671, 18.610272170521903, 18.610473220221099, 18.6104884155965, 18.610104196015037, 18.609867156738538, 18.609541453612806, 18.608723178859414, 18.608403680090881, 18.606985870079257, 18.603666421770694, 18.600298416311716, 18.596235665286684, 18.590886480055701, 18.583174016670522, 18.57892163654369, 18.577098302749381],
      "text": ["Coal reserves: 18.61 million short tons<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.61 million short tons<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.6 million short tons<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.6 million short tons<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.6 million short tons<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.59 million short tons<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.58 million short tons<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.58 million short tons<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Coal reserves: 18.58 million short tons<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "text": ["Coal reserves: 547.85 million short tons<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Coal reserves: 547.85 million short tons<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Coal reserves: 0 million short tons<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal reserves: 0 million short tons<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "text": ["Coal reserves: 2904.56 million short tons<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2900.72 million short tons<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2897.04 million short tons<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2893.4 million short tons<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2889.68 million short tons<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2886.01 million short tons<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2882.35 million short tons<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2878.35 million short tons<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2873.57 million short tons<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2867.66 million short tons<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2861.31 million short tons<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2855.21 million short tons<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2849.14 million short tons<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2843.77 million short tons<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2839.12 million short tons<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2834.63 million short tons<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2830.55 million short tons<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2826.23 million short tons<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal reserves: 2818.9 million short tons<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Coal reserves (REMIND_39)",
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
    "b55c4d4a42f6": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c600f48d5": {
      "y": {}
    }
  },
  "cur_data": "b55c4d4a42f6",
  "visdat": {
    "b55c4d4a42f6": ["function (y) ", "x"],
    "b55c600f48d5": ["function (y) ", "x"]
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

  
