(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_54_Trade_Exports___goods_and_services_line') 

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
      "y": [25.93, 23.850000000000001, 23.25, 23.030000000000001, 22.66, 22.060000000000002, 19.559999999999995, 18.93, 18.449999999999999, 16.239999999999998, 14.619999999999999, 14.409999999999998, 10.710000000000003, 12.529999999999999, 11.32, 14.44, 17.920000000000002, 16.609999999999996, 18.030000000000005],
      "text": ["Exports - goods and services: 25.93 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 23.85 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 23.25 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 23.03 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 22.66 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 22.06 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 19.56 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 18.93 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 18.45 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 16.24 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 14.62 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 14.41 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 10.71 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 12.53 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 11.32 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 14.44 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 17.92 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 16.61 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ARG<br>Countries in region: Argentina", "Exports - goods and services: 18.03 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ARG<br>Countries in region: Argentina"],
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
      "y": [47.149466952539996, 50.584969742666864, 52.952762419802177, 55.592571941105653, 60.417419327432633, 62.224243426899271, 57.644622202667499, 64.330992671206118, 65.990832930562277, 67.28669318096668, 71.34891471029789, 64.811024807667408, 63.364219846821733, 66.078286691591686, 65.548375855097618, 66.631200473291415, 66.033880339267029, 63.050572676756452, 69.98064771384017],
      "text": ["Exports - goods and services: 47.15 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 50.58 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 52.95 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 55.59 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 60.42 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 62.22 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 57.64 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 64.33 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 65.99 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 67.29 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 71.35 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 64.81 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 63.36 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 66.08 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 65.55 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 66.63 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 66.03 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 63.05 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Exports - goods and services: 69.98 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [30.629564921270831, 32.620407593327904, 33.675439442667923, 34.739223022224422, 33.907192632473418, 33.845858067624889, 27.951378321159336, 31.452210678408392, 33.583701658497297, 32.085435837812014, 30.435801981850531, 28.277838677052916, 25.885873805076056, 25.3087526116737, 25.989647594235723, 26.114514532312235, 25.895522493939477, 23.509045339546837, 26.849598250253841],
      "text": ["Exports - goods and services: 30.63 % (GDP)<br>Period: 2003<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 32.62 % (GDP)<br>Period: 2004<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 33.68 % (GDP)<br>Period: 2005<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 34.74 % (GDP)<br>Period: 2006<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 33.91 % (GDP)<br>Period: 2007<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 33.85 % (GDP)<br>Period: 2008<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 27.95 % (GDP)<br>Period: 2009<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 31.45 % (GDP)<br>Period: 2010<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 33.58 % (GDP)<br>Period: 2011<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 32.09 % (GDP)<br>Period: 2012<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 30.44 % (GDP)<br>Period: 2013<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 28.28 % (GDP)<br>Period: 2014<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 25.89 % (GDP)<br>Period: 2015<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 25.31 % (GDP)<br>Period: 2016<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 25.99 % (GDP)<br>Period: 2017<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 26.11 % (GDP)<br>Period: 2018<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 25.9 % (GDP)<br>Period: 2019<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 23.51 % (GDP)<br>Period: 2020<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Exports - goods and services: 26.85 % (GDP)<br>Period: 2021<br>REMIND_54 region code: OLA<br>Countries in region: Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [21.800000000000001, 28.23, 30.34, 29.949999999999999, 30.250000000000004, 33.039999999999999, 24.960000000000004, 21.350000000000001, 20.57, 16.399999999999999, 17.02, 14.24, 13.18, 10.35, 15.009999999999998, 17.98, 16.640000000000001, 12.470000000000001, 10.56],
      "text": ["Exports - goods and services: 21.8 % (GDP)<br>Period: 2003<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 28.23 % (GDP)<br>Period: 2004<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 30.34 % (GDP)<br>Period: 2005<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 29.95 % (GDP)<br>Period: 2006<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 30.25 % (GDP)<br>Period: 2007<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 33.04 % (GDP)<br>Period: 2008<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 24.96 % (GDP)<br>Period: 2009<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 21.35 % (GDP)<br>Period: 2010<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 20.57 % (GDP)<br>Period: 2011<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 16.4 % (GDP)<br>Period: 2012<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 17.02 % (GDP)<br>Period: 2013<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 14.24 % (GDP)<br>Period: 2014<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 13.18 % (GDP)<br>Period: 2015<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 10.35 % (GDP)<br>Period: 2016<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 15.01 % (GDP)<br>Period: 2017<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 17.98 % (GDP)<br>Period: 2018<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 16.64 % (GDP)<br>Period: 2019<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 12.47 % (GDP)<br>Period: 2020<br>REMIND_54 region code: EGY<br>Countries in region: Egypt", "Exports - goods and services: 10.56 % (GDP)<br>Period: 2021<br>REMIND_54 region code: EGY<br>Countries in region: Egypt"],
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
      "y": [36.870000000000005, 37.329999999999998, 36.859999999999999, 35.399999999999999, 34.229999999999997, 34.399999999999999, 28.52, 29.170000000000002, 30.68, 30.350000000000001, 30.329999999999995, 31.739999999999995, 31.850000000000001, 31.499999999999996, 31.449999999999999, 32.329999999999998, 32.350000000000001, 29.68, 30.909999999999997],
      "text": ["Exports - goods and services: 36.87 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 37.33 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 36.86 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 35.4 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 34.23 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 34.4 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 28.52 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 29.17 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 30.68 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 30.35 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 30.33 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 31.74 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 31.85 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 31.5 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 31.45 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 32.33 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 32.35 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 29.68 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CAN<br>Countries in region: Canada", "Exports - goods and services: 30.91 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CAN<br>Countries in region: Canada"],
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
      "y": [20.896195403758373, 19.274773421876635, 19.940469320612689, 21.524271120780057, 21.729098442001693, 22.150353213734949, 23.956691960435879, 21.526435929589105, 22.909728061336054, 22.695240393561619, 21.410947544693979, 22.209981450013807, 21.34931518115042, 20.473497949369523, 22.271003743390718, 22.856148402303038, 24.670643201533686, 23.634136536554092, 22.091616909242575],
      "text": ["Exports - goods and services: 20.9 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 19.27 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 19.94 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 21.52 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 21.73 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 22.15 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 23.96 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 21.53 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 22.91 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 22.7 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 21.41 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 22.21 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 21.35 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 20.47 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 22.27 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 22.86 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 24.67 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 23.63 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - goods and services: 22.09 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [24.359999999999999, 25.839999999999996, 26.23, 27.329999999999998, 27.530000000000001, 27.699999999999996, 27.149999999999999, 29.700000000000003, 31.039999999999999, 32.270000000000003, 31.309999999999999, 31.870000000000001, 34.520000000000003, 37.040000000000006, 37.649999999999999, 39.259999999999998, 38.82, 39.490000000000009, 41.100000000000001],
      "text": ["Exports - goods and services: 24.36 % (GDP)<br>Period: 2003<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 25.84 % (GDP)<br>Period: 2004<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 26.23 % (GDP)<br>Period: 2005<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 27.33 % (GDP)<br>Period: 2006<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 27.53 % (GDP)<br>Period: 2007<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 27.7 % (GDP)<br>Period: 2008<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 27.15 % (GDP)<br>Period: 2009<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 29.7 % (GDP)<br>Period: 2010<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 31.04 % (GDP)<br>Period: 2011<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 32.27 % (GDP)<br>Period: 2012<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 31.31 % (GDP)<br>Period: 2013<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 31.87 % (GDP)<br>Period: 2014<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 34.52 % (GDP)<br>Period: 2015<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 37.04 % (GDP)<br>Period: 2016<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 37.65 % (GDP)<br>Period: 2017<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 39.26 % (GDP)<br>Period: 2018<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 38.82 % (GDP)<br>Period: 2019<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 39.49 % (GDP)<br>Period: 2020<br>REMIND_54 region code: MEX<br>Countries in region: Mexico", "Exports - goods and services: 41.1 % (GDP)<br>Period: 2021<br>REMIND_54 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [39.670000000000002, 41.109999999999999, 43.440000000000005, 44.539999999999999, 42.960000000000001, 46.220000000000006, 39.810000000000002, 40.149999999999999, 41.659999999999997, 41.289999999999999, 39.859999999999999, 39.729999999999997, 38.579999999999998, 35.939999999999998, 36.729999999999997, 38.219999999999999, 36.640000000000001, 32.210000000000001, 41.740000000000002],
      "text": ["Exports - goods and services: 39.67 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 41.11 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 43.44 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 44.54 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 42.96 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 46.22 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 39.81 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 40.15 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 41.66 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 41.29 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 39.86 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 39.73 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 38.58 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 35.94 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 36.73 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 38.22 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 36.64 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 32.21 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Exports - goods and services: 41.74 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [15.18, 16.550000000000001, 15.239999999999998, 14.369999999999997, 13.33, 13.529999999999999, 10.85, 10.869999999999997, 11.580000000000002, 11.880000000000001, 11.739999999999998, 11.01, 12.899999999999999, 12.470000000000001, 12.52, 14.630000000000003, 14.119999999999999, 16.449999999999999, 19.559999999999995],
      "text": ["Exports - goods and services: 15.18 % (GDP)<br>Period: 2003<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 16.55 % (GDP)<br>Period: 2004<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 15.24 % (GDP)<br>Period: 2005<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 14.37 % (GDP)<br>Period: 2006<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 13.33 % (GDP)<br>Period: 2007<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 13.53 % (GDP)<br>Period: 2008<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 10.85 % (GDP)<br>Period: 2009<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 10.87 % (GDP)<br>Period: 2010<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 11.58 % (GDP)<br>Period: 2011<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 11.88 % (GDP)<br>Period: 2012<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 11.74 % (GDP)<br>Period: 2013<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 11.01 % (GDP)<br>Period: 2014<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 12.9 % (GDP)<br>Period: 2015<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 12.47 % (GDP)<br>Period: 2016<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 12.52 % (GDP)<br>Period: 2017<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 14.63 % (GDP)<br>Period: 2018<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 14.12 % (GDP)<br>Period: 2019<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 16.45 % (GDP)<br>Period: 2020<br>REMIND_54 region code: BRA<br>Countries in region: Brazil", "Exports - goods and services: 19.56 % (GDP)<br>Period: 2021<br>REMIND_54 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [43.847693057452176, 48.322614459976243, 41.929669259937725, 39.176665715961533, 37.953436903185505, 38.8675730345483, 37.881347872847492, 41.331658979991268, 44.056998848062712, 43.119928165456791, 41.032417355667263, 44.993295653187673, 48.130499744478961, 46.600594623763953, 46.833661826983096, 45.346362685038535, 43.019745772895142, 39.082745088181085, 42.670988844861434],
      "text": ["Exports - goods and services: 43.85 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 48.32 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 41.93 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 39.18 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 37.95 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 38.87 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 37.88 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Exports - goods and services: 41.33 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Exports - goods and services: 44.06 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 43.12 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 41.03 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 44.99 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 48.13 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 46.6 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 46.83 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 45.35 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 43.02 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 39.08 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Exports - goods and services: 42.67 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [31.400000000000002, 36.75, 35.280000000000008, 35.630000000000003, 37.390000000000001, 47.640000000000001, 45.189999999999998, 47.100000000000001, 53.340000000000003, 54.089999999999996, 51.289999999999999, 47.829999999999991, 42.990000000000002, 40.130000000000003, 40.93, 41.710000000000001, 39.280000000000001, 36.359999999999999, 42.039999999999999],
      "text": ["Exports - goods and services: 31.4 % (GDP)<br>Period: 2003<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 36.75 % (GDP)<br>Period: 2004<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 35.28 % (GDP)<br>Period: 2005<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 35.63 % (GDP)<br>Period: 2006<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 37.39 % (GDP)<br>Period: 2007<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 47.64 % (GDP)<br>Period: 2008<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 45.19 % (GDP)<br>Period: 2009<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 47.1 % (GDP)<br>Period: 2010<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 53.34 % (GDP)<br>Period: 2011<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 54.09 % (GDP)<br>Period: 2012<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 51.29 % (GDP)<br>Period: 2013<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 47.83 % (GDP)<br>Period: 2014<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 42.99 % (GDP)<br>Period: 2015<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 40.13 % (GDP)<br>Period: 2016<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 40.93 % (GDP)<br>Period: 2017<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 41.71 % (GDP)<br>Period: 2018<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 39.28 % (GDP)<br>Period: 2019<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 36.36 % (GDP)<br>Period: 2020<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of", "Exports - goods and services: 42.04 % (GDP)<br>Period: 2021<br>REMIND_54 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [42.310000000000002, 41.829999999999998, 41.229999999999997, 41.25, 38.009999999999998, 33.359999999999999, 30.220000000000002, 32.869999999999997, 29.109999999999999, 27.470000000000002, 26.18, 27.350000000000005, 27.210000000000004, 26.670000000000002, 29.549999999999997, 30.210000000000001, 28.379999999999999, 25.199999999999999, 25.75],
      "text": ["Exports - goods and services: 42.31 % (GDP)<br>Period: 2003<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 41.83 % (GDP)<br>Period: 2004<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 41.23 % (GDP)<br>Period: 2005<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 41.25 % (GDP)<br>Period: 2006<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 38.01 % (GDP)<br>Period: 2007<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 33.36 % (GDP)<br>Period: 2008<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 30.22 % (GDP)<br>Period: 2009<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 32.87 % (GDP)<br>Period: 2010<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 29.11 % (GDP)<br>Period: 2011<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 27.47 % (GDP)<br>Period: 2012<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 26.18 % (GDP)<br>Period: 2013<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 27.35 % (GDP)<br>Period: 2014<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 27.21 % (GDP)<br>Period: 2015<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 26.67 % (GDP)<br>Period: 2016<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 29.55 % (GDP)<br>Period: 2017<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 30.21 % (GDP)<br>Period: 2018<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 28.38 % (GDP)<br>Period: 2019<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 25.2 % (GDP)<br>Period: 2020<br>REMIND_54 region code: PHL<br>Countries in region: Philippines", "Exports - goods and services: 25.75 % (GDP)<br>Period: 2021<br>REMIND_54 region code: PHL<br>Countries in region: Philippines"],
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
      "y": [45.57357211283248, 48.186255999090477, 46.728190375789843, 47.027491706918305, 47.699692554808813, 49.113085760488886, 40.162601455129106, 36.480136213769484, 41.374312628835426, 38.352275113531697, 33.08382466663592, 31.08839948677668, 27.290643345620463, 28.405078593503255, 32.439702350125344, 36.451631878651902, 35.697730145022518, 30.53685709963673, 34.099154533727891],
      "text": ["Exports - goods and services: 45.57 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - goods and services: 48.19 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - goods and services: 46.73 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - goods and services: 47.03 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - goods and services: 47.7 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - goods and services: 49.11 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - goods and services: 40.16 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - goods and services: 36.48 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - goods and services: 41.37 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - goods and services: 38.35 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - goods and services: 33.08 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - goods and services: 31.09 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - goods and services: 27.29 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - goods and services: 28.41 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - goods and services: 32.44 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - goods and services: 36.45 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - goods and services: 35.7 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - goods and services: 30.54 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - goods and services: 34.1 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [16.579999999999998, 16.77, 16.969999999999999, 17.73, 16.43, 18.109999999999999, 16.420000000000002, 16.34, 19.280000000000001, 18.809999999999999, 18.09, 16.629999999999999, 15.649999999999999, 14.720000000000001, 15.15, 15.899999999999999, 15.870000000000001, 13.529999999999999, 16.329999999999998],
      "text": ["Exports - goods and services: 16.58 % (GDP)<br>Period: 2003<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 16.77 % (GDP)<br>Period: 2004<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 16.97 % (GDP)<br>Period: 2005<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 17.73 % (GDP)<br>Period: 2006<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 16.43 % (GDP)<br>Period: 2007<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 18.11 % (GDP)<br>Period: 2008<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 16.42 % (GDP)<br>Period: 2009<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 16.34 % (GDP)<br>Period: 2010<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 19.28 % (GDP)<br>Period: 2011<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 18.81 % (GDP)<br>Period: 2012<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 18.09 % (GDP)<br>Period: 2013<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 16.63 % (GDP)<br>Period: 2014<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 15.65 % (GDP)<br>Period: 2015<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 14.72 % (GDP)<br>Period: 2016<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 15.15 % (GDP)<br>Period: 2017<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 15.9 % (GDP)<br>Period: 2018<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 15.87 % (GDP)<br>Period: 2019<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 13.53 % (GDP)<br>Period: 2020<br>REMIND_54 region code: COL<br>Countries in region: Colombia", "Exports - goods and services: 16.33 % (GDP)<br>Period: 2021<br>REMIND_54 region code: COL<br>Countries in region: Colombia"],
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
      "y": [24.313915433892483, 25.880264130185449, 27.127353932914183, 26.225330841638254, 26.857456656828631, 27.614615763824958, 24.573471887932453, 26.303650711786002, 28.213130426681271, 27.972727302098136, 25.685208023616468, 25.562163947309752, 23.484174775977614, 23.045260823834031, 24.606420780805564, 25.70959899774374, 25.104871832064042, 22.021023670934493, 24.178480306705719],
      "text": ["Exports - goods and services: 24.31 % (GDP)<br>Period: 2003<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 25.88 % (GDP)<br>Period: 2004<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 27.13 % (GDP)<br>Period: 2005<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 26.23 % (GDP)<br>Period: 2006<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 26.86 % (GDP)<br>Period: 2007<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 27.61 % (GDP)<br>Period: 2008<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 24.57 % (GDP)<br>Period: 2009<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 26.3 % (GDP)<br>Period: 2010<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 28.21 % (GDP)<br>Period: 2011<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 27.97 % (GDP)<br>Period: 2012<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 25.69 % (GDP)<br>Period: 2013<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 25.56 % (GDP)<br>Period: 2014<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 23.48 % (GDP)<br>Period: 2015<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 23.05 % (GDP)<br>Period: 2016<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 24.61 % (GDP)<br>Period: 2017<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 25.71 % (GDP)<br>Period: 2018<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 25.1 % (GDP)<br>Period: 2019<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 22.02 % (GDP)<br>Period: 2020<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - goods and services: 24.18 % (GDP)<br>Period: 2021<br>REMIND_54 region code: AFC_other<br>Countries in region: Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [35.25, 34.419999999999995, 35.200000000000003, 33.729999999999997, 30.16, 31.309999999999995, 27.939999999999998, 29.219999999999995, 28.060000000000002, 26.91, 25.850000000000001, 27.109999999999999, 28.700000000000003, 25.850000000000001, 26.090000000000003, 30.790000000000003, 28.43, 25.52, 29.890000000000001],
      "text": ["Exports - goods and services: 35.25 % (GDP)<br>Period: 2003<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 34.42 % (GDP)<br>Period: 2004<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 35.2 % (GDP)<br>Period: 2005<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 33.73 % (GDP)<br>Period: 2006<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 30.16 % (GDP)<br>Period: 2007<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 31.31 % (GDP)<br>Period: 2008<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 27.94 % (GDP)<br>Period: 2009<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 29.22 % (GDP)<br>Period: 2010<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 28.06 % (GDP)<br>Period: 2011<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 26.91 % (GDP)<br>Period: 2012<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 25.85 % (GDP)<br>Period: 2013<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 27.11 % (GDP)<br>Period: 2014<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 28.7 % (GDP)<br>Period: 2015<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 25.85 % (GDP)<br>Period: 2016<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 26.09 % (GDP)<br>Period: 2017<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 30.79 % (GDP)<br>Period: 2018<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 28.43 % (GDP)<br>Period: 2019<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 25.52 % (GDP)<br>Period: 2020<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation", "Exports - goods and services: 29.89 % (GDP)<br>Period: 2021<br>REMIND_54 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [15.956504717067313, 17.052266358672828, 15.18661847399922, 14.493773968814471, 13.932794609470161, 13.703024500885013, 13.251778808952789, 10.42815567083009, 8.6758900663668115, 9.534502651369305, 10.113240429748345, 10.825380384840138, 10.838239005915332, 8.7386197893150204, 8.3939977103896322, 8.4259220342913643, 8.4656942540099536, 7.4016832769605641, 5.8046858294877719],
      "text": ["Exports - goods and services: 15.96 % (GDP)<br>Period: 2003<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - goods and services: 17.05 % (GDP)<br>Period: 2004<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - goods and services: 15.19 % (GDP)<br>Period: 2005<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - goods and services: 14.49 % (GDP)<br>Period: 2006<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - goods and services: 13.93 % (GDP)<br>Period: 2007<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - goods and services: 13.7 % (GDP)<br>Period: 2008<br>REMIND_54 region code: OAS_other<br>Countries in region: Nepal; Afghanistan; Bhutan", "Exports - goods and services: 13.25 % (GDP)<br>Period: 2009<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 10.43 % (GDP)<br>Period: 2010<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 8.68 % (GDP)<br>Period: 2011<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 9.53 % (GDP)<br>Period: 2012<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 10.11 % (GDP)<br>Period: 2013<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 10.83 % (GDP)<br>Period: 2014<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 10.84 % (GDP)<br>Period: 2015<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 8.74 % (GDP)<br>Period: 2016<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 8.39 % (GDP)<br>Period: 2017<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 8.43 % (GDP)<br>Period: 2018<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 8.47 % (GDP)<br>Period: 2019<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 7.4 % (GDP)<br>Period: 2020<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan", "Exports - goods and services: 5.8 % (GDP)<br>Period: 2021<br>REMIND_54 region code: OAS_other<br>Countries in region: Afghanistan; Nepal; Bhutan"],
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
      "y": [56.670000000000002, 59.72999999999999, 63.699999999999996, 67.720000000000013, 70.519999999999996, 70.340000000000003, 62.609999999999992, 54.179999999999993, 61.180000000000007, 63.469999999999992, 66.799999999999997, 69.599999999999994, 72.920000000000002, 74.109999999999999, 81.760000000000005, 84.420000000000016, 85.159999999999982, 84.379999999999981, 93.290000000000006],
      "text": ["Exports - goods and services: 56.67 % (GDP)<br>Period: 2003<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 59.73 % (GDP)<br>Period: 2004<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 63.7 % (GDP)<br>Period: 2005<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 67.72 % (GDP)<br>Period: 2006<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 70.52 % (GDP)<br>Period: 2007<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 70.34 % (GDP)<br>Period: 2008<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 62.61 % (GDP)<br>Period: 2009<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 54.18 % (GDP)<br>Period: 2010<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 61.18 % (GDP)<br>Period: 2011<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 63.47 % (GDP)<br>Period: 2012<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 66.8 % (GDP)<br>Period: 2013<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 69.6 % (GDP)<br>Period: 2014<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 72.92 % (GDP)<br>Period: 2015<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 74.11 % (GDP)<br>Period: 2016<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 81.76 % (GDP)<br>Period: 2017<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 84.42 % (GDP)<br>Period: 2018<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 85.16 % (GDP)<br>Period: 2019<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 84.38 % (GDP)<br>Period: 2020<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam", "Exports - goods and services: 93.29 % (GDP)<br>Period: 2021<br>REMIND_54 region code: VNM<br>Countries in region: Viet Nam"],
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
      "y": [15.169999999999998, 14.240000000000002, 14.31, 14.130000000000001, 13.209999999999999, 12.380000000000001, 12.4, 13.52, 13.970000000000001, 12.4, 13.279999999999999, 12.239999999999998, 10.600000000000001, 8.7400000000000002, 8.2200000000000024, 8.5800000000000001, 9.3900000000000006, 9.2999999999999989, 9.0600000000000023],
      "text": ["Exports - goods and services: 15.17 % (GDP)<br>Period: 2003<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 14.24 % (GDP)<br>Period: 2004<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 14.31 % (GDP)<br>Period: 2005<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 14.13 % (GDP)<br>Period: 2006<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 13.21 % (GDP)<br>Period: 2007<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 12.38 % (GDP)<br>Period: 2008<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 12.4 % (GDP)<br>Period: 2009<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 13.52 % (GDP)<br>Period: 2010<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 13.97 % (GDP)<br>Period: 2011<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 12.4 % (GDP)<br>Period: 2012<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 13.28 % (GDP)<br>Period: 2013<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 12.24 % (GDP)<br>Period: 2014<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 10.6 % (GDP)<br>Period: 2015<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 8.74 % (GDP)<br>Period: 2016<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 8.22 % (GDP)<br>Period: 2017<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 8.58 % (GDP)<br>Period: 2018<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 9.39 % (GDP)<br>Period: 2019<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 9.3 % (GDP)<br>Period: 2020<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan", "Exports - goods and services: 9.06 % (GDP)<br>Period: 2021<br>REMIND_54 region code: PAK<br>Countries in region: Pakistan"],
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
      "y": [11.43, 11.15, 14.390000000000001, 16.350000000000001, 17, 17.66, 16.940000000000001, 16.02, 19.920000000000002, 20.16, 19.539999999999999, 18.989999999999998, 17.34, 13.919999999999998, 12.820000000000002, 12.670000000000002, 13.089999999999998, 10.439999999999998, 10.659999999999998],
      "text": ["Exports - goods and services: 11.43 % (GDP)<br>Period: 2003<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 11.15 % (GDP)<br>Period: 2004<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 14.39 % (GDP)<br>Period: 2005<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 16.35 % (GDP)<br>Period: 2006<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 17 % (GDP)<br>Period: 2007<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 17.66 % (GDP)<br>Period: 2008<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 16.94 % (GDP)<br>Period: 2009<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 16.02 % (GDP)<br>Period: 2010<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 19.92 % (GDP)<br>Period: 2011<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 20.16 % (GDP)<br>Period: 2012<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 19.54 % (GDP)<br>Period: 2013<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 18.99 % (GDP)<br>Period: 2014<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 17.34 % (GDP)<br>Period: 2015<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 13.92 % (GDP)<br>Period: 2016<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 12.82 % (GDP)<br>Period: 2017<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 12.67 % (GDP)<br>Period: 2018<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 13.09 % (GDP)<br>Period: 2019<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 10.44 % (GDP)<br>Period: 2020<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh", "Exports - goods and services: 10.66 % (GDP)<br>Period: 2021<br>REMIND_54 region code: BGD<br>Countries in region: Bangladesh"],
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
      "y": [30.479999999999997, 32.219999999999999, 34.07, 31.030000000000001, 29.440000000000001, 29.809999999999999, 24.16, 24.299999999999997, 26.329999999999998, 24.59, 23.920000000000002, 23.670000000000002, 21.159999999999997, 19.09, 20.18, 20.999999999999996, 18.59, 17.329999999999998, 21.41],
      "text": ["Exports - goods and services: 30.48 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 32.22 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 34.07 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 31.03 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 29.44 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 29.81 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 24.16 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 24.3 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 26.33 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 24.59 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 23.92 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 23.67 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 21.16 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 19.09 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 20.18 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 21 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 18.59 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 17.33 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia", "Exports - goods and services: 21.41 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [49.408270128435888, 52.731820049449787, 52.67043601570829, 53.498618998937587, 51.425495064529009, 50.521411948659633, 45.234425624800053, 45.551589333687858, 45.321673664238723, 43.207631762007018, 46.543689223101524, 47.665416547052942, 45.932902141671612, 45.699559704039473, 47.743456973732094, 48.827036704706046, 48.847640589183719, 47.81873843007299, 50.386237731149592],
      "text": ["Exports - goods and services: 49.41 % (GDP)<br>Period: 2003<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 52.73 % (GDP)<br>Period: 2004<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 52.67 % (GDP)<br>Period: 2005<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 53.5 % (GDP)<br>Period: 2006<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 51.43 % (GDP)<br>Period: 2007<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 50.52 % (GDP)<br>Period: 2008<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 45.23 % (GDP)<br>Period: 2009<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 45.55 % (GDP)<br>Period: 2010<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 45.32 % (GDP)<br>Period: 2011<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 43.21 % (GDP)<br>Period: 2012<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 46.54 % (GDP)<br>Period: 2013<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 47.67 % (GDP)<br>Period: 2014<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 45.93 % (GDP)<br>Period: 2015<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 45.7 % (GDP)<br>Period: 2016<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 47.74 % (GDP)<br>Period: 2017<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 48.83 % (GDP)<br>Period: 2018<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 48.85 % (GDP)<br>Period: 2019<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 47.82 % (GDP)<br>Period: 2020<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Exports - goods and services: 50.39 % (GDP)<br>Period: 2021<br>REMIND_54 region code: SEA_other<br>Countries in region: Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [61.52000000000001, 65.969999999999999, 68.400000000000006, 68.680000000000007, 68.870000000000005, 71.420000000000002, 64.439999999999998, 66.489999999999995, 70.849999999999994, 68.950000000000003, 67.170000000000002, 68.390000000000001, 67.640000000000001, 67.069999999999993, 66.670000000000002, 64.840000000000003, 59.520000000000003, 51.490000000000002, 58.639999999999993],
      "text": ["Exports - goods and services: 61.52 % (GDP)<br>Period: 2003<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 65.97 % (GDP)<br>Period: 2004<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 68.4 % (GDP)<br>Period: 2005<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 68.68 % (GDP)<br>Period: 2006<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 68.87 % (GDP)<br>Period: 2007<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 71.42 % (GDP)<br>Period: 2008<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 64.44 % (GDP)<br>Period: 2009<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 66.49 % (GDP)<br>Period: 2010<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 70.85 % (GDP)<br>Period: 2011<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 68.95 % (GDP)<br>Period: 2012<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 67.17 % (GDP)<br>Period: 2013<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 68.39 % (GDP)<br>Period: 2014<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 67.64 % (GDP)<br>Period: 2015<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 67.07 % (GDP)<br>Period: 2016<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 66.67 % (GDP)<br>Period: 2017<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 64.84 % (GDP)<br>Period: 2018<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 59.52 % (GDP)<br>Period: 2019<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 51.49 % (GDP)<br>Period: 2020<br>REMIND_54 region code: THA<br>Countries in region: Thailand", "Exports - goods and services: 58.64 % (GDP)<br>Period: 2021<br>REMIND_54 region code: THA<br>Countries in region: Thailand"],
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
      "y": [11.470000000000001, 12.790000000000001, 13.82, 15.66, 17.290000000000003, 17.239999999999998, 12.42, 14.92, 14.770000000000001, 14.41, 15.780000000000001, 17.420000000000002, 17.440000000000001, 16.059999999999999, 17.590000000000003, 18.309999999999995, 17.460000000000001, 15.549999999999999, 18.200000000000003],
      "text": ["Exports - goods and services: 11.47 % (GDP)<br>Period: 2003<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 12.79 % (GDP)<br>Period: 2004<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 13.82 % (GDP)<br>Period: 2005<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 15.66 % (GDP)<br>Period: 2006<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 17.29 % (GDP)<br>Period: 2007<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 17.24 % (GDP)<br>Period: 2008<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 12.42 % (GDP)<br>Period: 2009<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 14.92 % (GDP)<br>Period: 2010<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 14.77 % (GDP)<br>Period: 2011<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 14.41 % (GDP)<br>Period: 2012<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 15.78 % (GDP)<br>Period: 2013<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 17.42 % (GDP)<br>Period: 2014<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 17.44 % (GDP)<br>Period: 2015<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 16.06 % (GDP)<br>Period: 2016<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 17.59 % (GDP)<br>Period: 2017<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 18.31 % (GDP)<br>Period: 2018<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 17.46 % (GDP)<br>Period: 2019<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 15.55 % (GDP)<br>Period: 2020<br>REMIND_54 region code: JPN<br>Countries in region: Japan", "Exports - goods and services: 18.2 % (GDP)<br>Period: 2021<br>REMIND_54 region code: JPN<br>Countries in region: Japan"],
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
      "y": [26.397740730032361, 29.487804936326217, 31.589966200040138, 33.448657670598529, 33.429272081362633, 34.781901476397806, 27.638160484404693, 30.466571746391008, 28.80610225720217, 28.708720533867329, 27.176129954026933, 24.567886663687279, 21.589428945124631, 20.122840769312958, 22.220670751278941, 24.295285825280686, 24.149800420548644, 20.822393759650751, 23.295894046218134],
      "text": ["Exports - goods and services: 26.4 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - goods and services: 29.49 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - goods and services: 31.59 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 33.45 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 33.43 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 34.78 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 27.64 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 30.47 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 28.81 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 28.71 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 27.18 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 24.57 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NAF_other<br>Countries in region: Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 21.59 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 20.12 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 22.22 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 24.3 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 24.15 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 20.82 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - goods and services: 23.3 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NAF_other<br>Countries in region: Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [35.060000000000002, 39.689999999999998, 40.18, 43.869999999999997, 45.130000000000003, 41.159999999999997, 37.119999999999997, 37.900000000000006, 37.689999999999998, 33.850000000000001, 32.090000000000003, 33, 29.190000000000001, 27.920000000000002, 28.329999999999998, 28.530000000000001, 27.839999999999996, 31.300000000000001, 31.98],
      "text": ["Exports - goods and services: 35.06 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 39.69 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 40.18 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 43.87 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 45.13 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 41.16 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 37.12 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 37.9 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 37.69 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 33.85 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 32.09 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 33 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 29.19 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 27.92 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 28.33 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 28.53 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 27.84 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 31.3 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CHL<br>Countries in region: Chile", "Exports - goods and services: 31.98 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CHL<br>Countries in region: Chile"],
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
      "y": [23.009999999999998, 23.620000000000001, 21.879999999999999, 22.390000000000001, 21.890000000000001, 23.57, 23.370000000000001, 21.190000000000001, 22.989999999999998, 24.360000000000003, 23.789999999999999, 25.210000000000001, 24.530000000000001, 23.079999999999998, 26.039999999999996, 31.150000000000002, 32.530000000000008, 28.729999999999997, 35.300000000000004],
      "text": ["Exports - goods and services: 23.01 % (GDP)<br>Period: 2003<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 23.62 % (GDP)<br>Period: 2004<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 21.88 % (GDP)<br>Period: 2005<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 22.39 % (GDP)<br>Period: 2006<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 21.89 % (GDP)<br>Period: 2007<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 23.57 % (GDP)<br>Period: 2008<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 23.37 % (GDP)<br>Period: 2009<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 21.19 % (GDP)<br>Period: 2010<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 22.99 % (GDP)<br>Period: 2011<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 24.36 % (GDP)<br>Period: 2012<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 23.79 % (GDP)<br>Period: 2013<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 25.21 % (GDP)<br>Period: 2014<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 24.53 % (GDP)<br>Period: 2015<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 23.08 % (GDP)<br>Period: 2016<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 26.04 % (GDP)<br>Period: 2017<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 31.15 % (GDP)<br>Period: 2018<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 32.53 % (GDP)<br>Period: 2019<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 28.73 % (GDP)<br>Period: 2020<br>REMIND_54 region code: TUR<br>Countries in region: Turkey", "Exports - goods and services: 35.3 % (GDP)<br>Period: 2021<br>REMIND_54 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [16.690000000000001, 16.690000000000001, 16.690000000000001, 16.690000000000001, 16.690000000000001, 16.689999999999998, 16.690000000000001, 16.690000000000001, 16.690000000000001, 13.77, 12.480000000000002, 11.640000000000001, 9.3599999999999994, 7.8100000000000005, 7.6300000000000008, 8.3699999999999992, 7.9400000000000004, 7.1300000000000008, 7.6300000000000008],
      "text": ["Exports - goods and services: 16.69 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 16.69 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 16.69 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 16.69 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 16.69 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 16.69 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 16.69 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 16.69 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 16.69 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 13.77 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 12.48 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 11.64 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 9.36 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 7.81 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 7.63 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 8.37 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 7.94 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 7.13 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia", "Exports - goods and services: 7.63 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ETH<br>Countries in region: Ethiopia"],
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
      "y": [35.286675681119647, 38.120121805196028, 38.697980880609137, 42.431749983993292, 44.46145210507288, 45.376544482056111, 41.737822774761909, 47.918132801327729, 52.712639494607537, 53.340632411331903, 56.168536549315981, 57.519026875251235, 57.784778905298253, 58.194356530701441, 59.079355635398642, 58.155561270644938, 56.834632541142994, 52.253606482374963, 56.444568279453314],
      "text": ["Exports - goods and services: 35.29 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 38.12 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 38.7 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 42.43 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 44.46 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 45.38 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 41.74 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 47.92 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 52.71 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 53.34 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 56.17 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 57.52 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 57.78 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 58.19 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 59.08 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 58.16 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 56.83 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 52.25 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - goods and services: 56.44 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [24.629999999999999, 25.269999999999996, 30.329999999999998, 29.870000000000001, 28.840000000000003, 26.579999999999998, 22.710000000000001, 24.399999999999995, 24.930000000000003, 22.48, 25.18, 22.829999999999998, 18.719999999999999, 21.16, 22.739999999999998, 30.219999999999999, 23.48, 19.420000000000002, 22.84],
      "text": ["Exports - goods and services: 24.63 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 25.27 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 30.33 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 29.87 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 28.84 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 26.58 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 22.71 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 24.4 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 24.93 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 22.48 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 25.18 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 22.83 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 18.72 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 21.16 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 22.74 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 30.22 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 23.48 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 19.42 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Exports - goods and services: 22.84 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "y": [14.949999999999999, 17.859999999999999, 19.609999999999999, 21.27, 20.800000000000001, 24.100000000000001, 20.399999999999999, 22.399999999999999, 24.539999999999999, 24.530000000000001, 25.43, 22.969999999999995, 19.809999999999999, 19.16, 18.789999999999996, 19.93, 18.66, 18.710000000000001, 21.510000000000002],
      "text": ["Exports - goods and services: 14.95 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 17.86 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 19.61 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 21.27 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 20.8 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 24.1 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 20.4 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 22.4 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 24.54 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 24.53 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 25.43 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 22.97 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 19.81 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 19.16 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 18.79 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 19.93 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 18.66 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 18.71 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IND<br>Countries in region: India", "Exports - goods and services: 21.51 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IND<br>Countries in region: India"],
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
      "y": [9.0399999999999991, 9.6300000000000008, 9.9800000000000004, 10.640000000000001, 11.460000000000001, 12.43, 10.93, 12.34, 13.560000000000002, 13.640000000000002, 13.58, 13.549999999999999, 12.460000000000001, 11.94, 12.26, 12.359999999999999, 11.869999999999999, 10.199999999999999, 10.890000000000001],
      "text": ["Exports - goods and services: 9.04 % (GDP)<br>Period: 2003<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 9.63 % (GDP)<br>Period: 2004<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 9.98 % (GDP)<br>Period: 2005<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 10.64 % (GDP)<br>Period: 2006<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 11.46 % (GDP)<br>Period: 2007<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 12.43 % (GDP)<br>Period: 2008<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 10.93 % (GDP)<br>Period: 2009<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 12.34 % (GDP)<br>Period: 2010<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 13.56 % (GDP)<br>Period: 2011<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 13.64 % (GDP)<br>Period: 2012<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 13.58 % (GDP)<br>Period: 2013<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 13.55 % (GDP)<br>Period: 2014<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 12.46 % (GDP)<br>Period: 2015<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 11.94 % (GDP)<br>Period: 2016<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 12.26 % (GDP)<br>Period: 2017<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 12.36 % (GDP)<br>Period: 2018<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 11.87 % (GDP)<br>Period: 2019<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 10.2 % (GDP)<br>Period: 2020<br>REMIND_54 region code: USA<br>Countries in region: United States", "Exports - goods and services: 10.89 % (GDP)<br>Period: 2021<br>REMIND_54 region code: USA<br>Countries in region: United States"],
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
      "y": [24.000000000000004, 22.729999999999997, 22.940000000000001, 21.699999999999999, 39.070000000000007, 39.030000000000001, 26.809999999999999, 41.109999999999999, 39.520000000000003, 30.800000000000001, 36.450000000000003, 36.829999999999998, 27.73, 23.960000000000001, 35.25, 32.550000000000004, 25.870000000000005, 28.599999999999998, 40.390000000000001],
      "text": ["Exports - goods and services: 24 % (GDP)<br>Period: 2003<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 22.73 % (GDP)<br>Period: 2004<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 22.94 % (GDP)<br>Period: 2005<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 21.7 % (GDP)<br>Period: 2006<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 39.07 % (GDP)<br>Period: 2007<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 39.03 % (GDP)<br>Period: 2008<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 26.81 % (GDP)<br>Period: 2009<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 41.11 % (GDP)<br>Period: 2010<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 39.52 % (GDP)<br>Period: 2011<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 30.8 % (GDP)<br>Period: 2012<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 36.45 % (GDP)<br>Period: 2013<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 36.83 % (GDP)<br>Period: 2014<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 27.73 % (GDP)<br>Period: 2015<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 23.96 % (GDP)<br>Period: 2016<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 35.25 % (GDP)<br>Period: 2017<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 32.55 % (GDP)<br>Period: 2018<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 25.87 % (GDP)<br>Period: 2019<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 28.6 % (GDP)<br>Period: 2020<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the", "Exports - goods and services: 40.39 % (GDP)<br>Period: 2021<br>REMIND_54 region code: COD<br>Countries in region: Congo, the Democratic Republic of the"],
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
      "y": [25.629999999999999, 25.41, 24.98, 25.239999999999995, 25.98, 25.620000000000001, 23.060000000000002, 25.950000000000003, 29.530000000000001, 31.460000000000001, 32.950000000000003, 33.469999999999999, 33.609999999999999, 33.859999999999999, 35.130000000000003, 35.149999999999999, 34.909999999999997, 30.799999999999997, 34.93],
      "text": ["Exports - goods and services: 25.63 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 25.41 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 24.98 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 25.24 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 25.98 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 25.62 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 23.06 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 25.95 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 29.53 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 31.46 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 32.95 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 33.47 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 33.61 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 33.86 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 35.13 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 35.15 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 34.91 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 30.8 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ESP<br>Countries in region: Spain", "Exports - goods and services: 34.93 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ESP<br>Countries in region: Spain"],
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
      "y": [33.350000000000001, 34.240000000000002, 34.609999999999999, 37.82, 38.520000000000003, 37.810000000000002, 37.140000000000001, 40.089999999999996, 42.570000000000007, 44.280000000000001, 45.979999999999997, 46.490000000000002, 47.450000000000003, 50.270000000000003, 52.060000000000002, 52.749999999999993, 53.200000000000003, 52.990000000000002, 57.909999999999989],
      "text": ["Exports - goods and services: 33.35 % (GDP)<br>Period: 2003<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 34.24 % (GDP)<br>Period: 2004<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 34.61 % (GDP)<br>Period: 2005<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 37.82 % (GDP)<br>Period: 2006<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 38.52 % (GDP)<br>Period: 2007<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 37.81 % (GDP)<br>Period: 2008<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 37.14 % (GDP)<br>Period: 2009<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 40.09 % (GDP)<br>Period: 2010<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 42.57 % (GDP)<br>Period: 2011<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 44.28 % (GDP)<br>Period: 2012<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 45.98 % (GDP)<br>Period: 2013<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 46.49 % (GDP)<br>Period: 2014<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 47.45 % (GDP)<br>Period: 2015<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 50.27 % (GDP)<br>Period: 2016<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 52.06 % (GDP)<br>Period: 2017<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 52.75 % (GDP)<br>Period: 2018<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 53.2 % (GDP)<br>Period: 2019<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 52.99 % (GDP)<br>Period: 2020<br>REMIND_54 region code: POL<br>Countries in region: Poland", "Exports - goods and services: 57.91 % (GDP)<br>Period: 2021<br>REMIND_54 region code: POL<br>Countries in region: Poland"],
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
      "y": [26.75, 20.25, 21.030000000000001, 29.52, 21.239999999999998, 25.670000000000002, 18.629999999999999, 25.659999999999997, 31.620000000000001, 31.550000000000001, 18.050000000000004, 18.440000000000005, 10.67, 9.2200000000000006, 13.17, 15.5, 14.220000000000001, 8.1199999999999992, 10.74],
      "text": ["Exports - goods and services: 26.75 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 20.25 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 21.03 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 29.52 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 21.24 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 25.67 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 18.63 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 25.66 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 31.62 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 31.55 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 18.05 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 18.44 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 10.67 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 9.22 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 13.17 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 15.5 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 14.22 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 8.12 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria", "Exports - goods and services: 10.74 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NGA<br>Countries in region: Nigeria"],
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
      "y": [23.920000000000002, 22.760000000000002, 23.600000000000001, 26.099999999999998, 27.960000000000001, 32.25, 24.98, 25.780000000000001, 27.699999999999996, 27.140000000000001, 28.379999999999999, 29, 27.710000000000001, 28.160000000000004, 27.339999999999996, 27.559999999999999, 27.299999999999997, 27.600000000000005, 31.189999999999998],
      "text": ["Exports - goods and services: 23.92 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 22.76 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 23.6 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 26.1 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 27.96 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 32.25 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 24.98 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 25.78 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 27.7 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 27.14 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 28.38 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 29 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 27.71 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 28.16 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 27.34 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 27.56 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 27.3 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 27.6 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa", "Exports - goods and services: 31.19 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [32.810000000000002, 35.709999999999994, 38.060000000000002, 41.43, 43.32, 43.799999999999997, 38.120000000000005, 42.569999999999993, 45.060000000000002, 46.310000000000002, 45.420000000000002, 45.619999999999997, 46.920000000000002, 46.07, 47.160000000000004, 47.310000000000002, 46.670000000000002, 43.009999999999991, 47.030000000000001],
      "text": ["Exports - goods and services: 32.81 % (GDP)<br>Period: 2003<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 35.71 % (GDP)<br>Period: 2004<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 38.06 % (GDP)<br>Period: 2005<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 41.43 % (GDP)<br>Period: 2006<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 43.32 % (GDP)<br>Period: 2007<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 43.8 % (GDP)<br>Period: 2008<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 38.12 % (GDP)<br>Period: 2009<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 42.57 % (GDP)<br>Period: 2010<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 45.06 % (GDP)<br>Period: 2011<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 46.31 % (GDP)<br>Period: 2012<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 45.42 % (GDP)<br>Period: 2013<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 45.62 % (GDP)<br>Period: 2014<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 46.92 % (GDP)<br>Period: 2015<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 46.07 % (GDP)<br>Period: 2016<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 47.16 % (GDP)<br>Period: 2017<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 47.31 % (GDP)<br>Period: 2018<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 46.67 % (GDP)<br>Period: 2019<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 43.01 % (GDP)<br>Period: 2020<br>REMIND_54 region code: DEU<br>Countries in region: Germany", "Exports - goods and services: 47.03 % (GDP)<br>Period: 2021<br>REMIND_54 region code: DEU<br>Countries in region: Germany"],
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
      "y": [49.907567236540714, 57.096304603181402, 61.672450474386252, 65.073851943920417, 65.217852067222154, 64.217772758802667, 58.360175605161885, 67.387175783031111, 74.29076595217289, 79.012304687584233, 79.72863739724859, 81.10460127186812, 79.723224384446851, 79.28931275035356, 80.556657705181394, 79.868545140857762, 77.534850651648483, 73.171186003713629, 78.150304492454907],
      "text": ["Exports - goods and services: 49.91 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 57.1 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 61.67 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 65.07 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 65.22 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 64.22 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 58.36 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 67.39 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 74.29 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 79.01 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 79.73 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 81.1 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 79.72 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 79.29 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 80.56 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 79.87 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 77.53 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 73.17 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - goods and services: 78.15 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [80.839999999999989, 80.480000000000004, 79.530000000000001, 79.030000000000015, 80.840000000000003, 84.329999999999998, 93.560000000000002, 103.23999999999999, 103.26000000000002, 104.42, 104.01000000000001, 110.12000000000002, 122.10000000000001, 121.70000000000002, 121.01999999999998, 122.78, 127.88000000000001, 133.34, 134.41],
      "text": ["Exports - goods and services: 80.84 % (GDP)<br>Period: 2003<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 80.48 % (GDP)<br>Period: 2004<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 79.53 % (GDP)<br>Period: 2005<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 79.03 % (GDP)<br>Period: 2006<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 80.84 % (GDP)<br>Period: 2007<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 84.33 % (GDP)<br>Period: 2008<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 93.56 % (GDP)<br>Period: 2009<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 103.24 % (GDP)<br>Period: 2010<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 103.26 % (GDP)<br>Period: 2011<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 104.42 % (GDP)<br>Period: 2012<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 104.01 % (GDP)<br>Period: 2013<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 110.12 % (GDP)<br>Period: 2014<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 122.1 % (GDP)<br>Period: 2015<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 121.7 % (GDP)<br>Period: 2016<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 121.02 % (GDP)<br>Period: 2017<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 122.78 % (GDP)<br>Period: 2018<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 127.88 % (GDP)<br>Period: 2019<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 133.34 % (GDP)<br>Period: 2020<br>REMIND_54 region code: IRL<br>Countries in region: Ireland", "Exports - goods and services: 134.41 % (GDP)<br>Period: 2021<br>REMIND_54 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [27.370000000000005, 27.670000000000005, 27.079999999999998, 30.359999999999996, 31.190000000000001, 31.260000000000002, 27.289999999999999, 30.07, 34.450000000000003, 37.780000000000001, 39.609999999999999, 40.219999999999999, 40.619999999999997, 40.210000000000001, 42.719999999999999, 43.450000000000003, 43.509999999999998, 37.04999999999999, 41.629999999999995],
      "text": ["Exports - goods and services: 27.37 % (GDP)<br>Period: 2003<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 27.67 % (GDP)<br>Period: 2004<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 27.08 % (GDP)<br>Period: 2005<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 30.36 % (GDP)<br>Period: 2006<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 31.19 % (GDP)<br>Period: 2007<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 31.26 % (GDP)<br>Period: 2008<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 27.29 % (GDP)<br>Period: 2009<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 30.07 % (GDP)<br>Period: 2010<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 34.45 % (GDP)<br>Period: 2011<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 37.78 % (GDP)<br>Period: 2012<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 39.61 % (GDP)<br>Period: 2013<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 40.22 % (GDP)<br>Period: 2014<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 40.62 % (GDP)<br>Period: 2015<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 40.21 % (GDP)<br>Period: 2016<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 42.72 % (GDP)<br>Period: 2017<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 43.45 % (GDP)<br>Period: 2018<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 43.51 % (GDP)<br>Period: 2019<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 37.05 % (GDP)<br>Period: 2020<br>REMIND_54 region code: PRT<br>Countries in region: Portugal", "Exports - goods and services: 41.63 % (GDP)<br>Period: 2021<br>REMIND_54 region code: PRT<br>Countries in region: Portugal"],
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
      "y": [45.850000000000001, 50.990000000000002, 57.049999999999997, 59.829999999999991, 59.939999999999998, 62.109999999999999, 47.089999999999996, 49.57, 55.600000000000001, 53.840000000000003, 51.420000000000009, 46.25, 32.560000000000002, 30.16, 33.57, 37.200000000000003, 34.090000000000003, 24.900000000000002, 32.979999999999997],
      "text": ["Exports - goods and services: 45.85 % (GDP)<br>Period: 2003<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 50.99 % (GDP)<br>Period: 2004<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 57.05 % (GDP)<br>Period: 2005<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 59.83 % (GDP)<br>Period: 2006<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 59.94 % (GDP)<br>Period: 2007<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 62.11 % (GDP)<br>Period: 2008<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 47.09 % (GDP)<br>Period: 2009<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 49.57 % (GDP)<br>Period: 2010<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 55.6 % (GDP)<br>Period: 2011<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 53.84 % (GDP)<br>Period: 2012<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 51.42 % (GDP)<br>Period: 2013<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 46.25 % (GDP)<br>Period: 2014<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 32.56 % (GDP)<br>Period: 2015<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 30.16 % (GDP)<br>Period: 2016<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 33.57 % (GDP)<br>Period: 2017<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 37.2 % (GDP)<br>Period: 2018<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 34.09 % (GDP)<br>Period: 2019<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 24.9 % (GDP)<br>Period: 2020<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia", "Exports - goods and services: 32.98 % (GDP)<br>Period: 2021<br>REMIND_54 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [26.109999999999996, 26.469999999999999, 27.029999999999998, 27.939999999999998, 27.850000000000009, 28.120000000000005, 24.839999999999996, 26.790000000000003, 28.419999999999998, 29.199999999999999, 29.359999999999996, 29.669999999999998, 30.589999999999996, 30.249999999999993, 30.949999999999996, 31.709999999999997, 31.589999999999989, 27.449999999999996, 29.449999999999996],
      "text": ["Exports - goods and services: 26.11 % (GDP)<br>Period: 2003<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 26.47 % (GDP)<br>Period: 2004<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 27.03 % (GDP)<br>Period: 2005<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 27.94 % (GDP)<br>Period: 2006<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 27.85 % (GDP)<br>Period: 2007<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 28.12 % (GDP)<br>Period: 2008<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 24.84 % (GDP)<br>Period: 2009<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 26.79 % (GDP)<br>Period: 2010<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 28.42 % (GDP)<br>Period: 2011<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 29.2 % (GDP)<br>Period: 2012<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 29.36 % (GDP)<br>Period: 2013<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 29.67 % (GDP)<br>Period: 2014<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 30.59 % (GDP)<br>Period: 2015<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 30.25 % (GDP)<br>Period: 2016<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 30.95 % (GDP)<br>Period: 2017<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 31.71 % (GDP)<br>Period: 2018<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 31.59 % (GDP)<br>Period: 2019<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 27.45 % (GDP)<br>Period: 2020<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - goods and services: 29.45 % (GDP)<br>Period: 2021<br>REMIND_54 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [23.96954875513573, 23.979695573716452, 25.17972482898908, 27.429697910598165, 25.41977519021426, 27.309845025427254, 26.629701490766131, 28.559707149583975, 31.089691030633443, 30.369726427582695, 30.04978501957287, 28.38974963919598, 27.629641619155485, 28.649568356357719, 30.669463298538723, 31.229492582100384, 31.25943738933649, 29.239531538478648, 28.819674532801706],
      "text": ["Exports - goods and services: 23.97 % (GDP)<br>Period: 2003<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 23.98 % (GDP)<br>Period: 2004<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 25.18 % (GDP)<br>Period: 2005<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 27.43 % (GDP)<br>Period: 2006<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 25.42 % (GDP)<br>Period: 2007<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 27.31 % (GDP)<br>Period: 2008<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 26.63 % (GDP)<br>Period: 2009<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 28.56 % (GDP)<br>Period: 2010<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 31.09 % (GDP)<br>Period: 2011<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 30.37 % (GDP)<br>Period: 2012<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 30.05 % (GDP)<br>Period: 2013<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 28.39 % (GDP)<br>Period: 2014<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 27.63 % (GDP)<br>Period: 2015<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 28.65 % (GDP)<br>Period: 2016<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 30.67 % (GDP)<br>Period: 2017<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 31.23 % (GDP)<br>Period: 2018<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 31.26 % (GDP)<br>Period: 2019<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 29.24 % (GDP)<br>Period: 2020<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - goods and services: 28.82 % (GDP)<br>Period: 2021<br>REMIND_54 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [44.57, 46.869999999999997, 48.61999999999999, 50.840000000000003, 52.559999999999995, 53.25, 45.210000000000001, 51.259999999999998, 53.950000000000003, 53.969999999999999, 53.439999999999998, 53.390000000000001, 53.090000000000003, 52.410000000000004, 54.049999999999997, 55.459999999999994, 55.759999999999998, 51.609999999999999, 55.899999999999999],
      "text": ["Exports - goods and services: 44.57 % (GDP)<br>Period: 2003<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 46.87 % (GDP)<br>Period: 2004<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 48.62 % (GDP)<br>Period: 2005<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 50.84 % (GDP)<br>Period: 2006<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 52.56 % (GDP)<br>Period: 2007<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 53.25 % (GDP)<br>Period: 2008<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 45.21 % (GDP)<br>Period: 2009<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 51.26 % (GDP)<br>Period: 2010<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 53.95 % (GDP)<br>Period: 2011<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 53.97 % (GDP)<br>Period: 2012<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 53.44 % (GDP)<br>Period: 2013<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 53.39 % (GDP)<br>Period: 2014<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 53.09 % (GDP)<br>Period: 2015<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 52.41 % (GDP)<br>Period: 2016<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 54.05 % (GDP)<br>Period: 2017<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 55.46 % (GDP)<br>Period: 2018<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 55.76 % (GDP)<br>Period: 2019<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 51.61 % (GDP)<br>Period: 2020<br>REMIND_54 region code: AUT<br>Countries in region: Austria", "Exports - goods and services: 55.9 % (GDP)<br>Period: 2021<br>REMIND_54 region code: AUT<br>Countries in region: Austria"],
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
      "y": [27.645725880350831, 31.793829026668334, 34.594642883976107, 36.831841404879945, 36.234978652738178, 33.459071390046269, 25.570395734047381, 28.144134026410534, 27.569770407291962, 26.516622611806373, 25.660105436806194, 24.531369422093551, 22.293543775438749, 20.486732725830322, 20.608915867655529, 20.03353622282398, 19.284792099496237, 19.442031433985896, 20.933447496704581],
      "text": ["Exports - goods and services: 27.65 % (GDP)<br>Period: 2003<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 31.79 % (GDP)<br>Period: 2004<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 34.59 % (GDP)<br>Period: 2005<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 36.83 % (GDP)<br>Period: 2006<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 36.23 % (GDP)<br>Period: 2007<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 33.46 % (GDP)<br>Period: 2008<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 25.57 % (GDP)<br>Period: 2009<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 28.14 % (GDP)<br>Period: 2010<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 27.57 % (GDP)<br>Period: 2011<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 26.52 % (GDP)<br>Period: 2012<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 25.66 % (GDP)<br>Period: 2013<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 24.53 % (GDP)<br>Period: 2014<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 22.29 % (GDP)<br>Period: 2015<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 20.49 % (GDP)<br>Period: 2016<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 20.61 % (GDP)<br>Period: 2017<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 20.03 % (GDP)<br>Period: 2018<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 19.28 % (GDP)<br>Period: 2019<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 19.44 % (GDP)<br>Period: 2020<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - goods and services: 20.93 % (GDP)<br>Period: 2021<br>REMIND_54 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [46.528148715549982, 44.188783178729153, 44.603834003935326, 43.420693850570224, 42.413736493120169, 44.053535192358169, 37.932406143284375, 39.293227653009623, 39.658879513019606, 36.786293993002246, 35.019795266628734, 34.496489705942473, 32.574310098465382, 28.223561910508138, 30.626745263527983, 31.305970949456107, 30.257362206004839, 26.976052940322571, 30.595947423758115],
      "text": ["Exports - goods and services: 46.53 % (GDP)<br>Period: 2003<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports - goods and services: 44.19 % (GDP)<br>Period: 2004<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports - goods and services: 44.6 % (GDP)<br>Period: 2005<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Exports - goods and services: 43.42 % (GDP)<br>Period: 2006<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - goods and services: 42.41 % (GDP)<br>Period: 2007<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - goods and services: 44.05 % (GDP)<br>Period: 2008<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - goods and services: 37.93 % (GDP)<br>Period: 2009<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - goods and services: 39.29 % (GDP)<br>Period: 2010<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - goods and services: 39.66 % (GDP)<br>Period: 2011<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Exports - goods and services: 36.79 % (GDP)<br>Period: 2012<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - goods and services: 35.02 % (GDP)<br>Period: 2013<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - goods and services: 34.5 % (GDP)<br>Period: 2014<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - goods and services: 32.57 % (GDP)<br>Period: 2015<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - goods and services: 28.22 % (GDP)<br>Period: 2016<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports - goods and services: 30.63 % (GDP)<br>Period: 2017<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports - goods and services: 31.31 % (GDP)<br>Period: 2018<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Exports - goods and services: 30.26 % (GDP)<br>Period: 2019<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - goods and services: 26.98 % (GDP)<br>Period: 2020<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Exports - goods and services: 30.6 % (GDP)<br>Period: 2021<br>REMIND_54 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [40.329999999999998, 42.689999999999998, 45.02000000000001, 47.490000000000002, 47.609999999999999, 49.090000000000003, 43.45000000000001, 44.68, 45.270000000000003, 45.030000000000001, 42.530000000000001, 43.270000000000003, 43.770000000000003, 42.689999999999998, 43.729999999999997, 45.68, 47.810000000000002, 43.850000000000001, 46.280000000000001],
      "text": ["Exports - goods and services: 40.33 % (GDP)<br>Period: 2003<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 42.69 % (GDP)<br>Period: 2004<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 45.02 % (GDP)<br>Period: 2005<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 47.49 % (GDP)<br>Period: 2006<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 47.61 % (GDP)<br>Period: 2007<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 49.09 % (GDP)<br>Period: 2008<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 43.45 % (GDP)<br>Period: 2009<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 44.68 % (GDP)<br>Period: 2010<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 45.27 % (GDP)<br>Period: 2011<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 45.03 % (GDP)<br>Period: 2012<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 42.53 % (GDP)<br>Period: 2013<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 43.27 % (GDP)<br>Period: 2014<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 43.77 % (GDP)<br>Period: 2015<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 42.69 % (GDP)<br>Period: 2016<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 43.73 % (GDP)<br>Period: 2017<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 45.68 % (GDP)<br>Period: 2018<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 47.81 % (GDP)<br>Period: 2019<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 43.85 % (GDP)<br>Period: 2020<br>REMIND_54 region code: SWE<br>Countries in region: Sweden", "Exports - goods and services: 46.28 % (GDP)<br>Period: 2021<br>REMIND_54 region code: SWE<br>Countries in region: Sweden"],
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
      "y": [43.865876807402486, 43.927959194976175, 47.402152123224909, 50.651315626511341, 51.397903919114533, 54.108083942962381, 47.099614459089807, 50.486961156756017, 53.807991922215507, 54.612275744995934, 54.835196739357301, 54.599790128187358, 55.401232555251013, 53.43950329503862, 55.09104577310142, 56.527366216601429, 58.623158715403797, 54.866028219018602, 59.597123091047649],
      "text": ["Exports - goods and services: 43.87 % (GDP)<br>Period: 2003<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 43.93 % (GDP)<br>Period: 2004<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 47.4 % (GDP)<br>Period: 2005<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 50.65 % (GDP)<br>Period: 2006<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 51.4 % (GDP)<br>Period: 2007<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 54.11 % (GDP)<br>Period: 2008<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 47.1 % (GDP)<br>Period: 2009<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 50.49 % (GDP)<br>Period: 2010<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 53.81 % (GDP)<br>Period: 2011<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 54.61 % (GDP)<br>Period: 2012<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 54.84 % (GDP)<br>Period: 2013<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 54.6 % (GDP)<br>Period: 2014<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 55.4 % (GDP)<br>Period: 2015<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 53.44 % (GDP)<br>Period: 2016<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 55.09 % (GDP)<br>Period: 2017<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 56.53 % (GDP)<br>Period: 2018<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 58.62 % (GDP)<br>Period: 2019<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 54.87 % (GDP)<br>Period: 2020<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands", "Exports - goods and services: 59.6 % (GDP)<br>Period: 2021<br>REMIND_54 region code: DNK<br>Countries in region: Denmark; Greenland; Faroe Islands"],
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
      "y": [23.881658946088745, 24.55656886257492, 25.146393633474805, 26.843075606198244, 28.064172269150195, 27.700650433662847, 23.263800165026989, 25.944126057083935, 27.800892039642239, 29.323876140900861, 29.524208931548948, 29.966713206052983, 30.628648021389562, 30.287708775690145, 31.680808518909725, 32.395943020100191, 32.731339631073219, 30.71985956876437, 33.880990477070817],
      "text": ["Exports - goods and services: 23.88 % (GDP)<br>Period: 2003<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 24.56 % (GDP)<br>Period: 2004<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 25.15 % (GDP)<br>Period: 2005<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 26.84 % (GDP)<br>Period: 2006<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 28.06 % (GDP)<br>Period: 2007<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 27.7 % (GDP)<br>Period: 2008<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 23.26 % (GDP)<br>Period: 2009<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 25.94 % (GDP)<br>Period: 2010<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 27.8 % (GDP)<br>Period: 2011<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 29.32 % (GDP)<br>Period: 2012<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 29.52 % (GDP)<br>Period: 2013<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 29.97 % (GDP)<br>Period: 2014<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 30.63 % (GDP)<br>Period: 2015<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 30.29 % (GDP)<br>Period: 2016<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 31.68 % (GDP)<br>Period: 2017<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 32.4 % (GDP)<br>Period: 2018<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 32.73 % (GDP)<br>Period: 2019<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 30.72 % (GDP)<br>Period: 2020<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta", "Exports - goods and services: 33.88 % (GDP)<br>Period: 2021<br>REMIND_54 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [59.280000000000001, 62.670000000000009, 65.629999999999995, 68.180000000000007, 68.780000000000001, 69.790000000000006, 62.239999999999995, 69.799999999999997, 75.5, 79.499999999999986, 79.879999999999995, 80.579999999999998, 82.659999999999997, 79.540000000000006, 83.389999999999986, 84.680000000000007, 82.540000000000006, 78.269999999999996, 83.069999999999993],
      "text": ["Exports - goods and services: 59.28 % (GDP)<br>Period: 2003<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 62.67 % (GDP)<br>Period: 2004<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 65.63 % (GDP)<br>Period: 2005<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 68.18 % (GDP)<br>Period: 2006<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 68.78 % (GDP)<br>Period: 2007<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 69.79 % (GDP)<br>Period: 2008<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 62.24 % (GDP)<br>Period: 2009<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 69.8 % (GDP)<br>Period: 2010<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 75.5 % (GDP)<br>Period: 2011<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 79.5 % (GDP)<br>Period: 2012<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 79.88 % (GDP)<br>Period: 2013<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 80.58 % (GDP)<br>Period: 2014<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 82.66 % (GDP)<br>Period: 2015<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 79.54 % (GDP)<br>Period: 2016<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 83.39 % (GDP)<br>Period: 2017<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 84.68 % (GDP)<br>Period: 2018<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 82.54 % (GDP)<br>Period: 2019<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 78.27 % (GDP)<br>Period: 2020<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands", "Exports - goods and services: 83.07 % (GDP)<br>Period: 2021<br>REMIND_54 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [71.701538703793204, 73.976253013080338, 77.660795687045834, 80.709688030455695, 82.245162273079217, 84.397403568277994, 72.316246953766665, 79.711766013692213, 84.682485014854279, 84.542955121199938, 83.826500180683752, 84.66934974453855, 83.29404600888229, 84.885479290777226, 88.638010129729864, 88.859943155814491, 88.642517179604141, 85.675434139618289, 93.353007111169475],
      "text": ["Exports - goods and services: 71.7 % (GDP)<br>Period: 2003<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 73.98 % (GDP)<br>Period: 2004<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 77.66 % (GDP)<br>Period: 2005<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 80.71 % (GDP)<br>Period: 2006<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 82.25 % (GDP)<br>Period: 2007<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 84.4 % (GDP)<br>Period: 2008<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 72.32 % (GDP)<br>Period: 2009<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 79.71 % (GDP)<br>Period: 2010<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 84.68 % (GDP)<br>Period: 2011<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 84.54 % (GDP)<br>Period: 2012<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 83.83 % (GDP)<br>Period: 2013<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 84.67 % (GDP)<br>Period: 2014<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 83.29 % (GDP)<br>Period: 2015<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 84.89 % (GDP)<br>Period: 2016<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 88.64 % (GDP)<br>Period: 2017<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 88.86 % (GDP)<br>Period: 2018<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 88.64 % (GDP)<br>Period: 2019<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 85.68 % (GDP)<br>Period: 2020<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Exports - goods and services: 93.35 % (GDP)<br>Period: 2021<br>REMIND_54 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [37.32, 38.619999999999997, 40.270000000000003, 43.07, 43.829999999999998, 44.899999999999999, 36.079999999999998, 38.409999999999989, 38.899999999999999, 38.810000000000002, 38.020000000000003, 36.479999999999997, 35.409999999999989, 34.810000000000002, 37.54999999999999, 38.469999999999992, 39.880000000000003, 35.789999999999999, 39.549999999999997],
      "text": ["Exports - goods and services: 37.32 % (GDP)<br>Period: 2003<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 38.62 % (GDP)<br>Period: 2004<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 40.27 % (GDP)<br>Period: 2005<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 43.07 % (GDP)<br>Period: 2006<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 43.83 % (GDP)<br>Period: 2007<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 44.9 % (GDP)<br>Period: 2008<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 36.08 % (GDP)<br>Period: 2009<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 38.41 % (GDP)<br>Period: 2010<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 38.9 % (GDP)<br>Period: 2011<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 38.81 % (GDP)<br>Period: 2012<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 38.02 % (GDP)<br>Period: 2013<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 36.48 % (GDP)<br>Period: 2014<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 35.41 % (GDP)<br>Period: 2015<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 34.81 % (GDP)<br>Period: 2016<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 37.55 % (GDP)<br>Period: 2017<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 38.47 % (GDP)<br>Period: 2018<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 39.88 % (GDP)<br>Period: 2019<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 35.79 % (GDP)<br>Period: 2020<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands", "Exports - goods and services: 39.55 % (GDP)<br>Period: 2021<br>REMIND_54 region code: FIN<br>Countries in region: Finland; Aland Islands"],
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
      "y": [21.826807286592675, 23.78580959551044, 24.272779147275763, 23.987945242894696, 25.24046197785745, 25.755639193032515, 21.680691361472807, 24.426841216909864, 28.106514456479719, 31.273055110033994, 33.239629962072932, 35.814917308392268, 35.967662232561501, 35.325801574000614, 39.083509801936124, 42.798944390854132, 44.008076679430381, 37.350538898674316, 45.940189343117865],
      "text": ["Exports - goods and services: 21.83 % (GDP)<br>Period: 2003<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 23.79 % (GDP)<br>Period: 2004<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 24.27 % (GDP)<br>Period: 2005<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 23.99 % (GDP)<br>Period: 2006<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 25.24 % (GDP)<br>Period: 2007<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 25.76 % (GDP)<br>Period: 2008<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 21.68 % (GDP)<br>Period: 2009<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 24.43 % (GDP)<br>Period: 2010<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 28.11 % (GDP)<br>Period: 2011<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 31.27 % (GDP)<br>Period: 2012<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 33.24 % (GDP)<br>Period: 2013<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 35.81 % (GDP)<br>Period: 2014<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 35.97 % (GDP)<br>Period: 2015<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 35.33 % (GDP)<br>Period: 2016<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 39.08 % (GDP)<br>Period: 2017<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 42.8 % (GDP)<br>Period: 2018<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 44.01 % (GDP)<br>Period: 2019<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 37.35 % (GDP)<br>Period: 2020<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus", "Exports - goods and services: 45.94 % (GDP)<br>Period: 2021<br>REMIND_54 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Exports - goods and services (REMIND_54)",
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
      "range": [0, 228.99000000000001],
      "tickmode": "array",
      "ticktext": ["0", "50", "100", "150", "200"],
      "tickvals": [0, 50, 100, 150, 200],
      "categoryorder": "array",
      "categoryarray": ["0", "50", "100", "150", "200"],
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
    "b55c57356a50": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c67245ee6": {
      "y": {}
    }
  },
  "cur_data": "b55c57356a50",
  "visdat": {
    "b55c57356a50": ["function (y) ", "x"],
    "b55c67245ee6": ["function (y) ", "x"]
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

  
