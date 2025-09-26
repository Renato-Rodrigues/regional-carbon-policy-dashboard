(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_21_Government_Tax_revenue_line') 

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
      "text": ["Tax revenue: 18.34 % (GDP)<br>Period: 2003<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.39 % (GDP)<br>Period: 2004<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.63 % (GDP)<br>Period: 2005<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.7 % (GDP)<br>Period: 2006<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.4 % (GDP)<br>Period: 2007<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.05 % (GDP)<br>Period: 2008<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.09 % (GDP)<br>Period: 2009<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 15.96 % (GDP)<br>Period: 2010<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 15.91 % (GDP)<br>Period: 2011<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.22 % (GDP)<br>Period: 2012<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.5 % (GDP)<br>Period: 2013<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.61 % (GDP)<br>Period: 2014<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 16.99 % (GDP)<br>Period: 2015<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.2 % (GDP)<br>Period: 2016<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.22 % (GDP)<br>Period: 2017<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.89 % (GDP)<br>Period: 2018<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.84 % (GDP)<br>Period: 2019<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 17.95 % (GDP)<br>Period: 2020<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 18.05 % (GDP)<br>Period: 2021<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "text": ["Tax revenue: 15.64 % (GDP)<br>Period: 2003<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.22 % (GDP)<br>Period: 2004<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.68 % (GDP)<br>Period: 2005<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.94 % (GDP)<br>Period: 2006<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.59 % (GDP)<br>Period: 2007<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.71 % (GDP)<br>Period: 2008<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 15.78 % (GDP)<br>Period: 2009<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.13 % (GDP)<br>Period: 2010<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.42 % (GDP)<br>Period: 2011<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.11 % (GDP)<br>Period: 2012<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 15.47 % (GDP)<br>Period: 2013<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.83 % (GDP)<br>Period: 2014<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.57 % (GDP)<br>Period: 2015<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.78 % (GDP)<br>Period: 2016<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.97 % (GDP)<br>Period: 2017<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 15.11 % (GDP)<br>Period: 2018<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 15.21 % (GDP)<br>Period: 2019<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 14.12 % (GDP)<br>Period: 2020<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Tax revenue: 16.22 % (GDP)<br>Period: 2021<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland"],
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
      "text": ["Tax revenue: 9.8 % (GDP)<br>Period: 2003<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Tax revenue: 10.04 % (GDP)<br>Period: 2004<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Tax revenue: 10.6 % (GDP)<br>Period: 2005<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.9 % (GDP)<br>Period: 2006<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 11.06 % (GDP)<br>Period: 2007<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 11.09 % (GDP)<br>Period: 2008<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.96 % (GDP)<br>Period: 2009<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.49 % (GDP)<br>Period: 2010<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.18 % (GDP)<br>Period: 2011<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.3 % (GDP)<br>Period: 2012<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.44 % (GDP)<br>Period: 2013<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.23 % (GDP)<br>Period: 2014<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.32 % (GDP)<br>Period: 2015<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.42 % (GDP)<br>Period: 2016<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.61 % (GDP)<br>Period: 2017<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.67 % (GDP)<br>Period: 2018<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.66 % (GDP)<br>Period: 2019<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.65 % (GDP)<br>Period: 2020<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 10.63 % (GDP)<br>Period: 2021<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "text": ["Tax revenue: 16.11 % (GDP)<br>Period: 2003<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 16.18 % (GDP)<br>Period: 2004<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.52 % (GDP)<br>Period: 2005<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.83 % (GDP)<br>Period: 2006<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.51 % (GDP)<br>Period: 2007<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.96 % (GDP)<br>Period: 2008<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 17.61 % (GDP)<br>Period: 2009<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Tax revenue: 17.68 % (GDP)<br>Period: 2010<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Tax revenue: 18.44 % (GDP)<br>Period: 2011<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.11 % (GDP)<br>Period: 2012<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.07 % (GDP)<br>Period: 2013<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.12 % (GDP)<br>Period: 2014<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 19.25 % (GDP)<br>Period: 2015<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 19.1 % (GDP)<br>Period: 2016<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 19.03 % (GDP)<br>Period: 2017<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.75 % (GDP)<br>Period: 2018<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.07 % (GDP)<br>Period: 2019<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.54 % (GDP)<br>Period: 2020<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Tax revenue: 18.51 % (GDP)<br>Period: 2021<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "text": ["Tax revenue: 13.62 % (GDP)<br>Period: 2003<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 13.72 % (GDP)<br>Period: 2004<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.84 % (GDP)<br>Period: 2005<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.99 % (GDP)<br>Period: 2006<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 16.02 % (GDP)<br>Period: 2007<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.7 % (GDP)<br>Period: 2008<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.53 % (GDP)<br>Period: 2009<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.43 % (GDP)<br>Period: 2010<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.98 % (GDP)<br>Period: 2011<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.67 % (GDP)<br>Period: 2012<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.54 % (GDP)<br>Period: 2013<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.51 % (GDP)<br>Period: 2014<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 11.89 % (GDP)<br>Period: 2015<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 11.01 % (GDP)<br>Period: 2016<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 11.26 % (GDP)<br>Period: 2017<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.58 % (GDP)<br>Period: 2018<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.01 % (GDP)<br>Period: 2019<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 11.94 % (GDP)<br>Period: 2020<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.56 % (GDP)<br>Period: 2021<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [16.84719759957256, 16.263147240485662, 16.693216959141733, 17.054262368666478, 17.676011222840074, 17.546153157413094, 15.84027910538329, 16.102914553871351, 16.433871522679265, 16.068276586622662, 16.007264880851917, 15.974617514246072, 16.158196805186197, 16.614525173065896, 16.975818199389913, 17.24792086315458, 17.351182804231133, 17.363205690101921, 18.372533521363451],
      "text": ["Tax revenue: 16.85 % (GDP)<br>Period: 2003<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.26 % (GDP)<br>Period: 2004<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.69 % (GDP)<br>Period: 2005<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.05 % (GDP)<br>Period: 2006<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.68 % (GDP)<br>Period: 2007<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.55 % (GDP)<br>Period: 2008<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 15.84 % (GDP)<br>Period: 2009<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.1 % (GDP)<br>Period: 2010<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.43 % (GDP)<br>Period: 2011<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.07 % (GDP)<br>Period: 2012<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.01 % (GDP)<br>Period: 2013<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 15.97 % (GDP)<br>Period: 2014<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.16 % (GDP)<br>Period: 2015<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.61 % (GDP)<br>Period: 2016<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.98 % (GDP)<br>Period: 2017<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.25 % (GDP)<br>Period: 2018<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.35 % (GDP)<br>Period: 2019<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.36 % (GDP)<br>Period: 2020<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 18.37 % (GDP)<br>Period: 2021<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [19.248087072057682, 19.09773237180929, 19.024186917803711, 19.404031897315207, 19.511834532594847, 19.585931313414783, 18.177368828887104, 18.356891820656898, 18.390695335417547, 18.919571914809413, 19.464846803780247, 19.542885693705262, 20.232851918397728, 19.454758601926134, 18.746713613960086, 17.99742813466348, 18.144604571674595, 17.890580092869861, 18.064185697624943],
      "text": ["Tax revenue: 19.25 % (GDP)<br>Period: 2003<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.1 % (GDP)<br>Period: 2004<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.02 % (GDP)<br>Period: 2005<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.4 % (GDP)<br>Period: 2006<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.51 % (GDP)<br>Period: 2007<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.59 % (GDP)<br>Period: 2008<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.18 % (GDP)<br>Period: 2009<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.36 % (GDP)<br>Period: 2010<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.39 % (GDP)<br>Period: 2011<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.92 % (GDP)<br>Period: 2012<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.46 % (GDP)<br>Period: 2013<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.54 % (GDP)<br>Period: 2014<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 20.23 % (GDP)<br>Period: 2015<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.45 % (GDP)<br>Period: 2016<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.75 % (GDP)<br>Period: 2017<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18 % (GDP)<br>Period: 2018<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.14 % (GDP)<br>Period: 2019<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 17.89 % (GDP)<br>Period: 2020<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.06 % (GDP)<br>Period: 2021<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "text": ["Tax revenue: 13.37 % (GDP)<br>Period: 2003<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.37 % (GDP)<br>Period: 2004<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.47 % (GDP)<br>Period: 2005<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.56 % (GDP)<br>Period: 2006<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.57 % (GDP)<br>Period: 2007<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.5 % (GDP)<br>Period: 2008<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.12 % (GDP)<br>Period: 2009<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.22 % (GDP)<br>Period: 2010<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.49 % (GDP)<br>Period: 2011<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.41 % (GDP)<br>Period: 2012<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.27 % (GDP)<br>Period: 2013<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.7 % (GDP)<br>Period: 2014<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.77 % (GDP)<br>Period: 2015<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.34 % (GDP)<br>Period: 2016<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.28 % (GDP)<br>Period: 2017<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.75 % (GDP)<br>Period: 2018<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.26 % (GDP)<br>Period: 2019<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.08 % (GDP)<br>Period: 2020<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 16.28 % (GDP)<br>Period: 2021<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "text": ["Tax revenue: 9.11 % (GDP)<br>Period: 2003<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 9.57 % (GDP)<br>Period: 2004<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 10.08 % (GDP)<br>Period: 2005<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 11.13 % (GDP)<br>Period: 2006<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 12.11 % (GDP)<br>Period: 2007<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 10.98 % (GDP)<br>Period: 2008<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 9.81 % (GDP)<br>Period: 2009<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 10.39 % (GDP)<br>Period: 2010<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 10.18 % (GDP)<br>Period: 2011<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 10.84 % (GDP)<br>Period: 2012<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 11 % (GDP)<br>Period: 2013<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 9.98 % (GDP)<br>Period: 2014<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 10.57 % (GDP)<br>Period: 2015<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 11.15 % (GDP)<br>Period: 2016<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 11.39 % (GDP)<br>Period: 2017<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2018<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2019<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2020<br>REMIND_21 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2021<br>REMIND_21 region code: IND<br>Countries in region: India"],
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
      "text": ["Tax revenue: 9.39 % (GDP)<br>Period: 2003<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 9.54 % (GDP)<br>Period: 2004<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 10.68 % (GDP)<br>Period: 2005<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 11.31 % (GDP)<br>Period: 2006<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 11.29 % (GDP)<br>Period: 2007<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 10.28 % (GDP)<br>Period: 2008<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 7.9 % (GDP)<br>Period: 2009<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 8.56 % (GDP)<br>Period: 2010<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 9.54 % (GDP)<br>Period: 2011<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 9.76 % (GDP)<br>Period: 2012<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 10.48 % (GDP)<br>Period: 2013<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 10.94 % (GDP)<br>Period: 2014<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 11.24 % (GDP)<br>Period: 2015<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 10.92 % (GDP)<br>Period: 2016<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 11.58 % (GDP)<br>Period: 2017<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 9.99 % (GDP)<br>Period: 2018<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 9.96 % (GDP)<br>Period: 2019<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 10.34 % (GDP)<br>Period: 2020<br>REMIND_21 region code: USA<br>Countries in region: United States", "Tax revenue: 11.44 % (GDP)<br>Period: 2021<br>REMIND_21 region code: USA<br>Countries in region: United States"],
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
      "y": [24.534283044143798, 25.144216239845189, 25.487364177478771, 25.837891794304337, 25.986039623132477, 26.280742126862012, 24.02683958584679, 25.038178624294005, 25.55194450424651, 24.917165447739112, 24.972832386529113, 24.749575547721509, 24.625847823594317, 25.011691121010944, 25.081199454950795, 25.020810750049531, 24.584535883676352, 24.207438722956258, 25.589686059284251],
      "text": ["Tax revenue: 24.53 % (GDP)<br>Period: 2003<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.14 % (GDP)<br>Period: 2004<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.49 % (GDP)<br>Period: 2005<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.84 % (GDP)<br>Period: 2006<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.99 % (GDP)<br>Period: 2007<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 26.28 % (GDP)<br>Period: 2008<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.03 % (GDP)<br>Period: 2009<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.04 % (GDP)<br>Period: 2010<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.55 % (GDP)<br>Period: 2011<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.92 % (GDP)<br>Period: 2012<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.97 % (GDP)<br>Period: 2013<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.75 % (GDP)<br>Period: 2014<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.63 % (GDP)<br>Period: 2015<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.01 % (GDP)<br>Period: 2016<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.08 % (GDP)<br>Period: 2017<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.02 % (GDP)<br>Period: 2018<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.58 % (GDP)<br>Period: 2019<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.21 % (GDP)<br>Period: 2020<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.59 % (GDP)<br>Period: 2021<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "text": ["Tax revenue: 11 % (GDP)<br>Period: 2003<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.43 % (GDP)<br>Period: 2004<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.66 % (GDP)<br>Period: 2005<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.85 % (GDP)<br>Period: 2006<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.33 % (GDP)<br>Period: 2007<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.47 % (GDP)<br>Period: 2008<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.61 % (GDP)<br>Period: 2009<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.19 % (GDP)<br>Period: 2010<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.48 % (GDP)<br>Period: 2011<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.62 % (GDP)<br>Period: 2012<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.61 % (GDP)<br>Period: 2013<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.48 % (GDP)<br>Period: 2014<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.48 % (GDP)<br>Period: 2015<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.3 % (GDP)<br>Period: 2016<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.42 % (GDP)<br>Period: 2017<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.46 % (GDP)<br>Period: 2018<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.41 % (GDP)<br>Period: 2019<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.57 % (GDP)<br>Period: 2020<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.18 % (GDP)<br>Period: 2021<br>REMIND_21 region code: DEU<br>Countries in region: Germany"],
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
      "text": ["Tax revenue: 26.51 % (GDP)<br>Period: 2003<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.93 % (GDP)<br>Period: 2004<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 28.02 % (GDP)<br>Period: 2005<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.58 % (GDP)<br>Period: 2006<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 28.36 % (GDP)<br>Period: 2007<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.27 % (GDP)<br>Period: 2008<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.67 % (GDP)<br>Period: 2009<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.56 % (GDP)<br>Period: 2010<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.58 % (GDP)<br>Period: 2011<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.65 % (GDP)<br>Period: 2012<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.96 % (GDP)<br>Period: 2013<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.71 % (GDP)<br>Period: 2014<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.26 % (GDP)<br>Period: 2015<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.64 % (GDP)<br>Period: 2016<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.66 % (GDP)<br>Period: 2017<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.27 % (GDP)<br>Period: 2018<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.71 % (GDP)<br>Period: 2019<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.08 % (GDP)<br>Period: 2020<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.61 % (GDP)<br>Period: 2021<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [23.254862478453134, 23.224093194015325, 23.527910990561338, 23.523652936970961, 23.463188953006458, 23.53974985814267, 22.817308418906478, 23.057827233232249, 22.892997142461645, 22.908490497919619, 23.265472604688206, 23.685509953266479, 23.463162541425945, 23.032240023451966, 23.76139596630702, 23.949486428386443, 24.017650678807392, 23.688845529285437, 24.349687626275024],
      "text": ["Tax revenue: 23.25 % (GDP)<br>Period: 2003<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.22 % (GDP)<br>Period: 2004<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.53 % (GDP)<br>Period: 2005<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.52 % (GDP)<br>Period: 2006<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.46 % (GDP)<br>Period: 2007<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.54 % (GDP)<br>Period: 2008<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 22.82 % (GDP)<br>Period: 2009<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.06 % (GDP)<br>Period: 2010<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 22.89 % (GDP)<br>Period: 2011<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 22.91 % (GDP)<br>Period: 2012<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.27 % (GDP)<br>Period: 2013<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.69 % (GDP)<br>Period: 2014<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.46 % (GDP)<br>Period: 2015<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.03 % (GDP)<br>Period: 2016<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.76 % (GDP)<br>Period: 2017<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.95 % (GDP)<br>Period: 2018<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 24.02 % (GDP)<br>Period: 2019<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 23.69 % (GDP)<br>Period: 2020<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Tax revenue: 24.35 % (GDP)<br>Period: 2021<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg"],
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
      "text": ["Tax revenue: 22.12 % (GDP)<br>Period: 2003<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.16 % (GDP)<br>Period: 2004<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.3 % (GDP)<br>Period: 2005<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.58 % (GDP)<br>Period: 2006<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.12 % (GDP)<br>Period: 2007<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.01 % (GDP)<br>Period: 2008<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 20.7 % (GDP)<br>Period: 2009<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 21.95 % (GDP)<br>Period: 2010<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 21.82 % (GDP)<br>Period: 2011<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.53 % (GDP)<br>Period: 2012<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.21 % (GDP)<br>Period: 2013<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.16 % (GDP)<br>Period: 2014<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.2 % (GDP)<br>Period: 2015<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.06 % (GDP)<br>Period: 2016<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.63 % (GDP)<br>Period: 2017<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 24.17 % (GDP)<br>Period: 2018<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 24.51 % (GDP)<br>Period: 2019<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 24.64 % (GDP)<br>Period: 2020<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.96 % (GDP)<br>Period: 2021<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [8.5739512381486787, 8.5744539589027529, 8.5745055699173474, 9.0645914115305555, 9.7761990931624307, 10.108217426301639, 10.317632556061557, 10.219702774236648, 10.321072998308692, 10.271125283713053, 9.9214922608864047, 9.6915100966373551, 9.3892068861282389, 9.1287692864486623, 9.4291072670384235, 9.0595730298344979, 8.5001581278839993, 8.0966705577207403, 7.9754772237919243],
      "text": ["Tax revenue: 8.57 % (GDP)<br>Period: 2003<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.57 % (GDP)<br>Period: 2004<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.57 % (GDP)<br>Period: 2005<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.06 % (GDP)<br>Period: 2006<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.78 % (GDP)<br>Period: 2007<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.11 % (GDP)<br>Period: 2008<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.32 % (GDP)<br>Period: 2009<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.22 % (GDP)<br>Period: 2010<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.32 % (GDP)<br>Period: 2011<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.27 % (GDP)<br>Period: 2012<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.92 % (GDP)<br>Period: 2013<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.69 % (GDP)<br>Period: 2014<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.39 % (GDP)<br>Period: 2015<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.13 % (GDP)<br>Period: 2016<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.43 % (GDP)<br>Period: 2017<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.06 % (GDP)<br>Period: 2018<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.5 % (GDP)<br>Period: 2019<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.1 % (GDP)<br>Period: 2020<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 7.98 % (GDP)<br>Period: 2021<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [22.673739984860589, 22.14377576447006, 22.176534632697635, 23.289752285010714, 23.808884806758982, 23.339141991320854, 23.132240860306208, 23.171856141807822, 23.475141493602468, 24.825209463529887, 24.964529830994433, 24.850453435171481, 24.74809940502092, 25.282331885970628, 24.931160580741725, 24.639807756024279, 24.792430729882348, 24.709201619945151, 24.955294505420007],
      "text": ["Tax revenue: 22.67 % (GDP)<br>Period: 2003<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 22.14 % (GDP)<br>Period: 2004<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 22.18 % (GDP)<br>Period: 2005<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 23.29 % (GDP)<br>Period: 2006<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 23.81 % (GDP)<br>Period: 2007<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 23.34 % (GDP)<br>Period: 2008<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 23.13 % (GDP)<br>Period: 2009<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 23.17 % (GDP)<br>Period: 2010<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 23.48 % (GDP)<br>Period: 2011<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 24.83 % (GDP)<br>Period: 2012<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 24.96 % (GDP)<br>Period: 2013<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 24.85 % (GDP)<br>Period: 2014<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 24.75 % (GDP)<br>Period: 2015<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 25.28 % (GDP)<br>Period: 2016<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 24.93 % (GDP)<br>Period: 2017<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 24.64 % (GDP)<br>Period: 2018<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 24.79 % (GDP)<br>Period: 2019<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 24.71 % (GDP)<br>Period: 2020<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Tax revenue: 24.96 % (GDP)<br>Period: 2021<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus"],
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
      "text": "Tax revenue (REMIND_21)",
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
    "b55c72163602": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c6d1b71a1": {
      "y": {}
    }
  },
  "cur_data": "b55c72163602",
  "visdat": {
    "b55c72163602": ["function (y) ", "x"],
    "b55c6d1b71a1": ["function (y) ", "x"]
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

  
