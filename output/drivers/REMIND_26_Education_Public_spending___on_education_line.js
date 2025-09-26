(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_26_Education_Public_spending___on_education_line') 

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
      "y": [5.015065683651649, 4.9941190040226839, 4.8909402273097236, 4.8436355807038804, 4.8206536252574841, 4.7430944262405754, 5.047103292443067, 5.5085236246927449, 5.2629930241186669, 4.8616278235666019, 4.9184452189668395, 5.0275177537939619, 5.0251262479332404, 5.044190316922383, 5.0497496445499257, 4.99701226201402, 4.9335843515927316, 5.2162963690988002, 5.0212482320867231],
      "text": ["Public spending - on education: 5.02 % (GDP)<br>Period: 2003<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.99 % (GDP)<br>Period: 2004<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.89 % (GDP)<br>Period: 2005<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.84 % (GDP)<br>Period: 2006<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.82 % (GDP)<br>Period: 2007<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.74 % (GDP)<br>Period: 2008<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.05 % (GDP)<br>Period: 2009<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.51 % (GDP)<br>Period: 2010<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.26 % (GDP)<br>Period: 2011<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.86 % (GDP)<br>Period: 2012<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.92 % (GDP)<br>Period: 2013<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.03 % (GDP)<br>Period: 2014<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.03 % (GDP)<br>Period: 2015<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.04 % (GDP)<br>Period: 2016<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.05 % (GDP)<br>Period: 2017<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5 % (GDP)<br>Period: 2018<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.93 % (GDP)<br>Period: 2019<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.22 % (GDP)<br>Period: 2020<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.02 % (GDP)<br>Period: 2021<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [4.0843036151424652, 3.9830462742383896, 4.1920811774181139, 4.2835120338229311, 4.3672509817916341, 4.6445439217626099, 5.0290581931778577, 5.0345015309212826, 5.0405661158656958, 5.1043165549235763, 5.0854264501685904, 5.2701781839549442, 5.4000814704892095, 5.326235010782657, 5.259241233850978, 5.0756316200809097, 5.0695713153591955, 5.1831308359449899, 5.0738230440302781],
      "text": ["Public spending - on education: 4.08 % (GDP)<br>Period: 2003<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 3.98 % (GDP)<br>Period: 2004<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.19 % (GDP)<br>Period: 2005<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.28 % (GDP)<br>Period: 2006<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.37 % (GDP)<br>Period: 2007<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.64 % (GDP)<br>Period: 2008<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.03 % (GDP)<br>Period: 2009<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.03 % (GDP)<br>Period: 2010<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.04 % (GDP)<br>Period: 2011<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.1 % (GDP)<br>Period: 2012<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.09 % (GDP)<br>Period: 2013<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.27 % (GDP)<br>Period: 2014<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.4 % (GDP)<br>Period: 2015<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.33 % (GDP)<br>Period: 2016<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.26 % (GDP)<br>Period: 2017<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.08 % (GDP)<br>Period: 2018<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.07 % (GDP)<br>Period: 2019<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.18 % (GDP)<br>Period: 2020<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 5.07 % (GDP)<br>Period: 2021<br>REMIND_26 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [6.1705042878659286, 6.0810471343345505, 5.7829985739441225, 5.4572680145348071, 5.3520289920700019, 5.365730259824967, 5.7778285066633712, 5.5602581021079356, 5.4811309011369556, 5.8700752292701397, 5.9145160512016854, 6.0055651475814038, 5.9972696361275677, 6.1557948341426636, 6.1343699558880909, 5.9867457403009769, 6.1333479784883282, 6.5160972967599635, 5.1022908184267513],
      "text": ["Public spending - on education: 6.17 % (GDP)<br>Period: 2003<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 6.08 % (GDP)<br>Period: 2004<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.78 % (GDP)<br>Period: 2005<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.46 % (GDP)<br>Period: 2006<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.35 % (GDP)<br>Period: 2007<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.37 % (GDP)<br>Period: 2008<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.78 % (GDP)<br>Period: 2009<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.56 % (GDP)<br>Period: 2010<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.48 % (GDP)<br>Period: 2011<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.87 % (GDP)<br>Period: 2012<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.91 % (GDP)<br>Period: 2013<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 6.01 % (GDP)<br>Period: 2014<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 6 % (GDP)<br>Period: 2015<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 6.16 % (GDP)<br>Period: 2016<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 6.13 % (GDP)<br>Period: 2017<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.99 % (GDP)<br>Period: 2018<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 6.13 % (GDP)<br>Period: 2019<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 6.52 % (GDP)<br>Period: 2020<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.1 % (GDP)<br>Period: 2021<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland"],
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
      "y": [4.5361738056188639, 4.3338322376072718, 4.2112909539321803, 4.1524069103613721, 4.1700992049587349, 3.9779646356851184, 4.1514460298614049, 4.0186860708213024, 4.1007251018182362, 4.1257285772809595, 4.2603460418553638, 4.2882620663141591, 4.2380964246498634, 4.1807797508437945, 4.1281850793334991, 4.1801607400501233, 4.1136903368772844, 4.309739382908778, 4.250497451297675],
      "text": ["Public spending - on education: 4.54 % (GDP)<br>Period: 2003<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.33 % (GDP)<br>Period: 2004<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.21 % (GDP)<br>Period: 2005<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.15 % (GDP)<br>Period: 2006<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.17 % (GDP)<br>Period: 2007<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 3.98 % (GDP)<br>Period: 2008<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.15 % (GDP)<br>Period: 2009<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.02 % (GDP)<br>Period: 2010<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.1 % (GDP)<br>Period: 2011<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.13 % (GDP)<br>Period: 2012<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.26 % (GDP)<br>Period: 2013<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.29 % (GDP)<br>Period: 2014<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.24 % (GDP)<br>Period: 2015<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.18 % (GDP)<br>Period: 2016<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.13 % (GDP)<br>Period: 2017<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.18 % (GDP)<br>Period: 2018<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.11 % (GDP)<br>Period: 2019<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.31 % (GDP)<br>Period: 2020<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.25 % (GDP)<br>Period: 2021<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [4.1145524418873887, 4.0868828281199798, 4.3189762486068268, 4.3821361215225227, 4.3655144992421633, 4.4710621627609797, 5.0272535282846329, 4.7650992783533104, 4.7683151138096296, 4.9763194434916143, 4.9608712039906999, 4.8005762468542645, 4.6937149052676013, 4.6397248362721379, 4.5974342118307359, 4.5281280456424708, 4.6888250401357352, 4.4196542093207878, 3.8274998215301244],
      "text": ["Public spending - on education: 4.11 % (GDP)<br>Period: 2003<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.09 % (GDP)<br>Period: 2004<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.32 % (GDP)<br>Period: 2005<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.38 % (GDP)<br>Period: 2006<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.37 % (GDP)<br>Period: 2007<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.47 % (GDP)<br>Period: 2008<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 5.03 % (GDP)<br>Period: 2009<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.77 % (GDP)<br>Period: 2010<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.77 % (GDP)<br>Period: 2011<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.98 % (GDP)<br>Period: 2012<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.96 % (GDP)<br>Period: 2013<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.8 % (GDP)<br>Period: 2014<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.69 % (GDP)<br>Period: 2015<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.64 % (GDP)<br>Period: 2016<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.6 % (GDP)<br>Period: 2017<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.53 % (GDP)<br>Period: 2018<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.69 % (GDP)<br>Period: 2019<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 4.42 % (GDP)<br>Period: 2020<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Public spending - on education: 3.83 % (GDP)<br>Period: 2021<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "y": [4.0163578771585513, 3.8795358025467075, 4.0334911865265388, 4.1239342823516116, 4.1874053625288843, 4.2519483761422059, 4.5077487111914616, 4.1782817226715405, 4.1171844788455738, 4.219918687982072, 4.1349824886165552, 4.2422963535421818, 4.1044738414992734, 4.140450610160304, 4.501555825233118, 4.4504150016763102, 4.0935386792601403, 4.2253436878884605, 4.2273415420631526],
      "text": ["Public spending - on education: 4.02 % (GDP)<br>Period: 2003<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 3.88 % (GDP)<br>Period: 2004<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 4.03 % (GDP)<br>Period: 2005<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 4.12 % (GDP)<br>Period: 2006<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 4.19 % (GDP)<br>Period: 2007<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 4.25 % (GDP)<br>Period: 2008<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.51 % (GDP)<br>Period: 2009<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.18 % (GDP)<br>Period: 2010<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.12 % (GDP)<br>Period: 2011<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.22 % (GDP)<br>Period: 2012<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.13 % (GDP)<br>Period: 2013<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.24 % (GDP)<br>Period: 2014<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.1 % (GDP)<br>Period: 2015<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.14 % (GDP)<br>Period: 2016<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.5 % (GDP)<br>Period: 2017<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.45 % (GDP)<br>Period: 2018<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.09 % (GDP)<br>Period: 2019<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.23 % (GDP)<br>Period: 2020<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.23 % (GDP)<br>Period: 2021<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [2.969786728382247, 2.7811548106809072, 2.8346769858303191, 2.9333012801505336, 2.9630408421626622, 2.9273369151608888, 3.1231009956233637, 2.7288608638226708, 2.9164746128915739, 2.9267379107827303, 3.0375408417137684, 2.9936503096472529, 3.099616847013734, 3.1028359765421167, 2.8487224767878851, 2.8327289901627197, 2.758493480240185, 2.9891735962538588, 2.7643046604377171],
      "text": ["Public spending - on education: 2.97 % (GDP)<br>Period: 2003<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Public spending - on education: 2.78 % (GDP)<br>Period: 2004<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Public spending - on education: 2.83 % (GDP)<br>Period: 2005<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Public spending - on education: 2.93 % (GDP)<br>Period: 2006<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Public spending - on education: 2.96 % (GDP)<br>Period: 2007<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Public spending - on education: 2.93 % (GDP)<br>Period: 2008<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Public spending - on education: 3.12 % (GDP)<br>Period: 2009<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 2.73 % (GDP)<br>Period: 2010<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 2.92 % (GDP)<br>Period: 2011<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 2.93 % (GDP)<br>Period: 2012<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.04 % (GDP)<br>Period: 2013<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 2.99 % (GDP)<br>Period: 2014<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.1 % (GDP)<br>Period: 2015<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.1 % (GDP)<br>Period: 2016<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 2.85 % (GDP)<br>Period: 2017<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 2.83 % (GDP)<br>Period: 2018<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 2.76 % (GDP)<br>Period: 2019<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 2.99 % (GDP)<br>Period: 2020<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Public spending - on education: 2.76 % (GDP)<br>Period: 2021<br>REMIND_26 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [3.4700000000000002, 3.4300000000000006, 3.3100000000000001, 3.2799999999999998, 3.2799999999999998, 3.27, 3.5600000000000001, 3.5999999999999996, 3.6100000000000003, 3.6499999999999999, 3.6200000000000001, 3.5499999999999998, 3.23, 3.1499999999999999, 3.1299999999999999, 3.0800000000000001, 3.1599999999999997, 3.4199999999999995, 3.3200000000000003],
      "text": ["Public spending - on education: 3.47 % (GDP)<br>Period: 2003<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.43 % (GDP)<br>Period: 2004<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.31 % (GDP)<br>Period: 2005<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.28 % (GDP)<br>Period: 2006<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.28 % (GDP)<br>Period: 2007<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.27 % (GDP)<br>Period: 2008<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.56 % (GDP)<br>Period: 2009<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.6 % (GDP)<br>Period: 2010<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.61 % (GDP)<br>Period: 2011<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.65 % (GDP)<br>Period: 2012<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.62 % (GDP)<br>Period: 2013<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.55 % (GDP)<br>Period: 2014<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.23 % (GDP)<br>Period: 2015<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.15 % (GDP)<br>Period: 2016<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.13 % (GDP)<br>Period: 2017<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.08 % (GDP)<br>Period: 2018<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.16 % (GDP)<br>Period: 2019<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.42 % (GDP)<br>Period: 2020<br>REMIND_26 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.32 % (GDP)<br>Period: 2021<br>REMIND_26 region code: JPN<br>Countries in region: Japan"],
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
      "y": [4.2411842166743625, 3.7405893298002351, 4.2777488663089871, 4.5831072289705652, 4.3181050431109096, 4.3813694566702059, 4.3705802598630168, 3.9678242068936465, 3.6354989743624402, 3.5975294366206616, 3.7449477314374455, 3.9242443142417227, 3.8268271893097565, 3.718635398884917, 3.775986570669188, 3.879517054016747, 3.9263947125372058, 4.0413131634844079, 4.1658093125380766],
      "text": ["Public spending - on education: 4.24 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.74 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.28 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.58 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.32 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.38 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.37 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.97 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.64 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.6 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.74 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.92 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.83 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.72 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.78 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.88 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.93 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.04 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.17 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [4.3905141615773413, 4.3347121843945065, 4.3203680002496467, 4.3198638966954013, 4.3766597703375743, 4.5617610613961572, 5.0306607518307231, 4.9617533736703443, 4.9405349525744704, 4.5581010686043832, 4.5185557070459135, 4.449939862111604, 4.3912342058262226, 4.328148068649206, 4.3566465891661217, 4.2700800461430841, 4.301654935206745, 4.8964285145956312, 4.6115207828289932],
      "text": ["Public spending - on education: 4.39 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.33 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.32 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.32 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.38 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.56 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 5.03 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.96 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.94 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.56 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.52 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.45 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.39 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.33 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.36 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.27 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.3 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.9 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Public spending - on education: 4.61 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [3.6099999999999994, 3.3500000000000001, 3.1899999999999999, 3.1400000000000006, 3.1866666666666665, 3.2333333333333334, 3.2799999999999998, 3.3799999999999994, 3.8000000000000003, 4.0800000000000001, 3.8400000000000003, 3.8999999999999995, 4.1100000000000003, 4.21, 4.3099999999999987, 4.3033333333333328, 4.2966666666666669, 4.2900000000000009, 4.6399999999999997],
      "text": ["Public spending - on education: 3.61 % (GDP)<br>Period: 2003<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.35 % (GDP)<br>Period: 2004<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.19 % (GDP)<br>Period: 2005<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.14 % (GDP)<br>Period: 2006<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.19 % (GDP)<br>Period: 2007<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.23 % (GDP)<br>Period: 2008<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.28 % (GDP)<br>Period: 2009<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.38 % (GDP)<br>Period: 2010<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.8 % (GDP)<br>Period: 2011<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 4.08 % (GDP)<br>Period: 2012<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.84 % (GDP)<br>Period: 2013<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 3.9 % (GDP)<br>Period: 2014<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 4.11 % (GDP)<br>Period: 2015<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 4.21 % (GDP)<br>Period: 2016<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 4.31 % (GDP)<br>Period: 2017<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 4.3 % (GDP)<br>Period: 2018<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 4.3 % (GDP)<br>Period: 2019<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 4.29 % (GDP)<br>Period: 2020<br>REMIND_26 region code: IND<br>Countries in region: India", "Public spending - on education: 4.64 % (GDP)<br>Period: 2021<br>REMIND_26 region code: IND<br>Countries in region: India"],
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
      "y": [6.3300000000000001, 6.25, 6.1699999999999999, 6.1600000000000001, 6.2400000000000002, 6.4400000000000004, 6.7400000000000002, 6.6900000000000004, 6.5, 6.25, 6.2300000000000004, 6.1299999999999999, 4.9500000000000002, 4.8099999999999996, 5.1200000000000001, 4.9299999999999997, 4.9900000000000002, 5.4400000000000004, 5.4400000000000004],
      "text": ["Public spending - on education: 6.33 % (GDP)<br>Period: 2003<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.25 % (GDP)<br>Period: 2004<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.17 % (GDP)<br>Period: 2005<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.16 % (GDP)<br>Period: 2006<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.24 % (GDP)<br>Period: 2007<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.44 % (GDP)<br>Period: 2008<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.74 % (GDP)<br>Period: 2009<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.69 % (GDP)<br>Period: 2010<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.5 % (GDP)<br>Period: 2011<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.25 % (GDP)<br>Period: 2012<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.23 % (GDP)<br>Period: 2013<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.13 % (GDP)<br>Period: 2014<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 4.95 % (GDP)<br>Period: 2015<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 4.81 % (GDP)<br>Period: 2016<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 5.12 % (GDP)<br>Period: 2017<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 4.93 % (GDP)<br>Period: 2018<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 4.99 % (GDP)<br>Period: 2019<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 5.44 % (GDP)<br>Period: 2020<br>REMIND_26 region code: USA<br>Countries in region: United States", "Public spending - on education: 5.44 % (GDP)<br>Period: 2021<br>REMIND_26 region code: USA<br>Countries in region: United States"],
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
      "y": [5.3200000000000003, 5.3600000000000003, 5.4299999999999997, 5.21, 4.8700000000000001, 5.04, 4.9900000000000002, 5.1100000000000003, 4.8600000000000003, 4.8600000000000003, 5.0199999999999996, 4.9699999999999998, 4.8200000000000003, 4.6600000000000001, 4.5700000000000003, 4.6100000000000003, 4.6799999999999997, 4.8499999999999996, 4.9400000000000004],
      "text": ["Public spending - on education: 5.32 % (GDP)<br>Period: 2003<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.36 % (GDP)<br>Period: 2004<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.43 % (GDP)<br>Period: 2005<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.21 % (GDP)<br>Period: 2006<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.87 % (GDP)<br>Period: 2007<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.04 % (GDP)<br>Period: 2008<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.99 % (GDP)<br>Period: 2009<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.11 % (GDP)<br>Period: 2010<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.86 % (GDP)<br>Period: 2011<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.86 % (GDP)<br>Period: 2012<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.02 % (GDP)<br>Period: 2013<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.97 % (GDP)<br>Period: 2014<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.82 % (GDP)<br>Period: 2015<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.66 % (GDP)<br>Period: 2016<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.57 % (GDP)<br>Period: 2017<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.61 % (GDP)<br>Period: 2018<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.68 % (GDP)<br>Period: 2019<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.85 % (GDP)<br>Period: 2020<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.94 % (GDP)<br>Period: 2021<br>REMIND_26 region code: POL<br>Countries in region: Poland"],
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
      "y": [4.169999999999999, 4.0999999999999996, 4.6199999999999992, 4.0300000000000002, 3.9199999999999999, 4.5499999999999998, 4.3399999999999999, 5.0999999999999996, 4.9800000000000004, 4.9299999999999997, 4.9400000000000004, 4.9199999999999999, 4.8600000000000012, 4.8399999999999999, 4.8700000000000001, 4.9800000000000004, 5.1200000000000001, 5.5899999999999999, 4.5300000000000002],
      "text": ["Public spending - on education: 4.17 % (GDP)<br>Period: 2003<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.1 % (GDP)<br>Period: 2004<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.62 % (GDP)<br>Period: 2005<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.03 % (GDP)<br>Period: 2006<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 3.92 % (GDP)<br>Period: 2007<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.55 % (GDP)<br>Period: 2008<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.34 % (GDP)<br>Period: 2009<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 5.1 % (GDP)<br>Period: 2010<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.98 % (GDP)<br>Period: 2011<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.93 % (GDP)<br>Period: 2012<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.94 % (GDP)<br>Period: 2013<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.92 % (GDP)<br>Period: 2014<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.86 % (GDP)<br>Period: 2015<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.84 % (GDP)<br>Period: 2016<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.87 % (GDP)<br>Period: 2017<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.98 % (GDP)<br>Period: 2018<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 5.12 % (GDP)<br>Period: 2019<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 5.59 % (GDP)<br>Period: 2020<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.53 % (GDP)<br>Period: 2021<br>REMIND_26 region code: DEU<br>Countries in region: Germany"],
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
      "y": [4.4553024624071274, 4.3306675383021034, 4.1390274880695106, 4.3215199321424853, 4.0014060564430265, 4.1006591704154376, 4.5572224348072368, 4.3912824458571418, 4.3982580873327271, 4.4503811167439364, 4.4422183955003955, 4.2424156348364574, 5.1864257872624071, 4.8425368543199738, 3.9571567548703852, 4.1984574287626213, 4.4368229348716115, 4.7599020848010509, 4.9699169604101723],
      "text": ["Public spending - on education: 4.46 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.33 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.14 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.32 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.1 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.56 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.39 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.4 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.45 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.44 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.24 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 5.19 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.84 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 3.96 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.2 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.44 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.76 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.97 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [4.1999999999999993, 4.4800000000000004, 4.5199999999999996, 4.5499999999999998, 4.7199999999999998, 5.4600000000000009, 6.1600000000000001, 5.8522222222222222, 5.5444444444444443, 5.2366666666666664, 4.9288888888888902, 4.6211111111111114, 4.3133333333333335, 4.0055555555555555, 3.6977777777777776, 3.3900000000000001, 3.3300000000000001, 3.2700000000000005, 2.98],
      "text": ["Public spending - on education: 4.2 % (GDP)<br>Period: 2003<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.48 % (GDP)<br>Period: 2004<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.52 % (GDP)<br>Period: 2005<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.55 % (GDP)<br>Period: 2006<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.72 % (GDP)<br>Period: 2007<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 5.46 % (GDP)<br>Period: 2008<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 6.16 % (GDP)<br>Period: 2009<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 5.85 % (GDP)<br>Period: 2010<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 5.54 % (GDP)<br>Period: 2011<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 5.24 % (GDP)<br>Period: 2012<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.93 % (GDP)<br>Period: 2013<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.62 % (GDP)<br>Period: 2014<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.31 % (GDP)<br>Period: 2015<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.01 % (GDP)<br>Period: 2016<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 3.7 % (GDP)<br>Period: 2017<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 3.39 % (GDP)<br>Period: 2018<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 3.33 % (GDP)<br>Period: 2019<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 3.27 % (GDP)<br>Period: 2020<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 2.98 % (GDP)<br>Period: 2021<br>REMIND_26 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [6.9961899512490264, 6.9592662370129243, 6.8226109260271901, 6.6269708009219048, 6.4402557570697256, 6.5214823590346418, 7.1447954292757085, 7.0794194028437314, 6.974130465844012, 7.3545347629663427, 7.7232708838549788, 7.4632286652172324, 7.2149670724262513, 7.3817680603013578, 7.134839867865618, 7.1166039459154664, 7.1299616777419654, 7.4525697520108496, 6.2548841641079838],
      "text": ["Public spending - on education: 7 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 6.96 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 6.82 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 6.63 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 6.44 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 6.52 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.14 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.08 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 6.97 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.35 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.72 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.46 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.21 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.38 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.13 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.12 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.13 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 7.45 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Public spending - on education: 6.25 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [5.7599999999999998, 5.5500000000000007, 5.4699999999999989, 5.4799999999999995, 5.3000000000000007, 5.4000000000000012, 5.7299999999999995, 5.660000000000001, 5.4800000000000004, 5.4599999999999991, 5.4999999999999991, 5.5099999999999998, 5.4599999999999991, 5.419999999999999, 5.4500000000000002, 5.4099999999999993, 5.3499999999999988, 5.6799999999999997, 5.2499999999999991],
      "text": ["Public spending - on education: 5.76 % (GDP)<br>Period: 2003<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.55 % (GDP)<br>Period: 2004<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.47 % (GDP)<br>Period: 2005<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.48 % (GDP)<br>Period: 2006<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.3 % (GDP)<br>Period: 2007<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.4 % (GDP)<br>Period: 2008<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.73 % (GDP)<br>Period: 2009<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.66 % (GDP)<br>Period: 2010<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.48 % (GDP)<br>Period: 2011<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.46 % (GDP)<br>Period: 2012<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.5 % (GDP)<br>Period: 2013<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.51 % (GDP)<br>Period: 2014<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.46 % (GDP)<br>Period: 2015<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.42 % (GDP)<br>Period: 2016<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.45 % (GDP)<br>Period: 2017<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.41 % (GDP)<br>Period: 2018<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.35 % (GDP)<br>Period: 2019<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.68 % (GDP)<br>Period: 2020<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.25 % (GDP)<br>Period: 2021<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [4.7999404676952899, 4.7299313548576318, 4.9299140399355474, 4.9699102559082204, 4.9199156557802413, 4.9099190527413397, 5.0599147116474654, 5.6898901810939906, 5.5599169792236411, 5.6299273908823935, 5.5299213599736268, 5.5999214735485534, 5.5499340065964073, 5.4199449642985078, 5.429949401882439, 5.1999597358657823, 5.2499574321032378, 5.4999461691889042, 5.3299692787459891],
      "text": ["Public spending - on education: 4.8 % (GDP)<br>Period: 2003<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.73 % (GDP)<br>Period: 2004<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.93 % (GDP)<br>Period: 2005<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.97 % (GDP)<br>Period: 2006<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.92 % (GDP)<br>Period: 2007<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.91 % (GDP)<br>Period: 2008<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.06 % (GDP)<br>Period: 2009<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.69 % (GDP)<br>Period: 2010<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.56 % (GDP)<br>Period: 2011<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.63 % (GDP)<br>Period: 2012<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.53 % (GDP)<br>Period: 2013<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.6 % (GDP)<br>Period: 2014<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.55 % (GDP)<br>Period: 2015<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.42 % (GDP)<br>Period: 2016<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.43 % (GDP)<br>Period: 2017<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.2 % (GDP)<br>Period: 2018<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.25 % (GDP)<br>Period: 2019<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.5 % (GDP)<br>Period: 2020<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.33 % (GDP)<br>Period: 2021<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [5.3600000000000003, 5.2999999999999998, 5.2499999999999991, 5.2300000000000004, 5.1499999999999995, 5.2599999999999998, 5.7300000000000004, 5.7000000000000002, 5.5899999999999999, 5.4800000000000004, 5.5499999999999998, 5.4500000000000002, 5.46, 5.4800000000000004, 5.370000000000001, 5.2300000000000004, 5.2200000000000006, 5.5700000000000003, 4.9900000000000002],
      "text": ["Public spending - on education: 5.36 % (GDP)<br>Period: 2003<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.3 % (GDP)<br>Period: 2004<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.25 % (GDP)<br>Period: 2005<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.23 % (GDP)<br>Period: 2006<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.15 % (GDP)<br>Period: 2007<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.26 % (GDP)<br>Period: 2008<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.73 % (GDP)<br>Period: 2009<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.7 % (GDP)<br>Period: 2010<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.59 % (GDP)<br>Period: 2011<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.48 % (GDP)<br>Period: 2012<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.55 % (GDP)<br>Period: 2013<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.45 % (GDP)<br>Period: 2014<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.46 % (GDP)<br>Period: 2015<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.48 % (GDP)<br>Period: 2016<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.37 % (GDP)<br>Period: 2017<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.23 % (GDP)<br>Period: 2018<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.22 % (GDP)<br>Period: 2019<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.57 % (GDP)<br>Period: 2020<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 4.99 % (GDP)<br>Period: 2021<br>REMIND_26 region code: AUT<br>Countries in region: Austria"],
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
      "y": [2.708287798832703, 2.7095169764259275, 2.7072799063498305, 2.7057363415292759, 2.7036545309510398, 3.6274870861353437, 3.7528458198651027, 3.7482957885955952, 3.5191359046001494, 3.9374881107974993, 3.7095451465444325, 3.5792581809874418, 3.8067351326298962, 3.757221012981208, 3.6676613846785551, 3.5385124407148347, 3.5412038583402268, 3.5757750299732307, 3.3045901082723041],
      "text": ["Public spending - on education: 2.71 % (GDP)<br>Period: 2003<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 2.71 % (GDP)<br>Period: 2004<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 2.71 % (GDP)<br>Period: 2005<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 2.71 % (GDP)<br>Period: 2006<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 2.7 % (GDP)<br>Period: 2007<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.63 % (GDP)<br>Period: 2008<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.75 % (GDP)<br>Period: 2009<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.75 % (GDP)<br>Period: 2010<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.52 % (GDP)<br>Period: 2011<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.94 % (GDP)<br>Period: 2012<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.71 % (GDP)<br>Period: 2013<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.58 % (GDP)<br>Period: 2014<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.81 % (GDP)<br>Period: 2015<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.76 % (GDP)<br>Period: 2016<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.67 % (GDP)<br>Period: 2017<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.54 % (GDP)<br>Period: 2018<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.54 % (GDP)<br>Period: 2019<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.58 % (GDP)<br>Period: 2020<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.3 % (GDP)<br>Period: 2021<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [4.5490474141460018, 4.3902072429964258, 4.2479558455114717, 4.5363687088110911, 4.1227176774169259, 4.3976711770911354, 4.5238123101489718, 4.3433327139307361, 4.1449221769512352, 4.0760418313987152, 4.1641564215841713, 4.0808677450355901, 4.0769112539657337, 3.8296165978099186, 4.0439891917850019, 4.2655698753447702, 4.1070295531481733, 4.4514319222730467, 4.1430390899613618],
      "text": ["Public spending - on education: 4.55 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.39 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.25 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.54 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.12 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.4 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.52 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.34 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.14 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.08 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.16 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.08 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.08 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 3.83 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.04 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.27 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.11 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.45 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.14 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [5.04, 5.0599999999999996, 5.1100000000000003, 5.04, 4.8899999999999997, 5.0300000000000002, 5.4299999999999997, 5.4900000000000002, 5.46, 5.4100000000000001, 5.5300000000000002, 5.46, 5.3499999999999988, 5.4799999999999995, 5.1799999999999997, 5.3600000000000003, 5.1600000000000001, 5.4199999999999999, 5.1399999999999997],
      "text": ["Public spending - on education: 5.04 % (GDP)<br>Period: 2003<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.06 % (GDP)<br>Period: 2004<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.11 % (GDP)<br>Period: 2005<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.04 % (GDP)<br>Period: 2006<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 4.89 % (GDP)<br>Period: 2007<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.03 % (GDP)<br>Period: 2008<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.43 % (GDP)<br>Period: 2009<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.49 % (GDP)<br>Period: 2010<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.46 % (GDP)<br>Period: 2011<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.41 % (GDP)<br>Period: 2012<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.53 % (GDP)<br>Period: 2013<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.46 % (GDP)<br>Period: 2014<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.35 % (GDP)<br>Period: 2015<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.48 % (GDP)<br>Period: 2016<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.18 % (GDP)<br>Period: 2017<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.36 % (GDP)<br>Period: 2018<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.16 % (GDP)<br>Period: 2019<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.42 % (GDP)<br>Period: 2020<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.14 % (GDP)<br>Period: 2021<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [5.84745542269442, 5.5992616767433585, 5.759620871225879, 5.5781070876844669, 5.4659744430176485, 6.2427303419357898, 6.389922469576625, 6.3764226870874996, 6.3654118884852995, 6.1514190817260674, 6.4939599677580517, 6.4609135288153992, 6.3211107313531132, 6.3105080448663156, 6.2835497875202551, 6.2425987993024341, 6.1973874713322283, 6.6561384755374364, 6.1467609846969546],
      "text": ["Public spending - on education: 5.85 % (GDP)<br>Period: 2003<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 5.6 % (GDP)<br>Period: 2004<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 5.76 % (GDP)<br>Period: 2005<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 5.58 % (GDP)<br>Period: 2006<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 5.47 % (GDP)<br>Period: 2007<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.24 % (GDP)<br>Period: 2008<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.39 % (GDP)<br>Period: 2009<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.38 % (GDP)<br>Period: 2010<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.37 % (GDP)<br>Period: 2011<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.15 % (GDP)<br>Period: 2012<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.49 % (GDP)<br>Period: 2013<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.46 % (GDP)<br>Period: 2014<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.32 % (GDP)<br>Period: 2015<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.31 % (GDP)<br>Period: 2016<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.28 % (GDP)<br>Period: 2017<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.24 % (GDP)<br>Period: 2018<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.2 % (GDP)<br>Period: 2019<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.66 % (GDP)<br>Period: 2020<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.15 % (GDP)<br>Period: 2021<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [3.7015261501417713, 3.8782845082642501, 4.1607933511679036, 3.9114085805290033, 3.8554075751821997, 4.0617988938493621, 4.4460626005002464, 4.3600543465970762, 4.7071612629813817, 4.7069390842631957, 4.6919707631162328, 4.5286768185183428, 3.9273905593550373, 4.2362588238173329, 3.7118678629296111, 3.7524424658929947, 3.7635812045265862, 4.6291303904741383, 4.2328851448145111],
      "text": ["Public spending - on education: 3.7 % (GDP)<br>Period: 2003<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.88 % (GDP)<br>Period: 2004<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.16 % (GDP)<br>Period: 2005<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.91 % (GDP)<br>Period: 2006<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.86 % (GDP)<br>Period: 2007<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.06 % (GDP)<br>Period: 2008<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.45 % (GDP)<br>Period: 2009<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.36 % (GDP)<br>Period: 2010<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.71 % (GDP)<br>Period: 2011<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.71 % (GDP)<br>Period: 2012<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.69 % (GDP)<br>Period: 2013<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.53 % (GDP)<br>Period: 2014<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.93 % (GDP)<br>Period: 2015<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.24 % (GDP)<br>Period: 2016<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.71 % (GDP)<br>Period: 2017<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.75 % (GDP)<br>Period: 2018<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.76 % (GDP)<br>Period: 2019<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.63 % (GDP)<br>Period: 2020<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.23 % (GDP)<br>Period: 2021<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Public spending - on education (REMIND_26)",
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
      "tickvals": [0, 25.000000000000007, 50, 75, 100],
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
    "b55c47503150": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c3de3548": {
      "y": {}
    }
  },
  "cur_data": "b55c47503150",
  "visdat": {
    "b55c47503150": ["function (y) ", "x"],
    "b55c3de3548": ["function (y) ", "x"]
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

  
