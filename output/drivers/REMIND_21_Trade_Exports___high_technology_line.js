(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_21_Trade_Exports___high_technology_line') 

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
      "y": [18859.102069920293, 18844.453183073314, 18827.623309136594, 18806.96205017345, 18761.763381504323, 18708.792205627902, 15897.130652679651, 16665.23016271013, 17578.045276563225, 20641.96900233666, 20043.454895566691, 18149.671577775098, 17660.267036558016, 16598.693639516256, 16794.570268202602, 18879.041557069191, 19867.683683090119, 16269.663002327614, 18592.728884979784],
      "text": ["Exports - high technology: 18859.1 #<br>Period: 2003<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18844.45 #<br>Period: 2004<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18827.62 #<br>Period: 2005<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18806.96 #<br>Period: 2006<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18761.76 #<br>Period: 2007<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18708.79 #<br>Period: 2008<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 15897.13 #<br>Period: 2009<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 16665.23 #<br>Period: 2010<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 17578.05 #<br>Period: 2011<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 20641.97 #<br>Period: 2012<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 20043.45 #<br>Period: 2013<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18149.67 #<br>Period: 2014<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 17660.27 #<br>Period: 2015<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 16598.69 #<br>Period: 2016<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 16794.57 #<br>Period: 2017<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18879.04 #<br>Period: 2018<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 19867.68 #<br>Period: 2019<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 16269.66 #<br>Period: 2020<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18592.73 #<br>Period: 2021<br>REMIND_21 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [23384.134615702034, 23389.690599420384, 23381.598589415644, 23359.515208406829, 23340.653292631516, 28072.627980706868, 26026.806082911415, 27959.406141033454, 32624.898861877937, 32597.194059182595, 34506.699808067788, 36288.871897476653, 34079.791222121756, 34873.247791949638, 19466.319294454494, 19648.641899567214, 19611.636974831094, 19033.116928897452, 24648.332730706177],
      "text": ["Exports - high technology: 23384.13 #<br>Period: 2003<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 23389.69 #<br>Period: 2004<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 23381.6 #<br>Period: 2005<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 23359.52 #<br>Period: 2006<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 23340.65 #<br>Period: 2007<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 28072.63 #<br>Period: 2008<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 26026.81 #<br>Period: 2009<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 27959.41 #<br>Period: 2010<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 32624.9 #<br>Period: 2011<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 32597.19 #<br>Period: 2012<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 34506.7 #<br>Period: 2013<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 36288.87 #<br>Period: 2014<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 34079.79 #<br>Period: 2015<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 34873.25 #<br>Period: 2016<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 19466.32 #<br>Period: 2017<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 19648.64 #<br>Period: 2018<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 19611.64 #<br>Period: 2019<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 19033.12 #<br>Period: 2020<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland", "Exports - high technology: 24648.33 #<br>Period: 2021<br>REMIND_21 region code: NEN<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland"],
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
      "y": [358.06844278994311, 356.87045463593569, 355.5189962245085, 348.04832314285693, 336.91319856512291, 576.642078531729, 609.22362585378994, 636.23459066297164, 675.34017747798509, 637.02678004088784, 622.7812683621072, 718.92171989443307, 752.11329000570458, 651.81731332576601, 656.92337618340207, 698.70994902165819, 729.71692095323522, 768.5450538570434, 1013.9675167142633],
      "text": ["Exports - high technology: 358.07 #<br>Period: 2003<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - high technology: 356.87 #<br>Period: 2004<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - high technology: 355.52 #<br>Period: 2005<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 348.05 #<br>Period: 2006<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 336.91 #<br>Period: 2007<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 576.64 #<br>Period: 2008<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 609.22 #<br>Period: 2009<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 636.23 #<br>Period: 2010<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 675.34 #<br>Period: 2011<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 637.03 #<br>Period: 2012<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 622.78 #<br>Period: 2013<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 718.92 #<br>Period: 2014<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 752.11 #<br>Period: 2015<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 651.82 #<br>Period: 2016<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 656.92 #<br>Period: 2017<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 698.71 #<br>Period: 2018<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 729.72 #<br>Period: 2019<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 768.55 #<br>Period: 2020<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 1013.97 #<br>Period: 2021<br>REMIND_21 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [1575.6660100567881, 1577.5056709852256, 1579.3809642728106, 1581.410384323945, 1582.5750330405513, 1629.0060147865292, 1442.4016592402738, 1625.4119454354411, 1763.7062475678597, 2066.1280259481846, 2691.536549898698, 2892.903133375693, 2528.933470752143, 2188.5205503002494, 2578.1368503885569, 2417.6996000931977, 2717.7374857712243, 2685.242884628035, 3600.2620195562263],
      "text": ["Exports - high technology: 1575.67 #<br>Period: 2003<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 1577.51 #<br>Period: 2004<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 1579.38 #<br>Period: 2005<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 1581.41 #<br>Period: 2006<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 1582.58 #<br>Period: 2007<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 1629.01 #<br>Period: 2008<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 1442.4 #<br>Period: 2009<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Exports - high technology: 1625.41 #<br>Period: 2010<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Exports - high technology: 1763.71 #<br>Period: 2011<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 2066.13 #<br>Period: 2012<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 2691.54 #<br>Period: 2013<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 2892.9 #<br>Period: 2014<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 2528.93 #<br>Period: 2015<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 2188.52 #<br>Period: 2016<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 2578.14 #<br>Period: 2017<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 2417.7 #<br>Period: 2018<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 2717.74 #<br>Period: 2019<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 2685.24 #<br>Period: 2020<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 3600.26 #<br>Period: 2021<br>REMIND_21 region code: NES<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "y": [2657.3104336346637, 2644.6424620860807, 2632.1491232407898, 2620.0035209700441, 2608.8523515007992, 3243.892290158878, 2821.3682908221076, 3135.3919678191769, 3407.6510259736856, 4565.6790893581374, 5352.400410544049, 5996.3906297657777, 6497.6353358352599, 6287.5151414420634, 5783.9010062998823, 5593.3105348594345, 5963.8805428374089, 3710.2297309494938, 5830.2344000118637],
      "text": ["Exports - high technology: 2657.31 #<br>Period: 2003<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 2644.64 #<br>Period: 2004<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 2632.15 #<br>Period: 2005<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 2620 #<br>Period: 2006<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 2608.85 #<br>Period: 2007<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 3243.89 #<br>Period: 2008<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 2821.37 #<br>Period: 2009<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 3135.39 #<br>Period: 2010<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 3407.65 #<br>Period: 2011<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 4565.68 #<br>Period: 2012<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 5352.4 #<br>Period: 2013<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 5996.39 #<br>Period: 2014<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 6497.64 #<br>Period: 2015<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 6287.52 #<br>Period: 2016<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 5783.9 #<br>Period: 2017<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 5593.31 #<br>Period: 2018<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 5963.88 #<br>Period: 2019<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 3710.23 #<br>Period: 2020<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 5830.23 #<br>Period: 2021<br>REMIND_21 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [13981.1668482842, 13927.123621942135, 13872.247292047898, 13827.910037469195, 13787.030240618913, 14089.72320734705, 13413.420136607212, 15740.52793872716, 16234.137220750792, 16915.611294118196, 18242.351282808966, 18941.383371306678, 19369.418379543673, 19334.388137995848, 22901.01798440632, 25304.188254520494, 23935.399673146785, 25600.452282043283, 30002.284423416801],
      "text": ["Exports - high technology: 13981.17 #<br>Period: 2003<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13927.12 #<br>Period: 2004<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13872.25 #<br>Period: 2005<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13827.91 #<br>Period: 2006<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13787.03 #<br>Period: 2007<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 14089.72 #<br>Period: 2008<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13413.42 #<br>Period: 2009<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 15740.53 #<br>Period: 2010<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 16234.14 #<br>Period: 2011<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 16915.61 #<br>Period: 2012<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 18242.35 #<br>Period: 2013<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 18941.38 #<br>Period: 2014<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 19369.42 #<br>Period: 2015<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 19334.39 #<br>Period: 2016<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 22901.02 #<br>Period: 2017<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 25304.19 #<br>Period: 2018<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 23935.4 #<br>Period: 2019<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 25600.45 #<br>Period: 2020<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 30002.28 #<br>Period: 2021<br>REMIND_21 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [128315.03999999999, 128315.04000000001, 128315.03999999999, 128315.03999999999, 128315.03999999999, 130246.56, 103707.83, 129808.10000000001, 133086.54999999999, 129203.44, 111060.3, 107367.02, 98249.839999999997, 99101.200000000012, 106183.79000000001, 110741.5, 103896.71000000001, 102751.08999999998, 116513.86],
      "text": ["Exports - high technology: 128315.04 #<br>Period: 2003<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2004<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2005<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2006<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2007<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 130246.56 #<br>Period: 2008<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 103707.83 #<br>Period: 2009<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 129808.1 #<br>Period: 2010<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 133086.55 #<br>Period: 2011<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 129203.44 #<br>Period: 2012<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 111060.3 #<br>Period: 2013<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 107367.02 #<br>Period: 2014<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 98249.84 #<br>Period: 2015<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 99101.2 #<br>Period: 2016<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 106183.79 #<br>Period: 2017<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 110741.5 #<br>Period: 2018<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 103896.71 #<br>Period: 2019<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 102751.09 #<br>Period: 2020<br>REMIND_21 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 116513.86 #<br>Period: 2021<br>REMIND_21 region code: JPN<br>Countries in region: Japan"],
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
      "y": [5779.9299830264463, 5786.8270171625572, 5796.6306378843883, 5808.6142008424331, 5824.793108458367, 8425.6109539591598, 8195.5513470325368, 10043.385988352866, 11387.172668723548, 11939.806823141829, 13840.328954508976, 16243.222142636876, 15613.548626817654, 15860.834849726692, 18085.95656344407, 21153.248125282822, 20137.057240230068, 20588.973332394202, 23381.342430486362],
      "text": ["Exports - high technology: 5779.93 #<br>Period: 2003<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 5786.83 #<br>Period: 2004<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 5796.63 #<br>Period: 2005<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 5808.61 #<br>Period: 2006<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 5824.79 #<br>Period: 2007<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 8425.61 #<br>Period: 2008<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 8195.55 #<br>Period: 2009<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 10043.39 #<br>Period: 2010<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 11387.17 #<br>Period: 2011<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 11939.81 #<br>Period: 2012<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 13840.33 #<br>Period: 2013<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 16243.22 #<br>Period: 2014<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 15613.55 #<br>Period: 2015<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 15860.83 #<br>Period: 2016<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 18085.96 #<br>Period: 2017<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 21153.25 #<br>Period: 2018<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 20137.06 #<br>Period: 2019<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 20588.97 #<br>Period: 2020<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Exports - high technology: 23381.34 #<br>Period: 2021<br>REMIND_21 region code: ECE<br>Countries in region: Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [5329.1402865163045, 5338.2241930896134, 5348.2677266181518, 5359.4838915789524, 5386.6241283425798, 6419.0279331429356, 5920.4002408326678, 7120.1391646373886, 8135.5326695909198, 6008.5658629065692, 5964.1945917404701, 5992.959165110351, 5755.8068732195761, 6493.8114512404136, 6896.6031991307991, 7749.5208859108425, 8037.205786111811, 8008.9659040551842, 8941.1827078398637],
      "text": ["Exports - high technology: 5329.14 #<br>Period: 2003<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5338.22 #<br>Period: 2004<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5348.27 #<br>Period: 2005<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5359.48 #<br>Period: 2006<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5386.62 #<br>Period: 2007<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 6419.03 #<br>Period: 2008<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5920.4 #<br>Period: 2009<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 7120.14 #<br>Period: 2010<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 8135.53 #<br>Period: 2011<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 6008.57 #<br>Period: 2012<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5964.19 #<br>Period: 2013<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5992.96 #<br>Period: 2014<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 5755.81 #<br>Period: 2015<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 6493.81 #<br>Period: 2016<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 6896.6 #<br>Period: 2017<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 7749.52 #<br>Period: 2018<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 8037.21 #<br>Period: 2019<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 8008.97 #<br>Period: 2020<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Exports - high technology: 8941.18 #<br>Period: 2021<br>REMIND_21 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "y": [9111.9122057586919, 9128.4013716304271, 9144.9336382069487, 9161.3816829812731, 9179.2314048450316, 9815.0647083571203, 8748.9277535527835, 9653.2341255757201, 11394.278677392667, 11593.461260794709, 12217.830903455733, 12406.288878133279, 11101.135472738119, 13210.410432659572, 12735.371741747251, 13230.630132295926, 12986.859240385154, 13519.047393241104, 19887.835497912558],
      "text": ["Exports - high technology: 9111.91 #<br>Period: 2003<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9128.4 #<br>Period: 2004<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9144.93 #<br>Period: 2005<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9161.38 #<br>Period: 2006<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9179.23 #<br>Period: 2007<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9815.06 #<br>Period: 2008<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 8748.93 #<br>Period: 2009<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 9653.23 #<br>Period: 2010<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 11394.28 #<br>Period: 2011<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 11593.46 #<br>Period: 2012<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 12217.83 #<br>Period: 2013<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 12406.29 #<br>Period: 2014<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 11101.14 #<br>Period: 2015<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 13210.41 #<br>Period: 2016<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 12735.37 #<br>Period: 2017<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 13230.63 #<br>Period: 2018<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 12986.86 #<br>Period: 2019<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 13519.05 #<br>Period: 2020<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal", "Exports - high technology: 19887.84 #<br>Period: 2021<br>REMIND_21 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [11215.08, 11215.079999999998, 11215.08, 11215.080000000002, 11215.08, 11215.08, 11215.08, 10659.479999999998, 14503.889999999999, 13873.820000000002, 17938.419999999998, 18326.34, 14583.51, 14261.349999999999, 15101.76, 20182.209999999999, 23470.540000000001, 21583.200000000004, 27446.650000000001],
      "text": ["Exports - high technology: 11215.08 #<br>Period: 2003<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2004<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2005<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2006<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2007<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2008<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.08 #<br>Period: 2009<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 10659.48 #<br>Period: 2010<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 14503.89 #<br>Period: 2011<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 13873.82 #<br>Period: 2012<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 17938.42 #<br>Period: 2013<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 18326.34 #<br>Period: 2014<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 14583.51 #<br>Period: 2015<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 14261.35 #<br>Period: 2016<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 15101.76 #<br>Period: 2017<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 20182.21 #<br>Period: 2018<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 23470.54 #<br>Period: 2019<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 21583.2 #<br>Period: 2020<br>REMIND_21 region code: IND<br>Countries in region: India", "Exports - high technology: 27446.65 #<br>Period: 2021<br>REMIND_21 region code: IND<br>Countries in region: India"],
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
      "y": [240506.00999999998, 240506.01000000001, 240506.01000000001, 240506.01000000001, 240506.01000000001, 243004.98000000004, 150884.06, 166039.75, 166463.70000000001, 169065.94, 169222.37, 175881.16, 175243.76000000001, 173921.75, 154545.03, 153808.47, 153923.48999999999, 141538.56, 169217.26000000001],
      "text": ["Exports - high technology: 240506.01 #<br>Period: 2003<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2004<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2005<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2006<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2007<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 243004.98 #<br>Period: 2008<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 150884.06 #<br>Period: 2009<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 166039.75 #<br>Period: 2010<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 166463.7 #<br>Period: 2011<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 169065.94 #<br>Period: 2012<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 169222.37 #<br>Period: 2013<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 175881.16 #<br>Period: 2014<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 175243.76 #<br>Period: 2015<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 173921.75 #<br>Period: 2016<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 154545.03 #<br>Period: 2017<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 153808.47 #<br>Period: 2018<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 153923.49 #<br>Period: 2019<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 141538.56 #<br>Period: 2020<br>REMIND_21 region code: USA<br>Countries in region: United States", "Exports - high technology: 169217.26 #<br>Period: 2021<br>REMIND_21 region code: USA<br>Countries in region: United States"],
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
      "y": [68398.83822313897, 68397.141224340288, 68395.639166177658, 68393.831783839531, 68391.94346869571, 67110.201387764595, 48969.33503176934, 63459.173067966432, 72181.633923691872, 69637.911808550649, 71003.187762490328, 72282.297932402013, 71266.260169294314, 71037.890700591597, 70732.504811054969, 72565.429785906643, 73952.643627059515, 56826.947536449487, 65202.721565998683],
      "text": ["Exports - high technology: 68398.84 #<br>Period: 2003<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68397.14 #<br>Period: 2004<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68395.64 #<br>Period: 2005<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68393.83 #<br>Period: 2006<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68391.94 #<br>Period: 2007<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 67110.2 #<br>Period: 2008<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 48969.34 #<br>Period: 2009<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 63459.17 #<br>Period: 2010<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 72181.63 #<br>Period: 2011<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 69637.91 #<br>Period: 2012<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 71003.19 #<br>Period: 2013<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 72282.3 #<br>Period: 2014<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 71266.26 #<br>Period: 2015<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 71037.89 #<br>Period: 2016<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 70732.5 #<br>Period: 2017<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 72565.43 #<br>Period: 2018<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 73952.64 #<br>Period: 2019<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 56826.95 #<br>Period: 2020<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 65202.72 #<br>Period: 2021<br>REMIND_21 region code: UKI<br>Countries in region: Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [176.69889248480141, 174.4172203962184, 172.16198494089866, 169.94738295500366, 167.79662416540506, 175.81726701116699, 135.38831087433124, 199.35285399523323, 218.7937989213946, 234.25433426674812, 209.37119964308013, 233.38523595213709, 300.94701333216182, 169.18706844472044, 151.23053157405968, 158.15804116461749, 147.06718368282799, 161.11324050405955, 189.9004201945076],
      "text": ["Exports - high technology: 176.7 #<br>Period: 2003<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 174.42 #<br>Period: 2004<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 172.16 #<br>Period: 2005<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 169.95 #<br>Period: 2006<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 167.8 #<br>Period: 2007<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 175.82 #<br>Period: 2008<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 135.39 #<br>Period: 2009<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 199.35 #<br>Period: 2010<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 218.79 #<br>Period: 2011<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 234.25 #<br>Period: 2012<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 209.37 #<br>Period: 2013<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 233.39 #<br>Period: 2014<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 300.95 #<br>Period: 2015<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 169.19 #<br>Period: 2016<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 151.23 #<br>Period: 2017<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 158.16 #<br>Period: 2018<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 147.07 #<br>Period: 2019<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 161.11 #<br>Period: 2020<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 189.9 #<br>Period: 2021<br>REMIND_21 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [169493.51000000001, 169493.50999999998, 169493.50999999998, 169493.51000000001, 169493.51000000001, 183022.57000000001, 158680.29000000001, 179569.60999999999, 202276.35999999999, 202764.81, 209260.63000000003, 215614.56999999998, 199429.95000000004, 205076.59, 195686.92000000001, 209722.67000000004, 208148.37000000002, 182351.76999999996, 211891.20999999999],
      "text": ["Exports - high technology: 169493.51 #<br>Period: 2003<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 169493.51 #<br>Period: 2004<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 169493.51 #<br>Period: 2005<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 169493.51 #<br>Period: 2006<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 169493.51 #<br>Period: 2007<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 183022.57 #<br>Period: 2008<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 158680.29 #<br>Period: 2009<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 179569.61 #<br>Period: 2010<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 202276.36 #<br>Period: 2011<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 202764.81 #<br>Period: 2012<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 209260.63 #<br>Period: 2013<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 215614.57 #<br>Period: 2014<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 199429.95 #<br>Period: 2015<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 205076.59 #<br>Period: 2016<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 195686.92 #<br>Period: 2017<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 209722.67 #<br>Period: 2018<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 208148.37 #<br>Period: 2019<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 182351.77 #<br>Period: 2020<br>REMIND_21 region code: DEU<br>Countries in region: Germany", "Exports - high technology: 211891.21 #<br>Period: 2021<br>REMIND_21 region code: DEU<br>Countries in region: Germany"],
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
      "y": [17465.624334746419, 17467.925988702489, 17470.320630129539, 17475.153633734357, 17481.739170721314, 18685.689193465412, 13883.655027976396, 14817.278813833929, 16386.376704945378, 14284.882860297441, 14086.7120415846, 14067.830632390884, 12606.351217506521, 12447.253792866006, 11542.776501216078, 11795.031925036852, 11950.316982545404, 12307.575828934068, 13736.545135607361],
      "text": ["Exports - high technology: 17465.62 #<br>Period: 2003<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 17467.93 #<br>Period: 2004<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 17470.32 #<br>Period: 2005<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 17475.15 #<br>Period: 2006<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 17481.74 #<br>Period: 2007<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 18685.69 #<br>Period: 2008<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 13883.66 #<br>Period: 2009<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 14817.28 #<br>Period: 2010<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 16386.38 #<br>Period: 2011<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 14284.88 #<br>Period: 2012<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 14086.71 #<br>Period: 2013<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 14067.83 #<br>Period: 2014<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 12606.35 #<br>Period: 2015<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 12447.25 #<br>Period: 2016<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 11542.78 #<br>Period: 2017<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 11795.03 #<br>Period: 2018<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 11950.32 #<br>Period: 2019<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 12307.58 #<br>Period: 2020<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Exports - high technology: 13736.55 #<br>Period: 2021<br>REMIND_21 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "y": [50857.784197802408, 50823.758054923594, 50759.145874236769, 50690.450356787427, 50639.131990814552, 49342.301762460876, 43889.26495199636, 44441.408225567415, 49182.983925591616, 46898.092372272244, 48453.464718800562, 51338.276268237074, 42527.140033429583, 44288.645341074502, 46670.74680696139, 51003.861310530738, 52981.68835136899, 53438.202935487163, 68029.730895714587],
      "text": ["Exports - high technology: 50857.78 #<br>Period: 2003<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 50823.76 #<br>Period: 2004<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 50759.15 #<br>Period: 2005<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 50690.45 #<br>Period: 2006<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 50639.13 #<br>Period: 2007<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 49342.3 #<br>Period: 2008<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 43889.26 #<br>Period: 2009<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 44441.41 #<br>Period: 2010<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 49182.98 #<br>Period: 2011<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 46898.09 #<br>Period: 2012<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 48453.46 #<br>Period: 2013<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 51338.28 #<br>Period: 2014<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 42527.14 #<br>Period: 2015<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 44288.65 #<br>Period: 2016<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 46670.75 #<br>Period: 2017<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 51003.86 #<br>Period: 2018<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 52981.69 #<br>Period: 2019<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 53438.2 #<br>Period: 2020<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg", "Exports - high technology: 68029.73 #<br>Period: 2021<br>REMIND_21 region code: EWN<br>Countries in region: Austria; Netherlands; Belgium; Luxembourg"],
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
      "y": [85762.574759396099, 85762.692515472387, 85762.816083282247, 85762.923661251116, 85762.990873633345, 98746.271828456185, 87877.527045920986, 105228.70452196494, 111866.94393585183, 114050.14125044337, 118697.35120929632, 120575.64840192528, 109597.4387656498, 108734.14581559933, 108769.82442843392, 117564.22217881348, 120523.43483770125, 87112.597386112699, 97519.35943122863],
      "text": ["Exports - high technology: 85762.57 #<br>Period: 2003<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 85762.69 #<br>Period: 2004<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 85762.82 #<br>Period: 2005<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 85762.92 #<br>Period: 2006<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 85762.99 #<br>Period: 2007<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 98746.27 #<br>Period: 2008<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 87877.53 #<br>Period: 2009<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 105228.7 #<br>Period: 2010<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 111866.94 #<br>Period: 2011<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 114050.14 #<br>Period: 2012<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 118697.35 #<br>Period: 2013<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 120575.65 #<br>Period: 2014<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 109597.44 #<br>Period: 2015<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 108734.15 #<br>Period: 2016<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 108769.82 #<br>Period: 2017<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 117564.22 #<br>Period: 2018<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 120523.43 #<br>Period: 2019<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 87112.6 #<br>Period: 2020<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Exports - high technology: 97519.36 #<br>Period: 2021<br>REMIND_21 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "y": [335156.69171206449, 335157.06966627843, 335164.7313353286, 335168.55015396228, 335169.6264960636, 382522.22217865166, 351501.40855793591, 464146.77838871512, 528558.86017036811, 581099.23555408069, 641827.89697064424, 639829.86434504425, 638231.47502577712, 581792.43457779277, 641697.88900440081, 717411.54947370908, 701697.58901948621, 743059.48893680668, 924463.3182233593],
      "text": ["Exports - high technology: 335156.69 #<br>Period: 2003<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335157.07 #<br>Period: 2004<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335164.73 #<br>Period: 2005<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335168.55 #<br>Period: 2006<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335169.63 #<br>Period: 2007<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 382522.22 #<br>Period: 2008<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 351501.41 #<br>Period: 2009<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 464146.78 #<br>Period: 2010<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 528558.86 #<br>Period: 2011<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 581099.24 #<br>Period: 2012<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 641827.9 #<br>Period: 2013<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 639829.86 #<br>Period: 2014<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 638231.48 #<br>Period: 2015<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 581792.43 #<br>Period: 2016<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 641697.89 #<br>Period: 2017<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 717411.55 #<br>Period: 2018<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 701697.59 #<br>Period: 2019<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 743059.49 #<br>Period: 2020<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 924463.32 #<br>Period: 2021<br>REMIND_21 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [23037.343920864387, 23047.179041463703, 23049.462275423295, 23044.46808397313, 23049.02043661477, 24532.925299582548, 21362.604843815829, 24320.164966709704, 28039.067538846146, 24558.257227143746, 26519.668605674975, 27450.461019149592, 25158.642393726263, 25996.534424494082, 26639.604953228474, 27187.652242696342, 27181.822713262074, 27476.795784756752, 31126.832469997269],
      "text": ["Exports - high technology: 23037.34 #<br>Period: 2003<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 23047.18 #<br>Period: 2004<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 23049.46 #<br>Period: 2005<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 23044.47 #<br>Period: 2006<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 23049.02 #<br>Period: 2007<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 24532.93 #<br>Period: 2008<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 21362.6 #<br>Period: 2009<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 24320.16 #<br>Period: 2010<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 28039.07 #<br>Period: 2011<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 24558.26 #<br>Period: 2012<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 26519.67 #<br>Period: 2013<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 27450.46 #<br>Period: 2014<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 25158.64 #<br>Period: 2015<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 25996.53 #<br>Period: 2016<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 26639.6 #<br>Period: 2017<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 27187.65 #<br>Period: 2018<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 27181.82 #<br>Period: 2019<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 27476.8 #<br>Period: 2020<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus", "Exports - high technology: 31126.83 #<br>Period: 2021<br>REMIND_21 region code: ESC<br>Countries in region: Italy; Malta; Greece; Cyprus"],
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
      "l": 53.333333333333343
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 14.611872146118724
    },
    "title": {
      "text": "Exports - high technology (REMIND_21)",
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
      "range": [0, 924463.3182233593],
      "tickmode": "array",
      "ticktext": ["0", "250000", "500000", "750000"],
      "tickvals": [0, 250000, 499999.99999999994, 750000],
      "categoryorder": "array",
      "categoryarray": ["0", "250000", "500000", "750000"],
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
        "text": "#",
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
    "b55cc63436d": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c203b6693": {
      "y": {}
    }
  },
  "cur_data": "b55cc63436d",
  "visdat": {
    "b55cc63436d": ["function (y) ", "x"],
    "b55c203b6693": ["function (y) ", "x"]
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

  
