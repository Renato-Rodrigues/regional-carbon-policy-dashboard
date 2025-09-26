(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Extraction_Cobalt_production_line') 

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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [224.07748013115011, 240.67628596188212, 252.54282326819038, 232.01851818692282, 249.05623736370083, 259.17293000581907, 294.68934574748397, 304.11066087693882, 319.59970419927396, 303.56739843267229, 244.87716358539456, 223.74186754402439, 238.97464888348742, 230.32985723131938, 227.98083344052444, 202.97140673298063, 218.61195772196524, 216.65322451168652, 214.24703412559762],
      "text": ["Cobalt production: 224.08 metric tons<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 240.68 metric tons<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 252.54 metric tons<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 232.02 metric tons<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 249.06 metric tons<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 259.17 metric tons<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 294.69 metric tons<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 304.11 metric tons<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 319.6 metric tons<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 303.57 metric tons<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 244.88 metric tons<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 223.74 metric tons<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 238.97 metric tons<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 230.33 metric tons<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 227.98 metric tons<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 202.97 metric tons<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 218.61 metric tons<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 216.65 metric tons<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Cobalt production: 214.25 metric tons<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [4327, 5060, 5767, 7115, 8261, 8953, 3919.0000000000005, 4636, 6836, 6625, 4005, 3906.9999999999995, 4339, 4216, 3703.9999999999995, 3279, 3336, 3336, 3335.9999999999995],
      "text": ["Cobalt production: 4327 metric tons<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 5060 metric tons<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 5767 metric tons<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 7115 metric tons<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 8261 metric tons<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 8953 metric tons<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3919 metric tons<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 4636 metric tons<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 6836 metric tons<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 6625 metric tons<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 4005 metric tons<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3907 metric tons<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 4339 metric tons<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 4216 metric tons<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3704 metric tons<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3279 metric tons<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3336 metric tons<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3336 metric tons<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Cobalt production: 3336 metric tons<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [4981.9886703740103, 4646.5704103304479, 4647.2774863726445, 4980.3384551198696, 4904.7458863396032, 3985.5585690553071, 3625.4683366531508, 3216.4730697800032, 3216.4524078527697, 4926.252460717943, 5368.3596653831846, 5200.0233218299372, 4792.8830395796176, 4301.3568363395298, 4209.6173664929402, 4077.196183310542, 4798.4666714825307, 4790.7910813036488, 4788.6258865015652],
      "text": ["Cobalt production: 4981.99 metric tons<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4646.57 metric tons<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4647.28 metric tons<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4980.34 metric tons<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4904.75 metric tons<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 3985.56 metric tons<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 3625.47 metric tons<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 3216.47 metric tons<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 3216.45 metric tons<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4926.25 metric tons<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 5368.36 metric tons<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 5200.02 metric tons<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4792.88 metric tons<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4301.36 metric tons<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4209.62 metric tons<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4077.2 metric tons<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4798.47 metric tons<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4790.79 metric tons<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Cobalt production: 4788.63 metric tons<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [980, 980, 979.99999999999989, 980, 980, 979.99999999999989, 979.99999999999989, 980.00000000000011, 980.00000000000011, 980, 980, 979.99999999999989, 980.00000000000011, 980.00000000000011, 999.99999999999989, 1399.9999999999998, 1099.9999999999998, 1100, 1100],
      "text": ["Cobalt production: 980 metric tons<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 980 metric tons<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1000 metric tons<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1400 metric tons<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1100 metric tons<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1100 metric tons<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Cobalt production: 1100 metric tons<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [1300, 1400, 1400, 1099.9999999999998, 1400, 2631, 2075.0000000000005, 3139, 3623, 3900, 3499.9999999999995, 3827.9999999999995, 2771, 851.99999999999989, 184.99999999999997, 107.5, 30, 30, 29.999999999999996],
      "text": ["Cobalt production: 1300 metric tons<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 1400 metric tons<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 1400 metric tons<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 1100 metric tons<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 1400 metric tons<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 2631 metric tons<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 2075 metric tons<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3139 metric tons<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3623 metric tons<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3900 metric tons<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3500 metric tons<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 3828 metric tons<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 2771 metric tons<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 852 metric tons<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 185 metric tons<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 107.5 metric tons<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 30 metric tons<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 30 metric tons<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Cobalt production: 30 metric tons<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [100, 100, 100, 700, 800, 1200, 1500, 2200, 2200.0000000000005, 2600, 2800, 4600, 4300, 4000, 4600, 4749.9999999999991, 5100, 5100, 5100],
      "text": ["Cobalt production: 100 metric tons<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 100 metric tons<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 100 metric tons<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 700 metric tons<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 800 metric tons<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 1200 metric tons<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 1500 metric tons<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 2200 metric tons<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 2200 metric tons<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 2600 metric tons<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 2800 metric tons<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4600 metric tons<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4300 metric tons<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4000 metric tons<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4600 metric tons<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 4750 metric tons<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 5100 metric tons<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 5100 metric tons<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Cobalt production: 5100 metric tons<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [361.34037330536142, 322.54670425158264, 301.52835286532974, 262.98831543300679, 251.52318897059297, 234.2256997829063, 168.57360287236895, 211.15937809850828, 203.17056452443202, 172.03130783889094, 214.65078908459543, 260.34162267049328, 271.88450864612076, 226.57065107836993, 230.30782824519994, 208.60297461146652, 199.59070532411911, 199.41709938546239, 199.28172087135161],
      "text": ["Cobalt production: 361.34 metric tons<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 322.55 metric tons<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 301.53 metric tons<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 262.99 metric tons<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 251.52 metric tons<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 234.23 metric tons<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 168.57 metric tons<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 211.16 metric tons<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 203.17 metric tons<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 172.03 metric tons<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 214.65 metric tons<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 260.34 metric tons<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 271.88 metric tons<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 226.57 metric tons<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 230.31 metric tons<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 208.6 metric tons<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 199.59 metric tons<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 199.42 metric tons<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Cobalt production: 199.28 metric tons<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [6099.9999999999991, 6000, 6300, 6300, 6300, 6199.9999999999991, 6100, 6200, 6100, 6300, 6300, 6300.0000000000009, 6200, 5499.9999999999991, 5900, 6100, 6300, 6300.0000000000009, 6299.9999999999991],
      "text": ["Cobalt production: 6100 metric tons<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6000 metric tons<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6200 metric tons<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6100 metric tons<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6200 metric tons<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6100 metric tons<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6200 metric tons<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 5500 metric tons<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 5900 metric tons<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6100 metric tons<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Cobalt production: 6300 metric tons<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [25, 25, 24.999999999999996, 25, 25, 24.999999999999996, 24.999999999999996, 24.999999999999996, 25.000000000000004, 24.999999999999996, 25, 223.00000000000003, 277, 134, 134, 134.00000000000003, 133.99999999999997, 134, 134],
      "text": ["Cobalt production: 25 metric tons<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 25 metric tons<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 223 metric tons<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 277 metric tons<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Cobalt production: 134 metric tons<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [1299.9999999999998, 1300.0000000000002, 1299.9999999999998, 1300, 1300, 1300, 1200.0000000000002, 1599.9999999999998, 1600, 1700, 1700, 1300, 1300, 1200, 1200, 1200, 1100, 1100, 1100],
      "text": ["Cobalt production: 1300 metric tons<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1200 metric tons<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1600 metric tons<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1600 metric tons<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1700 metric tons<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1700 metric tons<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1300 metric tons<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1200 metric tons<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1200 metric tons<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1200 metric tons<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1100 metric tons<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1100 metric tons<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Cobalt production: 1100 metric tons<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [27.953885489229869, 28.656049489950981, 27.281177055706223, 27.449106508202405, 27.85674141164812, 29.216200443064974, 29.465732577914665, 31.556602007891147, 32.500912585294543, 32.004816110011042, 65.578601648382175, 134.63279184599841, 157.76158853298145, 139.8544653437001, 208.93921318084955, 207.86558023465119, 186.4937275301609, 188.52442186199602, 190.5345452867825],
      "text": ["Cobalt production: 27.95 metric tons<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 28.66 metric tons<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 27.28 metric tons<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 27.45 metric tons<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 27.86 metric tons<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 29.22 metric tons<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 29.47 metric tons<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 31.56 metric tons<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 32.5 metric tons<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 32 metric tons<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 65.58 metric tons<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 134.63 metric tons<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 157.76 metric tons<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 139.85 metric tons<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 208.94 metric tons<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 207.87 metric tons<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 186.49 metric tons<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 188.52 metric tons<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Cobalt production: 190.53 metric tons<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [282.86757957504295, 322.67644616230643, 320.09581635530697, 297.69685683755091, 295.15751141816662, 331.32599714163018, 424.34317693538344, 594.14994378203448, 409.51427825505368, 338.85484544832337, 372.72298827092169, 396.04632972797538, 272.89670901402485, 287.55085648042882, 407.95999940742581, 402.40637322586264, 397.36435114829936, 392.74091738465978, 388.1312492647923],
      "text": ["Cobalt production: 282.87 metric tons<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Cobalt production: 322.68 metric tons<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Cobalt production: 320.1 metric tons<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 297.7 metric tons<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 295.16 metric tons<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 331.33 metric tons<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 424.34 metric tons<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 594.15 metric tons<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 409.51 metric tons<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 338.85 metric tons<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 372.72 metric tons<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 396.05 metric tons<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 272.9 metric tons<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 287.55 metric tons<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 407.96 metric tons<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 402.41 metric tons<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 397.36 metric tons<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 392.74 metric tons<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Cobalt production: 388.13 metric tons<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [99.999999999999986, 100, 100, 100.00000000000001, 100, 100, 100.00000000000001, 100, 100, 100, 100, 100, 100.00000000000001, 100, 219.99999999999997, 259.00000000000006, 120.00000000000001, 119.99999999999999, 120],
      "text": ["Cobalt production: 100 metric tons<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 100 metric tons<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 220 metric tons<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 259 metric tons<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 120 metric tons<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 120 metric tons<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Cobalt production: 120 metric tons<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [119.99999999999999, 119.99999999999999, 120.00000000000001, 119.99999999999999, 120, 119.99999999999999, 120, 119.99999999999999, 120.00000000000001, 120, 120, 120, 760, 690, 640, 480, 500, 499.99999999999994, 499.99999999999994],
      "text": ["Cobalt production: 120 metric tons<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 120 metric tons<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 760 metric tons<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 690 metric tons<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 640 metric tons<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 480 metric tons<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 500 metric tons<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 500 metric tons<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Cobalt production: 500 metric tons<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [14800.000000000002, 20199.999999999996, 24500, 27100.000000000004, 25300.000000000004, 32300, 40000, 60000, 60000, 51000, 56000, 62000, 72000, 68000, 80000, 104000, 100000, 100000, 100000.00000000001],
      "text": ["Cobalt production: 14800 metric tons<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 20200 metric tons<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 24500 metric tons<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 27100 metric tons<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 25300 metric tons<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 32300 metric tons<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 40000 metric tons<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 60000 metric tons<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 60000 metric tons<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 51000 metric tons<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 56000 metric tons<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 62000 metric tons<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 72000 metric tons<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 68000 metric tons<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 80000 metric tons<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 104000 metric tons<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 1e+05 metric tons<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 1e+05 metric tons<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Cobalt production: 1e+05 metric tons<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [479.99999999999994, 610, 620.00000000000011, 600, 600, 590, 610, 1800, 1599.9999999999998, 2500, 3000, 2999.9999999999995, 3000.0000000000005, 2300.0000000000005, 2300, 2300, 2100, 2100, 2100],
      "text": ["Cobalt production: 480 metric tons<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 610 metric tons<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 620 metric tons<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 600 metric tons<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 600 metric tons<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 590 metric tons<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 610 metric tons<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 1800 metric tons<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 1600 metric tons<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2500 metric tons<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 3000 metric tons<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 3000 metric tons<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 3000 metric tons<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2300 metric tons<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2300 metric tons<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2300 metric tons<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2100 metric tons<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2100 metric tons<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Cobalt production: 2100 metric tons<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [684.19195776293418, 1231.5493416118256, 2052.6359497498388, 1798.5275283019002, 1954.9353879621165, 6480.7961123939622, 5865.3916194865451, 6237.1194322601623, 6647.9450862595868, 6843.5796471773938, 2542.0063389387201, 2737.5922663535889, 2542.0675226608159, 2248.8209342598784, 2444.4881577057763, 1955.6144753030135, 2444.5065309536876, 2444.5843436028699, 2444.68744582728],
      "text": ["Cobalt production: 684.19 metric tons<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 1231.55 metric tons<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2052.64 metric tons<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 1798.53 metric tons<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 1954.94 metric tons<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 6480.8 metric tons<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 5865.39 metric tons<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 6237.12 metric tons<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 6647.95 metric tons<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 6843.58 metric tons<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2542.01 metric tons<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2737.59 metric tons<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2542.07 metric tons<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2248.82 metric tons<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2444.49 metric tons<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 1955.61 metric tons<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2444.51 metric tons<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2444.58 metric tons<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Cobalt production: 2444.69 metric tons<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [99.498306949143128, 99.496319309190923, 99.494608499862693, 99.49193682126328, 114.41293043011012, 104.46167253297496, 26.861005653333585, 139.27624214394396, 497.4270435621807, 631.74777676382371, 746.17635809186402, 766.09051326897747, 437.77331671085562, 686.5181270769308, 994.96557585369442, 1370.0767408642644, 1446.6976120452432, 1446.7080411860625, 1446.7230653588292],
      "text": ["Cobalt production: 99.5 metric tons<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 99.5 metric tons<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 99.49 metric tons<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 99.49 metric tons<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 114.41 metric tons<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 104.46 metric tons<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 26.86 metric tons<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 139.28 metric tons<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 497.43 metric tons<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 631.75 metric tons<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 746.18 metric tons<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 766.09 metric tons<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 437.77 metric tons<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 686.52 metric tons<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 994.97 metric tons<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 1370.08 metric tons<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 1446.7 metric tons<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 1446.71 metric tons<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Cobalt production: 1446.72 metric tons<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "text": ["Cobalt production: 0 metric tons<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Cobalt production: 0 metric tons<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "l": 53.333333333333343
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Cobalt production (REMIND_54)",
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
      "range": [0, 104000],
      "tickmode": "array",
      "ticktext": ["0", "25000", "50000", "75000", "100000"],
      "tickvals": [0, 25000.000000000004, 50000, 75000, 100000],
      "categoryorder": "array",
      "categoryarray": ["0", "25000", "50000", "75000", "100000"],
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
        "text": "metric tons",
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
    "b55c6c7c4dd5": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c543f130c": {
      "y": {}
    }
  },
  "cur_data": "b55c6c7c4dd5",
  "visdat": {
    "b55c6c7c4dd5": ["function (y) ", "x"],
    "b55c543f130c": ["function (y) ", "x"]
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

  
