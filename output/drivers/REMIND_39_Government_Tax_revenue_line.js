(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('REMIND_39_Government_Tax_revenue_line') 

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
      "y": [9.535419589249134, 9.6161739837478457, 9.8217399990371508, 9.8777347680541627, 9.7362935409147564, 10.114093049963241, 9.7661137885659688, 9.7826821744835417, 9.7544723699049474, 9.6433442084576502, 9.7351040165943719, 9.6794513720638022, 10.062109475470496, 10.481888957094002, 10.598822048901409, 10.216390373773089, 10.392925249871691, 9.872055365321355, 10.559519346116955],
      "text": ["Tax revenue: 9.54 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.62 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.82 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.88 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.74 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 10.11 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.77 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.78 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.75 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.64 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.74 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.68 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 10.06 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 10.48 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 10.6 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 10.22 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 10.39 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 9.87 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland", "Tax revenue: 10.56 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NEN_other<br>Countries in region: Switzerland; Liechtenstein; Iceland"],
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
      "y": [13.23, 13.34, 13.300000000000002, 13.35, 13.33, 12.390000000000001, 12.300000000000001, 11.730000000000002, 11.800000000000002, 11.660000000000002, 11.619999999999999, 11.809999999999999, 12.390000000000001, 12.499999999999998, 12.609999999999999, 13.06, 12.74, 13.569999999999999, 13.26],
      "text": ["Tax revenue: 13.23 % (GDP)<br>Period: 2003<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 13.34 % (GDP)<br>Period: 2004<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 13.3 % (GDP)<br>Period: 2005<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 13.35 % (GDP)<br>Period: 2006<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 13.33 % (GDP)<br>Period: 2007<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 12.39 % (GDP)<br>Period: 2008<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 12.3 % (GDP)<br>Period: 2009<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 11.73 % (GDP)<br>Period: 2010<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 11.8 % (GDP)<br>Period: 2011<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 11.66 % (GDP)<br>Period: 2012<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 11.62 % (GDP)<br>Period: 2013<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 11.81 % (GDP)<br>Period: 2014<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 12.39 % (GDP)<br>Period: 2015<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 12.5 % (GDP)<br>Period: 2016<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 12.61 % (GDP)<br>Period: 2017<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 13.06 % (GDP)<br>Period: 2018<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 12.74 % (GDP)<br>Period: 2019<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 13.57 % (GDP)<br>Period: 2020<br>REMIND_39 region code: CAN<br>Countries in region: Canada", "Tax revenue: 13.26 % (GDP)<br>Period: 2021<br>REMIND_39 region code: CAN<br>Countries in region: Canada"],
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
      "y": [12.915452536088971, 13.219367259505431, 13.693633775424013, 14.35512064546227, 14.716319564070773, 15.187410472865562, 14.783016696451439, 13.907487618995422, 13.473025311730741, 13.799113938506849, 14.066189509131869, 13.567440029897629, 13.663059105792852, 13.678672045816732, 13.755607296360914, 13.246274384986505, 13.475867115300465, 13.430497695973347, 13.334876729459912],
      "text": ["Tax revenue: 12.92 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Tax revenue: 13.22 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Tunisia; Chad; Libya; Mauritania; Western Sahara", "Tax revenue: 13.69 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 14.36 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 14.72 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 15.19 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 14.78 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.91 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.47 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.8 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 14.07 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.57 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Algeria; Sudan; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.66 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.68 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.76 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.25 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.48 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.43 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara", "Tax revenue: 13.33 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NAF<br>Countries in region: Egypt; Sudan; Algeria; Morocco; Niger; Mali; Chad; Tunisia; Libya; Mauritania; Western Sahara"],
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
      "y": [25.139337720390337, 25.110757244089179, 25.695348849165661, 25.780425870989205, 25.063332694922853, 25.432263886286897, 23.289427856039016, 21.414946678201552, 21.197572000909361, 22.043525365026223, 22.710082682952066, 22.690219184893675, 22.769898511455619, 23.080270282564868, 22.947682329460275, 23.885563748735954, 24.161786006088445, 23.359744726186666, 23.994203467133975],
      "text": ["Tax revenue: 25.14 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 25.11 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 25.7 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 25.78 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 25.06 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 25.43 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 23.29 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 21.41 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 21.2 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 22.04 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 22.71 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 22.69 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 22.77 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 23.08 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 22.95 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 23.89 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 24.16 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 23.36 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand", "Tax revenue: 23.99 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ANZ<br>Countries in region: Australia; Christmas Island; Cocos (Keeling) Islands; Heard Island and McDonald Islands; New Zealand"],
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
      "y": [9.5800000000000001, 9.5800000000000001, 9.5800000000000001, 9.5800000000000001, 9.5800000000000001, 9.5799999999999983, 9.2300000000000004, 9.6799999999999997, 9.6199999999999992, 9.3499999999999996, 9.8800000000000008, 10.24, 12.350000000000001, 13.119999999999999, 12.689999999999998, 12.709999999999999, 12.779999999999999, 13.9, 13.449999999999999],
      "text": ["Tax revenue: 9.58 % (GDP)<br>Period: 2003<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.58 % (GDP)<br>Period: 2004<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.58 % (GDP)<br>Period: 2005<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.58 % (GDP)<br>Period: 2006<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.58 % (GDP)<br>Period: 2007<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.58 % (GDP)<br>Period: 2008<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.23 % (GDP)<br>Period: 2009<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.68 % (GDP)<br>Period: 2010<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.62 % (GDP)<br>Period: 2011<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.35 % (GDP)<br>Period: 2012<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 9.88 % (GDP)<br>Period: 2013<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 10.24 % (GDP)<br>Period: 2014<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 12.35 % (GDP)<br>Period: 2015<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 13.12 % (GDP)<br>Period: 2016<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 12.69 % (GDP)<br>Period: 2017<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 12.71 % (GDP)<br>Period: 2018<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 12.78 % (GDP)<br>Period: 2019<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 13.9 % (GDP)<br>Period: 2020<br>REMIND_39 region code: MEX<br>Countries in region: Mexico", "Tax revenue: 13.45 % (GDP)<br>Period: 2021<br>REMIND_39 region code: MEX<br>Countries in region: Mexico"],
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
      "y": [25.869999999999997, 27.320000000000004, 28.200000000000003, 28.800000000000004, 28.079999999999998, 27.760000000000005, 25.850000000000001, 26.739999999999998, 27.550000000000001, 26.869999999999997, 25.010000000000002, 23.41, 22.09, 21.960000000000001, 22.290000000000003, 23.309999999999999, 23.280000000000001, 21.25, 25.75],
      "text": ["Tax revenue: 25.87 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 27.32 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 28.2 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 28.8 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 28.08 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 27.76 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 25.85 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 26.74 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 27.55 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 26.87 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 25.01 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 23.41 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 22.09 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 21.96 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 22.29 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 23.31 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 23.28 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 21.25 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen", "Tax revenue: 25.75 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NOR<br>Countries in region: Norway; Svalbard and Jan Mayen"],
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
      "y": [14.25, 14.250000000000002, 14.25, 14.25, 14.25, 14.249999999999998, 14.25, 14.25, 14.850000000000001, 14.329999999999998, 14.129999999999999, 13.49, 13.629999999999999, 13.709999999999999, 13.609999999999998, 13.940000000000001, 13.739999999999998, 12.720000000000002, 14.319999999999999],
      "text": ["Tax revenue: 14.25 % (GDP)<br>Period: 2003<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.25 % (GDP)<br>Period: 2004<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.25 % (GDP)<br>Period: 2005<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.25 % (GDP)<br>Period: 2006<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.25 % (GDP)<br>Period: 2007<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.25 % (GDP)<br>Period: 2008<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.25 % (GDP)<br>Period: 2009<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.25 % (GDP)<br>Period: 2010<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.85 % (GDP)<br>Period: 2011<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.33 % (GDP)<br>Period: 2012<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.13 % (GDP)<br>Period: 2013<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 13.49 % (GDP)<br>Period: 2014<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 13.63 % (GDP)<br>Period: 2015<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 13.71 % (GDP)<br>Period: 2016<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 13.61 % (GDP)<br>Period: 2017<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 13.94 % (GDP)<br>Period: 2018<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 13.74 % (GDP)<br>Period: 2019<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 12.72 % (GDP)<br>Period: 2020<br>REMIND_39 region code: BRA<br>Countries in region: Brazil", "Tax revenue: 14.32 % (GDP)<br>Period: 2021<br>REMIND_39 region code: BRA<br>Countries in region: Brazil"],
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
      "y": [14.851826476852485, 14.957448904765766, 17.536963204182467, 18.149972985661261, 17.51023343968965, 18.409637270220866, 17.147407014277629, 16.477283210509786, 18.30017833196095, 18.1057249696116, 17.75927799928801, 18.309225804872415, 20.430880143602863, 20.032221043837644, 20.529354960742936, 20.495797886210951, 19.921187010749652, 19.602230215652455, 19.321343392481907],
      "text": ["Tax revenue: 14.85 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 14.96 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 17.54 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 18.15 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 17.51 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 18.41 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 17.15 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Tax revenue: 16.48 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Bosnia and Herzegovina; Georgia; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; San Marino; Monaco; Holy See (Vatican City State)", "Tax revenue: 18.3 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 18.11 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 17.76 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 18.31 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 20.43 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 20.03 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 20.53 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 20.5 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 19.92 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 19.6 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)", "Tax revenue: 19.32 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NES_EU<br>Countries in region: Ukraine; Albania; Serbia; Georgia; Bosnia and Herzegovina; Moldova, Republic of; Macedonia, the former Yugoslav Republic of; Montenegro; Andorra; Monaco; San Marino; Holy See (Vatican City State)"],
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
      "y": [13.69, 12.970000000000001, 13.31, 13.73, 14.82, 14.5, 13.65, 13.44, 13.85, 14.08, 13.630000000000001, 13.239999999999998, 13.160000000000002, 13.98, 14.49, 15.540000000000001, 15.199999999999999, 14.860000000000001, 16.729999999999997],
      "text": ["Tax revenue: 13.69 % (GDP)<br>Period: 2003<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 12.97 % (GDP)<br>Period: 2004<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 13.31 % (GDP)<br>Period: 2005<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 13.73 % (GDP)<br>Period: 2006<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 14.82 % (GDP)<br>Period: 2007<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 14.5 % (GDP)<br>Period: 2008<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 13.65 % (GDP)<br>Period: 2009<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 13.44 % (GDP)<br>Period: 2010<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 13.85 % (GDP)<br>Period: 2011<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 14.08 % (GDP)<br>Period: 2012<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 13.63 % (GDP)<br>Period: 2013<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 13.24 % (GDP)<br>Period: 2014<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 13.16 % (GDP)<br>Period: 2015<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 13.98 % (GDP)<br>Period: 2016<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 14.49 % (GDP)<br>Period: 2017<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 15.54 % (GDP)<br>Period: 2018<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 15.2 % (GDP)<br>Period: 2019<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 14.86 % (GDP)<br>Period: 2020<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of", "Tax revenue: 16.73 % (GDP)<br>Period: 2021<br>REMIND_39 region code: KOR<br>Countries in region: Korea, Republic of"],
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
      "y": [14.050561134154499, 14.387076065099249, 14.794479029187732, 15.221564389215771, 15.325508282909274, 15.546506924929917, 14.248194143286327, 13.899753700050793, 14.027349340981559, 13.56246913799194, 14.286311774492548, 13.804936171192089, 13.395873423901199, 13.193053748009618, 12.402552905224228, 13.873641114476944, 13.22859282739379, 13.229056902717135, 13.579044050475016],
      "text": ["Tax revenue: 14.05 % (GDP)<br>Period: 2003<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 14.39 % (GDP)<br>Period: 2004<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 14.79 % (GDP)<br>Period: 2005<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.22 % (GDP)<br>Period: 2006<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.33 % (GDP)<br>Period: 2007<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Kyrgyzstan; Turkmenistan; Armenia; Mongolia", "Tax revenue: 15.55 % (GDP)<br>Period: 2008<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 14.25 % (GDP)<br>Period: 2009<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.9 % (GDP)<br>Period: 2010<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 14.03 % (GDP)<br>Period: 2011<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.56 % (GDP)<br>Period: 2012<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 14.29 % (GDP)<br>Period: 2013<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Belarus; Azerbaijan; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.8 % (GDP)<br>Period: 2014<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Armenia; Mongolia", "Tax revenue: 13.4 % (GDP)<br>Period: 2015<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 13.19 % (GDP)<br>Period: 2016<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 12.4 % (GDP)<br>Period: 2017<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 13.87 % (GDP)<br>Period: 2018<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Belarus; Tajikistan; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 13.23 % (GDP)<br>Period: 2019<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 13.23 % (GDP)<br>Period: 2020<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia", "Tax revenue: 13.58 % (GDP)<br>Period: 2021<br>REMIND_39 region code: CAS<br>Countries in region: Kazakhstan; Uzbekistan; Korea, Democratic People's Republic of; Azerbaijan; Tajikistan; Belarus; Turkmenistan; Kyrgyzstan; Mongolia; Armenia"],
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
      "y": [13.309999999999999, 13.23, 16.620000000000001, 16.57, 16.550000000000001, 15.819999999999999, 12.960000000000001, 13.050000000000001, 13.949999999999999, 13.75, 12.930000000000001, 13.260000000000002, 10.640000000000001, 9.1799999999999997, 10.289999999999999, 11.470000000000001, 10.94, 10.800000000000001, 11.65],
      "text": ["Tax revenue: 13.31 % (GDP)<br>Period: 2003<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 13.23 % (GDP)<br>Period: 2004<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 16.62 % (GDP)<br>Period: 2005<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 16.57 % (GDP)<br>Period: 2006<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 16.55 % (GDP)<br>Period: 2007<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 15.82 % (GDP)<br>Period: 2008<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 12.96 % (GDP)<br>Period: 2009<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 13.05 % (GDP)<br>Period: 2010<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 13.95 % (GDP)<br>Period: 2011<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 13.75 % (GDP)<br>Period: 2012<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 12.93 % (GDP)<br>Period: 2013<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 13.26 % (GDP)<br>Period: 2014<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 10.64 % (GDP)<br>Period: 2015<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 9.18 % (GDP)<br>Period: 2016<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 10.29 % (GDP)<br>Period: 2017<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 11.47 % (GDP)<br>Period: 2018<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 10.94 % (GDP)<br>Period: 2019<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 10.8 % (GDP)<br>Period: 2020<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation", "Tax revenue: 11.65 % (GDP)<br>Period: 2021<br>REMIND_39 region code: RUS<br>Countries in region: Russian Federation"],
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
      "y": [12.390000000000001, 12.330000000000002, 12.574999999999999, 12.82, 13.065000000000001, 13.31, 11.060000000000002, 10.539999999999999, 11.16, 11.380000000000001, 11.289999999999999, 10.84, 10.75, 10.34, 9.8800000000000008, 10.23, 9.75, 8.3100000000000005, 9.0899999999999981],
      "text": ["Tax revenue: 12.39 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 12.33 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 12.57 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 12.82 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 13.07 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 13.31 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 11.06 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 10.54 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 11.16 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 11.38 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 11.29 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 10.84 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 10.75 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 10.34 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 9.88 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 10.23 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 9.75 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 8.31 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia", "Tax revenue: 9.09 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IDN<br>Countries in region: Indonesia"],
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
      "y": [17.5, 17.5, 17.5, 17.5, 17.500000000000004, 17.5, 18.07, 18.859999999999999, 18.57, 18.109999999999999, 18.359999999999999, 17.949999999999999, 18.18, 18.27, 17.719999999999999, 17.27, 16.52, 17.66, 17.859999999999999],
      "text": ["Tax revenue: 17.5 % (GDP)<br>Period: 2003<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.5 % (GDP)<br>Period: 2004<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.5 % (GDP)<br>Period: 2005<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.5 % (GDP)<br>Period: 2006<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.5 % (GDP)<br>Period: 2007<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.5 % (GDP)<br>Period: 2008<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 18.07 % (GDP)<br>Period: 2009<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 18.86 % (GDP)<br>Period: 2010<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 18.57 % (GDP)<br>Period: 2011<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 18.11 % (GDP)<br>Period: 2012<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 18.36 % (GDP)<br>Period: 2013<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.95 % (GDP)<br>Period: 2014<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 18.18 % (GDP)<br>Period: 2015<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 18.27 % (GDP)<br>Period: 2016<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.72 % (GDP)<br>Period: 2017<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.27 % (GDP)<br>Period: 2018<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 16.52 % (GDP)<br>Period: 2019<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.66 % (GDP)<br>Period: 2020<br>REMIND_39 region code: TUR<br>Countries in region: Turkey", "Tax revenue: 17.86 % (GDP)<br>Period: 2021<br>REMIND_39 region code: TUR<br>Countries in region: Turkey"],
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
      "y": [19.248087072057682, 19.09773237180929, 19.024186917803711, 19.404031897315207, 19.511834532594847, 19.585931313414783, 18.177368828887104, 18.356891820656898, 18.390695335417547, 18.919571914809413, 19.464846803780247, 19.542885693705262, 20.232851918397728, 19.454758601926134, 18.746713613960086, 17.99742813466348, 18.144604571674595, 17.890580092869861, 18.064185697624943],
      "text": ["Tax revenue: 19.25 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.1 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.02 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.4 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.51 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.59 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.18 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.36 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.39 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.92 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.46 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.54 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 20.23 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 19.45 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.75 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.14 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 17.89 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia", "Tax revenue: 18.06 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ECS<br>Countries in region: Romania; Hungary; Bulgaria; Croatia; Slovenia"],
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
      "text": ["Tax revenue: 13.37 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.37 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.47 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.56 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.57 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.5 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.12 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.22 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.49 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 13.41 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.27 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.7 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.77 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.34 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.28 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.75 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.26 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 15.08 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal", "Tax revenue: 16.28 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ESW<br>Countries in region: Spain; Portugal"],
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
      "y": [5.2000000000000002, 5.2000000000000002, 6.6600000000000001, 6.2199999999999998, 5.9400000000000004, 6.2000000000000002, 7.3600000000000003, 7.3600000000000003, 7.3600000000000012, 7.3600000000000003, 7.3600000000000012, 7.3600000000000012, 7.3600000000000003, 7.3599999999999994, 7.3600000000000003, 7.3600000000000012, 7.3600000000000012, 7.3600000000000003, 7.3600000000000003],
      "text": ["Tax revenue: 5.2 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 5.2 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 6.66 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 6.22 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 5.94 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 6.2 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of", "Tax revenue: 7.36 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IRN<br>Countries in region: Iran, Islamic Republic of"],
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
      "text": ["Tax revenue: 9.11 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 9.57 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 10.08 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 11.13 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 12.11 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 10.98 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 9.81 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 10.39 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 10.18 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 10.84 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 11 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 9.98 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 10.57 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 11.15 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 11.39 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IND<br>Countries in region: India", "Tax revenue: 12.02 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IND<br>Countries in region: India"],
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
      "text": ["Tax revenue: 9.39 % (GDP)<br>Period: 2003<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 9.54 % (GDP)<br>Period: 2004<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 10.68 % (GDP)<br>Period: 2005<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 11.31 % (GDP)<br>Period: 2006<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 11.29 % (GDP)<br>Period: 2007<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 10.28 % (GDP)<br>Period: 2008<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 7.9 % (GDP)<br>Period: 2009<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 8.56 % (GDP)<br>Period: 2010<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 9.54 % (GDP)<br>Period: 2011<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 9.76 % (GDP)<br>Period: 2012<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 10.48 % (GDP)<br>Period: 2013<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 10.94 % (GDP)<br>Period: 2014<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 11.24 % (GDP)<br>Period: 2015<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 10.92 % (GDP)<br>Period: 2016<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 11.58 % (GDP)<br>Period: 2017<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 9.99 % (GDP)<br>Period: 2018<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 9.96 % (GDP)<br>Period: 2019<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 10.34 % (GDP)<br>Period: 2020<br>REMIND_39 region code: USA<br>Countries in region: United States", "Tax revenue: 11.44 % (GDP)<br>Period: 2021<br>REMIND_39 region code: USA<br>Countries in region: United States"],
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
      "text": ["Tax revenue: 16.72 % (GDP)<br>Period: 2003<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 15.69 % (GDP)<br>Period: 2004<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.47 % (GDP)<br>Period: 2005<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 17.16 % (GDP)<br>Period: 2006<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 18.09 % (GDP)<br>Period: 2007<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 18.27 % (GDP)<br>Period: 2008<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.05 % (GDP)<br>Period: 2009<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.62 % (GDP)<br>Period: 2010<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.78 % (GDP)<br>Period: 2011<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.1 % (GDP)<br>Period: 2012<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 15.75 % (GDP)<br>Period: 2013<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 15.72 % (GDP)<br>Period: 2014<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 15.71 % (GDP)<br>Period: 2015<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.32 % (GDP)<br>Period: 2016<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 16.85 % (GDP)<br>Period: 2017<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 17.36 % (GDP)<br>Period: 2018<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 17.34 % (GDP)<br>Period: 2019<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 17.48 % (GDP)<br>Period: 2020<br>REMIND_39 region code: POL<br>Countries in region: Poland", "Tax revenue: 19.15 % (GDP)<br>Period: 2021<br>REMIND_39 region code: POL<br>Countries in region: Poland"],
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
      "y": [20.489999999999998, 21.699999999999999, 22.969999999999999, 24.379999999999995, 24.809999999999999, 24.32, 21.890000000000001, 22.519999999999996, 22.870000000000001, 23.350000000000001, 23.829999999999998, 24.43, 25.050000000000004, 24.829999999999998, 24.77, 24.890000000000001, 24.870000000000001, 23.239999999999998, 25.849999999999998],
      "text": ["Tax revenue: 20.49 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 21.7 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 22.97 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 24.38 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 24.81 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 24.32 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 21.89 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 22.52 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 22.87 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 23.35 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 23.83 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 24.43 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 25.05 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 24.83 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 24.77 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 24.89 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 24.87 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 23.24 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa", "Tax revenue: 25.85 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ZAF<br>Countries in region: South Africa"],
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
      "y": [11, 10.43, 10.66, 10.85, 11.33, 11.470000000000001, 11.610000000000001, 11.19, 11.48, 11.619999999999999, 11.609999999999999, 11.48, 11.48, 11.300000000000001, 11.42, 11.460000000000001, 11.41, 10.57, 11.18],
      "text": ["Tax revenue: 11 % (GDP)<br>Period: 2003<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.43 % (GDP)<br>Period: 2004<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.66 % (GDP)<br>Period: 2005<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.85 % (GDP)<br>Period: 2006<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.33 % (GDP)<br>Period: 2007<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.47 % (GDP)<br>Period: 2008<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.61 % (GDP)<br>Period: 2009<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.19 % (GDP)<br>Period: 2010<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.48 % (GDP)<br>Period: 2011<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.62 % (GDP)<br>Period: 2012<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.61 % (GDP)<br>Period: 2013<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.48 % (GDP)<br>Period: 2014<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.48 % (GDP)<br>Period: 2015<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.3 % (GDP)<br>Period: 2016<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.42 % (GDP)<br>Period: 2017<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.46 % (GDP)<br>Period: 2018<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.41 % (GDP)<br>Period: 2019<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 10.57 % (GDP)<br>Period: 2020<br>REMIND_39 region code: DEU<br>Countries in region: Germany", "Tax revenue: 11.18 % (GDP)<br>Period: 2021<br>REMIND_39 region code: DEU<br>Countries in region: Germany"],
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
      "text": ["Tax revenue: 17.06 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.23 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.07 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.87 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.97 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.32 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 15.48 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 15.22 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 15.84 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.01 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.45 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.41 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 16.93 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.12 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.19 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.06 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.37 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.16 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia", "Tax revenue: 17.06 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ECE_other<br>Countries in region: Czech Republic; Slovakia; Lithuania; Latvia; Estonia"],
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
      "text": ["Tax revenue: 24.16 % (GDP)<br>Period: 2003<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 25.07 % (GDP)<br>Period: 2004<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 25.46 % (GDP)<br>Period: 2005<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 26.82 % (GDP)<br>Period: 2006<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 25.94 % (GDP)<br>Period: 2007<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 23.81 % (GDP)<br>Period: 2008<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 22.06 % (GDP)<br>Period: 2009<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 21.84 % (GDP)<br>Period: 2010<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 21.84 % (GDP)<br>Period: 2011<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 22.52 % (GDP)<br>Period: 2012<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 22.93 % (GDP)<br>Period: 2013<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 23.08 % (GDP)<br>Period: 2014<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 18.73 % (GDP)<br>Period: 2015<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 19.08 % (GDP)<br>Period: 2016<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 18.2 % (GDP)<br>Period: 2017<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 18.04 % (GDP)<br>Period: 2018<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 17.71 % (GDP)<br>Period: 2019<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 16.2 % (GDP)<br>Period: 2020<br>REMIND_39 region code: IRL<br>Countries in region: Ireland", "Tax revenue: 17.16 % (GDP)<br>Period: 2021<br>REMIND_39 region code: IRL<br>Countries in region: Ireland"],
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
      "y": [2.5299999999999998, 2.5299999999999998, 2.5299999999999994, 2.5299999999999998, 2.5299999999999998, 2.5299999999999998, 2.5299999999999994, 2.5299999999999998, 2.3100000000000001, 2.5199999999999996, 2.7100000000000004, 2.73, 3.2599999999999998, 3.2799999999999994, 3.2599999999999998, 8.2899999999999991, 7.0000000000000009, 8.2400000000000002, 8.2400000000000002],
      "text": ["Tax revenue: 2.53 % (GDP)<br>Period: 2003<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.53 % (GDP)<br>Period: 2004<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.53 % (GDP)<br>Period: 2005<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.53 % (GDP)<br>Period: 2006<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.53 % (GDP)<br>Period: 2007<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.53 % (GDP)<br>Period: 2008<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.53 % (GDP)<br>Period: 2009<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.53 % (GDP)<br>Period: 2010<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.31 % (GDP)<br>Period: 2011<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.52 % (GDP)<br>Period: 2012<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.71 % (GDP)<br>Period: 2013<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 2.73 % (GDP)<br>Period: 2014<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 3.26 % (GDP)<br>Period: 2015<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 3.28 % (GDP)<br>Period: 2016<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 3.26 % (GDP)<br>Period: 2017<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 8.29 % (GDP)<br>Period: 2018<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 7 % (GDP)<br>Period: 2019<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 8.24 % (GDP)<br>Period: 2020<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia", "Tax revenue: 8.24 % (GDP)<br>Period: 2021<br>REMIND_39 region code: SAU<br>Countries in region: Saudi Arabia"],
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
      "text": ["Tax revenue: 26.51 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.93 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 28.02 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.58 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 28.36 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.27 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.67 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.56 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.58 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.65 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 26.96 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.71 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.26 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.64 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.66 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.27 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.71 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.08 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands", "Tax revenue: 27.61 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ENC<br>Countries in region: Sweden; Denmark; Greenland; Faroe Islands; Finland; Aland Islands"],
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
      "text": ["Tax revenue: 22.12 % (GDP)<br>Period: 2003<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.16 % (GDP)<br>Period: 2004<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.3 % (GDP)<br>Period: 2005<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.58 % (GDP)<br>Period: 2006<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.12 % (GDP)<br>Period: 2007<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.01 % (GDP)<br>Period: 2008<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 20.7 % (GDP)<br>Period: 2009<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 21.95 % (GDP)<br>Period: 2010<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 21.82 % (GDP)<br>Period: 2011<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 22.53 % (GDP)<br>Period: 2012<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.21 % (GDP)<br>Period: 2013<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.16 % (GDP)<br>Period: 2014<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.2 % (GDP)<br>Period: 2015<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.06 % (GDP)<br>Period: 2016<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.63 % (GDP)<br>Period: 2017<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 24.17 % (GDP)<br>Period: 2018<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 24.51 % (GDP)<br>Period: 2019<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 24.64 % (GDP)<br>Period: 2020<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories", "Tax revenue: 23.96 % (GDP)<br>Period: 2021<br>REMIND_39 region code: FRA<br>Countries in region: France; Saint Pierre and Miquelon; French Southern Territories"],
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
      "text": ["Tax revenue: 24.56 % (GDP)<br>Period: 2003<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.15 % (GDP)<br>Period: 2004<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.49 % (GDP)<br>Period: 2005<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.77 % (GDP)<br>Period: 2006<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.99 % (GDP)<br>Period: 2007<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 26.46 % (GDP)<br>Period: 2008<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.17 % (GDP)<br>Period: 2009<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.27 % (GDP)<br>Period: 2010<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.82 % (GDP)<br>Period: 2011<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.09 % (GDP)<br>Period: 2012<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.12 % (GDP)<br>Period: 2013<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.87 % (GDP)<br>Period: 2014<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.05 % (GDP)<br>Period: 2015<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.44 % (GDP)<br>Period: 2016<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.58 % (GDP)<br>Period: 2017<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.53 % (GDP)<br>Period: 2018<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 25.09 % (GDP)<br>Period: 2019<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 24.8 % (GDP)<br>Period: 2020<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory", "Tax revenue: 26.22 % (GDP)<br>Period: 2021<br>REMIND_39 region code: GBR<br>Countries in region: United Kingdom; Jersey; Isle of Man; Guernsey; Gibraltar; British Indian Ocean Territory"],
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
      "text": ["Tax revenue: 26.65 % (GDP)<br>Period: 2003<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.31 % (GDP)<br>Period: 2004<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.51 % (GDP)<br>Period: 2005<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.05 % (GDP)<br>Period: 2006<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.39 % (GDP)<br>Period: 2007<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.08 % (GDP)<br>Period: 2008<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.23 % (GDP)<br>Period: 2009<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.28 % (GDP)<br>Period: 2010<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.43 % (GDP)<br>Period: 2011<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.93 % (GDP)<br>Period: 2012<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.42 % (GDP)<br>Period: 2013<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.42 % (GDP)<br>Period: 2014<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 26.83 % (GDP)<br>Period: 2015<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.42 % (GDP)<br>Period: 2016<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.42 % (GDP)<br>Period: 2017<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.42 % (GDP)<br>Period: 2018<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.58 % (GDP)<br>Period: 2019<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 24.42 % (GDP)<br>Period: 2020<br>REMIND_39 region code: AUT<br>Countries in region: Austria", "Tax revenue: 25.84 % (GDP)<br>Period: 2021<br>REMIND_39 region code: AUT<br>Countries in region: Austria"],
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
      "text": ["Tax revenue: 8.57 % (GDP)<br>Period: 2003<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.57 % (GDP)<br>Period: 2004<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.57 % (GDP)<br>Period: 2005<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.06 % (GDP)<br>Period: 2006<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.78 % (GDP)<br>Period: 2007<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.11 % (GDP)<br>Period: 2008<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.32 % (GDP)<br>Period: 2009<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.22 % (GDP)<br>Period: 2010<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.32 % (GDP)<br>Period: 2011<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 10.27 % (GDP)<br>Period: 2012<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.92 % (GDP)<br>Period: 2013<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.69 % (GDP)<br>Period: 2014<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.39 % (GDP)<br>Period: 2015<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.13 % (GDP)<br>Period: 2016<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.43 % (GDP)<br>Period: 2017<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 9.06 % (GDP)<br>Period: 2018<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.5 % (GDP)<br>Period: 2019<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 8.1 % (GDP)<br>Period: 2020<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao", "Tax revenue: 7.98 % (GDP)<br>Period: 2021<br>REMIND_39 region code: CHA<br>Countries in region: China; Taiwan, Province of China; Hong Kong; Macao"],
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
      "y": [7.2993755348539402, 7.6497784272411895, 7.9198442107038236, 8.0686636488880836, 8.1861750861188618, 7.1033257834224308, 6.759685159857689, 6.6924495074790222, 6.5163328859015568, 6.2660764793111099, 6.2798492668952024, 6.4835609422764904, 6.5801430273547012, 6.9464759016742228, 7.4681042549991092, 7.6520748077412266, 7.3483272089522771, 7.1249098837676081, 7.2154601661598878],
      "text": ["Tax revenue: 7.3 % (GDP)<br>Period: 2003<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Tax revenue: 7.65 % (GDP)<br>Period: 2004<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Tax revenue: 7.92 % (GDP)<br>Period: 2005<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; Lebanon; United Arab Emirates; Palestine, State of; Oman; Kuwait; Bahrain; Qatar", "Tax revenue: 8.07 % (GDP)<br>Period: 2006<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Tax revenue: 8.19 % (GDP)<br>Period: 2007<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Tax revenue: 7.1 % (GDP)<br>Period: 2008<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Tax revenue: 6.76 % (GDP)<br>Period: 2009<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Tax revenue: 6.69 % (GDP)<br>Period: 2010<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Tax revenue: 6.52 % (GDP)<br>Period: 2011<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Kuwait; Oman; Qatar; Bahrain", "Tax revenue: 6.27 % (GDP)<br>Period: 2012<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Tax revenue: 6.28 % (GDP)<br>Period: 2013<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Israel; Jordan; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Tax revenue: 6.48 % (GDP)<br>Period: 2014<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; Israel; United Arab Emirates; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Tax revenue: 6.58 % (GDP)<br>Period: 2015<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Tax revenue: 6.95 % (GDP)<br>Period: 2016<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Tax revenue: 7.47 % (GDP)<br>Period: 2017<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Tax revenue: 7.65 % (GDP)<br>Period: 2018<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Oman; Palestine, State of; Kuwait; Qatar; Bahrain", "Tax revenue: 7.35 % (GDP)<br>Period: 2019<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Tax revenue: 7.12 % (GDP)<br>Period: 2020<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain", "Tax revenue: 7.22 % (GDP)<br>Period: 2021<br>REMIND_39 region code: MEA_other<br>Countries in region: Iraq; Yemen; Syrian Arab Republic; Jordan; United Arab Emirates; Israel; Lebanon; Palestine, State of; Oman; Kuwait; Qatar; Bahrain"],
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
      "text": ["Tax revenue: 22.98 % (GDP)<br>Period: 2003<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 22.45 % (GDP)<br>Period: 2004<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 22.22 % (GDP)<br>Period: 2005<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.58 % (GDP)<br>Period: 2006<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.03 % (GDP)<br>Period: 2007<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.51 % (GDP)<br>Period: 2008<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.76 % (GDP)<br>Period: 2009<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.69 % (GDP)<br>Period: 2010<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 23.67 % (GDP)<br>Period: 2011<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.96 % (GDP)<br>Period: 2012<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 25.14 % (GDP)<br>Period: 2013<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.85 % (GDP)<br>Period: 2014<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.74 % (GDP)<br>Period: 2015<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 25.07 % (GDP)<br>Period: 2016<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.68 % (GDP)<br>Period: 2017<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.25 % (GDP)<br>Period: 2018<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.58 % (GDP)<br>Period: 2019<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.75 % (GDP)<br>Period: 2020<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta", "Tax revenue: 24.92 % (GDP)<br>Period: 2021<br>REMIND_39 region code: ITA<br>Countries in region: Italy; Malta"],
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
      "text": ["Tax revenue: 20.35 % (GDP)<br>Period: 2003<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.17 % (GDP)<br>Period: 2004<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.23 % (GDP)<br>Period: 2005<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.6 % (GDP)<br>Period: 2006<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.6 % (GDP)<br>Period: 2007<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.14 % (GDP)<br>Period: 2008<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.94 % (GDP)<br>Period: 2009<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.99 % (GDP)<br>Period: 2010<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.23 % (GDP)<br>Period: 2011<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 19.41 % (GDP)<br>Period: 2012<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 19.69 % (GDP)<br>Period: 2013<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 20.64 % (GDP)<br>Period: 2014<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.16 % (GDP)<br>Period: 2015<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 21.91 % (GDP)<br>Period: 2016<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 23.09 % (GDP)<br>Period: 2017<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 23.06 % (GDP)<br>Period: 2018<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 24.05 % (GDP)<br>Period: 2019<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 24.37 % (GDP)<br>Period: 2020<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands", "Tax revenue: 24.35 % (GDP)<br>Period: 2021<br>REMIND_39 region code: NLD<br>Countries in region: Netherlands"],
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
      "text": ["Tax revenue: 25.06 % (GDP)<br>Period: 2003<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.48 % (GDP)<br>Period: 2004<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.46 % (GDP)<br>Period: 2005<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.23 % (GDP)<br>Period: 2006<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.77 % (GDP)<br>Period: 2007<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.18 % (GDP)<br>Period: 2008<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 23.78 % (GDP)<br>Period: 2009<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.44 % (GDP)<br>Period: 2010<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.9 % (GDP)<br>Period: 2011<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 25.76 % (GDP)<br>Period: 2012<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 26.11 % (GDP)<br>Period: 2013<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 26.06 % (GDP)<br>Period: 2014<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.3 % (GDP)<br>Period: 2015<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 22.89 % (GDP)<br>Period: 2016<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 23.5 % (GDP)<br>Period: 2017<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 24.14 % (GDP)<br>Period: 2018<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 22.83 % (GDP)<br>Period: 2019<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 22.18 % (GDP)<br>Period: 2020<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg", "Tax revenue: 23.26 % (GDP)<br>Period: 2021<br>REMIND_39 region code: BELUX<br>Countries in region: Belgium; Luxembourg"],
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
      "text": ["Tax revenue: 21.21 % (GDP)<br>Period: 2003<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 20.67 % (GDP)<br>Period: 2004<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 21.99 % (GDP)<br>Period: 2005<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 21.86 % (GDP)<br>Period: 2006<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 22.75 % (GDP)<br>Period: 2007<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 22.53 % (GDP)<br>Period: 2008<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 20.1 % (GDP)<br>Period: 2009<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 20.64 % (GDP)<br>Period: 2010<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 22.55 % (GDP)<br>Period: 2011<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.19 % (GDP)<br>Period: 2012<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.07 % (GDP)<br>Period: 2013<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.86 % (GDP)<br>Period: 2014<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.8 % (GDP)<br>Period: 2015<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 26.36 % (GDP)<br>Period: 2016<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 26.19 % (GDP)<br>Period: 2017<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 26.64 % (GDP)<br>Period: 2018<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 25.87 % (GDP)<br>Period: 2019<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 24.52 % (GDP)<br>Period: 2020<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus", "Tax revenue: 25.13 % (GDP)<br>Period: 2021<br>REMIND_39 region code: GRC<br>Countries in region: Greece; Cyprus"],
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
      "text": "Tax revenue (REMIND_39)",
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
    "b55c1f4c45d6": {
      "x": {},
      "colour": {},
      "text": {},
      "y": {},
      "type": "scatter"
    },
    "b55c701a4866": {
      "y": {}
    }
  },
  "cur_data": "b55c1f4c45d6",
  "visdat": {
    "b55c1f4c45d6": ["function (y) ", "x"],
    "b55c701a4866": ["function (y) ", "x"]
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

  
