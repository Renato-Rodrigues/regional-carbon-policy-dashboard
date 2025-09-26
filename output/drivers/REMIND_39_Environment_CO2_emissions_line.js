(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Environment_CO2_emissions_line') 

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
      "y": [43031.482740260122, 43456.196630157072, 43981.920283211824, 43600.030822525019, 41723.857881638825, 43067.365748431184, 41842.561901277251, 43327.988968907091, 39495.29811009657, 40770.446750952869, 41751.292599348606, 38175.679807741653, 37506.071279277247, 38037.945921068014, 37093.853353744213, 35903.389107560266, 35780.196857708463, 33410.184017172047, 33398.886079009695],
      "text": ["CO2 emissions: 43031.48 kt CO2<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 43456.2 kt CO2<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 43981.92 kt CO2<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 43600.03 kt CO2<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 41723.86 kt CO2<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 43067.37 kt CO2<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 41842.56 kt CO2<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 43327.99 kt CO2<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 39495.3 kt CO2<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 40770.45 kt CO2<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 41751.29 kt CO2<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 38175.68 kt CO2<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 37506.07 kt CO2<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 38037.95 kt CO2<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 37093.85 kt CO2<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 35903.39 kt CO2<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 35780.2 kt CO2<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 33410.18 kt CO2<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emissions: 33398.89 kt CO2<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [52766.738867903456, 56095.795985438155, 58142.282159941256, 59815.739125346685, 61712.046775256116, 64090.680575476057, 63404.286801566275, 67355.378051762265, 70208.413899697058, 72770.754006513525, 75321.937488910393, 75298.965150664924, 75410.655598457844, 74665.931344516823, 71077.694259561787, 70381.127155985043, 67405.985011115903, 59319.104014687611, 59186.552055383188],
      "text": ["CO2 emissions: 52766.74 kt CO2<br>Period: 2003<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 56095.8 kt CO2<br>Period: 2004<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 58142.28 kt CO2<br>Period: 2005<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 59815.74 kt CO2<br>Period: 2006<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 61712.05 kt CO2<br>Period: 2007<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 64090.68 kt CO2<br>Period: 2008<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 63404.29 kt CO2<br>Period: 2009<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 67355.38 kt CO2<br>Period: 2010<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 70208.41 kt CO2<br>Period: 2011<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 72770.75 kt CO2<br>Period: 2012<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 75321.94 kt CO2<br>Period: 2013<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 75298.97 kt CO2<br>Period: 2014<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 75410.66 kt CO2<br>Period: 2015<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 74665.93 kt CO2<br>Period: 2016<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 71077.69 kt CO2<br>Period: 2017<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 70381.13 kt CO2<br>Period: 2018<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 67405.99 kt CO2<br>Period: 2019<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 59319.1 kt CO2<br>Period: 2020<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emissions: 59186.55 kt CO2<br>Period: 2021<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [544542, 536417.00000000012, 549033, 540526, 571632, 550553, 521399, 537092, 549370.00000000012, 546292, 555742, 561761, 558747, 556873.99999999988, 568176, 579574, 566002, 516874, 516874],
      "text": ["CO2 emissions: 544542 kt CO2<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 536417 kt CO2<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 549033 kt CO2<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 540526 kt CO2<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 571632 kt CO2<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 550553 kt CO2<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 521399 kt CO2<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 537092 kt CO2<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 549370 kt CO2<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 546292 kt CO2<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 555742 kt CO2<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 561761 kt CO2<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 558747 kt CO2<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 556874 kt CO2<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 568176 kt CO2<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 579574 kt CO2<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 566002 kt CO2<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 516874 kt CO2<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "CO2 emissions: 516874 kt CO2<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [67475.996536220817, 72176.415912138007, 79540.866557305126, 83658.497874982044, 88530.007609059612, 91789.792061009735, 94955.415527841498, 96595.710306565947, 99223.102071079164, 105097.52732673621, 105131.71555380135, 108317.59254368082, 112087.60112383889, 114867.66431030519, 118431.01285087282, 116918.45432615846, 111387.11367375466, 106376.96632670437, 105912.99677631904],
      "text": ["CO2 emissions: 67476 kt CO2<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "CO2 emissions: 72176.42 kt CO2<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "CO2 emissions: 79540.87 kt CO2<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 83658.5 kt CO2<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 88530.01 kt CO2<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 91789.79 kt CO2<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 94955.42 kt CO2<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 96595.71 kt CO2<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 99223.1 kt CO2<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 105097.53 kt CO2<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 105131.72 kt CO2<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 108317.59 kt CO2<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 112087.6 kt CO2<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 114867.66 kt CO2<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 118431.01 kt CO2<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 116918.45 kt CO2<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 111387.11 kt CO2<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 106376.97 kt CO2<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emissions: 105913 kt CO2<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [298682.05888879648, 309391.48581941333, 311878.43642122881, 316347.26706540468, 325139.17572494049, 328522.48591826746, 333795.62632051937, 335779.39443573513, 334669.28203216649, 336609.66211501084, 330951.97650131065, 323203.06017094885, 328430.81337775534, 335473.39857595303, 337500.20060364064, 336358.0656380541, 335844.8590015308, 321405.61718728323, 321274.53476954537],
      "text": ["CO2 emissions: 298682.06 kt CO2<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 309391.49 kt CO2<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 311878.44 kt CO2<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 316347.27 kt CO2<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 325139.18 kt CO2<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 328522.49 kt CO2<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 333795.63 kt CO2<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 335779.39 kt CO2<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 334669.28 kt CO2<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 336609.66 kt CO2<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 330951.98 kt CO2<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 323203.06 kt CO2<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 328430.81 kt CO2<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 335473.4 kt CO2<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 337500.2 kt CO2<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 336358.07 kt CO2<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 335844.86 kt CO2<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 321405.62 kt CO2<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emissions: 321274.53 kt CO2<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [404692, 414102, 432187, 448302.99999999994, 457121, 459547.99999999994, 448372.99999999994, 462870, 478404, 486454, 475738, 462240, 471633, 476395.00000000006, 474498.99999999994, 444897.99999999994, 451829, 383131.00000000006, 383130.99999999994],
      "text": ["CO2 emissions: 404692 kt CO2<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 414102 kt CO2<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 432187 kt CO2<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 448303 kt CO2<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 457121 kt CO2<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 459548 kt CO2<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 448373 kt CO2<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 462870 kt CO2<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 478404 kt CO2<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 486454 kt CO2<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 475738 kt CO2<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 462240 kt CO2<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 471633 kt CO2<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 476395 kt CO2<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 474499 kt CO2<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 444898 kt CO2<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 451829 kt CO2<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 383131 kt CO2<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "CO2 emissions: 383131 kt CO2<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [37167.436741519276, 37335.350373952526, 36346.890427593695, 37191.380000882549, 37740.071222577943, 36853.564074167029, 37419.296146447909, 40094.919095446137, 39050.732582534481, 38750.150874811363, 39606.955700670995, 39623.172250160191, 40269.048474195122, 39558.572306487666, 39155.924665711151, 38553.341730673448, 37643.904372242505, 36159.719817041747, 36159.811892360834],
      "text": ["CO2 emissions: 37167.44 kt CO2<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 37335.35 kt CO2<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 36346.89 kt CO2<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 37191.38 kt CO2<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 37740.07 kt CO2<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 36853.56 kt CO2<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 37419.3 kt CO2<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 40094.92 kt CO2<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 39050.73 kt CO2<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 38750.15 kt CO2<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 39606.96 kt CO2<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 39623.17 kt CO2<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 40269.05 kt CO2<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 39558.57 kt CO2<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 39155.92 kt CO2<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 38553.34 kt CO2<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 37643.9 kt CO2<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 36159.72 kt CO2<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emissions: 36159.81 kt CO2<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [310808, 328517, 331689, 335625, 352556, 373633, 350001, 397930.99999999994, 418295, 454233, 486844.99999999994, 511617.99999999994, 485343.99999999994, 447077, 455685, 433839.00000000006, 434318, 414139.00000000006, 414138.99999999994],
      "text": ["CO2 emissions: 310808 kt CO2<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 328517 kt CO2<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 331689 kt CO2<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 335625 kt CO2<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 352556 kt CO2<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 373633 kt CO2<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 350001 kt CO2<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 397931 kt CO2<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 418295 kt CO2<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 454233 kt CO2<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 486845 kt CO2<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 511618 kt CO2<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 485344 kt CO2<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 447077 kt CO2<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 455685 kt CO2<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 433839 kt CO2<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 434318 kt CO2<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 414139 kt CO2<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "CO2 emissions: 414139 kt CO2<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [222654.69874622562, 208070.85527990817, 199504.76182924517, 205364.15015378338, 210641.73887552455, 203456.97068369325, 171116.89985708834, 182566.67135006256, 192908.83099847479, 188254.99446632029, 184020.71627492592, 161857.79496478665, 132382.26518165437, 139645.93491455071, 122435.29808364015, 129276.06941132642, 122108.18927384731, 116232.57651610101, 116262.26278787015],
      "text": ["CO2 emissions: 222654.7 kt CO2<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 208070.86 kt CO2<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 199504.76 kt CO2<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 205364.15 kt CO2<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 210641.74 kt CO2<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 203456.97 kt CO2<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 171116.9 kt CO2<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "CO2 emissions: 182566.67 kt CO2<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "CO2 emissions: 192908.83 kt CO2<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 188254.99 kt CO2<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 184020.72 kt CO2<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 161857.79 kt CO2<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 132382.27 kt CO2<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 139645.93 kt CO2<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 122435.3 kt CO2<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 129276.07 kt CO2<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 122108.19 kt CO2<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 116232.58 kt CO2<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emissions: 116262.26 kt CO2<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [463914, 485910, 481002, 487852, 503694, 514925, 526640, 575216, 598481.00000000012, 600316, 599601, 588089, 607827, 615444, 626178, 630187, 612134, 569682.00000000012, 569682],
      "text": ["CO2 emissions: 463914 kt CO2<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 485910 kt CO2<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 481002 kt CO2<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 487852 kt CO2<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 503694 kt CO2<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 514925 kt CO2<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 526640 kt CO2<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 575216 kt CO2<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 598481 kt CO2<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 600316 kt CO2<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 599601 kt CO2<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 588089 kt CO2<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 607827 kt CO2<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 615444 kt CO2<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 626178 kt CO2<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 630187 kt CO2<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 612134 kt CO2<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 569682 kt CO2<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emissions: 569682 kt CO2<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [77877.538287627016, 81176.458002584623, 82515.440282361917, 87564.024781780026, 85463.29059216434, 95695.728231314803, 83434.648657120895, 88156.896435101342, 88401.466177765687, 85390.862496472924, 85031.227221939509, 76615.070949200905, 70961.465559864941, 75055.762239041549, 83813.0401948285, 84631.00083587032, 85411.901613854876, 85096.440096002407, 85230.704161678339],
      "text": ["CO2 emissions: 77877.54 kt CO2<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emissions: 81176.46 kt CO2<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emissions: 82515.44 kt CO2<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emissions: 87564.02 kt CO2<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emissions: 85463.29 kt CO2<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emissions: 95695.73 kt CO2<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emissions: 83434.65 kt CO2<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emissions: 88156.9 kt CO2<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emissions: 88401.47 kt CO2<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emissions: 85390.86 kt CO2<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emissions: 85031.23 kt CO2<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emissions: 76615.07 kt CO2<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emissions: 70961.47 kt CO2<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emissions: 75055.76 kt CO2<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emissions: 83813.04 kt CO2<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emissions: 84631 kt CO2<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emissions: 85411.9 kt CO2<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emissions: 85096.44 kt CO2<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emissions: 85230.7 kt CO2<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [1609997, 1600979, 1611982, 1654851, 1658149, 1655191, 1546666, 1617828, 1699083, 1675756, 1632680, 1611961.0000000002, 1592559, 1571517, 1594550, 1661000, 1703589, 1618271, 1618271],
      "text": ["CO2 emissions: 1609997 kt CO2<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1600979 kt CO2<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1611982 kt CO2<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1654851 kt CO2<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1658149 kt CO2<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1655191 kt CO2<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1546666 kt CO2<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1617828 kt CO2<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1699083 kt CO2<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1675756 kt CO2<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1632680 kt CO2<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1611961 kt CO2<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1592559 kt CO2<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1571517 kt CO2<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1594550 kt CO2<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1661000 kt CO2<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1703589 kt CO2<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1618271 kt CO2<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "CO2 emissions: 1618271 kt CO2<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [82079.031912681938, 89857.460486187731, 94151.808959058748, 93774.500071354079, 99581.930178105453, 103710.80012425166, 104089.35735466804, 114018.76338484009, 115166.73223956031, 119563.13274949076, 126763.65518648121, 132965.98362733287, 141605.72039528459, 148866.62351863438, 154566.42127676858, 169358.5886551147, 185796.50910850323, 183951.62618145766, 183855.20011334954],
      "text": ["CO2 emissions: 82079.03 kt CO2<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 89857.46 kt CO2<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 94151.81 kt CO2<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 93774.5 kt CO2<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 99581.93 kt CO2<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 103710.8 kt CO2<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 104089.36 kt CO2<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 114018.76 kt CO2<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 115166.73 kt CO2<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 119563.13 kt CO2<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 126763.66 kt CO2<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 132965.98 kt CO2<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 141605.72 kt CO2<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 148866.62 kt CO2<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 154566.42 kt CO2<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 169358.59 kt CO2<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 185796.51 kt CO2<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 183951.63 kt CO2<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "CO2 emissions: 183855.2 kt CO2<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [333878, 341235, 342148, 364467.00000000006, 379957, 376138, 391083.00000000006, 415536.99999999994, 475801, 481791.00000000006, 448400, 484639.99999999994, 489053, 483979, 515396.00000000006, 568008, 605291, 563197, 563196.99999999988],
      "text": ["CO2 emissions: 333878 kt CO2<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 341235 kt CO2<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 342148 kt CO2<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 364467 kt CO2<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 379957 kt CO2<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 376138 kt CO2<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 391083 kt CO2<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 415537 kt CO2<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 475801 kt CO2<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 481791 kt CO2<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 448400 kt CO2<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 484640 kt CO2<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 489053 kt CO2<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 483979 kt CO2<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 515396 kt CO2<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 568008 kt CO2<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 605291 kt CO2<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 563197 kt CO2<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "CO2 emissions: 563197 kt CO2<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [61065.588770687616, 67866.870405344482, 70523.192860198891, 76982.340519820442, 84668.515050926799, 84147.915754104484, 88091.110193640285, 88342.131110776463, 90885.60137123306, 93680.580631917983, 96218.567887211029, 101573.32860137742, 109025.24084482751, 120489.57213769211, 131848.17824413904, 129209.23417162124, 126609.25306188963, 123924.97986910718, 124037.47807240221],
      "text": ["CO2 emissions: 61065.59 kt CO2<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "CO2 emissions: 67866.87 kt CO2<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "CO2 emissions: 70523.19 kt CO2<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "CO2 emissions: 76982.34 kt CO2<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "CO2 emissions: 84668.52 kt CO2<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "CO2 emissions: 84147.92 kt CO2<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "CO2 emissions: 88091.11 kt CO2<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 88342.13 kt CO2<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 90885.6 kt CO2<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 93680.58 kt CO2<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 96218.57 kt CO2<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 101573.33 kt CO2<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 109025.24 kt CO2<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 120489.57 kt CO2<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 131848.18 kt CO2<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 129209.23 kt CO2<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 126609.25 kt CO2<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 123924.98 kt CO2<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "CO2 emissions: 124037.48 kt CO2<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [1213930, 1207286.0000000002, 1215474, 1193043, 1227991, 1158836, 1102386, 1157242, 1213776, 1254319, 1267376, 1217307, 1178349, 1164869.0000000002, 1150835.0000000002, 1111115, 1073645, 1014064.9999999999, 1014065],
      "text": ["CO2 emissions: 1213930 kt CO2<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1207286 kt CO2<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1215474 kt CO2<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1193043 kt CO2<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1227991 kt CO2<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1158836 kt CO2<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1102386 kt CO2<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1157242 kt CO2<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1213776 kt CO2<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1254319 kt CO2<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1267376 kt CO2<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1217307 kt CO2<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1178349 kt CO2<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1164869 kt CO2<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1150835 kt CO2<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1111115 kt CO2<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1073645 kt CO2<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1014065 kt CO2<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "CO2 emissions: 1014065 kt CO2<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [219159, 224601, 235003, 261084, 288968, 287205, 288307, 297814, 318641, 329798.00000000006, 319089, 341672, 353414, 376399, 418098, 414112, 398773, 407406, 407406],
      "text": ["CO2 emissions: 219159 kt CO2<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 224601 kt CO2<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 235003 kt CO2<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 261084 kt CO2<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 288968 kt CO2<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 287205 kt CO2<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 288307 kt CO2<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 297814 kt CO2<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 318641 kt CO2<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 329798 kt CO2<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 319089 kt CO2<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 341672 kt CO2<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 353414 kt CO2<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 376399 kt CO2<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 418098 kt CO2<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 414112 kt CO2<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 398773 kt CO2<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 407406 kt CO2<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "CO2 emissions: 407406 kt CO2<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [69970.044447529843, 68050.3705586672, 67755.276506208393, 69936.511268335758, 68949.947493150277, 67462.376579272212, 57981.503584677281, 56762.682329941075, 60263.014606682475, 57489.125212456776, 51433.404776685762, 51409.911260608751, 53323.174095953189, 52295.477893613708, 55162.062009651549, 54970.00496147127, 53637.640063762672, 49646.003752605786, 49630.025092337521],
      "text": ["CO2 emissions: 69970.04 kt CO2<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 68050.37 kt CO2<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 67755.28 kt CO2<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 69936.51 kt CO2<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 68949.95 kt CO2<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 67462.38 kt CO2<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 57981.5 kt CO2<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 56762.68 kt CO2<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 60263.01 kt CO2<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 57489.13 kt CO2<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 51433.4 kt CO2<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 51409.91 kt CO2<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 53323.17 kt CO2<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 52295.48 kt CO2<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 55162.06 kt CO2<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 54970 kt CO2<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 53637.64 kt CO2<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 49646 kt CO2<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emissions: 49630.03 kt CO2<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [267376.73641026544, 281883.90192002896, 295220.89286112267, 287875.13653489918, 298747.58784129407, 274310.11382838665, 245095.76498820251, 232846.89087869943, 233902.88013315541, 229522.24313689701, 207658.12211115655, 206131.75606449033, 219431.55237024126, 211981.38123068609, 226441.81737559778, 220735.39480031174, 206539.2621878369, 173467.67758859028, 173342.32654869423],
      "text": ["CO2 emissions: 267376.74 kt CO2<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 281883.9 kt CO2<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 295220.89 kt CO2<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 287875.14 kt CO2<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 298747.59 kt CO2<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 274310.11 kt CO2<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 245095.76 kt CO2<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 232846.89 kt CO2<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 233902.88 kt CO2<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 229522.24 kt CO2<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 207658.12 kt CO2<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 206131.76 kt CO2<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 219431.55 kt CO2<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 211981.38 kt CO2<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 226441.82 kt CO2<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 220735.39 kt CO2<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 206539.26 kt CO2<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 173467.68 kt CO2<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "CO2 emissions: 173342.33 kt CO2<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [389777, 417660, 450796, 484178.99999999994, 514143.00000000006, 523047.99999999994, 542297, 541170.99999999988, 552051.00000000012, 559122, 583703, 605356, 599183, 607216, 626428, 637434, 625252, 616561, 616560.99999999988],
      "text": ["CO2 emissions: 389777 kt CO2<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 417660 kt CO2<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 450796 kt CO2<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 484179 kt CO2<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 514143 kt CO2<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 523048 kt CO2<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 542297 kt CO2<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 541171 kt CO2<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 552051 kt CO2<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 559122 kt CO2<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 583703 kt CO2<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 605356 kt CO2<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 599183 kt CO2<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 607216 kt CO2<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 626428 kt CO2<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 637434 kt CO2<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 625252 kt CO2<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 616561 kt CO2<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emissions: 616561 kt CO2<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [1011771, 1085667, 1136466, 1215205, 1336737, 1424383, 1564881, 1659983, 1756744, 1909442, 1972429.0000000002, 2147107, 2158023, 2195249, 2308805, 2458176, 2423952, 2200836, 2200836],
      "text": ["CO2 emissions: 1011771 kt CO2<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1085667 kt CO2<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1136466 kt CO2<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1215205 kt CO2<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1336737 kt CO2<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1424383 kt CO2<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1564881 kt CO2<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1659983 kt CO2<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1756744 kt CO2<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1909442 kt CO2<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 1972429 kt CO2<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 2147107 kt CO2<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 2158023 kt CO2<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 2195249 kt CO2<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 2308805 kt CO2<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 2458176 kt CO2<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 2423952 kt CO2<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 2200836 kt CO2<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "CO2 emissions: 2200836 kt CO2<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "y": [5658992, 5738286, 5753493, 5653081, 5736320, 5558379, 5156425, 5392110, 5173591, 4956053, 5092097, 5107209, 4990704, 4894499, 4819365, 4975301, 4817711, 4320533, 4320533],
      "text": ["CO2 emissions: 5658992 kt CO2<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5738286 kt CO2<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5753493 kt CO2<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5653081 kt CO2<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5736320 kt CO2<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5558379 kt CO2<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5156425 kt CO2<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5392110 kt CO2<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5173591 kt CO2<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 4956053 kt CO2<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5092097 kt CO2<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 5107209 kt CO2<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 4990704 kt CO2<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 4894499 kt CO2<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 4819365 kt CO2<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 4975301 kt CO2<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 4817711 kt CO2<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 4320533 kt CO2<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "CO2 emissions: 4320533 kt CO2<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [297731, 301854, 301353, 314093, 313374.99999999994, 308325, 297260, 313738.99999999994, 310594, 303350.99999999994, 298304, 285730, 289077, 299802, 312770, 311754.99999999994, 294948, 279224, 279224],
      "text": ["CO2 emissions: 297731 kt CO2<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 301854 kt CO2<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 301353 kt CO2<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 314093 kt CO2<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 313375 kt CO2<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 308325 kt CO2<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 297260 kt CO2<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 313739 kt CO2<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 310594 kt CO2<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 303351 kt CO2<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 298304 kt CO2<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 285730 kt CO2<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 289077 kt CO2<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 299802 kt CO2<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 312770 kt CO2<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 311755 kt CO2<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 294948 kt CO2<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 279224 kt CO2<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "CO2 emissions: 279224 kt CO2<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [25299.952944335473, 24978.642352292129, 25069.931457480776, 23087.148343181791, 21596.037878184918, 23044.771478838484, 21118.068670776258, 24280.081227166113, 25763.960864048688, 26171.62039183428, 29616.531051760761, 31705.645091467977, 30364.282957778538, 31261.610766966838, 30867.009816854315, 32136.458667602805, 33776.343471613356, 31826.855859221683, 31724.282596322577],
      "text": ["CO2 emissions: 25299.95 kt CO2<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 24978.64 kt CO2<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 25069.93 kt CO2<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 23087.15 kt CO2<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 21596.04 kt CO2<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 23044.77 kt CO2<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 21118.07 kt CO2<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 24280.08 kt CO2<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 25763.96 kt CO2<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 26171.62 kt CO2<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 29616.53 kt CO2<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 31705.65 kt CO2<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 30364.28 kt CO2<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 31261.61 kt CO2<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 30867.01 kt CO2<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 32136.46 kt CO2<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 33776.34 kt CO2<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 31826.86 kt CO2<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emissions: 31724.28 kt CO2<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [353033.99999999994, 379940, 377643.00000000006, 379735.99999999994, 397162, 427111.99999999994, 404354, 425547.99999999994, 409480, 427002, 437262.00000000006, 448298, 425063.00000000006, 425683.00000000006, 435215, 439645, 446625.99999999994, 393242, 393242],
      "text": ["CO2 emissions: 353034 kt CO2<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 379940 kt CO2<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 377643 kt CO2<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 379736 kt CO2<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 397162 kt CO2<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 427112 kt CO2<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 404354 kt CO2<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 425548 kt CO2<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 409480 kt CO2<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 427002 kt CO2<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 437262 kt CO2<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 448298 kt CO2<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 425063 kt CO2<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 425683 kt CO2<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 435215 kt CO2<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 439645 kt CO2<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 446626 kt CO2<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 393242 kt CO2<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "CO2 emissions: 393242 kt CO2<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [836795, 821074, 802383, 814413, 783803, 789690, 734806, 773069, 746477, 760128, 776152, 736012, 742314.00000000012, 747147, 732204.00000000012, 707770, 658694, 603351, 603351],
      "text": ["CO2 emissions: 836795 kt CO2<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 821074 kt CO2<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 802383 kt CO2<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 814413 kt CO2<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 783803 kt CO2<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 789690 kt CO2<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 734806 kt CO2<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 773069 kt CO2<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 746477 kt CO2<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 760128 kt CO2<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 776152 kt CO2<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 736012 kt CO2<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 742314 kt CO2<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 747147 kt CO2<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 732204 kt CO2<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 707770 kt CO2<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 658694 kt CO2<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 603351 kt CO2<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "CO2 emissions: 603351 kt CO2<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "y": [68116.03219220131, 68387.603118988147, 68190.903265070752, 68639.236896632443, 69917.680368964298, 67412.92403107266, 63948.22570217809, 65576.812579944322, 64019.126644399854, 61826.002733305693, 60028.126489838534, 57993.124639064139, 58610.269507703626, 59909.353043952367, 60906.167244432552, 60569.839505494398, 57428.538625732901, 52482.077742930487, 52195.712960734265],
      "text": ["CO2 emissions: 68116.03 kt CO2<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 68387.6 kt CO2<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 68190.9 kt CO2<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 68639.24 kt CO2<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 69917.68 kt CO2<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 67412.92 kt CO2<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 63948.23 kt CO2<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 65576.81 kt CO2<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 64019.13 kt CO2<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 61826 kt CO2<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 60028.13 kt CO2<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 57993.12 kt CO2<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 58610.27 kt CO2<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 59909.35 kt CO2<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 60906.17 kt CO2<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 60569.84 kt CO2<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 57428.54 kt CO2<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 52482.08 kt CO2<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emissions: 52195.71 kt CO2<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [44086.999999999993, 44688, 46651, 47263, 46605, 45911, 40583, 40348, 36488, 37010, 35688, 35556.999999999993, 37087, 39010, 37729, 37474.000000000007, 35812.000000000007, 33742, 33742],
      "text": ["CO2 emissions: 44087 kt CO2<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 44688 kt CO2<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 46651 kt CO2<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 47263 kt CO2<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 46605 kt CO2<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 45911 kt CO2<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 40583 kt CO2<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 40348 kt CO2<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 36488 kt CO2<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 37010 kt CO2<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 35688 kt CO2<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 35557 kt CO2<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 37087 kt CO2<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 39010 kt CO2<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 37729 kt CO2<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 37474 kt CO2<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 35812 kt CO2<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 33742 kt CO2<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "CO2 emissions: 33742 kt CO2<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [284828, 299889, 315293, 335434, 354617, 389713.00000000006, 406527, 446132, 463764.00000000006, 492466.99999999994, 503214, 540520, 565190, 561229.99999999988, 549750, 527566, 526770, 513556.00000000006, 513556],
      "text": ["CO2 emissions: 284828 kt CO2<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 299889 kt CO2<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 315293 kt CO2<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 335434 kt CO2<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 354617 kt CO2<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 389713 kt CO2<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 406527 kt CO2<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 446132 kt CO2<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 463764 kt CO2<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 492467 kt CO2<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 503214 kt CO2<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 540520 kt CO2<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 565190 kt CO2<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 561230 kt CO2<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 549750 kt CO2<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 527566 kt CO2<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 526770 kt CO2<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 513556 kt CO2<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emissions: 513556 kt CO2<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [60311.660276269831, 57004.1568209904, 51207.944288389655, 55817.756535746506, 53245.776767568714, 49646.287314187095, 46896.40565922013, 51531.535599880015, 46597.976795413502, 42647.689205718983, 42582.251884837933, 39762.962730281302, 38376.283215419207, 39358.154245693797, 37836.358522603958, 37111.334570571722, 34868.678121104924, 32404.546404007247, 32402.599599711721],
      "text": ["CO2 emissions: 60311.66 kt CO2<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 57004.16 kt CO2<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 51207.94 kt CO2<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 55817.76 kt CO2<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 53245.78 kt CO2<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 49646.29 kt CO2<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 46896.41 kt CO2<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 51531.54 kt CO2<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 46597.98 kt CO2<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 42647.69 kt CO2<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 42582.25 kt CO2<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 39762.96 kt CO2<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 38376.28 kt CO2<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 39358.15 kt CO2<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 37836.36 kt CO2<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 37111.33 kt CO2<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 34868.68 kt CO2<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 32404.55 kt CO2<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "CO2 emissions: 32402.6 kt CO2<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [376800.62144038687, 377911.02728325216, 380778.28786305367, 371704.65281172865, 363016.7868796027, 358176.47530279617, 343850.04239167291, 347906.82073324407, 335000.23874956422, 338283.17754497007, 338421.44145158341, 305988.67485599767, 311146.35105727753, 313806.24340976833, 317692.00965461356, 306920.14995159628, 300534.90684136521, 267131.07325823733, 267131.24902502267],
      "text": ["CO2 emissions: 376800.62 kt CO2<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 377911.03 kt CO2<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 380778.29 kt CO2<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 371704.65 kt CO2<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 363016.79 kt CO2<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 358176.48 kt CO2<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 343850.04 kt CO2<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 347906.82 kt CO2<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 335000.24 kt CO2<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 338283.18 kt CO2<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 338421.44 kt CO2<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 305988.67 kt CO2<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 311146.35 kt CO2<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 313806.24 kt CO2<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 317692.01 kt CO2<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 306920.15 kt CO2<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 300534.91 kt CO2<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 267131.07 kt CO2<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emissions: 267131.25 kt CO2<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [540145.50225454872, 540179.18281740777, 538030.06174227118, 539167.4202087248, 527671.31296719972, 512585.52483279252, 464002.43391887762, 480068.96592881199, 443271.59339200205, 465341.87858112465, 451370.00220353442, 413411.64050421305, 398965.64707317116, 380156.06118511176, 364931.58068105351, 358678.42910938157, 344132.61675044219, 307040.3688780173, 307032.22286766302],
      "text": ["CO2 emissions: 540145.5 kt CO2<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 540179.18 kt CO2<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 538030.06 kt CO2<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 539167.42 kt CO2<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 527671.31 kt CO2<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 512585.52 kt CO2<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 464002.43 kt CO2<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 480068.97 kt CO2<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 443271.59 kt CO2<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 465341.88 kt CO2<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 451370 kt CO2<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 413411.64 kt CO2<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 398965.65 kt CO2<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 380156.06 kt CO2<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 364931.58 kt CO2<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 358678.43 kt CO2<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 344132.62 kt CO2<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 307040.37 kt CO2<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emissions: 307032.22 kt CO2<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [74468, 75802, 76242, 74104, 71247.999999999985, 70735, 64421, 69965, 68276, 65112, 65753, 62054.999999999993, 63255.000000000007, 63697, 65868.000000000015, 63130.999999999993, 64498, 59142, 59141.999999999993],
      "text": ["CO2 emissions: 74468 kt CO2<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 75802 kt CO2<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 76242 kt CO2<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 74104 kt CO2<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 71248 kt CO2<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 70735 kt CO2<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 64421 kt CO2<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 69965 kt CO2<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 68276 kt CO2<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 65112 kt CO2<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 65753 kt CO2<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 62055 kt CO2<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 63255 kt CO2<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 63697 kt CO2<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 65868 kt CO2<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 63131 kt CO2<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 64498 kt CO2<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 59142 kt CO2<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "CO2 emissions: 59142 kt CO2<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "y": [4325945.2489809608, 4999432.1621935833, 5695151.530115216, 6294463.0548099186, 6837871.3488248708, 7039899.1910262424, 7548365.9532038197, 8287823.2356346212, 9077925.7299339175, 9330356.6838307567, 9759670.9594747927, 9800819.4121328034, 9642669.2942646313, 9644549.6917769387, 9868356.1976990588, 10335995.199923549, 10527221.576522429, 10705436.465853784, 10705886.383841604],
      "text": ["CO2 emissions: 4325945.25 kt CO2<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 4999432.16 kt CO2<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 5695151.53 kt CO2<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 6294463.05 kt CO2<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 6837871.35 kt CO2<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 7039899.19 kt CO2<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 7548365.95 kt CO2<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 8287823.24 kt CO2<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 9077925.73 kt CO2<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 9330356.68 kt CO2<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 9759670.96 kt CO2<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 9800819.41 kt CO2<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 9642669.29 kt CO2<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 9644549.69 kt CO2<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 9868356.2 kt CO2<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 10335995.2 kt CO2<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 10527221.58 kt CO2<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 10705436.47 kt CO2<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emissions: 10705886.38 kt CO2<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [48774.9079786168, 51836.471924772704, 53830.380265667722, 54589.221290068046, 54624.444277245821, 60094.080512807406, 61861.535459710998, 66326.671838494993, 66987.956487463351, 70480.267329495298, 72995.262623571776, 71706.264240684875, 69555.611811617477, 72234.320507796045, 75794.658455563927, 78371.483173741915, 82275.334038726185, 76000.601517475719, 75885.75244071726],
      "text": ["CO2 emissions: 48774.91 kt CO2<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "CO2 emissions: 51836.47 kt CO2<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "CO2 emissions: 53830.38 kt CO2<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "CO2 emissions: 54589.22 kt CO2<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emissions: 54624.44 kt CO2<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emissions: 60094.08 kt CO2<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "CO2 emissions: 61861.54 kt CO2<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "CO2 emissions: 66326.67 kt CO2<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "CO2 emissions: 66987.96 kt CO2<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "CO2 emissions: 70480.27 kt CO2<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emissions: 72995.26 kt CO2<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emissions: 71706.26 kt CO2<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emissions: 69555.61 kt CO2<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emissions: 72234.32 kt CO2<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "CO2 emissions: 75794.66 kt CO2<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "CO2 emissions: 78371.48 kt CO2<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "CO2 emissions: 82275.33 kt CO2<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emissions: 76000.6 kt CO2<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emissions: 75885.75 kt CO2<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [459023.87704781612, 469159.52631926519, 470572.13726949698, 463442.92786610709, 456214.70055389893, 441928.54734098847, 394322.20812300674, 402475.70629729237, 393943.37462375441, 374126.85055026499, 344041.75393104326, 325190.18355225772, 335416.10722152703, 330870.08282425703, 326679.25682581746, 322311.26662128553, 314582.19772660715, 278883.06444087479, 278855.85298397735],
      "text": ["CO2 emissions: 459023.88 kt CO2<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 469159.53 kt CO2<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 470572.14 kt CO2<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 463442.93 kt CO2<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 456214.7 kt CO2<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 441928.55 kt CO2<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 394322.21 kt CO2<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 402475.71 kt CO2<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 393943.37 kt CO2<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 374126.85 kt CO2<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 344041.75 kt CO2<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 325190.18 kt CO2<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 335416.11 kt CO2<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 330870.08 kt CO2<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 326679.26 kt CO2<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 322311.27 kt CO2<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 314582.2 kt CO2<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 278883.06 kt CO2<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emissions: 278855.85 kt CO2<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [170363, 172117.00000000003, 167925.99999999997, 163703, 164551, 165222, 160488, 171111, 158768, 157473, 157090, 149793, 157376, 158499, 155711, 151382, 145939, 130315.00000000001, 130315],
      "text": ["CO2 emissions: 170363 kt CO2<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 172117 kt CO2<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 167926 kt CO2<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 163703 kt CO2<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 164551 kt CO2<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 165222 kt CO2<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 160488 kt CO2<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 171111 kt CO2<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 158768 kt CO2<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 157473 kt CO2<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 157090 kt CO2<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 149793 kt CO2<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 157376 kt CO2<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 158499 kt CO2<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 155711 kt CO2<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 151382 kt CO2<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 145939 kt CO2<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 130315 kt CO2<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "CO2 emissions: 130315 kt CO2<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [111111.56646354376, 109069.06735576557, 106750.0720340102, 103949.22273116832, 99895.488413194922, 102539.4959402598, 95961.103176600242, 102611.80840644354, 92649.44779754203, 91417.362644633322, 92540.465561435165, 86545.248766465273, 90961.780522129717, 90003.519423615478, 88423.629673790099, 89269.523565758675, 88714.217217782396, 81348.52504288964, 81306.17653134944],
      "text": ["CO2 emissions: 111111.57 kt CO2<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 109069.07 kt CO2<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 106750.07 kt CO2<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 103949.22 kt CO2<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 99895.49 kt CO2<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 102539.5 kt CO2<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 95961.1 kt CO2<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 102611.81 kt CO2<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 92649.45 kt CO2<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 91417.36 kt CO2<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 92540.47 kt CO2<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 86545.25 kt CO2<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 90961.78 kt CO2<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 90003.52 kt CO2<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 88423.63 kt CO2<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 89269.52 kt CO2<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 88714.22 kt CO2<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 81348.53 kt CO2<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emissions: 81306.18 kt CO2<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [92474.901133164429, 92018.093249854515, 93842.359869555075, 92607.716585146904, 95813.822014956138, 92165.162558847922, 86888.198457350911, 80242.53540117087, 77349.526470787969, 73119.003004486018, 66047.03516324576, 63314.829731721307, 61815.654610213875, 60708.279207510677, 60588.312417467838, 58899.799817455052, 54332.645668025143, 46202.472965822577, 46100.262849265506],
      "text": ["CO2 emissions: 92474.9 kt CO2<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 92018.09 kt CO2<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 93842.36 kt CO2<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 92607.72 kt CO2<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 95813.82 kt CO2<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 92165.16 kt CO2<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 86888.2 kt CO2<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 80242.54 kt CO2<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 77349.53 kt CO2<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 73119 kt CO2<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 66047.04 kt CO2<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 63314.83 kt CO2<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 61815.65 kt CO2<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 60708.28 kt CO2<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 60588.31 kt CO2<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 58899.8 kt CO2<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 54332.65 kt CO2<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 46202.47 kt CO2<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emissions: 46100.26 kt CO2<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "CO2 emissions (REMIND_39)",
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
      "range": [0, 10705886.383841604],
      "tickmode": "array",
      "ticktext": ["0e+00", "3e+06", "6e+06", "9e+06"],
      "tickvals": [0, 3000000, 5999999.9999999991, 9000000],
      "categoryorder": "array",
      "categoryarray": ["0e+00", "3e+06", "6e+06", "9e+06"],
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
        "text": "kt CO2",
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
    "b55c4e405f8": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c375e6501": {
      "y": {}
    }
  },
  "cur_data": "b55c4e405f8",
  "visdat": {
    "b55c4e405f8": ["function (y) ", "x"],
    "b55c375e6501": ["function (y) ", "x"]
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

  
