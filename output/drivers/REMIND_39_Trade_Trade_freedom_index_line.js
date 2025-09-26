(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Trade_Trade_freedom_index_line') 

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
      "y": [82.842213890557531, 84.757355161501607, 82.84033176110708, 81.880498336071724, 86.895047129348214, 86.933953514765605, 85.140058893030343, 89.922229590711396, 89.922829063960052, 89.923220728555123, 89.923370319904137, 89.923447873757937, 89.923517216226884, 89.923297486203893, 89.922247900591429, 89.96039199595387, 87.012890992451204, 87.012904583397784, 86.058055463168614],
      "text": ["Trade freedom index: 82.84 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 84.76 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 82.84 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 81.88 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 86.9 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 86.93 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 85.14 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 89.92 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 89.92 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 89.92 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 89.92 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 89.92 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 89.92 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 89.92 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 89.92 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 89.96 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 87.01 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 87.01 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Trade freedom index: 86.06 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [62.830601993479242, 63.841599124655666, 64.912863743724699, 68.822426891850242, 70.940469464400223, 71.110133669147061, 73.942744325570061, 75.139791664076284, 75.689224032631657, 73.810310367919982, 73.776243937721816, 75.641111077603227, 76.6355032349787, 76.307602709017615, 76.19844957619982, 76.602680573479049, 74.600274235258723, 75.117850610216266, 70.600507175101583],
      "text": ["Trade freedom index: 62.83 index (0-100)<br>Period: 2003<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 63.84 index (0-100)<br>Period: 2004<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 64.91 index (0-100)<br>Period: 2005<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 68.82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 70.94 index (0-100)<br>Period: 2007<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 71.11 index (0-100)<br>Period: 2008<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 73.94 index (0-100)<br>Period: 2009<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 75.14 index (0-100)<br>Period: 2010<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 75.69 index (0-100)<br>Period: 2011<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 73.81 index (0-100)<br>Period: 2012<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 73.78 index (0-100)<br>Period: 2013<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 75.64 index (0-100)<br>Period: 2014<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 76.64 index (0-100)<br>Period: 2015<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 76.31 index (0-100)<br>Period: 2016<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 76.2 index (0-100)<br>Period: 2017<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 76.6 index (0-100)<br>Period: 2018<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 74.6 index (0-100)<br>Period: 2019<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 75.12 index (0-100)<br>Period: 2020<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Trade freedom index: 70.6 index (0-100)<br>Period: 2021<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [83, 83.000000000000014, 83, 83, 88, 87, 88, 88, 88.000000000000014, 88, 88, 87.999999999999986, 88, 86.999999999999986, 88, 88, 87, 87, 89],
      "text": ["Trade freedom index: 83 index (0-100)<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 83 index (0-100)<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 83 index (0-100)<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 83 index (0-100)<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 87 index (0-100)<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 87 index (0-100)<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 88 index (0-100)<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 87 index (0-100)<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 87 index (0-100)<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Trade freedom index: 89 index (0-100)<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [51.458354995935089, 52.423859794269376, 52.252582754161367, 54.135502832127116, 60.160640319264957, 64.11072630885532, 64.76194566481486, 69.247705825499978, 69.969110032877467, 70.111310331242223, 68.725262293625747, 64.956621598158051, 66.787582753699752, 66.396843285066296, 66.817713149225824, 67.545921101996328, 66.124193558121689, 65.60937205122822, 61.650969546138917],
      "text": ["Trade freedom index: 51.46 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Trade freedom index: 52.42 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Trade freedom index: 52.25 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 54.14 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 60.16 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 64.11 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 64.76 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 69.25 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 69.97 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 70.11 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 68.73 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 64.96 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 66.79 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 66.4 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 66.82 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 67.55 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 66.12 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 65.61 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Trade freedom index: 61.65 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [77.508689527509276, 77.5104543464535, 77.340053542865334, 77.33968606176181, 83.999999999999986, 83.499072177751259, 84.999999999999986, 85.164893594039057, 84.492096449108047, 86.162396792603488, 86.161105163797501, 86.161334513083403, 86.162143875937929, 86.163075602895589, 86.163679833866439, 86.164084592729282, 88.656963030326409, 88.662314473032424, 90],
      "text": ["Trade freedom index: 77.51 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 77.51 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 77.34 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 77.34 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 84 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 83.5 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 85 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 85.16 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 84.49 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 86.16 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 86.16 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 86.16 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 86.16 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 86.16 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 86.16 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 86.16 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 88.66 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 88.66 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Trade freedom index: 90 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [81, 81.999999999999986, 75, 57, 78, 79, 80, 82.000000000000014, 81, 73, 81.000000000000014, 86, 86.000000000000014, 79, 80, 88, 81, 88.000000000000014, 81.999999999999986],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 82 index (0-100)<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 75 index (0-100)<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 57 index (0-100)<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 78 index (0-100)<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 79 index (0-100)<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 80 index (0-100)<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 82 index (0-100)<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 81 index (0-100)<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 73 index (0-100)<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 81 index (0-100)<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 86 index (0-100)<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 86 index (0-100)<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 79 index (0-100)<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 80 index (0-100)<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 88 index (0-100)<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 81 index (0-100)<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 88 index (0-100)<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Trade freedom index: 82 index (0-100)<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [82.999999999999986, 82.000000000000014, 84.000000000000014, 84, 89, 86.000000000000014, 88.999999999999986, 89, 89, 89, 89, 89, 89, 88, 88.000000000000014, 88, 83, 84, 84],
      "text": ["Trade freedom index: 83 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 82 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 84 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 84 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 89 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 88 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 88 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 83 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 84 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [59.000000000000007, 63, 65, 69, 70, 71, 72, 69, 70, 70, 70, 69, 70, 69, 69, 69, 69, 68.000000000000014, 65],
      "text": ["Trade freedom index: 59 index (0-100)<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 63 index (0-100)<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 65 index (0-100)<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 71 index (0-100)<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 72 index (0-100)<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 70 index (0-100)<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 69 index (0-100)<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 68 index (0-100)<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Trade freedom index: 65 index (0-100)<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [72.599153142675419, 72.065642351212418, 73.425455878701015, 75.118949373177074, 76.675083196676681, 80.207870768688167, 82.199566697366777, 82.192515706995096, 83.548612323275563, 83.236670905551023, 83.293636395721748, 84.873391785694992, 85.022252840989808, 84.783724677326759, 85.027404054777975, 82.942072757135776, 77.345336703411135, 81.188754885674129, 78.681999642683095],
      "text": ["Trade freedom index: 72.6 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 72.07 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 73.43 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 75.12 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 76.68 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 80.21 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 82.2 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Trade freedom index: 82.19 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Trade freedom index: 83.55 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 83.24 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 83.29 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 84.87 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 85.02 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 84.78 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 85.03 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 82.94 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 77.35 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 81.19 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Trade freedom index: 78.68 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [73, 67, 74, 65, 69, 66, 70, 71, 71, 72.999999999999986, 73, 73, 73.000000000000014, 75, 80, 80, 80, 80, 79],
      "text": ["Trade freedom index: 73 index (0-100)<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 67 index (0-100)<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 74 index (0-100)<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 65 index (0-100)<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 69 index (0-100)<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 66 index (0-100)<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 70 index (0-100)<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 71 index (0-100)<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 71 index (0-100)<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 73 index (0-100)<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 73 index (0-100)<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 73 index (0-100)<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 73 index (0-100)<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 75 index (0-100)<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 80 index (0-100)<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 80 index (0-100)<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 80 index (0-100)<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Trade freedom index: 79 index (0-100)<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [54.441570358058975, 54.042402379415456, 70.847460685510455, 70.858699311739358, 72.009198552775047, 73.40686989079218, 75.099079567141956, 75.474162712721011, 74.391439710782691, 74.197708876595513, 74.319108027312495, 73.69928188433552, 75.644755160224079, 72.710145610852379, 73.787363150601635, 71.794102519353174, 72.204934484753977, 74.42589199366769, 66.714452518555788],
      "text": ["Trade freedom index: 54.44 index (0-100)<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 54.04 index (0-100)<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 70.85 index (0-100)<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 70.86 index (0-100)<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 72.01 index (0-100)<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Trade freedom index: 73.41 index (0-100)<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 75.1 index (0-100)<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 75.47 index (0-100)<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 74.39 index (0-100)<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 74.2 index (0-100)<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 74.32 index (0-100)<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 73.7 index (0-100)<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Trade freedom index: 75.64 index (0-100)<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 72.71 index (0-100)<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 73.79 index (0-100)<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 71.79 index (0-100)<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 72.2 index (0-100)<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 74.43 index (0-100)<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Trade freedom index: 66.71 index (0-100)<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [56.999999999999993, 62.999999999999993, 63.000000000000007, 63, 62.999999999999993, 44, 61, 68, 68.000000000000014, 68, 77, 75, 75, 72, 75, 79.000000000000014, 78, 78, 74],
      "text": ["Trade freedom index: 57 index (0-100)<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 63 index (0-100)<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 63 index (0-100)<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 63 index (0-100)<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 63 index (0-100)<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 44 index (0-100)<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 61 index (0-100)<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 68 index (0-100)<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 68 index (0-100)<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 68 index (0-100)<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 77 index (0-100)<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 75 index (0-100)<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 75 index (0-100)<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 72 index (0-100)<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 75 index (0-100)<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 79 index (0-100)<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 78 index (0-100)<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 78 index (0-100)<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Trade freedom index: 74 index (0-100)<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [65.948039918253883, 67.409640538693395, 67.928159506149512, 69.830556223271401, 70.630322078878265, 71.766779317076399, 72.841238177151453, 73.819528098684302, 74.349895558577956, 76.329200736975181, 76.109860390841604, 75.982794864528273, 75.994892240688415, 77.758941534061051, 79.331048845739858, 79.508633138319155, 78.153613809274432, 78.916771597809046, 74.803207674227579],
      "text": ["Trade freedom index: 65.95 index (0-100)<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 67.41 index (0-100)<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 67.93 index (0-100)<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 69.83 index (0-100)<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 70.63 index (0-100)<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 71.77 index (0-100)<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 72.84 index (0-100)<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 73.82 index (0-100)<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 74.35 index (0-100)<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 76.33 index (0-100)<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 76.11 index (0-100)<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 75.98 index (0-100)<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 75.99 index (0-100)<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 77.76 index (0-100)<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 79.33 index (0-100)<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 79.51 index (0-100)<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 78.15 index (0-100)<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 78.92 index (0-100)<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Trade freedom index: 74.8 index (0-100)<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [75, 74.000000000000014, 77, 75, 74, 73, 76.000000000000014, 77.999999999999986, 74, 74, 75, 75, 75, 80, 81, 81, 80, 81, 78.999999999999986],
      "text": ["Trade freedom index: 75 index (0-100)<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 74 index (0-100)<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 77 index (0-100)<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 75 index (0-100)<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 74 index (0-100)<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 73 index (0-100)<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 76 index (0-100)<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 78 index (0-100)<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 74 index (0-100)<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 74 index (0-100)<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 75 index (0-100)<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 75 index (0-100)<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 75 index (0-100)<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 80 index (0-100)<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 81 index (0-100)<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 81 index (0-100)<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 80 index (0-100)<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 81 index (0-100)<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Trade freedom index: 79 index (0-100)<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [43.460049927917773, 49.206031183366967, 47.590730905171277, 54.837011234097552, 56.728072160207965, 56.261157118386521, 55.962410668908142, 63.009105137277324, 63.174372299562599, 61.297212895927508, 61.256769821064445, 62.606482061013516, 63.176834971851981, 64.141564671636985, 65.889752818935818, 64.282020801225272, 64.441555273674382, 64.444205766491109, 64.161578964530918],
      "text": ["Trade freedom index: 43.46 index (0-100)<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Trade freedom index: 49.21 index (0-100)<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Trade freedom index: 47.59 index (0-100)<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Trade freedom index: 54.84 index (0-100)<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Trade freedom index: 56.73 index (0-100)<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Trade freedom index: 56.26 index (0-100)<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Trade freedom index: 55.96 index (0-100)<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 63.01 index (0-100)<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 63.17 index (0-100)<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 61.3 index (0-100)<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 61.26 index (0-100)<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 62.61 index (0-100)<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 63.18 index (0-100)<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 64.14 index (0-100)<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 65.89 index (0-100)<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 64.28 index (0-100)<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 64.44 index (0-100)<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 64.44 index (0-100)<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Trade freedom index: 64.16 index (0-100)<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [81, 81, 81, 80, 80, 80, 82, 82, 83, 82, 82, 82, 83.000000000000014, 83, 83, 82, 79.999999999999986, 79.999999999999986, 80],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 81 index (0-100)<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 81 index (0-100)<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 83 index (0-100)<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 83 index (0-100)<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 83 index (0-100)<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 83 index (0-100)<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 82 index (0-100)<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Trade freedom index: 80 index (0-100)<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [74, 74, 76, 81, 81, 87, 87, 86, 85, 85, 85, 85, 85, 84, 78.999999999999986, 79, 80, 77.999999999999986, 76],
      "text": ["Trade freedom index: 74 index (0-100)<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 74 index (0-100)<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 76 index (0-100)<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 81 index (0-100)<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 81 index (0-100)<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 87 index (0-100)<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 87 index (0-100)<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 86 index (0-100)<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 85 index (0-100)<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 84 index (0-100)<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 79 index (0-100)<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 79 index (0-100)<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 80 index (0-100)<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 78 index (0-100)<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Trade freedom index: 76 index (0-100)<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [65.189335274455246, 63.80604443003574, 72.079555665363159, 72.360041110849892, 83.004142131161387, 86.194132408040659, 86.194895271396632, 87.831866629634092, 88.000000000000014, 87.097710801560268, 87.097475479020574, 87.902882333787446, 87.903564630877653, 87.904081068159044, 87.000000000000014, 87, 86, 86.000000000000028, 84],
      "text": ["Trade freedom index: 65.19 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 63.81 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 72.08 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 72.36 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 83 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 86.19 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 86.19 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.83 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.1 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.1 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.9 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.9 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87.9 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [81, 80, 80, 82.000000000000014, 87, 86, 86, 88, 87.999999999999986, 87, 87, 88, 87.999999999999986, 87.999999999999986, 87, 86.999999999999986, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [73, 78.999999999999986, 79, 54.999999999999993, 55, 56.999999999999993, 57, 50, 45, 46.000000000000007, 46.000000000000007, 41, 41.000000000000007, 55, 54.999999999999993, 55, 55.000000000000007, 55.000000000000007, 54],
      "text": ["Trade freedom index: 73 index (0-100)<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 79 index (0-100)<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 79 index (0-100)<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 57 index (0-100)<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 57 index (0-100)<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 50 index (0-100)<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 45 index (0-100)<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 46 index (0-100)<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 46 index (0-100)<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 41 index (0-100)<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 41 index (0-100)<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 55 index (0-100)<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Trade freedom index: 54 index (0-100)<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [22.999999999999996, 24, 38, 24, 51, 51, 50.999999999999993, 68, 64, 64, 64, 66, 65, 71, 72.999999999999986, 72, 72, 73, 69],
      "text": ["Trade freedom index: 23 index (0-100)<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 24 index (0-100)<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 38 index (0-100)<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 24 index (0-100)<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 51 index (0-100)<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 51 index (0-100)<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 51 index (0-100)<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 68 index (0-100)<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 64 index (0-100)<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 64 index (0-100)<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 64 index (0-100)<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 66 index (0-100)<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 65 index (0-100)<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 71 index (0-100)<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 73 index (0-100)<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 72 index (0-100)<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 72 index (0-100)<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 73 index (0-100)<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Trade freedom index: 69 index (0-100)<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "y": [81, 81, 80, 81, 86.999999999999986, 87, 87, 87.000000000000014, 86, 86, 86, 87, 87, 87.000000000000014, 87, 87, 87, 80, 80],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 81 index (0-100)<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 81 index (0-100)<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 86 index (0-100)<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 86 index (0-100)<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 86 index (0-100)<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 87 index (0-100)<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Trade freedom index: 80 index (0-100)<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [70.000000000000014, 70, 79, 82, 87, 85.999999999999986, 86, 88, 88, 87, 87, 88, 88.000000000000014, 88, 87, 86.999999999999986, 86, 86, 84],
      "text": ["Trade freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 79 index (0-100)<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [54.582163346798161, 57.549932062102378, 58.89818508898589, 60.130258671025601, 65.529219622352471, 65.594017472709425, 66.506331583733427, 66.256370450027561, 67.914376418369045, 67.255879500976647, 67.087284582473927, 67.892603653087036, 66.593662457872597, 66.989055353492375, 66.864565188766093, 67.610519694299128, 64.988853950424641, 65.092519068481636, 64.524362413388673],
      "text": ["Trade freedom index: 54.58 index (0-100)<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 57.55 index (0-100)<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 58.9 index (0-100)<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 60.13 index (0-100)<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 65.53 index (0-100)<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 65.59 index (0-100)<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 66.51 index (0-100)<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 66.26 index (0-100)<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.91 index (0-100)<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.26 index (0-100)<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.09 index (0-100)<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.89 index (0-100)<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 66.59 index (0-100)<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 66.99 index (0-100)<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 66.86 index (0-100)<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 67.61 index (0-100)<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 64.99 index (0-100)<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 65.09 index (0-100)<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Trade freedom index: 64.52 index (0-100)<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [68, 62, 78.000000000000014, 78, 74, 74, 75, 76, 77, 76, 76, 76, 77.000000000000014, 77.000000000000014, 76.999999999999986, 72, 76, 76.000000000000014, 72.999999999999986],
      "text": ["Trade freedom index: 68 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 62 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 78 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 78 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 74 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 74 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 75 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 77 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 77 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 77 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 77 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 72 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 76 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Trade freedom index: 73 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [81, 80, 80, 82, 87, 86, 86.000000000000014, 88, 88, 87, 87.000000000000014, 88, 88.000000000000014, 88, 87, 87.000000000000014, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "y": [75.778385081042302, 75.413127774217813, 77.85870922939317, 81.999999999999986, 87.000000000000014, 86, 86, 88, 88.000000000000014, 87.000000000000014, 87, 87.999999999999986, 88, 87.999999999999986, 87, 87, 86, 86.000000000000014, 83.999999999999986],
      "text": ["Trade freedom index: 75.78 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 75.41 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 77.86 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [81, 80, 80, 82, 87, 86, 86, 88, 88, 87, 87, 87.999999999999986, 88, 88, 87, 87, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [64, 64, 62, 70, 70, 77, 82, 83, 82, 82, 77, 74, 76, 77.999999999999986, 78, 78, 76, 75, 76],
      "text": ["Trade freedom index: 64 index (0-100)<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 64 index (0-100)<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 62 index (0-100)<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 70 index (0-100)<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 70 index (0-100)<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 77 index (0-100)<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 82 index (0-100)<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 82 index (0-100)<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 77 index (0-100)<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 74 index (0-100)<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 76 index (0-100)<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 78 index (0-100)<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 78 index (0-100)<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 78 index (0-100)<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 76 index (0-100)<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 75 index (0-100)<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Trade freedom index: 76 index (0-100)<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [81, 80, 80, 81.999999999999986, 84.259726681753207, 86, 86, 87.999999999999972, 88.000000000000014, 87.000000000000014, 87.000000000000014, 88, 88, 88, 87, 87.000000000000014, 86, 86, 84.000000000000014],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 84.26 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [81, 79.999999999999986, 80, 81.999999999999986, 82.000000000000014, 81, 81, 83, 83, 82, 82, 82.999999999999986, 82.999999999999986, 82.999999999999986, 82, 82, 80.999999999999972, 80.999999999999986, 83.999999999999986],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 81 index (0-100)<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 81 index (0-100)<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 83 index (0-100)<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 82 index (0-100)<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 81 index (0-100)<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 81 index (0-100)<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [80.997098425484751, 79.997214400019828, 79.99792510189252, 81.997155651735937, 86.998248235435781, 85.998310246091577, 85.998322981832217, 87.99904918696096, 87.998867898504216, 86.998922574383897, 86.998929751120357, 87.998983775334224, 87.998945938692614, 87.99922677113608, 86.999367523530481, 86.999326436416425, 85.999374877040552, 85.999421652442777, 83.999332146651938],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [81, 80, 80, 82, 87, 86, 86, 88, 88, 86.999999999999986, 87, 87.999999999999986, 88.000000000000014, 88, 87, 87, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "y": [51.657911019467321, 51.675160232702375, 54.606860638609184, 68.359426872498418, 68.385230209447428, 70.424845718236625, 71.367252889044764, 72.335634154870831, 72.33521211770406, 72.318354899263937, 72.317833796086603, 72.33442056934399, 72.334431643313494, 73.311787419493953, 74.28898356959121, 73.311122704303287, 73.353882886458194, 72.358883693599239, 71.37995893240813],
      "text": ["Trade freedom index: 51.66 index (0-100)<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 51.68 index (0-100)<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 54.61 index (0-100)<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 68.36 index (0-100)<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 68.39 index (0-100)<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 70.42 index (0-100)<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 71.37 index (0-100)<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.34 index (0-100)<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.34 index (0-100)<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.32 index (0-100)<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.32 index (0-100)<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.33 index (0-100)<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.33 index (0-100)<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 73.31 index (0-100)<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 74.29 index (0-100)<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 73.31 index (0-100)<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 73.35 index (0-100)<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 72.36 index (0-100)<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Trade freedom index: 71.38 index (0-100)<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [53.357373195276317, 55.260008631461574, 52.849981542605789, 63.847440174634265, 67.880717240523822, 68.621099123536879, 72.61942491030058, 73.048540012576993, 77.911792193289983, 79.787085868303848, 79.443459420023004, 78.039017473660408, 76.18235306864068, 74.426983127811638, 75.55482749857191, 74.865378329113568, 71.62786867780612, 71.415798918902439, 67.712253439284439],
      "text": ["Trade freedom index: 53.36 index (0-100)<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Trade freedom index: 55.26 index (0-100)<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Trade freedom index: 52.85 index (0-100)<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Trade freedom index: 63.85 index (0-100)<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 67.88 index (0-100)<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 68.62 index (0-100)<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Trade freedom index: 72.62 index (0-100)<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Trade freedom index: 73.05 index (0-100)<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Trade freedom index: 77.91 index (0-100)<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Trade freedom index: 79.79 index (0-100)<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 79.44 index (0-100)<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 78.04 index (0-100)<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 76.18 index (0-100)<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 74.43 index (0-100)<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Trade freedom index: 75.55 index (0-100)<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Trade freedom index: 74.87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Trade freedom index: 71.63 index (0-100)<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 71.42 index (0-100)<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Trade freedom index: 67.71 index (0-100)<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [80.889497231804569, 79.89637850178687, 79.972327493873138, 82, 82.034558906024259, 81.034554851761882, 81.034657364990665, 88, 88, 86.999999999999986, 87.000000000000014, 87.999999999999986, 87.999999999999986, 87.999999999999986, 87.000000000000014, 87, 86.000000000000014, 86, 83.999999999999986],
      "text": ["Trade freedom index: 80.89 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 79.9 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 79.97 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 82.03 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 81.03 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 81.03 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [81, 80, 80, 82, 87, 86, 86, 88, 87.999999999999986, 87, 87, 88, 88, 88, 87, 87, 86, 86, 83.999999999999986],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [81, 80, 79.999999999999986, 81.999999999999986, 87, 86.000000000000014, 86, 88, 88, 87, 87, 88.000000000000014, 88, 88, 87.000000000000014, 86.999999999999986, 86, 86, 84],
      "text": ["Trade freedom index: 81 index (0-100)<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 80 index (0-100)<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 80 index (0-100)<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 86 index (0-100)<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 88 index (0-100)<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 87 index (0-100)<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 86 index (0-100)<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [80.832391265344583, 79.914985914994176, 79.482935576391654, 82, 82, 81.000000000000014, 81.000000000000014, 83, 83, 82, 82, 83, 83.506421513929993, 83.51490196146986, 82.522224916508137, 82.529314117684009, 81.53574445841538, 81.542564665857725, 84],
      "text": ["Trade freedom index: 80.83 index (0-100)<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 79.91 index (0-100)<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 79.48 index (0-100)<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82 index (0-100)<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 81 index (0-100)<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 81 index (0-100)<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83 index (0-100)<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82 index (0-100)<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83 index (0-100)<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83.51 index (0-100)<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 83.51 index (0-100)<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82.52 index (0-100)<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 82.53 index (0-100)<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 81.54 index (0-100)<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 81.54 index (0-100)<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Trade freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Trade freedom index (REMIND_39)",
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
      "ticktext": ["20", "40", "60", "80", "100"],
      "tickvals": [20, 40, 60, 80, 100],
      "categoryorder": "array",
      "categoryarray": ["20", "40", "60", "80", "100"],
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
    "b55c682693c": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c6e7b5cb9": {
      "y": {}
    }
  },
  "cur_data": "b55c682693c",
  "visdat": {
    "b55c682693c": ["function (y) ", "x"],
    "b55c6e7b5cb9": ["function (y) ", "x"]
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

  
