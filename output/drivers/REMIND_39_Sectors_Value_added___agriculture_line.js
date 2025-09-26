(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Sectors_Value_added___agriculture_line') 

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
      "y": [1.0476305813130555, 1.0910415134705851, 0.96507125220213374, 0.90251084752388333, 0.8996465675564973, 0.9357695346901882, 0.91124982711934388, 0.87615657077686537, 0.89902105585527525, 0.85502884764779152, 0.8561074231836947, 0.88196950457502676, 0.80599443744758381, 0.8076248651888247, 0.75031073216711219, 0.7669747193130918, 0.79766803061951963, 0.8575063678114222, 0.77934606210800772],
      "text": ["Value added - agriculture: 1.05 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 1.09 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.97 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.9 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.9 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.94 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.91 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.88 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.9 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.86 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.86 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.88 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.81 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.81 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.75 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.77 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.8 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.86 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Value added - agriculture: 0.78 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [8.8501486068460604, 8.3168415597597356, 8.1422996589157481, 7.7503977470078436, 7.8286361670401412, 7.8235942807127632, 7.6914489818582323, 7.8778965760020654, 7.9226123062435434, 7.3223976211237547, 7.2795853157190997, 7.3724406241531328, 7.185998132726092, 7.5208695285120761, 7.356601386620059, 7.125235444588327, 7.2872414549925395, 8.0449520652450239, 7.9973688965762086],
      "text": ["Value added - agriculture: 8.85 % (GDP)<br>Period: 2003<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 8.32 % (GDP)<br>Period: 2004<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 8.14 % (GDP)<br>Period: 2005<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.75 % (GDP)<br>Period: 2006<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.83 % (GDP)<br>Period: 2007<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.82 % (GDP)<br>Period: 2008<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.69 % (GDP)<br>Period: 2009<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.88 % (GDP)<br>Period: 2010<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.92 % (GDP)<br>Period: 2011<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.32 % (GDP)<br>Period: 2012<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.28 % (GDP)<br>Period: 2013<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.37 % (GDP)<br>Period: 2014<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.19 % (GDP)<br>Period: 2015<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.52 % (GDP)<br>Period: 2016<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.36 % (GDP)<br>Period: 2017<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.13 % (GDP)<br>Period: 2018<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 7.29 % (GDP)<br>Period: 2019<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 8.04 % (GDP)<br>Period: 2020<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Value added - agriculture: 8 % (GDP)<br>Period: 2021<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [2.0500000000000003, 2.1700000000000004, 1.8799999999999999, 1.7, 1.5900000000000001, 1.77, 1.5500000000000003, 1.49, 1.77, 1.8100000000000001, 1.8899999999999997, 1.5900000000000001, 1.8700000000000001, 1.8599999999999999, 1.8899999999999999, 1.7, 1.7, 1.6999999999999997, 1.7],
      "text": ["Value added - agriculture: 2.05 % (GDP)<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 2.17 % (GDP)<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.88 % (GDP)<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.7 % (GDP)<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.59 % (GDP)<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.77 % (GDP)<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.55 % (GDP)<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.49 % (GDP)<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.77 % (GDP)<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.81 % (GDP)<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.89 % (GDP)<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.59 % (GDP)<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.87 % (GDP)<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.86 % (GDP)<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.89 % (GDP)<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.7 % (GDP)<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.7 % (GDP)<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.7 % (GDP)<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Value added - agriculture: 1.7 % (GDP)<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [19.548043340572374, 18.480774206828475, 17.822706681283041, 17.568935187085998, 17.824080589602183, 17.761967671675805, 17.949782159889551, 17.842218746045159, 17.25512275458464, 17.558178946110459, 17.047411098615235, 17.69092327836907, 18.251150249527239, 17.158093201723982, 17.102733227925725, 17.192669328543047, 16.659837328022778, 17.251870558900208, 14.974275604278791],
      "text": ["Value added - agriculture: 19.55 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Value added - agriculture: 18.48 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.82 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.57 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.82 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.76 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.95 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.84 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.26 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.56 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.05 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.69 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 18.25 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.16 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.1 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.19 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 16.66 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 17.25 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Value added - agriculture: 14.97 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [3.3715594193754672, 3.4530498467692019, 3.1671436374352555, 3.1121468194820467, 2.8607519279081082, 2.7858257618013686, 2.870994276836325, 2.9238828778315349, 2.94448827731371, 2.7977895759613109, 3.0536384764001658, 2.6330163534935092, 2.7188807007103142, 2.9136881491211382, 3.2254122667113516, 2.9850706967337302, 2.7063395045663303, 2.6127061704595151, 2.864292526717291],
      "text": ["Value added - agriculture: 3.37 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 3.45 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 3.17 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 3.11 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.86 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.79 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.87 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.92 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.94 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.8 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 3.05 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.63 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.72 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.91 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 3.23 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.99 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.71 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.61 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Value added - agriculture: 2.86 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [3.3900000000000001, 3.3399999999999999, 3.0699999999999998, 3.0800000000000001, 3.1800000000000002, 3.1599999999999997, 3.2399999999999998, 3.2200000000000006, 3.0899999999999999, 3.1699999999999999, 3.1400000000000006, 3.1299999999999999, 3.1899999999999999, 3.3500000000000001, 3.3799999999999999, 3.3799999999999994, 3.3900000000000001, 3.7999999999999998, 3.8899999999999997],
      "text": ["Value added - agriculture: 3.39 % (GDP)<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.34 % (GDP)<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.07 % (GDP)<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.08 % (GDP)<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.18 % (GDP)<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.16 % (GDP)<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.24 % (GDP)<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.22 % (GDP)<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.09 % (GDP)<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.17 % (GDP)<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.14 % (GDP)<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.13 % (GDP)<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.19 % (GDP)<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.35 % (GDP)<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.38 % (GDP)<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.38 % (GDP)<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.39 % (GDP)<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.8 % (GDP)<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Value added - agriculture: 3.89 % (GDP)<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [1.26, 1.3400000000000001, 1.3600000000000003, 1.3700000000000001, 1.2, 1.0800000000000001, 1.2399999999999998, 1.52, 1.3, 1.0800000000000001, 1.25, 1.3799999999999999, 1.4800000000000002, 2.0299999999999998, 1.9199999999999999, 1.8099999999999998, 1.7799999999999998, 1.8399999999999999, 1.6499999999999997],
      "text": ["Value added - agriculture: 1.26 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.34 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.36 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.37 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.2 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.08 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.24 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.52 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.3 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.08 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.25 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.38 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.48 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 2.03 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.92 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.81 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.78 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.84 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Value added - agriculture: 1.65 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [6.1699999999999999, 5.6699999999999999, 4.6500000000000004, 4.3700000000000001, 4.4199999999999999, 4.5699999999999994, 4.4800000000000004, 4.1200000000000001, 4.3399999999999999, 4.1699999999999999, 4.5099999999999989, 4.3300000000000001, 4.3200000000000003, 4.8899999999999997, 4.5999999999999996, 4.4199999999999999, 4.21, 5.71, 7.4899999999999993],
      "text": ["Value added - agriculture: 6.17 % (GDP)<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 5.67 % (GDP)<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.65 % (GDP)<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.37 % (GDP)<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.42 % (GDP)<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.57 % (GDP)<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.48 % (GDP)<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.12 % (GDP)<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.34 % (GDP)<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.17 % (GDP)<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.51 % (GDP)<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.33 % (GDP)<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.32 % (GDP)<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.89 % (GDP)<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.6 % (GDP)<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.42 % (GDP)<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 4.21 % (GDP)<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 5.71 % (GDP)<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Value added - agriculture: 7.49 % (GDP)<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [11.316173093957065, 11.111905796019041, 9.605222628982462, 8.2035301696373271, 7.1550074254428075, 7.4168776822611209, 7.5798273877038227, 7.9672247207720739, 8.6002389217673922, 8.109488904605735, 9.0073168679104718, 9.9908774419168029, 11.086005340170239, 10.834077271560769, 9.5431362652439109, 9.5110439427885076, 8.6579009998155421, 9.0210514487895015, 9.9230223554278503],
      "text": ["Value added - agriculture: 11.32 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 11.11 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 9.61 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 8.2 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 7.16 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 7.42 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 7.58 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Value added - agriculture: 7.97 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Value added - agriculture: 8.6 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 8.11 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 9.01 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 9.99 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 11.09 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 10.83 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 9.54 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 9.51 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 8.66 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 9.02 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Value added - agriculture: 9.92 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [2.96, 2.9599999999999995, 2.6200000000000001, 2.5, 2.2799999999999998, 2.1400000000000001, 2.2400000000000002, 2.1400000000000001, 2.21, 2.1899999999999999, 2.1000000000000001, 2.0600000000000001, 2, 1.8600000000000001, 1.8500000000000001, 1.75, 1.6699999999999999, 1.7700000000000002, 1.7899999999999998],
      "text": ["Value added - agriculture: 2.96 % (GDP)<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.96 % (GDP)<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.62 % (GDP)<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.5 % (GDP)<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.28 % (GDP)<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.14 % (GDP)<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.24 % (GDP)<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.14 % (GDP)<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.21 % (GDP)<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.19 % (GDP)<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.1 % (GDP)<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2.06 % (GDP)<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 2 % (GDP)<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 1.86 % (GDP)<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 1.85 % (GDP)<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 1.75 % (GDP)<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 1.67 % (GDP)<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 1.77 % (GDP)<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Value added - agriculture: 1.79 % (GDP)<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [19.814799843691659, 18.276722490657271, 18.000729275616699, 17.157921376248936, 16.348903605953858, 14.352867666313731, 13.634794760943263, 16.094693976015957, 17.099969608336142, 16.745653277979947, 16.051231922672837, 16.604317490904354, 16.658500866991908, 16.536680759237544, 16.279480721856693, 15.294527455391485, 14.696737459007581, 15.524098009844337, 15.293958431791976],
      "text": ["Value added - agriculture: 19.81 % (GDP)<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - agriculture: 18.28 % (GDP)<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - agriculture: 18 % (GDP)<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - agriculture: 17.16 % (GDP)<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - agriculture: 16.35 % (GDP)<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Value added - agriculture: 14.35 % (GDP)<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - agriculture: 13.63 % (GDP)<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - agriculture: 16.09 % (GDP)<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - agriculture: 17.1 % (GDP)<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - agriculture: 16.75 % (GDP)<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - agriculture: 16.05 % (GDP)<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - agriculture: 16.6 % (GDP)<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Value added - agriculture: 16.66 % (GDP)<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - agriculture: 16.54 % (GDP)<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - agriculture: 16.28 % (GDP)<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - agriculture: 15.29 % (GDP)<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - agriculture: 14.7 % (GDP)<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - agriculture: 15.52 % (GDP)<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Value added - agriculture: 15.29 % (GDP)<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [5.5, 4.9000000000000004, 4.2599999999999998, 3.8600000000000003, 3.7799999999999998, 3.75, 4.0800000000000001, 3.3399999999999999, 3.1500000000000004, 2.9300000000000002, 2.9900000000000002, 3.3599999999999999, 3.8700000000000001, 3.8399999999999994, 3.5499999999999998, 3.3900000000000001, 3.5300000000000002, 4.0099999999999998, 3.8700000000000001],
      "text": ["Value added - agriculture: 5.5 % (GDP)<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 4.9 % (GDP)<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 4.26 % (GDP)<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.86 % (GDP)<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.78 % (GDP)<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.75 % (GDP)<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 4.08 % (GDP)<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.34 % (GDP)<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.15 % (GDP)<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 2.93 % (GDP)<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 2.99 % (GDP)<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.36 % (GDP)<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.87 % (GDP)<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.84 % (GDP)<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.55 % (GDP)<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.39 % (GDP)<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.53 % (GDP)<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 4.01 % (GDP)<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Value added - agriculture: 3.87 % (GDP)<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [20.855002931194534, 20.239904799020895, 19.01886214122883, 18.376467067328164, 18.264013365469179, 18.91545858625603, 18.20660377780975, 16.877155928384379, 17.085777428914749, 16.132625569464171, 15.416054797757052, 14.748212664819201, 13.816744752673124, 13.24142277288435, 12.742437082001484, 12.042544848532982, 11.414523017333975, 12.270507908160702, 12.682225077772539],
      "text": ["Value added - agriculture: 20.86 % (GDP)<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 20.24 % (GDP)<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 19.02 % (GDP)<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 18.38 % (GDP)<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 18.26 % (GDP)<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 18.92 % (GDP)<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 18.21 % (GDP)<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 16.88 % (GDP)<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 17.09 % (GDP)<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 16.13 % (GDP)<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 15.42 % (GDP)<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 14.75 % (GDP)<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 13.82 % (GDP)<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 13.24 % (GDP)<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 12.74 % (GDP)<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 12.04 % (GDP)<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 11.41 % (GDP)<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 12.27 % (GDP)<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Value added - agriculture: 12.68 % (GDP)<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [15.189999999999998, 14.340000000000002, 13.130000000000001, 12.970000000000001, 13.720000000000001, 14.48, 15.289999999999999, 13.929999999999998, 13.51, 13.369999999999999, 13.359999999999999, 13.34, 13.49, 13.48, 13.16, 12.809999999999999, 12.710000000000003, 13.699999999999999, 13.279999999999999],
      "text": ["Value added - agriculture: 15.19 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 14.34 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.13 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 12.97 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.72 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 14.48 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 15.29 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.93 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.51 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.37 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.36 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.34 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.49 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.48 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.16 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 12.81 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 12.71 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.7 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Value added - agriculture: 13.28 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [23.462737720336836, 22.840981971435937, 22.549521702664364, 21.448765698831021, 21.468635890970194, 21.323453061957984, 21.626527331493929, 21.788383292738306, 22.308906367377308, 21.388817776122654, 20.993704715161865, 20.783059961976395, 20.447940379211406, 19.573569677182761, 19.166157550369302, 18.425719436233326, 18.043082361764256, 18.79455121237309, 19.652730943370138],
      "text": ["Value added - agriculture: 23.46 % (GDP)<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - agriculture: 22.84 % (GDP)<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - agriculture: 22.55 % (GDP)<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - agriculture: 21.45 % (GDP)<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - agriculture: 21.47 % (GDP)<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - agriculture: 21.32 % (GDP)<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Value added - agriculture: 21.63 % (GDP)<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 21.79 % (GDP)<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 22.31 % (GDP)<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 21.39 % (GDP)<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 20.99 % (GDP)<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 20.78 % (GDP)<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 20.45 % (GDP)<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 19.57 % (GDP)<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 19.17 % (GDP)<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 18.43 % (GDP)<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 18.04 % (GDP)<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 18.79 % (GDP)<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Value added - agriculture: 19.65 % (GDP)<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [1.3, 1.2300000000000002, 1.1100000000000001, 1.0800000000000001, 1.05, 1.05, 1.0800000000000001, 1.1100000000000001, 1.0800000000000001, 1.1200000000000001, 1.0700000000000001, 1, 1.03, 1.1200000000000001, 1.1299999999999999, 1.04, 1.0399999999999998, 1.03, 0.94999999999999996],
      "text": ["Value added - agriculture: 1.3 % (GDP)<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.23 % (GDP)<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.11 % (GDP)<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.08 % (GDP)<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.05 % (GDP)<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.05 % (GDP)<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.08 % (GDP)<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.11 % (GDP)<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.08 % (GDP)<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.12 % (GDP)<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.07 % (GDP)<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1 % (GDP)<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.03 % (GDP)<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.12 % (GDP)<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.13 % (GDP)<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.04 % (GDP)<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.04 % (GDP)<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 1.03 % (GDP)<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Value added - agriculture: 0.95 % (GDP)<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [9.8000000000000007, 9.3300000000000001, 9.1699999999999999, 8.0899999999999999, 7.4600000000000009, 7.4200000000000008, 8.0700000000000021, 8.9700000000000006, 8.1699999999999999, 7.6900000000000004, 6.6799999999999997, 6.5599999999999996, 6.8700000000000001, 6.1399999999999997, 6.0399999999999991, 5.7800000000000002, 6.410000000000001, 6.669999999999999, 5.54],
      "text": ["Value added - agriculture: 9.8 % (GDP)<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 9.33 % (GDP)<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 9.17 % (GDP)<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 8.09 % (GDP)<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 7.46 % (GDP)<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 7.42 % (GDP)<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 8.07 % (GDP)<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 8.97 % (GDP)<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 8.17 % (GDP)<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 7.69 % (GDP)<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 6.68 % (GDP)<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 6.56 % (GDP)<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 6.87 % (GDP)<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 6.14 % (GDP)<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 6.04 % (GDP)<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 5.78 % (GDP)<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 6.41 % (GDP)<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 6.67 % (GDP)<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Value added - agriculture: 5.54 % (GDP)<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [8.4890307063797437, 8.9014433247414964, 6.5194048277272953, 5.9571085751054591, 4.5773417487943462, 5.1456594957009232, 4.7039015519213345, 4.1952245183028074, 4.8843500265107815, 4.1298149095271555, 4.6135825622042113, 4.3206564689062104, 3.9695105799185453, 3.9289673876981701, 3.9413944060189441, 3.8523010562332356, 3.7074970951571329, 3.6751448629688412, 3.9555635104248994],
      "text": ["Value added - agriculture: 8.49 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 8.9 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 6.52 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 5.96 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 4.58 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 5.15 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 4.7 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 4.2 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 4.88 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 4.13 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 4.61 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 4.32 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 3.97 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 3.93 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 3.94 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 3.85 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 3.71 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 3.68 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Value added - agriculture: 3.96 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [3.2750441026753827, 3.0259579126639453, 2.6788462794437269, 2.3793448993544328, 2.4135873389967726, 2.293399793103386, 2.2105977837141055, 2.3393469943664216, 2.2705051164081165, 2.3200634924663581, 2.5247293829740491, 2.4558873944251971, 2.6151187710319332, 2.6836832379872142, 2.6650788314510807, 2.6302847335539576, 2.4019278115535934, 2.7449980108470746, 2.5346772600985239],
      "text": ["Value added - agriculture: 3.28 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 3.03 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.68 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.38 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.41 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.29 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.21 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.34 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.27 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.32 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.52 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.46 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.62 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.68 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.67 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.63 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.4 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.74 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Value added - agriculture: 2.53 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [7.4500000000000002, 6.8899999999999997, 6.5, 7.1199999999999992, 7.1900000000000004, 6.1200000000000001, 6.9200000000000008, 6.5, 4.6400000000000006, 6.8000000000000007, 8.7699999999999996, 9.3800000000000008, 10.09, 9.7799999999999994, 9.8300000000000001, 11.220000000000001, 13.320000000000002, 12.210000000000001, 12.390000000000001],
      "text": ["Value added - agriculture: 7.45 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 6.89 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 6.5 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 7.12 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 7.19 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 6.12 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 6.92 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 6.5 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 4.64 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 6.8 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 8.77 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 9.38 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 10.09 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 9.78 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 9.83 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 11.22 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 13.32 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 12.21 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Value added - agriculture: 12.39 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [19.589999999999996, 17.809999999999995, 17.620000000000001, 16.809999999999999, 16.75, 16.789999999999999, 16.739999999999998, 17.030000000000001, 17.190000000000001, 16.850000000000001, 17.150000000000002, 16.789999999999999, 16.170000000000002, 16.359999999999999, 16.559999999999995, 16.030000000000001, 16.760000000000002, 18.640000000000001, 17.329999999999998],
      "text": ["Value added - agriculture: 19.59 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 17.81 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 17.62 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.81 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.75 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.79 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.74 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 17.03 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 17.19 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.85 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 17.15 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.79 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.17 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.36 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.56 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.03 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 16.76 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 18.64 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Value added - agriculture: 17.33 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "y": [1.1200000000000001, 1.2699999999999998, 1.1499999999999999, 1.01, 1.0799999999999998, 1.05, 0.95999999999999985, 1.03, 1.2, 1.1499999999999999, 1.3200000000000001, 1.1699999999999999, 1.03, 0.94000000000000006, 0.94999999999999996, 0.90000000000000002, 0.83999999999999997, 0.94999999999999996, 0.95999999999999985],
      "text": ["Value added - agriculture: 1.12 % (GDP)<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.27 % (GDP)<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.15 % (GDP)<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.01 % (GDP)<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.08 % (GDP)<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.05 % (GDP)<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 0.96 % (GDP)<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.03 % (GDP)<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.2 % (GDP)<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.15 % (GDP)<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.32 % (GDP)<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.17 % (GDP)<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 1.03 % (GDP)<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 0.94 % (GDP)<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 0.95 % (GDP)<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 0.9 % (GDP)<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 0.84 % (GDP)<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 0.95 % (GDP)<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Value added - agriculture: 0.96 % (GDP)<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [2.6099999999999999, 3.29, 2.9199999999999999, 2.6899999999999999, 3.0499999999999998, 2.5899999999999999, 2.5600000000000001, 2.9299999999999997, 3.2000000000000002, 3.0099999999999993, 3.25, 2.9900000000000002, 2.5, 2.6499999999999999, 3.0099999999999998, 2.4099999999999997, 2.3700000000000001, 2.5699999999999998, 2.2200000000000002],
      "text": ["Value added - agriculture: 2.61 % (GDP)<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 3.29 % (GDP)<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.92 % (GDP)<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.69 % (GDP)<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 3.05 % (GDP)<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.59 % (GDP)<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.56 % (GDP)<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.93 % (GDP)<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 3.2 % (GDP)<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 3.01 % (GDP)<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 3.25 % (GDP)<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.99 % (GDP)<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.5 % (GDP)<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.65 % (GDP)<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 3.01 % (GDP)<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.41 % (GDP)<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.37 % (GDP)<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.57 % (GDP)<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Value added - agriculture: 2.22 % (GDP)<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [28.024258897629586, 26.333884267735257, 26.246259727096493, 25.127188267711318, 24.650196323322024, 25.740587432016738, 26.513292760123978, 24.851199814799916, 23.939732091452029, 24.124546532465487, 23.05872577090285, 22.225545603546152, 22.182045058847475, 22.195599050626701, 22.346056114780676, 21.719672649530583, 22.039558927650592, 23.374581172218427, 23.116155619724495],
      "text": ["Value added - agriculture: 28.02 % (GDP)<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 26.33 % (GDP)<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 26.25 % (GDP)<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 25.13 % (GDP)<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 24.65 % (GDP)<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 25.74 % (GDP)<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 26.51 % (GDP)<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 24.85 % (GDP)<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 23.94 % (GDP)<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 24.12 % (GDP)<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 23.06 % (GDP)<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 22.23 % (GDP)<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 22.18 % (GDP)<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 22.2 % (GDP)<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 22.35 % (GDP)<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 21.72 % (GDP)<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 22.04 % (GDP)<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 23.37 % (GDP)<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Value added - agriculture: 23.12 % (GDP)<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [2.6499999999999995, 2.4100000000000001, 2.0899999999999999, 2.0499999999999994, 2.3599999999999999, 2.5700000000000003, 2.3999999999999999, 2.1099999999999999, 2.04, 1.98, 1.9299999999999999, 2.1299999999999999, 2.23, 2.4100000000000001, 2.4900000000000002, 2.27, 1.9599999999999997, 2.5200000000000005, 2.4699999999999998],
      "text": ["Value added - agriculture: 2.65 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.41 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.09 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.05 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.36 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.57 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.4 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.11 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.04 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 1.98 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 1.93 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.13 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.23 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.41 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.49 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.27 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 1.96 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.52 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Value added - agriculture: 2.47 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [0.82999999999999985, 0.94999999999999984, 0.72999999999999998, 0.73999999999999988, 0.78000000000000003, 0.84000000000000008, 0.69999999999999996, 0.80000000000000004, 0.91000000000000003, 0.84999999999999998, 0.93999999999999995, 0.90000000000000002, 0.68000000000000005, 0.69999999999999984, 0.85000000000000009, 0.68999999999999995, 0.78000000000000003, 0.75, 0.84999999999999998],
      "text": ["Value added - agriculture: 0.83 % (GDP)<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.95 % (GDP)<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.73 % (GDP)<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.74 % (GDP)<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.78 % (GDP)<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.84 % (GDP)<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.7 % (GDP)<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.8 % (GDP)<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.91 % (GDP)<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.85 % (GDP)<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.94 % (GDP)<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.9 % (GDP)<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.68 % (GDP)<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.7 % (GDP)<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.85 % (GDP)<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.69 % (GDP)<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.78 % (GDP)<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.75 % (GDP)<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Value added - agriculture: 0.85 % (GDP)<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "y": [2.8024781933514298, 2.7542214083669911, 2.6292124194865578, 2.5009477046745818, 2.5669458675671728, 2.4473273073598407, 2.1292799385049257, 2.0849169932320031, 2.4197794926743863, 2.570379709036708, 2.5996732246734986, 2.7725434360362931, 2.5188706074386409, 2.3636676208977789, 2.4032397073372049, 2.2633732044258448, 2.2002103062361171, 2.3092641016239588, 2.2345037561540479],
      "text": ["Value added - agriculture: 2.8 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.75 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.63 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.5 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.57 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.45 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.13 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.08 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.42 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.57 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.6 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.77 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.52 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.36 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.4 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.26 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.2 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.31 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Value added - agriculture: 2.23 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [1.4799999999999998, 1.5700000000000001, 1.03, 0.92000000000000004, 1.04, 0.84999999999999998, 0.56000000000000005, 0.94999999999999984, 1.21, 0.98999999999999999, 1.0800000000000001, 1.24, 0.8899999999999999, 0.94000000000000006, 1.1799999999999997, 0.89000000000000012, 0.90000000000000013, 0.93000000000000016, 1.02],
      "text": ["Value added - agriculture: 1.48 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 1.57 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 1.03 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.92 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 1.04 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.85 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.56 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.95 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 1.21 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.99 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 1.08 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 1.24 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.89 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.94 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 1.18 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.89 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.9 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 0.93 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Value added - agriculture: 1.02 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [4.4699999999999998, 3.8700000000000001, 3.1899999999999999, 2.9199999999999999, 2.7400000000000002, 2.29, 2.8300000000000001, 2.6199999999999997, 2.1600000000000001, 2.0699999999999994, 2.1700000000000004, 2.29, 2.77, 2.9500000000000002, 2.8700000000000001, 2.48, 2.5600000000000005, 2.96, 2.6999999999999997],
      "text": ["Value added - agriculture: 4.47 % (GDP)<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 3.87 % (GDP)<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 3.19 % (GDP)<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.92 % (GDP)<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.74 % (GDP)<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.29 % (GDP)<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.83 % (GDP)<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.62 % (GDP)<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.16 % (GDP)<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.07 % (GDP)<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.17 % (GDP)<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.29 % (GDP)<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.77 % (GDP)<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.95 % (GDP)<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.87 % (GDP)<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.48 % (GDP)<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.56 % (GDP)<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.96 % (GDP)<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Value added - agriculture: 2.7 % (GDP)<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [1.996781654691874, 1.9430980734956087, 1.5216560362441438, 1.5081409914052679, 1.7057516763324321, 1.5634449590085679, 1.5072929887892903, 1.7614567947823783, 1.7732289613603809, 1.8027385387609984, 1.6915644081337808, 1.7070594340014522, 1.5588139205629838, 1.5588710882946826, 1.6680392513416278, 1.5845668733958194, 1.6400276663819995, 1.6527350395843898, 1.4671914240018802],
      "text": ["Value added - agriculture: 2 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.94 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.52 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.51 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.71 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.56 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.51 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.76 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.77 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.8 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.69 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.71 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.56 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.56 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.67 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.58 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.64 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.65 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Value added - agriculture: 1.47 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [1.8500000000000001, 1.8200000000000003, 1.6799999999999997, 1.5199999999999998, 1.6100000000000003, 1.52, 1.3199999999999998, 1.6000000000000001, 1.6499999999999997, 1.6299999999999994, 1.46, 1.5600000000000001, 1.6099999999999997, 1.4399999999999995, 1.54, 1.6499999999999999, 1.5199999999999998, 1.5700000000000001, 1.6399999999999997],
      "text": ["Value added - agriculture: 1.85 % (GDP)<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.82 % (GDP)<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.68 % (GDP)<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.52 % (GDP)<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.61 % (GDP)<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.52 % (GDP)<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.32 % (GDP)<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.6 % (GDP)<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.65 % (GDP)<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.63 % (GDP)<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.46 % (GDP)<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.56 % (GDP)<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.61 % (GDP)<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.44 % (GDP)<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.54 % (GDP)<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.65 % (GDP)<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.52 % (GDP)<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.57 % (GDP)<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Value added - agriculture: 1.64 % (GDP)<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [0.85093750873130025, 0.7308496079939556, 0.55084329787368158, 0.57079641751393717, 0.56078780745262446, 0.67077825237153754, 0.68076951176498923, 0.59078156831809181, 0.68077879148731391, 0.6307598192823084, 0.63076871789093403, 0.75074092016541327, 0.63071217881377095, 0.57071819316245542, 0.59072147494416238, 0.57069421953345612, 0.60072157050176922, 0.64080078892538583, 0.67074176245192541],
      "text": ["Value added - agriculture: 0.85 % (GDP)<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.73 % (GDP)<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.55 % (GDP)<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.57 % (GDP)<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.56 % (GDP)<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.67 % (GDP)<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.68 % (GDP)<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.59 % (GDP)<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.68 % (GDP)<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.63 % (GDP)<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.63 % (GDP)<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.75 % (GDP)<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.63 % (GDP)<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.57 % (GDP)<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.59 % (GDP)<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.57 % (GDP)<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.6 % (GDP)<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.64 % (GDP)<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Value added - agriculture: 0.67 % (GDP)<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [1.49, 1.48, 1.2599999999999998, 1.3, 1.4199999999999999, 1.3400000000000001, 1.1499999999999999, 1.27, 1.3999999999999999, 1.3500000000000001, 1.25, 1.2, 1.1299999999999999, 1.1100000000000001, 1.2100000000000002, 1.1299999999999997, 1.05, 1.0900000000000001, 1.21],
      "text": ["Value added - agriculture: 1.49 % (GDP)<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.48 % (GDP)<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.26 % (GDP)<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.3 % (GDP)<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.42 % (GDP)<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.34 % (GDP)<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.15 % (GDP)<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.27 % (GDP)<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.4 % (GDP)<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.35 % (GDP)<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.25 % (GDP)<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.2 % (GDP)<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.13 % (GDP)<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.11 % (GDP)<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.21 % (GDP)<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.13 % (GDP)<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.05 % (GDP)<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.09 % (GDP)<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Value added - agriculture: 1.21 % (GDP)<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "y": [12.28623276042852, 12.853094825723593, 11.579849884001414, 10.575002802613385, 10.196801760384746, 10.117122064311788, 9.5901359584072363, 9.2815258715286326, 9.1322495430463846, 9.0624146052848946, 8.8934823753525283, 8.5950741159293873, 8.3462674843039846, 8.0180353008823708, 7.4210747871093954, 7.0031125491291162, 7.102493733098866, 7.6599207940893042, 7.2026152967681965],
      "text": ["Value added - agriculture: 12.29 % (GDP)<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 12.85 % (GDP)<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 11.58 % (GDP)<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 10.58 % (GDP)<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 10.2 % (GDP)<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 10.12 % (GDP)<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 9.59 % (GDP)<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 9.28 % (GDP)<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 9.13 % (GDP)<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 9.06 % (GDP)<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 8.89 % (GDP)<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 8.6 % (GDP)<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 8.35 % (GDP)<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 8.02 % (GDP)<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 7.42 % (GDP)<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 7 % (GDP)<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 7.1 % (GDP)<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 7.66 % (GDP)<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Value added - agriculture: 7.2 % (GDP)<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [10.681208939364263, 9.6293518354948482, 8.8758497894797834, 8.8030912448956862, 8.0898232179289433, 7.4301291083069323, 8.8283513867043357, 7.7006053512064936, 7.7804562778098108, 9.413650247879831, 9.5462495120752333, 9.5798844659341622, 9.9396850994130261, 11.259918447879254, 11.527915346285948, 10.891346655198436, 11.486934407283533, 11.712405317256737, 10.920863732022186],
      "text": ["Value added - agriculture: 10.68 % (GDP)<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Value added - agriculture: 9.63 % (GDP)<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Value added - agriculture: 8.88 % (GDP)<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Value added - agriculture: 8.8 % (GDP)<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - agriculture: 8.09 % (GDP)<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - agriculture: 7.43 % (GDP)<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Value added - agriculture: 8.83 % (GDP)<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Value added - agriculture: 7.7 % (GDP)<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Value added - agriculture: 7.78 % (GDP)<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Value added - agriculture: 9.41 % (GDP)<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - agriculture: 9.55 % (GDP)<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - agriculture: 9.58 % (GDP)<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - agriculture: 9.94 % (GDP)<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - agriculture: 11.26 % (GDP)<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Value added - agriculture: 11.53 % (GDP)<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Value added - agriculture: 10.89 % (GDP)<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Value added - agriculture: 11.49 % (GDP)<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - agriculture: 11.71 % (GDP)<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Value added - agriculture: 10.92 % (GDP)<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [2.3572374307951138, 2.3468913550536064, 2.0286855559589743, 1.9494461992338181, 1.8995161753156606, 1.8644021140145766, 1.7975046697206731, 1.7764584978621483, 1.8738042632718994, 1.9636252984398115, 2.1324862293328306, 1.9929021275389145, 2.0616337451993756, 1.9225452730155665, 1.9598735900842279, 1.9396559457882825, 1.8979493374602749, 1.9993416664521972, 1.9307857097606373],
      "text": ["Value added - agriculture: 2.36 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 2.35 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 2.03 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.95 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.9 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.86 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.8 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.78 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.87 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.96 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 2.13 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.99 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 2.06 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.92 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.96 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.94 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.9 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 2 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Value added - agriculture: 1.93 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [2.0600000000000001, 1.8700000000000001, 1.8600000000000001, 1.9499999999999997, 1.8200000000000001, 1.6399999999999999, 1.55, 1.78, 1.5799999999999998, 1.6599999999999999, 1.79, 1.74, 1.72, 1.77, 1.8600000000000001, 1.6499999999999999, 1.6399999999999999, 1.6000000000000003, 1.55],
      "text": ["Value added - agriculture: 2.06 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.87 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.86 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.95 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.82 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.64 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.55 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.78 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.58 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.66 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.79 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.74 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.72 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.77 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.86 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.65 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.64 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.6 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Value added - agriculture: 1.55 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [1.006225089152764, 0.99978849977645468, 0.81959791388254954, 0.88426797736419838, 0.86709316383948298, 0.69254606838715793, 0.63148895422778772, 0.74777017031031423, 0.63205885791258354, 0.75764510506124916, 0.66049938104381634, 0.62345045241223074, 0.66739628497610559, 0.60948149635420035, 0.64808228112548039, 0.58130939549334582, 0.64695921316583116, 0.72202517737044303, 0.6359182723022635],
      "text": ["Value added - agriculture: 1.01 % (GDP)<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 1 % (GDP)<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.82 % (GDP)<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.88 % (GDP)<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.87 % (GDP)<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.69 % (GDP)<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.63 % (GDP)<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.75 % (GDP)<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.63 % (GDP)<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.76 % (GDP)<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.66 % (GDP)<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.62 % (GDP)<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.67 % (GDP)<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.61 % (GDP)<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.65 % (GDP)<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.58 % (GDP)<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.65 % (GDP)<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.72 % (GDP)<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Value added - agriculture: 0.64 % (GDP)<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [4.8617227939092826, 4.177983097993021, 4.1472867979405263, 3.1196619267597425, 2.9497309298173526, 2.7454468480919387, 2.7264438465772369, 2.904372158018711, 3.0201625937689367, 3.3025621944819532, 3.2494209022458116, 3.4070963503705163, 3.6584442374558619, 3.3778870586343244, 3.6500655835637308, 3.4378020070447093, 3.5914162609665201, 3.9839094777151547, 3.6295123306105843],
      "text": ["Value added - agriculture: 4.86 % (GDP)<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 4.18 % (GDP)<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 4.15 % (GDP)<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.12 % (GDP)<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 2.95 % (GDP)<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 2.75 % (GDP)<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 2.73 % (GDP)<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 2.9 % (GDP)<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.02 % (GDP)<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.3 % (GDP)<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.25 % (GDP)<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.41 % (GDP)<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.66 % (GDP)<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.38 % (GDP)<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.65 % (GDP)<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.44 % (GDP)<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.59 % (GDP)<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.98 % (GDP)<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Value added - agriculture: 3.63 % (GDP)<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Value added - agriculture (REMIND_39)",
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
      "tickvals": [0, 25.000000000000004, 50, 75, 100],
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
    "b55c3a514fa0": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c6038782e": {
      "y": {}
    }
  },
  "cur_data": "b55c3a514fa0",
  "visdat": {
    "b55c3a514fa0": ["function (y) ", "x"],
    "b55c6038782e": ["function (y) ", "x"]
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

  
