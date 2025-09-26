(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_12_Credit_Bank_credit_interest_rates___to_the_private_sector__line') 

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
      "y": [5.541579385349686, 5.3129317351643106, 5.6774540452516771, 6.6276222802455651, 7.0379068823784312, 6.5470175810626143, 4.0244671713786353, 4.5712207456248812, 4.9575237793517735, 4.6601472756600018, 4.3533723069512371, 4.2913190506076306, 4.0303747806664223, 3.8803243243043721, 3.8012777128660864, 3.8055964289356199, 3.7460975434373154, 3.7476852919411847, 3.7454976388714671],
      "text": ["Bank credit interest rates - to the private sector : 5.54 % (?)<br>Period: 2003<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 5.31 % (?)<br>Period: 2004<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 5.68 % (?)<br>Period: 2005<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 6.63 % (?)<br>Period: 2006<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 7.04 % (?)<br>Period: 2007<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 6.55 % (?)<br>Period: 2008<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 4.02 % (?)<br>Period: 2009<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 4.57 % (?)<br>Period: 2010<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 4.96 % (?)<br>Period: 2011<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 4.66 % (?)<br>Period: 2012<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 4.35 % (?)<br>Period: 2013<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 4.29 % (?)<br>Period: 2014<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 4.03 % (?)<br>Period: 2015<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 3.88 % (?)<br>Period: 2016<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 3.8 % (?)<br>Period: 2017<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 3.81 % (?)<br>Period: 2018<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 3.75 % (?)<br>Period: 2019<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 3.75 % (?)<br>Period: 2020<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Bank credit interest rates - to the private sector : 3.75 % (?)<br>Period: 2021<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [32.794669602884042, 28.107014670496973, 28.291601674820757, 25.851891815970372, 23.397071219593766, 25.437219624949343, 23.499464905742737, 20.727215618323335, 22.076921707528928, 19.738697169745652, 16.616976786891488, 18.363265600233103, 22.349082250247559, 25.930781993310294, 24.249601917519776, 22.986148347378716, 23.782252934509323, 17.58967760153833, 17.708145983896188],
      "text": ["Bank credit interest rates - to the private sector : 32.79 % (?)<br>Period: 2003<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Barbados; Belize; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 28.11 % (?)<br>Period: 2004<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Martinique; Guadeloupe; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Saint Kitts and Nevis; Cayman Islands; Saint Martin (French part); Sint Maarten (Dutch part); Virgin Islands, British; Turks and Caicos Islands; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 28.29 % (?)<br>Period: 2005<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 25.85 % (?)<br>Period: 2006<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 23.4 % (?)<br>Period: 2007<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 25.44 % (?)<br>Period: 2008<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Saint Vincent and the Grenadines; Grenada; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 23.5 % (?)<br>Period: 2009<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 20.73 % (?)<br>Period: 2010<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Puerto Rico; Panama; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 22.08 % (?)<br>Period: 2011<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 19.74 % (?)<br>Period: 2012<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Dominican Republic; Haiti; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 16.62 % (?)<br>Period: 2013<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Nicaragua; Paraguay; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Saint Vincent and the Grenadines; Virgin Islands, U.S.; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 18.36 % (?)<br>Period: 2014<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Martinique; Bahamas; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Aruba; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Saint Martin (French part); Sint Maarten (Dutch part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 22.35 % (?)<br>Period: 2015<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; El Salvador; Paraguay; Nicaragua; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Sint Maarten (Dutch part); Saint Martin (French part); Turks and Caicos Islands; Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 25.93 % (?)<br>Period: 2016<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Cuba; Bolivia, Plurinational State of; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Bermuda; Cayman Islands; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 24.25 % (?)<br>Period: 2017<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Martinique; Belize; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 22.99 % (?)<br>Period: 2018<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; Barbados; French Guiana; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Saint Martin (French part); Virgin Islands, British; Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 23.78 % (?)<br>Period: 2019<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Cuba; Haiti; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Guadeloupe; Bahamas; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Dominica; Cayman Islands; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 17.59 % (?)<br>Period: 2020<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Cuba; Dominican Republic; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island", "Bank credit interest rates - to the private sector : 17.71 % (?)<br>Period: 2021<br>REMIND_12 region code: LAM<br>Countries in region: Brazil; Mexico; Argentina; Chile; Colombia; Venezuela, Bolivarian Republic of; Uruguay; Peru; Ecuador; Guatemala; Bolivia, Plurinational State of; Haiti; Dominican Republic; Cuba; Honduras; Paraguay; Nicaragua; El Salvador; Costa Rica; Panama; Puerto Rico; Jamaica; Trinidad and Tobago; Guyana; Suriname; Bahamas; Guadeloupe; Belize; Martinique; French Guiana; Barbados; Saint Lucia; Curacao; Grenada; Aruba; Virgin Islands, U.S.; Saint Vincent and the Grenadines; Antigua and Barbuda; Cayman Islands; Dominica; Bermuda; Saint Kitts and Nevis; Turks and Caicos Islands; Sint Maarten (Dutch part); Virgin Islands, British; Saint Martin (French part); Bonaire, Sint Eustatius and Saba; Anguilla; Saint Barthelemy; Montserrat; Falkland Islands (Malvinas); Antarctica; South Georgia and the South Sandwich Islands; Bouvet Island"],
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
      "y": [11.672319907461949, 10.810549164341095, 11.240975412457896, 12.408632927039399, 12.262702759987556, 12.66553374198404, 12.524326450411126, 12.031564117115206, 12.254667426027169, 11.530773512820589, 10.863021743814823, 10.649054292621388, 10.016690405200078, 9.4440902924707846, 9.0668932418177253, 9.1015775461199286, 9.847943940081807, 9.0517096434959274, 8.3744814839106674],
      "text": ["Bank credit interest rates - to the private sector : 11.67 % (?)<br>Period: 2003<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Bank credit interest rates - to the private sector : 10.81 % (?)<br>Period: 2004<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Bank credit interest rates - to the private sector : 11.24 % (?)<br>Period: 2005<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Bank credit interest rates - to the private sector : 12.41 % (?)<br>Period: 2006<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Bank credit interest rates - to the private sector : 12.26 % (?)<br>Period: 2007<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Bank credit interest rates - to the private sector : 12.67 % (?)<br>Period: 2008<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Bank credit interest rates - to the private sector : 12.52 % (?)<br>Period: 2009<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 12.03 % (?)<br>Period: 2010<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 12.25 % (?)<br>Period: 2011<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 11.53 % (?)<br>Period: 2012<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 10.86 % (?)<br>Period: 2013<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 10.65 % (?)<br>Period: 2014<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 10.02 % (?)<br>Period: 2015<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 9.44 % (?)<br>Period: 2016<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 9.07 % (?)<br>Period: 2017<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 9.1 % (?)<br>Period: 2018<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 9.85 % (?)<br>Period: 2019<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 9.05 % (?)<br>Period: 2020<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Bank credit interest rates - to the private sector : 8.37 % (?)<br>Period: 2021<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [1.8200000000000001, 1.7700000000000002, 1.6799999999999999, 1.6600000000000001, 1.8799999999999999, 1.9099999999999999, 1.72, 1.6000000000000001, 1.5000000000000002, 1.4099999999999999, 1.3, 1.22, 1.1400000000000001, 1.0400000000000003, 0.98999999999999999, 0.98999999999999988, 0.98999999999999999, 0.98999999999999999, 0.98999999999999999],
      "text": ["Bank credit interest rates - to the private sector : 1.82 % (?)<br>Period: 2003<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.77 % (?)<br>Period: 2004<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.68 % (?)<br>Period: 2005<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.66 % (?)<br>Period: 2006<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.88 % (?)<br>Period: 2007<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.91 % (?)<br>Period: 2008<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.72 % (?)<br>Period: 2009<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.6 % (?)<br>Period: 2010<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.5 % (?)<br>Period: 2011<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.41 % (?)<br>Period: 2012<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.3 % (?)<br>Period: 2013<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.22 % (?)<br>Period: 2014<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.14 % (?)<br>Period: 2015<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 1.04 % (?)<br>Period: 2016<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 0.99 % (?)<br>Period: 2017<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 0.99 % (?)<br>Period: 2018<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 0.99 % (?)<br>Period: 2019<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 0.99 % (?)<br>Period: 2020<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Bank credit interest rates - to the private sector : 0.99 % (?)<br>Period: 2021<br>REMIND_12 region code: JPN<br>Countries in region: Japan"],
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
      "y": [11.459999999999999, 10.92, 10.750000000000002, 11.19, 13.02, 13.310000000000002, 12.190000000000001, 8.3300000000000001, 10.170000000000002, 10.600000000000001, 10.289999999999999, 10.250000000000002, 10.010000000000002, 9.6699999999999999, 9.5099999999999998, 9.4499999999999993, 9.4700000000000024, 9.1500000000000004, 8.6999999999999993],
      "text": ["Bank credit interest rates - to the private sector : 11.46 % (?)<br>Period: 2003<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 10.92 % (?)<br>Period: 2004<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 10.75 % (?)<br>Period: 2005<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 11.19 % (?)<br>Period: 2006<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 13.02 % (?)<br>Period: 2007<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 13.31 % (?)<br>Period: 2008<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 12.19 % (?)<br>Period: 2009<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 8.33 % (?)<br>Period: 2010<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 10.17 % (?)<br>Period: 2011<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 10.6 % (?)<br>Period: 2012<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 10.29 % (?)<br>Period: 2013<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 10.25 % (?)<br>Period: 2014<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 10.01 % (?)<br>Period: 2015<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 9.67 % (?)<br>Period: 2016<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 9.51 % (?)<br>Period: 2017<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 9.45 % (?)<br>Period: 2018<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 9.47 % (?)<br>Period: 2019<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 9.15 % (?)<br>Period: 2020<br>REMIND_12 region code: IND<br>Countries in region: India", "Bank credit interest rates - to the private sector : 8.7 % (?)<br>Period: 2021<br>REMIND_12 region code: IND<br>Countries in region: India"],
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
      "y": [4.1200000000000001, 4.3399999999999999, 6.1900000000000004, 7.9600000000000009, 8.0499999999999989, 5.0899999999999999, 3.25, 3.25, 3.25, 3.25, 3.25, 3.25, 3.2599999999999998, 3.5100000000000002, 4.0999999999999996, 4.9000000000000004, 5.2800000000000002, 3.54, 3.2499999999999996],
      "text": ["Bank credit interest rates - to the private sector : 4.12 % (?)<br>Period: 2003<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 4.34 % (?)<br>Period: 2004<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 6.19 % (?)<br>Period: 2005<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 7.96 % (?)<br>Period: 2006<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 8.05 % (?)<br>Period: 2007<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 5.09 % (?)<br>Period: 2008<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.25 % (?)<br>Period: 2009<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.25 % (?)<br>Period: 2010<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.25 % (?)<br>Period: 2011<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.25 % (?)<br>Period: 2012<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.25 % (?)<br>Period: 2013<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.25 % (?)<br>Period: 2014<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.26 % (?)<br>Period: 2015<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.51 % (?)<br>Period: 2016<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 4.1 % (?)<br>Period: 2017<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 4.9 % (?)<br>Period: 2018<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 5.28 % (?)<br>Period: 2019<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.54 % (?)<br>Period: 2020<br>REMIND_12 region code: USA<br>Countries in region: United States", "Bank credit interest rates - to the private sector : 3.25 % (?)<br>Period: 2021<br>REMIND_12 region code: USA<br>Countries in region: United States"],
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
      "y": [22.202540227179973, 20.433674780869097, 19.539522668973618, 17.272747815080535, 17.782168743299213, 17.179842390329512, 19.723607543127251, 18.734430376943944, 17.60339591215639, 17.039291241941061, 16.240071849501607, 16.124602927762663, 16.177713605782095, 16.608388343104135, 16.790489428574435, 16.531022073533233, 15.953988210035725, 15.491491241211836, 14.994181401009731],
      "text": ["Bank credit interest rates - to the private sector : 22.2 % (?)<br>Period: 2003<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 20.43 % (?)<br>Period: 2004<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 19.54 % (?)<br>Period: 2005<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 17.27 % (?)<br>Period: 2006<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 17.78 % (?)<br>Period: 2007<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 17.18 % (?)<br>Period: 2008<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 19.72 % (?)<br>Period: 2009<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 18.73 % (?)<br>Period: 2010<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 17.6 % (?)<br>Period: 2011<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 17.04 % (?)<br>Period: 2012<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 16.24 % (?)<br>Period: 2013<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 16.12 % (?)<br>Period: 2014<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 16.18 % (?)<br>Period: 2015<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 16.61 % (?)<br>Period: 2016<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 16.79 % (?)<br>Period: 2017<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 16.53 % (?)<br>Period: 2018<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 15.95 % (?)<br>Period: 2019<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 15.49 % (?)<br>Period: 2020<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Bank credit interest rates - to the private sector : 14.99 % (?)<br>Period: 2021<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [5.3086257338829785, 5.5772353237886323, 5.5838049851308913, 6.1303611382488761, 7.4706033046152838, 5.3100487060988097, 5.3083614275754165, 5.8055471103042651, 6.5513121516021577, 5.9944371976668016, 5.9944399963880679, 5.5966983706445239, 4.3538319478493275, 4.3538373120789666, 4.3538377174086271, 4.3540837595769704, 4.3544562003253127, 4.3538656336823021, 4.3538294685170014],
      "text": ["Bank credit interest rates - to the private sector : 5.31 % (?)<br>Period: 2003<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 5.58 % (?)<br>Period: 2004<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 5.58 % (?)<br>Period: 2005<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 6.13 % (?)<br>Period: 2006<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 7.47 % (?)<br>Period: 2007<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 5.31 % (?)<br>Period: 2008<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 5.31 % (?)<br>Period: 2009<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 5.81 % (?)<br>Period: 2010<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 6.55 % (?)<br>Period: 2011<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 5.99 % (?)<br>Period: 2012<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 5.99 % (?)<br>Period: 2013<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 5.6 % (?)<br>Period: 2014<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 4.35 % (?)<br>Period: 2015<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 4.35 % (?)<br>Period: 2016<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 4.35 % (?)<br>Period: 2017<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 4.35 % (?)<br>Period: 2018<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 4.35 % (?)<br>Period: 2019<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 4.35 % (?)<br>Period: 2020<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Bank credit interest rates - to the private sector : 4.35 % (?)<br>Period: 2021<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "text": "Bank credit interest rates - to the private sector  (REMIND_12)",
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
        "text": "% (?)",
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
    "b55cda63c23": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c2c087758": {
      "y": {}
    }
  },
  "cur_data": "b55cda63c23",
  "visdat": {
    "b55cda63c23": ["function (y) ", "x"],
    "b55c2c087758": ["function (y) ", "x"]
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

  
