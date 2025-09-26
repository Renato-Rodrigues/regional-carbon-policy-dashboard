(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_21_Education_Literacy_rate_index_line') 

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
      "y": [67.225617744207426, 67.242272770730338, 67.430380218983544, 67.459478192442091, 68.139745522529665, 68.79897527704999, 69.428923334257533, 70.309579220620535, 71.158969718913639, 71.808405267581662, 72.321971109558589, 72.789855357412804, 72.970942219382081, 73.031770155531859, 73.194744566563344, 73.225597521133821, 73.065175097669226, 72.943783356412922, 72.769557849910569],
      "text": ["Literacy rate index: 67.23 % (0-100)<br>Period: 2003<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Literacy rate index: 67.24 % (0-100)<br>Period: 2004<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Literacy rate index: 67.43 % (0-100)<br>Period: 2005<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 67.46 % (0-100)<br>Period: 2006<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 68.14 % (0-100)<br>Period: 2007<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 68.8 % (0-100)<br>Period: 2008<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 69.43 % (0-100)<br>Period: 2009<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 70.31 % (0-100)<br>Period: 2010<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 71.16 % (0-100)<br>Period: 2011<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 71.81 % (0-100)<br>Period: 2012<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 72.32 % (0-100)<br>Period: 2013<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 72.79 % (0-100)<br>Period: 2014<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 72.97 % (0-100)<br>Period: 2015<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 73.03 % (0-100)<br>Period: 2016<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 73.19 % (0-100)<br>Period: 2017<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 73.23 % (0-100)<br>Period: 2018<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 73.07 % (0-100)<br>Period: 2019<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 72.94 % (0-100)<br>Period: 2020<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 72.77 % (0-100)<br>Period: 2021<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(107,174,214,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [93.522003054211979, 93.483987966744195, 93.861232660322031, 93.775776528814532, 94.036167235376425, 94.53683404740336, 95.051757113882857, 95.958858950083552, 96.685755421423167, 97.086218569698318, 97.243639452434593, 97.332661807357951, 97.410371769702834, 97.707117025415926, 97.695149364376334, 97.853517057728951, 98.013434432068934, 98.00461989086034, 97.99440327252033],
      "text": ["Literacy rate index: 93.52 % (0-100)<br>Period: 2003<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 93.48 % (0-100)<br>Period: 2004<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 93.86 % (0-100)<br>Period: 2005<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 93.78 % (0-100)<br>Period: 2006<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 94.04 % (0-100)<br>Period: 2007<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 94.54 % (0-100)<br>Period: 2008<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 95.05 % (0-100)<br>Period: 2009<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Literacy rate index: 95.96 % (0-100)<br>Period: 2010<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Literacy rate index: 96.69 % (0-100)<br>Period: 2011<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 97.09 % (0-100)<br>Period: 2012<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 97.24 % (0-100)<br>Period: 2013<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 97.33 % (0-100)<br>Period: 2014<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 97.41 % (0-100)<br>Period: 2015<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 97.71 % (0-100)<br>Period: 2016<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 97.7 % (0-100)<br>Period: 2017<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 97.85 % (0-100)<br>Period: 2018<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 98.01 % (0-100)<br>Period: 2019<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 98 % (0-100)<br>Period: 2020<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Literacy rate index: 97.99 % (0-100)<br>Period: 2021<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "y": [99.713374815020231, 99.713582087507476, 99.713769759899535, 99.713928875532147, 99.714067010490993, 99.717070856772821, 99.720089168665837, 99.725466108302484, 99.741301889339752, 99.756594212488054, 99.772120874186967, 99.786070040515554, 99.801096191610284, 99.817227490189552, 99.832130094691166, 99.847313584894806, 99.863617211583957, 99.876704679996124, 99.8882251992774],
      "text": ["Literacy rate index: 99.71 % (0-100)<br>Period: 2003<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.71 % (0-100)<br>Period: 2004<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.71 % (0-100)<br>Period: 2005<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.71 % (0-100)<br>Period: 2006<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.71 % (0-100)<br>Period: 2007<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.72 % (0-100)<br>Period: 2008<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.72 % (0-100)<br>Period: 2009<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.73 % (0-100)<br>Period: 2010<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.74 % (0-100)<br>Period: 2011<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.76 % (0-100)<br>Period: 2012<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.77 % (0-100)<br>Period: 2013<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.79 % (0-100)<br>Period: 2014<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.8 % (0-100)<br>Period: 2015<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2016<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.83 % (0-100)<br>Period: 2017<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.85 % (0-100)<br>Period: 2018<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2019<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.88 % (0-100)<br>Period: 2020<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.89 % (0-100)<br>Period: 2021<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [74.542763809997197, 74.501834853520663, 74.661868934145872, 75.595869060206951, 75.297849984465273, 76.384076609000559, 76.75200507832362, 77.302264880020644, 77.548256447514888, 78.004532606097953, 78.4385425896767, 79.024379224841709, 79.921411522201637, 81.150461724594308, 81.584872685681304, 81.597482443463363, 82.155200263669727, 82.188164928073761, 82.148832008955281],
      "text": ["Literacy rate index: 74.54 % (0-100)<br>Period: 2003<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 74.5 % (0-100)<br>Period: 2004<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 74.66 % (0-100)<br>Period: 2005<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 75.6 % (0-100)<br>Period: 2006<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 75.3 % (0-100)<br>Period: 2007<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 76.38 % (0-100)<br>Period: 2008<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 76.75 % (0-100)<br>Period: 2009<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 77.3 % (0-100)<br>Period: 2010<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 77.55 % (0-100)<br>Period: 2011<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 78 % (0-100)<br>Period: 2012<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 78.44 % (0-100)<br>Period: 2013<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 79.02 % (0-100)<br>Period: 2014<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 79.92 % (0-100)<br>Period: 2015<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 81.15 % (0-100)<br>Period: 2016<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 81.58 % (0-100)<br>Period: 2017<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 81.6 % (0-100)<br>Period: 2018<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 82.16 % (0-100)<br>Period: 2019<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 82.19 % (0-100)<br>Period: 2020<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 82.15 % (0-100)<br>Period: 2021<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [99.822117752238654, 99.8220965350298, 99.822108164063948, 99.822139220768065, 99.822180148728691, 99.822213134296959, 99.822193780299898, 99.822228450905897, 99.82223451266114, 99.822134047282375, 99.822025170692811, 99.821924592683459, 99.821846507365422, 99.821770828656966, 99.821698217300224, 99.821621115348862, 99.821528393169871, 99.821430328212188, 99.821481835099561],
      "text": ["Literacy rate index: 99.82 % (0-100)<br>Period: 2003<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2004<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2005<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2006<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2007<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2008<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2009<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2010<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2011<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2012<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2013<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2014<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2015<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2016<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2017<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2018<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2019<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2020<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2021<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [98.754829379266681, 98.755649676457423, 98.756594282023244, 98.757488145799542, 98.759022048418245, 98.760676533517881, 98.761596030409365, 98.762197474266713, 98.762577294041733, 98.778311853176405, 98.794070611593057, 98.809755155793255, 98.825303968443706, 98.840993149391565, 98.856416795066238, 98.872102125168638, 98.887972126493167, 98.90371316741934, 98.919553600355499],
      "text": ["Literacy rate index: 98.75 % (0-100)<br>Period: 2003<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2004<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2005<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2006<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2007<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2008<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2009<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2010<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2011<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.78 % (0-100)<br>Period: 2012<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.79 % (0-100)<br>Period: 2013<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.81 % (0-100)<br>Period: 2014<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.83 % (0-100)<br>Period: 2015<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.84 % (0-100)<br>Period: 2016<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.86 % (0-100)<br>Period: 2017<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.87 % (0-100)<br>Period: 2018<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.89 % (0-100)<br>Period: 2019<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.9 % (0-100)<br>Period: 2020<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.92 % (0-100)<br>Period: 2021<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [96.63560081563692, 96.64193733031324, 97.115802837831879, 97.123486380556244, 97.285906260644794, 97.041486215306492, 97.085977837141058, 97.145029941996327, 97.171975711382927, 97.306330420495968, 97.504712043343289, 97.556067808090361, 97.640357829567435, 97.773800111368672, 97.895102748052068, 98.0166237831275, 98.121793543053002, 98.225708488754336, 98.265394858996018],
      "text": ["Literacy rate index: 96.64 % (0-100)<br>Period: 2003<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 96.64 % (0-100)<br>Period: 2004<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.12 % (0-100)<br>Period: 2005<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.12 % (0-100)<br>Period: 2006<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.29 % (0-100)<br>Period: 2007<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.04 % (0-100)<br>Period: 2008<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.09 % (0-100)<br>Period: 2009<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.15 % (0-100)<br>Period: 2010<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.17 % (0-100)<br>Period: 2011<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.31 % (0-100)<br>Period: 2012<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.5 % (0-100)<br>Period: 2013<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.56 % (0-100)<br>Period: 2014<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.64 % (0-100)<br>Period: 2015<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.77 % (0-100)<br>Period: 2016<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.9 % (0-100)<br>Period: 2017<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 98.02 % (0-100)<br>Period: 2018<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 98.12 % (0-100)<br>Period: 2019<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 98.23 % (0-100)<br>Period: 2020<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 98.27 % (0-100)<br>Period: 2021<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [62.749999999999993, 62.75, 62.750000000000007, 62.75, 64.060000000000002, 65.370000000000005, 66.679999999999993, 67.989999999999995, 69.299999999999997, 69.299999999999997, 69.300000000000011, 69.299999999999997, 69.299999999999997, 69.299999999999997, 69.299999999999997, 69.299999999999997, 69.299999999999997, 69.299999999999997, 69.299999999999997],
      "text": ["Literacy rate index: 62.75 % (0-100)<br>Period: 2003<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 62.75 % (0-100)<br>Period: 2004<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 62.75 % (0-100)<br>Period: 2005<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 62.75 % (0-100)<br>Period: 2006<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 64.06 % (0-100)<br>Period: 2007<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 65.37 % (0-100)<br>Period: 2008<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 66.68 % (0-100)<br>Period: 2009<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 67.99 % (0-100)<br>Period: 2010<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2011<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2012<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2013<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2014<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2015<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2016<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2017<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2018<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2019<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2020<br>REMIND_21 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2021<br>REMIND_21 region code: IND<br>Countries in region: India"],
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
      "y": [58.361377702091914, 59.387458191718018, 59.740848053569444, 61.27984559139756, 60.024536720075972, 58.867454345610817, 59.92874605674934, 60.913923355382046, 62.118336277483273, 63.275533050521496, 64.010156313889183, 64.860215618228835, 65.782199833923286, 66.548207840397083, 67.276273102784629, 68.179834554964074, 68.549351853545346, 68.47978267354938, 68.368728285151946],
      "text": ["Literacy rate index: 58.36 % (0-100)<br>Period: 2003<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 59.39 % (0-100)<br>Period: 2004<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 59.74 % (0-100)<br>Period: 2005<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 61.28 % (0-100)<br>Period: 2006<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 60.02 % (0-100)<br>Period: 2007<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 58.87 % (0-100)<br>Period: 2008<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 59.93 % (0-100)<br>Period: 2009<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 60.91 % (0-100)<br>Period: 2010<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 62.12 % (0-100)<br>Period: 2011<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 63.28 % (0-100)<br>Period: 2012<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 64.01 % (0-100)<br>Period: 2013<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 64.86 % (0-100)<br>Period: 2014<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 65.78 % (0-100)<br>Period: 2015<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 66.55 % (0-100)<br>Period: 2016<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 67.28 % (0-100)<br>Period: 2017<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 68.18 % (0-100)<br>Period: 2018<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 68.55 % (0-100)<br>Period: 2019<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 68.48 % (0-100)<br>Period: 2020<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 68.37 % (0-100)<br>Period: 2021<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [95.119442421097474, 95.119431857210827, 95.119411843411271, 95.119383754210489, 95.11952904276292, 95.119688276380614, 95.119865024271775, 95.120036917089735, 95.323129477700633, 95.526123241650765, 95.729117613395047, 95.932112337818438, 96.135104782467295, 96.338094930110515, 96.541052452659315, 96.744011267911517, 96.946968986457847, 97.149925235379257, 97.149980679986641],
      "text": ["Literacy rate index: 95.12 % (0-100)<br>Period: 2003<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2004<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2005<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2006<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2007<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2008<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2009<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2010<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.32 % (0-100)<br>Period: 2011<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.53 % (0-100)<br>Period: 2012<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.73 % (0-100)<br>Period: 2013<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.93 % (0-100)<br>Period: 2014<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.14 % (0-100)<br>Period: 2015<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.34 % (0-100)<br>Period: 2016<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.54 % (0-100)<br>Period: 2017<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.74 % (0-100)<br>Period: 2018<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.95 % (0-100)<br>Period: 2019<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 97.15 % (0-100)<br>Period: 2020<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 97.15 % (0-100)<br>Period: 2021<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [98.035211868359937, 98.037896367137975, 98.039247618175963, 98.040274407542483, 98.042958846904554, 98.046520662068119, 98.048694815592086, 98.050829951190707, 98.053864938008829, 98.112597058960091, 98.178377960088213, 98.24217243810763, 98.29925241251847, 98.354371198155661, 98.408119104161628, 98.461453086941745, 98.507342360078411, 98.507355323670282, 98.514501820530214],
      "text": ["Literacy rate index: 98.04 % (0-100)<br>Period: 2003<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.04 % (0-100)<br>Period: 2004<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.04 % (0-100)<br>Period: 2005<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.04 % (0-100)<br>Period: 2006<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.04 % (0-100)<br>Period: 2007<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.05 % (0-100)<br>Period: 2008<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.05 % (0-100)<br>Period: 2009<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.05 % (0-100)<br>Period: 2010<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.05 % (0-100)<br>Period: 2011<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.11 % (0-100)<br>Period: 2012<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.18 % (0-100)<br>Period: 2013<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.24 % (0-100)<br>Period: 2014<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.3 % (0-100)<br>Period: 2015<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.35 % (0-100)<br>Period: 2016<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.41 % (0-100)<br>Period: 2017<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.46 % (0-100)<br>Period: 2018<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.51 % (0-100)<br>Period: 2019<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.51 % (0-100)<br>Period: 2020<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Literacy rate index: 98.51 % (0-100)<br>Period: 2021<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus"],
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
      "text": "Literacy rate index (REMIND_21)",
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
      "ticktext": ["60", "70", "80", "90", "100"],
      "tickvals": [60, 70, 80, 90, 100],
      "categoryorder": "array",
      "categoryarray": ["60", "70", "80", "90", "100"],
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
        "text": "% (0-100)",
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
    "b55c6eab6135": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c678f1759": {
      "y": {}
    }
  },
  "cur_data": "b55c6eab6135",
  "visdat": {
    "b55c6eab6135": ["function (y) ", "x"],
    "b55c678f1759": ["function (y) ", "x"]
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

  
