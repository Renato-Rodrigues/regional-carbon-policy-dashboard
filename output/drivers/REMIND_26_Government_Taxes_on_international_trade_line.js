(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_26_Government_Taxes_on_international_trade_line') 

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
      "y": [1.8543055524183703, 1.748684693061805, 1.6224126220326698, 1.5031208061951316, 1.6381240308239837, 1.6735836834181679, 1.6851155551020385, 1.5869284302859661, 1.5709528430932795, 1.6652966681239967, 1.7198106461928442, 1.821906084589852, 2.0303207502012599, 2.3071433817647584, 2.209043680895753, 2.314359761276108, 2.0691410903060006, 2.1752469329522399, 2.0636892383466625],
      "text": ["Taxes on international trade: 1.85 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.75 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.62 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.5 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.64 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.67 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.69 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.59 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.57 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.67 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.72 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 1.82 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.03 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.31 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.21 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.31 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.07 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.18 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Taxes on international trade: 2.06 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [0.87377842346519086, 0.83037941187317399, 0.73510913986844795, 0.73348566421776906, 0.71840919440178286, 0.66390057073326181, 0.68983461261988444, 0.71278508592743706, 0.67217493343610069, 0.66116850819703887, 0.65816082778013385, 0.66086614435444702, 0.63698057070843828, 0.67137920578873045, 0.62238936699898584, 0.6089287354857148, 0.6131770338782736, 0.66257824123234432, 0.64298276742703664],
      "text": ["Taxes on international trade: 0.87 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.83 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.74 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.73 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.72 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.66 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.69 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.71 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.67 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.66 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.66 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.66 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.64 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.67 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.62 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.61 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.61 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.66 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Taxes on international trade: 0.64 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland"],
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
      "y": [7.7154923852693154, 7.8184255112392336, 6.8793060736587091, 5.9792323666551477, 6.1740238030422701, 5.8500173274543732, 5.7406155294496699, 6.092204216588132, 5.1916612368922053, 6.6624441797918461, 6.2831573011215189, 5.7756925111230428, 6.2078138321227625, 6.0569799482762035, 6.0082622905246392, 6.1368720902056371, 5.9940038042705055, 6.0936057921771853, 6.2939388553395812],
      "text": ["Taxes on international trade: 7.72 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Taxes on international trade: 7.82 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.88 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 5.98 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.17 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 5.85 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 5.74 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.09 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 5.19 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.66 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.28 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 5.78 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.21 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.06 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.01 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.14 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 5.99 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.09 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Taxes on international trade: 6.29 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [4.0768166499596683, 4.0280254897002017, 3.7534311727234368, 2.6798446980259567, 2.6638921012917027, 2.3945816943356362, 1.670572379396936, 1.7576544152964437, 1.8205666138585532, 1.7912390473291442, 1.7895326685875501, 1.5463317076146732, 2.7002796802330735, 1.7759035902247169, 1.8179839003674667, 1.78094323408665, 1.76571614898909, 1.9116694428792953, 1.8913827934603922],
      "text": ["Taxes on international trade: 4.08 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 4.03 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 3.75 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 2.68 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 2.66 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 2.39 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.67 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.76 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.82 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.79 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.79 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.55 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 2.7 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.78 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.82 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.78 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.77 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.91 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Taxes on international trade: 1.89 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "y": [10.094340832650794, 13.489626462885392, 16.766863229431539, 19.621073060268177, 16.471666535992782, 18.307241000409093, 18.309098772178153, 18.055465331544049, 18.852338204577787, 18.54586583275465, 19.044264817461816, 18.471130214997991, 12.72056947783765, 10.748515744892188, 8.4675379054232653, 9.4421342212615471, 7.8718930033034722, 5.6852445110538499, 7.4583227151749822],
      "text": ["Taxes on international trade: 10.09 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 13.49 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 16.77 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 19.62 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 16.47 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Taxes on international trade: 18.31 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 18.31 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 18.06 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 18.85 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 18.55 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 19.04 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 18.47 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Taxes on international trade: 12.72 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 10.75 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 8.47 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 9.44 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 7.87 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 5.69 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Taxes on international trade: 7.46 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [2.1572636155393758, 1.7524569524267812, 1.6912930465239586, 1.7050615805147196, 0.1557937428935747, 0.1582519006627193, 0.15194226000652336, 0.1466253623298947, 0.15384786637981812, 0.17375848852336689, 0.093170593634070903, 0.0083488710655347416, 0.0083364410171901625, 0.0066590232660807035, 0.015855391756797153, 0.015836669560887768, 0.01415459696735899, 0.014138228532838186, 0.020355817394222517],
      "text": ["Taxes on international trade: 2.16 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 1.75 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 1.69 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 1.71 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.16 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.16 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.15 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.15 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.15 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.17 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.09 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [14.6, 14.859999999999999, 14.430000000000001, 15.17, 14.66, 14.139999999999999, 11.41, 13.460000000000003, 14.82, 14.869999999999999, 13.210000000000001, 13.039999999999999, 12.289999999999999, 11.289999999999999, 6.21, 4.5099999999999998, 4.5099999999999998, 4.5099999999999998, 4.5099999999999998],
      "text": ["Taxes on international trade: 14.6 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.86 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.43 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 15.17 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.66 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.14 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 11.41 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 13.46 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.82 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 14.87 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 13.21 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 13.04 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 12.29 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 11.29 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 6.21 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 4.51 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 4.51 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 4.51 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: IND<br>Countries in region: India", "Taxes on international trade: 4.51 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: IND<br>Countries in region: India"],
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
      "y": [1.1200000000000001, 1.1299999999999999, 1.0800000000000001, 1.04, 1.0699999999999998, 1.1200000000000001, 1.02, 1.1599999999999999, 1.23, 1.23, 1.1200000000000001, 1.1200000000000001, 1.1000000000000001, 1.0800000000000001, 1.02, 1.48, 2.0899999999999999, 1.8100000000000003, 2.02],
      "text": ["Taxes on international trade: 1.12 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.13 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.08 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.04 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.07 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.12 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.02 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.16 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.23 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.23 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.12 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.12 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.1 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.08 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.02 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.48 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 2.09 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 1.81 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: USA<br>Countries in region: United States", "Taxes on international trade: 2.02 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: USA<br>Countries in region: United States"],
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
      "y": [1.3, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Taxes on international trade: 1.3 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0.5 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: POL<br>Countries in region: Poland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: POL<br>Countries in region: Poland"],
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
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: DEU<br>Countries in region: Germany", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: DEU<br>Countries in region: Germany"],
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
      "y": [0.94538497636615626, 0.3527123291166876, 0, -0.0023936586725150999, 0.049994578037917112, 0.048435566798518591, 0.046704222116419253, 0.024355155713051226, 0.00092323328806908722, 0.00091376054926993271, 0.0018118897922119006, 0.0017974395855880787, 0.0026762270914479909, -0.0053102333586020458, 0.0035119318334640112, 0.0043547244810990616, 0.0025908120771771003, 0, 0.0034311365688816384],
      "text": ["Taxes on international trade: 0.95 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.35 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.05 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.05 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.05 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: IRL<br>Countries in region: Ireland", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0055152518246177054, 0.0082547166884039316, 0.0082377226261723269, 0.010976012138561558, 0.01096556805502878, 0.010941163749538381, 0.013646755461228174, 0.016337165620437237, 0.013592714687771354, 0.010872565758903762],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [0, 0, 0.0099999999999999985, -0.029999999999999995, -0.010000000000000002, -0.01, -0.01, -0.01, 0, -0.0099999999999999985, 0, -0.0099999999999999985, -0.0099999999999999985, -0.0099999999999999967, -0.01, -0.0099999999999999985, -0.0099999999999999967, 0, 0],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.03 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [0.00073039634348915814, 0.00073917885188412764, 0.0007128757069258131, 0.00074394419251392545, 0.00071335745864572488, 0.00068266057900367148, 0.00054670792269779969, 0.00063989717527470594, 0.00069907267365171201, 0.00069657908310268078, 0.00061469511738734015, 0.00060234407462531883, 0.00056323536816253337, 0.00051351493376324453, 0.00028054849112385164, 0.00020251811745714029, 0.00020137889622396266, 0.040198862583137464, 0.63017275139936801],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Taxes on international trade: 0.63 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [0, 0, 0, 0, -0.01, -0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: -0.01 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: -0.02 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: AUT<br>Countries in region: Austria", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: AUT<br>Countries in region: Austria"],
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
      "y": [-15.834548117397643, -15.834444826061443, -15.834249135576894, 5.0280865948634057, 3.1487554401872742, 4.8380252063902711, 3.7085096430006117, 4.438218349147613, 4.7180721301358526, 4.7080256184518277, 4.1182119291974333, 2.838713550789056, 2.3589009483428103, 2.2689332111340583, 2.3089277376728465, 1.9091032620410058, 1.8491173068771538, 1.8291115632730015, 1.6691933894415771],
      "text": ["Taxes on international trade: -15.83 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: -15.83 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: -15.83 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 5.03 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 3.15 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.84 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 3.71 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.44 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.72 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.71 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 4.12 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 2.84 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 2.36 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 2.27 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 2.31 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 1.91 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 1.85 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 1.83 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Taxes on international trade: 1.67 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [0.023274645551164288, 0.0049047509154220527, 0.0049810511028343463, 0.0007614760535000196, 0.0026264768578432634, 0.00027643881409498359, 0, 0, 0, 0, 0, 0.0067429788380309842, 0, 0, 0, 0, 0, 0, 0],
      "text": ["Taxes on international trade: 0.02 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [0.050000000000000003, 0.030000000000000002, 0.029999999999999999, 0.02, 0.02, 0.02, 0.029999999999999999, 0.020000000000000004, 0.01, 0.019999999999999997, 0.040000000000000001, 0.040000000000000008, 0, 0, 0, 0, 0, 0, 0.01],
      "text": ["Taxes on international trade: 0.05 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.03 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.03 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.03 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Taxes on international trade: 0 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Taxes on international trade: 0 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "y": [0.2470533113787616, 0.10566253565517662, 0.011723548078694451, 0.011746479853049082, 0.0091150091158563942, 0.001793143108557272, 0.00090810065954028318, 0.0018414589673395483, 0.0028074189447207308, 0.0019088584099728688, 0.012923412636287808, 0.0090063008641983675, 0.0060770581671599367, -0.0020596078458793633, 0.0062666989980975875, 0.015293141176840087, 0.018215311586123311, 0, 0.035515333508994565],
      "text": ["Taxes on international trade: 0.25 % (total revenue)<br>Period: 2003<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.11 % (total revenue)<br>Period: 2004<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2005<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2006<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2007<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2008<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2009<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2010<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2011<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2012<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2013<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2014<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2015<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2016<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.01 % (total revenue)<br>Period: 2017<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2018<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.02 % (total revenue)<br>Period: 2019<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0 % (total revenue)<br>Period: 2020<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus", "Taxes on international trade: 0.04 % (total revenue)<br>Period: 2021<br>REMIND_26 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Taxes on international trade (REMIND_26)",
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
      "tickvals": [0, 24.999999999999996, 50, 75, 100],
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
        "text": "% (total revenue)",
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
    "b55c68fb1e0": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c1c756b2f": {
      "y": {}
    }
  },
  "cur_data": "b55c68fb1e0",
  "visdat": {
    "b55c68fb1e0": ["function (y) ", "x"],
    "b55c1c756b2f": ["function (y) ", "x"]
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

  
