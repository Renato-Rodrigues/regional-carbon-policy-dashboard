(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Trade_Imports___coal_line') 

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
      "y": [1915.4699999999998, 2862.6499999999996, 2751.98, 2546.4200000000001, 3166.6999999999998, 3654.8900000000003, 2004.8299999999997, 2967.3200000000002, 3355.7700000000004, 2885.9099999999999, 3080.2600000000002, 3439.8499999999999, 3391.3100000000004, 2673.9499999999998, 2716.9400000000001, 2494.6300000000001, 1706.29, 1963.4199999999998, 2967.9299999999998],
      "text": ["Imports - coal: 1915.47 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2862.65 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2751.98 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2546.42 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 3166.7 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 3654.89 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2004.83 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2967.32 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 3355.77 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2885.91 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 3080.26 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 3439.85 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 3391.31 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2673.95 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2716.94 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2494.63 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 1706.29 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 1963.42 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Imports - coal: 2967.93 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [198.86235274860198, 195.42053526033786, 234.97684757024962, 260.88715129772726, 334.89359820906651, 254.02652597183902, 267.42140386603478, 212.44470311774714, 185.99346039092089, 209.10732700605527, 225.38337529285477, 188.09949807072377, 224.47700669053563, 196.17125657366242, 189.46334420465445, 138.44024651102129, 139.79953453397468, 137.96296332755566, 154.6407972602519],
      "text": ["Imports - coal: 198.86 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 195.42 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 234.98 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 260.89 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 334.89 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 254.03 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 267.42 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 212.44 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 185.99 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 209.11 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 225.38 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 188.1 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 224.48 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 196.17 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 189.46 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 138.44 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 139.8 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 137.96 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Imports - coal: 154.64 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [254.31386931848439, 295.8455703169044, 309.59159895923347, 300.4431208021191, 307.86397876518583, 292.81687603882756, 278.70065835297703, 304.87832170775846, 294.33959725144172, 292.57987108225421, 274.73028414222512, 344.31981695852636, 381.90282864357903, 414.00526015528214, 407.31628452479049, 371.89495978732634, 489.7552062054238, 484.22107073186652, 465.15239387379643],
      "text": ["Imports - coal: 254.31 thousand short tons<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 295.85 thousand short tons<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 309.59 thousand short tons<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 300.44 thousand short tons<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 307.86 thousand short tons<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 292.82 thousand short tons<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 278.7 thousand short tons<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 304.88 thousand short tons<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 294.34 thousand short tons<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 292.58 thousand short tons<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 274.73 thousand short tons<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 344.32 thousand short tons<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 381.9 thousand short tons<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 414.01 thousand short tons<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 407.32 thousand short tons<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 371.89 thousand short tons<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 489.76 thousand short tons<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 484.22 thousand short tons<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Imports - coal: 465.15 thousand short tons<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [1995.1799999999998, 2039.2699999999998, 2093.1399999999999, 2103.1799999999998, 2057.5599999999999, 2082.73, 1797.1800000000001, 1790.8000000000002, 1641.8, 1084.97, 922.52999999999986, 1091.4100000000001, 2224.1199999999999, 2811.5799999999999, 3289.5500000000002, 5866.6899999999996, 5501.04, 2325.73, 3599.0500000000002],
      "text": ["Imports - coal: 1995.18 thousand short tons<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 2039.27 thousand short tons<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 2093.14 thousand short tons<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 2103.18 thousand short tons<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 2057.56 thousand short tons<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 2082.73 thousand short tons<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 1797.18 thousand short tons<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 1790.8 thousand short tons<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 1641.8 thousand short tons<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 1084.97 thousand short tons<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 922.53 thousand short tons<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 1091.41 thousand short tons<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 2224.12 thousand short tons<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 2811.58 thousand short tons<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 3289.55 thousand short tons<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 5866.69 thousand short tons<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 5501.04 thousand short tons<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 2325.73 thousand short tons<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Imports - coal: 3599.05 thousand short tons<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [24878.040000000005, 21190.810000000001, 23242.209999999999, 22999.700000000001, 20357.459999999999, 22665.700000000001, 14302.469999999999, 13907.850000000002, 10408.01, 10820.280000000001, 9426.9599999999991, 8618.9599999999991, 8342.2800000000007, 6965.4999999999991, 8244.1800000000003, 8372.0400000000009, 8808.5599999999995, 6821.0900000000001, 6766.9099999999999],
      "text": ["Imports - coal: 24878.04 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 21190.81 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 23242.21 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 22999.7 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 20357.46 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 22665.7 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 14302.47 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 13907.85 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 10408.01 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 10820.28 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 9426.96 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 8618.96 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 8342.28 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 6965.5 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 8244.18 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 8372.04 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 8808.56 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 6821.09 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Imports - coal: 6766.91 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [147.45003254894004, 247.17717544653328, 296.14652728880259, 310.23347850668767, 214.0720163039791, 175.26600034033763, 162.7608553220424, 111.62523055700183, 82.641037841231878, 14.132811569573411, 155.18295178845742, 160.97378452275012, 121.81119506136727, 120.33485649251871, 135.1642443146367, 179.672311606818, 307.65034816542766, 349.96705821399712, 440.94582890170238],
      "text": ["Imports - coal: 147.45 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 247.18 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 296.15 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 310.23 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 214.07 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 175.27 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 162.76 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 111.63 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 82.64 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 14.13 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 155.18 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 160.97 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 121.81 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 120.33 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 135.16 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 179.67 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 307.65 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 349.97 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Imports - coal: 440.95 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [3792.1799999999998, 4545.9300000000003, 8053.25, 8441.1100000000006, 5960.3000000000011, 5051.1700000000001, 6665.9699999999993, 8712.1100000000006, 8189.9099999999999, 7488.8000000000002, 8257.8999999999996, 8291.0899999999983, 8496.25, 9127.2600000000002, 11415.030000000001, 10255.99, 10530.790000000001, 6404.9700000000003, 6448.1300000000001],
      "text": ["Imports - coal: 3792.18 thousand short tons<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 4545.93 thousand short tons<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 8053.25 thousand short tons<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 8441.11 thousand short tons<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 5960.3 thousand short tons<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 5051.17 thousand short tons<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 6665.97 thousand short tons<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 8712.11 thousand short tons<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 8189.91 thousand short tons<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 7488.8 thousand short tons<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 8257.9 thousand short tons<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 8291.09 thousand short tons<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 8496.25 thousand short tons<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 9127.26 thousand short tons<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 11415.03 thousand short tons<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 10255.99 thousand short tons<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 10530.79 thousand short tons<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 6404.97 thousand short tons<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Imports - coal: 6448.13 thousand short tons<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [739.26088648895404, 843.92584112580096, 734.85364675752044, 581.71312214435682, 672.05511892938648, 709.51581375560522, 467.13402155310837, 753.58378451451983, 781.13458940272847, 841.72883829587647, 709.53092039138301, 838.4404377511637, 763.52170888921671, 727.16288151033166, 860.49080035628288, 821.48243548703442, 874.52960890270242, 935.7328274405877, 971.96798735352422],
      "text": ["Imports - coal: 739.26 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 843.93 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 734.85 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 581.71 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 672.06 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 709.52 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 467.13 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 753.58 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 781.13 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 841.73 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 709.53 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 838.44 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 763.52 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 727.16 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 860.49 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 821.48 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 874.53 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 935.73 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Imports - coal: 971.97 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [14873.469999999999, 15521.629999999999, 15100.540000000001, 14768.75, 16384.740000000002, 16877.470000000001, 13966.270000000002, 17536.650000000001, 19849.299999999999, 18543.66, 20292.93, 23865.57, 25247.439999999999, 24292.139999999999, 25975.43, 26139.790000000005, 23264.650000000001, 19686.599999999999, 24265.329999999998],
      "text": ["Imports - coal: 14873.47 thousand short tons<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 15521.63 thousand short tons<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 15100.54 thousand short tons<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 14768.75 thousand short tons<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 16384.74 thousand short tons<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 16877.47 thousand short tons<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 13966.27 thousand short tons<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 17536.65 thousand short tons<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 19849.3 thousand short tons<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 18543.66 thousand short tons<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 20292.93 thousand short tons<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 23865.57 thousand short tons<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 25247.44 thousand short tons<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 24292.14 thousand short tons<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 25975.43 thousand short tons<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 26139.79 thousand short tons<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 23264.65 thousand short tons<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 19686.6 thousand short tons<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Imports - coal: 24265.33 thousand short tons<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [7465.6092678284749, 6957.1023785495463, 5427.2673015638802, 7151.231224421862, 9524.724437114206, 9297.8507925217909, 5745.8403323373577, 8863.085403842053, 9321.2871881705396, 9679.1254997114884, 10433.443830637341, 10994.06356475047, 10714.183141915286, 11407.884889462512, 14401.561283681449, 15571.195392119953, 15366.639402061801, 12360.475934653257, 13693.833001204426],
      "text": ["Imports - coal: 7465.61 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 6957.1 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 5427.27 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 7151.23 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 9524.72 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 9297.85 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 5745.84 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Imports - coal: 8863.09 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Imports - coal: 9321.29 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 9679.13 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 10433.44 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 10994.06 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 10714.18 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 11407.88 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 14401.56 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 15571.2 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 15366.64 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 12360.48 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Imports - coal: 13693.83 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [79036.179999999993, 87044.110000000001, 84612.059999999998, 87863.240000000005, 97316.660000000003, 109778.07999999999, 113518.66000000002, 130724.94999999998, 142296.66, 138379.67000000001, 139452.45000000001, 144439.91999999998, 148906.92000000001, 148170.44, 162239.17000000001, 163934.63, 155861.94, 136127.44, 138468.28],
      "text": ["Imports - coal: 79036.18 thousand short tons<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 87044.11 thousand short tons<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 84612.06 thousand short tons<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 87863.24 thousand short tons<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 97316.66 thousand short tons<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 109778.08 thousand short tons<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 113518.66 thousand short tons<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 130724.95 thousand short tons<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 142296.66 thousand short tons<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 138379.67 thousand short tons<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 139452.45 thousand short tons<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 144439.92 thousand short tons<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 148906.92 thousand short tons<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 148170.44 thousand short tons<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 162239.17 thousand short tons<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 163934.63 thousand short tons<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 155861.94 thousand short tons<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 136127.44 thousand short tons<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Imports - coal: 138468.28 thousand short tons<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [7754.75, 8278.3500000000004, 7336.9799999999996, 8095.3599999999988, 8519.75, 10006.77, 7745.9300000000003, 12087.93, 12084.630000000001, 13111.98, 15889.800000000001, 16735.270000000004, 19046.810000000001, 22079.27, 24950.790000000001, 28991.859999999997, 30525.170000000002, 32544.600000000002, 34435.059999999998],
      "text": ["Imports - coal: 7754.75 thousand short tons<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 8278.35 thousand short tons<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 7336.98 thousand short tons<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 8095.36 thousand short tons<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 8519.75 thousand short tons<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 10006.77 thousand short tons<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 7745.93 thousand short tons<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 12087.93 thousand short tons<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 12084.63 thousand short tons<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 13111.98 thousand short tons<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 15889.8 thousand short tons<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 16735.27 thousand short tons<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 19046.81 thousand short tons<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 22079.27 thousand short tons<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 24950.79 thousand short tons<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 28991.86 thousand short tons<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 30525.17 thousand short tons<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 32544.6 thousand short tons<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Imports - coal: 34435.06 thousand short tons<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [295.60124141522107, 285.17222799498722, 218.89063201808625, 172.31376742195158, 200.32015201192871, 172.12394066507082, 181.56817970020734, 150.61406646220559, 156.91308529438422, 303.39258834889796, 393.40264984301291, 396.30070771538919, 460.23921949647615, 438.66401201636779, 615.9206632332216, 548.90319124503196, 491.9484076005449, 1063.448456167951, 932.23227444122824],
      "text": ["Imports - coal: 295.6 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - coal: 285.17 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - coal: 218.89 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - coal: 172.31 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - coal: 200.32 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Imports - coal: 172.12 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - coal: 181.57 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - coal: 150.61 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - coal: 156.91 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - coal: 303.39 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - coal: 393.4 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - coal: 396.3 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Imports - coal: 460.24 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - coal: 438.66 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - coal: 615.92 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - coal: 548.9 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - coal: 491.95 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - coal: 1063.45 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Imports - coal: 932.23 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [0.029999999999999999, 0.29000000000000004, 0.12000000000000001, 0.14000000000000001, 0.20000000000000001, 0.23999999999999999, 0.31, 0.10999999999999999, 0.26000000000000001, 0.32999999999999996, 0.34000000000000002, 0.20000000000000004, 0.42999999999999994, 0.45000000000000001, 0.83999999999999986, 1.27, 101.34, 87.219999999999999, 0.90000000000000002],
      "text": ["Imports - coal: 0.03 thousand short tons<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.29 thousand short tons<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.12 thousand short tons<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.14 thousand short tons<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.2 thousand short tons<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.24 thousand short tons<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.31 thousand short tons<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.11 thousand short tons<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.26 thousand short tons<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.33 thousand short tons<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.34 thousand short tons<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.2 thousand short tons<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.43 thousand short tons<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.45 thousand short tons<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.84 thousand short tons<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 1.27 thousand short tons<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 101.34 thousand short tons<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 87.22 thousand short tons<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Imports - coal: 0.9 thousand short tons<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [30.237188878960382, 33.884107258118043, 32.203184032822641, 38.736372521131621, 40.699160707722058, 42.922971146242283, 42.43629241249338, 60.108214703937591, 74.097631514185323, 76.787788781366331, 99.038440609196343, 141.82264591968661, 143.28900429449536, 144.52002195138726, 149.35880868331282, 150.0858992310979, 140.72542795477418, 141.5863458208004, 169.90870536380112],
      "text": ["Imports - coal: 30.24 thousand short tons<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 33.88 thousand short tons<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 32.2 thousand short tons<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 38.74 thousand short tons<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 40.7 thousand short tons<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 42.92 thousand short tons<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 42.44 thousand short tons<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 60.11 thousand short tons<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 74.1 thousand short tons<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 76.79 thousand short tons<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 99.04 thousand short tons<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 141.82 thousand short tons<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 143.29 thousand short tons<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 144.52 thousand short tons<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 149.36 thousand short tons<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 150.09 thousand short tons<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 140.73 thousand short tons<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 141.59 thousand short tons<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Imports - coal: 169.91 thousand short tons<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [27110.560000000001, 24521.549999999999, 23356.880000000001, 28627.950000000001, 25911.639999999999, 26135.079999999998, 26616.379999999997, 28153, 26815.660000000003, 26292.629999999997, 28317.849999999999, 27693.300000000003, 26914.080000000002, 24432.769999999997, 27453.820000000003, 27800.880000000001, 26742.040000000001, 26399.120000000003, 27245.839999999997],
      "text": ["Imports - coal: 27110.56 thousand short tons<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 24521.55 thousand short tons<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 23356.88 thousand short tons<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 28627.95 thousand short tons<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 25911.64 thousand short tons<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 26135.08 thousand short tons<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 26616.38 thousand short tons<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 28153 thousand short tons<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 26815.66 thousand short tons<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 26292.63 thousand short tons<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 28317.85 thousand short tons<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 27693.3 thousand short tons<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 26914.08 thousand short tons<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 24432.77 thousand short tons<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 27453.82 thousand short tons<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 27800.88 thousand short tons<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 26742.04 thousand short tons<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 26399.12 thousand short tons<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Imports - coal: 27245.84 thousand short tons<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [162.09110044543894, 142.08932516209035, 137.9263987656467, 133.37547287655951, 141.96807595183577, 150.16489007867759, 143.95874445458745, 142.1872853343329, 169.45915354427248, 186.71593914551241, 164.98304520825221, 139.70086437240337, 158.26805536046206, 163.32863391581023, 186.35011986698595, 204.34835920281583, 309.40711699434542, 361.86254994105929, 235.72384659895431],
      "text": ["Imports - coal: 162.09 thousand short tons<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - coal: 142.09 thousand short tons<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - coal: 137.93 thousand short tons<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - coal: 133.38 thousand short tons<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - coal: 141.97 thousand short tons<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - coal: 150.16 thousand short tons<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Imports - coal: 143.96 thousand short tons<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 142.19 thousand short tons<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 169.46 thousand short tons<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 186.72 thousand short tons<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 164.98 thousand short tons<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 139.7 thousand short tons<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 158.27 thousand short tons<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 163.33 thousand short tons<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 186.35 thousand short tons<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 204.35 thousand short tons<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 309.41 thousand short tons<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 361.86 thousand short tons<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Imports - coal: 235.72 thousand short tons<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [48.420000000000002, 147.56, 190.11000000000001, 462.22000000000003, 605.96000000000004, 690.57000000000005, 887.11000000000001, 1240.2799999999997, 1595.1200000000001, 1751.3199999999997, 2792.96, 2719.8600000000001, 4924.4700000000003, 11541.630000000001, 15076.52, 25542.400000000005, 45717.549999999996, 51058.660000000003, 44010.639999999999],
      "text": ["Imports - coal: 48.42 thousand short tons<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 147.56 thousand short tons<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 190.11 thousand short tons<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 462.22 thousand short tons<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 605.96 thousand short tons<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 690.57 thousand short tons<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 887.11 thousand short tons<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 1240.28 thousand short tons<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 1595.12 thousand short tons<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 1751.32 thousand short tons<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 2792.96 thousand short tons<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 2719.86 thousand short tons<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 4924.47 thousand short tons<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 11541.63 thousand short tons<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 15076.52 thousand short tons<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 25542.4 thousand short tons<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 45717.55 thousand short tons<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 51058.66 thousand short tons<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Imports - coal: 44010.64 thousand short tons<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [3074.3499999999995, 3645.3400000000001, 3133.8699999999999, 4685.9300000000003, 6599.5399999999991, 5129.0500000000002, 5134.5699999999997, 4703.5600000000004, 4472.0799999999999, 3605.6600000000003, 3813.8000000000002, 5282.9899999999989, 5570.5000000000009, 7107.7599999999993, 10721.350000000002, 16076.200000000003, 17878.84, 18900.519999999997, 21610.73],
      "text": ["Imports - coal: 3074.35 thousand short tons<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 3645.34 thousand short tons<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 3133.87 thousand short tons<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 4685.93 thousand short tons<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 6599.54 thousand short tons<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 5129.05 thousand short tons<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 5134.57 thousand short tons<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 4703.56 thousand short tons<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 4472.08 thousand short tons<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 3605.66 thousand short tons<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 3813.8 thousand short tons<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 5282.99 thousand short tons<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 5570.5 thousand short tons<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 7107.76 thousand short tons<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 10721.35 thousand short tons<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 16076.2 thousand short tons<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 17878.84 thousand short tons<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 18900.52 thousand short tons<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Imports - coal: 21610.73 thousand short tons<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [1392.28, 1192.97, 1484.9000000000001, 1680.04, 1727.3099999999999, 1558.0999999999999, 1934.0000000000002, 1636.8399999999997, 1753.1099999999997, 1583.3299999999999, 1863.49, 2583.9000000000001, 3560.2400000000002, 3150.5900000000001, 3804.1300000000006, 4630.4799999999996, 8076.0699999999988, 9180.75, 7422.3000000000002],
      "text": ["Imports - coal: 1392.28 thousand short tons<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1192.97 thousand short tons<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1484.9 thousand short tons<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1680.04 thousand short tons<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1727.31 thousand short tons<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1558.1 thousand short tons<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1934 thousand short tons<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1636.84 thousand short tons<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1753.11 thousand short tons<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1583.33 thousand short tons<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 1863.49 thousand short tons<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 2583.9 thousand short tons<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 3560.24 thousand short tons<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 3150.59 thousand short tons<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 3804.13 thousand short tons<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 4630.48 thousand short tons<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 8076.07 thousand short tons<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 9180.75 thousand short tons<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Imports - coal: 7422.3 thousand short tons<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [254.35999999999999, 107.13, 108.22, 122.01000000000001, 74.439999999999998, 117.86999999999999, 75.840000000000018, 60.879999999999995, 46.790000000000006, 85.739999999999995, 672.26999999999998, 2692.1900000000001, 3315.6799999999998, 4297.8299999999999, 4797.6400000000003, 5906.0299999999997, 7461.9200000000001, 8828.2099999999991, 14812.379999999997],
      "text": ["Imports - coal: 254.36 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 107.13 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 108.22 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 122.01 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 74.44 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 117.87 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 75.84 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 60.88 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 46.79 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 85.74 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 672.27 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 2692.19 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 3315.68 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 4297.83 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 4797.64 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 5906.03 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 7461.92 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 8828.21 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Imports - coal: 14812.38 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [1541.1168892659346, 1905.7426575055038, 2259.2418577658477, 2442.2184170031874, 3034.4025671682457, 3540.5770522769326, 3348.951266531205, 4652.9005918772409, 5219.7231662187933, 5079.7246611152768, 5643.4404264800887, 5396.0832765895575, 5252.3917578176479, 6414.6588432834706, 8888.1792136131353, 9058.2893579912707, 9172.5162698994172, 9796.7222529658975, 9261.2397092557239],
      "text": ["Imports - coal: 1541.12 thousand short tons<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 1905.74 thousand short tons<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 2259.24 thousand short tons<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 2442.22 thousand short tons<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 3034.4 thousand short tons<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 3540.58 thousand short tons<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 3348.95 thousand short tons<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 4652.9 thousand short tons<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 5219.72 thousand short tons<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 5079.72 thousand short tons<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 5643.44 thousand short tons<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 5396.08 thousand short tons<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 5252.39 thousand short tons<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 6414.66 thousand short tons<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 8888.18 thousand short tons<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 9058.29 thousand short tons<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 9172.52 thousand short tons<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 9796.72 thousand short tons<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Imports - coal: 9261.24 thousand short tons<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [7837.8999999999996, 8322.3799999999992, 9445.5799999999999, 12362.18, 15964.089999999998, 17655.959999999999, 18065.43, 18700.150000000001, 18008.630000000005, 20518.529999999999, 19875.130000000001, 23074.400000000001, 24175.810000000001, 24009.919999999998, 24599.240000000002, 27523.389999999999, 23881.07, 26325.560000000001, 26531.66],
      "text": ["Imports - coal: 7837.9 thousand short tons<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 8322.38 thousand short tons<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 9445.58 thousand short tons<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 12362.18 thousand short tons<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 15964.09 thousand short tons<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 17655.96 thousand short tons<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 18065.43 thousand short tons<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 18700.15 thousand short tons<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 18008.63 thousand short tons<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 20518.53 thousand short tons<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 19875.13 thousand short tons<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 23074.4 thousand short tons<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 24175.81 thousand short tons<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 24009.92 thousand short tons<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 24599.24 thousand short tons<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 27523.39 thousand short tons<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 23881.07 thousand short tons<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 26325.56 thousand short tons<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Imports - coal: 26531.66 thousand short tons<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [184123.01999999999, 198422.81000000003, 199337.75, 195366.10999999999, 205593.23000000004, 211302.5, 178381.08999999997, 203462.82999999999, 193182.70000000001, 204117.20000000001, 211162.25, 207699.53, 210159.97, 209161.69000000003, 212531.82999999999, 208699.56, 205232.68999999997, 191439.47999999998, 201137.09],
      "text": ["Imports - coal: 184123.02 thousand short tons<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 198422.81 thousand short tons<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 199337.75 thousand short tons<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 195366.11 thousand short tons<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 205593.23 thousand short tons<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 211302.5 thousand short tons<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 178381.09 thousand short tons<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 203462.83 thousand short tons<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 193182.7 thousand short tons<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 204117.2 thousand short tons<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 211162.25 thousand short tons<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 207699.53 thousand short tons<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 210159.97 thousand short tons<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 209161.69 thousand short tons<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 212531.83 thousand short tons<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 208699.56 thousand short tons<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 205232.69 thousand short tons<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 191439.48 thousand short tons<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Imports - coal: 201137.09 thousand short tons<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [991.18845448959257, 1110.5960296453525, 1149.4957849822872, 1096.552874286283, 1111.0783388706332, 1019.4926080574024, 942.81925990909303, 897.47812149266133, 838.14827798922306, 974.479204091469, 930.76165616250375, 1330.7801772511143, 1300.3587274638344, 1336.8931330289142, 1345.0243241100611, 1499.2214397498612, 1700.9744460808597, 1761.656162162242, 2144.0809570581955],
      "text": ["Imports - coal: 991.19 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Imports - coal: 1110.6 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Imports - coal: 1149.5 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1096.55 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1111.08 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1019.49 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 942.82 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 897.48 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 838.15 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 974.48 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 930.76 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1330.78 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1300.36 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1336.89 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1345.02 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1499.22 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1700.97 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 1761.66 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Imports - coal: 2144.08 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [3202.21, 4833.6300000000001, 4420.2600000000002, 5525.8800000000001, 7421.8500000000004, 7828.6099999999997, 6894.9499999999998, 7642.3199999999997, 10653.83, 11418.83, 12730.68, 10998.93, 10841.469999999999, 12925.24, 12260.639999999998, 12276.74, 11490.77, 11688.59, 13237.77],
      "text": ["Imports - coal: 3202.21 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 4833.63 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 4420.26 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 5525.88 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 7421.85 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 7828.61 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 6894.95 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 7642.32 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 10653.83 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 11418.83 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 12730.68 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 10998.93 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 10841.47 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 12925.24 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 12260.64 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 12276.74 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 11490.77 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 11688.59 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Imports - coal: 13237.77 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [17819.939999999999, 18107.650000000001, 19136.099999999999, 22393.430000000004, 25292.5, 21482.919999999998, 22447.439999999999, 23515.580000000002, 26100.5, 32181.939999999999, 29358.189999999995, 32867.629999999997, 37461.419999999998, 40050.43, 43128.559999999998, 42295.440000000002, 41615.139999999999, 44363.5, 40252.820000000007],
      "text": ["Imports - coal: 17819.94 thousand short tons<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 18107.65 thousand short tons<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 19136.1 thousand short tons<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 22393.43 thousand short tons<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 25292.5 thousand short tons<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 21482.92 thousand short tons<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 22447.44 thousand short tons<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 23515.58 thousand short tons<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 26100.5 thousand short tons<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 32181.94 thousand short tons<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 29358.19 thousand short tons<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 32867.63 thousand short tons<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 37461.42 thousand short tons<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 40050.43 thousand short tons<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 43128.56 thousand short tons<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 42295.44 thousand short tons<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 41615.14 thousand short tons<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 44363.5 thousand short tons<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Imports - coal: 40252.82 thousand short tons<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [0, 0.01, 0.0099999999999999985, 0.01, 0.79000000000000015, 16.219999999999999, 27.480000000000004, 41.520000000000003, 107.83, 311.63, 321.80000000000007, 381.27999999999997, 567.38, 629.13, 709.35000000000002, 732.53999999999996, 660.33000000000004, 582.35000000000002, 509.30000000000007],
      "text": ["Imports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 0.01 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 0.01 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 0.01 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 0.79 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 16.22 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 27.48 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 41.52 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 107.83 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 311.63 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 321.8 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 381.28 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 567.38 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 629.13 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 709.35 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 732.54 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 660.33 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 582.35 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Imports - coal: 509.3 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [2744.7221792226742, 3049.2465498923298, 3283.410603035843, 3336.7438760613536, 4013.2558262265075, 2981.7451885887831, 1563.4969258602928, 1567.5690240851839, 1564.048323578696, 1648.751470288666, 1431.0632781197708, 1413.0673454347084, 1318.397639445617, 1192.9849692293919, 1144.0610133322689, 1163.8997165027761, 1149.5867669418526, 910.40135005307525, 962.33305813956304],
      "text": ["Imports - coal: 2744.72 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 3049.25 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 3283.41 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 3336.74 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 4013.26 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 2981.75 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1563.5 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1567.57 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1564.05 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1648.75 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1431.06 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1413.07 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1318.4 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1192.98 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1144.06 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1163.9 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 1149.59 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 910.4 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Imports - coal: 962.33 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [679.01999999999998, 508.16000000000003, 573.20000000000005, 615.09000000000003, 429.89999999999998, 157.63, 11.02, 56.219999999999999, 78.260000000000005, 100.31, 146.63, 154.31999999999999, 112.29000000000002, 274.16000000000003, 260.97000000000003, 130.84, 110.25000000000001, 38.219999999999999, 46.299999999999997],
      "text": ["Imports - coal: 679.02 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 508.16 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 573.2 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 615.09 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 429.9 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 157.63 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 11.02 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 56.22 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 78.26 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 100.31 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 146.63 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 154.32 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 112.29 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 274.16 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 260.97 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 130.84 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 110.25 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 38.22 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Imports - coal: 46.3 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [30433.229999999996, 35042.479999999996, 45420.739999999998, 52654.110000000008, 65331.650000000001, 71052.029999999999, 100730.46000000001, 124042.23000000001, 141924.91, 176647.31, 200091.20000000004, 247368.75, 243543.51999999999, 217085.79999999999, 219434.33999999997, 247124.81000000003, 266444.90999999997, 238732.06, 210811.22],
      "text": ["Imports - coal: 30433.23 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 35042.48 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 45420.74 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 52654.11 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 65331.65 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 71052.03 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 100730.46 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 124042.23 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 141924.91 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 176647.31 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 200091.2 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 247368.75 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 243543.52 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 217085.8 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 219434.34 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 247124.81 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 266444.91 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 238732.06 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Imports - coal: 210811.22 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [25043.970000000001, 27280, 30460.349999999999, 36245.980000000003, 36346.849999999999, 34207.68, 17937.040000000001, 16577.77, 10685.750000000002, 7271.9799999999996, 8906.4200000000001, 11350.33, 11317.969999999999, 9846.4600000000009, 7802.6199999999999, 5954, 6697.1300000000001, 5137.3699999999999, 5389.1899999999996],
      "text": ["Imports - coal: 25043.97 thousand short tons<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 27280 thousand short tons<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 30460.35 thousand short tons<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 36245.98 thousand short tons<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 36346.85 thousand short tons<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 34207.68 thousand short tons<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 17937.04 thousand short tons<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 16577.77 thousand short tons<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 10685.75 thousand short tons<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 7271.98 thousand short tons<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 8906.42 thousand short tons<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 11350.33 thousand short tons<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 11317.97 thousand short tons<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 9846.46 thousand short tons<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 7802.62 thousand short tons<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 5954 thousand short tons<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 6697.13 thousand short tons<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 5137.37 thousand short tons<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Imports - coal: 5389.19 thousand short tons<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [1.1399999999999999, 3.2399999999999998, 11.499999999999998, 9.8000000000000025, 15.120000000000001, 17.210000000000001, 12.130000000000001, 18.239999999999998, 14.56, 16.579999999999998, 6.29, 8.1500000000000004, 15.519999999999998, 17.879999999999999, 21.829999999999998, 38.280000000000001, 20.02, 11.529999999999998, 15.220000000000001],
      "text": ["Imports - coal: 1.14 thousand short tons<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 3.24 thousand short tons<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 11.5 thousand short tons<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 9.8 thousand short tons<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 15.12 thousand short tons<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 17.21 thousand short tons<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 12.13 thousand short tons<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 18.24 thousand short tons<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 14.56 thousand short tons<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 16.58 thousand short tons<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 6.29 thousand short tons<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 8.15 thousand short tons<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 15.52 thousand short tons<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 17.88 thousand short tons<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 21.83 thousand short tons<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 38.28 thousand short tons<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 20.02 thousand short tons<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 11.53 thousand short tons<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Imports - coal: 15.22 thousand short tons<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [23755.57, 26688.039999999997, 27178.719999999998, 26130.439999999999, 26940.57, 23113.120000000003, 18447.119999999999, 13039.760000000002, 17823.220000000001, 24707.280000000002, 15061.239999999998, 18073.060000000001, 20982.259999999998, 15244.049999999997, 21142.189999999999, 17390.369999999999, 9467.6499999999978, 4375.2600000000002, 4888.6800000000003],
      "text": ["Imports - coal: 23755.57 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 26688.04 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 27178.72 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 26130.44 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 26940.57 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 23113.12 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 18447.12 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 13039.76 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 17823.22 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 24707.28 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 15061.24 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 18073.06 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 20982.26 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 15244.05 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 21142.19 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 17390.37 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 9467.65 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 4375.26 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Imports - coal: 4888.68 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [2824.71, 2647.8200000000006, 3718.9299999999994, 5820.8699999999999, 6543.1400000000003, 11419.01, 11954.5, 15640.899999999998, 16613.040000000001, 11455.98, 11900.639999999999, 11844.33, 9573.2900000000009, 9668.0799999999999, 14696.790000000001, 21765.919999999998, 18764.900000000001, 14416.790000000003, 14048.25],
      "text": ["Imports - coal: 2824.71 thousand short tons<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 2647.82 thousand short tons<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 3718.93 thousand short tons<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 5820.87 thousand short tons<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 6543.14 thousand short tons<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 11419.01 thousand short tons<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 11954.5 thousand short tons<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 15640.9 thousand short tons<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 16613.04 thousand short tons<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 11455.98 thousand short tons<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 11900.64 thousand short tons<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 11844.33 thousand short tons<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 9573.29 thousand short tons<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 9668.08 thousand short tons<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 14696.79 thousand short tons<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 21765.92 thousand short tons<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 18764.9 thousand short tons<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 14416.79 thousand short tons<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Imports - coal: 14048.25 thousand short tons<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [0, 0.90999999999999992, 0.059999999999999991, 1.6100000000000001, 4.9500000000000002, 2.5099999999999998, 0.10000000000000001, 0.089999999999999983, 0.70000000000000007, 0.040000000000000001, 0.15000000000000002, 0.15000000000000002, 15.48, 46.920000000000009, 53.789999999999999, 53.32, 56.680000000000007, 59.880000000000003, 62.770000000000003],
      "text": ["Imports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 0.91 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 0.06 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 1.61 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 4.95 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 2.51 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 0.1 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 0.09 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 0.7 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 0.04 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 0.15 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 0.15 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 15.48 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 46.92 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 53.79 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 53.32 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 56.68 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 59.88 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Imports - coal: 62.77 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [1748.26, 1712.3699999999999, 2032.8900000000003, 2165.8499999999995, 1783.2099999999998, 2187.8200000000002, 684.30999999999995, 419.36000000000001, 882.44000000000005, 891.14999999999998, 2164.3200000000002, 2390.6999999999998, 2245.1999999999998, 2037.0400000000002, 2696.5599999999999, 3315.25, 3779.6799999999998, 2165.0500000000002, 3658.2099999999996],
      "text": ["Imports - coal: 1748.26 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 1712.37 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 2032.89 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 2165.85 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 1783.21 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 2187.82 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 684.31 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 419.36 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 882.44 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 891.15 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 2164.32 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 2390.7 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 2245.2 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 2037.04 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 2696.56 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 3315.25 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 3779.68 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 2165.05 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Imports - coal: 3658.21 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [38331.730000000003, 43599.669999999998, 38513.82, 43710.910000000003, 47663.68, 46060.660000000003, 38847.830000000002, 43503.769999999997, 47228.429999999993, 48275.380000000005, 56414.669999999998, 63238.679999999993, 62076.970000000008, 60801.549999999996, 53719.879999999997, 49851.620000000003, 45577.349999999999, 33000.339999999997, 42753.37000000001],
      "text": ["Imports - coal: 38331.73 thousand short tons<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 43599.67 thousand short tons<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 38513.82 thousand short tons<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 43710.91 thousand short tons<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 47663.68 thousand short tons<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 46060.66 thousand short tons<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 38847.83 thousand short tons<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 43503.77 thousand short tons<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 47228.43 thousand short tons<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 48275.38 thousand short tons<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 56414.67 thousand short tons<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 63238.68 thousand short tons<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 62076.97 thousand short tons<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 60801.55 thousand short tons<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 53719.88 thousand short tons<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 49851.62 thousand short tons<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 45577.35 thousand short tons<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 33000.34 thousand short tons<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Imports - coal: 42753.37 thousand short tons<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [2214.3823879072979, 2398.1472968755979, 2276.2198815166576, 2568.3749932336273, 3009.1526102817957, 2752.2029401540171, 2454.4479317047571, 2309.1130743251542, 2541.4365035263754, 2448.0948601226819, 2271.3954845391149, 3565.0202844745631, 3292.4184385270569, 3101.6019966448193, 3404.7982517437054, 3357.1535967020604, 3120.7671345877425, 2732.9678125870519, 3522.0175907553635],
      "text": ["Imports - coal: 2214.38 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2398.15 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2276.22 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2568.37 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 3009.15 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2752.2 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2454.45 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2309.11 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2541.44 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2448.09 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2271.4 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 3565.02 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 3292.42 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 3101.6 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 3404.8 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 3357.15 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 3120.77 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 2732.97 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Imports - coal: 3522.02 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [3014.8199999999997, 3302.52, 2994.0300000000002, 2350.8099999999999, 2068.04, 1819.28, 1987.53, 1874.3199999999999, 2427.9299999999998, 2331.3900000000003, 2651.7800000000002, 2175.96, 2605.23, 1875.01, 1395.0999999999999, 1764.9200000000003, 393.85000000000008, 440.71000000000004, 1909.5699999999999],
      "text": ["Imports - coal: 3014.82 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 3302.52 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 2994.03 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 2350.81 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 2068.04 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 1819.28 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 1987.53 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 1874.32 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 2427.93 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 2331.39 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 2651.78 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 2175.96 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 2605.23 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 1875.01 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 1395.1 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 1764.92 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 393.85 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 440.71 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Imports - coal: 1909.57 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [5890.7399999999998, 5783.8199999999997, 5811.3800000000001, 6373.5600000000004, 5271.25, 4220.75, 5578.79, 3054.5, 4136.9700000000003, 5705.5600000000004, 4680.4099999999999, 4827.0200000000004, 5970.1099999999997, 5781.7699999999995, 6201.0900000000001, 4743.3999999999996, 3135.3499999999999, 253.15999999999997, 44.840000000000003],
      "text": ["Imports - coal: 5890.74 thousand short tons<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 5783.82 thousand short tons<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 5811.38 thousand short tons<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 6373.56 thousand short tons<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 5271.25 thousand short tons<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 4220.75 thousand short tons<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 5578.79 thousand short tons<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 3054.5 thousand short tons<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 4136.97 thousand short tons<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 5705.56 thousand short tons<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 4680.41 thousand short tons<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 4827.02 thousand short tons<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 5970.11 thousand short tons<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 5781.77 thousand short tons<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 6201.09 thousand short tons<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 4743.4 thousand short tons<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 3135.35 thousand short tons<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 253.16 thousand short tons<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Imports - coal: 44.84 thousand short tons<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [12.99, 16.300000000000001, 31.870000000000001, 17.27, 24.940000000000001, 49.18, 30.68, 77.109999999999999, 77.129999999999995, 87.539999999999992, 108.40000000000002, 117.75, 113.7, 123.37999999999998, 127.8, 99.010000000000005, 126.02000000000001, 80.310000000000002, 83.930000000000007],
      "text": ["Imports - coal: 12.99 thousand short tons<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 16.3 thousand short tons<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 31.87 thousand short tons<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 17.27 thousand short tons<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 24.94 thousand short tons<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 49.18 thousand short tons<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 30.68 thousand short tons<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 77.11 thousand short tons<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 77.13 thousand short tons<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 87.54 thousand short tons<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 108.4 thousand short tons<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 117.75 thousand short tons<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 113.7 thousand short tons<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 123.38 thousand short tons<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 127.8 thousand short tons<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 99.01 thousand short tons<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 126.02 thousand short tons<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 80.31 thousand short tons<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Imports - coal: 83.93 thousand short tons<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [18527.942859376879, 21492.880383053263, 20178.441534817557, 20457.109598852338, 19214.88612999957, 22827.049696425733, 17708.64264814178, 21105.207233192919, 17252.93425559668, 19667.859835325278, 19983.956451831964, 15955.583003550933, 15044.194798876368, 14324.98728618976, 16682.82764211667, 14871.860521852499, 11587.625378009607, 8194.1860525365228, 8903.3783894410972],
      "text": ["Imports - coal: 18527.94 thousand short tons<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 21492.88 thousand short tons<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 20178.44 thousand short tons<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 20457.11 thousand short tons<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 19214.89 thousand short tons<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 22827.05 thousand short tons<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 17708.64 thousand short tons<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 21105.21 thousand short tons<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 17252.93 thousand short tons<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 19667.86 thousand short tons<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 19983.96 thousand short tons<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 15955.58 thousand short tons<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 15044.19 thousand short tons<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 14324.99 thousand short tons<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 16682.83 thousand short tons<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 14871.86 thousand short tons<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 11587.63 thousand short tons<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 8194.19 thousand short tons<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Imports - coal: 8903.38 thousand short tons<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [34966.897717582287, 39639.589301019711, 48208.127857544489, 55400.692800727811, 47545.844790354597, 48107.240544641048, 41847.622409603384, 29099.361912126238, 35665.053450950443, 49138.719632487344, 55493.625966166604, 46299.353544689038, 26533.723293175521, 9313.8152403255081, 9318.5845175987524, 11058.166455797202, 6830.5718967651328, 4968.6834974365711, 5052.530128475134],
      "text": ["Imports - coal: 34966.9 thousand short tons<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 39639.59 thousand short tons<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 48208.13 thousand short tons<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 55400.69 thousand short tons<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 47545.84 thousand short tons<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 48107.24 thousand short tons<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 41847.62 thousand short tons<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 29099.36 thousand short tons<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 35665.05 thousand short tons<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 49138.72 thousand short tons<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 55493.63 thousand short tons<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 46299.35 thousand short tons<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 26533.72 thousand short tons<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 9313.82 thousand short tons<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 9318.58 thousand short tons<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 11058.17 thousand short tons<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 6830.57 thousand short tons<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 4968.68 thousand short tons<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Imports - coal: 5052.53 thousand short tons<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [4444.5100000000002, 4130.3599999999997, 4636.5600000000004, 4696.9399999999996, 5010, 4619.6800000000003, 4612.3999999999996, 3604, 3810.3600000000001, 3786.6199999999999, 3612.75, 3605.8000000000002, 3451.3499999999999, 3776.4900000000002, 4050.52, 3856.3099999999999, 4103.2399999999998, 3285.21, 3412.8299999999999],
      "text": ["Imports - coal: 4444.51 thousand short tons<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 4130.36 thousand short tons<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 4636.56 thousand short tons<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 4696.94 thousand short tons<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 5010 thousand short tons<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 4619.68 thousand short tons<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 4612.4 thousand short tons<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3604 thousand short tons<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3810.36 thousand short tons<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3786.62 thousand short tons<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3612.75 thousand short tons<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3605.8 thousand short tons<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3451.35 thousand short tons<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3776.49 thousand short tons<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 4050.52 thousand short tons<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3856.31 thousand short tons<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 4103.24 thousand short tons<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3285.21 thousand short tons<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Imports - coal: 3412.83 thousand short tons<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [13052.331353992306, 21253.099223673369, 29448.536978959466, 42300.142771776256, 56268.809333318757, 48319.829442222523, 131132.60574299525, 174596.85550181821, 203443.85065497711, 268808.62452931324, 315344.90931893059, 263014.00131626689, 221200.76419652539, 276693.25417903275, 293312.15571555594, 304512.62352247728, 324473.39170886332, 328929.67664153443, 350164.44885068398],
      "text": ["Imports - coal: 13052.33 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 21253.1 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 29448.54 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 42300.14 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 56268.81 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 48319.83 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 131132.61 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 174596.86 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 203443.85 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 268808.62 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 315344.91 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 263014 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 221200.76 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 276693.25 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 293312.16 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 304512.62 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 324473.39 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 328929.68 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Imports - coal: 350164.45 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [968.59824858046238, 994.51362114551819, 977.51527404141166, 973.50078490497708, 1019.1453315462303, 982.26743860398949, 957.2364360564095, 1070.2691736971469, 1096.8001065411206, 1228.2442043393078, 1140.9477561990184, 1021.1982608522543, 973.60933706944616, 845.02487698354253, 755.60509364741415, 706.30004448783802, 570.92978375928465, 585.76941580198934, 631.96847167045223],
      "text": ["Imports - coal: 968.6 thousand short tons<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Imports - coal: 994.51 thousand short tons<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Imports - coal: 977.52 thousand short tons<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Imports - coal: 973.5 thousand short tons<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - coal: 1019.15 thousand short tons<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - coal: 982.27 thousand short tons<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports - coal: 957.24 thousand short tons<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports - coal: 1070.27 thousand short tons<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports - coal: 1096.8 thousand short tons<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Imports - coal: 1228.24 thousand short tons<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - coal: 1140.95 thousand short tons<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - coal: 1021.2 thousand short tons<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - coal: 973.61 thousand short tons<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - coal: 845.02 thousand short tons<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Imports - coal: 755.61 thousand short tons<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Imports - coal: 706.3 thousand short tons<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Imports - coal: 570.93 thousand short tons<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - coal: 585.77 thousand short tons<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Imports - coal: 631.97 thousand short tons<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [3521.8800000000001, 3511.96, 3530.7000000000003, 3364.25, 3505.3499999999999, 3149.3000000000002, 2092.1799999999998, 3621.0899999999997, 3390.71, 2514.3699999999999, 2791.3200000000002, 3045.4499999999998, 2988.4000000000001, 3349.9899999999993, 2945.2500000000005, 2995.0799999999999, 2574.8600000000001, 2232.73, 1436.03],
      "text": ["Imports - coal: 3521.88 thousand short tons<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 3511.96 thousand short tons<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 3530.7 thousand short tons<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 3364.25 thousand short tons<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 3505.35 thousand short tons<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 3149.3 thousand short tons<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 2092.18 thousand short tons<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 3621.09 thousand short tons<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 3390.71 thousand short tons<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 2514.37 thousand short tons<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 2791.32 thousand short tons<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 3045.45 thousand short tons<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 2988.4 thousand short tons<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 3349.99 thousand short tons<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 2945.25 thousand short tons<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 2995.08 thousand short tons<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 2574.86 thousand short tons<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 2232.73 thousand short tons<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Imports - coal: 1436.03 thousand short tons<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [10290.705805433883, 8210.5980916417448, 6522.7414728898266, 9397.2612990075249, 8786.0365650801305, 8188.7772940058067, 7260.9239038963397, 4944.5168213992438, 6640.5819937029992, 4304.9623699571057, 5360.836573805198, 4906.6965714778389, 2984.5070177417292, 3124.246726808256, 3328.8313191430379, 2983.4082425508336, 2584.0766668258275, 1202.4220143822029, 837.90408049163977],
      "text": ["Imports - coal: 10290.71 thousand short tons<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 8210.6 thousand short tons<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 6522.74 thousand short tons<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 9397.26 thousand short tons<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 8786.04 thousand short tons<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 8188.78 thousand short tons<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 7260.92 thousand short tons<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 4944.52 thousand short tons<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 6640.58 thousand short tons<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 4304.96 thousand short tons<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 5360.84 thousand short tons<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 4906.7 thousand short tons<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 2984.51 thousand short tons<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 3124.25 thousand short tons<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 3328.83 thousand short tons<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 2983.41 thousand short tons<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 2584.08 thousand short tons<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 1202.42 thousand short tons<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Imports - coal: 837.9 thousand short tons<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [22517.920242345306, 28168.289069464827, 27469.709016450288, 27534.832761305363, 27940.519109335888, 28726.878779456485, 22313.456871834474, 24340.554643401432, 26332.381992242354, 28326.458587506164, 22277.073124195114, 21416.620878418682, 21421.228432172709, 18898.717525380198, 17631.097218374856, 16193.73353060656, 11833.406243218458, 8533.7630288203582, 8638.6481898877355],
      "text": ["Imports - coal: 22517.92 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 28168.29 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 27469.71 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 27534.83 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 27940.52 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 28726.88 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 22313.46 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 24340.55 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 26332.38 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 28326.46 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 22277.07 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 21416.62 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 21421.23 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 18898.72 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 17631.1 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 16193.73 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 11833.41 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 8533.76 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Imports - coal: 8638.65 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [33705.910000000003, 26735.369999999999, 39922.089999999997, 39738.25, 42420.139999999999, 42583.480000000003, 42504.139999999999, 43654.230000000003, 40895.889999999999, 45629.989999999998, 53386.010000000002, 59917.260000000009, 62097.25, 57458.419999999998, 51702.719999999994, 48835.5, 41513.989999999998, 23469.18, 33895.900000000001],
      "text": ["Imports - coal: 33705.91 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 26735.37 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 39922.09 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 39738.25 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 42420.14 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 42583.48 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 42504.14 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 43654.23 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 40895.89 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 45629.99 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 53386.01 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 59917.26 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 62097.25 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 57458.42 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 51702.72 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 48835.5 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 41513.99 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 23469.18 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Imports - coal: 33895.9 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [9922.9130343700726, 10343.062385882571, 9297.9623569033538, 8506.3164203620581, 7826.1268123781192, 7839.3769212705884, 5069.2622359520874, 6614.4715801735047, 6255.275039404718, 5657.6763444212083, 5641.0483383143483, 5502.1615394127648, 4303.9956399432613, 3711.2892159793359, 3608.4504812131222, 4017.6611514013616, 3881.9047189511653, 3208.2375071310166, 3275.457285993205],
      "text": ["Imports - coal: 9922.91 thousand short tons<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 10343.06 thousand short tons<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 9297.96 thousand short tons<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 8506.32 thousand short tons<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 7826.13 thousand short tons<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 7839.38 thousand short tons<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 5069.26 thousand short tons<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 6614.47 thousand short tons<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 6255.28 thousand short tons<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 5657.68 thousand short tons<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 5641.05 thousand short tons<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 5502.16 thousand short tons<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 4304 thousand short tons<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 3711.29 thousand short tons<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 3608.45 thousand short tons<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 4017.66 thousand short tons<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 3881.9 thousand short tons<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 3208.24 thousand short tons<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Imports - coal: 3275.46 thousand short tons<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [11128.213365611025, 9087.9680060182254, 5180.0319099622457, 7330.5978738075701, 7315.0688850826818, 6220.4100975441106, 6524.0563559137736, 6492.1195090513802, 7643.767940855013, 4337.3270736240056, 5553.9862144039344, 5966.5876876812981, 3882.0652668210469, 4283.4758675840258, 4278.2625147495191, 4407.8195652482591, 3375.4185832080161, 2667.4431791543207, 2431.650764559995],
      "text": ["Imports - coal: 11128.21 thousand short tons<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 9087.97 thousand short tons<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 5180.03 thousand short tons<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 7330.6 thousand short tons<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 7315.07 thousand short tons<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 6220.41 thousand short tons<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 6524.06 thousand short tons<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 6492.12 thousand short tons<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 7643.77 thousand short tons<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 4337.33 thousand short tons<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 5553.99 thousand short tons<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 5966.59 thousand short tons<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 3882.07 thousand short tons<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 4283.48 thousand short tons<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 4278.26 thousand short tons<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 4407.82 thousand short tons<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 3375.42 thousand short tons<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 2667.44 thousand short tons<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Imports - coal: 2431.65 thousand short tons<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [756.19208000563401, 822.64188406914354, 652.95248009787531, 386.94040276510219, 615.19795064377774, 680.66682508897509, 298.99641667815399, 652.4031452613433, 505.66336857966832, 411.90841537236099, 438.85329002561997, 333.61710677188285, 254.62046525339514, 308.5256391685632, 406.06388916636706, 373.83839506985356, 321.37640068376305, 299.09259195560048, 261.1143456316384],
      "text": ["Imports - coal: 756.19 thousand short tons<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 822.64 thousand short tons<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 652.95 thousand short tons<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 386.94 thousand short tons<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 615.2 thousand short tons<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 680.67 thousand short tons<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 299 thousand short tons<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 652.4 thousand short tons<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 505.66 thousand short tons<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 411.91 thousand short tons<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 438.85 thousand short tons<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 333.62 thousand short tons<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 254.62 thousand short tons<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 308.53 thousand short tons<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 406.06 thousand short tons<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 373.84 thousand short tons<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 321.38 thousand short tons<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 299.09 thousand short tons<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Imports - coal: 261.11 thousand short tons<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Imports - coal (REMIND_54)",
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
      "range": [0, 350164.44885068398],
      "tickmode": "array",
      "ticktext": ["0e+00", "1e+05", "2e+05", "3e+05"],
      "tickvals": [0, 100000, 200000.00000000003, 300000],
      "categoryorder": "array",
      "categoryarray": ["0e+00", "1e+05", "2e+05", "3e+05"],
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
        "text": "thousand short tons",
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
    "b55ccaf1c8f": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c3e2ffd8": {
      "y": {}
    }
  },
  "cur_data": "b55ccaf1c8f",
  "visdat": {
    "b55ccaf1c8f": ["function (y) ", "x"],
    "b55c3e2ffd8": ["function (y) ", "x"]
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

  
