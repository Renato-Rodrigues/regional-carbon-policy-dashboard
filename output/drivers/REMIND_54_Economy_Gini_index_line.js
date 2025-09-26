(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Economy_Gini_index_line') 

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
      "y": [50.899999999999999, 48.399999999999999, 47.699999999999996, 46.299999999999997, 46.200000000000003, 44.899999999999999, 43.700000000000003, 43.600000000000001, 42.600000000000001, 41.299999999999997, 40.899999999999999, 41.600000000000001, 41.800000000000004, 42, 41.100000000000009, 41.299999999999997, 42.899999999999999, 42.299999999999997, 42.000000000000007],
      "text": ["Gini index: 50.9 index (0-100)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 48.4 index (0-100)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 47.7 index (0-100)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 46.3 index (0-100)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 46.2 index (0-100)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 44.9 index (0-100)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 43.7 index (0-100)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 43.6 index (0-100)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 42.6 index (0-100)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 41.3 index (0-100)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 40.9 index (0-100)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 41.6 index (0-100)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 41.8 index (0-100)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 42 index (0-100)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 41.1 index (0-100)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 41.3 index (0-100)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 42.9 index (0-100)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 42.3 index (0-100)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Gini index: 42 index (0-100)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [33.631736116757224, 33.676671333072228, 33.712836775522803, 33.75631741153019, 34.11064481963345, 33.720652074191783, 32.734813051798007, 32.351134690276481, 31.510931206702111, 31.415729748532303, 32.227964635659674, 32.320102503331178, 32.089672344623935, 32.777562709991301, 32.443418071951719, 32.822743971677077, 32.81876233368537, 32.816345197467669, 32.813956882261209],
      "text": ["Gini index: 33.63 index (0-100)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 33.68 index (0-100)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 33.71 index (0-100)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 33.76 index (0-100)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 34.11 index (0-100)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 33.72 index (0-100)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.73 index (0-100)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.35 index (0-100)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 31.51 index (0-100)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 31.42 index (0-100)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.23 index (0-100)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.32 index (0-100)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.09 index (0-100)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.78 index (0-100)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.44 index (0-100)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.82 index (0-100)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.82 index (0-100)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.82 index (0-100)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Gini index: 32.81 index (0-100)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [51.491500087640055, 50.544725514266304, 51.024969700607144, 50.042855041557509, 49.490287733826527, 48.16854009692625, 47.492196671826889, 46.95861906605613, 46.343707615033232, 45.992161330103848, 46.010219259599779, 45.397371524674476, 45.349847707962674, 45.239099357950799, 44.794086153371495, 44.535113060197183, 44.207602334892471, 44.75569565008724, 43.647895837152468],
      "text": ["Gini index: 51.49 index (0-100)<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 50.54 index (0-100)<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 51.02 index (0-100)<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 50.04 index (0-100)<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 49.49 index (0-100)<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 48.17 index (0-100)<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 47.49 index (0-100)<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 46.96 index (0-100)<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 46.34 index (0-100)<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 45.99 index (0-100)<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 46.01 index (0-100)<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 45.4 index (0-100)<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 45.35 index (0-100)<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 45.24 index (0-100)<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 44.79 index (0-100)<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 44.54 index (0-100)<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 44.21 index (0-100)<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 44.76 index (0-100)<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Gini index: 43.65 index (0-100)<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [31.799999999999997, 31.799999999999997, 31.625, 31.450000000000003, 31.275000000000002, 31.100000000000001, 30.649999999999999, 30.199999999999999, 29.249999999999996, 28.300000000000001, 29.466666666666669, 30.633333333333336, 31.799999999999997, 31.649999999999999, 31.5, 31.699999999999996, 31.899999999999999, 31.900000000000002, 31.900000000000002],
      "text": ["Gini index: 31.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.62 index (0-100)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.45 index (0-100)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.28 index (0-100)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.1 index (0-100)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 30.65 index (0-100)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 30.2 index (0-100)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 29.25 index (0-100)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 28.3 index (0-100)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 29.47 index (0-100)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 30.63 index (0-100)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.8 index (0-100)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.65 index (0-100)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.5 index (0-100)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.7 index (0-100)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.9 index (0-100)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.9 index (0-100)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Gini index: 31.9 index (0-100)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [33.799999999999997, 33.799999999999997, 33.600000000000001, 34.100000000000001, 33.799999999999997, 33.899999999999999, 34.000000000000007, 33.600000000000001, 32.700000000000003, 33.5, 33.799999999999997, 33.200000000000003, 33.700000000000003, 32.700000000000003, 33.299999999999997, 32.5, 31.699999999999999, 31.699999999999999, 31.699999999999996],
      "text": ["Gini index: 33.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.6 index (0-100)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 34.1 index (0-100)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.8 index (0-100)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.9 index (0-100)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 34 index (0-100)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.6 index (0-100)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 32.7 index (0-100)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.5 index (0-100)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.8 index (0-100)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.2 index (0-100)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.7 index (0-100)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 32.7 index (0-100)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 33.3 index (0-100)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 32.5 index (0-100)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 31.7 index (0-100)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 31.7 index (0-100)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Gini index: 31.7 index (0-100)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [50, 49.999999999999993, 50.100000000000009, 48.899999999999999, 49.400000000000006, 49.899999999999999, 48.54999999999999, 47.20000000000001, 47.950000000000003, 48.700000000000003, 48.70000000000001, 48.699999999999996, 48.20000000000001, 47.700000000000003, 47.199999999999996, 46.699999999999996, 46.049999999999997, 45.399999999999999, 45.399999999999991],
      "text": ["Gini index: 50 index (0-100)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 50 index (0-100)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 50.1 index (0-100)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 48.9 index (0-100)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 49.4 index (0-100)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 49.9 index (0-100)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 48.55 index (0-100)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 47.2 index (0-100)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 47.95 index (0-100)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 48.7 index (0-100)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 48.7 index (0-100)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 48.7 index (0-100)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 48.2 index (0-100)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 47.7 index (0-100)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 47.2 index (0-100)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 46.7 index (0-100)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 46.05 index (0-100)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 45.4 index (0-100)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Gini index: 45.4 index (0-100)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [27.600000000000001, 31.600000000000005, 30.600000000000005, 26.399999999999999, 27.100000000000001, 27.000000000000004, 26.199999999999999, 25.699999999999999, 25.300000000000001, 25.700000000000003, 26.399999999999999, 26.800000000000001, 27.499999999999996, 28.5, 27.000000000000004, 27.600000000000001, 27.700000000000003, 27.700000000000003, 27.700000000000003],
      "text": ["Gini index: 27.6 index (0-100)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 31.6 index (0-100)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 30.6 index (0-100)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 26.4 index (0-100)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 27.1 index (0-100)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 27 index (0-100)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 26.2 index (0-100)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 25.7 index (0-100)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 25.3 index (0-100)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 25.7 index (0-100)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 26.4 index (0-100)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 26.8 index (0-100)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 27.5 index (0-100)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 28.5 index (0-100)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 27 index (0-100)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 27.6 index (0-100)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 27.7 index (0-100)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 27.7 index (0-100)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Gini index: 27.7 index (0-100)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [57.600000000000001, 56.500000000000007, 56.299999999999997, 55.600000000000001, 54.899999999999999, 53.999999999999993, 53.700000000000003, 53.29999999999999, 52.899999999999999, 53.399999999999999, 52.699999999999996, 52, 51.899999999999999, 53.299999999999997, 53.299999999999997, 53.899999999999999, 53.499999999999993, 48.900000000000006, 52.899999999999991],
      "text": ["Gini index: 57.6 index (0-100)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 56.5 index (0-100)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 56.3 index (0-100)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 55.6 index (0-100)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 54.9 index (0-100)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 54 index (0-100)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 53.7 index (0-100)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 53.3 index (0-100)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 52.9 index (0-100)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 53.4 index (0-100)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 52.7 index (0-100)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 52 index (0-100)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 51.9 index (0-100)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 53.3 index (0-100)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 53.3 index (0-100)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 53.9 index (0-100)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 53.5 index (0-100)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 48.9 index (0-100)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Gini index: 52.9 index (0-100)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [31.643198659325453, 31.757782854914801, 31.929408891420326, 32.364223084749071, 30.552439284286766, 30.319200650350744, 29.374170975801523, 28.999057483509596, 28.771183642033169, 28.695231688004338, 28.567309746388361, 28.266388558720351, 29.129271661038576, 28.565918364784281, 28.897575857189437, 28.567449987271452, 28.830143865092246, 28.132539634198572, 28.111440842981956],
      "text": ["Gini index: 31.64 index (0-100)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 31.76 index (0-100)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 31.93 index (0-100)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 32.36 index (0-100)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 30.55 index (0-100)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 30.32 index (0-100)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 29.37 index (0-100)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Gini index: 29 index (0-100)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Gini index: 28.77 index (0-100)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 28.7 index (0-100)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 28.57 index (0-100)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 28.27 index (0-100)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 29.13 index (0-100)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 28.57 index (0-100)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 28.9 index (0-100)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 28.57 index (0-100)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 28.83 index (0-100)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 28.13 index (0-100)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Gini index: 28.11 index (0-100)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [31.699999999999999, 31.699999999999996, 31.699999999999999, 31.700000000000003, 32, 32.299999999999997, 32.149999999999999, 32, 31.800000000000001, 31.600000000000001, 31.400000000000002, 31.199999999999996, 31.300000000000001, 31.399999999999999, 31.399999999999999, 31.399999999999999, 31.399999999999999, 31.400000000000002, 31.399999999999995],
      "text": ["Gini index: 31.7 index (0-100)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.7 index (0-100)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.7 index (0-100)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.7 index (0-100)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 32 index (0-100)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 32.3 index (0-100)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 32.15 index (0-100)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 32 index (0-100)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.8 index (0-100)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.6 index (0-100)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.4 index (0-100)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.2 index (0-100)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.3 index (0-100)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.4 index (0-100)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.4 index (0-100)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.4 index (0-100)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.4 index (0-100)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.4 index (0-100)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Gini index: 31.4 index (0-100)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [46.600000000000001, 46.800000000000004, 47, 47.200000000000003, 46.899999999999999, 46.600000000000001, 46.299999999999997, 46.366666666666667, 46.433333333333337, 46.5, 45.866666666666667, 45.233333333333341, 44.600000000000001, 43.833333333333336, 43.066666666666663, 42.29999999999999, 41.766666666666673, 41.233333333333341, 40.700000000000003],
      "text": ["Gini index: 46.6 index (0-100)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 46.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 47 index (0-100)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 47.2 index (0-100)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 46.9 index (0-100)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 46.6 index (0-100)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 46.3 index (0-100)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 46.37 index (0-100)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 46.43 index (0-100)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 46.5 index (0-100)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 45.87 index (0-100)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 45.23 index (0-100)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 44.6 index (0-100)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 43.83 index (0-100)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 43.07 index (0-100)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 42.3 index (0-100)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 41.77 index (0-100)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 41.23 index (0-100)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Gini index: 40.7 index (0-100)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [32.410496601044649, 32.517658972867004, 33.600034479834569, 32.305561638359897, 32.240797977998554, 31.428743258936144, 31.119438062309541, 31.327126688098687, 31.062182588080248, 31.047844032543924, 31.065720961937391, 31.043038741199776, 31.094515716598305, 30.983050978297882, 31.136825575368853, 31.241045326649513, 31.270757238731662, 30.985217965366367, 31.109721805280998],
      "text": ["Gini index: 32.41 index (0-100)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 32.52 index (0-100)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 33.6 index (0-100)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 32.31 index (0-100)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 32.24 index (0-100)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Gini index: 31.43 index (0-100)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 31.12 index (0-100)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 31.33 index (0-100)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 31.06 index (0-100)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 31.05 index (0-100)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 31.07 index (0-100)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 31.04 index (0-100)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Gini index: 31.09 index (0-100)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 30.98 index (0-100)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 31.14 index (0-100)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 31.24 index (0-100)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 31.27 index (0-100)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 30.99 index (0-100)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Gini index: 31.11 index (0-100)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [53.600000000000001, 55, 53.899999999999999, 54.366666666666667, 54.833333333333321, 55.299999999999997, 54.299999999999997, 54.599999999999994, 53.5, 52.599999999999994, 52.600000000000001, 52.600000000000001, 51, 50.600000000000001, 49.700000000000003, 50.399999999999999, 51.299999999999997, 53.500000000000007, 51.5],
      "text": ["Gini index: 53.6 index (0-100)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 55 index (0-100)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 53.9 index (0-100)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 54.37 index (0-100)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 54.83 index (0-100)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 55.3 index (0-100)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 54.3 index (0-100)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 54.6 index (0-100)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 53.5 index (0-100)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 52.6 index (0-100)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 52.6 index (0-100)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 52.6 index (0-100)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 51 index (0-100)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 50.6 index (0-100)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 49.7 index (0-100)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 50.4 index (0-100)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 51.3 index (0-100)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 53.5 index (0-100)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Gini index: 51.5 index (0-100)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [43.369504135779628, 43.341380485131815, 43.348868039722916, 43.330708924158422, 43.316527418007311, 43.225214943788515, 43.233173107569478, 43.116892525384131, 42.987892443917204, 42.962812448060077, 43.083841030285718, 43.195637702694171, 43.295848220438721, 43.192221054667115, 42.964465282391437, 42.826001705393374, 42.70507764101837, 42.615252674851007, 42.856435956595035],
      "text": ["Gini index: 43.37 index (0-100)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.34 index (0-100)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.35 index (0-100)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.33 index (0-100)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.32 index (0-100)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.23 index (0-100)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.23 index (0-100)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.12 index (0-100)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.99 index (0-100)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.96 index (0-100)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.08 index (0-100)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.2 index (0-100)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.3 index (0-100)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 43.19 index (0-100)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.96 index (0-100)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.83 index (0-100)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.71 index (0-100)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.62 index (0-100)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Gini index: 42.86 index (0-100)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [39.999999999999993, 40.29999999999999, 41.299999999999997, 41, 42.299999999999997, 41.600000000000001, 39.799999999999997, 39.5, 39.700000000000003, 40.700000000000003, 40.899999999999999, 39.899999999999999, 37.700000000000003, 36.79999999999999, 37.200000000000003, 37.500000000000007, 37.700000000000003, 36, 36],
      "text": ["Gini index: 40 index (0-100)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 40.3 index (0-100)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 41.3 index (0-100)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 41 index (0-100)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 42.3 index (0-100)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 41.6 index (0-100)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 39.8 index (0-100)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 39.5 index (0-100)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 39.7 index (0-100)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 40.7 index (0-100)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 40.9 index (0-100)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 39.9 index (0-100)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 37.7 index (0-100)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 36.8 index (0-100)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 37.2 index (0-100)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 37.5 index (0-100)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 37.7 index (0-100)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 36 index (0-100)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Gini index: 36 index (0-100)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [43.729757915061825, 42.179084606879293, 40.628747054788526, 39.078677449141679, 37.528757182005741, 35.99982434165284, 34.471256259106987, 32.943110632364245, 32.947546257310542, 32.952330611916366, 32.946513231430011, 32.94040502354666, 32.933789239394258, 32.927148534135128, 32.920628175473382, 32.921184406858274, 32.920573148640898, 32.919113482451579, 32.917916690963821],
      "text": ["Gini index: 43.73 index (0-100)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Gini index: 42.18 index (0-100)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Gini index: 40.63 index (0-100)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Gini index: 39.08 index (0-100)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Gini index: 37.53 index (0-100)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Gini index: 36 index (0-100)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Gini index: 34.47 index (0-100)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.94 index (0-100)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.95 index (0-100)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.95 index (0-100)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.95 index (0-100)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.94 index (0-100)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.93 index (0-100)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.93 index (0-100)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.92 index (0-100)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.92 index (0-100)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.92 index (0-100)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.92 index (0-100)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Gini index: 32.92 index (0-100)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [36.799999999999997, 36.799999999999997, 36.299999999999997, 35.799999999999997, 35.700000000000003, 35.600000000000001, 37.449999999999996, 39.299999999999997, 37.450000000000003, 35.600000000000001, 35.200000000000003, 34.799999999999997, 35.049999999999997, 35.299999999999997, 35.5, 35.700000000000003, 36.249999999999993, 36.799999999999997, 36.799999999999997],
      "text": ["Gini index: 36.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 36.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 36.3 index (0-100)<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 35.8 index (0-100)<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 35.7 index (0-100)<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 35.6 index (0-100)<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 37.45 index (0-100)<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 39.3 index (0-100)<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 37.45 index (0-100)<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 35.6 index (0-100)<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 35.2 index (0-100)<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 34.8 index (0-100)<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 35.05 index (0-100)<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 35.3 index (0-100)<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 35.5 index (0-100)<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 35.7 index (0-100)<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 36.25 index (0-100)<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 36.8 index (0-100)<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Gini index: 36.8 index (0-100)<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [30.899999999999999, 30.900000000000002, 31.300000000000004, 30.499999999999996, 29.699999999999999, 29.399999999999999, 29.100000000000001, 28.800000000000001, 29.699999999999999, 29.600000000000001, 29.5, 30.399999999999999, 31.300000000000001, 30.733333333333331, 30.166666666666671, 29.600000000000005, 29.600000000000001, 29.599999999999998, 29.600000000000001],
      "text": ["Gini index: 30.9 index (0-100)<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 30.9 index (0-100)<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 31.3 index (0-100)<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 30.5 index (0-100)<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.7 index (0-100)<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.4 index (0-100)<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.1 index (0-100)<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 28.8 index (0-100)<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.7 index (0-100)<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.6 index (0-100)<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.5 index (0-100)<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 30.4 index (0-100)<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 31.3 index (0-100)<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 30.73 index (0-100)<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 30.17 index (0-100)<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.6 index (0-100)<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.6 index (0-100)<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.6 index (0-100)<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Gini index: 29.6 index (0-100)<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [33.200000000000003, 33.200000000000003, 33.200000000000003, 32.980000000000004, 32.760000000000005, 32.539999999999999, 32.32, 32.099999999999994, 32.149999999999999, 32.200000000000003, 32.25, 32.300000000000004, 32.350000000000009, 32.399999999999999, 32.399999999999999, 32.399999999999999, 32.399999999999999, 32.399999999999999, 32.399999999999999],
      "text": ["Gini index: 33.2 index (0-100)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 33.2 index (0-100)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 33.2 index (0-100)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.98 index (0-100)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.76 index (0-100)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.54 index (0-100)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.32 index (0-100)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.1 index (0-100)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.15 index (0-100)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.2 index (0-100)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.25 index (0-100)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.3 index (0-100)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.35 index (0-100)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.4 index (0-100)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.4 index (0-100)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.4 index (0-100)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.4 index (0-100)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.4 index (0-100)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Gini index: 32.4 index (0-100)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [32.999999999999993, 33.900000000000006, 34.100000000000001, 35.299999999999997, 36.700000000000003, 36.100000000000001, 36.000000000000007, 37.199999999999996, 40.5, 40.5, 40.799999999999997, 40.200000000000003, 40.399999999999999, 39.299999999999997, 38.799999999999997, 38.399999999999999, 37.600000000000001, 37.600000000000001, 37.899999999999999],
      "text": ["Gini index: 33 index (0-100)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 33.9 index (0-100)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 34.1 index (0-100)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 35.3 index (0-100)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 36.7 index (0-100)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 36.1 index (0-100)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 36 index (0-100)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 37.2 index (0-100)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 40.5 index (0-100)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 40.5 index (0-100)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 40.8 index (0-100)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 40.2 index (0-100)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 40.4 index (0-100)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 39.3 index (0-100)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 38.8 index (0-100)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 38.4 index (0-100)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 37.6 index (0-100)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 37.6 index (0-100)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Gini index: 37.9 index (0-100)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [42.5, 42.499999999999993, 42.150000000000006, 41.799999999999997, 39.799999999999997, 40.299999999999997, 39.600000000000001, 39.399999999999999, 37.5, 39.299999999999997, 37.799999999999997, 37, 36, 36.900000000000006, 36.5, 36.399999999999999, 34.899999999999999, 35.000000000000007, 35.100000000000001],
      "text": ["Gini index: 42.5 index (0-100)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 42.5 index (0-100)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 42.15 index (0-100)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 41.8 index (0-100)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 39.8 index (0-100)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 40.3 index (0-100)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 39.6 index (0-100)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 39.4 index (0-100)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 37.5 index (0-100)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 39.3 index (0-100)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 37.8 index (0-100)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 37 index (0-100)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 36 index (0-100)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 36.9 index (0-100)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 36.5 index (0-100)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 36.4 index (0-100)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 34.9 index (0-100)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 35 index (0-100)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Gini index: 35.1 index (0-100)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [34.800000000000004, 34.799999999999997, 34.799999999999997, 34.799999999999997, 34.799999999999997, 34.799999999999997, 33.450000000000003, 32.099999999999994, 32.366666666666674, 32.633333333333333, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999, 32.899999999999999],
      "text": ["Gini index: 34.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 34.8 index (0-100)<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 33.45 index (0-100)<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.1 index (0-100)<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.37 index (0-100)<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.63 index (0-100)<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Gini index: 32.9 index (0-100)<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [36.430122145393085, 36.485498509490824, 36.517893134004495, 36.181801579630928, 35.611817728816931, 35.234975592692656, 34.864057721692362, 34.659344813435169, 34.438698705720938, 34.366999523797993, 34.298152091284379, 34.26451529806927, 34.273976902191031, 34.323060988514939, 34.37447554849863, 34.427385367407993, 34.430199056156937, 34.434921529465448, 34.441762964398549],
      "text": ["Gini index: 36.43 index (0-100)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Gini index: 36.49 index (0-100)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Gini index: 36.52 index (0-100)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 36.18 index (0-100)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 35.61 index (0-100)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 35.23 index (0-100)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.86 index (0-100)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.66 index (0-100)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.44 index (0-100)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.37 index (0-100)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.3 index (0-100)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.26 index (0-100)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.27 index (0-100)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.32 index (0-100)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.37 index (0-100)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.43 index (0-100)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.43 index (0-100)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.43 index (0-100)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Gini index: 34.44 index (0-100)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [51.5, 50.100000000000001, 48.699999999999989, 47.299999999999997, 47.199999999999989, 47.100000000000001, 47, 46.5, 46, 45.899999999999999, 45.799999999999997, 45.099999999999994, 44.399999999999999, 44.399999999999999, 44.399999999999999, 44.566666666666663, 44.733333333333334, 44.899999999999999, 44.899999999999999],
      "text": ["Gini index: 51.5 index (0-100)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 50.1 index (0-100)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 48.7 index (0-100)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 47.3 index (0-100)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 47.2 index (0-100)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 47.1 index (0-100)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 47 index (0-100)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 46.5 index (0-100)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 46 index (0-100)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 45.9 index (0-100)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 45.8 index (0-100)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 45.1 index (0-100)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 44.4 index (0-100)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 44.4 index (0-100)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 44.4 index (0-100)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 44.57 index (0-100)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 44.73 index (0-100)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 44.9 index (0-100)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Gini index: 44.9 index (0-100)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [42.200000000000003, 41.299999999999997, 42.600000000000001, 39.600000000000001, 38.400000000000006, 39, 39, 38.799999999999997, 40, 40.200000000000003, 40.200000000000003, 41.200000000000003, 42.899999999999999, 41.899999999999999, 41.399999999999999, 41.899999999999999, 41.899999999999999, 41.899999999999999, 41.899999999999999],
      "text": ["Gini index: 42.2 index (0-100)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 41.3 index (0-100)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 42.6 index (0-100)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 39.6 index (0-100)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 38.4 index (0-100)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 39 index (0-100)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 39 index (0-100)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 38.8 index (0-100)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 40 index (0-100)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 40.2 index (0-100)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 40.2 index (0-100)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 41.2 index (0-100)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 42.9 index (0-100)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 41.9 index (0-100)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 41.4 index (0-100)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 41.9 index (0-100)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 41.9 index (0-100)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 41.9 index (0-100)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Gini index: 41.9 index (0-100)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [29.800000000000001, 29.800000000000001, 30.366666666666667, 30.93333333333333, 31.500000000000004, 32.06666666666667, 32.633333333333333, 33.200000000000003, 33.559999999999995, 33.920000000000002, 34.280000000000008, 34.640000000000001, 35, 35, 35, 35, 35, 35, 35.000000000000007],
      "text": ["Gini index: 29.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 29.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 30.37 index (0-100)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 30.93 index (0-100)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 31.5 index (0-100)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 32.07 index (0-100)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 32.63 index (0-100)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 33.2 index (0-100)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 33.56 index (0-100)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 33.92 index (0-100)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 34.28 index (0-100)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 34.64 index (0-100)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 35 index (0-100)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 35 index (0-100)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 35 index (0-100)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 35 index (0-100)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 35 index (0-100)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 35 index (0-100)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Gini index: 35 index (0-100)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [35.487987999651452, 35.4790280289563, 36.526267494772227, 35.082202445240846, 34.048805953186346, 32.968291566295179, 32.554719524448359, 33.350435530189792, 33.23888997587455, 34.214234617130138, 34.634818479656104, 34.200999321290134, 34.126525431832945, 33.693642078510749, 34.38497593879648, 34.157712179631922, 33.529599975804338, 33.429693371823831, 33.421773419623349],
      "text": ["Gini index: 35.49 index (0-100)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 35.48 index (0-100)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 36.53 index (0-100)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 35.08 index (0-100)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.05 index (0-100)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 32.97 index (0-100)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 32.55 index (0-100)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.35 index (0-100)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.24 index (0-100)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.21 index (0-100)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.63 index (0-100)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.2 index (0-100)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.13 index (0-100)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.69 index (0-100)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.38 index (0-100)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 34.16 index (0-100)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.53 index (0-100)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.43 index (0-100)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Gini index: 33.42 index (0-100)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [43.600000000000001, 43.600000000000001, 43.600000000000001, 44.79999999999999, 43.900000000000006, 43, 42.100000000000001, 40.92499999999999, 39.75, 38.575000000000003, 37.400000000000006, 38.799999999999997, 39.5, 40, 40.799999999999997, 42, 40.900000000000006, 40.899999999999999, 40.899999999999999],
      "text": ["Gini index: 43.6 index (0-100)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 43.6 index (0-100)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 43.6 index (0-100)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 44.8 index (0-100)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 43.9 index (0-100)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 43 index (0-100)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 42.1 index (0-100)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 40.92 index (0-100)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 39.75 index (0-100)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 38.58 index (0-100)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 37.4 index (0-100)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 38.8 index (0-100)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 39.5 index (0-100)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 40 index (0-100)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 40.8 index (0-100)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 42 index (0-100)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 40.9 index (0-100)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 40.9 index (0-100)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Gini index: 40.9 index (0-100)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [34.399999999999999, 34.399999999999999, 34.600000000000001, 34.799999999999997, 35, 35.199999999999996, 35.399999999999999, 35.549999999999997, 35.700000000000003, 35.450000000000003, 35.200000000000003, 34.950000000000003, 34.700000000000003, 34.799999999999997, 35.899999999999999, 34.600000000000001, 35, 34.799999999999997, 34.200000000000003],
      "text": ["Gini index: 34.4 index (0-100)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 34.4 index (0-100)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 34.6 index (0-100)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 34.8 index (0-100)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 35 index (0-100)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 35.2 index (0-100)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 35.4 index (0-100)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 35.55 index (0-100)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 35.7 index (0-100)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 35.45 index (0-100)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 35.2 index (0-100)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 34.95 index (0-100)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 34.7 index (0-100)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 34.8 index (0-100)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 35.9 index (0-100)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 34.6 index (0-100)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 35 index (0-100)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 34.8 index (0-100)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Gini index: 34.2 index (0-100)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [40.799999999999997, 40.299999999999997, 41, 41.399999999999999, 40.799999999999997, 40.799999999999997, 40.599999999999994, 40, 40.899999999999999, 40.899999999999999, 40.700000000000003, 41.5, 41.200000000000003, 41.100000000000001, 41.200000000000003, 41.399999999999999, 41.5, 39.700000000000003, 39.799999999999997],
      "text": ["Gini index: 40.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 40.3 index (0-100)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 41 index (0-100)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 41.4 index (0-100)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 40.8 index (0-100)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 40.8 index (0-100)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 40.6 index (0-100)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 40 index (0-100)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 40.9 index (0-100)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 40.9 index (0-100)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 40.7 index (0-100)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 41.5 index (0-100)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 41.2 index (0-100)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 41.1 index (0-100)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 41.2 index (0-100)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 41.4 index (0-100)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 41.5 index (0-100)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 39.7 index (0-100)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Gini index: 39.8 index (0-100)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [42.20000000000001, 42.200000000000003, 42.187499999999993, 42.175000000000004, 42.162500000000009, 42.150000000000006, 42.137500000000003, 42.125, 42.112500000000004, 42.100000000000001, 42.100000000000001, 42.100000000000001, 42.100000000000001, 42.100000000000009, 42.100000000000001, 42.100000000000001, 42.100000000000001, 42.100000000000001, 42.100000000000001],
      "text": ["Gini index: 42.2 index (0-100)<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.2 index (0-100)<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.19 index (0-100)<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.18 index (0-100)<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.16 index (0-100)<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.15 index (0-100)<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.14 index (0-100)<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.12 index (0-100)<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.11 index (0-100)<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Gini index: 42.1 index (0-100)<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [31.799999999999997, 33.299999999999997, 32.399999999999999, 33.5, 34.100000000000001, 34.200000000000003, 34.899999999999999, 35.200000000000003, 35.700000000000003, 35.399999999999999, 36.200000000000003, 36.100000000000001, 36.200000000000003, 35.799999999999997, 34.700000000000003, 34.699999999999996, 34.299999999999997, 34.899999999999999, 34.899999999999999],
      "text": ["Gini index: 31.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 33.3 index (0-100)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 32.4 index (0-100)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 33.5 index (0-100)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 34.1 index (0-100)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 34.2 index (0-100)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 34.9 index (0-100)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 35.2 index (0-100)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 35.7 index (0-100)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 35.4 index (0-100)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 36.2 index (0-100)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 36.1 index (0-100)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 36.2 index (0-100)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 35.8 index (0-100)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 34.7 index (0-100)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 34.7 index (0-100)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 34.3 index (0-100)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 34.9 index (0-100)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Gini index: 34.9 index (0-100)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [38, 38, 35.799999999999997, 34.700000000000003, 34, 33.5, 33.399999999999999, 33.200000000000003, 33.200000000000003, 32.999999999999993, 33.100000000000001, 32.799999999999997, 31.800000000000001, 31.200000000000003, 29.700000000000003, 30.199999999999999, 28.800000000000004, 28.800000000000001, 28.800000000000001],
      "text": ["Gini index: 38 index (0-100)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 38 index (0-100)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 35.8 index (0-100)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 34.7 index (0-100)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 34 index (0-100)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 33.5 index (0-100)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 33.4 index (0-100)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 33.2 index (0-100)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 33.2 index (0-100)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 33 index (0-100)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 33.1 index (0-100)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 32.8 index (0-100)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 31.8 index (0-100)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 31.2 index (0-100)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 29.7 index (0-100)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 30.2 index (0-100)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 28.8 index (0-100)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 28.8 index (0-100)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Gini index: 28.8 index (0-100)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [40.100000000000001, 39.471428571428568, 38.842857142857142, 38.214285714285715, 37.585714285714289, 36.957142857142863, 36.328571428571436, 35.700000000000003, 35.600000000000001, 35.5, 35.633333333333333, 35.766666666666666, 35.899999999999999, 35.633333333333333, 35.366666666666667, 35.100000000000001, 35.100000000000001, 35.100000000000001, 35.100000000000001],
      "text": ["Gini index: 40.1 index (0-100)<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 39.47 index (0-100)<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 38.84 index (0-100)<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 38.21 index (0-100)<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 37.59 index (0-100)<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 36.96 index (0-100)<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 36.33 index (0-100)<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.7 index (0-100)<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.6 index (0-100)<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.5 index (0-100)<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.63 index (0-100)<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.77 index (0-100)<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.9 index (0-100)<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.63 index (0-100)<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.37 index (0-100)<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.1 index (0-100)<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.1 index (0-100)<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.1 index (0-100)<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Gini index: 35.1 index (0-100)<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [64.799999999999997, 64.799999999999997, 64.799999999999997, 64.199999999999989, 63.600000000000001, 63, 63.200000000000003, 63.399999999999999, 63.299999999999997, 63.199999999999996, 63.100000000000009, 63, 63.000000000000007, 63, 63, 63, 63, 63, 62.999999999999993],
      "text": ["Gini index: 64.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 64.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 64.8 index (0-100)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 64.2 index (0-100)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63.6 index (0-100)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63 index (0-100)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63.2 index (0-100)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63.4 index (0-100)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63.3 index (0-100)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63.2 index (0-100)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63.1 index (0-100)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63 index (0-100)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63 index (0-100)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63 index (0-100)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63 index (0-100)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63 index (0-100)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63 index (0-100)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63 index (0-100)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Gini index: 63 index (0-100)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [29.899999999999995, 30.199999999999996, 31.600000000000001, 30.999999999999996, 31.100000000000005, 30.899999999999999, 30.500000000000004, 30.300000000000001, 30.699999999999999, 31.100000000000001, 31.500000000000004, 30.899999999999999, 31.400000000000002, 31.399999999999995, 31.900000000000002, 31.800000000000001, 31.699999999999999, 31.699999999999999, 31.699999999999999],
      "text": ["Gini index: 29.9 index (0-100)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 30.2 index (0-100)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.6 index (0-100)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31 index (0-100)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.1 index (0-100)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 30.9 index (0-100)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 30.5 index (0-100)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 30.3 index (0-100)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 30.7 index (0-100)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.1 index (0-100)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.5 index (0-100)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 30.9 index (0-100)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.4 index (0-100)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.4 index (0-100)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.9 index (0-100)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.8 index (0-100)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.7 index (0-100)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.7 index (0-100)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Gini index: 31.7 index (0-100)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [30.324664236884338, 30.086669776992224, 30.308846724184864, 28.905796801225637, 28.39348894527868, 28.954780372851108, 29.231063975687508, 28.844733114060066, 28.482946408821082, 28.543346418332863, 29.387004635128253, 28.850908770868553, 28.697718126333697, 28.167407440093999, 27.334404057010975, 27.551021062445095, 27.167830785915754, 27.780165530429105, 27.793057678722285],
      "text": ["Gini index: 30.32 index (0-100)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 30.09 index (0-100)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 30.31 index (0-100)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.91 index (0-100)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.39 index (0-100)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.95 index (0-100)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 29.23 index (0-100)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.84 index (0-100)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.48 index (0-100)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.54 index (0-100)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 29.39 index (0-100)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.85 index (0-100)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.7 index (0-100)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 28.17 index (0-100)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.33 index (0-100)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.55 index (0-100)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.17 index (0-100)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.78 index (0-100)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Gini index: 27.79 index (0-100)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [32.899999999999991, 33.600000000000001, 33.799999999999997, 32.700000000000003, 31.900000000000002, 30.899999999999999, 32.700000000000003, 32.299999999999997, 32.899999999999999, 33.20000000000001, 33.5, 31.899999999999999, 31.799999999999997, 32.799999999999997, 31.399999999999995, 30.600000000000005, 30.800000000000001, 29.200000000000003, 29.200000000000003],
      "text": ["Gini index: 32.9 index (0-100)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 33.6 index (0-100)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 33.8 index (0-100)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.7 index (0-100)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 31.9 index (0-100)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 30.9 index (0-100)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.7 index (0-100)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.3 index (0-100)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.9 index (0-100)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 33.2 index (0-100)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 33.5 index (0-100)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 31.9 index (0-100)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 31.8 index (0-100)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 32.8 index (0-100)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 31.4 index (0-100)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 30.6 index (0-100)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 30.8 index (0-100)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 29.2 index (0-100)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Gini index: 29.2 index (0-100)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [38.799999999999997, 38.899999999999999, 38.499999999999993, 38.100000000000001, 36.799999999999997, 36.600000000000001, 34.899999999999991, 35.799999999999997, 36.299999999999997, 36, 36.200000000000003, 35.600000000000001, 35.5, 35.200000000000003, 33.799999999999997, 33.5, 32.799999999999997, 34.700000000000003, 34.700000000000003],
      "text": ["Gini index: 38.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 38.9 index (0-100)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 38.5 index (0-100)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 38.1 index (0-100)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 36.8 index (0-100)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 36.6 index (0-100)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 34.9 index (0-100)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 35.8 index (0-100)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 36.3 index (0-100)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 36 index (0-100)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 36.2 index (0-100)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 35.6 index (0-100)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 35.5 index (0-100)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 35.2 index (0-100)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 33.8 index (0-100)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 33.5 index (0-100)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 32.8 index (0-100)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 34.7 index (0-100)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Gini index: 34.7 index (0-100)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [31.400000000000002, 30.600000000000005, 29.799999999999997, 29.699999999999996, 32.400000000000006, 33.000000000000007, 32.699999999999996, 33.70000000000001, 33.29999999999999, 33.100000000000001, 32.5, 32.29999999999999, 32.699999999999989, 31.899999999999999, 31.600000000000001, 32.399999999999991, 31.199999999999992, 30.699999999999999, 30.699999999999996],
      "text": ["Gini index: 31.4 index (0-100)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 30.6 index (0-100)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 29.8 index (0-100)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 29.7 index (0-100)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.4 index (0-100)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 33 index (0-100)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.7 index (0-100)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 33.7 index (0-100)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 33.3 index (0-100)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 33.1 index (0-100)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.5 index (0-100)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.3 index (0-100)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.7 index (0-100)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 31.9 index (0-100)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 31.6 index (0-100)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 32.4 index (0-100)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 31.2 index (0-100)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 30.7 index (0-100)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Gini index: 30.7 index (0-100)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [34.899974986426592, 34.799980102857283, 35.499955537897691, 35.899946055463957, 34.400029196076069, 35.399990344263379, 35.100014374441443, 33.700087950206111, 33.200117927239148, 33.100110084791211, 32.700116331399961, 33.100085455255993, 33.300064160253491, 33.100077322886399, 32.600149083739254, 33.700040413815017, 32.800098233607912, 32.600097874202, 32.600071237690464],
      "text": ["Gini index: 34.9 index (0-100)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 34.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 35.5 index (0-100)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 35.9 index (0-100)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 34.4 index (0-100)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 35.4 index (0-100)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 35.1 index (0-100)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.7 index (0-100)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.2 index (0-100)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.1 index (0-100)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.7 index (0-100)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.1 index (0-100)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.3 index (0-100)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.1 index (0-100)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.6 index (0-100)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 33.7 index (0-100)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.8 index (0-100)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.6 index (0-100)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Gini index: 32.6 index (0-100)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [29.499999999999996, 29.800000000000001, 28.699999999999999, 29.600000000000001, 30.599999999999998, 30.399999999999999, 31.499999999999996, 30.300000000000001, 30.800000000000004, 30.499999999999996, 30.800000000000004, 30.5, 30.5, 30.800000000000001, 29.700000000000003, 30.799999999999997, 30.199999999999999, 29.800000000000001, 29.800000000000001],
      "text": ["Gini index: 29.5 index (0-100)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 29.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 28.7 index (0-100)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 29.6 index (0-100)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.6 index (0-100)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.4 index (0-100)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 31.5 index (0-100)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.3 index (0-100)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.8 index (0-100)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.5 index (0-100)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.8 index (0-100)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.5 index (0-100)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.5 index (0-100)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.8 index (0-100)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 29.7 index (0-100)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.8 index (0-100)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 30.2 index (0-100)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 29.8 index (0-100)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Gini index: 29.8 index (0-100)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [40.899999999999999, 40.899999999999991, 40.899999999999999, 41.600000000000001, 42.299999999999997, 43.000000000000007, 43.350000000000001, 43.700000000000003, 42.400000000000006, 42.200000000000003, 39.700000000000003, 39.200000000000003, 38.600000000000001, 38.499999999999993, 39.100000000000001, 38.5, 38.200000000000003, 37.100000000000001, 37.100000000000009],
      "text": ["Gini index: 40.9 index (0-100)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 40.9 index (0-100)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 40.9 index (0-100)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 41.6 index (0-100)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 42.3 index (0-100)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 43 index (0-100)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 43.35 index (0-100)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 43.7 index (0-100)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 42.4 index (0-100)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 42.2 index (0-100)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 39.7 index (0-100)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 39.2 index (0-100)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.6 index (0-100)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.5 index (0-100)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 39.1 index (0-100)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.5 index (0-100)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 38.2 index (0-100)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 37.1 index (0-100)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Gini index: 37.1 index (0-100)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [33.567726428268728, 33.617521583973421, 33.690149053099205, 33.704518925915067, 33.844676523380336, 33.919287167381988, 34.078109346938007, 34.218789606064448, 34.188814993958822, 34.244702509046263, 34.113344832196134, 33.971410356713356, 33.826066212369213, 33.664065417824943, 33.512836004574289, 33.457624994082913, 33.482059835525241, 33.509273634836845, 33.517802578000811],
      "text": ["Gini index: 33.57 index (0-100)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Gini index: 33.62 index (0-100)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Gini index: 33.69 index (0-100)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Gini index: 33.7 index (0-100)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Gini index: 33.84 index (0-100)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Gini index: 33.92 index (0-100)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Gini index: 34.08 index (0-100)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Gini index: 34.22 index (0-100)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Gini index: 34.19 index (0-100)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Gini index: 34.24 index (0-100)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Gini index: 34.11 index (0-100)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Gini index: 33.97 index (0-100)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Gini index: 33.83 index (0-100)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Gini index: 33.66 index (0-100)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Gini index: 33.51 index (0-100)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Gini index: 33.46 index (0-100)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Gini index: 33.48 index (0-100)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Gini index: 33.51 index (0-100)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Gini index: 33.52 index (0-100)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [25.300000000000001, 26.100000000000001, 26.800000000000004, 26.400000000000002, 27.100000000000001, 28.100000000000005, 27.300000000000004, 27.699999999999999, 27.600000000000005, 27.600000000000005, 28.800000000000001, 28.399999999999999, 29.199999999999999, 29.599999999999998, 28.800000000000004, 29.999999999999996, 29.300000000000001, 28.899999999999999, 28.899999999999995],
      "text": ["Gini index: 25.3 index (0-100)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 26.1 index (0-100)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 26.8 index (0-100)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 26.4 index (0-100)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 27.1 index (0-100)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 28.1 index (0-100)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 27.3 index (0-100)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 27.7 index (0-100)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 27.6 index (0-100)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 27.6 index (0-100)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 28.8 index (0-100)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 28.4 index (0-100)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 29.2 index (0-100)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 29.6 index (0-100)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 28.8 index (0-100)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 30 index (0-100)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 29.3 index (0-100)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 28.9 index (0-100)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Gini index: 28.9 index (0-100)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [25.599999999999998, 24.899999999999999, 25.199999999999999, 25.899999999999999, 26.199999999999999, 25.199999999999996, 26.700000000000003, 27.199999999999996, 27.300000000000001, 27.800000000000004, 28.5, 28.399999999999999, 28.199999999999999, 28.199999999999999, 28.699999999999996, 28.199999999999999, 27.699999999999996, 27.5, 27.499999999999996],
      "text": ["Gini index: 25.6 index (0-100)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 24.9 index (0-100)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 25.2 index (0-100)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 25.9 index (0-100)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 26.2 index (0-100)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 25.2 index (0-100)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 26.7 index (0-100)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 27.2 index (0-100)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 27.3 index (0-100)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 27.8 index (0-100)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 28.5 index (0-100)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 28.4 index (0-100)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 28.2 index (0-100)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 28.2 index (0-100)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 28.7 index (0-100)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 28.2 index (0-100)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 27.7 index (0-100)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 27.5 index (0-100)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Gini index: 27.5 index (0-100)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [34.852345681215716, 34.256478970750479, 33.759874866116057, 33.660541695409549, 32.874426409542053, 33.766827342308602, 33.775046697206733, 34.66041850551813, 35.058230988349891, 35.159370034011985, 34.857164484981553, 34.659542126971807, 35.356349974953261, 35.154526165394955, 35.848600798154791, 35.148279728941411, 34.569873343650691, 35.167337364934156, 35.166967638764554],
      "text": ["Gini index: 34.85 index (0-100)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.26 index (0-100)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 33.76 index (0-100)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 33.66 index (0-100)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 32.87 index (0-100)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 33.77 index (0-100)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 33.78 index (0-100)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.66 index (0-100)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.06 index (0-100)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.16 index (0-100)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.86 index (0-100)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.66 index (0-100)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.36 index (0-100)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.15 index (0-100)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.85 index (0-100)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.15 index (0-100)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 34.57 index (0-100)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.17 index (0-100)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Gini index: 35.17 index (0-100)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [29.800000000000001, 29.800000000000001, 29, 29.999999999999996, 29.599999999999998, 29.300000000000004, 27.899999999999999, 27.800000000000001, 27.800000000000001, 27.600000000000001, 28.100000000000001, 28.600000000000001, 28.199999999999999, 28.199999999999999, 28.499999999999996, 28.100000000000001, 29.199999999999999, 26.000000000000004, 26],
      "text": ["Gini index: 29.8 index (0-100)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29.8 index (0-100)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29 index (0-100)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 30 index (0-100)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29.6 index (0-100)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29.3 index (0-100)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 27.9 index (0-100)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 27.8 index (0-100)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 27.8 index (0-100)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 27.6 index (0-100)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.1 index (0-100)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.6 index (0-100)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.2 index (0-100)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.2 index (0-100)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.5 index (0-100)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 28.1 index (0-100)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 29.2 index (0-100)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 26 index (0-100)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Gini index: 26 index (0-100)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [28.187591776805604, 30.487367812360283, 29.363756519117032, 28.220082772300405, 29.282118846613173, 28.58326628193484, 28.714592188113699, 28.493365284696683, 28.279411420874165, 27.810231195068376, 27.899649194075213, 28.246581707205962, 27.950083655583512, 27.800299678447089, 27.753672281838845, 27.614224207985302, 27.558412239642625, 26.383358680479116, 26.387401706441842],
      "text": ["Gini index: 28.19 index (0-100)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 30.49 index (0-100)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 29.36 index (0-100)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.22 index (0-100)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 29.28 index (0-100)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.58 index (0-100)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.71 index (0-100)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.49 index (0-100)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.28 index (0-100)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.81 index (0-100)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.9 index (0-100)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 28.25 index (0-100)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.95 index (0-100)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.8 index (0-100)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.75 index (0-100)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.61 index (0-100)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 27.56 index (0-100)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 26.38 index (0-100)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Gini index: 26.39 index (0-100)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [27.699999999999996, 27.899999999999999, 27.599999999999998, 28, 28.300000000000001, 27.800000000000001, 27.499999999999996, 27.699999999999996, 27.599999999999998, 27.099999999999998, 27.199999999999999, 26.799999999999997, 27.099999999999998, 27.100000000000001, 27.399999999999999, 27.299999999999997, 27.699999999999996, 27.099999999999998, 27.100000000000001],
      "text": ["Gini index: 27.7 index (0-100)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.9 index (0-100)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.6 index (0-100)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 28 index (0-100)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 28.3 index (0-100)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.8 index (0-100)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.5 index (0-100)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.7 index (0-100)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.6 index (0-100)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.1 index (0-100)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.2 index (0-100)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 26.8 index (0-100)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.1 index (0-100)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.1 index (0-100)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.4 index (0-100)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.3 index (0-100)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.7 index (0-100)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.1 index (0-100)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Gini index: 27.1 index (0-100)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [32.573728208215186, 33.302450702479646, 34.229437163080689, 34.750704029390185, 33.743352643598357, 33.429651404687064, 33.463784901068955, 33.860610334245862, 34.594122610720476, 36.109114159002708, 36.187702379088634, 35.780126017283969, 35.797431394428003, 34.783741176182673, 34.086665050095121, 32.878827435292642, 32.896417105802151, 33.393825426974068, 33.389434759520796],
      "text": ["Gini index: 32.57 index (0-100)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.3 index (0-100)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.23 index (0-100)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.75 index (0-100)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.74 index (0-100)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.43 index (0-100)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.46 index (0-100)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.86 index (0-100)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.59 index (0-100)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 36.11 index (0-100)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 36.19 index (0-100)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 35.78 index (0-100)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 35.8 index (0-100)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.78 index (0-100)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 34.09 index (0-100)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 32.88 index (0-100)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 32.9 index (0-100)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.39 index (0-100)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Gini index: 33.39 index (0-100)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Gini index (REMIND_54)",
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
    "b55c8f56da4": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c5f297970": {
      "y": {}
    }
  },
  "cur_data": "b55c8f56da4",
  "visdat": {
    "b55c8f56da4": ["function (y) ", "x"],
    "b55c5f297970": ["function (y) ", "x"]
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

  
