(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Consumption_Oil_consumption_line') 

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
      "y": [450, 471.99999999999994, 483, 535, 587, 582, 589, 709, 729.00000000000011, 742, 740, 751, 751, 751, 751, 750.99999999999989, 751, 751, 751],
      "text": ["Oil consumption: 450 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 472 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 483 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 535 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 587 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 582 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 589 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 709 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 729 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 742 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 740 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 751 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 751 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 751 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 751 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 751 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 751 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 751 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Oil consumption: 751 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [259.28328707357156, 259.29933304755116, 261.12515458994386, 260.08362889517957, 248.46018013178562, 256.14121591286266, 249.49715560566739, 250.29002971975532, 232.18310796093937, 236.13431394074613, 240.86415455741039, 220.811870155664, 220.82398587216798, 220.80550882894687, 220.69650586881917, 220.54053226971493, 220.41829777493885, 220.34337150278751, 220.27115380368389],
      "text": ["Oil consumption: 259.28 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 259.3 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 261.13 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 260.08 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 248.46 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 256.14 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 249.5 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 250.29 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 232.18 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 236.13 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 240.86 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 220.81 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 220.82 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 220.81 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 220.7 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 220.54 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 220.42 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 220.34 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Oil consumption: 220.27 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [166.73609320219799, 173.23143681870863, 176.22377373739451, 188.39206498529416, 195.62819190723545, 227.94669652975355, 198.50515154269402, 206.24126639144859, 213.40294902510502, 219.32702944171297, 229.24195563934137, 231.3428208359737, 231.22545094596117, 230.75669855077103, 229.2152051506927, 226.16578385917947, 222.81549944982086, 220.54083291311781, 219.18484676819193],
      "text": ["Oil consumption: 166.74 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 173.23 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 176.22 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 188.39 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 195.63 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 227.95 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 198.51 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 206.24 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 213.4 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 219.33 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 229.24 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 231.34 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 231.23 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 230.76 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 229.22 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 226.17 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 222.82 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 220.54 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Oil consumption: 219.18 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [561, 604, 625, 658, 694, 701, 721, 706, 710, 743, 744, 797.00000000000011, 796.99999999999989, 797, 796.99999999999989, 796.99999999999989, 797, 797, 797],
      "text": ["Oil consumption: 561 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 604 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 625 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 658 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 694 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 701 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 721 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 706 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 710 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 743 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 744 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 797 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 797 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 797 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 797 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 797 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 797 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 797 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Oil consumption: 797 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [2155, 2233, 2269, 2266, 2344, 2267, 2184, 2375.0000000000005, 2405, 2470, 2455, 2407, 2407, 2407, 2407, 2407, 2407, 2407, 2407],
      "text": ["Oil consumption: 2155 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2233 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2269 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2266 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2344 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2267 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2184 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2375 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2405 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2470 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2455 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2407 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2407 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2407 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2407 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2407 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2407 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2407 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Oil consumption: 2407 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [793.64314958893169, 807.97199234113032, 826.00972810876999, 832.97066393382636, 847.63693385569309, 856.64404753926169, 850.21302697326189, 889.46798598010719, 915.30529732129571, 940.086212969337, 958.4014998394274, 956.98988783868776, 956.21923355641525, 955.33195055936324, 954.75711477198979, 954.37238949740902, 954.22475805194904, 952.94967826702748, 952.58996689683988],
      "text": ["Oil consumption: 793.64 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 807.97 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 826.01 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 832.97 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 847.64 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 856.64 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 850.21 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 889.47 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 915.31 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 940.09 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 958.4 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 956.99 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 956.22 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 955.33 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 954.76 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 954.37 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 954.22 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 952.95 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Oil consumption: 952.59 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [2016, 2069, 2117, 2123, 2173, 2161, 2070, 2096, 2120, 2102, 2090, 2039.9999999999998, 2040.0000000000002, 2040.0000000000002, 2039.9999999999998, 2039.9999999999998, 2040, 2040.0000000000002, 2039.9999999999998],
      "text": ["Oil consumption: 2016 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2069 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2117 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2123 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2173 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2161 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2070 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2096 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2120 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2102 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2090 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2040 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2040 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2040 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2040 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2040 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2040 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2040 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Oil consumption: 2040 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [229.87900208539094, 216.88585279474498, 221.88334364312271, 227.87978394026555, 231.87755624041534, 228.87929305953548, 224.88158425574349, 228.87966080509435, 221.8848412715993, 214.88992618221417, 217.88973030373933, 210.89446673520675, 210.89551063702675, 210.89642621327243, 210.89725856962485, 210.89793386840452, 210.89861989653144, 210.89921445658314, 210.89975147989432],
      "text": ["Oil consumption: 229.88 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 216.89 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 221.88 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 227.88 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 231.88 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 228.88 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 224.88 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 228.88 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 221.88 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 214.89 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 217.89 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 210.89 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 210.9 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 210.9 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 210.9 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 210.9 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 210.9 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 210.9 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Oil consumption: 210.9 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [2056, 2123, 2206, 2287, 2355, 2204.9999999999995, 2481, 2699, 2777.0000000000005, 2923, 3033, 3143.9999999999995, 3144, 3143.9999999999995, 3144, 3144.0000000000005, 3144, 3144.0000000000005, 3144],
      "text": ["Oil consumption: 2056 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 2123 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 2206 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 2287 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 2355 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 2205 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 2481 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 2699 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 2777 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 2923 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 3033 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 3144 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 3144 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 3144 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 3144 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 3144 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 3144 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 3144 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Oil consumption: 3144 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [224.10832539763504, 226.21148034193857, 243.76780068946769, 253.45754728372336, 250.70094990925722, 233.4582430319619, 205.3032334131783, 213.90029940755835, 204.95173459728662, 184.22488263924143, 171.55315083245412, 181.60568872856729, 181.66649214490712, 181.75180157669109, 181.81899542878512, 181.8634149128801, 181.92403276043811, 181.94097519496717, 181.98790375722027],
      "text": ["Oil consumption: 224.11 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 226.21 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 243.77 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 253.46 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 250.7 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 233.46 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 205.3 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Oil consumption: 213.9 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Oil consumption: 204.95 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 184.22 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 171.55 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 181.61 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 181.67 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 181.75 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 181.82 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 181.86 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 181.92 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 181.94 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Oil consumption: 181.99 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [2175, 2155, 2191, 2180, 2240, 2142, 2188, 2269, 2259, 2322, 2328, 2348, 2348, 2348, 2348, 2348, 2348, 2348, 2347.9999999999995],
      "text": ["Oil consumption: 2175 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2155 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2191 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2180 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2240 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2142 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2188 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2269 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2259 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2322 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2328 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2348 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2348 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2348 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2348 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2348 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2348 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2348 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Oil consumption: 2348 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [333, 337, 341, 332, 314, 300, 295, 309, 301, 310, 322.00000000000006, 329.00000000000006, 329, 329.00000000000006, 329, 329, 329, 329, 329],
      "text": ["Oil consumption: 333 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 337 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 341 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 332 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 314 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 300 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 295 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 309 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 301 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 310 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 322 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 329 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 329 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 329 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 329 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 329 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 329 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 329 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Oil consumption: 329 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [102.42120924133783, 106.90501247390262, 106.96946852000681, 104.9120169400844, 107.63012400932168, 90.085909423490392, 87.498236098562003, 87.817140951282639, 94.908515494072105, 89.681448226332975, 89.24553250096892, 92.936778861851153, 92.965221424788794, 93.006689642460017, 93.054552751473437, 93.078772352193553, 93.085871633551179, 93.072584664876047, 93.018894799288731],
      "text": ["Oil consumption: 102.42 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil consumption: 106.91 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil consumption: 106.97 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil consumption: 104.91 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil consumption: 107.63 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Oil consumption: 90.09 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil consumption: 87.5 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil consumption: 87.82 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil consumption: 94.91 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil consumption: 89.68 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil consumption: 89.25 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil consumption: 92.94 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Oil consumption: 92.97 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil consumption: 93.01 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil consumption: 93.05 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil consumption: 93.08 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil consumption: 93.09 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil consumption: 93.07 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Oil consumption: 93.02 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [265, 268, 271, 274, 280, 260, 257, 269.99999999999994, 294, 321, 295, 299, 299, 299, 299, 299, 299, 299, 299],
      "text": ["Oil consumption: 265 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 268 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 271 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 274 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 280 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 260 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 257 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 270 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 294 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 321 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 295 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 299 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 299 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 299 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 299 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 299 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 299 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 299 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Oil consumption: 299 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [21.236103009069435, 22.639709376583472, 24.041182177790457, 25.588755658140052, 26.578608398041784, 26.874300460931234, 28.99460230746292, 32.08215030679353, 33.497760304505071, 34.462183955892272, 40.594534495151841, 41.953331494111062, 41.969439233611453, 41.971589916444835, 41.951913407461156, 41.942273052884978, 41.940703349468684, 41.935149318651391, 41.925209266557857],
      "text": ["Oil consumption: 21.24 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 22.64 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 24.04 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 25.59 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 26.58 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 26.87 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 28.99 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 32.08 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 33.5 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 34.46 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 40.59 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 41.95 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 41.97 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 41.97 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 41.95 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 41.94 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 41.94 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 41.94 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Oil consumption: 41.93 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [2682, 2751, 2785, 2803, 2697, 2905.9999999999995, 2950, 3135, 3422, 3445, 3490.0000000000005, 3693.0000000000005, 3693.0000000000005, 3693, 3693.0000000000005, 3693.0000000000005, 3693, 3693, 3692.9999999999995],
      "text": ["Oil consumption: 2682 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 2751 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 2785 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 2803 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 2697 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 2906 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 2950 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3135 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3422 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3445 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3490 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3693 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3693 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3693 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3693 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3693 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3693 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3693 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Oil consumption: 3693 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [10.153129324470891, 10.225019285116183, 10.811201884775137, 10.715529621374486, 10.735275877796395, 10.937088779872454, 27.716279167610342, 32.295707209491859, 31.512696791581465, 31.731739868790548, 79.009539583529119, 81.904290598756504, 82.562796474281029, 83.088221836056235, 83.750958831007196, 84.428422941630743, 84.892506391697495, 85.216585276198401, 85.382653172778063],
      "text": ["Oil consumption: 10.15 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil consumption: 10.23 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil consumption: 10.81 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil consumption: 10.72 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil consumption: 10.74 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil consumption: 10.94 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Oil consumption: 27.72 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 32.3 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 31.51 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 31.73 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 79.01 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 81.9 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 82.56 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 83.09 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 83.75 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 84.43 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 84.89 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 85.22 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Oil consumption: 85.38 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [215, 238, 245, 251, 277, 293, 294, 411.99999999999994, 428.00000000000006, 453, 374, 392.00000000000006, 392, 392, 392, 392, 392, 392, 392],
      "text": ["Oil consumption: 215 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 238 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 245 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 251 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 277 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 293 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 294 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 412 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 428 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 453 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 374 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 392 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 392 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 392 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 392 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 392 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 392 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 392 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Oil consumption: 392 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [337, 327, 336, 357, 381.99999999999994, 390.00000000000006, 390.99999999999994, 416, 413, 425, 442.00000000000006, 449.99999999999994, 450, 449.99999999999994, 450, 450, 450, 449.99999999999994, 450],
      "text": ["Oil consumption: 337 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 327 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 336 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 357 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 382 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 390 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 391 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 416 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 413 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 425 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 442 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 450 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 450 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 450 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 450 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 450 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 450 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 450 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Oil consumption: 450 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [84, 85, 87, 91, 90.999999999999986, 94, 101.00000000000001, 81.999999999999986, 104, 107.00000000000001, 105, 109, 109, 109, 109.00000000000001, 109.00000000000001, 109, 109, 108.99999999999999],
      "text": ["Oil consumption: 84 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 85 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 87 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 91 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 91 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 94 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 101 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 82 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 104 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 107 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 105 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 109 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 109 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 109 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 109 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 109 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 109 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 109 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Oil consumption: 109 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [1143, 1233, 1279, 1311, 1335.0000000000002, 1361, 1406, 1487, 1575, 1698, 1664, 1688, 1688, 1688, 1688, 1688, 1688, 1688, 1688],
      "text": ["Oil consumption: 1143 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1233 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1279 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1311 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1335 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1361 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1406 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1487 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1575 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1698 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1664 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1688 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1688 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1688 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1688 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1688 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1688 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1688 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Oil consumption: 1688 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [147.09160172817062, 158.20398353163225, 166.42360932913726, 169.61463996352808, 176.08262617313946, 203.43327346658822, 192.67177358877819, 202.04067974911754, 215.93994011783477, 217.38268421424874, 241.23790354954647, 251.27471578067443, 251.88670554458514, 252.53724543137358, 252.75790504563847, 253.15408440561077, 253.82988184576368, 253.63940595028791, 251.73266066189927],
      "text": ["Oil consumption: 147.09 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 158.2 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 166.42 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 169.61 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 176.08 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 203.43 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 192.67 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 202.04 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 215.94 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 217.38 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 241.24 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 251.27 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 251.89 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 252.54 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 252.76 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 253.15 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 253.83 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 253.64 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Oil consumption: 251.73 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [832, 915, 931, 951.99999999999989, 941, 729, 974, 1074, 1110, 1152, 1221, 1221, 1221, 1221, 1221, 1221, 1221, 1221, 1221],
      "text": ["Oil consumption: 832 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 915 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 931 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 952 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 941 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 729 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 974 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1074 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1110 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1152 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1221 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1221 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1221 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1221 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1221 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1221 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1221 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1221 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Oil consumption: 1221 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [5397, 5288, 5298, 5168, 5009.0000000000009, 4770, 4363, 4328, 4345, 4630, 4504, 4267, 4267, 4267.0000000000009, 4267, 4267, 4266.9999999999991, 4267, 4267],
      "text": ["Oil consumption: 5397 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 5288 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 5298 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 5168 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 5009 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4770 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4363 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4328 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4345 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4630 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4504 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4267 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4267 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4267 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4267 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4267 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4267 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4267 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Oil consumption: 4267 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [114.89809169731862, 118.46680747955625, 124.12551046937486, 126.36748370987198, 129.69398643518247, 140.01654005932517, 156.50797215768097, 170.11320119976077, 163.98516549030177, 172.13525769538427, 177.33291473775486, 184.81238328101446, 183.84522914057564, 182.885109694308, 181.8435594030062, 180.75716691133508, 179.74516653316329, 178.72458946543594, 177.62380612454754],
      "text": ["Oil consumption: 114.9 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil consumption: 118.47 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Oil consumption: 124.13 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 126.37 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 129.69 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 140.02 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 156.51 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 170.11 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 163.99 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 172.14 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 177.33 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 184.81 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 183.85 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 182.89 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 181.84 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 180.76 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 179.75 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 178.72 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Oil consumption: 177.62 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [248, 263, 271.99999999999994, 278, 352, 370.00000000000006, 368, 323, 332, 332, 340, 337, 337, 336.99999999999994, 336.99999999999994, 337, 337, 337, 337],
      "text": ["Oil consumption: 248 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 263 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 272 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 278 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 352 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 370 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 368 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 323 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 332 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 332 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 340 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 337 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 337 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 337 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 337 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 337 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 337 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 337 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Oil consumption: 337 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [644.99999999999989, 661, 659, 678, 672, 655, 678, 673, 656, 696, 763, 765, 765, 765, 765, 765.00000000000011, 765.00000000000011, 764.99999999999989, 765],
      "text": ["Oil consumption: 645 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 661 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 659 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 678 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 672 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 655 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 678 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 673 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 656 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 696 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 763 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 765 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 765 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 765 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 765 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 765 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 765 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 765 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Oil consumption: 765 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [28, 29.000000000000004, 30, 34, 37.000000000000007, 47, 46.000000000000007, 42, 49, 52, 58.000000000000007, 60.999999999999993, 60.999999999999993, 61, 61.000000000000007, 61, 61, 61.000000000000007, 61],
      "text": ["Oil consumption: 28 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 29 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 30 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 34 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 37 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 47 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 46 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 42 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 49 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 52 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 58 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 61 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 61 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 61 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 61 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 61 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 61 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 61 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Oil consumption: 61 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [161.65541981134001, 164.91848651367874, 169.50215243225543, 170.4141957962764, 171.61161560521177, 172.65512192721363, 156.95958931566111, 147.75697886235693, 143.19418916643275, 141.6964079382756, 139.7160811142615, 144.63141324832515, 144.67624374501924, 144.69673482736755, 144.75621607426226, 144.77729483546872, 144.77097647861856, 144.74256755563709, 144.71228862832555],
      "text": ["Oil consumption: 161.66 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 164.92 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 169.5 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 170.41 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 171.61 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 172.66 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 156.96 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 147.76 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 143.19 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 141.7 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 139.72 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 144.63 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 144.68 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 144.7 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 144.76 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 144.78 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 144.77 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 144.74 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Oil consumption: 144.71 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [1426, 1489, 1556, 1642.9999999999998, 1656, 1742.0000000000002, 1766, 1810.9999999999998, 1782, 1863, 1967, 1952.0000000000002, 1952, 1951.9999999999998, 1951.9999999999998, 1952, 1952.0000000000002, 1952.0000000000002, 1952],
      "text": ["Oil consumption: 1426 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1489 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1556 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1643 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1656 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1742 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1766 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1811 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1782 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1863 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1967 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1952 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1952 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1952 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1952 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1952 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1952 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1952 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Oil consumption: 1952 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [2346, 2430, 2512, 2691, 2801, 2864, 3113, 3305, 3461.0000000000005, 3618, 3656, 3735, 3735, 3735, 3735, 3735, 3735, 3735.0000000000005, 3734.9999999999995],
      "text": ["Oil consumption: 2346 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 2430 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 2512 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 2691 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 2801 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 2864 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3113 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3305 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3461 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3618 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3656 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3735 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3735 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3735 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3735 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3735 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3735 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3735 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Oil consumption: 3735 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [20034, 20731, 20802.000000000004, 20687, 20680, 19498, 18771, 19180.000000000004, 18882, 18490, 18961, 19106, 19106, 19106.000000000004, 19106, 19106, 19106, 19106, 19106],
      "text": ["Oil consumption: 20034 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 20731 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 20802 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 20687 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 20680 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19498 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 18771 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19180 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 18882 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 18490 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 18961 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19106 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19106 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19106 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19106 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19106 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19106 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19106 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Oil consumption: 19106 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [8.0999999999999996, 11, 12, 11.000000000000002, 13, 11.999999999999998, 11, 16, 20, 21, 22, 24, 24, 24.000000000000004, 24, 24.000000000000004, 24, 23.999999999999996, 24],
      "text": ["Oil consumption: 8.1 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 11 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 12 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 11 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 13 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 12 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 11 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 16 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 20 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 21 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 22 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 24 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 24 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 24 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 24 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 24 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 24 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 24 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Oil consumption: 24 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [1542, 1571, 1607, 1587.9999999999998, 1611, 1547, 1468, 1441, 1385, 1301, 1208, 1200, 1200, 1200, 1200, 1200, 1199.9999999999998, 1199.9999999999998, 1200],
      "text": ["Oil consumption: 1542 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1571 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1607 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1588 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1611 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1547 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1468 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1441 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1385 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1301 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1208 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1200 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1200 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1200 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1200 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1200 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1200 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1200 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Oil consumption: 1200 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [431.00000000000006, 454, 471, 501.99999999999994, 524, 537, 541, 568, 559, 532.99999999999989, 504.99999999999994, 506, 506, 506, 505.99999999999994, 505.99999999999994, 505.99999999999994, 506, 506],
      "text": ["Oil consumption: 431 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 454 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 471 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 502 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 524 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 537 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 541 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 568 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 559 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 533 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 505 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 506 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 506 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 506 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 506 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 506 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 506 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 506 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Oil consumption: 506 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [288, 277, 312, 284, 268.99999999999994, 269, 243.00000000000003, 283, 287, 279, 283, 277, 277, 277, 277, 277, 277, 277, 277],
      "text": ["Oil consumption: 288 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 277 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 312 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 284 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 269 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 269 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 243 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 283 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 287 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 279 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 283 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 277 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 277 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 277 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 277 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 277 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 277 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 277 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Oil consumption: 277 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [489.99999999999994, 503.99999999999994, 537, 551, 561, 527, 533.00000000000011, 584, 616, 638, 635.00000000000011, 663, 663, 663, 663, 663.00000000000011, 663, 663, 663],
      "text": ["Oil consumption: 490 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 504 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 537 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 551 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 561 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 527 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 533 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 584 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 616 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 638 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 635 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 663 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 663 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 663 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 663 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 663 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 663 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 663 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Oil consumption: 663 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [2678.9999999999995, 2648, 2623.9999999999995, 2636, 2407, 2533, 2434, 2467, 2392, 2389, 2435, 2374, 2374.0000000000005, 2374, 2374, 2374.0000000000005, 2374, 2374, 2374],
      "text": ["Oil consumption: 2679 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2648 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2624 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2636 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2407 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2533 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2434 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2467 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2392 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2389 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2435 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2374 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2374 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2374 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2374 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2374 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2374 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2374 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Oil consumption: 2374 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [114.77283861410537, 123.95861422547308, 130.38069668501842, 131.22409369433424, 132.56380372960601, 134.74554902482728, 127.32059728051991, 126.77287361865658, 124.67591699318704, 121.14902211510753, 118.69377932064992, 124.96462285477057, 125.17302026407424, 125.41487559013521, 125.68232629446959, 125.91263683887207, 126.09286474892643, 126.20946583467759, 125.63225385629387],
      "text": ["Oil consumption: 114.77 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 123.96 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 130.38 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 131.22 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 132.56 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 134.75 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 127.32 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 126.77 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 124.68 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 121.15 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 118.69 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 124.96 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 125.17 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 125.41 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 125.68 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 125.91 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 126.09 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 126.21 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Oil consumption: 125.63 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [175.99999999999997, 182, 192, 202, 194, 192, 163, 164, 144, 136, 139, 139, 139, 139, 139, 139, 139, 139, 139],
      "text": ["Oil consumption: 176 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 182 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 192 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 202 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 194 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 192 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 163 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 164 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 144 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 136 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 139 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 139 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 139 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 139 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 139 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 139 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 139 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 139 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Oil consumption: 139 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [326.00000000000006, 328, 337, 303, 308, 293, 276, 274, 255.99999999999997, 229.99999999999997, 234, 234.00000000000003, 234, 233.99999999999997, 233.99999999999997, 234, 233.99999999999997, 234, 234],
      "text": ["Oil consumption: 326 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 328 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 337 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 303 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 308 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 293 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 276 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 274 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 256 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 230 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 234 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 234 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 234 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 234 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 234 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 234 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 234 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 234 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Oil consumption: 234 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [1775, 1884.0000000000002, 1963.9999999999998, 2019.9999999999998, 2144, 1980, 2195, 2580, 2761, 2881.9999999999995, 2964.0000000000005, 3141, 3141, 3140.9999999999995, 3141, 3141, 3141.0000000000005, 3141, 3141],
      "text": ["Oil consumption: 1775 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 1884 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 1964 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 2020 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 2144 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 1980 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 2195 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 2580 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 2761 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 2882 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 2964 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 3141 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 3141 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 3141 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 3141 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 3141 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 3141 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 3141 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Oil consumption: 3141 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [2000.7962113852709, 2007.7982552798665, 1989.8029306738076, 1990.8053288395731, 1978.8080529365866, 1943.8126355378135, 1867.8209716317615, 1821.8262556072045, 1778.8313496486146, 1738.8364268527937, 1713.8401806100519, 1691.8433873162212, 1691.8442226686384, 1691.844962637462, 1691.8456140311978, 1691.8464812219038, 1691.8474803055274, 1691.8484623268798, 1691.8495755285821],
      "text": ["Oil consumption: 2000.8 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 2007.8 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1989.8 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1990.81 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1978.81 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1943.81 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1867.82 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1821.83 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1778.83 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1738.84 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1713.84 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1691.84 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1691.84 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1691.84 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1691.85 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1691.85 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1691.85 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1691.85 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Oil consumption: 1691.85 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [1749.6607301946945, 1779.4845618337617, 1809.3198742941336, 1796.3879142103576, 1741.6817229910041, 1712.8376512243251, 1625.3043886751241, 1617.357218484324, 1573.6042782943646, 1526.8733493155155, 1518.9488535278797, 1512.0171491420733, 1512.0594615045766, 1512.1029451765623, 1512.1299000905183, 1512.1390254637113, 1512.1396975596674, 1512.1285263076804, 1512.0893304483163],
      "text": ["Oil consumption: 1749.66 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1779.48 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1809.32 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1796.39 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1741.68 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1712.84 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1625.3 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1617.36 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1573.6 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1526.87 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1518.95 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1512.02 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1512.06 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1512.1 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1512.13 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1512.14 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1512.14 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1512.13 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Oil consumption: 1512.09 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [288.99999999999994, 295, 299, 299, 293, 284, 269, 278.00000000000006, 264, 261, 264, 261, 261, 261, 261, 261, 261.00000000000006, 261, 261],
      "text": ["Oil consumption: 289 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 295 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 299 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 299 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 293 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 284 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 269 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 278 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 264 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 261 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 264 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 261 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 261 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 261 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 261 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 261 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 261 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 261 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Oil consumption: 261 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [5512.5345233799517, 6371.699642171593, 6635.9115175318475, 7212.7691119302899, 7504.2346349740756, 7455.72360940831, 8559.4578387633701, 9001.5690345494804, 9619.543437642782, 10301.89040397079, 10853.934442666286, 11312.672931313737, 11312.724950042217, 11313.037580595475, 11313.536974623197, 11313.649162801121, 11313.581470213498, 11313.922330220315, 11314.392392501011],
      "text": ["Oil consumption: 5512.53 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 6371.7 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 6635.91 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 7212.77 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 7504.23 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 7455.72 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 8559.46 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 9001.57 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 9619.54 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 10301.89 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 10853.93 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 11312.67 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 11312.72 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 11313.04 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 11313.54 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 11313.65 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 11313.58 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 11313.92 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Oil consumption: 11314.39 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [253.99083470170669, 268.48658303555038, 281.52491748230636, 283.90558979596648, 289.84613717023808, 317.43652865786817, 328.54689155014393, 340.95317297278791, 344.40047429067494, 355.76823293361633, 369.18590409394625, 373.98036819201036, 375.66940197162518, 376.92985334693543, 377.71725070868195, 378.03751701998601, 377.76738141823887, 377.05717116922636, 377.23157958552764],
      "text": ["Oil consumption: 253.99 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil consumption: 268.49 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil consumption: 281.52 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Oil consumption: 283.91 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil consumption: 289.85 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil consumption: 317.44 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil consumption: 328.55 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil consumption: 340.95 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil consumption: 344.4 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Oil consumption: 355.77 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil consumption: 369.19 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil consumption: 373.98 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil consumption: 375.67 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil consumption: 376.93 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil consumption: 377.72 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil consumption: 378.04 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Oil consumption: 377.77 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil consumption: 377.06 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Oil consumption: 377.23 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [370, 368, 360, 354, 350, 337, 318.00000000000006, 336, 315, 300, 297, 305, 305.00000000000006, 305, 305, 305, 305, 305, 305],
      "text": ["Oil consumption: 370 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 368 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 360 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 354 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 350 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 337 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 318 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 336 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 315 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 300 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 297 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 305 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 305 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 305 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 305 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 305 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 305 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 305 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Oil consumption: 305 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [184.49435135775795, 181.54450631204222, 179.59146220423503, 186.47940099695521, 187.48062726104939, 177.68857153536268, 163.95703911033149, 163.9559892517174, 161.02857649665822, 152.21274075720839, 152.22844650927047, 151.26102188737786, 151.27228649771288, 151.2769129558705, 151.27625850186502, 151.27270228965773, 151.25744427149291, 151.24253776282333, 151.22883941665668],
      "text": ["Oil consumption: 184.49 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 181.54 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 179.59 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 186.48 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 187.48 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 177.69 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 163.96 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 163.96 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 161.03 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 152.21 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 152.23 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 151.26 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 151.27 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 151.28 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 151.28 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 151.27 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 151.26 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 151.24 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Oil consumption: 151.23 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [1847.2783688115003, 1816.4894311157332, 1768.8102610511191, 1764.8233056535769, 1717.1808541397054, 1655.7351183256294, 1533.5750646108122, 1533.6046496071287, 1483.8918991806722, 1360.6971388220547, 1251.4328969963112, 1257.3051062351703, 1257.0881198862912, 1256.8679594440694, 1256.6023847372567, 1256.252718146651, 1255.7485683255813, 1255.4705979064047, 1255.3514098648875],
      "text": ["Oil consumption: 1847.28 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1816.49 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1768.81 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1764.82 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1717.18 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1655.74 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1533.58 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1533.6 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1483.89 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1360.7 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1251.43 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1257.31 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1257.09 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1256.87 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1256.6 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1256.25 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1255.75 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1255.47 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Oil consumption: 1255.35 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [919, 948, 1009.0000000000001, 999, 1111, 1069, 1005, 1030, 1025, 997.99999999999989, 990.99999999999989, 991, 991, 991, 990.99999999999989, 991, 991.00000000000011, 991, 991],
      "text": ["Oil consumption: 919 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 948 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 1009 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 999 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 1111 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 1069 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 1005 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 1030 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 1025 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 998 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 991 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 991 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 991 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 991 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 991 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 991 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 991 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 991 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Oil consumption: 991 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [630.01548842544855, 631.98826847336284, 634.70991408357713, 613.25437156523753, 614.97536200577485, 688.3755521549391, 617.17268375591323, 637.14636573485961, 599.70298965674283, 578.18150439452961, 596.76702449941968, 592.42615501621026, 591.97172799270504, 591.54428797871572, 591.00509543754526, 590.61048720881183, 590.22461733154921, 589.88546237442404, 589.5784109432002],
      "text": ["Oil consumption: 630.02 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 631.99 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 634.71 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 613.25 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 614.98 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 688.38 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 617.17 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 637.15 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 599.7 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 578.18 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 596.77 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 592.43 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 591.97 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 591.54 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 591.01 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 590.61 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 590.22 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 589.89 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Oil consumption: 589.58 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [221.88686561665182, 219.89250069851209, 217.89881473888525, 220.87785945206201, 221.86743685042572, 215.89318989285101, 204.94501212604496, 212.89943345934753, 207.93006724352119, 199.97585566330972, 196.00080329569803, 192.02509033405545, 192.02826363221823, 192.03102430929823, 192.03327255841134, 192.03454103470315, 192.03559357002538, 192.03696390536624, 192.0389380396588],
      "text": ["Oil consumption: 221.89 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 219.89 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 217.9 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 220.88 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 221.87 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 215.89 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 204.95 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 212.9 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 207.93 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 199.98 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 196 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 192.03 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 192.03 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 192.03 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 192.03 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 192.03 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 192.04 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 192.04 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Oil consumption: 192.04 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [397.4057535174544, 388.96985897287698, 392.28671535202204, 410.2929388361527, 415.30835734157057, 395.91650964711835, 371.67052724586023, 342.90494831603519, 323.30013307875549, 281.75749819334459, 259.90504017332637, 260.25059065434101, 259.79305163414625, 259.38768624174162, 259.03764899091129, 258.69878517470443, 258.39141488774425, 258.0654089720008, 257.51310922393077],
      "text": ["Oil consumption: 397.41 thousand barrels per day<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 388.97 thousand barrels per day<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 392.29 thousand barrels per day<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 410.29 thousand barrels per day<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 415.31 thousand barrels per day<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 395.92 thousand barrels per day<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 371.67 thousand barrels per day<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 342.9 thousand barrels per day<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 323.3 thousand barrels per day<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 281.76 thousand barrels per day<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 259.91 thousand barrels per day<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 260.25 thousand barrels per day<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 259.79 thousand barrels per day<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 259.39 thousand barrels per day<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 259.04 thousand barrels per day<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 258.7 thousand barrels per day<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 258.39 thousand barrels per day<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 258.07 thousand barrels per day<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Oil consumption: 257.51 thousand barrels per day<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Oil consumption (REMIND_54)",
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
      "range": [0, 20802.000000000004],
      "tickmode": "array",
      "ticktext": ["0", "5000", "10000", "15000", "20000"],
      "tickvals": [0, 5000, 10000, 15000, 20000],
      "categoryorder": "array",
      "categoryarray": ["0", "5000", "10000", "15000", "20000"],
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
        "text": "thousand barrels per day",
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
    "b55c4bb0442d": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c222e9c2": {
      "y": {}
    }
  },
  "cur_data": "b55c4bb0442d",
  "visdat": {
    "b55c4bb0442d": ["function (y) ", "x"],
    "b55c222e9c2": ["function (y) ", "x"]
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

  
