(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Sectors_Value_added___services_line') 

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
      "y": [69.018344815291826, 69.258876413173098, 69.197490162322651, 68.991895510442447, 69.1596663499176, 69.174597948244141, 70.712598048029207, 70.608170717542492, 70.335307470350983, 71.046844441991908, 70.987269246945658, 71.364774509390116, 71.662168068382869, 71.919099356736467, 71.742508995039415, 71.717268413088135, 71.539511277960898, 71.427433300112526, 71.562090458706265],
      "text": ["Value added - services: 69.02 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 69.26 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 69.2 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 68.99 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 69.16 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 69.17 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 70.71 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 70.61 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 70.34 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 71.05 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 70.99 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 71.36 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 71.66 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 71.92 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 71.74 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 71.72 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 71.54 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 71.43 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - services: 71.56 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [52.851364500484635, 51.270223969955069, 50.691488571642111, 50.124021088648121, 50.643642286016814, 50.892913651811135, 53.353676761719214, 51.935291120828602, 51.058833462194293, 52.455968331577125, 53.11550871514855, 54.060886824153023, 55.372061426040588, 55.889495518740375, 56.033378548109972, 55.954594530377094, 56.174105563735765, 56.434764355177556, 54.446583626502225],
      "text": ["Value added - services: 52.85 % (GDP)<br>Period: 2003<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 51.27 % (GDP)<br>Period: 2004<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 50.69 % (GDP)<br>Period: 2005<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 50.12 % (GDP)<br>Period: 2006<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 50.64 % (GDP)<br>Period: 2007<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 50.89 % (GDP)<br>Period: 2008<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 53.35 % (GDP)<br>Period: 2009<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 51.94 % (GDP)<br>Period: 2010<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 51.06 % (GDP)<br>Period: 2011<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 52.46 % (GDP)<br>Period: 2012<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 53.12 % (GDP)<br>Period: 2013<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 54.06 % (GDP)<br>Period: 2014<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 55.37 % (GDP)<br>Period: 2015<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 55.89 % (GDP)<br>Period: 2016<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 56.03 % (GDP)<br>Period: 2017<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 55.95 % (GDP)<br>Period: 2018<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 56.17 % (GDP)<br>Period: 2019<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 56.43 % (GDP)<br>Period: 2020<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - services: 54.45 % (GDP)<br>Period: 2021<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [62.920000000000002, 62.399999999999999, 62.030000000000001, 62.719999999999999, 63.099999999999994, 62.729999999999997, 66.870000000000005, 65.730000000000004, 64.799999999999997, 65.159999999999997, 65.170000000000002, 64.899999999999991, 67, 67.959999999999994, 67.11999999999999, 66.870000000000005, 67.670000000000002, 67.670000000000002, 67.670000000000002],
      "text": ["Value added - services: 62.92 % (GDP)<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 62.4 % (GDP)<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 62.03 % (GDP)<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 62.72 % (GDP)<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 63.1 % (GDP)<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 62.73 % (GDP)<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 66.87 % (GDP)<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 65.73 % (GDP)<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 64.8 % (GDP)<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 65.16 % (GDP)<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 65.17 % (GDP)<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 64.9 % (GDP)<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 67 % (GDP)<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 67.96 % (GDP)<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 67.12 % (GDP)<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 66.87 % (GDP)<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 67.67 % (GDP)<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 67.67 % (GDP)<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - services: 67.67 % (GDP)<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [38.924354572500462, 38.348978463267763, 38.395210097065835, 37.847070591627535, 38.176609452389961, 38.183942338945052, 41.332416579030053, 41.240529626522168, 43.144399537507901, 45.623769080681662, 46.467531065201825, 47.974515556342276, 49.320359402112253, 50.0285359911664, 49.235884837452687, 48.149305510450446, 46.203741464033193, 47.768847458393502, 41.362488881831567],
      "text": ["Value added - services: 38.92 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Value added - services: 38.35 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Value added - services: 38.4 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 37.85 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 38.18 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 38.18 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 41.33 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 41.24 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 43.14 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 45.62 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 46.47 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 47.97 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 49.32 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 50.03 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 49.24 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 48.15 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 46.2 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 47.77 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - services: 41.36 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [64.240479097907055, 64.22193942047285, 64.368098125999708, 63.83190581852854, 64.181526732581958, 64.454953608887564, 64.329983101858744, 65.502340455868421, 64.592430676586233, 65.158632224517746, 65.956788601888547, 65.664186477906654, 67.022455838799416, 67.809049480703081, 66.702281912331046, 66.482633715416142, 65.996237213633378, 66.386296730207746, 65.819274963249001],
      "text": ["Value added - services: 64.24 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 64.22 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 64.37 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 63.83 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 64.18 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 64.45 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 64.33 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 65.5 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 64.59 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 65.16 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 65.96 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 65.66 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 67.02 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 67.81 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 66.7 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 66.48 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 66 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 66.39 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - services: 65.82 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [60.419999999999995, 59.390000000000001, 60.009999999999991, 58.969999999999999, 59.189999999999998, 59.520000000000003, 60.719999999999992, 60.359999999999999, 59.909999999999997, 60, 61.110000000000007, 60.210000000000001, 61.039999999999999, 60.759999999999998, 60.149999999999991, 59.929999999999993, 59.979999999999997, 60.130000000000003, 59.159999999999989],
      "text": ["Value added - services: 60.42 % (GDP)<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 59.39 % (GDP)<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 60.01 % (GDP)<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 58.97 % (GDP)<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 59.19 % (GDP)<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 59.52 % (GDP)<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 60.72 % (GDP)<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 60.36 % (GDP)<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 59.91 % (GDP)<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 60 % (GDP)<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 61.11 % (GDP)<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 60.21 % (GDP)<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 61.04 % (GDP)<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 60.76 % (GDP)<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 60.15 % (GDP)<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 59.93 % (GDP)<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 59.98 % (GDP)<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 60.13 % (GDP)<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - services: 59.16 % (GDP)<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [53.57, 52.079999999999998, 49.52000000000001, 47.850000000000009, 49.969999999999999, 48.170000000000002, 53.189999999999998, 52.289999999999999, 50.579999999999998, 51.100000000000001, 52.060000000000016, 53.429999999999993, 55.979999999999997, 57.93, 56.289999999999999, 54.569999999999993, 57.309999999999995, 59.600000000000001, 51.810000000000002],
      "text": ["Value added - services: 53.57 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 52.08 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 49.52 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 47.85 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 49.97 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 48.17 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 53.19 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 52.29 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 50.58 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 51.1 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 52.06 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 53.43 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 55.98 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 57.93 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 56.29 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 54.57 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 57.31 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 59.6 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - services: 51.81 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [56.359999999999999, 54.920000000000002, 56.079999999999991, 57.140000000000001, 57.729999999999997, 56.79999999999999, 59.150000000000006, 57.609999999999999, 57.570000000000007, 58.729999999999997, 59.679999999999993, 61.25, 62.310000000000002, 63.199999999999996, 63.340000000000003, 62.650000000000006, 63.069999999999993, 61.45000000000001, 57.759999999999991],
      "text": ["Value added - services: 56.36 % (GDP)<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 54.92 % (GDP)<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 56.08 % (GDP)<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 57.14 % (GDP)<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 57.73 % (GDP)<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 56.8 % (GDP)<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 59.15 % (GDP)<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 57.61 % (GDP)<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 57.57 % (GDP)<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 58.73 % (GDP)<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 59.68 % (GDP)<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 61.25 % (GDP)<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 62.31 % (GDP)<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 63.2 % (GDP)<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 63.34 % (GDP)<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 62.65 % (GDP)<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 63.07 % (GDP)<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 61.45 % (GDP)<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - services: 57.76 % (GDP)<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [49.305216527452799, 50.535200479245276, 49.576283742115258, 50.108172288141702, 51.668256875981726, 52.72425807290621, 55.473554951390255, 54.964785073838996, 53.41535975837467, 54.292534067672861, 55.468327671905342, 53.994106959906844, 51.97681862094899, 51.045837753006033, 51.814961186438666, 52.039760193490082, 54.260133856348745, 55.123391809162896, 52.545714727212228],
      "text": ["Value added - services: 49.31 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 50.54 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 49.58 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 50.11 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 51.67 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 52.72 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 55.47 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Value added - services: 54.96 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Value added - services: 53.42 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 54.29 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 55.47 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 53.99 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 51.98 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 51.05 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 51.81 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 52.04 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 54.26 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 55.12 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - services: 52.55 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [53.869999999999997, 53.099999999999994, 53.880000000000003, 54.700000000000003, 55.079999999999998, 56.189999999999991, 56, 54.700000000000003, 54.650000000000006, 55.069999999999993, 55.210000000000001, 55.639999999999993, 55.580000000000005, 55.359999999999999, 54.850000000000001, 55.689999999999998, 57.240000000000002, 57.009999999999998, 56.979999999999997],
      "text": ["Value added - services: 53.87 % (GDP)<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 53.1 % (GDP)<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 53.88 % (GDP)<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 54.7 % (GDP)<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 55.08 % (GDP)<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 56.19 % (GDP)<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 56 % (GDP)<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 54.7 % (GDP)<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 54.65 % (GDP)<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 55.07 % (GDP)<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 55.21 % (GDP)<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 55.64 % (GDP)<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 55.58 % (GDP)<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 55.36 % (GDP)<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 54.85 % (GDP)<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 55.69 % (GDP)<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 57.24 % (GDP)<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 57.01 % (GDP)<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - services: 56.98 % (GDP)<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [39.809943818132609, 40.443648520215554, 39.747423916036482, 40.042919500649703, 40.92167911439347, 40.337561103557093, 42.577889259550467, 41.430281577265525, 40.394926389326983, 41.15229866176999, 42.307846881980446, 42.575449288461449, 44.388024284618076, 43.886226079728999, 43.158656428857981, 41.738149912899353, 42.535377891172857, 43.259994923520601, 42.171812831189555],
      "text": ["Value added - services: 39.81 % (GDP)<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - services: 40.44 % (GDP)<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - services: 39.75 % (GDP)<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - services: 40.04 % (GDP)<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - services: 40.92 % (GDP)<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - services: 40.34 % (GDP)<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - services: 42.58 % (GDP)<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - services: 41.43 % (GDP)<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - services: 40.39 % (GDP)<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - services: 41.15 % (GDP)<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - services: 42.31 % (GDP)<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - services: 42.58 % (GDP)<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - services: 44.39 % (GDP)<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - services: 43.89 % (GDP)<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - services: 43.16 % (GDP)<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - services: 41.74 % (GDP)<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - services: 42.54 % (GDP)<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - services: 43.26 % (GDP)<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - services: 42.17 % (GDP)<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [53.82, 50.659999999999997, 48.810000000000002, 49.719999999999999, 50.670000000000002, 50.700000000000003, 53.769999999999996, 53.119999999999997, 53.800000000000004, 54.509999999999991, 56.120000000000005, 55.68, 56.140000000000001, 57.009999999999991, 56.030000000000001, 53.430000000000007, 54.170000000000002, 56.369999999999997, 54.099999999999994],
      "text": ["Value added - services: 53.82 % (GDP)<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 50.66 % (GDP)<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 48.81 % (GDP)<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 49.72 % (GDP)<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 50.67 % (GDP)<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 50.7 % (GDP)<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 53.77 % (GDP)<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 53.12 % (GDP)<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 53.8 % (GDP)<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 54.51 % (GDP)<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 56.12 % (GDP)<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 55.68 % (GDP)<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 56.14 % (GDP)<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 57.01 % (GDP)<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 56.03 % (GDP)<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 53.43 % (GDP)<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 54.17 % (GDP)<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 56.37 % (GDP)<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - services: 54.1 % (GDP)<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [46.340209766446911, 46.328673211330887, 47.271740132371278, 47.168575537237629, 47.369047613743035, 46.977714577170048, 48.181190712760205, 46.804545005988665, 46.650651682190329, 47.28276641522892, 48.344993201306707, 48.647467977003451, 49.860766464146955, 50.549575188928117, 50.482555720770954, 50.706547069734931, 51.500928200185669, 51.544167030857892, 50.617184293272594],
      "text": ["Value added - services: 46.34 % (GDP)<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 46.33 % (GDP)<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 47.27 % (GDP)<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 47.17 % (GDP)<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 47.37 % (GDP)<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 46.98 % (GDP)<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 48.18 % (GDP)<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 46.8 % (GDP)<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 46.65 % (GDP)<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 47.28 % (GDP)<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 48.34 % (GDP)<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 48.65 % (GDP)<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 49.86 % (GDP)<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 50.55 % (GDP)<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 50.48 % (GDP)<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 50.71 % (GDP)<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 51.5 % (GDP)<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - services: 51.54 % (GDP)<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Value added - services: 50.62 % (GDP)<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [41.07, 41.040000000000006, 40.329999999999998, 40.080000000000005, 39.480000000000004, 37.460000000000001, 37.060000000000002, 40.670000000000002, 40.579999999999998, 40.869999999999997, 41.520000000000003, 42.239999999999995, 43.310000000000002, 43.640000000000008, 43.609999999999999, 43.399999999999991, 44.219999999999999, 44.410000000000004, 42.82],
      "text": ["Value added - services: 41.07 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 41.04 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 40.33 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 40.08 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 39.48 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 37.46 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 37.06 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 40.67 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 40.58 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 40.87 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 41.52 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 42.24 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 43.31 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 43.64 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 43.61 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 43.4 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 44.22 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 44.41 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - services: 42.82 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [50.822436961336869, 50.469282911038846, 50.741634008486216, 51.458759965376657, 51.66145025686474, 52.225133774592834, 52.317952170341208, 52.353130359605501, 51.40687346634536, 51.821358656652421, 52.329950126056239, 52.34522900165603, 52.680372487035804, 52.585676276220944, 52.866232949938087, 52.622076190567533, 52.669158745494585, 52.995605513355073, 51.307919282678185],
      "text": ["Value added - services: 50.82 % (GDP)<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - services: 50.47 % (GDP)<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - services: 50.74 % (GDP)<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - services: 51.46 % (GDP)<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - services: 51.66 % (GDP)<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - services: 52.23 % (GDP)<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - services: 52.32 % (GDP)<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 52.35 % (GDP)<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 51.41 % (GDP)<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 51.82 % (GDP)<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 52.33 % (GDP)<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 52.35 % (GDP)<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 52.68 % (GDP)<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 52.59 % (GDP)<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 52.87 % (GDP)<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 52.62 % (GDP)<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 52.67 % (GDP)<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 53 % (GDP)<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - services: 51.31 % (GDP)<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [68.719999999999999, 68.989999999999995, 69.469999999999999, 69.450000000000003, 69.560000000000002, 70.260000000000005, 71.909999999999997, 70.540000000000006, 71.690000000000012, 71.75, 71.620000000000005, 70.879999999999995, 69.799999999999997, 69.890000000000001, 69.54000000000002, 69.400000000000006, 69.629999999999995, 69.47999999999999, 69.890000000000015],
      "text": ["Value added - services: 68.72 % (GDP)<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 68.99 % (GDP)<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.47 % (GDP)<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.45 % (GDP)<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.56 % (GDP)<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 70.26 % (GDP)<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 71.91 % (GDP)<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 70.54 % (GDP)<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 71.69 % (GDP)<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 71.75 % (GDP)<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 71.62 % (GDP)<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 70.88 % (GDP)<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.8 % (GDP)<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.89 % (GDP)<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.54 % (GDP)<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.4 % (GDP)<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.63 % (GDP)<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.48 % (GDP)<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - services: 69.89 % (GDP)<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [53.140000000000001, 53.079999999999998, 53.039999999999999, 53.430000000000007, 54.880000000000003, 55.539999999999999, 57.160000000000004, 54.539999999999999, 53.049999999999997, 54.000000000000007, 53.340000000000003, 53.829999999999998, 53.47999999999999, 53.990000000000009, 53.539999999999992, 54.469999999999999, 56.360000000000007, 54.200000000000003, 52.75],
      "text": ["Value added - services: 53.14 % (GDP)<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 53.08 % (GDP)<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 53.04 % (GDP)<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 53.43 % (GDP)<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 54.88 % (GDP)<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 55.54 % (GDP)<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 57.16 % (GDP)<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 54.54 % (GDP)<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 53.05 % (GDP)<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 54 % (GDP)<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 53.34 % (GDP)<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 53.83 % (GDP)<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 53.48 % (GDP)<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 53.99 % (GDP)<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 53.54 % (GDP)<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 54.47 % (GDP)<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 56.36 % (GDP)<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 54.2 % (GDP)<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - services: 52.75 % (GDP)<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [50.483042551982606, 50.138317902794114, 51.675966993460328, 51.925463123497273, 52.649219425213609, 51.48863476003018, 53.092213884153765, 52.651067813233531, 50.503324820447219, 53.458511938448801, 54.124977501835183, 54.229928023422715, 54.732693217122566, 56.095649533383785, 57.117546403380437, 57.590659782735017, 58.474361594375225, 59.286224706124884, 59.174988869517016],
      "text": ["Value added - services: 50.48 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 50.14 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 51.68 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 51.93 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 52.65 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 51.49 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 53.09 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 52.65 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 50.5 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 53.46 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 54.12 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 54.23 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 54.73 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 56.1 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 57.12 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 57.59 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 58.47 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 59.29 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - services: 59.17 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [60.334934621632534, 60.592727621157543, 60.442560516990724, 60.597539642991265, 61.727240419347645, 63.750351895710885, 66.599402216285895, 66.239298650531865, 67.443105288864572, 68.146393263785086, 68.206859639920154, 68.076864995682982, 67.549592641982329, 67.482881020598072, 67.37462887734732, 67.381766149904479, 67.723199788057016, 67.76499244121888, 66.935021994933166],
      "text": ["Value added - services: 60.33 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 60.59 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 60.44 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 60.6 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 61.73 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 63.75 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 66.6 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 66.24 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 67.44 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 68.15 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 68.21 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 68.08 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 67.55 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 67.48 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 67.37 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 67.38 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 67.72 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 67.76 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - services: 66.94 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [48.77000000000001, 47.919999999999995, 47.979999999999997, 49.130000000000003, 47.609999999999999, 48.640000000000001, 51.479999999999997, 51.139999999999993, 48.719999999999999, 50.43, 47.640000000000001, 49.359999999999999, 55.180000000000007, 52.519999999999996, 50.659999999999997, 48.590000000000011, 50.119999999999997, 49.200000000000003, 47.329999999999998],
      "text": ["Value added - services: 48.77 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 47.92 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 47.98 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 49.13 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 47.61 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 48.64 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 51.48 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 51.14 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 48.72 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 50.43 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 47.64 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 49.36 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 55.18 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 52.52 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 50.66 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 48.59 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 50.12 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 49.2 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - services: 47.33 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [44.700000000000003, 44.109999999999999, 44.439999999999998, 44.039999999999999, 44.009999999999998, 45.880000000000003, 45.97999999999999, 45.030000000000001, 45.439999999999998, 46.299999999999997, 46.700000000000003, 47.82, 47.780000000000001, 47.75, 47.669999999999995, 48.430000000000007, 50.079999999999998, 48.070000000000007, 47.939999999999998],
      "text": ["Value added - services: 44.7 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 44.11 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 44.44 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 44.04 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 44.01 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 45.88 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 45.98 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 45.03 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 45.44 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 46.3 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 46.7 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 47.82 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 47.78 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 47.75 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 47.67 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 48.43 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 50.08 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 48.07 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - services: 47.94 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "y": [74.599999999999994, 74.159999999999997, 74.030000000000015, 73.700000000000003, 73.920000000000002, 74.620000000000005, 76.510000000000005, 76.280000000000001, 75.900000000000006, 76.159999999999997, 75.819999999999993, 75.829999999999984, 76.739999999999995, 77.440000000000012, 77.030000000000001, 76.739999999999995, 77.180000000000007, 78.140000000000001, 77.59999999999998],
      "text": ["Value added - services: 74.6 % (GDP)<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 74.16 % (GDP)<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 74.03 % (GDP)<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 73.7 % (GDP)<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 73.92 % (GDP)<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 74.62 % (GDP)<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 76.51 % (GDP)<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 76.28 % (GDP)<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 75.9 % (GDP)<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 76.16 % (GDP)<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 75.82 % (GDP)<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 75.83 % (GDP)<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 76.74 % (GDP)<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 77.44 % (GDP)<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 77.03 % (GDP)<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 76.74 % (GDP)<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 77.18 % (GDP)<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 78.14 % (GDP)<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - services: 77.6 % (GDP)<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [58.039999999999999, 56.390000000000008, 56.32, 56.189999999999998, 55.569999999999993, 55.979999999999997, 56.700000000000003, 55.269999999999996, 54.119999999999997, 55.18, 56.609999999999999, 55.560000000000002, 55.090000000000003, 54.869999999999997, 55.909999999999997, 56.409999999999989, 56.879999999999995, 57.160000000000004, 56.900000000000006],
      "text": ["Value added - services: 58.04 % (GDP)<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 56.39 % (GDP)<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 56.32 % (GDP)<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 56.19 % (GDP)<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 55.57 % (GDP)<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 55.98 % (GDP)<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 56.7 % (GDP)<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 55.27 % (GDP)<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 54.12 % (GDP)<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 55.18 % (GDP)<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 56.61 % (GDP)<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 55.56 % (GDP)<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 55.09 % (GDP)<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 54.87 % (GDP)<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 55.91 % (GDP)<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 56.41 % (GDP)<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 56.88 % (GDP)<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 57.16 % (GDP)<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - services: 56.9 % (GDP)<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [43.637126111418752, 43.74440361577664, 43.70877768710713, 45.517198626369428, 45.996175996435376, 44.878347281678131, 46.797108682369206, 46.539435660480535, 45.437791599337928, 45.260627662724247, 45.779536474603212, 46.188354788025357, 48.049314577368108, 48.086755778066788, 46.741677141489347, 45.487767936945545, 45.240658770726796, 44.258358687166336, 43.066804765199599],
      "text": ["Value added - services: 43.64 % (GDP)<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 43.74 % (GDP)<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 43.71 % (GDP)<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 45.52 % (GDP)<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 46 % (GDP)<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 44.88 % (GDP)<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 46.8 % (GDP)<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 46.54 % (GDP)<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 45.44 % (GDP)<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 45.26 % (GDP)<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 45.78 % (GDP)<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 46.19 % (GDP)<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 48.05 % (GDP)<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 48.09 % (GDP)<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 46.74 % (GDP)<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 45.49 % (GDP)<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 45.24 % (GDP)<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 44.26 % (GDP)<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - services: 43.07 % (GDP)<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [62.579999999999998, 62.529999999999994, 62.640000000000001, 63.5, 62.749999999999993, 61.539999999999999, 63.640000000000001, 64.280000000000001, 64.340000000000003, 64.299999999999997, 64.049999999999997, 64.010000000000005, 64.100000000000009, 63.910000000000004, 64.329999999999998, 64.189999999999998, 64.269999999999996, 64.719999999999999, 63.019999999999996],
      "text": ["Value added - services: 62.58 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 62.53 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 62.64 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 63.5 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 62.75 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 61.54 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 63.64 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.28 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.34 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.3 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.05 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.01 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.1 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 63.91 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.33 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.19 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.27 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 64.72 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - services: 63.02 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [63.259999999999998, 63.240000000000002, 63.359999999999999, 62.719999999999992, 61.909999999999997, 62.220000000000006, 64.230000000000018, 62.259999999999998, 61.789999999999992, 61.689999999999998, 62.189999999999998, 62.109999999999999, 62.149999999999999, 61.770000000000003, 61.800000000000004, 62.120000000000005, 62.380000000000003, 63.299999999999997, 62.880000000000003],
      "text": ["Value added - services: 63.26 % (GDP)<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 63.24 % (GDP)<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 63.36 % (GDP)<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 62.72 % (GDP)<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 61.91 % (GDP)<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 62.22 % (GDP)<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 64.23 % (GDP)<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 62.26 % (GDP)<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 61.79 % (GDP)<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 61.69 % (GDP)<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 62.19 % (GDP)<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 62.11 % (GDP)<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 62.15 % (GDP)<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 61.77 % (GDP)<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 61.8 % (GDP)<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 62.12 % (GDP)<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 62.38 % (GDP)<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 63.3 % (GDP)<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - services: 62.88 % (GDP)<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "y": [57.687151077722703, 56.220135890156214, 56.219643506869403, 55.651835583185026, 55.619268190604821, 56.548328207901257, 58.742817546158911, 58.176702754760043, 57.016210867587624, 57.214939048163536, 57.703683746730626, 56.906863440507841, 56.971918316845084, 57.611515730224824, 57.849551860491751, 58.446167469434833, 58.660473360391833, 59.787721552799248, 59.369085420186728],
      "text": ["Value added - services: 57.69 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 56.22 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 56.22 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 55.65 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 55.62 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 56.55 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 58.74 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 58.18 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 57.02 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 57.21 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 57.7 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 56.91 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 56.97 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 57.61 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 57.85 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 58.45 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 58.66 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 59.79 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - services: 59.37 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [54.859999999999992, 55.609999999999999, 56.729999999999997, 56.920000000000002, 59.260000000000005, 62.57, 63.689999999999998, 66.700000000000003, 65.13000000000001, 65.430000000000007, 66.500000000000014, 65.959999999999994, 53.810000000000002, 54.999999999999993, 55.179999999999993, 56.120000000000005, 57.460000000000001, 55.989999999999995, 55.359999999999992],
      "text": ["Value added - services: 54.86 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 55.61 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 56.73 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 56.92 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 59.26 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 62.57 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 63.69 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 66.7 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 65.13 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 65.43 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 66.5 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 65.96 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 53.81 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 55 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 55.18 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 56.12 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 57.46 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 55.99 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - services: 55.36 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [40.560000000000002, 38.52000000000001, 34.259999999999998, 33.759999999999991, 33.810000000000002, 30.510000000000002, 41.719999999999999, 38.609999999999999, 33.990000000000002, 34.949999999999996, 37.729999999999997, 40.32, 51.54999999999999, 53.589999999999996, 51.310000000000009, 45.719999999999992, 48.470000000000006, 53.310000000000002, 46.520000000000003],
      "text": ["Value added - services: 40.56 % (GDP)<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 38.52 % (GDP)<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 34.26 % (GDP)<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 33.76 % (GDP)<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 33.81 % (GDP)<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 30.51 % (GDP)<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 41.72 % (GDP)<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 38.61 % (GDP)<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 33.99 % (GDP)<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 34.95 % (GDP)<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 37.73 % (GDP)<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 40.32 % (GDP)<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 51.55 % (GDP)<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 53.59 % (GDP)<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 51.31 % (GDP)<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 45.72 % (GDP)<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 48.47 % (GDP)<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 53.31 % (GDP)<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - services: 46.52 % (GDP)<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [60.081267774255743, 60.326523563456874, 60.411523866474596, 59.840229578932913, 59.749516542582555, 60.783849275785435, 63.402028878715797, 62.494442655986198, 62.633945310554637, 63.272176575281286, 63.927495485724904, 64.344898045598327, 64.254958986590594, 64.025161152891712, 63.639923241431447, 63.73871530553518, 64.008082364747708, 64.269918233606049, 64.220533824875318],
      "text": ["Value added - services: 60.08 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 60.33 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 60.41 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 59.84 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 59.75 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 60.78 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 63.4 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 62.49 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 62.63 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 63.27 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 63.93 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 64.34 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 64.25 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 64.03 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 63.64 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 63.74 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 64.01 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 64.27 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - services: 64.22 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [68.060000000000016, 68.170000000000002, 68.530000000000001, 68.719999999999985, 69.010000000000019, 69.65000000000002, 70.749999999999986, 70.649999999999991, 70.180000000000007, 70.280000000000001, 70.299999999999983, 70.34999999999998, 70.209999999999994, 70.509999999999991, 70.290000000000006, 70.099999999999994, 70.039999999999992, 71.159999999999997, 70.340000000000018],
      "text": ["Value added - services: 68.06 % (GDP)<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 68.17 % (GDP)<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 68.53 % (GDP)<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 68.72 % (GDP)<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 69.01 % (GDP)<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 69.65 % (GDP)<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.75 % (GDP)<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.65 % (GDP)<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.18 % (GDP)<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.28 % (GDP)<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.3 % (GDP)<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.35 % (GDP)<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.21 % (GDP)<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.51 % (GDP)<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.29 % (GDP)<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.1 % (GDP)<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.04 % (GDP)<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 71.16 % (GDP)<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - services: 70.34 % (GDP)<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [68.378815357163433, 68.978762895151661, 69.288772351953085, 69.418755352432044, 69.748747488336591, 69.918839380458337, 71.838760923148044, 70.71877868065134, 70.28882780324291, 70.478867297765333, 70.048913464724379, 70.248963912761212, 70.568955562730636, 71.068939311934884, 70.908950089060596, 70.918990103667042, 71.089061869044428, 72.598908702647776, 71.598946572652309],
      "text": ["Value added - services: 68.38 % (GDP)<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 68.98 % (GDP)<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 69.29 % (GDP)<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 69.42 % (GDP)<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 69.75 % (GDP)<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 69.92 % (GDP)<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 71.84 % (GDP)<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 70.72 % (GDP)<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 70.29 % (GDP)<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 70.48 % (GDP)<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 70.05 % (GDP)<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 70.25 % (GDP)<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 70.57 % (GDP)<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 71.07 % (GDP)<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 70.91 % (GDP)<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 70.92 % (GDP)<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 71.09 % (GDP)<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 72.6 % (GDP)<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - services: 71.6 % (GDP)<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [60.390000000000001, 60.32, 60.57, 60.700000000000003, 60.32, 61.030000000000001, 62.170000000000002, 62.289999999999999, 62.280000000000001, 62.000000000000007, 62.329999999999991, 62.650000000000006, 62.880000000000003, 62.600000000000001, 62.560000000000009, 62.859999999999999, 63.130000000000003, 62.890000000000001, 62.410000000000004],
      "text": ["Value added - services: 60.39 % (GDP)<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 60.32 % (GDP)<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 60.57 % (GDP)<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 60.7 % (GDP)<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 60.32 % (GDP)<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 61.03 % (GDP)<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.17 % (GDP)<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.29 % (GDP)<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.28 % (GDP)<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62 % (GDP)<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.33 % (GDP)<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.65 % (GDP)<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.88 % (GDP)<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.6 % (GDP)<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.56 % (GDP)<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.86 % (GDP)<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 63.13 % (GDP)<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.89 % (GDP)<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - services: 62.41 % (GDP)<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "y": [42.282047752718789, 41.439965076698378, 41.602841337119031, 42.084056726609099, 43.133033242029747, 43.111912529599628, 44.65703927148531, 44.443876001641897, 44.557918207154188, 45.72481729602881, 47.132890243461254, 48.511911371742151, 50.994239189067088, 52.57429004919188, 52.888186033806072, 53.476307729655048, 54.478214338203948, 54.660848906167296, 53.678585933273801],
      "text": ["Value added - services: 42.28 % (GDP)<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 41.44 % (GDP)<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 41.6 % (GDP)<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 42.08 % (GDP)<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 43.13 % (GDP)<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 43.11 % (GDP)<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 44.66 % (GDP)<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 44.44 % (GDP)<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 44.56 % (GDP)<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 45.72 % (GDP)<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 47.13 % (GDP)<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 48.51 % (GDP)<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 50.99 % (GDP)<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 52.57 % (GDP)<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 52.89 % (GDP)<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 53.48 % (GDP)<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 54.48 % (GDP)<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 54.66 % (GDP)<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - services: 53.68 % (GDP)<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [40.461386140493737, 43.505753304156649, 42.464008385900215, 42.392814692002943, 43.700354101288006, 42.152651500951841, 46.65317020424169, 44.339679911634271, 41.704454403544844, 44.611079589814153, 44.907685336760082, 46.119262365716644, 49.757852734592689, 51.363775494516617, 47.663121271689029, 45.040742762287259, 45.677745162553791, 49.346027461536742, 45.708628925453638],
      "text": ["Value added - services: 40.46 % (GDP)<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Value added - services: 43.51 % (GDP)<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Value added - services: 42.46 % (GDP)<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Value added - services: 42.39 % (GDP)<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - services: 43.7 % (GDP)<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - services: 42.15 % (GDP)<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Value added - services: 46.65 % (GDP)<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Value added - services: 44.34 % (GDP)<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Value added - services: 41.7 % (GDP)<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Value added - services: 44.61 % (GDP)<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - services: 44.91 % (GDP)<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - services: 46.12 % (GDP)<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - services: 49.76 % (GDP)<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - services: 51.36 % (GDP)<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Value added - services: 47.66 % (GDP)<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Value added - services: 45.04 % (GDP)<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Value added - services: 45.68 % (GDP)<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - services: 49.35 % (GDP)<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - services: 45.71 % (GDP)<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [64.592526749779097, 64.442815576123891, 64.814742223835893, 64.256230258619553, 64.131080932674791, 64.750318252835982, 66.682892539776518, 66.330762924298398, 66.206175247300749, 66.478808622685094, 66.732203515616533, 67.140323915749093, 67.033510786443003, 66.715899786542394, 66.508172815940711, 66.418057824474573, 66.337032562786902, 66.984579033959989, 65.100832264671567],
      "text": ["Value added - services: 64.59 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 64.44 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 64.81 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 64.26 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 64.13 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 64.75 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.68 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.33 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.21 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.48 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.73 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 67.14 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 67.03 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.72 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.51 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.42 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.34 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 66.98 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - services: 65.1 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [66.590000000000003, 66.709999999999994, 66.319999999999993, 65.909999999999997, 66.260000000000005, 66.219999999999999, 67.950000000000003, 68.370000000000005, 68.450000000000003, 68.730000000000004, 69.069999999999993, 69.909999999999997, 70.060000000000002, 70.219999999999999, 70.069999999999993, 70.029999999999987, 69.969999999999999, 69.63000000000001, 69.409999999999997],
      "text": ["Value added - services: 66.59 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 66.71 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 66.32 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 65.91 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 66.26 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 66.22 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 67.95 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 68.37 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 68.45 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 68.73 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 69.07 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 69.91 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 70.06 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 70.22 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 70.07 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 70.03 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 69.97 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 69.63 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - services: 69.41 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [65.622827774305748, 65.562541857734061, 66.21513529015354, 66.570289703051429, 66.41867040084756, 67.391984807417842, 68.557183536155847, 68.160171168017939, 68.45755053622554, 68.973102572479277, 69.243122159913113, 69.587924016198031, 69.73497661223594, 69.855345334461006, 69.846485982451327, 70.136161776099101, 69.843072838251203, 70.051521629961584, 69.350738642130835],
      "text": ["Value added - services: 65.62 % (GDP)<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 65.56 % (GDP)<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 66.22 % (GDP)<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 66.57 % (GDP)<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 66.42 % (GDP)<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 67.39 % (GDP)<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 68.56 % (GDP)<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 68.16 % (GDP)<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 68.46 % (GDP)<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 68.97 % (GDP)<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 69.24 % (GDP)<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 69.59 % (GDP)<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 69.73 % (GDP)<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 69.86 % (GDP)<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 69.85 % (GDP)<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 70.14 % (GDP)<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 69.84 % (GDP)<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 70.05 % (GDP)<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - services: 69.35 % (GDP)<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [64.464821800755558, 65.703717183707099, 67.580716788380045, 65.557098668464363, 67.084420984512491, 69.574406812893926, 71.180130712940681, 70.450615562360738, 70.509349624924255, 70.427214602493208, 70.784937818469928, 71.110698347160053, 70.550102194406563, 69.726094118387437, 70.127913525191289, 69.808630498852068, 69.846092609807599, 69.124183201750952, 68.712984958754944],
      "text": ["Value added - services: 64.46 % (GDP)<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 65.7 % (GDP)<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 67.58 % (GDP)<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 65.56 % (GDP)<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 67.08 % (GDP)<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 69.57 % (GDP)<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 71.18 % (GDP)<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 70.45 % (GDP)<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 70.51 % (GDP)<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 70.43 % (GDP)<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 70.78 % (GDP)<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 71.11 % (GDP)<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 70.55 % (GDP)<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 69.73 % (GDP)<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 70.13 % (GDP)<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 69.81 % (GDP)<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 69.85 % (GDP)<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 69.12 % (GDP)<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - services: 68.71 % (GDP)<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Value added - services (REMIND_39)",
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
    "b55c3aed5e59": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c28ab7b07": {
      "y": {}
    }
  },
  "cur_data": "b55c3aed5e59",
  "visdat": {
    "b55c3aed5e59": ["function (y) ", "x"],
    "b55c28ab7b07": ["function (y) ", "x"]
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

  
