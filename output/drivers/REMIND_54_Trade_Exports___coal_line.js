(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Trade_Exports___coal_line') 

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
      "y": [11.640000000000001, 13.669999999999998, 26.789999999999996, 23.16, 20.84, 21.280000000000001, 18.609999999999999, 21.620000000000001, 11.4, 19.010000000000002, 23.670000000000002, 3.8099999999999996, 1.9200000000000002, 1.24, 3.3900000000000001, 2.5600000000000001, 5.3499999999999996, 1.3, 1.8899999999999999],
      "text": ["Exports - coal: 11.64 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 13.67 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 26.79 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 23.16 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 20.84 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 21.28 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 18.61 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 21.62 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 11.4 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 19.01 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 23.67 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 3.81 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 1.92 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 1.24 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 3.39 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 2.56 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 5.35 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 1.3 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - coal: 1.89 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - coal: 0 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [1288.1844397108659, 1388.6768304968352, 1153.8369723997223, 1186.9908139573324, 1247.3738351676091, 962.48397039865824, 652.21785528275223, 572.90092167599869, 510.64618753381194, 294.26569658990854, 282.60507870174047, 196.8870837485145, 140.76625514010439, 127.07356473915921, 143.15627392905631, 118.25025349085116, 137.79816904332651, 172.08326678271845, 142.01117330638542],
      "text": ["Exports - coal: 1288.18 thousand short tons<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 1388.68 thousand short tons<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 1153.84 thousand short tons<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 1186.99 thousand short tons<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 1247.37 thousand short tons<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 962.48 thousand short tons<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 652.22 thousand short tons<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 572.9 thousand short tons<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 510.65 thousand short tons<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 294.27 thousand short tons<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 282.61 thousand short tons<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 196.89 thousand short tons<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 140.77 thousand short tons<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 127.07 thousand short tons<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 143.16 thousand short tons<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 118.25 thousand short tons<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 137.8 thousand short tons<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 172.08 thousand short tons<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - coal: 142.01 thousand short tons<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [8.2799999999999994, 16.18, 43.539999999999999, 31.77, 66.360000000000014, 89.480000000000004, 99.569999999999993, 75.319999999999993, 57.670000000000002, 48.439999999999991, 55.579999999999998, 65.370000000000005, 75.159999999999997, 95.120000000000005, 97.099999999999994, 137.91, 131.16999999999999, 68.390000000000001, 66.439999999999998],
      "text": ["Exports - coal: 8.28 thousand short tons<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 16.18 thousand short tons<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 43.54 thousand short tons<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 31.77 thousand short tons<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 66.36 thousand short tons<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 89.48 thousand short tons<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 99.57 thousand short tons<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 75.32 thousand short tons<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 57.67 thousand short tons<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 48.44 thousand short tons<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 55.58 thousand short tons<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 65.37 thousand short tons<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 75.16 thousand short tons<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 95.12 thousand short tons<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 97.1 thousand short tons<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 137.91 thousand short tons<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 131.17 thousand short tons<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 68.39 thousand short tons<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - coal: 66.44 thousand short tons<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [31284.66, 28509.040000000005, 31182.139999999999, 30499.810000000001, 33937.919999999998, 35345.57, 31506.220000000001, 36862.349999999999, 37183.120000000003, 38367, 43099.220000000001, 37821.359999999993, 33760.449999999997, 33601.709999999999, 34284.050000000003, 35646.5, 39323.809999999998, 34874.879999999997, 34909.839999999997],
      "text": ["Exports - coal: 31284.66 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 28509.04 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 31182.14 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 30499.81 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 33937.92 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 35345.57 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 31506.22 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 36862.35 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 37183.12 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 38367 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 43099.22 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 37821.36 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 33760.45 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 33601.71 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 34284.05 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 35646.5 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 39323.81 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 34874.88 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - coal: 34909.84 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [191478.34691958583, 200976.92234832194, 212966.59293410869, 213209.91106505712, 224395.82714023595, 234682.73836135119, 246741.68797057369, 269777.30674775498, 262536.7818492619, 285922.72169542644, 328919.26193886384, 357827.81689543388, 362571.27602989273, 359326.80254560179, 349784.79338478163, 352134.37154074252, 362224.18175782205, 341733.36610415002, 336502.65313814575],
      "text": ["Exports - coal: 191478.35 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 200976.92 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 212966.59 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 213209.91 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 224395.83 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 234682.74 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 246741.69 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 269777.31 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 262536.78 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 285922.72 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 328919.26 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 357827.82 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 362571.28 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 359326.8 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 349784.79 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 352134.37 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 362224.18 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 341733.37 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - coal: 336502.65 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [0.48999999999999999, 1.48, 4.6100000000000003, 3.5099999999999998, 8.7799999999999994, 99.439999999999984, 5.5899999999999999, 121.84999999999999, 266.10000000000002, 239.02000000000001, 5.1399999999999997, 3.8999999999999995, 3.1400000000000006, 2.8399999999999999, 2.8899999999999997, 5.3899999999999988, 5.0699999999999994, 3.2599999999999998, 3.9699999999999998],
      "text": ["Exports - coal: 0.49 thousand short tons<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 1.48 thousand short tons<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 4.61 thousand short tons<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 3.51 thousand short tons<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 8.78 thousand short tons<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 99.44 thousand short tons<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 5.59 thousand short tons<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 121.85 thousand short tons<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 266.1 thousand short tons<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 239.02 thousand short tons<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 5.14 thousand short tons<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 3.9 thousand short tons<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 3.14 thousand short tons<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 2.84 thousand short tons<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 2.89 thousand short tons<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 5.39 thousand short tons<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 5.07 thousand short tons<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 3.26 thousand short tons<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - coal: 3.97 thousand short tons<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [2971.3651831766051, 3019.8398179886158, 1835.484476037584, 2496.5122900978463, 3713.9278101132918, 3689.6930924756139, 2640.8486766916358, 1863.0299496711248, 1657.0095613016226, 1402.5212130938262, 2278.4263489181349, 1771.6230214848663, 1238.3861302027922, 1004.8162798565081, 82.62972618069, 124.16987764014145, 87.038140155216325, 50.675771226078112, 89.927233883064005],
      "text": ["Exports - coal: 2971.37 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 3019.84 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 1835.48 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 2496.51 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 3713.93 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 3689.69 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 2640.85 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 1863.03 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 1657.01 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 1402.52 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 2278.43 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 1771.62 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 1238.39 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 1004.82 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 82.63 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 124.17 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 87.04 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 50.68 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - coal: 89.93 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [0.83999999999999997, 0.46000000000000008, 0.60999999999999999, 0.40999999999999992, 1.1499999999999999, 1.03, 0.14999999999999999, 0.46000000000000002, 0.71999999999999997, 0.25, 0.34000000000000002, 1.0399999999999998, 2.1499999999999999, 1.7099999999999997, 0.62, 0.68000000000000016, 1.27, 0.49000000000000005, 0.64000000000000001],
      "text": ["Exports - coal: 0.84 thousand short tons<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.46 thousand short tons<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.61 thousand short tons<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.41 thousand short tons<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 1.15 thousand short tons<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 1.03 thousand short tons<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.15 thousand short tons<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.46 thousand short tons<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.72 thousand short tons<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.25 thousand short tons<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.34 thousand short tons<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 1.04 thousand short tons<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 2.15 thousand short tons<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 1.71 thousand short tons<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.62 thousand short tons<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.68 thousand short tons<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 1.27 thousand short tons<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.49 thousand short tons<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - coal: 0.64 thousand short tons<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [2276.9249736910292, 3202.7417676386149, 3572.6808613681801, 3457.7941680254835, 3518.418571554992, 3789.8403026195383, 3408.5327340776689, 5158.2954729784633, 6152.295074158249, 5079.7721760137538, 5286.9476437396052, 4334.0370969038277, 2116.4207442023599, 1500.3478610992865, 480.88933850603729, 69.101222746062348, 33.865886754723718, 21.339135974987393, 19.408018275351562],
      "text": ["Exports - coal: 2276.92 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 3202.74 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 3572.68 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 3457.79 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 3518.42 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 3789.84 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 3408.53 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Exports - coal: 5158.3 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Exports - coal: 6152.3 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 5079.77 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 5286.95 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 4334.04 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 2116.42 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 1500.35 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 480.89 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 69.1 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 33.87 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 21.34 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - coal: 19.41 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [2.1400000000000001, 7.71, 6.2800000000000002, 1.0900000000000001, 3.2000000000000006, 2.46, 1.25, 5.8099999999999987, 26.590000000000003, 30.699999999999996, 22.120000000000001, 29.119999999999997, 23.930000000000003, 0.52000000000000002, 0.60999999999999999, 0.88000000000000012, 0.46999999999999997, 0.25, 0.48999999999999999],
      "text": ["Exports - coal: 2.14 thousand short tons<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 7.71 thousand short tons<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 6.28 thousand short tons<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 1.09 thousand short tons<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 3.2 thousand short tons<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 2.46 thousand short tons<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 1.25 thousand short tons<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 5.81 thousand short tons<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 26.59 thousand short tons<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 30.7 thousand short tons<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 22.12 thousand short tons<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 29.12 thousand short tons<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 23.93 thousand short tons<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 0.52 thousand short tons<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 0.61 thousand short tons<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 0.88 thousand short tons<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 0.47 thousand short tons<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 0.25 thousand short tons<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - coal: 0.49 thousand short tons<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [0, 0, 0, 0, 880.75, 959.5, 1335.03, 3739.8999999999996, 2977.4500000000003, 3095.6000000000004, 3610.8400000000006, 5805.8999999999996, 3422.6700000000005, 7533.1900000000005, 6546.6199999999999, 5571.0699999999988, 11290.959999999999, 8752.5499999999993, 10287.860000000001],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 880.75 thousand short tons<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 959.5 thousand short tons<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 1335.03 thousand short tons<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 3739.9 thousand short tons<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 2977.45 thousand short tons<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 3095.6 thousand short tons<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 3610.84 thousand short tons<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 5805.9 thousand short tons<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 3422.67 thousand short tons<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 7533.19 thousand short tons<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 6546.62 thousand short tons<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 5571.07 thousand short tons<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 11290.96 thousand short tons<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 8752.55 thousand short tons<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - coal: 10287.86 thousand short tons<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [4771.7120284632165, 4440.5941559527082, 4820.3994217906084, 5413.2491902819584, 5152.820510106284, 6322.2724287574129, 5146.2943999791669, 4733.1195834955897, 4323.9018877876679, 7904.758614566138, 9971.7143823091428, 8938.3648274609714, 9645.5351366161776, 10158.005025931099, 6010.9849067758178, 5425.8387554889414, 5451.2580957445352, 5139.596262937901, 4826.4068761572062],
      "text": ["Exports - coal: 4771.71 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - coal: 4440.59 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - coal: 4820.4 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - coal: 5413.25 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - coal: 5152.82 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - coal: 6322.27 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - coal: 5146.29 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - coal: 4733.12 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - coal: 4323.9 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - coal: 7904.76 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - coal: 9971.71 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - coal: 8938.36 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - coal: 9645.54 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - coal: 10158.01 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - coal: 6010.98 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - coal: 5425.84 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - coal: 5451.26 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - coal: 5139.6 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - coal: 4826.41 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [48895.730000000003, 56467.140000000007, 60168.25, 64264.599999999991, 71294.220000000001, 75703.929999999993, 69922.880000000005, 76283.970000000001, 83878.990000000005, 87493.880000000005, 82407.589999999997, 96035.279999999999, 80241.759999999995, 91881.479999999981, 92886.050000000003, 92366.419999999998, 78869.289999999994, 74774.740000000005, 61288.910000000003],
      "text": ["Exports - coal: 48895.73 thousand short tons<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 56467.14 thousand short tons<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 60168.25 thousand short tons<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 64264.6 thousand short tons<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 71294.22 thousand short tons<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 75703.93 thousand short tons<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 69922.88 thousand short tons<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 76283.97 thousand short tons<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 83878.99 thousand short tons<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 87493.88 thousand short tons<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 82407.59 thousand short tons<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 96035.28 thousand short tons<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 80241.76 thousand short tons<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 91881.48 thousand short tons<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 92886.05 thousand short tons<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 92366.42 thousand short tons<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 78869.29 thousand short tons<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 74774.74 thousand short tons<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - coal: 61288.91 thousand short tons<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [5.5911852577314418, 6.6519912551830469, 5.975702204265029, 5.176398728297702, 5.7858216315396991, 6.9008076208038984, 9.1643893138401484, 10.286238801232775, 41.683731392913899, 176.54130038779206, 244.44456463501433, 304.89964784289452, 352.4437992319663, 453.88870309294646, 825.90455108308333, 916.31684555968445, 782.5846968512019, 520.00469587128873, 636.54152407676941],
      "text": ["Exports - coal: 5.59 thousand short tons<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 6.65 thousand short tons<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 5.98 thousand short tons<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 5.18 thousand short tons<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 5.79 thousand short tons<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 6.9 thousand short tons<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 9.16 thousand short tons<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 10.29 thousand short tons<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 41.68 thousand short tons<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 176.54 thousand short tons<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 244.44 thousand short tons<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 304.9 thousand short tons<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 352.44 thousand short tons<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 453.89 thousand short tons<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 825.9 thousand short tons<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 916.32 thousand short tons<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 782.58 thousand short tons<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 520 thousand short tons<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - coal: 636.54 thousand short tons<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [66773.979999999996, 79481.449999999997, 87946.050000000003, 98892.050000000003, 108661.47, 118098.20999999999, 134246.60999999999, 143739.56, 132375.10999999999, 147916.67000000001, 156087.09000000003, 167419.06, 174261.76999999999, 187613.72999999998, 223176.34, 233963.13000000003, 246268.74999999997, 244311.73000000004, 260737.94],
      "text": ["Exports - coal: 66773.98 thousand short tons<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 79481.45 thousand short tons<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 87946.05 thousand short tons<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 98892.05 thousand short tons<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 108661.47 thousand short tons<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 118098.21 thousand short tons<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 134246.61 thousand short tons<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 143739.56 thousand short tons<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 132375.11 thousand short tons<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 147916.67 thousand short tons<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 156087.09 thousand short tons<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 167419.06 thousand short tons<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 174261.77 thousand short tons<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 187613.73 thousand short tons<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 223176.34 thousand short tons<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 233963.13 thousand short tons<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 246268.75 thousand short tons<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 244311.73 thousand short tons<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - coal: 260737.94 thousand short tons<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [0.35249913136036731, 0.29076919750543195, 0.24915323316053506, 0.31463416723005733, 0.27004775260348629, 96.389297691556763, 111.58779158501876, 139.2728866915912, 331.1613039289133, 550.51067028305749, 580.51910644442387, 991.9214167205572, 838.26934230523148, 809.46735698507052, 632.04868689209866, 1061.2276569978203, 1122.9933275072731, 485.70514406851919, 639.9303934334531],
      "text": ["Exports - coal: 0.35 thousand short tons<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - coal: 0.29 thousand short tons<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - coal: 0.25 thousand short tons<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - coal: 0.31 thousand short tons<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - coal: 0.27 thousand short tons<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - coal: 96.39 thousand short tons<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - coal: 111.59 thousand short tons<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 139.27 thousand short tons<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 331.16 thousand short tons<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 550.51 thousand short tons<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 580.52 thousand short tons<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 991.92 thousand short tons<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 838.27 thousand short tons<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 809.47 thousand short tons<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 632.05 thousand short tons<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 1061.23 thousand short tons<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 1122.99 thousand short tons<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 485.71 thousand short tons<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - coal: 639.93 thousand short tons<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [12147.09, 13642.74, 15137.91, 26352.48, 32720.470000000001, 24007, 27548.929999999997, 24693.849999999999, 18918.950000000004, 22376.959999999999, 17367.57, 10262.049999999999, 1903.8599999999999, 1252.0699999999999, 2100.5799999999999, 1922.0100000000002, 1260.5, 982.31999999999994, 1070.3800000000001],
      "text": ["Exports - coal: 12147.09 thousand short tons<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 13642.74 thousand short tons<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 15137.91 thousand short tons<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 26352.48 thousand short tons<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 32720.47 thousand short tons<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 24007 thousand short tons<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 27548.93 thousand short tons<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 24693.85 thousand short tons<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 18918.95 thousand short tons<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 22376.96 thousand short tons<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 17367.57 thousand short tons<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 10262.05 thousand short tons<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 1903.86 thousand short tons<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 1252.07 thousand short tons<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 2100.58 thousand short tons<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 1922.01 thousand short tons<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 1260.5 thousand short tons<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 982.32 thousand short tons<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - coal: 1070.38 thousand short tons<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [24.019999999999996, 7.3700000000000001, 35.719999999999999, 7.0900000000000007, 3.0800000000000001, 1.6399999999999999, 1.3700000000000001, 1.3800000000000001, 2.7799999999999998, 5.4800000000000013, 2.1499999999999999, 0.5, 0.23999999999999999, 0.11999999999999998, 0.55000000000000004, 0.56000000000000005, 1.0600000000000001, 1.1799999999999999, 1.3500000000000001],
      "text": ["Exports - coal: 24.02 thousand short tons<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 7.37 thousand short tons<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 35.72 thousand short tons<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 7.09 thousand short tons<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 3.08 thousand short tons<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 1.64 thousand short tons<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 1.37 thousand short tons<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 1.38 thousand short tons<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 2.78 thousand short tons<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 5.48 thousand short tons<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 2.15 thousand short tons<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 0.5 thousand short tons<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 0.24 thousand short tons<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 0.12 thousand short tons<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 0.55 thousand short tons<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 0.56 thousand short tons<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 1.06 thousand short tons<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 1.18 thousand short tons<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - coal: 1.35 thousand short tons<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - coal: 0 thousand short tons<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [96879.819999999992, 115875.92999999999, 141765.89000000001, 200069.27000000002, 214950.45000000001, 221588.20000000001, 257389.39000000004, 320331.28000000003, 356266.59000000003, 383162.96999999997, 420200.56, 421052.46999999997, 403140.19, 406630.28000000003, 429383.06, 449756.83999999997, 488218.88, 451520.09000000003, 478028.69],
      "text": ["Exports - coal: 96879.82 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 115875.93 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 141765.89 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 200069.27 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 214950.45 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 221588.2 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 257389.39 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 320331.28 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 356266.59 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 383162.97 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 420200.56 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 421052.47 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 403140.19 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 406630.28 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 429383.06 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 449756.84 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 488218.88 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 451520.09 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - coal: 478028.69 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [23.935821291092637, 19.61862934980519, 30.200175575869928, 38.70521290492232, 40.569672556224333, 36.909459327921297, 22.587614134494945, 45.272221610996986, 75.802213456210708, 126.59207247299963, 139.09461838633439, 131.69579686028609, 71.273608433430923, 93.769672188572017, 109.80533018010493, 149.79655803264467, 53.712147795545242, 29.578755630309981, 77.701351363331895],
      "text": ["Exports - coal: 23.94 thousand short tons<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 19.62 thousand short tons<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 30.2 thousand short tons<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 38.71 thousand short tons<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 40.57 thousand short tons<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 36.91 thousand short tons<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 22.59 thousand short tons<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 45.27 thousand short tons<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 75.8 thousand short tons<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 126.59 thousand short tons<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 139.09 thousand short tons<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 131.7 thousand short tons<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 71.27 thousand short tons<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 93.77 thousand short tons<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 109.81 thousand short tons<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 149.8 thousand short tons<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 53.71 thousand short tons<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 29.58 thousand short tons<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Exports - coal: 77.7 thousand short tons<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [0, 0, 0, 0, 0.01, 17.960000000000001, 15.49, 28.93, 30.910000000000004, 40.780000000000001, 28.66, 43.409999999999997, 58.960000000000001, 49.140000000000001, 51.670000000000002, 60.810000000000002, 65.799999999999997, 69.629999999999995, 167.5],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 0.01 thousand short tons<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 17.96 thousand short tons<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 15.49 thousand short tons<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 28.93 thousand short tons<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 30.91 thousand short tons<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 40.78 thousand short tons<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 28.66 thousand short tons<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 43.41 thousand short tons<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 58.96 thousand short tons<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 49.14 thousand short tons<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 51.67 thousand short tons<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 60.81 thousand short tons<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 65.8 thousand short tons<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 69.63 thousand short tons<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - coal: 167.5 thousand short tons<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [1.3200000000000001, 2.04, 4.0800000000000001, 2.7400000000000002, 3.5600000000000001, 4.1399999999999997, 1.99, 3.3199999999999998, 3.1899999999999999, 3.7100000000000004, 3.1099999999999999, 1.4399999999999999, 2.1300000000000003, 2.6299999999999999, 3.3399999999999999, 3.6000000000000001, 4.3899999999999997, 2.9099999999999997, 6.2599999999999998],
      "text": ["Exports - coal: 1.32 thousand short tons<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 2.04 thousand short tons<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 4.08 thousand short tons<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 2.74 thousand short tons<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 3.56 thousand short tons<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 4.14 thousand short tons<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 1.99 thousand short tons<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 3.32 thousand short tons<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 3.19 thousand short tons<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 3.71 thousand short tons<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 3.11 thousand short tons<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 1.44 thousand short tons<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 2.13 thousand short tons<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 2.63 thousand short tons<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 3.34 thousand short tons<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 3.6 thousand short tons<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 4.39 thousand short tons<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 2.91 thousand short tons<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - coal: 6.26 thousand short tons<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - coal: 0 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [0.12, 0.12, 0.65999999999999992, 0.14000000000000001, 0.21999999999999997, 0.029999999999999999, 0.029999999999999999, 0.030000000000000002, 0.01, 0.029999999999999995, 1193.3299999999999, 1626.26, 1514.6800000000001, 959.49000000000001, 1007.4899999999999, 464.79000000000002, 0, 0, 0],
      "text": ["Exports - coal: 0.12 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0.12 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0.66 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0.14 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0.22 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0.03 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0.03 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0.03 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0.01 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0.03 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 1193.33 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 1626.26 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 1514.68 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 959.49 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 1007.49 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 464.79 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - coal: 0 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [16.339999999999996, 21.5, 20.710000000000001, 10.41, 17.500000000000004, 17.350000000000001, 17.310000000000002, 9, 10.07, 11.77, 8.3800000000000008, 83.650000000000006, 172.16999999999999, 69.189999999999998, 112.21999999999998, 97.340000000000003, 65.400000000000006, 174.01999999999998, 372.41000000000003],
      "text": ["Exports - coal: 16.34 thousand short tons<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 21.5 thousand short tons<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 20.71 thousand short tons<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 10.41 thousand short tons<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 17.5 thousand short tons<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 17.35 thousand short tons<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 17.31 thousand short tons<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 9 thousand short tons<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 10.07 thousand short tons<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 11.77 thousand short tons<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 8.38 thousand short tons<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 83.65 thousand short tons<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 172.17 thousand short tons<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 69.19 thousand short tons<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 112.22 thousand short tons<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 97.34 thousand short tons<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 65.4 thousand short tons<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 174.02 thousand short tons<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - coal: 372.41 thousand short tons<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - coal: 0 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [4.6148583086362445, 6.350430368003277, 3.6741370603240142, 4.2669603460096059, 5.255874866797587, 5.5411111037036447, 6.3726938299113396, 13.276544027153056, 13.176108186269881, 12.09602976614825, 13.999226002120604, 17.413152285246852, 14.993679050938788, 9.0147283856666647, 10.000167319060715, 11.370990629053757, 12.487924277555029, 7.8435315846701661, 3.8746803131169472],
      "text": ["Exports - coal: 4.61 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 6.35 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 3.67 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 4.27 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 5.26 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 5.54 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 6.37 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 13.28 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 13.18 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 12.1 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 14 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 17.41 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 14.99 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 9.01 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 10 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 11.37 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 12.49 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 7.84 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - coal: 3.87 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [30.32, 30.049999999999997, 30.82, 40.509999999999998, 37.039999999999999, 41.450000000000003, 48.18, 57.219999999999992, 88.599999999999994, 95.170000000000002, 86.540000000000006, 126.78, 165.44, 221.16999999999999, 227.94999999999999, 121.25000000000001, 102.22, 61.789999999999999, 161.19],
      "text": ["Exports - coal: 30.32 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 30.05 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 30.82 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 40.51 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 37.04 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 41.45 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 48.18 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 57.22 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 88.6 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 95.17 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 86.54 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 126.78 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 165.44 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 221.17 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 227.95 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 121.25 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 102.22 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 61.79 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - coal: 161.19 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [1709.27, 1443.01, 1754.75, 1712.99, 1606.6500000000001, 1514.49, 1830.8899999999999, 1433.6099999999999, 1243.2, 1718.4299999999998, 1819.48, 1234.71, 1290.6900000000001, 1018.3099999999999, 1154.0699999999999, 1119.9400000000001, 976.23000000000002, 1040.6300000000001, 920.94000000000005],
      "text": ["Exports - coal: 1709.27 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1443.01 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1754.75 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1712.99 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1606.65 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1514.49 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1830.89 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1433.61 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1243.2 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1718.43 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1819.48 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1234.71 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1290.69 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1018.31 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1154.07 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1119.94 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 976.23 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 1040.63 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - coal: 920.94 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [43013.510000000002, 47997.889999999999, 49942.209999999999, 49647.269999999997, 59163.099999999991, 81519.119999999995, 59096.94999999999, 81715.669999999998, 105764.25000000001, 124585.91, 117659.26999999999, 97257.229999999996, 73957.589999999997, 60271, 96945, 116244, 93764.699999999997, 69067, 85114.869999999995],
      "text": ["Exports - coal: 43013.51 thousand short tons<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 47997.89 thousand short tons<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 49942.21 thousand short tons<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 49647.27 thousand short tons<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 59163.1 thousand short tons<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 81519.12 thousand short tons<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 59096.95 thousand short tons<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 81715.67 thousand short tons<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 105764.25 thousand short tons<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 124585.91 thousand short tons<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 117659.27 thousand short tons<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 97257.23 thousand short tons<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 73957.59 thousand short tons<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 60271 thousand short tons<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 96945 thousand short tons<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 116244 thousand short tons<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 93764.7 thousand short tons<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 69067 thousand short tons<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - coal: 85114.87 thousand short tons<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - coal: 0 thousand short tons<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [61.329999999999991, 69.849999999999994, 63.699999999999996, 231.74000000000001, 1034.23, 1984.7200000000003, 1516.8199999999999, 1640.1500000000001, 1311.25, 2051.04, 746.25999999999999, 754.26999999999987, 622.42999999999995, 500.35000000000002, 292.86000000000001, 303.94999999999993, 1678.3299999999999, 2189.54, 691.08000000000004],
      "text": ["Exports - coal: 61.33 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 69.85 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 63.7 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 231.74 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 1034.23 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 1984.72 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 1516.82 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 1640.15 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 1311.25 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 2051.04 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 746.26 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 754.27 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 622.43 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 500.35 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 292.86 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 303.95 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 1678.33 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 2189.54 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - coal: 691.08 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [22217.540000000001, 21737.970000000001, 21359.52, 18447.619999999999, 13117.99, 9329, 9343.4099999999999, 11775.27, 7912.1400000000003, 7957.8899999999994, 12218.92, 10240.68, 10398.459999999999, 10339.93, 8159.7599999999993, 5780.7099999999991, 5061.4899999999998, 5192.5600000000013, 7176.7199999999993],
      "text": ["Exports - coal: 22217.54 thousand short tons<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 21737.97 thousand short tons<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 21359.52 thousand short tons<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 18447.62 thousand short tons<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 13117.99 thousand short tons<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 9329 thousand short tons<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 9343.41 thousand short tons<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 11775.27 thousand short tons<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 7912.14 thousand short tons<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 7957.89 thousand short tons<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 12218.92 thousand short tons<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 10240.68 thousand short tons<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 10398.46 thousand short tons<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 10339.93 thousand short tons<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 8159.76 thousand short tons<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 5780.71 thousand short tons<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 5061.49 thousand short tons<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 5192.56 thousand short tons<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - coal: 7176.72 thousand short tons<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19, 0.25, 0.080000000000000016, 0.14000000000000001, 0.29999999999999999, 0.089999999999999997, 0.059999999999999998, 0.040000000000000001],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0.19 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0.25 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0.08 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0.14 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0.3 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0.09 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0.06 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - coal: 0.04 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [76435.799999999988, 74854.179999999993, 75483.449999999997, 74731.089999999982, 74586.820000000007, 75947.770000000004, 72995.169999999998, 78035.410000000003, 77858.820000000007, 83885.149999999994, 83515.080000000002, 83555.100000000006, 83114.169999999998, 83935.139999999999, 92349.080000000002, 88520.75, 86717.190000000002, 82573.089999999997, 71754.720000000001],
      "text": ["Exports - coal: 76435.8 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 74854.18 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 75483.45 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 74731.09 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 74586.82 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 75947.77 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 72995.17 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 78035.41 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 77858.82 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 83885.15 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 83515.08 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 83555.1 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 83114.17 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 83935.14 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 92349.08 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 88520.75 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 86717.19 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 82573.09 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - coal: 71754.72 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [216.05000000000001, 203.93000000000001, 282.19, 262.49000000000001, 652.54999999999995, 1299.6700000000001, 1561.0900000000001, 1613.4399999999998, 1626.9400000000001, 1628.7100000000003, 1714.0800000000002, 1740.49, 1772.6500000000003, 1626.23, 1842.77, 1821.8599999999999, 1965.26, 1736.95, 2299.0799999999999],
      "text": ["Exports - coal: 216.05 thousand short tons<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 203.93 thousand short tons<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 282.19 thousand short tons<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 262.49 thousand short tons<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 652.55 thousand short tons<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1299.67 thousand short tons<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1561.09 thousand short tons<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1613.44 thousand short tons<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1626.94 thousand short tons<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1628.71 thousand short tons<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1714.08 thousand short tons<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1740.49 thousand short tons<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1772.65 thousand short tons<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1626.23 thousand short tons<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1842.77 thousand short tons<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1821.86 thousand short tons<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1965.26 thousand short tons<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 1736.95 thousand short tons<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - coal: 2299.08 thousand short tons<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [3351.0453179019182, 3311.5497671779103, 3235.8030538159232, 3975.0510685224122, 4048.3062485261689, 3884.4497396763086, 3943.2996927747467, 3783.7331321936485, 3854.15872055002, 3257.6506116146538, 3095.7081399602212, 2756.2552209866353, 2339.1790086979686, 2304.670574919352, 1781.3345455334477, 1512.6634811321876, 1171.5472329841325, 709.99041915392615, 976.78403446448851],
      "text": ["Exports - coal: 3351.05 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 3311.55 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 3235.8 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 3975.05 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 4048.31 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 3884.45 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 3943.3 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 3783.73 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 3854.16 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 3257.65 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 3095.71 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 2756.26 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 2339.18 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 2304.67 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 1781.33 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 1512.66 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 1171.55 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 709.99 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - coal: 976.78 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [11.31, 11.44, 11.630000000000001, 7.870000000000001, 5.1799999999999997, 5.8500000000000005, 4.2600000000000007, 6.410000000000001, 3.1800000000000002, 20.850000000000001, 38.619999999999997, 32.090000000000003, 57.900000000000006, 63.950000000000003, 75.140000000000001, 123.42, 125.84, 146.81999999999999, 141.52000000000001],
      "text": ["Exports - coal: 11.31 thousand short tons<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 11.44 thousand short tons<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 11.63 thousand short tons<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 7.87 thousand short tons<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 5.18 thousand short tons<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 5.85 thousand short tons<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 4.26 thousand short tons<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 6.41 thousand short tons<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 3.18 thousand short tons<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 20.85 thousand short tons<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 38.62 thousand short tons<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 32.09 thousand short tons<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 57.9 thousand short tons<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 63.95 thousand short tons<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 75.14 thousand short tons<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 123.42 thousand short tons<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 125.84 thousand short tons<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 146.82 thousand short tons<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - coal: 141.52 thousand short tons<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - coal: 0 thousand short tons<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [0.029999999999999999, 0.050000000000000003, 0.059999999999999998, 0.080000000000000002, 0.17999999999999999, 0.22, 0.22999999999999998, 0.27000000000000002, 0.27000000000000002, 0.46999999999999992, 0.53000000000000003, 0.59999999999999998, 0.56000000000000005, 0.60999999999999988, 0.46999999999999997, 0.34000000000000002, 0.020000000000000004, 0.28000000000000003, 0.55000000000000004],
      "text": ["Exports - coal: 0.03 thousand short tons<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.05 thousand short tons<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.06 thousand short tons<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.08 thousand short tons<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.18 thousand short tons<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.22 thousand short tons<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.23 thousand short tons<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.27 thousand short tons<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.27 thousand short tons<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.47 thousand short tons<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.53 thousand short tons<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.6 thousand short tons<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.56 thousand short tons<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.61 thousand short tons<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.47 thousand short tons<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.34 thousand short tons<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.02 thousand short tons<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.28 thousand short tons<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - coal: 0.55 thousand short tons<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [92.420585698008296, 120.00794037435678, 149.48519364201988, 153.4249959157101, 158.60461371315381, 148.27570636282852, 107.04973847504341, 146.00607438970471, 147.49601469312478, 197.89138259741628, 217.08975410143918, 193.20211384698794, 169.32440801028932, 119.93900806469703, 70.553561217167612, 127.89839344948035, 185.24329892223162, 253.31730861279786, 587.37777108507373],
      "text": ["Exports - coal: 92.42 thousand short tons<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 120.01 thousand short tons<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 149.49 thousand short tons<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 153.42 thousand short tons<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 158.6 thousand short tons<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 148.28 thousand short tons<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 107.05 thousand short tons<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 146.01 thousand short tons<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 147.5 thousand short tons<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 197.89 thousand short tons<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 217.09 thousand short tons<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 193.2 thousand short tons<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 169.32 thousand short tons<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 119.94 thousand short tons<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 70.55 thousand short tons<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 127.9 thousand short tons<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 185.24 thousand short tons<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 253.32 thousand short tons<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - coal: 587.38 thousand short tons<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [595.35735259524108, 680.87227497894344, 587.68110685209012, 485.70874203001159, 596.4535828508931, 657.85383974769809, 709.37569830417613, 783.93442544749041, 538.33888031042477, 535.0629375042862, 651.96578293114499, 466.08834461151525, 422.58191852203856, 486.52733639015474, 542.70111089522413, 694.94596003051242, 811.68395075656417, 1435.1037899228129, 1238.3538716227363],
      "text": ["Exports - coal: 595.36 thousand short tons<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 680.87 thousand short tons<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 587.68 thousand short tons<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 485.71 thousand short tons<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 596.45 thousand short tons<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 657.85 thousand short tons<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 709.38 thousand short tons<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 783.93 thousand short tons<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 538.34 thousand short tons<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 535.06 thousand short tons<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 651.97 thousand short tons<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 466.09 thousand short tons<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 422.58 thousand short tons<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 486.53 thousand short tons<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 542.7 thousand short tons<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 694.95 thousand short tons<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 811.68 thousand short tons<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 1435.1 thousand short tons<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - coal: 1238.35 thousand short tons<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [0, 2.6800000000000002, 5.9199999999999999, 0.90000000000000002, 2.04, 2.0899999999999999, 3.1800000000000002, 2.71, 1.9599999999999997, 3.0099999999999993, 1.52, 0.59999999999999998, 6.4500000000000002, 0.040000000000000001, 1.4000000000000001, 3.0299999999999998, 0.13, 0.080000000000000002, 0.02],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 2.68 thousand short tons<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 5.92 thousand short tons<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 0.9 thousand short tons<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 2.04 thousand short tons<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 2.09 thousand short tons<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 3.18 thousand short tons<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 2.71 thousand short tons<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 1.96 thousand short tons<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 3.01 thousand short tons<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 1.52 thousand short tons<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 0.6 thousand short tons<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 6.45 thousand short tons<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 0.04 thousand short tons<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 1.4 thousand short tons<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 3.03 thousand short tons<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 0.13 thousand short tons<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 0.08 thousand short tons<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - coal: 0.02 thousand short tons<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [101309.4980594347, 93369.239258054455, 77285.377694493, 68171.209180096004, 57310.772205477588, 48950.989368944021, 24137.8052454723, 20593.410117971522, 15809.311803004823, 9990.088588417877, 8093.73543990077, 6186.2889338248833, 5755.1975352587506, 9473.7180558975106, 8719.7002306805043, 5324.579833171465, 6457.4048826249364, 3409.3511338848593, 3461.6380790467074],
      "text": ["Exports - coal: 101309.5 thousand short tons<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 93369.24 thousand short tons<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 77285.38 thousand short tons<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 68171.21 thousand short tons<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 57310.77 thousand short tons<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 48950.99 thousand short tons<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 24137.81 thousand short tons<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 20593.41 thousand short tons<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 15809.31 thousand short tons<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 9990.09 thousand short tons<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 8093.74 thousand short tons<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 6186.29 thousand short tons<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 5755.2 thousand short tons<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 9473.72 thousand short tons<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 8719.7 thousand short tons<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 5324.58 thousand short tons<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 6457.4 thousand short tons<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 3409.35 thousand short tons<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - coal: 3461.64 thousand short tons<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [0, 0, 0, 0, 0, 0.0067140932260477031, 0.00057697029932783075, 0.008627104614218388, 0.016175358993904328, 0.096205851596597766, 0.057843351958077889, 0.064464970879868064, 0.1855554833847978, 0.065621514135889888, 0.10435715334859594, 0.030051875072159021, 0.046134136966786254, 0.11282943886517843, 0.081351857301517089],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - coal: 0 thousand short tons<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - coal: 0.01 thousand short tons<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - coal: 0 thousand short tons<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - coal: 0.01 thousand short tons<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - coal: 0.02 thousand short tons<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - coal: 0.1 thousand short tons<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - coal: 0.06 thousand short tons<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - coal: 0.06 thousand short tons<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - coal: 0.19 thousand short tons<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - coal: 0.07 thousand short tons<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports - coal: 0.1 thousand short tons<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports - coal: 0.03 thousand short tons<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports - coal: 0.05 thousand short tons<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - coal: 0.11 thousand short tons<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - coal: 0.08 thousand short tons<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [9.4299999999999997, 12.130000000000001, 6.6200000000000001, 9.2599999999999998, 4.0599999999999996, 10.699999999999999, 5.9900000000000002, 0.84999999999999998, 0.98999999999999988, 0.82999999999999996, 0.95999999999999985, 0.71999999999999997, 0.23000000000000001, 0.34000000000000002, 0.46000000000000002, 0.85999999999999988, 0.02, 0.01, 0.01],
      "text": ["Exports - coal: 9.43 thousand short tons<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 12.13 thousand short tons<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 6.62 thousand short tons<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 9.26 thousand short tons<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 4.06 thousand short tons<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 10.7 thousand short tons<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 5.99 thousand short tons<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.85 thousand short tons<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.99 thousand short tons<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.83 thousand short tons<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.96 thousand short tons<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.72 thousand short tons<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.23 thousand short tons<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.34 thousand short tons<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.46 thousand short tons<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.86 thousand short tons<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.02 thousand short tons<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.01 thousand short tons<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - coal: 0.01 thousand short tons<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [163.27579016958089, 169.75274870785202, 103.8032101935915, 118.95054309691088, 205.49179613072863, 168.73872324995855, 69.232388536033397, 76.798665470893255, 0, 11.906207072092784, 56.270450685801137, 56.275721017264878, 99.570218566198008, 22.73074390691264, 0.17673945989105708, 18.292105214724398, 49.785095340739502, 209.92827439901606, 572.11772407901788],
      "text": ["Exports - coal: 163.28 thousand short tons<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 169.75 thousand short tons<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 103.8 thousand short tons<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 118.95 thousand short tons<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 205.49 thousand short tons<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 168.74 thousand short tons<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 69.23 thousand short tons<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 76.8 thousand short tons<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 0 thousand short tons<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 11.91 thousand short tons<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 56.27 thousand short tons<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 56.28 thousand short tons<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 99.57 thousand short tons<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 22.73 thousand short tons<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 0.18 thousand short tons<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 18.29 thousand short tons<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 49.79 thousand short tons<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 209.93 thousand short tons<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - coal: 572.12 thousand short tons<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [0, 101.09675543212681, 72.415530213307392, 41.957523970360221, 44.976965429232315, 34.291364193732505, 32.304519183370829, 18.828339449933974, 20.07923843073911, 20.892611295795202, 17.099077447767609, 22.221149614320908, 40.324489330433593, 24.893035447230407, 30.017936439430219, 36.78495574602271, 40.686639802774366, 29.682652817402253, 49.287797631414044],
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 101.1 thousand short tons<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 72.42 thousand short tons<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 41.96 thousand short tons<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 44.98 thousand short tons<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 34.29 thousand short tons<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 32.3 thousand short tons<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 18.83 thousand short tons<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 20.08 thousand short tons<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 20.89 thousand short tons<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 17.1 thousand short tons<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 22.22 thousand short tons<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 40.32 thousand short tons<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 24.89 thousand short tons<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 30.02 thousand short tons<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 36.78 thousand short tons<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 40.69 thousand short tons<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 29.68 thousand short tons<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - coal: 49.29 thousand short tons<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [17435.509999999998, 20529.910000000003, 22987.27, 28327.709999999999, 30485.810000000001, 28862.919999999998, 26832.09, 29586.669999999998, 32223.990000000002, 37071.279999999999, 45304.300000000003, 43127.850000000006, 40125.620000000003, 39739.709999999999, 37180.989999999991, 32674.73, 30923.27, 16298.780000000002, 24473.400000000001],
      "text": ["Exports - coal: 17435.51 thousand short tons<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 20529.91 thousand short tons<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 22987.27 thousand short tons<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 28327.71 thousand short tons<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 30485.81 thousand short tons<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 28862.92 thousand short tons<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 26832.09 thousand short tons<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 29586.67 thousand short tons<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 32223.99 thousand short tons<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 37071.28 thousand short tons<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 45304.3 thousand short tons<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 43127.85 thousand short tons<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 40125.62 thousand short tons<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 39739.71 thousand short tons<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 37180.99 thousand short tons<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 32674.73 thousand short tons<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 30923.27 thousand short tons<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 16298.78 thousand short tons<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - coal: 24473.4 thousand short tons<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [1015.1353709496595, 1387.4501137837672, 1297.1576621942611, 1137.3281580368389, 1550.3655899726384, 1278.7558701011724, 933.60520749183047, 636.19875878521441, 702.26238672911984, 659.61819257771901, 627.52531589836826, 584.95783793310136, 83.939158317431918, 69.195902047066852, 92.168139248117257, 48.670593548618676, 89.94607424026843, 95.634924795523858, 266.89570045915104],
      "text": ["Exports - coal: 1015.14 thousand short tons<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 1387.45 thousand short tons<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 1297.16 thousand short tons<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 1137.33 thousand short tons<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 1550.37 thousand short tons<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 1278.76 thousand short tons<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 933.61 thousand short tons<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 636.2 thousand short tons<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 702.26 thousand short tons<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 659.62 thousand short tons<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 627.53 thousand short tons<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 584.96 thousand short tons<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 83.94 thousand short tons<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 69.2 thousand short tons<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 92.17 thousand short tons<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 48.67 thousand short tons<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 89.95 thousand short tons<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 95.63 thousand short tons<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - coal: 266.9 thousand short tons<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "text": ["Exports - coal: 0 thousand short tons<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - coal: 0 thousand short tons<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [87.698245959391869, 84.791744742511, 63.99499640245137, 39.856561240867329, 27.372372374916747, 8.4570850260751467, 4.809614751103191, 3.6952631001464025, 18.880715446048903, 29.298603805048938, 26.300391859285778, 20.615422678150065, 13.651491440680674, 17.563643918884104, 9.725727481344336, 20.377386251596292, 14.455259443650963, 8.5047866175434628, 37.62104456596029],
      "text": ["Exports - coal: 87.7 thousand short tons<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 84.79 thousand short tons<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 63.99 thousand short tons<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 39.86 thousand short tons<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 27.37 thousand short tons<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 8.46 thousand short tons<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 4.81 thousand short tons<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 3.7 thousand short tons<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 18.88 thousand short tons<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 29.3 thousand short tons<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 26.3 thousand short tons<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 20.62 thousand short tons<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 13.65 thousand short tons<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 17.56 thousand short tons<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 9.73 thousand short tons<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 20.38 thousand short tons<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 14.46 thousand short tons<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 8.5 thousand short tons<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - coal: 37.62 thousand short tons<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Exports - coal (REMIND_54)",
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
      "range": [0, 488218.88],
      "tickmode": "array",
      "ticktext": ["0e+00", "1e+05", "2e+05", "3e+05", "4e+05", "5e+05"],
      "tickvals": [0, 100000, 200000, 300000, 400000, 500000],
      "categoryorder": "array",
      "categoryarray": ["0e+00", "1e+05", "2e+05", "3e+05", "4e+05", "5e+05"],
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
    "b55c2d6384f": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c265115ad": {
      "y": {}
    }
  },
  "cur_data": "b55c2d6384f",
  "visdat": {
    "b55c2d6384f": ["function (y) ", "x"],
    "b55c265115ad": ["function (y) ", "x"]
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

  
