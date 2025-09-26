(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Demographics_Rural_population_line') 

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
      "y": [10.31, 10.140000000000001, 9.9700000000000006, 9.8000000000000007, 9.6300000000000008, 9.4700000000000024, 9.3099999999999987, 9.1500000000000004, 9.0100000000000016, 8.8800000000000008, 8.75, 8.6199999999999992, 8.5000000000000018, 8.3699999999999992, 8.25, 8.1300000000000008, 8.0099999999999998, 7.8899999999999997, 7.7700000000000005],
      "text": ["Rural population: 10.31 % (total population)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 10.14 % (total population)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 9.97 % (total population)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 9.8 % (total population)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 9.63 % (total population)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 9.47 % (total population)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 9.31 % (total population)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 9.15 % (total population)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 9.01 % (total population)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 8.88 % (total population)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 8.75 % (total population)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 8.62 % (total population)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 8.5 % (total population)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 8.37 % (total population)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 8.25 % (total population)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 8.13 % (total population)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 8.01 % (total population)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 7.89 % (total population)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Rural population: 7.77 % (total population)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [26.09903997741759, 26.075268311408312, 26.035649557024549, 25.999987053151241, 25.953853496067644, 25.914815975427732, 25.896818364914516, 25.874360985708229, 25.8599294170923, 25.844237623700753, 25.82495249638643, 25.794259724599314, 25.773475939822251, 25.749287768251801, 25.717542490254385, 25.662809540525096, 25.601647452767345, 25.526309053399601, 25.441048078112836],
      "text": ["Rural population: 26.1 % (total population)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 26.08 % (total population)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 26.04 % (total population)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 26 % (total population)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.95 % (total population)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.91 % (total population)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.9 % (total population)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.87 % (total population)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.86 % (total population)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.84 % (total population)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.82 % (total population)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.79 % (total population)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.77 % (total population)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.75 % (total population)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.72 % (total population)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.66 % (total population)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.6 % (total population)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.53 % (total population)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Rural population: 25.44 % (total population)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [34.212150983093579, 33.830072705580655, 33.455407383769092, 33.085425951723032, 32.723082399391238, 32.375549206909277, 32.044574211122843, 31.70976268800333, 31.387654493123236, 31.083600763282259, 30.783776532664007, 30.491002259618259, 30.193574616328121, 29.912780285437215, 29.667380313480717, 29.474895938638959, 29.265625125569262, 29.006948784700114, 28.734729112411259],
      "text": ["Rural population: 34.21 % (total population)<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 33.83 % (total population)<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 33.46 % (total population)<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 33.09 % (total population)<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 32.72 % (total population)<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 32.38 % (total population)<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 32.04 % (total population)<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 31.71 % (total population)<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 31.39 % (total population)<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 31.08 % (total population)<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 30.78 % (total population)<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 30.49 % (total population)<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 30.19 % (total population)<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 29.91 % (total population)<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 29.67 % (total population)<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 29.47 % (total population)<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 29.27 % (total population)<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 29.01 % (total population)<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Rural population: 28.73 % (total population)<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [57.060000000000009, 57.02000000000001, 56.969999999999992, 56.929999999999993, 56.920000000000009, 56.939999999999998, 56.960000000000008, 56.980000000000004, 57, 57.04999999999999, 57.109999999999999, 57.159999999999997, 57.219999999999992, 57.270000000000003, 57.289999999999992, 57.299999999999997, 57.270000000000003, 57.219999999999999, 57.140000000000001],
      "text": ["Rural population: 57.06 % (total population)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.02 % (total population)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 56.97 % (total population)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 56.93 % (total population)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 56.92 % (total population)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 56.94 % (total population)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 56.96 % (total population)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 56.98 % (total population)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57 % (total population)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.05 % (total population)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.11 % (total population)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.16 % (total population)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.22 % (total population)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.27 % (total population)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.29 % (total population)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.3 % (total population)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.27 % (total population)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.22 % (total population)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Rural population: 57.14 % (total population)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [20.030000000000005, 19.949999999999999, 19.879999999999999, 19.789999999999999, 19.600000000000001, 19.420000000000002, 19.239999999999998, 19.059999999999999, 18.899999999999999, 18.859999999999999, 18.82, 18.780000000000001, 18.739999999999998, 18.699999999999999, 18.649999999999999, 18.59, 18.52, 18.440000000000001, 18.350000000000001],
      "text": ["Rural population: 20.03 % (total population)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 19.95 % (total population)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 19.88 % (total population)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 19.79 % (total population)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 19.6 % (total population)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 19.42 % (total population)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 19.24 % (total population)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 19.06 % (total population)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.9 % (total population)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.86 % (total population)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.82 % (total population)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.78 % (total population)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.74 % (total population)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.7 % (total population)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.65 % (total population)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.59 % (total population)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.52 % (total population)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.44 % (total population)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Rural population: 18.35 % (total population)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [15.341221229427505, 15.230324363151535, 15.120752882278493, 15.011266847502451, 14.923745354813382, 14.836252239395568, 14.748013518513003, 14.658404277841708, 14.568774280237855, 14.476578437621354, 14.384004282065796, 14.290292531103288, 14.196227919399711, 14.102154638262638, 14.006702494696112, 13.903035165853478, 13.799522028785013, 13.68383383560127, 13.568638986081309],
      "text": ["Rural population: 15.34 % (total population)<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 15.23 % (total population)<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 15.12 % (total population)<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 15.01 % (total population)<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.92 % (total population)<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.84 % (total population)<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.75 % (total population)<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.66 % (total population)<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.57 % (total population)<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.48 % (total population)<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.38 % (total population)<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.29 % (total population)<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.2 % (total population)<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.1 % (total population)<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 14.01 % (total population)<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 13.9 % (total population)<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 13.8 % (total population)<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 13.68 % (total population)<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Rural population: 13.57 % (total population)<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [24.32, 23.999999999999996, 23.690000000000001, 23.379999999999999, 23.079999999999998, 22.779999999999998, 22.479999999999997, 22.18, 21.890000000000001, 21.59, 21.300000000000001, 21.009999999999998, 20.719999999999999, 20.420000000000005, 20.129999999999999, 19.84, 19.559999999999999, 19.27, 18.979999999999997],
      "text": ["Rural population: 24.32 % (total population)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 24 % (total population)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 23.69 % (total population)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 23.38 % (total population)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 23.08 % (total population)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 22.78 % (total population)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 22.48 % (total population)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 22.18 % (total population)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 21.89 % (total population)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 21.59 % (total population)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 21.3 % (total population)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 21.01 % (total population)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 20.72 % (total population)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 20.42 % (total population)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 20.13 % (total population)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 19.84 % (total population)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 19.56 % (total population)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 19.27 % (total population)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Rural population: 18.98 % (total population)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [22.920000000000002, 22.600000000000001, 22.329999999999998, 22.050000000000001, 21.77, 21.470000000000002, 21.18, 20.899999999999999, 20.550000000000004, 20.129999999999999, 19.710000000000004, 19.310000000000002, 18.91, 18.510000000000002, 18.129999999999999, 17.75, 17.379999999999999, 17.030000000000001, 16.68],
      "text": ["Rural population: 22.92 % (total population)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 22.6 % (total population)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 22.33 % (total population)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 22.05 % (total population)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 21.77 % (total population)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 21.47 % (total population)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 21.18 % (total population)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 20.9 % (total population)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 20.55 % (total population)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 20.13 % (total population)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 19.71 % (total population)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 19.31 % (total population)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 18.91 % (total population)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 18.51 % (total population)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 18.13 % (total population)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 17.75 % (total population)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 17.38 % (total population)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 17.03 % (total population)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Rural population: 16.68 % (total population)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [17.800000000000001, 17.48, 17.170000000000002, 16.859999999999999, 16.550000000000001, 16.25, 15.960000000000003, 15.659999999999998, 15.369999999999999, 15.08, 14.789999999999999, 14.51, 14.23, 13.960000000000001, 13.689999999999998, 13.430000000000001, 13.179999999999998, 12.930000000000001, 12.68],
      "text": ["Rural population: 17.8 % (total population)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 17.48 % (total population)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 17.17 % (total population)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 16.86 % (total population)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 16.55 % (total population)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 16.25 % (total population)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 15.96 % (total population)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 15.66 % (total population)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 15.37 % (total population)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 15.08 % (total population)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 14.79 % (total population)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 14.51 % (total population)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 14.23 % (total population)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 13.96 % (total population)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 13.69 % (total population)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 13.43 % (total population)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 13.18 % (total population)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 12.93 % (total population)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Rural population: 12.68 % (total population)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [38.576828017742429, 38.378784567540293, 38.164859571296276, 37.944788077318769, 37.709412978143028, 37.474909122878529, 37.239331975425443, 37.051015651532929, 36.864393253394908, 36.688461153784964, 36.519420694760797, 36.352992941637837, 36.183946832739409, 36.009899792578224, 35.823294043349044, 35.635229543920424, 35.429485717659738, 35.213119156948231, 34.984074311706102],
      "text": ["Rural population: 38.58 % (total population)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 38.38 % (total population)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 38.16 % (total population)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 37.94 % (total population)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 37.71 % (total population)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 37.47 % (total population)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 37.24 % (total population)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Rural population: 37.05 % (total population)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Rural population: 36.86 % (total population)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 36.69 % (total population)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 36.52 % (total population)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 36.35 % (total population)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 36.18 % (total population)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 36.01 % (total population)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 35.82 % (total population)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 35.64 % (total population)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 35.43 % (total population)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 35.21 % (total population)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Rural population: 34.98 % (total population)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [19.350000000000001, 19, 18.66, 18.469999999999999, 18.370000000000001, 18.27, 18.170000000000002, 18.059999999999999, 18.079999999999998, 18.149999999999999, 18.219999999999999, 18.289999999999999, 18.370000000000001, 18.440000000000001, 18.5, 18.539999999999999, 18.57, 18.59, 18.59],
      "text": ["Rural population: 19.35 % (total population)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 19 % (total population)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.66 % (total population)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.47 % (total population)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.37 % (total population)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.27 % (total population)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.17 % (total population)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.06 % (total population)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.08 % (total population)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.15 % (total population)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.22 % (total population)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.29 % (total population)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.37 % (total population)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.44 % (total population)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.5 % (total population)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.54 % (total population)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.57 % (total population)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.59 % (total population)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Rural population: 18.59 % (total population)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [54.119999999999997, 54.210000000000001, 54.290000000000006, 54.379999999999995, 54.460000000000001, 54.540000000000006, 54.630000000000003, 54.670000000000002, 54.479999999999997, 54.290000000000006, 54.100000000000001, 53.910000000000004, 53.720000000000006, 53.530000000000001, 53.32, 53.090000000000003, 52.850000000000009, 52.590000000000003, 52.32],
      "text": ["Rural population: 54.12 % (total population)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.21 % (total population)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.29 % (total population)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.38 % (total population)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.46 % (total population)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.54 % (total population)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.63 % (total population)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.67 % (total population)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.48 % (total population)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.29 % (total population)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 54.1 % (total population)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 53.91 % (total population)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 53.72 % (total population)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 53.53 % (total population)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 53.32 % (total population)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 53.09 % (total population)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 52.85 % (total population)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 52.59 % (total population)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Rural population: 52.32 % (total population)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [46.982155809519639, 46.8094471283313, 46.634943054611391, 46.459752905383098, 46.279940469023742, 46.100139353472009, 45.908040413720173, 45.697477342787217, 45.576362199967988, 45.53797546156828, 45.494507635999838, 45.451142868910836, 45.403074332805289, 45.349953998067456, 45.289540128329598, 45.215128620621222, 45.127105204522813, 45.018504513688271, 44.902271438912592],
      "text": ["Rural population: 46.98 % (total population)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Rural population: 46.81 % (total population)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Rural population: 46.63 % (total population)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Rural population: 46.46 % (total population)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Rural population: 46.28 % (total population)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Rural population: 46.1 % (total population)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Rural population: 45.91 % (total population)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Rural population: 45.7 % (total population)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Rural population: 45.58 % (total population)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Rural population: 45.54 % (total population)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Rural population: 45.49 % (total population)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Rural population: 45.45 % (total population)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Rural population: 45.4 % (total population)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Rural population: 45.35 % (total population)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Rural population: 45.29 % (total population)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Rural population: 45.22 % (total population)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Rural population: 45.13 % (total population)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Rural population: 45.02 % (total population)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Rural population: 44.9 % (total population)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [24.789999999999999, 24.379999999999999, 23.98, 23.579999999999998, 23.18, 22.800000000000001, 22.41, 22.039999999999999, 21.670000000000002, 21.300000000000001, 20.940000000000001, 20.579999999999998, 20.239999999999998, 19.889999999999997, 19.549999999999997, 19.219999999999999, 18.899999999999999, 18.579999999999998, 18.260000000000002],
      "text": ["Rural population: 24.79 % (total population)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 24.38 % (total population)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 23.98 % (total population)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 23.58 % (total population)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 23.18 % (total population)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 22.8 % (total population)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 22.41 % (total population)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 22.04 % (total population)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 21.67 % (total population)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 21.3 % (total population)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 20.94 % (total population)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 20.58 % (total population)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 20.24 % (total population)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 19.89 % (total population)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 19.55 % (total population)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 19.22 % (total population)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 18.9 % (total population)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 18.58 % (total population)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Rural population: 18.26 % (total population)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [68.184895688890208, 67.732071369747104, 67.251393164823753, 66.782667591131229, 66.412081031860879, 65.901694812420374, 65.3935998673429, 64.876949653747189, 64.34876468720482, 63.85428558990094, 63.354280587442908, 62.846321169594141, 62.322651809317463, 61.795324185161007, 61.271232866583425, 60.745415477486183, 60.214149152686829, 59.677596448910791, 59.137465100692083],
      "text": ["Rural population: 68.18 % (total population)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 67.73 % (total population)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 67.25 % (total population)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 66.78 % (total population)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 66.41 % (total population)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 65.9 % (total population)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 65.39 % (total population)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 64.88 % (total population)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 64.35 % (total population)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 63.85 % (total population)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 63.35 % (total population)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 62.85 % (total population)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 62.32 % (total population)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 61.8 % (total population)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 61.27 % (total population)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 60.75 % (total population)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 60.21 % (total population)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 59.68 % (total population)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Rural population: 59.14 % (total population)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [26.629999999999995, 26.579999999999998, 26.539999999999999, 26.489999999999998, 26.449999999999999, 26.399999999999999, 26.359999999999999, 26.309999999999999, 26.27, 26.210000000000001, 26.140000000000004, 26.050000000000001, 25.949999999999999, 25.84, 25.710000000000001, 25.570000000000004, 25.41, 25.250000000000004, 25.07],
      "text": ["Rural population: 26.63 % (total population)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.58 % (total population)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.54 % (total population)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.49 % (total population)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.45 % (total population)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.4 % (total population)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.36 % (total population)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.31 % (total population)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.27 % (total population)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.21 % (total population)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.14 % (total population)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 26.05 % (total population)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 25.95 % (total population)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 25.84 % (total population)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 25.71 % (total population)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 25.57 % (total population)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 25.41 % (total population)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 25.25 % (total population)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Rural population: 25.07 % (total population)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [81.657104368636666, 81.372733592002561, 81.05992324415206, 80.736187344520019, 80.449728347339217, 80.14737440086148, 79.825233553413682, 79.505658165924956, 79.172429661571002, 78.827915266702689, 78.490381762659865, 78.148766972604605, 77.81779021610852, 77.490766048608322, 77.143809424529493, 76.787786372602781, 76.442714701656854, 76.08210304330207, 75.729372378395226],
      "text": ["Rural population: 81.66 % (total population)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Rural population: 81.37 % (total population)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Rural population: 81.06 % (total population)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Rural population: 80.74 % (total population)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Rural population: 80.45 % (total population)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Rural population: 80.15 % (total population)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Rural population: 79.83 % (total population)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 79.51 % (total population)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 79.17 % (total population)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 78.83 % (total population)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 78.49 % (total population)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 78.15 % (total population)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 77.82 % (total population)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 77.49 % (total population)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 77.14 % (total population)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 76.79 % (total population)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 76.44 % (total population)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 76.08 % (total population)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Rural population: 75.73 % (total population)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [73.909999999999997, 73.319999999999993, 72.719999999999999, 72.110000000000014, 71.500000000000014, 70.870000000000005, 70.239999999999981, 69.579999999999984, 68.920000000000016, 68.249999999999986, 67.569999999999993, 66.890000000000001, 66.189999999999998, 65.489999999999995, 64.790000000000006, 64.079999999999998, 63.36999999999999, 62.659999999999997, 61.950000000000003],
      "text": ["Rural population: 73.91 % (total population)<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 73.32 % (total population)<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 72.72 % (total population)<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 72.11 % (total population)<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 71.5 % (total population)<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 70.87 % (total population)<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 70.24 % (total population)<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 69.58 % (total population)<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 68.92 % (total population)<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 68.25 % (total population)<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 67.57 % (total population)<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 66.89 % (total population)<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 66.19 % (total population)<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 65.49 % (total population)<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 64.79 % (total population)<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 64.08 % (total population)<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 63.37 % (total population)<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 62.66 % (total population)<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Rural population: 61.95 % (total population)<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [66.420000000000002, 66.219999999999999, 66.019999999999996, 65.819999999999993, 65.609999999999999, 65.409999999999997, 65.209999999999994, 65, 64.799999999999997, 64.590000000000003, 64.390000000000001, 64.180000000000007, 63.970000000000006, 63.769999999999996, 63.560000000000009, 63.329999999999998, 63.090000000000003, 62.829999999999991, 62.560000000000002],
      "text": ["Rural population: 66.42 % (total population)<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 66.22 % (total population)<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 66.02 % (total population)<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 65.82 % (total population)<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 65.61 % (total population)<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 65.41 % (total population)<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 65.21 % (total population)<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 65 % (total population)<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 64.8 % (total population)<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 64.59 % (total population)<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 64.39 % (total population)<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 64.18 % (total population)<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 63.97 % (total population)<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 63.77 % (total population)<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 63.56 % (total population)<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 63.33 % (total population)<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 63.09 % (total population)<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 62.83 % (total population)<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Rural population: 62.56 % (total population)<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [74.569999999999993, 73.890000000000001, 73.189999999999998, 72.480000000000004, 71.759999999999991, 71.030000000000001, 70.290000000000006, 69.539999999999992, 68.780000000000001, 68.010000000000005, 67.239999999999995, 66.459999999999994, 65.689999999999998, 64.920000000000002, 64.140000000000001, 63.369999999999997, 62.599999999999994, 61.819999999999993, 61.049999999999997],
      "text": ["Rural population: 74.57 % (total population)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 73.89 % (total population)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 73.19 % (total population)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 72.48 % (total population)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 71.76 % (total population)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 71.03 % (total population)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 70.29 % (total population)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 69.54 % (total population)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 68.78 % (total population)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 68.01 % (total population)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 67.24 % (total population)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 66.46 % (total population)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 65.69 % (total population)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 64.92 % (total population)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 64.14 % (total population)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 63.37 % (total population)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 62.6 % (total population)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 61.82 % (total population)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Rural population: 61.05 % (total population)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [55.639999999999993, 54.850000000000009, 54.060000000000002, 53.260000000000005, 52.469999999999999, 51.670000000000002, 50.869999999999997, 50.090000000000003, 49.399999999999999, 48.719999999999999, 48.039999999999999, 47.369999999999997, 46.689999999999998, 46.009999999999998, 45.340000000000003, 44.669999999999995, 44.009999999999998, 43.359999999999999, 42.710000000000001],
      "text": ["Rural population: 55.64 % (total population)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 54.85 % (total population)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 54.06 % (total population)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 53.26 % (total population)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 52.47 % (total population)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 51.67 % (total population)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 50.87 % (total population)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 50.09 % (total population)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 49.4 % (total population)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 48.72 % (total population)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 48.04 % (total population)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 47.37 % (total population)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 46.69 % (total population)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 46.01 % (total population)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 45.34 % (total population)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 44.67 % (total population)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 44.01 % (total population)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 43.36 % (total population)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Rural population: 42.71 % (total population)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [65.517454388740319, 65.126773108290436, 64.720745574755966, 64.318804585154055, 63.894438898495132, 63.435590713889916, 63.020412610775026, 62.640656581839451, 62.297072443822017, 61.949797070690224, 61.51287971874897, 61.190081613540599, 60.858223415340277, 60.519465691185452, 60.196444227907406, 59.852529002226099, 59.484095682244835, 59.158191421017492, 58.931235968499138],
      "text": ["Rural population: 65.52 % (total population)<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 65.13 % (total population)<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 64.72 % (total population)<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 64.32 % (total population)<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 63.89 % (total population)<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 63.44 % (total population)<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 63.02 % (total population)<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 62.64 % (total population)<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 62.3 % (total population)<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 61.95 % (total population)<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 61.51 % (total population)<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 61.19 % (total population)<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 60.86 % (total population)<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 60.52 % (total population)<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 60.2 % (total population)<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 59.85 % (total population)<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 59.48 % (total population)<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Rural population: 59.16 % (total population)<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Rural population: 58.93 % (total population)<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [65.060000000000002, 63.829999999999998, 62.590000000000003, 61.329999999999991, 60.04999999999999, 58.759999999999998, 57.460000000000008, 56.140000000000008, 55.299999999999997, 54.560000000000002, 53.809999999999995, 53.060000000000002, 52.309999999999995, 51.549999999999997, 50.799999999999997, 50.049999999999997, 49.310000000000002, 48.570000000000007, 47.840000000000003],
      "text": ["Rural population: 65.06 % (total population)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 63.83 % (total population)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 62.59 % (total population)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 61.33 % (total population)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 60.05 % (total population)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 58.76 % (total population)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 57.46 % (total population)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 56.14 % (total population)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 55.3 % (total population)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 54.56 % (total population)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 53.81 % (total population)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 53.06 % (total population)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 52.31 % (total population)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 51.55 % (total population)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 50.8 % (total population)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 50.05 % (total population)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 49.31 % (total population)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 48.57 % (total population)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Rural population: 47.84 % (total population)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [16.800000000000001, 15.359999999999999, 14.02, 12.880000000000001, 11.850000000000001, 10.9, 10.01, 9.1899999999999995, 8.9299999999999997, 8.8499999999999996, 8.7700000000000014, 8.6999999999999993, 8.6199999999999992, 8.5400000000000009, 8.4700000000000006, 8.3800000000000008, 8.3000000000000007, 8.2200000000000006, 8.1300000000000008],
      "text": ["Rural population: 16.8 % (total population)<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 15.36 % (total population)<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 14.02 % (total population)<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 12.88 % (total population)<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 11.85 % (total population)<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 10.9 % (total population)<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 10.01 % (total population)<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 9.19 % (total population)<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.93 % (total population)<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.85 % (total population)<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.77 % (total population)<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.7 % (total population)<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.62 % (total population)<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.54 % (total population)<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.47 % (total population)<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.38 % (total population)<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.3 % (total population)<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.22 % (total population)<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Rural population: 8.13 % (total population)<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [54.633432953439396, 54.418007499061623, 54.166913518020344, 53.901450246561346, 53.631764758213421, 53.368449165353908, 53.111200481617367, 52.836032709832374, 52.602137968926854, 52.369053150178281, 52.089374043379813, 51.823563567276516, 51.563162680521799, 51.298547766692387, 51.046291008626426, 50.796130552160385, 50.527332235580218, 50.256291368043655, 49.993730894204589],
      "text": ["Rural population: 54.63 % (total population)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Rural population: 54.42 % (total population)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Rural population: 54.17 % (total population)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 53.9 % (total population)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 53.63 % (total population)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 53.37 % (total population)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 53.11 % (total population)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 52.84 % (total population)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 52.6 % (total population)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 52.37 % (total population)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 52.09 % (total population)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 51.82 % (total population)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 51.56 % (total population)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 51.3 % (total population)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 51.05 % (total population)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 50.8 % (total population)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 50.53 % (total population)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 50.26 % (total population)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Rural population: 49.99 % (total population)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [13.34, 13.27, 13.220000000000001, 13.16, 13.099999999999998, 13.040000000000001, 12.98, 12.930000000000001, 12.870000000000001, 12.81, 12.750000000000002, 12.699999999999999, 12.640000000000001, 12.58, 12.51, 12.44, 12.359999999999999, 12.27, 12.18],
      "text": ["Rural population: 13.34 % (total population)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 13.27 % (total population)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 13.22 % (total population)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 13.16 % (total population)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 13.1 % (total population)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 13.04 % (total population)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.98 % (total population)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.93 % (total population)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.87 % (total population)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.81 % (total population)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.75 % (total population)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.7 % (total population)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.64 % (total population)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.58 % (total population)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.51 % (total population)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.44 % (total population)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.36 % (total population)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.27 % (total population)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Rural population: 12.18 % (total population)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [33.399999999999999, 32.780000000000001, 32.159999999999997, 31.550000000000004, 30.949999999999999, 30.350000000000001, 29.760000000000005, 29.169999999999998, 28.600000000000001, 28.030000000000001, 27.469999999999999, 26.920000000000002, 26.390000000000001, 25.870000000000001, 25.359999999999999, 24.859999999999999, 24.370000000000005, 23.899999999999995, 23.43],
      "text": ["Rural population: 33.4 % (total population)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 32.78 % (total population)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 32.16 % (total population)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 31.55 % (total population)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 30.95 % (total population)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 30.35 % (total population)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 29.76 % (total population)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 29.17 % (total population)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 28.6 % (total population)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 28.03 % (total population)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 27.47 % (total population)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 26.92 % (total population)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 26.39 % (total population)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 25.87 % (total population)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 25.36 % (total population)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 24.86 % (total population)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 24.37 % (total population)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 23.9 % (total population)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Rural population: 23.43 % (total population)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [84.689999999999998, 84.5, 84.299999999999997, 84.099999999999994, 83.88000000000001, 83.489999999999995, 83.090000000000018, 82.680000000000007, 82.260000000000005, 81.840000000000003, 81.430000000000021, 81, 80.569999999999993, 80.129999999999995, 79.689999999999998, 79.239999999999995, 78.780000000000001, 78.310000000000002, 77.829999999999998],
      "text": ["Rural population: 84.69 % (total population)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 84.5 % (total population)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 84.3 % (total population)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 84.1 % (total population)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 83.88 % (total population)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 83.49 % (total population)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 83.09 % (total population)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 82.68 % (total population)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 82.26 % (total population)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 81.84 % (total population)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 81.43 % (total population)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 81 % (total population)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 80.57 % (total population)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 80.13 % (total population)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 79.69 % (total population)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 79.24 % (total population)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 78.78 % (total population)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 78.31 % (total population)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Rural population: 77.83 % (total population)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [41.403259809110146, 41.16866058385208, 40.921089264777876, 40.653963878374327, 40.368470483608363, 40.075723313778745, 39.807540793532183, 39.561832446875805, 39.317879142983067, 39.160431646281125, 39.030056105147452, 38.898034829468344, 38.748506302313181, 38.584189872758145, 38.401022823480865, 38.203345050834677, 37.997555391035625, 37.773657826272341, 37.533424908889188],
      "text": ["Rural population: 41.4 % (total population)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 41.17 % (total population)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 40.92 % (total population)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 40.65 % (total population)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 40.37 % (total population)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 40.08 % (total population)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 39.81 % (total population)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 39.56 % (total population)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 39.32 % (total population)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 39.16 % (total population)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 39.03 % (total population)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 38.9 % (total population)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 38.75 % (total population)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 38.58 % (total population)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 38.4 % (total population)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 38.2 % (total population)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 38 % (total population)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 37.77 % (total population)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Rural population: 37.53 % (total population)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [33.829999999999998, 33.130000000000003, 32.439999999999998, 31.760000000000002, 31.140000000000004, 30.539999999999999, 29.949999999999996, 29.369999999999997, 28.800000000000004, 28.250000000000004, 27.700000000000003, 27.170000000000002, 26.640000000000001, 26.119999999999997, 25.609999999999999, 25.100000000000001, 24.609999999999999, 24.129999999999999, 23.66],
      "text": ["Rural population: 33.83 % (total population)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 33.13 % (total population)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 32.44 % (total population)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 31.76 % (total population)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 31.14 % (total population)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 30.54 % (total population)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 29.95 % (total population)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 29.37 % (total population)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 28.8 % (total population)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 28.25 % (total population)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 27.7 % (total population)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 27.17 % (total population)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 26.64 % (total population)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 26.12 % (total population)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 25.61 % (total population)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 25.1 % (total population)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 24.61 % (total population)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 24.13 % (total population)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Rural population: 23.66 % (total population)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [71.430000000000007, 71.099999999999994, 70.760000000000005, 70.430000000000007, 70.090000000000003, 69.75, 69.409999999999997, 69.069999999999993, 68.719999999999999, 68.370000000000005, 68, 67.620000000000005, 67.219999999999999, 66.819999999999993, 66.400000000000006, 65.969999999999999, 65.530000000000001, 65.070000000000007, 64.609999999999999],
      "text": ["Rural population: 71.43 % (total population)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 71.1 % (total population)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 70.76 % (total population)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 70.43 % (total population)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 70.09 % (total population)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 69.75 % (total population)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 69.41 % (total population)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 69.07 % (total population)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 68.72 % (total population)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 68.37 % (total population)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 68 % (total population)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 67.62 % (total population)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 67.22 % (total population)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 66.82 % (total population)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 66.4 % (total population)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 65.97 % (total population)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 65.53 % (total population)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 65.07 % (total population)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Rural population: 64.61 % (total population)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [20.420000000000002, 20.239999999999998, 20.07, 19.899999999999999, 19.73, 19.559999999999999, 19.390000000000001, 19.23, 19.059999999999999, 18.879999999999999, 18.699999999999999, 18.52, 18.329999999999998, 18.140000000000001, 17.940000000000001, 17.739999999999998, 17.539999999999999, 17.34, 17.129999999999999],
      "text": ["Rural population: 20.42 % (total population)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 20.24 % (total population)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 20.07 % (total population)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 19.9 % (total population)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 19.73 % (total population)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 19.56 % (total population)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 19.39 % (total population)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 19.23 % (total population)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 19.06 % (total population)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 18.88 % (total population)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 18.7 % (total population)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 18.52 % (total population)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 18.33 % (total population)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 18.14 % (total population)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 17.94 % (total population)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 17.74 % (total population)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 17.54 % (total population)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 17.34 % (total population)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Rural population: 17.13 % (total population)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [63.470000000000006, 62.999999999999993, 62.520000000000003, 62.030000000000008, 61.530000000000001, 61.020000000000003, 60.509999999999998, 59.990000000000009, 59.460000000000001, 58.920000000000009, 58.36999999999999, 57.820000000000007, 57.259999999999998, 56.689999999999998, 56.119999999999997, 55.539999999999999, 54.950000000000003, 54.359999999999992, 53.759999999999998],
      "text": ["Rural population: 63.47 % (total population)<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 63 % (total population)<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 62.52 % (total population)<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 62.03 % (total population)<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 61.53 % (total population)<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 61.02 % (total population)<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 60.51 % (total population)<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 59.99 % (total population)<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 59.46 % (total population)<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 58.92 % (total population)<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 58.37 % (total population)<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 57.82 % (total population)<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 57.26 % (total population)<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 56.69 % (total population)<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 56.12 % (total population)<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 55.54 % (total population)<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 54.95 % (total population)<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 54.36 % (total population)<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Rural population: 53.76 % (total population)<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [23.219999999999999, 22.979999999999997, 22.739999999999995, 22.499999999999996, 22.260000000000002, 22.020000000000003, 21.789999999999999, 21.559999999999999, 21.329999999999998, 21.100000000000005, 20.870000000000001, 20.629999999999999, 20.399999999999999, 20.16, 19.920000000000002, 19.68, 19.43, 19.190000000000001, 18.940000000000001],
      "text": ["Rural population: 23.22 % (total population)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 22.98 % (total population)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 22.74 % (total population)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 22.5 % (total population)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 22.26 % (total population)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 22.02 % (total population)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 21.79 % (total population)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 21.56 % (total population)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 21.33 % (total population)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 21.1 % (total population)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 20.87 % (total population)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 20.63 % (total population)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 20.4 % (total population)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 20.16 % (total population)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 19.92 % (total population)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 19.68 % (total population)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 19.43 % (total population)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 19.19 % (total population)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Rural population: 18.94 % (total population)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [38.32, 38.439999999999998, 38.549999999999997, 38.659999999999997, 38.770000000000003, 38.880000000000003, 39, 39.109999999999999, 39.220000000000006, 39.350000000000001, 39.469999999999999, 39.600000000000001, 39.719999999999999, 39.82, 39.899999999999999, 39.939999999999998, 39.960000000000001, 39.960000000000001, 39.920000000000002],
      "text": ["Rural population: 38.32 % (total population)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 38.44 % (total population)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 38.55 % (total population)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 38.66 % (total population)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 38.77 % (total population)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 38.88 % (total population)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39 % (total population)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.11 % (total population)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.22 % (total population)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.35 % (total population)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.47 % (total population)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.6 % (total population)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.72 % (total population)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.82 % (total population)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.9 % (total population)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.94 % (total population)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.96 % (total population)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.96 % (total population)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Rural population: 39.92 % (total population)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [62.640000000000008, 61.789999999999992, 60.93, 60.060000000000002, 59.18, 58.29999999999999, 57.410000000000004, 56.520000000000003, 55.63000000000001, 54.75, 53.88000000000001, 53.020000000000003, 52.159999999999989, 51.32, 50.480000000000004, 49.659999999999989, 48.840000000000003, 48.039999999999999, 47.25],
      "text": ["Rural population: 62.64 % (total population)<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 61.79 % (total population)<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 60.93 % (total population)<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 60.06 % (total population)<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 59.18 % (total population)<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 58.3 % (total population)<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 57.41 % (total population)<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 56.52 % (total population)<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 55.63 % (total population)<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 54.75 % (total population)<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 53.88 % (total population)<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 53.02 % (total population)<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 52.16 % (total population)<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 51.32 % (total population)<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 50.48 % (total population)<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 49.66 % (total population)<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 48.84 % (total population)<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 48.04 % (total population)<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Rural population: 47.25 % (total population)<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [41.549999999999997, 41.009999999999998, 40.460000000000008, 39.919999999999995, 39.380000000000003, 38.850000000000001, 38.310000000000002, 37.780000000000001, 37.25, 36.729999999999997, 36.210000000000001, 35.689999999999998, 35.170000000000002, 34.659999999999997, 34.149999999999999, 33.649999999999999, 33.140000000000001, 32.649999999999999, 32.149999999999991],
      "text": ["Rural population: 41.55 % (total population)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 41.01 % (total population)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 40.46 % (total population)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 39.92 % (total population)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 39.38 % (total population)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 38.85 % (total population)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 38.31 % (total population)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 37.78 % (total population)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 37.25 % (total population)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 36.73 % (total population)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 36.21 % (total population)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 35.69 % (total population)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 35.17 % (total population)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 34.66 % (total population)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 34.15 % (total population)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 33.65 % (total population)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 33.14 % (total population)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 32.65 % (total population)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Rural population: 32.15 % (total population)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [24.420000000000002, 24.219999999999999, 24.02, 23.82, 23.620000000000001, 23.420000000000002, 23.23, 23.030000000000001, 22.839999999999996, 22.829999999999998, 22.82, 22.809999999999999, 22.800000000000004, 22.779999999999998, 22.739999999999998, 22.690000000000001, 22.620000000000001, 22.550000000000001, 22.460000000000001],
      "text": ["Rural population: 24.42 % (total population)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 24.22 % (total population)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 24.02 % (total population)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 23.82 % (total population)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 23.62 % (total population)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 23.42 % (total population)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 23.23 % (total population)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 23.03 % (total population)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.84 % (total population)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.83 % (total population)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.82 % (total population)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.81 % (total population)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.8 % (total population)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.78 % (total population)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.74 % (total population)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.69 % (total population)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.62 % (total population)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.55 % (total population)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Rural population: 22.46 % (total population)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [32.447102255793183, 32.523713536446365, 32.586851821489873, 32.645465400218782, 32.702127078940421, 32.753918444699458, 32.82152912787064, 32.930042890477246, 33.033778712297568, 33.041410303446703, 33.008248475265432, 32.97316156863134, 32.923022478557094, 32.868966075941266, 32.799772425317116, 32.706883485551153, 32.598263592852881, 32.47433480883948, 32.392343278887608],
      "text": ["Rural population: 32.45 % (total population)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.52 % (total population)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.59 % (total population)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.65 % (total population)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.7 % (total population)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.75 % (total population)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.82 % (total population)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.93 % (total population)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 33.03 % (total population)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 33.04 % (total population)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 33.01 % (total population)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.97 % (total population)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.92 % (total population)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.87 % (total population)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.8 % (total population)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.71 % (total population)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.6 % (total population)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.47 % (total population)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Rural population: 32.39 % (total population)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [40.079999999999991, 39.799999999999997, 39.520000000000003, 39.259999999999998, 39.060000000000002, 38.860000000000007, 38.659999999999997, 38.460000000000001, 38.259999999999998, 38.060000000000002, 37.860000000000007, 37.659999999999997, 37.460000000000001, 37.259999999999998, 37.04999999999999, 36.829999999999998, 36.600000000000009, 36.350000000000001, 36.090000000000003],
      "text": ["Rural population: 40.08 % (total population)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 39.8 % (total population)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 39.52 % (total population)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 39.26 % (total population)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 39.06 % (total population)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 38.86 % (total population)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 38.66 % (total population)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 38.46 % (total population)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 38.26 % (total population)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 38.06 % (total population)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 37.86 % (total population)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 37.66 % (total population)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 37.46 % (total population)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 37.26 % (total population)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 37.05 % (total population)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 36.83 % (total population)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 36.6 % (total population)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 36.35 % (total population)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Rural population: 36.09 % (total population)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [43.710000000000001, 43.090000000000003, 42.479999999999997, 41.859999999999999, 41.25, 40.639999999999993, 40.039999999999992, 39.43, 38.829999999999991, 38.240000000000002, 37.649999999999999, 37.060000000000002, 36.490000000000002, 35.909999999999997, 35.350000000000001, 34.789999999999999, 34.240000000000002, 33.689999999999991, 33.149999999999999],
      "text": ["Rural population: 43.71 % (total population)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 43.09 % (total population)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 42.48 % (total population)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 41.86 % (total population)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 41.25 % (total population)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 40.64 % (total population)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 40.04 % (total population)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 39.43 % (total population)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 38.83 % (total population)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 38.24 % (total population)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 37.65 % (total population)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 37.06 % (total population)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 36.49 % (total population)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 35.91 % (total population)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 35.35 % (total population)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 34.79 % (total population)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 34.24 % (total population)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 33.69 % (total population)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Rural population: 33.15 % (total population)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [19.469999999999999, 19.25, 19.02, 18.800000000000001, 18.57, 18.350000000000001, 18.129999999999999, 17.920000000000002, 17.699999999999999, 17.479999999999997, 17.260000000000002, 17.039999999999999, 16.82, 16.600000000000001, 16.379999999999999, 16.16, 15.94, 15.710000000000003, 15.49],
      "text": ["Rural population: 19.47 % (total population)<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 19.25 % (total population)<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 19.02 % (total population)<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 18.8 % (total population)<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 18.57 % (total population)<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 18.35 % (total population)<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 18.13 % (total population)<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 17.92 % (total population)<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 17.7 % (total population)<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 17.48 % (total population)<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 17.26 % (total population)<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 17.04 % (total population)<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 16.82 % (total population)<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 16.6 % (total population)<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 16.38 % (total population)<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 16.16 % (total population)<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 15.94 % (total population)<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 15.71 % (total population)<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Rural population: 15.49 % (total population)<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [23.370000000000001, 23.119999999999997, 22.869999999999994, 22.620000000000001, 22.380000000000003, 22.130000000000006, 21.879999999999999, 21.629999999999999, 21.379999999999999, 21.120000000000001, 20.859999999999996, 20.609999999999999, 20.339999999999996, 20.079999999999991, 19.82, 19.559999999999999, 19.289999999999996, 19.02, 18.759999999999998],
      "text": ["Rural population: 23.37 % (total population)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 23.12 % (total population)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 22.87 % (total population)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 22.62 % (total population)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 22.38 % (total population)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 22.13 % (total population)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 21.88 % (total population)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 21.63 % (total population)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 21.38 % (total population)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 21.12 % (total population)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 20.86 % (total population)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 20.61 % (total population)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 20.34 % (total population)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 20.08 % (total population)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 19.82 % (total population)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 19.56 % (total population)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 19.29 % (total population)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 19.02 % (total population)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Rural population: 18.76 % (total population)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [20.652751804721355, 20.362777897074789, 20.072813812405798, 19.79285796949069, 19.512914450042011, 19.232976357125185, 18.963032910498036, 18.693089972473068, 18.423153359700386, 18.153226083686732, 17.893290568046634, 17.633353876263307, 17.363435120635952, 17.103488676353852, 16.853502740093571, 16.593516287689511, 16.343518157197781, 16.093501864159141, 15.843460174546294],
      "text": ["Rural population: 20.65 % (total population)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 20.36 % (total population)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 20.07 % (total population)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 19.79 % (total population)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 19.51 % (total population)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 19.23 % (total population)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 18.96 % (total population)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 18.69 % (total population)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 18.42 % (total population)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 18.15 % (total population)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 17.89 % (total population)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 17.63 % (total population)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 17.36 % (total population)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 17.1 % (total population)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 16.85 % (total population)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 16.59 % (total population)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 16.34 % (total population)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 16.09 % (total population)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Rural population: 15.84 % (total population)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [40.630000000000003, 40.909999999999997, 41.189999999999998, 41.469999999999999, 41.75, 42.030000000000001, 42.32, 42.600000000000001, 42.880000000000003, 42.849999999999994, 42.659999999999997, 42.469999999999992, 42.280000000000001, 42.100000000000001, 41.910000000000004, 41.699999999999996, 41.490000000000002, 41.25, 41.009999999999998],
      "text": ["Rural population: 40.63 % (total population)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 40.91 % (total population)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 41.19 % (total population)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 41.47 % (total population)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 41.75 % (total population)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 42.03 % (total population)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 42.32 % (total population)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 42.6 % (total population)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 42.88 % (total population)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 42.85 % (total population)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 42.66 % (total population)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 42.47 % (total population)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 42.28 % (total population)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 42.1 % (total population)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 41.91 % (total population)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 41.7 % (total population)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 41.49 % (total population)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 41.25 % (total population)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Rural population: 41.01 % (total population)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [59.886524463589268, 58.533109693049973, 57.160520689940022, 55.81681750881387, 54.492483412712765, 53.159081367124735, 51.82771142239902, 50.484642258907577, 49.211161084390852, 47.966621533906839, 46.723663737732778, 45.479718074333242, 44.24558771033918, 43.012390284393852, 41.799254210377221, 40.615141775845636, 39.460708014951919, 38.348069819732224, 37.276333311650156],
      "text": ["Rural population: 59.89 % (total population)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 58.53 % (total population)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 57.16 % (total population)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 55.82 % (total population)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 54.49 % (total population)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 53.16 % (total population)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 51.83 % (total population)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 50.48 % (total population)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 49.21 % (total population)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 47.97 % (total population)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 46.72 % (total population)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 45.48 % (total population)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 44.25 % (total population)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 43.01 % (total population)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 41.8 % (total population)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 40.62 % (total population)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 39.46 % (total population)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 38.35 % (total population)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Rural population: 37.28 % (total population)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [38.516800976406316, 38.283354541591379, 37.962525035496682, 37.589055562495183, 37.187881172674437, 36.751243489438735, 36.327854845816539, 36.019747912402849, 35.900973692434896, 35.64806813147954, 35.177539114081149, 34.580437582001068, 33.923062223314332, 33.458731255110628, 33.107668663228935, 32.83960649637207, 32.627831322587106, 32.429611453713498, 32.243579875838279],
      "text": ["Rural population: 38.52 % (total population)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Rural population: 38.28 % (total population)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Rural population: 37.96 % (total population)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Rural population: 37.59 % (total population)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Rural population: 37.19 % (total population)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Rural population: 36.75 % (total population)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Rural population: 36.33 % (total population)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Rural population: 36.02 % (total population)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Rural population: 35.9 % (total population)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Rural population: 35.65 % (total population)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Rural population: 35.18 % (total population)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Rural population: 34.58 % (total population)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Rural population: 33.92 % (total population)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Rural population: 33.46 % (total population)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Rural population: 33.11 % (total population)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Rural population: 32.84 % (total population)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Rural population: 32.63 % (total population)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Rural population: 32.43 % (total population)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Rural population: 32.24 % (total population)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [15.800000000000001, 15.74, 15.68, 15.57, 15.409999999999998, 15.25, 15.100000000000001, 14.94, 14.699999999999999, 14.380000000000001, 14.06, 13.75, 13.450000000000001, 13.15, 12.85, 12.57, 12.289999999999999, 12.02, 11.76],
      "text": ["Rural population: 15.8 % (total population)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 15.74 % (total population)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 15.68 % (total population)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 15.57 % (total population)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 15.41 % (total population)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 15.25 % (total population)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 15.1 % (total population)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 14.94 % (total population)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 14.7 % (total population)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 14.38 % (total population)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 14.06 % (total population)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 13.75 % (total population)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 13.45 % (total population)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 13.15 % (total population)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 12.85 % (total population)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 12.57 % (total population)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 12.29 % (total population)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 12.02 % (total population)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Rural population: 11.76 % (total population)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [15.051997633217042, 14.841000385665845, 14.547547164842257, 14.304876479485316, 14.113456140822127, 13.912502170630699, 13.752104910258394, 13.598813615684533, 13.4362665668882, 13.253187338061224, 13.101288915870208, 12.980612679098712, 12.861471836150542, 12.752631631055367, 12.63566304429696, 12.529720218579985, 12.41412026183143, 12.288490199227562, 12.171902390640483],
      "text": ["Rural population: 15.05 % (total population)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 14.84 % (total population)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 14.55 % (total population)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 14.3 % (total population)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 14.11 % (total population)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 13.91 % (total population)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 13.75 % (total population)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 13.6 % (total population)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 13.44 % (total population)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 13.25 % (total population)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 13.1 % (total population)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 12.98 % (total population)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 12.86 % (total population)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 12.75 % (total population)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 12.64 % (total population)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 12.53 % (total population)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 12.41 % (total population)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 12.29 % (total population)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Rural population: 12.17 % (total population)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [32.322781185506571, 32.201840104072211, 32.080820522828596, 31.960568551757088, 31.85105398460642, 31.731420526094642, 31.611237311378225, 31.491258303866058, 31.38108940009867, 31.141158097987237, 30.842337945907115, 30.551985358675978, 30.249288896306513, 29.966390074373408, 29.672738131784847, 29.367680161309835, 29.059657735277074, 28.756288302352488, 28.446068633004295],
      "text": ["Rural population: 32.32 % (total population)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 32.2 % (total population)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 32.08 % (total population)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 31.96 % (total population)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 31.85 % (total population)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 31.73 % (total population)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 31.61 % (total population)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 31.49 % (total population)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 31.38 % (total population)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 31.14 % (total population)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 30.84 % (total population)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 30.55 % (total population)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 30.25 % (total population)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 29.97 % (total population)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 29.67 % (total population)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 29.37 % (total population)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 29.06 % (total population)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 28.76 % (total population)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Rural population: 28.45 % (total population)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [19.66, 18.490000000000002, 17.370000000000001, 16.359999999999999, 15.460000000000001, 14.600000000000001, 13.709999999999999, 12.869999999999999, 12.119999999999999, 11.41, 10.81, 10.31, 9.8300000000000001, 9.3599999999999994, 8.9199999999999999, 8.5099999999999998, 8.1199999999999992, 7.7600000000000007, 7.4299999999999997],
      "text": ["Rural population: 19.66 % (total population)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 18.49 % (total population)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 17.37 % (total population)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 16.36 % (total population)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 15.46 % (total population)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 14.6 % (total population)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 13.71 % (total population)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 12.87 % (total population)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 12.12 % (total population)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 11.41 % (total population)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 10.81 % (total population)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 10.31 % (total population)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 9.83 % (total population)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 9.36 % (total population)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 8.92 % (total population)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 8.51 % (total population)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 8.12 % (total population)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 7.76 % (total population)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Rural population: 7.43 % (total population)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [3.182171876129908, 3.1203384531187499, 3.0590469376426324, 2.9977371938629442, 2.9265265004173981, 2.865875931353346, 2.8151763123196214, 2.7545829003522817, 2.6942565973709764, 2.6473327714897854, 2.5916549709995933, 2.545911152350762, 2.4903161823063544, 2.4444477076134876, 2.4001479715063136, 2.3546163341532749, 2.3091959249089582, 2.2634686556184502, 2.2176677035878263],
      "text": ["Rural population: 3.18 % (total population)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 3.12 % (total population)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 3.06 % (total population)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 3 % (total population)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.93 % (total population)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.87 % (total population)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.82 % (total population)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.75 % (total population)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.69 % (total population)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.65 % (total population)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.59 % (total population)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.55 % (total population)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.49 % (total population)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.44 % (total population)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.4 % (total population)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.35 % (total population)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.31 % (total population)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.26 % (total population)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Rural population: 2.22 % (total population)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [17.359999999999999, 17.23, 17.09, 16.960000000000001, 16.829999999999998, 16.699999999999999, 16.569999999999997, 16.23, 15.689999999999998, 15.16, 14.879999999999999, 14.819999999999997, 14.769999999999998, 14.73, 14.68, 14.619999999999997, 14.550000000000001, 14.48, 14.4],
      "text": ["Rural population: 17.36 % (total population)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 17.23 % (total population)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 17.09 % (total population)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 16.96 % (total population)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 16.83 % (total population)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 16.7 % (total population)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 16.57 % (total population)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 16.23 % (total population)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 15.69 % (total population)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 15.16 % (total population)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 14.88 % (total population)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 14.82 % (total population)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 14.77 % (total population)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 14.73 % (total population)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 14.68 % (total population)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 14.62 % (total population)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 14.55 % (total population)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 14.48 % (total population)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Rural population: 14.4 % (total population)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [26.740754448064411, 26.411179721132921, 26.08257635631659, 25.755943990697972, 25.438963418351683, 25.123049811457385, 24.818274943461194, 24.514717568727388, 24.214685034973989, 23.929614045656788, 23.644934767216618, 23.360276977900341, 23.074255760924586, 22.795304315303579, 22.520806401623322, 22.236819588325822, 21.957933057373122, 21.679816837912931, 21.42065782606106],
      "text": ["Rural population: 26.74 % (total population)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 26.41 % (total population)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 26.08 % (total population)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 25.76 % (total population)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 25.44 % (total population)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 25.12 % (total population)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 24.82 % (total population)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 24.51 % (total population)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 24.21 % (total population)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 23.93 % (total population)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 23.64 % (total population)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 23.36 % (total population)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 23.07 % (total population)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 22.8 % (total population)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 22.52 % (total population)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 22.24 % (total population)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 21.96 % (total population)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 21.68 % (total population)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Rural population: 21.42 % (total population)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Rural population (REMIND_54)",
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
        "text": "% (total population)",
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
    "b55c2da862ac": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c32243f7a": {
      "y": {}
    }
  },
  "cur_data": "b55c2da862ac",
  "visdat": {
    "b55c2da862ac": ["function (y) ", "x"],
    "b55c32243f7a": ["function (y) ", "x"]
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

  
