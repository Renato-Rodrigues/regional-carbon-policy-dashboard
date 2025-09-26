(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Trade_Imports_line') 

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
      "y": [1.6297184911494151, 1.5533397372211466, 1.5531662376319446, 1.4756295232637413, 1.4647844863442325, 1.5310145162302353, 1.7893788719092645, 1.7519469072641403, 1.8960621399553248, 1.7815855936043927, 1.8774739168582031, 1.6769269986740765, 1.7536162983248187, 1.877913815285738, 1.7433676712023571, 1.6464676671050575, 1.6642226482733231, 1.9310771268434861, 1.7585376615467241],
      "text": ["Imports: 1.63 % (World)<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.55 % (World)<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.55 % (World)<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.48 % (World)<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.46 % (World)<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.53 % (World)<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.79 % (World)<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.75 % (World)<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.9 % (World)<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.78 % (World)<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.88 % (World)<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.68 % (World)<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.75 % (World)<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.88 % (World)<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.74 % (World)<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.65 % (World)<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.66 % (World)<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.93 % (World)<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports: 1.76 % (World)<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [0.13537882088401282, 0.14324044493710031, 0.16062610054013163, 0.1690518880915286, 0.18513836709987083, 0.1976892560313622, 0.20110890287586256, 0.20985865796976211, 0.21623528855735064, 0.22796735734182944, 0.23557869415052177, 0.24392900465340558, 0.24644827319898785, 0.245572826608146, 0.245366869090094, 0.23755130396870267, 0.22493728613147995, 0.20757895047841488, 0.22709410005300695],
      "text": ["Imports: 0.14 % (World)<br>Period: 2003<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.14 % (World)<br>Period: 2004<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.16 % (World)<br>Period: 2005<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.17 % (World)<br>Period: 2006<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.19 % (World)<br>Period: 2007<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.2 % (World)<br>Period: 2008<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.2 % (World)<br>Period: 2009<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.21 % (World)<br>Period: 2010<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.22 % (World)<br>Period: 2011<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.23 % (World)<br>Period: 2012<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.24 % (World)<br>Period: 2013<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.24 % (World)<br>Period: 2014<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.25 % (World)<br>Period: 2015<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.25 % (World)<br>Period: 2016<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.25 % (World)<br>Period: 2017<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.24 % (World)<br>Period: 2018<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.22 % (World)<br>Period: 2019<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.21 % (World)<br>Period: 2020<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports: 0.23 % (World)<br>Period: 2021<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [3.25, 3.0699999999999998, 3.0899999999999999, 3.02, 2.8399999999999999, 2.6600000000000001, 2.6899999999999999, 2.7799999999999998, 2.6699999999999999, 2.7200000000000002, 2.6499999999999999, 2.5899999999999994, 2.6400000000000001, 2.6000000000000001, 2.5299999999999998, 2.46, 2.4900000000000002, 2.48, 2.3799999999999999],
      "text": ["Imports: 3.25 % (World)<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 3.07 % (World)<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 3.09 % (World)<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 3.02 % (World)<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.84 % (World)<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.66 % (World)<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.69 % (World)<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.78 % (World)<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.67 % (World)<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.72 % (World)<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.65 % (World)<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.59 % (World)<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.64 % (World)<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.6 % (World)<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.53 % (World)<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.46 % (World)<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.49 % (World)<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.48 % (World)<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Imports: 2.38 % (World)<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [0.14157630770445023, 0.14187171176287489, 0.1506406539120792, 0.1541958186532254, 0.16799144341207492, 0.20154833238018838, 0.23364511851278838, 0.19773265124262565, 0.17690311308318971, 0.19067552194105933, 0.19024798244968444, 0.18788995468808645, 0.2023810583306232, 0.19545671772466652, 0.1882015750313159, 0.17253832314469114, 0.17969929319180392, 0.1841447752876689, 0.16341148926167698],
      "text": ["Imports: 0.14 % (World)<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Imports: 0.14 % (World)<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Imports: 0.15 % (World)<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.15 % (World)<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.17 % (World)<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.2 % (World)<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.23 % (World)<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.2 % (World)<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.18 % (World)<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.19 % (World)<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.19 % (World)<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.19 % (World)<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.2 % (World)<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.2 % (World)<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.19 % (World)<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.17 % (World)<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.18 % (World)<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.18 % (World)<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports: 0.16 % (World)<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [0.95084333259378206, 0.9686590405737795, 1.0168562745468206, 0.98532820357538442, 0.97984479392965484, 1.0878932431769348, 1.1862282802958559, 1.1401437125349074, 1.1578017776235903, 1.3354966744227061, 1.3036515462247711, 1.1959581776933645, 1.2453035491019913, 1.1370291060944804, 1.0862162850689552, 1.1108881253527805, 1.1007296370586683, 1.0876980662088072, 0.92715120894871295],
      "text": ["Imports: 0.95 % (World)<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 0.97 % (World)<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.02 % (World)<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 0.99 % (World)<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 0.98 % (World)<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.09 % (World)<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.19 % (World)<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.14 % (World)<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.16 % (World)<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.34 % (World)<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.3 % (World)<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.2 % (World)<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.25 % (World)<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.14 % (World)<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.09 % (World)<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.11 % (World)<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.1 % (World)<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 1.09 % (World)<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports: 0.93 % (World)<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [2.1099999999999999, 2.0099999999999998, 1.9900000000000002, 2, 1.8900000000000001, 1.7899999999999998, 1.73, 1.8500000000000003, 1.8300000000000001, 1.8999999999999999, 1.9099999999999999, 1.9599999999999997, 2.1700000000000004, 2.1699999999999999, 2.1400000000000001, 2.1499999999999999, 2.1400000000000001, 1.9900000000000002, 2.1499999999999999],
      "text": ["Imports: 2.11 % (World)<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 2.01 % (World)<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.99 % (World)<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 2 % (World)<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.89 % (World)<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.79 % (World)<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.73 % (World)<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.85 % (World)<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.83 % (World)<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.9 % (World)<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.91 % (World)<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.96 % (World)<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 2.17 % (World)<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 2.17 % (World)<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 2.14 % (World)<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 2.15 % (World)<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 2.14 % (World)<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 1.99 % (World)<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Imports: 2.15 % (World)<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [0.66964734209292709, 0.65965264125678458, 0.66964774371487457, 0.65965182236764663, 0.69963036233023701, 0.69963083202395937, 0.69963140126716161, 0.66964773058065874, 0.65965745834056411, 0.63967217039141466, 0.66966092603687977, 0.64967473467859871, 0.60969777193196384, 0.61969551035107084, 0.58971257344389849, 0.5797193031577077, 0.58971638368830537, 0.56972760550028634, 0.53974331773762996],
      "text": ["Imports: 0.67 % (World)<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.66 % (World)<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.67 % (World)<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.66 % (World)<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.7 % (World)<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.7 % (World)<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.7 % (World)<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.67 % (World)<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.66 % (World)<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.64 % (World)<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.67 % (World)<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.65 % (World)<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.61 % (World)<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.62 % (World)<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.59 % (World)<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.58 % (World)<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.59 % (World)<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.57 % (World)<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports: 0.54 % (World)<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [0.80000000000000004, 0.79999999999999993, 0.84999999999999998, 0.90999999999999992, 1.01, 1.2199999999999998, 1.22, 1.4499999999999997, 1.5100000000000002, 1.5099999999999998, 1.5600000000000001, 1.4799999999999998, 1.25, 1.0900000000000001, 1.1100000000000001, 1.1300000000000001, 1.1699999999999999, 1.1000000000000001, 1.1799999999999999],
      "text": ["Imports: 0.8 % (World)<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 0.8 % (World)<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 0.85 % (World)<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 0.91 % (World)<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.01 % (World)<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.22 % (World)<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.22 % (World)<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.45 % (World)<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.51 % (World)<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.51 % (World)<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.56 % (World)<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.48 % (World)<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.25 % (World)<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.09 % (World)<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.11 % (World)<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.13 % (World)<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.17 % (World)<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.1 % (World)<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Imports: 1.18 % (World)<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [0.20648303284126335, 0.22275730328351953, 0.24000915161465636, 0.25410810010331231, 0.29696010393082967, 0.35090537587838722, 0.25063322368859936, 0.26632399908253429, 0.30775087116917643, 0.3257541901876429, 0.30648134185216175, 0.22241660376346792, 0.18250812291877316, 0.19113472531059375, 0.21202642402480384, 0.21256290264434982, 0.23400507799722511, 0.22162114684840845, 0.23599844354786229],
      "text": ["Imports: 0.21 % (World)<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.22 % (World)<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.24 % (World)<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.25 % (World)<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.3 % (World)<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.35 % (World)<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.25 % (World)<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Imports: 0.27 % (World)<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Imports: 0.31 % (World)<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.33 % (World)<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.31 % (World)<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.22 % (World)<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.18 % (World)<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.19 % (World)<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.21 % (World)<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.21 % (World)<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.23 % (World)<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.22 % (World)<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports: 0.24 % (World)<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [2.2999999999999998, 2.3999999999999999, 2.48, 2.5800000000000005, 2.5800000000000001, 2.6400000000000001, 2.52, 2.7999999999999998, 3.0700000000000003, 3.0299999999999994, 2.8799999999999999, 2.79, 2.6200000000000006, 2.52, 2.6800000000000002, 2.6700000000000004, 2.54, 2.5299999999999998, 2.6800000000000002],
      "text": ["Imports: 2.3 % (World)<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.4 % (World)<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.48 % (World)<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.58 % (World)<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.58 % (World)<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.64 % (World)<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.52 % (World)<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.8 % (World)<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 3.07 % (World)<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 3.03 % (World)<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.88 % (World)<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.79 % (World)<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.62 % (World)<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.52 % (World)<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.68 % (World)<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.67 % (World)<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.54 % (World)<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.53 % (World)<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Imports: 2.68 % (World)<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [0.051759146076085207, 0.056849945330390582, 0.059615142980840766, 0.067250138140977175, 0.076402351017578918, 0.082894953601382437, 0.085847320050047027, 0.081082749133681534, 0.085325938125029741, 0.095560260777607875, 0.096480451408104378, 0.085849984196021648, 0.078497223315376258, 0.072700727934381149, 0.074512321434774431, 0.078598358405535571, 0.086493965238118045, 0.083773835421584605, 0.079902121660036365],
      "text": ["Imports: 0.05 % (World)<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports: 0.06 % (World)<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports: 0.06 % (World)<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports: 0.07 % (World)<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports: 0.08 % (World)<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports: 0.08 % (World)<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports: 0.09 % (World)<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports: 0.08 % (World)<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports: 0.09 % (World)<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports: 0.1 % (World)<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports: 0.1 % (World)<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports: 0.09 % (World)<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports: 0.08 % (World)<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports: 0.07 % (World)<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports: 0.07 % (World)<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports: 0.08 % (World)<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports: 0.09 % (World)<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports: 0.08 % (World)<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports: 0.08 % (World)<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [1.1299999999999997, 1.1899999999999997, 1.3200000000000001, 1.46, 1.6899999999999999, 1.9299999999999997, 1.6399999999999997, 1.78, 1.9200000000000002, 2.0699999999999998, 2.1099999999999999, 1.8700000000000003, 1.3899999999999999, 1.3299999999999998, 1.49, 1.4300000000000002, 1.48, 1.4400000000000002, 1.4599999999999997],
      "text": ["Imports: 1.13 % (World)<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.19 % (World)<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.32 % (World)<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.46 % (World)<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.69 % (World)<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.93 % (World)<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.64 % (World)<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.78 % (World)<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.92 % (World)<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 2.07 % (World)<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 2.11 % (World)<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.87 % (World)<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.39 % (World)<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.33 % (World)<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.49 % (World)<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.43 % (World)<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.48 % (World)<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.44 % (World)<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Imports: 1.46 % (World)<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [0.44055837810282755, 0.44315982671546467, 0.45428505654676166, 0.44799752089172307, 0.44814675590143227, 0.47044128956810799, 0.48035851081092251, 0.51666720271731126, 0.52260831351451154, 0.54536981957890129, 0.5620341752991096, 0.55477799853351495, 0.61428992120637094, 0.64543370892242491, 0.67681063064000668, 0.69206137918755206, 0.71461381312799543, 0.72259306156452829, 0.73651030511783766],
      "text": ["Imports: 0.44 % (World)<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.44 % (World)<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.45 % (World)<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.45 % (World)<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.45 % (World)<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.47 % (World)<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.48 % (World)<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.52 % (World)<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.52 % (World)<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.55 % (World)<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.56 % (World)<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.55 % (World)<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.61 % (World)<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.65 % (World)<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.68 % (World)<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.69 % (World)<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.71 % (World)<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports: 0.72 % (World)<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Imports: 0.74 % (World)<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [0.59999999999999987, 0.64000000000000001, 0.68999999999999995, 0.65000000000000002, 0.66000000000000003, 0.77000000000000002, 0.75000000000000011, 0.93999999999999984, 1, 1.0600000000000001, 1.01, 0.95999999999999996, 0.88, 0.85999999999999999, 0.89000000000000012, 0.95999999999999985, 0.90000000000000002, 0.78000000000000003, 0.85999999999999999],
      "text": ["Imports: 0.6 % (World)<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.64 % (World)<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.69 % (World)<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.65 % (World)<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.66 % (World)<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.77 % (World)<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.75 % (World)<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.94 % (World)<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 1 % (World)<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 1.06 % (World)<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 1.01 % (World)<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.96 % (World)<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.88 % (World)<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.86 % (World)<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.89 % (World)<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.96 % (World)<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.9 % (World)<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.78 % (World)<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Imports: 0.86 % (World)<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [0.11695423187029738, 0.11386461883155687, 0.14539895149896398, 0.15505178890501098, 0.14599994393295915, 0.16470527573196353, 0.18676529064716146, 0.15897314973176427, 0.16528797020344663, 0.17506535764603318, 0.17868494899000967, 0.18282690783278394, 0.21570586062238861, 0.21196618021455971, 0.2224100970690347, 0.24227553404612942, 0.23205440289663062, 0.2296123330054827, 0.21999753198407349],
      "text": ["Imports: 0.12 % (World)<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Imports: 0.11 % (World)<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Imports: 0.15 % (World)<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Imports: 0.16 % (World)<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Imports: 0.15 % (World)<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Imports: 0.16 % (World)<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Imports: 0.19 % (World)<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.16 % (World)<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.17 % (World)<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.18 % (World)<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.18 % (World)<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.18 % (World)<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.22 % (World)<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.21 % (World)<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.22 % (World)<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.24 % (World)<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.23 % (World)<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.23 % (World)<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Imports: 0.22 % (World)<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [4.910000000000001, 4.8399999999999999, 4.8099999999999996, 4.6299999999999999, 4.29, 4.5300000000000002, 4.1299999999999999, 4.3300000000000001, 4.5000000000000009, 4.6500000000000004, 4.2699999999999996, 4.3099999999999996, 3.9500000000000006, 3.8399999999999999, 3.7900000000000005, 3.8300000000000001, 3.8299999999999996, 3.7599999999999993, 3.6100000000000003],
      "text": ["Imports: 4.91 % (World)<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.84 % (World)<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.81 % (World)<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.63 % (World)<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.29 % (World)<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.53 % (World)<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.13 % (World)<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.33 % (World)<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.5 % (World)<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.65 % (World)<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.27 % (World)<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 4.31 % (World)<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 3.95 % (World)<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 3.84 % (World)<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 3.79 % (World)<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 3.83 % (World)<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 3.83 % (World)<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 3.76 % (World)<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Imports: 3.61 % (World)<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [0.80000000000000004, 0.94000000000000006, 0.97999999999999987, 1.03, 1.0700000000000001, 1.0900000000000001, 0.9900000000000001, 1.1000000000000001, 1.1899999999999999, 1.1599999999999999, 1.24, 1.1799999999999999, 1.1299999999999999, 1.1000000000000001, 1.1699999999999999, 1.02, 0.96999999999999997, 1.0899999999999999, 1.1100000000000001],
      "text": ["Imports: 0.8 % (World)<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 0.94 % (World)<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 0.98 % (World)<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.03 % (World)<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.07 % (World)<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.09 % (World)<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 0.99 % (World)<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.1 % (World)<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.19 % (World)<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.16 % (World)<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.24 % (World)<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.18 % (World)<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.13 % (World)<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.1 % (World)<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.17 % (World)<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.02 % (World)<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 0.97 % (World)<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.09 % (World)<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Imports: 1.11 % (World)<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [0.26169864951625482, 0.29027510014510272, 0.3047766213675096, 0.33455767515439422, 0.39555335874487885, 0.4137920458598261, 0.36053565132008264, 0.33787493040762984, 0.33738898439142367, 0.30797936677494048, 0.31495047180589542, 0.33051593045071836, 0.32680468321356665, 0.34913620885042068, 0.36492568882597809, 0.37814686172268197, 0.39384090619853601, 0.4077568087853134, 0.41775607275703225],
      "text": ["Imports: 0.26 % (World)<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.29 % (World)<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.3 % (World)<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.33 % (World)<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.4 % (World)<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.41 % (World)<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.36 % (World)<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.34 % (World)<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.34 % (World)<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.31 % (World)<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.31 % (World)<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.33 % (World)<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.33 % (World)<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.35 % (World)<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.36 % (World)<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.38 % (World)<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.39 % (World)<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.41 % (World)<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports: 0.42 % (World)<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [2.3489047471866393, 2.3942010681395467, 2.3272018918879245, 2.3142401974944944, 2.4008691363189669, 2.2207355609753017, 1.9995751719097123, 1.8202900630073526, 1.737042842757232, 1.5393676720453651, 1.5171664394311297, 1.5703480436603923, 1.5510613569291201, 1.5882718169354519, 1.623863597439259, 1.6515614624936072, 1.6220422332557196, 1.5289247352050725, 1.595337403190249],
      "text": ["Imports: 2.35 % (World)<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 2.39 % (World)<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 2.33 % (World)<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 2.31 % (World)<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 2.4 % (World)<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 2.22 % (World)<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 2 % (World)<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.82 % (World)<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.74 % (World)<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.54 % (World)<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.52 % (World)<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.57 % (World)<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.55 % (World)<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.59 % (World)<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.62 % (World)<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.65 % (World)<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.62 % (World)<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.53 % (World)<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Imports: 1.6 % (World)<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [0.44, 0.45000000000000001, 0.44, 0.42999999999999999, 0.44000000000000006, 0.46999999999999997, 0.56999999999999995, 0.52000000000000002, 0.48000000000000004, 0.64000000000000001, 0.48999999999999999, 0.46000000000000008, 0.42000000000000004, 0.43999999999999995, 0.49000000000000005, 0.38000000000000006, 0.33000000000000002, 0.28000000000000003, 0.29999999999999999],
      "text": ["Imports: 0.44 % (World)<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.45 % (World)<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.44 % (World)<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.43 % (World)<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.44 % (World)<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.47 % (World)<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.57 % (World)<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.52 % (World)<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.48 % (World)<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.64 % (World)<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.49 % (World)<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.46 % (World)<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.42 % (World)<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.44 % (World)<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.49 % (World)<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.38 % (World)<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.33 % (World)<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.28 % (World)<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports: 0.3 % (World)<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [1.05, 1.27, 1.47, 1.6100000000000001, 1.8300000000000003, 1.8400000000000001, 2.27, 2.4900000000000002, 2.6499999999999999, 2.6400000000000001, 2.3700000000000001, 2.3300000000000001, 2.2999999999999998, 2.4199999999999999, 2.6599999999999997, 2.6600000000000001, 2.54, 2.4000000000000004, 2.9199999999999999],
      "text": ["Imports: 1.05 % (World)<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 1.27 % (World)<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 1.47 % (World)<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 1.61 % (World)<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 1.83 % (World)<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 1.84 % (World)<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.27 % (World)<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.49 % (World)<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.65 % (World)<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.64 % (World)<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.37 % (World)<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.33 % (World)<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.3 % (World)<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.42 % (World)<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.66 % (World)<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.66 % (World)<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.54 % (World)<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.4 % (World)<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Imports: 2.92 % (World)<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "y": [17.149999999999999, 16.469999999999999, 16.359999999999999, 15.81, 14.449999999999999, 13.539999999999997, 13.07, 13.220000000000001, 12.630000000000001, 12.800000000000001, 12.449999999999999, 12.699999999999999, 13.809999999999999, 13.770000000000001, 13.35, 13.020000000000001, 13.140000000000001, 13.080000000000002, 13.069999999999999],
      "text": ["Imports: 17.15 % (World)<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 16.47 % (World)<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 16.36 % (World)<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 15.81 % (World)<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 14.45 % (World)<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.54 % (World)<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.07 % (World)<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.22 % (World)<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 12.63 % (World)<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 12.8 % (World)<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 12.45 % (World)<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 12.7 % (World)<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.81 % (World)<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.77 % (World)<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.35 % (World)<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.02 % (World)<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.14 % (World)<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.08 % (World)<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Imports: 13.07 % (World)<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [0.87, 0.85999999999999999, 0.88, 0.96999999999999986, 1.1000000000000001, 1.21, 1.0900000000000001, 1.1200000000000001, 1.1000000000000001, 1.0299999999999998, 1.04, 1.0900000000000001, 1.0700000000000001, 1.1200000000000001, 1.1799999999999999, 1.24, 1.24, 1.3400000000000001, 1.4199999999999999],
      "text": ["Imports: 0.87 % (World)<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 0.86 % (World)<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 0.88 % (World)<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 0.97 % (World)<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.1 % (World)<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.21 % (World)<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.09 % (World)<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.12 % (World)<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.1 % (World)<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.03 % (World)<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.04 % (World)<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.09 % (World)<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.07 % (World)<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.12 % (World)<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.18 % (World)<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.24 % (World)<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.24 % (World)<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.34 % (World)<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Imports: 1.42 % (World)<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [0.024559163079413169, 0.023502799095288712, 0.025354558949829735, 0.025420796195325383, 0.028941393147138589, 0.033797792033253088, 0.037939765037321584, 0.03671330033201186, 0.037621408714351351, 0.038749982701680667, 0.039218017039839667, 0.041197332545470422, 0.043230261995595445, 0.039164042027152665, 0.038651340353172935, 0.03754088431484201, 0.035936308603809093, 0.040319334436749572, 0.03845732115314112],
      "text": ["Imports: 0.02 % (World)<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.02 % (World)<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.03 % (World)<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.03 % (World)<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.03 % (World)<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.03 % (World)<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports: 0.04 % (World)<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [0.46999999999999992, 0.53000000000000003, 0.55000000000000004, 0.58999999999999997, 0.58999999999999997, 0.56000000000000005, 0.53000000000000003, 0.56999999999999995, 0.57999999999999996, 0.56999999999999995, 0.55000000000000004, 0.51000000000000001, 0.5, 0.45000000000000001, 0.46000000000000002, 0.45000000000000001, 0.43999999999999995, 0.37000000000000005, 0.39999999999999997],
      "text": ["Imports: 0.47 % (World)<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.53 % (World)<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.55 % (World)<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.59 % (World)<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.59 % (World)<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.56 % (World)<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.53 % (World)<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.57 % (World)<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.58 % (World)<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.57 % (World)<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.55 % (World)<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.51 % (World)<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.5 % (World)<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.45 % (World)<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.46 % (World)<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.45 % (World)<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.44 % (World)<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.37 % (World)<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Imports: 0.4 % (World)<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [7.9999999999999991, 7.8099999999999996, 7.5, 7.5599999999999996, 7.5599999999999996, 7.4299999999999997, 7.370000000000001, 7.0099999999999998, 7.0499999999999989, 6.5499999999999998, 6.6600000000000001, 6.6699999999999999, 6.5199999999999996, 6.75, 6.75, 6.8100000000000005, 6.75, 6.9000000000000004, 6.8899999999999997],
      "text": ["Imports: 8 % (World)<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 7.81 % (World)<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 7.5 % (World)<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 7.56 % (World)<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 7.56 % (World)<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 7.43 % (World)<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 7.37 % (World)<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 7.01 % (World)<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 7.05 % (World)<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.55 % (World)<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.66 % (World)<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.67 % (World)<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.52 % (World)<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.75 % (World)<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.75 % (World)<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.81 % (World)<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.75 % (World)<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.9 % (World)<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Imports: 6.89 % (World)<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "y": [0.34146508409867649, 0.39193805741310694, 0.41770308476064022, 0.44300103911273797, 0.47770037391044512, 0.4932773518485703, 0.46992727678773688, 0.46078128719216344, 0.4662097779287831, 0.44461068810022958, 0.44691999477133559, 0.46061587923924102, 0.45391192610655573, 0.46997000725542037, 0.4745586951819491, 0.48508624671690881, 0.48222893916548598, 0.49141181083857066, 0.50703716234669505],
      "text": ["Imports: 0.34 % (World)<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.39 % (World)<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.42 % (World)<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.44 % (World)<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.48 % (World)<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.49 % (World)<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.47 % (World)<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.46 % (World)<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.47 % (World)<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.44 % (World)<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.45 % (World)<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.46 % (World)<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.45 % (World)<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.47 % (World)<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.47 % (World)<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.49 % (World)<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.48 % (World)<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.49 % (World)<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports: 0.51 % (World)<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [1.1899999999999997, 1.1699999999999999, 1.1699999999999999, 1.1499999999999999, 1.1799999999999999, 1.1000000000000003, 1.24, 1.0600000000000001, 0.94999999999999996, 0.91000000000000003, 0.91000000000000003, 1.05, 1.3500000000000001, 1.6000000000000001, 1.52, 1.5100000000000002, 2.0899999999999999, 2.2999999999999998, 1.8500000000000003],
      "text": ["Imports: 1.19 % (World)<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.17 % (World)<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.17 % (World)<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.15 % (World)<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.18 % (World)<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.1 % (World)<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.24 % (World)<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.06 % (World)<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 0.95 % (World)<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 0.91 % (World)<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 0.91 % (World)<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.05 % (World)<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.35 % (World)<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.6 % (World)<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.52 % (World)<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.51 % (World)<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 2.09 % (World)<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 2.3 % (World)<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Imports: 1.85 % (World)<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [0.56999999999999995, 0.56999999999999995, 0.66000000000000003, 0.78999999999999992, 0.87999999999999989, 0.93000000000000016, 1.0600000000000001, 0.95999999999999996, 0.93000000000000005, 0.98999999999999988, 1.03, 1.1200000000000001, 1.22, 0.99999999999999989, 0.92000000000000015, 0.87, 0.92000000000000004, 0.85999999999999999, 0.81999999999999995],
      "text": ["Imports: 0.57 % (World)<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.57 % (World)<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.66 % (World)<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.79 % (World)<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.88 % (World)<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.93 % (World)<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 1.06 % (World)<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.96 % (World)<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.93 % (World)<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.99 % (World)<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 1.03 % (World)<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 1.12 % (World)<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 1.22 % (World)<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 1 % (World)<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.92 % (World)<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.87 % (World)<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.92 % (World)<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.86 % (World)<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Imports: 0.82 % (World)<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [0.98399704955581158, 0.9677429345081684, 0.95765740093756802, 0.95888923859015252, 0.97650064825224325, 0.95927630039273259, 0.8844434339044861, 0.84637368641809152, 0.84131626137138626, 0.79804823087199273, 0.79467281410108481, 0.79197612594931299, 0.77032255853330012, 0.79313896401579354, 0.78692342277938687, 0.78902270275860875, 0.77787307789881432, 0.81114679158552327, 0.8184548529934309],
      "text": ["Imports: 0.98 % (World)<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.97 % (World)<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.96 % (World)<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.96 % (World)<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.98 % (World)<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.96 % (World)<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.88 % (World)<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.85 % (World)<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.84 % (World)<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.8 % (World)<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.79 % (World)<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.79 % (World)<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.77 % (World)<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.79 % (World)<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.79 % (World)<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.79 % (World)<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.78 % (World)<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.81 % (World)<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Imports: 0.82 % (World)<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [5.0094897148871729, 4.9095066425436737, 4.7395305542687245, 4.5795521460763311, 4.589554765750699, 4.5095652821927077, 4.5195667654324323, 4.1096080382254927, 4.0796131784146779, 3.779644415230325, 3.8496409805653391, 3.8696417585542044, 3.7496547185460312, 3.8396481114500753, 3.7896541526794962, 3.7996551880855702, 3.7396628412455271, 3.6696712821069237, 3.6296772535260673],
      "text": ["Imports: 5.01 % (World)<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 4.91 % (World)<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 4.74 % (World)<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 4.58 % (World)<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 4.59 % (World)<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 4.51 % (World)<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 4.52 % (World)<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 4.11 % (World)<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 4.08 % (World)<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.78 % (World)<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.85 % (World)<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.87 % (World)<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.75 % (World)<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.84 % (World)<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.79 % (World)<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.8 % (World)<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.74 % (World)<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.67 % (World)<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports: 3.63 % (World)<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [5.8884229009503422, 5.7789547830301977, 5.5601133763847788, 5.5501613297171213, 5.0926230600616575, 4.4659939528374561, 4.4063073563671669, 4.1576424517801307, 3.9985261327862598, 3.9289472666367944, 3.9488964196149907, 4.0882324868287085, 4.2276097022707591, 4.1481506322904682, 3.9194251249696328, 3.9095000256515462, 3.9492919632614649, 3.6806715623540232, 3.5711511853461935],
      "text": ["Imports: 5.89 % (World)<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 5.78 % (World)<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 5.56 % (World)<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 5.55 % (World)<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 5.09 % (World)<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 4.47 % (World)<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 4.41 % (World)<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 4.16 % (World)<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 4 % (World)<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 3.93 % (World)<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 3.95 % (World)<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 4.09 % (World)<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 4.23 % (World)<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 4.15 % (World)<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 3.92 % (World)<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 3.91 % (World)<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 3.95 % (World)<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 3.68 % (World)<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports: 3.57 % (World)<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [1.21, 1.2, 1.1499999999999999, 1.1100000000000001, 1.1299999999999997, 1.1100000000000001, 1.1000000000000001, 1.04, 1.03, 0.97000000000000008, 0.98000000000000009, 0.97999999999999998, 0.93000000000000005, 0.97000000000000008, 0.96999999999999997, 0.98999999999999999, 0.97999999999999998, 0.98999999999999988, 1.01],
      "text": ["Imports: 1.21 % (World)<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 1.2 % (World)<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 1.15 % (World)<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 1.11 % (World)<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 1.13 % (World)<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 1.11 % (World)<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 1.1 % (World)<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 1.04 % (World)<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 1.03 % (World)<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 0.97 % (World)<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 0.98 % (World)<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 0.98 % (World)<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 0.93 % (World)<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 0.97 % (World)<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 0.97 % (World)<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 0.99 % (World)<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 0.98 % (World)<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 0.99 % (World)<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Imports: 1.01 % (World)<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "y": [4.4503579479406303, 4.9582963761141503, 5.0949947814107714, 5.368568178438256, 5.6124037741070598, 5.9149270744015503, 6.6694252958500764, 7.7555866544622525, 8.3713274610287733, 8.7928365464472673, 9.3413447441698079, 9.6543371100849384, 9.6947443406414155, 9.5778178104459002, 9.8713829324290714, 10.438215429561977, 10.300544226793498, 10.95666355248461, 11.641398639219215],
      "text": ["Imports: 4.45 % (World)<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 4.96 % (World)<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 5.09 % (World)<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 5.37 % (World)<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 5.61 % (World)<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 5.91 % (World)<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 6.67 % (World)<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 7.76 % (World)<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 8.37 % (World)<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 8.79 % (World)<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 9.34 % (World)<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 9.65 % (World)<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 9.69 % (World)<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 9.58 % (World)<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 9.87 % (World)<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 10.44 % (World)<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 10.3 % (World)<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 10.96 % (World)<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports: 11.64 % (World)<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [0.2002367905934227, 0.22315406828426151, 0.24358089485882764, 0.21694995101705497, 0.23316903911615078, 0.26316980791588307, 0.29778543147882297, 0.27133254369534787, 0.20280253805560819, 0.2198004914210516, 0.21952689350487006, 0.22955586550109741, 0.23582242827873465, 0.22227721071304385, 0.21936524622502498, 0.21515710733891855, 0.23460467587859687, 0.21373245327693458, 0.19505203568768673],
      "text": ["Imports: 0.2 % (World)<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Imports: 0.22 % (World)<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Imports: 0.24 % (World)<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Imports: 0.22 % (World)<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports: 0.23 % (World)<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports: 0.26 % (World)<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports: 0.3 % (World)<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports: 0.27 % (World)<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports: 0.2 % (World)<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports: 0.22 % (World)<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports: 0.22 % (World)<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports: 0.23 % (World)<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports: 0.24 % (World)<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports: 0.22 % (World)<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Imports: 0.22 % (World)<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Imports: 0.22 % (World)<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Imports: 0.23 % (World)<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports: 0.21 % (World)<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports: 0.2 % (World)<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [3.9430649502523623, 3.8238183014514795, 3.6549563819551936, 3.6648712902344993, 3.6748411164143442, 3.4762953716913554, 3.2876113422160396, 3.1584732222993317, 3.0193243392331928, 2.6120667736328764, 2.5127253496810864, 2.4728231486441739, 2.4029764902317727, 2.4423322970468928, 2.471588345607687, 2.5006645755888672, 2.3807524139990508, 2.291090053382931, 2.4493982378610477],
      "text": ["Imports: 3.94 % (World)<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 3.82 % (World)<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 3.65 % (World)<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 3.66 % (World)<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 3.67 % (World)<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 3.48 % (World)<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 3.29 % (World)<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 3.16 % (World)<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 3.02 % (World)<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.61 % (World)<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.51 % (World)<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.47 % (World)<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.4 % (World)<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.44 % (World)<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.47 % (World)<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.5 % (World)<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.38 % (World)<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.29 % (World)<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Imports: 2.45 % (World)<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [3.3599999999999999, 3.29, 3.1400000000000001, 3.0600000000000001, 3.1600000000000001, 3.0600000000000001, 3.1099999999999999, 2.8900000000000001, 2.8399999999999999, 2.7000000000000002, 2.75, 2.73, 2.8399999999999999, 2.73, 2.7599999999999998, 2.8199999999999998, 2.79, 2.9199999999999999, 2.8799999999999999],
      "text": ["Imports: 3.36 % (World)<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 3.29 % (World)<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 3.14 % (World)<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 3.06 % (World)<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 3.16 % (World)<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 3.06 % (World)<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 3.11 % (World)<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.89 % (World)<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.84 % (World)<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.7 % (World)<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.75 % (World)<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.73 % (World)<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.84 % (World)<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.73 % (World)<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.76 % (World)<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.82 % (World)<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.79 % (World)<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.92 % (World)<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Imports: 2.88 % (World)<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [2.1524187119721772, 2.1429436553977341, 2.0943422639811216, 2.0088080707076159, 2.0373896514157197, 2.102330004322853, 2.025515077726098, 1.9006429313681805, 1.9091324887547048, 1.773847759875125, 1.7740693359100459, 1.7938018096489226, 1.6789218764247962, 1.8025820594495154, 1.8102618035810736, 1.8097839452317588, 1.7819016744679008, 1.8321351525097784, 1.9167077852677583],
      "text": ["Imports: 2.15 % (World)<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 2.14 % (World)<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 2.09 % (World)<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 2.01 % (World)<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 2.04 % (World)<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 2.1 % (World)<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 2.03 % (World)<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.9 % (World)<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.91 % (World)<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.77 % (World)<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.77 % (World)<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.79 % (World)<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.68 % (World)<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.8 % (World)<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.81 % (World)<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.81 % (World)<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.78 % (World)<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.83 % (World)<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports: 1.92 % (World)<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [0.61223151062320691, 0.59324225324680102, 0.54604952399329132, 0.56371828389419931, 0.61778553783552714, 0.61799884985183917, 0.57187066504436501, 0.44317082065320906, 0.3872467789782581, 0.34136712385040691, 0.32174034451588457, 0.32217642419755432, 0.29467892430350023, 0.29425490192650799, 0.30388875417459338, 0.33035840940969552, 0.32999831032873805, 0.32287176670711382, 0.36675285676644026],
      "text": ["Imports: 0.61 % (World)<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.59 % (World)<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.55 % (World)<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.56 % (World)<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.62 % (World)<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.62 % (World)<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.57 % (World)<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.44 % (World)<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.39 % (World)<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.34 % (World)<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.32 % (World)<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.32 % (World)<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.29 % (World)<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.29 % (World)<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.3 % (World)<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.33 % (World)<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.33 % (World)<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.32 % (World)<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports: 0.37 % (World)<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Imports (REMIND_39)",
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
      "ticktext": ["0", "25", "50", "75", "100"],
      "tickvals": [0, 25, 50, 75, 100],
      "categoryorder": "array",
      "categoryarray": ["0", "25", "50", "75", "100"],
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
        "text": "% (World)",
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
    "b55c326b2ef1": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c4ef62cbd": {
      "y": {}
    }
  },
  "cur_data": "b55c326b2ef1",
  "visdat": {
    "b55c326b2ef1": ["function (y) ", "x"],
    "b55c4ef62cbd": ["function (y) ", "x"]
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

  
