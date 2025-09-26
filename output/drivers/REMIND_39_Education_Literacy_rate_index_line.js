(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Education_Literacy_rate_index_line') 

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
      "y": [57.567709031736918, 57.510316644065007, 57.586377374581687, 57.347166568993046, 58.149553820624725, 58.964475691599318, 59.825143809177, 61.285835823422929, 62.455178371056824, 63.289768621915599, 63.331633292546506, 63.710917948687104, 63.724642746135927, 63.567992198155487, 63.601829432035288, 63.742649292110116, 63.474815056015224, 63.199803542566372, 63.073234772493294],
      "text": ["Literacy rate index: 57.57 % (0-100)<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Literacy rate index: 57.51 % (0-100)<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Literacy rate index: 57.59 % (0-100)<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 57.35 % (0-100)<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 58.15 % (0-100)<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 58.96 % (0-100)<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 59.83 % (0-100)<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 61.29 % (0-100)<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 62.46 % (0-100)<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.29 % (0-100)<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.33 % (0-100)<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.71 % (0-100)<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.72 % (0-100)<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.57 % (0-100)<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.6 % (0-100)<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.74 % (0-100)<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.47 % (0-100)<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.2 % (0-100)<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Literacy rate index: 63.07 % (0-100)<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [90.950000000000003, 90.950000000000003, 91.629999999999995, 91.730000000000004, 92.800000000000011, 92.930000000000007, 93.439999999999998, 93.069999999999993, 93.519999999999996, 94.230000000000004, 93.959999999999994, 94.560000000000002, 94.469999999999999, 94.860000000000014, 94.969999999999999, 95.379999999999995, 95.314999999999998, 95.25, 95.25],
      "text": ["Literacy rate index: 90.95 % (0-100)<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 90.95 % (0-100)<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 91.63 % (0-100)<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 91.73 % (0-100)<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 92.8 % (0-100)<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 92.93 % (0-100)<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 93.44 % (0-100)<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 93.07 % (0-100)<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 93.52 % (0-100)<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 94.23 % (0-100)<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 93.96 % (0-100)<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 94.56 % (0-100)<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 94.47 % (0-100)<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 94.86 % (0-100)<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 94.97 % (0-100)<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 95.38 % (0-100)<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 95.32 % (0-100)<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 95.25 % (0-100)<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Literacy rate index: 95.25 % (0-100)<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [88.620000000000005, 88.620000000000005, 89.120000000000019, 89.61999999999999, 90.010000000000005, 90.040000000000006, 90.300000000000011, 90.379999999999995, 91.409999999999997, 91.340000000000003, 91.47999999999999, 91.72999999999999, 92.049999999999997, 92.809999999999988, 93.079999999999984, 93.230000000000004, 93.22999999999999, 93.230000000000018, 93.22999999999999],
      "text": ["Literacy rate index: 88.62 % (0-100)<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 88.62 % (0-100)<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 89.12 % (0-100)<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 89.62 % (0-100)<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 90.01 % (0-100)<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 90.04 % (0-100)<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 90.3 % (0-100)<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 90.38 % (0-100)<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 91.41 % (0-100)<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 91.34 % (0-100)<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 91.48 % (0-100)<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 91.73 % (0-100)<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 92.05 % (0-100)<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 92.81 % (0-100)<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 93.08 % (0-100)<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 93.23 % (0-100)<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 93.23 % (0-100)<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 93.23 % (0-100)<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Literacy rate index: 93.23 % (0-100)<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [99.126313562642125, 99.149437708866529, 99.172658301896021, 99.197259607325861, 99.223369970415945, 99.24963101960148, 99.288563234219041, 99.327669654149304, 99.36701591828286, 99.377439047972246, 99.374614340035436, 99.40087933943181, 99.424490510540593, 99.447863390013637, 99.475566423823352, 99.507269211674767, 99.539172160321669, 99.544204648057899, 99.549239087003187],
      "text": ["Literacy rate index: 99.13 % (0-100)<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.15 % (0-100)<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.17 % (0-100)<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.2 % (0-100)<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.22 % (0-100)<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.25 % (0-100)<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.29 % (0-100)<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Literacy rate index: 99.33 % (0-100)<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Literacy rate index: 99.37 % (0-100)<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.38 % (0-100)<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.37 % (0-100)<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.4 % (0-100)<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.42 % (0-100)<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.45 % (0-100)<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.48 % (0-100)<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.51 % (0-100)<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.54 % (0-100)<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.54 % (0-100)<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Literacy rate index: 99.55 % (0-100)<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [97.970000000000013, 97.969999999999999, 97.969999999999999, 97.970000000000013, 97.969999999999999, 97.969999999999985, 98.052999999999997, 98.135999999999996, 98.219000000000008, 98.301999999999978, 98.385000000000005, 98.468000000000004, 98.551000000000016, 98.634, 98.716999999999999, 98.799999999999997, 98.799999999999997, 98.799999999999997, 98.799999999999997],
      "text": ["Literacy rate index: 97.97 % (0-100)<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 97.97 % (0-100)<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 97.97 % (0-100)<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 97.97 % (0-100)<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 97.97 % (0-100)<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 97.97 % (0-100)<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.05 % (0-100)<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.14 % (0-100)<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.22 % (0-100)<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.3 % (0-100)<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.39 % (0-100)<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.47 % (0-100)<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.55 % (0-100)<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.63 % (0-100)<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.72 % (0-100)<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.8 % (0-100)<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.8 % (0-100)<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.8 % (0-100)<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Literacy rate index: 98.8 % (0-100)<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [99.759000840575268, 99.758925880099866, 99.758812592563288, 99.758647682572473, 99.758480297463493, 99.764867741295149, 99.771207695496258, 99.782833289734725, 99.789488048579273, 99.795129717844006, 99.801463239860652, 99.804468282347017, 99.810054193705128, 99.81825384131831, 99.823949551410763, 99.830469014835984, 99.839612192575331, 99.842124278770072, 99.841681669111125],
      "text": ["Literacy rate index: 99.76 % (0-100)<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.76 % (0-100)<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.76 % (0-100)<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.76 % (0-100)<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.76 % (0-100)<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Literacy rate index: 99.76 % (0-100)<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.77 % (0-100)<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.78 % (0-100)<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.79 % (0-100)<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.8 % (0-100)<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.8 % (0-100)<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.8 % (0-100)<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Literacy rate index: 99.81 % (0-100)<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.82 % (0-100)<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.83 % (0-100)<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.84 % (0-100)<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.84 % (0-100)<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Literacy rate index: 99.84 % (0-100)<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [99.680000000000007, 99.680000000000007, 99.680000000000007, 99.680000000000007, 99.680000000000007, 99.679999999999993, 99.680000000000007, 99.680000000000007, 99.702727272727287, 99.725454545454554, 99.74818181818182, 99.7709090909091, 99.793636363636367, 99.816363636363633, 99.839090909090913, 99.861818181818194, 99.88454545454546, 99.907272727272755, 99.930000000000007],
      "text": ["Literacy rate index: 99.68 % (0-100)<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.68 % (0-100)<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.68 % (0-100)<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.68 % (0-100)<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.68 % (0-100)<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.68 % (0-100)<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.68 % (0-100)<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.68 % (0-100)<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.7 % (0-100)<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.73 % (0-100)<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.75 % (0-100)<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.77 % (0-100)<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.79 % (0-100)<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.82 % (0-100)<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.84 % (0-100)<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.86 % (0-100)<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.88 % (0-100)<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.91 % (0-100)<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Literacy rate index: 99.93 % (0-100)<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [87.946630906769329, 88.067840761339241, 88.230766320648058, 88.45346453379959, 88.674219706892941, 88.899685906338433, 88.984657531913669, 89.169117765825405, 89.086927348645276, 89.201070542787178, 89.304161875240681, 89.681210113958684, 90.162723108154736, 90.152124355605366, 90.829741422439824, 91.523253082151655, 92.230528473753566, 92.237043889820342, 92.239684077063586],
      "text": ["Literacy rate index: 87.95 % (0-100)<br>Period: 2003<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 88.07 % (0-100)<br>Period: 2004<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Norfolk Island; Niue; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 88.23 % (0-100)<br>Period: 2005<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 88.45 % (0-100)<br>Period: 2006<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 88.67 % (0-100)<br>Period: 2007<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 88.9 % (0-100)<br>Period: 2008<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; Northern Mariana Islands; American Samoa; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 88.98 % (0-100)<br>Period: 2009<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Micronesia, Federated States of; Tonga; Kiribati; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 89.17 % (0-100)<br>Period: 2010<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 89.09 % (0-100)<br>Period: 2011<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 89.2 % (0-100)<br>Period: 2012<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; French Polynesia; New Caledonia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 89.3 % (0-100)<br>Period: 2013<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 89.68 % (0-100)<br>Period: 2014<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Brunei Darussalam; Maldives; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Cook Islands; Palau; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 90.16 % (0-100)<br>Period: 2015<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Tuvalu; Nauru; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 90.15 % (0-100)<br>Period: 2016<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 90.83 % (0-100)<br>Period: 2017<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; New Caledonia; French Polynesia; Vanuatu; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 91.52 % (0-100)<br>Period: 2018<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 92.23 % (0-100)<br>Period: 2019<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Norfolk Island; Tokelau; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 92.24 % (0-100)<br>Period: 2020<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Wallis and Futuna; Nauru; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn", "Literacy rate index: 92.24 % (0-100)<br>Period: 2021<br>REMIND_39 region code: SEA<br>Countries in region: Viet Nam; Philippines; Thailand; Singapore; Myanmar; Malaysia; Sri Lanka; Cambodia; Papua New Guinea; Lao People's Democratic Republic; Timor-Leste; Fiji; Solomon Islands; Maldives; Brunei Darussalam; Vanuatu; New Caledonia; French Polynesia; Samoa; Guam; Kiribati; Micronesia, Federated States of; Tonga; American Samoa; Northern Mariana Islands; Marshall Islands; Palau; Cook Islands; Nauru; Wallis and Futuna; Tuvalu; Niue; Tokelau; Norfolk Island; United States Minor Outlying Islands; Pitcairn"],
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
      "y": [90.379999999999995, 90.38000000000001, 91.180000000000007, 91.980000000000018, 92.085000000000008, 92.189999999999998, 92.580000000000013, 92.694999999999979, 92.810000000000002, 93.579999999999998, 94.350000000000009, 95.120000000000005, 95.219999999999999, 95.379999999999995, 95.519999999999996, 95.659999999999997, 95.829999999999998, 96.000000000000014, 96],
      "text": ["Literacy rate index: 90.38 % (0-100)<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 90.38 % (0-100)<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 91.18 % (0-100)<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 91.98 % (0-100)<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 92.09 % (0-100)<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 92.19 % (0-100)<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 92.58 % (0-100)<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 92.69 % (0-100)<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 92.81 % (0-100)<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 93.58 % (0-100)<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 94.35 % (0-100)<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 95.12 % (0-100)<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 95.22 % (0-100)<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 95.38 % (0-100)<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 95.52 % (0-100)<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 95.66 % (0-100)<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 95.83 % (0-100)<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 96 % (0-100)<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Literacy rate index: 96 % (0-100)<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [48.137736846996006, 48.122357164082842, 48.106165736130379, 50.11358654262812, 49.171383386864939, 51.965108434288616, 52.784062194234778, 54.139083267760078, 54.908545014446645, 55.632258382092459, 56.291382170295556, 57.073083974895304, 58.977486370068917, 62.175861320520944, 62.645470332894838, 62.012557241871008, 62.83340613301386, 62.963980554247243, 63.027648922258479],
      "text": ["Literacy rate index: 48.14 % (0-100)<br>Period: 2003<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 48.12 % (0-100)<br>Period: 2004<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 48.11 % (0-100)<br>Period: 2005<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 50.11 % (0-100)<br>Period: 2006<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 49.17 % (0-100)<br>Period: 2007<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 51.97 % (0-100)<br>Period: 2008<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Nepal; Afghanistan; Bhutan", "Literacy rate index: 52.78 % (0-100)<br>Period: 2009<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 54.14 % (0-100)<br>Period: 2010<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 54.91 % (0-100)<br>Period: 2011<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 55.63 % (0-100)<br>Period: 2012<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 56.29 % (0-100)<br>Period: 2013<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 57.07 % (0-100)<br>Period: 2014<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 58.98 % (0-100)<br>Period: 2015<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 62.18 % (0-100)<br>Period: 2016<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 62.65 % (0-100)<br>Period: 2017<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 62.01 % (0-100)<br>Period: 2018<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 62.83 % (0-100)<br>Period: 2019<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 62.96 % (0-100)<br>Period: 2020<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan", "Literacy rate index: 63.03 % (0-100)<br>Period: 2021<br>REMIND_39 region code: OAS_central<br>Countries in region: Bangladesh; Pakistan; Afghanistan; Nepal; Bhutan"],
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
      "y": [87.370000000000005, 87.370000000000005, 88.230000000000004, 88.120000000000005, 88.659999999999997, 89.739999999999995, 90.819999999999993, 92.659999999999997, 94.109999999999999, 94.920000000000002, 95.260000000000005, 95.439999999999998, 95.599999999999994, 96.170000000000002, 96.150000000000006, 96.444999999999993, 96.739999999999995, 96.739999999999981, 96.739999999999995],
      "text": ["Literacy rate index: 87.37 % (0-100)<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 87.37 % (0-100)<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 88.23 % (0-100)<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 88.12 % (0-100)<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 88.66 % (0-100)<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 89.74 % (0-100)<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 90.82 % (0-100)<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 92.66 % (0-100)<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 94.11 % (0-100)<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 94.92 % (0-100)<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 95.26 % (0-100)<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 95.44 % (0-100)<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 95.6 % (0-100)<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 96.17 % (0-100)<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 96.15 % (0-100)<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 96.44 % (0-100)<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 96.74 % (0-100)<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 96.74 % (0-100)<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Literacy rate index: 96.74 % (0-100)<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [98.754829379266681, 98.755649676457423, 98.756594282023244, 98.757488145799542, 98.759022048418245, 98.760676533517881, 98.761596030409365, 98.762197474266713, 98.762577294041733, 98.778311853176405, 98.794070611593057, 98.809755155793255, 98.825303968443706, 98.840993149391565, 98.856416795066238, 98.872102125168638, 98.887972126493167, 98.90371316741934, 98.919553600355499],
      "text": ["Literacy rate index: 98.75 % (0-100)<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.76 % (0-100)<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.78 % (0-100)<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.79 % (0-100)<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.81 % (0-100)<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.83 % (0-100)<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.84 % (0-100)<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.86 % (0-100)<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.87 % (0-100)<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.89 % (0-100)<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.9 % (0-100)<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Literacy rate index: 98.92 % (0-100)<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "text": ["Literacy rate index: 96.64 % (0-100)<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 96.64 % (0-100)<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.12 % (0-100)<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.12 % (0-100)<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.29 % (0-100)<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.04 % (0-100)<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.09 % (0-100)<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.15 % (0-100)<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.17 % (0-100)<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.31 % (0-100)<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.5 % (0-100)<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.56 % (0-100)<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.64 % (0-100)<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.77 % (0-100)<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 97.9 % (0-100)<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 98.02 % (0-100)<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 98.12 % (0-100)<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 98.23 % (0-100)<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Literacy rate index: 98.27 % (0-100)<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [82.439999999999998, 82.439999999999998, 82.439999999999998, 82.329999999999998, 82.644999999999996, 82.959999999999994, 83.127499999999998, 83.294999999999987, 83.462499999999991, 83.629999999999995, 84.629999999999995, 84.709999999999994, 85.125, 85.540000000000006, 85.540000000000006, 85.540000000000006, 85.54000000000002, 85.540000000000006, 85.540000000000006],
      "text": ["Literacy rate index: 82.44 % (0-100)<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 82.44 % (0-100)<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 82.44 % (0-100)<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 82.33 % (0-100)<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 82.64 % (0-100)<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 82.96 % (0-100)<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 83.13 % (0-100)<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 83.29 % (0-100)<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 83.46 % (0-100)<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 83.63 % (0-100)<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 84.63 % (0-100)<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 84.71 % (0-100)<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 85.12 % (0-100)<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 85.54 % (0-100)<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 85.54 % (0-100)<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 85.54 % (0-100)<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 85.54 % (0-100)<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 85.54 % (0-100)<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Literacy rate index: 85.54 % (0-100)<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "text": ["Literacy rate index: 62.75 % (0-100)<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 62.75 % (0-100)<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 62.75 % (0-100)<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 62.75 % (0-100)<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 64.06 % (0-100)<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 65.37 % (0-100)<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 66.68 % (0-100)<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 67.99 % (0-100)<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Literacy rate index: 69.3 % (0-100)<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "y": [99.799999999999997, 99.799999999999997, 99.799999999999983, 99.799999999999983, 99.799999999999997, 99.799999999999983, 99.799999999999997, 99.799999999999983, 99.799999999999997, 99.799999999999997, 99.799999999999997, 99.799999999999997, 99.799999999999997, 99.799999999999997, 99.799999999999997, 99.799999999999983, 99.799999999999997, 99.799999999999997, 99.799999999999997],
      "text": ["Literacy rate index: 99.8 % (0-100)<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Literacy rate index: 99.8 % (0-100)<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [56.00160879995321, 57.148334807546213, 57.568560689407377, 59.259872302819154, 57.949552452231508, 56.596750471818837, 57.623079804970615, 58.714464825327617, 60.020240134031532, 61.240189595214666, 62.032789379045546, 62.946124304886851, 63.925875579062463, 65.006636195454803, 66.039895516762414, 66.764251185737734, 66.925496058704894, 67.019756544568509, 67.067492895989929],
      "text": ["Literacy rate index: 56 % (0-100)<br>Period: 2003<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Zimbabwe; Malawi; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Reunion; Djibouti; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 57.15 % (0-100)<br>Period: 2004<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Madagascar; Angola; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Lesotho; Namibia; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 57.57 % (0-100)<br>Period: 2005<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 59.26 % (0-100)<br>Period: 2006<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 57.95 % (0-100)<br>Period: 2007<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Cote d Ivoire; Angola; Madagascar; Cameroon; Burkina Faso; Malawi; Zimbabwe; Zambia; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 56.6 % (0-100)<br>Period: 2008<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Mozambique; Angola; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Lesotho; Botswana; Gambia; Gabon; Guinea-Bissau; Mauritius; Swaziland; Equatorial Guinea; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 57.62 % (0-100)<br>Period: 2009<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 58.71 % (0-100)<br>Period: 2010<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Central African Republic; Congo; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 60.02 % (0-100)<br>Period: 2011<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Lesotho; Gambia; Gabon; Guinea-Bissau; Mauritius; Equatorial Guinea; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 61.24 % (0-100)<br>Period: 2012<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Cote d Ivoire; Madagascar; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 62.03 % (0-100)<br>Period: 2013<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; South Sudan; Rwanda; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 62.95 % (0-100)<br>Period: 2014<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Zimbabwe; Senegal; Somalia; Guinea; Rwanda; South Sudan; Benin; Burundi; Togo; Sierra Leone; Congo; Central African Republic; Liberia; Eritrea; Namibia; Botswana; Gambia; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 63.93 % (0-100)<br>Period: 2015<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; South Sudan; Burundi; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 65.01 % (0-100)<br>Period: 2016<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Ghana; Angola; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Zimbabwe; Somalia; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 66.04 % (0-100)<br>Period: 2017<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Lesotho; Gabon; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 66.76 % (0-100)<br>Period: 2018<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 66.93 % (0-100)<br>Period: 2019<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Rwanda; Benin; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 67.02 % (0-100)<br>Period: 2020<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Senegal; Somalia; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha", "Literacy rate index: 67.07 % (0-100)<br>Period: 2021<br>REMIND_39 region code: AFC<br>Countries in region: Nigeria; Congo, the Democratic Republic of the; Ethiopia; Tanzania, United Republic of; Kenya; Uganda; Angola; Ghana; Mozambique; Madagascar; Cote d Ivoire; Cameroon; Burkina Faso; Malawi; Zambia; Somalia; Senegal; Zimbabwe; Guinea; Benin; Rwanda; Burundi; South Sudan; Togo; Sierra Leone; Congo; Liberia; Central African Republic; Eritrea; Namibia; Gambia; Botswana; Gabon; Lesotho; Guinea-Bissau; Equatorial Guinea; Mauritius; Swaziland; Djibouti; Reunion; Comoros; Cape Verde; Mayotte; Sao Tome and Principe; Seychelles; Saint Helena, Ascension and Tristan da Cunha"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(250,159,181,1)",
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
      "y": [88.719999999999999, 88.719999999999985, 88.720000000000013, 88.719999999999985, 88.719999999999985, 90.804999999999993, 92.890000000000001, 92.879999999999995, 93.099999999999994, 93.730000000000004, 93.935000000000002, 94.139999999999986, 94.370000000000005, 90.710000000000008, 87.049999999999997, 91.034999999999997, 95.019999999999982, 92.510000000000005, 89.999999999999986],
      "text": ["Literacy rate index: 88.72 % (0-100)<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 88.72 % (0-100)<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 88.72 % (0-100)<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 88.72 % (0-100)<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 88.72 % (0-100)<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 90.8 % (0-100)<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 92.89 % (0-100)<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 92.88 % (0-100)<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 93.1 % (0-100)<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 93.73 % (0-100)<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 93.94 % (0-100)<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 94.14 % (0-100)<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 94.37 % (0-100)<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 90.71 % (0-100)<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 87.05 % (0-100)<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 91.03 % (0-100)<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 95.02 % (0-100)<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 92.51 % (0-100)<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Literacy rate index: 90 % (0-100)<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [99.85943896199656, 99.859474260600848, 99.859608752155481, 99.859757459902411, 99.859849628612068, 99.859892194475435, 99.85987732825231, 99.859993130883112, 99.860169428751391, 99.859976481798938, 99.859738615305503, 99.859490671229835, 99.859282519211504, 99.859106626811368, 99.858946070776511, 99.858726998093104, 99.858410317261885, 99.85804588657389, 99.85764286323348],
      "text": ["Literacy rate index: 99.86 % (0-100)<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Literacy rate index: 99.86 % (0-100)<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "y": [82.859999999999999, 82.859999999999999, 84.145555555555561, 85.431111111111093, 86.716666666666654, 88.00222222222223, 89.287777777777777, 90.573333333333338, 91.858888888888899, 93.144444444444431, 94.430000000000007, 94.655000000000001, 94.879999999999995, 95.10499999999999, 95.329999999999998, 96.083333333333329, 96.836666666666673, 97.590000000000003, 97.590000000000003],
      "text": ["Literacy rate index: 82.86 % (0-100)<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 82.86 % (0-100)<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 84.15 % (0-100)<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 85.43 % (0-100)<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 86.72 % (0-100)<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 88 % (0-100)<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 89.29 % (0-100)<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 90.57 % (0-100)<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 91.86 % (0-100)<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 93.14 % (0-100)<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 94.43 % (0-100)<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 94.66 % (0-100)<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 94.88 % (0-100)<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 95.1 % (0-100)<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 95.33 % (0-100)<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 96.08 % (0-100)<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 96.84 % (0-100)<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 97.59 % (0-100)<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Literacy rate index: 97.59 % (0-100)<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "y": [95.119442421097474, 95.119431857210827, 95.119411843411271, 95.119383754210489, 95.11952904276292, 95.119688276380614, 95.119865024271775, 95.120036917089735, 95.323129477700633, 95.526123241650765, 95.729117613395047, 95.932112337818438, 96.135104782467295, 96.338094930110515, 96.541052452659315, 96.744011267911517, 96.946968986457847, 97.149925235379257, 97.149980679986641],
      "text": ["Literacy rate index: 95.12 % (0-100)<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.12 % (0-100)<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.32 % (0-100)<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.53 % (0-100)<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.73 % (0-100)<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 95.93 % (0-100)<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.14 % (0-100)<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.34 % (0-100)<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.54 % (0-100)<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.74 % (0-100)<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 96.95 % (0-100)<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 97.15 % (0-100)<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Literacy rate index: 97.15 % (0-100)<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [75.690606685055471, 75.756365885496393, 75.9601042163725, 76.267662599369913, 76.658615984955603, 76.990502347994337, 77.230306879245006, 77.402140676866097, 77.821177932113329, 78.169113003745707, 79.124159767296049, 80.121635169959717, 80.430630109212615, 80.694230785115849, 81.411288184442469, 81.393769080781937, 81.367720803541957, 81.273903877695176, 81.172590410583652],
      "text": ["Literacy rate index: 75.69 % (0-100)<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Literacy rate index: 75.76 % (0-100)<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Literacy rate index: 75.96 % (0-100)<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Literacy rate index: 76.27 % (0-100)<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Literacy rate index: 76.66 % (0-100)<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Literacy rate index: 76.99 % (0-100)<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Literacy rate index: 77.23 % (0-100)<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Literacy rate index: 77.4 % (0-100)<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Literacy rate index: 77.82 % (0-100)<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Literacy rate index: 78.17 % (0-100)<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Literacy rate index: 79.12 % (0-100)<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Literacy rate index: 80.12 % (0-100)<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Literacy rate index: 80.43 % (0-100)<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Literacy rate index: 80.69 % (0-100)<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Literacy rate index: 81.41 % (0-100)<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Literacy rate index: 81.39 % (0-100)<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Literacy rate index: 81.37 % (0-100)<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Literacy rate index: 81.27 % (0-100)<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Literacy rate index: 81.17 % (0-100)<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "y": [98.80517731465072, 98.805166431773102, 98.805101358809182, 98.806168976859908, 98.8073312706954, 98.808430513330464, 98.809404673140946, 98.810430079054512, 98.811433279243062, 98.874395396553112, 98.937508391035493, 99.000317795112579, 99.062621028551646, 99.124946812815921, 99.187125692610493, 99.249016139850013, 99.310366709869356, 99.310693097327345, 99.311665075513588],
      "text": ["Literacy rate index: 98.81 % (0-100)<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.81 % (0-100)<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.81 % (0-100)<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.81 % (0-100)<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.81 % (0-100)<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.81 % (0-100)<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.81 % (0-100)<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.81 % (0-100)<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.81 % (0-100)<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.87 % (0-100)<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 98.94 % (0-100)<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 99 % (0-100)<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 99.06 % (0-100)<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 99.12 % (0-100)<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 99.19 % (0-100)<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 99.25 % (0-100)<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 99.31 % (0-100)<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 99.31 % (0-100)<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Literacy rate index: 99.31 % (0-100)<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "y": [94.309746832153152, 94.315517185477759, 94.321066216768628, 94.326535444952214, 94.332140651736495, 94.337664631390922, 94.343164014600717, 94.349187963710477, 94.356379612210603, 94.371752849372427, 94.388075413120944, 94.404265950147732, 94.420675454646997, 94.436229804622172, 94.45081612353583, 94.465356372274073, 94.47938921040388, 94.494016606329254, 94.513989768743002],
      "text": ["Literacy rate index: 94.31 % (0-100)<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.32 % (0-100)<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.32 % (0-100)<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.33 % (0-100)<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.33 % (0-100)<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.34 % (0-100)<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.34 % (0-100)<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.35 % (0-100)<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.36 % (0-100)<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.37 % (0-100)<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.39 % (0-100)<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.4 % (0-100)<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.42 % (0-100)<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.44 % (0-100)<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.45 % (0-100)<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.47 % (0-100)<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.48 % (0-100)<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.49 % (0-100)<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Literacy rate index: 94.51 % (0-100)<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Literacy rate index (REMIND_39)",
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
      "ticktext": ["50", "60", "70", "80", "90", "100"],
      "tickvals": [50, 60, 70, 80, 90, 100],
      "categoryorder": "array",
      "categoryarray": ["50", "60", "70", "80", "90", "100"],
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
    "b55c59ef6cea": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c576c5ee3": {
      "y": {}
    }
  },
  "cur_data": "b55c59ef6cea",
  "visdat": {
    "b55c59ef6cea": ["function (y) ", "x"],
    "b55c576c5ee3": ["function (y) ", "x"]
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

  
