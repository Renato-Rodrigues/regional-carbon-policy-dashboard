(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_26_Resources_Oil_reserves_line') 

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
      "y": [8.5704273091616106, 8.1641184390988215, 8.0128530859399074, 7.9302988154189071, 7.7455986638486518, 7.6444961368805506, 7.5526238915583548, 7.3571445360647356, 6.7617118143054116, 6.4256764137725551, 5.9235731453219858, 5.8934865077472205, 5.8104362214338154, 5.7688271129212412, 5.7482660857865051, 5.7382096756801682, 5.6432035911109981, 5.7184471360043334, 5.6020406280390427],
      "text": ["Oil reserves: 8.57 % (World)<br>Period: 2003<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 8.16 % (World)<br>Period: 2004<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 8.01 % (World)<br>Period: 2005<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 7.93 % (World)<br>Period: 2006<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 7.75 % (World)<br>Period: 2007<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 7.64 % (World)<br>Period: 2008<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 7.55 % (World)<br>Period: 2009<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 7.36 % (World)<br>Period: 2010<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 6.76 % (World)<br>Period: 2011<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 6.43 % (World)<br>Period: 2012<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 5.92 % (World)<br>Period: 2013<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 5.89 % (World)<br>Period: 2014<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 5.81 % (World)<br>Period: 2015<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 5.77 % (World)<br>Period: 2016<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 5.75 % (World)<br>Period: 2017<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 5.74 % (World)<br>Period: 2018<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 5.64 % (World)<br>Period: 2019<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 5.72 % (World)<br>Period: 2020<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 5.6 % (World)<br>Period: 2021<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [0.77519678009556314, 0.792747535500266, 0.82285040707903923, 0.81541645429045506, 0.8036159296265809, 0.82480278004417706, 0.8579621278632561, 0.85197912040853185, 1.16104579914845, 1.1503464808292725, 1.3099911644761679, 1.3426045337551205, 1.345753866906831, 1.362824758182813, 1.2603249840261748, 1.2153711766894502, 1.1827301113642736, 1.1698825926687217, 1.1213271554786268],
      "text": ["Oil reserves: 0.78 % (World)<br>Period: 2003<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.79 % (World)<br>Period: 2004<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.82 % (World)<br>Period: 2005<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.82 % (World)<br>Period: 2006<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.8 % (World)<br>Period: 2007<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.82 % (World)<br>Period: 2008<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.86 % (World)<br>Period: 2009<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.85 % (World)<br>Period: 2010<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.16 % (World)<br>Period: 2011<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.15 % (World)<br>Period: 2012<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.31 % (World)<br>Period: 2013<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.34 % (World)<br>Period: 2014<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.35 % (World)<br>Period: 2015<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.36 % (World)<br>Period: 2016<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.26 % (World)<br>Period: 2017<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.22 % (World)<br>Period: 2018<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.18 % (World)<br>Period: 2019<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.17 % (World)<br>Period: 2020<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.12 % (World)<br>Period: 2021<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [0.31726665309333058, 0.30586687401313711, 0.24619106405552543, 0.22396530803971523, 0.22034032441667789, 0.19414407158556418, 0.18673517956288882, 0.18328902692689872, 0.14233674526883588, 0.13132342268581698, 0.12387228723832308, 0.13130941182218445, 0.1236999464812738, 0.11604327545785115, 0.1495660588140845, 0.17183674238652288, 0.18293138494621317, 0.18645613368143726, 0.17869956508989379],
      "text": ["Oil reserves: 0.32 % (World)<br>Period: 2003<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.31 % (World)<br>Period: 2004<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.25 % (World)<br>Period: 2005<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.22 % (World)<br>Period: 2006<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.22 % (World)<br>Period: 2007<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.19 % (World)<br>Period: 2008<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.19 % (World)<br>Period: 2009<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.18 % (World)<br>Period: 2010<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.14 % (World)<br>Period: 2011<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.13 % (World)<br>Period: 2012<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.12 % (World)<br>Period: 2013<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.13 % (World)<br>Period: 2014<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.12 % (World)<br>Period: 2015<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.12 % (World)<br>Period: 2016<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.15 % (World)<br>Period: 2017<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.17 % (World)<br>Period: 2018<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.18 % (World)<br>Period: 2019<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.19 % (World)<br>Period: 2020<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Oil reserves: 0.18 % (World)<br>Period: 2021<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland"],
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
      "y": [3.1634005730827917, 3.5717721035795242, 3.567127210361873, 3.6382816668255473, 3.625184898913302, 3.6341047226279666, 3.5932797939065164, 3.5275186651445041, 3.2628768625953506, 3.4437735971789163, 3.243924627624291, 3.2508567758825828, 3.2747708370751063, 3.2909245339313657, 3.283191261675142, 3.214362233185363, 3.172136247736753, 3.1547050827758176, 3.4698597553817065],
      "text": ["Oil reserves: 3.16 % (World)<br>Period: 2003<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil reserves: 3.57 % (World)<br>Period: 2004<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil reserves: 3.57 % (World)<br>Period: 2005<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.64 % (World)<br>Period: 2006<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.63 % (World)<br>Period: 2007<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.63 % (World)<br>Period: 2008<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.59 % (World)<br>Period: 2009<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.53 % (World)<br>Period: 2010<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.26 % (World)<br>Period: 2011<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.44 % (World)<br>Period: 2012<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.24 % (World)<br>Period: 2013<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.25 % (World)<br>Period: 2014<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.27 % (World)<br>Period: 2015<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.29 % (World)<br>Period: 2016<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.28 % (World)<br>Period: 2017<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.21 % (World)<br>Period: 2018<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.17 % (World)<br>Period: 2019<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.15 % (World)<br>Period: 2020<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 3.47 % (World)<br>Period: 2021<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [0.020588267588832046, 0.020575328421541673, 0.020561446617231863, 0.020761680561851053, 0.020762171681988569, 0.02055231943651023, 0.020556104165679864, 0.020560522422125076, 0.020566990653719405, 0.020573691813973057, 0.016829435797937834, 0.016859051538335623, 0.016891999456326467, 0.016925380481770232, 0.016956624027265679, 0.016989140855863231, 0.01702459584001622, 0.017051102087819733, 0.017081794569563113],
      "text": ["Oil reserves: 0.02 % (World)<br>Period: 2003<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2004<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2005<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2006<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2014<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2015<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2016<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2017<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2018<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2019<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2020<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2021<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "y": [2.9253274961954765, 2.7930350751370669, 2.7501342145692536, 2.7138802511159619, 2.7392385751085015, 2.7161987752085563, 2.6864859420859974, 2.6351403896432397, 2.4174466649461444, 2.3328925126962323, 2.8201230269713964, 2.7977919668839264, 2.7746179136921825, 2.7745224157650581, 2.773424957722908, 2.7319996434713252, 2.7243800996779912, 2.7090529952444187, 2.6296353653503988],
      "text": ["Oil reserves: 2.93 % (World)<br>Period: 2003<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 2.79 % (World)<br>Period: 2004<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 2.75 % (World)<br>Period: 2005<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 2.71 % (World)<br>Period: 2006<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 2.74 % (World)<br>Period: 2007<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 2.72 % (World)<br>Period: 2008<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 2.69 % (World)<br>Period: 2009<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 2.64 % (World)<br>Period: 2010<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 2.42 % (World)<br>Period: 2011<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 2.33 % (World)<br>Period: 2012<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 2.82 % (World)<br>Period: 2013<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 2.8 % (World)<br>Period: 2014<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 2.77 % (World)<br>Period: 2015<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 2.77 % (World)<br>Period: 2016<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 2.77 % (World)<br>Period: 2017<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 2.73 % (World)<br>Period: 2018<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 2.72 % (World)<br>Period: 2019<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 2.71 % (World)<br>Period: 2020<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 2.63 % (World)<br>Period: 2021<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [0.11349599377506482, 0.10223198234074313, 0.10186057616836904, 0.090716008043068938, 0.090633821187471611, 0.09291718763400586, 0.087045999061587151, 0.082656878953700233, 0.077562715372048133, 0.092678739608861249, 0.088354276686797295, 0.086097486932859402, 0.085847666737133857, 0.082776504468592652, 0.083245608965215614, 0.077941366567929785, 0.076430623505684997, 0.078215604133019631, 0.067563276617310347],
      "text": ["Oil reserves: 0.11 % (World)<br>Period: 2003<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.1 % (World)<br>Period: 2004<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.1 % (World)<br>Period: 2005<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.09 % (World)<br>Period: 2006<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.09 % (World)<br>Period: 2007<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.09 % (World)<br>Period: 2008<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.09 % (World)<br>Period: 2009<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.08 % (World)<br>Period: 2010<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.08 % (World)<br>Period: 2011<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.09 % (World)<br>Period: 2012<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.09 % (World)<br>Period: 2013<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.09 % (World)<br>Period: 2014<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.09 % (World)<br>Period: 2015<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.08 % (World)<br>Period: 2016<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.08 % (World)<br>Period: 2017<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.08 % (World)<br>Period: 2018<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.08 % (World)<br>Period: 2019<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.08 % (World)<br>Period: 2020<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.07 % (World)<br>Period: 2021<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_26 region code: JPN<br>Countries in region: Japan"],
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
      "y": [0.04085503564710094, 0.040815375333449498, 0.036061745260597376, 0.036016776801455222, 0.024262264992985543, 0.024099084576014066, 0.019415173305766958, 0.019388427172762516, 0.018399128714911114, 0.01840110222942111, 0.018402984729289331, 0.018407411438740338, 0.018410913471837972, 0.01840644370012804, 0.018410263450624069, 0.01839890366022915, 0.018380774889651789, 0.018362705138790923, 0.018343931001054206],
      "text": ["Oil reserves: 0.04 % (World)<br>Period: 2003<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.04 % (World)<br>Period: 2004<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.04 % (World)<br>Period: 2005<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.04 % (World)<br>Period: 2006<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2014<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2015<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2016<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2017<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2018<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2019<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2020<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2021<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [0.0080133859317356657, 0.0080369417483763354, 0.0080605591371005706, 0.0080840562096520466, 0.0081095556666033776, 0.0081317022708142939, 0.0081436807410657976, 0.0081499386605392125, 0.0081575021557058619, 0.0081645610707420085, 0.0081678727495009401, 0.0081714650961999466, 0.0081764884290783119, 0.0081824431731628618, 0.0081895482818997219, 0.008198399077138303, 0.008208626619831386, 0.0082142572978153514, 0.0082066014309172455],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [0.44, 0.41999999999999993, 0.41999999999999998, 0.45000000000000001, 0.42999999999999999, 0.41999999999999998, 0.41999999999999993, 0.40999999999999998, 0.39000000000000001, 0.37000000000000005, 0.33000000000000002, 0.34000000000000002, 0.34000000000000002, 0.28999999999999998, 0.28000000000000003, 0.27000000000000002, 0.27000000000000002, 0.27000000000000002, 0.27000000000000002],
      "text": ["Oil reserves: 0.44 % (World)<br>Period: 2003<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2004<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2005<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.45 % (World)<br>Period: 2006<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.43 % (World)<br>Period: 2007<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2008<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2009<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.41 % (World)<br>Period: 2010<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.39 % (World)<br>Period: 2011<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.37 % (World)<br>Period: 2012<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.33 % (World)<br>Period: 2013<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.34 % (World)<br>Period: 2014<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.34 % (World)<br>Period: 2015<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.29 % (World)<br>Period: 2016<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.28 % (World)<br>Period: 2017<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2018<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2019<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2020<br>REMIND_26 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2021<br>REMIND_26 region code: IND<br>Countries in region: India"],
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
      "y": [1.9799999999999998, 1.8200000000000001, 1.77, 1.78, 1.6899999999999999, 1.72, 1.54, 1.6400000000000001, 1.71, 1.9000000000000001, 2.0299999999999994, 2.21, 2.4100000000000001, 2.1300000000000003, 2.1400000000000001, 2.5299999999999998, 2.8399999999999999, 2.8399999999999999, 2.6099999999999994],
      "text": ["Oil reserves: 1.98 % (World)<br>Period: 2003<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 1.82 % (World)<br>Period: 2004<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 1.77 % (World)<br>Period: 2005<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 1.78 % (World)<br>Period: 2006<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 1.69 % (World)<br>Period: 2007<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 1.72 % (World)<br>Period: 2008<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 1.54 % (World)<br>Period: 2009<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 1.64 % (World)<br>Period: 2010<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 1.71 % (World)<br>Period: 2011<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 1.9 % (World)<br>Period: 2012<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 2.03 % (World)<br>Period: 2013<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 2.21 % (World)<br>Period: 2014<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 2.41 % (World)<br>Period: 2015<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 2.13 % (World)<br>Period: 2016<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 2.14 % (World)<br>Period: 2017<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 2.53 % (World)<br>Period: 2018<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 2.84 % (World)<br>Period: 2019<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 2.84 % (World)<br>Period: 2020<br>REMIND_26 region code: USA<br>Countries in region: United States", "Oil reserves: 2.61 % (World)<br>Period: 2021<br>REMIND_26 region code: USA<br>Countries in region: United States"],
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
      "y": [0.01, 0.01, 0.0099999999999999985, 0.01, 0.01, 0.01, 0.01, 0.01, 0.010000000000000002, 0.0099999999999999985, 0.01, 0.01, 0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0.01, 0.01],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_26 region code: POL<br>Countries in region: Poland"],
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
      "y": [0.41983975572496107, 0.41681645582658622, 0.57840520074718538, 0.58289126129259528, 0.5804307759278855, 0.58059476012453648, 0.5768933431151948, 0.58423576656419252, 0.54200971225363737, 0.52547885457132959, 0.49267813069853839, 0.48808552373772507, 0.48344211099401152, 0.48423099226427879, 0.48562697531324889, 0.48679421798268818, 0.46924045753999333, 0.47713152351394411, 0.46243229026249955],
      "text": ["Oil reserves: 0.42 % (World)<br>Period: 2003<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.42 % (World)<br>Period: 2004<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.58 % (World)<br>Period: 2005<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.58 % (World)<br>Period: 2006<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.58 % (World)<br>Period: 2007<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.58 % (World)<br>Period: 2008<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.58 % (World)<br>Period: 2009<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.58 % (World)<br>Period: 2010<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.54 % (World)<br>Period: 2011<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.53 % (World)<br>Period: 2012<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.49 % (World)<br>Period: 2013<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.49 % (World)<br>Period: 2014<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.48 % (World)<br>Period: 2015<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.48 % (World)<br>Period: 2016<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.49 % (World)<br>Period: 2017<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.49 % (World)<br>Period: 2018<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.47 % (World)<br>Period: 2019<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.48 % (World)<br>Period: 2020<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.46 % (World)<br>Period: 2021<br>REMIND_26 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [0.029999999999999999, 0.029999999999999995, 0.029999999999999995, 0.029999999999999999, 0.029999999999999999, 0.030000000000000002, 0.02, 0.02, 0.02, 0.02, 0.020000000000000004, 0.01, 0.01, 0.01, 0.010000000000000002, 0.010000000000000002, 0.01, 0.01, 0.010000000000000002],
      "text": ["Oil reserves: 0.03 % (World)<br>Period: 2003<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2004<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2005<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2006<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2007<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2008<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_26 region code: DEU<br>Countries in region: Germany"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_26 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [0.0301105050088308, 0.027353610648080375, 0.027333537700681726, 0.027300960422536873, 0.027265854691628951, 0.024526415207946371, 0.021773162145661114, 0.021731550850004652, 0.01627128406924936, 0.016240493885895119, 0.013505949881951999, 0.013479407429869868, 0.010776885194969103, 0.0080752328051624626, 0.0080572307153042779, 0.0080395454665507394, 0.0080195952278733964, 0.0080060653882684154, 0.0080041359548821498],
      "text": ["Oil reserves: 0.03 % (World)<br>Period: 2003<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.03 % (World)<br>Period: 2004<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.03 % (World)<br>Period: 2005<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.03 % (World)<br>Period: 2006<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.03 % (World)<br>Period: 2007<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [0.0099989814668406674, 0.009998995198663289, 0.009999009608161866, 0.009999022153005091, 0.0099990299907422656, 0.0099990361024228577, 0.0099990415164434351, 0.009999046321716526, 0.0099990519078791106, 0.0099990592995511246, 0.0099990674819878944, 0.0099990743115095718, 0.0099990792494560835, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [0.38791975192071515, 0.3680229379898749, 0.34812874449636361, 0.3083422960953956, 0.28844935301130475, 0.2685564292352145, 0.25860946109604138, 0.22876979997833255, 0.18898506597746006, 0.1889873368762002, 0.18899000496897941, 0.17904667825527187, 0.1790517050373498, 0.16910925839073854, 0.1591644720799851, 0.14921755823097504, 0.14921758047587397, 0.15916417566936317, 0.1492124450701752],
      "text": ["Oil reserves: 0.39 % (World)<br>Period: 2003<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.37 % (World)<br>Period: 2004<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.35 % (World)<br>Period: 2005<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.31 % (World)<br>Period: 2006<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.29 % (World)<br>Period: 2007<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.27 % (World)<br>Period: 2008<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.26 % (World)<br>Period: 2009<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.23 % (World)<br>Period: 2010<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.19 % (World)<br>Period: 2011<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.19 % (World)<br>Period: 2012<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.19 % (World)<br>Period: 2013<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.18 % (World)<br>Period: 2014<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.18 % (World)<br>Period: 2015<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.17 % (World)<br>Period: 2016<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.16 % (World)<br>Period: 2017<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.15 % (World)<br>Period: 2018<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.15 % (World)<br>Period: 2019<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.16 % (World)<br>Period: 2020<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.15 % (World)<br>Period: 2021<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [0.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_26 region code: AUT<br>Countries in region: Austria"],
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
      "y": [1.466125623777716, 1.4074849618420864, 1.3977473372106046, 1.3879940707547271, 1.1827359097170804, 1.1729947714740203, 1.173078323897309, 1.4664073900298185, 1.3491417969173869, 1.3100566753168155, 1.4078804338737525, 1.4470130550726115, 1.4568002341402371, 1.4861773130760934, 1.5253606104084045, 1.5058231459833202, 1.5253720753151012, 1.5449773051570139, 1.4961487168462957],
      "text": ["Oil reserves: 1.47 % (World)<br>Period: 2003<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.41 % (World)<br>Period: 2004<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.4 % (World)<br>Period: 2005<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.39 % (World)<br>Period: 2006<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.18 % (World)<br>Period: 2007<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.17 % (World)<br>Period: 2008<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.17 % (World)<br>Period: 2009<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.47 % (World)<br>Period: 2010<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.35 % (World)<br>Period: 2011<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.31 % (World)<br>Period: 2012<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.41 % (World)<br>Period: 2013<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.45 % (World)<br>Period: 2014<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.46 % (World)<br>Period: 2015<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.49 % (World)<br>Period: 2016<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.53 % (World)<br>Period: 2017<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.51 % (World)<br>Period: 2018<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.53 % (World)<br>Period: 2019<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.54 % (World)<br>Period: 2020<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.5 % (World)<br>Period: 2021<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [0.049654678849389254, 0.049654595005956197, 0.049654093673414286, 0.049653874521136357, 0.049654410939757476, 0.02979267088942876, 0.029792055810056093, 0.029791676344832235, 0.029791154941749422, 0.029789845003510267, 0.02978933353269618, 0.029787063826167439, 0.029781749874766315, 0.039701810920622665, 0.029769854320096083, 0.029761291056652678, 0.0297489445304224, 0.029742137091585422, 0.029739218200772754],
      "text": ["Oil reserves: 0.05 % (World)<br>Period: 2003<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2004<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2005<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2006<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2007<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2008<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2009<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2010<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2011<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2012<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2013<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2014<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2015<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.04 % (World)<br>Period: 2016<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2017<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2018<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2019<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2020<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2021<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0.01, 0.01, 0.010000000000000002, 0.02, 0.019999999999999997, 0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0, 0, 0.01, 0.01],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Oil reserves (REMIND_26)",
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
      "tickvals": [0, 24.999999999999996, 50, 75, 100],
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
    "b55c2ef2140a": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c2ec5b70": {
      "y": {}
    }
  },
  "cur_data": "b55c2ef2140a",
  "visdat": {
    "b55c2ef2140a": ["function (y) ", "x"],
    "b55c2ec5b70": ["function (y) ", "x"]
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

  
