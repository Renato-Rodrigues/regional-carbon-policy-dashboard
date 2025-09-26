(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Resources_Oil_reserves_line') 

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
      "y": [0.23999999999999999, 0.21999999999999997, 0.20999999999999999, 0.17999999999999999, 0.19, 0.19, 0.20000000000000001, 0.19, 0.17000000000000001, 0.16, 0.17000000000000001, 0.16999999999999998, 0.14000000000000001, 0.14000000000000001, 0.13, 0.13, 0.12, 0.14000000000000001, 0.14999999999999999],
      "text": ["Oil reserves: 0.24 % (World)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.22 % (World)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.21 % (World)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.18 % (World)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.19 % (World)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.19 % (World)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.2 % (World)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.19 % (World)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.17 % (World)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.16 % (World)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.17 % (World)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.17 % (World)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.14 % (World)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.14 % (World)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.13 % (World)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.13 % (World)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.12 % (World)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.14 % (World)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil reserves: 0.15 % (World)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [1.0593577197826465, 1.0177207812471487, 1.0136084337571483, 1.0398001121549374, 1.0164379211254129, 1.0913141263751851, 1.2363629364985376, 1.2318416149893421, 2.3632532585918877, 2.2940816425954553, 2.9836255121235253, 2.9745236584554862, 2.9673053455538922, 2.9810424306608474, 2.9528062698904565, 2.8559478951746198, 2.7703732705394444, 2.7064948595805851, 2.6139012771315113],
      "text": ["Oil reserves: 1.06 % (World)<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.02 % (World)<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.01 % (World)<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.04 % (World)<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.02 % (World)<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.09 % (World)<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.24 % (World)<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.23 % (World)<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.36 % (World)<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.29 % (World)<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.98 % (World)<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.97 % (World)<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.97 % (World)<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.98 % (World)<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.95 % (World)<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.86 % (World)<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.77 % (World)<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.71 % (World)<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 2.61 % (World)<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [0.29999999999999999, 0.28999999999999998, 0.28999999999999998, 0.28999999999999998, 0.28000000000000008, 0.28000000000000003, 0.28000000000000003, 0.27000000000000002, 0.29999999999999999, 0.28999999999999998, 0.27000000000000002, 0.27000000000000002, 0.26999999999999996, 0.27000000000000002, 0.27000000000000002, 0.20999999999999996, 0.20000000000000001, 0.20000000000000004, 0.19000000000000003],
      "text": ["Oil reserves: 0.3 % (World)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.29 % (World)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.29 % (World)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.29 % (World)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.28 % (World)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.28 % (World)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.28 % (World)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.27 % (World)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.3 % (World)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.29 % (World)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.27 % (World)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.27 % (World)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.27 % (World)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.27 % (World)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.27 % (World)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.21 % (World)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.2 % (World)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.2 % (World)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil reserves: 0.19 % (World)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [14.820000000000002, 14.130000000000001, 13.98, 13.859999999999999, 13.57, 13.44, 13.32, 12.910000000000002, 11.880000000000001, 11.390000000000001, 10.52, 10.49, 10.390000000000001, 10.339999999999998, 10.299999999999999, 10.26, 10.09, 10.24, 10.02],
      "text": ["Oil reserves: 14.82 % (World)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 14.13 % (World)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.98 % (World)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.86 % (World)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.57 % (World)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.44 % (World)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.32 % (World)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 12.91 % (World)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 11.88 % (World)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 11.39 % (World)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.52 % (World)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.49 % (World)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.39 % (World)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.34 % (World)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.3 % (World)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.26 % (World)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.09 % (World)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.24 % (World)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.02 % (World)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [0.2441873825848058, 0.23232852051652242, 0.099584517565128094, 0.091306205010530939, 0.09975754345097497, 0.091622036070236945, 0.091784008522864571, 0.20040330652834912, 0.18553313067779853, 0.077000153146132524, 0.075492557794451035, 0.075472036601305317, 0.058643910639848501, 0.058578789599954696, 0.091986076741005826, 0.12537503638716302, 0.12535179392587592, 0.12515128216571705, 0.11675507211950874],
      "text": ["Oil reserves: 0.24 % (World)<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.23 % (World)<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.1 % (World)<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.09 % (World)<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.1 % (World)<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.09 % (World)<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.09 % (World)<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.2 % (World)<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.19 % (World)<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.08 % (World)<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.08 % (World)<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.08 % (World)<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.06 % (World)<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.06 % (World)<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.09 % (World)<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.13 % (World)<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.13 % (World)<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.13 % (World)<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.12 % (World)<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [1.04, 1.24, 1.1399999999999999, 1, 0.93999999999999995, 0.88, 0.78999999999999992, 0.77000000000000002, 0.70999999999999996, 0.68000000000000005, 0.62, 0.60999999999999988, 0.59000000000000008, 0.58999999999999997, 0.43999999999999995, 0.42999999999999994, 0.39000000000000001, 0.35000000000000003, 0.34000000000000002],
      "text": ["Oil reserves: 1.04 % (World)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 1.24 % (World)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 1.14 % (World)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 1 % (World)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.94 % (World)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.88 % (World)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.79 % (World)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.77 % (World)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.71 % (World)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.68 % (World)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.62 % (World)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.61 % (World)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.59 % (World)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.59 % (World)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.44 % (World)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.43 % (World)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.39 % (World)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.35 % (World)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.34 % (World)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [0.84955259817759399, 0.81956843307661098, 0.65965300127136894, 0.59968347487967866, 0.58968844824977118, 0.51972576093208411, 0.49973671519082974, 0.4897423701261534, 0.37980277904456722, 0.34982071818280491, 0.32983299342114974, 0.34982485713463002, 0.32983649956975092, 0.30984775517553542, 0.39980513453823635, 0.45977737836645793, 0.48976445424960957, 0.4997610574563916, 0.47977183798900441],
      "text": ["Oil reserves: 0.85 % (World)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.82 % (World)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.66 % (World)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.6 % (World)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.59 % (World)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.52 % (World)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.5 % (World)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.49 % (World)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.38 % (World)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.35 % (World)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.33 % (World)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.35 % (World)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.33 % (World)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.31 % (World)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.4 % (World)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.46 % (World)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.49 % (World)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.5 % (World)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.48 % (World)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [0.68999999999999995, 0.67000000000000004, 0.82999999999999985, 0.87, 0.89000000000000001, 0.91999999999999993, 0.94000000000000006, 0.93999999999999995, 0.87, 0.92000000000000004, 0.80000000000000004, 0.91000000000000003, 0.93999999999999995, 0.97999999999999987, 0.78999999999999992, 0.76000000000000001, 0.77000000000000002, 0.81000000000000005, 0.75],
      "text": ["Oil reserves: 0.69 % (World)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.67 % (World)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.83 % (World)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.87 % (World)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.89 % (World)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.92 % (World)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.94 % (World)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.94 % (World)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.87 % (World)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.92 % (World)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.8 % (World)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.91 % (World)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.94 % (World)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.98 % (World)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.79 % (World)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.76 % (World)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.77 % (World)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.81 % (World)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.75 % (World)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [0.021124163654033624, 0.021108449238132796, 0.021091007752248044, 0.021491808114852518, 0.02149755413202948, 0.021094962634575557, 0.02111287183199214, 0.021132930628749363, 0.021157205714226402, 0.021180488584520665, 0.013423376957038876, 0.013426761284207776, 0.013434211257069268, 0.013443451220443287, 0.013449857222003252, 0.013454064892444056, 0.01345968015267153, 0.013461028652365798, 0.013464672056684718],
      "text": ["Oil reserves: 0.02 % (World)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [0.01, 0.01, 0.01, 0.0099999999999999985, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.0099999999999999985, 0.0099999999999999985, 0.01, 0.01, 0.01],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [0.17111000950868877, 0.16417009710020863, 0.16269947345166491, 0.16204308883630367, 0.39157927715058888, 0.39048832910528108, 0.38678792322900252, 0.38308124226249018, 0.35313066785430203, 0.34408835759801149, 0.31982326331564376, 0.31951466640194687, 0.31845711775872471, 0.32051319973392012, 0.32122375525307456, 0.31876315211693079, 0.3206715975099263, 0.32102363469026479, 0.31179033785299937],
      "text": ["Oil reserves: 0.17 % (World)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.16 % (World)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.16 % (World)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.16 % (World)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.39 % (World)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.39 % (World)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.39 % (World)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.38 % (World)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.35 % (World)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.34 % (World)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.32 % (World)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.32 % (World)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.32 % (World)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.31 % (World)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [0.14999999999999999, 0.14999999999999999, 0.12000000000000001, 0.12, 0.11, 0.11, 0.10000000000000001, 0.10000000000000001, 0.13, 0.13, 0.13, 0.14000000000000001, 0.14999999999999999, 0.14000000000000001, 0.11999999999999998, 0.099999999999999992, 0.11, 0.12000000000000001, 0.12],
      "text": ["Oil reserves: 0.15 % (World)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.15 % (World)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.12 % (World)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.12 % (World)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.11 % (World)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.11 % (World)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.1 % (World)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.1 % (World)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.13 % (World)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.13 % (World)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.13 % (World)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.14 % (World)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.15 % (World)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.14 % (World)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.12 % (World)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.1 % (World)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.11 % (World)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.12 % (World)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil reserves: 0.12 % (World)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [0.026729246218652476, 0.02577393326317276, 0.025558054168878262, 0.025721650473899179, 0.035857094563666411, 0.039389866776561429, 0.039324539394533085, 0.040805150882354368, 0.045378521463299813, 0.044555662563500617, 0.052299098885873085, 0.047764538794257419, 0.047646711157438119, 0.046289545109986494, 0.046085588302216922, 0.050471614474100257, 0.047270317731308888, 0.046349341642410467, 0.044680974822826604],
      "text": ["Oil reserves: 0.03 % (World)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.03 % (World)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.03 % (World)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.03 % (World)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.04 % (World)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.04 % (World)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.04 % (World)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.04 % (World)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.05 % (World)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.04 % (World)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.05 % (World)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.05 % (World)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.05 % (World)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.05 % (World)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.05 % (World)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.05 % (World)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.05 % (World)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.05 % (World)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.04 % (World)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [4.9400000000000004, 4.7400000000000002, 4.6900000000000004, 4.6500000000000004, 4.54, 4.5199999999999996, 4.4900000000000002, 4.419999999999999, 4.0700000000000003, 3.9399999999999999, 4.8600000000000003, 4.8400000000000007, 4.8200000000000003, 4.8399999999999999, 4.8600000000000003, 4.8099999999999996, 4.8200000000000003, 4.8200000000000003, 4.7099999999999991],
      "text": ["Oil reserves: 4.94 % (World)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.74 % (World)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.69 % (World)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.65 % (World)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.54 % (World)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.52 % (World)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.49 % (World)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.42 % (World)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.07 % (World)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 3.94 % (World)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.86 % (World)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.84 % (World)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.82 % (World)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.84 % (World)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.86 % (World)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.81 % (World)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.82 % (World)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.82 % (World)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.71 % (World)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [0.050000000000000003, 0.050000000000000003, 0.049999999999999996, 0.050000000000000003, 0.050000000000000003, 0.050000000000000003, 0.039999999999999994, 0.040000000000000001, 0.040000000000000001, 0.28999999999999998, 0.27000000000000002, 0.27000000000000002, 0.27000000000000002, 0.27000000000000002, 0.27000000000000002, 0.26000000000000001, 0.27000000000000002, 0.27000000000000002, 0.26000000000000001],
      "text": ["Oil reserves: 0.05 % (World)<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.05 % (World)<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.05 % (World)<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.05 % (World)<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.05 % (World)<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.05 % (World)<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.04 % (World)<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.04 % (World)<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.04 % (World)<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.29 % (World)<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.27 % (World)<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.27 % (World)<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.27 % (World)<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.27 % (World)<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.27 % (World)<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.26 % (World)<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.27 % (World)<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.27 % (World)<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil reserves: 0.26 % (World)<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [0.029999999999999995, 0.02, 0.02, 0.02, 0.02, 0.02, 0.029999999999999999, 0.020000000000000004, 0.02, 0.02, 0.020000000000000004, 0.019999999999999997, 0.020000000000000004, 0.019999999999999997, 0.02, 0.020000000000000004, 0.02, 0.029999999999999995, 0.029999999999999999],
      "text": ["Oil reserves: 0.03 % (World)<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.03 % (World)<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.02 % (World)<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.03 % (World)<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil reserves: 0.03 % (World)<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [0.40999999999999992, 0.37000000000000005, 0.37, 0.33000000000000007, 0.33000000000000002, 0.33000000000000002, 0.30000000000000004, 0.28999999999999998, 0.27000000000000002, 0.25, 0.23999999999999999, 0.23000000000000001, 0.23000000000000001, 0.22000000000000003, 0.22, 0.20000000000000001, 0.19, 0.19000000000000003, 0.14999999999999999],
      "text": ["Oil reserves: 0.41 % (World)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.37 % (World)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.37 % (World)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.33 % (World)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.33 % (World)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.33 % (World)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.3 % (World)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.29 % (World)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.27 % (World)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.25 % (World)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.24 % (World)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.23 % (World)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.23 % (World)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.22 % (World)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.22 % (World)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.2 % (World)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.19 % (World)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.19 % (World)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.15 % (World)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [0.050734757807382638, 0.049233175839090836, 0.0476766087274322, 0.048064047386911633, 0.048389672482197305, 0.062654801643711275, 0.063113694000605833, 0.061410744653470933, 0.057479804021290153, 0.055605338964661952, 0.051889056913399012, 0.052121280831947468, 0.050223054222425345, 0.048301955454866388, 0.052043052884051325, 0.052278636149127637, 0.052502091740871573, 0.052653556588020407, 0.050541936334282223],
      "text": ["Oil reserves: 0.05 % (World)<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.06 % (World)<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.06 % (World)<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.06 % (World)<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.06 % (World)<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.06 % (World)<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.05 % (World)<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [0.05000000000000001, 0.049999999999999996, 0.050000000000000003, 0.02, 0.02, 0.030000000000000002, 0.029999999999999999, 0.029999999999999999, 0.030000000000000002, 0.030000000000000002, 0.029999999999999999, 0.029999999999999999, 0.029999999999999999, 0.02, 0.02, 0.02, 0.02, 0.020000000000000004, 0.01],
      "text": ["Oil reserves: 0.05 % (World)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.05 % (World)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.05 % (World)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.02 % (World)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.03 % (World)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.03 % (World)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.03 % (World)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.03 % (World)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.03 % (World)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.03 % (World)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.03 % (World)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.03 % (World)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.02 % (World)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.02 % (World)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.02 % (World)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.02 % (World)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.02 % (World)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [0.28244418898040979, 0.32302140019717701, 0.33644677865720951, 0.32577552393060233, 0.40997655672240119, 0.40619912779469686, 0.40687334119079188, 0.40346720386059098, 0.37225513221206968, 0.35650081733746586, 0.33051836877756036, 0.33011600370875471, 0.32850360200792067, 0.3281665659069698, 0.32749346669012586, 0.32345004646984593, 0.32451987817840067, 0.27563227998404632, 0.26549191755664842],
      "text": ["Oil reserves: 0.28 % (World)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil reserves: 0.32 % (World)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil reserves: 0.34 % (World)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.33 % (World)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.41 % (World)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.41 % (World)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.41 % (World)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.4 % (World)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.37 % (World)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.36 % (World)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.33 % (World)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.33 % (World)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.33 % (World)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.33 % (World)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.33 % (World)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.32 % (World)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.32 % (World)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.28 % (World)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.27 % (World)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [0.01, 0.01, 0.01, 0.01, 0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [0.019999999999999997, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.020000000000000004, 0.02, 0.019999999999999997, 0.020000000000000004],
      "text": ["Oil reserves: 0.02 % (World)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [0.04085503564710094, 0.040815375333449498, 0.036061745260597376, 0.036016776801455222, 0.024262264992985543, 0.024099084576014066, 0.019415173305766958, 0.019388427172762516, 0.018399128714911114, 0.01840110222942111, 0.018402984729289331, 0.018407411438740338, 0.018410913471837972, 0.01840644370012804, 0.018410263450624069, 0.01839890366022915, 0.018380774889651789, 0.018362705138790923, 0.018343931001054206],
      "text": ["Oil reserves: 0.04 % (World)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.04 % (World)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.04 % (World)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.04 % (World)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [7.3799999999999999, 9.9299999999999997, 9.8399999999999999, 10.27, 10.32, 10.42, 10.18, 10.140000000000001, 9.2899999999999991, 9.9200000000000017, 9.4000000000000021, 9.5199999999999996, 9.5099999999999998, 9.5399999999999991, 9.6199999999999992, 9.4499999999999993, 9.3800000000000008, 9.3800000000000008, 12.279999999999998],
      "text": ["Oil reserves: 7.38 % (World)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.93 % (World)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.84 % (World)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.27 % (World)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.32 % (World)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.42 % (World)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.18 % (World)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.14 % (World)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.29 % (World)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.92 % (World)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.4 % (World)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.52 % (World)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.51 % (World)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.54 % (World)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.62 % (World)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.45 % (World)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.38 % (World)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.38 % (World)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 12.28 % (World)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [0.44, 0.41999999999999993, 0.41999999999999998, 0.45000000000000001, 0.42999999999999999, 0.41999999999999998, 0.41999999999999993, 0.40999999999999998, 0.39000000000000001, 0.37000000000000005, 0.33000000000000002, 0.34000000000000002, 0.34000000000000002, 0.28999999999999998, 0.28000000000000003, 0.27000000000000002, 0.27000000000000002, 0.27000000000000002, 0.27000000000000002],
      "text": ["Oil reserves: 0.44 % (World)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.45 % (World)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.43 % (World)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.41 % (World)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.39 % (World)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.37 % (World)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.33 % (World)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.34 % (World)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.34 % (World)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.29 % (World)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.28 % (World)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [1.9799999999999998, 1.8200000000000001, 1.77, 1.78, 1.6899999999999999, 1.72, 1.54, 1.6400000000000001, 1.71, 1.9000000000000001, 2.0299999999999994, 2.21, 2.4100000000000001, 2.1300000000000003, 2.1400000000000001, 2.5299999999999998, 2.8399999999999999, 2.8399999999999999, 2.6099999999999994],
      "text": ["Oil reserves: 1.98 % (World)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 1.82 % (World)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 1.77 % (World)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 1.78 % (World)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 1.69 % (World)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 1.72 % (World)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 1.54 % (World)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 1.64 % (World)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 1.71 % (World)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 1.9 % (World)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 2.03 % (World)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 2.21 % (World)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 2.41 % (World)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 2.13 % (World)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 2.14 % (World)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 2.53 % (World)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 2.84 % (World)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 2.84 % (World)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil reserves: 2.61 % (World)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [0.02, 0.01, 0.01, 0.01, 0.010000000000000002, 0.0099999999999999985, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.0099999999999999985, 0.01, 0.01, 0.01, 0.010000000000000002, 0.0099999999999999985, 0.01],
      "text": ["Oil reserves: 0.02 % (World)<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [0.01, 0.01, 0.01, 0.0099999999999999985, 0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0.01, 0.01, 0.0099999999999999985, 0.0099999999999999985, 0.0099999999999999985, 0.01],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [0.01, 0.01, 0.0099999999999999985, 0.01, 0.01, 0.01, 0.01, 0.01, 0.010000000000000002, 0.0099999999999999985, 0.01, 0.01, 0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0.01, 0.01],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [1.9799999999999998, 1.9699999999999998, 2.7599999999999998, 2.7799999999999998, 2.7399999999999998, 2.73, 2.71, 2.7399999999999998, 2.5200000000000005, 2.4399999999999999, 2.2600000000000002, 2.25, 2.23, 2.2400000000000002, 2.25, 2.25, 2.1800000000000002, 2.23, 2.1699999999999999],
      "text": ["Oil reserves: 1.98 % (World)<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 1.97 % (World)<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.76 % (World)<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.78 % (World)<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.74 % (World)<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.73 % (World)<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.71 % (World)<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.74 % (World)<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.52 % (World)<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.44 % (World)<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.26 % (World)<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.25 % (World)<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.23 % (World)<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.24 % (World)<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.25 % (World)<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.25 % (World)<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.18 % (World)<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.23 % (World)<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil reserves: 2.17 % (World)<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [0.029999999999999999, 0.029999999999999995, 0.029999999999999995, 0.029999999999999999, 0.029999999999999999, 0.030000000000000002, 0.02, 0.02, 0.02, 0.02, 0.020000000000000004, 0.01, 0.01, 0.01, 0.010000000000000002, 0.010000000000000002, 0.01, 0.01, 0.010000000000000002],
      "text": ["Oil reserves: 0.03 % (World)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [21.550000000000001, 20.68, 20.48, 20.489999999999995, 20.010000000000002, 19.890000000000001, 19.760000000000002, 19.469999999999999, 17.920000000000002, 17.359999999999996, 16.140000000000001, 16.09, 16.02, 16.140000000000001, 16.18, 16.010000000000002, 16.050000000000001, 16.100000000000001, 15.220000000000001],
      "text": ["Oil reserves: 21.55 % (World)<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 20.68 % (World)<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 20.48 % (World)<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 20.49 % (World)<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 20.01 % (World)<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 19.89 % (World)<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 19.76 % (World)<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 19.47 % (World)<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 17.92 % (World)<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 17.36 % (World)<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.14 % (World)<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.09 % (World)<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.02 % (World)<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.14 % (World)<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.18 % (World)<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.01 % (World)<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.05 % (World)<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.1 % (World)<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 15.22 % (World)<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [0.0099989814668406674, 0.009998995198663289, 0.009999009608161866, 0.009999022153005091, 0.0099990299907422656, 0.0099990361024228577, 0.0099990415164434351, 0.009999046321716526, 0.0099990519078791106, 0.0099990592995511246, 0.0099990674819878944, 0.0099990743115095718, 0.0099990792494560835, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [0.38791975192071515, 0.3680229379898749, 0.34812874449636361, 0.3083422960953956, 0.28844935301130475, 0.2685564292352145, 0.25860946109604138, 0.22876979997833255, 0.18898506597746006, 0.1889873368762002, 0.18899000496897941, 0.17904667825527187, 0.1790517050373498, 0.16910925839073854, 0.1591644720799851, 0.14921755823097504, 0.14921758047587397, 0.15916417566936317, 0.1492124450701752],
      "text": ["Oil reserves: 0.39 % (World)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.37 % (World)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.35 % (World)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.31 % (World)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.29 % (World)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.27 % (World)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.26 % (World)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.23 % (World)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.19 % (World)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.19 % (World)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.19 % (World)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.18 % (World)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.18 % (World)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.17 % (World)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.16 % (World)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.15 % (World)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.15 % (World)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.16 % (World)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.15 % (World)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [0.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [1.466125623777716, 1.4074849618420864, 1.3977473372106046, 1.3879940707547271, 1.1827359097170804, 1.1729947714740203, 1.173078323897309, 1.4664073900298185, 1.3491417969173869, 1.3100566753168155, 1.4078804338737525, 1.4470130550726115, 1.4568002341402371, 1.4861773130760934, 1.5253606104084045, 1.5058231459833202, 1.5253720753151012, 1.5449773051570139, 1.4961487168462957],
      "text": ["Oil reserves: 1.47 % (World)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.41 % (World)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.4 % (World)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.39 % (World)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.18 % (World)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.17 % (World)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.17 % (World)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.47 % (World)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.35 % (World)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.31 % (World)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.41 % (World)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.45 % (World)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.46 % (World)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.49 % (World)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.53 % (World)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.51 % (World)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.53 % (World)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.54 % (World)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.5 % (World)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [3.2304842489198395, 3.1695023939807272, 3.152785823641584, 3.0886962500105928, 2.9414545247865469, 2.9281423552419068, 2.9389386770867612, 2.9184774108987241, 2.7040247193999711, 3.1489718645339888, 2.9403968195207595, 2.9417107347076592, 3.0161041293037365, 3.0267972221475326, 3.037449349085406, 3.1207685528800839, 3.0981576802045225, 3.0580784449352461, 2.9846030771110614],
      "text": ["Oil reserves: 3.23 % (World)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil reserves: 3.17 % (World)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil reserves: 3.15 % (World)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil reserves: 3.09 % (World)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.94 % (World)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.93 % (World)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil reserves: 2.94 % (World)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil reserves: 2.92 % (World)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil reserves: 2.7 % (World)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil reserves: 3.15 % (World)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.94 % (World)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.94 % (World)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 3.02 % (World)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 3.03 % (World)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil reserves: 3.04 % (World)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil reserves: 3.12 % (World)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil reserves: 3.1 % (World)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 3.06 % (World)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.98 % (World)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [0.1079022944947666, 0.098088956840316668, 0.098094131727075692, 0.098103540698483205, 0.098114875921852862, 0.088314056132218363, 0.078505897702093166, 0.078506174772188353, 0.05888548723970468, 0.058893027561876907, 0.04908448245446715, 0.049089079742903774, 0.039274319521229867, 0.029456687568353311, 0.029456576648509515, 0.029455886014048947, 0.029452827060189021, 0.029449839756700878, 0.029447091449697246],
      "text": ["Oil reserves: 0.11 % (World)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.1 % (World)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.1 % (World)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.1 % (World)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.1 % (World)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.09 % (World)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.08 % (World)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.08 % (World)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.06 % (World)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.06 % (World)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.05 % (World)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.05 % (World)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.04 % (World)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.03 % (World)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.03 % (World)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.03 % (World)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.03 % (World)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.03 % (World)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil reserves: 0.03 % (World)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [0.049654678849389254, 0.049654595005956197, 0.049654093673414286, 0.049653874521136357, 0.049654410939757476, 0.02979267088942876, 0.029792055810056093, 0.029791676344832235, 0.029791154941749422, 0.029789845003510267, 0.02978933353269618, 0.029787063826167439, 0.029781749874766315, 0.039701810920622665, 0.029769854320096083, 0.029761291056652678, 0.0297489445304224, 0.029742137091585422, 0.029739218200772754],
      "text": ["Oil reserves: 0.05 % (World)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.04 % (World)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0.01, 0.01, 0.010000000000000002, 0.02, 0.019999999999999997, 0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0, 0, 0.01, 0.01],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Oil reserves (REMIND_54)",
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
    "b55c1e248e3": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55ce537123": {
      "y": {}
    }
  },
  "cur_data": "b55c1e248e3",
  "visdat": {
    "b55c1e248e3": ["function (y) ", "x"],
    "b55ce537123": ["function (y) ", "x"]
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

  
