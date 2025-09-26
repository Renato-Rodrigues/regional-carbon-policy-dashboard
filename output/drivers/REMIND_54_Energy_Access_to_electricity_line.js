(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Energy_Access_to_electricity_line') 

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
      "y": [96.299999999999997, 96.509999999999991, 96.730000000000004, 96.95999999999998, 97.219999999999999, 97.500000000000014, 97.790000000000006, 98.819999999999993, 99.030000000000001, 99.139999999999986, 99.289999999999992, 100, 99.689999999999998, 99.90000000000002, 100.00000000000001, 99.989999999999981, 100, 99.999999999999986, 100.00000000000001],
      "text": ["Access to electricity: 96.3 % (population)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 96.51 % (population)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 96.73 % (population)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 96.96 % (population)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 97.22 % (population)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 97.5 % (population)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 97.79 % (population)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 98.82 % (population)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 99.03 % (population)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 99.14 % (population)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 99.29 % (population)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 99.69 % (population)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 99.9 % (population)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 99.99 % (population)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [100, 100, 99.999999999999986, 100, 99.999999999999986, 100, 100, 100, 100, 100, 100, 100, 100, 99.999999999999986, 100.00000000000001, 100.00000000000001, 100, 99.999999999999986, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [81.711620314721415, 82.867986360734477, 82.936806316277554, 84.922026505683618, 85.955629857485462, 87.17133277988755, 87.812201700695496, 88.741900524811101, 89.128853321334503, 90.041686498556714, 90.7669469959515, 91.028228231881869, 91.995891763804067, 92.21525668491951, 92.556724464837316, 93.127327318862555, 93.537363193692883, 94.258798092705192, 94.417711324801147],
      "text": ["Access to electricity: 81.71 % (population)<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 82.87 % (population)<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 82.94 % (population)<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 84.92 % (population)<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 85.96 % (population)<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 87.17 % (population)<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 87.81 % (population)<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 88.74 % (population)<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 89.13 % (population)<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 90.04 % (population)<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 90.77 % (population)<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 91.03 % (population)<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 92 % (population)<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 92.22 % (population)<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 92.56 % (population)<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 93.13 % (population)<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 93.54 % (population)<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 94.26 % (population)<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Access to electricity: 94.42 % (population)<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [98.799999999999997, 97.840000000000003, 99.400000000000006, 99.040000000000006, 98.430000000000021, 99.800000000000011, 98.920000000000002, 99.359999999999999, 99.439999999999984, 99.700000000000003, 99.879999999999995, 99.799999999999997, 99.299999999999983, 100, 100, 99.999999999999986, 100, 100, 100.00000000000001],
      "text": ["Access to electricity: 98.8 % (population)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 97.84 % (population)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 99.4 % (population)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 99.04 % (population)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 98.43 % (population)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 99.8 % (population)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 98.92 % (population)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 99.36 % (population)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 99.44 % (population)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 99.7 % (population)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 99.88 % (population)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 99.8 % (population)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 99.3 % (population)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [100.00000000000001, 100, 100, 100.00000000000001, 99.999999999999986, 100, 100, 100.00000000000001, 100, 100.00000000000001, 100, 100, 100, 99.999999999999986, 100, 100, 100, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [99.999999999999986, 99.999999999999986, 99.999999999999986, 99.999999999999986, 99.999999999999986, 99.999999999999972, 99.999999999999986, 100, 100, 100.00000000000001, 99.999999999999986, 100.00000000000001, 100, 99.999999999999986, 100, 100.00000000000001, 100, 99.999999999999986, 100.00000000000001],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [97.359999999999999, 98.59999999999998, 98.930000000000007, 99.110000000000014, 97.909999999999997, 98.909999999999982, 98.299999999999983, 99.240000000000009, 99, 99.109999999999999, 99.150000000000006, 99.170000000000002, 99, 99.5, 99.999999999999986, 99.499999999999986, 99.599999999999994, 99.400000000000006, 99.999999999999986],
      "text": ["Access to electricity: 97.36 % (population)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 98.6 % (population)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 98.93 % (population)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99.11 % (population)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 97.91 % (population)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 98.91 % (population)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 98.3 % (population)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99.24 % (population)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99 % (population)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99.11 % (population)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99.15 % (population)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99.17 % (population)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99 % (population)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99.5 % (population)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99.5 % (population)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99.6 % (population)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 99.4 % (population)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [100, 100.00000000000001, 100, 99.999999999999986, 100, 100.00000000000001, 100, 100.00000000000001, 100, 100, 100.00000000000001, 100.00000000000001, 100.00000000000001, 100.00000000000001, 100.00000000000001, 100, 100, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [96.980000000000004, 96.769999999999996, 97.090000000000003, 97.590000000000003, 98.129999999999995, 98.529999999999987, 98.860000000000014, 98.59999999999998, 99.330000000000013, 99.519999999999982, 99.579999999999998, 99.650000000000006, 99.709999999999994, 99.700000000000003, 99.799999999999983, 99.700000000000017, 99.799999999999997, 99.700000000000003, 99.45999999999998],
      "text": ["Access to electricity: 96.98 % (population)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 96.77 % (population)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 97.09 % (population)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 97.59 % (population)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 98.13 % (population)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 98.53 % (population)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 98.86 % (population)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 98.6 % (population)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.33 % (population)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.52 % (population)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.58 % (population)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.65 % (population)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.71 % (population)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.7 % (population)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.8 % (population)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.7 % (population)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.8 % (population)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.7 % (population)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Access to electricity: 99.46 % (population)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [99.354253892649709, 99.412702372158762, 99.621467262811038, 99.51237953576161, 99.706448594764865, 99.708561206170728, 99.776609952795354, 99.853546231472563, 99.900343905791289, 99.83457270120482, 99.935147350477564, 99.915607230344733, 99.958649498310422, 99.982394080673217, 99.994402121401023, 99.987519296973517, 99.97429409135276, 99.998639294748315, 99.998175744106604],
      "text": ["Access to electricity: 99.35 % (population)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.41 % (population)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.62 % (population)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.51 % (population)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.71 % (population)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.71 % (population)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.78 % (population)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Access to electricity: 99.85 % (population)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Access to electricity: 99.9 % (population)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.83 % (population)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.94 % (population)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.92 % (population)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.96 % (population)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.98 % (population)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.99 % (population)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.99 % (population)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 99.97 % (population)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [100, 100, 100.00000000000001, 100.00000000000001, 100, 100, 100, 100, 100.00000000000001, 99.999999999999986, 100, 99.999999999999986, 100.00000000000001, 100, 100, 100.00000000000001, 100, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [76.59999999999998, 87.599999999999994, 79.829999999999998, 80.180000000000007, 81.959999999999994, 83.300000000000011, 84.299999999999997, 85.480000000000004, 87.200000000000017, 87.079999999999998, 87.5, 89.760000000000019, 89.079999999999998, 91.980000000000018, 93, 94.189999999999998, 95.290000000000006, 96.390000000000015, 97.489999999999995],
      "text": ["Access to electricity: 76.6 % (population)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 87.6 % (population)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 79.83 % (population)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 80.18 % (population)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 81.96 % (population)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 83.3 % (population)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 84.3 % (population)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 85.48 % (population)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 87.2 % (population)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 87.08 % (population)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 87.5 % (population)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 89.76 % (population)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 89.08 % (population)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 91.98 % (population)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 93 % (population)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 94.19 % (population)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 95.29 % (population)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 96.39 % (population)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Access to electricity: 97.49 % (population)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [81.422351956634103, 81.379907764841818, 81.832993605136323, 81.652313582100476, 81.849263923537137, 82.056113235053033, 82.306561424274463, 83.165433783433798, 83.568783956597727, 84.624200849505144, 85.152463336993165, 85.960535709034104, 86.503338796827407, 87.329754884998323, 88.019857666909346, 88.72309401415589, 89.32638717353251, 89.870584359686632, 90.358366350929231],
      "text": ["Access to electricity: 81.42 % (population)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Access to electricity: 81.38 % (population)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Access to electricity: 81.83 % (population)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Access to electricity: 81.65 % (population)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Access to electricity: 81.85 % (population)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Access to electricity: 82.06 % (population)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Access to electricity: 82.31 % (population)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Access to electricity: 83.17 % (population)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Access to electricity: 83.57 % (population)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Access to electricity: 84.62 % (population)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Access to electricity: 85.15 % (population)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Access to electricity: 85.96 % (population)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Access to electricity: 86.5 % (population)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Access to electricity: 87.33 % (population)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Access to electricity: 88.02 % (population)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Access to electricity: 88.72 % (population)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Access to electricity: 89.33 % (population)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Access to electricity: 89.87 % (population)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Access to electricity: 90.36 % (population)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [95.079999999999998, 95.280000000000001, 96.799999999999997, 95.730000000000004, 95.980000000000018, 96.810000000000016, 96.060000000000002, 96.789999999999992, 96.689999999999998, 97.030000000000001, 97.779999999999987, 97.790000000000006, 98.189999999999998, 98.400000000000006, 98.499999999999986, 98.5, 99.439999999999998, 99.719999999999999, 100],
      "text": ["Access to electricity: 95.08 % (population)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 95.28 % (population)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 96.8 % (population)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 95.73 % (population)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 95.98 % (population)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 96.81 % (population)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 96.06 % (population)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 96.79 % (population)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 96.69 % (population)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 97.03 % (population)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 97.78 % (population)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 97.79 % (population)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 98.19 % (population)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 98.4 % (population)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 98.5 % (population)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 98.5 % (population)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 99.44 % (population)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 99.72 % (population)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [22.495992105768913, 23.771058365467916, 24.336232273258112, 26.22985795372308, 27.4256144069623, 28.305133048877295, 27.618317513186632, 28.772167017681223, 31.137941070087699, 32.420892178492224, 33.301262675864962, 35.32937300055336, 36.586843141069693, 40.527153368430248, 41.809873518237588, 45.560489205376889, 46.857244503712408, 48.029121115893538, 49.978818365047545],
      "text": ["Access to electricity: 22.5 % (population)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 23.77 % (population)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 24.34 % (population)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 26.23 % (population)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 27.43 % (population)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 28.31 % (population)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 27.62 % (population)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 28.77 % (population)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 31.14 % (population)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 32.42 % (population)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 33.3 % (population)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 35.33 % (population)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 36.59 % (population)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 40.53 % (population)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 41.81 % (population)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 45.56 % (population)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 46.86 % (population)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 48.03 % (population)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Access to electricity: 49.98 % (population)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [97.930000000000007, 97.980000000000004, 98.030000000000001, 98.109999999999999, 98.209999999999994, 98.319999999999979, 98.449999999999989, 99.269999999999996, 99.209999999999994, 100, 100, 100, 95.5, 99.409999999999997, 100.00000000000001, 100, 99.780000000000001, 99.90000000000002, 99.999999999999986],
      "text": ["Access to electricity: 97.93 % (population)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 97.98 % (population)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 98.03 % (population)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 98.11 % (population)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 98.21 % (population)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 98.32 % (population)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 98.45 % (population)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 99.27 % (population)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 99.21 % (population)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 95.5 % (population)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 99.41 % (population)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 99.78 % (population)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 99.9 % (population)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [30.054784897798527, 31.109083263242745, 37.986785361382552, 42.781747901522358, 45.995764625521645, 49.47632265379297, 53.973364902368424, 55.653002041465477, 55.173774997727378, 72.233793541200313, 72.601411396745092, 87.442625519559201, 76.469828700587911, 94.632734920258898, 92.884748872259223, 93.715446233229926, 94.420063034525739, 94.442003601772925, 94.452757924799343],
      "text": ["Access to electricity: 30.05 % (population)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Access to electricity: 31.11 % (population)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Access to electricity: 37.99 % (population)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Access to electricity: 42.78 % (population)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Access to electricity: 46 % (population)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Access to electricity: 49.48 % (population)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Access to electricity: 53.97 % (population)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 55.65 % (population)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 55.17 % (population)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 72.23 % (population)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 72.6 % (population)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 87.44 % (population)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 76.47 % (population)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 94.63 % (population)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 92.88 % (population)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 93.72 % (population)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 94.42 % (population)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 94.44 % (population)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Access to electricity: 94.45 % (population)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [90.269999999999996, 90.950000000000003, 96.09999999999998, 96.000000000000014, 93.090000000000003, 93.839999999999989, 96.099999999999994, 97.429999999999993, 99.000000000000014, 97.890000000000001, 98.530000000000001, 99.200000000000017, 99.250000000000014, 99.200000000000003, 100, 100.00000000000001, 99.399999999999991, 99.799999999999997, 100],
      "text": ["Access to electricity: 90.27 % (population)<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 90.95 % (population)<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 96.1 % (population)<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 96 % (population)<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 93.09 % (population)<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 93.84 % (population)<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 96.1 % (population)<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 97.43 % (population)<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 99 % (population)<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 97.89 % (population)<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 98.53 % (population)<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 99.2 % (population)<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 99.25 % (population)<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 99.2 % (population)<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 99.4 % (population)<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 99.8 % (population)<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [75.949999999999989, 77.000000000000014, 78.060000000000002, 79.140000000000001, 80.22999999999999, 81.349999999999994, 82.480000000000004, 87.120000000000019, 87.840000000000003, 88.569999999999993, 89.329999999999998, 90.139999999999986, 90.980000000000004, 91.829999999999998, 92.659999999999997, 93.400000000000006, 93.900000000000006, 94.489999999999995, 94.920000000000002],
      "text": ["Access to electricity: 75.95 % (population)<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 77 % (population)<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 78.06 % (population)<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 79.14 % (population)<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 80.23 % (population)<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 81.35 % (population)<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 82.48 % (population)<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 87.12 % (population)<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 87.84 % (population)<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 88.57 % (population)<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 89.33 % (population)<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 90.14 % (population)<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 90.98 % (population)<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 91.83 % (population)<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 92.66 % (population)<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 93.4 % (population)<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 93.9 % (population)<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 94.49 % (population)<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Access to electricity: 94.92 % (population)<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [40.469999999999992, 40.600000000000001, 44.229999999999997, 50.530000000000001, 46.5, 54.270000000000003, 57.079999999999998, 55.259999999999991, 59.600000000000001, 65.549999999999997, 61.500000000000007, 62.400000000000006, 74, 75.920000000000002, 88.000000000000014, 86.920000000000002, 92.200000000000003, 96.199999999999989, 98.989999999999995],
      "text": ["Access to electricity: 40.47 % (population)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 40.6 % (population)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 44.23 % (population)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 50.53 % (population)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 46.5 % (population)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 54.27 % (population)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 57.08 % (population)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 55.26 % (population)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 59.6 % (population)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 65.55 % (population)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 61.5 % (population)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 62.4 % (population)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 74 % (population)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 75.92 % (population)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 88 % (population)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 86.92 % (population)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 92.2 % (population)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 96.2 % (population)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Access to electricity: 98.99 % (population)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [87.939999999999998, 89.010000000000019, 84.780000000000001, 90.620000000000005, 91.100000000000009, 92.730000000000004, 93.550000000000011, 94.149999999999991, 94.830000000000013, 96, 96.459999999999994, 97.010000000000005, 97.540000000000006, 97.620000000000019, 98.140000000000001, 98.510000000000005, 98.849999999999994, 96.950000000000003, 99.209999999999994],
      "text": ["Access to electricity: 87.94 % (population)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 89.01 % (population)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 84.78 % (population)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 90.62 % (population)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 91.1 % (population)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 92.73 % (population)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 93.55 % (population)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 94.15 % (population)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 94.83 % (population)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 96 % (population)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 96.46 % (population)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 97.01 % (population)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 97.54 % (population)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 97.62 % (population)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 98.14 % (population)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 98.51 % (population)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 98.85 % (population)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 96.95 % (population)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Access to electricity: 99.21 % (population)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [58.900806536623364, 59.351815434772462, 60.947398985066627, 62.695738936932969, 62.171362421564503, 64.389230214425424, 65.630088374284952, 65.268580998982969, 68.136824704374703, 69.361563657102479, 71.174594954369269, 70.767463655543764, 75.185999061832973, 74.275526994409958, 82.140643723983246, 80.033291704341536, 81.915684515754236, 82.790699694110089, 83.083852195119704],
      "text": ["Access to electricity: 58.9 % (population)<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 59.35 % (population)<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 60.95 % (population)<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 62.7 % (population)<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 62.17 % (population)<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 64.39 % (population)<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 65.63 % (population)<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 65.27 % (population)<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 68.14 % (population)<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 69.36 % (population)<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 71.17 % (population)<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 70.77 % (population)<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 75.19 % (population)<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 74.28 % (population)<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 82.14 % (population)<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 80.03 % (population)<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 81.92 % (population)<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 82.79 % (population)<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Access to electricity: 83.08 % (population)<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [91.579999999999998, 92.199999999999989, 92.830000000000013, 99.149999999999991, 94.140000000000001, 94.819999999999993, 98.960000000000008, 99.700000000000003, 99.319999999999993, 99.109999999999999, 99.399999999999991, 99.510000000000005, 99.599999999999994, 99.890000000000001, 99.900000000000006, 99.819999999999993, 99.900000000000006, 100.00000000000001, 100],
      "text": ["Access to electricity: 91.58 % (population)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 92.2 % (population)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 92.83 % (population)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.15 % (population)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 94.14 % (population)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 94.82 % (population)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 98.96 % (population)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.7 % (population)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.32 % (population)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.11 % (population)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.4 % (population)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.51 % (population)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.6 % (population)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.89 % (population)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.9 % (population)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.82 % (population)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 99.9 % (population)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [100.00000000000001, 100.00000000000001, 100, 100, 100, 100, 99.999999999999986, 100, 100, 100, 100.00000000000001, 100, 100, 100, 100, 100, 99.999999999999986, 100, 100.00000000000001],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [56.607904243333202, 57.116724829316226, 56.777805948395859, 60.319464581111305, 57.982272127118378, 55.993511644479774, 57.935068640067804, 61.44151736404995, 62.117639212193708, 61.926939781855111, 63.136053938517179, 63.498616929998569, 64.230150396034702, 64.857304881149659, 65.292032914722157, 66.635148428322012, 66.839814031435893, 67.706205776844072, 68.278898073561223],
      "text": ["Access to electricity: 56.61 % (population)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Access to electricity: 57.12 % (population)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Access to electricity: 56.78 % (population)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 60.32 % (population)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 57.98 % (population)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 55.99 % (population)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 57.94 % (population)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 61.44 % (population)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 62.12 % (population)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 61.93 % (population)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 63.14 % (population)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 63.5 % (population)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 64.23 % (population)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 64.86 % (population)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 65.29 % (population)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 66.64 % (population)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 66.84 % (population)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 67.71 % (population)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Access to electricity: 68.28 % (population)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [98.780000000000001, 97.530000000000001, 97.679999999999993, 99.370000000000005, 98.040000000000006, 98.250000000000014, 99.590000000000003, 99.530000000000001, 99.590000000000003, 100, 99.599999999999994, 100, 99.709999999999994, 100, 99.700000000000003, 100, 100, 100, 100],
      "text": ["Access to electricity: 98.78 % (population)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 97.53 % (population)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 97.68 % (population)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 99.37 % (population)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 98.04 % (population)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 98.25 % (population)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 99.59 % (population)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 99.53 % (population)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 99.59 % (population)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 99.6 % (population)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 99.71 % (population)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 99.7 % (population)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [99.760000000000005, 99.709999999999994, 99.680000000000007, 99.660000000000011, 99.670000000000002, 99.689999999999998, 99.720000000000013, 100, 100, 100, 100, 100, 100.00000000000001, 100, 100, 100, 100.00000000000001, 100, 100],
      "text": ["Access to electricity: 99.76 % (population)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 99.71 % (population)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 99.68 % (population)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 99.66 % (population)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 99.67 % (population)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 99.69 % (population)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 99.72 % (population)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [13.529999999999999, 15.19, 13.999999999999998, 18.559999999999999, 20.27, 21.999999999999996, 23.739999999999998, 25.5, 23, 29.020000000000003, 30.780000000000001, 27.199999999999999, 29, 42.899999999999999, 44.300000000000004, 44.840000000000003, 48.049999999999997, 51.140000000000001, 54.190000000000005],
      "text": ["Access to electricity: 13.53 % (population)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 15.19 % (population)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 14 % (population)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 18.56 % (population)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 20.27 % (population)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 22 % (population)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 23.74 % (population)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 25.5 % (population)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 23 % (population)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 29.02 % (population)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 30.78 % (population)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 27.2 % (population)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 29 % (population)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 42.9 % (population)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 44.3 % (population)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 44.84 % (population)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 48.05 % (population)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 51.14 % (population)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Access to electricity: 54.19 % (population)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [95.925703916243179, 96.118395031428548, 96.321186392706309, 96.533334849572029, 96.798730159052482, 97.061861086276707, 97.316215173441563, 97.573952095941806, 97.831391714645747, 98.084275518870641, 98.342471127882732, 98.597910996294942, 98.859049116797209, 99.143029969552757, 99.677462388472975, 99.70149535727883, 99.867621079399129, 99.950431240365589, 99.967010654282831],
      "text": ["Access to electricity: 95.93 % (population)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 96.12 % (population)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 96.32 % (population)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 96.53 % (population)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 96.8 % (population)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 97.06 % (population)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 97.32 % (population)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 97.57 % (population)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 97.83 % (population)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 98.08 % (population)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 98.34 % (population)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 98.6 % (population)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 98.86 % (population)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 99.14 % (population)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 99.68 % (population)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 99.7 % (population)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 99.87 % (population)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 99.95 % (population)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Access to electricity: 99.97 % (population)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [98.219999999999999, 98.310000000000002, 98.400000000000006, 98.400000000000006, 98.65000000000002, 98.810000000000002, 99.709999999999994, 99.430000000000007, 99.469999999999999, 99.530000000000015, 99.830000000000013, 100, 99.960000000000008, 99.949999999999989, 99.939999999999998, 100.00000000000001, 100.00000000000001, 100, 100],
      "text": ["Access to electricity: 98.22 % (population)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 98.31 % (population)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 98.4 % (population)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 98.4 % (population)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 98.65 % (population)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 98.81 % (population)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 99.71 % (population)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 99.43 % (population)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 99.47 % (population)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 99.53 % (population)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 99.83 % (population)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 99.96 % (population)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 99.95 % (population)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 99.94 % (population)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [65.409999999999982, 64.400000000000006, 68.840000000000003, 67.900000000000006, 72.340000000000003, 74.120000000000005, 75, 76.299999999999997, 79.519999999999996, 79.900000000000006, 83.129999999999995, 85.129999999999995, 88, 89.590000000000003, 91.789999999999992, 95.700000000000017, 95.890000000000001, 96.500000000000014, 99.569999999999979],
      "text": ["Access to electricity: 65.41 % (population)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 64.4 % (population)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 68.84 % (population)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 67.9 % (population)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 72.34 % (population)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 74.12 % (population)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 75 % (population)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 76.3 % (population)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 79.52 % (population)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 79.9 % (population)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 83.13 % (population)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 85.13 % (population)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 88 % (population)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 89.59 % (population)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 91.79 % (population)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 95.7 % (population)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 95.89 % (population)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 96.5 % (population)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Access to electricity: 99.57 % (population)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [100, 100, 100, 100, 100, 100, 99.999999999999986, 100.00000000000001, 100, 100, 100, 100, 100, 100.00000000000001, 100, 100, 100.00000000000001, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [8.3399999999999999, 8.9600000000000009, 6, 10.24, 15.200000000000001, 11.6, 12.300000000000001, 13.010000000000002, 13.73, 15.4, 15.170000000000002, 13.499999999999998, 16.579999999999998, 17.289999999999999, 17.989999999999998, 18.68, 19.100000000000001, 20.069999999999997, 20.77],
      "text": ["Access to electricity: 8.34 % (population)<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 8.96 % (population)<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 6 % (population)<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 10.24 % (population)<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 15.2 % (population)<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 11.6 % (population)<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 12.3 % (population)<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 13.01 % (population)<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 13.73 % (population)<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 15.4 % (population)<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 15.17 % (population)<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 13.5 % (population)<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 16.58 % (population)<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 17.29 % (population)<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 17.99 % (population)<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 18.68 % (population)<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 19.1 % (population)<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 20.07 % (population)<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Access to electricity: 20.77 % (population)<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [100, 99.999999999999986, 99.999999999999986, 100, 100.00000000000001, 100, 100, 100, 100, 100.00000000000001, 100, 100, 100, 100, 100, 99.999999999999986, 100, 100, 99.999999999999986],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [99.909999999999997, 99.849999999999994, 99.810000000000002, 99.779999999999987, 99.769999999999996, 99.779999999999987, 100, 99.999999999999986, 100, 100, 100, 100, 100, 100, 100, 99.999999999999986, 100, 100, 100],
      "text": ["Access to electricity: 99.91 % (population)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 99.85 % (population)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 99.81 % (population)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 99.78 % (population)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 99.77 % (population)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 99.78 % (population)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [52.200000000000003, 46.079999999999998, 46.82, 47.579999999999998, 50.129999999999995, 50.299999999999997, 49.969999999999999, 48, 55.899999999999999, 53.020000000000003, 55.600000000000001, 54.149999999999999, 52.499999999999993, 59.300000000000004, 54.399999999999999, 56.5, 55.399999999999999, 55.399999999999991, 59.5],
      "text": ["Access to electricity: 52.2 % (population)<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 46.08 % (population)<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 46.82 % (population)<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 47.58 % (population)<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 50.13 % (population)<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 50.3 % (population)<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 49.97 % (population)<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 48 % (population)<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 55.9 % (population)<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 53.02 % (population)<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 55.6 % (population)<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 54.15 % (population)<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 52.5 % (population)<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 59.3 % (population)<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 54.4 % (population)<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 56.5 % (population)<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 55.4 % (population)<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 55.4 % (population)<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Access to electricity: 59.5 % (population)<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [78.799999999999997, 80.599999999999994, 80.800000000000011, 80.700000000000003, 82, 81.900000000000006, 82.599999999999994, 82.799999999999997, 83.599999999999994, 85.200000000000003, 85.200000000000003, 85.900000000000006, 85.299999999999997, 83.900000000000006, 84.399999999999991, 84.700000000000003, 85, 90.000000000000014, 89.299999999999983],
      "text": ["Access to electricity: 78.8 % (population)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 80.6 % (population)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 80.8 % (population)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 80.7 % (population)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 82 % (population)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 81.9 % (population)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 82.6 % (population)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 82.8 % (population)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 83.6 % (population)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 85.2 % (population)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 85.2 % (population)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 85.9 % (population)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 85.3 % (population)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 83.9 % (population)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 84.4 % (population)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 84.7 % (population)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 85 % (population)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 90 % (population)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Access to electricity: 89.3 % (population)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [100, 100, 100, 99.999999999999986, 100, 99.999999999999986, 100, 100, 99.999999999999986, 100, 100, 100, 100.00000000000001, 100, 100.00000000000001, 100, 100.00000000000001, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [99.881859477343568, 99.858282955421828, 99.830240159554663, 99.847307069285534, 99.879313889235775, 99.888348810327471, 99.929617388807429, 99.937851983395959, 99.943530750141136, 100.00000000000001, 100, 100, 99.999999999999986, 100, 100, 100, 100.00000000000001, 100.00000000000001, 99.999999999999986],
      "text": ["Access to electricity: 99.88 % (population)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 99.86 % (population)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 99.83 % (population)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 99.85 % (population)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 99.88 % (population)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 99.89 % (population)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 99.93 % (population)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 99.94 % (population)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 99.94 % (population)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [100, 100, 100, 100, 100.00000000000001, 100, 100, 100, 100.00000000000001, 100, 100.00000000000001, 100, 100, 100, 99.999999999999986, 100, 100, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [100, 100, 100, 99.999999999999986, 100, 100, 99.999999999999986, 100, 100, 100, 99.999999999999986, 100, 100, 99.999999999999986, 100, 100, 99.999999999999986, 100, 99.999999999999986],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [100, 100.00000000000001, 100, 99.999999999999986, 99.999999999999986, 100.00000000000001, 99.999999999999986, 99.999999999999986, 100.00000000000001, 100, 100.00000000000001, 100, 99.999999999999986, 99.899999999999991, 99.969999999999999, 99.890000000000001, 99.989999999999995, 99.989999999999995, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 99.9 % (population)<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 99.97 % (population)<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 99.89 % (population)<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 99.99 % (population)<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 99.99 % (population)<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [100.00000000000001, 100, 99.999999999999986, 100, 100.00000000000001, 100.00000000000001, 99.999999999999986, 100, 99.999999999999986, 100, 99.999999999999986, 100, 99.999999999999986, 99.999999999999986, 100, 99.999999999999986, 99.999999999999986, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [99.998170069440874, 99.998104763277553, 99.998315853821509, 99.998270245603663, 99.998497564293672, 99.998603008193513, 99.998802129880147, 99.998873286548715, 99.998943902312178, 99.998988069204074, 99.999169539613121, 99.999287742419824, 99.999450054970055, 99.999526511030979, 99.999629097727535, 99.999806911772694, 99.999816481759765, 99.99984429104228, 99.999980854870685],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [100, 100, 99.999999999999986, 100, 100, 100, 100, 100, 100, 99.999999999999986, 100, 100, 100, 100, 100, 100, 100.00000000000001, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [97.464120933541139, 97.692884565275634, 97.941505256990695, 98.21004326535072, 98.498473541000052, 98.796810915558908, 99.114991113470168, 99.701686179285559, 99.890619767240196, 99.950283352473164, 99.990056679349294, 100.00000000000003, 100.00000000000003, 99.999999999999986, 100.00000000000001, 100.00000000000003, 100, 100, 100.00000000000001],
      "text": ["Access to electricity: 97.46 % (population)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 97.69 % (population)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 97.94 % (population)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 98.21 % (population)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 98.5 % (population)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 98.8 % (population)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 99.11 % (population)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 99.7 % (population)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 99.89 % (population)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 99.95 % (population)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 99.99 % (population)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [87.160218857291738, 86.508902843414987, 87.615269771966965, 89.335367890912821, 88.103451973669536, 88.509568645782139, 88.757907977035316, 89.390693360883347, 89.316539618200423, 87.416417368188505, 92.611963118565015, 90.617726648649267, 91.003632899490839, 91.370120457074634, 93.757823256920389, 89.217356406634423, 92.12717618116001, 92.280546448020772, 92.431484011517853],
      "text": ["Access to electricity: 87.16 % (population)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Access to electricity: 86.51 % (population)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Access to electricity: 87.62 % (population)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Access to electricity: 89.34 % (population)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Access to electricity: 88.1 % (population)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Access to electricity: 88.51 % (population)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Access to electricity: 88.76 % (population)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Access to electricity: 89.39 % (population)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Access to electricity: 89.32 % (population)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Access to electricity: 87.42 % (population)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Access to electricity: 92.61 % (population)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Access to electricity: 90.62 % (population)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Access to electricity: 91 % (population)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Access to electricity: 91.37 % (population)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Access to electricity: 93.76 % (population)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Access to electricity: 89.22 % (population)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Access to electricity: 92.13 % (population)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Access to electricity: 92.28 % (population)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Access to electricity: 92.43 % (population)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99.999999999999986],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [100, 99.999999999999986, 100, 100, 100, 100, 100, 99.999999999999986, 99.999999999999986, 100.00000000000001, 100, 100, 100, 100.00000000000001, 99.999999999999986, 100.00000000000001, 99.999999999999972, 100, 100.00000000000001],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [100, 100, 100, 100.00000000000001, 100.00000000000001, 100, 100, 99.999999999999986, 100, 99.999999999999986, 100.00000000000001, 99.999999999999986, 99.999999999999986, 100, 100.00000000000001, 99.999999999999986, 100.00000000000001, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [100, 100.00000000000001, 100, 100, 100, 100, 100, 100, 100, 99.999999999999986, 100, 100.00000000000001, 100, 100, 100, 100, 100, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [100, 100, 99.999999999999986, 99.999999999999986, 99.999999999999986, 100.00000000000001, 100, 100.00000000000003, 99.999999999999986, 100, 99.999999999999986, 100.00000000000001, 99.999999999999986, 99.999999999999986, 100.00000000000003, 100, 99.999999999999986, 100.00000000000001, 99.999999999999986],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [100, 100, 100.00000000000001, 100, 100, 100.00000000000001, 100, 99.999999999999986, 100, 100, 100, 100, 99.999999999999986, 100.00000000000001, 99.999999999999986, 99.999999999999986, 100, 100, 100],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [100, 99.999999999999986, 99.999999999999986, 100.00000000000001, 100, 99.999999999999986, 100.00000000000001, 100.00000000000001, 100.00000000000001, 99.999999999999986, 100, 100, 100, 100, 100, 100, 99.999999999999986, 100, 100.00000000000001],
      "text": ["Access to electricity: 100 % (population)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Access to electricity: 100 % (population)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Access to electricity (REMIND_54)",
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
      "range": [0, 100.00000000000003],
      "tickmode": "array",
      "ticktext": ["25", "50", "75", "100"],
      "tickvals": [25, 50, 75, 100],
      "categoryorder": "array",
      "categoryarray": ["25", "50", "75", "100"],
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
        "text": "% (population)",
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
    "b55c64dc63d0": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c5e4e2dfa": {
      "y": {}
    }
  },
  "cur_data": "b55c64dc63d0",
  "visdat": {
    "b55c64dc63d0": ["function (y) ", "x"],
    "b55c5e4e2dfa": ["function (y) ", "x"]
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

  
