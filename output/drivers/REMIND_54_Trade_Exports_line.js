(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Trade_Exports_line') 

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
      "y": [0.35999999999999999, 0.34999999999999998, 0.37, 0.37, 0.38, 0.41000000000000003, 0.41999999999999998, 0.42999999999999999, 0.45000000000000007, 0.40000000000000002, 0.34999999999999998, 0.33000000000000002, 0.31, 0.34000000000000002, 0.32000000000000001, 0.31, 0.33000000000000002, 0.28999999999999998, 0.33000000000000002],
      "text": ["Exports: 0.36 % (World)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.35 % (World)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.37 % (World)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.37 % (World)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.38 % (World)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.41 % (World)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.42 % (World)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.43 % (World)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.45 % (World)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.4 % (World)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.35 % (World)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.33 % (World)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.31 % (World)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.34 % (World)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.32 % (World)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.31 % (World)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.33 % (World)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.29 % (World)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports: 0.33 % (World)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [1.8116945838625813, 1.7923820661247207, 1.7055750906018869, 1.6470567024166556, 1.7034115709846043, 1.7699875721230589, 1.9714608390737944, 2.0010805086507202, 2.0782822721222916, 2.0021306717049101, 2.1267572502743759, 1.9545640428359499, 2.0504178607408301, 2.165498312294996, 1.9730059835606617, 1.9046139241188613, 1.9126594584644376, 2.0835001229055337, 2.0640860318850476],
      "text": ["Exports: 1.81 % (World)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.79 % (World)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.71 % (World)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.65 % (World)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.7 % (World)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.77 % (World)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.97 % (World)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 2 % (World)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 2.08 % (World)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 2 % (World)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 2.13 % (World)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.95 % (World)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 2.05 % (World)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 2.17 % (World)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.97 % (World)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.9 % (World)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 1.91 % (World)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 2.08 % (World)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports: 2.06 % (World)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [0.11196590604942128, 0.12013742688434924, 0.13739743333001497, 0.14140742294978778, 0.13395347108721381, 0.14590572625818943, 0.13280196074449338, 0.17081290068698982, 0.14653040509134782, 0.15175474169380665, 0.13982566956498901, 0.12629277827677995, 0.12734422359081077, 0.13175524843902642, 0.13277044491478623, 0.12864450074189451, 0.12848484538969068, 0.12258005918244937, 0.12954851331955455],
      "text": ["Exports: 0.11 % (World)<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.12 % (World)<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.14 % (World)<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.14 % (World)<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.13 % (World)<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.15 % (World)<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.13 % (World)<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.17 % (World)<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.15 % (World)<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.15 % (World)<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.14 % (World)<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.13 % (World)<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.13 % (World)<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.13 % (World)<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.13 % (World)<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.13 % (World)<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.13 % (World)<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.12 % (World)<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports: 0.13 % (World)<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [0.19, 0.20000000000000001, 0.21999999999999997, 0.22, 0.23000000000000001, 0.28000000000000003, 0.29999999999999999, 0.25, 0.22, 0.20999999999999999, 0.20999999999999996, 0.19, 0.20999999999999996, 0.17000000000000001, 0.17000000000000001, 0.18999999999999997, 0.22, 0.22, 0.17000000000000004],
      "text": ["Exports: 0.19 % (World)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.2 % (World)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.22 % (World)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.22 % (World)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.23 % (World)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.28 % (World)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.3 % (World)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.25 % (World)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.22 % (World)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.21 % (World)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.21 % (World)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.19 % (World)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.21 % (World)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.17 % (World)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.17 % (World)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.19 % (World)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.22 % (World)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.22 % (World)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports: 0.17 % (World)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [3.6100000000000003, 3.4500000000000002, 3.4199999999999999, 3.2100000000000004, 2.9700000000000002, 2.7599999999999998, 2.5099999999999998, 2.54, 2.5099999999999998, 2.4900000000000002, 2.4399999999999999, 2.4599999999999995, 2.3900000000000001, 2.3599999999999994, 2.3100000000000001, 2.27, 2.3300000000000001, 2.2400000000000002, 2.3100000000000001],
      "text": ["Exports: 3.61 % (World)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 3.45 % (World)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 3.42 % (World)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 3.21 % (World)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.97 % (World)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.76 % (World)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.51 % (World)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.54 % (World)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.51 % (World)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.49 % (World)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.44 % (World)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.46 % (World)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.39 % (World)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.36 % (World)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.31 % (World)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.27 % (World)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.33 % (World)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.24 % (World)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports: 2.31 % (World)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [0.86289813715365371, 0.83589988599290954, 0.87407794028189578, 0.88572143447298701, 0.88840037909959446, 0.95295506766727633, 1.1795393353959382, 1.0582912707551524, 1.1828780697846046, 1.2852458842759742, 1.1878297301824892, 1.1540292684704174, 1.1363934293422724, 0.99476633135173342, 1.0945786556817738, 1.1008889436663434, 1.2010110721993688, 1.2529106562471821, 1.1023256728203852],
      "text": ["Exports: 0.86 % (World)<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 0.84 % (World)<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 0.87 % (World)<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 0.89 % (World)<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 0.89 % (World)<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 0.95 % (World)<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.18 % (World)<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.06 % (World)<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.18 % (World)<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.29 % (World)<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.19 % (World)<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.15 % (World)<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.14 % (World)<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 0.99 % (World)<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.09 % (World)<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.1 % (World)<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.2 % (World)<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.25 % (World)<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports: 1.1 % (World)<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [1.98, 1.8500000000000001, 1.8500000000000001, 1.8600000000000001, 1.74, 1.6200000000000001, 1.6000000000000001, 1.7200000000000002, 1.71, 1.7799999999999998, 1.7800000000000002, 1.8400000000000001, 2, 2.0099999999999998, 1.9899999999999998, 1.9999999999999998, 2.0800000000000001, 2.0200000000000005, 1.9899999999999998],
      "text": ["Exports: 1.98 % (World)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.85 % (World)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.85 % (World)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.86 % (World)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.74 % (World)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.62 % (World)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.6 % (World)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.72 % (World)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.71 % (World)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.78 % (World)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.78 % (World)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.84 % (World)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 2 % (World)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 2.01 % (World)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.99 % (World)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 2 % (World)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 2.08 % (World)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 2.02 % (World)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports: 1.99 % (World)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [0.99947364491481649, 0.97948422489643761, 1.069437441455098, 1.0594408056207656, 1.0194613851097738, 1.1094146050665645, 0.98947869607784278, 0.92951102901494409, 0.94950694761141807, 0.9495133779247561, 0.90953946670680696, 0.85956964895937671, 0.71964327178854748, 0.64968077698096138, 0.65967847198808993, 0.679670907150416, 0.61970196251991416, 0.53974194205290293, 0.75963874348259031],
      "text": ["Exports: 1 % (World)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.98 % (World)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 1.07 % (World)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 1.06 % (World)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 1.02 % (World)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 1.11 % (World)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.99 % (World)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.93 % (World)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.95 % (World)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.95 % (World)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.91 % (World)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.86 % (World)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.72 % (World)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.65 % (World)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.66 % (World)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.68 % (World)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.62 % (World)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.54 % (World)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports: 0.76 % (World)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [0.93000000000000016, 1, 1.0800000000000001, 1.1000000000000001, 1.1000000000000001, 1.1799999999999999, 1.1599999999999999, 1.2899999999999998, 1.3800000000000001, 1.3099999999999998, 1.2699999999999998, 1.1599999999999997, 1.1200000000000001, 1.1000000000000001, 1.1499999999999999, 1.1399999999999999, 1.0900000000000001, 1.1100000000000001, 1.2],
      "text": ["Exports: 0.93 % (World)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1 % (World)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.08 % (World)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.1 % (World)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.1 % (World)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.18 % (World)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.16 % (World)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.29 % (World)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.38 % (World)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.31 % (World)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.27 % (World)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.16 % (World)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.12 % (World)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.1 % (World)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.15 % (World)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.14 % (World)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.09 % (World)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.11 % (World)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports: 1.2 % (World)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [0.2049685535821002, 0.24394872345732038, 0.23128231279592537, 0.22637223718710409, 0.24641358834328186, 0.28658010597836314, 0.22849030192848488, 0.24039114904757086, 0.26013415612415663, 0.2674131014437362, 0.2493660684173501, 0.19859784026340105, 0.16569488245030034, 0.16771533528522464, 0.1743052569963626, 0.17489523579096347, 0.18966025977789669, 0.20307541815407282, 0.21831693520839107],
      "text": ["Exports: 0.2 % (World)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.24 % (World)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.23 % (World)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.23 % (World)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.25 % (World)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.29 % (World)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.23 % (World)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Exports: 0.24 % (World)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Exports: 0.26 % (World)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.27 % (World)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.25 % (World)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.2 % (World)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.17 % (World)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.17 % (World)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.17 % (World)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.17 % (World)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.19 % (World)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.2 % (World)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports: 0.22 % (World)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [2.4199999999999999, 2.6299999999999999, 2.6100000000000003, 2.5800000000000005, 2.5899999999999999, 2.5800000000000001, 2.7299999999999995, 2.8999999999999995, 3.0500000000000003, 3.1000000000000001, 3.0699999999999998, 3.0499999999999994, 3.04, 2.96, 2.96, 2.9300000000000002, 2.6800000000000002, 2.7400000000000002, 2.8399999999999999],
      "text": ["Exports: 2.42 % (World)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.63 % (World)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.61 % (World)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.58 % (World)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.59 % (World)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.58 % (World)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.73 % (World)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.9 % (World)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 3.05 % (World)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 3.1 % (World)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 3.07 % (World)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 3.05 % (World)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 3.04 % (World)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.96 % (World)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.96 % (World)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.93 % (World)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.68 % (World)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.74 % (World)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports: 2.84 % (World)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [0.40000000000000002, 0.35999999999999999, 0.34999999999999998, 0.35999999999999999, 0.34999999999999998, 0.31, 0.34000000000000002, 0.37, 0.31, 0.32000000000000001, 0.32000000000000001, 0.35000000000000003, 0.40000000000000002, 0.42000000000000004, 0.42999999999999994, 0.42999999999999994, 0.44, 0.41999999999999998, 0.38],
      "text": ["Exports: 0.4 % (World)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.36 % (World)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.35 % (World)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.36 % (World)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.35 % (World)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.31 % (World)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.34 % (World)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.37 % (World)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.31 % (World)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.32 % (World)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.32 % (World)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.35 % (World)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.4 % (World)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.42 % (World)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.43 % (World)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.43 % (World)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.44 % (World)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.42 % (World)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports: 0.38 % (World)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [0.050464347426184802, 0.060365158219695562, 0.066038758411749887, 0.075080952197380438, 0.085613206266275665, 0.10737205094213731, 0.094108620100006868, 0.096677621160923224, 0.11371261381454635, 0.11523078732674435, 0.10899242659591209, 0.1031518882568602, 0.078029510638825933, 0.067082905009948693, 0.075662786747727404, 0.081514818431234676, 0.08482419623219177, 0.077597571773633578, 0.079215444296848667],
      "text": ["Exports: 0.05 % (World)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports: 0.06 % (World)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports: 0.07 % (World)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports: 0.08 % (World)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports: 0.09 % (World)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports: 0.11 % (World)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports: 0.09 % (World)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports: 0.1 % (World)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports: 0.11 % (World)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports: 0.12 % (World)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports: 0.11 % (World)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports: 0.1 % (World)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports: 0.08 % (World)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports: 0.07 % (World)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports: 0.08 % (World)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports: 0.08 % (World)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports: 0.08 % (World)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports: 0.08 % (World)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports: 0.08 % (World)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [0.17000000000000001, 0.17999999999999999, 0.20000000000000001, 0.19999999999999998, 0.20000000000000001, 0.23000000000000004, 0.24000000000000002, 0.25, 0.28999999999999998, 0.31, 0.29999999999999999, 0.27000000000000002, 0.21999999999999997, 0.20000000000000001, 0.20999999999999996, 0.22, 0.20999999999999999, 0.17000000000000004, 0.18999999999999997],
      "text": ["Exports: 0.17 % (World)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.18 % (World)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.2 % (World)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.2 % (World)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.2 % (World)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.23 % (World)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.24 % (World)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.25 % (World)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.29 % (World)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.31 % (World)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.3 % (World)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.27 % (World)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.22 % (World)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.2 % (World)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.21 % (World)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.22 % (World)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.21 % (World)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.17 % (World)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports: 0.19 % (World)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [0.023908342224620131, 0.023511329765337641, 0.026855801073744707, 0.029522232009287368, 0.032212495860087141, 0.03718922293424208, 0.036811965205342072, 0.03707248203442802, 0.040023712234123564, 0.04215036942910555, 0.040618830303680062, 0.040554526520528718, 0.032611430915060927, 0.030448283817496979, 0.032264842837168003, 0.03320233199213888, 0.03426511587824841, 0.032085340621662593, 0.032576837593420213],
      "text": ["Exports: 0.02 % (World)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.02 % (World)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.04 % (World)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.04 % (World)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.04 % (World)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.04 % (World)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.04 % (World)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.04 % (World)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.04 % (World)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports: 0.03 % (World)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [1.6599999999999999, 1.8299999999999998, 2.1299999999999999, 2.2999999999999998, 2.3199999999999998, 2.6800000000000002, 2.1800000000000002, 2.3999999999999999, 2.6200000000000001, 2.6699999999999999, 2.5900000000000003, 2.3999999999999999, 1.8900000000000001, 1.6200000000000001, 1.8300000000000001, 2.0800000000000005, 1.99, 1.7500000000000002, 2.0499999999999998],
      "text": ["Exports: 1.66 % (World)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 1.83 % (World)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.13 % (World)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.3 % (World)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.32 % (World)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.68 % (World)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.18 % (World)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.4 % (World)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.62 % (World)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.67 % (World)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.59 % (World)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.4 % (World)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 1.89 % (World)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 1.62 % (World)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 1.83 % (World)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.08 % (World)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 1.99 % (World)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 1.75 % (World)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports: 2.05 % (World)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [0.0098700224441886555, 0.0098704814265009218, 0.0098711720614475026, 0.0098726177460607065, 0.0098728588735388471, 0.0098732711325410123, 0.0098745800074472572, 0.0098754374248692985, 0.0098766763687067761, 0.009878039138391425, 0.0098789960748255547, 0.0098802021934300092, 0.0098813036301310993, 0.0098820473932692502, 0.0098829663293787534, 0.0098841521517779585, 0.0098859067804406512, 0.0098880895655538512, 0.0098896181547318777],
      "text": ["Exports: 0.01 % (World)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports: 0.01 % (World)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports: 0.01 % (World)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports: 0.01 % (World)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports: 0.01 % (World)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports: 0.01 % (World)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports: 0.01 % (World)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [0.25, 0.23999999999999999, 0.28999999999999998, 0.31, 0.32000000000000001, 0.35999999999999999, 0.41999999999999998, 0.42999999999999994, 0.48000000000000004, 0.56000000000000005, 0.61999999999999988, 0.69999999999999996, 0.83999999999999986, 0.94000000000000006, 1.03, 1.0700000000000001, 1.1799999999999997, 1.3399999999999999, 1.27],
      "text": ["Exports: 0.25 % (World)<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.24 % (World)<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.29 % (World)<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.31 % (World)<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.32 % (World)<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.36 % (World)<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.42 % (World)<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.43 % (World)<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.48 % (World)<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.56 % (World)<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.62 % (World)<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.7 % (World)<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.84 % (World)<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 0.94 % (World)<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 1.03 % (World)<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 1.07 % (World)<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 1.18 % (World)<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 1.34 % (World)<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports: 1.27 % (World)<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [0.14999999999999999, 0.14000000000000001, 0.14000000000000004, 0.14000000000000001, 0.13, 0.12, 0.14999999999999997, 0.13000000000000003, 0.14000000000000001, 0.13000000000000003, 0.14000000000000001, 0.13, 0.14000000000000001, 0.13, 0.12000000000000001, 0.12, 0.12, 0.13, 0.12],
      "text": ["Exports: 0.15 % (World)<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.14 % (World)<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.14 % (World)<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.14 % (World)<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.13 % (World)<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.12 % (World)<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.15 % (World)<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.13 % (World)<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.14 % (World)<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.13 % (World)<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.14 % (World)<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.13 % (World)<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.14 % (World)<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.13 % (World)<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.12 % (World)<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.12 % (World)<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.12 % (World)<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.13 % (World)<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports: 0.12 % (World)<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [0.080000000000000002, 0.070000000000000007, 0.080000000000000002, 0.080000000000000002, 0.080000000000000002, 0.080000000000000002, 0.11, 0.099999999999999992, 0.12, 0.12, 0.13, 0.14000000000000001, 0.16, 0.17999999999999999, 0.17000000000000001, 0.17000000000000004, 0.19, 0.17999999999999999, 0.17000000000000001],
      "text": ["Exports: 0.08 % (World)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.07 % (World)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.08 % (World)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.08 % (World)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.08 % (World)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.08 % (World)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.11 % (World)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.1 % (World)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.12 % (World)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.12 % (World)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.13 % (World)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.14 % (World)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.16 % (World)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.18 % (World)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.17 % (World)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.17 % (World)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.19 % (World)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.18 % (World)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports: 0.17 % (World)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [0.77999999999999992, 0.75000000000000011, 0.76999999999999991, 0.78000000000000003, 0.75, 0.78000000000000003, 0.83000000000000007, 0.98999999999999988, 1.0700000000000001, 1.01, 0.94999999999999996, 0.91000000000000003, 0.88, 0.87, 0.91000000000000003, 0.89000000000000001, 0.8600000000000001, 0.83999999999999997, 0.94999999999999996],
      "text": ["Exports: 0.78 % (World)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.75 % (World)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.77 % (World)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.78 % (World)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.75 % (World)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.78 % (World)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.83 % (World)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.99 % (World)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 1.07 % (World)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 1.01 % (World)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.95 % (World)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.91 % (World)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.88 % (World)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.87 % (World)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.91 % (World)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.89 % (World)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.86 % (World)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.84 % (World)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports: 0.95 % (World)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [0.34326723681022031, 0.3491759021459182, 0.34862459696561721, 0.34979312969486837, 0.3415991547971331, 0.34268222115132524, 0.347231427627747, 0.35839487463154945, 0.35650588259999411, 0.35245225354736676, 0.34549105467969965, 0.34622858428911329, 0.33774032618836441, 0.33476319482357947, 0.33847939431845897, 0.34119522482952641, 0.34151151552445058, 0.33587188549642549, 0.34031385341572012],
      "text": ["Exports: 0.34 % (World)<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.35 % (World)<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.35 % (World)<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.35 % (World)<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.34 % (World)<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.34 % (World)<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.35 % (World)<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.36 % (World)<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.36 % (World)<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.35 % (World)<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.35 % (World)<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.35 % (World)<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.34 % (World)<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.33 % (World)<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.34 % (World)<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.34 % (World)<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.34 % (World)<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports: 0.34 % (World)<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Exports: 0.34 % (World)<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [1.03, 1.0299999999999998, 1.03, 1.05, 1.0699999999999998, 1.0700000000000001, 1.1599999999999999, 1.2200000000000002, 1.2000000000000002, 1.2300000000000002, 1.23, 1.2000000000000002, 1.3100000000000001, 1.3600000000000001, 1.3600000000000001, 1.3400000000000001, 1.3400000000000001, 1.1799999999999999, 1.1100000000000001],
      "text": ["Exports: 1.03 % (World)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.03 % (World)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.03 % (World)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.05 % (World)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.07 % (World)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.07 % (World)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.16 % (World)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.22 % (World)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.2 % (World)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.23 % (World)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.23 % (World)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.2 % (World)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.31 % (World)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.36 % (World)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.36 % (World)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.34 % (World)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.34 % (World)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.18 % (World)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports: 1.11 % (World)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [5.6699999999999999, 5.6399999999999997, 5.29, 4.96, 4.6799999999999997, 4.54, 4.2000000000000002, 4.6200000000000001, 4.2000000000000002, 4.0599999999999996, 3.5899999999999999, 3.6599999999999997, 3.7400000000000002, 3.9500000000000006, 3.8700000000000006, 3.7599999999999998, 3.6899999999999995, 3.5999999999999996, 3.4000000000000004],
      "text": ["Exports: 5.67 % (World)<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 5.64 % (World)<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 5.29 % (World)<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 4.96 % (World)<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 4.68 % (World)<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 4.54 % (World)<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 4.2 % (World)<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 4.62 % (World)<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 4.2 % (World)<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 4.06 % (World)<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 3.59 % (World)<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 3.66 % (World)<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 3.74 % (World)<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 3.95 % (World)<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 3.87 % (World)<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 3.76 % (World)<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 3.69 % (World)<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 3.6 % (World)<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports: 3.4 % (World)<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [0.11667775755284128, 0.12229603206437033, 0.14407842633211068, 0.14605195333968904, 0.14782652958862166, 0.16148963828220761, 0.13089306057143063, 0.1369112030942343, 0.12612779090443282, 0.12736526362440231, 0.11457165643133986, 0.10499610595402524, 0.086657496561499694, 0.08055357948995133, 0.086358898292200517, 0.084476641053549822, 0.07974442094638895, 0.068106310776117951, 0.07584926134009809],
      "text": ["Exports: 0.12 % (World)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports: 0.12 % (World)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports: 0.14 % (World)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.15 % (World)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.15 % (World)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.16 % (World)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.13 % (World)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.14 % (World)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.13 % (World)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.13 % (World)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.11 % (World)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.1 % (World)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.09 % (World)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.08 % (World)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.09 % (World)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.08 % (World)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.08 % (World)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.07 % (World)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports: 0.08 % (World)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [0.28999999999999998, 0.34999999999999998, 0.39000000000000001, 0.46000000000000002, 0.46000000000000002, 0.38, 0.40999999999999998, 0.44, 0.42999999999999999, 0.40999999999999998, 0.39000000000000001, 0.37, 0.34000000000000008, 0.34000000000000002, 0.34999999999999998, 0.34000000000000002, 0.32000000000000001, 0.35999999999999999, 0.38],
      "text": ["Exports: 0.29 % (World)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.35 % (World)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.39 % (World)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.46 % (World)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.46 % (World)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.38 % (World)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.41 % (World)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.44 % (World)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.43 % (World)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.41 % (World)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.39 % (World)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.37 % (World)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.34 % (World)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.34 % (World)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.35 % (World)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.34 % (World)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.32 % (World)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.36 % (World)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports: 0.38 % (World)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [0.78999999999999992, 0.87, 0.88, 0.8600000000000001, 0.88, 0.93999999999999984, 0.97000000000000008, 0.89000000000000001, 0.88, 0.96000000000000008, 0.98999999999999988, 1.02, 1.02, 0.98999999999999999, 1, 0.9900000000000001, 1.04, 0.95999999999999996, 1.0900000000000001],
      "text": ["Exports: 0.79 % (World)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.87 % (World)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.88 % (World)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.86 % (World)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.88 % (World)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.94 % (World)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.97 % (World)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.89 % (World)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.88 % (World)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.96 % (World)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.99 % (World)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 1.02 % (World)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 1.02 % (World)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.99 % (World)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 1 % (World)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.99 % (World)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 1.04 % (World)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 0.96 % (World)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports: 1.09 % (World)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [0.02, 0.02, 0.019999999999999997, 0.02, 0.020000000000000004, 0.019999999999999997, 0.020000000000000004, 0.02, 0.019999999999999997, 0.029999999999999999, 0.029999999999999999, 0.029999999999999999, 0.029999999999999999, 0.030000000000000002, 0.030000000000000002, 0.029999999999999999, 0.029999999999999999, 0.040000000000000001, 0.030000000000000002],
      "text": ["Exports: 0.02 % (World)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.02 % (World)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.02 % (World)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.02 % (World)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.02 % (World)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.02 % (World)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.02 % (World)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.02 % (World)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.02 % (World)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.03 % (World)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.03 % (World)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.03 % (World)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.03 % (World)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.03 % (World)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.03 % (World)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.03 % (World)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.03 % (World)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.04 % (World)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports: 0.03 % (World)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [0.22212663797725984, 0.24180030412463943, 0.25047839754201434, 0.26891264816386279, 0.30474938911492855, 0.32768284048217056, 0.31938046484529103, 0.30754310862129686, 0.31396513001241433, 0.28915094170856936, 0.31208138247363665, 0.33156266111500499, 0.32722380789266603, 0.35354073887435733, 0.36065093713941709, 0.3660627716875261, 0.37185571892236813, 0.37934929717813021, 0.37598611623307937],
      "text": ["Exports: 0.22 % (World)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.24 % (World)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.25 % (World)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.27 % (World)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.3 % (World)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.33 % (World)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.32 % (World)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.31 % (World)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.31 % (World)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.29 % (World)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.31 % (World)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.33 % (World)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.33 % (World)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.35 % (World)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.36 % (World)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.37 % (World)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.37 % (World)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.38 % (World)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports: 0.38 % (World)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [0.40999999999999998, 0.42999999999999999, 0.54000000000000004, 0.55000000000000004, 0.59999999999999998, 0.56999999999999995, 0.59999999999999998, 0.6399999999999999, 0.70999999999999996, 0.65000000000000002, 0.54000000000000015, 0.45000000000000001, 0.37000000000000005, 0.47999999999999998, 0.49000000000000005, 0.41999999999999998, 0.28000000000000003, 0.20999999999999999, 0.31],
      "text": ["Exports: 0.41 % (World)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.43 % (World)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.54 % (World)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.55 % (World)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.6 % (World)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.57 % (World)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.6 % (World)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.64 % (World)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.71 % (World)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.65 % (World)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.54 % (World)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.45 % (World)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.37 % (World)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.48 % (World)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.49 % (World)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.42 % (World)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.28 % (World)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.21 % (World)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports: 0.31 % (World)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [0.98999999999999988, 1.1399999999999999, 1.27, 1.3800000000000001, 1.49, 1.49, 1.75, 2.0199999999999996, 2.04, 2.0099999999999998, 2.0600000000000001, 2.0099999999999998, 2.0099999999999998, 2.1600000000000001, 2.2200000000000002, 2.1899999999999999, 2.1899999999999999, 2.29, 2.5299999999999998],
      "text": ["Exports: 0.99 % (World)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 1.14 % (World)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 1.27 % (World)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 1.38 % (World)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 1.49 % (World)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 1.49 % (World)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 1.75 % (World)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.02 % (World)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.04 % (World)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.01 % (World)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.06 % (World)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.01 % (World)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.01 % (World)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.16 % (World)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.22 % (World)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.19 % (World)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.19 % (World)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.29 % (World)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports: 2.53 % (World)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [11.33, 10.6, 10.31, 10.109999999999999, 9.8000000000000007, 9.4700000000000006, 10.119999999999997, 9.9800000000000004, 9.6400000000000006, 9.9499999999999993, 9.9800000000000004, 10.210000000000001, 10.94, 10.960000000000001, 10.640000000000001, 10.33, 10.49, 9.8499999999999996, 9.4800000000000004],
      "text": ["Exports: 11.33 % (World)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.6 % (World)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.31 % (World)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.11 % (World)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 9.8 % (World)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 9.47 % (World)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.12 % (World)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 9.98 % (World)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 9.64 % (World)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 9.95 % (World)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 9.98 % (World)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.21 % (World)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.94 % (World)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.96 % (World)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.64 % (World)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.33 % (World)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 10.49 % (World)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 9.85 % (World)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports: 9.48 % (World)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [0.02, 0.02, 0.02, 0.02, 0.040000000000000008, 0.039999999999999994, 0.029999999999999995, 0.050000000000000003, 0.050000000000000003, 0.040000000000000001, 0.050000000000000003, 0.060000000000000005, 0.049999999999999996, 0.040000000000000001, 0.059999999999999998, 0.059999999999999998, 0.059999999999999998, 0.059999999999999998, 0.080000000000000002],
      "text": ["Exports: 0.02 % (World)<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.02 % (World)<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.02 % (World)<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.02 % (World)<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.04 % (World)<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.04 % (World)<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.03 % (World)<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.05 % (World)<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.05 % (World)<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.04 % (World)<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.05 % (World)<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.06 % (World)<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.05 % (World)<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.04 % (World)<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.06 % (World)<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.06 % (World)<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.06 % (World)<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.06 % (World)<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports: 0.08 % (World)<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [2.5499999999999998, 2.4500000000000002, 2.2799999999999994, 2.1899999999999999, 2.2599999999999998, 2.1600000000000001, 2.2000000000000002, 1.9800000000000002, 1.9899999999999998, 1.8700000000000001, 1.95, 1.97, 1.9399999999999999, 2.0499999999999998, 2.0600000000000001, 2.0299999999999998, 2.0099999999999998, 1.8, 1.8400000000000001],
      "text": ["Exports: 2.55 % (World)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.45 % (World)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.28 % (World)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.19 % (World)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.26 % (World)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.16 % (World)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.2 % (World)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 1.98 % (World)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 1.99 % (World)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 1.87 % (World)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 1.95 % (World)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 1.97 % (World)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 1.94 % (World)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.05 % (World)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.06 % (World)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.03 % (World)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 2.01 % (World)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 1.8 % (World)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports: 1.84 % (World)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [0.80000000000000004, 0.79000000000000004, 0.83999999999999986, 0.90000000000000013, 0.97999999999999987, 1.04, 1.04, 1.0299999999999998, 1.02, 0.97999999999999987, 1.03, 1.0800000000000001, 1.0900000000000001, 1.1599999999999999, 1.22, 1.26, 1.3100000000000001, 1.4600000000000002, 1.47],
      "text": ["Exports: 0.8 % (World)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 0.79 % (World)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 0.84 % (World)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 0.9 % (World)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 0.98 % (World)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.04 % (World)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.04 % (World)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.03 % (World)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.02 % (World)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 0.98 % (World)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.03 % (World)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.08 % (World)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.09 % (World)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.16 % (World)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.22 % (World)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.26 % (World)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.31 % (World)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.46 % (World)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports: 1.47 % (World)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Exports: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [0.51999999999999991, 0.52000000000000002, 0.54000000000000004, 0.55000000000000004, 0.55000000000000004, 0.53000000000000003, 0.53000000000000003, 0.57999999999999996, 0.57999999999999996, 0.53000000000000003, 0.5, 0.46999999999999997, 0.46000000000000008, 0.45000000000000001, 0.46000000000000002, 0.45000000000000001, 0.43999999999999995, 0.43000000000000005, 0.48999999999999999],
      "text": ["Exports: 0.52 % (World)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.52 % (World)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.54 % (World)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.55 % (World)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.55 % (World)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.53 % (World)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.53 % (World)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.58 % (World)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.58 % (World)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.53 % (World)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.5 % (World)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.47 % (World)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.46 % (World)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.45 % (World)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.46 % (World)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.45 % (World)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.44 % (World)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.43 % (World)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports: 0.49 % (World)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [8.9899999999999984, 9.0500000000000007, 8.5800000000000001, 8.5399999999999991, 8.7599999999999998, 8.4700000000000006, 8.3100000000000005, 7.7800000000000002, 7.6999999999999993, 7.3300000000000001, 7.4000000000000012, 7.6200000000000001, 7.6000000000000005, 7.8499999999999988, 7.7599999999999998, 7.6500000000000004, 7.5700000000000012, 7.7499999999999991, 7.5499999999999998],
      "text": ["Exports: 8.99 % (World)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 9.05 % (World)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 8.58 % (World)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 8.54 % (World)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 8.76 % (World)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 8.47 % (World)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 8.31 % (World)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.78 % (World)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.7 % (World)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.33 % (World)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.4 % (World)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.62 % (World)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.6 % (World)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.85 % (World)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.76 % (World)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.65 % (World)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.57 % (World)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.75 % (World)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports: 7.55 % (World)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [0.32933595170940133, 0.38997056546905978, 0.41645837567569066, 0.44265188253147902, 0.4714145475831526, 0.48773450014123659, 0.47970737368555921, 0.4669404032216648, 0.47091891857971419, 0.46271827412398747, 0.46264900320930885, 0.4811373537335884, 0.47353490690781497, 0.49383180414267164, 0.50241567094398909, 0.50910608493282516, 0.50298235394506563, 0.5228690112197345, 0.5058325675670754],
      "text": ["Exports: 0.33 % (World)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.39 % (World)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.42 % (World)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.44 % (World)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.47 % (World)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.49 % (World)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.48 % (World)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.47 % (World)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.47 % (World)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.46 % (World)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.46 % (World)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.48 % (World)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.47 % (World)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.49 % (World)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.5 % (World)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.51 % (World)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.5 % (World)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.52 % (World)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports: 0.51 % (World)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [1.4599999999999997, 1.4099999999999999, 1.3300000000000001, 1.26, 1.29, 1.2, 1.4099999999999999, 1.23, 1.1200000000000003, 1.0600000000000001, 1.0800000000000001, 1.23, 1.7200000000000002, 1.79, 1.8100000000000001, 1.9299999999999999, 2.1099999999999999, 2.6099999999999999, 2.5600000000000001],
      "text": ["Exports: 1.46 % (World)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.41 % (World)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.33 % (World)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.26 % (World)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.29 % (World)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.2 % (World)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.41 % (World)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.23 % (World)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.12 % (World)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.06 % (World)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.08 % (World)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.23 % (World)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.72 % (World)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.79 % (World)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.81 % (World)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 1.93 % (World)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 2.11 % (World)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 2.61 % (World)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports: 2.56 % (World)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [0.5, 0.46999999999999997, 0.41999999999999998, 0.43999999999999995, 0.44, 0.41999999999999998, 0.42999999999999994, 0.38, 0.37999999999999995, 0.37, 0.39000000000000001, 0.40000000000000008, 0.39000000000000001, 0.40999999999999998, 0.41999999999999993, 0.42999999999999999, 0.42999999999999999, 0.38999999999999996, 0.39000000000000001],
      "text": ["Exports: 0.5 % (World)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.47 % (World)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.42 % (World)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.44 % (World)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.44 % (World)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.42 % (World)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.43 % (World)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.38 % (World)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.38 % (World)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.37 % (World)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.39 % (World)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.4 % (World)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.39 % (World)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.41 % (World)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.42 % (World)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.43 % (World)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.43 % (World)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.39 % (World)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports: 0.39 % (World)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [1.0800000000000001, 1.1899999999999999, 1.4799999999999998, 1.5499999999999998, 1.47, 1.6699999999999999, 1.2899999999999998, 1.4099999999999999, 1.7100000000000002, 1.79, 1.6899999999999999, 1.5199999999999998, 1.05, 0.98999999999999988, 1.0700000000000001, 1.2799999999999998, 1.1799999999999999, 0.83999999999999997, 1.0700000000000001],
      "text": ["Exports: 1.08 % (World)<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.19 % (World)<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.48 % (World)<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.55 % (World)<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.47 % (World)<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.67 % (World)<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.29 % (World)<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.41 % (World)<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.71 % (World)<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.79 % (World)<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.69 % (World)<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.52 % (World)<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.05 % (World)<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 0.99 % (World)<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.07 % (World)<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.28 % (World)<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.18 % (World)<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 0.84 % (World)<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports: 1.07 % (World)<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [5.2694632330250304, 5.04949257532496, 4.6995345158360777, 4.4595638802402693, 4.3795751359451121, 4.2495903435297135, 4.2895888105542328, 3.8096366485739965, 3.70964825782315, 3.5196688734419959, 3.5996642935156418, 3.6396630493894842, 3.5996685298041897, 3.669663689849421, 3.5796733157236407, 3.5996733360810671, 3.5596790681374531, 3.3197026312247919, 3.3197048158971194],
      "text": ["Exports: 5.27 % (World)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 5.05 % (World)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 4.7 % (World)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 4.46 % (World)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 4.38 % (World)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 4.25 % (World)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 4.29 % (World)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.81 % (World)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.71 % (World)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.52 % (World)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.6 % (World)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.64 % (World)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.6 % (World)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.67 % (World)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.58 % (World)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.6 % (World)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.56 % (World)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.32 % (World)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports: 3.32 % (World)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [5.3811432253617157, 5.2219470930995762, 5.0627865985328313, 5.1025676740947725, 4.6350827070092429, 4.1377583171055266, 4.1278048598022004, 3.8393540344189723, 3.7896479019690674, 3.7001731219971834, 3.6604379909781275, 3.7400861679990127, 3.9092955599821377, 3.7999845120742419, 3.670730637344656, 3.6707519324819859, 3.7105438345000663, 3.6508282794160172, 3.4517812292900536],
      "text": ["Exports: 5.38 % (World)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 5.22 % (World)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 5.06 % (World)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 5.1 % (World)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 4.64 % (World)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 4.14 % (World)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 4.13 % (World)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.84 % (World)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.79 % (World)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.7 % (World)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.66 % (World)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.74 % (World)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.91 % (World)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.8 % (World)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.67 % (World)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.67 % (World)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.71 % (World)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.65 % (World)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports: 3.45 % (World)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [1.28, 1.27, 1.2199999999999998, 1.1799999999999999, 1.21, 1.1899999999999999, 1.1599999999999999, 1.0800000000000001, 1.0600000000000001, 0.98999999999999988, 1, 1.02, 0.98000000000000009, 1.02, 1, 1.03, 1.0200000000000002, 1.03, 1],
      "text": ["Exports: 1.28 % (World)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.27 % (World)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.22 % (World)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.18 % (World)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.21 % (World)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.19 % (World)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.16 % (World)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.08 % (World)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.06 % (World)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 0.99 % (World)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1 % (World)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.02 % (World)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 0.98 % (World)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.02 % (World)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1 % (World)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.03 % (World)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.02 % (World)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1.03 % (World)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports: 1 % (World)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [4.8029530583057713, 5.3596150653348777, 5.9950216816350466, 6.6789389303813698, 7.2745721245097945, 7.5673214173274985, 7.9014883217181389, 8.713670878107834, 8.9480676141992479, 9.5550906095022743, 10.054756692007178, 10.35803343296835, 11.161151546463811, 10.575007314265402, 10.575130274797212, 10.574795321597499, 10.632948828643094, 12.256975062380199, 12.990875560159465],
      "text": ["Exports: 4.8 % (World)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 5.36 % (World)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 6 % (World)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 6.68 % (World)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 7.27 % (World)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 7.57 % (World)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 7.9 % (World)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 8.71 % (World)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 8.95 % (World)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 9.56 % (World)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 10.05 % (World)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 10.36 % (World)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 11.16 % (World)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 10.58 % (World)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 10.58 % (World)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 10.57 % (World)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 10.63 % (World)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 12.26 % (World)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports: 12.99 % (World)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [0.20956546587864291, 0.22917708484373581, 0.24803574975029749, 0.25279797046172037, 0.26097255118339652, 0.30849504706693909, 0.29322212871088715, 0.30030426200654842, 0.26573359978523603, 0.2910034013605442, 0.28824579325910549, 0.28306092348088052, 0.24992438477892842, 0.23541049205626294, 0.24730141229326311, 0.26934405661512756, 0.26950626094159158, 0.22031625756968035, 0.23859151474914589],
      "text": ["Exports: 0.21 % (World)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports: 0.23 % (World)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports: 0.25 % (World)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports: 0.25 % (World)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports: 0.26 % (World)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports: 0.31 % (World)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports: 0.29 % (World)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports: 0.3 % (World)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports: 0.27 % (World)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports: 0.29 % (World)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports: 0.29 % (World)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports: 0.28 % (World)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports: 0.25 % (World)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports: 0.24 % (World)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports: 0.25 % (World)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports: 0.27 % (World)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports: 0.27 % (World)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports: 0.22 % (World)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports: 0.24 % (World)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [1.48, 1.48, 1.4000000000000001, 1.3799999999999999, 1.3799999999999999, 1.3100000000000001, 1.21, 1.1899999999999999, 1.1799999999999999, 1.1200000000000001, 1.0900000000000001, 1.0800000000000001, 1.0700000000000001, 1.0800000000000001, 1.05, 1.03, 1.05, 1.1000000000000001, 1.1100000000000001],
      "text": ["Exports: 1.48 % (World)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.48 % (World)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.4 % (World)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.38 % (World)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.38 % (World)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.31 % (World)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.21 % (World)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.19 % (World)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.18 % (World)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.12 % (World)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.09 % (World)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.08 % (World)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.07 % (World)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.08 % (World)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.05 % (World)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.03 % (World)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.05 % (World)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.1 % (World)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports: 1.11 % (World)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [1.0300638519219176, 0.97116848687197999, 0.97121943604081007, 0.97131226272607385, 0.95180120764498088, 0.97154133181483027, 0.95197069973769632, 0.85384071979898246, 0.82448234453634195, 0.78532513802354464, 0.8050698634062402, 0.81496297274380591, 0.79538944990565774, 0.80523425088195055, 0.80523189789577621, 0.8052139787145739, 0.8247666131639616, 0.88358369097267464, 0.87368640057546043],
      "text": ["Exports: 1.03 % (World)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.97 % (World)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.97 % (World)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.97 % (World)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.95 % (World)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.97 % (World)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.95 % (World)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.85 % (World)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.82 % (World)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.79 % (World)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.81 % (World)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.81 % (World)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.8 % (World)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.81 % (World)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.81 % (World)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.81 % (World)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.82 % (World)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.88 % (World)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports: 0.87 % (World)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [3.9926505648716284, 3.8834038154586268, 3.59530228828178, 3.4861173419584084, 3.5556705301589258, 3.3174011269477348, 3.1287203778957404, 2.8604870176326198, 2.7909254846797804, 2.6418566186363868, 2.6616720173445678, 2.6813325954273459, 2.6114487393551369, 2.6805431625706291, 2.670054041074994, 2.6495506005199125, 2.6089113405554811, 2.5390271501156145, 2.5585289651969569],
      "text": ["Exports: 3.99 % (World)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 3.88 % (World)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 3.6 % (World)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 3.49 % (World)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 3.56 % (World)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 3.32 % (World)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 3.13 % (World)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.86 % (World)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.79 % (World)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.64 % (World)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.66 % (World)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.68 % (World)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.61 % (World)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.68 % (World)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.67 % (World)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.65 % (World)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.61 % (World)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.54 % (World)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports: 2.56 % (World)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [3.7599999999999998, 3.7200000000000006, 3.5600000000000001, 3.4399999999999995, 3.4499999999999997, 3.4300000000000002, 3.4700000000000002, 3.1800000000000002, 3.1200000000000001, 2.9900000000000002, 3.0600000000000001, 3.0899999999999999, 3.0499999999999998, 3.0599999999999996, 3.1000000000000001, 3.1499999999999999, 3.1000000000000001, 3.27, 3.23],
      "text": ["Exports: 3.76 % (World)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.72 % (World)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.56 % (World)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.44 % (World)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.45 % (World)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.43 % (World)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.47 % (World)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.18 % (World)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.12 % (World)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 2.99 % (World)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.06 % (World)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.09 % (World)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.05 % (World)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.06 % (World)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.1 % (World)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.15 % (World)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.1 % (World)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.27 % (World)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports: 3.23 % (World)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [2.3178305712823595, 2.2795750720271433, 2.193067133598781, 2.088808070707616, 2.1082540603274378, 2.0871298355163845, 2.0590409912065191, 1.8946443007123241, 1.8554118884853006, 1.7293224280233905, 1.7491766408747607, 1.7785302518168569, 1.6832502473868185, 1.7974674174604202, 1.7952431033252829, 1.7758457629095927, 1.7575338668051426, 1.8373156752189557, 1.9024664592824343],
      "text": ["Exports: 2.32 % (World)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 2.28 % (World)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 2.19 % (World)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 2.09 % (World)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 2.11 % (World)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 2.09 % (World)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 2.06 % (World)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.89 % (World)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.86 % (World)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.73 % (World)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.75 % (World)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.78 % (World)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.68 % (World)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.8 % (World)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.8 % (World)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.78 % (World)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.76 % (World)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.84 % (World)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports: 1.9 % (World)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [0.69648814864400177, 0.68652460323341735, 0.64671495524910749, 0.63674839565608499, 0.6566307311641103, 0.65661622735012837, 0.57701419551605471, 0.517311756534649, 0.48747850269093707, 0.44769527487200106, 0.4477058148551184, 0.42781678013722124, 0.39797574246441425, 0.40793106101672694, 0.4278351976170886, 0.42783805270271141, 0.43779019896829918, 0.44774320394341688, 0.43779790148410241],
      "text": ["Exports: 0.7 % (World)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.69 % (World)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.65 % (World)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.64 % (World)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.66 % (World)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.66 % (World)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.58 % (World)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.52 % (World)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.49 % (World)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.45 % (World)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.45 % (World)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.43 % (World)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.4 % (World)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.41 % (World)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.43 % (World)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.43 % (World)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.44 % (World)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.45 % (World)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports: 0.44 % (World)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [0.38318260245513369, 0.41939492939790612, 0.39069968266219424, 0.37118308242469017, 0.38991030993911729, 0.39772342404596916, 0.370940778894711, 0.32421957445724631, 0.30566903581242033, 0.28613926987533911, 0.28563822803093497, 0.30416382246915757, 0.27670461035922023, 0.27631450977238736, 0.28597765384062596, 0.31247566588043157, 0.31214128816239961, 0.25938254269740657, 0.30451052352093755],
      "text": ["Exports: 0.38 % (World)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.42 % (World)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.39 % (World)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.37 % (World)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.39 % (World)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.4 % (World)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.37 % (World)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.32 % (World)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.31 % (World)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.29 % (World)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.29 % (World)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.3 % (World)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.28 % (World)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.28 % (World)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.29 % (World)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.31 % (World)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.31 % (World)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.26 % (World)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports: 0.3 % (World)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Exports (REMIND_54)",
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
    "b55c57a4b0e": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c35d67a0": {
      "y": {}
    }
  },
  "cur_data": "b55c57a4b0e",
  "visdat": {
    "b55c57a4b0e": ["function (y) ", "x"],
    "b55c35d67a0": ["function (y) ", "x"]
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

  
