(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Consumption_Coal_consumption_line') 

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
      "y": [2000.6900000000003, 2461.4599999999996, 2615.7800000000002, 2502.2399999999998, 2900.1799999999998, 3394.0200000000004, 2363.6399999999999, 2741.4499999999998, 2844.6799999999998, 2869.3099999999999, 3169.1399999999994, 3085.3699999999999, 3001.5900000000001, 2624.5999999999999, 2735.2700000000004, 2518.21, 1730.54, 1948.1199999999999, 2997.6300000000001],
      "text": ["Coal consumption: 2000.69 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2461.46 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2615.78 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2502.24 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2900.18 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 3394.02 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2363.64 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2741.45 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2844.68 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2869.31 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 3169.14 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 3085.37 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 3001.59 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2624.6 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2735.27 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2518.21 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 1730.54 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 1948.12 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Coal consumption: 2997.63 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [198.86235274860198, 196.47400990085251, 234.97761150177811, 245.0727518862158, 287.71488060620209, 255.55054693835157, 239.32073412316046, 212.49836470015626, 185.75847489067922, 204.88588695122363, 212.96172546271632, 188.09949807072377, 223.35950227401452, 196.25390998857145, 189.80356830461463, 147.00255523320249, 136.31646970244756, 136.56837756322565, 152.7271688025794],
      "text": ["Coal consumption: 198.86 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 196.47 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 234.98 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 245.07 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 287.71 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 255.55 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 239.32 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 212.5 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 185.76 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 204.89 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 212.96 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 188.1 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 223.36 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 196.25 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 189.8 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 147 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 136.32 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 136.57 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Coal consumption: 152.73 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [212.66873411227326, 240.88679165097304, 255.28692155961519, 297.85876630843927, 311.69062514693559, 324.41560533300947, 311.65630346297564, 340.14505556589461, 311.96176785831636, 342.82725061945081, 343.39385271324602, 359.18571196441911, 380.83064553001179, 411.85860013342324, 418.93636977483862, 404.14739395739491, 466.11448524443404, 471.16668733027956, 474.86136271455064],
      "text": ["Coal consumption: 212.67 thousand short tons<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 240.89 thousand short tons<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 255.29 thousand short tons<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 297.86 thousand short tons<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 311.69 thousand short tons<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 324.42 thousand short tons<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 311.66 thousand short tons<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 340.15 thousand short tons<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 311.96 thousand short tons<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 342.83 thousand short tons<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 343.39 thousand short tons<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 359.19 thousand short tons<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 380.83 thousand short tons<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 411.86 thousand short tons<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 418.94 thousand short tons<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 404.15 thousand short tons<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 466.11 thousand short tons<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 471.17 thousand short tons<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Coal consumption: 474.86 thousand short tons<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [1995.8599999999999, 1934.21, 2150.3299999999995, 2123.0599999999999, 2116.71, 1933.4499999999998, 1844.1600000000001, 1771.05, 1406.5899999999999, 1075.7, 866.95000000000005, 1026.04, 2148.9599999999996, 2716.4499999999998, 3192.46, 5229.5699999999997, 4345.1300000000001, 2256.0700000000002, 3594.0100000000002],
      "text": ["Coal consumption: 1995.86 thousand short tons<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 1934.21 thousand short tons<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 2150.33 thousand short tons<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 2123.06 thousand short tons<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 2116.71 thousand short tons<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 1933.45 thousand short tons<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 1844.16 thousand short tons<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 1771.05 thousand short tons<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 1406.59 thousand short tons<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 1075.7 thousand short tons<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 866.95 thousand short tons<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 1026.04 thousand short tons<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 2148.96 thousand short tons<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 2716.45 thousand short tons<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 3192.46 thousand short tons<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 5229.57 thousand short tons<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 4345.13 thousand short tons<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 2256.07 thousand short tons<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Coal consumption: 3594.01 thousand short tons<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [62106.350000000006, 65430.919999999998, 69252.630000000005, 69554.660000000018, 68046.699999999997, 62001.629999999997, 52171.230000000003, 51885.73000000001, 47638.530000000006, 45848.379999999997, 43651.480000000003, 45142.900000000001, 43304.25, 38686.669999999998, 42477.519999999997, 36102.860000000001, 28089.619999999995, 21864.209999999999, 24174.629999999997],
      "text": ["Coal consumption: 62106.35 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 65430.92 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 69252.63 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 69554.66 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 68046.7 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 62001.63 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 52171.23 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 51885.73 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 47638.53 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 45848.38 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 43651.48 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 45142.9 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 43304.25 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 38686.67 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 42477.52 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 36102.86 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 28089.62 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 21864.21 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Coal consumption: 24174.63 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [116742.0581018017, 121277.90718885502, 122998.20742424794, 125483.10944855091, 126148.13861607229, 125524.75456481081, 129422.84428351016, 119645.3486924685, 115638.5462056281, 115197.31447552019, 105356.44133011372, 100373.53355559398, 104971.03288346234, 106114.75214343016, 102185.72117969321, 97693.342901595228, 94086.543720269096, 89669.805001488334, 92245.187196125131],
      "text": ["Coal consumption: 116742.06 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 121277.91 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 122998.21 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 125483.11 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 126148.14 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 125524.75 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 129422.84 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 119645.35 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 115638.55 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 115197.31 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 105356.44 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 100373.53 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 104971.03 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 106114.75 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 102185.72 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 97693.34 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 94086.54 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 89669.81 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Coal consumption: 92245.19 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [18327.689999999999, 20099.5, 24706.849999999999, 27262.529999999999, 24469.790000000001, 22413.130000000001, 22595.220000000001, 29260.480000000003, 31473.389999999999, 26096.360000000001, 26056.700000000001, 24421.830000000002, 26275.32, 19825, 23032.09, 19341.129999999997, 20118.18, 15762.830000000002, 15481.379999999997],
      "text": ["Coal consumption: 18327.69 thousand short tons<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 20099.5 thousand short tons<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 24706.85 thousand short tons<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 27262.53 thousand short tons<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 24469.79 thousand short tons<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 22413.13 thousand short tons<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 22595.22 thousand short tons<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 29260.48 thousand short tons<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 31473.39 thousand short tons<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 26096.36 thousand short tons<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 26056.7 thousand short tons<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 24421.83 thousand short tons<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 26275.32 thousand short tons<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 19825 thousand short tons<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 23032.09 thousand short tons<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 19341.13 thousand short tons<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 20118.18 thousand short tons<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 15762.83 thousand short tons<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Coal consumption: 15481.38 thousand short tons<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [832.91159299069818, 930.96003495698267, 792.1435262963663, 679.77139233023149, 743.66730386311815, 767.90502030817322, 577.30600836426652, 749.17610196364444, 785.54230179015087, 820.79955897375783, 853.85787936321776, 903.43791249898572, 863.78203434893317, 824.12526211198838, 888.02738553918903, 862.9723560314776, 920.82735332738184, 960.71089080205684, 1015.6472249822986],
      "text": ["Coal consumption: 832.91 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 930.96 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 792.14 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 679.77 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 743.67 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 767.91 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 577.31 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 749.18 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 785.54 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 820.8 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 853.86 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 903.44 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 863.78 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 824.13 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 888.03 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 862.97 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 920.83 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 960.71 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Coal consumption: 1015.65 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [20106.639999999999, 21858.98, 21954.599999999999, 22109.290000000001, 23031.57, 22759.669999999995, 19193.130000000001, 23930.209999999995, 25210.639999999999, 26036.560000000001, 28770.289999999997, 30678.389999999999, 30206.599999999999, 28267.639999999996, 28530.149999999998, 27777.230000000003, 26724.259999999998, 24042.480000000003, 28310.389999999999],
      "text": ["Coal consumption: 20106.64 thousand short tons<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 21858.98 thousand short tons<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 21954.6 thousand short tons<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 22109.29 thousand short tons<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 23031.57 thousand short tons<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 22759.67 thousand short tons<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 19193.13 thousand short tons<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 23930.21 thousand short tons<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 25210.64 thousand short tons<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 26036.56 thousand short tons<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 28770.29 thousand short tons<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 30678.39 thousand short tons<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 30206.6 thousand short tons<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 28267.64 thousand short tons<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 28530.15 thousand short tons<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 27777.23 thousand short tons<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 26724.26 thousand short tons<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 24042.48 thousand short tons<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Coal consumption: 28310.39 thousand short tons<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [56929.435470644756, 53240.414443632399, 51184.06627630291, 54574.954130544262, 56302.038199120339, 56253.243644860886, 50008.491027127537, 53216.357009329804, 58878.168415122898, 58688.715678082102, 57507.691523181427, 48462.488408856509, 41820.069396411687, 41911.813153214731, 37028.817610857463, 40259.991140096638, 37849.395316294489, 34184.251787979112, 35300.402177022705],
      "text": ["Coal consumption: 56929.44 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 53240.41 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 51184.07 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 54574.95 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 56302.04 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 56253.24 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 50008.49 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Coal consumption: 53216.36 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Coal consumption: 58878.17 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 58688.72 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 57507.69 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 48462.49 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 41820.07 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 41911.81 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 37028.82 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 40259.99 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 37849.4 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 34184.25 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Coal consumption: 35300.4 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [87296.339999999997, 88444.949999999983, 91087.180000000008, 94471.270000000004, 102048.54999999999, 113555.57000000001, 118390.3, 131696.28, 142421.77000000002, 140359.34, 139555.75, 144082.94, 148402.89000000001, 148575.95000000001, 152392.16, 153101.54999999999, 146354.91, 138064.78, 139457.69],
      "text": ["Coal consumption: 87296.34 thousand short tons<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 88444.95 thousand short tons<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 91087.18 thousand short tons<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 94471.27 thousand short tons<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 102048.55 thousand short tons<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 113555.57 thousand short tons<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 118390.3 thousand short tons<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 131696.28 thousand short tons<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 142421.77 thousand short tons<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 140359.34 thousand short tons<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 139555.75 thousand short tons<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 144082.94 thousand short tons<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 148402.89 thousand short tons<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 148575.95 thousand short tons<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 152392.16 thousand short tons<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 153101.55 thousand short tons<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 146354.91 thousand short tons<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 138064.78 thousand short tons<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Coal consumption: 139457.69 thousand short tons<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [8987.1299999999992, 10656.030000000001, 11062.780000000002, 11091.440000000001, 11260.1, 13275.120000000001, 12669.950000000003, 14573.639999999998, 16136.720000000001, 18107.330000000002, 20105.360000000001, 19308.029999999999, 23822.490000000002, 22372.48, 32393.580000000002, 33991.93, 36510.709999999999, 36206.110000000001, 38686.949999999997],
      "text": ["Coal consumption: 8987.13 thousand short tons<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 10656.03 thousand short tons<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 11062.78 thousand short tons<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 11091.44 thousand short tons<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 11260.1 thousand short tons<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 13275.12 thousand short tons<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 12669.95 thousand short tons<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 14573.64 thousand short tons<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 16136.72 thousand short tons<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 18107.33 thousand short tons<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 20105.36 thousand short tons<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 19308.03 thousand short tons<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 23822.49 thousand short tons<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 22372.48 thousand short tons<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 32393.58 thousand short tons<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 33991.93 thousand short tons<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 36510.71 thousand short tons<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 36206.11 thousand short tons<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Coal consumption: 38686.95 thousand short tons<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [19249.733857877189, 20692.285413348291, 20861.873516439435, 21421.368098629086, 20960.478566662641, 23596.004424813967, 20960.106995413706, 21523.042756502859, 20536.67952702161, 20729.546035257652, 20208.123928129316, 19230.664905982539, 17674.181992531878, 17392.701212234842, 20250.727389742646, 20243.878840176607, 20854.111717906679, 20399.36844886413, 19657.638055581043],
      "text": ["Coal consumption: 19249.73 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal consumption: 20692.29 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal consumption: 20861.87 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal consumption: 21421.37 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal consumption: 20960.48 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Coal consumption: 23596 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal consumption: 20960.11 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal consumption: 21523.04 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal consumption: 20536.68 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal consumption: 20729.55 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal consumption: 20208.12 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal consumption: 19230.66 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Coal consumption: 17674.18 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal consumption: 17392.7 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal consumption: 20250.73 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal consumption: 20243.88 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal consumption: 20854.11 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal consumption: 20399.37 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Coal consumption: 19657.64 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [4902.46, 3948.4499999999998, 4354.1300000000001, 3818.4699999999998, 4593.2700000000004, 3048.6800000000003, 3993.8000000000006, 3894.1199999999999, 4958.9899999999998, 4925.5299999999997, 6068, 8480.8700000000008, 7961.0299999999988, 7932.96, 7111.4599999999991, 6272.8900000000003, 7800.920000000001, 6551.2399999999998, 5086.8400000000001],
      "text": ["Coal consumption: 4902.46 thousand short tons<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 3948.45 thousand short tons<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 4354.13 thousand short tons<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 3818.47 thousand short tons<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 4593.27 thousand short tons<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 3048.68 thousand short tons<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 3993.8 thousand short tons<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 3894.12 thousand short tons<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 4958.99 thousand short tons<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 4925.53 thousand short tons<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 6068 thousand short tons<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 8480.87 thousand short tons<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 7961.03 thousand short tons<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 7932.96 thousand short tons<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 7111.46 thousand short tons<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 6272.89 thousand short tons<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 7800.92 thousand short tons<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 6551.24 thousand short tons<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Coal consumption: 5086.84 thousand short tons<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [180.23913578717008, 169.37299161787408, 176.83822559956468, 168.17228248369969, 172.11462625086585, 140.2197027538987, 143.1597737216548, 172.55426317372229, 189.13224967814355, 203.74342329190046, 224.24656738647971, 280.90215177757113, 295.50456958410973, 286.62155923231938, 316.12467604932164, 330.50590697487564, 327.17046657469416, 325.71275426994572, 352.65051497564281],
      "text": ["Coal consumption: 180.24 thousand short tons<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 169.37 thousand short tons<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 176.84 thousand short tons<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 168.17 thousand short tons<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 172.11 thousand short tons<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 140.22 thousand short tons<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 143.16 thousand short tons<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 172.55 thousand short tons<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 189.13 thousand short tons<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 203.74 thousand short tons<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 224.25 thousand short tons<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 280.9 thousand short tons<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 295.5 thousand short tons<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 286.62 thousand short tons<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 316.12 thousand short tons<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 330.51 thousand short tons<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 327.17 thousand short tons<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 325.71 thousand short tons<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Coal consumption: 352.65 thousand short tons<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [247112.54999999996, 239243.15999999997, 236608.64000000001, 242177.5, 233889.23000000001, 253015.41999999998, 224904.31, 222806.60999999999, 231500.53, 242965.66000000003, 218386.34, 210322.95000000001, 234109.69999999998, 227094.59, 229360.73000000001, 243703.47, 247453.97, 231471.33000000002, 273031.46999999991],
      "text": ["Coal consumption: 247112.55 thousand short tons<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 239243.16 thousand short tons<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 236608.64 thousand short tons<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 242177.5 thousand short tons<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 233889.23 thousand short tons<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 253015.42 thousand short tons<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 224904.31 thousand short tons<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 222806.61 thousand short tons<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 231500.53 thousand short tons<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 242965.66 thousand short tons<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 218386.34 thousand short tons<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 210322.95 thousand short tons<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 234109.7 thousand short tons<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 227094.59 thousand short tons<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 229360.73 thousand short tons<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 243703.47 thousand short tons<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 247453.97 thousand short tons<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 231471.33 thousand short tons<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Coal consumption: 273031.47 thousand short tons<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [186.91217010069613, 165.58852341810189, 161.39796401814158, 159.62510574356958, 205.12932644097452, 249.58909253437238, 315.2186220613533, 423.71744201664427, 529.2225440240436, 629.63129822338976, 664.92368803245972, 550.24799967178672, 562.77559504533076, 744.60599963377661, 830.68988805720517, 910.17693453787444, 1070.7756998297709, 999.207665340674, 1299.3421674947656],
      "text": ["Coal consumption: 186.91 thousand short tons<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal consumption: 165.59 thousand short tons<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal consumption: 161.4 thousand short tons<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal consumption: 159.63 thousand short tons<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal consumption: 205.13 thousand short tons<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal consumption: 249.59 thousand short tons<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Coal consumption: 315.22 thousand short tons<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 423.72 thousand short tons<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 529.22 thousand short tons<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 629.63 thousand short tons<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 664.92 thousand short tons<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 550.25 thousand short tons<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 562.78 thousand short tons<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 744.61 thousand short tons<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 830.69 thousand short tons<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 910.18 thousand short tons<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 1070.78 thousand short tons<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 999.21 thousand short tons<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Coal consumption: 1299.34 thousand short tons<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [9191.3500000000004, 16651.900000000001, 16327.419999999998, 17639.16, 18928.869999999999, 20530.149999999998, 21925.789999999997, 25968.499999999996, 30546.110000000001, 31276.939999999995, 29137.490000000002, 37747.32, 48281.18, 56587.080000000009, 56298.280000000006, 68941.150000000009, 90937.569999999992, 94431.989999999991, 90568.469999999987],
      "text": ["Coal consumption: 9191.35 thousand short tons<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 16651.9 thousand short tons<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 16327.42 thousand short tons<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 17639.16 thousand short tons<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 18928.87 thousand short tons<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 20530.15 thousand short tons<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 21925.79 thousand short tons<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 25968.5 thousand short tons<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 30546.11 thousand short tons<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 31276.94 thousand short tons<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 29137.49 thousand short tons<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 37747.32 thousand short tons<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 48281.18 thousand short tons<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 56587.08 thousand short tons<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 56298.28 thousand short tons<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 68941.15 thousand short tons<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 90937.57 thousand short tons<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 94431.99 thousand short tons<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Coal consumption: 90568.47 thousand short tons<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [5823.5, 7299.5000000000009, 7880.4099999999999, 8358.8199999999997, 10631.779999999999, 9246.1900000000005, 8495.5, 8033.6400000000012, 8151.5800000000008, 7302.8000000000002, 7107.6899999999996, 9182.2399999999998, 9949.4500000000007, 12330.440000000001, 19820.730000000003, 22514.440000000002, 27506.549999999999, 27601.299999999999, 29253.990000000002],
      "text": ["Coal consumption: 5823.5 thousand short tons<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 7299.5 thousand short tons<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 7880.41 thousand short tons<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 8358.82 thousand short tons<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 10631.78 thousand short tons<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 9246.19 thousand short tons<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 8495.5 thousand short tons<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 8033.64 thousand short tons<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 8151.58 thousand short tons<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 7302.8 thousand short tons<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 7107.69 thousand short tons<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 9182.24 thousand short tons<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 9949.45 thousand short tons<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 12330.44 thousand short tons<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 19820.73 thousand short tons<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 22514.44 thousand short tons<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 27506.55 thousand short tons<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 27601.3 thousand short tons<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Coal consumption: 29253.99 thousand short tons<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [1322.3900000000001, 1410.8800000000001, 1681.1099999999999, 2014.04, 2155.0100000000002, 2304.3600000000001, 2359.1700000000005, 2413.9699999999998, 2488.3499999999999, 2503.7600000000002, 2805.96, 3627.79, 4305.3999999999996, 4277.1499999999996, 5083.9100000000008, 5647.9200000000001, 6373.7599999999993, 7477.54, 8581.3199999999997],
      "text": ["Coal consumption: 1322.39 thousand short tons<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 1410.88 thousand short tons<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 1681.11 thousand short tons<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 2014.04 thousand short tons<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 2155.01 thousand short tons<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 2304.36 thousand short tons<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 2359.17 thousand short tons<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 2413.97 thousand short tons<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 2488.35 thousand short tons<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 2503.76 thousand short tons<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 2805.96 thousand short tons<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 3627.79 thousand short tons<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 4305.4 thousand short tons<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 4277.15 thousand short tons<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 5083.91 thousand short tons<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 5647.92 thousand short tons<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 6373.76 thousand short tons<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 7477.54 thousand short tons<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Coal consumption: 8581.32 thousand short tons<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [36011.76999999999, 39773.260000000009, 45581.330000000002, 47823.010000000002, 56759.82, 58944.099999999999, 62054.540000000008, 72611.389999999985, 72752.460000000006, 73854.770000000004, 79443.479999999996, 83973.979999999981, 95365.360000000001, 99814.169999999998, 106957.14, 126853.83999999998, 152579.75, 145379.97, 165481.04999999996],
      "text": ["Coal consumption: 36011.77 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 39773.26 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 45581.33 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 47823.01 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 56759.82 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 58944.1 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 62054.54 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 72611.39 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 72752.46 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 73854.77 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 79443.48 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 83973.98 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 95365.36 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 99814.17 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 106957.14 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 126853.84 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 152579.75 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 145379.97 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Coal consumption: 165481.05 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [1522.0315500613003, 2257.0789763748726, 2573.6261097687525, 2661.8967306148597, 3327.8690589305183, 3698.4867907297862, 4002.4666846255723, 5611.7524818113825, 5684.6339064825925, 6147.2636594430714, 5974.8309019663675, 6267.2938121847601, 7393.6189354653452, 8485.3591162735538, 9587.5076417121691, 10419.092435072636, 10368.770466268837, 10438.67090783101, 10316.150089270241],
      "text": ["Coal consumption: 1522.03 thousand short tons<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 2257.08 thousand short tons<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 2573.63 thousand short tons<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 2661.9 thousand short tons<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 3327.87 thousand short tons<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 3698.49 thousand short tons<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 4002.47 thousand short tons<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 5611.75 thousand short tons<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 5684.63 thousand short tons<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 6147.26 thousand short tons<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 5974.83 thousand short tons<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 6267.29 thousand short tons<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 7393.62 thousand short tons<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 8485.36 thousand short tons<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 9587.51 thousand short tons<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 10419.09 thousand short tons<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 10368.77 thousand short tons<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 10438.67 thousand short tons<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Coal consumption: 10316.15 thousand short tons<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [27855.439999999999, 30967.57, 32644.389999999996, 33143.07, 35773.080000000002, 37893.010000000002, 36727.870000000003, 39042.720000000001, 40473.519999999997, 39690.880000000005, 41485.440000000002, 39614.820000000007, 39485.849999999999, 38047.330000000002, 39353.57, 37251.459999999999, 37823.559999999998, 38760.530000000006, 37703.410000000003],
      "text": ["Coal consumption: 27855.44 thousand short tons<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 30967.57 thousand short tons<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 32644.39 thousand short tons<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 33143.07 thousand short tons<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 35773.08 thousand short tons<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 37893.01 thousand short tons<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 36727.87 thousand short tons<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 39042.72 thousand short tons<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 40473.52 thousand short tons<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 39690.88 thousand short tons<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 41485.44 thousand short tons<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 39614.82 thousand short tons<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 39485.85 thousand short tons<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 38047.33 thousand short tons<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 39353.57 thousand short tons<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 37251.46 thousand short tons<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 37823.56 thousand short tons<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 38760.53 thousand short tons<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Coal consumption: 37703.41 thousand short tons<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [185567.28, 189829.91000000003, 197235.22, 194701.02000000002, 202162.55000000002, 196199.04999999999, 187911.89000000001, 202956.21999999997, 198376.10999999999, 207804.17000000004, 219370.72000000003, 215079.42000000001, 212558.44000000003, 212493.41000000003, 214392.69, 208503.75, 206516.79999999996, 203062.19, 201874.58000000002],
      "text": ["Coal consumption: 185567.28 thousand short tons<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 189829.91 thousand short tons<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 197235.22 thousand short tons<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 194701.02 thousand short tons<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 202162.55 thousand short tons<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 196199.05 thousand short tons<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 187911.89 thousand short tons<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 202956.22 thousand short tons<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 198376.11 thousand short tons<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 207804.17 thousand short tons<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 219370.72 thousand short tons<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 215079.42 thousand short tons<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 212558.44 thousand short tons<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 212493.41 thousand short tons<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 214392.69 thousand short tons<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 208503.75 thousand short tons<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 206516.8 thousand short tons<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 203062.19 thousand short tons<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Coal consumption: 201874.58 thousand short tons<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [1202.9707062123359, 1327.9551040115298, 1349.868575188194, 1361.9126956633927, 1383.1012253049087, 1291.2801938875725, 1177.48689007905, 1140.1683135132421, 1006.837488085818, 1004.0254556306659, 977.79505497308719, 1300.3732768639009, 1401.537209136367, 1318.4907276856143, 1349.3398260907031, 1529.5377729101781, 1728.2514811479664, 1788.8672753731314, 2163.0271536709047],
      "text": ["Coal consumption: 1202.97 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Coal consumption: 1327.96 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Coal consumption: 1349.87 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1361.91 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1383.1 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1291.28 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1177.49 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1140.17 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1006.84 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1004.03 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 977.8 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1300.37 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1401.54 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1318.49 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1349.34 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1529.54 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1728.25 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 1788.87 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Coal consumption: 2163.03 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [3823.9099999999999, 5075.04, 5037.3399999999992, 6310.4499999999998, 6335.7200000000003, 8013.7399999999998, 7329.21, 9297.9200000000019, 10536.969999999999, 12097.790000000001, 13804.290000000003, 12081.32, 13355.59, 13368.82, 14082.009999999998, 14407.690000000002, 13670.209999999997, 11899.75, 13258.209999999999],
      "text": ["Coal consumption: 3823.91 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 5075.04 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 5037.34 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 6310.45 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 6335.72 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 8013.74 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 7329.21 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 9297.92 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 10536.97 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 12097.79 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 13804.29 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 12081.32 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 13355.59 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 13368.82 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 14082.01 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 14407.69 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 13670.21 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 11899.75 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Coal consumption: 13258.21 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [70460.759999999995, 71041.669999999998, 84682.759999999995, 92292.009999999995, 108524.63, 108782.56, 110690.66, 104456, 110930.97, 108903.82000000001, 92718.600000000006, 106463.3, 101722.27, 116877.92999999999, 122959.38, 134169.25, 137176.00000000003, 113734.80999999998, 120818.11000000002],
      "text": ["Coal consumption: 70460.76 thousand short tons<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 71041.67 thousand short tons<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 84682.76 thousand short tons<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 92292.01 thousand short tons<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 108524.63 thousand short tons<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 108782.56 thousand short tons<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 110690.66 thousand short tons<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 104456 thousand short tons<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 110930.97 thousand short tons<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 108903.82 thousand short tons<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 92718.6 thousand short tons<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 106463.3 thousand short tons<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 101722.27 thousand short tons<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 116877.93 thousand short tons<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 122959.38 thousand short tons<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 134169.25 thousand short tons<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 137176 thousand short tons<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 113734.81 thousand short tons<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Coal consumption: 120818.11 thousand short tons<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [0, 0.01, 0.0099999999999999985, 0.01, 0.79000000000000015, 16.219999999999999, 27.480000000000004, 41.520000000000003, 107.83, 246.91999999999999, 320.76999999999998, 446.44, 453.05000000000001, 579.82000000000005, 641.54000000000008, 685.63999999999999, 660.33000000000004, 582.35000000000002, 509.30000000000007],
      "text": ["Coal consumption: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 0.01 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 0.01 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 0.01 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 0.79 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 16.22 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 27.48 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 41.52 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 107.83 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 246.92 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 320.77 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 446.44 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 453.05 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 579.82 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 641.54 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 685.64 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 660.33 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 582.35 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Coal consumption: 509.3 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [29066.529157490146, 27598.551920435246, 27224.875698002408, 29932.475603011619, 29928.72325827858, 29715.558349471037, 26076.034957415464, 25310.997767486773, 30260.189297522291, 27492.76468548509, 22242.838397288735, 22588.878214158151, 23719.649835552635, 21224.159376160387, 22395.325002349487, 21268.473638292435, 18982.004782658831, 14405.732611733745, 16599.830504385794],
      "text": ["Coal consumption: 29066.53 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 27598.55 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 27224.88 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 29932.48 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 29928.72 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 29715.56 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 26076.03 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 25311 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 30260.19 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 27492.76 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 22242.84 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 22588.88 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 23719.65 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 21224.16 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 22395.33 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 21268.47 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 18982 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 14405.73 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Coal consumption: 16599.83 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [1882.75, 1916.9200000000001, 1951.0900000000001, 1808.8900000000001, 1862.95, 1591.4000000000001, 1251.28, 1222.5799999999999, 1292.8499999999999, 1019.6400000000001, 1234.8699999999999, 1242.1900000000001, 1388.1200000000001, 1524.5799999999999, 1709.6299999999999, 1694.6800000000003, 1678.46, 1676.2800000000002, 1584.97],
      "text": ["Coal consumption: 1882.75 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1916.92 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1951.09 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1808.89 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1862.95 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1591.4 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1251.28 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1222.58 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1292.85 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1019.64 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1234.87 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1242.19 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1388.12 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1524.58 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1709.63 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1694.68 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1678.46 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1676.28 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Coal consumption: 1584.97 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [395174, 439141, 463510, 493153.00000000006, 537472, 587611, 642655, 683569, 714705, 776357, 807223, 895227, 938601.38000000012, 936107.38, 957949.55999999994, 1034586.4400000001, 1070521.5, 1031109.3800000001, 1049853.25],
      "text": ["Coal consumption: 395174 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 439141 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 463510 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 493153 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 537472 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 587611 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 642655 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 683569 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 714705 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 776357 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 807223 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 895227 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 938601.38 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 936107.38 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 957949.56 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 1034586.44 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 1070521.5 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 1031109.38 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Coal consumption: 1049853.25 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [1094860.8799999999, 1107254.5, 1125977.6300000001, 1112291.75, 1127998.1299999999, 1120548.5, 997477.63, 1048513.6899999999, 1002948.1899999999, 889185.13000000012, 924441.81000000006, 917731.5, 798114.68999999994, 731070.69000000006, 716855.68999999994, 688105, 586543, 476693, 548846.75],
      "text": ["Coal consumption: 1094860.88 thousand short tons<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 1107254.5 thousand short tons<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 1125977.63 thousand short tons<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 1112291.75 thousand short tons<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 1127998.13 thousand short tons<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 1120548.5 thousand short tons<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 997477.63 thousand short tons<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 1048513.69 thousand short tons<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 1002948.19 thousand short tons<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 889185.13 thousand short tons<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 924441.81 thousand short tons<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 917731.5 thousand short tons<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 798114.69 thousand short tons<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 731070.69 thousand short tons<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 716855.69 thousand short tons<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 688105 thousand short tons<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 586543 thousand short tons<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 476693 thousand short tons<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Coal consumption: 548846.75 thousand short tons<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "text": ["Coal consumption: 1.14 thousand short tons<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 3.24 thousand short tons<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 11.5 thousand short tons<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 9.8 thousand short tons<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 15.12 thousand short tons<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 17.21 thousand short tons<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 12.13 thousand short tons<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 18.24 thousand short tons<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 14.56 thousand short tons<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 16.58 thousand short tons<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 6.29 thousand short tons<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 8.15 thousand short tons<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 15.52 thousand short tons<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 17.88 thousand short tons<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 21.83 thousand short tons<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 38.28 thousand short tons<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 20.02 thousand short tons<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 11.53 thousand short tons<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Coal consumption: 15.22 thousand short tons<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [47353.029999999999, 50232.26999999999, 49070.43, 43880.760000000002, 46709.290000000001, 29100.98, 20811.610000000001, 16431.029999999999, 19958.799999999999, 24690, 23273.07, 25535.009999999998, 25070.939999999999, 21948.09, 26412.449999999997, 20827.999999999996, 8758.9799999999996, 4984.1199999999999, 4780.7299999999996],
      "text": ["Coal consumption: 47353.03 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 50232.27 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 49070.43 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 43880.76 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 46709.29 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 29100.98 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 20811.61 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 16431.03 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 19958.8 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 24690 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 23273.07 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 25535.01 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 25070.94 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 21948.09 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 26412.45 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 20828 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 8758.98 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 4984.12 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Coal consumption: 4780.73 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [160801.67000000001, 159885.66000000003, 157063.75, 161287.79999999999, 158482.42000000001, 156003.32999999999, 146061.59, 155369.5, 158514.38, 155991.19, 158228.89000000001, 151044.03, 149679.38, 148848.22, 150120.75, 146982.94, 131484.29999999999, 120794.03999999999, 128278.14999999999],
      "text": ["Coal consumption: 160801.67 thousand short tons<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 159885.66 thousand short tons<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 157063.75 thousand short tons<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 161287.8 thousand short tons<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 158482.42 thousand short tons<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 156003.33 thousand short tons<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 146061.59 thousand short tons<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 155369.5 thousand short tons<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 158514.38 thousand short tons<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 155991.19 thousand short tons<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 158228.89 thousand short tons<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 151044.03 thousand short tons<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 149679.38 thousand short tons<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 148848.22 thousand short tons<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 150120.75 thousand short tons<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 146982.94 thousand short tons<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 131484.3 thousand short tons<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 120794.04 thousand short tons<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Coal consumption: 128278.15 thousand short tons<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [306.44, 306.44, 360.45999999999998, 439.81999999999999, 626.11000000000001, 1332.6900000000001, 1332.6900000000001, 1332.6900000000001, 1599.45, 2132.9699999999998, 2666.4899999999998, 2666.4899999999998, 2799.8699999999999, 2932.1400000000003, 2532.75, 2967.0599999999999, 3001.1700000000001, 2591.9200000000001, 2762.4400000000001],
      "text": ["Coal consumption: 306.44 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 306.44 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 360.46 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 439.82 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 626.11 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 1332.69 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 1332.69 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 1332.69 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 1599.45 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 2132.97 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 2666.49 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 2666.49 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 2799.87 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 2932.14 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 2532.75 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 2967.06 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 3001.17 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 2591.92 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Coal consumption: 2762.44 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [187997.87999999998, 189064.44, 193198.80000000002, 197328.73000000001, 203252.41, 203264.95000000001, 203453.10999999999, 206727.76999999999, 195146.96999999997, 202973.06, 202730.69, 201736.81, 197529.66, 199816.78, 199900.57999999999, 189076.06000000003, 208986.70000000001, 207375.67000000004, 189300.06],
      "text": ["Coal consumption: 187997.88 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 189064.44 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 193198.8 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 197328.73 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 203252.41 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 203264.95 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 203453.11 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 206727.77 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 195146.97 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 202973.06 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 202730.69 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 201736.81 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 197529.66 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 199816.78 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 199900.58 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 189076.06 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 208986.7 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 207375.67 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Coal consumption: 189300.06 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [274393.62999999995, 276135.27999999997, 266199.03000000003, 267558.19, 275892.75, 262148.06, 247775.03000000003, 253876.32999999999, 258750.72999999998, 271234.40999999997, 272161.44, 264632.65999999992, 264188.44, 255911.18999999997, 245810.72000000003, 238343.67000000004, 188824.59, 152853.79999999996, 181467.44],
      "text": ["Coal consumption: 274393.63 thousand short tons<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 276135.28 thousand short tons<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 266199.03 thousand short tons<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 267558.19 thousand short tons<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 275892.75 thousand short tons<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 262148.06 thousand short tons<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 247775.03 thousand short tons<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 253876.33 thousand short tons<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 258750.73 thousand short tons<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 271234.41 thousand short tons<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 272161.44 thousand short tons<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 264632.66 thousand short tons<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 264188.44 thousand short tons<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 255911.19 thousand short tons<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 245810.72 thousand short tons<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 238343.67 thousand short tons<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 188824.59 thousand short tons<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 152853.8 thousand short tons<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Coal consumption: 181467.44 thousand short tons<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [31962.460998585771, 31395.572837223852, 30906.754004577306, 31137.856636198045, 31715.858592857388, 30348.766783868155, 28482.180082850296, 28688.57312674799, 29182.33155575268, 27980.390691422312, 25596.36321796527, 25885.483723778867, 25754.683876916621, 25734.300785797168, 25928.483626226815, 25692.994492155944, 23583.585057538799, 19656.681056353118, 20164.509580638511],
      "text": ["Coal consumption: 31962.46 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 31395.57 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 30906.75 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 31137.86 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 31715.86 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 30348.77 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 28482.18 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 28688.57 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 29182.33 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 27980.39 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 25596.36 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 25885.48 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 25754.68 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 25734.3 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 25928.48 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 25692.99 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 23583.59 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 19656.68 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Coal consumption: 20164.51 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [3088.6699999999996, 3175.7600000000007, 3312.4400000000001, 2925.5300000000007, 2782.23, 2483.0700000000002, 2015.0200000000002, 2170.4500000000003, 2205.2199999999998, 2684.1199999999999, 2334.6900000000001, 2237.6899999999996, 2024.0800000000002, 1811.0500000000002, 1319.96, 1420.1600000000001, 268.01000000000005, 754.04999999999995, 1258.71],
      "text": ["Coal consumption: 3088.67 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 3175.76 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 3312.44 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2925.53 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2782.23 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2483.07 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2015.02 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2170.45 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2205.22 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2684.12 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2334.69 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2237.69 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 2024.08 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 1811.05 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 1319.96 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 1420.16 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 268.01 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 754.05 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Coal consumption: 1258.71 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [5901.7700000000004, 5970.1099999999997, 6011.9999999999991, 6014.1999999999998, 5204.0100000000002, 4564.6700000000001, 5145.5799999999999, 2959.7000000000003, 4098.3900000000003, 5361.6400000000003, 4890.9499999999998, 4982.4399999999996, 6068.2200000000003, 5290.1799999999994, 5998.8000000000002, 5011.29, 2321.2999999999997, 1046.4999999999998, 350.57999999999998],
      "text": ["Coal consumption: 5901.77 thousand short tons<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 5970.11 thousand short tons<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 6012 thousand short tons<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 6014.2 thousand short tons<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 5204.01 thousand short tons<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 4564.67 thousand short tons<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 5145.58 thousand short tons<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 2959.7 thousand short tons<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 4098.39 thousand short tons<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 5361.64 thousand short tons<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 4890.95 thousand short tons<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 4982.44 thousand short tons<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 6068.22 thousand short tons<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 5290.18 thousand short tons<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 5998.8 thousand short tons<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 5011.29 thousand short tons<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 2321.3 thousand short tons<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 1046.5 thousand short tons<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Coal consumption: 350.58 thousand short tons<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [12.960000000000001, 16.25, 31.809999999999999, 17.189999999999998, 24.759999999999998, 48.960000000000001, 30.440000000000001, 76.840000000000003, 76.859999999999999, 87.069999999999993, 107.86, 117.14999999999999, 113.15000000000001, 122.78, 127.31999999999999, 98.680000000000007, 126, 80.030000000000001, 83.379999999999995],
      "text": ["Coal consumption: 12.96 thousand short tons<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 16.25 thousand short tons<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 31.81 thousand short tons<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 17.19 thousand short tons<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 24.76 thousand short tons<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 48.96 thousand short tons<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 30.44 thousand short tons<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 76.84 thousand short tons<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 76.86 thousand short tons<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 87.07 thousand short tons<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 107.86 thousand short tons<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 117.15 thousand short tons<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 113.15 thousand short tons<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 122.78 thousand short tons<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 127.32 thousand short tons<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 98.68 thousand short tons<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 126 thousand short tons<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 80.03 thousand short tons<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Coal consumption: 83.38 thousand short tons<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [22315.097123479911, 21630.656539226075, 23713.851389168925, 22002.158516041145, 22878.430761204403, 21375.039655944129, 17240.677502031838, 18195.194756007906, 15373.562438153143, 17940.612318298376, 19091.329691252969, 14226.203090962936, 13790.830202995347, 14044.343003882752, 15874.161435324953, 13679.928678190705, 10896.207709167016, 8288.1876328812905, 10374.317606387216],
      "text": ["Coal consumption: 22315.1 thousand short tons<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 21630.66 thousand short tons<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 23713.85 thousand short tons<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 22002.16 thousand short tons<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 22878.43 thousand short tons<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 21375.04 thousand short tons<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 17240.68 thousand short tons<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 18195.19 thousand short tons<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 15373.56 thousand short tons<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 17940.61 thousand short tons<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 19091.33 thousand short tons<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 14226.2 thousand short tons<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 13790.83 thousand short tons<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 14044.34 thousand short tons<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 15874.16 thousand short tons<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 13679.93 thousand short tons<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 10896.21 thousand short tons<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 8288.19 thousand short tons<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Coal consumption: 10374.32 thousand short tons<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [69102.677194527176, 66281.982472313248, 67817.891981681008, 74112.458493965823, 69107.260311230726, 64014.346578374942, 53416.309695044831, 56273.561127125155, 56474.716001163499, 70219.514127313974, 66014.063234449452, 52954.806601034856, 41065.756862207738, 19778.309804953213, 15833.498095208321, 13223.11182589545, 8751.2838950555215, 7763.7738252007221, 7981.6012170259146],
      "text": ["Coal consumption: 69102.68 thousand short tons<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 66281.98 thousand short tons<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 67817.89 thousand short tons<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 74112.46 thousand short tons<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 69107.26 thousand short tons<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 64014.35 thousand short tons<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 53416.31 thousand short tons<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 56273.56 thousand short tons<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 56474.72 thousand short tons<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 70219.51 thousand short tons<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 66014.06 thousand short tons<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 52954.81 thousand short tons<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 41065.76 thousand short tons<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 19778.31 thousand short tons<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 15833.5 thousand short tons<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 13223.11 thousand short tons<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 8751.28 thousand short tons<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 7763.77 thousand short tons<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Coal consumption: 7981.6 thousand short tons<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [6575.2799999999997, 6110.1000000000004, 5863.1899999999996, 5500.5299999999997, 4817.0900000000001, 4555.8500000000004, 3667.3899999999999, 4232.8699999999999, 4328.7700000000004, 3950.6799999999998, 3930.8400000000001, 3527.8899999999999, 4124.2600000000002, 3978.8500000000004, 3803.73, 3646.4000000000001, 3520.3400000000001, 3218.1700000000001, 3142.1900000000001],
      "text": ["Coal consumption: 6575.28 thousand short tons<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 6110.1 thousand short tons<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 5863.19 thousand short tons<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 5500.53 thousand short tons<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 4817.09 thousand short tons<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 4555.85 thousand short tons<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3667.39 thousand short tons<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 4232.87 thousand short tons<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 4328.77 thousand short tons<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3950.68 thousand short tons<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3930.84 thousand short tons<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3527.89 thousand short tons<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 4124.26 thousand short tons<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3978.85 thousand short tons<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3803.73 thousand short tons<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3646.4 thousand short tons<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3520.34 thousand short tons<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3218.17 thousand short tons<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Coal consumption: 3142.19 thousand short tons<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [1888860.492548519, 2287017.6280818884, 2623430.6470550918, 2917276.8852523626, 3130374.6677798908, 3240257.8046903159, 3499660.7372685936, 3897032.9287778516, 4304644.9112520497, 4554234.5967702558, 4629204.3644009568, 4484602.6816111095, 4310458.9107084358, 4191901.648982327, 4219831.0978432056, 4285203.3220793922, 4333235.0945224874, 4359322.1010938259, 4573098.711546584],
      "text": ["Coal consumption: 1888860.49 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 2287017.63 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 2623430.65 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 2917276.89 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 3130374.67 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 3240257.8 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 3499660.74 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 3897032.93 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4304644.91 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4554234.6 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4629204.36 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4484602.68 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4310458.91 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4191901.65 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4219831.1 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4285203.32 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4333235.09 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4359322.1 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Coal consumption: 4573098.71 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [994.34766744918886, 989.44867286435408, 978.37882770776184, 966.5903453768791, 1009.2143210063574, 975.66863792239405, 967.96367743250448, 991.07619665423931, 1056.3039242452908, 1199.8697926136128, 1065.4367222542737, 1018.7648603232036, 954.49472700937997, 875.27506516795688, 743.27697486041768, 715.57204595179508, 570.87586326522694, 553.62683659361244, 594.94643064902448],
      "text": ["Coal consumption: 994.35 thousand short tons<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal consumption: 989.45 thousand short tons<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal consumption: 978.38 thousand short tons<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Coal consumption: 966.59 thousand short tons<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal consumption: 1009.21 thousand short tons<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal consumption: 975.67 thousand short tons<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal consumption: 967.96 thousand short tons<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal consumption: 991.08 thousand short tons<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal consumption: 1056.3 thousand short tons<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Coal consumption: 1199.87 thousand short tons<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal consumption: 1065.44 thousand short tons<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal consumption: 1018.76 thousand short tons<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal consumption: 954.49 thousand short tons<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal consumption: 875.28 thousand short tons<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal consumption: 743.28 thousand short tons<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal consumption: 715.57 thousand short tons<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Coal consumption: 570.88 thousand short tons<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal consumption: 553.63 thousand short tons<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Coal consumption: 594.95 thousand short tons<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [3647.54, 3762.1800000000003, 3589.1200000000003, 4149.0900000000001, 3747.8499999999999, 3623.2900000000004, 2738.1399999999999, 3449.1300000000001, 3222.0500000000002, 2888.0500000000002, 3024.7399999999998, 2851.6799999999998, 2922.2199999999998, 2857.1900000000001, 2817.5, 2735.9299999999994, 2631.21, 2194.6999999999998, 2310.0100000000002],
      "text": ["Coal consumption: 3647.54 thousand short tons<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 3762.18 thousand short tons<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 3589.12 thousand short tons<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 4149.09 thousand short tons<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 3747.85 thousand short tons<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 3623.29 thousand short tons<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2738.14 thousand short tons<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 3449.13 thousand short tons<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 3222.05 thousand short tons<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2888.05 thousand short tons<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 3024.74 thousand short tons<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2851.68 thousand short tons<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2922.22 thousand short tons<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2857.19 thousand short tons<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2817.5 thousand short tons<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2735.93 thousand short tons<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2631.21 thousand short tons<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2194.7 thousand short tons<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Coal consumption: 2310.01 thousand short tons<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [10421.570748717253, 7987.8091634817119, 6787.7217436743094, 10089.510426459796, 8568.6074398121582, 7569.9408201287279, 7371.286492270151, 7214.442615204327, 6014.0690250086545, 4715.1079185893677, 5966.9541576113788, 4689.1304853108486, 3413.1799862203898, 3914.5030886159825, 2907.7299000017965, 2991.3824340903902, 1709.0589747088029, 1338.8979832218206, 1984.8434593583536],
      "text": ["Coal consumption: 10421.57 thousand short tons<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 7987.81 thousand short tons<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 6787.72 thousand short tons<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 10089.51 thousand short tons<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 8568.61 thousand short tons<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 7569.94 thousand short tons<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 7371.29 thousand short tons<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 7214.44 thousand short tons<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 6014.07 thousand short tons<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 4715.11 thousand short tons<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 5966.95 thousand short tons<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 4689.13 thousand short tons<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 3413.18 thousand short tons<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 3914.5 thousand short tons<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 2907.73 thousand short tons<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 2991.38 thousand short tons<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 1709.06 thousand short tons<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 1338.9 thousand short tons<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Coal consumption: 1984.84 thousand short tons<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [23156.121898660735, 26589.054468057388, 26543.898509090748, 27154.613182547211, 27500.829300464338, 27273.155334297106, 21837.55857232464, 23832.834964574024, 26758.385577524394, 27567.204807901697, 23069.151643273817, 22005.729568730068, 21293.802251708541, 18647.712751287294, 16622.196855466798, 15202.672617989674, 11329.578118651223, 8442.4943241319816, 7922.9045123770038],
      "text": ["Coal consumption: 23156.12 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 26589.05 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 26543.9 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 27154.61 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 27500.83 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 27273.16 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 21837.56 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 23832.83 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 26758.39 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 27567.2 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 23069.15 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 22005.73 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 21293.8 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 18647.71 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 16622.2 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 15202.67 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 11329.58 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 8442.49 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Coal consumption: 7922.9 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [15057.549999999999, 14928.58, 14336.639999999999, 13947.530000000001, 14842.6, 13988.309999999999, 13102.059999999999, 13108.67, 12898.129999999997, 14121.690000000001, 14324.52, 16140.02, 19863.630000000001, 18201.339999999997, 16238.129999999997, 14473.519999999999, 16603.68, 9277.7099999999991, 14705.540000000001],
      "text": ["Coal consumption: 15057.55 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 14928.58 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 14336.64 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 13947.53 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 14842.6 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 13988.31 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 13102.06 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 13108.67 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 12898.13 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 14121.69 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 14324.52 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 16140.02 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 19863.63 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 18201.34 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 16238.13 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 14473.52 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 16603.68 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 9277.71 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Coal consumption: 14705.54 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [8843.342268692988, 8250.2775555875633, 7827.7086303930773, 7567.330850573856, 6899.0743987196474, 6059.8682476506265, 4704.6720284699968, 5853.9856892837643, 5476.1615134064823, 5480.944669818673, 5471.5036003391333, 4852.1999175708452, 4463.4876560022967, 3961.3456097686667, 3807.7712087396949, 3815.0315889899166, 3835.9948369619215, 3086.4497859252961, 3310.0330739239203],
      "text": ["Coal consumption: 8843.34 thousand short tons<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 8250.28 thousand short tons<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 7827.71 thousand short tons<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 7567.33 thousand short tons<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 6899.07 thousand short tons<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 6059.87 thousand short tons<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 4704.67 thousand short tons<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 5853.99 thousand short tons<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 5476.16 thousand short tons<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 5480.94 thousand short tons<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 5471.5 thousand short tons<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 4852.2 thousand short tons<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 4463.49 thousand short tons<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 3961.35 thousand short tons<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 3807.77 thousand short tons<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 3815.03 thousand short tons<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 3835.99 thousand short tons<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 3086.45 thousand short tons<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Coal consumption: 3310.03 thousand short tons<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [9779.1412226617831, 8765.5120710572592, 4901.4497677762165, 8583.0748314320481, 7554.1484594107424, 5595.3047973525117, 6192.8612368032864, 7637.0110839081644, 5885.8137359779694, 5072.2035215202604, 6385.0992653331787, 5222.6844776244761, 4165.4910242214282, 5267.818938358284, 4826.9702288313183, 4723.9004598104057, 3903.8448165404984, 2988.8016155922278, 3351.8854353195702],
      "text": ["Coal consumption: 9779.14 thousand short tons<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 8765.51 thousand short tons<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 4901.45 thousand short tons<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 8583.07 thousand short tons<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 7554.15 thousand short tons<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 5595.3 thousand short tons<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 6192.86 thousand short tons<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 7637.01 thousand short tons<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 5885.81 thousand short tons<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 5072.2 thousand short tons<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 6385.1 thousand short tons<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 5222.68 thousand short tons<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 4165.49 thousand short tons<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 5267.82 thousand short tons<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 4826.97 thousand short tons<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 4723.9 thousand short tons<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 3903.84 thousand short tons<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 2988.8 thousand short tons<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Coal consumption: 3351.89 thousand short tons<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [71607.936653417346, 72247.531241753968, 71178.161706935571, 65456.368008569931, 67403.385485039544, 65352.352073102622, 65696.146458368879, 58367.031199822159, 60307.480903673633, 62081.415866528776, 54407.986781309679, 51788.628442494068, 44132.645668992307, 34155.918990073573, 37904.752503910837, 37736.674695233996, 26509.761900437974, 14062.904054650815, 12099.081514974614],
      "text": ["Coal consumption: 71607.94 thousand short tons<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 72247.53 thousand short tons<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 71178.16 thousand short tons<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 65456.37 thousand short tons<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 67403.39 thousand short tons<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 65352.35 thousand short tons<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 65696.15 thousand short tons<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 58367.03 thousand short tons<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 60307.48 thousand short tons<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 62081.42 thousand short tons<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 54407.99 thousand short tons<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 51788.63 thousand short tons<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 44132.65 thousand short tons<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 34155.92 thousand short tons<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 37904.75 thousand short tons<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 37736.67 thousand short tons<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 26509.76 thousand short tons<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 14062.9 thousand short tons<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Coal consumption: 12099.08 thousand short tons<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Coal consumption (REMIND_54)",
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
      "range": [0, 4629204.3644009568],
      "tickmode": "array",
      "ticktext": ["0e+00", "1e+06", "2e+06", "3e+06", "4e+06"],
      "tickvals": [0, 1000000, 1999999.9999999998, 3000000, 4000000],
      "categoryorder": "array",
      "categoryarray": ["0e+00", "1e+06", "2e+06", "3e+06", "4e+06"],
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
    "b55c6ebb6695": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c64d2756": {
      "y": {}
    }
  },
  "cur_data": "b55c6ebb6695",
  "visdat": {
    "b55c6ebb6695": ["function (y) ", "x"],
    "b55c64d2756": ["function (y) ", "x"]
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

  
