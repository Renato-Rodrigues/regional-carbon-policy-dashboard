(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_12_Government_Tax_revenue_line') 

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
      "y": [18.336286265946917, 18.392856782808742, 18.628721444080476, 18.703355380658934, 18.40337851165339, 18.05259742877001, 17.091285816862836, 15.961378097748542, 15.913011929825275, 16.216455456164958, 16.500532102311972, 16.61204906624598, 16.991081100786957, 17.204042725601337, 17.219552808911864, 17.89006816632034, 17.837054702243535, 17.946224453701316, 18.048660197088545],
      "text": ["Tax revenue: 18.34 % (GDP)<br>Period: 2003<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.39 % (GDP)<br>Period: 2004<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.63 % (GDP)<br>Period: 2005<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.7 % (GDP)<br>Period: 2006<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.4 % (GDP)<br>Period: 2007<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.05 % (GDP)<br>Period: 2008<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.09 % (GDP)<br>Period: 2009<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 15.96 % (GDP)<br>Period: 2010<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 15.91 % (GDP)<br>Period: 2011<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.22 % (GDP)<br>Period: 2012<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.5 % (GDP)<br>Period: 2013<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.61 % (GDP)<br>Period: 2014<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.99 % (GDP)<br>Period: 2015<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.2 % (GDP)<br>Period: 2016<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.22 % (GDP)<br>Period: 2017<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.89 % (GDP)<br>Period: 2018<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.84 % (GDP)<br>Period: 2019<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.95 % (GDP)<br>Period: 2020<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.05 % (GDP)<br>Period: 2021<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [16.076345678547966, 16.183734329551498, 17.452088702911752, 17.760671540256265, 17.431026876324825, 17.856343184540631, 17.457964030737031, 17.552608988765716, 18.270021334906414, 17.940534533637226, 17.851379789129698, 17.842853644129882, 18.84714760255984, 18.726734156744719, 18.676809512885004, 18.439641464086584, 17.820170658145511, 18.152590471020609, 18.312362507868915],
      "text": ["Tax revenue: 16.08 % (GDP)<br>Period: 2003<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 16.18 % (GDP)<br>Period: 2004<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.45 % (GDP)<br>Period: 2005<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.76 % (GDP)<br>Period: 2006<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.43 % (GDP)<br>Period: 2007<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.86 % (GDP)<br>Period: 2008<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.46 % (GDP)<br>Period: 2009<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Tax revenue: 17.55 % (GDP)<br>Period: 2010<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Tax revenue: 18.27 % (GDP)<br>Period: 2011<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.94 % (GDP)<br>Period: 2012<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.85 % (GDP)<br>Period: 2013<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.84 % (GDP)<br>Period: 2014<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.85 % (GDP)<br>Period: 2015<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.73 % (GDP)<br>Period: 2016<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.68 % (GDP)<br>Period: 2017<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.44 % (GDP)<br>Period: 2018<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.82 % (GDP)<br>Period: 2019<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.15 % (GDP)<br>Period: 2020<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.31 % (GDP)<br>Period: 2021<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "y": [9.8037360493472256, 10.040497450522391, 10.595178387885321, 10.900762847939015, 11.064311331068946, 11.086976950225688, 10.963631308854966, 10.487520369330477, 10.184671797045398, 10.295319305149617, 10.439407538351732, 10.225849334107107, 10.322370415862993, 10.422984767630137, 10.611661417288436, 10.673370976599729, 10.661304422556478, 10.645830026674728, 10.628563718718389],
      "text": ["Tax revenue: 9.8 % (GDP)<br>Period: 2003<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Tax revenue: 10.04 % (GDP)<br>Period: 2004<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Tax revenue: 10.6 % (GDP)<br>Period: 2005<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.9 % (GDP)<br>Period: 2006<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 11.06 % (GDP)<br>Period: 2007<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 11.09 % (GDP)<br>Period: 2008<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.96 % (GDP)<br>Period: 2009<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.49 % (GDP)<br>Period: 2010<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.18 % (GDP)<br>Period: 2011<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.3 % (GDP)<br>Period: 2012<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.44 % (GDP)<br>Period: 2013<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.23 % (GDP)<br>Period: 2014<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.32 % (GDP)<br>Period: 2015<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.42 % (GDP)<br>Period: 2016<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.61 % (GDP)<br>Period: 2017<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.67 % (GDP)<br>Period: 2018<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.66 % (GDP)<br>Period: 2019<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.65 % (GDP)<br>Period: 2020<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.63 % (GDP)<br>Period: 2021<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [13.622858580789709, 13.722323045644471, 15.837797526119843, 15.988280329375776, 16.018468220426406, 15.700536203042981, 13.526209155966331, 13.425705122889788, 13.984390208527861, 13.666187525611068, 13.539383580749194, 13.506184412561341, 11.892196031635448, 11.014029598306578, 11.261186930096532, 12.582113936989167, 12.005941456988641, 11.939728235229035, 12.562442864156326],
      "text": ["Tax revenue: 13.62 % (GDP)<br>Period: 2003<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 13.72 % (GDP)<br>Period: 2004<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.84 % (GDP)<br>Period: 2005<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.99 % (GDP)<br>Period: 2006<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 16.02 % (GDP)<br>Period: 2007<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.7 % (GDP)<br>Period: 2008<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.53 % (GDP)<br>Period: 2009<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.43 % (GDP)<br>Period: 2010<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.98 % (GDP)<br>Period: 2011<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.67 % (GDP)<br>Period: 2012<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.54 % (GDP)<br>Period: 2013<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.51 % (GDP)<br>Period: 2014<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 11.89 % (GDP)<br>Period: 2015<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 11.01 % (GDP)<br>Period: 2016<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 11.26 % (GDP)<br>Period: 2017<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.58 % (GDP)<br>Period: 2018<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.01 % (GDP)<br>Period: 2019<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 11.94 % (GDP)<br>Period: 2020<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.56 % (GDP)<br>Period: 2021<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [9.1099999999999994, 9.5700000000000021, 10.080000000000002, 11.130000000000003, 12.110000000000001, 10.980000000000002, 9.8100000000000023, 10.390000000000001, 10.18, 10.840000000000002, 11, 9.9800000000000022, 10.57, 11.150000000000002, 11.390000000000002, 12.02, 12.019999999999998, 12.02, 12.019999999999998],
      "text": ["Tax revenue: 9.11 % (GDP)<br>Period: 2003<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 9.57 % (GDP)<br>Period: 2004<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 10.08 % (GDP)<br>Period: 2005<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 11.13 % (GDP)<br>Period: 2006<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 12.11 % (GDP)<br>Period: 2007<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 10.98 % (GDP)<br>Period: 2008<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 9.81 % (GDP)<br>Period: 2009<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 10.39 % (GDP)<br>Period: 2010<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 10.18 % (GDP)<br>Period: 2011<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 10.84 % (GDP)<br>Period: 2012<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 11 % (GDP)<br>Period: 2013<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 9.98 % (GDP)<br>Period: 2014<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 10.57 % (GDP)<br>Period: 2015<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 11.15 % (GDP)<br>Period: 2016<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 11.39 % (GDP)<br>Period: 2017<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2018<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2019<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2020<br>REMIND_12 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2021<br>REMIND_12 region code: IND<br>Countries in region: India"],
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
      "y": [9.3900000000000006, 9.5399999999999991, 10.68, 11.31, 11.289999999999999, 10.279999999999999, 7.9000000000000004, 8.5600000000000005, 9.5399999999999991, 9.7599999999999998, 10.48, 10.94, 11.24, 10.92, 11.58, 9.9900000000000002, 9.9600000000000009, 10.34, 11.44],
      "text": ["Tax revenue: 9.39 % (GDP)<br>Period: 2003<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 9.54 % (GDP)<br>Period: 2004<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 10.68 % (GDP)<br>Period: 2005<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 11.31 % (GDP)<br>Period: 2006<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 11.29 % (GDP)<br>Period: 2007<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 10.28 % (GDP)<br>Period: 2008<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 7.9 % (GDP)<br>Period: 2009<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 8.56 % (GDP)<br>Period: 2010<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 9.54 % (GDP)<br>Period: 2011<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 9.76 % (GDP)<br>Period: 2012<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 10.48 % (GDP)<br>Period: 2013<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 10.94 % (GDP)<br>Period: 2014<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 11.24 % (GDP)<br>Period: 2015<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 10.92 % (GDP)<br>Period: 2016<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 11.58 % (GDP)<br>Period: 2017<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 9.99 % (GDP)<br>Period: 2018<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 9.96 % (GDP)<br>Period: 2019<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 10.34 % (GDP)<br>Period: 2020<br>REMIND_12 region code: USA<br>Countries in region: United States", "Tax revenue: 11.44 % (GDP)<br>Period: 2021<br>REMIND_12 region code: USA<br>Countries in region: United States"],
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
      "y": [19.051884036299128, 18.899867205025615, 19.133900310590221, 19.482358518355682, 19.717310293726506, 19.651912642967662, 18.740964346376735, 19.05941192810624, 19.298373240760579, 19.526871347325763, 19.944516128274621, 19.994839295212621, 20.020426921626445, 20.026839500524602, 20.114983750829076, 20.165487630391958, 20.154116021404484, 19.882136155527753, 20.463077142757705],
      "text": ["Tax revenue: 19.05 % (GDP)<br>Period: 2003<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 18.9 % (GDP)<br>Period: 2004<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.13 % (GDP)<br>Period: 2005<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.48 % (GDP)<br>Period: 2006<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.72 % (GDP)<br>Period: 2007<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.65 % (GDP)<br>Period: 2008<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 18.74 % (GDP)<br>Period: 2009<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.06 % (GDP)<br>Period: 2010<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.3 % (GDP)<br>Period: 2011<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.53 % (GDP)<br>Period: 2012<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.94 % (GDP)<br>Period: 2013<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.99 % (GDP)<br>Period: 2014<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 20.02 % (GDP)<br>Period: 2015<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 20.03 % (GDP)<br>Period: 2016<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 20.11 % (GDP)<br>Period: 2017<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 20.17 % (GDP)<br>Period: 2018<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 20.15 % (GDP)<br>Period: 2019<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 19.88 % (GDP)<br>Period: 2020<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 20.46 % (GDP)<br>Period: 2021<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [8.5739512381486787, 8.5744539589027529, 8.5745055699173474, 9.0645914115305555, 9.7761990931624307, 10.108217426301639, 10.317632556061557, 10.219702774236648, 10.321072998308692, 10.271125283713053, 9.9214922608864047, 9.6915100966373551, 9.3892068861282389, 9.1287692864486623, 9.4291072670384235, 9.0595730298344979, 8.5001581278839993, 8.0966705577207403, 7.9754772237919243],
      "text": ["Tax revenue: 8.57 % (GDP)<br>Period: 2003<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.57 % (GDP)<br>Period: 2004<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.57 % (GDP)<br>Period: 2005<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.06 % (GDP)<br>Period: 2006<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.78 % (GDP)<br>Period: 2007<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.11 % (GDP)<br>Period: 2008<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.32 % (GDP)<br>Period: 2009<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.22 % (GDP)<br>Period: 2010<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.32 % (GDP)<br>Period: 2011<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.27 % (GDP)<br>Period: 2012<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.92 % (GDP)<br>Period: 2013<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.69 % (GDP)<br>Period: 2014<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.39 % (GDP)<br>Period: 2015<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.13 % (GDP)<br>Period: 2016<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.43 % (GDP)<br>Period: 2017<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.06 % (GDP)<br>Period: 2018<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.5 % (GDP)<br>Period: 2019<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.1 % (GDP)<br>Period: 2020<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 7.98 % (GDP)<br>Period: 2021<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "text": "Tax revenue (REMIND_12)",
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
      "ticktext": ["25", "50", "75", "100"],
      "tickvals": [25, 50, 75, 100],
      "categoryorder": "array",
      "categoryarray": ["25", "50", "75", "100"],
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
    "b55c421a79a2": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c6784caa": {
      "y": {}
    }
  },
  "cur_data": "b55c421a79a2",
  "visdat": {
    "b55c421a79a2": ["function (y) ", "x"],
    "b55c6784caa": ["function (y) ", "x"]
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

  
