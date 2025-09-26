(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Resources_Land_area_line') 

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
      "y": [41639.549339708537, 41642.099617477434, 41660.728331172068, 41698.221503861874, 41735.226274049761, 41749.149513496683, 41729.066079432239, 41701.451366626512, 41683.726451681257, 41671.039613206907, 41665.975342522826, 41664.483312314107, 41662.230852861125, 41669.773095342323, 41702.218778649025, 41769.764483965497, 41804.555105931242, 41825.550951282188, 41846.609831149828],
      "text": ["Land area: 41639.55 sq  km<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41642.1 sq  km<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41660.73 sq  km<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41698.22 sq  km<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41735.23 sq  km<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41749.15 sq  km<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41729.07 sq  km<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41701.45 sq  km<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41683.73 sq  km<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41671.04 sq  km<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41665.98 sq  km<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41664.48 sq  km<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41662.23 sq  km<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41669.77 sq  km<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41702.22 sq  km<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41769.76 sq  km<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41804.56 sq  km<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41825.55 sq  km<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Land area: 41846.61 sq  km<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [977515.75641745632, 975771.98120758065, 974388.800532541, 972789.50243019732, 971048.66506362299, 969321.83054957876, 967757.93385583232, 966398.4054389149, 965216.35229509405, 963835.05106108706, 962452.92000890814, 961349.00531757704, 960455.27848030801, 959567.95118895068, 958768.65603323351, 958348.24175281846, 957322.96328788949, 955507.09950572986, 953583.68410810921],
      "text": ["Land area: 977515.76 sq  km<br>Period: 2003<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 975771.98 sq  km<br>Period: 2004<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 974388.8 sq  km<br>Period: 2005<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 972789.5 sq  km<br>Period: 2006<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 971048.67 sq  km<br>Period: 2007<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 969321.83 sq  km<br>Period: 2008<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 967757.93 sq  km<br>Period: 2009<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 966398.41 sq  km<br>Period: 2010<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 965216.35 sq  km<br>Period: 2011<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 963835.05 sq  km<br>Period: 2012<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 962452.92 sq  km<br>Period: 2013<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 961349.01 sq  km<br>Period: 2014<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 960455.28 sq  km<br>Period: 2015<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 959567.95 sq  km<br>Period: 2016<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 958768.66 sq  km<br>Period: 2017<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 958348.24 sq  km<br>Period: 2018<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 957322.96 sq  km<br>Period: 2019<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 955507.1 sq  km<br>Period: 2020<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Land area: 953583.68 sq  km<br>Period: 2021<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [8965590, 8965590, 8965590, 8965590, 8965590, 8965590, 8965590, 8965590.0000000019, 8965590, 8965590, 8965590, 8965590, 8965590, 8965590, 8965590, 8965590, 8965590, 8965590, 8788699.9999999981],
      "text": ["Land area: 8965590 sq  km<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8965590 sq  km<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Land area: 8788700 sq  km<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [1327306.914995173, 1327721.3080892083, 1328385.1001437027, 1329259.5578427368, 1330490.43146369, 1332222.3255731207, 1334280.0765070959, 1335774.1333293382, 1336008.4922334258, 1266928.8513917464, 1267906.0210059751, 1269308.9001815491, 1271228.030302624, 1273168.0332497056, 1275472.5560804899, 1277873.8162631353, 1279877.6743753871, 1281634.5584939718, 1283475.6453075414],
      "text": ["Land area: 1327306.91 sq  km<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Land area: 1327721.31 sq  km<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Land area: 1328385.1 sq  km<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1329259.56 sq  km<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1330490.43 sq  km<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1332222.33 sq  km<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1334280.08 sq  km<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1335774.13 sq  km<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1336008.49 sq  km<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1266928.85 sq  km<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1267906.02 sq  km<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1269308.9 sq  km<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1271228.03 sq  km<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1273168.03 sq  km<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1275472.56 sq  km<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1277873.82 sq  km<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1279877.67 sq  km<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1281634.56 sq  km<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Land area: 1283475.65 sq  km<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [6423503.0048518777, 6419150.4735070746, 6420087.6374897631, 6421463.7796277395, 6430785.9165268131, 6442766.1953203119, 6453691.0430032061, 6458244.522487551, 6464644.6626257878, 6476788.1652994389, 6486381.498649721, 6484690.2210225603, 6478695.7852926692, 6479928.3523008581, 6475450.7771309242, 6472453.7354745269, 6471302.9775924888, 6461372.9789159223, 6458571.7978845071],
      "text": ["Land area: 6423503 sq  km<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6419150.47 sq  km<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6420087.64 sq  km<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6421463.78 sq  km<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6430785.92 sq  km<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6442766.2 sq  km<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6453691.04 sq  km<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6458244.52 sq  km<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6464644.66 sq  km<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6476788.17 sq  km<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6486381.5 sq  km<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6484690.22 sq  km<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6478695.79 sq  km<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6479928.35 sq  km<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6475450.78 sq  km<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6472453.74 sq  km<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6471302.98 sq  km<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6461372.98 sq  km<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Land area: 6458571.8 sq  km<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [1943950, 1943950, 1943950, 1943949.9999999998, 1943950.0000000002, 1943949.9999999998, 1943949.9999999998, 1943950.0000000002, 1943950, 1943950, 1943950, 1943949.9999999998, 1943950, 1943950.0000000002, 1943949.9999999998, 1943950, 1943950, 1943950, 1943949.9999999998],
      "text": ["Land area: 1943950 sq  km<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Land area: 1943950 sq  km<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [365051.8532072893, 365051.87289476424, 365052.07191706623, 365051.42019946646, 365051.23341152701, 365051.47822810902, 365051.77493291005, 365052.06476461084, 365054.53588019829, 365057.00557440287, 364938.31191601936, 364925.38843961066, 365010.15367320587, 364966.76040792227, 364945.21204131341, 364931.38786173187, 364918.58167063631, 364110.99686405872, 364096.93114493409],
      "text": ["Land area: 365051.85 sq  km<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365051.87 sq  km<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365052.07 sq  km<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365051.42 sq  km<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365051.23 sq  km<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365051.48 sq  km<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365051.77 sq  km<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365052.06 sq  km<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365054.54 sq  km<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365057.01 sq  km<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 364938.31 sq  km<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 364925.39 sq  km<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 365010.15 sq  km<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 364966.76 sq  km<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 364945.21 sq  km<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 364931.39 sq  km<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 364918.58 sq  km<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 364111 sq  km<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Land area: 364096.93 sq  km<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [8358139.9999999991, 8358140.0000000009, 8358139.9999999991, 8358140, 8358139.9999999991, 8358140, 8358140.0000000009, 8358139.9999999991, 8358140, 8358140, 8358140, 8358140, 8358140, 8358140, 8358140, 8358140.0000000009, 8358139.9999999991, 8358140.0000000009, 8358139.9999999991],
      "text": ["Land area: 8358140 sq  km<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Land area: 8358140 sq  km<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [396609.77857291215, 396244.17289056402, 395865.35002353799, 395657.30934041186, 395750.04433217691, 395836.67546734295, 396134.66313273547, 396471.48459864059, 396899.52530457987, 397271.35724273714, 397577.61405248957, 397625.78060089366, 397797.49117835023, 398011.44088372466, 398163.92296550068, 398323.65245058859, 398463.57593459025, 398080.68474809063, 398195.57449159859],
      "text": ["Land area: 396609.78 sq  km<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 396244.17 sq  km<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 395865.35 sq  km<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 395657.31 sq  km<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 395750.04 sq  km<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 395836.68 sq  km<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 396134.66 sq  km<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Land area: 396471.48 sq  km<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Land area: 396899.53 sq  km<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 397271.36 sq  km<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 397577.61 sq  km<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 397625.78 sq  km<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 397797.49 sq  km<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 398011.44 sq  km<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 398163.92 sq  km<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 398323.65 sq  km<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 398463.58 sq  km<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 398080.68 sq  km<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Land area: 398195.57 sq  km<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [96800, 96820, 96850.000000000015, 96880.000000000015, 96920, 96990, 97060, 97199.999999999985, 97190, 97309.999999999985, 97426, 97430, 97445, 97489, 97510, 97520.000000000015, 97600, 97600.000000000015, 97600],
      "text": ["Land area: 96800 sq  km<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 96820 sq  km<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 96850 sq  km<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 96880 sq  km<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 96920 sq  km<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 96990 sq  km<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97060 sq  km<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97200 sq  km<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97190 sq  km<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97310 sq  km<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97426 sq  km<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97430 sq  km<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97445 sq  km<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97489 sq  km<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97510 sq  km<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97520 sq  km<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97600 sq  km<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97600 sq  km<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Land area: 97600 sq  km<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [637190.79957790719, 636986.67437855608, 637121.19643718202, 637677.45902261161, 638440.09579491615, 638934.96659538534, 639719.44511873915, 641212.58971677872, 642755.75158435991, 644204.23786567873, 645602.12605989166, 646968.59174682805, 649610.41466379119, 651194.39754540881, 653030.81471055956, 654725.82903290435, 656220.08386280492, 657800.44950663764, 659351.54984743882],
      "text": ["Land area: 637190.8 sq  km<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Land area: 636986.67 sq  km<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Land area: 637121.2 sq  km<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Land area: 637677.46 sq  km<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Land area: 638440.1 sq  km<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Land area: 638934.97 sq  km<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Land area: 639719.45 sq  km<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Land area: 641212.59 sq  km<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Land area: 642755.75 sq  km<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Land area: 644204.24 sq  km<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Land area: 645602.13 sq  km<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Land area: 646968.59 sq  km<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Land area: 649610.41 sq  km<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Land area: 651194.4 sq  km<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Land area: 653030.81 sq  km<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Land area: 654725.83 sq  km<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Land area: 656220.08 sq  km<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Land area: 657800.45 sq  km<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Land area: 659351.55 sq  km<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [16380980, 16381230, 16381390, 16377739.999999998, 16377740, 16376870, 16376870, 16376869.999999998, 16376870.000000002, 16376870, 16376870.000000002, 16376870, 16376870, 16376869.999999998, 16376870.000000002, 16376870, 16376870, 16376870.000000002, 16376869.999999998],
      "text": ["Land area: 16380980 sq  km<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16381230 sq  km<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16381390 sq  km<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16377740 sq  km<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16377740 sq  km<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Land area: 16376870 sq  km<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [365661.71421531588, 365407.38167379034, 365717.57230251102, 365327.21268891537, 364760.26981567737, 364136.85126301215, 363621.70515733829, 363344.19602799893, 362956.44300890143, 362567.24681231577, 362647.80383342871, 362366.58659103542, 361970.04318482673, 361552.34564143704, 361236.16998218629, 360897.39329762623, 360587.78765519836, 360354.06278054742, 360245.80465077347],
      "text": ["Land area: 365661.71 sq  km<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 365407.38 sq  km<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 365717.57 sq  km<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 365327.21 sq  km<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 364760.27 sq  km<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 364136.85 sq  km<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 363621.71 sq  km<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 363344.2 sq  km<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 362956.44 sq  km<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 362567.25 sq  km<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 362647.8 sq  km<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 362366.59 sq  km<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 361970.04 sq  km<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 361552.35 sq  km<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 361236.17 sq  km<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 360897.39 sq  km<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 360587.79 sq  km<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Land area: 360354.06 sq  km<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Land area: 360245.8 sq  km<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [1877519, 1877519.0000000002, 1877519, 1877519, 1877519, 1877519, 1877519.0000000002, 1877518.9999999998, 1877519, 1877519, 1877519, 1877519, 1877519, 1877519, 1877519, 1877518.9999999998, 1877519.0000000002, 1877519, 1892556],
      "text": ["Land area: 1877519 sq  km<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1877519 sq  km<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Land area: 1892556 sq  km<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [463983.49540521594, 465850.93813943933, 467790.33002627402, 469935.35520947853, 472325.0041055021, 474919.11462994531, 477593.80348013045, 480163.07341044309, 482482.92111822788, 484352.54273128061, 485789.53195328213, 487088.65924928122, 488156.57514568535, 489028.79325039987, 490205.84597809112, 491716.8950742851, 493096.1966349344, 494503.74625612894, 495985.08045661746],
      "text": ["Land area: 463983.5 sq  km<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Land area: 465850.94 sq  km<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Land area: 467790.33 sq  km<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Land area: 469935.36 sq  km<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Land area: 472325 sq  km<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Land area: 474919.11 sq  km<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Land area: 477593.8 sq  km<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 480163.07 sq  km<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 482482.92 sq  km<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 484352.54 sq  km<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 485789.53 sq  km<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 487088.66 sq  km<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 488156.58 sq  km<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 489028.79 sq  km<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 490205.85 sq  km<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 491716.9 sq  km<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 493096.2 sq  km<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 494503.75 sq  km<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Land area: 495985.08 sq  km<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [364500, 364500.00000000006, 364500, 364500, 364500, 364500, 364500, 364500, 364500, 364500, 364500.00000000006, 364500, 364500, 364500.00000000006, 364500.00000000006, 364499.99999999994, 364500, 364500, 364500],
      "text": ["Land area: 364500 sq  km<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Land area: 364500 sq  km<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630, 769630],
      "text": ["Land area: 769630 sq  km<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Land area: 769630 sq  km<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [152814.16876253064, 152709.8475633717, 152515.0798335635, 152354.73093703881, 151816.068284701, 151281.75691823661, 151276.048988364, 151128.65446307472, 151109.36974466915, 151022.10760887645, 151018.52500762907, 151214.07599733752, 151226.97421939025, 151203.97263005827, 151224.35116709248, 151174.58621875208, 151083.07225499375, 150990.59653649945, 150896.44565283056],
      "text": ["Land area: 152814.17 sq  km<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 152709.85 sq  km<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 152515.08 sq  km<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 152354.73 sq  km<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151816.07 sq  km<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151281.76 sq  km<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151276.05 sq  km<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151128.65 sq  km<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151109.37 sq  km<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151022.11 sq  km<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151018.53 sq  km<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151214.08 sq  km<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151226.97 sq  km<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151203.97 sq  km<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151224.35 sq  km<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151174.59 sq  km<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 151083.07 sq  km<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 150990.6 sq  km<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Land area: 150896.45 sq  km<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [418213.75782279484, 419150.04119780642, 420034.51154649351, 420903.37459953059, 422047.92719342007, 422698.62859707867, 423094.81192656542, 424449.7947737425, 424652.65551531466, 425210.29447265994, 425348.36448098317, 425495.33241676824, 425251.69859275507, 425415.31520371744, 425691.25156664546, 426098.22282751964, 426488.41503328923, 426707.44789010711, 426539.56221959624],
      "text": ["Land area: 418213.76 sq  km<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 419150.04 sq  km<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 420034.51 sq  km<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 420903.37 sq  km<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 422047.93 sq  km<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 422698.63 sq  km<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 423094.81 sq  km<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 424449.79 sq  km<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 424652.66 sq  km<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 425210.29 sq  km<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 425348.36 sq  km<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 425495.33 sq  km<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 425251.7 sq  km<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 425415.32 sq  km<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 425691.25 sq  km<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 426098.22 sq  km<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 426488.42 sq  km<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 426707.45 sq  km<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Land area: 426539.56 sq  km<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [1628760, 1628759.9999999998, 1628760, 1628759.9999999998, 1628760, 1628760, 1628760.0000000002, 1628760, 1628760, 1628760, 1628760.0000000002, 1628760, 1628760, 1628760, 1622500.0000000002, 1622500, 1622500, 1622500.0000000002, 1622500],
      "text": ["Land area: 1628760 sq  km<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1628760 sq  km<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1622500 sq  km<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1622500 sq  km<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1622500 sq  km<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1622500 sq  km<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Land area: 1622500 sq  km<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [2973189.9999999995, 2973190, 2973190, 2973190, 2973190, 2973190, 2973190, 2973190, 2973190, 2973190, 2973190, 2973190, 2973190, 2973190, 2973189.9999999995, 2973190, 2973190, 2973190, 2973190],
      "text": ["Land area: 2973190 sq  km<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Land area: 2973190 sq  km<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "y": [9161920, 9161920, 9161920, 9161920, 9161920, 9147420, 9147420, 9147420, 9147420, 9147420, 9147420, 9147420, 9147420, 9147420, 9147420, 9147420, 9147420, 9147420, 9147420],
      "text": ["Land area: 9161920 sq  km<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9161920 sq  km<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9161920 sq  km<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9161920 sq  km<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9161920 sq  km<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Land area: 9147420 sq  km<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [306240, 306330, 306330, 306320, 306320, 306300, 306280, 306280, 306230, 306220, 306210, 306190, 306190, 306190, 306190, 306169.99999999994, 306110, 306130, 306100],
      "text": ["Land area: 306240 sq  km<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306330 sq  km<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306330 sq  km<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306320 sq  km<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306320 sq  km<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306300 sq  km<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306280 sq  km<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306280 sq  km<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306230 sq  km<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306220 sq  km<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306210 sq  km<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306190 sq  km<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306190 sq  km<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306190 sq  km<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306190 sq  km<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306170 sq  km<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306110 sq  km<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306130 sq  km<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Land area: 306100 sq  km<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [782373.49932273407, 798292.65259182849, 799081.63042920292, 799860.43102702976, 800543.52789278864, 801147.1339313162, 801797.55072015629, 802695.76581950823, 803885.21434816369, 805220.20982316695, 806636.64685627015, 807920.33986767009, 809127.03400999773, 810675.46971124678, 812383.12378064997, 813680.50104169338, 814694.61713750428, 815863.31574268534, 817162.7458831307],
      "text": ["Land area: 782373.5 sq  km<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 798292.65 sq  km<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 799081.63 sq  km<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 799860.43 sq  km<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 800543.53 sq  km<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 801147.13 sq  km<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 801797.55 sq  km<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 802695.77 sq  km<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 803885.21 sq  km<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 805220.21 sq  km<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 806636.65 sq  km<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 807920.34 sq  km<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 809127.03 sq  km<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 810675.47 sq  km<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 812383.12 sq  km<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 813680.5 sq  km<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 814694.62 sq  km<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 815863.32 sq  km<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Land area: 817162.75 sq  km<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213090, 1213089.9999999998, 1213090, 1213090],
      "text": ["Land area: 1213090 sq  km<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Land area: 1213090 sq  km<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [348810, 348769.99999999994, 348760, 348720, 348670, 348630, 348610.00000000006, 348570, 348559.99999999994, 348540, 348880, 348900, 348860.00000000006, 349360, 349370, 349380, 349390, 349390, 349390],
      "text": ["Land area: 348810 sq  km<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348770 sq  km<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348760 sq  km<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348720 sq  km<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348670 sq  km<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348630 sq  km<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348610 sq  km<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348570 sq  km<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348560 sq  km<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348540 sq  km<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348880 sq  km<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348900 sq  km<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 348860 sq  km<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 349360 sq  km<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 349370 sq  km<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 349380 sq  km<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 349390 sq  km<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 349390 sq  km<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Land area: 349390 sq  km<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "y": [64517.001086732795, 64526.283895519278, 64548.498176032357, 64573.792561422903, 64617.684983245606, 64666.019626072222, 64701.089114407034, 64723.833032245675, 64744.565396899605, 64757.313850123297, 64824.402620039837, 64829.35193027262, 64836.545160067108, 64846.426093940718, 64817.212649703077, 64829.819848095074, 64841.889043455601, 64848.607559411677, 64742.328588556382],
      "text": ["Land area: 64517 sq  km<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64526.28 sq  km<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64548.5 sq  km<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64573.79 sq  km<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64617.68 sq  km<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64666.02 sq  km<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64701.09 sq  km<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64723.83 sq  km<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64744.57 sq  km<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64757.31 sq  km<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64824.4 sq  km<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64829.35 sq  km<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64836.55 sq  km<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64846.43 sq  km<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64817.21 sq  km<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64829.82 sq  km<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64841.89 sq  km<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64848.61 sq  km<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Land area: 64742.33 sq  km<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890, 68890.000000000015, 68890, 68890],
      "text": ["Land area: 68890 sq  km<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Land area: 68890 sq  km<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [2149690, 2149690, 2149690, 2149690, 2149690, 2149690, 2149690, 2149690, 2149690, 2149690, 2149690, 2149690, 2149690, 2149689.9999999995, 2149690, 2149690, 2149690, 2149690, 2149690],
      "text": ["Land area: 2149690 sq  km<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Land area: 2149690 sq  km<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [276884.28483485605, 276961.92153343238, 277043.20600203291, 277064.24398759182, 277241.90377779544, 277305.10947159718, 277492.6860688302, 277735.22204012022, 277949.67194547842, 278183.93010513607, 278455.42369178421, 278747.13223970792, 278932.01127017476, 279189.7361970747, 279589.55869986844, 279965.87407096324, 280327.20313024754, 280572.90343130007, 280656.46115144511],
      "text": ["Land area: 276884.28 sq  km<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 276961.92 sq  km<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 277043.21 sq  km<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 277064.24 sq  km<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 277241.9 sq  km<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 277305.11 sq  km<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 277492.69 sq  km<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 277735.22 sq  km<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 277949.67 sq  km<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 278183.93 sq  km<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 278455.42 sq  km<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 278747.13 sq  km<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 278932.01 sq  km<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 279189.74 sq  km<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 279589.56 sq  km<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 279965.87 sq  km<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 280327.2 sq  km<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 280572.9 sq  km<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Land area: 280656.46 sq  km<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [547811.20336982224, 547511.98568168865, 547502.77553314483, 547503.46230206452, 547503.89138039341, 547504.22596562677, 547504.5223574799, 547504.78542344354, 547505.09124201618, 547505.49590467825, 547505.94385898381, 547506.31774746347, 547506.58808024332, 547506.82754543796, 547507.03834638325, 547507.31898251886, 547507.64230121381, 547507.96009829745, 547508.32034734276],
      "text": ["Land area: 547811.2 sq  km<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547511.99 sq  km<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547502.78 sq  km<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547503.46 sq  km<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547503.89 sq  km<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547504.23 sq  km<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547504.52 sq  km<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547504.79 sq  km<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547505.09 sq  km<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547505.5 sq  km<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547505.94 sq  km<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547506.32 sq  km<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547506.59 sq  km<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547506.83 sq  km<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547507.04 sq  km<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547507.32 sq  km<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547507.64 sq  km<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547507.96 sq  km<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Land area: 547508.32 sq  km<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [240643.94071020657, 240641.66831553393, 240640.93560999597, 240640.69455706599, 240640.78060713413, 240640.89711380552, 240640.49229305179, 240640.37533033264, 240642.04056552832, 240644.91438165752, 240648.29088007889, 240652.98572147914, 240659.69703896897, 240666.57691680346, 240670.79855484271, 240672.17460512096, 240672.19771593562, 240670.31612479154, 240663.94277250633],
      "text": ["Land area: 240643.94 sq  km<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240641.67 sq  km<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240640.94 sq  km<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240640.69 sq  km<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240640.78 sq  km<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240640.9 sq  km<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240640.49 sq  km<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240640.38 sq  km<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240642.04 sq  km<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240644.91 sq  km<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240648.29 sq  km<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240652.99 sq  km<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240659.7 sq  km<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240666.58 sq  km<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240670.8 sq  km<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240672.17 sq  km<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240672.2 sq  km<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240670.32 sq  km<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Land area: 240663.94 sq  km<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [82520, 82520, 82519.999999999985, 82520, 82520, 82520, 82520, 82520, 82520.000000000015, 82520, 82520, 82520, 82520, 82520, 82520, 82520, 82520, 82520, 82520],
      "text": ["Land area: 82520 sq  km<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Land area: 82520 sq  km<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "y": [9184577.2162617091, 9184585.9148100037, 9184796.4281674847, 9184899.7937434055, 9184928.0522359665, 9185146.2088159304, 9185751.9334429502, 9186073.3306825776, 9186346.7427341286, 9186443.5847374052, 9186783.8301717956, 9186903.5781392343, 9186935.0243789386, 9187180.1536690928, 9187573.9137095436, 9187653.3811962306, 9187588.0896576159, 9187872.4424042795, 9188271.9313090239],
      "text": ["Land area: 9184577.22 sq  km<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9184585.91 sq  km<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9184796.43 sq  km<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9184899.79 sq  km<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9184928.05 sq  km<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9185146.21 sq  km<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9185751.93 sq  km<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9186073.33 sq  km<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9186346.74 sq  km<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9186443.58 sq  km<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9186783.83 sq  km<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9186903.58 sq  km<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9186935.02 sq  km<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9187180.15 sq  km<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9187573.91 sq  km<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9187653.38 sq  km<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9187588.09 sq  km<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9187872.44 sq  km<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Land area: 9188271.93 sq  km<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [291677.85089795396, 291885.77894852776, 292078.65377118404, 290043.45535439887, 286295.84258451348, 284739.1225064735, 284101.70538764563, 284966.88491587143, 285998.1795629579, 287404.68806318124, 288157.96994886734, 287798.95278657466, 287778.59189936524, 288326.7778346992, 289357.00530769542, 290575.29524959222, 291650.50542277022, 292882.82860380178, 294360.56167507969],
      "text": ["Land area: 291677.85 sq  km<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Land area: 291885.78 sq  km<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Land area: 292078.65 sq  km<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Land area: 290043.46 sq  km<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Land area: 286295.84 sq  km<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Land area: 284739.12 sq  km<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Land area: 284101.71 sq  km<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Land area: 284966.88 sq  km<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Land area: 285998.18 sq  km<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Land area: 287404.69 sq  km<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Land area: 288157.97 sq  km<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Land area: 287798.95 sq  km<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Land area: 287778.59 sq  km<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Land area: 288326.78 sq  km<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Land area: 289357.01 sq  km<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Land area: 290575.3 sq  km<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Land area: 291650.51 sq  km<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Land area: 292882.83 sq  km<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Land area: 294360.56 sq  km<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [293677.85645503772, 293677.36111138901, 293674.3992587846, 293673.10451589274, 293676.27365564957, 293676.51317984925, 293670.45673929836, 293666.72029702511, 293661.58624942985, 293648.68781156419, 293643.65156304627, 293621.30267074029, 293568.97831687407, 293515.88855825237, 293451.84754825814, 293367.52851843624, 293244.96558177285, 293177.93568143528, 293149.19462845568],
      "text": ["Land area: 293677.86 sq  km<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293677.36 sq  km<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293674.4 sq  km<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293673.1 sq  km<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293676.27 sq  km<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293676.51 sq  km<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293670.46 sq  km<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293666.72 sq  km<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293661.59 sq  km<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293648.69 sq  km<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293643.65 sq  km<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293621.3 sq  km<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293568.98 sq  km<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293515.89 sq  km<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293451.85 sq  km<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293367.53 sq  km<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293244.97 sq  km<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293177.94 sq  km<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Land area: 293149.19 sq  km<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [33760, 33760, 33760, 33760, 33760, 33760, 33730, 33730, 33720, 33720, 33690, 33690, 33670, 33670, 33669.999999999993, 33670, 33670, 33670, 33670],
      "text": ["Land area: 33760 sq  km<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33760 sq  km<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33760 sq  km<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33760 sq  km<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33760 sq  km<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33760 sq  km<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33730 sq  km<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33730 sq  km<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33720 sq  km<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33720 sq  km<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33690 sq  km<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33690 sq  km<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33670 sq  km<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33670 sq  km<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33670 sq  km<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33670 sq  km<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33670 sq  km<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33670 sq  km<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Land area: 33670 sq  km<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [29124.372491344704, 29113.37536418012, 29102.374587562339, 29091.780968087474, 29082.534334597578, 29071.053426836497, 29058.888013893054, 29048.200677235134, 29037.3067933151, 29015.990369034629, 28993.609169523752, 28969.937812952176, 28947.535045846769, 28926.462709498748, 28899.881092869447, 28880.427328482816, 28861.404355494484, 28844.684378195358, 28829.547070448938],
      "text": ["Land area: 29124.37 sq  km<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 29113.38 sq  km<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 29102.37 sq  km<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 29091.78 sq  km<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 29082.53 sq  km<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 29071.05 sq  km<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 29058.89 sq  km<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 29048.2 sq  km<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 29037.31 sq  km<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 29015.99 sq  km<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 28993.61 sq  km<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 28969.94 sq  km<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 28947.54 sq  km<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 28926.46 sq  km<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 28899.88 sq  km<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 28880.43 sq  km<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 28861.4 sq  km<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 28844.68 sq  km<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Land area: 28829.55 sq  km<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [118871.96940556656, 118727.21458820402, 118588.01184517109, 118450.81103920736, 118310.1990803376, 118171.62478150186, 118033.66750794099, 117882.55099840749, 117702.14163582392, 117479.3001331323, 117239.48146472672, 117009.39614099768, 116780.32032862735, 116577.36625810378, 116402.11329812738, 116232.45453558631, 116078.56362120285, 115915.34241669296, 115638.82280224081],
      "text": ["Land area: 118871.97 sq  km<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 118727.21 sq  km<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 118588.01 sq  km<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 118450.81 sq  km<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 118310.2 sq  km<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 118171.62 sq  km<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 118033.67 sq  km<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 117882.55 sq  km<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 117702.14 sq  km<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 117479.3 sq  km<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 117239.48 sq  km<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 117009.4 sq  km<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 116780.32 sq  km<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 116577.37 sq  km<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 116402.11 sq  km<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 116232.45 sq  km<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 116078.56 sq  km<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 115915.34 sq  km<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Land area: 115638.82 sq  km<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "l": 59.178082191780831
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Land area (REMIND_39)",
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
      "range": [0, 16381390],
      "tickmode": "array",
      "ticktext": ["0.0e+00", "5.0e+06", "1.0e+07", "1.5e+07"],
      "tickvals": [0, 5000000, 10000000, 15000000],
      "categoryorder": "array",
      "categoryarray": ["0.0e+00", "5.0e+06", "1.0e+07", "1.5e+07"],
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
        "text": "sq  km",
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
    "b55c40dd13d5": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c22b21087": {
      "y": {}
    }
  },
  "cur_data": "b55c40dd13d5",
  "visdat": {
    "b55c40dd13d5": ["function (y) ", "x"],
    "b55c22b21087": ["function (y) ", "x"]
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

  
