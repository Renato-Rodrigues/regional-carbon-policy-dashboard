(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Credit_Business_freedom_index_line') 

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
      "y": [70.566754682907273, 70.567784746426511, 70.572948646358768, 85.321148449912712, 84.371433075312609, 84.374340202600777, 83.375255122453837, 81.418176025055473, 80.457690895341926, 78.502352220442958, 76.586776904493604, 75.61459441947612, 78.510140734194493, 82.326214632539006, 77.569853378197408, 76.623228020719353, 75.595347480379203, 74.523170761508965, 74.485997748196411],
      "text": ["Business freedom index: 70.57 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 70.57 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 70.57 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 85.32 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 84.37 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 84.37 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 83.38 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 81.42 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 80.46 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 78.5 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 76.59 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 75.61 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 78.51 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 82.33 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 77.57 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 76.62 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 75.6 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 74.52 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Business freedom index: 74.49 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [61.73732075747381, 61.699182626154617, 61.679833077711109, 58.651434502764339, 59.06519083552088, 60.144958624251181, 60.436252329805932, 61.027801011535267, 61.648807864643473, 61.58187040735033, 61.365629783661028, 59.910016911200579, 58.788407518997573, 60.798254796324528, 59.97156647536287, 59.772758665735751, 57.75642913272064, 58.087322190148278, 57.707893774042816],
      "text": ["Business freedom index: 61.74 index (0-100)<br>Period: 2003<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 61.7 index (0-100)<br>Period: 2004<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 61.68 index (0-100)<br>Period: 2005<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 58.65 index (0-100)<br>Period: 2006<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 59.07 index (0-100)<br>Period: 2007<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 60.14 index (0-100)<br>Period: 2008<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 60.44 index (0-100)<br>Period: 2009<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 61.03 index (0-100)<br>Period: 2010<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 61.65 index (0-100)<br>Period: 2011<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 61.58 index (0-100)<br>Period: 2012<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 61.37 index (0-100)<br>Period: 2013<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 59.91 index (0-100)<br>Period: 2014<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 58.79 index (0-100)<br>Period: 2015<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 60.8 index (0-100)<br>Period: 2016<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 59.97 index (0-100)<br>Period: 2017<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 59.77 index (0-100)<br>Period: 2018<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 57.76 index (0-100)<br>Period: 2019<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 58.09 index (0-100)<br>Period: 2020<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Business freedom index: 57.71 index (0-100)<br>Period: 2021<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [85.000000000000014, 85.000000000000014, 85, 97, 97, 97, 97, 97.000000000000014, 96, 97, 92, 89, 89, 82, 82, 82, 82, 82, 81],
      "text": ["Business freedom index: 85 index (0-100)<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 85 index (0-100)<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 85 index (0-100)<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 97 index (0-100)<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 97 index (0-100)<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 97 index (0-100)<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 97 index (0-100)<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 97 index (0-100)<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 96 index (0-100)<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 97 index (0-100)<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 92 index (0-100)<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 89 index (0-100)<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 89 index (0-100)<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 82 index (0-100)<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 82 index (0-100)<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 82 index (0-100)<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 82 index (0-100)<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 82 index (0-100)<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Business freedom index: 81 index (0-100)<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [60.579430403319158, 60.550788196023284, 60.524851227351633, 50.848626711732273, 53.274849395427665, 59.456522405226607, 61.330531134497278, 61.030925556748052, 60.518667518151467, 59.941591883710366, 59.358370301656706, 59.202785623213387, 58.696051081682093, 58.982037464626799, 59.546710459430336, 63.056702674133902, 60.150531675541863, 58.761511904282401, 58.561679752661988],
      "text": ["Business freedom index: 60.58 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Business freedom index: 60.55 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Business freedom index: 60.52 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 50.85 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 53.27 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 59.46 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 61.33 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 61.03 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 60.52 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 59.94 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 59.36 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 59.2 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 58.7 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 58.98 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 59.55 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 63.06 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 60.15 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 58.76 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Business freedom index: 58.56 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [84.999999999999986, 84.999999999999986, 84.999999999999972, 92.528587277928182, 90.854474405955727, 91.669759407495761, 92.489550287399098, 91.648935940390743, 91.640321497026846, 93.299174340827832, 96.644420655190018, 95.161334513083375, 94.324287751875886, 89.326151205791177, 89.491039501599374, 89.492253778187859, 88.4927222727448, 88.331157236516191, 87.497867538967611],
      "text": ["Business freedom index: 85 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 85 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 85 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 92.53 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 90.85 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 91.67 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 92.49 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 91.65 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 91.64 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 93.3 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 96.64 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 95.16 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 94.32 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 89.33 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 89.49 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 89.49 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 88.49 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 88.33 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Business freedom index: 87.5 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [70, 70, 70, 80, 84, 83, 80, 83, 87.000000000000014, 82, 81.000000000000014, 77, 72, 71, 70.999999999999986, 68, 68, 67, 65.999999999999986],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 80 index (0-100)<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 84 index (0-100)<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 83 index (0-100)<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 80 index (0-100)<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 87 index (0-100)<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 81 index (0-100)<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 77 index (0-100)<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 72 index (0-100)<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 71 index (0-100)<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 71 index (0-100)<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 68 index (0-100)<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 68 index (0-100)<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 67 index (0-100)<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Business freedom index: 66 index (0-100)<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [70, 70.000000000000014, 70.000000000000014, 91, 91, 89.000000000000014, 87.999999999999986, 89, 88, 88, 93, 91.000000000000014, 92, 90, 90, 90, 89, 86, 86],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 91 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 91 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 89 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 88 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 89 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 88 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 88 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 93 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 91 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 92 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 90 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 90 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 90 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 89 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 86 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Business freedom index: 86 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [70, 70, 70, 54, 54, 53.999999999999993, 54, 55, 54, 54, 52.999999999999993, 54, 54, 60.999999999999993, 61, 59.000000000000007, 57.999999999999993, 61.000000000000007, 58],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 54 index (0-100)<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 54 index (0-100)<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 54 index (0-100)<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 54 index (0-100)<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 55 index (0-100)<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 54 index (0-100)<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 54 index (0-100)<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 53 index (0-100)<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 54 index (0-100)<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 54 index (0-100)<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 61 index (0-100)<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 61 index (0-100)<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 59 index (0-100)<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 58 index (0-100)<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 61 index (0-100)<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Business freedom index: 58 index (0-100)<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [52.14388588041831, 52.514680974123152, 52.888841795085781, 47.821320466103465, 49.777473905889941, 50.336094452242641, 49.328107764895464, 48.746812443036745, 53.783621716559516, 53.47378076983437, 55.444653900832719, 63.030525141335247, 61.745538300866315, 60.363668133551734, 64.229180773761612, 65.252972630904935, 67.809040406308, 64.080195396363251, 65.914020166880974],
      "text": ["Business freedom index: 52.14 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 52.51 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 52.89 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 47.82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 49.78 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 50.34 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 49.33 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Business freedom index: 48.75 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Business freedom index: 53.78 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 53.47 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 55.44 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 63.03 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 61.75 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 60.36 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 64.23 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 65.25 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 67.81 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 64.08 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Business freedom index: 65.91 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [70, 70, 70.000000000000014, 86.000000000000014, 84, 84, 90, 92, 92, 94, 94, 93, 90, 91.000000000000014, 91.000000000000014, 91, 91, 91, 90],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 86 index (0-100)<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 84 index (0-100)<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 84 index (0-100)<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 90 index (0-100)<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 92 index (0-100)<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 92 index (0-100)<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 94 index (0-100)<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 94 index (0-100)<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 93 index (0-100)<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 90 index (0-100)<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 91 index (0-100)<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 91 index (0-100)<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 91 index (0-100)<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 91 index (0-100)<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 91 index (0-100)<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Business freedom index: 90 index (0-100)<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [46.551001058610709, 46.562929119530502, 46.577488308089229, 53.210701298863079, 52.691290704541665, 53.743592783247685, 55.145753857567584, 58.347225333499821, 57.312808044916174, 56.626787261612947, 56.928731507846237, 57.811735841310188, 56.849757550488007, 52.923429045295947, 54.074625127273563, 54.471067360523193, 56.279003042207393, 57.453613652687089, 57.55558661484914],
      "text": ["Business freedom index: 46.55 index (0-100)<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Business freedom index: 46.56 index (0-100)<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Business freedom index: 46.58 index (0-100)<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Business freedom index: 53.21 index (0-100)<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Business freedom index: 52.69 index (0-100)<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Business freedom index: 53.74 index (0-100)<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Business freedom index: 55.15 index (0-100)<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Business freedom index: 58.35 index (0-100)<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Business freedom index: 57.31 index (0-100)<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Business freedom index: 56.63 index (0-100)<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Business freedom index: 56.93 index (0-100)<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Business freedom index: 57.81 index (0-100)<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Business freedom index: 56.85 index (0-100)<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Business freedom index: 52.92 index (0-100)<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Business freedom index: 54.07 index (0-100)<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Business freedom index: 54.47 index (0-100)<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Business freedom index: 56.28 index (0-100)<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Business freedom index: 57.45 index (0-100)<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Business freedom index: 57.56 index (0-100)<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [55, 55, 55, 60, 62, 53.999999999999993, 54, 51.999999999999993, 51, 64.999999999999986, 69, 70, 76, 72, 75, 77, 78, 80, 83.999999999999986],
      "text": ["Business freedom index: 55 index (0-100)<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 55 index (0-100)<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 55 index (0-100)<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 60 index (0-100)<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 62 index (0-100)<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 54 index (0-100)<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 54 index (0-100)<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 52 index (0-100)<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 51 index (0-100)<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 65 index (0-100)<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 69 index (0-100)<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 70 index (0-100)<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 76 index (0-100)<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 72 index (0-100)<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 75 index (0-100)<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 77 index (0-100)<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 78 index (0-100)<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Business freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [54.768222984057282, 54.783897134072561, 54.806281326091188, 56.638746967604369, 56.281051471604528, 56.508983096152548, 56.058289183722557, 55.244066437669851, 54.054303564191031, 58.072843923168101, 58.471624387335396, 60.641522207507187, 60.014878838742789, 61.938445477747841, 63.969568138432308, 65.695736698957973, 66.108386528225651, 66.563570253268395, 66.769929617853322],
      "text": ["Business freedom index: 54.77 index (0-100)<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 54.78 index (0-100)<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 54.81 index (0-100)<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 56.64 index (0-100)<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 56.28 index (0-100)<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 56.51 index (0-100)<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 56.06 index (0-100)<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 55.24 index (0-100)<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 54.05 index (0-100)<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 58.07 index (0-100)<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 58.47 index (0-100)<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 60.64 index (0-100)<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 60.01 index (0-100)<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 61.94 index (0-100)<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 63.97 index (0-100)<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 65.7 index (0-100)<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 66.11 index (0-100)<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 66.56 index (0-100)<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Business freedom index: 66.77 index (0-100)<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [55, 55, 55, 47.000000000000007, 48, 49, 47, 52.999999999999993, 55, 55, 50, 55, 49, 54, 49, 57, 69, 70, 70.999999999999986],
      "text": ["Business freedom index: 55 index (0-100)<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 55 index (0-100)<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 55 index (0-100)<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 47 index (0-100)<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 48 index (0-100)<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 49 index (0-100)<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 47 index (0-100)<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 53 index (0-100)<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 55 index (0-100)<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 55 index (0-100)<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 50 index (0-100)<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 55 index (0-100)<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 49 index (0-100)<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 54 index (0-100)<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 49 index (0-100)<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 57 index (0-100)<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 69 index (0-100)<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 70 index (0-100)<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Business freedom index: 71 index (0-100)<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [56.428647707966924, 56.504059015295972, 56.58182039097251, 65.063651331645445, 65.427040932158576, 64.233765126046464, 67.50924103509719, 65.424708315217174, 67.187260282247408, 67.845088251496108, 68.167639867656035, 68.619589599377804, 64.155979972700166, 58.050814425765303, 57.830032775416988, 54.408854273874837, 54.035368852895729, 54.391374744445841, 58.728953001806481],
      "text": ["Business freedom index: 56.43 index (0-100)<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Business freedom index: 56.5 index (0-100)<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Business freedom index: 56.58 index (0-100)<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Business freedom index: 65.06 index (0-100)<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Business freedom index: 65.43 index (0-100)<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Business freedom index: 64.23 index (0-100)<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Business freedom index: 67.51 index (0-100)<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 65.42 index (0-100)<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 67.19 index (0-100)<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 67.85 index (0-100)<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 68.17 index (0-100)<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 68.62 index (0-100)<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 64.16 index (0-100)<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 58.05 index (0-100)<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 57.83 index (0-100)<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 54.41 index (0-100)<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 54.04 index (0-100)<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 54.39 index (0-100)<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Business freedom index: 58.73 index (0-100)<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [70, 70.000000000000014, 70, 87.000000000000014, 91, 88, 86, 84.999999999999986, 84, 82, 81.000000000000014, 80, 84, 83, 82, 82, 80.999999999999986, 80.999999999999986, 86.000000000000014],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 87 index (0-100)<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 91 index (0-100)<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 88 index (0-100)<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 86 index (0-100)<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 85 index (0-100)<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 84 index (0-100)<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 81 index (0-100)<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 80 index (0-100)<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 84 index (0-100)<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 83 index (0-100)<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 82 index (0-100)<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 82 index (0-100)<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 81 index (0-100)<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 81 index (0-100)<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Business freedom index: 86 index (0-100)<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [55, 55, 55, 67, 67, 68, 70, 69, 69, 67, 68, 68, 61, 65, 64, 63, 66, 67, 69.000000000000014],
      "text": ["Business freedom index: 55 index (0-100)<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 55 index (0-100)<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 55 index (0-100)<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 67 index (0-100)<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 67 index (0-100)<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 68 index (0-100)<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 70 index (0-100)<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 69 index (0-100)<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 69 index (0-100)<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 67 index (0-100)<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 68 index (0-100)<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 68 index (0-100)<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 61 index (0-100)<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 65 index (0-100)<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 64 index (0-100)<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 63 index (0-100)<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 66 index (0-100)<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 67 index (0-100)<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Business freedom index: 69 index (0-100)<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [59.626976073857819, 59.640846291995011, 59.657056746818789, 71.527263491940403, 69.994194469084803, 71.994059051598285, 74.285183896668642, 74.141582453144764, 73.687669870364743, 73.072934033108538, 72.558265682669585, 73.021481931323123, 70.153578387532377, 67.508720462370846, 65.674922850273362, 64.310867477426484, 63.141689248291918, 60.378761050095783, 61.083317111046995],
      "text": ["Business freedom index: 59.63 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 59.64 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 59.66 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 71.53 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 69.99 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 71.99 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 74.29 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 74.14 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 73.69 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 73.07 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 72.56 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 73.02 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 70.15 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 67.51 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 65.67 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 64.31 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 63.14 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 60.38 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Business freedom index: 61.08 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [70, 70, 70, 77.850433725791234, 78.189044433339674, 78.560489318755714, 77.742527703573685, 76.925030669730404, 77.552749353288235, 81.367087785851595, 80.549638175149724, 78.462827923040038, 79.823511570921667, 77.635801144153419, 70.439858264390523, 69.062721568864873, 69.32878539421921, 68.785742702184649, 67.793398569082754],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 77.85 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 78.19 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 78.56 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 77.74 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 76.93 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 77.55 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 81.37 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 80.55 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 78.46 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 79.82 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 77.64 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 70.44 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 69.06 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 69.33 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 68.79 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Business freedom index: 67.79 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [40, 39.999999999999993, 40, 56, 55, 55.999999999999993, 61, 70, 69, 65, 65, 61.999999999999993, 57.000000000000007, 59, 65, 64, 62, 57, 57],
      "text": ["Business freedom index: 40 index (0-100)<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 40 index (0-100)<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 40 index (0-100)<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 56 index (0-100)<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 55 index (0-100)<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 56 index (0-100)<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 61 index (0-100)<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 70 index (0-100)<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 69 index (0-100)<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 65 index (0-100)<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 65 index (0-100)<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 62 index (0-100)<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 57 index (0-100)<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 59 index (0-100)<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 65 index (0-100)<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 64 index (0-100)<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 62 index (0-100)<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 57 index (0-100)<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Business freedom index: 57 index (0-100)<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [55, 54.999999999999993, 55, 50, 51, 51, 54, 36, 37, 36, 37.000000000000007, 38, 43, 48, 52.999999999999993, 56.000000000000007, 57, 66, 77],
      "text": ["Business freedom index: 55 index (0-100)<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 55 index (0-100)<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 55 index (0-100)<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 50 index (0-100)<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 51 index (0-100)<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 51 index (0-100)<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 54 index (0-100)<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 36 index (0-100)<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 37 index (0-100)<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 36 index (0-100)<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 37 index (0-100)<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 38 index (0-100)<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 43 index (0-100)<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 48 index (0-100)<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 53 index (0-100)<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 56 index (0-100)<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 57 index (0-100)<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 66 index (0-100)<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Business freedom index: 77 index (0-100)<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "y": [85, 85, 85.000000000000014, 93, 91, 93, 92, 91, 91, 91, 91, 89, 89, 85, 84, 83, 84, 83, 82.999999999999986],
      "text": ["Business freedom index: 85 index (0-100)<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 85 index (0-100)<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 85 index (0-100)<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 93 index (0-100)<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 91 index (0-100)<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 93 index (0-100)<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 92 index (0-100)<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 91 index (0-100)<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 91 index (0-100)<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 91 index (0-100)<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 91 index (0-100)<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 89 index (0-100)<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 89 index (0-100)<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 85 index (0-100)<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 84 index (0-100)<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 83 index (0-100)<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 84 index (0-100)<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 83 index (0-100)<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Business freedom index: 83 index (0-100)<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [70.000000000000014, 70, 70, 57, 55, 53.999999999999993, 53.999999999999993, 62, 61, 61, 64, 70, 67, 69, 68, 67, 65, 63.000000000000007, 61.999999999999993],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 57 index (0-100)<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 55 index (0-100)<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 54 index (0-100)<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 54 index (0-100)<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 62 index (0-100)<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 61 index (0-100)<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 61 index (0-100)<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 64 index (0-100)<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 70 index (0-100)<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 67 index (0-100)<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 69 index (0-100)<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 68 index (0-100)<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 67 index (0-100)<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 65 index (0-100)<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 63 index (0-100)<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Business freedom index: 62 index (0-100)<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [53.144915840666357, 53.346042836857208, 53.333154138392622, 48.538764134899004, 52.522862751424199, 51.547024320091701, 53.276309746593853, 53.259740656715813, 53.035658373352511, 54.234221336256539, 52.377336708381144, 51.092479434349663, 51.359332254364674, 50.919980659324473, 52.171716004072202, 51.289408218170948, 50.935620617952239, 51.604324995259105, 52.775099311099616],
      "text": ["Business freedom index: 53.14 index (0-100)<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 53.35 index (0-100)<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 53.33 index (0-100)<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 48.54 index (0-100)<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 52.52 index (0-100)<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 51.55 index (0-100)<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 53.28 index (0-100)<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 53.26 index (0-100)<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 53.04 index (0-100)<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 54.23 index (0-100)<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 52.38 index (0-100)<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 51.09 index (0-100)<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 51.36 index (0-100)<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 50.92 index (0-100)<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 52.17 index (0-100)<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 51.29 index (0-100)<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 50.94 index (0-100)<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 51.6 index (0-100)<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Business freedom index: 52.78 index (0-100)<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [70, 70, 70, 72, 70, 71, 75, 73, 72, 76, 75, 75, 73, 70, 61.999999999999993, 65, 64, 62.000000000000007, 62],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 72 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 70 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 71 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 75 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 73 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 72 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 76 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 75 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 75 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 73 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 70 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 62 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 65 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 64 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 62 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Business freedom index: 62 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [70, 70, 70, 89, 89, 90, 90, 90, 90, 91, 92, 90, 88.000000000000014, 90, 87, 86, 83, 83, 82],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 89 index (0-100)<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 89 index (0-100)<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 90 index (0-100)<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 90 index (0-100)<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 90 index (0-100)<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 90 index (0-100)<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 91 index (0-100)<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 92 index (0-100)<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 90 index (0-100)<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 88 index (0-100)<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 90 index (0-100)<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 87 index (0-100)<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 86 index (0-100)<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 83 index (0-100)<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 83 index (0-100)<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Business freedom index: 82 index (0-100)<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "y": [70.90811200436724, 70.9054640306842, 70.903178315676016, 67.686207822102105, 69.212844757374782, 70.596649323944376, 70.821929445332913, 71.565096160931404, 73.286165792646131, 71.411213290912272, 70.433816882770699, 73.024493513319314, 72.796714535704737, 70.704569839925469, 69.779416686010407, 71.573497112832058, 70.368765600129308, 67.400027166732912, 67.215180151557078],
      "text": ["Business freedom index: 70.91 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 70.91 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 70.9 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 67.69 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 69.21 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 70.6 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 70.82 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 71.57 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 73.29 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 71.41 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 70.43 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 73.02 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 72.8 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 70.7 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 69.78 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 71.57 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 70.37 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 67.4 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Business freedom index: 67.22 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [85, 85, 85, 94, 92, 93, 93, 93, 92, 93, 83, 83, 82, 80, 79.999999999999986, 82.000000000000014, 83, 83, 82],
      "text": ["Business freedom index: 85 index (0-100)<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 85 index (0-100)<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 85 index (0-100)<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 94 index (0-100)<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 92 index (0-100)<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 93 index (0-100)<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 93 index (0-100)<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 93 index (0-100)<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 92 index (0-100)<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 93 index (0-100)<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 83 index (0-100)<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 83 index (0-100)<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 82 index (0-100)<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 80 index (0-100)<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 80 index (0-100)<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 82 index (0-100)<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 83 index (0-100)<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 83 index (0-100)<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Business freedom index: 82 index (0-100)<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [70, 70, 70, 51, 52.999999999999993, 73, 80, 85, 86.000000000000014, 87.999999999999986, 68, 67, 66, 70, 74, 74, 72, 67.000000000000014, 84],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 51 index (0-100)<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 53 index (0-100)<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 73 index (0-100)<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 80 index (0-100)<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 85 index (0-100)<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 86 index (0-100)<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 88 index (0-100)<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 68 index (0-100)<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 67 index (0-100)<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 66 index (0-100)<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 70 index (0-100)<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 74 index (0-100)<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 74 index (0-100)<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 72 index (0-100)<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 67 index (0-100)<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Business freedom index: 84 index (0-100)<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [82.362355361063337, 82.355211671455848, 82.348435031307247, 95.455939132016283, 94.543287780292204, 96.845938594171685, 96.844929361486194, 96.289643274502723, 96.38160392585479, 96.103050364923547, 94.901775797747064, 93.708816854132394, 91.774978305374049, 91.630244645198133, 91.562676504395498, 90.34815042526651, 89.071997194035006, 86.087417175021713, 85.391959966106953],
      "text": ["Business freedom index: 82.36 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 82.36 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 82.35 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 95.46 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 94.54 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 96.85 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 96.84 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 96.29 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 96.38 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 96.1 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 94.9 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 93.71 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 91.77 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 91.63 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 91.56 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 90.35 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 89.07 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 86.09 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Business freedom index: 85.39 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [70, 70, 70, 87.999999999999986, 87.000000000000014, 88.000000000000028, 86.999999999999986, 86, 85.999999999999986, 84, 83.999999999999986, 79.999999999999986, 79.999999999999986, 77.999999999999986, 78, 79.999999999999986, 80.999999999999972, 83, 79.999999999999972],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 88 index (0-100)<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 87 index (0-100)<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 88 index (0-100)<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 87 index (0-100)<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 86 index (0-100)<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 86 index (0-100)<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 84 index (0-100)<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 84 index (0-100)<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 80 index (0-100)<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 80 index (0-100)<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 78 index (0-100)<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 78 index (0-100)<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 80 index (0-100)<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 81 index (0-100)<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 83 index (0-100)<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Business freedom index: 80 index (0-100)<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [84.998499185595549, 84.998507714296338, 84.998517929923239, 91.997940299532928, 90.998053594928649, 90.998068852676099, 89.998275067027421, 94.997195101534828, 94.997264088051836, 94.997236169071741, 93.997347644080904, 91.997505630365822, 90.997800219880247, 85.99827160606884, 89.998328455044842, 90.998428351638353, 92.998392540961405, 94.998709840064649, 93.999243099538859],
      "text": ["Business freedom index: 85 index (0-100)<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 85 index (0-100)<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 85 index (0-100)<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 92 index (0-100)<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 91 index (0-100)<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 91 index (0-100)<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 90 index (0-100)<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 95 index (0-100)<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 95 index (0-100)<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 95 index (0-100)<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 94 index (0-100)<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 92 index (0-100)<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 91 index (0-100)<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 86 index (0-100)<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 90 index (0-100)<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 91 index (0-100)<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 93 index (0-100)<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 95 index (0-100)<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Business freedom index: 94 index (0-100)<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [69.999999999999986, 70, 70, 82, 82, 81, 79, 74, 73, 70, 74, 76, 78, 79, 77, 76, 75, 72.999999999999986, 73],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 82 index (0-100)<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 82 index (0-100)<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 81 index (0-100)<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 79 index (0-100)<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 74 index (0-100)<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 73 index (0-100)<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 70 index (0-100)<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 74 index (0-100)<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 76 index (0-100)<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 78 index (0-100)<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 79 index (0-100)<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 77 index (0-100)<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 76 index (0-100)<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 75 index (0-100)<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 73 index (0-100)<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Business freedom index: 73 index (0-100)<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "y": [55.488563806302622, 55.488740210424815, 55.488007664604126, 43.758257965388715, 47.640747944526936, 50.560620529011786, 52.517662009942732, 50.812144630550492, 50.844608579475171, 47.000598030357189, 49.037351625257784, 50.991390227180503, 52.918022535157824, 54.873324115882106, 54.861355073925267, 55.843753033505088, 56.821544850090625, 77.371046080888163, 80.287429202657506],
      "text": ["Business freedom index: 55.49 index (0-100)<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 55.49 index (0-100)<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 55.49 index (0-100)<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 43.76 index (0-100)<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 47.64 index (0-100)<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 50.56 index (0-100)<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 52.52 index (0-100)<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 50.81 index (0-100)<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 50.84 index (0-100)<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 47 index (0-100)<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 49.04 index (0-100)<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 50.99 index (0-100)<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 52.92 index (0-100)<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 54.87 index (0-100)<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 54.86 index (0-100)<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 55.84 index (0-100)<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 56.82 index (0-100)<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 77.37 index (0-100)<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Business freedom index: 80.29 index (0-100)<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [56.339818032889397, 56.348668720143245, 56.359641096134993, 55.127996986962579, 54.667493087606999, 54.002182777987869, 61.786726399689663, 61.320159912314125, 60.708252036869723, 60.910092433109028, 58.261427146217621, 61.107242276566971, 59.541580288175119, 62.307903407010379, 61.468208677633136, 60.935076835151669, 55.606052183421497, 54.74529037067969, 55.4244203645057],
      "text": ["Business freedom index: 56.34 index (0-100)<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Business freedom index: 56.35 index (0-100)<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Business freedom index: 56.36 index (0-100)<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Business freedom index: 55.13 index (0-100)<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Business freedom index: 54.67 index (0-100)<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Business freedom index: 54 index (0-100)<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Business freedom index: 61.79 index (0-100)<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Business freedom index: 61.32 index (0-100)<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Business freedom index: 60.71 index (0-100)<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Business freedom index: 60.91 index (0-100)<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Business freedom index: 58.26 index (0-100)<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Business freedom index: 61.11 index (0-100)<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Business freedom index: 59.54 index (0-100)<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Business freedom index: 62.31 index (0-100)<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Business freedom index: 61.47 index (0-100)<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Business freedom index: 60.94 index (0-100)<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Business freedom index: 55.61 index (0-100)<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Business freedom index: 54.75 index (0-100)<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Business freedom index: 55.42 index (0-100)<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [70.10359634518322, 70.103621498213144, 70.103771897975719, 77.944619923381822, 76.951617531566058, 76.951623207533387, 78.937616743016832, 77.944447025288596, 76.951269486408194, 76.95096383415239, 76.887644550771299, 75.900629785544794, 71.919974954080985, 69.940362184124524, 69.946299341355754, 69.95225821133053, 71.958157421737084, 69.982809139439027, 68],
      "text": ["Business freedom index: 70.1 index (0-100)<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 70.1 index (0-100)<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 70.1 index (0-100)<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 77.94 index (0-100)<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 76.95 index (0-100)<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 76.95 index (0-100)<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 78.94 index (0-100)<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 77.94 index (0-100)<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 76.95 index (0-100)<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 76.95 index (0-100)<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 76.89 index (0-100)<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 75.9 index (0-100)<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 71.92 index (0-100)<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 69.94 index (0-100)<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 69.95 index (0-100)<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 69.95 index (0-100)<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 71.96 index (0-100)<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 69.98 index (0-100)<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Business freedom index: 68 index (0-100)<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [69.999999999999986, 70, 70, 88, 88, 88, 87, 83, 82, 82, 83, 90, 84, 80, 79.999999999999986, 81, 81, 80.000000000000014, 81],
      "text": ["Business freedom index: 70 index (0-100)<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 70 index (0-100)<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 70 index (0-100)<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 88 index (0-100)<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 88 index (0-100)<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 88 index (0-100)<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 87 index (0-100)<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 83 index (0-100)<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 82 index (0-100)<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 82 index (0-100)<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 83 index (0-100)<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 90 index (0-100)<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 84 index (0-100)<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 80 index (0-100)<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 80 index (0-100)<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 81 index (0-100)<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 81 index (0-100)<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 80 index (0-100)<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Business freedom index: 81 index (0-100)<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [70.625655548611476, 70.631609381985797, 70.63756519117031, 90.399586138497952, 92.308472870625891, 93.258207906454217, 92.250743385410459, 92.199726131171317, 92.237501461284793, 91.270044246897925, 91.210689232725898, 89.196164831451199, 90.038139786217272, 84.462610618800483, 81.352431033252842, 80.393818232216617, 77.539184263316628, 74.585558183265817, 79.267077852677588],
      "text": ["Business freedom index: 70.63 index (0-100)<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 70.63 index (0-100)<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 70.64 index (0-100)<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 90.4 index (0-100)<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 92.31 index (0-100)<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 93.26 index (0-100)<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 92.25 index (0-100)<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 92.2 index (0-100)<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 92.24 index (0-100)<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 91.27 index (0-100)<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 91.21 index (0-100)<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 89.2 index (0-100)<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 90.04 index (0-100)<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 84.46 index (0-100)<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 81.35 index (0-100)<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 80.39 index (0-100)<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 77.54 index (0-100)<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 74.59 index (0-100)<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Business freedom index: 79.27 index (0-100)<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [71.257065509915606, 71.275211275087244, 71.292661059020844, 72.738028022042641, 70, 70, 78.18270940641375, 77.276218845100942, 76.374322525962768, 76.572657522991847, 77.389788351505047, 76.397479654320648, 73.708990119501991, 74.102980392293986, 74.208889966603252, 74.317588470610403, 74.321446675049231, 74.325538799514646, 76],
      "text": ["Business freedom index: 71.26 index (0-100)<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 71.28 index (0-100)<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 71.29 index (0-100)<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 72.74 index (0-100)<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 70 index (0-100)<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 70 index (0-100)<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 78.18 index (0-100)<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 77.28 index (0-100)<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 76.37 index (0-100)<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 76.57 index (0-100)<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 77.39 index (0-100)<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 76.4 index (0-100)<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 73.71 index (0-100)<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 74.1 index (0-100)<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 74.21 index (0-100)<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 74.32 index (0-100)<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 74.32 index (0-100)<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 74.33 index (0-100)<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Business freedom index: 76 index (0-100)<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Business freedom index (REMIND_39)",
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
      "range": [0, 100.00000000000001],
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
    "b55c40075a01": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c6c526304": {
      "y": {}
    }
  },
  "cur_data": "b55c40075a01",
  "visdat": {
    "b55c40075a01": ["function (y) ", "x"],
    "b55c6c526304": ["function (y) ", "x"]
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

  
