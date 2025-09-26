(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Resources_Oil_reserves_line') 

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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [0.72935539988113074, 0.70030161637808042, 0.69159718059795483, 0.70392953247461421, 0.68925213339987279, 0.73684358182074383, 0.82870624162198903, 0.82450734613349075, 1.5432799738730125, 1.498778929702957, 1.9384959381722819, 1.9353307160147457, 1.928932320093063, 1.9363947269674995, 1.9113152398600766, 1.841465838805461, 1.7828347254106149, 1.7452096290060823, 1.6881605514766682],
      "text": ["Oil reserves: 0.73 % (World)<br>Period: 2003<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.7 % (World)<br>Period: 2004<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.69 % (World)<br>Period: 2005<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.7 % (World)<br>Period: 2006<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.69 % (World)<br>Period: 2007<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.74 % (World)<br>Period: 2008<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.83 % (World)<br>Period: 2009<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 0.82 % (World)<br>Period: 2010<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.54 % (World)<br>Period: 2011<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.5 % (World)<br>Period: 2012<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.94 % (World)<br>Period: 2013<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.94 % (World)<br>Period: 2014<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.93 % (World)<br>Period: 2015<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.94 % (World)<br>Period: 2016<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.91 % (World)<br>Period: 2017<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.84 % (World)<br>Period: 2018<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.78 % (World)<br>Period: 2019<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.75 % (World)<br>Period: 2020<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil reserves: 1.69 % (World)<br>Period: 2021<br>REMIND_39 region code: OLA<br>Countries in region: Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [14.820000000000002, 14.130000000000001, 13.98, 13.859999999999999, 13.57, 13.44, 13.32, 12.910000000000002, 11.880000000000001, 11.390000000000001, 10.52, 10.49, 10.390000000000001, 10.339999999999998, 10.299999999999999, 10.26, 10.09, 10.24, 10.02],
      "text": ["Oil reserves: 14.82 % (World)<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 14.13 % (World)<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.98 % (World)<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.86 % (World)<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.57 % (World)<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.44 % (World)<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 13.32 % (World)<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 12.91 % (World)<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 11.88 % (World)<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 11.39 % (World)<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.52 % (World)<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.49 % (World)<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.39 % (World)<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.34 % (World)<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.3 % (World)<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.26 % (World)<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.09 % (World)<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.24 % (World)<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Oil reserves: 10.02 % (World)<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [0.28856582204959019, 0.31151064160754499, 0.32026923757588366, 0.31333097084604011, 0.36485535093335758, 0.36251165500151711, 0.36309111666787036, 0.35752782197770017, 0.34738115235426764, 0.33358455190654984, 0.30966260099775544, 0.30941427839021068, 0.30839876026675667, 0.308227770833438, 0.30785215275118111, 0.28483960202380554, 0.2822917882270693, 0.25008001670972813, 0.24010461371894648],
      "text": ["Oil reserves: 0.29 % (World)<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil reserves: 0.31 % (World)<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil reserves: 0.32 % (World)<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.31 % (World)<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.36 % (World)<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.36 % (World)<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.36 % (World)<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.36 % (World)<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.35 % (World)<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.33 % (World)<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.31 % (World)<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.31 % (World)<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.31 % (World)<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.31 % (World)<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.31 % (World)<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.28 % (World)<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.28 % (World)<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.25 % (World)<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil reserves: 0.24 % (World)<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "text": ["Oil reserves: 0.24 % (World)<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.23 % (World)<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.1 % (World)<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.09 % (World)<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.1 % (World)<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.09 % (World)<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.09 % (World)<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.2 % (World)<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.19 % (World)<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.08 % (World)<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.08 % (World)<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.08 % (World)<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.06 % (World)<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.06 % (World)<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.09 % (World)<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.13 % (World)<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.13 % (World)<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.13 % (World)<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil reserves: 0.12 % (World)<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "text": ["Oil reserves: 1.04 % (World)<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 1.24 % (World)<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 1.14 % (World)<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 1 % (World)<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.94 % (World)<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.88 % (World)<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.79 % (World)<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.77 % (World)<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.71 % (World)<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.68 % (World)<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.62 % (World)<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.61 % (World)<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.59 % (World)<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.59 % (World)<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.44 % (World)<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.43 % (World)<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.39 % (World)<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.35 % (World)<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Oil reserves: 0.34 % (World)<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "text": ["Oil reserves: 0.85 % (World)<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.82 % (World)<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.66 % (World)<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.6 % (World)<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.59 % (World)<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.52 % (World)<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.5 % (World)<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.49 % (World)<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.38 % (World)<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.35 % (World)<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.33 % (World)<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.35 % (World)<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.33 % (World)<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.31 % (World)<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.4 % (World)<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.46 % (World)<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.49 % (World)<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.5 % (World)<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil reserves: 0.48 % (World)<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "text": ["Oil reserves: 0.69 % (World)<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.67 % (World)<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.83 % (World)<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.87 % (World)<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.89 % (World)<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.92 % (World)<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.94 % (World)<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.94 % (World)<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.87 % (World)<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.92 % (World)<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.8 % (World)<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.91 % (World)<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.94 % (World)<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.98 % (World)<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.79 % (World)<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.76 % (World)<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.77 % (World)<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.81 % (World)<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Oil reserves: 0.75 % (World)<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "text": ["Oil reserves: 0.02 % (World)<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "text": ["Oil reserves: 0.17 % (World)<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.16 % (World)<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.16 % (World)<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.16 % (World)<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.39 % (World)<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil reserves: 0.39 % (World)<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.39 % (World)<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.38 % (World)<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.35 % (World)<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.34 % (World)<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.32 % (World)<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.32 % (World)<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil reserves: 0.32 % (World)<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.32 % (World)<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil reserves: 0.31 % (World)<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [4.9400000000000004, 4.7400000000000002, 4.6900000000000004, 4.6500000000000004, 4.54, 4.5199999999999996, 4.4900000000000002, 4.419999999999999, 4.0700000000000003, 3.9399999999999999, 4.8600000000000003, 4.8400000000000007, 4.8200000000000003, 4.8399999999999999, 4.8600000000000003, 4.8099999999999996, 4.8200000000000003, 4.8200000000000003, 4.7099999999999991],
      "text": ["Oil reserves: 4.94 % (World)<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.74 % (World)<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.69 % (World)<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.65 % (World)<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.54 % (World)<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.52 % (World)<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.49 % (World)<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.42 % (World)<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.07 % (World)<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 3.94 % (World)<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.86 % (World)<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.84 % (World)<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.82 % (World)<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.84 % (World)<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.86 % (World)<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.81 % (World)<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.82 % (World)<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.82 % (World)<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Oil reserves: 4.71 % (World)<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [0.0406831968376224, 0.040094478189271962, 0.039490205187765332, 0.034170055206854122, 0.034293594424696608, 0.041113415211972315, 0.038999896713891979, 0.038354015527505614, 0.036931540332708852, 0.092210832074610768, 0.086401210650923543, 0.086458643689247536, 0.08581835844836766, 0.083506782743125174, 0.084904829478526692, 0.082792386747062616, 0.085137794699878991, 0.08522112141123131, 0.080657765158406974],
      "text": ["Oil reserves: 0.04 % (World)<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.04 % (World)<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.04 % (World)<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.03 % (World)<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.03 % (World)<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.04 % (World)<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.04 % (World)<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.04 % (World)<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.04 % (World)<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.09 % (World)<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.09 % (World)<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.09 % (World)<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.09 % (World)<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.08 % (World)<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.08 % (World)<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.08 % (World)<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.09 % (World)<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.09 % (World)<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Oil reserves: 0.08 % (World)<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [0.40999999999999992, 0.37000000000000005, 0.37, 0.33000000000000007, 0.33000000000000002, 0.33000000000000002, 0.30000000000000004, 0.28999999999999998, 0.27000000000000002, 0.25, 0.23999999999999999, 0.23000000000000001, 0.23000000000000001, 0.22000000000000003, 0.22, 0.20000000000000001, 0.19, 0.19000000000000003, 0.14999999999999999],
      "text": ["Oil reserves: 0.41 % (World)<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.37 % (World)<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.37 % (World)<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.33 % (World)<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.33 % (World)<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.33 % (World)<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.3 % (World)<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.29 % (World)<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.27 % (World)<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.25 % (World)<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.24 % (World)<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.23 % (World)<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.23 % (World)<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.22 % (World)<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.22 % (World)<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.2 % (World)<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.19 % (World)<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.19 % (World)<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Oil reserves: 0.15 % (World)<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [0.014037370418943386, 0.0094005568515230821, 0.0094445229993313767, 0.0094882203788688238, 0.0095627156448818643, 0.009640473248519207, 0.014557009670386419, 0.0097721598794312577, 0.0098224313568725276, 0.0098525628739160945, 0.0098737876139333956, 0.0098869865714691623, 0.0098977769773892117, 0.0099082489141260228, 0.0099251700725934578, 0.0099522690040793876, 0.0099752097769692898, 0.014996750611180585, 0.015049270758165758],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Oil reserves: 0.02 % (World)<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: JPN<br>Countries in region: Japan", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: JPN<br>Countries in region: Japan"],
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
      "y": [0.019999999999999997, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.020000000000000004, 0.02, 0.019999999999999997, 0.020000000000000004],
      "text": ["Oil reserves: 0.02 % (World)<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Oil reserves: 0.02 % (World)<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [0.04085503564710094, 0.040815375333449498, 0.036061745260597376, 0.036016776801455222, 0.024262264992985543, 0.024099084576014066, 0.019415173305766958, 0.019388427172762516, 0.018399128714911114, 0.01840110222942111, 0.018402984729289331, 0.018407411438740338, 0.018410913471837972, 0.01840644370012804, 0.018410263450624069, 0.01839890366022915, 0.018380774889651789, 0.018362705138790923, 0.018343931001054206],
      "text": ["Oil reserves: 0.04 % (World)<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.04 % (World)<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.04 % (World)<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.04 % (World)<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil reserves: 0.02 % (World)<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [0.0080133859317356657, 0.0080369417483763354, 0.0080605591371005706, 0.0080840562096520466, 0.0081095556666033776, 0.0081317022708142939, 0.0081436807410657976, 0.0081499386605392125, 0.0081575021557058619, 0.0081645610707420085, 0.0081678727495009401, 0.0081714650961999466, 0.0081764884290783119, 0.0081824431731628618, 0.0081895482818997219, 0.008198399077138303, 0.008208626619831386, 0.0082142572978153514, 0.0082066014309172455],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "text": ["Oil reserves: 7.38 % (World)<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.93 % (World)<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.84 % (World)<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.27 % (World)<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.32 % (World)<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.42 % (World)<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.18 % (World)<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 10.14 % (World)<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.29 % (World)<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.92 % (World)<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.4 % (World)<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.52 % (World)<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.51 % (World)<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.54 % (World)<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.62 % (World)<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.45 % (World)<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.38 % (World)<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 9.38 % (World)<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil reserves: 12.28 % (World)<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "text": ["Oil reserves: 0.44 % (World)<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.45 % (World)<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.43 % (World)<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.42 % (World)<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.41 % (World)<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.39 % (World)<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.37 % (World)<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.33 % (World)<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.34 % (World)<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.34 % (World)<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.29 % (World)<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.28 % (World)<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Oil reserves: 0.27 % (World)<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "text": ["Oil reserves: 1.98 % (World)<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 1.82 % (World)<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 1.77 % (World)<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 1.78 % (World)<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 1.69 % (World)<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 1.72 % (World)<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 1.54 % (World)<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 1.64 % (World)<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 1.71 % (World)<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 1.9 % (World)<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 2.03 % (World)<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 2.21 % (World)<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 2.41 % (World)<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 2.13 % (World)<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 2.14 % (World)<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 2.53 % (World)<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 2.84 % (World)<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 2.84 % (World)<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Oil reserves: 2.61 % (World)<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "y": [0.01, 0.01, 0.0099999999999999985, 0.01, 0.01, 0.01, 0.01, 0.01, 0.010000000000000002, 0.0099999999999999985, 0.01, 0.01, 0.01, 0.010000000000000002, 0.01, 0.01, 0.01, 0.01, 0.01],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [0.45247380577240154, 0.4486344782553624, 0.62176265686844701, 0.62580008609088777, 0.62240203517797554, 0.62187403640909111, 0.61724749694643555, 0.62443470478918917, 0.57871492270256031, 0.56059783890056281, 0.52523320284469721, 0.51999287144811301, 0.51483400932986934, 0.51512591770465799, 0.51599142358170469, 0.51694485508347965, 0.49802625953222607, 0.50612104457516338, 0.49025003806360395],
      "text": ["Oil reserves: 0.45 % (World)<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.45 % (World)<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.62 % (World)<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.63 % (World)<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.62 % (World)<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.62 % (World)<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.62 % (World)<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.62 % (World)<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.58 % (World)<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.56 % (World)<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.53 % (World)<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.52 % (World)<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.51 % (World)<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.52 % (World)<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.52 % (World)<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.52 % (World)<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.5 % (World)<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.51 % (World)<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil reserves: 0.49 % (World)<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "text": ["Oil reserves: 0.03 % (World)<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.03 % (World)<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.02 % (World)<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "text": ["Oil reserves: 21.55 % (World)<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 20.68 % (World)<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 20.48 % (World)<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 20.49 % (World)<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 20.01 % (World)<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 19.89 % (World)<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 19.76 % (World)<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 19.47 % (World)<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 17.92 % (World)<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 17.36 % (World)<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.14 % (World)<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.09 % (World)<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.02 % (World)<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.14 % (World)<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.18 % (World)<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.01 % (World)<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.05 % (World)<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 16.1 % (World)<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Oil reserves: 15.22 % (World)<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [0.0301105050088308, 0.027353610648080375, 0.027333537700681726, 0.027300960422536873, 0.027265854691628951, 0.024526415207946371, 0.021773162145661114, 0.021731550850004652, 0.01627128406924936, 0.016240493885895119, 0.013505949881951999, 0.013479407429869868, 0.010776885194969103, 0.0080752328051624626, 0.0080572307153042779, 0.0080395454665507394, 0.0080195952278733964, 0.0080060653882684154, 0.0080041359548821498],
      "text": ["Oil reserves: 0.03 % (World)<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.03 % (World)<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.03 % (World)<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.03 % (World)<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.03 % (World)<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [0.0099989814668406674, 0.009998995198663289, 0.009999009608161866, 0.009999022153005091, 0.0099990299907422656, 0.0099990361024228577, 0.0099990415164434351, 0.009999046321716526, 0.0099990519078791106, 0.0099990592995511246, 0.0099990674819878944, 0.0099990743115095718, 0.0099990792494560835, 0, 0, 0, 0, 0, 0],
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "text": ["Oil reserves: 0.39 % (World)<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.37 % (World)<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.35 % (World)<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.31 % (World)<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.29 % (World)<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.27 % (World)<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.26 % (World)<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.23 % (World)<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.19 % (World)<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.19 % (World)<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.19 % (World)<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.18 % (World)<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.18 % (World)<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.17 % (World)<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.16 % (World)<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.15 % (World)<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.15 % (World)<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.16 % (World)<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil reserves: 0.15 % (World)<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "text": ["Oil reserves: 1.47 % (World)<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.41 % (World)<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.4 % (World)<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.39 % (World)<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.18 % (World)<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.17 % (World)<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.17 % (World)<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.47 % (World)<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.35 % (World)<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.31 % (World)<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.41 % (World)<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.45 % (World)<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.46 % (World)<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.49 % (World)<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.53 % (World)<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.51 % (World)<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.53 % (World)<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.54 % (World)<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil reserves: 1.5 % (World)<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "text": ["Oil reserves: 3.23 % (World)<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil reserves: 3.17 % (World)<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil reserves: 3.15 % (World)<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil reserves: 3.09 % (World)<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.94 % (World)<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.93 % (World)<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil reserves: 2.94 % (World)<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil reserves: 2.92 % (World)<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil reserves: 2.7 % (World)<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil reserves: 3.15 % (World)<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.94 % (World)<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.94 % (World)<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 3.02 % (World)<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 3.03 % (World)<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil reserves: 3.04 % (World)<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil reserves: 3.12 % (World)<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil reserves: 3.1 % (World)<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 3.06 % (World)<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil reserves: 2.98 % (World)<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [0.049654678849389254, 0.049654595005956197, 0.049654093673414286, 0.049653874521136357, 0.049654410939757476, 0.02979267088942876, 0.029792055810056093, 0.029791676344832235, 0.029791154941749422, 0.029789845003510267, 0.02978933353269618, 0.029787063826167439, 0.029781749874766315, 0.039701810920622665, 0.029769854320096083, 0.029761291056652678, 0.0297489445304224, 0.029742137091585422, 0.029739218200772754],
      "text": ["Oil reserves: 0.05 % (World)<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.05 % (World)<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.04 % (World)<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Oil reserves: 0.03 % (World)<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "text": ["Oil reserves: 0.01 % (World)<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.02 % (World)<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.02 % (World)<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Oil reserves: 0.01 % (World)<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "text": ["Oil reserves: 0 % (World)<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil reserves: 0 % (World)<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Oil reserves (REMIND_39)",
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
    "b55c15d580d": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c5a4e3519": {
      "y": {}
    }
  },
  "cur_data": "b55c15d580d",
  "visdat": {
    "b55c15d580d": ["function (y) ", "x"],
    "b55c5a4e3519": ["function (y) ", "x"]
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

  
