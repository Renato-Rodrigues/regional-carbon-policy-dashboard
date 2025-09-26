(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Government_Number_of_taxes___paid_by_businesses_line') 

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
      "y": [62, 61.999999999999993, 61.999999999999993, 19, 19, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9.0000000000000018, 9, 9, 8.9999999999999982, 9],
      "text": ["Number of taxes - paid by businesses: 62 # (taxes)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 62 # (taxes)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 62 # (taxes)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [20.893504437983914, 20.895250815627389, 20.902953967779531, 19.300181662389189, 19.30366456084462, 19.304550980293641, 19.302186001803889, 19.299374542424157, 19.258807623476542, 19.257765702995631, 19.142281020779176, 19.141874412433211, 19.141495982119377, 19.141384438311444, 19.142216831450252, 19.143637224411183, 19.144808581203037, 19.145567146283902, 19.146197207447628],
      "text": ["Number of taxes - paid by businesses: 20.89 # (taxes)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 20.9 # (taxes)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 20.9 # (taxes)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.3 # (taxes)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.3 # (taxes)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.3 # (taxes)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.3 # (taxes)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.3 # (taxes)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.26 # (taxes)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.26 # (taxes)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.14 # (taxes)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.14 # (taxes)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.14 # (taxes)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.14 # (taxes)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.14 # (taxes)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.14 # (taxes)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.14 # (taxes)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.15 # (taxes)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Number of taxes - paid by businesses: 19.15 # (taxes)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [43.245205601579627, 43.200871472134857, 43.165799245593377, 42.341452314575648, 42.391158202182702, 38.769564141199439, 37.532540385160679, 37.336752687496514, 35.584393227752166, 34.493944022662049, 32.697922033580184, 32.414951691643772, 31.970207508575033, 31.296131332645654, 30.231844860621308, 29.315437261806984, 33.168478738589258, 32.87059472230834, 32.699825314175506],
      "text": ["Number of taxes - paid by businesses: 43.25 # (taxes)<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 43.2 # (taxes)<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 43.17 # (taxes)<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 42.34 # (taxes)<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 42.39 # (taxes)<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 38.77 # (taxes)<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 37.53 # (taxes)<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 37.34 # (taxes)<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 35.58 # (taxes)<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 34.49 # (taxes)<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 32.7 # (taxes)<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 32.41 # (taxes)<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 31.97 # (taxes)<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 31.3 # (taxes)<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 30.23 # (taxes)<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 29.32 # (taxes)<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 33.17 # (taxes)<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 32.87 # (taxes)<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Number of taxes - paid by businesses: 32.7 # (taxes)<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [42, 42, 42, 41, 36, 29, 29.000000000000004, 29, 29, 29, 29, 29, 28.999999999999996, 29, 29, 28.999999999999996, 27, 27, 27],
      "text": ["Number of taxes - paid by businesses: 42 # (taxes)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 42 # (taxes)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 42 # (taxes)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 36 # (taxes)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 27 # (taxes)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 27 # (taxes)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Number of taxes - paid by businesses: 27 # (taxes)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [9, 9.0000000000000018, 9, 9, 9, 9, 9, 8, 8, 8, 8, 7.9999999999999991, 8, 7.9999999999999991, 8, 8, 8, 8, 8],
      "text": ["Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [12.150814301851897, 12.147893006491696, 12.148537010708706, 11.31942124924686, 11.324463092167516, 11.330938817971475, 10.502445625984132, 10.504300372615411, 10.506897725869957, 10.511819268027921, 10.515709550057235, 10.51503619659389, 10.512622740515052, 10.346767645068738, 10.344366568302432, 10.342761539589295, 10.342150244770611, 10.33681107236621, 10.335303785883546],
      "text": ["Number of taxes - paid by businesses: 12.15 # (taxes)<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 12.15 # (taxes)<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 12.15 # (taxes)<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 11.32 # (taxes)<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 11.32 # (taxes)<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 11.33 # (taxes)<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.5 # (taxes)<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.5 # (taxes)<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.51 # (taxes)<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.51 # (taxes)<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.52 # (taxes)<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.52 # (taxes)<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.51 # (taxes)<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.35 # (taxes)<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.34 # (taxes)<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.34 # (taxes)<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.34 # (taxes)<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.34 # (taxes)<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Number of taxes - paid by businesses: 10.34 # (taxes)<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [6, 5.9999999999999991, 6, 6, 6, 6, 5.9999999999999991, 6.0000000000000009, 6, 5.9999999999999991, 6, 5.9999999999999991, 6, 6, 5.9999999999999991, 6, 6, 6, 6],
      "text": ["Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [3.9978956884415822, 3.9978959040505986, 3.9978980836598685, 3.9978909463204482, 3.9978889006968155, 3.9978915818259466, 3.9978948312132174, 3.9978980053291586, 3.9979250679567442, 3.997952115017938, 3.9979767028209054, 3.9979993693878053, 3.9980191589957679, 3.9980365158914215, 3.9980522951587645, 4.9975813712892059, 4.9975976278798928, 4.9976117169806429, 4.9976244426515235],
      "text": ["Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 5 # (taxes)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 5 # (taxes)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 5 # (taxes)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Number of taxes - paid by businesses: 5 # (taxes)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10.000000000000002, 9.9999999999999982, 10, 10],
      "text": ["Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [115.0971921072997, 115.03413540129576, 114.96593138014173, 114.20282121114575, 113.98449908522743, 113.99986444844934, 113.90110057108249, 106.08084438305484, 104.52982373145059, 34.145289447763929, 33.166624827013237, 17.065971253574947, 13.776694637767882, 11.533562567555665, 11.521288878971113, 11.518957462522925, 11.513663486699981, 11.507433601189581, 11.498908316077342],
      "text": ["Number of taxes - paid by businesses: 115.1 # (taxes)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 115.03 # (taxes)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 114.97 # (taxes)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 114.2 # (taxes)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 113.98 # (taxes)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 114 # (taxes)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 113.9 # (taxes)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 106.08 # (taxes)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 104.53 # (taxes)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 34.15 # (taxes)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 33.17 # (taxes)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 17.07 # (taxes)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 13.78 # (taxes)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 11.53 # (taxes)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 11.52 # (taxes)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 11.52 # (taxes)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 11.51 # (taxes)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 11.51 # (taxes)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Number of taxes - paid by businesses: 11.5 # (taxes)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [15, 14.999999999999998, 15, 15, 15, 15, 15, 14.999999999999998, 13, 10.999999999999998, 11.000000000000002, 11, 12, 12, 12, 12, 12, 12, 11.999999999999998],
      "text": ["Number of taxes - paid by businesses: 15 # (taxes)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 15 # (taxes)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 15 # (taxes)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 15 # (taxes)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 15 # (taxes)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 15 # (taxes)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 15 # (taxes)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 15 # (taxes)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 13 # (taxes)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [48, 48.000000000000007, 48, 48, 47, 47, 47, 47, 47.000000000000007, 47, 36, 36, 35, 27.000000000000004, 19, 13, 13, 13.000000000000002, 13],
      "text": ["Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 36 # (taxes)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 36 # (taxes)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 35 # (taxes)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 27 # (taxes)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 13 # (taxes)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 13 # (taxes)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 13 # (taxes)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Number of taxes - paid by businesses: 13 # (taxes)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [88.553016118711668, 88.287165633378024, 87.922998016168179, 89.57468469001472, 82.652793273235659, 77.347988488250806, 75.795077463577982, 67.635231264358566, 56.939210348815699, 54.827235876831629, 60.730254228601432, 47.4273705258368, 45.68774851804082, 42.127713640453052, 17.144641418752325, 17.434101990760151, 13.507257505429395, 13.437664656351959, 13.373012632556755],
      "text": ["Number of taxes - paid by businesses: 88.55 # (taxes)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Number of taxes - paid by businesses: 88.29 # (taxes)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Number of taxes - paid by businesses: 87.92 # (taxes)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Number of taxes - paid by businesses: 89.57 # (taxes)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Number of taxes - paid by businesses: 82.65 # (taxes)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Number of taxes - paid by businesses: 77.35 # (taxes)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Number of taxes - paid by businesses: 75.8 # (taxes)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Number of taxes - paid by businesses: 67.64 # (taxes)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Number of taxes - paid by businesses: 56.94 # (taxes)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Number of taxes - paid by businesses: 54.83 # (taxes)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Number of taxes - paid by businesses: 60.73 # (taxes)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Number of taxes - paid by businesses: 47.43 # (taxes)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Number of taxes - paid by businesses: 45.69 # (taxes)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Number of taxes - paid by businesses: 42.13 # (taxes)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Number of taxes - paid by businesses: 17.14 # (taxes)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Number of taxes - paid by businesses: 17.43 # (taxes)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Number of taxes - paid by businesses: 13.51 # (taxes)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Number of taxes - paid by businesses: 13.44 # (taxes)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Number of taxes - paid by businesses: 13.37 # (taxes)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [70, 70, 70, 70, 70, 32, 21, 20.999999999999996, 10, 10, 10, 11.000000000000002, 11, 12, 12, 10.999999999999998, 10, 10, 10],
      "text": ["Number of taxes - paid by businesses: 70 # (taxes)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 70 # (taxes)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 70 # (taxes)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 70 # (taxes)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 70 # (taxes)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 32 # (taxes)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [42.237541126016055, 42.250759490287088, 42.261409947694197, 42.24025224320701, 41.938158069027111, 41.800176567746199, 41.63227137679381, 41.505004247720379, 41.049484619882904, 41.177425410744021, 41.386536268559695, 40.317259340193345, 40.101458451016079, 39.976560122649062, 39.17239173773735, 39.15854510933233, 36.102207073101326, 36.128443509755876, 36.153262399455102],
      "text": ["Number of taxes - paid by businesses: 42.24 # (taxes)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 42.25 # (taxes)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 42.26 # (taxes)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 42.24 # (taxes)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 41.94 # (taxes)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 41.8 # (taxes)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 41.63 # (taxes)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 41.51 # (taxes)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 41.05 # (taxes)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 41.18 # (taxes)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 41.39 # (taxes)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 40.32 # (taxes)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 40.1 # (taxes)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 39.98 # (taxes)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 39.17 # (taxes)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 39.16 # (taxes)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 36.1 # (taxes)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 36.13 # (taxes)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Number of taxes - paid by businesses: 36.15 # (taxes)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [9, 9, 9, 9, 9, 9, 8.9999999999999982, 8.9999999999999982, 9.0000000000000018, 9, 9, 9.0000000000000018, 9, 9, 9, 9.0000000000000018, 9, 9, 9],
      "text": ["Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [25.451242950647451, 25.349411902009592, 25.243518195013266, 25.105893511695086, 26.515387746235572, 26.46254785676474, 26.353670054848159, 26.268676765681406, 26.149630454337835, 26.010556478152807, 25.892536506030993, 25.770681955916491, 25.676930308894267, 25.60186202939439, 25.507138412370349, 27.551582086235914, 30.43305439102723, 30.355586719381204, 30.317296083362056],
      "text": ["Number of taxes - paid by businesses: 25.45 # (taxes)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Number of taxes - paid by businesses: 25.35 # (taxes)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Number of taxes - paid by businesses: 25.24 # (taxes)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Number of taxes - paid by businesses: 25.11 # (taxes)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Number of taxes - paid by businesses: 26.52 # (taxes)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Number of taxes - paid by businesses: 26.46 # (taxes)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Number of taxes - paid by businesses: 26.35 # (taxes)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 26.27 # (taxes)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 26.15 # (taxes)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 26.01 # (taxes)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 25.89 # (taxes)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 25.77 # (taxes)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 25.68 # (taxes)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 25.6 # (taxes)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 25.51 # (taxes)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 27.55 # (taxes)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 30.43 # (taxes)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 30.36 # (taxes)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Number of taxes - paid by businesses: 30.32 # (taxes)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [32, 32, 31.999999999999996, 32, 32, 32, 43.999999999999993, 44, 44, 44, 44.999999999999993, 45, 43, 31, 14.000000000000002, 10.000000000000002, 6, 6, 6],
      "text": ["Number of taxes - paid by businesses: 32 # (taxes)<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 32 # (taxes)<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 32 # (taxes)<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 32 # (taxes)<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 32 # (taxes)<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 32 # (taxes)<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 44 # (taxes)<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 44 # (taxes)<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 44 # (taxes)<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 44 # (taxes)<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 45 # (taxes)<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 45 # (taxes)<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 43 # (taxes)<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 31 # (taxes)<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [47, 47, 47, 47.000000000000007, 46.999999999999993, 47.000000000000007, 47, 47.000000000000007, 47, 47, 47, 47, 47, 46.999999999999993, 47, 47, 34, 34, 34],
      "text": ["Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 47 # (taxes)<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 34 # (taxes)<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 34 # (taxes)<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Number of taxes - paid by businesses: 34 # (taxes)<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [33, 33, 33, 33, 33, 33, 33.000000000000007, 33, 33, 33, 33, 33, 33, 33, 33.000000000000007, 33, 33, 33, 33],
      "text": ["Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [52.999999999999993, 53.000000000000007, 53, 53, 53, 53, 53, 52.999999999999993, 53.000000000000007, 53, 53, 53, 42, 42.000000000000007, 42, 41.999999999999993, 26, 26, 26],
      "text": ["Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 53 # (taxes)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 42 # (taxes)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 42 # (taxes)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 42 # (taxes)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 42 # (taxes)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 26 # (taxes)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 26 # (taxes)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Number of taxes - paid by businesses: 26 # (taxes)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [35.794039710566636, 35.777387098848308, 35.748590096407682, 35.818959198661766, 35.771691496911949, 30.960241642900741, 30.92552950511115, 32.702346283990302, 32.882021948241125, 31.47741158538086, 30.907646336879861, 29.338280867317692, 29.293692206105987, 28.358962405052562, 28.085674854482885, 26.89149202233493, 27.469453344431496, 27.477736192096806, 27.52925767615821],
      "text": ["Number of taxes - paid by businesses: 35.79 # (taxes)<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 35.78 # (taxes)<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 35.75 # (taxes)<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 35.82 # (taxes)<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 35.77 # (taxes)<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 30.96 # (taxes)<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 30.93 # (taxes)<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 32.7 # (taxes)<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 32.88 # (taxes)<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 31.48 # (taxes)<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 30.91 # (taxes)<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 29.34 # (taxes)<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 29.29 # (taxes)<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 28.36 # (taxes)<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 28.09 # (taxes)<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 26.89 # (taxes)<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 27.47 # (taxes)<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 27.48 # (taxes)<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Number of taxes - paid by businesses: 27.53 # (taxes)<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [33.000000000000007, 32.999999999999993, 33, 33, 33, 21, 21, 21, 21, 21, 21, 21, 20.999999999999996, 21, 21, 21.000000000000004, 21, 21, 21],
      "text": ["Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [18, 18, 18, 18, 18, 18.000000000000004, 18, 17.999999999999996, 18.000000000000004, 18, 18, 19, 19, 19.000000000000004, 19, 19, 19, 18.999999999999996, 19],
      "text": ["Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 18 # (taxes)<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [38.208466121070614, 38.285213169878844, 38.358741043555668, 38.428542852823377, 36.002263226164182, 35.991650357509791, 36.075305496916073, 35.264984981642968, 33.287662817983019, 32.06701670067288, 29.145052318513045, 29.51385968119471, 29.641130837110488, 29.682669361964702, 29.625859101341788, 29.708937008225853, 29.835737604269273, 29.956872864832995, 30.086930668527103],
      "text": ["Number of taxes - paid by businesses: 38.21 # (taxes)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 38.29 # (taxes)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 38.36 # (taxes)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 38.43 # (taxes)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 36 # (taxes)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 35.99 # (taxes)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 36.08 # (taxes)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 35.26 # (taxes)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 33.29 # (taxes)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 32.07 # (taxes)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 29.15 # (taxes)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 29.51 # (taxes)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 29.64 # (taxes)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 29.68 # (taxes)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 29.63 # (taxes)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 29.71 # (taxes)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 29.84 # (taxes)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 29.96 # (taxes)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Number of taxes - paid by businesses: 30.09 # (taxes)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7.0000000000000009, 6.9999999999999991, 7, 7, 7, 7, 7],
      "text": ["Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10.000000000000002, 10, 9.9999999999999982, 10, 10, 10, 10, 10, 10, 10],
      "text": ["Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Number of taxes - paid by businesses: 10 # (taxes)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [29, 29.000000000000004, 29, 29, 29, 29, 29.000000000000004, 29, 29, 29.000000000000004, 29.000000000000004, 29, 29, 29.000000000000004, 29, 29, 29, 29, 29.000000000000004],
      "text": ["Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Number of taxes - paid by businesses: 29 # (taxes)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [63.419471812617388, 63.366735278208047, 63.296955587494381, 63.227462515142747, 60.834234217869728, 62.12596571436552, 61.983909661125075, 62.016648402351962, 61.760597280686078, 27.731194130188907, 24.661686400596373, 12.930944235141732, 12.929509089391683, 13.023517295079804, 13.02090124903129, 12.922938339863439, 12.91912440185429, 12.916063176703432, 12.913105991730337],
      "text": ["Number of taxes - paid by businesses: 63.42 # (taxes)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 63.37 # (taxes)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 63.3 # (taxes)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 63.23 # (taxes)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 60.83 # (taxes)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 62.13 # (taxes)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 61.98 # (taxes)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 62.02 # (taxes)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 61.76 # (taxes)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 27.73 # (taxes)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 24.66 # (taxes)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 12.93 # (taxes)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 12.93 # (taxes)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 13.02 # (taxes)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 13.02 # (taxes)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 12.92 # (taxes)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 12.92 # (taxes)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 12.92 # (taxes)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Number of taxes - paid by businesses: 12.91 # (taxes)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [22, 22, 22, 21.999999999999996, 22, 22, 22, 20, 20, 20, 20.000000000000004, 20, 20.000000000000004, 20, 20, 20, 20, 20, 20],
      "text": ["Number of taxes - paid by businesses: 22 # (taxes)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 22 # (taxes)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 22 # (taxes)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 22 # (taxes)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 22 # (taxes)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 22 # (taxes)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 22 # (taxes)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41.000000000000007, 41, 41, 33, 13.999999999999998, 12.000000000000002, 11, 11, 11],
      "text": ["Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 33 # (taxes)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [10.999999999999998, 10.999999999999998, 11.000000000000002, 11, 11, 11, 11, 11, 11, 11, 11, 10.999999999999998, 11, 11, 11, 11, 11, 11, 10.999999999999998],
      "text": ["Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [40, 39.999999999999993, 39.999999999999993, 40.000000000000007, 40, 40, 40, 40, 40, 40, 40, 50, 52, 52, 52, 52.000000000000007, 52.000000000000007, 51.999999999999993, 52],
      "text": ["Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 40 # (taxes)<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 50 # (taxes)<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 52 # (taxes)<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 52 # (taxes)<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 52 # (taxes)<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 52 # (taxes)<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 52 # (taxes)<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 52 # (taxes)<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Number of taxes - paid by businesses: 52 # (taxes)<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [8, 8, 7.9999999999999991, 7.9999999999999991, 9, 9.0000000000000018, 9, 9, 9, 9, 9, 9, 9, 8, 9, 9, 9, 9, 9],
      "text": ["Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [41, 41, 40.999999999999993, 41, 41, 40.999999999999993, 41, 30, 30, 18.999999999999996, 19, 19, 7.0000000000000009, 7.0000000000000009, 7, 7, 7.0000000000000009, 7.0000000000000009, 7],
      "text": ["Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 41 # (taxes)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 30 # (taxes)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 30 # (taxes)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 19 # (taxes)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [59, 59, 59, 59, 58.999999999999993, 59, 59, 59, 59.000000000000007, 59.000000000000007, 59.000000000000007, 59, 48, 48, 48, 48, 48.000000000000007, 48, 48.000000000000007],
      "text": ["Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 59 # (taxes)<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Number of taxes - paid by businesses: 48 # (taxes)<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [12, 12, 12.000000000000002, 12, 11, 9, 9, 9, 8, 8, 7, 7, 7, 7.0000000000000009, 7, 7, 6.9999999999999991, 7.0000000000000009, 6.9999999999999991],
      "text": ["Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 11 # (taxes)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [12, 12, 11.999999999999998, 12, 12, 12, 12, 12, 11.999999999999998, 9, 9, 9, 9, 9, 9, 9.0000000000000018, 9, 9, 9],
      "text": ["Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [24.764478302002622, 24.789461587316882, 24.826042521985986, 15.847516431457425, 16.000196874695515, 16.004746472968481, 16.020892018591294, 15.911465759205793, 14.122253446757661, 11.771155225459541, 11.720198480392373, 11.726191576262728, 9.037933653390537, 8.3001332207924161, 8.2957710990179088, 8.1661249474802577, 8.165808081396067, 8.1663239267280847, 8.1691993547353388],
      "text": ["Number of taxes - paid by businesses: 24.76 # (taxes)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 24.79 # (taxes)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 24.83 # (taxes)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 15.85 # (taxes)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 16 # (taxes)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 16 # (taxes)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 16.02 # (taxes)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 15.91 # (taxes)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 14.12 # (taxes)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 11.77 # (taxes)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 11.72 # (taxes)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 11.73 # (taxes)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 9.04 # (taxes)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 8.3 # (taxes)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 8.3 # (taxes)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 8.17 # (taxes)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 8.17 # (taxes)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 8.17 # (taxes)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Number of taxes - paid by businesses: 8.17 # (taxes)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [8.9999999999999982, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9.0000000000000018, 9, 9, 9],
      "text": ["Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [7, 7, 6.9999999999999991, 7, 7, 7, 7, 8, 7.9999999999999991, 8, 7.9999999999999991, 8, 8, 7.9999999999999991, 8, 8, 8, 7.9999999999999991, 8],
      "text": ["Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 7 # (taxes)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Number of taxes - paid by businesses: 8 # (taxes)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [14, 14.000000000000002, 14, 13.999999999999998, 14, 14, 13.999999999999998, 14, 14, 3, 3, 2.9999999999999996, 3, 2.9999999999999996, 3, 3, 4, 4, 4],
      "text": ["Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 14 # (taxes)<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 3 # (taxes)<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 3 # (taxes)<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 3 # (taxes)<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 3 # (taxes)<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 3 # (taxes)<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 3 # (taxes)<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 3 # (taxes)<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Number of taxes - paid by businesses: 4 # (taxes)<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [20.997861288900893, 20.997890119958765, 20.997920373944705, 20.997946713024131, 20.997963169109813, 8.9991325719343234, 8.9991374436219758, 8.9991417675438186, 8.9991467941751146, 8.9991534454716184, 8.9991608083374963, 8.9991669538096879, 8.9991713971736083, 8.9991753331779893, 8.9991787980382849, 8.9991834107548083, 8.9991887250294003, 8.9991939485472354, 8.9991998698328857],
      "text": ["Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 21 # (taxes)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [7.957402570986269, 7.9573272697067985, 7.9573030531815236, 7.9572951443437363, 7.9572980833156164, 7.9573020317413361, 7.957288688417596, 7.9572849006870596, 7.9573402048460755, 7.9574355463366864, 7.9575475627568064, 7.9577033317835975, 7.957926015085623, 7.9581543849438745, 7.958294654183339, 7.9583405389784101, 8.9531342655451844, 8.9530643717493934, 8.9528268403007569],
      "text": ["Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 8.95 # (taxes)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 8.95 # (taxes)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Number of taxes - paid by businesses: 8.95 # (taxes)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [12, 12, 12, 11.999999999999998, 11.999999999999998, 12, 12, 12, 12, 11.999999999999998, 12, 12, 12, 12, 12, 11.999999999999998, 12.000000000000002, 12, 12],
      "text": ["Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Number of taxes - paid by businesses: 12 # (taxes)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [8.8225472088639751, 8.8226006976415032, 8.8227817921394411, 8.8229110540283688, 8.8230199194300241, 8.8232616362793319, 8.8238009790585554, 8.8190413025604197, 8.8193382829557656, 8.8195121537549728, 8.8198112227718859, 8.8199499109982664, 8.8200324212602972, 8.8202872807660349, 8.8207058850537248, 6.8641221660116427, 6.8641390353158904, 6.8642605092723281, 6.8644009682375442],
      "text": ["Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 8.82 # (taxes)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 6.86 # (taxes)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 6.86 # (taxes)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 6.86 # (taxes)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Number of taxes - paid by businesses: 6.86 # (taxes)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [24.903296583032056, 24.89865466623089, 24.888265330728025, 24.89693443224569, 24.816442837661789, 24.754587946411444, 24.708230948228248, 24.59576738490269, 24.516352677143541, 23.883100884757944, 23.830337444305069, 23.467338081281607, 23.459703489433355, 23.458611661448082, 23.497571005610713, 23.408722570533289, 21.086709815462129, 21.16730293948638, 21.260215177814324],
      "text": ["Number of taxes - paid by businesses: 24.9 # (taxes)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Number of taxes - paid by businesses: 24.9 # (taxes)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Number of taxes - paid by businesses: 24.89 # (taxes)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Number of taxes - paid by businesses: 24.9 # (taxes)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 24.82 # (taxes)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 24.75 # (taxes)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Number of taxes - paid by businesses: 24.71 # (taxes)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Number of taxes - paid by businesses: 24.6 # (taxes)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Number of taxes - paid by businesses: 24.52 # (taxes)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Number of taxes - paid by businesses: 23.88 # (taxes)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 23.83 # (taxes)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 23.47 # (taxes)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 23.46 # (taxes)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 23.46 # (taxes)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 23.5 # (taxes)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 23.41 # (taxes)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 21.09 # (taxes)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 21.17 # (taxes)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Number of taxes - paid by businesses: 21.26 # (taxes)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [6, 6, 6, 6, 6, 6.0000000000000009, 6, 6, 6, 6, 6, 6.0000000000000009, 6.0000000000000009, 6, 6, 6, 6, 6, 6],
      "text": ["Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Number of taxes - paid by businesses: 6 # (taxes)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [9.8111660559719613, 9.8107695120169982, 9.8112769080714948, 9.8121989277922737, 9.8133095750251478, 9.8144708136010355, 9.8150235464448059, 9.8150592354591666, 9.8160167358895016, 9.8172499031716498, 9.8186146657631834, 9.8195158345907672, 9.8202638577621695, 9.82057280054965, 9.8205350545681078, 9.8203075249976646, 9.8193060941791348, 9.8183282802735565, 9.817429010465748],
      "text": ["Number of taxes - paid by businesses: 9.81 # (taxes)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.81 # (taxes)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.81 # (taxes)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.81 # (taxes)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.81 # (taxes)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.81 # (taxes)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Number of taxes - paid by businesses: 9.82 # (taxes)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [13.951655038914497, 13.951643300833867, 13.951573114277998, 13.951542432959091, 13.951617531566047, 13.951623207533377, 13.951479689013089, 13.951391147127522, 13.951269486408197, 12.957969000702054, 12.957866706539237, 12.957412765233487, 13.949074970778806, 13.955271638093398, 13.953970864019219, 13.952258211330534, 13.949788906084482, 13.948427418317085, 13.94784364015455],
      "text": ["Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 12.96 # (taxes)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 12.96 # (taxes)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 12.96 # (taxes)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.96 # (taxes)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Number of taxes - paid by businesses: 13.95 # (taxes)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [20, 20, 20, 20, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
      "text": ["Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 20 # (taxes)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Number of taxes - paid by businesses: 9 # (taxes)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [11.500524438889178, 11.50528750558863, 11.510052152936257, 11.514640452716026, 11.518645347030573, 11.523617948385262, 11.528887022063213, 11.53351591255246, 11.538234262622494, 11.547466814826551, 11.557160541605246, 11.567413060152095, 11.577116128269642, 11.586242961308557, 11.597755969305085, 11.606181767783374, 11.6144209822445, 11.621662725101269, 11.628218983419211],
      "text": ["Number of taxes - paid by businesses: 11.5 # (taxes)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.51 # (taxes)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.51 # (taxes)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.51 # (taxes)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.52 # (taxes)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.52 # (taxes)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.53 # (taxes)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.53 # (taxes)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.54 # (taxes)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.55 # (taxes)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.56 # (taxes)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.57 # (taxes)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.58 # (taxes)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.59 # (taxes)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.6 # (taxes)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.61 # (taxes)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.61 # (taxes)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.62 # (taxes)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Number of taxes - paid by businesses: 11.63 # (taxes)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [19.900167319879085, 19.899773818869875, 19.899435135971256, 19.898906256942528, 19.898424829634589, 19.897989851875668, 7.9590295971279588, 7.9588573255830868, 7.9590456361156434, 7.9592380363506354, 7.9594234840892595, 7.9595892366447858, 7.9597207723199253, 7.9598352045304983, 7.9599283962035789, 7.9599809755317361, 7.9600246039388773, 7.9600814054037814, 7.9601632348045097],
      "text": ["Number of taxes - paid by businesses: 19.9 # (taxes)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 19.9 # (taxes)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 19.9 # (taxes)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 19.9 # (taxes)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 19.9 # (taxes)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 19.9 # (taxes)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Number of taxes - paid by businesses: 7.96 # (taxes)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [19.83804367327707, 19.850140850058164, 19.861774039347225, 19.873239926524541, 19.884990884143608, 9.8828002639851356, 9.9070113850345951, 9.933531915706526, 9.9651932613045116, 10.099744250970156, 10.241283021153984, 10.186138098763591, 10.025686055719978, 10.059607845879365, 10.088899666032528, 10.011393647199233, 8.8571911334646263, 8.8681034653723589, 8.8865904862282612],
      "text": ["Number of taxes - paid by businesses: 19.84 # (taxes)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 19.85 # (taxes)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 19.86 # (taxes)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 19.87 # (taxes)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 19.88 # (taxes)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 9.88 # (taxes)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 9.91 # (taxes)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 9.93 # (taxes)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 9.97 # (taxes)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 10.1 # (taxes)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 10.24 # (taxes)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 10.19 # (taxes)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 10.03 # (taxes)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 10.06 # (taxes)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 10.09 # (taxes)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 10.01 # (taxes)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 8.86 # (taxes)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 8.87 # (taxes)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Number of taxes - paid by businesses: 8.89 # (taxes)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Number of taxes - paid by businesses (REMIND_54)",
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
      "range": [0, 147.00000000000003],
      "tickmode": "array",
      "ticktext": ["0", "50", "100", "150"],
      "tickvals": [0, 50, 99.999999999999986, 150],
      "categoryorder": "array",
      "categoryarray": ["0", "50", "100", "150"],
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
        "text": "# (taxes)",
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
    "b55c1ee55ddc": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c11287dde": {
      "y": {}
    }
  },
  "cur_data": "b55c1ee55ddc",
  "visdat": {
    "b55c1ee55ddc": ["function (y) ", "x"],
    "b55c11287dde": ["function (y) ", "x"]
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

  
