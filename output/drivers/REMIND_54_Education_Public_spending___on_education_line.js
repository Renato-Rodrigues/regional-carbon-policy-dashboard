(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Education_Public_spending___on_education_line') 

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
      "y": [3.5400000000000005, 3.4900000000000002, 3.8599999999999999, 4.1299999999999999, 4.46, 4.8400000000000007, 5.5300000000000002, 5.0199999999999996, 5.29, 5.3499999999999996, 5.4400000000000004, 5.3600000000000003, 5.7800000000000002, 5.5499999999999998, 5.4500000000000002, 4.8799999999999999, 4.7800000000000002, 5.2800000000000002, 4.6500000000000004],
      "text": ["Public spending - on education: 3.54 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 3.49 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 3.86 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 4.13 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 4.46 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 4.84 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.53 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.02 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.29 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.35 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.44 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.36 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.78 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.55 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.45 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 4.88 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 4.78 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 5.28 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Public spending - on education: 4.65 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [5.4376688764037171, 5.3671696725282274, 5.1536194646089477, 4.9191501776931981, 4.6612235132050168, 4.8384410007696967, 5.0069253372901601, 4.872600165399759, 4.9243683098274689, 4.9926166899323148, 4.9970343170146991, 5.0234072098397764, 5.083498343776605, 5.0635252289117467, 5.1089504711881384, 5.0239904984629371, 5.1039320607960015, 5.412790249737629, 5.1392631442233698],
      "text": ["Public spending - on education: 5.44 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.37 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.15 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 4.92 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 4.66 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 4.84 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.01 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 4.87 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 4.92 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 4.99 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.02 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.08 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.06 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.11 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.02 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.1 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.41 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Public spending - on education: 5.14 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [3.6729573006998755, 3.6618093792697524, 3.6707388112335235, 3.6251654532605668, 3.6641315336252211, 4.0643435601647138, 4.4789438261535599, 4.4220058294107796, 4.4186371340173682, 4.4730496261143697, 4.5419412542828841, 4.7366958710995499, 4.8034143359110217, 4.6996985043975288, 4.7243597140089575, 4.6920517010262115, 4.6835829478604056, 4.8273036169555468, 4.6130829356014367],
      "text": ["Public spending - on education: 3.67 % (GDP)<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 3.66 % (GDP)<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 3.67 % (GDP)<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 3.63 % (GDP)<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 3.66 % (GDP)<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.06 % (GDP)<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.48 % (GDP)<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.42 % (GDP)<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.42 % (GDP)<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.47 % (GDP)<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.54 % (GDP)<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.74 % (GDP)<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.8 % (GDP)<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.7 % (GDP)<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.72 % (GDP)<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.69 % (GDP)<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.68 % (GDP)<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.83 % (GDP)<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Public spending - on education: 4.61 % (GDP)<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [4.9500000000000002, 4.6699999999999999, 4.79, 4, 3.6800000000000002, 3.7599999999999998, 3.6400000000000001, 3.5400000000000005, 3.3399999999999999, 3.3699999999999997, 4.1200000000000001, 4.25, 3.9299999999999997, 3.9300000000000002, 3.9300000000000002, 3.9299999999999997, 3.9299999999999997, 3.9300000000000002, 3.9300000000000002],
      "text": ["Public spending - on education: 4.95 % (GDP)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 4.67 % (GDP)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 4.79 % (GDP)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 4 % (GDP)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.68 % (GDP)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.76 % (GDP)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.64 % (GDP)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.54 % (GDP)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.34 % (GDP)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.37 % (GDP)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 4.12 % (GDP)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 4.25 % (GDP)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.93 % (GDP)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.93 % (GDP)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.93 % (GDP)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.93 % (GDP)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.93 % (GDP)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.93 % (GDP)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Public spending - on education: 3.93 % (GDP)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [4.7699999999999996, 4.7699999999999996, 4.7699999999999996, 4.7699999999999996, 4.7699999999999996, 4.6299999999999999, 4.8399999999999999, 5.3600000000000003, 5.2599999999999998, 4.6900000000000004, 4.5899999999999999, 4.8399999999999999, 4.7400000000000002, 4.8200000000000003, 4.96, 4.8899999999999997, 4.7699999999999996, 4.8899999999999997, 4.589999999999999],
      "text": ["Public spending - on education: 4.77 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.77 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.77 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.77 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.77 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.63 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.84 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 5.36 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 5.26 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.69 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.59 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.84 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.74 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.82 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.96 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.89 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.77 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.89 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Public spending - on education: 4.59 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [5.3415641149516722, 5.2920908692907016, 5.0513238265750777, 4.9409809198757433, 4.8871479391858559, 4.8904824675693384, 5.3150179342340804, 5.6999467862179021, 5.2668385796432213, 5.0811158303845243, 5.3363294081063533, 5.2648674335042109, 5.3832361116157994, 5.3242458766080762, 5.1612783784026393, 5.1298450755637583, 5.1365696303032644, 5.6199347170954868, 5.5566808830735486],
      "text": ["Public spending - on education: 5.34 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.29 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.05 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.94 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.89 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 4.89 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.32 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.7 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.27 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.08 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.34 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.26 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.38 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.32 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.16 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.13 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.14 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.62 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Public spending - on education: 5.56 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [5.0700000000000003, 4.7300000000000004, 4.8499999999999996, 4.7000000000000002, 4.6900000000000004, 4.8200000000000003, 5.1899999999999995, 5.160000000000001, 5.1100000000000003, 5.0999999999999996, 4.7000000000000002, 5.2599999999999998, 5.2300000000000013, 4.9100000000000001, 4.5199999999999996, 4.25, 4.4399999999999995, 4.6299999999999999, 4.629999999999999],
      "text": ["Public spending - on education: 5.07 % (GDP)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.73 % (GDP)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.85 % (GDP)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.7 % (GDP)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.69 % (GDP)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.82 % (GDP)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 5.19 % (GDP)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 5.16 % (GDP)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 5.11 % (GDP)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 5.1 % (GDP)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.7 % (GDP)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 5.26 % (GDP)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 5.23 % (GDP)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.91 % (GDP)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.52 % (GDP)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.25 % (GDP)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.44 % (GDP)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.63 % (GDP)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Public spending - on education: 4.63 % (GDP)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [7.4000000000000004, 7.2800000000000002, 6.8400000000000007, 6.3600000000000003, 6.5099999999999998, 6.2500000000000009, 7.0700000000000012, 6.71, 6.4100000000000001, 7.330000000000001, 7.4400000000000013, 7.6399999999999997, 7.5199999999999987, 7.9799999999999995, 7.8500000000000005, 7.5999999999999996, 7.8600000000000003, 8.3699999999999992, 5.04],
      "text": ["Public spending - on education: 7.4 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.28 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 6.84 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 6.36 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 6.51 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 6.25 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.07 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 6.71 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 6.41 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.33 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.44 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.64 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.52 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.98 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.85 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.6 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 7.86 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 8.37 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Public spending - on education: 5.04 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [3.9700000000000002, 3.9700000000000002, 4.4800000000000004, 4.8700000000000001, 4.9699999999999998, 5.2699999999999987, 5.4600000000000009, 5.6499999999999995, 5.7400000000000002, 5.8600000000000003, 5.8399999999999999, 5.9499999999999993, 6.2399999999999993, 6.3099999999999996, 6.3199999999999994, 6.0900000000000007, 5.96, 5.7699999999999996, 5.7699999999999996],
      "text": ["Public spending - on education: 3.97 % (GDP)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 3.97 % (GDP)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 4.48 % (GDP)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 4.87 % (GDP)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 4.97 % (GDP)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.27 % (GDP)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.46 % (GDP)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.65 % (GDP)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.74 % (GDP)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.86 % (GDP)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.84 % (GDP)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.95 % (GDP)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 6.24 % (GDP)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 6.31 % (GDP)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 6.32 % (GDP)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 6.09 % (GDP)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.96 % (GDP)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.77 % (GDP)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Public spending - on education: 5.77 % (GDP)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [4.8383684998978982, 4.7975051166234426, 5.2612189834098038, 5.4002727081738682, 5.3742806764372961, 5.6019585460553536, 6.2860071145846348, 5.7608753743152823, 5.3390896688240863, 5.5964725224698118, 5.6278578090992362, 5.2273807811958939, 5.1094892821258071, 4.6507379687188717, 4.9171111408097312, 4.7959751723680588, 4.9749680601533086, 4.9183790680315109, 5.0391131555036299],
      "text": ["Public spending - on education: 4.84 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 4.8 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 5.26 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 5.4 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 5.37 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 5.6 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 6.29 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Public spending - on education: 5.76 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Public spending - on education: 5.34 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 5.6 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 5.63 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 5.23 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 5.11 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 4.65 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 4.92 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 4.8 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 4.97 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 4.92 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Public spending - on education: 5.04 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [3.9100000000000001, 3.9099999999999997, 3.9100000000000001, 3.9100000000000006, 3.9100000000000001, 3.9100000000000001, 3.9100000000000001, 3.5299999999999998, 3.7140000000000004, 3.8979999999999997, 4.0819999999999999, 4.266, 4.4500000000000002, 4.3300000000000001, 4.3300000000000001, 4.46, 4.6799999999999997, 4.7999999999999998, 4.7999999999999989],
      "text": ["Public spending - on education: 3.91 % (GDP)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 3.91 % (GDP)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 3.91 % (GDP)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 3.91 % (GDP)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 3.91 % (GDP)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 3.91 % (GDP)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 3.91 % (GDP)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 3.53 % (GDP)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 3.71 % (GDP)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 3.9 % (GDP)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 4.08 % (GDP)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 4.27 % (GDP)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 4.45 % (GDP)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 4.33 % (GDP)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 4.33 % (GDP)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 4.46 % (GDP)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 4.68 % (GDP)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 4.8 % (GDP)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Public spending - on education: 4.8 % (GDP)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [2.9399999999999995, 2.4700000000000002, 2.3300000000000005, 2.4300000000000002, 2.4900000000000002, 2.5800000000000001, 2.54, 2.6179999999999999, 2.6960000000000002, 2.7740000000000005, 2.8520000000000003, 2.9300000000000002, 3.52, 3.0299999999999998, 3.9699999999999998, 3.8599999999999994, 3.3599999999999999, 3.8799999999999999, 3.8799999999999999],
      "text": ["Public spending - on education: 2.94 % (GDP)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.47 % (GDP)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.33 % (GDP)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.43 % (GDP)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.49 % (GDP)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.58 % (GDP)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.54 % (GDP)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.62 % (GDP)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.7 % (GDP)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.77 % (GDP)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.85 % (GDP)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 2.93 % (GDP)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 3.52 % (GDP)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 3.03 % (GDP)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 3.97 % (GDP)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 3.86 % (GDP)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 3.36 % (GDP)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 3.88 % (GDP)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Public spending - on education: 3.88 % (GDP)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [4.4761858369413456, 4.32448738809481, 4.3849414028855422, 4.4586237760439111, 4.4512819786809148, 4.4478612743071455, 4.5558828723644655, 4.592493491580683, 4.5508760629054308, 4.7519453755358629, 4.5946026716274062, 4.5241945591279826, 4.4340708852558732, 4.5924667979437581, 4.2800909736946444, 4.1837919021751135, 4.7628665876589826, 4.8196438518590385, 4.8148808371972303],
      "text": ["Public spending - on education: 4.48 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 4.32 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 4.38 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 4.46 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 4.45 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Public spending - on education: 4.45 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.56 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.59 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.55 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.75 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.59 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.52 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Public spending - on education: 4.43 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.59 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.28 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.18 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.76 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.82 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Public spending - on education: 4.81 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [4.3300000000000001, 4.0800000000000001, 4.0199999999999996, 3.9199999999999995, 4.0800000000000001, 3.9399999999999999, 4.7800000000000002, 4.8300000000000001, 4.4699999999999998, 4.3699999999999992, 4.8799999999999999, 4.6299999999999999, 4.4699999999999998, 4.4800000000000004, 4.54, 4.4500000000000002, 4.5099999999999998, 5.2699999999999996, 5.2699999999999996],
      "text": ["Public spending - on education: 4.33 % (GDP)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.08 % (GDP)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.02 % (GDP)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 3.92 % (GDP)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.08 % (GDP)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 3.94 % (GDP)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.78 % (GDP)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.83 % (GDP)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.47 % (GDP)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.37 % (GDP)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.88 % (GDP)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.63 % (GDP)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.47 % (GDP)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.48 % (GDP)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.54 % (GDP)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.45 % (GDP)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 4.51 % (GDP)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 5.27 % (GDP)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Public spending - on education: 5.27 % (GDP)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [3.720573899469557, 3.7496617834389623, 3.7999444586038762, 3.4846536214588082, 3.5446681975579759, 3.4461527964838901, 3.4573211255963363, 3.700497703325933, 3.9470255856166552, 3.8991164865309393, 3.8865359878782479, 3.7180155661680012, 3.8267020040468211, 3.7684198670502633, 3.7720564513451884, 3.6212322530731802, 3.6188212218646072, 3.7334198549571767, 3.6965213573682263],
      "text": ["Public spending - on education: 3.72 % (GDP)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.75 % (GDP)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.8 % (GDP)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.48 % (GDP)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.54 % (GDP)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.45 % (GDP)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.46 % (GDP)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.7 % (GDP)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.95 % (GDP)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.9 % (GDP)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.89 % (GDP)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.72 % (GDP)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.83 % (GDP)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.77 % (GDP)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.77 % (GDP)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.62 % (GDP)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.62 % (GDP)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.73 % (GDP)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Public spending - on education: 3.7 % (GDP)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [3.6799999999999997, 3.5499999999999998, 3.7699999999999996, 3.8700000000000001, 3.9850000000000003, 4.0999999999999996, 4.4699999999999998, 3.8499999999999996, 3.7700000000000005, 3.79, 3.7599999999999998, 4.0099999999999998, 3.8299999999999996, 3.7599999999999998, 4.6900000000000004, 4.6799999999999997, 3.5099999999999993, 3.7000000000000006, 3.7000000000000002],
      "text": ["Public spending - on education: 3.68 % (GDP)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.55 % (GDP)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.77 % (GDP)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.87 % (GDP)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.99 % (GDP)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 4.1 % (GDP)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 4.47 % (GDP)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.85 % (GDP)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.77 % (GDP)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.79 % (GDP)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.76 % (GDP)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 4.01 % (GDP)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.83 % (GDP)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.76 % (GDP)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 4.69 % (GDP)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 4.68 % (GDP)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.51 % (GDP)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.7 % (GDP)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Public spending - on education: 3.7 % (GDP)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [3.8829946416053818, 3.9228583423054464, 4.0376555674266674, 4.1633607619561523, 3.8632772255058367, 4.1026582417219224, 4.7354599395110961, 3.5607833350403095, 3.6575917870752463, 3.0676693068829155, 3.3623906093721256, 3.6330754224253488, 3.3087491181126945, 4.0938663540467672, 4.0156024901772609, 4.0688940041264363, 3.9845032427757272, 4.3036243812800059, 4.2095946096833767],
      "text": ["Public spending - on education: 3.88 % (GDP)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Public spending - on education: 3.92 % (GDP)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Public spending - on education: 4.04 % (GDP)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Public spending - on education: 4.16 % (GDP)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Public spending - on education: 3.86 % (GDP)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Public spending - on education: 4.1 % (GDP)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Public spending - on education: 4.74 % (GDP)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.56 % (GDP)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.66 % (GDP)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.07 % (GDP)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.36 % (GDP)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.63 % (GDP)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.31 % (GDP)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 4.09 % (GDP)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 4.02 % (GDP)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 4.07 % (GDP)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 3.98 % (GDP)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 4.3 % (GDP)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Public spending - on education: 4.21 % (GDP)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [4.8899999999999997, 4.8899999999999997, 4.8899999999999997, 4.8900000000000006, 4.8899999999999997, 4.8899999999999997, 4.8200000000000003, 4.0499999999999998, 3.7800000000000002, 4.4100000000000001, 4.5300000000000002, 3.54, 3.4199999999999995, 3.4700000000000006, 3.4199999999999999, 3.2999999999999998, 3.0799999999999996, 3.2200000000000002, 2.9500000000000002],
      "text": ["Public spending - on education: 4.89 % (GDP)<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 4.89 % (GDP)<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 4.89 % (GDP)<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 4.89 % (GDP)<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 4.89 % (GDP)<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 4.89 % (GDP)<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 4.82 % (GDP)<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 4.05 % (GDP)<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 3.78 % (GDP)<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 4.41 % (GDP)<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 4.53 % (GDP)<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 3.54 % (GDP)<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 3.42 % (GDP)<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 3.47 % (GDP)<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 3.42 % (GDP)<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 3.3 % (GDP)<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 3.08 % (GDP)<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 3.22 % (GDP)<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Public spending - on education: 2.95 % (GDP)<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [1.77, 1.77, 2.0500000000000003, 2.3999999999999999, 2.6400000000000001, 2.75, 2.5899999999999999, 2.2900000000000005, 2.2200000000000002, 2.1400000000000001, 2.4900000000000002, 2.4700000000000002, 2.6500000000000004, 2.4199999999999995, 2.1400000000000001, 2.3300000000000001, 2.21, 2.0600000000000001, 1.6899999999999999],
      "text": ["Public spending - on education: 1.77 % (GDP)<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 1.77 % (GDP)<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.05 % (GDP)<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.4 % (GDP)<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.64 % (GDP)<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.75 % (GDP)<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.59 % (GDP)<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.29 % (GDP)<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.22 % (GDP)<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.14 % (GDP)<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.49 % (GDP)<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.47 % (GDP)<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.65 % (GDP)<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.42 % (GDP)<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.14 % (GDP)<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.33 % (GDP)<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.21 % (GDP)<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 2.06 % (GDP)<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Public spending - on education: 1.69 % (GDP)<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [2.0699999999999998, 1.9399999999999997, 2.0350000000000001, 2.1299999999999999, 2.1999999999999997, 2.0499999999999998, 1.9399999999999999, 2.0350000000000001, 2.1299999999999999, 2.0499999999999998, 1.97, 2.1000000000000001, 1.8700000000000003, 2.2200000000000002, 1.8500000000000003, 1.6600000000000001, 1.6799999999999997, 1.77, 1.8300000000000001],
      "text": ["Public spending - on education: 2.07 % (GDP)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 1.94 % (GDP)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 2.04 % (GDP)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 2.13 % (GDP)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 2.2 % (GDP)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 2.05 % (GDP)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 1.94 % (GDP)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 2.04 % (GDP)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 2.13 % (GDP)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 2.05 % (GDP)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 1.97 % (GDP)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 2.1 % (GDP)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 1.87 % (GDP)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 2.22 % (GDP)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 1.85 % (GDP)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 1.66 % (GDP)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 1.68 % (GDP)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 1.77 % (GDP)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Public spending - on education: 1.83 % (GDP)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [3.2199999999999998, 2.7500000000000004, 2.8700000000000001, 2.9550000000000001, 3.04, 2.8999999999999995, 3.5299999999999998, 2.8100000000000001, 3.1900000000000004, 3.4100000000000006, 3.3599999999999999, 3.29, 3.5799999999999996, 3.5699999999999998, 2.6699999999999999, 2.7499999999999996, 2.8399999999999999, 3.4900000000000002, 3.0499999999999994],
      "text": ["Public spending - on education: 3.22 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 2.75 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 2.87 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 2.96 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.04 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 2.9 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.53 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 2.81 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.19 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.41 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.36 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.29 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.58 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.57 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 2.67 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 2.75 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 2.84 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.49 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Public spending - on education: 3.05 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [2.8225654746897284, 2.5012541696360535, 2.3387089577785871, 2.211732304919396, 2.1991464450689184, 2.0673880117902246, 2.4822427919092767, 2.2041108158214429, 2.3878451734135804, 2.6136085355267729, 2.7351388625150981, 2.7457654969537817, 2.8129283405921788, 2.8920799127489314, 2.8278782678215357, 2.6971062021178867, 2.6535831097606946, 2.7630942282631397, 2.5532849315531041],
      "text": ["Public spending - on education: 2.82 % (GDP)<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.5 % (GDP)<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.34 % (GDP)<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.21 % (GDP)<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.2 % (GDP)<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.07 % (GDP)<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.48 % (GDP)<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.2 % (GDP)<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.39 % (GDP)<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.61 % (GDP)<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.74 % (GDP)<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.75 % (GDP)<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.81 % (GDP)<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.89 % (GDP)<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.83 % (GDP)<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.7 % (GDP)<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.65 % (GDP)<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.76 % (GDP)<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Public spending - on education: 2.55 % (GDP)<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [3.73, 4.0300000000000002, 3.9399999999999999, 4.0499999999999989, 3.6000000000000001, 3.5099999999999998, 3.8599999999999999, 3.5099999999999998, 4.8099999999999996, 3.6000000000000005, 3.8199999999999998, 3.9200000000000004, 3.8599999999999994, 3.7700000000000005, 3.4700000000000002, 3.2000000000000002, 3.02, 3.1499999999999999, 2.9900000000000002],
      "text": ["Public spending - on education: 3.73 % (GDP)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 4.03 % (GDP)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.94 % (GDP)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 4.05 % (GDP)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.6 % (GDP)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.51 % (GDP)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.86 % (GDP)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.51 % (GDP)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 4.81 % (GDP)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.6 % (GDP)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.82 % (GDP)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.92 % (GDP)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.86 % (GDP)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.77 % (GDP)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.47 % (GDP)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.2 % (GDP)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.02 % (GDP)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 3.15 % (GDP)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Public spending - on education: 2.99 % (GDP)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [3.4700000000000002, 3.4300000000000006, 3.3100000000000001, 3.2799999999999998, 3.2799999999999998, 3.27, 3.5600000000000001, 3.5999999999999996, 3.6100000000000003, 3.6499999999999999, 3.6200000000000001, 3.5499999999999998, 3.23, 3.1499999999999999, 3.1299999999999999, 3.0800000000000001, 3.1599999999999997, 3.4199999999999995, 3.3200000000000003],
      "text": ["Public spending - on education: 3.47 % (GDP)<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.43 % (GDP)<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.31 % (GDP)<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.28 % (GDP)<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.28 % (GDP)<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.27 % (GDP)<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.56 % (GDP)<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.6 % (GDP)<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.61 % (GDP)<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.65 % (GDP)<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.62 % (GDP)<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.55 % (GDP)<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.23 % (GDP)<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.15 % (GDP)<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.13 % (GDP)<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.08 % (GDP)<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.16 % (GDP)<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.42 % (GDP)<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Public spending - on education: 3.32 % (GDP)<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [3.4827622796315274, 3.4791551134560756, 3.4160571802732886, 3.511872555654143, 3.588638857094554, 3.5790460190107387, 3.9236042520330376, 3.9708251062771245, 4.292415293847176, 4.4896950342413007, 4.4872445455025796, 4.6341811753986875, 4.659089228765569, 4.2492031995572956, 3.9992817821501103, 4.0662090260755797, 4.0175078404740425, 4.5512979449390922, 4.3164433680773664],
      "text": ["Public spending - on education: 3.48 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Public spending - on education: 3.48 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Public spending - on education: 3.42 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 3.51 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 3.59 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 3.58 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 3.92 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 3.97 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.29 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.49 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.49 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.63 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.66 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.25 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.07 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.02 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.55 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Public spending - on education: 4.32 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [3.9199999999999999, 3.54, 3.2799999999999998, 3.04, 3.23, 3.79, 4.25, 4.1900000000000004, 4.0599999999999996, 4.54, 4.5499999999999998, 4.75, 4.9000000000000004, 5.3700000000000001, 5.4299999999999988, 5.4699999999999998, 5.6200000000000001, 5.6299999999999999, 5.6299999999999999],
      "text": ["Public spending - on education: 3.92 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 3.54 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 3.28 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 3.04 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 3.23 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 3.79 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 4.25 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 4.19 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 4.06 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 4.54 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 4.55 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 4.75 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 4.9 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 5.37 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 5.43 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 5.47 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 5.62 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 5.63 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Public spending - on education: 5.63 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [3.3199999999999998, 3.3199999999999998, 3.3199999999999998, 3.3199999999999998, 3.3199999999999998, 3.3199999999999998, 3.7700000000000005, 3.79, 4.2199999999999998, 4.3899999999999997, 4.3399999999999999, 4.4100000000000001, 4.3200000000000003, 4.6299999999999999, 4.3200000000000003, 4.3000000000000007, 4.4500000000000002, 4.0099999999999998, 2.8500000000000001],
      "text": ["Public spending - on education: 3.32 % (GDP)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 3.32 % (GDP)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 3.32 % (GDP)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 3.32 % (GDP)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 3.32 % (GDP)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 3.32 % (GDP)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 3.77 % (GDP)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 3.79 % (GDP)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.22 % (GDP)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.39 % (GDP)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.34 % (GDP)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.41 % (GDP)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.32 % (GDP)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.63 % (GDP)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.32 % (GDP)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.3 % (GDP)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.45 % (GDP)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 4.01 % (GDP)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Public spending - on education: 2.85 % (GDP)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [5.4900000000000002, 5.4900000000000002, 5.4900000000000002, 5.4900000000000002, 5.4500000000000002, 5.4099999999999993, 4.4199999999999999, 4.5, 5.4899999999999993, 5.5700000000000003, 4.5, 4.5999999999999996, 5.1500000000000004, 5.0599999999999996, 5.5, 5.2199999999999998, 4.4800000000000004, 4.0899999999999999, 4.0700000000000003],
      "text": ["Public spending - on education: 5.49 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.49 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.49 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.49 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.45 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.41 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 4.42 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 4.5 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.49 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.57 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 4.5 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 4.6 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.15 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.06 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.5 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 5.22 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 4.48 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 4.09 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Public spending - on education: 4.07 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [4.2411842166743625, 3.7405893298002351, 4.2777488663089871, 4.5831072289705652, 4.3181050431109096, 4.3813694566702059, 4.3705802598630168, 3.9678242068936465, 3.6354989743624402, 3.5975294366206616, 3.7449477314374455, 3.9242443142417227, 3.8268271893097565, 3.718635398884917, 3.775986570669188, 3.879517054016747, 3.9263947125372058, 4.0413131634844079, 4.1658093125380766],
      "text": ["Public spending - on education: 4.24 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.74 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.28 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.58 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.32 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.38 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.37 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.97 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.64 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.6 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.74 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.92 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.83 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.72 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.78 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.88 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 3.93 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.04 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Public spending - on education: 4.17 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [4.3600000000000003, 4.2999999999999998, 4.0599999999999996, 4.29, 4.5999999999999996, 3.9100000000000006, 3.8400000000000003, 3.71, 3.4800000000000004, 2.9399999999999999, 2.8500000000000001, 2.6200000000000001, 2.6299999999999999, 3.1699999999999999, 3.46, 3.6200000000000001, 3.2599999999999998, 3.2000000000000002, 3.2000000000000002],
      "text": ["Public spending - on education: 4.36 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 4.3 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 4.06 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 4.29 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 4.6 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.91 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.84 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.71 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.48 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 2.94 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 2.85 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 2.62 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 2.63 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.17 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.46 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.62 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.26 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.2 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Public spending - on education: 3.2 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [3.6099999999999994, 3.3500000000000001, 3.1899999999999999, 3.1400000000000006, 3.1866666666666665, 3.2333333333333334, 3.2799999999999998, 3.3799999999999994, 3.8000000000000003, 4.0800000000000001, 3.8400000000000003, 3.8999999999999995, 4.1100000000000003, 4.21, 4.3099999999999987, 4.3033333333333328, 4.2966666666666669, 4.2900000000000009, 4.6399999999999997],
      "text": ["Public spending - on education: 3.61 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.35 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.19 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.14 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.19 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.23 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.28 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.38 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.8 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 4.08 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.84 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 3.9 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 4.11 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 4.21 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 4.31 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 4.3 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 4.3 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 4.29 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Public spending - on education: 4.64 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [6.3300000000000001, 6.25, 6.1699999999999999, 6.1600000000000001, 6.2400000000000002, 6.4400000000000004, 6.7400000000000002, 6.6900000000000004, 6.5, 6.25, 6.2300000000000004, 6.1299999999999999, 4.9500000000000002, 4.8099999999999996, 5.1200000000000001, 4.9299999999999997, 4.9900000000000002, 5.4400000000000004, 5.4400000000000004],
      "text": ["Public spending - on education: 6.33 % (GDP)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.25 % (GDP)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.17 % (GDP)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.16 % (GDP)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.24 % (GDP)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.44 % (GDP)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.74 % (GDP)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.69 % (GDP)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.5 % (GDP)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.25 % (GDP)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.23 % (GDP)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 6.13 % (GDP)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 4.95 % (GDP)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 4.81 % (GDP)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 5.12 % (GDP)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 4.93 % (GDP)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 4.99 % (GDP)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 5.44 % (GDP)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Public spending - on education: 5.44 % (GDP)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [1.5200000000000002, 1.52, 1.52, 1.5200000000000002, 1.52, 1.52, 1.52, 1.52, 1.7, 1.8800000000000001, 2.0600000000000001, 1.95, 2.1699999999999995, 2.1200000000000001, 1.4499999999999997, 1.8400000000000001, 2.23, 2.6200000000000001, 2.6600000000000001],
      "text": ["Public spending - on education: 1.52 % (GDP)<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.52 % (GDP)<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.52 % (GDP)<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.52 % (GDP)<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.52 % (GDP)<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.52 % (GDP)<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.52 % (GDP)<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.52 % (GDP)<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.7 % (GDP)<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.88 % (GDP)<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 2.06 % (GDP)<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.95 % (GDP)<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 2.17 % (GDP)<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 2.12 % (GDP)<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.45 % (GDP)<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 1.84 % (GDP)<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 2.23 % (GDP)<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 2.62 % (GDP)<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Public spending - on education: 2.66 % (GDP)<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [4.1699999999999999, 4.1600000000000001, 4.1399999999999988, 4.1799999999999997, 4.25, 4.5300000000000002, 4.9100000000000001, 4.8600000000000003, 4.9000000000000004, 4.4699999999999998, 4.3499999999999996, 4.2999999999999998, 4.2800000000000002, 4.2300000000000004, 4.21, 4.1799999999999997, 4.2300000000000004, 4.9000000000000004, 4.5899999999999999],
      "text": ["Public spending - on education: 4.17 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.16 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.14 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.18 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.25 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.53 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.91 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.86 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.9 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.47 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.35 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.3 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.28 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.23 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.21 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.18 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.23 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.9 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Public spending - on education: 4.59 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [5.3200000000000003, 5.3600000000000003, 5.4299999999999997, 5.21, 4.8700000000000001, 5.04, 4.9900000000000002, 5.1100000000000003, 4.8600000000000003, 4.8600000000000003, 5.0199999999999996, 4.9699999999999998, 4.8200000000000003, 4.6600000000000001, 4.5700000000000003, 4.6100000000000003, 4.6799999999999997, 4.8499999999999996, 4.9400000000000004],
      "text": ["Public spending - on education: 5.32 % (GDP)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.36 % (GDP)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.43 % (GDP)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.21 % (GDP)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.87 % (GDP)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.04 % (GDP)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.99 % (GDP)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.11 % (GDP)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.86 % (GDP)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.86 % (GDP)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 5.02 % (GDP)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.97 % (GDP)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.82 % (GDP)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.66 % (GDP)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.57 % (GDP)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.61 % (GDP)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.68 % (GDP)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.85 % (GDP)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Public spending - on education: 4.94 % (GDP)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [4.3499999999999996, 4.5099999999999998, 4.5199999999999996, 4.5300000000000002, 4.4500000000000002, 4.3700000000000001, 4.7599999999999998, 5.1299999999999999, 5.29, 5.5199999999999996, 5.3499999999999996, 5.4900000000000002, 5.4800000000000013, 5.4400000000000004, 5.5999999999999996, 5.6399999999999997, 5.9299999999999997, 6.1800000000000006, 6.5599999999999996],
      "text": ["Public spending - on education: 4.35 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 4.51 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 4.52 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 4.53 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 4.45 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 4.37 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 4.76 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.13 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.29 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.52 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.35 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.49 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.48 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.44 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.6 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.64 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 5.93 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 6.18 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Public spending - on education: 6.56 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [4.169999999999999, 4.0999999999999996, 4.6199999999999992, 4.0300000000000002, 3.9199999999999999, 4.5499999999999998, 4.3399999999999999, 5.0999999999999996, 4.9800000000000004, 4.9299999999999997, 4.9400000000000004, 4.9199999999999999, 4.8600000000000012, 4.8399999999999999, 4.8700000000000001, 4.9800000000000004, 5.1200000000000001, 5.5899999999999999, 4.5300000000000002],
      "text": ["Public spending - on education: 4.17 % (GDP)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.1 % (GDP)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.62 % (GDP)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.03 % (GDP)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 3.92 % (GDP)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.55 % (GDP)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.34 % (GDP)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 5.1 % (GDP)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.98 % (GDP)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.93 % (GDP)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.94 % (GDP)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.92 % (GDP)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.86 % (GDP)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.84 % (GDP)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.87 % (GDP)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.98 % (GDP)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 5.12 % (GDP)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 5.59 % (GDP)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Public spending - on education: 4.53 % (GDP)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [4.4553024624071274, 4.3306675383021034, 4.1390274880695106, 4.3215199321424853, 4.0014060564430265, 4.1006591704154376, 4.5572224348072368, 4.3912824458571418, 4.3982580873327271, 4.4503811167439364, 4.4422183955003955, 4.2424156348364574, 5.1864257872624071, 4.8425368543199738, 3.9571567548703852, 4.1984574287626213, 4.4368229348716115, 4.7599020848010509, 4.9699169604101723],
      "text": ["Public spending - on education: 4.46 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.33 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.14 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.32 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.1 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.56 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.39 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.4 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.45 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.44 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.24 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 5.19 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.84 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 3.96 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.2 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.44 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.76 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Public spending - on education: 4.97 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [4.1999999999999993, 4.4800000000000004, 4.5199999999999996, 4.5499999999999998, 4.7199999999999998, 5.4600000000000009, 6.1600000000000001, 5.8522222222222222, 5.5444444444444443, 5.2366666666666664, 4.9288888888888902, 4.6211111111111114, 4.3133333333333335, 4.0055555555555555, 3.6977777777777776, 3.3900000000000001, 3.3300000000000001, 3.2700000000000005, 2.98],
      "text": ["Public spending - on education: 4.2 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.48 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.52 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.55 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.72 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 5.46 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 6.16 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 5.85 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 5.54 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 5.24 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.93 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.62 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.31 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 4.01 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 3.7 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 3.39 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 3.33 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 3.27 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Public spending - on education: 2.98 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [5.2800000000000002, 5.0499999999999998, 5.0699999999999994, 4.9100000000000001, 4.9199999999999999, 4.7000000000000002, 5.5599999999999987, 5.4100000000000001, 5.1200000000000001, 4.9500000000000002, 5.2699999999999996, 5.1200000000000001, 4.8899999999999997, 4.7699999999999996, 5.0199999999999996, 4.6799999999999997, 4.6299999999999999, 4.8799999999999999, 4.7099999999999991],
      "text": ["Public spending - on education: 5.28 % (GDP)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 5.05 % (GDP)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 5.07 % (GDP)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.91 % (GDP)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.92 % (GDP)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.7 % (GDP)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 5.56 % (GDP)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 5.41 % (GDP)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 5.12 % (GDP)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.95 % (GDP)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 5.27 % (GDP)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 5.12 % (GDP)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.89 % (GDP)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.77 % (GDP)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 5.02 % (GDP)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.68 % (GDP)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.63 % (GDP)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.88 % (GDP)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Public spending - on education: 4.71 % (GDP)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [7.1100000000000003, 6.2800000000000002, 5.4299999999999997, 5.8899999999999988, 5.5149999999999997, 5.1399999999999997, 5.1399999999999997, 5.1399999999999997, 5.1399999999999997, 5.1399999999999988, 5.1399999999999997, 5.1399999999999997, 5.1399999999999997, 5.1399999999999997, 5.1399999999999997, 5.1399999999999997, 5.1399999999999997, 5.1400000000000006, 5.1399999999999997],
      "text": ["Public spending - on education: 7.11 % (GDP)<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 6.28 % (GDP)<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.43 % (GDP)<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.89 % (GDP)<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.52 % (GDP)<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Public spending - on education: 5.14 % (GDP)<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [5.7599999999999998, 5.5500000000000007, 5.4699999999999989, 5.4799999999999995, 5.3000000000000007, 5.4000000000000012, 5.7299999999999995, 5.660000000000001, 5.4800000000000004, 5.4599999999999991, 5.4999999999999991, 5.5099999999999998, 5.4599999999999991, 5.419999999999999, 5.4500000000000002, 5.4099999999999993, 5.3499999999999988, 5.6799999999999997, 5.2499999999999991],
      "text": ["Public spending - on education: 5.76 % (GDP)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.55 % (GDP)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.47 % (GDP)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.48 % (GDP)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.3 % (GDP)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.4 % (GDP)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.73 % (GDP)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.66 % (GDP)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.48 % (GDP)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.46 % (GDP)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.5 % (GDP)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.51 % (GDP)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.46 % (GDP)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.42 % (GDP)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.45 % (GDP)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.41 % (GDP)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.35 % (GDP)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.68 % (GDP)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Public spending - on education: 5.25 % (GDP)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [4.7999404676952899, 4.7299313548576318, 4.9299140399355474, 4.9699102559082204, 4.9199156557802413, 4.9099190527413397, 5.0599147116474654, 5.6898901810939906, 5.5599169792236411, 5.6299273908823935, 5.5299213599736268, 5.5999214735485534, 5.5499340065964073, 5.4199449642985078, 5.429949401882439, 5.1999597358657823, 5.2499574321032378, 5.4999461691889042, 5.3299692787459891],
      "text": ["Public spending - on education: 4.8 % (GDP)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.73 % (GDP)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.93 % (GDP)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.97 % (GDP)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.92 % (GDP)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 4.91 % (GDP)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.06 % (GDP)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.69 % (GDP)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.56 % (GDP)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.63 % (GDP)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.53 % (GDP)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.6 % (GDP)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.55 % (GDP)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.42 % (GDP)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.43 % (GDP)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.2 % (GDP)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.25 % (GDP)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.5 % (GDP)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Public spending - on education: 5.33 % (GDP)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [5.3600000000000003, 5.2999999999999998, 5.2499999999999991, 5.2300000000000004, 5.1499999999999995, 5.2599999999999998, 5.7300000000000004, 5.7000000000000002, 5.5899999999999999, 5.4800000000000004, 5.5499999999999998, 5.4500000000000002, 5.46, 5.4800000000000004, 5.370000000000001, 5.2300000000000004, 5.2200000000000006, 5.5700000000000003, 4.9900000000000002],
      "text": ["Public spending - on education: 5.36 % (GDP)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.3 % (GDP)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.25 % (GDP)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.23 % (GDP)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.15 % (GDP)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.26 % (GDP)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.73 % (GDP)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.7 % (GDP)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.59 % (GDP)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.48 % (GDP)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.55 % (GDP)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.45 % (GDP)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.46 % (GDP)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.48 % (GDP)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.37 % (GDP)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.23 % (GDP)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.22 % (GDP)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 5.57 % (GDP)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Public spending - on education: 4.99 % (GDP)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [2.708287798832703, 2.7095169764259275, 2.7072799063498305, 2.7057363415292759, 2.7036545309510398, 3.6274870861353437, 3.7528458198651027, 3.7482957885955952, 3.5191359046001494, 3.9374881107974993, 3.7095451465444325, 3.5792581809874418, 3.8067351326298962, 3.757221012981208, 3.6676613846785551, 3.5385124407148347, 3.5412038583402268, 3.5757750299732307, 3.3045901082723041],
      "text": ["Public spending - on education: 2.71 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 2.71 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 2.71 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 2.71 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 2.7 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.63 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.75 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.75 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.52 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.94 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.71 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.58 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.81 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.76 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.67 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.54 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.54 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.58 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Public spending - on education: 3.3 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [5.4147688183476994, 4.9826908921606963, 4.7948903658353226, 4.7654864180282459, 4.8249307677310798, 4.5237381227849722, 4.8608070044790841, 4.4192170415603433, 4.5773194835316273, 4.7054086087436922, 4.7310898682622238, 4.6721542703352581, 4.6508699701918665, 4.6597951526668639, 4.629528945554986, 4.6524344391797907, 4.6715219015748488, 4.7092181529294548, 4.8082801527127863],
      "text": ["Public spending - on education: 5.41 % (GDP)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Public spending - on education: 4.98 % (GDP)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Public spending - on education: 4.79 % (GDP)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Public spending - on education: 4.77 % (GDP)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.82 % (GDP)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.52 % (GDP)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Public spending - on education: 4.86 % (GDP)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Public spending - on education: 4.42 % (GDP)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Public spending - on education: 4.58 % (GDP)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Public spending - on education: 4.71 % (GDP)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.73 % (GDP)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.67 % (GDP)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.65 % (GDP)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.66 % (GDP)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.63 % (GDP)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.65 % (GDP)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.67 % (GDP)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.71 % (GDP)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Public spending - on education: 4.81 % (GDP)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [6.79, 6.6600000000000001, 6.5099999999999998, 6.3600000000000003, 6.1699999999999999, 6.3399999999999999, 6.7500000000000009, 6.5199999999999996, 6.3700000000000001, 7.54, 7.6099999999999994, 7.5700000000000012, 7.4400000000000004, 7.6199999999999992, 7.5700000000000012, 7.6399999999999988, 7.6399999999999997, 7.9299999999999997, 6.6799999999999997],
      "text": ["Public spending - on education: 6.79 % (GDP)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 6.66 % (GDP)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 6.51 % (GDP)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 6.36 % (GDP)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 6.17 % (GDP)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 6.34 % (GDP)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 6.75 % (GDP)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 6.52 % (GDP)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 6.37 % (GDP)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 7.54 % (GDP)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 7.61 % (GDP)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 7.57 % (GDP)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 7.44 % (GDP)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 7.62 % (GDP)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 7.57 % (GDP)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 7.64 % (GDP)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 7.64 % (GDP)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 7.93 % (GDP)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Public spending - on education: 6.68 % (GDP)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [8.1199999999999974, 8.2099999999999973, 8.0899999999999999, 7.7300000000000004, 7.620000000000001, 7.4799999999999995, 8.4499999999999993, 8.5599999999999987, 8.4799999999999986, 7.2400000000000002, 8.4900000000000002, 7.629999999999999, 7.0099999999999998, 7.4799999999999995, 7.1199999999999992, 7.0000000000000009, 6.9099999999999984, 7.3900000000000006, 6.0399999999999991],
      "text": ["Public spending - on education: 8.12 % (GDP)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 8.21 % (GDP)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 8.09 % (GDP)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7.73 % (GDP)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7.62 % (GDP)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7.48 % (GDP)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 8.45 % (GDP)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 8.56 % (GDP)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 8.48 % (GDP)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7.24 % (GDP)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 8.49 % (GDP)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7.63 % (GDP)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7.01 % (GDP)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7.48 % (GDP)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7.12 % (GDP)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7 % (GDP)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 6.91 % (GDP)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 7.39 % (GDP)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Public spending - on education: 6.04 % (GDP)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [4.5490474141460018, 4.3902072429964258, 4.2479558455114717, 4.5363687088110911, 4.1227176774169259, 4.3976711770911354, 4.5238123101489718, 4.3433327139307361, 4.1449221769512352, 4.0760418313987152, 4.1641564215841713, 4.0808677450355901, 4.0769112539657337, 3.8296165978099186, 4.0439891917850019, 4.2655698753447702, 4.1070295531481733, 4.4514319222730467, 4.1430390899613618],
      "text": ["Public spending - on education: 4.55 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.39 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.25 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.54 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.12 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.4 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.52 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.34 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.14 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.08 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.16 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.08 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.08 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 3.83 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.04 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.27 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.11 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.45 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Public spending - on education: 4.14 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [5.04, 5.0599999999999996, 5.1100000000000003, 5.04, 4.8899999999999997, 5.0300000000000002, 5.4299999999999997, 5.4900000000000002, 5.46, 5.4100000000000001, 5.5300000000000002, 5.46, 5.3499999999999988, 5.4799999999999995, 5.1799999999999997, 5.3600000000000003, 5.1600000000000001, 5.4199999999999999, 5.1399999999999997],
      "text": ["Public spending - on education: 5.04 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.06 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.11 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.04 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 4.89 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.03 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.43 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.49 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.46 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.41 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.53 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.46 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.35 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.48 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.18 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.36 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.16 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.42 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Public spending - on education: 5.14 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [5.84745542269442, 5.5992616767433585, 5.759620871225879, 5.5781070876844669, 5.4659744430176485, 6.2427303419357898, 6.389922469576625, 6.3764226870874996, 6.3654118884852995, 6.1514190817260674, 6.4939599677580517, 6.4609135288153992, 6.3211107313531132, 6.3105080448663156, 6.2835497875202551, 6.2425987993024341, 6.1973874713322283, 6.6561384755374364, 6.1467609846969546],
      "text": ["Public spending - on education: 5.85 % (GDP)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 5.6 % (GDP)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 5.76 % (GDP)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 5.58 % (GDP)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 5.47 % (GDP)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.24 % (GDP)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.39 % (GDP)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.38 % (GDP)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.37 % (GDP)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.15 % (GDP)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.49 % (GDP)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.46 % (GDP)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.32 % (GDP)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.31 % (GDP)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.28 % (GDP)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.24 % (GDP)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.2 % (GDP)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.66 % (GDP)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Public spending - on education: 6.15 % (GDP)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [6.1700000000000008, 6.160000000000001, 6.0300000000000002, 5.9299999999999997, 5.6699999999999999, 5.8300000000000001, 6.46, 6.4999999999999991, 6.4499999999999993, 7.1499999999999995, 7.120000000000001, 7.0999999999999996, 7.0299999999999994, 6.8500000000000005, 6.3600000000000012, 6.2799999999999994, 6.4199999999999999, 6.6299999999999999, 5.6899999999999995],
      "text": ["Public spending - on education: 6.17 % (GDP)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.16 % (GDP)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.03 % (GDP)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 5.93 % (GDP)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 5.67 % (GDP)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 5.83 % (GDP)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.46 % (GDP)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.5 % (GDP)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.45 % (GDP)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 7.15 % (GDP)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 7.12 % (GDP)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 7.1 % (GDP)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 7.03 % (GDP)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.85 % (GDP)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.36 % (GDP)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.28 % (GDP)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.42 % (GDP)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 6.63 % (GDP)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Public spending - on education: 5.69 % (GDP)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [3.7015261501417713, 3.8782845082642501, 4.1607933511679036, 3.9114085805290033, 3.8554075751821997, 4.0617988938493621, 4.4460626005002464, 4.3600543465970762, 4.7071612629813817, 4.7069390842631957, 4.6919707631162328, 4.5286768185183428, 3.9273905593550373, 4.2362588238173329, 3.7118678629296111, 3.7524424658929947, 3.7635812045265862, 4.6291303904741383, 4.2328851448145111],
      "text": ["Public spending - on education: 3.7 % (GDP)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.88 % (GDP)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.16 % (GDP)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.91 % (GDP)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.86 % (GDP)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.06 % (GDP)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.45 % (GDP)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.36 % (GDP)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.71 % (GDP)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.71 % (GDP)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.69 % (GDP)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.53 % (GDP)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.93 % (GDP)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.24 % (GDP)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.71 % (GDP)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.75 % (GDP)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 3.76 % (GDP)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.63 % (GDP)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Public spending - on education: 4.23 % (GDP)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Public spending - on education (REMIND_54)",
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
      "tickvals": [-4.4408920985006262e-16, 25, 50, 75, 100],
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
    "b55c43822b72": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c29e35d69": {
      "y": {}
    }
  },
  "cur_data": "b55c43822b72",
  "visdat": {
    "b55c43822b72": ["function (y) ", "x"],
    "b55c29e35d69": ["function (y) ", "x"]
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

  
