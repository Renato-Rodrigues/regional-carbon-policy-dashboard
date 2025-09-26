(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_12_Trade_Exports___high_technology_line') 

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
      "text": ["Exports - high technology: 18859.1 #<br>Period: 2003<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18844.45 #<br>Period: 2004<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18827.62 #<br>Period: 2005<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18806.96 #<br>Period: 2006<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18761.76 #<br>Period: 2007<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18708.79 #<br>Period: 2008<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 15897.13 #<br>Period: 2009<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 16665.23 #<br>Period: 2010<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 17578.05 #<br>Period: 2011<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 20641.97 #<br>Period: 2012<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 20043.45 #<br>Period: 2013<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18149.67 #<br>Period: 2014<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 17660.27 #<br>Period: 2015<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 16598.69 #<br>Period: 2016<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 16794.57 #<br>Period: 2017<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18879.04 #<br>Period: 2018<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 19867.68 #<br>Period: 2019<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 16269.66 #<br>Period: 2020<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Exports - high technology: 18592.73 #<br>Period: 2021<br>REMIND_12 region code: CAZ<br>Countries in region: Canada; Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [3301.7242949328356, 3310.7067998458492, 3320.2011149476307, 3328.9209401011781, 3347.1591499545607, 3791.9089751311758, 3467.9963208974596, 3806.1916003648676, 4334.3479454086255, 4624.3918305126781, 5372.9313801605622, 5724.3487178916093, 5218.6744152809852, 4987.9424925096218, 4030.3098029597058, 3903.0102749466296, 4177.0986844816716, 4103.3048122959171, 5436.0196111789173],
      "text": ["Exports - high technology: 3301.72 #<br>Period: 2003<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 3310.71 #<br>Period: 2004<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 3320.2 #<br>Period: 2005<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 3328.92 #<br>Period: 2006<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 3347.16 #<br>Period: 2007<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 3791.91 #<br>Period: 2008<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 3468 #<br>Period: 2009<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Exports - high technology: 3806.19 #<br>Period: 2010<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State); Turkey", "Exports - high technology: 4334.35 #<br>Period: 2011<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 4624.39 #<br>Period: 2012<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 5372.93 #<br>Period: 2013<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 5724.35 #<br>Period: 2014<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 5218.67 #<br>Period: 2015<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 4987.94 #<br>Period: 2016<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 4030.31 #<br>Period: 2017<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 3903.01 #<br>Period: 2018<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 4177.1 #<br>Period: 2019<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 4103.3 #<br>Period: 2020<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey", "Exports - high technology: 5436.02 #<br>Period: 2021<br>REMIND_12 region code: NEU<br>Countries in region: Norway; Svalbard and Jan Mayen; Switzerland; Liechtenstein; Iceland; Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State); Turkey"],
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
      "text": ["Exports - high technology: 358.07 #<br>Period: 2003<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - high technology: 356.87 #<br>Period: 2004<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Exports - high technology: 355.52 #<br>Period: 2005<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 348.05 #<br>Period: 2006<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 336.91 #<br>Period: 2007<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 576.64 #<br>Period: 2008<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 609.22 #<br>Period: 2009<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 636.23 #<br>Period: 2010<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 675.34 #<br>Period: 2011<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 637.03 #<br>Period: 2012<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 622.78 #<br>Period: 2013<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 718.92 #<br>Period: 2014<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 752.11 #<br>Period: 2015<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 651.82 #<br>Period: 2016<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 656.92 #<br>Period: 2017<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 698.71 #<br>Period: 2018<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 729.72 #<br>Period: 2019<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 768.55 #<br>Period: 2020<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Exports - high technology: 1013.97 #<br>Period: 2021<br>REMIND_12 region code: MEA<br>Countries in region: Iran, Islamic Republic of; Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain; Saudi Arabia; Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [2657.3104336346637, 2644.6424620860807, 2632.1491232407898, 2620.0035209700441, 2608.8523515007992, 3243.892290158878, 2821.3682908221076, 3135.3919678191769, 3407.6510259736856, 4565.6790893581374, 5352.400410544049, 5996.3906297657777, 6497.6353358352599, 6287.5151414420634, 5783.9010062998823, 5593.3105348594345, 5963.8805428374089, 3710.2297309494938, 5830.2344000118637],
      "text": ["Exports - high technology: 2657.31 #<br>Period: 2003<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 2644.64 #<br>Period: 2004<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 2632.15 #<br>Period: 2005<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 2620 #<br>Period: 2006<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 2608.85 #<br>Period: 2007<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Exports - high technology: 3243.89 #<br>Period: 2008<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 2821.37 #<br>Period: 2009<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 3135.39 #<br>Period: 2010<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 3407.65 #<br>Period: 2011<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 4565.68 #<br>Period: 2012<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 5352.4 #<br>Period: 2013<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 5996.39 #<br>Period: 2014<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Exports - high technology: 6497.64 #<br>Period: 2015<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 6287.52 #<br>Period: 2016<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 5783.9 #<br>Period: 2017<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 5593.31 #<br>Period: 2018<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 5963.88 #<br>Period: 2019<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 3710.23 #<br>Period: 2020<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Exports - high technology: 5830.23 #<br>Period: 2021<br>REMIND_12 region code: REF<br>Countries in region: Russian Federation; Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "text": ["Exports - high technology: 13981.17 #<br>Period: 2003<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13927.12 #<br>Period: 2004<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13872.25 #<br>Period: 2005<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13827.91 #<br>Period: 2006<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13787.03 #<br>Period: 2007<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 14089.72 #<br>Period: 2008<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Exports - high technology: 13413.42 #<br>Period: 2009<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 15740.53 #<br>Period: 2010<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 16234.14 #<br>Period: 2011<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 16915.61 #<br>Period: 2012<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 18242.35 #<br>Period: 2013<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 18941.38 #<br>Period: 2014<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 19369.42 #<br>Period: 2015<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 19334.39 #<br>Period: 2016<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 22901.02 #<br>Period: 2017<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 25304.19 #<br>Period: 2018<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 23935.4 #<br>Period: 2019<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 25600.45 #<br>Period: 2020<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Exports - high technology: 30002.28 #<br>Period: 2021<br>REMIND_12 region code: OAS<br>Countries in region: Indonesia; Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn; Korea, Republic of; Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "text": ["Exports - high technology: 128315.04 #<br>Period: 2003<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2004<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2005<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2006<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 128315.04 #<br>Period: 2007<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 130246.56 #<br>Period: 2008<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 103707.83 #<br>Period: 2009<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 129808.1 #<br>Period: 2010<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 133086.55 #<br>Period: 2011<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 129203.44 #<br>Period: 2012<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 111060.3 #<br>Period: 2013<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 107367.02 #<br>Period: 2014<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 98249.84 #<br>Period: 2015<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 99101.2 #<br>Period: 2016<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 106183.79 #<br>Period: 2017<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 110741.5 #<br>Period: 2018<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 103896.71 #<br>Period: 2019<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 102751.09 #<br>Period: 2020<br>REMIND_12 region code: JPN<br>Countries in region: Japan", "Exports - high technology: 116513.86 #<br>Period: 2021<br>REMIND_12 region code: JPN<br>Countries in region: Japan"],
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
      "y": [11215.04987377446, 11215.050382646428, 11215.050861907766, 11215.051314115917, 11215.05174288399, 11215.052146526681, 11215.052546392724, 10659.454283265128, 14503.855500632648, 13873.787449679625, 17938.378470608695, 18326.298104302201, 14583.477056080366, 14261.318165452156, 15101.726679047184, 20182.165955358447, 23470.489309014181, 21583.15383679869, 27446.591776712055],
      "text": ["Exports - high technology: 11215.05 #<br>Period: 2003<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.05 #<br>Period: 2004<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.05 #<br>Period: 2005<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.05 #<br>Period: 2006<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.05 #<br>Period: 2007<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.05 #<br>Period: 2008<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 11215.05 #<br>Period: 2009<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 10659.45 #<br>Period: 2010<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 14503.86 #<br>Period: 2011<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 13873.79 #<br>Period: 2012<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 17938.38 #<br>Period: 2013<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 18326.3 #<br>Period: 2014<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 14583.48 #<br>Period: 2015<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 14261.32 #<br>Period: 2016<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 15101.73 #<br>Period: 2017<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 20182.17 #<br>Period: 2018<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 23470.49 #<br>Period: 2019<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 21583.15 #<br>Period: 2020<br>REMIND_12 region code: IND<br>Countries in region: India", "Exports - high technology: 27446.59 #<br>Period: 2021<br>REMIND_12 region code: IND<br>Countries in region: India"],
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
      "text": ["Exports - high technology: 240506.01 #<br>Period: 2003<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2004<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2005<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2006<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 240506.01 #<br>Period: 2007<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 243004.98 #<br>Period: 2008<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 150884.06 #<br>Period: 2009<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 166039.75 #<br>Period: 2010<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 166463.7 #<br>Period: 2011<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 169065.94 #<br>Period: 2012<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 169222.37 #<br>Period: 2013<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 175881.16 #<br>Period: 2014<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 175243.76 #<br>Period: 2015<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 173921.75 #<br>Period: 2016<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 154545.03 #<br>Period: 2017<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 153808.47 #<br>Period: 2018<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 153923.49 #<br>Period: 2019<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 141538.56 #<br>Period: 2020<br>REMIND_12 region code: USA<br>Countries in region: United States", "Exports - high technology: 169217.26 #<br>Period: 2021<br>REMIND_12 region code: USA<br>Countries in region: United States"],
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
      "y": [176.69889248480141, 174.4172203962184, 172.16198494089866, 169.94738295500366, 167.79662416540506, 175.81726701116699, 135.38831087433124, 199.35285399523323, 218.7937989213946, 234.25433426674812, 209.37119964308013, 233.38523595213709, 300.94701333216182, 169.18706844472044, 151.23053157405968, 158.15804116461749, 147.06718368282799, 161.11324050405955, 189.9004201945076],
      "text": ["Exports - high technology: 176.7 #<br>Period: 2003<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 174.42 #<br>Period: 2004<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 172.16 #<br>Period: 2005<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 169.95 #<br>Period: 2006<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 167.8 #<br>Period: 2007<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 175.82 #<br>Period: 2008<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 135.39 #<br>Period: 2009<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 199.35 #<br>Period: 2010<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 218.79 #<br>Period: 2011<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 234.25 #<br>Period: 2012<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 209.37 #<br>Period: 2013<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 233.39 #<br>Period: 2014<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 300.95 #<br>Period: 2015<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 169.19 #<br>Period: 2016<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 151.23 #<br>Period: 2017<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 158.16 #<br>Period: 2018<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 147.07 #<br>Period: 2019<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 161.11 #<br>Period: 2020<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Exports - high technology: 189.9 #<br>Period: 2021<br>REMIND_12 region code: SSA<br>Countries in region: South Africa; Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
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
      "y": [57896.769746146856, 57848.576957014993, 57800.33215865495, 57743.538388654044, 57680.90987922834, 61952.763377395677, 52869.360707935739, 61338.247102400725, 68036.888339032957, 67281.847011051912, 69854.221765271417, 72044.445190725513, 66848.092348613733, 68381.667638361512, 67401.093779472183, 72037.46086205871, 72481.225214652673, 61772.43821749348, 72028.825728449316],
      "text": ["Exports - high technology: 57896.77 #<br>Period: 2003<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 57848.58 #<br>Period: 2004<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 57800.33 #<br>Period: 2005<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 57743.54 #<br>Period: 2006<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 57680.91 #<br>Period: 2007<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 61952.76 #<br>Period: 2008<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 52869.36 #<br>Period: 2009<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 61338.25 #<br>Period: 2010<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68036.89 #<br>Period: 2011<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 67281.85 #<br>Period: 2012<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 69854.22 #<br>Period: 2013<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 72044.45 #<br>Period: 2014<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 66848.09 #<br>Period: 2015<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 68381.67 #<br>Period: 2016<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 67401.09 #<br>Period: 2017<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 72037.46 #<br>Period: 2018<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 72481.23 #<br>Period: 2019<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 61772.44 #<br>Period: 2020<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Exports - high technology: 72028.83 #<br>Period: 2021<br>REMIND_12 region code: EUR<br>Countries in region: Germany; France; Saint Pierre and Miquelon; French Southern Territories; Italy; Malta; Greece; Cyprus; Spain; Portugal; Austria; Netherlands; Belgium; Luxembourg; Poland; Czech Republic; Slovakia; Lithuania; Latvia; Estonia; Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands; Romania; Hungary; Bulgaria; Croatia; Slovenia; Ireland; United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "y": [335156.69171206449, 335157.06966627843, 335164.7313353286, 335168.55015396228, 335169.6264960636, 382522.22217865166, 351501.40855793591, 464146.77838871512, 528558.86017036811, 581099.23555408069, 641827.89697064424, 639829.86434504425, 638231.47502577712, 581792.43457779277, 641697.88900440081, 717411.54947370908, 701697.58901948621, 743059.48893680668, 924463.3182233593],
      "text": ["Exports - high technology: 335156.69 #<br>Period: 2003<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335157.07 #<br>Period: 2004<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335164.73 #<br>Period: 2005<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335168.55 #<br>Period: 2006<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 335169.63 #<br>Period: 2007<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 382522.22 #<br>Period: 2008<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 351501.41 #<br>Period: 2009<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 464146.78 #<br>Period: 2010<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 528558.86 #<br>Period: 2011<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 581099.24 #<br>Period: 2012<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 641827.9 #<br>Period: 2013<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 639829.86 #<br>Period: 2014<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 638231.48 #<br>Period: 2015<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 581792.43 #<br>Period: 2016<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 641697.89 #<br>Period: 2017<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 717411.55 #<br>Period: 2018<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 701697.59 #<br>Period: 2019<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 743059.49 #<br>Period: 2020<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Exports - high technology: 924463.32 #<br>Period: 2021<br>REMIND_12 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "text": "Exports - high technology (REMIND_12)",
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
    "b55c5aad67a1": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c33c2ec4": {
      "y": {}
    }
  },
  "cur_data": "b55c5aad67a1",
  "visdat": {
    "b55c5aad67a1": ["function (y) ", "x"],
    "b55c33c2ec4": ["function (y) ", "x"]
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

  
