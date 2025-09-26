(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_26_Government_Tax_revenue_line') 

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
      "text": ["Tax revenue: 18.34 % (GDP)<br>Period: 2003<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.39 % (GDP)<br>Period: 2004<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.63 % (GDP)<br>Period: 2005<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.7 % (GDP)<br>Period: 2006<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.4 % (GDP)<br>Period: 2007<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.05 % (GDP)<br>Period: 2008<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.09 % (GDP)<br>Period: 2009<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 15.96 % (GDP)<br>Period: 2010<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 15.91 % (GDP)<br>Period: 2011<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.22 % (GDP)<br>Period: 2012<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.5 % (GDP)<br>Period: 2013<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.61 % (GDP)<br>Period: 2014<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.99 % (GDP)<br>Period: 2015<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.2 % (GDP)<br>Period: 2016<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.22 % (GDP)<br>Period: 2017<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.89 % (GDP)<br>Period: 2018<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.84 % (GDP)<br>Period: 2019<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.95 % (GDP)<br>Period: 2020<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.05 % (GDP)<br>Period: 2021<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [15.635592395170509, 16.223326849965325, 16.680745228158855, 16.944681147279049, 16.590520114617561, 16.70573902871206, 15.776133241738057, 16.129060338023791, 16.4236112571487, 16.110266498616603, 15.471753595419074, 14.833316878071397, 14.572979000546459, 14.78063754971544, 14.972461249557316, 15.109983077802022, 15.206362426643336, 14.117059120958622, 16.217484385777244],
      "text": ["Tax revenue: 15.64 % (GDP)<br>Period: 2003<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.22 % (GDP)<br>Period: 2004<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.68 % (GDP)<br>Period: 2005<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.94 % (GDP)<br>Period: 2006<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.59 % (GDP)<br>Period: 2007<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.71 % (GDP)<br>Period: 2008<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 15.78 % (GDP)<br>Period: 2009<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.13 % (GDP)<br>Period: 2010<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.42 % (GDP)<br>Period: 2011<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.11 % (GDP)<br>Period: 2012<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 15.47 % (GDP)<br>Period: 2013<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.83 % (GDP)<br>Period: 2014<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.57 % (GDP)<br>Period: 2015<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.78 % (GDP)<br>Period: 2016<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.97 % (GDP)<br>Period: 2017<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 15.11 % (GDP)<br>Period: 2018<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 15.21 % (GDP)<br>Period: 2019<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.12 % (GDP)<br>Period: 2020<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.22 % (GDP)<br>Period: 2021<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland"],
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
      "text": ["Tax revenue: 9.8 % (GDP)<br>Period: 2003<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Tax revenue: 10.04 % (GDP)<br>Period: 2004<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Tax revenue: 10.6 % (GDP)<br>Period: 2005<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.9 % (GDP)<br>Period: 2006<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 11.06 % (GDP)<br>Period: 2007<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 11.09 % (GDP)<br>Period: 2008<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.96 % (GDP)<br>Period: 2009<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.49 % (GDP)<br>Period: 2010<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.18 % (GDP)<br>Period: 2011<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.3 % (GDP)<br>Period: 2012<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.44 % (GDP)<br>Period: 2013<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.23 % (GDP)<br>Period: 2014<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.32 % (GDP)<br>Period: 2015<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.42 % (GDP)<br>Period: 2016<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.61 % (GDP)<br>Period: 2017<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.67 % (GDP)<br>Period: 2018<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.66 % (GDP)<br>Period: 2019<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.65 % (GDP)<br>Period: 2020<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.63 % (GDP)<br>Period: 2021<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [16.114227877159017, 16.180316736223038, 17.519021740136616, 17.831860233214659, 17.505208251090206, 17.95883788967086, 17.608978534779858, 17.681140366239841, 18.43779674342397, 18.107922428077263, 18.07039427706183, 18.121652025430539, 19.245483064406216, 19.096373660745456, 19.025303361497389, 18.753733477837912, 18.067310562311565, 18.535892907832228, 18.5125304102047],
      "text": ["Tax revenue: 16.11 % (GDP)<br>Period: 2003<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 16.18 % (GDP)<br>Period: 2004<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.52 % (GDP)<br>Period: 2005<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.83 % (GDP)<br>Period: 2006<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.51 % (GDP)<br>Period: 2007<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.96 % (GDP)<br>Period: 2008<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.61 % (GDP)<br>Period: 2009<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Tax revenue: 17.68 % (GDP)<br>Period: 2010<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Tax revenue: 18.44 % (GDP)<br>Period: 2011<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.11 % (GDP)<br>Period: 2012<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.07 % (GDP)<br>Period: 2013<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.12 % (GDP)<br>Period: 2014<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 19.25 % (GDP)<br>Period: 2015<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 19.1 % (GDP)<br>Period: 2016<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 19.03 % (GDP)<br>Period: 2017<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.75 % (GDP)<br>Period: 2018<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.07 % (GDP)<br>Period: 2019<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.54 % (GDP)<br>Period: 2020<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.51 % (GDP)<br>Period: 2021<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "y": [13.622858580789709, 13.722323045644471, 15.837797526119843, 15.988280329375776, 16.018468220426406, 15.700536203042981, 13.526209155966331, 13.425705122889788, 13.984390208527861, 13.666187525611068, 13.539383580749194, 13.506184412561341, 11.892196031635448, 11.014029598306578, 11.261186930096532, 12.582113936989167, 12.005941456988641, 11.939728235229035, 12.562442864156326],
      "text": ["Tax revenue: 13.62 % (GDP)<br>Period: 2003<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 13.72 % (GDP)<br>Period: 2004<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.84 % (GDP)<br>Period: 2005<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.99 % (GDP)<br>Period: 2006<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 16.02 % (GDP)<br>Period: 2007<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.7 % (GDP)<br>Period: 2008<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.53 % (GDP)<br>Period: 2009<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.43 % (GDP)<br>Period: 2010<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.98 % (GDP)<br>Period: 2011<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.67 % (GDP)<br>Period: 2012<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.54 % (GDP)<br>Period: 2013<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.51 % (GDP)<br>Period: 2014<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 11.89 % (GDP)<br>Period: 2015<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 11.01 % (GDP)<br>Period: 2016<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 11.26 % (GDP)<br>Period: 2017<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.58 % (GDP)<br>Period: 2018<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.01 % (GDP)<br>Period: 2019<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 11.94 % (GDP)<br>Period: 2020<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.56 % (GDP)<br>Period: 2021<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [19.248087072057682, 19.09773237180929, 19.024186917803711, 19.404031897315207, 19.511834532594847, 19.585931313414783, 18.177368828887104, 18.356891820656898, 18.390695335417547, 18.919571914809413, 19.464846803780247, 19.542885693705262, 20.232851918397728, 19.454758601926134, 18.746713613960086, 17.99742813466348, 18.144604571674595, 17.890580092869861, 18.064185697624943],
      "text": ["Tax revenue: 19.25 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.1 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.02 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.4 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.51 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.59 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.18 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.36 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.39 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.92 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.46 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.54 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 20.23 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.45 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.75 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.14 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 17.89 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.06 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [13.37313062343064, 13.373633882834651, 13.470586841077296, 13.555239331556033, 13.572936115727364, 13.495648590413522, 13.115113059021967, 13.2178483354951, 13.486420480103606, 13.413730475261453, 15.268075161701649, 15.696083203133844, 15.766396439421724, 15.342193530118914, 15.277851187874841, 15.746947977049546, 15.26371050624248, 15.078952583346027, 16.281792201219762],
      "text": ["Tax revenue: 13.37 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.37 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.47 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.56 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.57 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.5 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.12 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.22 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.49 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.41 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.27 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.7 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.77 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.34 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.28 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.75 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.26 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.08 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 16.28 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [9.1099999999999994, 9.5700000000000003, 10.08, 11.130000000000001, 12.109999999999999, 10.98, 9.8100000000000005, 10.389999999999999, 10.18, 10.84, 11, 9.9800000000000004, 10.57, 11.15, 11.390000000000001, 12.020000000000001, 12.02, 12.02, 12.019999999999998],
      "text": ["Tax revenue: 9.11 % (GDP)<br>Period: 2003<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 9.57 % (GDP)<br>Period: 2004<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 10.08 % (GDP)<br>Period: 2005<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 11.13 % (GDP)<br>Period: 2006<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 12.11 % (GDP)<br>Period: 2007<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 10.98 % (GDP)<br>Period: 2008<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 9.81 % (GDP)<br>Period: 2009<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 10.39 % (GDP)<br>Period: 2010<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 10.18 % (GDP)<br>Period: 2011<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 10.84 % (GDP)<br>Period: 2012<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 11 % (GDP)<br>Period: 2013<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 9.98 % (GDP)<br>Period: 2014<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 10.57 % (GDP)<br>Period: 2015<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 11.15 % (GDP)<br>Period: 2016<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 11.39 % (GDP)<br>Period: 2017<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2018<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2019<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2020<br>REMIND_26 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2021<br>REMIND_26 region code: IND<br>Countries in region: India"],
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
      "text": ["Tax revenue: 9.39 % (GDP)<br>Period: 2003<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 9.54 % (GDP)<br>Period: 2004<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 10.68 % (GDP)<br>Period: 2005<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 11.31 % (GDP)<br>Period: 2006<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 11.29 % (GDP)<br>Period: 2007<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 10.28 % (GDP)<br>Period: 2008<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 7.9 % (GDP)<br>Period: 2009<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 8.56 % (GDP)<br>Period: 2010<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 9.54 % (GDP)<br>Period: 2011<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 9.76 % (GDP)<br>Period: 2012<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 10.48 % (GDP)<br>Period: 2013<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 10.94 % (GDP)<br>Period: 2014<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 11.24 % (GDP)<br>Period: 2015<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 10.92 % (GDP)<br>Period: 2016<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 11.58 % (GDP)<br>Period: 2017<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 9.99 % (GDP)<br>Period: 2018<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 9.96 % (GDP)<br>Period: 2019<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 10.34 % (GDP)<br>Period: 2020<br>REMIND_26 region code: USA<br>Countries in region: United States", "Tax revenue: 11.44 % (GDP)<br>Period: 2021<br>REMIND_26 region code: USA<br>Countries in region: United States"],
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
      "y": [16.719999999999999, 15.690000000000001, 16.469999999999995, 17.16, 18.09, 18.27, 16.050000000000001, 16.620000000000001, 16.780000000000001, 16.099999999999998, 15.75, 15.720000000000001, 15.710000000000001, 16.32, 16.850000000000001, 17.359999999999999, 17.34, 17.480000000000004, 19.149999999999999],
      "text": ["Tax revenue: 16.72 % (GDP)<br>Period: 2003<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 15.69 % (GDP)<br>Period: 2004<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.47 % (GDP)<br>Period: 2005<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 17.16 % (GDP)<br>Period: 2006<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 18.09 % (GDP)<br>Period: 2007<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 18.27 % (GDP)<br>Period: 2008<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.05 % (GDP)<br>Period: 2009<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.62 % (GDP)<br>Period: 2010<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.78 % (GDP)<br>Period: 2011<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.1 % (GDP)<br>Period: 2012<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 15.75 % (GDP)<br>Period: 2013<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 15.72 % (GDP)<br>Period: 2014<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 15.71 % (GDP)<br>Period: 2015<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.32 % (GDP)<br>Period: 2016<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.85 % (GDP)<br>Period: 2017<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 17.36 % (GDP)<br>Period: 2018<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 17.34 % (GDP)<br>Period: 2019<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 17.48 % (GDP)<br>Period: 2020<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Tax revenue: 19.15 % (GDP)<br>Period: 2021<br>REMIND_26 region code: POL<br>Countries in region: Poland"],
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
      "y": [11, 10.43, 10.66, 10.85, 11.33, 11.470000000000001, 11.610000000000001, 11.19, 11.48, 11.619999999999999, 11.609999999999999, 11.48, 11.48, 11.300000000000001, 11.42, 11.460000000000001, 11.41, 10.57, 11.18],
      "text": ["Tax revenue: 11 % (GDP)<br>Period: 2003<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.43 % (GDP)<br>Period: 2004<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.66 % (GDP)<br>Period: 2005<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.85 % (GDP)<br>Period: 2006<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.33 % (GDP)<br>Period: 2007<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.47 % (GDP)<br>Period: 2008<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.61 % (GDP)<br>Period: 2009<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.19 % (GDP)<br>Period: 2010<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.48 % (GDP)<br>Period: 2011<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.62 % (GDP)<br>Period: 2012<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.61 % (GDP)<br>Period: 2013<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.48 % (GDP)<br>Period: 2014<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.48 % (GDP)<br>Period: 2015<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.3 % (GDP)<br>Period: 2016<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.42 % (GDP)<br>Period: 2017<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.46 % (GDP)<br>Period: 2018<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.41 % (GDP)<br>Period: 2019<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.57 % (GDP)<br>Period: 2020<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.18 % (GDP)<br>Period: 2021<br>REMIND_26 region code: DEU<br>Countries in region: Germany"],
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
      "y": [17.061829187951552, 17.232663059947203, 17.071844836862013, 16.874596447147695, 16.972916662749817, 16.318326936349777, 15.484187115550091, 15.224420299971197, 15.843332168669866, 16.014039276199526, 16.447776555885536, 16.410884754305783, 16.926223502894121, 17.119619976127211, 17.191801742677608, 17.055572076204371, 17.370340914803268, 17.163652569494609, 17.063800488227198],
      "text": ["Tax revenue: 17.06 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.23 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.07 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.87 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.97 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.32 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 15.48 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 15.22 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 15.84 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.01 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.45 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.41 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.93 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.12 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.19 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.06 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.37 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.16 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.06 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [24.16, 25.07, 25.460000000000001, 26.82, 25.940000000000001, 23.809999999999999, 22.059999999999999, 21.84, 21.84, 22.520000000000003, 22.93, 23.079999999999998, 18.73, 19.079999999999998, 18.199999999999999, 18.039999999999999, 17.710000000000001, 16.199999999999999, 17.16],
      "text": ["Tax revenue: 24.16 % (GDP)<br>Period: 2003<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 25.07 % (GDP)<br>Period: 2004<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 25.46 % (GDP)<br>Period: 2005<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 26.82 % (GDP)<br>Period: 2006<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 25.94 % (GDP)<br>Period: 2007<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 23.81 % (GDP)<br>Period: 2008<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 22.06 % (GDP)<br>Period: 2009<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 21.84 % (GDP)<br>Period: 2010<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 21.84 % (GDP)<br>Period: 2011<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 22.52 % (GDP)<br>Period: 2012<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 22.93 % (GDP)<br>Period: 2013<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 23.08 % (GDP)<br>Period: 2014<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 18.73 % (GDP)<br>Period: 2015<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 19.08 % (GDP)<br>Period: 2016<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 18.2 % (GDP)<br>Period: 2017<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 18.04 % (GDP)<br>Period: 2018<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 17.71 % (GDP)<br>Period: 2019<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 16.2 % (GDP)<br>Period: 2020<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 17.16 % (GDP)<br>Period: 2021<br>REMIND_26 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [26.511901310194084, 26.929847492970392, 28.016300005820337, 27.580723852694742, 28.364058429480334, 27.27318390051353, 26.672059517470203, 26.555130141646053, 26.578223750607378, 26.648993318242734, 26.959145662675834, 27.711265748118663, 27.259063041506447, 27.642740517010431, 27.662958575534439, 27.273862205411501, 27.710726541352077, 27.084011720547316, 27.606496103209821],
      "text": ["Tax revenue: 26.51 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.93 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 28.02 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.58 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 28.36 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.27 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.67 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.56 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.58 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.65 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.96 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.71 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.26 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.64 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.66 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.27 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.71 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.08 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.61 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [22.120000000000001, 22.160000000000004, 22.299999999999997, 22.579999999999998, 22.120000000000005, 22.010000000000002, 20.699999999999996, 21.949999999999999, 21.819999999999997, 22.529999999999994, 23.209999999999994, 23.16, 23.199999999999996, 23.059999999999995, 23.630000000000003, 24.169999999999998, 24.509999999999998, 24.639999999999997, 23.960000000000001],
      "text": ["Tax revenue: 22.12 % (GDP)<br>Period: 2003<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.16 % (GDP)<br>Period: 2004<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.3 % (GDP)<br>Period: 2005<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.58 % (GDP)<br>Period: 2006<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.12 % (GDP)<br>Period: 2007<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.01 % (GDP)<br>Period: 2008<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 20.7 % (GDP)<br>Period: 2009<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 21.95 % (GDP)<br>Period: 2010<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 21.82 % (GDP)<br>Period: 2011<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.53 % (GDP)<br>Period: 2012<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.21 % (GDP)<br>Period: 2013<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.16 % (GDP)<br>Period: 2014<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.2 % (GDP)<br>Period: 2015<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.06 % (GDP)<br>Period: 2016<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.63 % (GDP)<br>Period: 2017<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 24.17 % (GDP)<br>Period: 2018<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 24.51 % (GDP)<br>Period: 2019<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 24.64 % (GDP)<br>Period: 2020<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.96 % (GDP)<br>Period: 2021<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [24.559227080581717, 25.149225006291228, 25.4892387100039, 25.769282047265765, 25.989324597440241, 26.459252645985647, 24.169311943403162, 25.269292595098953, 25.819262247191908, 25.089332464563938, 25.119342960253025, 24.869312200669391, 25.049336399663876, 25.439350032913779, 25.579358939921246, 25.529393343732409, 25.089416403065716, 24.799431439862975, 26.219367765497157],
      "text": ["Tax revenue: 24.56 % (GDP)<br>Period: 2003<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.15 % (GDP)<br>Period: 2004<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.49 % (GDP)<br>Period: 2005<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.77 % (GDP)<br>Period: 2006<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.99 % (GDP)<br>Period: 2007<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 26.46 % (GDP)<br>Period: 2008<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.17 % (GDP)<br>Period: 2009<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.27 % (GDP)<br>Period: 2010<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.82 % (GDP)<br>Period: 2011<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.09 % (GDP)<br>Period: 2012<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.12 % (GDP)<br>Period: 2013<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.87 % (GDP)<br>Period: 2014<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.05 % (GDP)<br>Period: 2015<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.44 % (GDP)<br>Period: 2016<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.58 % (GDP)<br>Period: 2017<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.53 % (GDP)<br>Period: 2018<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.09 % (GDP)<br>Period: 2019<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.8 % (GDP)<br>Period: 2020<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 26.22 % (GDP)<br>Period: 2021<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [26.649999999999999, 26.309999999999999, 25.510000000000002, 25.050000000000001, 25.390000000000001, 26.079999999999998, 25.23, 25.280000000000001, 25.43, 25.93, 26.420000000000002, 26.419999999999998, 26.829999999999998, 25.420000000000002, 25.420000000000002, 25.419999999999998, 25.579999999999998, 24.420000000000002, 25.84],
      "text": ["Tax revenue: 26.65 % (GDP)<br>Period: 2003<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.31 % (GDP)<br>Period: 2004<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.51 % (GDP)<br>Period: 2005<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.05 % (GDP)<br>Period: 2006<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.39 % (GDP)<br>Period: 2007<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.08 % (GDP)<br>Period: 2008<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.23 % (GDP)<br>Period: 2009<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.28 % (GDP)<br>Period: 2010<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.43 % (GDP)<br>Period: 2011<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.93 % (GDP)<br>Period: 2012<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.42 % (GDP)<br>Period: 2013<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.42 % (GDP)<br>Period: 2014<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.83 % (GDP)<br>Period: 2015<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.42 % (GDP)<br>Period: 2016<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.42 % (GDP)<br>Period: 2017<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.42 % (GDP)<br>Period: 2018<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.58 % (GDP)<br>Period: 2019<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 24.42 % (GDP)<br>Period: 2020<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.84 % (GDP)<br>Period: 2021<br>REMIND_26 region code: AUT<br>Countries in region: Austria"],
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
      "y": [8.5739512381486787, 8.5744539589027529, 8.5745055699173474, 9.0645914115305555, 9.7761990931624307, 10.108217426301639, 10.317632556061557, 10.219702774236648, 10.321072998308692, 10.271125283713053, 9.9214922608864047, 9.6915100966373551, 9.3892068861282389, 9.1287692864486623, 9.4291072670384235, 9.0595730298344979, 8.5001581278839993, 8.0966705577207403, 7.9754772237919243],
      "text": ["Tax revenue: 8.57 % (GDP)<br>Period: 2003<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.57 % (GDP)<br>Period: 2004<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.57 % (GDP)<br>Period: 2005<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.06 % (GDP)<br>Period: 2006<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.78 % (GDP)<br>Period: 2007<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.11 % (GDP)<br>Period: 2008<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.32 % (GDP)<br>Period: 2009<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.22 % (GDP)<br>Period: 2010<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.32 % (GDP)<br>Period: 2011<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.27 % (GDP)<br>Period: 2012<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.92 % (GDP)<br>Period: 2013<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.69 % (GDP)<br>Period: 2014<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.39 % (GDP)<br>Period: 2015<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.13 % (GDP)<br>Period: 2016<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.43 % (GDP)<br>Period: 2017<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.06 % (GDP)<br>Period: 2018<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.5 % (GDP)<br>Period: 2019<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.1 % (GDP)<br>Period: 2020<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 7.98 % (GDP)<br>Period: 2021<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [22.976240104512453, 22.446585676092738, 22.215002143958991, 23.584056101485913, 24.027762403875919, 23.506033451217508, 23.755734443705755, 23.691318918597446, 23.665036844194042, 24.955183823246742, 25.14421332934608, 24.848162553330248, 24.737089998330216, 25.071192756317508, 24.682838463385483, 24.24501288781029, 24.577322074991173, 24.746848991670863, 24.919916437096546],
      "text": ["Tax revenue: 22.98 % (GDP)<br>Period: 2003<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 22.45 % (GDP)<br>Period: 2004<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 22.22 % (GDP)<br>Period: 2005<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.58 % (GDP)<br>Period: 2006<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.03 % (GDP)<br>Period: 2007<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.51 % (GDP)<br>Period: 2008<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.76 % (GDP)<br>Period: 2009<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.69 % (GDP)<br>Period: 2010<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.67 % (GDP)<br>Period: 2011<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.96 % (GDP)<br>Period: 2012<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 25.14 % (GDP)<br>Period: 2013<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.85 % (GDP)<br>Period: 2014<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.74 % (GDP)<br>Period: 2015<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 25.07 % (GDP)<br>Period: 2016<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.68 % (GDP)<br>Period: 2017<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.25 % (GDP)<br>Period: 2018<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.58 % (GDP)<br>Period: 2019<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.75 % (GDP)<br>Period: 2020<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.92 % (GDP)<br>Period: 2021<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [20.350000000000001, 20.170000000000005, 21.23, 21.599999999999998, 21.600000000000001, 21.140000000000001, 20.940000000000001, 20.989999999999998, 20.23, 19.41, 19.690000000000001, 20.640000000000001, 21.16, 21.91, 23.09, 23.059999999999999, 24.050000000000001, 24.370000000000001, 24.350000000000001],
      "text": ["Tax revenue: 20.35 % (GDP)<br>Period: 2003<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.17 % (GDP)<br>Period: 2004<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.23 % (GDP)<br>Period: 2005<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.6 % (GDP)<br>Period: 2006<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.6 % (GDP)<br>Period: 2007<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.14 % (GDP)<br>Period: 2008<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.94 % (GDP)<br>Period: 2009<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.99 % (GDP)<br>Period: 2010<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.23 % (GDP)<br>Period: 2011<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 19.41 % (GDP)<br>Period: 2012<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 19.69 % (GDP)<br>Period: 2013<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.64 % (GDP)<br>Period: 2014<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.16 % (GDP)<br>Period: 2015<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.91 % (GDP)<br>Period: 2016<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 23.09 % (GDP)<br>Period: 2017<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 23.06 % (GDP)<br>Period: 2018<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 24.05 % (GDP)<br>Period: 2019<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 24.37 % (GDP)<br>Period: 2020<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 24.35 % (GDP)<br>Period: 2021<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands"],
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
      "y": [25.061230333541651, 25.476839061801424, 25.464474435009855, 25.23167408202551, 24.772279617309781, 25.176257138935743, 23.782644435110317, 24.441101221403407, 24.897389787542391, 25.756585093949255, 26.11385472598062, 26.064747498082511, 24.300464198990191, 22.885433829501412, 23.503299907263042, 24.142854837439188, 22.82559067934783, 22.176812831235512, 23.257578261674322],
      "text": ["Tax revenue: 25.06 % (GDP)<br>Period: 2003<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.48 % (GDP)<br>Period: 2004<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.46 % (GDP)<br>Period: 2005<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.23 % (GDP)<br>Period: 2006<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.77 % (GDP)<br>Period: 2007<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.18 % (GDP)<br>Period: 2008<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 23.78 % (GDP)<br>Period: 2009<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.44 % (GDP)<br>Period: 2010<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.9 % (GDP)<br>Period: 2011<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.76 % (GDP)<br>Period: 2012<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 26.11 % (GDP)<br>Period: 2013<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 26.06 % (GDP)<br>Period: 2014<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.3 % (GDP)<br>Period: 2015<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 22.89 % (GDP)<br>Period: 2016<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 23.5 % (GDP)<br>Period: 2017<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.14 % (GDP)<br>Period: 2018<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 22.83 % (GDP)<br>Period: 2019<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 22.18 % (GDP)<br>Period: 2020<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 23.26 % (GDP)<br>Period: 2021<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [21.210098175165957, 20.674705924555685, 21.989776799782756, 21.862705281586912, 22.746294183894694, 22.526740896255994, 20.095110928860482, 20.64043841955818, 22.548313860988205, 24.186964659166179, 24.067378572546822, 24.862050406913585, 24.804036772910493, 26.355909803503398, 26.192620842747836, 26.642997811743271, 25.871411191952728, 24.521121761749132, 25.132837044933943],
      "text": ["Tax revenue: 21.21 % (GDP)<br>Period: 2003<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 20.67 % (GDP)<br>Period: 2004<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 21.99 % (GDP)<br>Period: 2005<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 21.86 % (GDP)<br>Period: 2006<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 22.75 % (GDP)<br>Period: 2007<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 22.53 % (GDP)<br>Period: 2008<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 20.1 % (GDP)<br>Period: 2009<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 20.64 % (GDP)<br>Period: 2010<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 22.55 % (GDP)<br>Period: 2011<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.19 % (GDP)<br>Period: 2012<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.07 % (GDP)<br>Period: 2013<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.86 % (GDP)<br>Period: 2014<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.8 % (GDP)<br>Period: 2015<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 26.36 % (GDP)<br>Period: 2016<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 26.19 % (GDP)<br>Period: 2017<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 26.64 % (GDP)<br>Period: 2018<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 25.87 % (GDP)<br>Period: 2019<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.52 % (GDP)<br>Period: 2020<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 25.13 % (GDP)<br>Period: 2021<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Tax revenue (REMIND_26)",
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
    "b55c4b69596d": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c47436328": {
      "y": {}
    }
  },
  "cur_data": "b55c4b69596d",
  "visdat": {
    "b55c4b69596d": ["function (y) ", "x"],
    "b55c47436328": ["function (y) ", "x"]
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

  
