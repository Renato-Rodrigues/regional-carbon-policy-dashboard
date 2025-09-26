(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Demographics_Population_growth_line') 

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
      "y": [1.03, 1.02, 1.03, 1.03, 1.01, 0.98999999999999999, 1.01, 0.26000000000000001, 1.1499999999999999, 1.1399999999999999, 1.1200000000000001, 1.1000000000000001, 1.0800000000000001, 1.0600000000000001, 1.04, 1.02, 0.98999999999999988, 0.96999999999999986, 0.94999999999999996],
      "text": ["Population growth: 1.03 %<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.02 %<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.03 %<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.03 %<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.01 %<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 0.99 %<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.01 %<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 0.26 %<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.15 %<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.14 %<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.12 %<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.1 %<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.08 %<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.06 %<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.04 %<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 1.02 %<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 0.99 %<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 0.97 %<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Population growth: 0.95 %<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [0.73886688345119367, 0.69804015242842732, 0.67697842674911135, 0.69764397009594969, 0.95407129449496031, 1.2909247025396469, 1.2120909458448876, 0.99261802338973637, 1.0774626584051428, 1.0388198044249179, 1.1408927024953803, 1.2138735126617461, 1.1342688069931872, 1.0997374044659958, 0.98438743730755862, 0.8169683702821332, 0.77020720591424097, 0.76597865148026789, 0.78628237845218774],
      "text": ["Population growth: 0.74 %<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.7 %<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.68 %<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.7 %<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.95 %<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 1.29 %<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 1.21 %<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.99 %<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 1.08 %<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 1.04 %<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 1.14 %<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 1.21 %<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 1.13 %<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 1.1 %<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.98 %<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.82 %<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.77 %<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.77 %<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Population growth: 0.79 %<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [1.4520422697649444, 1.4050655366456015, 1.366435148413145, 1.3292792878848789, 1.303143397993531, 1.2817906738281177, 1.2618882454810501, 1.2352315118793225, 1.2273297912828183, 1.2508461527061456, 1.2411835510281519, 1.2187258547876179, 1.2165871997192756, 1.1675457959145676, 0.97800383421028281, 0.77340094995657638, 0.77543126793831874, 0.85096537957098095, 0.80796127100591886],
      "text": ["Population growth: 1.45 %<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.41 %<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.37 %<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.33 %<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.3 %<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.28 %<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.26 %<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.24 %<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.23 %<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.25 %<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.24 %<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.22 %<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.22 %<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 1.17 %<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 0.98 %<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 0.77 %<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 0.78 %<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 0.85 %<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Population growth: 0.81 %<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [2.0899999999999999, 2.0299999999999998, 1.98, 1.95, 1.9500000000000002, 1.96, 1.96, 2.0299999999999998, 2.2099999999999995, 2.2599999999999998, 2.3199999999999998, 2.3400000000000003, 2.2099999999999995, 2.0899999999999999, 1.99, 1.8999999999999999, 1.7899999999999998, 1.7300000000000002, 1.6600000000000001],
      "text": ["Population growth: 2.09 %<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 2.03 %<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.98 %<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.95 %<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.95 %<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.96 %<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.96 %<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 2.03 %<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 2.21 %<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 2.26 %<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 2.32 %<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 2.34 %<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 2.21 %<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 2.09 %<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.99 %<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.9 %<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.79 %<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.73 %<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Population growth: 1.66 %<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [0.90000000000000002, 0.93000000000000005, 0.93999999999999995, 1.01, 0.96999999999999997, 1.0800000000000001, 1.1399999999999999, 1.1100000000000001, 0.97999999999999998, 1.0900000000000001, 1.0600000000000001, 1.0099999999999998, 0.75, 1.1299999999999999, 1.1999999999999997, 1.4099999999999999, 1.4399999999999999, 1.0700000000000001, 0.57999999999999996],
      "text": ["Population growth: 0.9 %<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 0.93 %<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 0.94 %<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.01 %<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 0.97 %<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.08 %<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.14 %<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.11 %<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 0.98 %<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.09 %<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.06 %<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.01 %<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 0.75 %<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.13 %<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.2 %<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.41 %<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.44 %<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 1.07 %<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Population growth: 0.58 %<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [1.2890418041858742, 1.1414636085034913, 1.2046975905710593, 1.3279204059854819, 1.6699561616999437, 1.8079776681379869, 1.8845640772618824, 1.4857978826824167, 1.286659745687309, 1.5551238488758239, 1.5669500943923718, 1.5174268672241786, 1.5372863255627696, 1.6725221659979639, 1.7220191269012444, 1.5475845318914947, 1.5064240757581606, 1.398955473527784, 0.17812719543353722],
      "text": ["Population growth: 1.29 %<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.14 %<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.2 %<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.33 %<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.67 %<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.81 %<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.88 %<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.49 %<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.29 %<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.56 %<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.57 %<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.52 %<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.54 %<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.67 %<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.72 %<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.55 %<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.51 %<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 1.4 %<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Population growth: 0.18 %<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [1.4900000000000002, 1.47, 1.4300000000000002, 1.3600000000000001, 1.3200000000000003, 1.2699999999999998, 1.24, 1.3300000000000001, 1.4299999999999999, 1.3999999999999999, 1.3200000000000003, 1.24, 1.1699999999999999, 1.1299999999999999, 1.0800000000000001, 0.94999999999999984, 0.85999999999999999, 0.72999999999999998, 0.56000000000000005],
      "text": ["Population growth: 1.49 %<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.47 %<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.43 %<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.36 %<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.32 %<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.27 %<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.24 %<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.33 %<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.43 %<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.4 %<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.32 %<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.24 %<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.17 %<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.13 %<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 1.08 %<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 0.95 %<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 0.86 %<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 0.73 %<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Population growth: 0.56 %<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [0.58999999999999997, 0.58999999999999997, 0.68000000000000016, 0.81000000000000005, 1.03, 1.25, 1.2600000000000002, 1.25, 1.3, 1.3100000000000001, 1.21, 1.1299999999999999, 1, 0.88, 0.81000000000000005, 0.65999999999999992, 0.68000000000000005, 0.58999999999999997, 0.53000000000000003],
      "text": ["Population growth: 0.59 %<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 0.59 %<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 0.68 %<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 0.81 %<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 1.03 %<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 1.25 %<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 1.26 %<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 1.25 %<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 1.3 %<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 1.31 %<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 1.21 %<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 1.13 %<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 1 %<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 0.88 %<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 0.81 %<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 0.66 %<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 0.68 %<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 0.59 %<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Population growth: 0.53 %<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [1.1899999999999999, 1.1399999999999999, 1.1200000000000001, 1.0800000000000001, 1.03, 0.98999999999999988, 0.95000000000000007, 0.93999999999999995, 0.93000000000000016, 0.90000000000000002, 0.86999999999999988, 0.85999999999999999, 0.84999999999999998, 0.80999999999999994, 0.78999999999999992, 0.79000000000000015, 0.77000000000000002, 0.67000000000000015, 0.53000000000000003],
      "text": ["Population growth: 1.19 %<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 1.14 %<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 1.12 %<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 1.08 %<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 1.03 %<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.99 %<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.95 %<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.94 %<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.93 %<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.9 %<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.87 %<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.86 %<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.85 %<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.81 %<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.79 %<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.79 %<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.77 %<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.67 %<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Population growth: 0.53 %<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [-0.61664519918465099, -0.62242206967066449, -0.62914358752832544, -0.59917259694778535, -0.57392587019948427, -0.54406972051006752, -0.50142767343126227, -0.45959628205765218, -0.47738327981877088, -0.35972066028764804, -0.30909612734057362, -0.4384440462853163, -0.32633684371084465, -0.38689909762275304, -0.44588647274986626, -0.51062750071910057, -0.55750085530971738, -0.58508516726896997, -0.79060871467754013],
      "text": ["Population growth: -0.62 %<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.62 %<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.63 %<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.6 %<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.57 %<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.54 %<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.5 %<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Population growth: -0.46 %<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Population growth: -0.48 %<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.36 %<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.31 %<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.44 %<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.33 %<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.39 %<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.45 %<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.51 %<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.56 %<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.59 %<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Population growth: -0.79 %<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [0.52000000000000002, 0.40000000000000002, 0.20999999999999999, 0.53000000000000003, 0.51000000000000001, 0.7599999999999999, 0.51000000000000001, 0.5, 0.77000000000000002, 0.53000000000000003, 0.46000000000000008, 0.62999999999999989, 0.53000000000000003, 0.40000000000000008, 0.28000000000000003, 0.42999999999999999, 0.35000000000000003, 0.14000000000000001, -0.17999999999999999],
      "text": ["Population growth: 0.52 %<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.4 %<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.21 %<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.53 %<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.51 %<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.76 %<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.51 %<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.5 %<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.77 %<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.53 %<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.46 %<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.63 %<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.53 %<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.4 %<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.28 %<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.43 %<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.35 %<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: 0.14 %<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Population growth: -0.18 %<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [2.0199999999999996, 1.99, 1.9399999999999999, 1.8799999999999997, 1.8700000000000001, 1.8700000000000001, 1.8400000000000001, 1.8, 1.7800000000000002, 1.7400000000000002, 1.6899999999999999, 1.6200000000000003, 1.6700000000000002, 1.7700000000000002, 1.76, 1.6999999999999997, 1.6599999999999999, 1.6300000000000001, 1.4899999999999998],
      "text": ["Population growth: 2.02 %<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.99 %<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.94 %<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.88 %<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.87 %<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.87 %<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.84 %<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.8 %<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.78 %<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.74 %<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.69 %<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.62 %<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.67 %<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.77 %<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.76 %<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.7 %<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.66 %<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.63 %<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Population growth: 1.49 %<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [0.69639000773945459, 0.78932000317251261, 0.81728658092570128, 0.85353394665482507, 0.91721456022726655, 1.1647665322455207, 1.2401023371466329, 1.3808886453987606, 1.3707445891123002, 1.1197741384088373, 1.1924750953460126, 1.2598324507382381, 1.2879951188867655, 1.2736725081441302, 1.2093790332666359, 1.1980043453978166, 1.2335210717987615, 1.1920249011165149, 1.1376572878598592],
      "text": ["Population growth: 0.7 %<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Population growth: 0.79 %<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Population growth: 0.82 %<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Population growth: 0.85 %<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Population growth: 0.92 %<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Population growth: 1.16 %<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Population growth: 1.24 %<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Population growth: 1.38 %<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Population growth: 1.37 %<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Population growth: 1.12 %<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Population growth: 1.19 %<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Population growth: 1.26 %<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Population growth: 1.29 %<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Population growth: 1.27 %<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Population growth: 1.21 %<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Population growth: 1.2 %<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Population growth: 1.23 %<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Population growth: 1.19 %<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Population growth: 1.14 %<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [1.48, 1.4299999999999999, 1.3700000000000001, 1.3, 1.24, 1.1699999999999999, 1.1299999999999999, 1.1299999999999999, 1.0900000000000001, 1.04, 0.98999999999999999, 0.94999999999999996, 0.93999999999999984, 1.0700000000000001, 1.51, 1.8999999999999997, 1.8300000000000003, 1.47, 1.1399999999999999],
      "text": ["Population growth: 1.48 %<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.43 %<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.37 %<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.3 %<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.24 %<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.17 %<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.13 %<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.13 %<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.09 %<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.04 %<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 0.99 %<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 0.95 %<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 0.94 %<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.07 %<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.51 %<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.9 %<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.83 %<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.47 %<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Population growth: 1.14 %<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [2.7157572755810988, 2.7304064560033341, 2.7403649594618167, 2.7529222994607894, 2.7668088527989236, 2.771255437248731, 2.7674186720113072, 2.7629161362004693, 2.7175476588028684, 2.7071229160516603, 2.7316085976240339, 2.7452550251693011, 2.7479520906745365, 2.7866646668160211, 2.7845801126406795, 2.7170144633208748, 2.6848903056029796, 2.6493614704502115, 2.5826928068708672],
      "text": ["Population growth: 2.72 %<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.73 %<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.74 %<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.75 %<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.77 %<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.77 %<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.77 %<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.76 %<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.72 %<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.71 %<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.73 %<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.75 %<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.75 %<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.79 %<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.78 %<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.72 %<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.68 %<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.65 %<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Population growth: 2.58 %<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [-0.45000000000000001, -0.39999999999999997, -0.38, -0.33000000000000002, -0.17000000000000001, -0.040000000000000001, 0.029999999999999995, 0.040000000000000001, 0.080000000000000002, 0.17000000000000001, 0.21000000000000002, 0.22, 0.19, 0.16999999999999998, 0.11, -0.01, -0.050000000000000003, -0.23000000000000001, -0.42999999999999999],
      "text": ["Population growth: -0.45 %<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: -0.4 %<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: -0.38 %<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: -0.33 %<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: -0.17 %<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: -0.04 %<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: 0.03 %<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: 0.04 %<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: 0.08 %<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: 0.17 %<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: 0.21 %<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: 0.22 %<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: 0.19 %<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: 0.17 %<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: 0.11 %<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: -0.01 %<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: -0.05 %<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: -0.23 %<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Population growth: -0.43 %<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [4.2488322105803418, 2.5167076383554035, 2.2797882518434234, 2.4667239555978373, 1.2508942322238694, 1.3068714049610581, 2.0465843349094111, 1.7078252291728793, 2.0824273596522795, 2.2457090459147371, 1.9311451228088745, 2.1045353755820124, 1.9435319043071519, 1.8191004877614858, 2.0987483074889637, 2.1163948506557855, 2.1345372217373759, 2.5298093168605749, 2.5990389268379679],
      "text": ["Population growth: 4.25 %<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Population growth: 2.52 %<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Population growth: 2.28 %<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Population growth: 2.47 %<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Population growth: 1.25 %<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Population growth: 1.31 %<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Population growth: 2.05 %<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 1.71 %<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 2.08 %<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 2.25 %<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 1.93 %<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 2.1 %<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 1.94 %<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 1.82 %<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 2.1 %<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 2.12 %<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 2.13 %<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 2.53 %<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Population growth: 2.6 %<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [1.03, 1.02, 0.99999999999999989, 0.96999999999999997, 0.95999999999999996, 0.97999999999999998, 1.03, 1.0700000000000001, 1.0700000000000001, 1.0700000000000001, 1.0800000000000001, 1.0700000000000001, 1.04, 1.01, 0.97000000000000008, 0.93000000000000005, 0.90000000000000002, 0.90999999999999992, 0.83999999999999997],
      "text": ["Population growth: 1.03 %<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1.02 %<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1 %<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 0.97 %<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 0.96 %<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 0.98 %<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1.03 %<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1.07 %<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1.07 %<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1.07 %<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1.08 %<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1.07 %<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1.04 %<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 1.01 %<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 0.97 %<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 0.93 %<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 0.9 %<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 0.91 %<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Population growth: 0.84 %<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [2.1899999999999995, 2.2400000000000002, 2.1600000000000001, 2.1000000000000001, 2.1400000000000001, 2.1800000000000002, 2.23, 2.25, 2.1099999999999999, 1.8000000000000003, 1.54, 1.4099999999999999, 1.3, 1.1999999999999997, 1.3300000000000001, 1.54, 1.6099999999999999, 1.73, 1.8300000000000001],
      "text": ["Population growth: 2.19 %<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 2.24 %<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 2.16 %<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 2.1 %<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 2.14 %<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 2.18 %<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 2.23 %<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 2.25 %<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 2.11 %<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.8 %<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.54 %<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.41 %<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.3 %<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.2 %<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.33 %<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.54 %<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.61 %<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.73 %<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Population growth: 1.83 %<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [1.75, 1.6599999999999999, 1.52, 1.21, 1.05, 0.8899999999999999, 0.88, 1.1399999999999999, 1.22, 1.24, 1.27, 1.25, 1.1900000000000002, 1.23, 1.25, 1.1600000000000001, 1.1099999999999999, 1.1399999999999999, 1.1499999999999997],
      "text": ["Population growth: 1.75 %<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.66 %<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.52 %<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.21 %<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.05 %<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 0.89 %<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 0.88 %<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.14 %<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.22 %<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.24 %<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.27 %<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.25 %<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.19 %<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.23 %<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.25 %<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.16 %<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.11 %<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.14 %<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Population growth: 1.15 %<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [1.3400000000000001, 1.27, 1.26, 1.3, 1.3100000000000003, 1.3, 1.2700000000000002, 1.2499999999999998, 1.26, 1.26, 1.21, 1.1599999999999999, 1.1100000000000001, 1.0600000000000003, 1.01, 0.96999999999999997, 0.94000000000000006, 0.83999999999999997, 0.68999999999999984],
      "text": ["Population growth: 1.34 %<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.27 %<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.26 %<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.3 %<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.31 %<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.3 %<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.27 %<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.25 %<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.26 %<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.26 %<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.21 %<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.16 %<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.11 %<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.06 %<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 1.01 %<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 0.97 %<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 0.94 %<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 0.84 %<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Population growth: 0.69 %<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [1.4184497692848848, 1.4596069707605892, 1.4541765779260909, 1.46573916588956, 1.4969120923814294, 1.4564204280047521, 1.3299163180055251, 1.2835896516524623, 1.2805475245082665, 1.2794022922955786, 1.2068701663427386, 1.1691198722618117, 1.1301331070176526, 1.1156366705069873, 1.0391752738373692, 1.0591230864471217, 1.0254968724967077, 0.95256036576775649, 0.86767093630238512],
      "text": ["Population growth: 1.42 %<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.46 %<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.45 %<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.47 %<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.5 %<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.46 %<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.33 %<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.28 %<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.28 %<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.28 %<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.21 %<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.17 %<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.13 %<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.12 %<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.04 %<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.06 %<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 1.03 %<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Population growth: 0.95 %<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Population growth: 0.87 %<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [0.85999999999999999, 0.81999999999999984, 0.78000000000000003, 0.75, 0.7599999999999999, 0.75000000000000011, 0.72000000000000008, 0.67000000000000004, 0.65000000000000002, 0.64000000000000001, 0.60999999999999999, 0.55000000000000004, 0.47999999999999998, 0.44000000000000006, 0.40999999999999998, 0.32000000000000001, 0.25, 0.23999999999999999, 0.17999999999999999],
      "text": ["Population growth: 0.86 %<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.82 %<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.78 %<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.75 %<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.76 %<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.75 %<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.72 %<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.67 %<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.65 %<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.64 %<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.61 %<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.55 %<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.48 %<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.44 %<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.41 %<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.32 %<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.25 %<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.24 %<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Population growth: 0.18 %<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [0.20999999999999999, 0.029999999999999999, 0.01, 0.060000000000000005, 0.11000000000000001, 0.050000000000000003, -0.01, 0.02, -0.19000000000000003, -0.16000000000000003, -0.14000000000000001, -0.13, -0.11000000000000001, -0.050000000000000003, -0.080000000000000002, -0.13, -0.13999999999999999, -0.28999999999999992, -0.46000000000000002],
      "text": ["Population growth: 0.21 %<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: 0.03 %<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: 0.01 %<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: 0.06 %<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: 0.11 %<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: 0.05 %<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.01 %<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: 0.02 %<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.19 %<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.16 %<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.14 %<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.13 %<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.11 %<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.05 %<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.08 %<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.13 %<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.14 %<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.29 %<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Population growth: -0.46 %<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [2.0611524917392181, 2.138820235061341, 2.165039481203983, 2.1923908040454747, 2.2503486810723392, 2.2802846908920058, 2.3098337664550859, 2.2611959241588573, 1.9762221367569506, 1.9975704643466683, 2.2973004651277509, 2.4040181799993916, 2.4383353310575133, 2.4398712090097345, 2.4797165421754865, 2.4448793967528699, 2.3402095172254165, 2.278263493059812, 2.2506275980572283],
      "text": ["Population growth: 2.06 %<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Population growth: 2.14 %<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Population growth: 2.17 %<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.19 %<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.25 %<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.28 %<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.31 %<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.26 %<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 1.98 %<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2 %<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.3 %<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.4 %<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.44 %<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.44 %<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.48 %<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.44 %<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.34 %<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.28 %<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Population growth: 2.25 %<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [1.05, 1, 0.97999999999999987, 0.97999999999999987, 0.97999999999999998, 1, 1.03, 1.01, 0.98999999999999999, 0.97000000000000008, 0.96000000000000008, 1.01, 1.03, 1.1899999999999999, 1.5600000000000001, 1.8000000000000003, 1.79, 1.3600000000000001, 0.9900000000000001],
      "text": ["Population growth: 1.05 %<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1 %<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 0.98 %<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 0.98 %<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 0.98 %<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1 %<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1.03 %<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1.01 %<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 0.99 %<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 0.97 %<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 0.96 %<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1.01 %<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1.03 %<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1.19 %<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1.56 %<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1.8 %<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1.79 %<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 1.36 %<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Population growth: 0.99 %<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [1.3200000000000001, 1.3600000000000001, 1.3500000000000001, 1.3, 1.24, 1.2, 1.2600000000000002, 1.3300000000000001, 1.3300000000000001, 1.48, 1.7100000000000002, 1.9899999999999998, 1.9399999999999999, 1.7100000000000002, 1.3100000000000001, 0.87, 0.81000000000000005, 0.77999999999999992, 0.76000000000000001],
      "text": ["Population growth: 1.32 %<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.36 %<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.35 %<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.3 %<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.24 %<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.2 %<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.26 %<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.33 %<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.33 %<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.48 %<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.71 %<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.99 %<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.94 %<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.71 %<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 1.31 %<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 0.87 %<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 0.81 %<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 0.78 %<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Population growth: 0.76 %<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [2.9100000000000001, 2.8700000000000001, 2.8399999999999999, 2.8300000000000001, 2.8500000000000001, 2.8399999999999999, 2.8000000000000003, 2.8199999999999998, 2.8500000000000001, 2.8300000000000001, 2.75, 2.71, 2.7000000000000002, 2.7200000000000002, 2.7200000000000002, 2.6699999999999999, 2.6600000000000001, 2.6499999999999999, 2.6000000000000001],
      "text": ["Population growth: 2.91 %<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.87 %<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.84 %<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.83 %<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.85 %<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.84 %<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.8 %<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.82 %<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.85 %<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.83 %<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.75 %<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.71 %<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.7 %<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.72 %<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.72 %<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.67 %<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.66 %<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.65 %<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Population growth: 2.6 %<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [-0.53223312109393572, -0.43858951304908661, -0.44250917609244883, -0.42413282268556873, -0.82465465671261495, -0.92499848320859324, -0.49368502581404961, -0.43680049332405441, -0.42086716441122601, -0.44289053216412205, -0.34832121662873899, -0.36207345368369709, -0.45314879432357574, -0.51135598167797969, -0.56095983984933606, -0.48708655004435808, -0.38781507140387594, -0.40927896792928214, -0.96026829019516213],
      "text": ["Population growth: -0.53 %<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.44 %<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.44 %<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.42 %<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.82 %<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.92 %<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.49 %<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.44 %<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.42 %<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.44 %<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.35 %<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.36 %<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.45 %<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.51 %<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.56 %<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.49 %<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.39 %<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.41 %<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Population growth: -0.96 %<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [0.93000000000000005, 1.6200000000000001, 1.6100000000000001, 1.55, 1.45, 1.3700000000000001, 1.3600000000000001, 1.3999999999999999, 1.28, 1.28, 1.46, 1.8999999999999999, 2.2599999999999998, 1.8399999999999999, 1.4299999999999999, 1.3100000000000001, 1.1000000000000001, 0.83999999999999997, 0.71999999999999997],
      "text": ["Population growth: 0.93 %<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.62 %<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.61 %<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.55 %<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.45 %<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.37 %<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.36 %<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.4 %<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.28 %<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.28 %<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.46 %<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.9 %<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 2.26 %<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.84 %<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.43 %<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.31 %<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 1.1 %<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 0.84 %<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Population growth: 0.72 %<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [1.72, 1.6699999999999997, 1.6000000000000001, 1.5200000000000002, 1.47, 1.4199999999999999, 1.3899999999999997, 1.3799999999999999, 1.3600000000000001, 1.3300000000000001, 1.3, 1.24, 1.1899999999999999, 1.1899999999999999, 1.1599999999999997, 1.0900000000000001, 1.03, 0.95999999999999996, 0.79999999999999993],
      "text": ["Population growth: 1.72 %<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.67 %<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.6 %<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.52 %<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.47 %<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.42 %<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.39 %<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.38 %<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.36 %<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.33 %<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.3 %<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.24 %<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.19 %<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.19 %<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.16 %<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.09 %<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 1.03 %<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 0.96 %<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Population growth: 0.8 %<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [0.85999999999999999, 0.92999999999999994, 0.92000000000000004, 0.95999999999999996, 0.94999999999999984, 0.94999999999999996, 0.88, 0.83000000000000007, 0.72999999999999998, 0.72999999999999998, 0.68999999999999995, 0.72999999999999998, 0.73999999999999999, 0.71999999999999997, 0.63, 0.53000000000000003, 0.45999999999999996, 0.95999999999999985, 0.16],
      "text": ["Population growth: 0.86 %<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.93 %<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.92 %<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.96 %<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.95 %<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.95 %<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.88 %<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.83 %<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.73 %<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.73 %<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.69 %<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.73 %<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.74 %<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.72 %<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.63 %<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.53 %<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.46 %<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.96 %<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Population growth: 0.16 %<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [2.9400000000000004, 2.9799999999999995, 3.1199999999999997, 3.1900000000000004, 3.2200000000000006, 3.2000000000000002, 3.1899999999999999, 3.25, 3.3500000000000001, 3.3600000000000003, 3.4099999999999997, 3.4499999999999997, 3.3900000000000001, 3.4700000000000002, 3.4399999999999995, 3.2700000000000005, 3.1900000000000004, 3.2200000000000002, 3.2200000000000006],
      "text": ["Population growth: 2.94 %<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 2.98 %<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.12 %<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.19 %<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.22 %<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.2 %<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.19 %<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.25 %<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.35 %<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.36 %<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.41 %<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.45 %<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.39 %<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.47 %<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.44 %<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.27 %<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.19 %<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.22 %<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Population growth: 3.22 %<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [1.8100000000000001, 1.73, 1.6899999999999997, 1.6899999999999999, 1.8500000000000001, 1.6000000000000001, 0.89000000000000001, 0.46000000000000002, 0.35999999999999999, 0.059999999999999998, -0.33000000000000002, -0.29999999999999999, -0.080000000000000002, 0.080000000000000002, 0.22999999999999998, 0.44, 0.71999999999999997, 0.48999999999999994, 0.10999999999999999],
      "text": ["Population growth: 1.81 %<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 1.73 %<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 1.69 %<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 1.69 %<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 1.85 %<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 1.6 %<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.89 %<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.46 %<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.36 %<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.06 %<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: -0.33 %<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: -0.3 %<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: -0.08 %<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.08 %<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.23 %<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.44 %<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.72 %<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.49 %<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Population growth: 0.11 %<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [-0.070000000000000007, -0.060000000000000005, -0.039999999999999994, -0.059999999999999998, -0.050000000000000003, 0.01, 0.070000000000000007, -0.28999999999999998, 0.050000000000000003, 0, -0.059999999999999998, -0.070000000000000007, -0.070000000000000021, -0.040000000000000008, 0.01, 0, -0.02, -0.18000000000000002, -0.39999999999999997],
      "text": ["Population growth: -0.07 %<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.06 %<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.04 %<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.06 %<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.05 %<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: 0.01 %<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: 0.07 %<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.29 %<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: 0.05 %<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: 0 %<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.06 %<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.07 %<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.07 %<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.04 %<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: 0.01 %<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: 0 %<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.02 %<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.18 %<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Population growth: -0.4 %<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [2.6899999999999999, 2.7000000000000002, 2.6899999999999999, 2.7000000000000002, 2.71, 2.7200000000000002, 2.7300000000000004, 2.7399999999999998, 2.7600000000000002, 2.75, 2.7000000000000006, 2.6300000000000003, 2.54, 2.5099999999999998, 2.5299999999999998, 2.5, 2.4500000000000006, 2.4399999999999999, 2.4100000000000001],
      "text": ["Population growth: 2.69 %<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.7 %<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.69 %<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.7 %<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.71 %<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.72 %<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.73 %<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.74 %<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.76 %<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.75 %<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.7 %<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.63 %<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.54 %<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.51 %<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.53 %<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.5 %<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.45 %<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.44 %<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Population growth: 2.41 %<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [0.92000000000000004, 0.93999999999999984, 0.95000000000000007, 0.95999999999999985, 1.01, 1.1299999999999999, 1.1899999999999999, 1.1899999999999999, 1.26, 1.3300000000000001, 1.3600000000000001, 1.5799999999999998, 2.0699999999999998, 0.96999999999999997, 0.39000000000000001, 1.2300000000000002, 1.3, 1.22, 0.99999999999999989],
      "text": ["Population growth: 0.92 %<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 0.94 %<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 0.95 %<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 0.96 %<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.01 %<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.13 %<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.19 %<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.19 %<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.26 %<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.33 %<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.36 %<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.58 %<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 2.07 %<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 0.97 %<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 0.39 %<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.23 %<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.3 %<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1.22 %<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Population growth: 1 %<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [0.059999999999999998, -0.02, -0.059999999999999991, -0.11, -0.13, -0.19, -0.25, -0.14999999999999999, -1.8500000000000001, 0.19, 0.27000000000000002, 0.41999999999999998, 0.87000000000000011, 0.81000000000000005, 0.37000000000000005, 0.29999999999999999, 0.23000000000000001, 0.080000000000000002, 0.040000000000000008],
      "text": ["Population growth: 0.06 %<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: -0.02 %<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: -0.06 %<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: -0.11 %<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: -0.13 %<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: -0.19 %<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: -0.25 %<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: -0.15 %<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: -1.85 %<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.19 %<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.27 %<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.42 %<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.87 %<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.81 %<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.37 %<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.3 %<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.23 %<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.08 %<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Population growth: 0.04 %<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [-0.2884622410590223, -0.30427745004813012, -0.31655588580063443, -0.23623861191466933, -0.00586571025097003, 0.1406791130407925, -0.028699963265665457, -0.34166609414459981, -0.36237425410924867, -0.20713794749278988, -0.21175621774902931, -0.13694666592140795, -0.0725612878086066, -0.12071673292175926, -0.081345604238009656, 0.025690082876008036, 0.15118587470873221, 0.093691281412774705, -0.95623352608733658],
      "text": ["Population growth: -0.29 %<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.3 %<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.32 %<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.24 %<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.01 %<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: 0.14 %<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.03 %<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.34 %<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.36 %<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.21 %<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.21 %<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.14 %<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.07 %<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.12 %<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.08 %<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: 0.03 %<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: 0.15 %<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: 0.09 %<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Population growth: -0.96 %<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [1.6299999999999997, 1.8300000000000001, 2.1800000000000002, 2.7000000000000002, 2.8900000000000001, 2.04, 1.02, 0.54000000000000004, 0.44000000000000006, 0.42000000000000004, 0.53000000000000003, 0.72999999999999998, 0.93999999999999995, 1.1299999999999999, 1.0900000000000001, 1.24, 1.3700000000000003, 1.03, 0.94999999999999996],
      "text": ["Population growth: 1.63 %<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 1.83 %<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 2.18 %<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 2.7 %<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 2.89 %<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 2.04 %<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 1.02 %<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 0.54 %<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 0.44 %<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 0.42 %<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 0.53 %<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 0.73 %<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 0.94 %<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 1.13 %<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 1.09 %<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 1.24 %<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 1.37 %<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 1.03 %<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Population growth: 0.95 %<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [0.38, 0.23999999999999999, 0.19, 0.17999999999999999, 0.19999999999999998, 0.14000000000000001, 0.099999999999999992, 0.050000000000000003, -0.14999999999999999, -0.40999999999999998, -0.54999999999999993, -0.54000000000000004, -0.40999999999999998, -0.31999999999999995, -0.23999999999999996, -0.16, 0.02, 0.11, 0.27000000000000002],
      "text": ["Population growth: 0.38 %<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.24 %<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.19 %<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.18 %<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.2 %<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.14 %<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.1 %<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.05 %<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: -0.15 %<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: -0.41 %<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: -0.55 %<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: -0.54 %<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: -0.41 %<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: -0.32 %<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: -0.24 %<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: -0.16 %<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.02 %<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.11 %<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Population growth: 0.27 %<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [2.2999999999999998, 2.1800000000000002, 3.0600000000000001, 3.96, 3.9300000000000002, 3.8500000000000001, 3.7399999999999998, 3.21, 2.48, 2.2000000000000002, 2.1200000000000001, 2.02, 1.9199999999999999, 2.0099999999999993, 2.2999999999999998, 2.3799999999999999, 2.2799999999999998, 0.46999999999999997, -0.12999999999999998],
      "text": ["Population growth: 2.3 %<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 2.18 %<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 3.06 %<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 3.96 %<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 3.93 %<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 3.85 %<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 3.74 %<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 3.21 %<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 2.48 %<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 2.2 %<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 2.12 %<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 2.02 %<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 1.92 %<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 2.01 %<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 2.3 %<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 2.38 %<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 2.28 %<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: 0.47 %<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Population growth: -0.13 %<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [0.70999999999999996, 0.73999999999999999, 0.74999999999999989, 0.68999999999999995, 0.62000000000000011, 0.56000000000000005, 0.5099999999999999, 0.48999999999999999, 0.47999999999999993, 0.47999999999999993, 0.51999999999999991, 0.46999999999999992, 0.35999999999999993, 0.26000000000000001, 0.28999999999999998, 0.35999999999999993, 0.33999999999999997, 0.26999999999999996, 0.26000000000000001],
      "text": ["Population growth: 0.71 %<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.74 %<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.75 %<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.69 %<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.62 %<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.56 %<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.51 %<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.49 %<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.48 %<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.48 %<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.52 %<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.47 %<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.36 %<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.26 %<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.29 %<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.36 %<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.34 %<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.27 %<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Population growth: 0.26 %<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [0.4705315655301871, 0.57048051717509451, 0.69044548477711087, 0.74039311086185944, 0.78032211609280655, 0.79029598664859324, 0.76033688245767772, 0.78035194806003438, 0.78033248703222058, 0.70040138586089051, 0.67008487296826136, 0.73971343451515259, 0.78972284061141618, 0.75970168273544081, 0.67972636259730634, 0.60977521076629837, 0.55978214745090549, 0.36986456994602745, -0.079982802346765081],
      "text": ["Population growth: 0.47 %<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.57 %<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.69 %<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.74 %<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.78 %<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.79 %<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.76 %<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.78 %<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.78 %<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.7 %<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.67 %<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.74 %<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.79 %<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.76 %<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.68 %<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.61 %<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.56 %<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: 0.37 %<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Population growth: -0.08 %<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [0.48999999999999999, 0.62, 0.68000000000000005, 0.48999999999999999, 0.32000000000000001, 0.31, 0.26000000000000001, 0.23999999999999999, 0.34000000000000002, 0.46000000000000002, 0.58999999999999997, 0.77999999999999992, 1.1200000000000001, 1.0800000000000003, 0.68999999999999995, 0.48999999999999994, 0.44000000000000006, 0.41999999999999998, 0.44],
      "text": ["Population growth: 0.49 %<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.62 %<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.68 %<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.49 %<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.32 %<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.31 %<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.26 %<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.24 %<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.34 %<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.46 %<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.59 %<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.78 %<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 1.12 %<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 1.08 %<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.69 %<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.49 %<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.44 %<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.42 %<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Population growth: 0.44 %<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [0.61649318788639229, 0.59174947280515522, 0.58998975977773405, 0.56121456018616855, 0.52261148496569365, 0.51133054186323124, 0.49938485673169009, 0.48215161133164569, 0.55139121825634629, 0.68277212998234826, 0.66907407293946919, 0.6308939943373657, 0.58199298065952421, 0.57085651447281294, 0.61142878445435112, 0.47242032176566046, 0.35281783377070342, 0.23763420736233873, 0.085468267364358322],
      "text": ["Population growth: 0.62 %<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.59 %<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.59 %<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.56 %<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.52 %<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.51 %<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.5 %<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.48 %<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.55 %<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.68 %<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.67 %<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.63 %<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.58 %<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.57 %<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.61 %<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.47 %<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.35 %<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.24 %<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Population growth: 0.09 %<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [2.6829003891837861, 2.691687929552673, 2.9603831362773274, 3.4248241778478974, 3.745812809328974, 3.700610348457432, 3.4824117718575418, 3.0211945232592683, 2.8495938088109063, 2.7475928761712161, 2.667963960025201, 2.4556013615177608, 2.1459143097200677, 2.0040835068874356, 1.8293013097633799, 2.0336619759047139, 2.1612659368526717, 1.8311599368864997, 1.6888189005549865],
      "text": ["Population growth: 2.68 %<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Population growth: 2.69 %<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Population growth: 2.96 %<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Population growth: 3.42 %<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Population growth: 3.75 %<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Population growth: 3.7 %<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Population growth: 3.48 %<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Population growth: 3.02 %<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Population growth: 2.85 %<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Population growth: 2.75 %<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Population growth: 2.67 %<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Population growth: 2.46 %<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Population growth: 2.15 %<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Population growth: 2 %<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Population growth: 1.83 %<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Population growth: 2.03 %<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Population growth: 2.16 %<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Population growth: 1.83 %<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Population growth: 1.69 %<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [0.37, 0.39000000000000001, 0.40000000000000002, 0.56000000000000005, 0.73999999999999999, 0.78000000000000003, 0.84999999999999998, 0.84999999999999998, 0.76000000000000001, 0.73999999999999999, 0.84999999999999998, 0.9900000000000001, 1.0600000000000001, 1.26, 1.3500000000000003, 1.1599999999999999, 1.01, 0.71999999999999997, 0.59999999999999998],
      "text": ["Population growth: 0.37 %<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.39 %<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.4 %<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.56 %<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.74 %<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.78 %<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.85 %<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.85 %<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.76 %<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.74 %<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.85 %<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.99 %<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 1.06 %<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 1.26 %<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 1.35 %<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 1.16 %<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 1.01 %<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.72 %<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Population growth: 0.6 %<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [0.27847840788613842, 0.26878433466772855, 0.28309551883018208, 0.32753285279094918, 0.43701468796780146, 0.58570781145573358, 0.53562167998412036, 0.43582667243233963, 0.40602610375477266, 0.37683189644854853, 0.41684787940622742, 0.50651162713068021, 0.71008530656704083, 0.78522253150771426, 0.64707619839309727, 0.50811481779697421, 0.36927083842960456, 0.30000675903619572, 0.43423990634255427],
      "text": ["Population growth: 0.28 %<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.27 %<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.28 %<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.33 %<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.44 %<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.59 %<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.54 %<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.44 %<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.41 %<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.38 %<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.42 %<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.51 %<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.71 %<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.79 %<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.65 %<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.51 %<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.37 %<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.3 %<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Population growth: 0.43 %<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [0.44151941306268727, 0.65013816199761754, 0.49103771897975707, 0.30041535057463631, 0.49896323281927246, 0.65993089029647622, 0.46201012716945783, 0.31124994193100658, 0.17174037548542151, 0.27441325492628427, 1.1616853317384306, 0.92766570225797196, -0.081885239605604426, -0.15166137161829407, -0.12782929950258923, -0.16071836961606165, -1.107487940484859, -0.46679233824268779, -0.54974258256372843],
      "text": ["Population growth: 0.44 %<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.65 %<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.49 %<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.3 %<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.5 %<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.66 %<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.46 %<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.31 %<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.17 %<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.27 %<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 1.16 %<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: 0.93 %<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: -0.08 %<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: -0.15 %<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: -0.13 %<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: -0.16 %<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: -1.11 %<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: -0.47 %<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Population growth: -0.55 %<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [0.46999999999999997, 0.34999999999999998, 0.23000000000000001, 0.16, 0.22, 0.39000000000000001, 0.51000000000000001, 0.51000000000000012, 0.46999999999999997, 0.36999999999999994, 0.28999999999999998, 0.36000000000000004, 0.44, 0.53000000000000003, 0.58999999999999986, 0.57999999999999996, 0.66000000000000003, 0.56000000000000005, 0.52000000000000002],
      "text": ["Population growth: 0.47 %<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.35 %<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.23 %<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.16 %<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.22 %<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.39 %<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.51 %<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.51 %<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.47 %<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.37 %<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.29 %<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.36 %<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.44 %<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.53 %<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.59 %<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.58 %<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.66 %<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.56 %<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Population growth: 0.52 %<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [0.45336829592594519, 0.47168621921106191, 0.59165425915646108, 0.70031350212942223, 0.76500856092456349, 0.83363482903210517, 0.84627761443053118, 0.950902886629022, 1.341264626801058, 0.7012075775326051, 0.55543128304613765, 0.53078608962433504, 0.66560555902666374, 0.59060840717992691, 0.49161851478186447, 0.53425726655346351, 0.61270648289893259, 0.49423848159379763, 0.52496916104918101],
      "text": ["Population growth: 0.45 %<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.47 %<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.59 %<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.7 %<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.77 %<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.83 %<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.85 %<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.95 %<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 1.34 %<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.7 %<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.56 %<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.53 %<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.67 %<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.59 %<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.49 %<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.53 %<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.61 %<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.49 %<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Population growth: 0.52 %<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [0.23999999999999999, 0.28999999999999998, 0.34000000000000002, 0.38000000000000006, 0.42999999999999999, 0.46999999999999992, 0.47999999999999993, 0.45999999999999996, 0.46000000000000002, 0.47999999999999993, 0.46000000000000002, 0.40999999999999998, 0.33000000000000002, 0.28999999999999998, 0.22999999999999998, 0.13, 0.10999999999999999, 0.14000000000000001, 0.20999999999999996],
      "text": ["Population growth: 0.24 %<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.29 %<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.34 %<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.38 %<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.43 %<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.47 %<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.48 %<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.46 %<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.46 %<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.48 %<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.46 %<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.41 %<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.33 %<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.29 %<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.23 %<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.13 %<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.11 %<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.14 %<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Population growth: 0.21 %<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [0.37324894405105447, 0.38347211345913179, 0.41926610590208396, 0.42749302927258304, 0.38097865085325389, 0.39910630381612361, 0.38985839431426056, 0.27179234048514522, -0.0096290527639634697, -0.39301790243208906, -0.57116124676169588, -0.51796403222235032, -0.50503501673742157, -0.28509568609490171, -0.087199418034243456, -0.088844035286358244, -0.010351530734737191, -0.11016810148217886, -0.42031028435918488],
      "text": ["Population growth: 0.37 %<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: 0.38 %<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: 0.42 %<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: 0.43 %<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: 0.38 %<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: 0.4 %<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: 0.39 %<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: 0.27 %<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.01 %<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.39 %<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.57 %<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.52 %<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.51 %<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.29 %<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.09 %<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.09 %<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.01 %<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.11 %<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Population growth: -0.42 %<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Population growth (REMIND_54)",
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
      "tickvals": [0, 25, 50, 75, 100],
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
        "text": "%",
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
    "b55c41eb24fa": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c63c40a6": {
      "y": {}
    }
  },
  "cur_data": "b55c41eb24fa",
  "visdat": {
    "b55c41eb24fa": ["function (y) ", "x"],
    "b55c63c40a6": ["function (y) ", "x"]
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

  
