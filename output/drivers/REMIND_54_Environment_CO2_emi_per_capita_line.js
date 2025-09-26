(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Environment_CO2_emi_per_capita_line') 

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
      "y": [3.3300000000000001, 3.6600000000000001, 3.7400000000000002, 3.9199999999999999, 4.0800000000000001, 4.1500000000000012, 3.8500000000000001, 4.0999999999999996, 4.2800000000000002, 4.2599999999999998, 4.3399999999999999, 4.2099999999999991, 4.2999999999999998, 4.2000000000000002, 4.0700000000000003, 3.98, 3.7400000000000002, 3.4099999999999997, 3.4100000000000006],
      "text": ["CO2 emi per capita: 3.33 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 3.66 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 3.74 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 3.92 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.08 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.15 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 3.85 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.1 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.28 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.26 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.34 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.21 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.3 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.2 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 4.07 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 3.98 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 3.74 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 3.41 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "CO2 emi per capita: 3.41 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [6.1725445250248576, 6.1998771174106864, 6.2273981200221096, 6.1418332753188052, 5.8438962299686814, 5.9210927832319786, 5.6790732584249684, 5.7927063939086718, 5.2359463160598976, 5.3373739447566342, 5.4138268426363068, 4.9109827700077266, 4.7754550340116788, 4.7417084458879684, 4.5892541594769369, 4.4138008281813432, 4.3651262969382039, 4.0347184291180067, 4.0346890475116526],
      "text": ["CO2 emi per capita: 6.17 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 6.2 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 6.23 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 6.14 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 5.84 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 5.92 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 5.68 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 5.79 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 5.24 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 5.34 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 5.41 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 4.91 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 4.78 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 4.74 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 4.59 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 4.41 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 4.37 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 4.03 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "CO2 emi per capita: 4.03 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [1.9660830744694227, 2.013931018873794, 2.0786170692560186, 2.1236284809186032, 2.1203124843363734, 2.168485731284898, 2.1756221418359525, 2.2783421903343646, 2.2955325490188367, 2.4014204745236682, 2.4035129937823969, 2.4170279374710746, 2.3470486014994147, 2.2722748456559545, 2.1459013239505529, 2.1217388328013689, 2.0358472897396132, 1.6287611809457925, 1.6251732512696109],
      "text": ["CO2 emi per capita: 1.97 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.01 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.08 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.12 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.12 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.17 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.18 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.28 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.3 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.4 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.4 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.42 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.35 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.27 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.15 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.12 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 2.04 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 1.63 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "CO2 emi per capita: 1.63 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [1.7499999999999998, 1.8599999999999999, 2.0499999999999998, 2.1200000000000001, 2.23, 2.27, 2.3100000000000001, 2.2999999999999998, 2.3100000000000001, 2.3599999999999999, 2.29, 2.2900000000000005, 2.3199999999999998, 2.3599999999999999, 2.3999999999999999, 2.29, 2.0600000000000001, 1.9600000000000002, 1.9600000000000002],
      "text": ["CO2 emi per capita: 1.75 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 1.86 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.05 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.12 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.23 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.27 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.31 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.3 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.31 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.36 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.29 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.29 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.32 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.36 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.4 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.29 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 2.06 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 1.96 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "CO2 emi per capita: 1.96 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [17.210000000000001, 16.789999999999999, 17.030000000000005, 16.600000000000001, 17.379999999999999, 16.559999999999999, 15.5, 15.789999999999999, 16, 15.74, 15.839999999999998, 15.849999999999998, 15.65, 15.42, 15.550000000000001, 15.639999999999999, 15.050000000000001, 13.599999999999998, 13.6],
      "text": ["CO2 emi per capita: 17.21 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 16.79 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 17.03 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 16.6 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 17.38 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 16.56 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.5 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.79 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 16 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.74 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.84 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.85 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.65 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.42 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.55 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.64 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 15.05 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 13.6 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "CO2 emi per capita: 13.6 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [16.262193511970249, 16.610634019223571, 16.579732285673273, 16.574585388102808, 16.668018684458882, 16.533505885539327, 16.352678984622411, 16.184202376556826, 15.896654390696147, 15.764920490926745, 15.241779375905992, 14.69508262120271, 14.708276341370865, 14.738166651912682, 14.626140746703211, 14.350576671326769, 14.159608556009326, 13.352712310615104, 13.349460604699688],
      "text": ["CO2 emi per capita: 16.26 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 16.61 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 16.58 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 16.57 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 16.67 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 16.53 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 16.35 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 16.18 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 15.9 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 15.76 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 15.24 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 14.7 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 14.71 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 14.74 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 14.63 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 14.35 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 14.16 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 13.35 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "CO2 emi per capita: 13.35 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [3.9500000000000002, 3.9799999999999995, 4.0999999999999996, 4.1900000000000004, 4.2199999999999998, 4.1900000000000004, 4.0399999999999991, 4.1100000000000003, 4.1900000000000004, 4.2000000000000002, 4.0599999999999996, 3.8899999999999997, 3.9300000000000006, 3.9200000000000004, 3.8599999999999994, 3.5899999999999999, 3.6099999999999999, 3.04, 3.04],
      "text": ["CO2 emi per capita: 3.95 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 3.98 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 4.1 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 4.19 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 4.22 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 4.19 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 4.04 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 4.11 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 4.19 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 4.2 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 4.06 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 3.89 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 3.93 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 3.92 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 3.86 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 3.59 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 3.61 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 3.04 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "CO2 emi per capita: 3.04 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [8.1500000000000004, 8.1300000000000008, 7.870000000000001, 7.9800000000000004, 8.0199999999999996, 7.7300000000000022, 7.7500000000000009, 8.2100000000000009, 7.8899999999999997, 7.7300000000000004, 7.8000000000000007, 7.7200000000000006, 7.7599999999999998, 7.5599999999999996, 7.4200000000000008, 7.2599999999999989, 7.04, 6.7300000000000004, 6.7300000000000004],
      "text": ["CO2 emi per capita: 8.15 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 8.13 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.87 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.98 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 8.02 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.73 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.75 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 8.21 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.89 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.73 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.8 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.72 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.76 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.56 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.42 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.26 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 7.04 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 6.73 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "CO2 emi per capita: 6.73 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [1.7, 1.78, 1.78, 1.78, 1.8500000000000001, 1.9399999999999997, 1.8, 2.0299999999999998, 2.1100000000000003, 2.27, 2.4099999999999997, 2.5099999999999998, 2.3700000000000001, 2.1600000000000001, 2.1899999999999999, 2.0600000000000005, 2.0499999999999998, 1.9399999999999999, 1.9399999999999999],
      "text": ["CO2 emi per capita: 1.7 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 1.78 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 1.78 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 1.78 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 1.85 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 1.94 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 1.8 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.03 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.11 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.27 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.41 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.51 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.37 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.16 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.19 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.06 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 2.05 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 1.94 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "CO2 emi per capita: 1.94 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [5.92793342489467, 5.7326074791515573, 5.5201186878658826, 5.742327491235141, 5.8966632974249809, 5.7689275348321978, 5.0295925080254493, 5.3267552771326407, 5.7056900254242056, 5.5083906250039529, 5.4252265277492597, 4.8311774755866148, 4.2970503058646665, 4.5276171762681843, 4.1967043343843038, 4.3555977888296722, 4.2186410308368156, 4.0783779713752715, 4.0777328287311931],
      "text": ["CO2 emi per capita: 5.93 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 5.73 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 5.52 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 5.74 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 5.9 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 5.77 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 5.03 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "CO2 emi per capita: 5.33 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "CO2 emi per capita: 5.71 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 5.51 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 5.43 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 4.83 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 4.3 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 4.53 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 4.2 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 4.36 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 4.22 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 4.08 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "CO2 emi per capita: 4.08 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [9.6899999999999995, 10.109999999999999, 9.9800000000000004, 10.07, 10.35, 10.5, 10.68, 11.609999999999998, 11.98, 11.959999999999999, 11.890000000000002, 11.589999999999998, 11.91, 12.02, 12.190000000000001, 12.220000000000001, 11.830000000000002, 10.99, 10.989999999999998],
      "text": ["CO2 emi per capita: 9.69 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 10.11 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 9.98 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 10.07 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 10.35 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 10.5 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 10.68 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 11.61 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 11.98 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 11.96 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 11.89 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 11.59 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 11.91 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 12.02 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 12.19 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 12.22 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 11.83 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 10.99 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "CO2 emi per capita: 10.99 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [0.88, 0.88000000000000012, 0.88000000000000012, 0.79000000000000004, 0.81999999999999995, 0.82000000000000006, 0.81999999999999995, 0.87, 0.8600000000000001, 0.88000000000000012, 0.96000000000000008, 1, 1.0800000000000003, 1.1499999999999999, 1.25, 1.2799999999999998, 1.3200000000000003, 1.1899999999999999, 1.1899999999999999],
      "text": ["CO2 emi per capita: 0.88 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.88 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.88 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.79 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.82 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.82 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.82 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.87 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.86 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.88 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 0.96 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 1 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 1.08 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 1.15 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 1.25 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 1.28 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 1.32 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 1.19 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "CO2 emi per capita: 1.19 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [4.7227736583330877, 4.9125502204884564, 5.0095628427951162, 5.2651085797478574, 5.2234026196594741, 5.7605359938261618, 4.9942479133742017, 5.2176611612871531, 5.264263018987922, 5.1779593922945581, 5.1326867723755258, 4.6054584360838016, 4.265377108716164, 4.4008326990028221, 4.7304976475363549, 4.7532691800680631, 4.7012955739380731, 4.6257471328977582, 4.6274388927727541],
      "text": ["CO2 emi per capita: 4.72 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emi per capita: 4.91 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emi per capita: 5.01 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emi per capita: 5.27 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emi per capita: 5.22 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "CO2 emi per capita: 5.76 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emi per capita: 4.99 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emi per capita: 5.22 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emi per capita: 5.26 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emi per capita: 5.18 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emi per capita: 5.13 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emi per capita: 4.61 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "CO2 emi per capita: 4.27 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emi per capita: 4.4 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emi per capita: 4.73 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emi per capita: 4.75 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emi per capita: 4.7 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emi per capita: 4.63 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "CO2 emi per capita: 4.63 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [1.3799999999999999, 1.3600000000000003, 1.3799999999999999, 1.3600000000000001, 1.3799999999999999, 1.3799999999999999, 1.4099999999999999, 1.4299999999999997, 1.54, 1.5299999999999998, 1.6799999999999999, 1.72, 1.7199999999999998, 1.75, 1.5700000000000001, 1.6100000000000001, 1.5800000000000003, 1.5500000000000003, 1.55],
      "text": ["CO2 emi per capita: 1.38 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.36 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.38 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.36 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.38 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.38 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.41 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.43 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.54 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.53 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.68 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.72 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.72 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.75 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.57 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.61 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.58 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.55 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "CO2 emi per capita: 1.55 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [0.29655263290106165, 0.30756027891904569, 0.31016636140987131, 0.31228645905137076, 0.31632435296452971, 0.3151590046780664, 0.32692875724760656, 0.34140708618389592, 0.3515649334215557, 0.35922269098592358, 0.37349431254304649, 0.38356165729189701, 0.39667959005833736, 0.39432997917363366, 0.38444382258997539, 0.38618298713534421, 0.39290476241005529, 0.36205747893018114, 0.36142612621082787],
      "text": ["CO2 emi per capita: 0.3 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.31 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.31 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.31 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.32 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.32 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.33 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.34 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.35 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.36 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.37 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.38 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.4 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.39 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.38 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.39 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.39 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.36 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "CO2 emi per capita: 0.36 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [11.129999999999999, 11.109999999999999, 11.23, 11.57, 11.609999999999999, 11.6, 10.83, 11.33, 11.880000000000003, 11.699999999999999, 11.380000000000001, 11.210000000000001, 11.050000000000001, 10.890000000000001, 11.040000000000001, 11.500000000000002, 11.800000000000001, 11.23, 11.23],
      "text": ["CO2 emi per capita: 11.13 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.11 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.23 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.57 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.61 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.6 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 10.83 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.33 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.88 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.7 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.38 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.21 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.05 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 10.89 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.04 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.5 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.8 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.23 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "CO2 emi per capita: 11.23 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [0.10307005334546011, 0.086647659284826317, 0.10718294748762502, 0.10141378884191318, 0.11095689837108634, 0.14567518719415293, 0.19503077939355093, 0.24187935013754253, 0.31272726744862128, 0.29381877013739394, 0.27467064276598074, 0.28401441193403087, 0.29521980082989596, 0.3390687654426523, 0.37954187811289225, 0.41712792258091708, 0.39420906022403901, 0.3546215816660977, 0.35403746806587322],
      "text": ["CO2 emi per capita: 0.1 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "CO2 emi per capita: 0.09 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "CO2 emi per capita: 0.11 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "CO2 emi per capita: 0.1 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "CO2 emi per capita: 0.11 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "CO2 emi per capita: 0.15 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "CO2 emi per capita: 0.2 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.24 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.31 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.29 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.27 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.28 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.3 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.34 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.38 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.42 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.39 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.35 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "CO2 emi per capita: 0.35 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [0.87, 1.03, 1.1100000000000001, 1.1299999999999999, 1.2400000000000002, 1.3700000000000001, 1.5299999999999998, 1.73, 1.77, 1.74, 1.8199999999999998, 1.98, 2.1899999999999999, 2.3799999999999999, 2.4399999999999999, 3.0100000000000002, 3.5699999999999994, 3.6800000000000002, 3.6800000000000002],
      "text": ["CO2 emi per capita: 0.87 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.03 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.11 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.13 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.24 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.37 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.53 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.73 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.77 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.74 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.82 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 1.98 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 2.19 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 2.38 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 2.44 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 3.01 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 3.57 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 3.68 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "CO2 emi per capita: 3.68 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [0.62999999999999989, 0.68999999999999995, 0.69999999999999996, 0.73999999999999999, 0.79999999999999993, 0.76000000000000001, 0.76000000000000001, 0.71999999999999997, 0.70999999999999996, 0.71000000000000008, 0.70999999999999996, 0.73999999999999999, 0.78000000000000003, 0.84999999999999987, 0.92000000000000015, 0.84999999999999998, 0.81999999999999995, 0.81000000000000005, 0.81000000000000005],
      "text": ["CO2 emi per capita: 0.63 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.69 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.7 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.74 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.8 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.76 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.76 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.72 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.71 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.71 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.71 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.74 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.78 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.85 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.92 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.85 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.82 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.81 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "CO2 emi per capita: 0.81 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [0.20999999999999999, 0.22, 0.22999999999999998, 0.25, 0.26000000000000001, 0.28999999999999998, 0.31, 0.34000000000000002, 0.35999999999999999, 0.39000000000000001, 0.40999999999999998, 0.43000000000000005, 0.46000000000000002, 0.51000000000000001, 0.54000000000000015, 0.59000000000000008, 0.56000000000000005, 0.51000000000000001, 0.51000000000000001],
      "text": ["CO2 emi per capita: 0.21 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.22 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.23 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.25 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.26 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.29 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.31 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.34 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.36 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.39 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.41 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.43 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.46 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.51 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.54 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.59 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.56 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.51 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "CO2 emi per capita: 0.51 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [1.5, 1.5100000000000002, 1.4999999999999998, 1.5700000000000003, 1.6200000000000001, 1.5799999999999998, 1.6200000000000001, 1.6999999999999997, 1.9299999999999999, 1.9299999999999999, 1.77, 1.8899999999999999, 1.8899999999999999, 1.8500000000000003, 1.9499999999999997, 2.1299999999999999, 2.25, 2.0699999999999998, 2.0699999999999998],
      "text": ["CO2 emi per capita: 1.5 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.51 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.5 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.57 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.62 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.58 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.62 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.7 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.93 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.93 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.77 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.89 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.89 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.85 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 1.95 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 2.13 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 2.25 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 2.07 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "CO2 emi per capita: 2.07 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [1.7899339581208298, 1.8963271203462915, 1.9313814356261552, 1.9667440005429382, 2.089020692076522, 2.1418591780881262, 1.9655028938066752, 2.115776890805082, 2.15478497263988, 2.1843102239542453, 2.2921925786446646, 2.4244070269689799, 2.4728035721377193, 2.5304277142462719, 2.5853135297012408, 2.6685345452414353, 2.7151154213576651, 2.6709665776536644, 2.6628801250250107],
      "text": ["CO2 emi per capita: 1.79 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 1.9 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 1.93 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 1.97 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.09 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.14 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 1.97 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.12 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.15 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.18 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.29 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.42 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.47 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.53 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.59 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.67 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.72 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.67 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "CO2 emi per capita: 2.66 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [3.02, 3.2699999999999996, 3.3700000000000006, 3.3899999999999997, 3.4699999999999998, 3.4700000000000002, 3.3199999999999998, 3.5300000000000002, 3.48, 3.71, 3.7999999999999998, 3.7400000000000002, 3.8199999999999998, 3.79, 3.7699999999999996, 3.7200000000000006, 3.8500000000000001, 3.7100000000000004, 3.71],
      "text": ["CO2 emi per capita: 3.02 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.27 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.37 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.39 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.47 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.47 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.32 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.53 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.48 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.71 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.8 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.74 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.82 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.79 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.77 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.72 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.85 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.71 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "CO2 emi per capita: 3.71 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [9.5000000000000018, 9.4500000000000011, 9.5099999999999998, 9.3300000000000001, 9.5900000000000016, 9.0500000000000007, 8.6099999999999994, 9.0399999999999974, 9.5, 9.8300000000000018, 9.9399999999999995, 9.5600000000000005, 9.2699999999999996, 9.1700000000000017, 9.0600000000000023, 8.7599999999999998, 8.4799999999999986, 8.0299999999999976, 8.0299999999999994],
      "text": ["CO2 emi per capita: 9.5 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.45 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.51 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.33 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.59 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.05 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 8.61 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.04 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.5 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.83 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.94 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.56 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.27 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.17 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 9.06 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 8.76 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 8.48 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 8.03 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "CO2 emi per capita: 8.03 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [1.4433845587873082, 1.4594863723362261, 1.5207507900424906, 1.5577604986572591, 1.5420598796987433, 1.5938574277757931, 1.6091024735870922, 1.6426897918040886, 1.5637609142313187, 1.7489086154568967, 1.738755655778812, 1.7699891544123429, 1.7576262251568247, 1.6993067086750591, 1.7113312114738135, 1.7268647241119108, 1.7561050789158705, 1.5925556729289496, 1.581444678836198],
      "text": ["CO2 emi per capita: 1.44 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.46 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.52 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.56 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.54 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.59 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.61 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.64 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.56 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.75 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.74 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.77 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.76 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.7 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.71 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.73 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.76 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.59 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "CO2 emi per capita: 1.58 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [3.1699999999999999, 3.4300000000000002, 3.46, 3.4999999999999996, 3.9100000000000001, 4.0800000000000001, 3.8900000000000001, 4.0999999999999996, 4.4500000000000002, 4.5199999999999996, 4.7400000000000002, 4.3300000000000001, 4.5999999999999996, 4.7799999999999994, 4.7400000000000002, 4.6299999999999999, 4.8300000000000001, 4.4000000000000004, 4.4000000000000004],
      "text": ["CO2 emi per capita: 3.17 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 3.43 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 3.46 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 3.5 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 3.91 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.08 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 3.89 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.1 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.45 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.52 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.74 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.33 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.6 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.78 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.74 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.63 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.83 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.4 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "CO2 emi per capita: 4.4 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [3.2799999999999998, 3.3100000000000001, 3.4199999999999999, 3.7500000000000004, 4.1200000000000001, 4.04, 4, 4.0700000000000003, 4.29, 4.3899999999999997, 4.1900000000000004, 4.4299999999999997, 4.5199999999999996, 4.75, 5.21, 5.0899999999999999, 4.830000000000001, 4.8899999999999988, 4.8899999999999997],
      "text": ["CO2 emi per capita: 3.28 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 3.31 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 3.42 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 3.75 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.12 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.04 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.07 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.29 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.39 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.19 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.43 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.52 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.75 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 5.21 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 5.09 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.83 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.89 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "CO2 emi per capita: 4.89 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [0.070000000000000007, 0.070000000000000007, 0.070000000000000007, 0.070000000000000007, 0.070000000000000007, 0.079999999999999988, 0.080000000000000016, 0.070000000000000007, 0.079999999999999988, 0.090000000000000011, 0.10000000000000001, 0.13, 0.13, 0.14000000000000001, 0.14999999999999999, 0.14999999999999999, 0.16, 0.15000000000000002, 0.14999999999999999],
      "text": ["CO2 emi per capita: 0.07 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.07 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.07 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.07 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.07 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.08 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.08 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.07 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.08 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.09 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.1 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.13 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.13 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.14 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.15 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.15 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.16 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.15 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "CO2 emi per capita: 0.15 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [5.2691505119550319, 5.1705461285323073, 5.1998857968737511, 5.3453511223474921, 5.4081343381019726, 5.352229201607356, 4.6891781858661359, 4.6701001318518101, 4.9139586685231826, 4.6510603396482697, 4.2372250989478371, 4.2385611699781176, 4.4329031449512861, 4.3867960205830432, 4.6688797507957105, 4.6139744163766929, 4.5098475331993484, 4.170729754599904, 4.1719123889574803],
      "text": ["CO2 emi per capita: 5.27 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 5.17 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 5.2 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 5.35 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 5.41 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 5.35 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.69 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.67 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.91 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.65 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.24 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.24 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.43 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.39 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.67 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.61 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.51 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.17 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "CO2 emi per capita: 4.17 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [5.7400000000000011, 6.0499999999999998, 6.4199999999999999, 6.7899999999999991, 7.1100000000000012, 7.1299999999999999, 7.3000000000000007, 7.1799999999999988, 7.2300000000000004, 7.2300000000000013, 7.4400000000000013, 7.5700000000000003, 7.330000000000001, 7.29, 7.4099999999999993, 7.4500000000000011, 7.2199999999999998, 7.0599999999999996, 7.0599999999999987],
      "text": ["CO2 emi per capita: 5.74 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 6.05 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 6.42 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 6.79 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.11 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.13 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.3 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.18 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.23 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.23 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.44 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.57 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.33 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.29 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.41 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.45 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.22 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.06 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "CO2 emi per capita: 7.06 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [0.91000000000000003, 0.95999999999999996, 0.97999999999999998, 1.04, 1.1200000000000001, 1.1799999999999999, 1.28, 1.3400000000000001, 1.3999999999999999, 1.5000000000000002, 1.5300000000000002, 1.6399999999999997, 1.6300000000000001, 1.6399999999999999, 1.6999999999999997, 1.8, 1.7499999999999998, 1.5800000000000003, 1.5800000000000001],
      "text": ["CO2 emi per capita: 0.91 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 0.96 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 0.98 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.04 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.12 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.18 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.28 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.34 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.4 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.5 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.53 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.64 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.63 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.64 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.7 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.8 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.75 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.58 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "CO2 emi per capita: 1.58 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [19.510000000000002, 19.600000000000001, 19.469999999999999, 18.949999999999999, 19.039999999999999, 18.280000000000001, 16.809999999999999, 17.43, 16.600000000000001, 15.789999999999999, 16.109999999999999, 16.039999999999999, 15.559999999999999, 15.150000000000002, 14.82, 15.220000000000002, 14.67, 13.030000000000001, 13.029999999999999],
      "text": ["CO2 emi per capita: 19.51 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 19.6 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 19.47 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 18.95 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 19.04 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 18.28 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 16.81 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 17.43 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 16.6 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 15.79 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 16.11 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 16.04 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 15.56 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 15.15 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 14.82 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 15.22 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 14.67 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 13.03 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "CO2 emi per capita: 13.03 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 0.040000000000000008, 0.039999999999999994, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 0.040000000000000001, 0.050000000000000003, 0.070000000000000007, 0.039999999999999994, 0.029999999999999999, 0.029999999999999999, 0.029999999999999999, 0.029999999999999999, 0.029999999999999999, 0.030000000000000002],
      "text": ["CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.05 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.07 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.04 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.03 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.03 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.03 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.03 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.03 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "CO2 emi per capita: 0.03 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [7.5499999999999989, 7.8199999999999994, 8.0299999999999976, 7.7000000000000002, 7.8400000000000007, 7.0600000000000005, 6.21, 5.8900000000000006, 5.8899999999999988, 5.7800000000000011, 5.2300000000000004, 5.21, 5.54, 5.3399999999999999, 5.6799999999999997, 5.5199999999999987, 5.1299999999999999, 4.2800000000000002, 4.2800000000000002],
      "text": ["CO2 emi per capita: 7.55 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 7.82 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 8.03 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 7.7 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 7.84 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 7.06 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 6.21 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.89 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.89 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.78 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.23 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.21 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.54 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.34 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.68 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.52 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 5.13 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 4.28 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "CO2 emi per capita: 4.28 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [7.79, 7.910000000000001, 7.9000000000000004, 8.2300000000000004, 8.2200000000000006, 8.0899999999999999, 7.79, 8.25, 8.1600000000000001, 7.9699999999999989, 7.8399999999999999, 7.5199999999999996, 7.6100000000000003, 7.9000000000000004, 8.2400000000000002, 8.2100000000000009, 7.7699999999999996, 7.370000000000001, 7.370000000000001],
      "text": ["CO2 emi per capita: 7.79 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.91 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.9 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 8.23 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 8.22 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 8.09 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.79 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 8.25 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 8.16 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.97 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.84 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.52 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.61 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.9 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 8.24 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 8.21 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.77 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.37 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "CO2 emi per capita: 7.37 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [0.76000000000000001, 0.71999999999999997, 0.69999999999999996, 0.62, 0.54999999999999993, 0.56999999999999995, 0.48999999999999999, 0.56000000000000005, 0.56999999999999995, 0.56000000000000005, 0.62, 0.64000000000000001, 0.58999999999999997, 0.58999999999999997, 0.56000000000000005, 0.56999999999999995, 0.58999999999999997, 0.54000000000000004, 0.54000000000000004],
      "text": ["CO2 emi per capita: 0.76 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.72 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.7 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.62 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.55 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.57 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.49 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.56 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.57 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.56 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.62 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.64 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.59 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.59 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.56 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.57 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.59 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.54 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "CO2 emi per capita: 0.54 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [7.3399999999999999, 7.8200000000000003, 7.7000000000000011, 7.6699999999999999, 7.9399999999999995, 8.4499999999999993, 7.9000000000000004, 8.2200000000000006, 7.8099999999999987, 8.0299999999999994, 8.1199999999999992, 8.1899999999999995, 7.6100000000000012, 7.54, 7.6799999999999997, 7.6699999999999999, 7.6900000000000004, 6.6900000000000013, 6.6899999999999995],
      "text": ["CO2 emi per capita: 7.34 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.82 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.7 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.67 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.94 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 8.45 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.9 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 8.22 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.81 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 8.03 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 8.12 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 8.19 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.61 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.54 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.68 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.67 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 7.69 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 6.69 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "CO2 emi per capita: 6.69 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [10.140000000000001, 9.9499999999999993, 9.7300000000000004, 9.8900000000000006, 9.5299999999999994, 9.6199999999999992, 8.9700000000000024, 9.4499999999999993, 9.3000000000000007, 9.4499999999999993, 9.6199999999999992, 9.0899999999999999, 9.0899999999999999, 9.0700000000000003, 8.8599999999999994, 8.5399999999999991, 7.9299999999999997, 7.2599999999999998, 7.2599999999999998],
      "text": ["CO2 emi per capita: 10.14 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.95 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.73 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.89 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.53 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.62 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 8.97 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.45 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.3 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.45 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.62 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.09 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.09 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 9.07 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 8.86 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 8.54 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 7.93 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 7.26 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "CO2 emi per capita: 7.26 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [8.7085814212636556, 8.751711784994308, 8.7913519418225423, 8.8099057078139698, 9.0492459458581678, 8.6521064495911499, 8.0228604497610565, 8.4497893123259722, 8.2300141377743845, 7.9110421947440344, 7.8083483888502325, 7.4898174452741957, 7.4275447285835279, 7.6237630808943244, 7.783098391828295, 7.7212460189051653, 7.1360581162096768, 6.4716913342495008, 6.4576688011623489],
      "text": ["CO2 emi per capita: 8.71 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 8.75 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 8.79 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 8.81 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 9.05 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 8.65 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 8.02 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 8.45 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 8.23 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 7.91 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 7.81 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 7.49 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 7.43 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 7.62 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 7.78 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 7.72 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 7.14 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 6.47 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "CO2 emi per capita: 6.46 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [11.029999999999998, 10.980000000000002, 11.210000000000001, 11.06, 10.59, 10.23, 8.9499999999999993, 8.8499999999999996, 7.9699999999999998, 8.0500000000000007, 7.7200000000000006, 7.6299999999999999, 7.8899999999999997, 8.1999999999999993, 7.8499999999999988, 7.7000000000000011, 7.2599999999999998, 6.7700000000000005, 6.7700000000000005],
      "text": ["CO2 emi per capita: 11.03 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 10.98 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 11.21 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 11.06 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 10.59 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 10.23 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 8.95 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 8.85 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 7.97 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 8.05 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 7.72 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 7.63 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 7.89 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 8.2 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 7.85 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 7.7 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 7.26 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 6.77 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "CO2 emi per capita: 6.77 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [5.79, 5.9300000000000006, 6.2299999999999995, 5.7400000000000002, 5.5800000000000001, 5.3799999999999999, 5.3300000000000001, 4.8200000000000012, 4.7199999999999998, 4.5899999999999999, 4.4500000000000002, 4.4199999999999999, 4.8099999999999996, 4.7199999999999989, 5.169999999999999, 4.8099999999999996, 4.3300000000000001, 3.7799999999999994, 3.7799999999999998],
      "text": ["CO2 emi per capita: 5.79 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 5.93 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 6.23 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 5.74 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 5.58 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 5.38 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 5.33 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 4.82 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 4.72 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 4.59 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 4.45 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 4.42 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 4.81 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 4.72 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 5.17 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 4.81 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 4.33 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 3.78 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "CO2 emi per capita: 3.78 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [12.300000000000001, 12.67, 12.92, 13.209999999999999, 13.429999999999998, 14.199999999999999, 14.27, 15.169999999999998, 15.380000000000001, 15.979999999999999, 15.98, 16.829999999999998, 17.260000000000002, 16.800000000000001, 16.079999999999998, 15.07, 14.700000000000001, 14.27, 14.27],
      "text": ["CO2 emi per capita: 12.3 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 12.67 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 12.92 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 13.21 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 13.43 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 14.2 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 14.27 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 15.17 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 15.38 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 15.98 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 15.98 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 16.83 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 17.26 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 16.8 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 16.08 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 15.07 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 14.7 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 14.27 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "CO2 emi per capita: 14.27 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [6.0499999999999998, 6.0300000000000002, 6.0299999999999985, 5.8399999999999999, 5.6700000000000008, 5.5600000000000005, 5.3099999999999987, 5.3499999999999996, 5.1299999999999999, 5.1499999999999995, 5.129999999999999, 4.6099999999999994, 4.6799999999999988, 4.6999999999999984, 4.75, 4.5699999999999994, 4.46, 3.9500000000000002, 3.9500000000000002],
      "text": ["CO2 emi per capita: 6.05 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 6.03 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 6.03 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 5.84 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 5.67 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 5.56 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 5.31 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 5.35 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 5.13 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 5.15 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 5.13 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 4.61 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 4.68 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 4.7 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 4.75 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 4.57 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 4.46 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 3.95 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "CO2 emi per capita: 3.95 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [9.0995902776675894, 9.0495975802885784, 8.9596057693595803, 8.9096140513648603, 8.6496335892453224, 8.3396543246290182, 7.4897024490622304, 7.6896981168601046, 7.0397339561484884, 7.3397264275826952, 7.0797417442920887, 6.4297787401750419, 6.1597923957511984, 5.8198098766675717, 5.5498260689708818, 5.429836997612778, 5.179846844874934, 4.5998656454136295, 4.5998655388592553],
      "text": ["CO2 emi per capita: 9.1 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 9.05 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 8.96 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 8.91 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 8.65 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 8.34 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 7.49 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 7.69 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 7.04 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 7.34 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 7.08 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 6.43 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 6.16 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 5.82 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 5.55 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 5.43 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 5.18 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 4.6 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "CO2 emi per capita: 4.6 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [9.1699999999999999, 9.2799999999999994, 9.2699999999999978, 8.9600000000000009, 8.5899999999999999, 8.5, 7.7199999999999998, 8.3699999999999992, 8.1400000000000006, 7.7199999999999998, 7.75, 7.2599999999999998, 7.3200000000000003, 7.2900000000000009, 7.4900000000000011, 7.1399999999999988, 7.2599999999999989, 6.6299999999999999, 6.6299999999999999],
      "text": ["CO2 emi per capita: 9.17 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 9.28 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 9.27 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 8.96 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 8.59 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 8.5 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 7.72 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 8.37 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 8.14 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 7.72 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 7.75 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 7.26 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 7.32 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 7.29 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 7.49 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 7.14 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 7.26 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 6.63 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "CO2 emi per capita: 6.63 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [3.4300000000000002, 3.9499999999999997, 4.4699999999999998, 4.9100000000000001, 5.3099999999999996, 5.4400000000000004, 5.8000000000000007, 6.3400000000000007, 6.900000000000003, 7.0499999999999998, 7.3200000000000021, 7.2999999999999998, 7.1499999999999986, 7.1099999999999994, 7.2300000000000004, 7.5300000000000002, 7.6499999999999977, 7.759999999999998, 7.7600000000000007],
      "text": ["CO2 emi per capita: 3.43 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 3.95 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 4.47 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 4.91 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 5.31 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 5.44 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 5.8 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 6.34 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 6.9 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.05 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.32 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.3 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.15 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.11 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.23 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.53 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.65 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.76 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "CO2 emi per capita: 7.76 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [5.3584317919430768, 5.4758949070826999, 5.5650628285981796, 5.578245331721301, 5.4998457255122331, 5.6921308786683209, 5.5503653316880408, 5.6274289018646835, 5.6075290114971068, 5.789887493217412, 5.7441241358535651, 5.6832028259218363, 5.6439079270995869, 5.6764516653645876, 5.6579651026057576, 5.5091710947619905, 5.5830096310763322, 5.2457686914177053, 5.1491980287350039],
      "text": ["CO2 emi per capita: 5.36 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "CO2 emi per capita: 5.48 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "CO2 emi per capita: 5.57 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "CO2 emi per capita: 5.58 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.5 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.69 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "CO2 emi per capita: 5.55 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "CO2 emi per capita: 5.63 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "CO2 emi per capita: 5.61 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "CO2 emi per capita: 5.79 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.74 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.68 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.64 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.68 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.66 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.51 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.58 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.25 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "CO2 emi per capita: 5.15 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [6.1600000000000001, 5.96, 5.5499999999999998, 5.3700000000000001, 5.1399999999999997, 4.9900000000000002, 4.5999999999999996, 5.1200000000000001, 4.7000000000000002, 4.4100000000000001, 4.2099999999999991, 4.0199999999999996, 3.9900000000000002, 3.8999999999999999, 3.7900000000000005, 3.5299999999999998, 3.4000000000000004, 3.2400000000000002, 3.2399999999999998],
      "text": ["CO2 emi per capita: 6.16 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 5.96 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 5.55 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 5.37 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 5.14 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 4.99 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 4.6 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 5.12 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 4.7 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 4.41 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 4.21 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 4.02 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 3.99 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 3.9 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 3.79 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 3.53 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 3.4 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 3.24 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "CO2 emi per capita: 3.24 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [10.989999999999998, 9.9399999999999977, 9.2599999999999998, 10.690000000000001, 9.7799999999999994, 9.1199999999999992, 8.6799999999999997, 8.6699999999999982, 7.7399999999999993, 6.830000000000001, 7.120000000000001, 6.3499999999999988, 5.9299999999999997, 6.1699999999999999, 5.7599999999999989, 5.7200000000000015, 5.1099999999999985, 4.6900000000000004, 4.6900000000000004],
      "text": ["CO2 emi per capita: 10.99 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 9.94 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 9.26 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 10.69 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 9.78 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 9.12 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 8.68 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 8.67 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 7.74 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 6.83 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 7.12 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 6.35 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 5.93 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 6.17 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 5.76 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 5.72 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 5.11 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 4.69 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "CO2 emi per capita: 4.69 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [8.049502237021434, 8.178118068204892, 8.1584467286920361, 8.019685460729864, 7.8518440981782769, 7.5537110169793387, 6.7155638572811966, 6.8358335268966446, 6.6765192490291563, 6.3309807233169515, 5.7487360011961766, 5.3902129361738318, 5.546613992319001, 5.4811395407293828, 5.4231993653670152, 5.3626538167834275, 5.2930955983817753, 4.7162473115512231, 4.7160916373745465],
      "text": ["CO2 emi per capita: 8.05 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 8.18 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 8.16 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 8.02 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 7.85 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 7.55 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 6.72 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 6.84 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 6.68 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 6.33 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 5.75 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 5.39 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 5.55 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 5.48 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 5.42 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 5.36 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 5.29 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 4.72 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "CO2 emi per capita: 4.72 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [10.5, 10.57, 10.289999999999999, 10.01, 10.039999999999997, 10.050000000000001, 9.7100000000000009, 10.300000000000001, 9.5099999999999998, 9.4000000000000004, 9.3499999999999996, 8.8800000000000008, 9.2899999999999991, 9.3100000000000005, 9.0899999999999999, 8.7899999999999991, 8.4100000000000001, 7.4699999999999998, 7.4699999999999989],
      "text": ["CO2 emi per capita: 10.5 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 10.57 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 10.29 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 10.01 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 10.04 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 10.05 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 9.71 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 10.3 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 9.51 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 9.4 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 9.35 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 8.88 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 9.29 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 9.31 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 9.09 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 8.79 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 8.41 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 7.47 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "CO2 emi per capita: 7.47 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [11.611754772430833, 11.493503246368862, 11.228415278091882, 10.873572681874254, 10.358289561939086, 10.509798845804525, 9.7669870640667895, 10.341292929583492, 9.2916901191880577, 9.107849253961934, 9.1175505544970683, 8.4983265889674939, 8.79550688123744, 8.6466011669513314, 8.4866984621969515, 8.5411833033042601, 8.4601886418023113, 7.6621344490843688, 7.6648990046751004],
      "text": ["CO2 emi per capita: 11.61 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 11.49 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 11.23 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 10.87 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 10.36 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 10.51 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 9.77 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 10.34 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 9.29 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 9.11 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 9.12 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 8.5 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 8.8 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 8.65 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 8.49 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 8.54 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 8.46 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 7.66 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "CO2 emi per capita: 7.66 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [13.76, 12.950000000000001, 10.57, 12.73, 12.31, 10.66, 10.15, 11.66, 10.229999999999999, 9.1300000000000008, 9.2300000000000004, 8.4499999999999975, 7.8099999999999996, 8.3200000000000003, 7.8099999999999987, 8.0500000000000007, 7.4200000000000008, 6.5700000000000003, 6.5699999999999994],
      "text": ["CO2 emi per capita: 13.76 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 12.95 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 10.57 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 12.73 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 12.31 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 10.66 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 10.15 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 11.66 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 10.23 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 9.13 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 9.23 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 8.45 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 7.81 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 8.32 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 7.81 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 8.05 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 7.42 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 6.57 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "CO2 emi per capita: 6.57 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [9.0577021477808728, 8.9850292950414499, 9.136945509468358, 9.0037745714621735, 9.2895515496955881, 8.9443422694980566, 8.4319251287696506, 7.7889758054370599, 7.5220342063987511, 7.1440583582465047, 6.5028082033361141, 6.3303780518519028, 6.2373321625512803, 6.1824933333100258, 6.1974666020038045, 6.0441205764694788, 5.6267872229207683, 4.8459590532200814, 4.8475766675449723],
      "text": ["CO2 emi per capita: 9.06 CO2 per capita<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 8.99 CO2 per capita<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 9.14 CO2 per capita<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 9 CO2 per capita<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 9.29 CO2 per capita<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 8.94 CO2 per capita<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 8.43 CO2 per capita<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 7.79 CO2 per capita<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 7.52 CO2 per capita<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 7.14 CO2 per capita<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 6.5 CO2 per capita<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 6.33 CO2 per capita<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 6.24 CO2 per capita<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 6.18 CO2 per capita<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 6.2 CO2 per capita<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 6.04 CO2 per capita<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 5.63 CO2 per capita<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 4.85 CO2 per capita<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "CO2 emi per capita: 4.85 CO2 per capita<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "l": 29.954337899543386
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "CO2 emi per capita (REMIND_54)",
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
      "range": [0, 19.600000000000001],
      "tickmode": "array",
      "ticktext": ["0", "5", "10", "15", "20"],
      "tickvals": [-1.1102230246251565e-16, 4.9999999999999991, 10.000000000000002, 15, 20],
      "categoryorder": "array",
      "categoryarray": ["0", "5", "10", "15", "20"],
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
        "text": "CO2 per capita",
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
    "b55c244e128e": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c56bf1d28": {
      "y": {}
    }
  },
  "cur_data": "b55c244e128e",
  "visdat": {
    "b55c244e128e": ["function (y) ", "x"],
    "b55c56bf1d28": ["function (y) ", "x"]
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

  
